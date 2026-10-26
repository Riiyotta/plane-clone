#!/usr/bin/env python3
"""One-shot verification of the design-repo. Every check prints PASS / FAIL / WARN; exit 1 on any FAIL.

    python3 extraction/verify_all.py            # run every check
    python3 extraction/verify_all.py --counts   # print the counts recomputed from disk (JSON)

Checks: Draft-07 schema validity (schemas, examples, section contracts); semantic validation of every example;
allowlist parity (sections/primitives/components and node properties vs schema); allowlistVersion and
pageSpecVersion; citation ranges (in range AND tag on the first cited line, colour value on the cited line),
degrading to a warning when no sibling site/ exists; manifest counts recomputed from disk; README/CHANGELOG
counts; entryPoints inside the package; no absolute machine paths; no junk files; PINNED_AVAILABILITY and the
retrieval pin (this file, semantic_validate.py, registries, contracts, allowlist); the wrapper gate; token
catalog drift (vs token files and, when present, vs the real tailwind/CSS sources); graph rule <-> validator
parity; template/route integrity (and route set vs site/src/pages when present).
Repo root is derived from this file; the project root (evidence) is its parent.
"""
import sys
sys.dont_write_bytecode = True
import glob, importlib.util, json, os, re

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT = os.path.dirname(REPO)
SITE_PRESENT = os.path.isdir(os.path.join(PROJECT, 'site', 'src'))

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
# absolute machine paths, assembled so this file does not itself contain one
ABS_PATH_PATTERNS = [re.compile('/' + r'Users/[A-Za-z0-9._-]+/'), re.compile('/' + r'private/(tmp|var)/'), re.compile('/' + r'home/[A-Za-z0-9._-]+/'), re.compile(r'[A-Za-z]:\\' + r'Users\\')]
JUNK = {'.DS_Store', 'Thumbs.db', 'desktop.ini'}
CITE_RE = re.compile(r'^((?:site/|CLONE_SPEC\.md|ASSET_MANIFEST\.md|PAGES_BRIEF\.md)[^:\s]*):(\d+)(?:-(\d+))?$')

results = []


def rec(name, status, detail=''):
    results.append((status, name, detail))


def J(rel):
    with open(os.path.join(REPO, rel)) as f:
        return json.load(f)


def module(rel, name):
    spec = importlib.util.spec_from_file_location(name, os.path.join(REPO, rel))
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def files(pattern):
    return sorted(glob.glob(os.path.join(REPO, pattern)))


def examples():
    return [os.path.relpath(p, REPO) for p in files('schema/example.pagespec.json') + files('schema/examples/*.json')]


# ------------------------------------------------------------------------------------------------ counts
def compute_counts():
    cat = module('extraction/build_token_catalog.py', 'btc').build(REPO)
    secs = [J(os.path.relpath(p, REPO)) for p in files('sections/*.json')]
    roles = J('assets/asset-roles.json')['roles']
    tpl = J('templates/templates.json')['templates']
    routes = J('templates/routes.json')['routes']
    ex = examples()
    return {
        'tokens': cat['tokenCount'],
        'tokenFiles': len(files('tokens/0*/*.json') + files('tokens/1*/*.json') + files('tokens/2*/*.json') + files('tokens/3*/*.json') + files('tokens/themes/*.json')) - 1,
        'motionPatterns': len(J('tokens/00-foundation/motion-patterns.json')['patterns']),
        'primitives': len(files('primitives/*.json')),
        'components': len(files('components/*.json')),
        'sections': len(secs),
        'sectionsRetrievalEligible': sum(1 for s in secs if s['retrievalEligible']),
        'runtimeSections': sum(1 for s in secs if not s['retrievalEligible']),
        'templates': len(tpl),
        'routes': len(routes),
        'dynamicRoutes': sum(1 for r in routes.values() if r['dynamic']),
        'examples': len(ex),
        'generatedExamples': sum(1 for e in ex if J(e)['mode'] == 'generated'),
        'assetRoles': len(roles),
        'generationSafeAssetRoles': sum(1 for r in roles if r['availability'] == 'generation-safe'),
        'graphRules': len(J('compatibility/graph.json')['rules']),
    }


