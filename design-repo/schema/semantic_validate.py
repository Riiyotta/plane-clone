#!/usr/bin/env python3
"""Semantic validator for design-repo PageSpecs (everything JSON Schema cannot express).

    python3 schema/semantic_validate.py <pagespec.json> [...] [--json] [--no-schema]

Layers, in order:
  1. Draft-07 schema (schema/pagespec.schema.json) when the `jsonschema` package is available.
  2. Template cross-reference: the declared template's real node list (membership, variants observed
     for that template, required nodes, hero policy, repeat/maxPerPage keyed on (section, variant), slot order).
  3. Rhythm rules from compatibility/graph.json (same rule ids, severities read from the graph).
  4. Contract rules: onePerPage / mustBeFirst / mustBeLast / homeRouteOnly, content fields, maxWords/maxItems,
     motion pattern + reducedMotionFallback, asset roles per mode.
  5. Retrieval pin (RETRIEVAL_INELIGIBLE) at node, runtime-attachment, contract and allowlist level.
  6. Token policy for node.style (unknown token, raw colour, arbitrary spacing, unsupported font,
     invalid theme/token combination, token not allowed for the field).
  7. Generated-mode consequences: GENERATED_MODE_BRAND / _URL / _STORE / _CTA / _PERSON / _CUSTOMER /
     _RATING / _COPY / _ASSET, using patterns grepped from the real source (assets/source-brand.json)
     and hashed copy fingerprints (assets/source-copy-fingerprints.json).
Exit status 1 when any error is reported. Standard library + optional jsonschema.
"""
import sys
sys.dont_write_bytecode = True
import collections, hashlib, json, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)

# --- pinned in code: editing the JSON registries alone cannot loosen these -------------------------------
PINNED_AVAILABILITY = {
    'brand-wordmark': 'blocked-for-generation', 'product-wordmark': 'blocked-for-generation', 'customer-logo': 'blocked-for-generation',
    'competitor-logo': 'blocked-for-generation', 'integration-logo': 'blocked-for-generation', 'compliance-badge': 'blocked-for-generation',
    'app-store-mark': 'blocked-for-generation', 'social-platform-icon': 'reference-only', 'product-screenshot': 'reference-only',
    'product-video': 'reference-only', 'decorative-artwork': 'reference-only', 'person-photo': 'blocked-for-generation',
    'wallpaper-artwork': 'reference-only', 'ui-icon': 'generation-safe', 'brand-mark-placeholder': 'generation-safe',
    'logo-placeholder': 'generation-safe', 'fictional-avatar': 'generation-safe', 'rating-placeholder': 'generation-safe',
    'generated-product-visual': 'generation-safe', 'generated-background': 'generation-safe', 'badge-placeholder': 'generation-safe',
    'store-mark-placeholder': 'generation-safe', 'qr-placeholder': 'generation-safe', 'social-icon-generic': 'generation-safe',
    'placeholder-url': 'generation-safe', 'original-copy': 'generation-safe',
}
RETRIEVAL_INELIGIBLE = frozenset({'runtime.cookie-consent', 'runtime.detail-drawer', 'runtime.lightbox', 'runtime.mega-menu', 'runtime.mobile-nav', 'runtime.tooltip'})
RUNTIME_NAME_PATTERN = re.compile(r'(?i)(runtime|cookie|consent|modal|dialog|drawer|overlay|preloader|cursor|lightbox|tooltip|toast|mega-menu|mobile-nav|ticker)')
AUTO_ADVANCING = frozenset({'video-segment-tabs', 'auto-advance-tabs', 'logo-marquee'})
SLOT_ORDER = {'shell-top': 0, 'opener': 1, 'body': 2, 'shell-bottom': 3}
GRAPH_RULES_IMPLEMENTED = frozenset({'SHELL_FIRST_LAST', 'ONE_HERO', 'HERO_OPENS', 'SLOT_ORDER', 'ONE_CTA_BANNER', 'CTA_BANNER_CLOSES', 'NO_ADJACENT_CTA',
                                     'FAQ_TAIL', 'MOTION_BUDGET', 'TEMPLATE_MEMBERSHIP', 'TEMPLATE_REQUIRED', 'TEMPLATE_REPEAT', 'ROUTE_TEMPLATE', 'HOME_ROUTE_ONLY'})
