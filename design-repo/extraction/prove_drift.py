#!/usr/bin/env python3
"""Prove that verify_all.py actually catches drift.

    python3 extraction/prove_drift.py

For every drift class: copy design-repo/ into a fresh temp dir (tempfile), link the read-only evidence siblings
(site/, CLONE_SPEC.md, ASSET_MANIFEST.md, PAGES_BRIEF.md) next to it when they exist, inject the drift, run
verify_all.py there and require a FAIL on the expected check. A clean copy must pass, and a standalone copy
(no evidence siblings) must still pass with citation re-reads degraded to a warning. Nothing in the real repo or
the evidence is modified.
"""
import sys
sys.dont_write_bytecode = True
import json, os, re, shutil, subprocess, tempfile

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT = os.path.dirname(REPO)
EVIDENCE = ['site', 'CLONE_SPEC.md', 'ASSET_MANIFEST.md', 'PAGES_BRIEF.md']


def setup(with_evidence=True):
    d = tempfile.mkdtemp(prefix='drift-')
    root = os.path.join(d, 'design-repo')
    shutil.copytree(REPO, root, ignore=shutil.ignore_patterns('__pycache__', '.DS_Store'))
    if with_evidence:
        for e in EVIDENCE:
            src = os.path.join(PROJECT, e)
            if os.path.exists(src):
                os.symlink(src, os.path.join(d, e))
    return d, root


def run(root):
    p = subprocess.run([sys.executable, os.path.join(root, 'extraction/verify_all.py')], capture_output=True, text=True,
                       env=dict(os.environ, PYTHONDONTWRITEBYTECODE='1'))
    fails = {m.group(1) for m in re.finditer(r'^FAIL\s+(\S+)', p.stdout, re.M)}
    return p.returncode, fails, p.stdout


def ej(root, rel, fn):
    p = os.path.join(root, rel)
    d = json.load(open(p))
    fn(d)
    json.dump(d, open(p, 'w'), indent=2)


def et(root, rel, old, new, count=1):
    p = os.path.join(root, rel)
    t = open(p).read()
    if old not in t:
        raise SystemExit(f'prove_drift setup error: {old!r} not in {rel}')
    open(p, 'w').write(t.replace(old, new, count))


def first_token(root):
    return json.load(open(os.path.join(root, 'tokens/llm/token-catalog.json')))['tokens']


def bump_readme_sections(root):
    p = os.path.join(root, 'README.md')
    t = open(p).read()
    m = re.search(r'^\| sections \| (\d+) \|', t, re.M)
    open(p, 'w').write(t.replace(m.group(0), f'| sections | {int(m.group(1)) + 1} |', 1))


