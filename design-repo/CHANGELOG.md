# Changelog

## 1.0.0 - 2026-10-26

Initial from-scratch build of the design-repo for the plane.so clone.

* Tokens from `site/tailwind.config.js`, `site/src/index.css`, the per-group CSS and `CLONE_SPEC.md` (every value cited);
  light + dark themes; derived `tokens/llm/token-catalog.json` with drift checks; token policy; closed motion patterns.
* Section contracts with `source`/`semantic` split, `retrievalEligible`, structured `responsive[]`, closed motion and
  three-way asset availability; templates built from measured route compositions; compatibility graph; Draft-07 schema
  with required `mode`; semantic validator with generated-mode leakage rules; adversarial suite; wrapper gate; drift proof.
* Counts at this version (recomputed from disk):

| count | value |
|---|---|
| tokens | 222 |
| tokenFiles | 13 |
| motionPatterns | 10 |
| primitives | 17 |
| components | 27 |
| sections | 58 |
| sectionsRetrievalEligible | 52 |
| runtimeSections | 6 |
| templates | 24 |
| routes | 105 |
| dynamicRoutes | 8 |
| examples | 5 |
| generatedExamples | 3 |
| assetRoles | 26 |
| generationSafeAssetRoles | 13 |
| graphRules | 14 |