MOTION_BUDGET_MAX = 3


def _load(rel, repo):
    with open(os.path.join(repo, rel)) as f:
        return json.load(f)


class Ctx:
    """Everything the validator reads from the repo, loaded once."""
    def __init__(self, repo=REPO):
        self.repo = repo
        self.contracts = {}
        for name in sorted(os.listdir(os.path.join(repo, 'sections'))):
            if name.endswith('.json'):
                c = _load(f'sections/{name}', repo)
                self.contracts[c['id']] = c
        self.templates = _load('templates/templates.json', repo)['templates']
        self.graph = _load('compatibility/graph.json', repo)
        self.rule_severity = {r['id']: r['severity'] for r in self.graph['rules']}
        self.graph_rules = {r['id']: r for r in self.graph['rules']}
        self.motion = _load('tokens/00-foundation/motion-patterns.json', repo)
        self.roles = {r['id']: r for r in _load('assets/asset-roles.json', repo)['roles']}
        self.allowlist = _load('tokens/llm/component-allowlist.json', repo)
        self.policy = _load('tokens/llm/token-policy.json', repo)
        self.catalog = _load('tokens/llm/token-catalog.json', repo)['tokens']
        self.brand = _load('assets/source-brand.json', repo)
        fp = _load('assets/source-copy-fingerprints.json', repo)
        self.fp_whole, self.fp_shingle, self.fp_n = set(fp['wholeStringHashes']), set(fp['shingleHashes']), fp['shingleWords']
        self.schema = _load('schema/pagespec.schema.json', repo)
        self.compiled = {k: [re.compile(p) for p in v] for k, v in self.brand['patterns'].items()}
        self.allowed_url = re.compile(self.brand['allowedGeneratedUrl'])


def word_count(s):
    return len(re.findall(r"[^\s]+", s.strip())) if isinstance(s, str) else 0


def _norm(s):
    return re.sub(r'\s+', ' ', re.sub(r"[^a-z0-9à-ÿ' ]+", ' ', s.lower().replace('’', "'"))).strip()


def _h(s):
    return hashlib.sha1(s.encode()).hexdigest()[:16]


class Report:
    def __init__(self, ctx):
        self.items, self.ctx = [], ctx

    def add(self, rule, path, msg, severity=None):
        sev = severity or self.ctx.rule_severity.get(rule, 'error')
        self.items.append({'severity': sev, 'rule': rule, 'path': path, 'message': msg})

    @property
    def errors(self):
        return [i for i in self.items if i['severity'] == 'error']

    @property
    def warnings(self):
        return [i for i in self.items if i['severity'] == 'warn']


def _schema_errors(spec, ctx, rep):
    try:
        from jsonschema import Draft7Validator
    except ImportError:
        rep.add('SCHEMA_UNAVAILABLE', '$', 'jsonschema not installed; schema layer skipped', 'warn')
        return
    for e in Draft7Validator(ctx.schema).iter_errors(spec):
        rep.add('SCHEMA', '/' + '/'.join(str(p) for p in e.absolute_path), e.message[:300])


# ------------------------------------------------------------------------------------------- content walk
def _walk_fields(fields, value, path, rep, mode, contract, strings):
    if not isinstance(value, dict):
        rep.add('CONTENT_TYPE', path, 'content must be an object')
        return
    for k in value:
        if k not in fields:
            rep.add('CONTENT_UNKNOWN_FIELD', f'{path}/{k}', f'field "{k}" is not in the {contract["id"]} contract')
    for k, f in fields.items():
        p = f'{path}/{k}'
        if k not in value:
            if f.get('required'):
                rep.add('CONTENT_REQUIRED', p, f'required field "{k}" missing')
            continue
        _walk_value(f, value[k], p, rep, mode, contract, strings)


