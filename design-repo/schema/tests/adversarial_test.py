#!/usr/bin/env python3
"""Adversarial suite: every mutation must be rejected (with the expected rule), every control must pass.

    python3 schema/tests/adversarial_test.py [-v]

Categories: schema, structural, runtime (maxWords), R5 generated-mode leakage (brand, store mark/URL, review/rating,
person, customer, source URL, source copy, source CTA, proprietary media), R8 retrieval flips (node, runtime
attachment, contract, allowlist), R9 wrapper-gate cases, token policy, asset-pin drift.
Controls: every bundled example; one synthesized generated-mode PageSpec per template (generic loop over
templates.json); one reference-mode PageSpec per measured route (real section sequences from measured-values.json);
the real wrapper-gate run.
"""
import sys
sys.dont_write_bytecode = True
import copy, importlib.util, json, os, shutil, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
VERBOSE = '-v' in sys.argv


def module(rel, name):
    spec = importlib.util.spec_from_file_location(name, os.path.join(REPO, rel))
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


sv = module('schema/semantic_validate.py', 'sv')
wg = module('extraction/wrapper_gate.py', 'wg')
CTX = sv.Ctx(REPO)
J = lambda rel: json.load(open(os.path.join(REPO, rel)))
REF_HOME = J('schema/example.pagespec.json')
REF_LEGAL = J('schema/examples/reference.legal-document.json')
GEN_HOME = J('schema/examples/generated.home.json')
GEN_LEGAL = J('schema/examples/generated.legal-document.json')
GEN_ARTICLE = J('schema/examples/generated.article.json')
results = []


def node(spec, sid, nth=0):
    return [n for n in spec['nodes'] if n['section'] == sid][nth]


def mut(spec, fn):
    s = copy.deepcopy(spec)
    fn(s)
    return s


def reject(cat, name, spec, rules, ctx=None):
    rep = sv.validate(spec, ctx or CTX)
    hit = sorted({e['rule'] for e in rep.errors if e['rule'] in rules})
    results.append(('mutation', cat, name, bool(hit), hit or sorted({e['rule'] for e in rep.errors}) or 'NOT REJECTED'))


def control(cat, name, spec, ctx=None):
    rep = sv.validate(spec, ctx or CTX)
    results.append(('control', cat, name, not rep.errors, [f'{e["rule"]} {e["path"]} {e["message"][:70]}' for e in rep.errors[:3]] or 'ok'))


# ------------------------------------------------------------------------------------------- synthesis
def fill(fields, roles):
    out = {}
    for k, f in fields.items():
        if not f['required']:
            continue
        t = f['type']
        out[k] = {'text': 'Sample text' if f.get('maxWords', 2) >= 2 else 'Sample', 'textList': ['Sample item'],
                  'cta': {'label': 'Start now', 'href': '/start', 'style': 'primary'}, 'ctaList': [{'label': 'Start now', 'href': '/start', 'style': 'primary'}],
                  'media': {'assetRole': roles[0], 'alt': 'Generated illustration'}, 'mediaList': [{'assetRole': roles[0], 'alt': 'Generated illustration'}],
                  'link': {'label': 'Learn more', 'href': '/learn'}, 'linkList': [{'label': 'Learn more', 'href': '/learn'}], 'href': '/learn'}.get(t)
        if t == 'enum':
            out[k] = f['values'][0]
        elif t == 'integer':
            out[k] = f['minimum']
        elif t == 'items':
            out[k] = [fill(f['fields'], roles)]
    return out


def make_node(i, sid, variant):
    c = CTX.contracts[sid]
    roles = c['assets']['generatedAssetRoles'] or ['generated-product-visual']
    p = c['motion']['allowedPatterns'][0]
    return {'id': f'n{i}', 'section': sid, 'variant': variant, 'content': fill(c['content']['fields'], roles),
            'motion': {'pattern': p, 'reducedMotionFallback': c['motion']['reducedMotionFallbacks'][p]}}


