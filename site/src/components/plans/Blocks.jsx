// CMS-style blocks shared by the plans pages (pro, business, enterprise-grid, self-hosted, open-source, ...).
// Each block mirrors one plane.so page-builder block; pages pass data objects.
import { useEffect, useRef, useState } from 'react'
import { A, Btn, Buttons, Container, Eyebrow, Heading, Img, Lines, Section, SectionHeader, Svg, Text, cx } from './ui.jsx'
import { LUCIDE, NO, YES } from './icons.jsx'

/* ---------------------------------------------------------------- Hero (centered) */
// eyebrow / h1 / sub / buttons, then an optional full-width screenshot (gap-16)
export function HeroCentered({ eyebrow, title, sub, buttons, image, maxW = 'max-w-[900px]' }) {
  return (
    <div className="pl-bg-surface-1">
      <div className="py-12 md:py-16">
        <Container>
          <div className="flex flex-col items-center gap-16">
            <div className={cx('flex w-full flex-col items-center', maxW)}>
              <div className="flex flex-col items-center gap-10 text-center">
                <div className="flex flex-col items-center gap-4">
                  <Eyebrow>{eyebrow}</Eyebrow>
                  <Heading size={1} text={title} className="!w-auto" />
                  <Text size="lg" text={sub} />
                </div>
                <Buttons items={buttons} className="flex flex-wrap justify-center gap-4" />
              </div>
            </div>
            {image && (
              <div className="w-full">
                <Img {...image} eager />
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- Hero (split: text left, image right) */
export function HeroSplit({ eyebrow, title, sub, buttons, image, dark, bg = 'surface-1', gridClass = 'grid grid-cols-1 items-center gap-12 lg:grid-cols-2' }) {
  return (
    <div className={cx(dark && 'pl-dark', `pl-bg-${bg}`)}>
      <div className="py-12 md:py-16">
        <Container>
          <div className={gridClass}>
            <div className="flex flex-col">
              <div className="flex flex-col items-start gap-10 text-left">
                <div className="flex flex-col items-start gap-4">
                  <Eyebrow>{eyebrow}</Eyebrow>
                  <Heading size={1} as={1} text={title} className="!w-auto" />
                  <Text size="lg" text={sub} />
                </div>
                <Buttons items={buttons} className="flex flex-wrap justify-start gap-4" />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Img {...image} eager />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- Logos */
const LOGOS = [
  ['Sony', 'sony'], ['Aramco', 'aramco'], ['Dolby', 'dolby'], ['Accenture', 'accenture'], ['Amazon', 'amazon'], ['Essor', 'essor'],
  ['40AU', 'forty-au'], ['Hypersonica', 'hypersonica'], ['SSI', 'ssi'], ['Ruby Labs', 'ruby-labs'], ['République Française', 'republique-francaise'], ['Government of Lithuania', 'gov-of-lithuania'],
  ['Mirador Therapeutics', 'mirador-therapeutics'], ['Texelis', 'texelis'], ['OptiGRÜN', 'optigrun'], ['Stark Bank', 'starkbank'], ['Datum', 'datum'], ['Power Integrations', 'power-integration'],
]
// 18-logo grid, 3 cols / 6 cols, max-w-6xl (homepage logo files in /assets)
export function Logos() {
  return (
    <section className="py-12 md:py-16" id="logos" aria-label="Logos">
      <Container>
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center gap-2 gap-y-4 md:grid-cols-6 md:gap-6 md:gap-y-8">
          {LOGOS.map(([alt, f]) => (
            <div key={f} className="flex items-center justify-center">
              <img className="max-h-14 w-auto object-contain" src={`/assets/${f}.svg`} alt={alt} width="190" height="56" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ---------------------------------------------------------------- Card grid */
// header + grid of image cards (title semibold, body-sm tertiary, optional link)
export function CardGrid({ bg = 'surface-1', dark, header, cards, cols = 'lg:grid-cols-3', gap = 'gap-12' }) {
  return (
    <Section bg={bg} dark={dark}>
      <div className={cx('flex flex-col', gap)}>
        <SectionHeader {...header} />
        <div className={cx('grid grid-cols-1 gap-8', cols)}>
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="relative overflow-hidden">
                <div className="w-full">
                  <Img {...c.image} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Text color="primary" weight="semibold" text={c.title} />
                <Text size="sm" color="tertiary" text={c.body} list />
                {c.link && (
                  <div className="flex flex-wrap items-center gap-2">
                    {c.link.small ? (
                      <a className="text-[14px] font-medium leading-5 pl-c-primary hover:underline" href={c.link.href}>
                        {c.link.label}
                      </a>
                    ) : (
                      <Btn variant="link" {...c.link} />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- Progress timer */
// plane.so auto-advances tab blocks: 6s per item, starts when the block scrolls into view,
// a click selects that item and restarts its bar. The bar is scaleX(progress).
const STEP_MS = 6000
function useAutoProgress(count) {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(false)
  const start = useRef(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  useEffect(() => {
    if (!visible) return
    let raf
    start.current = performance.now() - progress * STEP_MS
    const tick = (t) => {
      const p = (t - start.current) / STEP_MS
      if (p >= 1) {
        setActive((a) => (a + 1) % count)
        start.current = t
        setProgress(0)
      } else setProgress(p)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, active, count])
  const select = (i) => {
    setActive(i)
    setProgress(0)
    start.current = performance.now()
  }
  return { ref, active, progress, select }
}

function Crossfade({ items, active, className }) {
  // invisible first image sizes the box; layers cross-fade with opacity 300ms
  return (
    <div className={cx('relative w-full', className)}>
      <div className="invisible">
        <Img {...items[0].image} />
      </div>
      <div className="absolute inset-0 flex w-full items-center justify-center overflow-hidden">
        {items.map((it, i) => (
          <div
            key={i}
            className={cx(
              'absolute inset-0 flex w-full items-center object-cover transition-opacity duration-300',
              i === active ? 'z-10 opacity-100' : 'opacity-0'
            )}
          >
            <Img {...it.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- Progress accordion (vertical) */
// header (split) + list of items left/right of a cross-fading screenshot.
// imageSide: 'right' (list lg:order-1) | 'left'
export function ProgressAccordion({ bg = 'surface-2', dark, header, items, imageSide = 'right' }) {
  const { ref, active, progress, select } = useAutoProgress(items.length)
  return (
    <Section bg={bg} dark={dark}>
      <div className="flex flex-col gap-11" ref={ref}>
        <SectionHeader {...header} />
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className={cx('flex flex-col gap-8', imageSide === 'right' ? 'lg:order-1' : 'lg:order-2')}>
            <div className="flex flex-col">
              {items.map((it, i) => {
                const on = i === active
                return (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => select(i)}
                      className={cx('relative flex w-full cursor-pointer flex-col gap-1.5 border-t py-4 text-left', on ? 'pl-bd-inverse' : 'pl-bd-subtle')}
                    >
                      {on && (
                        <div className="pl-bar-inverse absolute left-0 top-0 h-[2px] w-full origin-left" style={{ transform: `scaleX(${progress})` }} />
                      )}
                      <Text size="lg" weight="semibold" color={on ? 'primary' : 'tertiary'} text={it.title} />
                      {on && <Text color="secondary" text={it.body} list />}
                    </button>
                    {on && (
                      <div className="pb-4 lg:hidden">
                        <Img {...it.image} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
          <Crossfade
            items={items}
            active={active}
            className={cx('hidden lg:block', imageSide === 'right' ? 'lg:order-2' : 'lg:order-1')}
          />
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- Progress tabs (horizontal, below a wide image) */
export function ProgressTabs({ bg = 'surface-1', dark, header, items }) {
  const { ref, active, progress, select } = useAutoProgress(items.length)
  return (
    <Section bg={bg} dark={dark}>
      <div className="flex flex-col gap-10" ref={ref}>
        <SectionHeader {...header} />
        <div className="flex flex-col gap-10">
          <Crossfade items={items} active={active} className="hidden lg:block" />
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
            {items.map((it, i) => {
              const on = i === active
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => select(i)}
                    className={cx('relative flex w-full cursor-pointer flex-col gap-1.5 border-t pt-4 text-left', on ? 'pl-bd-inverse mb-1.5' : 'pl-bd-subtle')}
                  >
                    {on && (
                      <div className="pl-bar-inverse absolute left-0 top-0 h-[2px] w-full origin-left" style={{ transform: `scaleX(${progress})` }} />
                    )}
                    <Text size="lg" weight="semibold" color={on ? 'primary' : 'tertiary'} text={it.title} />
                    <Text size="sm" color={on ? 'secondary' : 'tertiary'} text={it.body} list />
                  </button>
                  {on && (
                    <div className="lg:hidden">
                      <Img {...it.image} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- Bento */
// rows: [{ cols: 'md:grid-cols-2' | 'lg:grid-cols-3', cards: [{ title, body, image, fit }] }]
// fit: 'inset' (px-4 pb-4 md:px-8 md:pb-7) | 'left' (pr-4 md:pr-8 mt-auto) | 'right' (pl-4 md:pl-8 mt-auto) | 'bottom' (px-4 md:px-8 mt-auto)
const FIT = {
  inset: 'px-4 pb-4 md:px-8 md:pb-7',
  left: 'pr-4 md:pr-8 mt-auto',
  right: 'pl-4 md:pl-8 mt-auto',
  bottom: 'px-4 md:px-8 mt-auto',
  none: '',
}
export function BentoCard({ title, body, image, fit = 'inset', titleSize = 'lg', icon, link, cardBg = 'layer-1', children }) {
  return (
    <div className={cx('pl-bd-subtle h-full overflow-hidden rounded-xl border-[0.5px]', `pl-bg-${cardBg}`)}>
      <div className="h-full">
        <div className="flex h-full flex-col">
          <div className={cx('p-4 py-4 md:p-8 md:py-7', fit !== 'inset' && 'min-h-0 flex-1')}>
            <div className="flex flex-col items-start gap-4">
              {icon}
              <div className="flex flex-col gap-1.5">
                <Text size={titleSize} color="primary" weight="semibold" text={title} />
                <Text size="sm" color="secondary" text={body} />
              </div>
              {link && (
                <div className="flex flex-wrap gap-4">
                  <Btn variant="link" {...link} />
                </div>
              )}
            </div>
          </div>
          {image && (
            <div className={FIT[fit]}>
              <Img {...image} />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export function Bento({ bg = 'surface-1', dark, header, rows, gap = 'gap-10', cardBg }) {
  return (
    <Section bg={bg} dark={dark}>
      <div className={cx('flex flex-col', gap)}>
        {header && <SectionHeader {...header} />}
        <div className="flex flex-col gap-6">
          {rows.map((r, i) => (
            <div key={i}>
              <div className={cx('grid gap-6', r.cols)}>
                {r.cards.map((c, j) => (
                  <div key={j}>
                    <BentoCard cardBg={cardBg} {...c} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- Split feature (h3 + bullets + image) */
// One or more rows (props.rows) inside one section; a single row can be passed as top-level props.
// bullet: { icon: LUCIDE key } | { svg: svgs.js key } | { src: image file }
function SplitRow({ eyebrow, title, body, buttons, bullets, image, imageFirst, hSize = 3, imgClass = 'relative overflow-hidden' }) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:gap-20 lg:grid-cols-2">
      <div className={cx('flex h-full flex-col justify-between gap-4', imageFirst ? 'lg:order-2' : 'lg:order-1')}>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <Eyebrow>{eyebrow}</Eyebrow>
            <div className="flex flex-col gap-3">
              <Heading size={hSize} text={title} />
              <Text text={body} list />
            </div>
          </div>
          <Buttons items={buttons} className="flex flex-wrap items-center gap-2" />
        </div>
        {bullets && (
          <ul className="flex flex-col gap-6">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="pl-c-icon shrink-0">
                  {b.src ? <img src={A(b.src)} alt="" width="20" height="20" /> : b.svg ? <Svg k={b.svg} size={20} /> : LUCIDE[b.icon] ?? LUCIDE.check}
                </span>
                <Text color="primary" text={b.text} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={imageFirst ? 'lg:order-1' : 'lg:order-2'}>
        <div className={imgClass}>
          <div className="w-full">
            <Img {...image} />
          </div>
        </div>
      </div>
    </div>
  )
}

export function SplitFeature({ bg = 'surface-1', dark, rows, wrapGap = 'gap-11', ...row }) {
  return (
    <Section bg={bg} dark={dark}>
      <div className={cx('flex flex-col', wrapGap)}>
        <div className="flex flex-col gap-16 md:gap-32">
          {(rows ?? [row]).map((r, i) => (
            <SplitRow key={i} {...r} />
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- Testimonial (quote card + case-study card) */
export function Testimonial({ quote, name, company, logo, story }) {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
        <div className="h-full min-h-0 md:col-span-2">
          <div className="pl-bd-subtle pl-bg-surface-2 flex h-full min-h-0 flex-col gap-6 rounded-xl border p-6">
            <Svg k="for_startups_0" w={30} h={24} className="text-[#cfd2d3]" />
            <Heading size={5} text={quote} />
            <div className="mt-auto flex items-center gap-10 pt-6">
              <div className="flex flex-col gap-1">
                <Text size="sm" color="primary" weight="semibold" text={name} />
                <Text size="xs" color="tertiary" text={company} />
              </div>
              <div className="pl-bd-subtle border-l pl-6">
                <div className="relative h-6 max-w-24">
                  <Img {...logo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full min-h-0 md:col-span-1">
          <a
            className="flex h-full min-h-0 flex-col gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-6 transition-all duration-300 hover:scale-105"
            style={{ backgroundImage: `url('${A('split-short.webp')}')` }}
            href={story.href}
          >
            <div className="relative h-6 max-w-24">
              <Img {...story.logo} />
            </div>
            <div className="mt-auto flex flex-col gap-5">
              <div className="pl-body-lg font-430 text-[#fafafa]">
                <Lines text={story.title} />
              </div>
              <div className="pl-body-base font-430 text-[#fafafa]">
                <div className="flex items-center gap-1">
                  Read case study
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- Alternating rows (h4) */
// rows: [{ eyebrow, title, body, image, imageFirst }]
export function AltRows({ bg = 'surface-1', dark, rows, hSize = 4, header }) {
  return (
    <Section bg={bg} dark={dark}>
      <div className="flex flex-col gap-11">
        {header && <SectionHeader {...header} />}
        <div className="flex flex-col gap-12">
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className={cx('flex flex-col gap-7', r.imageFirst ? 'lg:order-2' : 'lg:order-1')}>
                <div className="flex flex-col gap-4">
                  <Eyebrow>{r.eyebrow}</Eyebrow>
                  <div className="flex flex-col gap-3">
                    <Heading size={hSize} text={r.title} />
                    <Text size="sm" color="tertiary" text={r.body} list />
                  </div>
                </div>
                <Buttons items={r.buttons} className="flex flex-wrap items-center gap-2" />
              </div>
              <div className={r.imageFirst ? 'lg:order-1' : 'lg:order-2'}>
                <div className="pl-bg-layer-1 relative overflow-hidden rounded-2xl">
                  <div className="w-full">
                    <Img {...r.image} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- Wide image block */
export function WideImage({ bg = 'surface-2', dark, header, image }) {
  return (
    <Section bg={bg} dark={dark}>
      <div className="flex flex-col gap-10">
        <SectionHeader {...header} />
        <div className="w-full">
          <Img {...image} />
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- Icon cards */
// cards: [{ icon: 'file.svg', title, body }] ; card: 'layer-1' | 'layer-2'; iconBorder: 'strong-1' | 'strong'
export function IconCards({ bg = 'surface-1', dark, header, cards, card = 'layer-1', iconBorder = 'strong-1', gap = 'gap-10', cols = 'md:grid-cols-2 lg:grid-cols-3' }) {
  return (
    <Section bg={bg} dark={dark}>
      <div className={cx('flex flex-col', gap)}>
        {header && <SectionHeader {...header} />}
        <div className={cx('grid grid-cols-1 gap-6', cols)}>
          {cards.map((c, i) => (
            <div key={i} className={cx('pl-bd-subtle flex flex-col justify-between gap-16 rounded-xl border p-6 transition', `pl-bg-${card}`)}>
              <div className={cx('flex h-10 w-10 items-center justify-center rounded-md border', `pl-bd-${iconBorder}`)}>
                <Img src={c.icon} w={24} h={24} className="pl-c-icon" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Text size="lg" color="primary" weight="semibold" text={c.title} />
                  <Text size="sm" color="tertiary" text={c.body} list />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- Logo strip (caption + logos / mobile marquee) */
// Desktop: grid (caption + logos). Mobile: horizontal logo marquee, rendered static here.
// MOTION (handoff): mobile row is an infinite marquee on plane.so; self-hosted desktop logos cross-fade/cycle every ~3s.
const CUST = (f) => ({ src: `${f}.svg`, w: 120, h: 100, alt: f })
export const STRIP_SELF_HOSTED = {
  desktop: ['amazon', 'government-of-the-republic-of-lithuania', 'stark-bank', 'dolby', 'mirador', 'ssi'].map(CUST),
  mobile: ['sony', 'aramco', 'dolby', 'accenture', 'mirador', 'amazon', 'ssi', 'rebiclique-francaise', 'government-of-the-republic-of-lithuania', 'texelis', 'power-integrations', 'stark-bank'].map((f) => ({ src: `${f}.svg`, w: 100, h: 32, alt: f })),
}
export function LogoStrip({
  caption = ['50,000+ teams run\nPlane in production', ''],
  className = 'py-5 md:py-16',
  cols = 'grid-cols-7',
  captionClass = 'whitespace-nowrap',
  captionSize = 'sm',
  captionWeight = 'regular',
  logos = STRIP_SELF_HOSTED,
  imgClass = 'max-h-12 w-auto object-fill',
  cellClass = 'relative flex items-center justify-center overflow-hidden',
  mobileClass = '',
}) {
  return (
    <div className={cx(className, 'pl-bg-surface-1')}>
      <Container>
        <div className={cx('hidden items-center lg:grid', cols)}>
          <div className={captionClass}>
            <Text size={captionSize} color="primary" weight={captionWeight} text={caption} />
          </div>
          {logos.desktop.map((l, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className={cellClass}>
                <img src={A(l.src)} alt={l.alt} width={l.w} height={l.h} loading="lazy" className={imgClass} />
              </div>
            </div>
          ))}
        </div>
        <div className={cx('border border-transparent lg:hidden', mobileClass)}>
          <div className="relative flex flex-row gap-2 overflow-x-hidden" data-motion="marquee">
            {[0, 1].map((k) => (
              <div key={k} className="z-[1] flex flex-none flex-row items-center gap-2" aria-hidden={k === 1 || undefined}>
                {logos.mobile.map((l, i) => (
                  <div key={i} className="flex-shrink-0">
                    <div className="flex h-10 items-center justify-center px-8">
                      <img src={A(l.src)} alt={l.alt} width={l.w} height={l.h} loading="lazy" className="max-h-8 w-auto object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ---------------------------------------------------------------- Check columns */
// 3 columns with a left border, title and a check list (body-sm tertiary)
export function CheckColumns({ bg = 'surface-2', dark, header, columns }) {
  return (
    <Section bg={bg} dark={dark}>
      <div className="flex flex-col gap-10">
        <SectionHeader {...header} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((c, i) => (
            <div key={i} className="pl-bd-subtle flex flex-col gap-20 border-l p-6">
              <div className="flex flex-col gap-3">
                <Text size="lg" color="primary" weight="semibold" text={c.title} />
              </div>
              <div className="flex flex-col gap-4">
                <div className="pl-body-sm pl-c-tertiary font-430">
                  <ul className="flex flex-col gap-2">
                    {c.items.map((t, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="pl-c-icon mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        <div>
                          <p>{t}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- CTA card (rounded panel inside a section) */
export function CtaCard({ dark = true, title, body, buttons, items, panelBg = 'surface-1', itemSvg }) {
  return (
    <section className="py-12 md:py-16" aria-label="Call to action">
      <Container>
        <div className={cx('rounded-2xl px-5 py-10 md:px-12', dark && 'pl-dark', `pl-bg-${panelBg}`)}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-20">
              <div className="flex flex-col gap-4">
                <Heading size={4} text={title} />
                <Text text={body} />
              </div>
              <Buttons items={buttons} />
            </div>
            <div className="pl-c-primary">
              <ul className="grid grid-cols-1 gap-6 font-inter font-normal md:grid-cols-2">
                {items.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="pl-c-icon mt-1">{itemSvg ? <Svg k={itemSvg} size={20} /> : LUCIDE.check}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ---------------------------------------------------------------- Compare table */
// columns: [{ label } | { logo: { src, w, h, alt } }]; rows: [{ label, cells: [true | false | 'text'] }]
export function CompareTable({ columns, rows }) {
  return (
    <div className="flex w-full flex-col gap-4 overflow-auto">
      <table>
        <thead>
          <tr className="border-b border-[#eaebeb]">
            {columns.map((c, i) => (
              <td key={i} className="p-4">
                <div className={cx('flex h-full w-full items-center gap-3', i === 0 ? 'justify-start' : 'justify-center')}>
                  {c.logo ? (
                    <>
                      <div>
                        <div className="[&_img]:max-h-7 [&_img]:w-auto [&_img]:object-contain">
                          <img className="w-full" src={A(c.logo.src)} alt={c.logo.alt} width={c.logo.w} height={c.logo.h} loading="lazy" />
                        </div>
                      </div>
                      <div className="text-center" />
                    </>
                  ) : (
                    <div className={i === 0 ? 'text-left' : 'text-center'}>
                      <Text color="primary" weight="medium" text={c.label} />
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-[#eff0f0]">
              <td className="content-start p-4">
                <div className="relative flex h-full w-full flex-col items-start justify-start gap-3 md:flex-row">
                  <Text color="tertiary" weight="semibold" text={r.label} />
                </div>
              </td>
              {r.cells.map((v, j) => (
                <td key={j} className="content-start p-4">
                  <div className="relative flex h-full w-full flex-col items-start justify-center gap-3 md:flex-row">
                    {v === true ? YES : v === false ? NO : <Text size="sm" text={v} />}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------------------------------------------------------------- Resource columns */
// items: [{ icon, title, body, link }]  (border-l columns, title + body share one body-lg paragraph)
export function ResourceColumns({ bg = 'surface-1', header, items }) {
  return (
    <Section bg={bg}>
      <div className="flex flex-col gap-10">
        <SectionHeader {...header} />
        <div className="grid grid-cols-1 gap-x-6 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="pl-bd-subtle flex flex-col gap-6 border-l p-6">
              <img className="pl-c-icon" src={A(it.icon)} alt={it.icon.replace(/\.svg$/, '')} width="20" height="20" loading="lazy" />
              <div className="flex flex-col gap-4">
                <Text size="lg" color="primary" text={`${it.title}\n${it.body}`} list />
                <div className="flex flex-wrap items-center gap-2">
                  <Btn variant="link" {...it.link} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- FAQ */
// single-open accordion, first item open; clicking the open item keeps it open (as on plane.so)
export function Faq({ bg = 'surface-1', title = 'Everything you need to know', sub, items, eyebrow = 'FAQ' }) {
  const [open, setOpen] = useState(0)
  return (
    <Section bg={bg}>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <SectionHeader variant="left" eyebrow={eyebrow} title={title} body={sub} />
        </div>
        <div className="flex flex-col">
          {items.map((it, i) => {
            const on = i === open
            return (
              <div key={i} className="pl-bd-subtle border-t">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 py-4 text-left transition-colors focus:outline-none"
                >
                  <span className="flex-1">
                    <Text size="lg" color="primary" weight="medium" text={it.q} />
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 flex-shrink-0 text-[#676c6f]" aria-hidden="true">
                    <path d={on ? 'm6 9 6 6 6-6' : 'm9 18 6-6-6-6'} />
                  </svg>
                </button>
                <div className={cx('grid transition-all duration-300 ease-out', on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                  <div className="min-h-0 overflow-hidden">
                    <div className="pb-4">
                      <Text size="sm" text={it.a} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

/* ---------------------------------------------------------------- CTA (dark image banner) */
export function CtaBanner({ title = 'Next-gen project\nmanagement starts here', buttons, titleLines, sub }) {
  return (
    <section
      aria-label="Call to action"
      className="pl-dark bg-cover bg-center bg-no-repeat py-12 md:py-16"
      style={{ backgroundImage: `url('${A('bg.webp')}')` }}
    >
      <Container>
        <div className="flex flex-col items-start space-y-6 text-left lg:items-center lg:space-y-10 lg:text-center">
          <div className="space-y-2">
            <h2 className="pl-h pl-h2 pl-c-primary">
              <span className="pl-h1 text-[#f5fbff]">
                <Lines text={titleLines ?? title.split('\n')} />
              </span>
            </h2>
            {sub !== undefined && (
              <div className="pl-body-base pl-c-secondary font-430">
                <Lines text={sub || null} />
              </div>
            )}
          </div>
          <Buttons
            items={buttons ?? [
              { label: 'Try Plane free for 14 days', href: 'https://app.plane.so/sign-up/' },
              { label: 'Talk to a migration expert', href: '/talk-to-sales', variant: 'secondary' },
            ]}
            className="pl-light flex w-full flex-wrap items-center justify-start gap-4 lg:justify-center"
          />
        </div>
      </Container>
    </section>
  )
}