def _walk_value(f, v, p, rep, mode, contract, strings):
    t = f['type']
    if t == 'text':
        if isinstance(v, str):
            strings.append((p, v, 'text'))
            if word_count(v) > f['maxWords']:
                rep.add('MAX_WORDS', p, f'{word_count(v)} words > maxWords {f["maxWords"]}')
    elif t == 'textList':
        if isinstance(v, list):
            if len(v) > f['maxItems']:
                rep.add('MAX_ITEMS', p, f'{len(v)} items > maxItems {f["maxItems"]}')
            for i, s in enumerate(v):
                if isinstance(s, str):
                    strings.append((f'{p}/{i}', s, 'text'))
                    if word_count(s) > f['maxWords']:
                        rep.add('MAX_WORDS', f'{p}/{i}', f'{word_count(s)} words > maxWords {f["maxWords"]}')
    elif t in ('cta', 'link'):
        _walk_link(v, p, rep, strings, t)
    elif t in ('ctaList', 'linkList'):
        if isinstance(v, list):
            if len(v) > f['maxItems']:
                rep.add('MAX_ITEMS', p, f'{len(v)} items > maxItems {f["maxItems"]}')
            for i, x in enumerate(v):
                _walk_link(x, f'{p}/{i}', rep, strings, t[:-4])
    elif t == 'href':
        if isinstance(v, str):
            strings.append((p, v, 'url'))
    elif t == 'media':
        _walk_media(v, p, rep, mode, contract, strings)
    elif t == 'mediaList':
        if isinstance(v, list):
            if len(v) > f['maxItems']:
                rep.add('MAX_ITEMS', p, f'{len(v)} items > maxItems {f["maxItems"]}')
            for i, x in enumerate(v):
                _walk_media(x, f'{p}/{i}', rep, mode, contract, strings)
    elif t == 'items':
        if isinstance(v, list):
            if len(v) > f['maxItems']:
                rep.add('MAX_ITEMS', p, f'{len(v)} items > maxItems {f["maxItems"]}')
            for i, x in enumerate(v):
                _walk_fields(f['fields'], x, f'{p}/{i}', rep, mode, contract, strings)
    elif t == 'enum':
        if v not in f['values']:
            rep.add('CONTENT_ENUM', p, f'{v!r} not in {f["values"]}')


def _walk_link(v, p, rep, strings, kind):
    if not isinstance(v, dict):
        return
    if isinstance(v.get('label'), str):
        strings.append((f'{p}/label', v['label'], 'cta' if kind == 'cta' else 'text'))
        if word_count(v['label']) > 8:
            rep.add('MAX_WORDS', f'{p}/label', 'action/link label longer than 8 words')
    if isinstance(v.get('href'), str):
        strings.append((f'{p}/href', v['href'], 'url'))


def _walk_media(v, p, rep, mode, contract, strings):
    if not isinstance(v, dict):
        return
    role = v.get('assetRole')
    if isinstance(v.get('alt'), str):
        strings.append((f'{p}/alt', v['alt'], 'text'))
    if isinstance(v.get('src'), str):
        strings.append((f'{p}/src', v['src'], 'src'))
    allowed = set(contract['assets']['generatedAssetRoles'])
    if mode == 'reference':
        allowed |= set(contract['assets']['referenceAssetRoles'])
    if role not in PINNED_AVAILABILITY:
        rep.add('ASSET_ROLE_UNKNOWN', f'{p}/assetRole', f'unknown asset role {role!r}')
        return
    if role not in allowed:
        rule = 'GENERATED_MODE_ASSET' if mode == 'generated' and PINNED_AVAILABILITY[role] != 'generation-safe' else 'ASSET_ROLE_NOT_ALLOWED'
        rep.add(rule, f'{p}/assetRole', f'role {role!r} not allowed in {contract["id"]} ({mode} mode)', 'error')
    if mode == 'generated' and PINNED_AVAILABILITY[role] != 'generation-safe':
        rep.add('GENERATED_MODE_ASSET', f'{p}/assetRole', f'role {role!r} is pinned {PINNED_AVAILABILITY[role]}; use a generation-safe substitute', 'error')