def synth_template(tid):
    t = CTX.templates[tid]
    pick = [n for n in t['nodes'] if n['required']]
    if t.get('heroPolicy') == 'required' and not any(CTX.contracts[n['section']]['category'] == 'HERO' for n in pick):
        hero = next(n for n in t['nodes'] if n['section'] == t['requiresOneOf'][0][0])
        pick.append(hero)
    if t.get('rendersContent', True) and not [n for n in pick if not n['section'].startswith('shell.')]:
        pick.append(next(n for n in t['nodes'] if not n['section'].startswith('shell.')))
    order = {n['section']: i for i, n in enumerate(t['nodes'])}
    pick.sort(key=lambda n: (sv.SLOT_ORDER[n['slot']], order[n['section']]))
    return {'pageSpecVersion': '1.0.0', 'mode': 'generated', 'template': tid, 'route': '/sample', 'title': 'Synthesized control',
            'brand': {'name': 'Brightwell Sample', 'domain': 'brightwell.example'},
            'nodes': [make_node(i + 1, n['section'], n['variants'][0]) for i, n in enumerate(pick)]}


def synth_route(route, entry):
    tid = J('templates/routes.json')['routes'][route]['template']
    seq = [('shell.header', 'default')] + [(s['section'], s['variant']) for s in entry['sections']] + [('shell.footer', 'default')]
    return {'pageSpecVersion': '1.0.0', 'mode': 'reference', 'template': tid, 'route': entry['measuredPath'], 'title': f'Measured composition of {route}',
            'nodes': [make_node(i + 1, s, v) for i, (s, v) in enumerate(seq)]}


# ------------------------------------------------------------------------------------------- controls
for f in ['schema/example.pagespec.json'] + sorted('schema/examples/' + x for x in os.listdir(os.path.join(REPO, 'schema/examples'))):
    control('examples', f, J(f))
for tid in CTX.templates:
    control('per-template', tid, synth_template(tid))
for route, entry in J('extraction/measured-values.json')['sectionHeights']['routes'].items():
    control('real-route', route, synth_route(route, entry))
e, w = wg.run(REPO)
results.append(('control', 'wrapper-gate', 'real measured-values.json', not e, e[:2] or f'0 errors, {len(w)} warnings'))
control('token-policy', 'valid style tokens', mut(GEN_HOME, lambda s: node(s, 'features.bento').update(style={'theme': 'light', 'surface': 'surface.subtle', 'paddingY': 'layout.section.padding-y', 'headingFont': 'font.family.body'})))

# ------------------------------------------------------------------------------------------- schema layer
S = {'SCHEMA'}
reject('schema', 'mode not in enum', mut(GEN_HOME, lambda s: s.update(mode='draft')), S)
reject('schema', 'mode missing', mut(GEN_HOME, lambda s: s.pop('mode')), S)
reject('schema', 'invented section type', mut(GEN_HOME, lambda s: node(s, 'features.bento').update(section='hero.fancy')), S | {'SECTION_UNKNOWN'})
reject('schema', 'missing reducedMotionFallback', mut(GEN_HOME, lambda s: node(s, 'hero.home')['motion'].pop('reducedMotionFallback')), S)
reject('schema', 'invented motion field', mut(GEN_HOME, lambda s: node(s, 'hero.home')['motion'].update(inventedAnimation='spin')), S)
reject('schema', 'invented node property', mut(GEN_HOME, lambda s: node(s, 'hero.home').update(color='red')), S)
reject('schema', 'variant not in contract', mut(GEN_HOME, lambda s: node(s, 'hero.home').update(variant='giant')), S | {'CONTRACT_VARIANT'})
reject('schema', 'invented assetRole', mut(GEN_HOME, lambda s: node(s, 'shell.header')['content']['brandMark'].update(assetRole='logo')), S | {'ASSET_ROLE_UNKNOWN'})
reject('schema', 'unknown content field', mut(GEN_HOME, lambda s: node(s, 'hero.home')['content'].update(tagline='extra')), S | {'CONTENT_UNKNOWN_FIELD'})
reject('schema', 'pageSpecVersion drift', mut(GEN_HOME, lambda s: s.update(pageSpecVersion='2.0.0')), S)
reject('schema', 'live-only motion pattern', mut(GEN_HOME, lambda s: node(s, 'hero.home').update(motion={'pattern': 'live.lottie', 'reducedMotionFallback': 'none'})), S | {'MOTION_PATTERN'})
reject('schema', 'invalid cta style', mut(GEN_HOME, lambda s: node(s, 'hero.home')['content']['actions'][0].update(style='neon')), S)
reject('schema', 'required content field missing', mut(GEN_HOME, lambda s: node(s, 'hero.home')['content'].pop('title')), S | {'CONTENT_REQUIRED'})

