Source: https://plane.so/

# Asset manifest — plane.so homepage

Every file listed here is in `site/public/assets/` and is served at `/assets/<file>`. "Rendered" sizes are CSS px at 1440 unless noted. Original paths are relative to https://plane.so. Live images go through `/_next/image?url=…&w=…`. The local copies are the full-resolution originals (or the browser-saved JPEG transcodes, where noted).

Files marked **(new)** were missing from the saved page. I downloaded them during this recon run.

## Header / nav
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Header logo | /brand-logos/logo-with-wordmark.svg | logo-with-wordmark.svg | 96x20 | 1769x368 |
| Product menu "Works with your stack" bg | /nav/product-bg.webp | nav-product-bg.webp **(new)** | 287x174 cover | 566x356 |
| Solutions menu card bg | /nav/discovery.webp | nav-discovery.webp **(new)** | 302x380 cover | 568x760 |
| Resources "Latest update" card bg | /nav/bg-changelog.webp | nav-bg-changelog.webp **(new)** | 290x276 cover | 568x560 |
| Resources "Download" card bg | /nav/bg-download.webp | nav-bg-download.webp **(new)** | 290x276 cover | 568x560 |
| Chips | /integrations/{slack,github,sentry,gitlab}.svg | integration-{slack,github,sentry,gitlab}.svg **(new)** | 16x16, `filter: brightness(0)` | — |
| Compare chips | /competitor/{linear,jira,asana,monday,clickup}.svg | competitor-*.svg **(new)** | 16x16 | — |
| Menu item icons (inline SVG on live, `currentColor`) | inline | nav-icon-*.svg **(new, extracted)** | 16x16 (cloud icon 20x20) | 16x16 viewBox |
| Mobile menu / close / chevron / arrow icons | lucide `menu`, `x`, `chevron-right`, `arrow-up-right` | icon-chevron-right.svg, icon-arrow-up-right.svg (or use lucide-react) | 20 / 16 | 24 viewBox |

Mapping from nav icon file to menu item:
- project-management, wiki, ai, intake, work-items, epics-initiatives, cycles, dashboards, teamspaces, workflows-and-approvals, self-hosted
- Solutions: product, operations, marketing, agile, design, aerospace, finance, defense, manufacturing, retail, startups, growing-teams, enterprise-teams
- Resources: blog, changelog, forum-plane-so, customers, docs-plane-so, developers-plane-so-api-reference-introd (API reference), security
- `nav-icon-changelog-2026-10-15-…svg` is the cloud icon in the "Latest update" card.

## Products showcase (§3)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Stage texture | /home/v7/stage-texture.webp | stage-texture.webp | 1256x706 cover | 2704x1520 |
| Still, Work tab (poster) | /home/v7/still-work.v6.webp | still-work.v6.webp **(new copy)** (identical to still-work.webp) | 1174x647 cover top | 2528x1392 |
| Still, Wiki tab | /home/v7/still-wiki.v6.webp | still-wiki.v6.webp **(new)** | same | 2528x1392 |
| Still, AI tab | /home/v7/still-ai.v6.webp | still-ai.v6.webp **(new)** | same | 2528x1392 |
| Walkthrough video (AV1, 1x) | /home/v7/hero-loop.v6.1264.av1.mp4 | hero-loop.v6.1264.av1.mp4 **(new)** | 1174x647 | 1264x696, 48.03s, 1.30 MB |
| Walkthrough video (H.264, 1x) | /home/v7/hero-loop.v6.1264.h264.mp4 | hero-loop.v6.1264.h264.mp4 **(new)** | — | 1264x696, 1.96 MB |
| Walkthrough video (AV1, 2x) | /home/v7/hero-loop.v6.2528.av1.mp4 | hero-loop.v6.2528.av1.mp4 **(new)** | used when width·DPR > 1400 | 2528x1392, 2.16 MB |
| Walkthrough video (H.264, 2x) | /home/v7/hero-loop.v6.2528.h264.mp4 | hero-loop.v6.2528.h264.mp4 **(new)** | — | 3.97 MB |
| Tab icon masks | /home/v4/product/icons/{projects,wiki,ai}.svg | product-projects.svg, product-wiki.svg, product-ai.svg **(new)** | 14x14 via `mask-image` | — |
| Pause/Play icons | lucide `pause` / `play` | icon-pause.svg (or lucide-react) | 14x14 | — |

