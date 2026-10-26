Source: https://plane.so/

# Plane homepage — clone build spec

Measured live with Playwright (Chromium) on 2026-10-26 at 1440x900 (primary), 1280x900, 768x900 and 390x844. Every number below is a computed style or `getBoundingClientRect` value unless it is marked as derived. Y positions are document-absolute at 1440px after all lazy images loaded (total page height 12231px). The asset mapping is in `ASSET_MANIFEST.md`, next to this file.

Target stack: React 18 + Vite + Tailwind v3. The original site is Next.js + Tailwind **v4**, so a few notes apply:
- v4's `scale-101` / `rotate-90` use the CSS `scale` / `rotate` properties. In v3, use `hover:scale-[1.01]` and `rotate-90`. Both are visually identical.
- Variable font weights **430** and **570** appear everywhere. In v3, use `font-[430]` and `font-[570]`, or add them to `fontWeight`.
- Colors are authored in oklch. Use the hex values given below (converted in-browser through canvas sRGB).

---

## 0. Global tokens

### Breakpoints (Tailwind defaults, confirmed by behaviour)
- `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536.
- The type scale changes at **768px**: `@media (min-width:48rem)` vs `not all and (min-width:48rem)`.
- The desktop header shows at `lg` (≥1024). Below that, the mobile header shows.

### Page container (used by every section, header and footer)
Class on the original: `mx-auto w-full px-4 sm:px-8 xl:px-11 xl:max-w-336 2xl:max-w-384`
| viewport | container outer width | horizontal padding | content width |
|---|---|---|---|
| 1440 | 1344 (max-w 1344, centered, 48px side margins) | 44 | **1256** |
| 1280 | 1280 | 44 | 1192 |
| 768 | 768 | 32 | 704 |
| 390 | 390 | 16 | 358 |
| ≥1536 | max-w 1536 | 44 | 1448 |

### Fonts (already wired in `site/src/fonts.css`)
- `satoshi` is used for display headings (h1/h2) and footer column headings.
- `inter` is used for everything else, including the "Your entire workspace…" h2 and the "Plane Compose" h3, which are Inter, not Satoshi.
- `sourceSerifPro` and `IBM Plex Mono` load but are **not used** on the homepage.
- Weights: body regular **430**, body medium 500, body semibold **570**, heading regular **430**, footer heading 600.

### Type scale tokens (from CSS)
| token | <768 | ≥768 |
|---|---|---|
| text-1200 (h1) | 36px | 58px |
| text-1100 (h2) | 32px | 44px |
| text-900 | 24px | 32px |
| text-800 | 22px | 24px |
| text-600 (body-lg) | 18px | 18px |
| text-500 (body-base) | 16px | 16px |
| text-400 (body-sm) | 14px | 14px |
| text-300 (body-xs / caption) | 13px | 13px |

h1/h2 line-height is 1.3 and letter-spacing is -0.03em. body-base and body-lg use line-height 1.5. body-sm uses 1.6. body-xs uses 1.5.

### Typography roles (computed, 1440; identical at 1280 and 768)
| role | family | size / line-height | weight | letter-spacing | color |
|---|---|---|---|---|---|
| Hero h1 | satoshi | 58 / 75.4 | 430 | -1.74px | #1d1f20 |
| CTA h2 (also h1-size) | satoshi | 58 / 75.4 | 430 | -1.74px | #e4e6e7 (on dark) |
| Section h2 | satoshi | 44 / 57.2 | 430 | -1.32px | #1d1f20 light / #e4e6e7 dark |
| Inter h2/h3 ("Your entire workspace…", "Plane Compose…") | inter | 32 / 41.6 | 430 | -0.96px | #e4e6e7 / #fafafa |
| Testimonial quote | inter | 24 / 36 | 430 | normal | #1d1f20 |
| Hero sub (body-lg) | inter | 18 / 27 | 430 | normal | #4e5355 |
| Story card title | inter | 18 / 27 | 430 | normal | #1d1f20 (white card) / #fafafa (dark card) |
| Card title (semibold) | inter | 18 / 27 | 570 | normal | #1d1f20 / #fafafa / #e4e6e7 |
| Feature big-card title | inter | 18 / 27 | 500 | normal | #fafafa (card 1) / #1d1f20 (card 2) |
| Product tab title | inter | 18 / 24 | 500 | -0.18px | active #111315, inactive #6b6f74 |
| Section intro body | inter | 16 / 24 | 430 | normal | #4e5355 light / #cacdce dark |
| Small card title | inter | 16 / 24 | 570 | normal | #1d1f20 |
| Buttons (CTA size) | inter | 16 / 24 | 500 | normal | see Buttons |
| Text links "Go to … →" | inter | 16 / 24 | 430 | normal | #1d1f20, hover underline |
| Eyebrow (section) | inter | 14 / 22.4 | 430 | normal | uppercase; #006399 light / #2893cc dark |
| Eyebrow "Core Capabilities" | inter | 16 / 24 | 500 | normal | uppercase #006399 |
| WEEK labels | inter | 14 / 22.4 | 500 | normal | #006399 (text already uppercase) |
| Card body | inter | 14 / 22.4 | 430 | normal | #4e5355 / #cacdce |
| Insight / migrate / dev body | inter | 14 / 21 | 430 | normal | (see sections) |
| Product tab desc | inter | 14 / 20 | **400** | normal | active #4a4f54, inactive #8a8f94 |
| Nav items | inter | 14 / 22.4 (buttons) or 21 (links) | 430 | normal | #1d1f20 |
| Nav primary btn | inter | 14 / 21 | 500 | normal | #ffffff |
| Logo caption "Trusted by teams at" | inter | 12 / 18 | 500 | 1.44px (0.12em) | #6b7075 uppercase |
| Footer column heading | satoshi | 13 / 15.6 | 600 | normal | #959a9d |
| Footer link | inter | 13 / 19.5 | 430 | normal | #e4e6e7, hover underline |
| Footer download btn | inter | 16 / 24 | 400 | normal | #cacdce |

At 390 only these change: h1 → **36 / 46.8, ls -1.08px**; section h2 → **32 / 41.6, ls -0.96px**; Inter 32px headings → **24 / 31.2, ls -0.72px**. Everything else is identical.

### Color tokens (hex)
Light surfaces:
- bg page / surface-1 `#ffffff`
- surface-2 / neutral-2 `#fafafa`
- layer-1 `#f4f5f5` (hover `#eff0f0`)
- `#f7f7f8` card fill
- `#f2f2f3` product stage window
- `#e7e1d4` product stage frame

Dark sections:
- section bg `#0f0f10`
- dark card `#181a1b`
- footer reveal bg `#141415`
- dark border `#2c2e30`
- footer divider `#1d1f20`
- footer button border `#36393a`

Text (light):
- primary `#1d1f20`
- secondary `#4e5355`
- tertiary `#676c6f`
- placeholder `#80868a`
- inverse `#ffffff`
- brand/accent `#006399`

Text (dark):
- primary `#e4e6e7`
- secondary `#cacdce`
- tertiary `#afb3b6`
- placeholder `#959a9d`
- accent `#2893cc`
- on-color `#fafafa`

Borders:
- subtle `#eaebeb`
- strong `#dadcdd`
- neutral-2 `#eff0f0`
- card border `#e4e6e7`
- tab border `#e4e5e6`
- dark subtle `#222425`
- dark strong `#36393a`