# ------------------------------------------------------------------------------------------- structural
reject('structural', 'duplicate one-per-page cta.banner', mut(GEN_HOME, lambda s: s['nodes'].insert(-1, dict(copy.deepcopy(node(s, 'cta.banner')), id='dup'))), {'ONE_CTA_BANNER', 'CONTRACT_ONE_PER_PAGE', 'TEMPLATE_REPEAT'})
reject('structural', 'mandatory section removed', mut(GEN_HOME, lambda s: s['nodes'].remove(node(s, 'features.product-tabs'))), {'TEMPLATE_REQUIRED'})
reject('structural', 'fixed-position section reordered', mut(GEN_HOME, lambda s: s['nodes'].append(s['nodes'].pop(0))), {'SHELL_FIRST_LAST', 'CONTRACT_POSITION'})
reject('structural', 'template / node-sequence mismatch', mut(GEN_HOME, lambda s: s.update(template='template.legal-document')), {'TEMPLATE_MEMBERSHIP', 'TEMPLATE_REQUIRED'})
reject('structural', 'two heroes', mut(GEN_HOME, lambda s: s['nodes'].insert(2, dict(copy.deepcopy(node(s, 'hero.home')), id='hero2'))), {'ONE_HERO', 'CONTRACT_ONE_PER_PAGE'})
reject('structural', 'hero not the opener', mut(GEN_HOME, lambda s: s['nodes'].insert(1, s['nodes'].pop(2))), {'HERO_OPENS', 'SLOT_ORDER'})
reject('structural', 'section from another template', mut(GEN_HOME, lambda s: s['nodes'].insert(5, make_node(99, 'pricing.plan-tiers', 'plans'))), {'TEMPLATE_MEMBERSHIP'})
reject('structural', 'home-only hero on legal template', mut(GEN_LEGAL, lambda s: s['nodes'].__setitem__(1, make_node(98, 'hero.home', 'default'))), {'TEMPLATE_MEMBERSHIP', 'HOME_ROUTE_ONLY'})
reject('structural', 'reference route not in template', mut(REF_HOME, lambda s: s.update(route='/pricing')), {'ROUTE_TEMPLATE'})
reject('structural', 'non-repeatable (section, variant) repeated', mut(GEN_HOME, lambda s: s['nodes'].insert(8, dict(copy.deepcopy(node(s, 'features.bento')), id='dupb'))), {'TEMPLATE_REPEAT'})
reject('structural', 'variant not used by this template', mut(GEN_HOME, lambda s: node(s, 'features.card-grid').update(variant='carousel')), {'TEMPLATE_MEMBERSHIP'})
reject('structural', 'reducedMotionFallback does not match pattern', mut(GEN_HOME, lambda s: node(s, 'hero.home')['motion'].update(reducedMotionFallback='none')), {'MOTION_FALLBACK'})
reject('structural', 'motion pattern not allowed for the section', mut(GEN_HOME, lambda s: node(s, 'cta.banner').update(motion={'pattern': 'auto-advance-tabs', 'reducedMotionFallback': 'manual-tabs-first-active'})), {'MOTION_PATTERN', 'SCHEMA'})
reject('structural', 'contentful template with no content', mut(GEN_LEGAL, lambda s: s.update(nodes=[s['nodes'][0], s['nodes'][-1]])), {'TEMPLATE_EMPTY', 'TEMPLATE_REQUIRED'})
reject('structural', 'hero on a hero-less template', mut(synth_template('template.pricing'), lambda s: s['nodes'].insert(1, make_node(97, 'hero.page-header', 'default'))), {'ONE_HERO', 'TEMPLATE_MEMBERSHIP'})
reject('structural', 'runtime attachment to a missing node', mut(GEN_HOME, lambda s: s['runtime'][0].update(attachedTo='n404')), {'RUNTIME_ATTACHMENT'})

# ------------------------------------------------------------------------------------------- runtime (maxWords)
LONG = ' '.join(['word'] * 130)
reject('runtime', 'maxWords overflow on hero title', mut(GEN_HOME, lambda s: node(s, 'hero.home')['content'].update(title='One calm place to plan the work and write it all down together today')), {'MAX_WORDS'})
reject('runtime', 'maxWords overflow in a nested item', mut(GEN_HOME, lambda s: node(s, 'features.product-tabs')['content']['tabs'][0].update(description=' '.join(['steady'] * 15))), {'MAX_WORDS'})
reject('runtime', 'maxWords overflow in a long-form paragraph', mut(GEN_LEGAL, lambda s: node(s, 'content.chapter')['content'].update(paragraphs=[LONG])), {'MAX_WORDS'})
reject('runtime', 'maxWords overflow on an action label', mut(GEN_HOME, lambda s: node(s, 'hero.home')['content']['actions'][0].update(label='Open a free account today and invite the rest of the crew')), {'MAX_WORDS'})