CASES = [
    ('phantom allowlist entry', 'allowlist.parity', lambda r: ej(r, 'tokens/llm/component-allowlist.json', lambda d: d['sections'].update({'features.phantom': {'category': 'FEATURES', 'variants': ['default'], 'retrievalEligible': True}}))),
    ('orphan contract (allowlist entry removed)', 'allowlist.parity', lambda r: ej(r, 'tokens/llm/component-allowlist.json', lambda d: d['sections'].pop('faq.accordion'))),
    ('schema node property without allowlist entry', 'allowlist.parity', lambda r: ej(r, 'schema/pagespec.schema.json', lambda d: d['definitions']['node']['properties'].update(extra={'type': 'string'}))),
    ('out-of-range citation', 'citations', lambda r: ej(r, 'sections/hero.home.json', lambda d: d['source'].update(lines='32-99999'))),
    ('in-range citation at the wrong code', 'citations', lambda r: ej(r, 'sections/hero.home.json', lambda d: d['source'].update(lines='1-5'))),
    ('token citation pointing at a line without the value', 'citations', lambda r: ej(r, 'tokens/00-foundation/color.json', lambda d: d['tokens']['color.neutral.0'].update(source='site/tailwind.config.js:1'))),
    ('manifest count hand-bumped', 'manifest.counts', lambda r: ej(r, 'registry.manifest.json', lambda d: d['counts'].update(sections=d['counts']['sections'] + 1))),
    ('README count stale', 'docs.counts', lambda r: bump_readme_sections(r)),
    ('allowlistVersion drift', 'versions', lambda r: ej(r, 'tokens/llm/component-allowlist.json', lambda d: d.update(allowlistVersion='1.0.1'))),
    ('pageSpecVersion drift', 'versions', lambda r: ej(r, 'registry.manifest.json', lambda d: d.update(pageSpecVersion='9.9.9'))),
    ('entryPoint outside the package', 'manifest.entryPoints', lambda r: ej(r, 'registry.manifest.json', lambda d: d['entryPoints'].update(cloneSpec='../CLONE_SPEC.md'))),
    ('absolute machine path in docs', 'hygiene.absolute-paths', lambda r: open(os.path.join(r, 'README.md'), 'a').write('\nsee ' + '/' + 'Users/someone/project/file\n')),
    ('junk file', 'hygiene.junk-files', lambda r: open(os.path.join(r, 'sections/.DS_Store'), 'w').write('x')),
    ('asset registry availability loosened', 'pins.asset-availability', lambda r: ej(r, 'assets/asset-roles.json', lambda d: [x.update(availability='generation-safe') for x in d['roles'] if x['id'] == 'customer-logo'])),
    ('availability pin removed from verify_all.py', 'pins.asset-availability', lambda r: et(r, 'extraction/verify_all.py', "'customer-logo': 'blocked-for-generation',", '')),
    ('availability pin changed in semantic_validate.py only', 'pins.asset-availability', lambda r: et(r, 'schema/semantic_validate.py', "'person-photo': 'blocked-for-generation'", "'person-photo': 'generation-safe'")),
    ('contract + allowlist flipped together', 'pins.retrieval', lambda r: (ej(r, 'sections/runtime.mega-menu.json', lambda d: (d.update(retrievalEligible=True), d.pop('retrievalIneligibleReason'))),
                                                                       ej(r, 'tokens/llm/component-allowlist.json', lambda d: d['sections']['runtime.mega-menu'].update(retrievalEligible=True)))),
    ('runtime-looking contract added without pin', 'pins.retrieval', lambda r: (shutil.copy(os.path.join(r, 'sections/features.bento.json'), os.path.join(r, 'sections/runtime.toast.json')),
                                                                              ej(r, 'sections/runtime.toast.json', lambda d: d.update(id='runtime.toast', title='Success toast')),
                                                                              ej(r, 'tokens/llm/component-allowlist.json', lambda d: d['sections'].update({'runtime.toast': {'category': 'FEATURES', 'variants': d['sections']['features.bento']['variants'], 'retrievalEligible': True}})))),
    ('retrieval pin removed from semantic_validate.py', 'pins.retrieval', lambda r: et(r, 'schema/semantic_validate.py', "'runtime.tooltip'})", "})")),
    ('measured HERO raised to 3100px', 'wrapper-gate', lambda r: ej(r, 'extraction/measured-values.json', lambda d: d['sectionHeights']['routes']['/']['sections'][0].update(height=3100))),
    ('route measurement removed', 'wrapper-gate', lambda r: ej(r, 'extraction/measured-values.json', lambda d: d['sectionHeights']['routes'].pop('/pricing'))),
    ('whitelist justification removed', 'wrapper-gate', lambda r: ej(r, 'extraction/measured-values.json', lambda d: d['wrapperGate']['whitelist'][0].update(justification=''))),
    ('agent whitelist without attestation', 'wrapper-gate', lambda r: ej(r, 'extraction/measured-values.json', lambda d: d['wrapperGate']['whitelist'][0].update(reviewedBy='Claude'))),
    ('measured at the wrong viewport', 'wrapper-gate', lambda r: ej(r, 'extraction/measured-values.json', lambda d: d['sectionHeights']['viewport'].update(width=1280))),
    ('gate threshold loosened in code', 'wrapper-gate', lambda r: et(r, 'extraction/wrapper_gate.py', 'SHARE_ERROR = 0.60', 'SHARE_ERROR = 0.99')),
    ('token file edited without rebuilding the catalog', 'tokens.catalog-drift', lambda r: ej(r, 'tokens/00-foundation/spacing.json', lambda d: d['tokens']['space.4'].update(value='17px'))),
    ('catalog edited by hand', 'tokens.catalog-drift', lambda r: ej(r, 'tokens/llm/token-catalog.json', lambda d: d['tokens'].pop('radius.8'))),
    ('policy allows a token that does not exist', 'tokens.catalog-drift', lambda r: ej(r, 'tokens/llm/token-policy.json', lambda d: d['pageSpecTokenFields']['node.style.surface']['allowedTokens'].append('surface.neon'))),
    ('real source colour dropped from foundation', 'tokens.catalog-drift', lambda r: (ej(r, 'tokens/00-foundation/color.json', lambda d: d['tokens'].pop('color.neutral.660')),
                                                                                     subprocess.run([sys.executable, os.path.join(r, 'extraction/build_token_catalog.py'), '--write'], capture_output=True))),
    ('graph rule without validator code', 'graph.validator-parity', lambda r: ej(r, 'compatibility/graph.json', lambda d: d['rules'].append({'id': 'NO_DOUBLE_FAQ', 'severity': 'error', 'description': 'x', 'exceptions': []}))),
    ('route assigned to two templates', 'templates.routes', lambda r: ej(r, 'templates/templates.json', lambda d: d['templates']['template.home']['routes'].append('/pricing'))),
    ('motion fallback drift in a contract', 'motion', lambda r: ej(r, 'sections/hero.home.json', lambda d: d['motion']['reducedMotionFallbacks'].update({'hero-word-blur-in': 'none'}))),
    ('example made to leak the source brand', 'semantic.examples', lambda r: ej(r, 'schema/examples/generated.home.json', lambda d: d['brand'].update(name='Plane'))),
    ('provenance id equal to taxonomy id', 'contracts.provenance-taxonomy', lambda r: ej(r, 'sections/faq.accordion.json', lambda d: d['source'].update(id='faq.accordion'))),
]


