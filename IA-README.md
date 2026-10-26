# Information architecture: plane.so clone

`ia.json` is the only file to edit by hand. `IA.md` and `matrix.csv` are generated from it by `build.mjs`, so never edit them directly because the next build overwrites them. `build.mjs` and `validate.mjs` are copied unchanged from the `ia-builder` skill.

After any change to `ia.json`, re-run this from the project root:

```bash
node validate.mjs && node build.mjs
```

## What it documents

The IA covers the clone's actual route table, meaning what `http://localhost:5247` serves. That table comes from the file-based routes in `site/src/App.jsx` (`import.meta.glob('./pages/**/*.jsx')`, with `_`-prefixed paths skipped).

- **208 routes across 68 templates.** That is 97 static page files (105 page files minus the 8 `[param]` files) plus 111 dynamic routes. The dynamic count is one route per entry that exists in `site/src/components/collections/data/*.js`:

  | route | entries |
  |---|---:|
  | blog | 12 |
  | changelog | 11 |
  | careers | 33 |
  | customers | 8 |
  | marketplace items | 18 |
  | marketplace categories | 7 |
  | template items | 18 |
  | template categories | 4 |

  Unknown slugs render a fallback page and are not counted.
- **Live sitemap sizes, for context only.** The live plane.so sitemaps list 483 blog posts, 197 changelog entries, 33 careers pages, 25 marketplace apps, 22 templates and 11 customer stories. The clone only carries sample data, so these numbers are not part of `totalRoutes`.
- **Where section sequences came from.** They were read from the code: the FeaturePage and SolutionsPage data arrays, the `ComparisonPage` and `LegacyComparisonPage` default exports, and the top-level JSX of the plans, company, compare and collections pages. A sample was then checked headless against :5247.
- **One id per template.** A template lists each section id once. When the same block repeats back to back, it is listed once and its description says so. Examples are the three legacy bentos on /teamspaces, the two consecutive `LCards` blocks on /security, and the alternating story grid and testimonial on /customers. When one component is reused on a page for different purposes (such as the plans `CardGrid`), each purpose gets its own id with the same `implementedBy`.

## Findings (from the validate/build output)

1. **Most routes come from a few data-driven templates; the build effort is in one-off pages.** 111 of the 208 routes (53%) come from the 8 dynamic templates. The largest three (Job detail, Template detail, Marketplace app detail) cover 69 routes (33%). The other 97 routes need 60 templates, and 49 of those serve a single route.
2. **Little is shared outside the shell.** `build.mjs` reports 59 shared sections and 231 page-local ones. Apart from the 5 global shell sections, the most-reused sections are `faq.plans-faq` (9 templates) and `conversion.plans-cta-banner` (7 templates). Each page group (features, solutions, compare, plans, collections) has its own block library, so the same purpose is built many times:
   - 12 separate customer-logo sections;
   - 4 versions of the "Enterprise-grade security, compliance, and control" grid (`features.home-enterprise`, `features.feature-security-image-grid`, `features.solutions-security-cards`, `features.plans-security-cards`);
   - 9 separate FAQ sections.

   These are the first candidates to merge into shared components.
3. **Chrome is uniform in the clone.** `validate.mjs` reports `chrome="full"` for 207 routes and `chrome="redirect"` for 1 route (`/launch-week`, which only renders `<Navigate replace to="/launch-week/q2-2026">`). See the deviations below.
4. **Every check passes and all scope numbers reconcile.** `validate.mjs` reports "All hard invariants reconcile" with no scope notes. The first run flagged nine notes, all caused by the digit in "v2" inside scope prose ("The 6 v2 comparison routes"), which the validator read as a count. These were false positives, not wrong numbers, so the prose now says "newer ComparisonPage". For the same reason, scope strings avoid route paths that contain digits (for example /plane-in-2025).

## Known differences from live plane.so (not encoded in `chrome`)

The clone renders the full Header and Footer on every route, so `ia.json` records `chrome: "full"` for all of them. Live plane.so differs on these pages:

- **/about:** transparent header.
- **/manifesto and /plane-in-2025:** dark header.
- **/talk-to-sales and /view-demo:** no footer.
- **/launch-week/q2-2026:** full-screen, with no header or footer.

If the clone is changed to match, update the `chrome` value on those templates and re-run the scripts.