# ------------------------------------------------------------------------------------------- R5 generated-mode leakage
L = lambda *r: set(r)
reject('leak.brand', 'brand name in page title', mut(GEN_HOME, lambda s: s.update(title='Plane for crews')), L('GENERATED_MODE_BRAND'))
reject('leak.brand', 'brand declared as the source brand', mut(GEN_HOME, lambda s: s['brand'].update(name='Plane')), L('GENERATED_MODE_BRAND'))
reject('leak.brand', 'product name in heading', mut(GEN_HOME, lambda s: node(s, 'features.tabbed-showcase')['content'].update(title='Meet Plane AI helpers')), L('GENERATED_MODE_BRAND'))
reject('leak.brand', 'brand missing in generated mode', mut(GEN_HOME, lambda s: s.pop('brand')), L('GENERATED_MODE_BRAND'))
reject('leak.logo', 'real wordmark role in header', mut(GEN_HOME, lambda s: node(s, 'shell.header')['content']['brandMark'].update(assetRole='brand-wordmark')), L('GENERATED_MODE_ASSET'))
reject('leak.store', 'store mark role', mut(GEN_HOME, lambda s: node(s, 'cta.app-download')['content']['platforms'][0].update(icon={'assetRole': 'app-store-mark', 'alt': 'store'})), L('GENERATED_MODE_ASSET'))
reject('leak.store', 'store URL', mut(GEN_HOME, lambda s: node(s, 'cta.app-download')['content']['platforms'][0]['action'].update(href='https://apps.apple.com/in/app/plane/id6657986465')), L('GENERATED_MODE_STORE', 'GENERATED_MODE_URL'))
reject('leak.store', 'store mark wording', mut(GEN_HOME, lambda s: node(s, 'cta.app-download')['content']['platforms'][0].update(label='Get it on Google Play')), L('GENERATED_MODE_STORE'))
reject('leak.rating', 'numeric rating', mut(GEN_HOME, lambda s: node(s, 'proof.story-cards')['content']['cards'][0].update(quote='Rated 4.9/5 by every crew we asked')), L('GENERATED_MODE_RATING'))
reject('leak.rating', 'review platform', mut(GEN_HOME, lambda s: node(s, 'proof.story-cards')['content']['cards'][0].update(quote='Top pick on G2 this spring')), L('GENERATED_MODE_RATING'))
reject('leak.review', 'real testimonial text', mut(GEN_HOME, lambda s: node(s, 'proof.story-cards')['content']['cards'][0].update(
    quote='The team is creating a product that our business has been needing for years.')), L('GENERATED_MODE_COPY'))