def main():
    have_site = os.path.isdir(os.path.join(PROJECT, 'site'))
    out, bad = [], 0
    d, root = setup()
    code, fails, txt = run(root)
    shutil.rmtree(d)
    out.append(('clean copy passes', code == 0, 'exit 0' if code == 0 else f'exit {code}: {sorted(fails)}'))
    bad += code != 0
    d, root = setup(with_evidence=False)
    code, fails, txt = run(root)
    shutil.rmtree(d)
    warn = 'WARN  citations' in txt
    out.append(('standalone copy passes (citations degrade to WARN)', code == 0 and warn, f'exit {code}, citations warn={warn}'))
    bad += not (code == 0 and warn)
    for name, check, inject in CASES:
        if not have_site and check == 'citations':
            out.append((name, True, 'skipped: no sibling site/'))
            continue
        d, root = setup()
        try:
            inject(root)
            code, fails, _ = run(root)
        finally:
            shutil.rmtree(d)
        ok = code != 0 and check in fails
        bad += not ok
        out.append((name, ok, f'verify_all exit {code}; FAIL in {sorted(fails)}'))
    for name, ok, detail in out:
        print(f'{"CAUGHT" if ok else "MISSED"}  {name:52} {detail}')
    caught = sum(1 for n, ok, _ in out[2:] if ok)
    print(f'\nprove_drift: {caught}/{len(CASES)} drift classes caught; clean copy {"passes" if out[0][1] else "FAILS"}; standalone copy {"passes" if out[1][1] else "FAILS"}')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
