# Plane clone - design-repo

AI-ready design repository extracted from the plane.so clone in this project (`site/`). It turns the clone into a
machine-validated PageSpec system: tokens, primitives, components, section contracts, templates, a compatibility
graph, a Draft-07 schema, a semantic validator, adversarial tests and a verification/drift harness.

**Status: `design-review-pending`, `productionApproved: false`.** Built by an agent; nothing here has had human design review.

## Counts

Recomputed from disk by `extraction/verify_all.py --counts`; `verify_all.py` fails if this table drifts.

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

## Layout

```
registry.manifest.json      status, versions (see versionFieldNote), counts, entry points (all inside this folder)
tokens/00-foundation/        color, typography, spacing, radius, breakpoint, elevation, motion, icon-size + motion-patterns.json
tokens/10-semantic/          role names; tokens/themes/light.json + dark.json resolve them to foundation tokens
tokens/20-component/ 30-layout/  component- and layout-scoped tokens
tokens/llm/                  token-catalog.json (derived), token-policy.json, component-allowlist.json
primitives/ components/      atomic and composed building blocks (with source citations)
sections/                    one contract per semantic section type (source{} provenance + semantic{} taxonomy)
templates/                   templates.json (page shapes, node lists) + routes.json (every route -> one template)
compatibility/graph.json     rhythm/position rules with severities (enforced under the same ids)
assets/                      asset-roles.json (three-way availability), source-brand.json, source-copy-fingerprints.json
schema/                      pagespec.schema.json, section-contract.schema.json, semantic_validate.py, examples, tests/
extraction/                  measured-values.json, verify_all.py, wrapper_gate.py, prove_drift.py, build_token_catalog.py, measure_sections.mjs
```

## Verify

```bash
python3 extraction/verify_all.py            # schema, semantics, parity, citations, counts, pins, gate, drift
python3 schema/tests/adversarial_test.py    # every mutation rejected, every control passes
python3 extraction/prove_drift.py           # injects each drift class into a temp copy and confirms it fails
python3 schema/semantic_validate.py schema/examples/generated.home.json
```
Requires Python 3 + `jsonschema` (Draft7Validator). Scripts derive the repo root from their own location; with no
sibling `site/` (standalone copy) the citation re-read degrades to a warning.

## PageSpec model

* `mode` is required and closed: `reference` (faithful reconstruction; real brand/copy/assets allowed as evidence) or
  `generated` (a new page for another brand). Generated pages must declare `brand` with a `.example`/`.invalid` domain.
* Generated-mode consequences are enforced by named rules in `schema/semantic_validate.py`: `GENERATED_MODE_BRAND`,
  `_URL`, `_STORE`, `_CTA`, `_PERSON`, `_CUSTOMER`, `_RATING`, `_COPY`, `_ASSET`. Patterns are grepped from the real
  source (`assets/source-brand.json`); source copy is matched by hashed 6-word shingles (no source copy is stored).
* Media fields use the closed `assetRole` enum. Availability (`reference-only` / `generation-safe` /
  `blocked-for-generation`) is pinned in code (`PINNED_AVAILABILITY` in `verify_all.py` and `semantic_validate.py`).
* Runtime UI (mega-menu, mobile drawer, cookie banner, lightbox, drawer, tooltip) is `retrievalEligible: false`, cannot be
  a page node, and may only be attached under `runtime[]`. The pin lives in both scripts.
* `node.style {theme, surface, paddingY, headingFont}` is the only per-instance token field. It is grounded in the
  builders' real per-instance background/dark props and the Inter-vs-Satoshi heading choice; values must be catalog
  tokens allowed by `tokens/llm/token-policy.json` (raw colours, arbitrary lengths, unsupported fonts and invalid
  theme/token combinations are rejected).
* Motion is closed to the evidence-grounded patterns in `tokens/00-foundation/motion-patterns.json`; each contract
  fixes the `reducedMotionFallback` per pattern. Live-only motion that the clone renders statically is listed there and
  is not allowed in PageSpecs. The live site has no scroll-reveal animations.

## Sections by category

* **COMPARISON**: `comparison.feature-table`
* **CONTENT**: `content.article-meta`, `content.changelog-entry`, `content.chapter`, `content.featured-post`, `content.launch-drop`, `content.principles`, `content.process-steps`, `content.prose-block`, `content.related-posts`, `content.timeline-milestone`, `content.value-cards`
* **CTA**: `cta.app-download`, `cta.banner`, `cta.contact-form`, `cta.contact-options`, `cta.demo-player`, `cta.event-signup`, `cta.offer-card`
* **FAQ**: `faq.accordion`
* **FEATURES**: `features.bento`, `features.card-grid`, `features.developer-showcase`, `features.integrations`, `features.media-showcase`, `features.product-demo`, `features.product-tabs`, `features.split-rows`, `features.steps`, `features.tabbed-showcase`
* **HERO**: `hero.article-header`, `hero.comparison`, `hero.home`, `hero.marketing`, `hero.page-header`
* **INDEX**: `index.listing`
* **MEDIA**: `media.gallery`
* **NAVIGATION**: `nav.catalog-subheader`, `nav.filter-bar`, `nav.pagination`, `nav.toc`
* **PRICING**: `pricing.cost-compare`, `pricing.plan-tiers`, `pricing.savings-calculator`
* **RUNTIME**: `runtime.cookie-consent`, `runtime.detail-drawer`, `runtime.lightbox`, `runtime.mega-menu`, `runtime.mobile-nav`, `runtime.tooltip`
* **SHELL**: `shell.footer`, `shell.header`
* **SOCIAL_PROOF**: `proof.compliance-badges`, `proof.logo-wall`, `proof.stats`, `proof.story-cards`, `proof.testimonial`, `proof.testimonial-wall`