reject('leak.person', 'real customer person', mut(GEN_HOME, lambda s: node(s, 'proof.story-cards')['content']['cards'][0].update(attribution='Duane Arnett')), L('GENERATED_MODE_PERSON'))
reject('leak.person', 'real author', mut(GEN_ARTICLE, lambda s: node(s, 'hero.article-header')['content'].update(meta=['Sneha Kanojia', '4 Feb 2026'])), L('GENERATED_MODE_PERSON'))
reject('leak.person', 'real person photo role', mut(GEN_HOME, lambda s: node(s, 'proof.story-cards')['content']['cards'][0].update(logo={'assetRole': 'person-photo', 'alt': 'portrait'})), L('GENERATED_MODE_ASSET'))
reject('leak.customer', 'real customer name', mut(GEN_HOME, lambda s: node(s, 'proof.logo-wall')['content']['logos'][0].update(alt='Accenture')), L('GENERATED_MODE_CUSTOMER'))
reject('leak.customer', 'real customer logo role', mut(GEN_HOME, lambda s: node(s, 'proof.logo-wall')['content']['logos'][0].update(assetRole='customer-logo')), L('GENERATED_MODE_ASSET'))
reject('leak.url', 'source app URL', mut(GEN_HOME, lambda s: node(s, 'hero.home')['content']['actions'][0].update(href='https://app.plane.so/sign-up')), L('GENERATED_MODE_URL'))
reject('leak.url', 'source social profile', mut(GEN_HOME, lambda s: node(s, 'shell.footer')['content']['socialLinks'][0].update(href='https://github.com/makeplane/plane')), L('GENERATED_MODE_URL'))
reject('leak.url', 'non-reserved real domain', mut(GEN_HOME, lambda s: node(s, 'cta.banner')['content']['actions'][0].update(href='https://tallyfold.com/join')), L('GENERATED_MODE_URL'))
reject('leak.url', 'brand domain not reserved', mut(GEN_HOME, lambda s: s['brand'].update(domain='tallyfold.com')), L('GENERATED_MODE_URL'))
reject('leak.copy', 'source hero heading', mut(GEN_HOME, lambda s: node(s, 'hero.home')['content'].update(title='Project management and knowledge management for teams and agents')), L('GENERATED_MODE_COPY'))
reject('leak.copy', 'source section heading', mut(GEN_HOME, lambda s: node(s, 'features.tabbed-showcase')['content'].update(title='AI that works because it knows your context')), L('GENERATED_MODE_COPY'))
reject('leak.copy', 'source tagline fragment inside new text', mut(GEN_HOME, lambda s: node(s, 'features.steps')['content'].update(title='Full migration support from day one, whether you move')), L('GENERATED_MODE_COPY'))
reject('leak.cta', 'source CTA string', mut(GEN_HOME, lambda s: node(s, 'hero.home')['content']['actions'][1].update(label='Talk to a human →')), L('GENERATED_MODE_CTA'))
reject('leak.cta', 'brand CTA pattern', mut(GEN_HOME, lambda s: node(s, 'cta.banner')['content']['actions'][0].update(label='Try Plane free')), L('GENERATED_MODE_CTA'))
reject('leak.media', 'proprietary video path', mut(GEN_HOME, lambda s: node(s, 'features.product-tabs')['content']['tabs'][0]['media'].update(src='/assets/hero-loop.v6.1264.h264.mp4')), L('GENERATED_MODE_ASSET'))
reject('leak.media', 'product screenshot role', mut(GEN_HOME, lambda s: node(s, 'features.product-tabs')['content']['tabs'][0]['media'].update(assetRole='product-screenshot')), L('GENERATED_MODE_ASSET'))
reject('leak.media', 'proprietary artwork role', mut(GEN_HOME, lambda s: node(s, 'cta.banner')['content']['background'].update(assetRole='decorative-artwork')), L('GENERATED_MODE_ASSET'))
reject('leak.media', 'compliance badge role', mut(GEN_HOME, lambda s: node(s, 'shell.footer')['content']['badges'][0].update(assetRole='compliance-badge')), L('GENERATED_MODE_ASSET'))
reject('leak.media', 'media src on a source domain', mut(GEN_HOME, lambda s: node(s, 'features.bento')['content']['cards'][0]['media'].update(src='https://plane.so/media/view.webp')), L('GENERATED_MODE_URL', 'GENERATED_MODE_BRAND'))

# ------------------------------------------------------------------------------------------- R8 retrieval flips
reject('R8.node', 'runtime section used as a page node', mut(GEN_HOME, lambda s: s['nodes'].insert(-1, make_node(96, 'runtime.cookie-consent', 'default'))), {'SCHEMA', 'RETRIEVAL_PIN'})
reject('R8.node', 'content node marked ineligible', mut(GEN_HOME, lambda s: node(s, 'features.bento').update(retrievalEligible=False)), {'RETRIEVAL_PIN'})
reject('R8.node', 'runtime attachment flipped eligible', mut(GEN_HOME, lambda s: s['runtime'][0].update(retrievalEligible=True)), {'SCHEMA', 'RETRIEVAL_PIN'})
reject('R8.node', 'content section attached as runtime', mut(GEN_HOME, lambda s: s['runtime'].append({'section': 'features.bento', 'retrievalEligible': False, 'attachedTo': 'n1'})), {'SCHEMA', 'RETRIEVAL_PIN'})


def temp_repo(edit):
    d = tempfile.mkdtemp(prefix='adv-')
    root = os.path.join(d, 'design-repo')
    shutil.copytree(REPO, root, ignore=shutil.ignore_patterns('__pycache__', '.DS_Store'))
    edit(root)
    return d, sv.Ctx(root)


