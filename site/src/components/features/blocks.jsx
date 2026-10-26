// Feature-page blocks — mirrors the plane.so CMS block library (v4 feature pages).
import { useState } from 'react'
import {
  ToneContext, useDark, useColor, Heading, Body, Eyebrow, Button, Buttons, Img, ImgPair, LucideIcon, ICON, Shell,
} from './primitives.jsx'

/* ---------- Hero ---------- */
export function Hero({ variant = 'center', bgImage, eyebrow, title, desc, buttons, img, imgMobile }) {
  if (variant === 'split') {
    return (
      <div className="bg-white">
        <div className="py-12 md:py-16">
          <div className="container-page">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col">
                <div className="flex flex-col items-start gap-10 text-left">
                  <div className="flex flex-col items-start gap-4">
                    <Eyebrow text={eyebrow} />
                    <Heading as="h1" html={title} />
                    <Body size="lg" html={desc} />
                  </div>
                  <Buttons items={buttons} className="justify-start" />
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <ImgPair img={img} imgMobile={imgMobile} eager />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white">
      <div
        className={bgImage ? 'bg-cover bg-center bg-no-repeat' : undefined}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
      >
        <div className="py-12 md:py-16">
          <div className="container-page">
            <div className="flex flex-col items-center gap-16">
              <div className="flex w-full max-w-[900px] flex-col items-center">
                <div className="flex flex-col items-center gap-10 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <Eyebrow text={eyebrow} />
                    <Heading as="h1" html={title} />
                    <Body size="lg" html={desc} />
                  </div>
                  <Buttons items={buttons} className="justify-center" />
                </div>
              </div>
              <div className="w-full">
                <ImgPair img={img} imgMobile={imgMobile} eager />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Customer logo strip ---------- */
export function LogoStrip({ text, logos, marquee }) {
  return (
    <div className="bg-white py-5 md:py-16">
      <div className="container-page">
        <div className="hidden grid-cols-7 items-center lg:grid">
          <div className="whitespace-nowrap">
            <Body size="sm" color="primary" html={text} />
          </div>
          {logos.map((l, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="relative flex items-center justify-center overflow-hidden">
                <div className="max-h-12 w-auto">
                  <img src={l.src} alt={l.alt} width={l.w} height={l.h} className="max-h-12 w-auto object-fill" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Mobile: marquee row (static here — motion flagged for Animation) */}
        <div className="border border-transparent lg:hidden" id="logo-cloud">
          <div className="group relative flex flex-row gap-2 overflow-x-hidden" aria-label="Customer logos" role="marquee">
            <div className="z-[1] flex flex-none flex-row items-center gap-2" data-marquee-track>
              {marquee.map((l, i) => (
                <div key={i} className="flex-shrink-0 box-border">
                  <div className="flex h-10 items-center justify-center px-8">
                    <img src={l.src} alt={l.alt} width={l.w} height={l.h} className="max-h-8 w-auto object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Section header (5 CMS variants) ---------- */
export function SectionHeader({ variant = 'center', eyebrow, title, titleRaw, desc, buttons }) {
  const h2 = <Heading as="h2" html={title} wrap={!titleRaw} className="w-full" />
  const descEl = desc !== undefined ? <div><Body html={desc} /></div> : null
  if (variant === 'split') {
    return (
      <div className="flex flex-col gap-6">
        <Eyebrow text={eyebrow} />
        <div className="flex grid items-start gap-2 lg:grid-cols-2 lg:gap-20">
          {h2}
          {desc !== undefined && <div className="lg:mt-4"><Body html={desc} /></div>}
        </div>
        <Buttons items={buttons} className="justify-start" />
      </div>
    )
  }
  if (variant === 'left') {
    return (
      <div className="flex max-w-[828px] flex-col items-start gap-6 text-left">
        <Eyebrow text={eyebrow} />
        <div className="flex w-full flex-col items-start gap-2 self-stretch text-left">
          {h2}
          {descEl}
        </div>
        <Buttons items={buttons} className="justify-start" />
      </div>
    )
  }
  if (variant === 'oldCenter' || variant === 'oldLeft') {
    const center = variant === 'oldCenter'
    return (
      <div className={`flex flex-col gap-6 ${center ? 'items-center text-center' : 'items-start text-left'}`}>
        <Eyebrow text={eyebrow} />
        <div className="flex flex-col gap-2">
          <Heading as="h2" html={title} wrap={!titleRaw} />
          {descEl}
        </div>
        <Buttons items={buttons} className={center ? 'justify-center' : 'justify-start'} />
      </div>
    )
  }
  return (
    <div className="mx-auto flex max-w-[700px] flex-col items-center gap-6 text-center">
      <Eyebrow text={eyebrow} />
      <div className="flex w-full flex-col items-center gap-2 self-stretch text-center">
        {h2}
        {descEl}
      </div>
      <Buttons items={buttons} className="justify-center" />
    </div>
  )
}

/* ---------- Three-column statement columns with left rule ---------- */
export function StatCols({ items }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <div key={i} className="flex flex-col gap-20 border-l border-line-subtle p-6">
          <div className="flex flex-col gap-3">
            <Eyebrow text={it.eyebrow} />
            <Body size="lg" color="primary" weight="semibold" html={it.title} />
          </div>
          <div className="flex flex-col gap-4">
            <Body size="sm" color="tertiary" html={it.desc} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------- Image + title + text grid (3 columns) ---------- */
export function ImageGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {items.map((it, i) => (
        <div key={i} className="flex flex-col gap-3">
          <div className="relative overflow-hidden">
            <div className="w-full">
              <ImgPair img={it.img} imgMobile={it.imgMobile} />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Body color="primary" weight="semibold" html={it.title} />
            <Body size="sm" color="tertiary" html={it.desc} />
            {it.links && it.links.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {it.links.map((l) => <Button key={l.label} {...l} kind="link" />)}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------- Bento rows ---------- */
function BentoCardV4({ textCls, imgCls, title, desc, btns, img, imgMobile }) {
  const dark = useDark()
  return (
    <div className={`h-full overflow-hidden rounded-xl border-[0.5px] ${dark ? 'border-dark-subtle bg-dark-card' : 'border-line-subtle bg-layer-1'}`}>
      <div className="h-full">
        <div className="flex h-full flex-col">
          <div className={textCls}>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col gap-1.5">
                <Body size="lg" color="primary" weight="semibold" html={title} />
                <Body size="sm" html={desc} />
              </div>
              <Buttons items={btns} />
            </div>
          </div>
          {imgCls !== undefined && (
            <div className={imgCls}>
              <ImgPair img={img} imgMobile={imgMobile} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function BentoCardOld({ inner, title, desc, btns, img, imgMobile }) {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-line-subtle bg-surface-2 p-4 md:p-8">
      <div className={inner}>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <Heading as="h6" html={title} wrap={false} />
            <Body size="sm" html={desc} />
          </div>
          <Buttons items={btns} />
        </div>
        <ImgPair img={img} imgMobile={imgMobile} />
      </div>
    </div>
  )
}

export function Bento({ rows }) {
  return (
    <div className="flex flex-col gap-6">
      {rows.map((row, i) => (
        <div key={i}>
          <div className={row.grid}>
            {row.cards.map((c, j) => (
              <div key={j}>{c.style === 'old' ? <BentoCardOld {...c} /> : <BentoCardV4 {...c} />}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------- Tabs ---------- */
// Static states only. Live tabs auto-advance every 6s with a linear scaleX progress bar — flagged for Animation.
function TabBar() {
  return <div className="absolute left-0 top-0 h-[2px] w-full origin-left bg-[rgba(9,11,11,0.8)]" data-tab-progress />
}

function PaneStack({ items, active, className = '' }) {
  return (
    <div className={`relative hidden w-full lg:block ${className}`}>
      <div className="invisible">
        <ImgPair img={items[0].img} imgMobile={items[0].imgMobile} />
      </div>
      <div className="absolute inset-0 flex w-full items-center justify-center overflow-hidden">
        {items.map((it, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex w-full items-center object-cover transition-opacity duration-300 ${i === active ? 'z-10 opacity-100' : 'opacity-0'}`}
          >
            <ImgPair img={it.img} imgMobile={it.imgMobile} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function TabsTop({ items, grid }) {
  const [active, setActive] = useState(0)
  return (
    <div data-tabs="top">
      {/* live uses space-y-10 (v4 margin-bottom); pane is display:none below lg so no gap there */}
      <PaneStack items={items} active={active} className="lg:mb-10" />
      <div className={grid}>
        {items.map((it, i) => {
          const on = i === active
          return (
            <div key={i} className="space-y-1.5">
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`relative w-full cursor-pointer space-y-1.5 border-t pt-4 text-left ${on ? 'border-txt-primary lg:mb-1.5' : 'border-line-subtle'}`}
              >
                <Body size="lg" color={on ? 'primary' : 'tertiary'} weight="semibold" html={it.title} />
                <Body size="sm" color={on ? 'secondary' : 'tertiary'} html={it.desc} />
                {/* last child: v4 space-y puts margin-bottom on the (absolute) bar, not margin-top on the title */}
                {on && <TabBar />}
              </button>
              {on && (
                <div className="lg:hidden">
                  <ImgPair img={it.img} imgMobile={it.imgMobile} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function TabsSide({ items }) {
  const [active, setActive] = useState(0)
  return (
    <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2" data-tabs="side">
      <div className="flex flex-col gap-8 lg:order-1">
        <div className="flex flex-col">
          {items.map((it, i) => {
            const on = i === active
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`relative w-full cursor-pointer space-y-1.5 border-t py-4 text-left ${on ? 'border-txt-primary' : 'border-line-subtle'}`}
                >
                  <Body size="lg" color={on ? 'primary' : 'tertiary'} weight="semibold" html={it.title} />
                  {on && <Body html={it.desc} />}
                  {on && <TabBar />}
                </button>
                {on && (
                  <div className="pb-4 lg:hidden">
                    <ImgPair img={it.img} imgMobile={it.imgMobile} />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <PaneStack items={items} active={active} className="lg:order-2" />
    </div>
  )
}

/* ---------- Alternating feature rows (h3 + icon bullets) ---------- */
export function FeatureRows({ rows }) {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-1 items-center gap-10 md:gap-20 lg:grid-cols-2">
          <div className={`flex h-full flex-col justify-between gap-4 ${r.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-4">
                <Eyebrow text={r.eyebrow} />
                <div className="flex flex-col gap-3">
                  <Heading as="h3" html={r.title} />
                  <Body html={r.desc} />
                </div>
              </div>
              <Buttons items={r.buttons} />
            </div>
            {r.bullets && r.bullets.length > 0 && (
              <ul className="flex flex-col gap-6">
                {r.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="shrink-0 text-txt-primary">
                      {b.icon ? <img src={b.icon.src} alt={b.icon.alt} width={b.icon.w} height={b.icon.h} /> : null}
                    </span>
                    <Body color="primary" html={b.text} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={r.reverse ? 'lg:order-1' : 'lg:order-2'}>
            <div className="relative overflow-hidden">
              <div className="w-full">
                <ImgPair img={r.img} imgMobile={r.imgMobile} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------- Full-width image ---------- */
export function ImageBlock({ img, imgMobile }) {
  return (
    <div className="w-full">
      <ImgPair img={img} imgMobile={imgMobile} />
    </div>
  )
}

/* ---------- Text-only feature columns (AI page) ---------- */
export function IconFeatures({ items }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className="flex flex-col gap-2">
            <Body size="lg" color="primary" weight="semibold" html={it.title} />
            <Body size="sm" color="tertiary" html={it.desc} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------- Icon cards (bordered, icon box + text) ---------- */
export function IconCards({ items }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <div key={i} className="flex flex-col justify-between gap-16 rounded-xl border border-line-subtle bg-white p-6 transition">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line-strong text-txt-primary"
            dangerouslySetInnerHTML={{ __html: it.svg }}
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Body size="lg" color="primary" weight="semibold" html={it.title} />
              <Body size="sm" color="tertiary" html={it.desc} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

const BLOCKS = {
  header: SectionHeader, statCols: StatCols, imageGrid: ImageGrid, bento: Bento, tabsTop: TabsTop,
  tabsSide: TabsSide, featureRows: FeatureRows, image: ImageBlock, iconFeatures: IconFeatures, iconCards: IconCards,
}

/* ---------- Generic section: header + content blocks ---------- */
export function Section({ bg, py, wrap, blocks }) {
  return (
    <Shell bg={bg} py={py}>
      <div className={wrap}>
        {blocks.map((b, i) => {
          const C = BLOCKS[b.type]
          return C ? <C key={i} {...b} /> : null
        })}
      </div>
    </Shell>
  )
}

/* ---------- Self-host CTA card (dark rounded box) ---------- */
export function SelfHost({ title, desc, buttons, list }) {
  return (
    <section aria-label="Call to action" className="py-12 md:py-16">
      <div className="container-page">
        <ToneContext.Provider value="dark">
          <div className="rounded-2xl bg-[#0e0f10] px-5 py-10 md:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-20">
                <div className="space-y-4">
                  <Heading as="h4" html={title} />
                  <Body html={desc} />
                </div>
                <Buttons items={buttons} />
              </div>
              <div className="text-txt-d-primary">
                <ul className="grid grid-cols-1 gap-6 font-inter text-500 font-normal md:grid-cols-2">
                  {list.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 text-txt-d-primary">
                        <LucideIcon d={ICON.check} size={20} />
                      </span>
                      <div><p>{t}</p></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ToneContext.Provider>
      </div>
    </section>
  )
}

/* ---------- FAQ accordion ---------- */
export function Faq({ header, items }) {
  const [open, setOpen] = useState(0)
  const tertiary = useColor('tertiary')
  return (
    <Shell bg="s1">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <SectionHeader {...header} variant="left" />
        </div>
        <div className="flex flex-col">
          {items.map((it, i) => {
            const on = open === i
            return (
              <div key={i} className="border-t border-line-subtle">
                <button
                  type="button"
                  onClick={() => setOpen(on ? -1 : i)}
                  aria-expanded={on}
                  className={`flex w-full cursor-pointer items-start justify-between gap-4 py-4 text-left transition-colors focus:outline-none ${on ? 'border-line-strong' : ''}`}
                >
                  <span className="flex-1">
                    <Body size="lg" color="primary" weight="medium" html={it.q} />
                  </span>
                  <LucideIcon d={on ? ICON.chevronDown : ICON.chevronRight} className={`h-5 w-5 flex-shrink-0 ${tertiary}`} />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="min-h-0 overflow-hidden">
                    <div className="pb-4">
                      <Body size="sm" html={it.a} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Shell>
  )
}

/* ---------- Dark image CTA banner (shares the homepage CTA background asset) ---------- */
export function CtaBanner({ title, desc, buttons }) {
  return (
    <ToneContext.Provider value="dark">
      <section
        aria-label="Call to action"
        className="bg-[url('/assets/cta-bg.webp')] bg-cover bg-center bg-no-repeat py-12 md:py-16"
      >
        <div className="container-page">
          <div className="flex flex-col items-start space-y-6 text-left lg:items-center lg:space-y-10 lg:text-center">
            <div className="space-y-2">
              <h2 className="h2 text-txt-d-primary md:whitespace-pre-line">
                <span className="h1 text-[#f5fbff]" dangerouslySetInnerHTML={{ __html: `<div>${title}</div>` }} />
              </h2>
              <Body html={desc} />
            </div>
            <Buttons items={buttons} className="w-full items-center justify-start lg:justify-center" />
          </div>
        </div>
      </section>
    </ToneContext.Provider>
  )
}

/* ---------- Legacy feature-page blocks (teamspaces / state-of-projects / delights) ---------- */
export function HeroOld({ variant, bgImage, eyebrow, title, desc, buttons, img, imgMobile }) {
  const text = (
    <div className={`space-y-6 ${variant === 'split' ? 'text-left' : 'text-center'}`}>
      {/* live: inline-flex eyebrow sits in a 20px line box (top offset 5px) */}
      {eyebrow && <div className={`flex h-5 items-end ${variant === 'split' ? 'justify-start' : 'justify-center'}`}><Eyebrow text={eyebrow} /></div>}
      <div className="space-y-4">
        <Heading as="h1" html={title} wrap={false} />
        <Body size="lg" color="primary" html={desc} />
      </div>
      <Buttons items={buttons} className={variant === 'split' ? 'justify-start' : 'justify-center'} />
    </div>
  )
  return (
    <div className="relative isolate py-16">
      {bgImage && (
        <div className="absolute inset-0 top-0 -z-10">
          <img src={bgImage.src} alt={bgImage.alt} className="h-full w-full object-cover" />
        </div>
      )}
      <div className="container-page">
        {variant === 'split' ? (
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {text}
            <ImgPair img={img} imgMobile={imgMobile} eager />
          </div>
        ) : (
          <div className="flex flex-col gap-16">
            {text}
            <ImgPair img={img} imgMobile={imgMobile} eager />
          </div>
        )}
      </div>
    </div>
  )
}

export function FeatureRowOld({ textFirst, textCls, imgCls, eyebrow, title, desc, buttons, img, imgMobile }) {
  const text = (
    <div key="t" className={textCls}>
      <div className="flex flex-col items-start gap-4">
        <Eyebrow text={eyebrow} />
        <div className="flex flex-col gap-2">
          <Heading as="h5" html={title} wrap={false} />
          <Body html={desc} />
        </div>
        <Buttons items={buttons} />
      </div>
    </div>
  )
  const image = (
    <div key="i" className={imgCls}>
      <ImgPair img={img} imgMobile={imgMobile} />
    </div>
  )
  return (
    <Shell bg="none" py="old">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">{textFirst ? [text, image] : [image, text]}</div>
        </div>
      </div>
    </Shell>
  )
}

export function CtaCardOld({ title, desc, buttons }) {
  return (
    <Shell bg="none" py="old">
      <div className="relative z-0 flex flex-col gap-8 overflow-hidden rounded-2xl bg-[#001b29] p-8 md:p-12">
        <div className="absolute left-0 top-0 z-0 h-full w-full">
          <img src="/assets/cta-bg.webp" alt="Plane" className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 flex flex-col gap-4 text-center">
          <h4
            className="font-satoshi font-430 text-m-900 text-txt-on-color md:whitespace-pre-line md:text-900"
            style={{ fontFeatureSettings: '"cv05", "cv08" 0, "ss02", "ss03"' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {desc !== undefined && (
            <div
              className="font-inter text-500 font-430 text-[#909598] md:whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
        </div>
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
          {buttons.map((b) => <Button key={b.label} {...b} />)}
        </div>
      </div>
    </Shell>
  )
}

export function AccordionOld({ header, items }) {
  const [active, setActive] = useState(0)
  return (
    <div className="container-page">
      <div className="flex flex-col gap-12 py-16">
        <SectionHeader {...header} />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex w-full flex-col">
            {items.map((it, i) => {
              const on = i === active
              return (
                <div
                  key={i}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(i)}
                  className={`flex flex-col items-start gap-2 border-t py-4 ${on ? 'border-inverse' : 'group cursor-pointer border-line-n2'}`}
                >
                  <div className="flex w-full items-start gap-3 text-left text-txt-primary">
                    <div className="flex w-full flex-col">
                      <Body size="lg" color="primary" weight="semibold" html={it.title} />
                      <div className={`grid w-full transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className={`flex min-h-0 flex-col gap-4 overflow-hidden ${on ? 'pt-2' : ''}`}>
                          <Body size="sm" html={it.desc} />
                          <div className="w-full lg:hidden">
                            <ImgPair img={it.img} imgMobile={it.imgMobile} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded hover:bg-layer-1">
                      <LucideIcon d={ICON.chevronDown} className={`h-4 w-4 text-txt-primary ${on ? 'hidden rotate-180' : 'hidden group-hover:block'}`} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <PaneStack items={items} active={active} />
        </div>
      </div>
    </div>
  )
}
