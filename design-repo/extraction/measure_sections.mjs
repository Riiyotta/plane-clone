// Optional re-measure tool for extraction/measured-values.json -> sectionHeights.
//
// Usage (run from a directory where the `playwright` package resolves, e.g. the clone's site/ folder,
// or set NODE_PATH to a node_modules that contains it):
//
//   MEASURE_BASE_URL=http://localhost:5247 \
//   MEASURE_ROUTES_FILE=routes.json \
//   MEASURE_OUT=raw-units.json \
//   [MEASURE_BROWSER_PATH=<chromium executable>] \
//   [MEASURE_PLAYWRIGHT_DIR=<dir containing the playwright package>/] \
//   [MEASURE_VIEWPORT_WIDTH=1440 MEASURE_VIEWPORT_HEIGHT=900] \
//   node measure_sections.mjs
//
// Nothing here is machine-specific: the base URL, route list, output file and (optional) browser
// executable all come from environment variables. MEASURE_ROUTES_FILE is a JSON array of concrete
// paths (dynamic segments already filled with a sample slug).
//
// Method: viewport 1440x900 by default (the wrapper gate only accepts 1440-wide measurements); each route is loaded, scrolled to the bottom in 600px steps (lazy media),
// then the in-flow content units inside <main> are collected. A unit is a <section> element, or any
// element that has no <section> descendant; wrappers that contain sections are descended into, and a
// chain of single-child wrappers (page shells such as a full-page <div>) is descended through.
// Fixed/absolute/sticky-out-of-flow elements are recorded separately and take no page height.
// For long units, every h2 inside is recorded with its document-absolute top so long-form bodies can
// be split at real heading boundaries (legal parts, article chapters, guide chapters).
import { readFileSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'

// Resolve playwright normally, or from MEASURE_PLAYWRIGHT_DIR (e.g. a global node_modules/playwright/).
let chromium
try { ({ chromium } = await import('playwright')) } catch {
  if (!process.env.MEASURE_PLAYWRIGHT_DIR) { console.error('playwright not resolvable; set MEASURE_PLAYWRIGHT_DIR'); process.exit(2) }
  ;({ chromium } = createRequire(process.env.MEASURE_PLAYWRIGHT_DIR)('playwright'))
}

const BASE = process.env.MEASURE_BASE_URL
const ROUTES = process.env.MEASURE_ROUTES_FILE
const OUT = process.env.MEASURE_OUT || 'raw-units.json'
if (!BASE || !ROUTES) {
  console.error('MEASURE_BASE_URL and MEASURE_ROUTES_FILE are required')
  process.exit(2)
}
const routes = JSON.parse(readFileSync(ROUTES, 'utf8'))
const launchOpts = process.env.MEASURE_BROWSER_PATH ? { executablePath: process.env.MEASURE_BROWSER_PATH } : {}
const browser = await chromium.launch(launchOpts)
const VW = Number(process.env.MEASURE_VIEWPORT_WIDTH || 1440)
const VH = Number(process.env.MEASURE_VIEWPORT_HEIGHT || 900)
const page = await browser.newPage({ viewport: { width: VW, height: VH } })
const result = { viewport: { width: VW, height: VH }, measuredAt: new Date().toISOString(), routes: {} }

for (const path of routes) {
  try {
    await page.goto(BASE + path, { waitUntil: 'load', timeout: 60000 })
    await page.waitForTimeout(800)
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)) }
      window.scrollTo(0, 0)
    })
    await page.waitForTimeout(500)
    const data = await page.evaluate(() => {
      const abs = (el) => { const r = el.getBoundingClientRect(); return { top: Math.round(r.top + window.scrollY), height: Math.round(r.height) } }
      const txt = (el) => (el ? el.textContent.replace(/\s+/g, ' ').trim().slice(0, 70) : null)
      const units = []
      const overlays = []
      const visibleKids = (el, record = true) => [...el.children].filter((c) => {
        const cs = getComputedStyle(c)
        if (cs.display === 'none') return false
        if (cs.position === 'fixed' || cs.position === 'absolute') { if (record) overlays.push({ tag: c.tagName.toLowerCase(), position: cs.position, ...abs(c) }); return false }
        return abs(c).height > 0
      })
      const walk = (el) => {
        const kids = visibleKids(el)
        // a single in-flow child that is not itself a <section> is a page wrapper: descend through it
        if (kids.length === 1 && kids[0].tagName !== 'SECTION' && kids[0].children.length) return walk(kids[0])
        for (const c of kids) {
          const cs = getComputedStyle(c)
          const box = abs(c)
          if (c.tagName === 'SECTION' || !c.querySelector('section')) {
            const h2s = [...c.querySelectorAll('h2')].map((h) => ({ text: txt(h), top: abs(h).top }))
            units.push({
              tag: c.tagName.toLowerCase(), id: c.id || null, ariaLabel: c.getAttribute('aria-label'),
              cls: (c.getAttribute('class') || '').slice(0, 90), position: cs.position, ...box,
              h1: txt(c.querySelector('h1')), h2: txt(c.querySelector('h2')), h3: txt(c.querySelector('h3')),
              text: txt(c), h2Count: h2s.length, h2s: h2s.length >= 2 ? h2s : undefined,
            })
          } else walk(c)
        }
      }
      const main = document.querySelector('main')
      walk(main)
      // Long units (> 40% of <main>) get a `parts` list: their in-flow children (single-child wrappers
      // descended through, up to 4 levels), so long bodies can be split at real content boundaries. Parts that
      // are themselves > 30% of <main> are expanded one more time (two nested levels at most).
      const mainH = abs(main).height
      const expand = (el, depth, level = 0) => {
        let kids = [...el.children].filter((c) => { const cs = getComputedStyle(c); return cs.display !== 'none' && cs.position !== 'fixed' && cs.position !== 'absolute' && abs(c).height > 0 })
        while (kids.length === 1 && depth < 4 && kids[0].children.length) { depth += 1; el = kids[0]; kids = [...el.children].filter((c) => { const cs = getComputedStyle(c); return cs.display !== 'none' && cs.position !== 'fixed' && cs.position !== 'absolute' && abs(c).height > 0 }) }
        return kids.slice(0, 400).map((c) => {
          const hd = /^H[1-4]$/.test(c.tagName) ? c : c.querySelector('h1,h2,h3,h4')
          return { tag: c.tagName.toLowerCase(), id: c.id || null, ariaLabel: c.getAttribute('aria-label'), cls: (c.getAttribute('class') || '').slice(0, 60),
            position: getComputedStyle(c).position, ...abs(c), isHeading: /^H[1-4]$/.test(c.tagName) ? c.tagName.toLowerCase() : null,
            heading: txt(hd), headingTag: hd ? hd.tagName.toLowerCase() : null, kids: c.children.length,
            parts: level < 2 && abs(c).height > 0.3 * mainH && c.children.length >= 1 ? expand(c, 0, level + 1) : undefined }
        })
      }
      const unitEls = []
      const collect = (el) => {
        const kids = visibleKids(el, false)
        if (kids.length === 1 && kids[0].tagName !== 'SECTION' && kids[0].children.length) return collect(kids[0])
        for (const c of kids) { if (c.tagName === 'SECTION' || !c.querySelector('section')) unitEls.push(c); else collect(c) }
      }
      collect(main)
      unitEls.forEach((el, i) => { if (units[i] && units[i].height > 0.4 * mainH) units[i].parts = expand(el, 0) })
      const header = document.querySelector('body .sticky.top-0') || document.querySelector('header')
      const footer = main.nextElementSibling
      return {
        finalPath: location.pathname, pageHeight: document.documentElement.scrollHeight,
        main: abs(main), header: header ? abs(header) : null, footer: footer ? abs(footer) : null, units, overlays,
      }
    })
    result.routes[path] = data
    console.log(path, data.units.length, data.pageHeight)
  } catch (e) {
    result.routes[path] = { error: String(e).slice(0, 200) }
    console.log(path, 'ERROR', String(e).slice(0, 120))
  }
}
await browser.close()
writeFileSync(OUT, JSON.stringify(result, null, 1))
