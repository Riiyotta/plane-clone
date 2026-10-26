# plane.so clone: information architecture

Source: Clone route table served by http://localhost:5247 (site/src/App.jsx file-based routes over site/src/pages)
Status: **measured-from-clone-source** · production approved: **false**
208 routes · 68 templates · 290 unique sections

> Generated from `ia.json` by `build.mjs`. Edit the JSON, not this file.

## Shape of the site

The largest 3 templates (Job detail, Template detail, Marketplace app detail) account for 69 of 208 routes (33%). The remaining 139 routes span 65 templates.

| template | routes | share |
|---|---:|---:|
| Job detail | 33 | 16% |
| Template detail | 18 | 9% |
| Marketplace app detail | 18 | 9% |
| Blog post | 12 | 6% |
| Changelog entry | 11 | 5% |
| Legal document | 10 | 5% |
| Customer story | 8 | 4% |
| Feature page (standard) | 7 | 3% |
| Marketplace category | 7 | 3% |
| Solutions team page | 6 | 3% |
| Industry page | 6 | 3% |
| Plane-vs comparison (v2) | 6 | 3% |
| Templates category | 4 | 2% |
| Solutions company-size page | 3 | 1% |
| Feature hub page | 2 | 1% |
| Solutions and industries index | 2 | 1% |
| Plane-vs comparison (legacy) | 2 | 1% |
| Discount program page | 2 | 1% |
| Catalog root (templates and marketplace) | 2 | 1% |
| Homepage | 1 | 0% |
| Feature page (no feature rows) | 1 | 0% |
| AI feature page | 1 | 0% |
| Feature teaser page | 1 | 0% |
| Legacy feature page (delights) | 1 | 0% |
| Legacy feature page (teamspaces) | 1 | 0% |
| Legacy feature page (project states) | 1 | 0% |
| Plane Compose page | 1 | 0% |
| Agents page | 1 | 0% |
| Industry page with trust grid | 1 | 0% |
| Compare index | 1 | 0% |
| Switch to Plane | 1 | 0% |
| Switch from Jira Data Center | 1 | 0% |
| Importers page | 1 | 0% |
| Integrations directory | 1 | 0% |
| Partners page | 1 | 0% |
| Pricing page | 1 | 0% |
| Plan page (Pro) | 1 | 0% |
| Plan page (Business) | 1 | 0% |
| Plan page (Enterprise Grid) | 1 | 0% |
| Edition page (Self-hosted) | 1 | 0% |
| Edition page (Community / open source) | 1 | 0% |
| Startup program page | 1 | 0% |
| Mobile app page | 1 | 0% |
| Edition page (Air-gapped) | 1 | 0% |
| Security page | 1 | 0% |
| Download page | 1 | 0% |
| Work trials page | 1 | 0% |
| Self-hosting whitepaper | 1 | 0% |
| Plane One sunset essay | 1 | 0% |
| About page | 1 | 0% |
| Charter letter | 1 | 0% |
| Contact page | 1 | 0% |
| Manifesto page | 1 | 0% |
| Wallpapers page | 1 | 0% |
| Talk to sales | 1 | 0% |
| Demo video page | 1 | 0% |
| Launch week recap (fall) | 1 | 0% |
| Launch week storefront (q2) | 1 | 0% |
| Launch week redirect | 1 | 0% |
| Operating manual | 1 | 0% |
| Product Hunt thank-you page | 1 | 0% |
| Year in review page | 1 | 0% |
| Testimonials wall | 1 | 0% |
| Legal index | 1 | 0% |
| Blog index | 1 | 0% |
| Changelog index | 1 | 0% |
| Customers index | 1 | 0% |
| Careers index | 1 | 0% |

## Page chrome

**207 routes carry chrome = `full`** — Homepage, Feature page (standard), Feature page (no feature rows), Feature hub page, AI feature page, Feature teaser page, Legacy feature page (delights), Legacy feature page (teamspaces), Legacy feature page (project states), Plane Compose page, Agents page, Solutions team page, Solutions company-size page, Industry page, Industry page with trust grid, Solutions and industries index, Plane-vs comparison (v2), Plane-vs comparison (legacy), Compare index, Switch to Plane, Switch from Jira Data Center, Importers page, Integrations directory, Partners page, Pricing page, Plan page (Pro), Plan page (Business), Plan page (Enterprise Grid), Edition page (Self-hosted), Edition page (Community / open source), Startup program page, Mobile app page, Edition page (Air-gapped), Security page, Discount program page, Download page, Work trials page, Self-hosting whitepaper, Plane One sunset essay, About page, Charter letter, Contact page, Manifesto page, Wallpapers page, Talk to sales, Demo video page, Launch week recap (fall), Launch week storefront (q2), Operating manual, Product Hunt thank-you page, Year in review page, Testimonials wall, Legal index, Legal document, Blog index, Blog post, Changelog index, Changelog entry, Catalog root (templates and marketplace), Templates category, Marketplace category, Template detail, Marketplace app detail, Customers index, Customer story, Careers index, Job detail.

**1 routes carry chrome = `redirect`** — Launch week redirect.

## Sections by reuse

How widely a section is shared determines whether it belongs in a shared
component library or stays local to its page.