def edit_json(root, rel, fn):
    p = os.path.join(root, rel)
    d = json.load(open(p))
    fn(d)
    json.dump(d, open(p, 'w'), indent=2)


def add_unpinned_runtime(root):
    shutil.copy(os.path.join(root, 'sections/features.bento.json'), os.path.join(root, 'sections/runtime.toast.json'))
    edit_json(root, 'sections/runtime.toast.json', lambda d: d.update(id='runtime.toast', title='Success toast'))


def flip_contract(sid, val):
    def e(root):
        def f(d):
            d['retrievalEligible'] = val
            if val:
                d.pop('retrievalIneligibleReason', None)
            else:
                d['retrievalIneligibleReason'] = 'flipped by the adversarial test to prove the pin catches it'
        edit_json(root, f'sections/{sid}.json', f)
    return e


for label, edit, rules in [
    ('contract: runtime section flipped eligible', flip_contract('runtime.mega-menu', True), {'CONTRACT_RETRIEVAL_PIN'}),
    ('contract: content section marked ineligible', flip_contract('features.bento', False), {'CONTRACT_RETRIEVAL_PIN'}),
    ('allowlist: runtime section flipped eligible', lambda r: edit_json(r, 'tokens/llm/component-allowlist.json', lambda d: d['sections']['runtime.mega-menu'].update(retrievalEligible=True)), {'ALLOWLIST_RETRIEVAL_PIN'}),
    ('contract: new runtime-looking section not pinned', lambda r: add_unpinned_runtime(r), {'CONTRACT_RETRIEVAL_PIN'}),
    ('asset registry: blocked role loosened to generation-safe', lambda r: edit_json(r, 'assets/asset-roles.json', lambda d: [x.update(availability='generation-safe') for x in d['roles'] if x['id'] == 'customer-logo']), {'ASSET_PIN_DRIFT'}),
]:
    tmp, ctx = temp_repo(edit)
    try:
        cat = 'R8.' + label.split(':')[0] if 'asset' not in label else 'R3.pin'
        reject(cat, label, GEN_HOME, rules, ctx)
        if 'asset registry' in label:  # the pinned value still wins: a generated page using the loosened role stays rejected
            reject('R3.pin', 'loosened role still rejected in generated mode', mut(GEN_HOME, lambda s: node(s, 'proof.logo-wall')['content']['logos'][0].update(assetRole='customer-logo')), {'GENERATED_MODE_ASSET'}, ctx)
    finally:
        shutil.rmtree(tmp)

# ------------------------------------------------------------------------------------------- token policy
def styled(sid, style, base=GEN_HOME):
    return mut(base, lambda s: node(s, sid).update(style=style))
reject('token', 'unknown token', styled('features.bento', {'surface': 'surface.neon'}), {'TOKEN_UNKNOWN'})
reject('token', 'raw hex colour', styled('features.bento', {'surface': '#ff0066'}), {'TOKEN_RAW_COLOR'})
reject('token', 'raw rgb colour', styled('features.bento', {'surface': 'rgb(20, 20, 20)'}), {'TOKEN_RAW_COLOR'})
reject('token', 'arbitrary spacing', styled('features.bento', {'paddingY': '37px'}), {'TOKEN_ARBITRARY_SPACING'})
reject('token', 'unsupported font name', styled('features.bento', {'headingFont': 'Comic Sans MS'}), {'TOKEN_UNSUPPORTED_FONT'})
reject('token', 'loaded-but-unused font token', styled('features.bento', {'headingFont': 'font.family.serif'}), {'TOKEN_UNSUPPORTED_FONT'})
reject('token', 'light-only surface in dark theme', styled('features.tabbed-showcase', {'theme': 'dark', 'surface': 'surface.stage-frame'}), {'TOKEN_THEME_COMBINATION'})
reject('token', 'theme not supported by the section', styled('hero.home', {'theme': 'dark'}), {'TOKEN_THEME_COMBINATION'})
reject('token', 'real token not allowed for the field', styled('features.bento', {'paddingY': 'radius.8'}), {'TOKEN_NOT_ALLOWED'})

# ------------------------------------------------------------------------------------------- R9 wrapper gate
CATS = {k: v['category'] for k, v in CTX.contracts.items()}
def sh(sections, width=1440, route='/x'):
    return {'viewport': {'width': width, 'height': 900}, 'routes': {route: {'sections': sections}}}