Inverse button: bg `#090b0c`, hover `#1d1f20`, active `#4e5355`. On dark, it inverts to bg `#f5f5f5`, hover `#e4e6e7`, text `#0e0f10`.

Misc:
- nav "New:" `oklch(.6766 .1665 243.91)` (blue)
- link blue `#006399`
- "@Plane" chip text `#2060df` on `#e4ecfb`
- product tab dark `#111315`, icon fill `#4a4f54`, icon box `#f0f1f2` (hover `#e4e5e6`), tab hover bg `#f7f7f8`
- overlay behind nav dropdown: `rgba(9,11,11,0.3)` (`#090B0B4D`)

### Radii / shadows / effects
- radius: 6 (nav pills, tab icon box), 8 (buttons, small boxes), 12 (cards, images, `rounded-xl`), 16 (story cards, `rounded-2xl`), 20 (product stage, `min(20px,1.5vw)`), 24 (footer bottom corners, `rounded-b-3xl`).
- Product stage inner ring: `::after` inset `0 0 0 1px rgba(0,0,0,.06)`, same radius.
- Pause button: `box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 2px 8px -2px rgba(16,24,40,.25)`, `backdrop-filter: blur(8px)`, bg `rgba(255,255,255,.9)`.
- Dropdown integration chips: bg `rgba(255,255,255,.4)` + `backdrop-blur-xl` (24px).
- No gradients except the Migrate "ruler" (see §7) and image backgrounds. No glassmorphism on the header.

### Buttons (all: radius 8, `transition-colors 150ms cubic-bezier(.4,0,.2,1)`, `font-medium`, whitespace-nowrap)
| variant | padding | size | bg / text / border | hover bg |
|---|---|---|---|---|
| Primary (light page) | 8px 16px (h 40) | 16/24 500 | `#090b0c` / `#fff` / none | `#1d1f20` |
| Secondary (light page) | 8px 16px (h 42 incl. 1px border) | 16/24 500 | `#fff` / `#4e5355` / 1px `#dadcdd` | `#fafafa` |
| Primary on dark | 8px 16px | 16/24 500 | `#f5f5f5` / `#0e0f10` | `#e4e6e7` |
| Secondary on dark | 8px 16px | 16/24 500 | `#1d1f20` / `#cacdce` / 1px `#36393a` | `#222425` |
| Nav transparent | 6px 12px (h 33) | 14/21 **430** | transparent / `#1d1f20` | `rgba(0,20,20,.05)` (alpha-black-100) |
| Nav primary | 6px 12px (h 33) | 14/21 500 | `#090b0c` / `#fff` | `#1d1f20` |
| Text link | 0 | 16/24 430 | transparent / `#1d1f20` | underline |

Widths at 1440:
- "Try Plane Business for 14 days" is 264x40.
- "Talk to a human →" is 173x42.
- "Get started free" is 151x40.
- "Talk to a migration expert →" is 246x42.

CTA rows are `flex flex-wrap gap-4` (16px).

---

## 1. Header (desktop ≥1024)
DOM: `div.font-inter.sticky.top-0.z-50` > `div.hidden.lg:block` > `header.py-3.bg-surface-1.border-b` (mobile header is a sibling inside the same sticky wrapper).
- **Sticky** at top 0, z-50, at all widths. The wrapper stays sticky the whole page. There is **no blur, no shadow, no background or height change on scroll**: it stays white with a 1px bottom border `#eaebeb`. No scroll listeners touch it.
- Height **58**: padding 12/12 + 33px row + 1px border.
- Inner: page container, then `nav.flex.items-center.gap-8` (gap 32 at xl; gap 24 below xl).
  - Logo `logo-with-wordmark.svg`, rendered 96x20 at x=92, links to `/`.
  - Left group (x=220): dropdown triggers **Product, Solutions, Resources**. Each is a `button` with inner `div.rounded-md.px-3.py-0.5` (76/86/94 x 26, radius 6, hover bg `#f4f5f5`, 150ms). Then links **Pricing** (`/pricing`) and **Self-host Plane** (`/self-hosted`; the word "Plane" is hidden below xl). Items are 8px apart.
  - Right group (margin-left auto, items 8px apart): **View demo** (`/view-demo`, 98x33), **Contact sales** (`/talk-to-sales`, 115x33; shows "Sales" below xl), **Login** (`https://app.plane.so/`, 61x33), **Get started free** (primary, `https://app.plane.so/sign-up`, 129x33).
- No chevrons on dropdown triggers. While open, the trigger pill gets `bg #f4f5f5` and `aria-expanded=true`.

### Mega-menu dropdown (hover open)
- Panel `#desktop-nav-dropdown-panel`: `absolute inset-x-0 top-full z-40 w-screen h-screen`. It is full-bleed under the header.
  - Panel body: bg white, border-top 1px `#eaebeb`, margin-top 12px. At 1440 the panel starts at y=57.
  - **Enter animation:** opacity 0→1 and translateY(-8px)→0 (`fade-in-0 slide-in-from-top-2`), **220ms cubic-bezier(.4,0,.2,1)**.
  - Below the panel is a full-screen overlay `rgba(9,11,11,.3)` that fades in over 220ms (same easing).
  - The overlay sits inside the hover zone, so the menu stays open while the cursor is over it. It closes when the cursor leaves the header/panel.
- **Switching** between triggers keeps the panel open and swaps its content. The new content animates from opacity 0 / translateX(16px) to 0 over about **230ms** (JS spring/ease-out, sampled: 16 → 13.0 → 6.6 → 3.1 → 1.1 → 0.07 px). The old content exits the same way in reverse.
- Inner layout:
  - Page container, then `py-10` (40px), then `grid grid-cols-4`.
  - Product uses gap 36: cols 287px each.
  - Solutions and Resources use gap 16: cols 302px each.
- Column heading: 14/22.4 500 `#676c6f`, `md:pl-3`, then a gap of 8 before the item list.
- Menu item:
  - `a.group.flex.gap-3.p-3.rounded-lg`, hover bg `rgba(0,20,20,.05)`.
  - 16px icon (mt 2px, `#1d1f20`; hover → `#006399`).
  - Title 14/22.4 500 `#1d1f20` (hover `#006399`).
  - Description 13/19.5 430 `#676c6f` (hover `#4e5355`).
  - Items stack at 70px pitch.
  - Icons are saved as `nav-icon-*.svg` and use `currentColor`.