| section | category | templates | routes | implementation | scope |
|---|---|---:|---:|---|---|
| `shell.header` | SHELL | 68 | 208 | `site/src/components/Header.jsx > DesktopHeader` | Rendered by App.jsx around every route: all 208 routes, the /launch-week redirect included. |
| `shell.mega-menus` | SHELL | 68 | 208 | `site/src/components/header/MegaMenuContent.jsx > MENU_CONTENT (ProductMenu, SolutionsMenu, ResourcesMenu)` | Part of the global header on all 208 routes. |
| `shell.mobile-drawer` | SHELL | 68 | 208 | `site/src/components/Header.jsx > MobileHeader` | Part of the global header on all 208 routes; visible only below the desktop breakpoint. |
| `shell.footer` | SHELL | 68 | 208 | `site/src/components/Footer.jsx > Footer` | Rendered by App.jsx after every route: all 208 routes. |
| `shell.footer-wordmark-reveal` | SHELL | 68 | 208 | `site/src/components/Footer.jsx > Footer (sticky bottom-0 wordmark layer)` | Part of the global footer on all 208 routes. |
| `shell.catalog-subheader` | SHELL | 5 | 49 | `site/src/components/collections/Catalog.jsx > CatalogSubHeader` | All 49 catalog routes: both catalog roots, every category page and every template or app detail page. |
| `conversion.catalog-cta` | CONVERSION | 5 | 49 | `site/src/components/collections/Catalog.jsx > CatalogCta` | All 49 catalog listing and detail routes. |
| `content.catalog-item-header` | CONTENT | 2 | 36 | `site/src/components/collections/Catalog.jsx > CatalogDetail (header)` | All 36 template and marketplace detail routes. |
| `content.catalog-item-meta` | CONTENT | 2 | 36 | `site/src/components/collections/Catalog.jsx > MetaGroup` | All 36 template and marketplace detail routes. |
| `content.catalog-item-body` | CONTENT | 2 | 36 | `site/src/components/collections/Catalog.jsx > CatalogDetail (Prose)` | All 36 template and marketplace detail routes. |
| `content.job-header` | CONTENT | 1 | 33 | `site/src/components/collections/Careers.jsx > JobPage (header)` | All 33 local job routes. |
| `content.job-body` | CONTENT | 1 | 33 | `site/src/components/collections/Careers.jsx > JobPage (Prose JOB_BODY)` | All 33 local job routes. |
| `conversion.job-apply-card` | CONVERSION | 1 | 33 | `site/src/components/collections/Careers.jsx > JobPage (Apply card)` | All 33 local job routes. |
| `conversion.collections-cta-card` | CONVERSION | 3 | 24 | `site/src/components/collections/ui.jsx > CtaCard` | /blog, every local blog post and every local changelog entry (24 routes). |
| `hero.solutions-hero` | HERO | 4 | 16 | `site/src/components/solutions/Blocks.jsx > Hero` | All 16 team, size and industry solution routes. |
| `proof.solutions-logos` | PROOF | 4 | 16 | `site/src/components/solutions/Blocks.jsx > Logos` | All 16 team, size and industry solution routes. |
| `features.solutions-rows` | FEATURES | 4 | 16 | `site/src/components/solutions/Blocks.jsx > Rows` | All 16 team, size and industry solution routes. |
| `hero.catalog-hero` | HERO | 3 | 13 | `site/src/components/collections/Catalog.jsx > CatalogListing (hero)` | Both catalog roots and every catalog category page (13 routes). |
| `content.catalog-directory` | CONTENT | 3 | 13 | `site/src/components/collections/Catalog.jsx > CatalogListing (#list) + ItemCard` | Both catalog roots and every catalog category page (13 routes). |
| `hero.feature-hero` | HERO | 5 | 12 | `site/src/components/features/blocks.jsx > Hero` | Every current-generation FeaturePage route: the standard, no-rows, hub and AI feature templates plus /semantic-diffs-by-plane (12 routes). |
| `proof.feature-logo-marquee` | PROOF | 5 | 12 | `site/src/components/features/blocks.jsx > LogoStrip` | The standard, no-rows, hub and AI feature templates plus /agents (12 routes). |
| `content.changelog-lightbox` | CONTENT | 2 | 12 | `site/src/components/collections/Changelog.jsx > Lightbox` | /changelog and every local changelog entry (12 routes). |
| `content.blog-post-header` | CONTENT | 1 | 12 | `site/src/components/collections/BlogPost.jsx > BlogPost (header)` | All 12 local blog posts. |
| `content.blog-post-toc` | CONTENT | 1 | 12 | `site/src/components/collections/BlogPost.jsx > TocList` | All 12 local blog posts. |
| `content.blog-post-share` | CONTENT | 1 | 12 | `site/src/components/collections/BlogPost.jsx > Share (+ Start a free trial)` | All 12 local blog posts. |
| `content.blog-post-body` | CONTENT | 1 | 12 | `site/src/components/collections/BlogPost.jsx > BlogPost (Prose, cl-blog)` | All 12 local blog posts. |
| `content.blog-post-related` | CONTENT | 1 | 12 | `site/src/components/collections/BlogPost.jsx > BlogPost ("Recommended for you") + PostCard` | All 12 local blog posts. |
| `features.feature-ai-bento` | FEATURES | 4 | 11 | `site/src/components/features/blocks.jsx > Section (header + Bento)` | Every route of the standard, no-rows, hub and AI feature templates (11 routes). |
| `conversion.feature-self-host-card` | CONVERSION | 4 | 11 | `site/src/components/features/blocks.jsx > SelfHost` | All 11 standard, no-rows, hub and AI feature routes. |
| `features.feature-security-image-grid` | FEATURES | 4 | 11 | `site/src/components/features/blocks.jsx > Section (split header + ImageGrid, three cards)` | All 11 standard, no-rows, hub and AI feature routes. |
| `content.legal-header` | CONTENT | 2 | 11 | `site/src/components/collections/LegalPage.jsx > LegalHeader` | The /legals index plus every legal document (11 routes). |
| `content.changelog-entry-toc` | CONTENT | 1 | 11 | `site/src/components/collections/Changelog.jsx > EntryToc` | All 11 local changelog entries. |
| `content.changelog-entry-header` | CONTENT | 1 | 11 | `site/src/components/collections/Changelog.jsx > ChangelogDetail (header)` | All 11 local changelog entries. |
| `content.changelog-entry-body` | CONTENT | 1 | 11 | `site/src/components/collections/Changelog.jsx > ChangelogDetail (Prose, cl-changelog)` | All 11 local changelog entries. |
| `content.changelog-recent` | CONTENT | 1 | 11 | `site/src/components/collections/Changelog.jsx > ChangelogDetail (recent-changelogs)` | All 11 local changelog entries. |
| `features.feature-beyond-image-grid` | FEATURES | 3 | 10 | `site/src/components/features/blocks.jsx > Section (header + ImageGrid, six cards)` | The standard, no-rows and hub feature templates (10 routes). |
| `features.feature-connected-tabs` | FEATURES | 3 | 10 | `site/src/components/features/blocks.jsx > Section (split header + TabsSide)` | The standard, no-rows and hub feature templates (10 routes). |
| `features.solutions-security-cards` | FEATURES | 3 | 10 | `site/src/components/solutions/Blocks.jsx > Cards` | Team and size solution pages plus /industries/healthcare (10 routes). |
| `faq.solutions-faq` | FAQ | 3 | 10 | `site/src/components/solutions/Blocks.jsx > Faq` | Size and industry solution routes (10 routes). |
| `content.legal-toc` | CONTENT | 1 | 10 | `site/src/components/collections/LegalPage.jsx > LegalToc` | The 10 legal document routes. |
| `content.legal-body` | CONTENT | 1 | 10 | `site/src/components/collections/LegalPage.jsx > LegalPage (Prose, cl-legal)` | The 10 legal document routes. |
| `faq.plans-faq` | FAQ | 9 | 9 | `site/src/components/plans/Blocks.jsx > Faq` | Nine plans-group routes: /pro, /business, /enterprise-grid, /self-hosted, /open-source, /for-startups, /mobile, /download and /work-trials (9 routes). |
| `conversion.feature-cta-banner` | CONVERSION | 3 | 9 | `site/src/components/features/blocks.jsx > CtaBanner` | The standard and no-rows feature templates plus /semantic-diffs-by-plane (9 routes). |
| `features.solutions-integrations-bento` | FEATURES | 2 | 9 | `site/src/components/solutions/Blocks.jsx > Bento` | Team and size solution routes (9 routes). |
| `conversion.solutions-cta` | CONVERSION | 2 | 9 | `site/src/components/solutions/Blocks.jsx > Cta` | Team and size solution routes (9 routes). |
| `features.feature-intro-image-grid` | FEATURES | 2 | 8 | `site/src/components/features/blocks.jsx > Section (header + ImageGrid)` | The 8 standard feature routes, including /work-items. |
| `pricing.compare-pricing` | PRICING | 2 | 8 | `site/src/components/compare/ComparisonPage.jsx > PricingCompare` | All 8 plane-vs routes (newer and legacy). |
| `content.customer-story-header` | CONTENT | 1 | 8 | `site/src/components/collections/Customers.jsx > CustomerStory (header)` | All 8 local customer stories. |
| `content.customer-story-meta` | CONTENT | 1 | 8 | `site/src/components/collections/Customers.jsx > CustomerStory (meta groups)` | All 8 local customer stories. |
| `content.customer-story-body` | CONTENT | 1 | 8 | `site/src/components/collections/Customers.jsx > CustomerStory (Prose)` | All 8 local customer stories. |
| `conversion.plans-cta-banner` | CONVERSION | 7 | 7 | `site/src/components/plans/Blocks.jsx > CtaBanner` | /pro, /business, /enterprise-grid, /self-hosted, /open-source, /for-startups and /work-trials (7 routes). |
| `proof.solutions-industry-customer-cards` | PROOF | 2 | 7 | `site/src/components/solutions/Blocks.jsx > Cards` | The 7 industry routes. |
| `features.solutions-showcase` | FEATURES | 2 | 7 | `site/src/components/solutions/Blocks.jsx > Showcase` | The 7 industry routes. |
| `features.solutions-deployment-cards` | FEATURES | 2 | 7 | `site/src/components/solutions/Blocks.jsx > Cards` | The 7 industry routes. |
| `conversion.solutions-cta-box` | CONVERSION | 2 | 7 | `site/src/components/solutions/Blocks.jsx > CtaBox` | The 7 industry routes. |
| `features.feature-rows` | FEATURES | 1 | 7 | `site/src/components/features/blocks.jsx > Section (FeatureRows)` | The 7 standard feature routes; /work-items omits it. |
| `proof.plans-logo-strip` | PROOF | 6 | 6 | `site/src/components/plans/Blocks.jsx > LogoStrip` | /self-hosted, /for-startups, /mobile, /open-source, /airgapped and /security (6 routes). |
| `features.solutions-tabs` | FEATURES | 1 | 6 | `site/src/components/solutions/Blocks.jsx > Tabs` | The 6 team solution routes. |
| `features.solutions-delight-cards` | FEATURES | 1 | 6 | `site/src/components/solutions/Blocks.jsx > Cards` | The 6 team solution routes. |
| `hero.compare-hero` | HERO | 1 | 6 | `site/src/components/compare/ComparisonPage.jsx > Hero` | The 6 newer ComparisonPage plane-vs routes. |
| `proof.compare-logos-quote` | PROOF | 1 | 6 | `site/src/components/compare/ComparisonPage.jsx > LogosQuote` | The 6 newer ComparisonPage plane-vs routes. |
| `features.compare-further` | FEATURES | 1 | 6 | `site/src/components/compare/ComparisonPage.jsx > Further` | The 6 newer ComparisonPage plane-vs routes. |
| `features.compare-agent-tabs` | FEATURES | 1 | 6 | `site/src/components/compare/ComparisonPage.jsx > AgentTabs` | The 6 newer ComparisonPage plane-vs routes. |
| `comparison.compare-feature-table` | COMPARISON | 1 | 6 | `site/src/components/compare/FeatureTable.jsx > FeatureTable` | The 6 newer ComparisonPage plane-vs routes. |
| `features.compare-switch` | FEATURES | 1 | 6 | `site/src/components/compare/ComparisonPage.jsx > Switch` | The 6 newer ComparisonPage plane-vs routes. |
| `features.compare-value-cards` | FEATURES | 1 | 6 | `site/src/components/compare/ComparisonPage.jsx > Cards` | The 6 newer ComparisonPage plane-vs routes. |
| `conversion.compare-dark-cta` | CONVERSION | 1 | 6 | `site/src/components/compare/ComparisonPage.jsx > DarkCta` | The 6 newer ComparisonPage plane-vs routes. |
| `hero.plans-hero-centered` | HERO | 5 | 5 | `site/src/components/plans/Blocks.jsx > HeroCentered` | /pro, /business, /enterprise-grid, /self-hosted and /for-startups (5 routes). |
| `features.plans-progress-accordion` | FEATURES | 4 | 4 | `site/src/components/plans/Blocks.jsx > ProgressAccordion` | /pro, /business, /enterprise-grid and /open-source (4 routes). |
| `hero.plans-legacy-hero` | HERO | 3 | 4 | `site/src/components/plans/Legacy.jsx > LHero` | /airgapped, /security, /education and /nonprofits (4 routes). |
| `conversion.plans-legacy-split-cta` | CONVERSION | 3 | 4 | `site/src/components/plans/Legacy.jsx > LSplitCta` | /airgapped, /security, /education and /nonprofits (4 routes). |
| `hero.feature-legacy-hero` | HERO | 3 | 3 | `site/src/components/features/blocks.jsx > HeroOld` | The three legacy feature routes: /delights, /teamspaces and /state-of-projects-and-updates (3 routes). |
| `features.feature-legacy-bento` | FEATURES | 3 | 3 | `site/src/components/features/blocks.jsx > Section (oldLeft/oldCenter header + Bento)` | The three legacy feature routes (3 routes). |
| `conversion.feature-legacy-cta-card` | CONVERSION | 3 | 3 | `site/src/components/features/blocks.jsx > CtaCardOld` | The three legacy feature routes (3 routes). |
| `proof.plans-logos` | PROOF | 3 | 3 | `site/src/components/plans/Blocks.jsx > Logos` | /pro, /business and /enterprise-grid (3 routes). |
| `features.plans-ai-bento` | FEATURES | 3 | 3 | `site/src/components/plans/Blocks.jsx > Bento` | /pro, /business and /enterprise-grid (3 routes). |
| `conversion.plans-cta-card` | CONVERSION | 3 | 3 | `site/src/components/plans/Blocks.jsx > CtaCard` | /self-hosted, /mobile and /open-source (3 routes). |
| `faq.feature-faq` | FAQ | 2 | 3 | `site/src/components/features/blocks.jsx > Faq` | The feature hub template plus /ai (3 routes). |
| `features.plans-legacy-feature-split` | FEATURES | 2 | 3 | `site/src/components/plans/Legacy.jsx > LFeatureSplit` | /airgapped, /education and /nonprofits (3 routes). |
| `features.plans-legacy-grid` | FEATURES | 2 | 3 | `site/src/components/plans/Legacy.jsx > LGrid` | /airgapped, /education and /nonprofits (3 routes). |
| `faq.plans-legacy-faq` | FAQ | 2 | 3 | `site/src/components/plans/Legacy.jsx > LFaq` | /pricing, /education and /nonprofits (3 routes). |
| `features.solutions-pillar-cards` | FEATURES | 1 | 3 | `site/src/components/solutions/Blocks.jsx > Cards` | The 3 size solution routes. |
| `proof.solutions-testimonial` | PROOF | 1 | 3 | `site/src/components/solutions/Blocks.jsx > Testimonial` | The 3 size solution routes. |
| `features.feature-legacy-row` | FEATURES | 2 | 2 | `site/src/components/features/blocks.jsx > FeatureRowOld` | /teamspaces and /state-of-projects-and-updates (2 routes). |
| `hero.plans-hero-split` | HERO | 2 | 2 | `site/src/components/plans/Blocks.jsx > HeroSplit` | /mobile and /open-source (2 routes). |
| `features.plans-progress-tabs` | FEATURES | 2 | 2 | `site/src/components/plans/Blocks.jsx > ProgressTabs` | /business and /self-hosted (2 routes). |
| `features.plans-delight-cards` | FEATURES | 2 | 2 | `site/src/components/plans/Blocks.jsx > CardGrid` | /pro and /business (2 routes). |
| `features.plans-self-hosted-split` | FEATURES | 2 | 2 | `site/src/components/plans/Blocks.jsx > SplitFeature` | /pro and /business (2 routes). |
| `features.plans-security-cards` | FEATURES | 2 | 2 | `site/src/components/plans/Blocks.jsx > CardGrid` | /pro and /business (2 routes). |
| `features.feature-pillar-cols` | FEATURES | 1 | 2 | `site/src/components/features/blocks.jsx > Section (StatCols)` | The feature hub template: /project-management and /wiki (2 routes). |
| `features.feature-top-tabs` | FEATURES | 1 | 2 | `site/src/components/features/blocks.jsx > Section (left header + TabsTop)` | The feature hub template (2 routes). |
| `features.feature-integrations-image-grid` | FEATURES | 1 | 2 | `site/src/components/features/blocks.jsx > Section (split header + ImageGrid, three cards)` | The feature hub template (2 routes). |
| `content.solutions-index-cards` | CONTENT | 1 | 2 | `site/src/components/solutions/Blocks.jsx > IndexCards` | /solutions and /industries (2 routes). |
| `hero.compare-legacy-hero` | HERO | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > SplitHero` | The 2 legacy comparison routes. |
| `proof.compare-legacy-logo-row` | PROOF | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > LogoRow` | The 2 legacy comparison routes. |
| `comparison.compare-legacy-why-table` | COMPARISON | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > WhyTable` | The 2 legacy comparison routes. |
| `features.compare-legacy-switch-steps` | FEATURES | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > SwitchSteps` | The 2 legacy comparison routes. |
| `features.compare-legacy-experience` | FEATURES | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > Experience` | The 2 legacy comparison routes. |
| `conversion.compare-legacy-guided-cta` | CONVERSION | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > BannerCta (data.cta1)` | The 2 legacy comparison routes. |
| `features.compare-legacy-editions` | FEATURES | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > Editions` | The 2 legacy comparison routes. |
| `features.compare-legacy-integrations` | FEATURES | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > Integrations` | The 2 legacy comparison routes. |
| `comparison.compare-legacy-feature-table` | COMPARISON | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > FeatureTableLegacy` | The 2 legacy comparison routes. |
| `conversion.compare-legacy-closing-cta` | CONVERSION | 1 | 2 | `site/src/components/compare/LegacyComparisonPage.jsx > BannerCta (data.cta2)` | The 2 legacy comparison routes. |
| `proof.plans-legacy-logo-cloud` | PROOF | 1 | 2 | `site/src/components/plans/Legacy.jsx > LLogoCloud` | /education and /nonprofits (2 routes). |
| `features.program-tabs-accordion` | FEATURES | 1 | 2 | `site/src/components/plans/Legacy.jsx > LTabsAccordion` | /education and /nonprofits (2 routes). |
| `conversion.program-steps-grid` | CONVERSION | 1 | 2 | `site/src/components/plans/Legacy.jsx > LGrid` | /education and /nonprofits (2 routes). |
| `shell.integrations-subheader` | SHELL | 1 | 1 | `site/src/pages/integrations.jsx > IntegrationsPage (inline <header>, section 0)` | Only /integrations (1 route). |
| `hero.home-hero` | HERO | 1 | 1 | `site/src/components/Hero.jsx > Hero` | Only the homepage (1 route). |
| `features.home-products` | FEATURES | 1 | 1 | `site/src/components/Products.jsx > Products` | Only the homepage (1 route). |
| `proof.home-customer-logos` | PROOF | 1 | 1 | `site/src/components/Customers.jsx > Customers` | Only the homepage (1 route). |
| `features.home-ai-insight` | FEATURES | 1 | 1 | `site/src/components/Insight.jsx > Insight` | Only the homepage (1 route). |
| `proof.home-customer-stories` | PROOF | 1 | 1 | `site/src/components/Stories.jsx > Stories` | Only the homepage (1 route). |
| `features.home-migrate` | FEATURES | 1 | 1 | `site/src/components/Migrate.jsx > Migrate` | Only the homepage (1 route). |
| `features.home-capabilities` | FEATURES | 1 | 1 | `site/src/components/Capabilities.jsx > Capabilities` | Only the homepage (1 route). |
| `features.home-self-hosted` | FEATURES | 1 | 1 | `site/src/components/SelfHosted.jsx > SelfHosted` | Only the homepage (1 route). |
| `conversion.home-download-apps` | CONVERSION | 1 | 1 | `site/src/components/Download.jsx > Download` | Only the homepage (1 route). |
| `features.home-apps-integrations` | FEATURES | 1 | 1 | `site/src/components/Apps.jsx > Apps` | Only the homepage (1 route). |
| `features.home-enterprise` | FEATURES | 1 | 1 | `site/src/components/Enterprise.jsx > Enterprise` | Only the homepage (1 route). |
| `features.home-developers` | FEATURES | 1 | 1 | `site/src/components/Developers.jsx > Developers` | Only the homepage (1 route). |
| `conversion.home-cta` | CONVERSION | 1 | 1 | `site/src/components/Cta.jsx > Cta` | Only the homepage (1 route). |
| `features.ai-platform-bento` | FEATURES | 1 | 1 | `site/src/components/features/blocks.jsx > Section (header + Bento, one card)` | Only /ai (1 route). |
| `features.ai-context-image` | FEATURES | 1 | 1 | `site/src/components/features/blocks.jsx > Section (left header + ImageBlock)` | Only /ai (1 route). |
| `features.ai-agents-image-icons` | FEATURES | 1 | 1 | `site/src/components/features/blocks.jsx > Section (split header + ImageBlock + IconFeatures)` | Only /ai (1 route). |
| `features.ai-integrations-bento` | FEATURES | 1 | 1 | `site/src/components/features/blocks.jsx > Section (left header + Bento, one card)` | Only /ai (1 route). |
| `features.feature-icon-cards` | FEATURES | 1 | 1 | `site/src/components/features/blocks.jsx > Section (left header + IconCards)` | Only /semantic-diffs-by-plane (1 route). |
| `features.feature-legacy-accordion` | FEATURES | 1 | 1 | `site/src/components/features/blocks.jsx > AccordionOld` | Only /state-of-projects-and-updates (1 route). |
| `hero.compose-hero` | HERO | 1 | 1 | `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Hero block)` | Only /plane-compose (1 route). |
| `features.compose-video` | FEATURES | 1 | 1 | `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Video block)` | Only /plane-compose (1 route). |
| `features.compose-capabilities` | FEATURES | 1 | 1 | `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Capabilities block)` | Only /plane-compose (1 route). |
| `features.compose-projects-as-code` | FEATURES | 1 | 1 | `site/src/components/features/PlaneCompose.jsx > PlaneCompose (What is Projects-as-code block)` | Only /plane-compose (1 route). |
| `features.compose-how-it-works` | FEATURES | 1 | 1 | `site/src/components/features/PlaneCompose.jsx > PlaneCompose (How it works block)` | Only /plane-compose (1 route). |
| `proof.compose-why-stats` | PROOF | 1 | 1 | `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Why this matters block)` | Only /plane-compose (1 route). |
| `conversion.compose-final-cta` | CONVERSION | 1 | 1 | `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Final CTA block)` | Only /plane-compose (1 route). |
| `hero.agents-hero` | HERO | 1 | 1 | `site/src/components/features/Agents.jsx > Hero` | Only /agents (1 route). |
| `features.agents-build` | FEATURES | 1 | 1 | `site/src/components/features/Agents.jsx > BuildAgents` | Only /agents (1 route). |
| `features.agents-ready-made` | FEATURES | 1 | 1 | `site/src/components/features/Agents.jsx > ReadyMade` | Only /agents (1 route). |
| `features.agents-shows-up` | FEATURES | 1 | 1 | `site/src/components/features/Agents.jsx > ShowsUp` | Only /agents (1 route). |
| `features.agents-control` | FEATURES | 1 | 1 | `site/src/components/features/Agents.jsx > Control` | Only /agents (1 route). |
| `conversion.agents-final-cta` | CONVERSION | 1 | 1 | `site/src/components/features/Agents.jsx > FinalCta` | Only /agents (1 route). |
| `hero.compare-index-hero` | HERO | 1 | 1 | `site/src/pages/compare.jsx > ComparePage (section 0)` | Only /compare (1 route). |
| `content.compare-index-cards` | CONTENT | 1 | 1 | `site/src/pages/compare.jsx > ComparePage (section 1)` | Only /compare (1 route). |
| `features.compare-index-styles` | FEATURES | 1 | 1 | `site/src/pages/compare.jsx > ComparePage (section 2)` | Only /compare (1 route). |
| `features.compare-index-self-hosted` | FEATURES | 1 | 1 | `site/src/pages/compare.jsx > ComparePage (section 3)` | Only /compare (1 route). |
| `features.compare-index-enterprise` | FEATURES | 1 | 1 | `site/src/pages/compare.jsx > ComparePage (section 4)` | Only /compare (1 route). |
| `conversion.compare-index-cta` | CONVERSION | 1 | 1 | `site/src/pages/compare.jsx > ComparePage (section 5)` | Only /compare (1 route). |
| `hero.switch-hero` | HERO | 1 | 1 | `site/src/pages/switch.jsx > SwitchPage (section#hero)` | Only /switch (1 route). |
| `features.switch-work-runs-on` | FEATURES | 1 | 1 | `site/src/pages/switch.jsx > SwitchPage (section#work-runs-on)` | Only /switch (1 route). |
| `features.switch-introducing-plane` | FEATURES | 1 | 1 | `site/src/pages/switch.jsx > SwitchPage (section#introducing-plane)` | Only /switch (1 route). |
| `features.switch-why-switch` | FEATURES | 1 | 1 | `site/src/pages/switch.jsx > SwitchPage (section#why-switch)` | Only /switch (1 route). |
| `features.switch-how-it-works` | FEATURES | 1 | 1 | `site/src/pages/switch.jsx > SwitchPage (section#how-it-works)` | Only /switch (1 route). |
| `comparison.switch-tool-picker` | COMPARISON | 1 | 1 | `site/src/pages/switch.jsx > SwitchPage (section#tool-comparison)` | Only /switch (1 route). |
| `comparison.switch-migration-blueprint` | COMPARISON | 1 | 1 | `site/src/pages/switch.jsx > SwitchPage (section#migration-blueprint)` | Only /switch (1 route). |
| `proof.switch-logos` | PROOF | 1 | 1 | `site/src/pages/switch.jsx > SwitchPage (section#logos)` | Only /switch (1 route). |
| `faq.switch-faq` | FAQ | 1 | 1 | `site/src/pages/switch.jsx > SwitchFaq` | Only /switch (1 route). |
| `conversion.switch-final-cta` | CONVERSION | 1 | 1 | `site/src/pages/switch.jsx > SwitchPage (section#final-cta)` | Only /switch (1 route). |
| `shell.jira-dc-toc` | SHELL | 1 | 1 | `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (nav "Jira DC table of contents")` | Only /switch-from-jira-data-center (1 route). |
| `hero.jira-dc-hero` | HERO | 1 | 1 | `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#hero)` | Only /switch-from-jira-data-center (1 route). |
| `content.jira-dc-timeline` | CONTENT | 1 | 1 | `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#atlassian-timeline)` | Only /switch-from-jira-data-center (1 route). |
| `features.jira-dc-introducing-plane` | FEATURES | 1 | 1 | `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#introducing-plane)` | Only /switch-from-jira-data-center (1 route). |
| `features.jira-dc-migration-steps` | FEATURES | 1 | 1 | `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#migration-steps)` | Only /switch-from-jira-data-center (1 route). |
| `comparison.jira-dc-capability-table` | COMPARISON | 1 | 1 | `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#capability-comparison)` | Only /switch-from-jira-data-center (1 route). |
| `features.jira-dc-security` | FEATURES | 1 | 1 | `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#security)` | Only /switch-from-jira-data-center (1 route). |
| `content.jira-dc-resources` | CONTENT | 1 | 1 | `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#resources)` | Only /switch-from-jira-data-center (1 route). |
| `faq.jira-dc-faq` | FAQ | 1 | 1 | `site/src/pages/switch-from-jira-data-center.jsx > DcFaq` | Only /switch-from-jira-data-center (1 route). |
| `hero.imports-hero` | HERO | 1 | 1 | `site/src/pages/imports.jsx > ImportsPage (section 0)` | Only /imports (1 route). |
| `features.imports-steps` | FEATURES | 1 | 1 | `site/src/pages/imports.jsx > ImportSteps` | Only /imports (1 route). |
| `features.imports-importer-tabs` | FEATURES | 1 | 1 | `site/src/pages/imports.jsx > ImporterTabs` | Only /imports (1 route). |
| `features.imports-zero-data-loss` | FEATURES | 1 | 1 | `site/src/pages/imports.jsx > ImportsPage (section 3)` | Only /imports (1 route). |
| `conversion.imports-cta` | CONVERSION | 1 | 1 | `site/src/pages/imports.jsx > ImportsPage (section 4)` | Only /imports (1 route). |
| `hero.integrations-hero` | HERO | 1 | 1 | `site/src/pages/integrations.jsx > IntegrationsPage (section 1, hero)` | Only /integrations (1 route). |
| `content.integrations-directory` | CONTENT | 1 | 1 | `site/src/pages/integrations.jsx > IntegrationsPage (section 1, #list)` | Only /integrations (1 route). |
| `conversion.integrations-build-app-cta` | CONVERSION | 1 | 1 | `site/src/pages/integrations.jsx > IntegrationsPage (section 2)` | Only /integrations (1 route). |
| `hero.partners-hero` | HERO | 1 | 1 | `site/src/pages/partners.jsx > PartnersPage (section 0)` | Only /partners (1 route). |
| `proof.partners-logo-cloud` | PROOF | 1 | 1 | `site/src/pages/partners.jsx > PartnersPage (section 1)` | Only /partners (1 route). |
| `features.partners-programs` | FEATURES | 1 | 1 | `site/src/pages/partners.jsx > PartnersPage (section 2)` | Only /partners (1 route). |
| `features.partners-why` | FEATURES | 1 | 1 | `site/src/pages/partners.jsx > PartnersPage (section 3)` | Only /partners (1 route). |
| `features.partners-deployment` | FEATURES | 1 | 1 | `site/src/pages/partners.jsx > PartnersPage (section 4)` | Only /partners (1 route). |
| `features.partners-jira-dc` | FEATURES | 1 | 1 | `site/src/pages/partners.jsx > PartnersPage (section 5)` | Only /partners (1 route). |
| `conversion.partners-cta` | CONVERSION | 1 | 1 | `site/src/pages/partners.jsx > PartnersPage (section 6)` | Only /partners (1 route). |
| `faq.partners-faq` | FAQ | 1 | 1 | `site/src/pages/partners.jsx > PartnersFaq` | Only /partners (1 route). |
| `features.plans-unlock-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /pro (1 route). |
| `features.plans-platform-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /pro (1 route). |
| `features.plans-intake-alt-rows` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > AltRows` | Only /business (1 route). |
| `features.plans-ai-wide-image` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > WideImage` | Only /business (1 route). |
| `features.plans-governance-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /enterprise-grid (1 route). |
| `features.plans-capability-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /enterprise-grid (1 route). |
| `features.plans-migration-icon-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > IconCards` | Only /enterprise-grid (1 route). |
| `features.plans-extensibility-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /enterprise-grid (1 route). |
| `features.plans-security-icon-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > IconCards` | Only /enterprise-grid (1 route). |
| `features.plans-check-columns` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CheckColumns` | Only /self-hosted (1 route). |
| `features.plans-deployment-icon-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > IconCards` | Only /self-hosted (1 route). |
| `features.plans-self-hosted-ai-split` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > SplitFeature` | Only /self-hosted (1 route). |
| `features.plans-byo-llm-bento` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > Bento` | Only /self-hosted (1 route). |
| `features.plans-cloud-grade-bento` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > Bento` | Only /self-hosted (1 route). |
| `features.plans-stack-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /self-hosted (1 route). |
| `features.plans-traction-icon-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > IconCards` | Only /open-source (1 route). |
| `features.plans-deploy-bento` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > Bento` | Only /open-source (1 route). |
| `comparison.plans-oss-compare-table` | COMPARISON | 1 | 1 | `site/src/pages/open-source.jsx > inline <Section> (SectionHeader + plans/Blocks.jsx CompareTable)` | Only /open-source (1 route). |
| `features.plans-oss-platform-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /open-source (1 route). |
| `content.plans-resource-columns` | CONTENT | 1 | 1 | `site/src/components/plans/Blocks.jsx > ResourceColumns` | Only /open-source (1 route). |
| `features.plans-startup-pillar-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /for-startups (1 route). |
| `proof.plans-testimonial` | PROOF | 1 | 1 | `site/src/components/plans/Blocks.jsx > Testimonial` | Only /for-startups (1 route). |
| `features.plans-startup-split` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > SplitFeature` | Only /for-startups (1 route). |
| `features.plans-stack-bento` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > Bento` | Only /for-startups (1 route). |
| `features.plans-runway-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /for-startups (1 route). |
| `features.plans-mobile-split` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > SplitFeature` | Only /mobile (1 route). |
| `features.plans-mobile-bento` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > Bento` | Only /mobile (1 route). |
| `features.plans-inbox-split` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > SplitFeature` | Only /mobile (1 route). |
| `features.plans-mobile-detail-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Blocks.jsx > CardGrid` | Only /mobile (1 route). |
| `comparison.plans-deployment-compare-table` | COMPARISON | 1 | 1 | `site/src/pages/mobile.jsx > inline <Section> (SectionHeader + plans/Blocks.jsx CompareTable)` | Only /mobile (1 route). |
| `features.airgapped-why` | FEATURES | 1 | 1 | `site/src/pages/airgapped.jsx > inline <Container>` | Only /airgapped (1 route). |
| `features.airgapped-architecture-split` | FEATURES | 1 | 1 | `site/src/components/plans/Legacy.jsx > LFeatureSplit` | Only /airgapped (1 route). |
| `conversion.airgapped-closing-cta` | CONVERSION | 1 | 1 | `site/src/components/plans/Legacy.jsx > LSplitCta` | Only /airgapped (1 route). |
| `features.security-compliance-badges` | FEATURES | 1 | 1 | `site/src/pages/security.jsx > inline <Container>` | Only /security (1 route). |
| `features.plans-legacy-cards` | FEATURES | 1 | 1 | `site/src/components/plans/Legacy.jsx > LCards` | Only /security (1 route). |
| `pricing.pricing-plans` | PRICING | 1 | 1 | `site/src/components/plans/Pricing.jsx > Plans` | Only /pricing (1 route). |
| `pricing.pricing-calculator` | PRICING | 1 | 1 | `site/src/components/plans/Pricing.jsx > Calculator` | Only /pricing (1 route). |
| `proof.pricing-logo-band` | PROOF | 1 | 1 | `site/src/components/plans/Pricing.jsx > LogoBand` | Only /pricing (1 route). |
| `comparison.pricing-feature-matrix` | COMPARISON | 1 | 1 | `site/src/components/plans/Pricing.jsx > Features` | Only /pricing (1 route). |
| `proof.pricing-testimonials` | PROOF | 1 | 1 | `site/src/components/plans/Pricing.jsx > Testimonials` | Only /pricing (1 route). |
| `features.pricing-compliance` | FEATURES | 1 | 1 | `site/src/components/plans/Pricing.jsx > Compliance` | Only /pricing (1 route). |
| `hero.download-header` | HERO | 1 | 1 | `site/src/pages/download.jsx > Download (inline <header>)` | Only /download (1 route). |
| `conversion.download-platforms` | CONVERSION | 1 | 1 | `site/src/pages/download.jsx > Platform` | Only /download (1 route). |
| `conversion.download-qr-codes` | CONVERSION | 1 | 1 | `site/src/pages/download.jsx > Qr` | Only /download (1 route). |
| `hero.work-trials-hero` | HERO | 1 | 1 | `site/src/pages/work-trials.jsx > WorkTrials (inline dark hero)` | Only /work-trials (1 route). |
| `content.work-trials-longform` | CONTENT | 1 | 1 | `site/src/pages/work-trials.jsx > inline <Section> (h3 + prose + diagram)` | Only /work-trials (1 route). |
| `features.work-trials-commitments` | FEATURES | 1 | 1 | `site/src/pages/work-trials.jsx > inline <Section bg="surface-2">` | Only /work-trials (1 route). |
| `hero.whitepaper-header` | HERO | 1 | 1 | `site/src/components/plans/Whitepaper.jsx > Whitepaper (section "The Plane Self-Hosting Guide")` | Only /self-hosted/whitepaper (1 route). |
| `content.whitepaper-toc` | CONTENT | 1 | 1 | `site/src/components/plans/Whitepaper.jsx > Reader (sticky sidebar)` | Only /self-hosted/whitepaper (1 route). |
| `content.whitepaper-reader` | CONTENT | 1 | 1 | `site/src/components/plans/Whitepaper.jsx > Reader (chapter pane + Block)` | Only /self-hosted/whitepaper (1 route). |
| `faq.whitepaper-faq` | FAQ | 1 | 1 | `site/src/components/plans/Whitepaper.jsx > WpFaq` | Only /self-hosted/whitepaper (1 route). |
| `conversion.whitepaper-cta` | CONVERSION | 1 | 1 | `site/src/components/plans/Whitepaper.jsx > Whitepaper (section#whitepaper-cta)` | Only /self-hosted/whitepaper (1 route). |
| `content.plane-one-sunset-notice` | CONTENT | 1 | 1 | `site/src/pages/one/why-plane-one.jsx > WhyPlaneOne (notice box)` | Only /one/why-plane-one (1 route). |
| `content.plane-one-essay` | CONTENT | 1 | 1 | `site/src/pages/one/why-plane-one.jsx > WhyPlaneOne (essay blocks)` | Only /one/why-plane-one (1 route). |
| `hero.about-hero` | HERO | 1 | 1 | `site/src/pages/about.jsx > About (sticky background + hero section)` | Only /about (1 route). |
| `features.about-principles` | FEATURES | 1 | 1 | `site/src/pages/about.jsx > Principles` | Only /about (1 route). |
| `content.about-reason` | CONTENT | 1 | 1 | `site/src/pages/about.jsx > Reason` | Only /about (1 route). |
| `content.about-story` | CONTENT | 1 | 1 | `site/src/pages/about.jsx > Story` | Only /about (1 route). |
| `content.about-mission` | CONTENT | 1 | 1 | `site/src/pages/about.jsx > Mission` | Only /about (1 route). |
| `content.charter-letter` | CONTENT | 1 | 1 | `site/src/pages/charter.jsx > Charter` | Only /charter (1 route). |
| `conversion.contact-options` | CONVERSION | 1 | 1 | `site/src/pages/contact.jsx > Contact` | Only /contact (1 route). |
| `hero.manifesto-hero` | HERO | 1 | 1 | `site/src/pages/manifesto.jsx > Manifesto (hero) + Stripe` | Only /manifesto (1 route). |
| `content.manifesto-principles-nav` | CONTENT | 1 | 1 | `site/src/pages/manifesto.jsx > Manifesto (sticky 240px column)` | Only /manifesto (1 route). |
| `content.manifesto-principles` | CONTENT | 1 | 1 | `site/src/pages/manifesto.jsx > Manifesto (principle sections)` | Only /manifesto (1 route). |
| `conversion.manifesto-closing-cta` | CONVERSION | 1 | 1 | `site/src/pages/manifesto.jsx > Manifesto (Stripe + closing panel)` | Only /manifesto (1 route). |
| `hero.wallpapers-header` | HERO | 1 | 1 | `site/src/pages/wallpapers.jsx > Wallpapers (header)` | Only /wallpapers (1 route). |
| `content.wallpapers-desktop` | CONTENT | 1 | 1 | `site/src/pages/wallpapers.jsx > Desktop` | Only /wallpapers (1 route). |
| `content.wallpapers-mobile` | CONTENT | 1 | 1 | `site/src/pages/wallpapers.jsx > Mobile` | Only /wallpapers (1 route). |
| `hero.talk-to-sales-intro` | HERO | 1 | 1 | `site/src/pages/talk-to-sales.jsx > TalkToSales (left card) + LogoMarquee` | Only /talk-to-sales (1 route). |
| `conversion.talk-to-sales-form` | CONVERSION | 1 | 1 | `site/src/pages/talk-to-sales.jsx > SalesForm` | Only /talk-to-sales (1 route). |
| `hero.view-demo-header` | HERO | 1 | 1 | `site/src/pages/view-demo.jsx > ViewDemo (title block)` | Only /view-demo (1 route). |
| `content.view-demo-film` | CONTENT | 1 | 1 | `site/src/pages/view-demo.jsx > ViewDemo (film + actions)` | Only /view-demo (1 route). |
| `content.view-demo-chapters` | CONTENT | 1 | 1 | `site/src/pages/view-demo.jsx > ViewDemo (sidebar)` | Only /view-demo (1 route). |
| `hero.launch-week-fall-hero` | HERO | 1 | 1 | `site/src/components/company/Blocks.jsx > HeroCentered (+ figure)` | Only the fall launch-week recap route (1 route). |
| `content.launch-week-fall-rows` | CONTENT | 1 | 1 | `site/src/pages/launch-week-fall-2025.jsx > Row` | Only the fall launch-week recap route (1 route). |
| `hero.operating-manual-hero` | HERO | 1 | 1 | `site/src/components/company/Blocks.jsx > HeroCentered (+ image)` | Only /operating-manual (1 route). |
| `content.operating-manual-intro` | CONTENT | 1 | 1 | `site/src/pages/operating-manual.jsx > OperatingManual (#introduction)` | Only /operating-manual (1 route). |
| `content.operating-manual-philosophy` | CONTENT | 1 | 1 | `site/src/pages/operating-manual.jsx > OperatingManual (Core Philosophy)` | Only /operating-manual (1 route). |
| `content.operating-manual-grids` | CONTENT | 1 | 1 | `site/src/pages/operating-manual.jsx > GridDefault` | Only /operating-manual (1 route). |
| `content.operating-manual-foundation` | CONTENT | 1 | 1 | `site/src/pages/operating-manual.jsx > OperatingManual (Rock-solid foundation)` | Only /operating-manual (1 route). |
| `hero.ph-launch-hero` | HERO | 1 | 1 | `site/src/pages/ph-launch.jsx > PhLaunch (hero)` | Only /ph-launch (1 route). |
| `content.ph-launch-thank-you` | CONTENT | 1 | 1 | `site/src/pages/ph-launch.jsx > PhLaunch (dark card)` | Only /ph-launch (1 route). |
| `content.ph-launch-expectations` | CONTENT | 1 | 1 | `site/src/pages/ph-launch.jsx > PhLaunch + company/Blocks.jsx IconCardGrid` | Only /ph-launch (1 route). |
| `hero.year-review-hero` | HERO | 1 | 1 | `site/src/pages/plane-in-2025.jsx > PlaneIn2025 (hero section)` | Only the year-in-review route (1 route). |
| `content.year-review-journey` | CONTENT | 1 | 1 | `site/src/pages/plane-in-2025.jsx > PlaneIn2025 (section#the-journey)` | Only the year-in-review route (1 route). |
| `conversion.year-review-closing-cta` | CONVERSION | 1 | 1 | `site/src/pages/plane-in-2025.jsx > PlaneIn2025 (closing band)` | Only the year-in-review route (1 route). |
| `hero.testimonials-hero` | HERO | 1 | 1 | `site/src/components/company/Blocks.jsx > HeroCentered` | Only /testimonials (1 route). |
| `proof.testimonials-logo-row` | PROOF | 1 | 1 | `site/src/pages/testimonials.jsx > Testimonials (logo row)` | Only /testimonials (1 route). |
| `proof.testimonials-wall` | PROOF | 1 | 1 | `site/src/pages/testimonials.jsx > Testimonials (card grid) + Body` | Only /testimonials (1 route). |
| `hero.launch-week-q2-storefront` | HERO | 1 | 1 | `site/src/components/company/LaunchWeekQ2.jsx > LaunchWeekQ2 (scroll-scrubbed section / mobile hero)` | Only the q-two launch-week storefront route (1 route). |
| `content.launch-week-q2-days` | CONTENT | 1 | 1 | `site/src/components/company/LaunchWeekQ2.jsx > LaunchWeekQ2 (days) + DayPanel` | Only the q-two launch-week storefront route (1 route). |
| `content.legal-index-links` | CONTENT | 1 | 1 | `site/src/pages/legals/index.jsx > Legals (LEGAL_LINKS list)` | Only /legals (1 route). |
| `content.blog-featured` | CONTENT | 1 | 1 | `site/src/components/collections/BlogCards.jsx > FeaturedPost + PostCard` | Only /blog (1 route). |
| `content.blog-post-list` | CONTENT | 1 | 1 | `site/src/pages/blog/index.jsx > Blog (tabs, search, PostRow list) + collections/ui.jsx Pagination` | Only /blog (1 route). |
| `content.changelog-index-header` | CONTENT | 1 | 1 | `site/src/components/collections/Changelog.jsx > ChangelogIndex (h1) + Tabs` | Only /changelog (1 route). |
| `content.changelog-feed` | CONTENT | 1 | 1 | `site/src/components/collections/Changelog.jsx > Entry + ui.jsx Pagination` | Only /changelog (1 route). |
| `hero.customers-hero` | HERO | 1 | 1 | `site/src/components/collections/Customers.jsx > CustomersIndex (hero)` | Only /customers (1 route). |
| `proof.customer-story-grid` | PROOF | 1 | 1 | `site/src/components/collections/Customers.jsx > StoryGrid + StoryCard` | Only /customers (1 route). |
| `proof.customer-testimonial` | PROOF | 1 | 1 | `site/src/components/collections/Customers.jsx > Testimonial` | Only /customers (1 route). |
| `conversion.customers-cta` | CONVERSION | 1 | 1 | `site/src/components/collections/Customers.jsx > CustomersCta` | Only /customers (1 route). |
| `hero.careers-hero` | HERO | 1 | 1 | `site/src/components/collections/Careers.jsx > CareersIndex (Hero)` | Only /careers (1 route). |
| `content.careers-why` | CONTENT | 1 | 1 | `site/src/components/collections/Careers.jsx > CareersIndex (Why Plane) + ProseBlock + Figure` | Only /careers (1 route). |
| `proof.careers-stats` | PROOF | 1 | 1 | `site/src/components/collections/Careers.jsx > CareersIndex (Stats)` | Only /careers (1 route). |
| `content.careers-how-we-work` | CONTENT | 1 | 1 | `site/src/components/collections/Careers.jsx > CardGrid (cards[0])` | Only /careers (1 route). |
| `content.careers-who-does-well` | CONTENT | 1 | 1 | `site/src/components/collections/Careers.jsx > CardGrid (cards[1])` | Only /careers (1 route). |
| `content.careers-hiring` | CONTENT | 1 | 1 | `site/src/components/collections/Careers.jsx > CareersIndex (How hiring works) + ProseBlock + Figure` | Only /careers (1 route). |
| `content.careers-open-roles` | CONTENT | 1 | 1 | `site/src/components/collections/Careers.jsx > RoleRow` | Only /careers (1 route). |
| `content.careers-practical-terms` | CONTENT | 1 | 1 | `site/src/components/collections/Careers.jsx > CardGrid (cards[2])` | Only /careers (1 route). |
| `faq.careers-faq` | FAQ | 1 | 1 | `site/src/components/collections/Careers.jsx > Faq` | Only /careers (1 route). |
| `conversion.careers-cta` | CONVERSION | 1 | 1 | `site/src/components/collections/Careers.jsx > CareersIndex (CTA section)` | Only /careers (1 route). |

**59 shared sections** appear in more than one template and belong in a component library.

**231 single-use sections** appear in exactly one template. Building these
as "reusable" components up front would be speculative — keep them page-local
until a second caller actually appears.

## Templates

### Homepage — `template.home`

1 route · `/` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.home-hero` | page-local |
| 5 | FEATURES | `features.home-products` | page-local |
| 6 | PROOF | `proof.home-customer-logos` | page-local |
| 7 | FEATURES | `features.home-ai-insight` | page-local |
| 8 | PROOF | `proof.home-customer-stories` | page-local |
| 9 | FEATURES | `features.home-migrate` | page-local |
| 10 | FEATURES | `features.home-capabilities` | page-local |
| 11 | FEATURES | `features.home-self-hosted` | page-local |
| 12 | CONVERSION | `conversion.home-download-apps` | page-local |
| 13 | FEATURES | `features.home-apps-integrations` | page-local |
| 14 | FEATURES | `features.home-enterprise` | page-local |
| 15 | FEATURES | `features.home-developers` | page-local |
| 16 | CONVERSION | `conversion.home-cta` | page-local |
| 17 | SHELL | `shell.footer` | shared ×68 |
| 18 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Feature page (standard) — `template.feature-standard`

7 routes · `/cycles`, `/customer-requests`, `/dashboards`, `/epics-initiatives`, `/intake`, `/work-item-types`, `/workflows-and-approvals` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.feature-hero` | shared ×5 |
| 5 | PROOF | `proof.feature-logo-marquee` | shared ×5 |
| 6 | FEATURES | `features.feature-intro-image-grid` | shared ×2 |
| 7 | FEATURES | `features.feature-rows` | page-local |
| 8 | FEATURES | `features.feature-ai-bento` | shared ×4 |
| 9 | FEATURES | `features.feature-beyond-image-grid` | shared ×3 |
| 10 | FEATURES | `features.feature-connected-tabs` | shared ×3 |
| 11 | CONVERSION | `conversion.feature-self-host-card` | shared ×4 |
| 12 | FEATURES | `features.feature-security-image-grid` | shared ×4 |
| 13 | CONVERSION | `conversion.feature-cta-banner` | shared ×3 |
| 14 | SHELL | `shell.footer` | shared ×68 |
| 15 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Feature page (no feature rows) — `template.feature-no-rows`

1 route · `/work-items` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.feature-hero` | shared ×5 |
| 5 | PROOF | `proof.feature-logo-marquee` | shared ×5 |
| 6 | FEATURES | `features.feature-intro-image-grid` | shared ×2 |
| 7 | FEATURES | `features.feature-ai-bento` | shared ×4 |
| 8 | FEATURES | `features.feature-beyond-image-grid` | shared ×3 |
| 9 | FEATURES | `features.feature-connected-tabs` | shared ×3 |
| 10 | CONVERSION | `conversion.feature-self-host-card` | shared ×4 |
| 11 | FEATURES | `features.feature-security-image-grid` | shared ×4 |
| 12 | CONVERSION | `conversion.feature-cta-banner` | shared ×3 |
| 13 | SHELL | `shell.footer` | shared ×68 |
| 14 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Feature hub page — `template.feature-hub`

2 routes · `/project-management`, `/wiki` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.feature-hero` | shared ×5 |
| 5 | PROOF | `proof.feature-logo-marquee` | shared ×5 |
| 6 | FEATURES | `features.feature-pillar-cols` | page-local |
| 7 | FEATURES | `features.feature-top-tabs` | page-local |
| 8 | FEATURES | `features.feature-ai-bento` | shared ×4 |
| 9 | FEATURES | `features.feature-connected-tabs` | shared ×3 |
| 10 | CONVERSION | `conversion.feature-self-host-card` | shared ×4 |
| 11 | FEATURES | `features.feature-integrations-image-grid` | page-local |
| 12 | FEATURES | `features.feature-beyond-image-grid` | shared ×3 |
| 13 | FEATURES | `features.feature-security-image-grid` | shared ×4 |
| 14 | FAQ | `faq.feature-faq` | shared ×2 |
| 15 | SHELL | `shell.footer` | shared ×68 |
| 16 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### AI feature page — `template.feature-ai`

1 route · `/ai` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.feature-hero` | shared ×5 |
| 5 | PROOF | `proof.feature-logo-marquee` | shared ×5 |
| 6 | FEATURES | `features.ai-platform-bento` | page-local |
| 7 | FEATURES | `features.ai-context-image` | page-local |
| 8 | FEATURES | `features.feature-ai-bento` | shared ×4 |
| 9 | FEATURES | `features.ai-agents-image-icons` | page-local |
| 10 | FEATURES | `features.ai-integrations-bento` | page-local |
| 11 | CONVERSION | `conversion.feature-self-host-card` | shared ×4 |
| 12 | FEATURES | `features.feature-security-image-grid` | shared ×4 |
| 13 | FAQ | `faq.feature-faq` | shared ×2 |
| 14 | SHELL | `shell.footer` | shared ×68 |
| 15 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Feature teaser page — `template.feature-semantic-diffs`

1 route · `/semantic-diffs-by-plane` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.feature-hero` | shared ×5 |
| 5 | FEATURES | `features.feature-icon-cards` | page-local |
| 6 | CONVERSION | `conversion.feature-cta-banner` | shared ×3 |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Legacy feature page (delights) — `template.feature-legacy-delights`

1 route · `/delights` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.feature-legacy-hero` | shared ×3 |
| 5 | FEATURES | `features.feature-legacy-bento` | shared ×3 |
| 6 | CONVERSION | `conversion.feature-legacy-cta-card` | shared ×3 |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Legacy feature page (teamspaces) — `template.feature-legacy-teamspaces`

1 route · `/teamspaces` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.feature-legacy-hero` | shared ×3 |
| 5 | FEATURES | `features.feature-legacy-bento` | shared ×3 |
| 6 | FEATURES | `features.feature-legacy-row` | shared ×2 |
| 7 | CONVERSION | `conversion.feature-legacy-cta-card` | shared ×3 |
| 8 | SHELL | `shell.footer` | shared ×68 |
| 9 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Legacy feature page (project states) — `template.feature-legacy-states`

1 route · `/state-of-projects-and-updates` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.feature-legacy-hero` | shared ×3 |
| 5 | FEATURES | `features.feature-legacy-row` | shared ×2 |
| 6 | FEATURES | `features.feature-legacy-bento` | shared ×3 |
| 7 | FEATURES | `features.feature-legacy-accordion` | page-local |
| 8 | CONVERSION | `conversion.feature-legacy-cta-card` | shared ×3 |
| 9 | SHELL | `shell.footer` | shared ×68 |
| 10 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Plane Compose page — `template.plane-compose`

1 route · `/plane-compose` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.compose-hero` | page-local |
| 5 | FEATURES | `features.compose-video` | page-local |
| 6 | FEATURES | `features.compose-capabilities` | page-local |
| 7 | FEATURES | `features.compose-projects-as-code` | page-local |
| 8 | FEATURES | `features.compose-how-it-works` | page-local |
| 9 | PROOF | `proof.compose-why-stats` | page-local |
| 10 | CONVERSION | `conversion.compose-final-cta` | page-local |
| 11 | SHELL | `shell.footer` | shared ×68 |
| 12 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Agents page — `template.agents`

1 route · `/agents` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.agents-hero` | page-local |
| 5 | PROOF | `proof.feature-logo-marquee` | shared ×5 |
| 6 | FEATURES | `features.agents-build` | page-local |
| 7 | FEATURES | `features.agents-ready-made` | page-local |
| 8 | FEATURES | `features.agents-shows-up` | page-local |
| 9 | FEATURES | `features.agents-control` | page-local |
| 10 | CONVERSION | `conversion.agents-final-cta` | page-local |
| 11 | SHELL | `shell.footer` | shared ×68 |
| 12 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Solutions team page — `template.solutions-team`

6 routes · `/solutions/agile`, `/solutions/design`, `/solutions/engineering`, `/solutions/marketing`, `/solutions/operations`, `/solutions/product` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.solutions-hero` | shared ×4 |
| 5 | PROOF | `proof.solutions-logos` | shared ×4 |
| 6 | FEATURES | `features.solutions-tabs` | page-local |
| 7 | FEATURES | `features.solutions-rows` | shared ×4 |
| 8 | FEATURES | `features.solutions-delight-cards` | page-local |
| 9 | FEATURES | `features.solutions-integrations-bento` | shared ×2 |
| 10 | FEATURES | `features.solutions-security-cards` | shared ×3 |
| 11 | CONVERSION | `conversion.solutions-cta` | shared ×2 |
| 12 | SHELL | `shell.footer` | shared ×68 |
| 13 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Solutions company-size page — `template.solutions-size`

3 routes · `/solutions/enterprise-teams`, `/solutions/growing-teams`, `/solutions/startups` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.solutions-hero` | shared ×4 |
| 5 | PROOF | `proof.solutions-logos` | shared ×4 |
| 6 | FEATURES | `features.solutions-pillar-cards` | page-local |
| 7 | PROOF | `proof.solutions-testimonial` | page-local |
| 8 | FEATURES | `features.solutions-rows` | shared ×4 |
| 9 | FEATURES | `features.solutions-integrations-bento` | shared ×2 |
| 10 | FEATURES | `features.solutions-security-cards` | shared ×3 |
| 11 | FAQ | `faq.solutions-faq` | shared ×3 |
| 12 | CONVERSION | `conversion.solutions-cta` | shared ×2 |
| 13 | SHELL | `shell.footer` | shared ×68 |
| 14 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Industry page — `template.solutions-industry`

6 routes · `/industries/aerospace`, `/industries/defense`, `/industries/finance`, `/industries/government`, `/industries/manufacturing`, `/industries/retail` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.solutions-hero` | shared ×4 |
| 5 | PROOF | `proof.solutions-logos` | shared ×4 |
| 6 | PROOF | `proof.solutions-industry-customer-cards` | shared ×2 |
| 7 | FEATURES | `features.solutions-showcase` | shared ×2 |
| 8 | FEATURES | `features.solutions-rows` | shared ×4 |
| 9 | FEATURES | `features.solutions-deployment-cards` | shared ×2 |
| 10 | CONVERSION | `conversion.solutions-cta-box` | shared ×2 |
| 11 | FAQ | `faq.solutions-faq` | shared ×3 |
| 12 | SHELL | `shell.footer` | shared ×68 |
| 13 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Industry page with trust grid — `template.solutions-industry-extended`

1 route · `/industries/healthcare` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.solutions-hero` | shared ×4 |
| 5 | PROOF | `proof.solutions-logos` | shared ×4 |
| 6 | PROOF | `proof.solutions-industry-customer-cards` | shared ×2 |
| 7 | FEATURES | `features.solutions-showcase` | shared ×2 |
| 8 | FEATURES | `features.solutions-rows` | shared ×4 |
| 9 | FEATURES | `features.solutions-deployment-cards` | shared ×2 |
| 10 | CONVERSION | `conversion.solutions-cta-box` | shared ×2 |
| 11 | FEATURES | `features.solutions-security-cards` | shared ×3 |
| 12 | FAQ | `faq.solutions-faq` | shared ×3 |
| 13 | SHELL | `shell.footer` | shared ×68 |
| 14 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Solutions and industries index — `template.solutions-index`

2 routes · `/solutions`, `/industries` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.solutions-index-cards` | page-local |
| 5 | SHELL | `shell.footer` | shared ×68 |
| 6 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Plane-vs comparison (v2) — `template.compare-v2`

6 routes · `/plane-vs-jira`, `/plane-vs-asana`, `/plane-vs-linear`, `/plane-vs-clickup`, `/plane-vs-shortcut`, `/plane-vs-notion` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.compare-hero` | page-local |
| 5 | PROOF | `proof.compare-logos-quote` | page-local |
| 6 | FEATURES | `features.compare-further` | page-local |
| 7 | FEATURES | `features.compare-agent-tabs` | page-local |
| 8 | PRICING | `pricing.compare-pricing` | shared ×2 |
| 9 | COMPARISON | `comparison.compare-feature-table` | page-local |
| 10 | FEATURES | `features.compare-switch` | page-local |
| 11 | FEATURES | `features.compare-value-cards` | page-local |
| 12 | CONVERSION | `conversion.compare-dark-cta` | page-local |
| 13 | SHELL | `shell.footer` | shared ×68 |
| 14 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Plane-vs comparison (legacy) — `template.compare-legacy`

2 routes · `/plane-vs-monday`, `/plane-vs-clickup-deprecated` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.compare-legacy-hero` | page-local |
| 5 | PROOF | `proof.compare-legacy-logo-row` | page-local |
| 6 | COMPARISON | `comparison.compare-legacy-why-table` | page-local |
| 7 | FEATURES | `features.compare-legacy-switch-steps` | page-local |
| 8 | FEATURES | `features.compare-legacy-experience` | page-local |
| 9 | CONVERSION | `conversion.compare-legacy-guided-cta` | page-local |
| 10 | PRICING | `pricing.compare-pricing` | shared ×2 |
| 11 | FEATURES | `features.compare-legacy-editions` | page-local |
| 12 | FEATURES | `features.compare-legacy-integrations` | page-local |
| 13 | COMPARISON | `comparison.compare-legacy-feature-table` | page-local |
| 14 | CONVERSION | `conversion.compare-legacy-closing-cta` | page-local |
| 15 | SHELL | `shell.footer` | shared ×68 |
| 16 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Compare index — `template.compare-index`

1 route · `/compare` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.compare-index-hero` | page-local |
| 5 | CONTENT | `content.compare-index-cards` | page-local |
| 6 | FEATURES | `features.compare-index-styles` | page-local |
| 7 | FEATURES | `features.compare-index-self-hosted` | page-local |
| 8 | FEATURES | `features.compare-index-enterprise` | page-local |
| 9 | CONVERSION | `conversion.compare-index-cta` | page-local |
| 10 | SHELL | `shell.footer` | shared ×68 |
| 11 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Switch to Plane — `template.switch`

1 route · `/switch` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.switch-hero` | page-local |
| 5 | FEATURES | `features.switch-work-runs-on` | page-local |
| 6 | FEATURES | `features.switch-introducing-plane` | page-local |
| 7 | FEATURES | `features.switch-why-switch` | page-local |
| 8 | FEATURES | `features.switch-how-it-works` | page-local |
| 9 | COMPARISON | `comparison.switch-tool-picker` | page-local |
| 10 | COMPARISON | `comparison.switch-migration-blueprint` | page-local |
| 11 | PROOF | `proof.switch-logos` | page-local |
| 12 | FAQ | `faq.switch-faq` | page-local |
| 13 | CONVERSION | `conversion.switch-final-cta` | page-local |
| 14 | SHELL | `shell.footer` | shared ×68 |
| 15 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Switch from Jira Data Center — `template.switch-jira-dc`

1 route · `/switch-from-jira-data-center` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | SHELL | `shell.jira-dc-toc` | page-local |
| 5 | HERO | `hero.jira-dc-hero` | page-local |
| 6 | CONTENT | `content.jira-dc-timeline` | page-local |
| 7 | FEATURES | `features.jira-dc-introducing-plane` | page-local |
| 8 | FEATURES | `features.jira-dc-migration-steps` | page-local |
| 9 | COMPARISON | `comparison.jira-dc-capability-table` | page-local |
| 10 | FEATURES | `features.jira-dc-security` | page-local |
| 11 | CONTENT | `content.jira-dc-resources` | page-local |
| 12 | FAQ | `faq.jira-dc-faq` | page-local |
| 13 | SHELL | `shell.footer` | shared ×68 |
| 14 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Importers page — `template.imports`

1 route · `/imports` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.imports-hero` | page-local |
| 5 | FEATURES | `features.imports-steps` | page-local |
| 6 | FEATURES | `features.imports-importer-tabs` | page-local |
| 7 | FEATURES | `features.imports-zero-data-loss` | page-local |
| 8 | CONVERSION | `conversion.imports-cta` | page-local |
| 9 | SHELL | `shell.footer` | shared ×68 |
| 10 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Integrations directory — `template.integrations`

1 route · `/integrations` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | SHELL | `shell.integrations-subheader` | page-local |
| 5 | HERO | `hero.integrations-hero` | page-local |
| 6 | CONTENT | `content.integrations-directory` | page-local |
| 7 | CONVERSION | `conversion.integrations-build-app-cta` | page-local |
| 8 | SHELL | `shell.footer` | shared ×68 |
| 9 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Partners page — `template.partners`

1 route · `/partners` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.partners-hero` | page-local |
| 5 | PROOF | `proof.partners-logo-cloud` | page-local |
| 6 | FEATURES | `features.partners-programs` | page-local |
| 7 | FEATURES | `features.partners-why` | page-local |
| 8 | FEATURES | `features.partners-deployment` | page-local |
| 9 | FEATURES | `features.partners-jira-dc` | page-local |
| 10 | CONVERSION | `conversion.partners-cta` | page-local |
| 11 | FAQ | `faq.partners-faq` | page-local |
| 12 | SHELL | `shell.footer` | shared ×68 |
| 13 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Pricing page — `template.pricing`

1 route · `/pricing` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | PRICING | `pricing.pricing-plans` | page-local |
| 5 | PRICING | `pricing.pricing-calculator` | page-local |
| 6 | PROOF | `proof.pricing-logo-band` | page-local |
| 7 | COMPARISON | `comparison.pricing-feature-matrix` | page-local |
| 8 | PROOF | `proof.pricing-testimonials` | page-local |
| 9 | FEATURES | `features.pricing-compliance` | page-local |
| 10 | FAQ | `faq.plans-legacy-faq` | shared ×2 |
| 11 | SHELL | `shell.footer` | shared ×68 |
| 12 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Plan page (Pro) — `template.plan-pro`

1 route · `/pro` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-hero-centered` | shared ×5 |
| 5 | PROOF | `proof.plans-logos` | shared ×3 |
| 6 | FEATURES | `features.plans-unlock-cards` | page-local |
| 7 | FEATURES | `features.plans-progress-accordion` | shared ×4 |
| 8 | FEATURES | `features.plans-ai-bento` | shared ×3 |
| 9 | FEATURES | `features.plans-delight-cards` | shared ×2 |
| 10 | FEATURES | `features.plans-platform-cards` | page-local |
| 11 | FEATURES | `features.plans-self-hosted-split` | shared ×2 |
| 12 | FEATURES | `features.plans-security-cards` | shared ×2 |
| 13 | FAQ | `faq.plans-faq` | shared ×9 |
| 14 | CONVERSION | `conversion.plans-cta-banner` | shared ×7 |
| 15 | SHELL | `shell.footer` | shared ×68 |
| 16 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Plan page (Business) — `template.plan-business`

1 route · `/business` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-hero-centered` | shared ×5 |
| 5 | PROOF | `proof.plans-logos` | shared ×3 |
| 6 | FEATURES | `features.plans-progress-tabs` | shared ×2 |
| 7 | FEATURES | `features.plans-intake-alt-rows` | page-local |
| 8 | FEATURES | `features.plans-ai-wide-image` | page-local |
| 9 | FEATURES | `features.plans-ai-bento` | shared ×3 |
| 10 | FEATURES | `features.plans-progress-accordion` | shared ×4 |
| 11 | FEATURES | `features.plans-self-hosted-split` | shared ×2 |
| 12 | FEATURES | `features.plans-delight-cards` | shared ×2 |
| 13 | FEATURES | `features.plans-security-cards` | shared ×2 |
| 14 | FAQ | `faq.plans-faq` | shared ×9 |
| 15 | CONVERSION | `conversion.plans-cta-banner` | shared ×7 |
| 16 | SHELL | `shell.footer` | shared ×68 |
| 17 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Plan page (Enterprise Grid) — `template.plan-enterprise-grid`

1 route · `/enterprise-grid` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-hero-centered` | shared ×5 |
| 5 | PROOF | `proof.plans-logos` | shared ×3 |
| 6 | FEATURES | `features.plans-progress-accordion` | shared ×4 |
| 7 | FEATURES | `features.plans-governance-cards` | page-local |
| 8 | FEATURES | `features.plans-ai-bento` | shared ×3 |
| 9 | FEATURES | `features.plans-capability-cards` | page-local |
| 10 | FEATURES | `features.plans-migration-icon-cards` | page-local |
| 11 | FEATURES | `features.plans-extensibility-cards` | page-local |
| 12 | FEATURES | `features.plans-security-icon-cards` | page-local |
| 13 | FAQ | `faq.plans-faq` | shared ×9 |
| 14 | CONVERSION | `conversion.plans-cta-banner` | shared ×7 |
| 15 | SHELL | `shell.footer` | shared ×68 |
| 16 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Edition page (Self-hosted) — `template.plan-self-hosted`

1 route · `/self-hosted` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-hero-centered` | shared ×5 |
| 5 | PROOF | `proof.plans-logo-strip` | shared ×6 |
| 6 | FEATURES | `features.plans-check-columns` | page-local |
| 7 | FEATURES | `features.plans-progress-tabs` | shared ×2 |
| 8 | FEATURES | `features.plans-deployment-icon-cards` | page-local |
| 9 | FEATURES | `features.plans-self-hosted-ai-split` | page-local |
| 10 | FEATURES | `features.plans-byo-llm-bento` | page-local |
| 11 | FEATURES | `features.plans-cloud-grade-bento` | page-local |
| 12 | CONVERSION | `conversion.plans-cta-card` | shared ×3 |
| 13 | FEATURES | `features.plans-stack-cards` | page-local |
| 14 | FAQ | `faq.plans-faq` | shared ×9 |
| 15 | CONVERSION | `conversion.plans-cta-banner` | shared ×7 |
| 16 | SHELL | `shell.footer` | shared ×68 |
| 17 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Edition page (Community / open source) — `template.plan-open-source`

1 route · `/open-source` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-hero-split` | shared ×2 |
| 5 | PROOF | `proof.plans-logo-strip` | shared ×6 |
| 6 | FEATURES | `features.plans-traction-icon-cards` | page-local |
| 7 | FEATURES | `features.plans-progress-accordion` | shared ×4 |
| 8 | FEATURES | `features.plans-deploy-bento` | page-local |
| 9 | COMPARISON | `comparison.plans-oss-compare-table` | page-local |
| 10 | CONVERSION | `conversion.plans-cta-card` | shared ×3 |
| 11 | FEATURES | `features.plans-oss-platform-cards` | page-local |
| 12 | CONTENT | `content.plans-resource-columns` | page-local |
| 13 | FAQ | `faq.plans-faq` | shared ×9 |
| 14 | CONVERSION | `conversion.plans-cta-banner` | shared ×7 |
| 15 | SHELL | `shell.footer` | shared ×68 |
| 16 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Startup program page — `template.plan-for-startups`

1 route · `/for-startups` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-hero-centered` | shared ×5 |
| 5 | PROOF | `proof.plans-logo-strip` | shared ×6 |
| 6 | FEATURES | `features.plans-startup-pillar-cards` | page-local |
| 7 | PROOF | `proof.plans-testimonial` | page-local |
| 8 | FEATURES | `features.plans-startup-split` | page-local |
| 9 | FEATURES | `features.plans-stack-bento` | page-local |
| 10 | FEATURES | `features.plans-runway-cards` | page-local |
| 11 | FAQ | `faq.plans-faq` | shared ×9 |
| 12 | CONVERSION | `conversion.plans-cta-banner` | shared ×7 |
| 13 | SHELL | `shell.footer` | shared ×68 |
| 14 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Mobile app page — `template.plan-mobile`

1 route · `/mobile` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-hero-split` | shared ×2 |
| 5 | PROOF | `proof.plans-logo-strip` | shared ×6 |
| 6 | FEATURES | `features.plans-mobile-split` | page-local |
| 7 | FEATURES | `features.plans-mobile-bento` | page-local |
| 8 | FEATURES | `features.plans-inbox-split` | page-local |
| 9 | FEATURES | `features.plans-mobile-detail-cards` | page-local |
| 10 | CONVERSION | `conversion.plans-cta-card` | shared ×3 |
| 11 | COMPARISON | `comparison.plans-deployment-compare-table` | page-local |
| 12 | FAQ | `faq.plans-faq` | shared ×9 |
| 13 | SHELL | `shell.footer` | shared ×68 |
| 14 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Edition page (Air-gapped) — `template.plan-airgapped`

1 route · `/airgapped` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-legacy-hero` | shared ×3 |
| 5 | PROOF | `proof.plans-logo-strip` | shared ×6 |
| 6 | FEATURES | `features.plans-legacy-feature-split` | shared ×2 |
| 7 | CONVERSION | `conversion.plans-legacy-split-cta` | shared ×3 |
| 8 | FEATURES | `features.airgapped-why` | page-local |
| 9 | FEATURES | `features.plans-legacy-grid` | shared ×2 |
| 10 | FEATURES | `features.airgapped-architecture-split` | page-local |
| 11 | CONVERSION | `conversion.airgapped-closing-cta` | page-local |
| 12 | SHELL | `shell.footer` | shared ×68 |
| 13 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Security page — `template.plan-security`

1 route · `/security` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-legacy-hero` | shared ×3 |
| 5 | FEATURES | `features.security-compliance-badges` | page-local |
| 6 | FEATURES | `features.plans-legacy-cards` | page-local |
| 7 | CONVERSION | `conversion.plans-legacy-split-cta` | shared ×3 |
| 8 | PROOF | `proof.plans-logo-strip` | shared ×6 |
| 9 | SHELL | `shell.footer` | shared ×68 |
| 10 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Discount program page — `template.program`

2 routes · `/education`, `/nonprofits` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.plans-legacy-hero` | shared ×3 |
| 5 | PROOF | `proof.plans-legacy-logo-cloud` | page-local |
| 6 | FEATURES | `features.plans-legacy-grid` | shared ×2 |
| 7 | FEATURES | `features.program-tabs-accordion` | page-local |
| 8 | CONVERSION | `conversion.program-steps-grid` | page-local |
| 9 | FEATURES | `features.plans-legacy-feature-split` | shared ×2 |
| 10 | CONVERSION | `conversion.plans-legacy-split-cta` | shared ×3 |
| 11 | FAQ | `faq.plans-legacy-faq` | shared ×2 |
| 12 | SHELL | `shell.footer` | shared ×68 |
| 13 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Download page — `template.download`

1 route · `/download` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.download-header` | page-local |
| 5 | CONVERSION | `conversion.download-platforms` | page-local |
| 6 | CONVERSION | `conversion.download-qr-codes` | page-local |
| 7 | FAQ | `faq.plans-faq` | shared ×9 |
| 8 | SHELL | `shell.footer` | shared ×68 |
| 9 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Work trials page — `template.work-trials`

1 route · `/work-trials` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.work-trials-hero` | page-local |
| 5 | CONTENT | `content.work-trials-longform` | page-local |
| 6 | FEATURES | `features.work-trials-commitments` | page-local |
| 7 | FAQ | `faq.plans-faq` | shared ×9 |
| 8 | CONVERSION | `conversion.plans-cta-banner` | shared ×7 |
| 9 | SHELL | `shell.footer` | shared ×68 |
| 10 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Self-hosting whitepaper — `template.whitepaper`

1 route · `/self-hosted/whitepaper` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.whitepaper-header` | page-local |
| 5 | CONTENT | `content.whitepaper-toc` | page-local |
| 6 | CONTENT | `content.whitepaper-reader` | page-local |
| 7 | FAQ | `faq.whitepaper-faq` | page-local |
| 8 | CONVERSION | `conversion.whitepaper-cta` | page-local |
| 9 | SHELL | `shell.footer` | shared ×68 |
| 10 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Plane One sunset essay — `template.plane-one-sunset`

1 route · `/one/why-plane-one` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.plane-one-sunset-notice` | page-local |
| 5 | CONTENT | `content.plane-one-essay` | page-local |
| 6 | SHELL | `shell.footer` | shared ×68 |
| 7 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### About page — `template.about`

1 route · `/about` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.about-hero` | page-local |
| 5 | FEATURES | `features.about-principles` | page-local |
| 6 | CONTENT | `content.about-reason` | page-local |
| 7 | CONTENT | `content.about-story` | page-local |
| 8 | CONTENT | `content.about-mission` | page-local |
| 9 | SHELL | `shell.footer` | shared ×68 |
| 10 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Charter letter — `template.charter`

1 route · `/charter` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.charter-letter` | page-local |
| 5 | SHELL | `shell.footer` | shared ×68 |
| 6 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Contact page — `template.contact`

1 route · `/contact` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONVERSION | `conversion.contact-options` | page-local |
| 5 | SHELL | `shell.footer` | shared ×68 |
| 6 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Manifesto page — `template.manifesto`

1 route · `/manifesto` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.manifesto-hero` | page-local |
| 5 | CONTENT | `content.manifesto-principles-nav` | page-local |
| 6 | CONTENT | `content.manifesto-principles` | page-local |
| 7 | CONVERSION | `conversion.manifesto-closing-cta` | page-local |
| 8 | SHELL | `shell.footer` | shared ×68 |
| 9 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Wallpapers page — `template.wallpapers`

1 route · `/wallpapers` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.wallpapers-header` | page-local |
| 5 | CONTENT | `content.wallpapers-desktop` | page-local |
| 6 | CONTENT | `content.wallpapers-mobile` | page-local |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Talk to sales — `template.talk-to-sales`

1 route · `/talk-to-sales` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.talk-to-sales-intro` | page-local |
| 5 | CONVERSION | `conversion.talk-to-sales-form` | page-local |
| 6 | SHELL | `shell.footer` | shared ×68 |
| 7 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Demo video page — `template.view-demo`

1 route · `/view-demo` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.view-demo-header` | page-local |
| 5 | CONTENT | `content.view-demo-film` | page-local |
| 6 | CONTENT | `content.view-demo-chapters` | page-local |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Launch week recap (fall) — `template.launch-week-fall`

1 route · `/launch-week-fall-2025` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.launch-week-fall-hero` | page-local |
| 5 | CONTENT | `content.launch-week-fall-rows` | page-local |
| 6 | SHELL | `shell.footer` | shared ×68 |
| 7 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Launch week storefront (q2) — `template.launch-week-q2`

1 route · `/launch-week/q2-2026` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.launch-week-q2-storefront` | page-local |
| 5 | CONTENT | `content.launch-week-q2-days` | page-local |
| 6 | SHELL | `shell.footer` | shared ×68 |
| 7 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Launch week redirect — `template.launch-week-redirect`

1 route · `/launch-week` · chrome: **redirect**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | SHELL | `shell.footer` | shared ×68 |
| 5 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Operating manual — `template.operating-manual`

1 route · `/operating-manual` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.operating-manual-hero` | page-local |
| 5 | CONTENT | `content.operating-manual-intro` | page-local |
| 6 | CONTENT | `content.operating-manual-philosophy` | page-local |
| 7 | CONTENT | `content.operating-manual-grids` | page-local |
| 8 | CONTENT | `content.operating-manual-foundation` | page-local |
| 9 | SHELL | `shell.footer` | shared ×68 |
| 10 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Product Hunt thank-you page — `template.ph-launch`

1 route · `/ph-launch` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.ph-launch-hero` | page-local |
| 5 | CONTENT | `content.ph-launch-thank-you` | page-local |
| 6 | CONTENT | `content.ph-launch-expectations` | page-local |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Year in review page — `template.year-review`

1 route · `/plane-in-2025` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.year-review-hero` | page-local |
| 5 | CONTENT | `content.year-review-journey` | page-local |
| 6 | CONVERSION | `conversion.year-review-closing-cta` | page-local |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Testimonials wall — `template.testimonials`

1 route · `/testimonials` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.testimonials-hero` | page-local |
| 5 | PROOF | `proof.testimonials-logo-row` | page-local |
| 6 | PROOF | `proof.testimonials-wall` | page-local |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Legal index — `template.legal-index`

1 route · `/legals` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.legal-header` | shared ×2 |
| 5 | CONTENT | `content.legal-index-links` | page-local |
| 6 | SHELL | `shell.footer` | shared ×68 |
| 7 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Legal document — `template.legal-document`

10 routes · `/legals/acceptable-use-policy`, `/legals/ai-terms`, `/legals/business-associate-agreement`, `/legals/cookie-policy`, `/legals/dpa`, `/legals/eula`, `/legals/privacy-policy`, `/legals/service-level-agreement`, `/legals/sub-processors`, `/legals/terms-and-conditions` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.legal-header` | shared ×2 |
| 5 | CONTENT | `content.legal-toc` | page-local |
| 6 | CONTENT | `content.legal-body` | page-local |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Blog index — `template.blog-index`

1 route · `/blog` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.blog-featured` | page-local |
| 5 | CONTENT | `content.blog-post-list` | page-local |
| 6 | CONVERSION | `conversion.collections-cta-card` | shared ×3 |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Blog post — `template.blog-post`

12 routes · `/blog/:slug` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.blog-post-header` | page-local |
| 5 | CONTENT | `content.blog-post-toc` | page-local |
| 6 | CONTENT | `content.blog-post-share` | page-local |
| 7 | CONTENT | `content.blog-post-body` | page-local |
| 8 | CONTENT | `content.blog-post-related` | page-local |
| 9 | CONVERSION | `conversion.collections-cta-card` | shared ×3 |
| 10 | SHELL | `shell.footer` | shared ×68 |
| 11 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Changelog index — `template.changelog-index`

1 route · `/changelog` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.changelog-index-header` | page-local |
| 5 | CONTENT | `content.changelog-feed` | page-local |
| 6 | CONTENT | `content.changelog-lightbox` | shared ×2 |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Changelog entry — `template.changelog-entry`

11 routes · `/changelog/:slug` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.changelog-entry-toc` | page-local |
| 5 | CONTENT | `content.changelog-entry-header` | page-local |
| 6 | CONTENT | `content.changelog-entry-body` | page-local |
| 7 | CONTENT | `content.changelog-recent` | page-local |
| 8 | CONVERSION | `conversion.collections-cta-card` | shared ×3 |
| 9 | CONTENT | `content.changelog-lightbox` | shared ×2 |
| 10 | SHELL | `shell.footer` | shared ×68 |
| 11 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Catalog root (templates and marketplace) — `template.catalog-index`

2 routes · `/templates`, `/marketplace` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | SHELL | `shell.catalog-subheader` | shared ×5 |
| 5 | HERO | `hero.catalog-hero` | shared ×3 |
| 6 | CONTENT | `content.catalog-directory` | shared ×3 |
| 7 | CONVERSION | `conversion.catalog-cta` | shared ×5 |
| 8 | SHELL | `shell.footer` | shared ×68 |
| 9 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Templates category — `template.templates-category`

4 routes · `/templates/categories/:category` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | SHELL | `shell.catalog-subheader` | shared ×5 |
| 5 | HERO | `hero.catalog-hero` | shared ×3 |
| 6 | CONTENT | `content.catalog-directory` | shared ×3 |
| 7 | CONVERSION | `conversion.catalog-cta` | shared ×5 |
| 8 | SHELL | `shell.footer` | shared ×68 |
| 9 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Marketplace category — `template.marketplace-category`

7 routes · `/marketplace/categories/:category` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | SHELL | `shell.catalog-subheader` | shared ×5 |
| 5 | HERO | `hero.catalog-hero` | shared ×3 |
| 6 | CONTENT | `content.catalog-directory` | shared ×3 |
| 7 | CONVERSION | `conversion.catalog-cta` | shared ×5 |
| 8 | SHELL | `shell.footer` | shared ×68 |
| 9 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Template detail — `template.template-detail`

18 routes · `/templates/:slug` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | SHELL | `shell.catalog-subheader` | shared ×5 |
| 5 | CONTENT | `content.catalog-item-header` | shared ×2 |
| 6 | CONTENT | `content.catalog-item-meta` | shared ×2 |
| 7 | CONTENT | `content.catalog-item-body` | shared ×2 |
| 8 | CONVERSION | `conversion.catalog-cta` | shared ×5 |
| 9 | SHELL | `shell.footer` | shared ×68 |
| 10 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Marketplace app detail — `template.marketplace-detail`

18 routes · `/marketplace/:slug` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | SHELL | `shell.catalog-subheader` | shared ×5 |
| 5 | CONTENT | `content.catalog-item-header` | shared ×2 |
| 6 | CONTENT | `content.catalog-item-meta` | shared ×2 |
| 7 | CONTENT | `content.catalog-item-body` | shared ×2 |
| 8 | CONVERSION | `conversion.catalog-cta` | shared ×5 |
| 9 | SHELL | `shell.footer` | shared ×68 |
| 10 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Customers index — `template.customers-index`

1 route · `/customers` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.customers-hero` | page-local |
| 5 | PROOF | `proof.customer-story-grid` | page-local |
| 6 | PROOF | `proof.customer-testimonial` | page-local |
| 7 | CONVERSION | `conversion.customers-cta` | page-local |
| 8 | SHELL | `shell.footer` | shared ×68 |
| 9 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Customer story — `template.customer-story`

8 routes · `/customers/:slug` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.customer-story-header` | page-local |
| 5 | CONTENT | `content.customer-story-meta` | page-local |
| 6 | CONTENT | `content.customer-story-body` | page-local |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Careers index — `template.careers-index`

1 route · `/careers` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | HERO | `hero.careers-hero` | page-local |
| 5 | CONTENT | `content.careers-why` | page-local |
| 6 | PROOF | `proof.careers-stats` | page-local |
| 7 | CONTENT | `content.careers-how-we-work` | page-local |
| 8 | CONTENT | `content.careers-who-does-well` | page-local |
| 9 | CONTENT | `content.careers-hiring` | page-local |
| 10 | CONTENT | `content.careers-open-roles` | page-local |
| 11 | CONTENT | `content.careers-practical-terms` | page-local |
| 12 | FAQ | `faq.careers-faq` | page-local |
| 13 | CONVERSION | `conversion.careers-cta` | page-local |
| 14 | SHELL | `shell.footer` | shared ×68 |
| 15 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

### Job detail — `template.job-detail`

33 routes · `/careers/:slug` · chrome: **full**

| # | category | section | |
|---:|---|---|---|
| 1 | SHELL | `shell.header` | shared ×68 |
| 2 | SHELL | `shell.mega-menus` | shared ×68 |
| 3 | SHELL | `shell.mobile-drawer` | shared ×68 |
| 4 | CONTENT | `content.job-header` | page-local |
| 5 | CONTENT | `content.job-body` | page-local |
| 6 | CONVERSION | `conversion.job-apply-card` | page-local |
| 7 | SHELL | `shell.footer` | shared ×68 |
| 8 | SHELL | `shell.footer-wordmark-reveal` | shared ×68 |

## Section reference

### SHELL

_Site and section chrome: global header, mega-menus, mobile drawer, footer, plus sticky sub-headers and fixed in-page TOCs._

**`shell.header`** — Sticky (top-0, z-50) desktop top bar from the global Header: Plane wordmark, Product / Solutions / Resources mega-menu triggers, direct links, and the sign-in plus primary sign-up actions.

· Rendered by App.jsx around every route: all 208 routes, the /launch-week redirect included. · appears on 208 routes · implemented by `site/src/components/Header.jsx > DesktopHeader`

**`shell.mega-menus`** — Hover/click dropdown panels opened from the desktop header triggers: multi-column link lists with column headings, icon menu items and app chips for Product, Solutions and Resources.

· Part of the global header on all 208 routes. · appears on 208 routes · implemented by `site/src/components/header/MegaMenuContent.jsx > MENU_CONTENT (ProductMenu, SolutionsMenu, ResourcesMenu)`

**`shell.mobile-drawer`** — Below-desktop header bar with a hamburger button that opens a full-height navigation drawer (accordion groups mirroring the mega-menu data, plus sign-in and sign-up).

· Part of the global header on all 208 routes; visible only below the desktop breakpoint. · appears on 208 routes · implemented by `site/src/components/Header.jsx > MobileHeader`

**`shell.footer`** — Global footer: rounded top block with link columns (product, solutions, resources, company, legal), social links and the status/copyright line.

· Rendered by App.jsx after every route: all 208 routes. · appears on 208 routes · implemented by `site/src/components/Footer.jsx > Footer`

**`shell.footer-wordmark-reveal`** — Large Plane brand wordmark on the dark footer surface, pinned with sticky bottom-0 under the z-20 footer block so it is revealed as the page scrolls to the end (pure CSS).

· Part of the global footer on all 208 routes. · appears on 208 routes · implemented by `site/src/components/Footer.jsx > Footer (sticky bottom-0 wordmark layer)`

**`shell.catalog-subheader`** — Dark sticky sub-header under the global header for the Templates and Marketplace catalogs: catalog wordmark linking to the catalog root plus request/build-an-app links.

· All 49 catalog routes: both catalog roots, every category page and every template or app detail page. · appears on 49 routes · implemented by `site/src/components/collections/Catalog.jsx > CatalogSubHeader`

**`shell.integrations-subheader`** — Inline copy of the marketplace sub-header on /integrations: dark sticky bar with the Marketplace wordmark and Build an app / Request an app links. Same look as shell.catalog-subheader but hand-written markup in the page file.

· Only /integrations (1 route). · appears on 1 routes · implemented by `site/src/pages/integrations.jsx > IntegrationsPage (inline <header>, section 0)`

**`shell.jira-dc-toc`** — Fixed right-edge mini table of contents (xl+): collapsed tick marks that expand on hover into anchor links to each page section.

· Only /switch-from-jira-data-center (1 route). · appears on 1 routes · implemented by `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (nav "Jira DC table of contents")`

### HERO

_Page-opening block: headline, sub-copy, primary actions and hero media._

**`hero.home-hero`** — Homepage hero (#hero): headline about project and knowledge management for teams and agents, sub-copy, sign-up and demo buttons, and the product screenshot stage.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Hero.jsx > Hero`

**`hero.feature-hero`** — Data-driven feature-page hero (type "hero"): eyebrow, title, description, buttons and product image; variant "center" or "split" changes layout only.

· Every current-generation FeaturePage route: the standard, no-rows, hub and AI feature templates plus /semantic-diffs-by-plane (12 routes). · appears on 12 routes · implemented by `site/src/components/features/blocks.jsx > Hero`

**`hero.feature-legacy-hero`** — Older-generation feature hero (type "heroOld", center or split variant) with eyebrow, title, buttons and image.

· The three legacy feature routes: /delights, /teamspaces and /state-of-projects-and-updates (3 routes). · appears on 3 routes · implemented by `site/src/components/features/blocks.jsx > HeroOld`

**`hero.compose-hero`** — Dark Plane Compose hero: pill, "Plane Compose" title, install button (copy pip command), docs button and animated terminal.

· Only /plane-compose (1 route). · appears on 1 routes · implemented by `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Hero block)`

**`hero.agents-hero`** — Plane Agents hero: eyebrow "Plane Agents, now available", title, sign-up/demo buttons and layered canvas hero image; the logo marquee (proof.feature-logo-marquee) is rendered at the bottom of this function.

· Only /agents (1 route). · appears on 1 routes · implemented by `site/src/components/features/Agents.jsx > Hero`

**`hero.solutions-hero`** — Solutions/industry hero (block "hero"): eyebrow, title, sub, two buttons and screenshot; dark variant with background image on most industry pages.

· All 16 team, size and industry solution routes. · appears on 16 routes · implemented by `site/src/components/solutions/Blocks.jsx > Hero`

**`hero.compare-hero`** — v2 "Plane vs X" hero with competitor logo lock-up, title, sub and buttons.

· The 6 newer ComparisonPage plane-vs routes. · appears on 6 routes · implemented by `site/src/components/compare/ComparisonPage.jsx > Hero`

**`hero.compare-legacy-hero`** — Legacy "Switch from X" split hero with eyebrow, h1, rich sub and image.

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > SplitHero`

**`hero.compare-index-hero`** — "Looking for something better than Plane?" split hero with "Keep me on Plane" / "Show me comparisons" buttons and consolidation illustration.

· Only /compare (1 route). · appears on 1 routes · implemented by `site/src/pages/compare.jsx > ComparePage (section 0)`

**`hero.switch-hero`** — "Switch to Plane" hero over a background image with sign-up/demo buttons.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchPage (section#hero)`

**`hero.jira-dc-hero`** — "Jira Data Center is ending. Switch to Plane without trade-offs." hero.

· Only /switch-from-jira-data-center (1 route). · appears on 1 routes · implemented by `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#hero)`

**`hero.imports-hero`** — "Switch to Plane in clicks" centered hero with importer screenshot.

· Only /imports (1 route). · appears on 1 routes · implemented by `site/src/pages/imports.jsx > ImportsPage (section 0)`

**`hero.integrations-hero`** — "Your work, your tools, all in one place" two-column hero over background image (inline copy of the Catalog hero).

· Only /integrations (1 route). · appears on 1 routes · implemented by `site/src/pages/integrations.jsx > IntegrationsPage (section 1, hero)`

**`hero.partners-hero`** — "Become a Plane partner" split hero with "Join the partner program" button.

· Only /partners (1 route). · appears on 1 routes · implemented by `site/src/pages/partners.jsx > PartnersPage (section 0)`

**`hero.plans-hero-centered`** — Centered plan/offer hero: eyebrow (often price or program), title, sub, buttons and wide image.

· /pro, /business, /enterprise-grid, /self-hosted and /for-startups (5 routes). · appears on 5 routes · implemented by `site/src/components/plans/Blocks.jsx > HeroCentered`

**`hero.plans-hero-split`** — Two-column plan hero with text left and image right.

· /mobile and /open-source (2 routes). · appears on 2 routes · implemented by `site/src/components/plans/Blocks.jsx > HeroSplit`

**`hero.plans-legacy-hero`** — Legacy plans hero (center or split align) with eyebrow, title, body, buttons and image.

· /airgapped, /security, /education and /nonprofits (4 routes). · appears on 4 routes · implemented by `site/src/components/plans/Legacy.jsx > LHero`

**`hero.download-header`** — Logo icon with "Download Plane / The full workspace. On every device."

· Only /download (1 route). · appears on 1 routes · implemented by `site/src/pages/download.jsx > Download (inline <header>)`

**`hero.work-trials-hero`** — Dark full-height hero "The best interview is a few days of real work" pinned to the bottom.

· Only /work-trials (1 route). · appears on 1 routes · implemented by `site/src/pages/work-trials.jsx > WorkTrials (inline dark hero)`

**`hero.whitepaper-header`** — Guide header: label, h1 "The Plane Self-Hosting Guide", intro, Talk to sales / Read the docs buttons and a For / Editions / Reading time definition list.

· Only /self-hosted/whitepaper (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Whitepaper.jsx > Whitepaper (section "The Plane Self-Hosting Guide")`

**`hero.about-hero`** — Full-viewport hero "Work infrastructure for humans and agents" over a sticky background image.

· Only /about (1 route). · appears on 1 routes · implemented by `site/src/pages/about.jsx > About (sticky background + hero section)`

**`hero.manifesto-hero`** — Dark hero "A steerable system for work" with dictionary tooltip, blockquote and illustration, closed by a Stripe divider.

· Only /manifesto (1 route). · appears on 1 routes · implemented by `site/src/pages/manifesto.jsx > Manifesto (hero) + Stripe`

**`hero.wallpapers-header`** — "Wallpapers" heading and intro copy.

· Only /wallpapers (1 route). · appears on 1 routes · implemented by `site/src/pages/wallpapers.jsx > Wallpapers (header)`

**`hero.talk-to-sales-intro`** — "Talk to a human" intro card on the split background with a customer LogoMarquee.

· Only /talk-to-sales (1 route). · appears on 1 routes · implemented by `site/src/pages/talk-to-sales.jsx > TalkToSales (left card) + LogoMarquee`

**`hero.view-demo-header`** — "See Plane in action" title and sub.

· Only /view-demo (1 route). · appears on 1 routes · implemented by `site/src/pages/view-demo.jsx > ViewDemo (title block)`

**`hero.launch-week-fall-hero`** — "Launch Week | Fall 2025" centered hero with all-launches figure and caption.

· Only the fall launch-week recap route (1 route). · appears on 1 routes · implemented by `site/src/components/company/Blocks.jsx > HeroCentered (+ figure)`

**`hero.operating-manual-hero`** — "The Plane Operating Manual" hero with hero image.

· Only /operating-manual (1 route). · appears on 1 routes · implemented by `site/src/components/company/Blocks.jsx > HeroCentered (+ image)`

**`hero.ph-launch-hero`** — "Thank You for an Incredible Launch!" split hero over background.

· Only /ph-launch (1 route). · appears on 1 routes · implemented by `site/src/pages/ph-launch.jsx > PhLaunch (hero)`

**`hero.year-review-hero`** — Dark "Plane in 2025" display-type hero.

· Only the year-in-review route (1 route). · appears on 1 routes · implemented by `site/src/pages/plane-in-2025.jsx > PlaneIn2025 (hero section)`

**`hero.testimonials-hero`** — "Our customers say the nicest things about us" centered hero.

· Only /testimonials (1 route). · appears on 1 routes · implemented by `site/src/components/company/Blocks.jsx > HeroCentered`

**`hero.launch-week-q2-storefront`** — lg+: 300vh scroll-scrubbed storefront video with bottom day timeline and scroll cue; below lg: section "Launch week hero" image.

· Only the q-two launch-week storefront route (1 route). · appears on 1 routes · implemented by `site/src/components/company/LaunchWeekQ2.jsx > LaunchWeekQ2 (scroll-scrubbed section / mobile hero)`

**`hero.catalog-hero`** — Two-column catalog hero over background (TEMPLATES_HERO / MARKETPLACE_HERO h1 and sub).

· Both catalog roots and every catalog category page (13 routes). · appears on 13 routes · implemented by `site/src/components/collections/Catalog.jsx > CatalogListing (hero)`

**`hero.customers-hero`** — "Meet our customers" hero.

· Only /customers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Customers.jsx > CustomersIndex (hero)`

**`hero.careers-hero`** — Dark full-height hero "Build the infrastructure work runs on".

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > CareersIndex (Hero)`

### PROOF

_Social proof: customer logos, testimonials, story cards and headline statistics._

**`proof.home-customer-logos`** — Homepage static customer logo grid (#logos), not a marquee.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Customers.jsx > Customers`

**`proof.home-customer-stories`** — Homepage customer story cards (logo, quote/headline, link to the story) with hover scale.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Stories.jsx > Stories`

**`proof.feature-logo-marquee`** — Captioned customer-logo strip with a marquee row (type "logos", marquee on). Also rendered inside the /agents hero.

· The standard, no-rows, hub and AI feature templates plus /agents (12 routes). · appears on 12 routes · implemented by `site/src/components/features/blocks.jsx > LogoStrip`

**`proof.compose-why-stats`** — Three large statistics (STATS: "$2T", "60%", "28x") on a grid background.

· Only /plane-compose (1 route). · appears on 1 routes · implemented by `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Why this matters block)`

**`proof.solutions-logos`** — Captioned logo row with marquee ("Join 50,000+ teams...").

· All 16 team, size and industry solution routes. · appears on 16 routes · implemented by `site/src/components/solutions/Blocks.jsx > Logos`

**`proof.solutions-testimonial`** — Single customer quote with name, company logo and a linked story card.

· The 3 size solution routes. · appears on 3 routes · implemented by `site/src/components/solutions/Blocks.jsx > Testimonial`

**`proof.solutions-industry-customer-cards`** — Three-card grid of named programs that run on Plane ("Humanity's next-generation space programs now run on Plane").

· The 7 industry routes. · appears on 7 routes · implemented by `site/src/components/solutions/Blocks.jsx > Cards`

**`proof.compare-logos-quote`** — Section#logos: customer logo image with caption plus a pull quote and author.

· The 6 newer ComparisonPage plane-vs routes. · appears on 6 routes · implemented by `site/src/components/compare/ComparisonPage.jsx > LogosQuote`

**`proof.compare-legacy-logo-row`** — Captioned customer logo row (desktop and mobile logo sets).

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > LogoRow`

**`proof.switch-logos`** — Customer logo band.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchPage (section#logos)`

**`proof.partners-logo-cloud`** — #logo-cloud-primary "Trusted by partners shaping the future of work" logo row.

· Only /partners (1 route). · appears on 1 routes · implemented by `site/src/pages/partners.jsx > PartnersPage (section 1)`

**`proof.plans-logos`** — Fixed section#logos customer logo row.

· /pro, /business and /enterprise-grid (3 routes). · appears on 3 routes · implemented by `site/src/components/plans/Blocks.jsx > Logos`

**`proof.plans-logo-strip`** — Captioned logo strip with configurable caption (e.g. "50,000+ teams run Plane in production").

· /self-hosted, /for-startups, /mobile, /open-source, /airgapped and /security (6 routes). · appears on 6 routes · implemented by `site/src/components/plans/Blocks.jsx > LogoStrip`

**`proof.plans-testimonial`** — Customer quote with linked story card ("Why FortyAU replaced OpenProject with Plane...").

· Only /for-startups (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > Testimonial`

**`proof.plans-legacy-logo-cloud`** — Legacy captioned logo cloud (div#logo-cloud-primary).

· /education and /nonprofits (2 routes). · appears on 2 routes · implemented by `site/src/components/plans/Legacy.jsx > LLogoCloud`

**`proof.pricing-logo-band`** — Bordered customer logo band.

· Only /pricing (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Pricing.jsx > LogoBand`

**`proof.pricing-testimonials`** — "Chosen by at-scale ambitious teams" quote grid.

· Only /pricing (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Pricing.jsx > Testimonials`

**`proof.testimonials-logo-row`** — Wrapped customer logo row.

· Only /testimonials (1 route). · appears on 1 routes · implemented by `site/src/pages/testimonials.jsx > Testimonials (logo row)`

**`proof.testimonials-wall`** — Three-column wall of testimonial cards.

· Only /testimonials (1 route). · appears on 1 routes · implemented by `site/src/pages/testimonials.jsx > Testimonials (card grid) + Body`

**`proof.customer-story-grid`** — Grid of four customer story cards. Rendered twice, alternating with proof.customer-testimonial (grid, quote, grid, quote); listed once.

· Only /customers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Customers.jsx > StoryGrid + StoryCard`

**`proof.customer-testimonial`** — Large single testimonial quote. Rendered twice, alternating with the story grid.

· Only /customers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Customers.jsx > Testimonial`

**`proof.careers-stats`** — Dark stats band with large numbers.

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > CareersIndex (Stats)`

### FEATURES

_Product capability, workflow, integration, deployment and security explanation modules._

**`features.home-products`** — Homepage product showcase (#products): tabbed/scroll-driven panels introducing the product areas (work management, wiki, AI) with screenshots.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Products.jsx > Products`

**`features.home-ai-insight`** — Plane AI insight tabs (#insight, "AI that works because it knows your context"): auto-advancing tabs with progress ticks and matching screenshots.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Insight.jsx > Insight`

**`features.home-migrate`** — Jira migration pitch (#migrate, "Two Fortune 10 companies chose Plane for their Jira migration"): checklist of migration guarantees with supporting proof and CTA.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Migrate.jsx > Migrate`

**`features.home-capabilities`** — Core capabilities grid (#ai-native, "Flexible features for every project, and all teams"): large feature cards plus small icon cards (cycles, modules, views and so on).

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Capabilities.jsx > Capabilities`

**`features.home-self-hosted`** — Dark self-hosting section (#self-hosted, "Self-host without compromise, on-prem and air-gapped") with deployment feature list.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/SelfHosted.jsx > SelfHosted`

**`features.home-apps-integrations`** — Apps and integrations section (#apps, "Extend Plane with apps, agents, and your own integrations"): integration cards.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Apps.jsx > Apps`

**`features.home-enterprise`** — Enterprise security and compliance columns (#enterprise, "Enterprise-grade security, compliance, and control").

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Enterprise.jsx > Enterprise`

**`features.home-developers`** — Dark developer section (#developers, "Every setting versioned, reviewed, and deployed..."): config-as-code pitch with external doc links.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Developers.jsx > Developers`

**`features.feature-intro-image-grid`** — First content section on standard feature pages: SectionHeader (center, or split on /workflows-and-approvals) above a 3-card ImageGrid introducing the feature (e.g. "Turn your backlog into focused sprints").

· The 8 standard feature routes, including /work-items. · appears on 8 routes · implemented by `site/src/components/features/blocks.jsx > Section (header + ImageGrid)`

**`features.feature-rows`** — Header-less section of alternating image/text FeatureRows (two rows) describing the feature in depth.

· The 7 standard feature routes; /work-items omits it. · appears on 7 routes · implemented by `site/src/components/features/blocks.jsx > Section (FeatureRows)`

**`features.feature-ai-bento`** — AI section: SectionHeader above a one- or two-card Bento (e.g. "AI that keeps cycles moving before your team has to"; on /ai "Repetitive work, handled for you").

· Every route of the standard, no-rows, hub and AI feature templates (11 routes). · appears on 11 routes · implemented by `site/src/components/features/blocks.jsx > Section (header + Bento)`

**`features.feature-beyond-image-grid`** — Six-card ImageGrid of quality-of-life details around the feature ("Beyond the Cycles", "Quality of life delights").

· The standard, no-rows and hub feature templates (10 routes). · appears on 10 routes · implemented by `site/src/components/features/blocks.jsx > Section (header + ImageGrid, six cards)`

**`features.feature-connected-tabs`** — Split SectionHeader plus side-tab switcher (TabsSide) whose panes show how the feature connects to the rest of Plane ("Connected features", "Powerful features, opt-in complexity").

· The standard, no-rows and hub feature templates (10 routes). · appears on 10 routes · implemented by `site/src/components/features/blocks.jsx > Section (split header + TabsSide)`

**`features.feature-security-image-grid`** — Trust section "Enterprise-grade security, compliance, and control": split header plus 3-card ImageGrid. Same purpose as features.solutions-security-cards and features.plans-security-cards but a different block implementation.

· All 11 standard, no-rows, hub and AI feature routes. · appears on 11 routes · implemented by `site/src/components/features/blocks.jsx > Section (split header + ImageGrid, three cards)`

**`features.feature-pillar-cols`** — Header-less three-column value pillars (statCols: eyebrow, title, bullet list), e.g. "Clarity / Docs right next to work".

· The feature hub template: /project-management and /wiki (2 routes). · appears on 2 routes · implemented by `site/src/components/features/blocks.jsx > Section (StatCols)`

**`features.feature-top-tabs`** — Left SectionHeader with a top tab bar driving a stacked screenshot pane ("The operating system for project execution", "Knowledge without the tab switch").

· The feature hub template (2 routes). · appears on 2 routes · implemented by `site/src/components/features/blocks.jsx > Section (left header + TabsTop)`

**`features.feature-integrations-image-grid`** — Integrations/import section on hub pages ("Built to extend, ready to integrate", "Import everything, connect to anything"): split header and 3-card ImageGrid.

· The feature hub template (2 routes). · appears on 2 routes · implemented by `site/src/components/features/blocks.jsx > Section (split header + ImageGrid, three cards)`

**`features.ai-platform-bento`** — /ai opening bento "The most intelligent way to manage work. Period." (single wide card).

· Only /ai (1 route). · appears on 1 routes · implemented by `site/src/components/features/blocks.jsx > Section (header + Bento, one card)`

**`features.ai-context-image`** — /ai "Context you never have to explain": left header above a full-width image.

· Only /ai (1 route). · appears on 1 routes · implemented by `site/src/components/features/blocks.jsx > Section (left header + ImageBlock)`

**`features.ai-agents-image-icons`** — /ai "Agents that work like teammates": split header, image and a row of three icon features.

· Only /ai (1 route). · appears on 1 routes · implemented by `site/src/components/features/blocks.jsx > Section (split header + ImageBlock + IconFeatures)`

**`features.ai-integrations-bento`** — /ai "Integrations across your stack, MCP across everything else" single-card bento.

· Only /ai (1 route). · appears on 1 routes · implemented by `site/src/components/features/blocks.jsx > Section (left header + Bento, one card)`

**`features.feature-icon-cards`** — Left header plus three icon cards ("Built for code written by agents").

· Only /semantic-diffs-by-plane (1 route). · appears on 1 routes · implemented by `site/src/components/features/blocks.jsx > Section (left header + IconCards)`

**`features.feature-legacy-bento`** — Older-generation bento section using the "old" header variants. On /teamspaces three of these sections run back to back and are listed once; /delights has one 13-card wall.

· The three legacy feature routes (3 routes). · appears on 3 routes · implemented by `site/src/components/features/blocks.jsx > Section (oldLeft/oldCenter header + Bento)`

**`features.feature-legacy-row`** — Older-generation single image/text feature row (type "featureRowOld"). /teamspaces renders two in a row ("Capacity planning", "All your team's numbers"), listed once.

· /teamspaces and /state-of-projects-and-updates (2 routes). · appears on 2 routes · implemented by `site/src/components/features/blocks.jsx > FeatureRowOld`

**`features.feature-legacy-accordion`** — Older-generation feature accordion with header and five items ("All the simplicity of projects that you love, now with real-time updates"); a feature explainer, not an FAQ.

· Only /state-of-projects-and-updates (1 route). · appears on 1 routes · implemented by `site/src/components/features/blocks.jsx > AccordionOld`

**`features.compose-video`** — "See it in action" heading over an embedded product video.

· Only /plane-compose (1 route). · appears on 1 routes · implemented by `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Video block)`

**`features.compose-capabilities`** — Capability card grid (CAPABILITIES) on the dark gradient cards.

· Only /plane-compose (1 route). · appears on 1 routes · implemented by `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Capabilities block)`

**`features.compose-projects-as-code`** — Explainer of projects-as-code with code/visual split.

· Only /plane-compose (1 route). · appears on 1 routes · implemented by `site/src/components/features/PlaneCompose.jsx > PlaneCompose (What is Projects-as-code block)`

**`features.compose-how-it-works`** — Numbered STEPS of the Compose workflow.

· Only /plane-compose (1 route). · appears on 1 routes · implemented by `site/src/components/features/PlaneCompose.jsx > PlaneCompose (How it works block)`

**`features.agents-build`** — "Build agents ready for real work": tabbed build steps with progress bar.

· Only /agents (1 route). · appears on 1 routes · implemented by `site/src/components/features/Agents.jsx > BuildAgents`

**`features.agents-ready-made`** — "Start with the work that keeps coming back": ready-made agent cards carousel.

· Only /agents (1 route). · appears on 1 routes · implemented by `site/src/components/features/Agents.jsx > ReadyMade`

**`features.agents-shows-up`** — Dark "Agents show up when the work does" section with buttons and surface screenshots.

· Only /agents (1 route). · appears on 1 routes · implemented by `site/src/components/features/Agents.jsx > ShowsUp`

**`features.agents-control`** — "Set the boundaries. Follow every run." control and visibility tabs.

· Only /agents (1 route). · appears on 1 routes · implemented by `site/src/components/features/Agents.jsx > Control`

**`features.solutions-tabs`** — Auto-advancing tab section (6000 ms per tab) with header and screenshot panes ("Agile infrastructure your team will actually run").

· The 6 team solution routes. · appears on 6 routes · implemented by `site/src/components/solutions/Blocks.jsx > Tabs`

**`features.solutions-rows`** — Header-less alternating image/text rows (three rows on team/size pages, a single dark row on industry pages).

· All 16 team, size and industry solution routes. · appears on 16 routes · implemented by `site/src/components/solutions/Blocks.jsx > Rows`

**`features.solutions-delight-cards`** — Six-card "Quality of life delights" grid (image, title, body).

· The 6 team solution routes. · appears on 6 routes · implemented by `site/src/components/solutions/Blocks.jsx > Cards`

**`features.solutions-integrations-bento`** — Dark two-up bento about working inside existing tools ("Works where engineers already ship", "Connect Plane to the systems your organization already runs").

· Team and size solution routes (9 routes). · appears on 9 routes · implemented by `site/src/components/solutions/Blocks.jsx > Bento`

**`features.solutions-security-cards`** — Three-card trust grid "Enterprise-grade security, compliance, and control" (size pages use their own titles such as "Protect runway without limiting what comes next").

· Team and size solution pages plus /industries/healthcare (10 routes). · appears on 10 routes · implemented by `site/src/components/solutions/Blocks.jsx > Cards`

**`features.solutions-pillar-cards`** — Three-card value-pillar grid that opens size pages ("Keep every team clear, fast, and connected").

· The 3 size solution routes. · appears on 3 routes · implemented by `site/src/components/solutions/Blocks.jsx > Cards`

**`features.solutions-showcase`** — Stack of large white workflow cards (text and screenshot) "Manage complex ... workflows, end to end".

· The 7 industry routes. · appears on 7 routes · implemented by `site/src/components/solutions/Blocks.jsx > Showcase`

**`features.solutions-deployment-cards`** — Six-card "Security & deployment" grid with header buttons ("Run defense work where your data already lives").

· The 7 industry routes. · appears on 7 routes · implemented by `site/src/components/solutions/Blocks.jsx > Cards`

**`features.compare-further`** — "Where Plane goes further than X": four cards with lottie poster frames.

· The 6 newer ComparisonPage plane-vs routes. · appears on 6 routes · implemented by `site/src/components/compare/ComparisonPage.jsx > Further`

**`features.compare-agent-tabs`** — "Let agents run your busywork" tabbed agent showcase.

· The 6 newer ComparisonPage plane-vs routes. · appears on 6 routes · implemented by `site/src/components/compare/ComparisonPage.jsx > AgentTabs`

**`features.compare-switch`** — Migration block "Your Jira history comes with you": eyebrow, h2, body, buttons and image.

· The 6 newer ComparisonPage plane-vs routes. · appears on 6 routes · implemented by `site/src/components/compare/ComparisonPage.jsx > Switch`

**`features.compare-value-cards`** — Three image cards ("Simple pricing", "Run it anywhere", "Covered for procurement").

· The 6 newer ComparisonPage plane-vs routes. · appears on 6 routes · implemented by `site/src/components/compare/ComparisonPage.jsx > Cards`

**`features.compare-legacy-switch-steps`** — "Switch to Plane" stepper of migration steps.

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > SwitchSteps`

**`features.compare-legacy-experience`** — "What X users immediately experience after switching": rows of text cards.

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > Experience`

**`features.compare-legacy-editions`** — "Editions" segmented tabs (Cloud / Self-hosted / Airgapped) with content panes.

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > Editions`

**`features.compare-legacy-integrations`** — "GitHub and Slack, natively connected" integration block.

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > Integrations`

**`features.compare-index-styles`** — "RIGHT FOR YOU / For your unique styles, methods, and best practices" image split.

· Only /compare (1 route). · appears on 1 routes · implemented by `site/src/pages/compare.jsx > ComparePage (section 2)`

**`features.compare-index-self-hosted`** — "ON-PREM AND ON OUR CLOUD / Self-hosted Plane without feature trade-offs" image split with link.

· Only /compare (1 route). · appears on 1 routes · implemented by `site/src/pages/compare.jsx > ComparePage (section 3)`

**`features.compare-index-enterprise`** — "ENTERPRISE READY / Secure and compliant out of the gate" image split.

· Only /compare (1 route). · appears on 1 routes · implemented by `site/src/pages/compare.jsx > ComparePage (section 4)`

**`features.switch-work-runs-on`** — "Humans and agents, working together": two-column intro plus three-column card row.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchPage (section#work-runs-on)`

**`features.switch-introducing-plane`** — "Work infrastructure for humans and agents" product introduction.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchPage (section#introducing-plane)`

**`features.switch-why-switch`** — "What your team gains with Plane" benefit grid.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchPage (section#why-switch)`

**`features.switch-how-it-works`** — "Three steps, one project at a time" migration steps.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchPage (section#how-it-works)`

**`features.jira-dc-introducing-plane`** — Plane introduction as the alternative to Atlassian Cloud.

· Only /switch-from-jira-data-center (1 route). · appears on 1 routes · implemented by `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#introducing-plane)`

**`features.jira-dc-migration-steps`** — "How to move your Jira DC to Plane" steps.

· Only /switch-from-jira-data-center (1 route). · appears on 1 routes · implemented by `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#migration-steps)`

**`features.jira-dc-security`** — Security and enterprise controls section.

· Only /switch-from-jira-data-center (1 route). · appears on 1 routes · implemented by `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#security)`

**`features.imports-steps`** — "As easy as 1-2-3" import steps.

· Only /imports (1 route). · appears on 1 routes · implemented by `site/src/pages/imports.jsx > ImportSteps`

**`features.imports-importer-tabs`** — "See how it works" tab cards with stacked importer screenshots.

· Only /imports (1 route). · appears on 1 routes · implemented by `site/src/pages/imports.jsx > ImporterTabs`

**`features.imports-zero-data-loss`** — "ZERO DATA LOSS" split with image and "Try for yourself" link.

· Only /imports (1 route). · appears on 1 routes · implemented by `site/src/pages/imports.jsx > ImportsPage (section 3)`

**`features.partners-programs`** — "Three ways to partner with Plane" program cards.

· Only /partners (1 route). · appears on 1 routes · implemented by `site/src/pages/partners.jsx > PartnersPage (section 2)`

**`features.partners-why`** — "Why Partner with Plane? Grow with an ecosystem built for the future of work" feature split.

· Only /partners (1 route). · appears on 1 routes · implemented by `site/src/pages/partners.jsx > PartnersPage (section 3)`

**`features.partners-deployment`** — "Unmatched Deployment Flexibility / Serve any customer, anywhere" image grid.

· Only /partners (1 route). · appears on 1 routes · implemented by `site/src/pages/partners.jsx > PartnersPage (section 4)`

**`features.partners-jira-dc`** — "Capitalize on the Jira Data Center EOL" feature split.

· Only /partners (1 route). · appears on 1 routes · implemented by `site/src/pages/partners.jsx > PartnersPage (section 5)`

**`features.plans-progress-tabs`** — Tabs with progress bars driving a screenshot pane ("What unlocks in Business", "What self-hosting Plane looks like").

· /business and /self-hosted (2 routes). · appears on 2 routes · implemented by `site/src/components/plans/Blocks.jsx > ProgressTabs`

**`features.plans-progress-accordion`** — Auto-advancing accordion with image side ("PRO FEATURES", "BUSINESS-ONLY FEATURES", "Why Enterprise Grid", "CAPABILITIES").

· /pro, /business, /enterprise-grid and /open-source (4 routes). · appears on 4 routes · implemented by `site/src/components/plans/Blocks.jsx > ProgressAccordion`

**`features.plans-ai-bento`** — AI bento "BUILT-IN INTELLIGENCE" / "Enterprise AI" (six cards).

· /pro, /business and /enterprise-grid (3 routes). · appears on 3 routes · implemented by `site/src/components/plans/Blocks.jsx > Bento`

**`features.plans-unlock-cards`** — "What unlocks in Pro" four-card grid.

· Only /pro (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-delight-cards`** — "DESIGNED FOR DELIGHT / Speed in every corner of the workspace" single wide card.

· /pro and /business (2 routes). · appears on 2 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-platform-cards`** — "AI-NATIVE PLATFORM / Agents, APIs, and integrations that work inside your stack" four cards.

· Only /pro (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-self-hosted-split`** — "Self-Hosted" split feature plugging the self-hosted edition of the plan.

· /pro and /business (2 routes). · appears on 2 routes · implemented by `site/src/components/plans/Blocks.jsx > SplitFeature`

**`features.plans-security-cards`** — "SECURITY AND COMPLIANCE / Enterprise-grade security, compliance, and control" four cards.

· /pro and /business (2 routes). · appears on 2 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-intake-alt-rows`** — "INBOUND REQUESTS" alternating rows about intake and triage.

· Only /business (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > AltRows`

**`features.plans-ai-wide-image`** — "PLANE AI / AI that is always on, always in context" header plus wide image.

· Only /business (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > WideImage`

**`features.plans-governance-cards`** — "MULTI-WORKSPACE GOVERNANCE" three cards.

· Only /enterprise-grid (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-capability-cards`** — "Enterprise capabilities" seven-card grid.

· Only /enterprise-grid (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-migration-icon-cards`** — "Migration and rollout" icon cards.

· Only /enterprise-grid (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > IconCards`

**`features.plans-extensibility-cards`** — "EXTENSIBILITY" four cards.

· Only /enterprise-grid (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-security-icon-cards`** — "SECURITY AND COMPLIANCE / Security and compliance, without compromise" seven icon cards.

· Only /enterprise-grid (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > IconCards`

**`features.plans-check-columns`** — "BUILT FOR REGULATED TEAMS" checklist columns.

· Only /self-hosted (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CheckColumns`

**`features.plans-deployment-icon-cards`** — "DEPLOYMENT METHODS / Deploy in minutes, scale to thousands" seven icon cards.

· Only /self-hosted (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > IconCards`

**`features.plans-self-hosted-ai-split`** — "Self-hosted AI / AI that runs on your infrastructure" split.

· Only /self-hosted (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > SplitFeature`

**`features.plans-byo-llm-bento`** — "Bring your own LLM" two-card bento.

· Only /self-hosted (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > Bento`

**`features.plans-cloud-grade-bento`** — "Cloud-grade, self-hosted" six-card bento.

· Only /self-hosted (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > Bento`

**`features.plans-stack-cards`** — "Out of the box / Self-hosted ships with the full stack" seven cards.

· Only /self-hosted (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-traction-icon-cards`** — "OPEN SOURCE TRACTION" four icon cards.

· Only /open-source (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > IconCards`

**`features.plans-deploy-bento`** — "Deploy on your infrastructure in minutes. Not months." three-card bento.

· Only /open-source (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > Bento`

**`features.plans-oss-platform-cards`** — "PLATFORM / Open source project management, built to scale" four cards.

· Only /open-source (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-startup-pillar-cards`** — "Turn early momentum into lasting advantage" four cards. Mirrors features.solutions-pillar-cards on /solutions/startups but built from plans blocks.

· Only /for-startups (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-startup-split`** — "Give the idea a clear path forward" multi-row split feature.

· Only /for-startups (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > SplitFeature`

**`features.plans-stack-bento`** — "More leverage from the stack you already have" three-card bento.

· Only /for-startups (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > Bento`

**`features.plans-runway-cards`** — "Protect runway without limiting what comes next" four cards.

· Only /for-startups (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-mobile-split`** — "Optimized for away-from-keyboard work" split.

· Only /mobile (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > SplitFeature`

**`features.plans-mobile-bento`** — "Your whole workspace travels with you" four-card bento.

· Only /mobile (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > Bento`

**`features.plans-inbox-split`** — "Inbox / Stay on top of your work" split.

· Only /mobile (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > SplitFeature`

**`features.plans-mobile-detail-cards`** — "Little things, big difference" seven cards.

· Only /mobile (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > CardGrid`

**`features.plans-legacy-feature-split`** — Legacy header + icon item list + image split ("Project management inside your perimeter", "Why educators choose Plane").

· /airgapped, /education and /nonprofits (3 routes). · appears on 3 routes · implemented by `site/src/components/plans/Legacy.jsx > LFeatureSplit`

**`features.airgapped-why`** — "Why leading enterprises choose Plane Air-Gapped" six-item grid.

· Only /airgapped (1 route). · appears on 1 routes · implemented by `site/src/pages/airgapped.jsx > inline <Container>`

**`features.plans-legacy-grid`** — Legacy header + card grid ("Built for security-first organizations", "Who's eligible").

· /airgapped, /education and /nonprofits (3 routes). · appears on 3 routes · implemented by `site/src/components/plans/Legacy.jsx > LGrid`

**`features.airgapped-architecture-split`** — Second LFeatureSplit on /airgapped: "Enterprise-grade architecture".

· Only /airgapped (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Legacy.jsx > LFeatureSplit`

**`features.security-compliance-badges`** — "Industry-standard compliance with certified security controls" badge row.

· Only /security (1 route). · appears on 1 routes · implemented by `site/src/pages/security.jsx > inline <Container>`

**`features.plans-legacy-cards`** — Legacy header + rows of cards. /security renders two back to back ("Secure from day zero", "Compliance + privacy out of the box with self-hosted Plane"), listed once.

· Only /security (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Legacy.jsx > LCards`

**`features.program-tabs-accordion`** — Program tabs/accordion ("Designed for the way learning happens today").

· /education and /nonprofits (2 routes). · appears on 2 routes · implemented by `site/src/components/plans/Legacy.jsx > LTabsAccordion`

**`features.pricing-compliance`** — "Plane is independently audited and certified" compliance badges.

· Only /pricing (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Pricing.jsx > Compliance`

**`features.work-trials-commitments`** — "The eight commitments" header and commitment cards.

· Only /work-trials (1 route). · appears on 1 routes · implemented by `site/src/pages/work-trials.jsx > inline <Section bg="surface-2">`

**`features.about-principles`** — "The principles behind Plane" stepped principle list over the hero background.

· Only /about (1 route). · appears on 1 routes · implemented by `site/src/pages/about.jsx > Principles`

### COMPARISON

_Comparison tables and competitor or deployment comparisons._

**`comparison.compare-feature-table`** — div#feature-table "Plane vs X, feature by feature": grouped feature table with status icons per product.

· The 6 newer ComparisonPage plane-vs routes. · appears on 6 routes · implemented by `site/src/components/compare/FeatureTable.jsx > FeatureTable`

**`comparison.compare-legacy-why-table`** — "Why do X customers move to Plane?" logo-headed comparison table.

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > WhyTable`

**`comparison.compare-legacy-feature-table`** — div#feature-table "Plane is the best X alternative" legacy feature table.

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > FeatureTableLegacy`

**`comparison.switch-tool-picker`** — "Which tool are you leaving?" carousel of competitor cards with previous/next buttons, linking into the comparison pages.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchPage (section#tool-comparison)`

**`comparison.switch-migration-blueprint`** — "A migration, not a restart" blueprint table.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchPage (section#migration-blueprint)`

**`comparison.jira-dc-capability-table`** — "Everything you had on Data Center, and more" capability table.

· Only /switch-from-jira-data-center (1 route). · appears on 1 routes · implemented by `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#capability-comparison)`

**`comparison.plans-oss-compare-table`** — "COMPARE / How Plane compares to other open source project management tools" table.

· Only /open-source (1 route). · appears on 1 routes · implemented by `site/src/pages/open-source.jsx > inline <Section> (SectionHeader + plans/Blocks.jsx CompareTable)`

**`comparison.plans-deployment-compare-table`** — "CLOUD, SELF-HOSTED & AIR-GAPPED / Runs wherever your Plane runs." deployment comparison table.

· Only /mobile (1 route). · appears on 1 routes · implemented by `site/src/pages/mobile.jsx > inline <Section> (SectionHeader + plans/Blocks.jsx CompareTable)`

**`comparison.pricing-feature-matrix`** — div#features "Features that unlock just when you need them": plan-by-plan feature comparison table.

· Only /pricing (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Pricing.jsx > Features`

### PRICING

_Price cards, plan selection and cost calculators._

**`pricing.compare-pricing`** — "Keep costs in control with Plane": side-by-side price cards for Plane vs the competitor with seat note and buttons. Imported by LegacyComparisonPage too.

· All 8 plane-vs routes (newer and legacy). · appears on 8 routes · implemented by `site/src/components/compare/ComparisonPage.jsx > PricingCompare`

**`pricing.pricing-plans`** — div#pricing "Start free, upgrade comfortably": Cloud / Self-hosted mode tabs (synced to ?mode=), monthly/yearly toggle, seat stepper and plan cards with feature lists.

· Only /pricing (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Pricing.jsx > Plans`

**`pricing.pricing-calculator`** — div#calculator "Slash your bills by more than 70%": tool pickers and seat slider computing savings.

· Only /pricing (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Pricing.jsx > Calculator`

### CONTENT

_Editorial, long-form, legal, listings and directories, and article or entry parts._

**`content.solutions-index-cards`** — Index listing: split header and a grid of icon cards linking to each team or industry page.

· /solutions and /industries (2 routes). · appears on 2 routes · implemented by `site/src/components/solutions/Blocks.jsx > IndexCards`

**`content.compare-index-cards`** — Grid of "Versus X" cards (comparison graphic, title, blurb, link to each plane-vs page).

· Only /compare (1 route). · appears on 1 routes · implemented by `site/src/pages/compare.jsx > ComparePage (section 1)`

**`content.jira-dc-timeline`** — "Defaulting to Atlassian Cloud is still a decision": year-by-year Atlassian end-of-life timeline.

· Only /switch-from-jira-data-center (1 route). · appears on 1 routes · implemented by `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#atlassian-timeline)`

**`content.jira-dc-resources`** — "Resources for your migration" link cards.

· Only /switch-from-jira-data-center (1 route). · appears on 1 routes · implemented by `site/src/pages/switch-from-jira-data-center.jsx > SwitchFromJiraDataCenterPage (section#resources)`

**`content.integrations-directory`** — Integrations directory: Categories sidebar nav plus app card grid (inline copy of the marketplace listing markup).

· Only /integrations (1 route). · appears on 1 routes · implemented by `site/src/pages/integrations.jsx > IntegrationsPage (section 1, #list)`

**`content.plans-resource-columns`** — "Resources" link columns (source code on GitHub, docs, community).

· Only /open-source (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Blocks.jsx > ResourceColumns`

**`content.work-trials-longform`** — Long-form explanation blocks: h3, prose (max-w 750) and full-width diagram.

· Only /work-trials (1 route). · appears on 1 routes · implemented by `site/src/pages/work-trials.jsx > inline <Section> (h3 + prose + diagram)`

**`content.whitepaper-toc`** — Sticky chapter list (lg+) inside the reader; selects the active chapter and honors #hash deep links.

· Only /self-hosted/whitepaper (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Whitepaper.jsx > Reader (sticky sidebar)`

**`content.whitepaper-reader`** — section#whitepaper reader pane showing one chapter at a time (Block renderer) with previous/next navigation.

· Only /self-hosted/whitepaper (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Whitepaper.jsx > Reader (chapter pane + Block)`

**`content.plane-one-sunset-notice`** — Amber notice box "We have sunset One." with an "All plans" link.

· Only /one/why-plane-one (1 route). · appears on 1 routes · implemented by `site/src/pages/one/why-plane-one.jsx > WhyPlaneOne (notice box)`

**`content.plane-one-essay`** — Essay body: "Why Plane/One" h2 then h3 subsections of prose and bullet lists.

· Only /one/why-plane-one (1 route). · appears on 1 routes · implemented by `site/src/pages/one/why-plane-one.jsx > WhyPlaneOne (essay blocks)`

**`content.about-reason`** — Scroll-pinned (250svh) "Faster loops need better coordination" text section.

· Only /about (1 route). · appears on 1 routes · implemented by `site/src/pages/about.jsx > Reason`

**`content.about-story`** — section#our-story "Our story" scroll timeline.

· Only /about (1 route). · appears on 1 routes · implemented by `site/src/pages/about.jsx > Story`

**`content.about-mission`** — Scroll-pinned mission card with background image.

· Only /about (1 route). · appears on 1 routes · implemented by `site/src/pages/about.jsx > Mission`

**`content.charter-letter`** — Bordered monospace open-letter card: h4 headings (anchor ids) and numbered principle paragraphs. The page has no header or TOC; this card is its only block.

· Only /charter (1 route). · appears on 1 routes · implemented by `site/src/pages/charter.jsx > Charter`

**`content.manifesto-principles-nav`** — Sticky "Principles" index column linking to each principle.

· Only /manifesto (1 route). · appears on 1 routes · implemented by `site/src/pages/manifesto.jsx > Manifesto (sticky 240px column)`

**`content.manifesto-principles`** — Six principle sections with ids (one-system-of-record ... operational-truth-at-every-level).

· Only /manifesto (1 route). · appears on 1 routes · implemented by `site/src/pages/manifesto.jsx > Manifesto (principle sections)`

**`content.wallpapers-desktop`** — #desktop-wallpapers gallery with download buttons.

· Only /wallpapers (1 route). · appears on 1 routes · implemented by `site/src/pages/wallpapers.jsx > Desktop`

**`content.wallpapers-mobile`** — #mobile-wallpapers gallery with download buttons.

· Only /wallpapers (1 route). · appears on 1 routes · implemented by `site/src/pages/wallpapers.jsx > Mobile`

**`content.view-demo-film`** — Embedded demo video (iframe) with transcript toggle, share button and mobile CTA buttons.

· Only /view-demo (1 route). · appears on 1 routes · implemented by `site/src/pages/view-demo.jsx > ViewDemo (film + actions)`

**`content.view-demo-chapters`** — "Jump to a chapter" chapter list that swaps to the transcript.

· Only /view-demo (1 route). · appears on 1 routes · implemented by `site/src/pages/view-demo.jsx > ViewDemo (sidebar)`

**`content.launch-week-fall-rows`** — Alternating launch rows (ROWS map, flipped every other row), listed once.

· Only the fall launch-week recap route (1 route). · appears on 1 routes · implemented by `site/src/pages/launch-week-fall-2025.jsx > Row`

**`content.operating-manual-intro`** — "What is Plane?" introduction.

· Only /operating-manual (1 route). · appears on 1 routes · implemented by `site/src/pages/operating-manual.jsx > OperatingManual (#introduction)`

**`content.operating-manual-philosophy`** — "Core Philosophy" section.

· Only /operating-manual (1 route). · appears on 1 routes · implemented by `site/src/pages/operating-manual.jsx > OperatingManual (Core Philosophy)`

**`content.operating-manual-grids`** — Manual chapters rendered from GRIDS ("Everything in one workspace", "Organize and execute work", "Control, automate, and scale"), listed once.

· Only /operating-manual (1 route). · appears on 1 routes · implemented by `site/src/pages/operating-manual.jsx > GridDefault`

**`content.operating-manual-foundation`** — "Rock-solid foundation" closing chapter.

· Only /operating-manual (1 route). · appears on 1 routes · implemented by `site/src/pages/operating-manual.jsx > OperatingManual (Rock-solid foundation)`

**`content.ph-launch-thank-you`** — Dark rounded thank-you card (Cloud / Self-hosted / Air-gapped).

· Only /ph-launch (1 route). · appears on 1 routes · implemented by `site/src/pages/ph-launch.jsx > PhLaunch (dark card)`

**`content.ph-launch-expectations`** — "What to expect on launch day" heading and IconCardGrid.

· Only /ph-launch (1 route). · appears on 1 routes · implemented by `site/src/pages/ph-launch.jsx > PhLaunch + company/Blocks.jsx IconCardGrid`

**`content.year-review-journey`** — Year timeline of milestone cards.

· Only the year-in-review route (1 route). · appears on 1 routes · implemented by `site/src/pages/plane-in-2025.jsx > PlaneIn2025 (section#the-journey)`

**`content.launch-week-q2-days`** — Day packets (DAYS): mobile section "Launch week days" carousel and the DayPanel drawer opened from the desktop timeline.

· Only the q-two launch-week storefront route (1 route). · appears on 1 routes · implemented by `site/src/components/company/LaunchWeekQ2.jsx > LaunchWeekQ2 (days) + DayPanel`

**`content.legal-header`** — Legal title and "Last updated" (or subtitle) header.

· The /legals index plus every legal document (11 routes). · appears on 11 routes · implemented by `site/src/components/collections/LegalPage.jsx > LegalHeader`

**`content.legal-index-links`** — Accent link list to the ten legal documents.

· Only /legals (1 route). · appears on 1 routes · implemented by `site/src/pages/legals/index.jsx > Legals (LEGAL_LINKS list)`

**`content.legal-toc`** — Table of contents built from the document h2/h3 headings.

· The 10 legal document routes. · appears on 10 routes · implemented by `site/src/components/collections/LegalPage.jsx > LegalToc`

**`content.legal-body`** — Legal document body rendered by Prose with heading anchor links.

· The 10 legal document routes. · appears on 10 routes · implemented by `site/src/components/collections/LegalPage.jsx > LegalPage (Prose, cl-legal)`

**`content.blog-featured`** — Blog index top: featured post and three post cards.

· Only /blog (1 route). · appears on 1 routes · implemented by `site/src/components/collections/BlogCards.jsx > FeaturedPost + PostCard`

**`content.blog-post-list`** — Category tabs, search field, post rows and pagination.

· Only /blog (1 route). · appears on 1 routes · implemented by `site/src/pages/blog/index.jsx > Blog (tabs, search, PostRow list) + collections/ui.jsx Pagination`

**`content.blog-post-header`** — Category/date line, h1 title, authors and hero image.

· All 12 local blog posts. · appears on 12 routes · implemented by `site/src/components/collections/BlogPost.jsx > BlogPost (header)`

**`content.blog-post-toc`** — Sticky "On this page" TOC (collapsible on mobile).

· All 12 local blog posts. · appears on 12 routes · implemented by `site/src/components/collections/BlogPost.jsx > TocList`

**`content.blog-post-share`** — Share icons and "Start a free trial" button under the TOC (lg+).

· All 12 local blog posts. · appears on 12 routes · implemented by `site/src/components/collections/BlogPost.jsx > Share (+ Start a free trial)`

**`content.blog-post-body`** — Article body rendered by Prose.

· All 12 local blog posts. · appears on 12 routes · implemented by `site/src/components/collections/BlogPost.jsx > BlogPost (Prose, cl-blog)`

**`content.blog-post-related`** — "Recommended for you" three PostCards and a "View all blogs" link.

· All 12 local blog posts. · appears on 12 routes · implemented by `site/src/components/collections/BlogPost.jsx > BlogPost ("Recommended for you") + PostCard`

**`content.changelog-index-header`** — "Changelog" h1 and Cloud / Self-hosted / Mobile tabs.

· Only /changelog (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Changelog.jsx > ChangelogIndex (h1) + Tabs`

**`content.changelog-feed`** — Paged feed of changelog entries (date, title, Prose body) with pagination.

· Only /changelog (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Changelog.jsx > Entry + ui.jsx Pagination`

**`content.changelog-lightbox`** — Image lightbox overlay opened from entry images.

· /changelog and every local changelog entry (12 routes). · appears on 12 routes · implemented by `site/src/components/collections/Changelog.jsx > Lightbox`

**`content.changelog-entry-toc`** — Hover-to-expand minimap TOC on the left of an entry (lg+).

· All 11 local changelog entries. · appears on 11 routes · implemented by `site/src/components/collections/Changelog.jsx > EntryToc`

**`content.changelog-entry-header`** — Back to Changelog link, h1, date, copy-link and CopyMenu actions, mobile TOC.

· All 11 local changelog entries. · appears on 11 routes · implemented by `site/src/components/collections/Changelog.jsx > ChangelogDetail (header)`

**`content.changelog-entry-body`** — Single changelog entry body (Prose).

· All 11 local changelog entries. · appears on 11 routes · implemented by `site/src/components/collections/Changelog.jsx > ChangelogDetail (Prose, cl-changelog)`

**`content.changelog-recent`** — "Recent changelogs" list from the same tab.

· All 11 local changelog entries. · appears on 11 routes · implemented by `site/src/components/collections/Changelog.jsx > ChangelogDetail (recent-changelogs)`

**`content.catalog-directory`** — Category sidebar nav with request link, plus item card grid filtered by category.

· Both catalog roots and every catalog category page (13 routes). · appears on 13 routes · implemented by `site/src/components/collections/Catalog.jsx > CatalogListing (#list) + ItemCard`

**`content.catalog-item-header`** — Item logo/letter, name, by-line, description and Use Template / Add to Plane CTA.

· All 36 template and marketplace detail routes. · appears on 36 routes · implemented by `site/src/components/collections/Catalog.jsx > CatalogDetail (header)`

**`content.catalog-item-meta`** — Meta sidebar (aside) with grouped metadata and category chips.

· All 36 template and marketplace detail routes. · appears on 36 routes · implemented by `site/src/components/collections/Catalog.jsx > MetaGroup`

**`content.catalog-item-body`** — Item description body (Prose).

· All 36 template and marketplace detail routes. · appears on 36 routes · implemented by `site/src/components/collections/Catalog.jsx > CatalogDetail (Prose)`

**`content.customer-story-header`** — h1 and hero logo image.

· All 8 local customer stories. · appears on 8 routes · implemented by `site/src/components/collections/Customers.jsx > CustomerStory (header)`

**`content.customer-story-meta`** — Sidebar of grouped story metadata with icons.

· All 8 local customer stories. · appears on 8 routes · implemented by `site/src/components/collections/Customers.jsx > CustomerStory (meta groups)`

**`content.customer-story-body`** — Story body (FORTYAU_BODY or GENERIC_STORY via Prose).

· All 8 local customer stories. · appears on 8 routes · implemented by `site/src/components/collections/Customers.jsx > CustomerStory (Prose)`

**`content.careers-why`** — "Why Plane, and why now" / "What we are building" prose with figures.

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > CareersIndex (Why Plane) + ProseBlock + Figure`

**`content.careers-how-we-work`** — "How we work" card grid.

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > CardGrid (cards[0])`

**`content.careers-who-does-well`** — "Who does well here" card grid.

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > CardGrid (cards[1])`

**`content.careers-hiring`** — "How hiring works" prose with figure.

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > CareersIndex (How hiring works) + ProseBlock + Figure`

**`content.careers-open-roles`** — #open-roles: roles grouped by department.

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > RoleRow`

**`content.careers-practical-terms`** — "The practical terms" card grid.

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > CardGrid (cards[2])`

**`content.job-header`** — "Plane Careers" link, job title, location and type, Apply now button.

· All 33 local job routes. · appears on 33 routes · implemented by `site/src/components/collections/Careers.jsx > JobPage (header)`

**`content.job-body`** — Job description body (Prose).

· All 33 local job routes. · appears on 33 routes · implemented by `site/src/components/collections/Careers.jsx > JobPage (Prose JOB_BODY)`

### CONVERSION

_Conversion blocks: CTA bands and cards, download, demo, sign-up, contact and application forms._

**`conversion.home-download-apps`** — Dark mobile-app download band (#download): App Store / Google Play buttons and phone imagery.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Download.jsx > Download`

**`conversion.home-cta`** — Homepage closing CTA band (#cta, "Next-gen project management starts here") with sign-up and sales buttons.

· Only the homepage (1 route). · appears on 1 routes · implemented by `site/src/components/Cta.jsx > Cta`

**`conversion.feature-self-host-card`** — Dark rounded self-host CTA card (type "selfHost", "Your Cycles. Your infrastructure.") with checklist and buttons; rendered as section[aria-label="Call to action"].

· All 11 standard, no-rows, hub and AI feature routes. · appears on 11 routes · implemented by `site/src/components/features/blocks.jsx > SelfHost`

**`conversion.feature-cta-banner`** — Closing CTA banner (type "ctaBanner", "Next-gen project management starts here") with sign-up and demo buttons.

· The standard and no-rows feature templates plus /semantic-diffs-by-plane (9 routes). · appears on 9 routes · implemented by `site/src/components/features/blocks.jsx > CtaBanner`

**`conversion.feature-legacy-cta-card`** — Older-generation closing CTA card (type "ctaCardOld", e.g. "Delight yourself with Plane").

· The three legacy feature routes (3 routes). · appears on 3 routes · implemented by `site/src/components/features/blocks.jsx > CtaCardOld`

**`conversion.compose-final-cta`** — "Start building with Plane Compose" closing CTA with install and docs buttons.

· Only /plane-compose (1 route). · appears on 1 routes · implemented by `site/src/components/features/PlaneCompose.jsx > PlaneCompose (Final CTA block)`

**`conversion.agents-final-cta`** — Dark final CTA "The work keeps coming. Put an Agent on it." flanked by canvas art.

· Only /agents (1 route). · appears on 1 routes · implemented by `site/src/components/features/Agents.jsx > FinalCta`

**`conversion.solutions-cta`** — Closing CTA section ("Built for the AI era. Loved by engineers.") with two buttons.

· Team and size solution routes (9 routes). · appears on 9 routes · implemented by `site/src/components/solutions/Blocks.jsx > Cta`

**`conversion.solutions-cta-box`** — Boxed migration CTA "Move off Jira Data Center" with background image, bullets and two buttons.

· The 7 industry routes. · appears on 7 routes · implemented by `site/src/components/solutions/Blocks.jsx > CtaBox`

**`conversion.compare-dark-cta`** — Dark closing CTA (section aria-label "Call to action") with multi-line title and buttons.

· The 6 newer ComparisonPage plane-vs routes. · appears on 6 routes · implemented by `site/src/components/compare/ComparisonPage.jsx > DarkCta`

**`conversion.compare-legacy-guided-cta`** — Mid-page banner CTA "Guided migration from X to Plane". Same component as conversion.compare-legacy-closing-cta with different copy and position.

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > BannerCta (data.cta1)`

**`conversion.compare-legacy-closing-cta`** — Closing banner CTA "Switch from X without starting over".

· The 2 legacy comparison routes. · appears on 2 routes · implemented by `site/src/components/compare/LegacyComparisonPage.jsx > BannerCta (data.cta2)`

**`conversion.compare-index-cta`** — "Switch to Plane" CTA with Talk to Sales and Get started buttons.

· Only /compare (1 route). · appears on 1 routes · implemented by `site/src/pages/compare.jsx > ComparePage (section 5)`

**`conversion.switch-final-cta`** — "Your switch to Plane is free" closing CTA.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchPage (section#final-cta)`

**`conversion.imports-cta`** — "Move into a peaceful Plane" closing CTA.

· Only /imports (1 route). · appears on 1 routes · implemented by `site/src/pages/imports.jsx > ImportsPage (section 4)`

**`conversion.integrations-build-app-cta`** — "Build your own app" dark CTA with Build an app / Request an app links.

· Only /integrations (1 route). · appears on 1 routes · implemented by `site/src/pages/integrations.jsx > IntegrationsPage (section 2)`

**`conversion.partners-cta`** — "Ready to partner with Plane?" CTA panel.

· Only /partners (1 route). · appears on 1 routes · implemented by `site/src/pages/partners.jsx > PartnersPage (section 6)`

**`conversion.plans-cta-banner`** — Closing CTA banner (section aria-label "Call to action", "Next-gen project management starts here" by default).

· /pro, /business, /enterprise-grid, /self-hosted, /open-source, /for-startups and /work-trials (7 routes). · appears on 7 routes · implemented by `site/src/components/plans/Blocks.jsx > CtaBanner`

**`conversion.plans-cta-card`** — Dark CTA card with item list (section aria-label "Call to action"): "Plane for air-gapped environments", "Why settle for legacy...", "Scale from team to organization...".

· /self-hosted, /mobile and /open-source (3 routes). · appears on 3 routes · implemented by `site/src/components/plans/Blocks.jsx > CtaCard`

**`conversion.plans-legacy-split-cta`** — Legacy split CTA panel with side note ("Get help migrating to self-hosted Plane", program CTA, security assurance CTA).

· /airgapped, /security, /education and /nonprofits (4 routes). · appears on 4 routes · implemented by `site/src/components/plans/Legacy.jsx > LSplitCta`

**`conversion.airgapped-closing-cta`** — Second LSplitCta on /airgapped: "The modern alternative to legacy air-gapped tools".

· Only /airgapped (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Legacy.jsx > LSplitCta`

**`conversion.program-steps-grid`** — "Let's get started" application steps grid with "Apply here" button.

· /education and /nonprofits (2 routes). · appears on 2 routes · implemented by `site/src/components/plans/Legacy.jsx > LGrid`

**`conversion.download-platforms`** — Two platform panels (desktop: macOS, Windows soon, Linux; mobile: iOS, Android) with download rows.

· Only /download (1 route). · appears on 1 routes · implemented by `site/src/pages/download.jsx > Platform`

**`conversion.download-qr-codes`** — "Scan QR from your mobile" App Store and Play Store QR codes.

· Only /download (1 route). · appears on 1 routes · implemented by `site/src/pages/download.jsx > Qr`

**`conversion.whitepaper-cta`** — Dark "Run Plane on infrastructure you control" CTA panel.

· Only /self-hosted/whitepaper (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Whitepaper.jsx > Whitepaper (section#whitepaper-cta)`

**`conversion.contact-options`** — "How can we help?" header plus contact cards (sales, support, general inquiries) with mail/link actions.

· Only /contact (1 route). · appears on 1 routes · implemented by `site/src/pages/contact.jsx > Contact`

**`conversion.manifesto-closing-cta`** — Stripe divider then "Stay steerable as you scale" closing panel with buttons.

· Only /manifesto (1 route). · appears on 1 routes · implemented by `site/src/pages/manifesto.jsx > Manifesto (Stripe + closing panel)`

**`conversion.talk-to-sales-form`** — Validated sales contact form (name, email, team-size stepper, message).

· Only /talk-to-sales (1 route). · appears on 1 routes · implemented by `site/src/pages/talk-to-sales.jsx > SalesForm`

**`conversion.year-review-closing-cta`** — "We are just getting started" radial-gradient band with Get started / Talk to Sales.

· Only the year-in-review route (1 route). · appears on 1 routes · implemented by `site/src/pages/plane-in-2025.jsx > PlaneIn2025 (closing band)`

**`conversion.collections-cta-card`** — Collections CTA card (compact/flat variants) inviting sign-up.

· /blog, every local blog post and every local changelog entry (24 routes). · appears on 24 routes · implemented by `site/src/components/collections/ui.jsx > CtaCard`

**`conversion.catalog-cta`** — Dark "Build your own app" / "Request a template" CTA panel.

· All 49 catalog listing and detail routes. · appears on 49 routes · implemented by `site/src/components/collections/Catalog.jsx > CatalogCta`

**`conversion.customers-cta`** — Dark CTA card with background image.

· Only /customers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Customers.jsx > CustomersCta`

**`conversion.careers-cta`** — "The next era of work needs its builders" CTA section.

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > CareersIndex (CTA section)`

**`conversion.job-apply-card`** — "Apply for this role" card with Apply now.

· All 33 local job routes. · appears on 33 routes · implemented by `site/src/components/collections/Careers.jsx > JobPage (Apply card)`

### FAQ

_Question-and-answer accordions._

**`faq.feature-faq`** — Feature-page FAQ accordion (type "faq") with header ("Everything you need to know" / "FAQs").

· The feature hub template plus /ai (3 routes). · appears on 3 routes · implemented by `site/src/components/features/blocks.jsx > Faq`

**`faq.solutions-faq`** — Solutions FAQ accordion with split header.

· Size and industry solution routes (10 routes). · appears on 10 routes · implemented by `site/src/components/solutions/Blocks.jsx > Faq`

**`faq.switch-faq`** — section#faq "FAQs" card with accordion.

· Only /switch (1 route). · appears on 1 routes · implemented by `site/src/pages/switch.jsx > SwitchFaq`

**`faq.jira-dc-faq`** — section#faq "FAQs" card with accordion; the page ends here with no CTA band.

· Only /switch-from-jira-data-center (1 route). · appears on 1 routes · implemented by `site/src/pages/switch-from-jira-data-center.jsx > DcFaq`

**`faq.partners-faq`** — "FAQ" accordion.

· Only /partners (1 route). · appears on 1 routes · implemented by `site/src/pages/partners.jsx > PartnersFaq`

**`faq.plans-faq`** — Plans FAQ: eyebrow, title ("Everything you need to know" by default), sub and accordion.

· Nine plans-group routes: /pro, /business, /enterprise-grid, /self-hosted, /open-source, /for-startups, /mobile, /download and /work-trials (9 routes). · appears on 9 routes · implemented by `site/src/components/plans/Blocks.jsx > Faq`

**`faq.plans-legacy-faq`** — Legacy FAQ accordion ("FAQ", "What can we answer for you today?").

· /pricing, /education and /nonprofits (3 routes). · appears on 3 routes · implemented by `site/src/components/plans/Legacy.jsx > LFaq`

**`faq.whitepaper-faq`** — Whitepaper FAQ accordion.

· Only /self-hosted/whitepaper (1 route). · appears on 1 routes · implemented by `site/src/components/plans/Whitepaper.jsx > WpFaq`

**`faq.careers-faq`** — "Questions you might have" FAQ.

· Only /careers (1 route). · appears on 1 routes · implemented by `site/src/components/collections/Careers.jsx > Faq`
