# Brief: building the inner pages of the plane.so clone

## Project
- **Project:** `/Users/riyaghosh/V3/plane/site`, built with React 18, Vite, Tailwind v3 and react-router-dom v6.
- **Dev server:** already running at http://localhost:5247 with HMR. Do not start or stop it. If its CSS returns a 500, say so in your report.
- **Homepage:** done and pixel-audited.
  - Tokens and font settings live in `tailwind.config.js` and `src/index.css`. Use them: `.container-page`, `.h1`, `.h2`, `.h-inter`, `.btn-primary`, `.btn-secondary`, `.btn-primary-dark`, `.btn-secondary-dark`, plus the color, fontSize and fontWeight tokens.
  - The global spec is in `/Users/riyaghosh/V3/plane/CLONE_SPEC.md` §0. Read it first.

## Routing (file-based, already wired in `src/App.jsx`)
- `src/pages/pricing.jsx` → `/pricing`
- `src/pages/solutions/engineering.jsx` → `/solutions/engineering`
- `src/pages/blog/index.jsx` → `/blog`
- `src/pages/blog/[slug].jsx` → `/blog/:slug`. Use `useParams()`.
- Folders or files whose name starts with `_` are ignored by the router. Put page-local helpers there, or in `src/components/<your-group>/`.
- `Header` and `Footer` are rendered globally around every page. **Do not rebuild or edit `Header`, `Footer` or `App.jsx`.**
- Each page file default-exports only the page body, i.e. the sections between the header and footer.
- Links to plane.so paths, relative or absolute, are routed client-side automatically. Leave external links (app.plane.so, docs, GitHub, etc.) as they are.

## Ownership
These rules matter because other agents are writing pages at the same time.
- Write only:
  - the page files listed for your group, and
  - new shared components under `src/components/<your-group-name>/`.
- **Reuse is fine:** you may import any existing homepage component read-only (e.g. `Cta`, `Customers`, `Stories`, `Download`), but do not modify them. If a homepage section needs a variant, copy it into your group folder.
- **Do not edit** `tailwind.config.js`, `src/index.css`, `App.jsx`, or other groups' files.
- **Assets:** download missing assets (images, SVGs, videos) into `site/public/assets/<your-group-name>/`.

## Measuring the live site
- Use **headless Playwright scripts with Node**. Playwright 1.63 and chromium are installed, so `npx playwright` works and the `playwright` package can be imported from a script.
- **Do NOT use the shared Playwright MCP browser tools.** Several agents run in parallel, and they would fight over one browser.
- Put scripts in `/private/tmp/claude-504/-Users-riyaghosh--claude-spares-spare-lmemPu/26ffd8a8-2b11-48f8-99d5-9dd46b88d355/scratchpad/<your-group-name>/`.
- **Measure at 1440 and 390:**
  - section tops and heights, container widths, and computed typography and colors;
  - images (download any that are missing);
  - interactive widgets (tabs, toggles such as monthly/yearly pricing, accordions, carousels) and hover states;
  - any load or scroll motion. Check with a MutationObserver while scrolling; the homepage had none beyond hero blur-in and tabs.
- **Pages that share a template** (for example all `plane-vs-*` pages, all `/industries/*` or all `/legals/*`): build one shared template component in your group folder and drive each page from a data object.

## Content rule (important)
- **Reproduce faithfully:**
  - layout, spacing, typography, colors, images, icons, motion and interactions;
  - headings, nav and button labels, short taglines and eyebrows;
  - pricing numbers and plan or feature names;
  - table row labels and short list items.
- **Do NOT copy paragraph-level prose verbatim from plane.so.** For paragraphs and longer body text, write neutral original placeholder copy of about the same length (±10% characters), so line wrapping and section heights still match. Examples: "A short description of how this feature helps teams plan and ship work." or a lorem-style English sentence.
- **Long-form documents get placeholder prose:** legal pages, blog post bodies, changelog entry bodies, job descriptions, manifesto, operating manual, charter, whitepaper, and plane-in-2025. Keep their heading structure, TOC, layout and styling, but fill the body with placeholder prose.

## Done means
- **Build:** each page renders at its route with no console errors (check headless). `npx vite build --outDir /tmp/plane-build-<group>` passes.
- **Fidelity:** section heights are within ~2px of live at 1440 and 390, unless the placeholder text causes a different wrap. Note those cases.
- **Report:** list the pages built, the shared components created, the assets downloaded, measured vs live heights, and any gaps or guesses.