# ------------------------------------------------------------------------------------------------ checks
def check_schema():
    try:
        from jsonschema import Draft7Validator
    except ImportError:
        rec('schema', 'FAIL', 'jsonschema not installed')
        return
    ps, cs = J('schema/pagespec.schema.json'), J('schema/section-contract.schema.json')
    Draft7Validator.check_schema(ps)
    Draft7Validator.check_schema(cs)
    v, cv = Draft7Validator(ps), Draft7Validator(cs)
    bad = []
    for e in examples():
        errs = list(v.iter_errors(J(e)))
        if errs:
            bad.append(f'{e}: {len(errs)} ({errs[0].message[:80]})')
    rec('schema.examples', 'FAIL' if bad else 'PASS', '; '.join(bad) or f'{len(examples())} examples, 0 Draft-07 errors')
    bad = []
    for p in files('sections/*.json'):
        errs = list(cv.iter_errors(J(os.path.relpath(p, REPO))))
        if errs:
            bad.append(f'{os.path.basename(p)}: {errs[0].message[:80]}')
    rec('schema.section-contracts', 'FAIL' if bad else 'PASS', '; '.join(bad[:5]) or f'{len(files("sections/*.json"))} contracts valid against schema/section-contract.schema.json')


def check_semantic():
    sv = module('schema/semantic_validate.py', 'sv')
    ctx = sv.Ctx(REPO)
    bad, warns = [], 0
    for e in examples():
        rep = sv.validate(J(e), ctx)
        warns += len(rep.warnings)
        if rep.errors:
            bad.append(f'{e}: {rep.errors[0]["rule"]} {rep.errors[0]["message"][:80]}')
    rec('semantic.examples', 'FAIL' if bad else 'PASS', '; '.join(bad) or f'{len(examples())} examples, 0 semantic errors ({warns} warnings)')
    return sv


def check_allowlist(sv):
    al = J('tokens/llm/component-allowlist.json')
    secs = {J(os.path.relpath(p, REPO))['id']: J(os.path.relpath(p, REPO)) for p in files('sections/*.json')}
    prims = {J(os.path.relpath(p, REPO))['id'] for p in files('primitives/*.json')}
    comps = {J(os.path.relpath(p, REPO))['id'] for p in files('components/*.json')}
    probs = []
    for k in set(al['sections']) - set(secs):
        probs.append(f'phantom allowlist section {k}')
    for k in set(secs) - set(al['sections']):
        probs.append(f'orphan contract {k} (no allowlist entry)')
    for k in set(secs) & set(al['sections']):
        if al['sections'][k]['variants'] != secs[k]['variants']:
            probs.append(f'{k}: allowlist variants != contract variants')
        if al['sections'][k]['retrievalEligible'] != secs[k]['retrievalEligible']:
            probs.append(f'{k}: allowlist retrievalEligible != contract')
        if al['sections'][k]['category'] != secs[k]['category']:
            probs.append(f'{k}: allowlist category != contract')
    if set(al['primitives']) != prims:
        probs.append(f'primitives parity: {sorted(set(al["primitives"]) ^ prims)}')
    if set(al['components']) != comps:
        probs.append(f'components parity: {sorted(set(al["components"]) ^ comps)}')
    node_props = sorted(J('schema/pagespec.schema.json')['definitions']['node']['properties'])
    if sorted(al['nodeSettableProperties']) != node_props:
        probs.append(f'nodeSettableProperties {sorted(al["nodeSettableProperties"])} != schema node properties {node_props}')
    rec('allowlist.parity', 'FAIL' if probs else 'PASS', '; '.join(probs[:6]) or f'{len(secs)} sections, {len(prims)} primitives, {len(comps)} components, node properties match schema')


def check_versions():
    man, al = J('registry.manifest.json'), J('tokens/llm/component-allowlist.json')
    probs = []
    if man.get('allowlistVersion') != al.get('allowlistVersion'):
        probs.append(f'manifest allowlistVersion {man.get("allowlistVersion")} != allowlist {al.get("allowlistVersion")}')
    const = J('schema/pagespec.schema.json')['properties']['pageSpecVersion'].get('const')
    if man.get('pageSpecVersion') != const:
        probs.append(f'manifest pageSpecVersion {man.get("pageSpecVersion")} != schema const {const}')
    for e in examples():
        if J(e).get('pageSpecVersion') != const:
            probs.append(f'{e} pageSpecVersion != {const}')
    if man.get('status') != 'design-review-pending' or man.get('productionApproved') is not False:
        probs.append('manifest must stay status=design-review-pending, productionApproved=false')
    rec('versions', 'FAIL' if probs else 'PASS', '; '.join(probs) or f'allowlistVersion {al["allowlistVersion"]} and pageSpecVersion {const} consistent')