- **Product** (panel height 463):
  - Col 1 "Products":
    - Project Management — Plan, track, and ship work (`/project-management`)
    - Wiki — Docs tied to your work (`/wiki`)
    - Plane AI — AI agents for your workspace (`/ai`)
  - Cols 2–3 "Feature Capabilities" (2-col sub-grid, 598 wide):
    - Intake — Triage and route incoming work
    - Work Items — Structured tasks with traceability
    - Epics and Initiatives — Big-picture goals, rolled-up progress
    - Cycles — Time-boxed sprints with burn-downs
    - Dashboards — Velocity, workload, and bottlenecks
    - Teamspaces — Isolated spaces, shared governance
    - Workflows and Approvals — Rule-based workflows with approvals
  - Col 4:
    - Card `a.bg-layer-1.rounded-lg.p-4.px-5` (287x131, bg `#f4f5f5`): icon, "Self-host Plane" 14/500, "Everything on cloud, deployed on your infrastructure." 13/430 `#4e5355` (`/self-hosted`).
    - Below it, block with bg `nav-product-bg.webp` (287x174, radius 8, p 16/20, gap 16): "Works with your stack" 16/430 `#1d1f20`.
    - 4 chips (Slack, GitHub, Sentry, GitLab): 16px brand icon with `brightness-0`, 14/430 label, arrow-up-right 16. Chip padding 4/8, radius 8, bg `rgba(255,255,255,.4)`, backdrop-blur-xl. Links go to `/marketplace/<name>`.
    - "Browse marketplace →" 14/500.
  - Bottom strip (Product only):
    - border-top 1px `#eaebeb`, py 20.
    - Left: "**New:** Page-level comments, custom-property dashboards, and more | Oct 15, 2026". "New:" is blue `oklch(.6766 .1665 243.91)`. Then "Learn more →" 14/500 `#006399`.
    - Right: log-in icon rotated 90°, then "Download the Plane app" 14/500 `#006399` (`/download`).
- **Solutions** (panel height 461, 4 cols of 302):
  - "Use cases" (`/solutions`):
    - Product — Ship features from intake to release
    - Operations — Coordinate work across every team
    - Marketing — Campaigns, launches, content
    - Agile — Cycles, backlogs, burn-downs built in
    - Design — Track reviews, feedback, handoffs
  - "Industries" (`/industries`):
    - Aerospace — Mission-critical program control
    - Finance — Audit-ready financial workflows
    - Defense — Air-gapped, classified environments
    - Manufacturing — Traceable production programs
    - Retail — Multi-location store operations
  - "Scale":
    - Startups — Start fast, add structure as you grow
    - Growing Teams — Scale without the overhead
    - Enterprise — Total control, private infrastructure (`/solutions/enterprise-teams`)
  - Col 4 card:
    - bg `nav-discovery.webp`, 302x380, radius 12, p 20/24, flex-col justify-between.
    - h5 "Discover why teams switch to Plane" satoshi 24/430 `#1d1f20`.
    - "See how Plane stacks up against the tools you know" 13/430 `#4e5355`.
    - Chips Linear, Jira, Asana, Monday, ClickUp (`/plane-vs-*`; hover scale 1.01, 300ms).
- **Resources** (panel height 391):
  - "Discover":
    - Blog — Updates, insights, and deep dives
    - What’s new — The full changelog, every release
    - Community — Join the conversation on Forum (forum.plane.so)
    - Customers — Stories from teams using Plane
  - "Learn":
    - Docs — Product guides and references (docs.plane.so)
    - API reference — REST API, webhooks, and SDKs
    - Security — Compliance, certifications, and trust
  - "Latest update" card:
    - bg `nav-bg-changelog.webp`, 290x276, radius 12, 1px `#eaebeb`, p 16.
    - "Cloud" 14/500 `#006399`.
    - "Page-level comments, custom-property dashboards, and more | Oct 15, 2026" 14/500 `#1d1f20` (line-clamp 3).
    - "15 Oct, 2026" 13/430 `#4e5355`.
    - 40x40 white icon box (radius 8, 1px `#eaebeb`) with cloud icon `nav-icon-changelog-…svg` pinned to the bottom.
    - Inner content scales 1.01 on hover (300ms).
  - "Download" card:
    - bg `nav-bg-download.webp`, 290x276, radius 12, 1px `#eaebeb`.
    - "Plane on every device" 14/500 white.
    - "Download for Mac, Windows, iOS, and Android" 13/430 `#cfd2d3`.

## 1b. Header (mobile <1024)
- `header.bg-neutral-1.border-b.border-neutral-2.py-4` sits inside the same sticky wrapper, so it is pinned at top 0. Measured top=0 after scrolling to the page bottom.
- Height 66. Bottom border 1px `#eff0f0`.
- Row: logo 96x20 left. Right side, gap 12:
  - "Get started free" nav-primary (129x33). On mobile it links to `https://app.plane.so/`.
  - Menu button 24x24.
- Menu button holds two lucide icons (menu / x, size 20, mt 4) that cross-fade over 300ms ease-in-out. Closed state: menu icon `scale(1) rotate(0) opacity 1`, x icon `scale(.75) rotate(90deg) opacity 0`. Open state swaps them.
- Open menu: in-flow panel under the header (`h-full overflow-auto flex flex-col`), white.
  - Rows are 57px tall with border-bottom 1px `#eaebeb`. Each row is a button with py 16 and px 16, label 16/24 570 `#1d1f20`.
  - Rows: Product ›, Solutions ›, Resources ›, Pricing ↗, Self-hosted Plane ↗, View demo ↗, Contact Sales ↗.
  - Accordion rows (›): chevron-right 20 rotates to 90° (200ms). The body animates `max-height 0 → 200vh` and `opacity 0 → 1` over **300ms cubic-bezier(.4,0,.2,1)**. Contents are the desktop dropdown items stacked in one column.
  - Bottom block: border-y `#eaebeb`, padding 16, gap 16.
    - "Login" secondary, full width, 358x42.
    - "Get started free" primary, full width, 358x40 (sign-up).
- A cookie banner (bottom-left card: "Accept all" / "Accept required") appears on the live site. It is third-party consent UI, so do not clone it.

---