Long-form pages are never one section: legal documents are header + floating TOC + preamble + one `content.chapter`
per numbered heading; articles, changelog entries, customer stories, job posts and the whitepaper are split the same
way. HERO means the page opener only (max measured HERO height 1504px).

## Templates and routes

Every route the clone serves (105 page files under `site/src/pages`, routed by `site/src/App.jsx`) maps to exactly one template.

| template | hero | routes | route list |
|---|---|---|---|
| `template.home` | required | 1 | `/` |
| `template.product-feature` | required | 19 | `/agents`, `/ai`, `/customer-requests`, `/cycles`, `/dashboards`, `/delights`, `/epics-initiatives`, `/intake`, `/mobile`, `/plane-compose`, `/project-management`, `/security`, `/semantic-diffs-by-plane`, `/state-of-projects-and-updates`, `/teamspaces`, `/wiki`, `/work-item-types`, `/work-items`, `/workflows-and-approvals` |
| `template.plan-offer` | required | 6 | `/airgapped`, `/business`, `/enterprise-grid`, `/open-source`, `/pro`, `/self-hosted` |
| `template.program` | required | 3 | `/education`, `/nonprofits`, `/partners` |
| `template.solution` | required | 17 | `/for-startups`, `/industries/aerospace`, `/industries/defense`, `/industries/finance`, `/industries/government`, `/industries/healthcare`, `/industries/manufacturing`, `/industries/retail`, `/solutions/agile`, `/solutions/design`, `/solutions/engineering`, `/solutions/enterprise-teams`, `/solutions/growing-teams`, `/solutions/marketing`, `/solutions/operations`, `/solutions/product`, `/solutions/startups` |
| `template.hub-index` | required | 3 | `/industries`, `/legals`, `/solutions` |
| `template.comparison` | required | 9 | `/compare`, `/plane-vs-asana`, `/plane-vs-clickup`, `/plane-vs-clickup-deprecated`, `/plane-vs-jira`, `/plane-vs-linear`, `/plane-vs-monday`, `/plane-vs-notion`, `/plane-vs-shortcut` |
| `template.migration` | required | 3 | `/imports`, `/switch`, `/switch-from-jira-data-center` |
| `template.pricing` | none | 1 | `/pricing` |
| `template.download` | required | 2 | `/download`, `/wallpapers` |
| `template.contact` | optional | 3 | `/contact`, `/talk-to-sales`, `/view-demo` |
| `template.legal-document` | required | 10 | `/legals/acceptable-use-policy`, `/legals/ai-terms`, `/legals/business-associate-agreement`, `/legals/cookie-policy`, `/legals/dpa`, `/legals/eula`, `/legals/privacy-policy`, `/legals/service-level-agreement`, `/legals/sub-processors`, `/legals/terms-and-conditions` |
| `template.blog-index` | none | 1 | `/blog` |
| `template.article` | required | 3 | `/blog/:slug`, `/changelog/:slug`, `/customers/:slug` |
| `template.changelog-index` | required | 1 | `/changelog` |
| `template.customer-proof-index` | required | 2 | `/customers`, `/testimonials` |
| `template.careers-index` | required | 1 | `/careers` |
| `template.job-detail` | required | 1 | `/careers/:slug` |
| `template.catalog-index` | required | 5 | `/integrations`, `/marketplace`, `/marketplace/categories/:category`, `/templates`, `/templates/categories/:category` |
| `template.catalog-detail` | required | 2 | `/marketplace/:slug`, `/templates/:slug` |
| `template.guide` | required | 1 | `/self-hosted/whitepaper` |
| `template.event` | optional | 3 | `/launch-week-fall-2025`, `/launch-week/q2-2026`, `/ph-launch` |
| `template.company-editorial` | optional | 7 | `/about`, `/charter`, `/manifesto`, `/one/why-plane-one`, `/operating-manual`, `/plane-in-2025`, `/work-trials` |
| `template.redirect` | none | 1 | `/launch-week` |

## Measurement and the wrapper gate

