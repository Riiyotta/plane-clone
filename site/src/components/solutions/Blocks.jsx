// Page-builder blocks shared by /solutions/* and /industries/* (measured from plane.so, 1440 + 390).
// Every page is a list of blocks; see ./data/*.js. Colors/type use the homepage tokens (CLONE_SPEC §0).
import { useEffect, useRef, useState } from 'react'
import './solutions.css'

/* ---------- primitives ---------- */

const DARK_BG = 'bg-[#0e0f10]' // dark surface-1 on these pages (oklch .1689) — not the homepage #0f0f10

function tone(dark) {
  return dark
    ? {
        primary: 'text-txt-d-primary',
        secondary: 'text-txt-d-secondary',
        tertiary: 'text-txt-d-tertiary',
        accent: 'text-txt-d-accent',
        border: 'border-dark-subtle',
        btn: { primary: 'btn-primary-dark', secondary: 'btn-secondary-dark' },
      }
    : {
        primary: 'text-txt-primary',
        secondary: 'text-txt-secondary',
        tertiary: 'text-txt-tertiary',
        accent: 'text-txt-accent',
        border: 'border-line-subtle',
        btn: { primary: 'btn-primary', secondary: 'btn-secondary' },
      }
}

const sectionBg = (bg) => (bg === 'dark' ? DARK_BG : bg === 'surface-2' ? 'bg-surface-2' : 'bg-white')

// Text with hard line breaks ("\n" = <br> / separate <p> on the original)
function Lines({ text }) {
  if (!text) return null
  const parts = text.split('\n')
  return parts.map((p, i) => (
    <span key={i}>
      {p}
      {i < parts.length - 1 && <br />}
    </span>
  ))
}