def _cites():
    """(origin, file, start, end, tag or None, value or None)"""
    out = []
    for p in files('sections/*.json') + files('primitives/*.json') + files('components/*.json'):
        d = J(os.path.relpath(p, REPO))
        srcs = [d['source']] + d['source'].get('alsoImplementedBy', [])
        for s in srcs:
            a, _, b = s['lines'].partition('-')
            out.append((os.path.relpath(p, REPO), s['file'], int(a), int(b or a), s['tag'], None))
        for r in d.get('responsive', []):
            m = CITE_RE.match(r['evidence'])
            if m:
                out.append((os.path.relpath(p, REPO), m.group(1), int(m.group(2)), int(m.group(3) or m.group(2)), None, None))
    for p in files('tokens/0*/*.json') + files('tokens/2*/*.json') + files('tokens/3*/*.json'):
        d = J(os.path.relpath(p, REPO))
        for k, v in d.get('tokens', {}).items():
            m = CITE_RE.match(v.get('source', ''))
            if m:
                val = v['value'] if v.get('type') == 'color' else None
                out.append((f'{os.path.relpath(p, REPO)}#{k}', m.group(1), int(m.group(2)), int(m.group(3) or m.group(2)), None, val))

    def walk(o, origin):
        if isinstance(o, dict):
            for v in o.values():
                walk(v, origin)
        elif isinstance(o, list):
            for v in o:
                walk(v, origin)
        elif isinstance(o, str):
            m = CITE_RE.match(o)
            if m:
                out.append((origin, m.group(1), int(m.group(2)), int(m.group(3) or m.group(2)), None, None))
    for rel in ['extraction/measured-values.json', 'tokens/00-foundation/motion-patterns.json', 'assets/asset-roles.json', 'tokens/themes/light.json', 'tokens/themes/dark.json']:
        walk(J(rel), rel)
    return out


def _tag_on(line, tag):
    """tag present on the line and not merely a prefix of a longer identifier (function Bento != function BentoCard)"""
    start = 0
    while True:
        k = line.find(tag, start)
        if k < 0:
            return False
        nxt = line[k + len(tag):k + len(tag) + 1]
        if not (re.match(r'\w', tag[-1]) and re.match(r'\w', nxt or ' ')):
            return True
        start = k + 1


def check_citations():
    cites = _cites()
    if not SITE_PRESENT:
        rec('citations', 'WARN', f'{len(cites)} citations not re-read: no sibling site/ next to design-repo (standalone copy)')
        return
    cache, probs = {}, []
    for origin, f, a, b, tag, val in cites:
        path = os.path.join(PROJECT, f)
        if f not in cache:
            cache[f] = open(path, encoding='utf-8').read().split('\n') if os.path.isfile(path) else None
        ls = cache[f]
        if ls is None:
            probs.append(f'{origin}: {f} does not exist')
            continue
        if a < 1 or b < a or b > len(ls):
            probs.append(f'{origin}: {f}:{a}-{b} out of range (file has {len(ls)} lines)')
            continue
        if tag is not None and not _tag_on(ls[a - 1], tag):
            probs.append(f'{origin}: tag {tag!r} not on {f}:{a} (as a whole identifier)')
        if val is not None:
            seg = ' '.join(ls[a - 1:b]).lower()
            v = val.lower()
            short = '#' + v[1] + v[3] + v[5] if re.fullmatch(r'#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3', v) else None
            if v not in seg and v.replace(' ', '') not in seg.replace(' ', '') and not (short and short in seg):
                probs.append(f'{origin}: value {val} not found at {f}:{a}')
    rec('citations', 'FAIL' if probs else 'PASS', '; '.join(probs[:6]) + (f' (+{len(probs) - 6} more)' if len(probs) > 6 else '') if probs else f'{len(cites)} citations in range; tags on cited lines; colour values present')