`extraction/measured-values.json` `sectionHeights` holds real in-flow heights of every route at 1440x900 on the running
clone (dynamic routes on one real sample slug), mapped to section contracts. `extraction/wrapper_gate.py` pins the
thresholds in code (HERO > 1800 warn / > 3000 error; one section > 50% warn / > 60% error; < 3 sections skipped; 1440 only).
7 genuinely single-body sections are whitelisted, each with `reviewedBy: "Claude (design-repo build agent) - agent attestation, not a human sign-off"`:
* `/delights` `features.bento` (86.0% of the page): One bento grid of small delight cards under a single heading (13 card rows). Splitting it by row would create 13 adjacent identical sections with no heading of their own.
* `/integrations` `index.listing` (74.8% of the page): Homogeneous catalog grid of item cards beside a sticky category sidebar; the grid has no internal headings or semantic sub-boundaries to split at.
* `/marketplace` `index.listing` (74.8% of the page): Homogeneous catalog grid of item cards beside a sticky category sidebar; the grid has no internal headings or semantic sub-boundaries to split at.
* `/templates` `index.listing` (85.5% of the page): Homogeneous catalog grid of item cards beside a sticky category sidebar; the grid has no internal headings or semantic sub-boundaries to split at.
* `/templates/categories/:category` `index.listing` (73.2% of the page): Homogeneous catalog grid of item cards beside a sticky category sidebar; the grid has no internal headings or semantic sub-boundaries to split at.
* `/testimonials` `proof.testimonial-wall` (79.3% of the page): Single wall of short testimonial cards in three columns; there is no heading-bounded sub-structure, only repeated cards.
* `/legals/sub-processors` `content.chapter` (63.7% of the page): The "List of Authorized Sub-Processors" chapter is one table under one heading; the page has only two chapters, so the table dominates by nature.

## Content rule (evidence level)

On inner pages, headings, labels, eyebrows, prices, plan/feature names and table rows are real; paragraph prose, long-form
bodies (legal, blog, changelog, job descriptions, manifesto, whitepaper, plane-in-2025) and most FAQ answers are
deliberate same-length placeholder text produced by the clone's `ph.js` / `placeholder.js` / `phTune.js`. Homepage copy is
from the user's saved page. Therefore `maxWords` on fields marked `copyBasis: placeholder-length` derives from
character/line measurements of the placeholders, not from real copy.

## Known deviations from the live site (documented, not normalised)

* **chrome-variants** - live: Per-page header/footer variants: transparent header on /about; dark header on /manifesto and /plane-in-2025; no footer on /talk-to-sales and /view-demo; full-screen /launch-week/q2-2026 with no chrome. Clone: Standard header and footer on every route (site/src/App.jsx:61-72). Repo: Templates always use shell.header/shell.footer; SHELL_FIRST_LAST documents the live deviation.
* **static-motion** - live: Logo cycling and mobile marquees, number-flow prices, tab pills, Lottie, agents canvas, Plane Compose terminal, about/manifesto/launch-week scroll effects. Clone: Static (the sales-page logo marquee is the only marquee animated in the clone). Repo: tokens/00-foundation/motion-patterns.json liveOnlyNotReproduced; not allowed in PageSpecs.
* **no-scroll-reveal** - live: No scroll-reveal animations at all. Clone: Same. Repo: Default motion pattern is none.
* **cookie-banner** - live: Third-party cookie consent banner. Clone: Not cloned. Repo: runtime.cookie-consent contract, retrievalEligible=false.
* **for-startups** - live: /for-startups redirects to /solutions/startups. Clone: Full page (plans blocks) with the same section sequence as /solutions/startups. Repo: Mapped to template.solution.
* **launch-week-redirect** - live: /launch-week leads to the Q2 2026 event page. Clone: Renders <Navigate to="/launch-week/q2-2026" replace /> (site/src/pages/launch-week/index.jsx). Repo: template.redirect (shell only, rendersContent=false).
* **placeholder-prose** - live: Real long-form copy. Clone: Same-length placeholder prose on inner pages. Repo: copyBasis=placeholder-length on those fields.

## Real company, real assets

The source is Plane (plane.so), a real, live commercial company. Its logos, wordmarks, customer logos (for example Sony,
Accenture, Amazon, Dolby, Aramco), compliance badges, app-store marks, product screenshots and videos, testimonials and
named people are reference-only or blocked-for-generation. Generated pages must use the generation-safe substitutes and
must never fabricate real logos, people or proprietary content. The `reference` example uses short real headings and
labels only; the `generated` examples use the fictional brand "Tallyfold" (`tallyfold.example`).

## What is not grounded / limits

* Live-vs-clone pixel parity was not measured in this pass (no number is claimed); see `cloneParity` in measured-values.
* `reducedMotionFallback` values for auto-advancing tabs, accordions and card hover are policy choices (the clone does not
  special-case them); hero, menu, product video and marquee fallbacks are taken from the clone's real reduced-motion code.
* Dynamic routes were measured on one sample slug each; other slugs share the component but differ in length.
* The `live.tab-pill` and `live.editorial-scroll-effects` live-only motion entries are listed from the extraction brief
  without a code citation (the clone has no implementation to cite).