`<source>` order: AV1 `video/mp4; codecs="av01.0.05M.08"` (2x: `av01.0.12M.08`), then H.264 `video/mp4; codecs="avc1.640028"` (2x: `avc1.640033`).

Segments: Work 0–16s, Wiki 16–32s, Plane AI 32–48s.

## Customers (§4) — all 189x56 (or 190x56) SVGs, rendered 162–163x48, opacity .75
sony.svg, aramco.svg, dolby.svg, accenture.svg, amazon.svg, essor.svg, forty-au.svg, hypersonica.svg, ssi.svg, ruby-labs.svg, republique-francaise.svg, gov-of-lithuania.svg, mirador-therapeutics.svg, texelis.svg, optigrun.svg, starkbank.svg, datum.svg, power-integration.svg. These come from /home/v4/logo-cloud/*.svg.

## Insight (§5)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Tab 1 image | /home/v5/hierarchy.webp | hierarchy.webp | 1256x536 cover | 5024x2160 |
| Tab 2 image | /home/v5/agents.webp | agents.webp **(new, original webp)**; agents.jpg is a 3840x1651 JPEG transcode of the same | 1256x536 | 5024x2160 |
| Tab 3 image | /home/v5/works.webp | works.webp | 1256x536 | 5024x2160 |
| Mobile tab images (<768, aspect 424/339) | /home/v5/{hierarchy,agents,works}-mobile.webp | hierarchy-mobile.webp, agents-mobile.webp **(new)**, works-mobile.webp **(new)** | 358x286 at 390 | 1696x1356 |

## Customer stories (§6)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Dark card bg | /home/v5/testimonial.webp | testimonial.webp **(new)** | 403x298 cover | 1232x1000 |
| FortyAU logo (story + quote) | /home/v2/customers-logo/40au.svg | 40au.svg | 134x32 (`brightness-0 invert`), 84x20 | 67x16 |
| MinimalArt | /home/v4/testimonial/minimalart.svg | minimalart.svg | 127x16 | 87x11 |
| VATES | /home/v4/testimonial/vates.svg | vates.svg | 35x36 | 48x50 |
| INITS | /home/v4/testimonial/inits.svg | inits.svg | 72x20 | 54x15 |
| Quote mark (inline on live) | inline | icon-quote.svg **(new, extracted)** | 24x24 (viewBox 30x24), color #CFD2D3 | — |
| Chevron | lucide chevron-right | icon-chevron-right.svg | 24x24 | — |

## Migrate (§7)
No images. The check icon is lucide `check` (icon-check.svg), 16px, `#4e5355`. The ruler is a CSS gradient.

## Core capabilities (§8)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Card 1 bg | /home/v5/ai-background.webp | ai-background.webp **(new)** | 616x510 cover | 1610x1074 |
| Card 1 image | /home/v4/ai-native/view.webp | view.webp | 568x368 | 2320x1504 |
| Card 2 image | /home/v4/ai-native/real-time.webp | real-time.jpg (JPEG transcode, 1920x1034) | 568x306 | — |
| Small card icons | /home/v4/ai-native/icons/{cycles,documentation,Initiative,workflows}.svg | cycles.svg, documentation.svg, Initiative.svg, workflows.svg | 20x20 | 24x24 |

## Self-hosted (§9)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Main image | /home/v5/self-hosted.webp | self-hosted.webp | 1256x540 cover | 5024x2160 |
| Mobile image | /home/v5/self-hosted-mobile.webp | self-hosted-mobile.webp | 358x286 at 390 | 1696x1356 |

## Download (§10)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| App Store icon (also footer Mac button, 20px) | /home/v4/download/appstore.svg | appstore.svg | 24x24 | 24x24 |
| Play Store icon | /home/v4/download/playstore.svg | playstore.svg | 24x24 | 24x24 |
| Phone mockup | /home/v4/download/mobile.webp | mobile.jpg (JPEG transcode 2464x1876) | 616x469 cover | — |
| Phone mockup (<768) | /home/v4/download/mobile-mobile.webp | mobile-mobile.jpg (1696x1316) | 358x278 at 390 | — |
| Arrow | lucide arrow-up-right | icon-arrow-up-right.svg | 18x18 | — |

## Apps (§11)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Marketplace wordmark (inline in title) | /home/v4/apps/logo.svg | logo.svg (120x22 SVG) | 134x25 | 120x22 |
| Browse image | /home/v4/apps/browse.webp | browse.webp | 551x333 cover | 2208x1336 |
| Browse (<768) | /home/v4/apps/browse-mobile.webp | browse-mobile.webp | 317x191 at 390 | 1504x911 |
| Build image | /home/v4/apps/build.webp | build.jpg (JPEG 2240x1368) | 551x333 cover | — |
| Build (<768) | /home/v4/apps/build-mobile.webp | build-mobile.jpg (1544x943) | 317x192 at 390 | — |
| Slack logo | /home/v4/apps/slack.svg | slack.svg (114x40) | 114x40 | — |
| Slack screenshot (lg+) | /home/v4/apps/slack-image.webp | slack-image.jpg (JPEG 2312x1057) | 588x267 cover bottom | — |
| Slack screenshot (<lg) | /home/v4/apps/slack-image-mobile.webp | slack-image-mobile.webp | 675x358 at 768; 337x179 at 390 | 1600x848 |

## Enterprise (§12)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Certified | /home/v4/enterprise/certified.webp | certified.webp | 322x322 contain | 1084x1084 |
| Uptime | /home/v4/enterprise/uptime.webp | uptime.webp | 322x322 contain | 1352x960 |
| Identity | /home/v4/enterprise/identify.webp | identify.webp | 322x322 contain | 1028x1112 |

## Developers (§13)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Compose image | /home/v4/developers/project-as-code.webp | project-as-code.webp | 628x500 | 2512x2000 |
| Compose image (<768) | /home/v4/developers/project-as-code-mobile.webp | project-as-code-mobile.jpg (1080x838) | 358x278 at 390 | — |
| API card decor | /home/v4/developers/api.svg | api.svg | 110x110 | 95x90 |
| MCP card decor | /home/v4/developers/ai.svg | **ai.svg** (this is the developers version; the product-tab ai icon is product-ai.svg) | 110x110 | 95x90 |

## CTA (§14)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Background | /home/v5/cta-bg.webp | cta-bg.webp **(new)** | 1440x393 cover center | 6048x2396 |

## Footer (§15)
| use | original | local | rendered | natural |
|---|---|---|---|---|
| Footer logo | /brand-logos/logo-light.svg | logo-light.svg | 66x40 | — |
| Compliance badges | /compliance/{gdpr,hipaa,iso-27001,soc-2}.svg | gdpr.svg, hipaa.svg, iso-27001.svg, soc-2.svg | 64x64 each | — |
| Wordmark reveal | /brand-logos/footer-brand-wordmark.svg | footer-brand-wordmark.svg | 1376x409 (w 1600 max-w 100%) | 1408x419 |
| Windows icon (inline on live) | inline | icon-windows.svg **(new)** | 16x16 | 20 viewBox |
| Social icons (inline on live, `fill=currentColor`) | inline | social-linkedin.svg, social-github.svg, social-x.svg, social-discord.svg, social-youtube.svg **(new)** | 24x24 in 50x50 buttons | — |

## Fonts (already in site/public/fonts)
- Inter variable (`Inter_VariableFont_opsz,wght`, plus italic).
- Satoshi variable (+ italic).
- Source Serif Pro (all weights) and IBM Plex Mono are loaded by the site but **unused** on the homepage.

## Not cloned / third-party
These load on the live page but are not part of the design:
- Analytics and tracking: gtm, clarity, linkedin insight, twitter pixel, HubSpot `collectedforms`, Vercel speed-insights, Sentry `/monitoring`.
- The cookie consent banner.