function Btn({ b, dark }) {
  const t = tone(dark)
  return (
    <a className={t.btn[b.variant] || t.btn.primary} href={b.href} {...(b.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {b.label}
    </a>
  )
}

function Img({ img, className = 'w-full', ...rest }) {
  if (!img) return null
  return <img className={className} src={img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy" decoding="async" {...rest} />
}

function Icon({ icon, size = 20 }) {
  if (!icon) return null
  if (icon.img) return <img src={icon.img} alt="" width={size} height={size} />
  return <span className="block" style={{ width: size, height: size }} dangerouslySetInnerHTML={{ __html: icon.svg }} />
}

function Eyebrow({ children, className = '' }) {
  return <div className={`sol-label inline-flex uppercase ${className}`}>{children}</div>
}

function ChevronRight({ size = 16, className = '' }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function ChevronDown({ className = '' }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

/* ---------- section header (center / split / left) ---------- */

function SectionHeader({ h, dark }) {
  if (!h) return null
  const t = tone(dark)
  const body = h.body ? <div className={`font-inter text-500 font-430 ${t.secondary}`}><Lines text={h.body} /></div> : null
  if (h.layout === 'split') {
    return (
      <div className="flex flex-col gap-6">
        <div className="grid items-start gap-2 lg:grid-cols-2 lg:gap-20">
          <h2 className={`h2 w-full ${t.primary}`}><Lines text={h.title} /></h2>
          <div className="lg:mt-4">{body}</div>
        </div>
      </div>
    )
  }
  const center = h.layout === 'center'
  return (
    <div className={`flex flex-col gap-6 ${center ? 'mx-auto max-w-[700px] items-center text-center' : 'max-w-[828px] items-start text-left'}`}>
      {h.eyebrow && <Eyebrow className={t.accent}>{h.eyebrow}</Eyebrow>}
      <div className={`flex w-full flex-col gap-2 self-stretch ${center ? 'items-center text-center' : 'items-start text-left'}`}>
        <h2 className={`h2 w-full ${t.primary}`}><Lines text={h.title} /></h2>
        {h.bodyWrap && <div>{body}</div>}
      </div>
      {h.buttons && (
        <div className="flex flex-wrap justify-center gap-4">
          {h.buttons.map((b) => <Btn key={b.label} b={b} dark={dark} />)}
        </div>
      )}
    </div>
  )
}

/* ---------- hero ---------- */

function Hero({ b }) {
  const t = tone(b.dark)
  const inner = (
    <div className="py-12 md:py-16">
      <div className="container-page">
        <div className="flex flex-col items-center gap-16">
          <div className="flex w-full max-w-[900px] flex-col items-center">
            <div className="flex flex-col items-center gap-10 text-center">
              <div className="flex flex-col items-center gap-4">
                <Eyebrow className={b.eyebrowTone === 'accent' ? t.accent : t.primary}>{b.eyebrow}</Eyebrow>
                <h1 className={`h1 ${t.primary}`}><Lines text={b.title} /></h1>
                <div className={`font-inter text-600 font-430 ${t.secondary}`}>
                  {b.subColor ? <span style={{ color: b.subColor }}><Lines text={b.sub} /></span> : <Lines text={b.sub} />}
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {b.buttons.map((x) => <Btn key={x.label} b={x} dark={b.dark} />)}
              </div>
            </div>
          </div>
          <div className="w-full">
            <Img img={b.image} loading="eager" />
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className={b.dark ? DARK_BG : 'bg-white'}>
      {b.bg ? <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${b.bg})` }}>{inner}</div> : <div>{inner}</div>}
    </div>
  )
}

/* ---------- logo cloud ---------- */
// Desktop: label + 6 logos (live site cycles logos with a staggered slide/fade — left to Animation).
// Mobile: horizontal marquee strip (live site scrolls it — left to Animation; rendered static here).
function Logos({ b }) {
  return (
    <div className="bg-white py-5 md:py-16">
      <div className="container-page">
        <div className="hidden grid-cols-7 items-center lg:grid">
          <div className="whitespace-nowrap">
            <div className="font-inter text-400 font-430 text-txt-primary"><Lines text={b.label} /></div>
          </div>
          {b.logos.map((l, i) => (
            <div key={i} className="flex items-center justify-center" data-logo-slot={i}>
              <div className="relative flex items-center justify-center overflow-hidden">
                <div className="max-h-12 w-auto">
                  <img className="max-h-12 w-auto object-fill" src={l.src} alt={l.alt} width="120" height="100" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="border border-transparent lg:hidden">
          <div className="group relative flex flex-row gap-2 overflow-x-hidden" aria-label="Customer logos" role="marquee" data-marquee>
            {[0, 1].map((copy) => (
              <div key={copy} className="z-[1] flex min-w-full flex-none flex-row items-center gap-2" aria-hidden={copy === 1 || undefined}>
                {b.marquee.map((l, i) => (
                  <div key={i} className="flex h-10 flex-shrink-0 items-center justify-center px-8">
                    <img className="max-h-8 w-auto object-contain" src={l.src} alt={copy ? '' : l.alt} width="100" height="32" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- tabs (auto-advance 6000ms while in view; click resets) ---------- */

const TAB_MS = 6000
const TICK_MS = 50

function Tabs({ b }) {
  const dark = b.bg === 'dark'
  const t = tone(dark)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0) // 0..1
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const elapsed = useRef(0)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting))
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let last = Date.now()
    const id = setInterval(() => {
      const now = Date.now()
      elapsed.current += now - last
      last = now
      if (elapsed.current >= TAB_MS) {
        elapsed.current = 0
        setActive((a) => (a + 1) % b.tabs.length)
        setProgress(0)
      } else setProgress(elapsed.current / TAB_MS)
    }, TICK_MS)
    return () => clearInterval(id)
  }, [inView, active, b.tabs.length])

  const select = (i) => {
    elapsed.current = 0
    setProgress(0)
    setActive(i)
  }

  return (
    <div ref={ref} className={`py-12 md:py-16 ${sectionBg(b.bg)}`}>
      <div className="container-page">
        <div className="flex flex-col gap-10">
          <SectionHeader h={b.header} dark={dark} />
          <div className="lg:space-y-10">
            <div className="relative hidden w-full lg:block">
              <div className="invisible"><Img img={b.tabs[0].image} alt="" /></div>
              <div className="absolute inset-0 flex w-full items-center justify-center overflow-hidden">
                {b.tabs.map((tab, i) => (
                  <div key={i} className={`absolute inset-0 flex w-full items-center object-cover transition-opacity duration-300 ${i === active ? 'z-10 opacity-100' : 'opacity-0'}`}>
                    <Img img={tab.image} />
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
              {b.tabs.map((tab, i) => {
                const on = i === active
                return (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => select(i)}
                      className={`relative flex w-full cursor-pointer flex-col gap-1.5 border-t pt-4 text-left ${on ? 'mb-1.5' : ''} ${on ? (dark ? 'border-txt-d-primary' : 'border-txt-primary') : t.border}`}
                    >
                      {on && <div className={`absolute left-0 top-0 h-[2px] w-full origin-left ${dark ? 'bg-inverse-dark' : 'bg-inverse'}`} style={{ transform: `scaleX(${progress})` }} />}
                      <div className={`font-inter text-600 font-570 ${on ? t.primary : t.tertiary}`}><Lines text={tab.title} /></div>
                      <div className={`font-inter text-400 font-430 ${on ? t.secondary : t.tertiary}`}>
                        <ul className="flex flex-col gap-2"><li className="flex items-start gap-3"><div><p><Lines text={tab.body} /></p></div></li></ul>
                      </div>
                    </button>
                    {on && <div className="lg:hidden"><Img img={tab.image} /></div>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- alternating feature rows ---------- */

function Rows({ b }) {
  const dark = b.bg === 'dark'
  const t = tone(dark)
  return (
    <div className={`py-12 md:py-16 ${sectionBg(b.bg)}`}>
      <div className="container-page">
        <div className="flex flex-col gap-11">
          <SectionHeader h={b.header} dark={dark} />
          <div className="flex flex-col gap-16 md:gap-32">
            {b.rows.map((r, i) => (
              <div key={i} className="grid grid-cols-1 items-center gap-10 md:gap-20 lg:grid-cols-2">
                <div className={`flex h-full flex-col justify-between gap-4 ${r.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-4">
                      {r.eyebrow && <Eyebrow className={t.accent}>{r.eyebrow}</Eyebrow>}
                      <div className="flex flex-col gap-3">
                        <h3 className={`sol-heading sol-h3 ${t.primary}`}><Lines text={r.title} /></h3>
                        <div className={`font-inter text-500 font-430 ${t.secondary}`}><Lines text={r.body} /></div>
                      </div>
                    </div>
                    {r.button && (
                      <div className="flex flex-wrap items-center gap-2"><Btn b={r.button} dark={dark} /></div>
                    )}
                  </div>
                  <ul className="flex flex-col gap-6">
                    {r.bullets.map((x, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className={`shrink-0 ${t.primary}`}><Icon icon={x.icon} /></span>
                        <div className={`font-inter text-500 font-430 ${t.primary}`}>
                          {x.strong && <strong className="font-bold">{x.strong}</strong>}
                          {x.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={r.reverse ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="relative overflow-hidden"><div className="w-full"><Img img={r.image} /></div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- 3-col image cards ---------- */

function Cards({ b }) {
  const dark = b.bg === 'dark'
  const t = tone(dark)
  const grid = (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {b.cards.map((c, i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="relative overflow-hidden"><div className="w-full"><Img img={c.image} /></div></div>
          <div className="flex flex-col gap-1.5">
            <div className={`font-inter text-500 font-570 ${t.primary}`}><Lines text={c.title} /></div>
            <div className={`font-inter text-400 font-430 ${t.tertiary}`}><Lines text={c.body} /></div>
            {c.link && (
              <div className="flex flex-wrap items-center gap-2">
                {c.link.style === 'sm' ? (
                  <a className={`font-satoshi text-[14px] font-medium leading-5 hover:underline ${t.primary}`} href={c.link.href}>{c.link.label}</a>
                ) : (
                  <a className={`inline-flex items-center whitespace-nowrap rounded-lg font-inter text-500 font-medium hover:underline ${t.primary}`} href={c.link.href}>{c.link.label}</a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
  return (
    <div className={`py-12 md:py-16 ${sectionBg(b.bg)}`}>
      <div className="container-page">
        <div className="flex flex-col gap-12">
          <SectionHeader h={b.header} dark={dark} />
          {grid}
        </div>
      </div>
    </div>
  )
}

/* ---------- dark 2-up bento ---------- */

function Bento({ b }) {
  const dark = b.bg === 'dark'
  const t = tone(dark)
  return (
    <div className={`py-12 md:py-16 ${sectionBg(b.bg)}`}>
      <div className="container-page">
        <div className="flex flex-col gap-10">
          <SectionHeader h={b.header} dark={dark} />
          <div className="flex flex-col gap-6">
            <div>
              <div className="grid gap-6 md:grid-cols-2">
                {b.cards.map((c, i) => {
                  const bleed = c.imageLayout === 'bleed'
                  return (
                    <div key={i}>
                      <div className={`h-full overflow-hidden rounded-xl border-[0.5px] ${dark ? 'border-dark-subtle bg-dark-card' : 'border-line-subtle bg-layer-1'}`}>
                        <div className="flex h-full flex-col">
                          <div className={`p-4 py-4 md:p-8 md:py-7 ${bleed ? 'min-h-0 flex-1' : ''}`}>
                            <div className="flex flex-col items-start gap-4">
                              <div className="flex flex-col gap-1.5">
                                <div className={`font-inter text-600 font-570 ${t.primary}`}><Lines text={c.title} /></div>
                                <div className={`font-inter text-400 font-430 ${t.secondary}`}><Lines text={c.body} /></div>
                              </div>
                            </div>
                          </div>
                          <div className={bleed ? 'mt-auto pl-4 md:pl-8' : 'px-4 pb-4 md:px-8 md:pb-7'}>
                            <Img img={c.image} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- testimonial + story card ---------- */

function Testimonial({ b }) {
  return (
    <div className={`py-12 md:py-16 ${sectionBg(b.bg)}`}>
      <div className="container-page">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
          <div className="h-full min-h-0 md:col-span-2">
            <div className="flex h-full min-h-0 flex-col gap-6 rounded-xl border border-line-subtle bg-surface-2 p-6">
              <span className="block h-6 w-[30px] text-[#cfd2d3]" dangerouslySetInnerHTML={{ __html: b.quoteIcon }} />
              <h5 className="sol-heading sol-h5 text-txt-primary"><Lines text={b.quote} /></h5>
              <div className="mt-auto flex items-center gap-10 pt-6">
                <div className="flex flex-col gap-1">
                  <div className="font-inter text-400 font-570 text-txt-primary">{b.name}</div>
                  <div className="font-inter text-300 font-430 text-txt-tertiary">{b.company}</div>
                </div>
                <div className="border-l border-line-subtle pl-6">
                  <div className="relative h-6 max-w-[96px]"><Img img={b.logo} /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full min-h-0 md:col-span-1">
            <a
              href={b.story.href}
              className="flex h-full min-h-0 flex-col gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-6 transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105"
              style={{ backgroundImage: `url(${b.story.bg})` }}
            >
              <div className="relative h-6 max-w-[96px]"><Img img={b.story.logo} /></div>
              <div className="mt-auto space-y-5">
                <div className="font-inter text-600 font-430 text-txt-on-color"><Lines text={b.story.title} /></div>
                {b.story.cta && (
                  <div className="font-inter text-500 font-430 text-txt-on-color">
                    <div className="flex items-center gap-1">{b.story.cta}<ChevronRight /></div>
                  </div>
                )}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- industries: showcase cards with "Features used" + tooltips ---------- */

function Feature({ f }) {
  const [hover, setHover] = useState(false)
  return (
    <li className="group relative flex max-w-full cursor-default items-center gap-2" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <button type="button" className="flex cursor-default items-center gap-2 text-left" onFocus={() => setHover(true)} onBlur={() => setHover(false)}>
        <span className="relative shrink-0">
          <span className="text-txt-primary"><Icon icon={f.icon} size={18} /></span>
        </span>
        <div className="font-inter text-400 font-430 text-txt-primary"><span className="group-hover:underline">{f.label}</span></div>
      </button>
      {/* Live site positions this `fixed` at the icon's left, 6px above the row; absolute is visually equivalent */}
      <div
        role="tooltip"
        className={`absolute bottom-full left-0 z-50 mb-1.5 w-64 max-w-[calc(100vw-16px)] rounded-lg bg-inverse p-3 shadow-lg transition-opacity duration-200 ${hover ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      >
        <div className="font-inter text-300 font-430 text-white"><Lines text={f.tip} /></div>
      </div>
    </li>
  )
}

function Showcase({ b }) {
  return (
    <div className={`py-12 md:py-16 ${sectionBg(b.bg)}`}>
      <div className="container-page">
        <div className="flex flex-col gap-11">
          <SectionHeader h={b.header} />
          <div className="flex flex-col gap-10 md:gap-12">
            {b.cards.map((c, i) => (
              <div key={i} className="overflow-hidden rounded-2xl bg-white shadow">
                <div className="grid grid-cols-1 gap-8 p-8 md:gap-10 md:p-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-center lg:gap-12 lg:p-12">
                  <div className="flex min-h-0 flex-col gap-8 lg:order-1">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4">
                        <Eyebrow className="text-txt-accent">{c.eyebrow}</Eyebrow>
                        <div className="flex flex-col gap-3">
                          <h4 className="sol-heading sol-h4 text-txt-primary"><Lines text={c.title} /></h4>
                          <div className="font-inter text-500 font-430 text-txt-secondary"><Lines text={c.body} /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="min-h-0 w-full lg:order-2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                      <Img img={c.image} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="border-t border-line-subtle px-8 py-6 md:px-10 md:py-7 lg:px-12 lg:py-8">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
                    <span className="sol-label shrink-0 !tracking-normal text-txt-accent">{c.featuresLabel}</span>
                    <ul className="flex flex-wrap gap-x-8 gap-y-4 lg:flex-1 lg:justify-between">
                      {c.features.map((f, j) => <Feature key={j} f={f} />)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- FAQ accordion (one open at a time; first open by default) ---------- */

function Faq({ b }) {
  const [open, setOpen] = useState(0)
  return (
    <div className={`py-12 md:py-16 ${sectionBg(b.bg)}`}>
      <div className="container-page">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <SectionHeader h={b.header} />
          </div>
          <div className="flex flex-col">
            {b.items.map((it, i) => {
              const on = i === open
              return (
                <div key={i} className="border-t border-line-subtle">
                  <button type="button" onClick={() => setOpen(i)} aria-expanded={on} className="flex w-full cursor-pointer items-start justify-between gap-4 py-4 text-left transition-colors focus:outline-none">
                    <span className="flex-1">
                      <div className="font-inter text-600 font-medium text-txt-primary">{it.q}</div>
                    </span>
                    {on ? <ChevronDown className="h-5 w-5 flex-shrink-0 text-txt-tertiary" /> : <ChevronRight size={24} className="h-5 w-5 flex-shrink-0 text-txt-tertiary" />}
                  </button>
                  <div className={`grid transition-all duration-300 ease-out ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-4">
                        <div className="font-inter text-400 font-430 text-txt-secondary"><Lines text={it.a} /></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- CTAs ---------- */

function Cta({ b }) {
  return (
    <section aria-label="Call to action" className={`${DARK_BG} bg-[url('/assets/solutions/cta-bg.webp')] bg-cover bg-center bg-no-repeat py-12 md:py-16`}>
      <div className="container-page">
        <div className="flex flex-col items-start space-y-6 text-left lg:items-center lg:space-y-10 lg:text-center">
          <div className="space-y-2">
            <h2 className="h2 text-txt-d-primary">
              <span className="h1 text-[#f5fbff]"><Lines text={b.title} /></span>
            </h2>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 lg:justify-center">
            {b.buttons.map((x) => <Btn key={x.label} b={x} dark />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaBox({ b }) {
  return (
    <section aria-label="Call to action" className="py-12 md:py-16">
      <div className="container-page">
        <div className={`rounded-2xl ${DARK_BG} bg-cover bg-center bg-no-repeat px-5 py-10 md:px-12`} style={{ backgroundImage: `url(${b.bg})` }}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-20">
              <div className="space-y-4">
                <h4 className="sol-heading sol-h4 text-txt-d-primary"><Lines text={b.title} /></h4>
                <div className="font-inter text-500 font-430 text-txt-d-secondary"><Lines text={b.body} /></div>
              </div>
              <div className="flex flex-wrap gap-4">
                {b.buttons.map((x) => <Btn key={x.label} b={x} dark />)}
              </div>
            </div>
            <div className="text-txt-d-primary">
              <ul className="grid grid-cols-1 gap-6 font-inter md:grid-cols-2">
                {b.bullets.map((x, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-txt-d-primary"><Icon icon={x.icon} /></span>
                    <div><p>{x.text}</p></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- index pages (/solutions, /industries) ---------- */

function IndexCards({ b }) {
  return (
    <div className={`py-12 md:py-16 ${sectionBg(b.bg)}`}>
      <div className="container-page">
        <div className="flex flex-col gap-10">
          <SectionHeader h={b.header} />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {b.cards.map((c, i) => (
              <div key={i} className="flex flex-col justify-between gap-16 rounded-xl border border-line-subtle bg-layer-1 p-6 transition-colors duration-150">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#cfd2d3]">
                  <span className="block h-6 w-6 text-txt-primary" dangerouslySetInnerHTML={{ __html: c.icon }} />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="font-inter text-600 font-570 text-txt-primary">{c.title}</div>
                    <div className="font-inter text-400 font-430 text-txt-tertiary"><Lines text={c.body} /></div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a className="inline-flex items-center whitespace-nowrap rounded-lg font-inter text-[14px] font-medium leading-[21px] text-txt-primary hover:underline" href={c.link.href}>{c.link.label}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- renderer ---------- */

const BLOCKS = {
  hero: Hero,
  logos: Logos,
  tabs: Tabs,
  rows: Rows,
  cards: Cards,
  bento: Bento,
  testimonial: Testimonial,
  showcase: Showcase,
  faq: Faq,
  cta: Cta,
  ctaBox: CtaBox,
  index: IndexCards,
}

export default function SolutionsPage({ data }) {
  return (
    <>
      {data.blocks.map((b, i) => {
        const C = BLOCKS[b.type]
        return C ? <C key={i} b={b} /> : null
      })}
    </>
  )
}