def check_counts():
    c = compute_counts()
    man = J('registry.manifest.json').get('counts', {})
    diff = {k: (man.get(k), v) for k, v in c.items() if man.get(k) != v}
    extra = set(man) - set(c)
    rec('manifest.counts', 'FAIL' if diff or extra else 'PASS', (f'manifest vs disk: {diff}' + (f' unknown keys {sorted(extra)}' if extra else '')) if diff or extra else json.dumps(c))
    probs = []
    for doc in ['README.md', 'CHANGELOG.md']:
        txt = open(os.path.join(REPO, doc)).read()
        rows = dict(re.findall(r'^\| (\w+) \| (\d+) \|', txt, re.M))
        if not rows:
            probs.append(f'{doc}: no count table')
        for k, v in rows.items():
            if k not in c:
                probs.append(f'{doc}: unknown count {k}')
            elif int(v) != c[k]:
                probs.append(f'{doc}: {k} = {v}, disk = {c[k]}')
        for k in c:
            if k not in rows:
                probs.append(f'{doc}: count {k} missing')
    rec('docs.counts', 'FAIL' if probs else 'PASS', '; '.join(probs[:6]) or 'README.md and CHANGELOG.md count tables match disk')


def check_entrypoints():
    ep = J('registry.manifest.json').get('entryPoints', {})
    probs = [f'{k}: {v}' for k, v in ep.items() if v.startswith('..') or os.path.isabs(v) or not os.path.exists(os.path.join(REPO, v))]
    for need in ['tokens/llm/token-catalog.json', 'tokens/llm/token-policy.json', 'tokens/llm/component-allowlist.json', 'tokens/00-foundation/motion-patterns.json', 'extraction/wrapper_gate.py']:
        if need not in ep.values():
            probs.append(f'{need} not registered')
    rec('manifest.entryPoints', 'FAIL' if probs else 'PASS', '; '.join(probs) or f'{len(ep)} entry points, all inside the package and present')


def check_hygiene():
    abs_hits, junk = [], []
    for root, dirs, fs in os.walk(REPO):
        for d in dirs:
            if d in ('__MACOSX', '__pycache__'):
                junk.append(os.path.relpath(os.path.join(root, d), REPO))
        for f in fs:
            p = os.path.join(root, f)
            if f in JUNK:
                junk.append(os.path.relpath(p, REPO))
            if f.endswith(('.json', '.md', '.py', '.mjs', '.txt')):
                t = open(p, encoding='utf-8', errors='ignore').read()
                if any(rx.search(t) for rx in ABS_PATH_PATTERNS):
                    abs_hits.append(os.path.relpath(p, REPO))
    rec('hygiene.absolute-paths', 'FAIL' if abs_hits else 'PASS', ', '.join(abs_hits) or 'no absolute machine paths')
    rec('hygiene.junk-files', 'FAIL' if junk else 'PASS', ', '.join(junk) or 'no .DS_Store / __MACOSX / __pycache__')


def check_pins(sv):
    roles = {r['id']: r for r in J('assets/asset-roles.json')['roles']}
    probs = []
    if PINNED_AVAILABILITY != sv.PINNED_AVAILABILITY:
        probs.append('PINNED_AVAILABILITY differs between verify_all.py and semantic_validate.py')
    for k in set(roles) | set(PINNED_AVAILABILITY):
        if k not in PINNED_AVAILABILITY:
            probs.append(f'role {k} not pinned in code')
        elif k not in roles:
            probs.append(f'pinned role {k} missing from registry')
        elif roles[k]['availability'] != PINNED_AVAILABILITY[k]:
            probs.append(f'{k}: registry {roles[k]["availability"]} != pinned {PINNED_AVAILABILITY[k]}')
    for k, r in roles.items():
        if r['availability'] != 'generation-safe':
            subs = r.get('generationSafeSubstitutes') or []
            if not subs:
                probs.append(f'{k}: no generationSafeSubstitutes')
            for s in subs:
                if PINNED_AVAILABILITY.get(s) != 'generation-safe':
                    probs.append(f'{k}: substitute {s} is not generation-safe')
            if r['generatedModePolicy'] == 'may-generate-new':
                probs.append(f'{k}: non-safe role allows may-generate-new in generated mode')
        if k == 'brand-wordmark' and r['generatedModePolicy'] == 'must-reuse-exact':
            probs.append('brand wordmark must never be must-reuse-exact in generated mode')
    for p in files('sections/*.json'):
        d = J(os.path.relpath(p, REPO))
        for r in d['assets']['generatedAssetRoles']:
            if PINNED_AVAILABILITY.get(r) != 'generation-safe':
                probs.append(f'{d["id"]}: generatedAssetRoles contains non-safe {r}')
    schema_roles = set(J('schema/pagespec.schema.json')['definitions']['media']['properties']['assetRole']['enum'])
    if schema_roles != {k for k, r in roles.items() if r['kind'] == 'media'}:
        probs.append('schema assetRole enum != media roles in registry')
    rec('pins.asset-availability', 'FAIL' if probs else 'PASS', '; '.join(probs[:6]) or f'{len(roles)} roles pinned in code (verify_all + semantic_validate) and matching the registry')


