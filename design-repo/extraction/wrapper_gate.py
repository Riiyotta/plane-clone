#!/usr/bin/env python3
"""Whole-page-wrapper quality gate (R9) over measured section heights.

    python3 extraction/wrapper_gate.py          # gate extraction/measured-values.json; exit 1 on any error

Rules (thresholds pinned in code, not only in JSON):
  * HERO taller than 1800px -> warning; taller than 3000px -> error unless whitelisted.
  * One in-flow section holding > 50% of its page's in-flow height -> warning; > 60% -> error unless whitelisted.
    Pages with fewer than 3 in-flow sections are skipped; SHELL sections and sticky/fixed side columns
    (inFlow=false) take no page height.
  * Missing measurement for a route -> error (a route may have zero sections only if it declares redirectTo).
  * Measured at a viewport other than 1440px wide -> error.
  * Whitelist entries need reviewedBy, a justification of >= 30 characters and maxHeightPx above the measured
    height. Stale (no matching measured section) and over-cap entries fail. An agent reviewer must say
    "agent attestation, not a human sign-off". Entries match on (route, section, variant[, top]).
    A whitelisted hit still warns.
"""
import sys
sys.dont_write_bytecode = True
import json, os, re

HERO_WARN_PX = 1800
HERO_ERROR_PX = 3000
SHARE_WARN = 0.50
SHARE_ERROR = 0.60
MIN_SECTIONS_FOR_SHARE = 3
REQUIRED_VIEWPORT_WIDTH = 1440
MIN_JUSTIFICATION_CHARS = 30
AGENT_ATTESTATION = 'agent attestation, not a human sign-off'
AGENT_HINT = re.compile(r'(?i)\b(agent|claude|bot|assistant|automated|llm)\b')

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _categories(repo):
    cats = {}
    for name in os.listdir(os.path.join(repo, 'sections')):
        if name.endswith('.json'):
            c = json.load(open(os.path.join(repo, 'sections', name)))
            cats[c['id']] = c['category']
    return cats


def gate(section_heights, routes, categories, whitelist):
    """Return (errors, warnings) as lists of strings."""
    errors, warnings = [], []
    vp = (section_heights or {}).get('viewport', {})
    if vp.get('width') != REQUIRED_VIEWPORT_WIDTH:
        errors.append(f'VIEWPORT: sectionHeights measured at width {vp.get("width")}, gate requires {REQUIRED_VIEWPORT_WIDTH}')
    measured = (section_heights or {}).get('routes', {})
    wl_used = set()

    def wl_for(route, s):
        for i, w in enumerate(whitelist):
            if w.get('route') == route and w.get('section') == s['section'] and w.get('variant') == s.get('variant') and w.get('top', s.get('top')) == s.get('top'):
                return i, w
        return None, None

    for i, w in enumerate(whitelist):
        tag = f'WHITELIST[{i}] {w.get("route")} {w.get("section")}'
        if not str(w.get('reviewedBy', '')).strip():
            errors.append(f'{tag}: missing reviewedBy')
        elif AGENT_HINT.search(w['reviewedBy']) and AGENT_ATTESTATION not in w['reviewedBy']:
            errors.append(f'{tag}: agent reviewer must state "{AGENT_ATTESTATION}"')
        if len(str(w.get('justification', '')).strip()) < MIN_JUSTIFICATION_CHARS:
            errors.append(f'{tag}: justification shorter than {MIN_JUSTIFICATION_CHARS} characters')
        if not isinstance(w.get('maxHeightPx'), (int, float)):
            errors.append(f'{tag}: maxHeightPx missing')

    for route in routes:
        m = measured.get(route)
        if m is None:
            errors.append(f'MISSING: no measured sections for route {route}')
            continue
        secs = m.get('sections')
        if not secs:
            if m.get('redirectTo'):
                continue
            errors.append(f'MISSING: route {route} has no measured sections and no redirectTo')
            continue
        for s in secs:
            if categories.get(s['section']) == 'HERO' and s['height'] > HERO_WARN_PX:
                idx, w = wl_for(route, s)
                if s['height'] > HERO_ERROR_PX and not (w and s['height'] <= w.get('maxHeightPx', 0)):
                    errors.append(f'HERO: {route} {s["section"]} {s["height"]}px > {HERO_ERROR_PX}px')
                else:
                    warnings.append(f'HERO: {route} {s["section"]} {s["height"]}px > {HERO_WARN_PX}px' + (' (whitelisted)' if w else ''))
                if w:
                    wl_used.add(idx)
        flow = [s for s in secs if s.get('inFlow', True) and categories.get(s['section']) != 'SHELL']
        if len(flow) < MIN_SECTIONS_FOR_SHARE:
            continue
        total = sum(s['height'] for s in flow) or 1
        for s in flow:
            share = s['height'] / total
            if share <= SHARE_WARN:
                continue
            idx, w = wl_for(route, s)
            if w is not None:
                wl_used.add(idx)
                if s['height'] > w.get('maxHeightPx', 0):
                    errors.append(f'WHITELIST OVER-CAP: {route} {s["section"]} measured {s["height"]}px > maxHeightPx {w.get("maxHeightPx")}')
                warnings.append(f'SHARE: {route} {s["section"]} holds {share:.1%} of the page (whitelisted)')
            elif share > SHARE_ERROR:
                errors.append(f'SHARE: {route} {s["section"]} holds {share:.1%} of the page (> {SHARE_ERROR:.0%})')
            else:
                warnings.append(f'SHARE: {route} {s["section"]} holds {share:.1%} of the page (> {SHARE_WARN:.0%})')
    for i, w in enumerate(whitelist):
        if i not in wl_used:
            errors.append(f'WHITELIST[{i}] STALE: {w.get("route")} {w.get("section")}/{w.get("variant")} no longer matches a measured section above the gate')
    return errors, warnings


def run(repo=REPO):
    mv = json.load(open(os.path.join(repo, 'extraction/measured-values.json')))
    routes = list(json.load(open(os.path.join(repo, 'templates/routes.json')))['routes'])
    return gate(mv.get('sectionHeights'), routes, _categories(repo), mv.get('wrapperGate', {}).get('whitelist', []))


def main():
    errors, warnings = run()
    for w in warnings:
        print('WARN ', w)
    for e in errors:
        print('ERROR', e)
    print(f'wrapper gate: {len(errors)} errors, {len(warnings)} warnings')
    return 1 if errors else 0


if __name__ == '__main__':
    sys.exit(main())