## 2. Hero — `section[aria-label="Hero section"]`
- Box at 1440: top 58, height **495**. Background white. No section padding.
- Inner (the container's child):
  - ≥768: `flex flex-col items-center text-center`, padding-top 64, padding-bottom 80, gap 40.
  - <768: items-start, text-left, gap 24, pb 48.
- Text block: 883 wide, `space-y-4` (16px).
  1. Eyebrow (div 24px line, span 14/22.4) "Cloud, self-hosted and air-gapped ready". Uppercase, `#006399`, at y=126.
  2. Title group: flex-col, gap 24 (12 below md).
     - h1 "Project management and knowledge\nmanagement for teams and agents". `white-space: pre-line` at ≥md, so the break comes after "knowledge". 2 lines, height 151, top y=162.
     - Sub "Plane brings projects, docs, and AI-powered workflows into one unified\nworkspace so teams and agents can plan, execute, and stay aligned." 18/27 `#4e5355`, 2 lines, y=337.
- CTA row (y=431, centered, gap 16):
  - "Try Plane Business for 14 days" (primary) → `https://app.plane.so/sign-up/`
  - "Talk to a human →" (secondary) → `/talk-to-sales`
- **Load animation (CSS only, from 05rd2bydkxq3f.css):**
  - Each h1 word is `span.inline-block` with: `opacity:0; filter:blur(14px); transform:translateY(.14em); animation: word-in 1s cubic-bezier(.32,.72,0,1) forwards`.
    - Keyframe `to {opacity:1; filter:blur(0); transform:none}`.
    - Per-word `animation-delay` = **80, 150, 220, 290, 360, 430, 500, 570, 640ms** (80 + 70·i). Keep the spaces between word spans as text nodes.
  - Subtitle wrapper and CTA row use class `fade`: `opacity:0; filter:blur(4px); transform:translateY(8px); animation: fade-in .9s cubic-bezier(.32,.72,0,1) forwards`.
    - Subtitle delay **720ms**. CTA row delay **840ms**.
  - The eyebrow is **not** animated.
  - `prefers-reduced-motion: reduce` sets all of these to opacity 1 with no filter, no animation and no transform.

## 3. Products showcase — `section#products[aria-label="Products"]`
- 1440: top 553, height **867**. No padding.
- Inner: `mx-auto flex max-w-[1352px] flex-col` (content 1256 at 1440).
- **Stage** (`group/stage`):
  - `relative w-full aspect-[1352/760] overflow-hidden`, radius `min(20px,1.5vw)` (20 at 1440, 19.2 at 1280), bg `#E7E1D4`.
  - `::after` inset ring 1px `rgba(0,0,0,.06)`.
  - Rendered size: 1256x706 at 1440, 1192x670 at 1280, 704x396 at 768, 358x201 at 390.
  - Layer 1: `stage-texture.webp`, fill, object-cover.
  - Layer 2, window `div[role=tabpanel]`:
    - `absolute top-[8.42%] bottom-0 left-[3.25%] w-[93.49%] overflow-hidden`, radius top `min(12px,0.9vw)`, bg `#F2F2F3`.
    - Size: 1174x647 at 1440, starting at x+41, y+59.
    - Contents: still image `still-<tab>.v6.webp` (object-cover object-top, eager), then `<video>` absolutely on top.
    - Video: `muted loop playsInline preload=none disablePictureInPicture`, object-cover object-top, opacity 0 until playing, then opacity 100 (`transition-opacity 300ms`).
  - **One 48.03s video** (`hero-loop.v6.1264.av1.mp4`, H.264 fallback `…h264.mp4`; use the `2528` variants when `width·DPR > 1400`) covers all three tabs:
    - Work = 0–16s
    - Wiki = 16–32s
    - Plane AI = 32–48s
  - Video sources are attached lazily by an IntersectionObserver (rootMargin `400px 0px`).
  - A second IO (thresholds `[0,.02,.12]`) plays the video when the intersection ratio is ≥ .12 and pauses it when ≤ .02. It also pauses on `document.hidden`.
  - Pause/Play button:
    - `absolute right-3 bottom-3`, 32x32 circle, bg white/90, `#111315` icon (lucide pause/play, 14px, fill current), shadow and blur as in §0.
    - While playing it has opacity 0 and appears on stage hover (`group-hover/stage:opacity-100`, 150ms). It is always visible on hover:none devices or when paused.
    - aria-label is "Pause the product walkthrough" / "Play the product walkthrough".
- **Tablist** `div[role=tablist][aria-label="Plane products"]`: margin-top 32, `grid md:grid-cols-3` (3×418.66 at 1440; 1 col <768).
  - Tab: `button[role=tab]`
    - Layout: flex, gap 12, items-start, border-top 1px `#E4E5E6`. Tabs 2 and 3 also have `md:border-l` `#E4E5E6`.
    - Padding 28 24 30, md min-height 128 (measured 129). Transition colors 200ms.
    - Inactive hover bg `#F7F7F8`.
  - Progress bar: `span.absolute top-[-1px] left-0 h-0.5 w-full origin-left bg-[#111315]`, `transform: scaleX(p)`. p = (video.currentTime − segStart)/16, updated each video frame via `requestVideoFrameCallback`. Inactive tabs show scaleX(0).
  - Icon: 24x24 box, radius 6.
    - Active: bg `#111315`, white mask icon.
    - Inactive: bg `#F0F1F2` (group-hover `#E4E5E6`), mask icon `#4A4F54`.
    - Mask images: `product-projects.svg`, `product-wiki.svg`, `product-ai.svg`. The icon is 14px (`mask-size:contain`).
  - Text column: flex-col, gap 6. Title and description typography are in §0. Each description is two `span`s that render as block lines when the container is ≥17.5rem.
  - Content:
    1. **Work** — "Plan projects, assign work items," / "and track progress across teams."
    2. **Wiki** — "Build and maintain your org-wide" / "knowledge base. Specs, PRDs, and more."
    3. **Plane AI** — "Draft, analyze, plan with Plane AI." / "Hand off work to agents."
  - Click: sets the active tab, seeks the video to the segment start and plays. Auto-advance is just the video crossing a segment boundary, so each tab lasts 16s.
  - Panel alt text per tab:
    - Work: "A Plane board where a work item is assigned to an agent, reviewed by a person and moved to Done"
    - Wiki: "A Plane wiki: collections in the library, a launch page with nested pages in columns, and a comment answered live in the page"
    - Plane AI: "Plane AI answering a question about a launch, asking for approval before it acts, then handing a work item to a coding agent that posts its update"

## 4. Customers logo wall — `section[aria-label="Customers"]`
- 1440: top 1420, height 470. Padding 80/80 (64 below md). Bg white.
- Inner max-w 1256.
- Caption `p` "Trusted by teams at": centered, 12/18 500, ls .12em, uppercase, `#6B7075`.
- `ul` margin-top 40 (32 below md).
  - Grid: 6 columns at md, gap-x 24 (189.33 each at 1440). 3 columns below md, gap-x 8.
  - Each `li`: `flex h-[84px] items-center justify-center px-2` (h 64 below md).
  - Each `img`: `max-h-12` (48; `max-h-10` below md), w-auto, object-contain, **opacity .75**. Rendered 162–163 x 48 at 1440; 98x29 at 390; 81x24 at 768.
- Order: Sony, Aramco, Dolby, Accenture, Amazon, Essor, 40AU, Hypersonica, SSI, Ruby Labs, République Française, Government of Lithuania, Mirador Therapeutics, Texelis, OptiGRÜN, Stark Bank, Datum, Power Integrations.
- **Static grid, not a marquee.** A `marquee` keyframe exists in the CSS but the homepage does not use it.

## 5. Insight (Plane AI) — `section[aria-label="Insight"]`, dark
- 1440: top 1890, height 1127. Bg `#0F0F10`, padding 80/80.
- Container content `space-y-10` (40px).
- Header (`space-y-6`, left aligned at all widths):
  - Eyebrow "PLANE AI" 14px `#2893CC` uppercase.
  - Then 16px, then `space-y-3`:
    - h2 "AI that works because it knows your context" (1 line at 1440, 797 wide) `#E4E6E7`.
    - p "Plane was not retrofitted for AI, it was built around it. Plane AI reads across every project, cycle, doc, and\nthread in your workspace. Agents take real assignments and do real work." 16/24 `#CACDCE`.
  - Then 24px, then buttons: "Get started free" (primary-on-dark, sign-up) and "Talk to a human →" (secondary-on-dark, `/talk-to-sales`).
- A visually hidden (`sr-only`) list of 3 h3 + p duplicates the tab content. Include it for SEO/accessibility:
  - h3 "1. Answers from across your workspace"
  - h3 "2. Agents that do the work for you"
  - h3 "3. Works where your team already talks"
- Image stage (md+):
  - `relative aspect-[157/67] w-full overflow-hidden rounded-xl`, 1256x536 at 1440. Hidden below md.
  - 3 stacked images, fill, object-cover: `hierarchy.webp`, `agents.webp`, `works.webp`.
  - Active image opacity 1; others opacity 0 + pointer-events none. Transition opacity **300ms cubic-bezier(.4,0,.2,1)**.
- Then 40px, then tab grid: `grid md:grid-cols-3 gap-6 items-start` (402.66 each at 1440).
  - Tab `button`: `relative w-full text-left border-t border-[#2C2E30] pt-4 space-y-1.5`, height 122.
  - Active tab gets progress line `absolute left-0 top-0 h-[2px] bg-[#E4E6E7]` with width `{progress}%` and `transition: width 150ms linear`.
  - Title: 18/27 570, active `#E4E6E7`, inactive `#AFB3B6`.
  - Body: 14/21 430, active `#CACDCE`, inactive `#959A9D`.
  - Below md, the active tab also renders its mobile image underneath (`aspect-[424/339]`, `*-mobile.webp`).
  - Tabs:
    1. "Answers from across your workspace" — "Ask Plane AI anything. Status on a cycle, blockers on a project, what changed in a doc last week. It reads across your complete workspace."
    2. "Agents that do the work for you" — "Built-in agents handle the busywork. Triage incoming requests, assign owners, track blockers, and ship updates automatically."
    3. "Works where your team already talks" — "Bring Plane AI into Slack or Teams. Turn conversations into work items, get updates, and keep projects moving without switching tools."
- **Auto-advance:** every **6000ms** while the section intersects the viewport (IntersectionObserver, default threshold).
  - Progress = `(now − start)/6000·100`, recomputed every **50ms**. Measured: +0.833% per 50ms.
  - Leaving the viewport clears both intervals and keeps the progress. Re-entering resumes from the saved progress.
  - Click: select that tab, reset progress to 0 and restart the 6s interval. The cycle wraps 3 → 1.

## 6. Customer stories — `div.py-20.bg-[#FAFAFA]` (no aria-label)
- 1440: top 3017, height 714. Bg `#FAFAFA`, padding 80/80.
- Grid: `grid lg:grid-cols-3 gap-6` (402.66 cols). Row 1 is 298 tall, row 2 is 232; the rows are 24px apart.
- Card base: radius 16, padding 32 (16 below lg), `flex flex-col space-y-8`. Hover `scale(1.01)` with `transition: all 300ms cubic-bezier(.4,0,.2,1)`.
- **Card A** (col 1, link `/customers/fortyau`):
  - bg `testimonial.webp` cover/center (dark artwork).
  - Logo `40au.svg` at 134x32 with `filter: brightness(0) invert(1)`.
  - Bottom block (`mt-auto space-y-5`):
    - Title "Why FortyAU replaced Monday and Trello with Plane for flexible, self-hosted project delivery" 18/27 430 `#FAFAFA`.
    - Row "Read customer story" 16/24 400 `#FAFAFA` + chevron-right 24, gap 8.
- **Card B** (col-span-2, not a link):
  - bg white, 1px `#E4E6E7`, radius 16, p 32, `space-y-8`.
  - Quote icon `icon-quote.svg` 24x24 (viewBox 30x24), `#CFD2D3`.
  - Text "The Plane team is creating a product that our business has been needing for years. Modern features, flexible workflows, without sacrificing reporting abilities." 24/36 430 `#1d1f20` (3 lines, 698 wide).
  - Attribution row: flex, items-center, gap 40.
    - "Duane Arnett" 16/24 500 `#1d1f20`, with "FortyAU" 13/19.5 `#4e5355` below.
    - Divider 1x48 `#E4E6E7`.
    - `40au.svg` 84x20.
- **Cards C–E** (row 2, white, 1px `#E4E6E7`, radius 16, p 32):
  - Logo, then bottom title 18/27 430 `#1d1f20`, then "Read customer story" 16/400 + chevron-right.
  - C: `minimalart.svg` 127x16 — "Why MinimalArt replaced ClickUp with Plane for simpler project management" (`/customers/minimalart`)
  - D: `vates.svg` 35x36 — "Why VATES replaced a Trello alternative with Plane as they scaled" (`/customers/vates`)
  - E: `inits.svg` 72x20 — "How INITS built a real-world innovation lab for students with Plane" (`/customers/inits`)
- Below lg: single column (704 at 768, 358 at 390).

## 7. Migrate — `section[aria-label="Migrate"]`
- 1440: top 3731, height 766. Bg white, padding 80/80.
- `space-y-11` (44px).
- Header: centered at md+ (`flex flex-col items-center space-y-6`); left aligned below md.
  - h2 "Two Fortune 10 companies\nchose Plane for their Jira migration." 2 lines, 641 wide.
  - 12px, then p "Get out of Jira, Linear, ClickUp, Asana, or Monday without leaving your data behind.\nFull migration support from day one, whether you're moving 50 people or 10,000" 16/24 `#4e5355`.
  - 24px, then buttons: "Get started free" (primary, sign-up) and "Talk to a migration expert →" (secondary, `/talk-to-sales`).
- Ruler: `div.relative.h-7` (28px) holding an absolutely positioned inset layer with `background-image: repeating-linear-gradient(to right, #eff0f0 0, #eff0f0 1px, transparent 1px, transparent 16px); background-size: 16px 100%`. This draws 1px vertical ticks every 16px across the full 1256 width.
- Grid: `md:grid-cols-3 gap-6`. Each column: `border-l 1px #eff0f0`, padding 24, `space-y-12` (48).
  - Head (`space-y-3`): "WEEK n" 14/22.4 500 `#006399`, then step title 18/27 570 `#1d1f20`.
  - List (`space-y-2`): items `flex items-start gap-3`. Each item has a lucide check icon (16px, `#4e5355`, margin-top 8) and text 14/21 430 `#4e5355`.
  - Week 1 "Discovery and set-up.":
    - We run discovery scripts on your existing setup
    - We map every issue, attachment, comment, and automation
    - You get a migration plan tailored to your organization
  - Week 2 "Run in parallel":
    - Define workflows that match how your team actually works
    - Connect to Slack, GitHub, Figma, and 50+ tools
    - Set up initiatives, cycles, and team structures
  - Week 3 "Cut over and onboard":
    - Experience a tool that moves as fast as you do
    - AI already knows your projects, your blockers, your priorities
    - No more fighting your software to get work done

## 8. Core capabilities — `section.py-20` (no aria-label)
- 1440: top 4497, height 1174. Bg white, padding 80/80.
- `space-y-11`.
- Header (`space-y-6`):
  - Eyebrow "Core Capabilities" 16/24 500 uppercase `#006399`, then 16px.
  - Grid `md:grid-cols-2 gap-2` (624+624):
    - Left: h2 "Flexible features for every\nproject, and all teams" (2 lines).
    - Right: p "Plane is fast to set-up and easy-to-adapt.\nMultiple views, time-boxed cycles, built-in docs, and real-time dashboards help teams plan and ship without fighting their tools." 16/24 `#4e5355`. Measured at x=804, width 487, top offset +22 from the h2 (so ~80px left inset inside col 2).
  - Then buttons: "Get started free" (primary) and "Talk to a human →" (secondary).
- Big cards: `grid md:grid-cols-2 gap-6` (616 each, 510 tall at 1440).
  - Card 1: bg `ai-background.webp` cover/center, radius 12, padding 24 24 0, text `#FAFAFA`.
    - Title "Every view your team needs" 18/27 500.
    - Body "Board, Spreadsheet, List, Gantt. Switch instantly. Every role sees the work that matters to them." 14/22.4.
    - 40px gap, then `view.webp` w-full h-auto (568x368).
  - Card 2: bg `#FAFAFA`, radius 12, padding 24, text `#1d1f20`.
    - Title "Real-time dashboards without the setup".
    - Body "Track cycle velocity, workload, blockers, and scope changes with dashboards that populate automatically. No manual reports, no Friday status decks."
    - Image `real-time.webp` (568x306).
  - Inner layout is `space-y-10`, with the title block `space-y-1.5`.
- Small cards: 24px below, `grid md:grid-cols-2 lg:grid-cols-4 gap-6` (296 each, 204 tall).
  - Card: bg `#f7f7f8`, 0.5px `#eaebeb`, radius 12, p 20, `space-y-12`.
  - Icon box: 40x40 white, radius 8, 0.5px `#eaebeb`, holding a 20x20 img.
  - Title 16/24 570, then 6px, then body 14/22.4 `#4e5355`.
  - Cards:
    1. `cycles.svg` "Cycles and sprints" — "Time-box work with velocity tracking and burndown charts built in"
    2. `documentation.svg` "Documentation built-in" — "Rich documentation features that live alongside projects"
    3. `Initiative.svg` "Initiatives and epics" — "Align team-level work to org-level goals with rollup tracking"
    4. `workflows.svg` "Workflows and approvals" — "Automate handoffs, reviews, and stage gates without plugins"

## 9. Self-hosted — `section[aria-label="Self-hosted"]`, dark
- 1440: top 5672, height 1061. Bg `#0F0F10`, padding 80/80.
- `space-y-11`.
- Header: same 2-col grid as §8.
  - h2 "Self-host without compromise,\non-prem and air-gapped" `#E4E6E7`.
  - p "The only modern project management platform built for environments where you control every layer." `#CACDCE`, x=804, width 523.
  - Buttons: "Self-host Plane" (primary-on-dark → `https://developers.plane.so/self-hosting/overview#deployment-methods`) and "Talk to a human →" (secondary-on-dark).
- Image: `aspect-[1256/540]` radius 12, `self-hosted.webp` cover (1256x540). Below md use `aspect-[424/339]` with `self-hosted-mobile.webp`.
- Then 24px, then `grid md:grid-cols-3 gap-6`, each column `space-y-1.5`:
  - Title 18/27 570 `#FAFAFA`, body 14/22.4 `#CACDCE`.
  - "Prime CLI" — "Install, configure, upgrade, back up, and monitor your instance with single commands. Multi-instance support, custom domain setup, and service scaling built in."
  - "Docker and Kubernetes" — "Deploy with Docker for quick setup or Kubernetes with Helm charts for production scale. Bring your own Postgres, Redis, and S3-compatible storage."
  - "God Mode" — "One admin panel for your entire instance. Configure SMTP, authentication methods, SSO, workspace security, and telemetry preferences from a single screen."

## 10. Download (mobile apps) — `section[aria-label="Download"]`, dark
- 1440: top 6732, height 629. Bg `#0F0F10`, padding 80/80. There is no visible seam with §9 because both are `#0F0F10`.
- Grid: `md:grid-cols-2 gap-6 items-center` (616+616).
- Left (`space-y-7`, 28px):
  - Text (`space-y-4`):
    - Eyebrow "Mobile" 14 `#2893CC` uppercase.
    - h2 (Inter 32/41.6 430, ls -0.96px, `#E4E6E7`) "Your entire workspace on your mobile\non both our Cloud and your\nself-hosted instance".
  - Store cards: `grid sm:grid-cols-2 gap-3` (302 each).
    - Card: `a` p 16, bg `#181A1B`, 0.5px `#2C2E30`, radius 12, `space-y-6`. Hover `scale(1.05)`, 300ms.
    - Contents: icon 24x24, then a row (flex, gap 12) with label 16/24 500 `#E4E6E7` and lucide arrow-up-right 18px.
    - "Download for iOS" (`appstore.svg`, https://apps.apple.com/in/app/plane/id6657986465)
    - "Download for Android" (`playstore.svg`, https://play.google.com/store/apps/details?id=com.plane.so)
- Right: `aspect-[616/469]`, `mobile.webp` cover (616x469). Below md use `aspect-[424/329]` with `mobile-mobile.webp`.

## 11. Apps & integrations — `section[aria-label="Apps"]`
- 1440: top 7361, height 1183. Bg white, padding 80/80.
- `space-y-11`.
- Header: centered, flex-col, gap 12. h2 "Extend Plane with apps, agents,\nand your own integrations".
- Then `space-y-7` (28):
  - Row 1: `grid lg:grid-cols-2 gap-6`, two cards 616x540.
    - Card: bg `#f7f7f8`, 0.5px `#eaebeb`, radius 12, padding 28/32 (16/20 below md), `space-y-9` (36).
    - Text (`space-y-3`): title row (flex, gap 8, 18/27 570), body 14/22.4 `#4e5355`, link 16/430 hover underline.
    - Image wrapper `w-full flex justify-center`, image 551x333 object-cover.
    - Card 1: title "Browse the" + inline `logo.svg` (134x25 marketplace wordmark). Body "GitHub, GitLab, Slack, Sentry, and more. Sync issues, track PRs, and import from Jira, Linear, Asana, ClickUp or Monday." Link "Go to Marketplace →" (`/marketplace`). Image `browse.webp` (mobile: `browse-mobile.webp`).
    - Card 2: title "Build your own". Body "Open API, webhooks, OAuth apps, and a native MCP server. Build custom integrations or AI agents that work inside Plane." Link "Read the docs →" (https://developers.plane.so/dev-tools/agents/building-an-agent). Image `build.webp` (mobile: `build-mobile.webp`).
  - Row 2, Slack card:
    - Full width 1256x296. Bg `#f7f7f8`, 0.5px `#eaebeb`, radius 12. `grid lg:grid-cols-2 lg:gap-20` (80px gap; cols 587.5).
    - Left: padding 28/32, `flex flex-col justify-between space-y-5`.
      - `slack.svg` 114x40.
      - Title "Don’t miss our AGI-like Slack integration." 18/27 570.
      - Body: chip "@Plane" (`#2060DF` on `#E4ECFB`, px 3, radius 4), then " in any Slack channel. Describe what needs to happen. Plane creates the work, assigns it, and syncs the thread back."
      - Link "Add Plane to Slack →" (`/marketplace`).
      - Footer row "Coming soon to Microsoft Teams" 14/22.4 `#4e5355` (flex, gap 8).
    - Right: `hidden lg:flex`, pt 28, pr 0. `slack-image.webp` object-cover **object-bottom**, 588x267.
    - Below lg a `slack-image-mobile.webp` appears instead (675x358 at 768).

## 12. Enterprise — `section[aria-label="Enterprise"]`
- 1440: top 8544, height 855. Bg white, padding 80/80. Container has overflow hidden.
- Header: `grid md:grid-cols-2 items-start` (628+628, no gap).
  - h2 "Enterprise-grade security,\ncompliance, and control".
  - p "Plane meets the security and compliance standards your InfoSec team requires, across cloud and self-hosted deployments." 16/24 `#4e5355`, x=816, width 531, top +22.
- Then 44px, then `grid md:grid-cols-3 gap-6`. Each column is `space-y-5` (20):
  - Image box: `aspect-square` (403x403), radius 12, 0.5px `#EAEBEB`, bg `#FAFAFA`, overflow hidden. Image object-contain, 322x322, centered (41px inset).
  - Text (`space-y-3`): title 18/27 570, then 6px, body 14/22.4 `#4e5355`, then link 16/430 (hover underline).
  - Columns:
    1. `certified.webp` "Certified across four compliance standards" — "SOC 2, ISO 27001, GDPR, and CCPA compliance out of the box. Independently audited, continuously monitored." — "Go to security.plane.so →" (https://security.plane.so/)
    2. `uptime.webp` "Fully committed uptime SLA" — "Automatic backups, real-time scaling, and multi-layer failovers. Built to stay up when it matters most." — "Go to status.plane.so →" (https://status.plane.so/)
    3. `identify.webp` "Identity and access at every layer" — "SSO, SAML, and LDAP across every workspace. Authenticate your way." — "Go to /enterprise →" (`/solutions/enterprise-teams`)

## 13. Developers — `section[aria-label="Developers"]`, dark
- 1440: top 9399, height 1107. Bg `#0F0F10`, padding 80/80.
- `space-y-11`.
- Header: centered at md+, flex-col, gap 24.
  - Text (gap 16):
    - Eyebrow "LOVED BY DEVELOPERS AND PROJECTOPS ADMINS" 14 `#2893CC`.
    - h2 "Every setting versioned, reviewed, and\ndeployed from your terminal." `#E4E6E7`.
  - Buttons: primary-on-dark "Get started free", secondary-on-dark "Talk to a human →".
- Then `space-y-6`:
  - Big card: bg `#181A1B`, radius 12, overflow hidden, `grid md:grid-cols-2 items-center` (628+628, 500 tall).
    - Left: `project-as-code.webp` w-full h-auto (628x500). Below md use `project-as-code-mobile.webp`.
    - Right: p 24, `space-y-6`.
      - h3 "Plane Compose for Projects-as-Code" Inter 32/41.6 `#FAFAFA`.
      - 6px, then p "Define projects in YAML, version in Git, deploy from your terminal. Start\ntreating project configuration as the infrastructure it is." 14/21 `#CACDCE`.
      - Link "Learn More" (+ sr-only " about Plane Compose for Projects-as-Code") 16/400 `#E4E6E7` with chevron-right 16, gap 8 (`/plane-compose`).
  - Link cards: `grid md:grid-cols-2 gap-6` (616x159).
    - Card: `a` bg `#181A1B`, radius 12, p 24, `space-y-1.5`, relative. Hover scale 1.01, 300ms.
    - Title row (flex, gap 8): 18/27 570 `#FAFAFA` + lucide arrow-up-right 16.
    - Body 14/21 `#CACDCE`, `md:max-w-sm` (384).
    - Decorative svg (110x110, `object-fill`) sits absolutely at the card's top-right (top 0, right 0).
    - Cards:
      1. "APIs, Webhooks, and SDKs" — "REST API with OAuth 2.0, HMAC-signed webhooks, and typed SDKs in Node.js and Python. Build custom integrations, dashboards, and automations." Decor `api.svg`, link `/developers`, `target=_blank`.
      2. "MCP Server" — "Native MCP server, an agent framework with @mention support, and full Agent Run lifecycle tracking. Let AI manage work inside Plane, not just read it." Decor `ai.svg` (developers version), link https://developers.plane.so/dev-tools/mcp-server.

## 14. CTA — `section[aria-label="Cta"]`
- 1440: top 10506, height 393. Bg image `cta-bg.webp` (cover, center, no-repeat; dark artwork). Padding 80/80.
- Inner: flex-col, items-center, text-center, `space-y-10`.
  - h2 "Next-gen project management\nstarts here": satoshi **58/75.4** (h1 size), `#E4E6E7`, 735 wide.
  - Buttons (gap 16): primary-on-dark "Get started free" (`https://app.plane.so/sign-up/`) and secondary-on-dark "Talk to a migration expert" (no arrow, `/talk-to-sales`).

## 15. Footer (sibling after `main`'s wrapper)
- Outer wrapper: `relative z-20 bg-[#0F0F10] text-[#f5fbff]`. At 1440: top 10899, height 1333.
- **Top block**: `rounded-b-3xl` (24px bottom corners), bg `#0F0F10`, padding 64/64, `space-y-10`. Height 851.
  1. Row (container): `flex flex-wrap md:justify-between items-center gap-4`.
     - Left: `logo-light.svg` 66x40.
     - Right: link to https://security.plane.so/ (aria-label "Security compliance: GDPR, HIPAA, ISO 27001, and SOC 2 certified"). Four 64x64 badges, gap 8: `gdpr.svg`, `hipaa.svg`, `iso-27001.svg`, `soc-2.svg`.
  2. Link grid: `grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8` (6×182.66 at 1440; 172 at 1280; 2 cols below lg).
     - Each column: `flex flex-col gap-4 pb-6`, holding 1–3 groups.
     - Group: heading `p` satoshi 13/600 `#959A9D`, margin-bottom 8. Then `ul` margin-top 4, `space-y-2`. Links 13/19.5 430 `#E4E6E7`, hover underline.
     - Col 1:
       - **Product**: Project Management `/project-management`, Wiki `/wiki`, Plane AI `/ai`, Plane Compose `/plane-compose`.
       - **Self-hosted**: Commercial Edition `/self-hosted`, Airgapped Edition `/airgapped`, Prime Portal https://prime.plane.so/.
     - Col 2:
       - **Features**: Work items `/work-items`, Work item types `/work-item-types`, Intake `/intake`, Cycles `/cycles`, Workflows and Approvals `/workflows-and-approvals`, Epics and Initiatives `/epics-initiatives`, Customers `/customer-requests`, Dashboards `/dashboards`, Teamspaces `/teamspaces`, State of Projects + Updates `/state-of-projects-and-updates`.
       - **Marketplace**: Apps and agents `/marketplace/categories/agents#list`, Importers `/marketplace/categories/importers#list`, Templates `/templates`.
     - Col 3:
       - **Plan and pricing**: Pro `/pro`, Business `/business`, Enterprise-grid `/enterprise-grid`.
       - **Use cases**: Product, Operations, Marketing, Agile, Design, Engineering (`/solutions/<x>`).
       - **Scale**: Startups `/solutions/startups`, Growing Teams `/solutions/growing-teams`, Enterprise Teams `/solutions/enterprise-teams`.
     - Col 4:
       - **Industries**: Aerospace, Healthcare, Government, Retail, Manufacturing, Defense, Finance (`/industries/<x>`).
       - **Compare**: Jira, Asana, Monday.com, Linear, ClickUp, Shortcut, Notion (`/plane-vs-<x>`).
     - Col 5:
       - **Learn**: The Plane blog `/blog`, What's new (Changelog) `/changelog`, Download `/download`, Mobile `/mobile`, Plane Academy https://academy.plane.so/videos.
       - **Support**: Docs `/docs`, Developer Docs `/developers`, Status https://status.plane.so/, Forum https://forum.plane.so/.
     - Col 6:
       - **Company**: Terms `/legals/terms-and-conditions`, Privacy `/legals/privacy-policy`, Security `/security`, Legal `/legals`, Careers `/careers`, About `/about`, Wallpapers `/wallpapers`.
       - **Plane in action**: Manifesto `/manifesto`, Make the switch `/switch`, Talk to Sales `/talk-to-sales`, General enquiries `/contact`, What our customers say `/customers`.
     - Measured pitch: heading at y, first link at y+25, links every 27.5px. Groups inside a column are ~33px apart.
  3. Bottom row: border-top 1px `#1D1F20`, padding-top 40. Container: `flex flex-wrap items-center justify-between gap-6`.
     - Left (gap 16): two buttons styled bg `#1D1F20`, 1px `#36393A`, `#CACDCE`, px 12 py 8, radius 8, gap 8, 16/24 400.
       - "Download for Mac": `appstore.svg` 20px, https://go.plane.so/macos. 191x42.
       - "Download for Windows": `icon-windows.svg` 16px, https://go.plane.so/windows. 224x42.
       - Below md these are swapped for "Download for iOS" / "Download for Android".
     - Right (gap 16): 5 social buttons, 50x50, p 12, radius 8, bg `#1D1F20`, 1px `#36393A`, icon 24px `#CACDCE` (transition-colors 150ms).
       - LinkedIn https://www.linkedin.com/company/planepowers/
       - GitHub https://github.com/makeplane/plane
       - X https://twitter.com/planepowers
       - Discord https://discord.com/invite/A92xrEGCge
       - YouTube https://www.youtube.com/@planepowers
- **Wordmark reveal**:
  - Second child of the footer: `sticky bottom-0 -z-10 bg-[#141415]`, padding 64 32 8 (pt 16, px 16 below sm). Height 481 at 1440.
  - Contents: `footer-brand-wordmark.svg`, `mx-auto h-auto w-[1600px] max-w-full`, rendered 1376x409.
  - Because it is sticky at the bottom and sits under the rounded top block (z-20 vs -z-10), it appears to be uncovered as you scroll to the end. This is pure CSS with no JS.

---

## Motion summary (exhaustive for the homepage)
I watched a MutationObserver on class/style attributes while scrolling the full page (300px steps at 250ms intervals). The **only** scroll- or visibility-driven changes were the Products tab progress (§3) and the Insight auto-advance (§5). There are **no scroll-reveal/fade-in-on-scroll animations, no GSAP, no parallax and no marquee**. Framer-motion-style inline transforms appear only inside the nav mega-menu content swap.

| element | trigger | property | duration | easing | delay |
|---|---|---|---|---|---|
| Hero h1 words | page load | opacity 0→1, blur 14px→0, translateY .14em→0 | 1000ms | cubic-bezier(.32,.72,0,1) | 80 + 70·i ms |
| Hero subtitle | load | opacity, blur 4px→0, translateY 8px→0 | 900ms | cubic-bezier(.32,.72,0,1) | 720ms |
| Hero CTA row | load | same | 900ms | same | 840ms |
| Nav dropdown panel | hover trigger | opacity 0→1, translateY -8px→0 | 220ms | cubic-bezier(.4,0,.2,1) | 0 |
| Nav overlay | open | opacity 0→1 | 220ms | cubic-bezier(.4,0,.2,1) | 0 |
| Nav content swap | hover another trigger | opacity + translateX 16px→0 | ~230ms | ease-out (JS) | 0 |
| Nav pill hover | hover | bg → #f4f5f5 | 150ms | cubic-bezier(.4,0,.2,1) | 0 |
| Buttons | hover | background-color | 150ms | cubic-bezier(.4,0,.2,1) | 0 |
| Product tab colors | active/hover | colors | 200ms | cubic-bezier(.4,0,.2,1) | 0 |
| Product progress bar | video frames | scaleX 0→1 over 16s per tab | per frame | linear | — |
| Product video | `playing` event | opacity 0→1 | 300ms | cubic-bezier(.4,0,.2,1) | — |
| Pause button | stage hover | opacity 0↔1 | 150ms | cubic-bezier(.4,0,.2,1) | — |
| Insight progress | 50ms tick while in view | width % | 150ms | linear | — |
| Insight image swap | every 6000ms / click | opacity crossfade | 300ms | cubic-bezier(.4,0,.2,1) | — |
| Story / dev cards | hover | scale 1 → 1.01 | 300ms | cubic-bezier(.4,0,.2,1) (`transition-all`) | — |
| Store cards | hover | scale 1 → 1.05 | 300ms | same | — |
| Dropdown chips / cards | hover | scale 1.01 | 300ms | same | — |
| Mobile menu icon | toggle | scale/rotate/opacity | 300ms | ease-in-out | — |
| Mobile accordion | toggle | max-height 0→200vh, opacity | 300ms | cubic-bezier(.4,0,.2,1) | — |
| Mobile chevron | toggle | rotate 0→90° | 200ms | cubic-bezier(.4,0,.2,1) | — |

`prefers-reduced-motion`:
- The hero animation is disabled by CSS.
- The Products showcase JS skips autoplay and shows a centered 56px "Play the product walkthrough" button (white/95 circle, shadow `0 8px 24px -6px rgba(16,24,40,.3)`, hover scale 1.05). The same happens when `navigator.connection.saveData` is set or autoplay is blocked (NotAllowedError).

## Section map at other widths (top / height)
| section | 1440 | 1280 | 768 | 390 |
|---|---|---|---|---|
| header | 0/58 | 0/58 | 0/66 (mobile) | 0/66 (mobile) |
| Hero | 58/495 | 58/495 | 66/646 | 66/581 |
| Products | 553/867 | 553/831 | 712/617 | 647/640 |
| Customers | 1420/470 | 1384/470 | 1328/470 | 1287/562 |
| Insight | 1890/1127 | 1854/1100 | 1798/1048 | 1849/1203 |
| Stories | 3017/714 | 2954/721 | 2846/1200 | 3053/1416 |
| Migrate | 3731/766 | 3675/790 | 4046/913 | 4468/1587 |
| Core capabilities | 4497/1174 | 4465/1176 | 4958/1401 | 6055/2214 |
| Self-hosted | 5672/1061 | 5641/1033 | 6360/1005 | 8270/1190 |
| Download | 6732/629 | 6674/605 | 7365/523 | 9460/845 |
| Apps | 7361/1183 | 7278/1149 | 7888/2208 | 10305/1668 |
| Enterprise | 8544/855 | 8427/834 | 10096/857 | 11973/1932 |
| Developers | 9399/1107 | 9261/1082 | 10953/913 | 13905/1363 |
| CTA | 10506/393 | 10342/393 | 11866/468 | 15268/438 |
| Footer | 10899/1333 | 10735/1285 | 12334/2157 | 15706/2139 |
| page height | 12231 | 12020 | 14490 | 17845 |

Key responsive switches:
- **<768**: hero becomes left aligned (pb 48, gap 24). Product tabs go to 1 column. Logos go to 3 columns (gap-x 8, li h 64, img max-h 40). Insight hides the big image and shows a mobile image under the active tab. Section headers become left aligned. Grids collapse to 1 column. Mobile image variants are used.
- **768–1023**: still the mobile header. Stories and Apps rows are 1 column (`lg:` grids). Small feature cards are 2 columns. Footer grid is 2 columns.
- **1024–1279**: desktop header. Nav gap 24, "Sales"/"Self-host" short labels. Footer grid is 3 columns.
- **≥1280**: container padding 44, footer grid 6 columns.
- At 768 the type is still desktop size (h1 58), because the type switch is at exactly 768 (min-width:48rem).

## Not measurable / caveats
- The nav content-swap motion is JS-driven (framer-motion-like). The ~230ms duration and ease-out shape come from sampled inline styles, not from a declared curve.
- Footer social icons have no hover rule in their class list. Only `transition-colors` is declared, so no hover change was observable.
- The live changelog strip text ("Page-level comments… | Oct 15, 2026") is dynamic content and will change over time.