def check_retrieval(sv):
    probs = []
    if RETRIEVAL_INELIGIBLE != sv.RETRIEVAL_INELIGIBLE:
        probs.append('RETRIEVAL_INELIGIBLE differs between verify_all.py and semantic_validate.py')
    al = J('tokens/llm/component-allowlist.json')['sections']
    for p in files('sections/*.json'):
        d = J(os.path.relpath(p, REPO))
        sid = d['id']
        pinned = sid not in RETRIEVAL_INELIGIBLE
        if d['retrievalEligible'] is not pinned:
            probs.append(f'{sid}: contract retrievalEligible={d["retrievalEligible"]} != pin {pinned}')
        if al.get(sid, {}).get('retrievalEligible') is not pinned:
            probs.append(f'{sid}: allowlist retrievalEligible != pin {pinned}')
        if (RUNTIME_NAME_PATTERN.search(sid) or RUNTIME_NAME_PATTERN.search(d['title'])) and sid not in RETRIEVAL_INELIGIBLE:
            probs.append(f'{sid}: looks like runtime/utility UI but is not in the retrieval pin')
        if not d['retrievalEligible'] and len(d.get('retrievalIneligibleReason', '')) < 30:
            probs.append(f'{sid}: retrievalIneligibleReason shorter than 30 characters')
    for sid in RETRIEVAL_INELIGIBLE:
        if not os.path.exists(os.path.join(REPO, 'sections', f'{sid}.json')):
            probs.append(f'pinned {sid} has no contract')
    node_enum = set(J('schema/pagespec.schema.json')['definitions']['node']['properties']['section']['enum'])
    if node_enum & RETRIEVAL_INELIGIBLE:
        probs.append(f'runtime sections allowed as nodes in the schema: {sorted(node_enum & RETRIEVAL_INELIGIBLE)}')
    for t in J('templates/templates.json')['templates'].values():
        for n in t['nodes']:
            if n['section'] in RETRIEVAL_INELIGIBLE:
                probs.append(f'{t["id"]} uses runtime section {n["section"]} as a node')
    rec('pins.retrieval', 'FAIL' if probs else 'PASS', '; '.join(probs[:6]) or f'{len(RETRIEVAL_INELIGIBLE)} runtime sections pinned retrievalEligible=false in code, contracts, allowlist and schema')


def check_gate():
    wg = module('extraction/wrapper_gate.py', 'wg')
    pinned = {'HERO_WARN_PX': 1800, 'HERO_ERROR_PX': 3000, 'SHARE_WARN': 0.50, 'SHARE_ERROR': 0.60, 'MIN_SECTIONS_FOR_SHARE': 3, 'REQUIRED_VIEWPORT_WIDTH': 1440, 'MIN_JUSTIFICATION_CHARS': 30}
    loosened = {k: (getattr(wg, k, None), v) for k, v in pinned.items() if getattr(wg, k, None) != v}
    if loosened:
        rec('wrapper-gate', 'FAIL', f'gate thresholds changed in wrapper_gate.py (actual, pinned): {loosened}')
        return
    errors, warnings = wg.run(REPO)
    rec('wrapper-gate', 'FAIL' if errors else 'PASS', ('; '.join(errors[:5])) if errors else f'0 errors, {len(warnings)} warnings (thresholds pinned: hero {wg.HERO_WARN_PX}/{wg.HERO_ERROR_PX}px, share {wg.SHARE_WARN:.0%}/{wg.SHARE_ERROR:.0%}, viewport {wg.REQUIRED_VIEWPORT_WIDTH})')