def S_(sec, h, var='default', top=0, flow=True):
    return {'section': sec, 'variant': var, 'height': h, 'top': top, 'inFlow': flow}
AG = 'Claude (agent) - agent attestation, not a human sign-off'
def gate_case(name, sheights, routes, wl, expect):  # expect: 'error' | 'warn' | 'pass'
    e, w = wg.gate(sheights, routes, CATS, wl)
    got = 'error' if e else ('warn' if w else 'pass')
    results.append(('mutation' if expect != 'pass' else 'control', 'R9.gate', name, got == expect, (e or w or ['clean'])[:2]))
base_rest = [S_('features.bento', 600), S_('cta.banner', 400)]
gate_case('HERO 1900px warns', sh([S_('hero.marketing', 1900, 'centered')] + base_rest + [S_('faq.accordion', 900)]), ['/x'], [], 'warn')
gate_case('HERO 3100px fails', sh([S_('hero.marketing', 3100, 'centered')] + base_rest + [S_('faq.accordion', 3000)]), ['/x'], [], 'error')
gate_case('majority share 64% fails', sh([S_('hero.marketing', 400, 'centered'), S_('content.chapter', 2000, 'legal'), S_('faq.accordion', 400), S_('cta.banner', 300)]), ['/x'], [], 'error')
gate_case('share 52% warns', sh([S_('hero.marketing', 400, 'centered'), S_('content.chapter', 1300, 'legal'), S_('faq.accordion', 500), S_('cta.banner', 300)]), ['/x'], [], 'warn')
WLC = {'route': '/x', 'section': 'content.chapter', 'variant': 'legal', 'maxHeightPx': 2200, 'justification': 'single table chapter with no internal headings to split at', 'reviewedBy': AG}
MAJ = sh([S_('hero.marketing', 400, 'centered'), S_('content.chapter', 2000, 'legal'), S_('faq.accordion', 400), S_('cta.banner', 300)])
gate_case('whitelisted majority still warns', MAJ, ['/x'], [WLC], 'warn')
gate_case('whitelist without justification fails', MAJ, ['/x'], [dict(WLC, justification='')], 'error')
gate_case('agent reviewer without attestation fails', MAJ, ['/x'], [dict(WLC, reviewedBy='Claude')], 'error')
gate_case('whitelist below measured height (over cap) fails', MAJ, ['/x'], [dict(WLC, maxHeightPx=1500)], 'error')
gate_case('stale whitelist entry fails', MAJ, ['/x'], [WLC, dict(WLC, route='/gone')], 'error')
gate_case('missing measurement fails', MAJ, ['/x', '/not-measured'], [WLC], 'error')
gate_case('wrong viewport fails', sh([S_('hero.marketing', 400, 'centered')] + base_rest, width=1280), ['/x'], [], 'error')
gate_case('fewer than 3 sections skipped', sh([S_('hero.page-header', 100), S_('content.chapter', 5000, 'legal')]), ['/x'], [], 'pass')
gate_case('side column (inFlow=false) takes no height', sh([S_('hero.marketing', 400, 'centered'), S_('nav.toc', 5000, 'blog-sidebar', flow=False), S_('content.chapter', 600, 'article'), S_('cta.banner', 500)]), ['/x'], [], 'pass')

# ------------------------------------------------------------------------------------------- report
muts = [r for r in results if r[0] == 'mutation']
ctrls = [r for r in results if r[0] == 'control']
bad = [r for r in results if not r[3]]
by_cat = {}
for r in results:
    k = (r[0], r[1].split('.')[0] if r[0] == 'mutation' else r[1])
    by_cat.setdefault(k, [0, 0])
    by_cat[k][0] += r[3]
    by_cat[k][1] += 1
for (kind, cat), (ok, n) in sorted(by_cat.items()):
    print(f'{kind:8} {cat:16} {ok}/{n}')
if VERBOSE or bad:
    for r in results:
        if VERBOSE or not r[3]:
            print(f'{"ok " if r[3] else "BAD"} {r[0]:8} {r[1]:16} {r[2]}: {r[4]}')
print(f'\nadversarial: {sum(r[3] for r in muts)}/{len(muts)} mutations rejected, {sum(r[3] for r in ctrls)}/{len(ctrls)} controls passed')
sys.exit(1 if bad else 0)