# ------------------------------------------------------------------------------------------- main
def validate(spec, ctx=None, schema=True):
    ctx = ctx or Ctx()
    rep = Report(ctx)
    if schema:
        _schema_errors(spec, ctx, rep)
    if not isinstance(spec, dict) or not isinstance(spec.get('nodes'), list):
        return rep
    mode = spec.get('mode')
    nodes = [n for n in spec['nodes'] if isinstance(n, dict)]
    secs = [n.get('section') for n in nodes]

    # registry-level pins (contract / allowlist / asset registry cannot drift from the code pins)
    for sid, c in ctx.contracts.items():
        pinned = sid not in RETRIEVAL_INELIGIBLE
        if c.get('retrievalEligible') is not pinned:
            rep.add('CONTRACT_RETRIEVAL_PIN', f'sections/{sid}.json', f'retrievalEligible={c.get("retrievalEligible")} contradicts the code pin ({pinned})')
        if RUNTIME_NAME_PATTERN.search(sid) and sid not in RETRIEVAL_INELIGIBLE:
            rep.add('CONTRACT_RETRIEVAL_PIN', f'sections/{sid}.json', 'runtime/utility-looking section is not in the RETRIEVAL_INELIGIBLE pin')
    for sid, a in ctx.allowlist.get('sections', {}).items():
        if a.get('retrievalEligible') is not (sid not in RETRIEVAL_INELIGIBLE):
            rep.add('ALLOWLIST_RETRIEVAL_PIN', f'component-allowlist/{sid}', 'allowlist retrievalEligible contradicts the code pin')
    for rid, r in ctx.roles.items():
        if PINNED_AVAILABILITY.get(rid) != r.get('availability'):
            rep.add('ASSET_PIN_DRIFT', f'asset-roles/{rid}', f'registry availability {r.get("availability")!r} != pinned {PINNED_AVAILABILITY.get(rid)!r}')

    # template cross-reference
    t = ctx.templates.get(spec.get('template'))
    if t is None:
        rep.add('TEMPLATE_UNKNOWN', '/template', f'unknown template {spec.get("template")!r}')
        return rep
    tnodes = {n['section']: n for n in t['nodes']}
    for i, n in enumerate(nodes):
        s, v = n.get('section'), n.get('variant')
        if s not in tnodes:
            rep.add('TEMPLATE_MEMBERSHIP', f'/nodes/{i}', f'{s} is not a node of {t["id"]}')
        elif v not in tnodes[s]['variants']:
            rep.add('TEMPLATE_MEMBERSHIP', f'/nodes/{i}/variant', f'variant {v!r} of {s} is not used by {t["id"]} (observed: {tnodes[s]["variants"]})')
    for tn in t['nodes']:
        if tn['required'] and tn['section'] not in secs:
            rep.add('TEMPLATE_REQUIRED', '/nodes', f'required node {tn["section"]} missing for {t["id"]}')
    content_nodes = [s for s in secs if s not in ('shell.header', 'shell.footer')]
    if t.get('rendersContent', True) and not content_nodes:
        rep.add('TEMPLATE_EMPTY', '/nodes', f'{t["id"]} renders content but the PageSpec has no content nodes')
    if not t.get('rendersContent', True) and content_nodes:
        rep.add('TEMPLATE_MEMBERSHIP', '/nodes', f'{t["id"]} renders no content (redirect) but content nodes were given')
    pairs = collections.Counter((n.get('section'), n.get('variant')) for n in nodes)
    for (s, v), c in pairs.items():
        if c > 1 and s in tnodes and not tnodes[s]['repeatable']:
            rep.add('TEMPLATE_REPEAT', '/nodes', f'({s}, {v}) appears {c}x but is not repeatable in {t["id"]}')
    for s, c in collections.Counter(secs).items():
        if s in tnodes and c > tnodes[s]['maxPerPage']:
            rep.add('TEMPLATE_REPEAT', '/nodes', f'{s} appears {c}x > maxPerPage {tnodes[s]["maxPerPage"]} in {t["id"]}')
    last = -1
    for i, n in enumerate(nodes):
        tn = tnodes.get(n.get('section'))
        if not tn:
            continue
        o = SLOT_ORDER[tn['slot']]
        if o < last:
            rep.add('SLOT_ORDER', f'/nodes/{i}', f'{n["section"]} ({tn["slot"]}) after a later slot')
        last = max(last, o)

    # route
    route = spec.get('route', '')
    if mode == 'reference':
        if not any(re.fullmatch(re.sub(r':[A-Za-z]+', r'[^/]+', r), route) for r in t['routes']):
            rep.add('ROUTE_TEMPLATE', '/route', f'{route!r} is not a route of {t["id"]} ({t["routes"][:4]}...)')
    elif not isinstance(route, str) or not route.startswith('/') or '//' in route:
        rep.add('ROUTE_TEMPLATE', '/route', 'generated route must be a relative path')

    # graph rhythm rules
    cat = {sid: c['category'] for sid, c in ctx.contracts.items()}
    if not secs or secs[0] != 'shell.header' or secs[-1] != 'shell.footer' or secs.count('shell.header') != 1 or secs.count('shell.footer') != 1:
        rep.add('SHELL_FIRST_LAST', '/nodes', 'first node must be shell.header and last shell.footer, each exactly once')
    heroes = [i for i, s in enumerate(secs) if cat.get(s) == 'HERO']
    if len(heroes) > 1:
        rep.add('ONE_HERO', '/nodes', f'{len(heroes)} HERO nodes')
    if t.get('heroPolicy') == 'required':
        allowed_heroes = set(t['requiresOneOf'][0]) if t.get('requiresOneOf') else set()
        if not any(secs[i] in allowed_heroes for i in heroes):
            rep.add('ONE_HERO', '/nodes', f'{t["id"]} requires one of {sorted(allowed_heroes)}')
    if t.get('heroPolicy') == 'none' and heroes:
        rep.add('ONE_HERO', '/nodes', f'{t["id"]} is a hero-less template')
    for i in heroes:
        before = [s for s in secs[1:i] if cat.get(s) != 'NAVIGATION' or tnodes.get(s, {}).get('slot') != 'opener']
        if before:
            rep.add('HERO_OPENS', f'/nodes/{i}', f'HERO preceded by {before}')
    if secs.count('cta.banner') > 1:
        rep.add('ONE_CTA_BANNER', '/nodes', 'cta.banner appears more than once')
    if 'cta.banner' in secs and len(secs) >= 2 and secs[-2] != 'cta.banner' and secs[-1] == 'shell.footer':
        rep.add('CTA_BANNER_CLOSES', '/nodes', 'cta.banner is not the last node before the footer')
    exc = [tuple(map(tuple, e['pair'])) for e in ctx.graph_rules.get('NO_ADJACENT_CTA', {}).get('exceptions', [])]
    for i in range(len(nodes) - 1):
        a, b = nodes[i], nodes[i + 1]
        if cat.get(a.get('section')) == 'CTA' and cat.get(b.get('section')) == 'CTA':
            if ((a.get('section'), a.get('variant')), (b.get('section'), b.get('variant'))) not in exc:
                rep.add('NO_ADJACENT_CTA', f'/nodes/{i + 1}', f'{a.get("section")} followed by {b.get("section")}')
    if 'faq.accordion' in secs:
        k = secs.index('faq.accordion')
        tail = [s for s in secs[k + 1:] if s != 'shell.footer' and cat.get(s) != 'CTA']
        if tail:
            rep.add('FAQ_TAIL', f'/nodes/{k}', f'non-CTA nodes after the FAQ: {tail}')
    auto = [n for n in nodes if isinstance(n.get('motion'), dict) and n['motion'].get('pattern') in AUTO_ADVANCING]
    if len(auto) > MOTION_BUDGET_MAX:
        rep.add('MOTION_BUDGET', '/nodes', f'{len(auto)} auto-advancing sections > {MOTION_BUDGET_MAX}')

    # per-node contract checks
    strings = [('/title', spec.get('title', ''), 'text')]
    page_theme = spec.get('theme', 'light')
    ids = set()
    for i, n in enumerate(nodes):
        sid = n.get('section')
        base = f'/nodes/{i}'
        if n.get('id') in ids:
            rep.add('NODE_ID_DUPLICATE', f'{base}/id', 'duplicate node id')
        ids.add(n.get('id'))
        if sid in RETRIEVAL_INELIGIBLE:
            rep.add('RETRIEVAL_PIN', base, f'{sid} is runtime UI (retrievalEligible=false) and cannot be a page node; attach it under runtime[]')
        if 'retrievalEligible' in n and n['retrievalEligible'] is not (sid not in RETRIEVAL_INELIGIBLE):
            rep.add('RETRIEVAL_PIN', f'{base}/retrievalEligible', f'node retrievalEligible={n["retrievalEligible"]} contradicts the pin for {sid}')
        c = ctx.contracts.get(sid)
        if not c:
            rep.add('SECTION_UNKNOWN', base, f'no contract for {sid!r}')
            continue
        cons = c.get('constraints', {})
        if cons.get('onePerPage') and secs.count(sid) > 1:
            rep.add('CONTRACT_ONE_PER_PAGE', base, f'{sid} is onePerPage')
        if cons.get('mustBeFirst') and i != 0:
            rep.add('CONTRACT_POSITION', base, f'{sid} must be first')
        if cons.get('mustBeLast') and i != len(nodes) - 1:
            rep.add('CONTRACT_POSITION', base, f'{sid} must be last')
        if cons.get('homeRouteOnly') and (spec.get('template') != 'template.home' or (mode == 'reference' and route != '/')):
            rep.add('HOME_ROUTE_ONLY', base, f'{sid} is only allowed on the home template/route')
        if n.get('variant') not in c['variants']:
            rep.add('CONTRACT_VARIANT', f'{base}/variant', f'variant {n.get("variant")!r} not in {c["variants"]}')
        mo = n.get('motion') if isinstance(n.get('motion'), dict) else {}
        pat = mo.get('pattern')
        if pat not in c['motion']['allowedPatterns']:
            rep.add('MOTION_PATTERN', f'{base}/motion/pattern', f'{pat!r} not allowed for {sid} ({c["motion"]["allowedPatterns"]})')
        elif mo.get('reducedMotionFallback') != c['motion']['reducedMotionFallbacks'][pat]:
            rep.add('MOTION_FALLBACK', f'{base}/motion/reducedMotionFallback', f'{pat} requires reducedMotionFallback={c["motion"]["reducedMotionFallbacks"][pat]!r}')
        if pat and pat not in ctx.motion['patterns']:
            rep.add('MOTION_PATTERN', f'{base}/motion/pattern', f'{pat!r} is not an evidence-grounded motion pattern')
        _walk_fields(c['content']['fields'], n.get('content', {}), f'{base}/content', rep, mode, c, strings)
        _check_style(n.get('style'), c, page_theme, f'{base}/style', rep, ctx)
    for j, a in enumerate(spec.get('runtime', []) or []):
        if not isinstance(a, dict):
            continue
        if a.get('section') not in RETRIEVAL_INELIGIBLE:
            rep.add('RETRIEVAL_PIN', f'/runtime/{j}', f'{a.get("section")} is not runtime UI')
        if a.get('retrievalEligible') is not False:
            rep.add('RETRIEVAL_PIN', f'/runtime/{j}/retrievalEligible', 'runtime attachments are pinned retrievalEligible=false')
        if a.get('attachedTo') not in ids:
            rep.add('RUNTIME_ATTACHMENT', f'/runtime/{j}/attachedTo', 'attachedTo must reference a node id')

    if mode == 'generated':
        _generated_mode(spec, strings, rep, ctx)
    return rep