def check_tokens():
    btc = module('extraction/build_token_catalog.py', 'btc')
    built, stored = btc.build(REPO), J('tokens/llm/token-catalog.json')
    probs = []
    if built != stored:
        probs.append(f'token-catalog.json drifted from token files (stored {stored.get("tokenCount")}/{str(stored.get("sha256"))[:10]}, derived {built["tokenCount"]}/{built["sha256"][:10]})')
    cat = stored.get('tokens', {})
    pol = J('tokens/llm/token-policy.json')
    for field, spec in pol['pageSpecTokenFields'].items():
        for t in spec.get('allowedTokens', []):
            if t not in cat:
                probs.append(f'policy {field} allows unknown token {t}')
    types = {v['type'] for v in cat.values()}
    for k in pol['rawValueRestrictions']:
        if k not in types:
            probs.append(f'policy category {k} is not a catalog token type')
    for t in pol['rawValueRestrictions']['fontFamily']['unsupportedTokens']:
        if t not in cat:
            probs.append(f'unsupported font token {t} not in catalog')
    for theme in ('light', 'dark'):
        th = J(f'tokens/themes/{theme}.json')
        for role, ref in th['resolves'].items():
            if role not in cat:
                probs.append(f'{theme}: role {role} not a semantic token')
            if ref.strip('{}') not in cat:
                probs.append(f'{theme}: {role} -> {ref} does not resolve')
        if sorted(pol['themeTokenCompatibility'][theme]) != sorted(th['resolves']):
            probs.append(f'policy themeTokenCompatibility[{theme}] != {theme} theme roles')
    if SITE_PRESENT:
        values = {v['value'].lower() for v in cat.values() if v['type'] == 'color' and isinstance(v.get('value'), str)}
        src_hex = set()
        tw = open(os.path.join(PROJECT, 'site/tailwind.config.js')).read()
        colors = tw[tw.index('colors:'):tw.index('fontSize:')]
        src_hex |= {h.lower() for h in re.findall(r"'(#[0-9a-fA-F]{6})'", colors)}
        pl = open(os.path.join(PROJECT, 'site/src/components/plans/plans.css')).read()
        src_hex |= {h.lower() for h in re.findall(r'--pl-[a-z0-9-]+:\s*(#[0-9a-fA-F]{6})', pl)}
        missing = sorted(src_hex - values)
        if missing:
            probs.append(f'real source colours missing from the catalog: {missing}')
        detail_src = f'; {len(src_hex)} real source colours (tailwind.config.js + plans.css) all present'
    else:
        detail_src = '; real-source colour drift skipped (no sibling site/)'
    rec('tokens.catalog-drift', 'FAIL' if probs else 'PASS', '; '.join(probs[:6]) or f'catalog == derived from token files ({built["tokenCount"]} tokens){detail_src}')


def check_motion(sv):
    mp = J('tokens/00-foundation/motion-patterns.json')['patterns']
    probs = []
    auto = {k for k, v in mp.items() if v.get('autoAdvancing')}
    if auto != set(sv.AUTO_ADVANCING):
        probs.append(f'AUTO_ADVANCING {sorted(sv.AUTO_ADVANCING)} != motion-patterns autoAdvancing {sorted(auto)}')
    schema_patterns = set(J('schema/pagespec.schema.json')['definitions']['motion']['properties']['pattern']['enum'])
    if schema_patterns != set(mp):
        probs.append('schema motion enum != motion-patterns.json')
    for p in files('sections/*.json'):
        d = J(os.path.relpath(p, REPO))
        for pat in d['motion']['allowedPatterns']:
            if pat not in mp:
                probs.append(f'{d["id"]}: unknown pattern {pat}')
            elif d['motion']['reducedMotionFallbacks'].get(pat) != mp[pat]['reducedMotionFallback']:
                probs.append(f'{d["id"]}: fallback for {pat} != registry')
    rec('motion', 'FAIL' if probs else 'PASS', '; '.join(probs[:6]) or f'{len(mp)} closed motion patterns; every contract pattern + fallback matches the registry')


def check_graph(sv):
    g = J('compatibility/graph.json')
    ids = {r['id'] for r in g['rules']}
    probs = []
    if ids != set(sv.GRAPH_RULES_IMPLEMENTED):
        probs.append(f'graph rules without validator code: {sorted(ids - sv.GRAPH_RULES_IMPLEMENTED)}; validator rules missing from graph: {sorted(sv.GRAPH_RULES_IMPLEMENTED - ids)}')
    for r in g['rules']:
        if r['severity'] not in ('error', 'warn'):
            probs.append(f'{r["id"]}: severity {r["severity"]}')
    rec('graph.validator-parity', 'FAIL' if probs else 'PASS', '; '.join(probs) or f'{len(ids)} graph rules all implemented in semantic_validate.py with matching ids')


