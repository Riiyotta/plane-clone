#!/usr/bin/env python3
"""Derive tokens/llm/token-catalog.json from the token files (tokens/00-foundation, 10-semantic, 20-component,
30-layout, themes). The catalog is never hand-edited.

    python3 extraction/build_token_catalog.py --write   # regenerate
    python3 extraction/build_token_catalog.py --check   # exit 1 if the stored catalog drifted from the token files
"""
import sys
sys.dont_write_bytecode = True
import glob, hashlib, json, os

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LAYERS = ['tokens/00-foundation', 'tokens/10-semantic', 'tokens/20-component', 'tokens/30-layout']
CATALOG = 'tokens/llm/token-catalog.json'


def build(repo=REPO):
    tokens, files = {}, []
    for layer in LAYERS:
        for f in sorted(glob.glob(os.path.join(repo, layer, '*.json'))):
            rel = os.path.relpath(f, repo)
            d = json.load(open(f))
            if 'tokens' not in d:
                continue  # motion-patterns.json is a pattern registry, not a token file
            files.append(rel)
            for k, v in d['tokens'].items():
                if k in tokens:
                    raise SystemExit(f'duplicate token {k} in {rel}')
                e = {'type': v['type'], 'layer': layer.split('/')[1], 'file': rel}
                if 'value' in v:
                    e['value'] = v['value']
                if 'source' in v:
                    e['source'] = v['source']
                if 'status' in v:
                    e['status'] = v['status']
                tokens[k] = e
    themes = {}
    for f in sorted(glob.glob(os.path.join(repo, 'tokens/themes/*.json'))):
        d = json.load(open(f))
        files.append(os.path.relpath(f, repo))
        themes[d['theme']] = d['resolves']
    for k, e in tokens.items():
        if e['type'] == 'role':
            e['themes'] = {t: themes[t][k] for t in sorted(themes) if k in themes[t]}
    counts = {}
    for e in tokens.values():
        counts[e['type']] = counts.get(e['type'], 0) + 1
    body = {'tokens': dict(sorted(tokens.items()))}
    digest = hashlib.sha256(json.dumps(body, sort_keys=True).encode()).hexdigest()
    return {'catalogVersion': '1.0.0', 'derivedFrom': files, 'derivedBy': 'extraction/build_token_catalog.py',
            'note': 'Every token an LLM may reference. Derived from the token files (which cite the real config/CSS/CLONE_SPEC); drift between this file and the token files fails verify_all.',
            'tokenCount': len(tokens), 'countsByType': dict(sorted(counts.items())), 'sha256': digest, **body}


def main(argv):
    cat = build()
    path = os.path.join(REPO, CATALOG)
    if '--write' in argv:
        with open(path, 'w') as f:
            json.dump(cat, f, indent=2, ensure_ascii=False)
            f.write('\n')
        print(f'wrote {CATALOG}: {cat["tokenCount"]} tokens')
        return 0
    stored = json.load(open(path))
    if stored != cat:
        print(f'DRIFT: {CATALOG} does not match the token files (stored {stored.get("tokenCount")} tokens / sha {str(stored.get("sha256"))[:12]}, derived {cat["tokenCount"]} / {cat["sha256"][:12]})')
        return 1
    print(f'catalog in sync: {cat["tokenCount"]} tokens, sha256 {cat["sha256"][:12]}')
    return 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