def _check_style(style, contract, page_theme, path, rep, ctx):
    if not isinstance(style, dict):
        return
    pol = ctx.policy
    raw_color = re.compile(pol['rawValueRestrictions']['color']['pattern'])
    raw_len = re.compile(pol['rawValueRestrictions']['spacing']['pattern'])
    theme = style.get('theme', page_theme)
    if theme not in contract['themes']:
        rep.add('TOKEN_THEME_COMBINATION', f'{path}/theme', f'{contract["id"]} supports themes {contract["themes"]}, not {theme!r}')
    fonts = {k for k, v in ctx.catalog.items() if v.get('type') == 'fontFamily'}
    unsupported = set(pol['rawValueRestrictions']['fontFamily']['unsupportedTokens'])
    for field in ('surface', 'paddingY', 'headingFont'):
        if field not in style:
            continue
        v = style[field]
        p = f'{path}/{field}'
        if not isinstance(v, str):
            continue
        if raw_color.search(v):
            rep.add('TOKEN_RAW_COLOR', p, f'raw colour value {v!r}; use a semantic surface token')
            continue
        if raw_len.match(v.strip()):
            rep.add('TOKEN_ARBITRARY_SPACING', p, f'arbitrary length {v!r}; use a spacing/layout token')
            continue
        if field == 'headingFont' and (v not in fonts or v in unsupported):
            rep.add('TOKEN_UNSUPPORTED_FONT', p, f'{v!r} is not a supported font token')
            continue
        if v not in ctx.catalog:
            rep.add('TOKEN_UNKNOWN', p, f'{v!r} is not in tokens/llm/token-catalog.json')
            continue
        allowed = pol['pageSpecTokenFields'][f'node.style.{field}']['allowedTokens']
        if v not in allowed:
            rep.add('TOKEN_NOT_ALLOWED', p, f'{v!r} is not allowed for node.style.{field}')
        if field == 'surface' and v not in pol['themeTokenCompatibility'].get(theme, []):
            rep.add('TOKEN_THEME_COMBINATION', p, f'{v!r} has no value in the {theme} theme')