def _site_routes():
    out = set()
    base = os.path.join(PROJECT, 'site', 'src', 'pages')
    for root, _, fs in os.walk(base):
        for f in fs:
            if not f.endswith('.jsx'):
                continue
            rel = os.path.relpath(os.path.join(root, f), base).replace(os.sep, '/')
            if any(seg.startswith('_') for seg in rel.split('/')):
                continue
            r = '/' + re.sub(r'\.jsx$', '', rel)
            r = re.sub(r'/index$', '', r)
            r = re.sub(r'\[(\w+)\]', r':\1', r)
            out.add(r or '/')
    return out


def check_routes():
    tpl = J('templates/templates.json')['templates']
    routes = J('templates/routes.json')['routes']
    mv = J('extraction/measured-values.json')['sectionHeights']['routes']
    secs = {os.path.basename(p)[:-5] for p in files('sections/*.json')}
    probs = []
    seen = {}
    for t in tpl.values():
        for r in t['routes']:
            if r in seen:
                probs.append(f'{r} assigned to {seen[r]} and {t["id"]}')
            seen[r] = t['id']
        for n in t['nodes']:
            if n['section'] not in secs:
                probs.append(f'{t["id"]}: unknown section {n["section"]}')
    if set(seen) != set(routes):
        probs.append(f'templates vs routes.json mismatch: {sorted(set(seen) ^ set(routes))[:5]}')
    for r, e in routes.items():
        if seen.get(r) != e['template']:
            probs.append(f'{r}: routes.json {e["template"]} != templates.json {seen.get(r)}')
        if r not in mv:
            probs.append(f'{r}: no sectionHeights measurement')
    if len(routes) != J('templates/routes.json')['routeCount']:
        probs.append('routes.json routeCount stale')
    if SITE_PRESENT:
        site = _site_routes()
        if site != set(routes):
            probs.append(f'route set != site/src/pages: missing {sorted(site - set(routes))[:5]} extra {sorted(set(routes) - site)[:5]}')
        detail = f'{len(routes)} routes = site/src/pages ({len(site)}), each mapped to exactly one of {len(tpl)} templates'
    else:
        detail = f'{len(routes)} routes each mapped to exactly one of {len(tpl)} templates (site/ absent: page-file recount skipped)'
    rec('templates.routes', 'FAIL' if probs else 'PASS', '; '.join(probs[:6]) or detail)


def check_contract_ids():
    probs = []
    for p in files('sections/*.json'):
        d = J(os.path.relpath(p, REPO))
        if os.path.basename(p)[:-5] != d['id']:
            probs.append(f'{p}: file name != id')
        if d['semantic']['id'] != d['id']:
            probs.append(f'{d["id"]}: semantic.id != id')
        if d['source']['id'] == d['id'] or d['source']['id'] == d['semantic']['id']:
            probs.append(f'{d["id"]}: source.id must differ from semantic.id')
        if d['semantic']['category'] != d['category']:
            probs.append(f'{d["id"]}: semantic.category != category')
    rec('contracts.provenance-taxonomy', 'FAIL' if probs else 'PASS', '; '.join(probs[:6]) or 'every contract has source{id,file,tag,lines} separate from semantic{id,category}')


def main(argv):
    if '--counts' in argv:
        print(json.dumps(compute_counts(), indent=1))
        return 0
    check_schema()
    sv = check_semantic()
    check_allowlist(sv)
    check_versions()
    check_citations()
    check_counts()
    check_entrypoints()
    check_hygiene()
    check_pins(sv)
    check_retrieval(sv)
    check_gate()
    check_tokens()
    check_motion(sv)
    check_graph(sv)
    check_routes()
    check_contract_ids()
    for status, name, detail in results:
        print(f'{status:4}  {name:30} {detail}')
    fails = sum(1 for s, _, _ in results if s == 'FAIL')
    print(f'\nverify_all: {sum(1 for s, _, _ in results if s == "PASS")} pass, {fails} fail, {sum(1 for s, _, _ in results if s == "WARN")} warn'
          + ('' if SITE_PRESENT else '  (standalone: citation re-reads skipped)'))
    return 1 if fails else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