def _generated_mode(spec, strings, rep, ctx):
    pats = ctx.compiled
    brand = spec.get('brand')
    if not isinstance(brand, dict):
        rep.add('GENERATED_MODE_BRAND', '/brand', 'generated PageSpecs must declare the target (fictional or client) brand')
    else:
        strings.append(('/brand/name', brand.get('name', ''), 'text'))
        dom = str(brand.get('domain', ''))
        if not re.search(r'\.(example|invalid)$', dom):
            rep.add('GENERATED_MODE_URL', '/brand/domain', f'{dom!r} is not a reserved .example/.invalid domain')
        strings.append(('/brand/domain', dom, 'text'))
    rule_for = [('brand', 'GENERATED_MODE_BRAND'), ('domain', 'GENERATED_MODE_URL'), ('social', 'GENERATED_MODE_URL'), ('store', 'GENERATED_MODE_STORE'),
                ('cta', 'GENERATED_MODE_CTA'), ('people', 'GENERATED_MODE_PERSON'), ('customers', 'GENERATED_MODE_CUSTOMER'), ('rating', 'GENERATED_MODE_RATING')]
    for path, s, kind in strings:
        if not isinstance(s, str) or not s:
            continue
        for key, rule in rule_for:
            for rx in pats.get(key, []):
                if rx.search(s):
                    rep.add(rule, path, f'matches source pattern {rx.pattern!r}: {s[:80]!r}')
                    break
        if kind in ('url', 'src'):
            if re.match(r'(?i)^[a-z][a-z0-9+.-]*:', s) or s.startswith('//'):
                if not ctx.allowed_url.match(s):
                    rep.add('GENERATED_MODE_URL', path, f'absolute URL {s!r} is not on a reserved .example/.invalid domain')
        if kind == 'src':
            for rx in pats.get('assetPath', []):
                if rx.search(s):
                    rep.add('GENERATED_MODE_ASSET', path, f'source asset path {s!r}')
                    break
        if kind in ('text', 'cta'):
            n = _norm(s)
            w = n.split()
            hit = len(w) >= 4 and _h(n) in ctx.fp_whole
            if not hit:
                hit = any(_h(' '.join(w[i:i + ctx.fp_n])) in ctx.fp_shingle for i in range(len(w) - ctx.fp_n + 1))
            if hit:
                rep.add('GENERATED_MODE_COPY', path, f'reproduces source copy: {s[:80]!r}')


def main(argv):
    args = [a for a in argv if not a.startswith('--')]
    as_json, use_schema = '--json' in argv, '--no-schema' not in argv
    if not args:
        print(__doc__)
        return 2
    ctx = Ctx()
    bad = 0
    out = {}
    for f in args:
        with open(f) as fh:
            spec = json.load(fh)
        rep = validate(spec, ctx, schema=use_schema)
        out[f] = rep.items
        if rep.errors:
            bad += 1
        if not as_json:
            print(f'{"FAIL" if rep.errors else "OK  "} {f}: {len(rep.errors)} errors, {len(rep.warnings)} warnings')
            for i in rep.items:
                print(f'   {i["severity"]:5} {i["rule"]:24} {i["path"]}  {i["message"]}')
    if as_json:
        print(json.dumps(out, indent=1))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
