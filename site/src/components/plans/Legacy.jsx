// Older plane.so page-builder blocks (used by /airgapped, /security, /education, /nonprofits).
// They differ from Blocks.jsx: `relative py-16` heroes, `#grid-default` grids, split CTA cards, etc.
// v4 `space-y-*` puts margin-bottom on all but the last child; it is reproduced with explicit mb-* so the
// inline-flex eyebrow line box matches plane.so exactly.
import { useState } from 'react'
import { A, Btn, Buttons, Container, Eyebrow, Heading, Img, Lines, Svg, Text, cx } from './ui.jsx'

/* ---------------------------------------------------------------- Hero */
// align: 'center' (single column) | 'split' (text left, image right)
export function LHero({ align = 'center', eyebrow, eyebrowColor = 'accent', title, body, buttons, image }) {
  const center = align === 'center'
  const copy = (
    <div className={center ? 'text-center' : 'text-left'}>
      {eyebrow && <Eyebrow color={eyebrowColor} className="mb-6">{eyebrow}</Eyebrow>}
      <div className="mb-6">
        <Heading size={1} text={title} className="mb-4" />
        <Text size="lg" color="primary" text={body} />
      </div>
      <Buttons items={buttons} className={cx('flex flex-wrap gap-4', center && 'justify-center')} />
    </div>
  )
  return (
    <div className="relative py-16">
      <Container>
        {center ? (
          <div className="flex flex-col gap-16">{copy}</div>
        ) : (
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {copy}
            <Img {...image} eager />
          </div>
        )}
      </Container>
    </div>
  )
}

/* ---------------------------------------------------------------- Logo cloud (#logo-cloud-primary) */
export function LLogoCloud({ caption, logos }) {
  return (
    <div id="logo-cloud-primary">
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-5 gap-6 md:grid-cols-7">
            <div className="col-span-5 flex items-center justify-center text-center md:col-span-2">
              <Text color="tertiary" text={caption} />
            </div>
            {logos.map((l, i) => (
              <div key={i} className="flex items-center justify-center transition-all hover:scale-110">
                {l && <img src={A(l)} alt={l.replace(/\.\w+$/, '')} width="100" height="100" loading="lazy" />}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- Shared header */
export function LHeader({ eyebrow, title, body, buttons, align = 'left', inner }) {
  const center = align === 'center'
  return (
    <div className={cx('flex flex-col gap-6', center ? 'items-center text-center' : 'items-start text-left')}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className={cx('flex flex-col gap-2', inner)}>
        <Heading size={2} text={title} className="!w-auto" />
        {body !== undefined && (
          <div>
            <Text text={body} />
          </div>
        )}
      </div>
      <Buttons items={buttons} className={cx('flex flex-wrap gap-4', center ? 'justify-center' : 'justify-start')} />
    </div>
  )
}

/* ---------------------------------------------------------------- Icon item (16px icon + title + body) */
function IconItem({ icon, title, body }) {
  return (
    <li>
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 pt-1">
          <Svg k={icon} size={16} className="flex-shrink-0 text-[#676c6f]" />
        </div>
        <div className="flex flex-col gap-2">
          <Text color="primary" weight="semibold" text={title} />
          <Text size="sm" color="tertiary" text={body} />
        </div>
      </div>
    </li>
  )
}

/* ---------------------------------------------------------------- Feature split (header + icon list | image) */
// listClass: 'flex flex-col gap-10' | 'grid gap-10 md:grid-cols-2'; gapX: 'gap-x-36' | 'gap-x-32'
export function LFeatureSplit({ header, items, image, listClass = 'flex flex-col gap-10', gapX = 'gap-x-36', id }) {
  const inner = (
    <Container>
      <div className={cx('flex flex-col gap-y-12 py-16 lg:flex-row lg:items-center', gapX)}>
        <div className="flex w-full flex-col gap-12">
          <LHeader {...header} />
          <ul className={listClass}>
            {items.map((it, i) => (
              <IconItem key={i} {...it} />
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col gap-2">
          <Img {...image} />
        </div>
      </div>
    </Container>
  )
  return id ? <div id={id}>{inner}</div> : inner
}

/* ---------------------------------------------------------------- Grid (#grid-default) */
// variant 'bordered': icon box bg-brand-100 + lucide svg; 'filled': bg-neutral-2 card + image/svg icon
export function LGrid({ header, image, cards, variant = 'filled', ulClass }) {
  return (
    <div id="grid-default">
      <Container>
        <div className="flex flex-col gap-12 py-16 lg:items-center">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <LHeader {...header} />
            {image && (
              <div className="flex flex-col gap-2">
                <Img {...image} />
              </div>
            )}
          </div>
          <ul className={ulClass ?? (variant === 'bordered' ? 'grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3' : 'grid w-full gap-10 lg:grid-cols-3')}>
            {cards.map((c, i) => (
              <li
                key={i}
                className={cx(
                  'group flex flex-col gap-2 overflow-hidden rounded-xl border p-6',
                  variant === 'bordered' ? 'border-[#eff0f0]' : 'border-transparent bg-[#fafafa]'
                )}
              >
                <div className={cx('flex h-11 w-11 items-center justify-center rounded-md p-2', variant === 'bordered' && 'bg-[#f5fbff]')}>
                  {c.svg ? <Svg k={c.svg} size={28} className="flex-shrink-0 text-[#006399]" /> : <Img src={c.img} w={c.w} h={c.h} />}
                </div>
                <Text color="primary" weight="semibold" text={c.title} />
                <Text size="sm" color="tertiary" text={c.body} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}

/* ---------------------------------------------------------------- Split CTA (long dark card + short link card) */
export function LSplitCta({ title, body, buttons, side, darkButtons }) {
  return (
    <div className="py-16">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="relative flex h-full flex-col gap-16 overflow-hidden rounded-2xl p-8 md:p-12 lg:col-span-2">
            <img className="absolute inset-0 h-full w-full object-cover" src={A('split-long.webp')} alt="" loading="lazy" />
            <div className="relative size-12 shrink-0">
              <img className="absolute inset-0 h-full w-full object-contain" src={A('logo-light.svg')} alt="Plane" />
            </div>
            <div className="relative flex flex-col gap-6">
              <div className="pl-dark flex flex-col gap-2">
                <Heading size={5} text={title} />
                <Text size="sm" text={body} />
              </div>
              <Buttons items={buttons} className={cx(darkButtons && 'pl-dark', 'flex flex-wrap items-center gap-2.5')} />
            </div>
          </div>
          <a className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:scale-[1.01]" href={side.href ?? '/talk-to-sales'}>
            <img className="absolute inset-0 h-full w-full object-cover" src={A('split-short.webp')} alt="" loading="lazy" />
            <div className="relative flex justify-end text-[#f5fbff]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true">
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>
            <div className="pl-dark relative flex flex-col gap-2">
              <Heading size={6} text={side.title} />
              <Text size="sm" text={side.body} />
            </div>
          </a>
        </div>
      </Container>
    </div>
  )
}

/* ---------------------------------------------------------------- Comparison table (airgapped) */
// columns: [label, ...]; highlighted columns (odd index) get bg-neutral-2. rows: [{ title, sub, cells: [true | 'text'] }]
export function LTable({ columns, rows }) {
  const hl = (j) => (j % 2 === 1 ? 'bg-[#fafafa]' : '')
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-4 overflow-auto">
        <table>
          <thead>
            <tr className="border-b border-[#eaebeb]">
              {columns.map((c, j) => (
                <td key={j} className={cx('p-4', hl(j))}>
                  <div className={cx('relative flex h-full w-full items-center gap-3', j === 0 ? 'justify-start' : 'justify-center')}>
                    <div className={j === 0 ? 'text-left' : 'text-center'}>
                      <Text color="primary" weight="medium" text={c} />
                      {j === 1 && <div className="pl-body-sm pl-c-secondary font-430"><div /></div>}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-y border-[#eff0f0]">
                <td className="content-start p-4">
                  <div className="relative flex h-full w-full flex-col items-start justify-start gap-3 md:flex-row">
                    <div className="text-left">
                      <Text color="tertiary" weight="semibold" text={r.title} />
                      <Text size="sm" text={r.sub} />
                    </div>
                  </div>
                </td>
                {r.cells.map((v, j) => (
                  <td key={j} className={cx('content-start p-4', hl(j + 1))}>
                    <div className="relative flex h-full w-full flex-col items-start justify-center gap-3 md:flex-row">
                      {v === true ? (
                        <>
                          <div className="pt-1">
                            <Svg k="airgapped_4" size={16} className="flex-shrink-0 text-[#006399]" />
                          </div>
                          <div className="text-center" />
                        </>
                      ) : (
                        <div className="text-center">
                          <Text size="sm" text={v} />
                        </div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- Cards with h6 (security) */
export function LCards({ header, rows }) {
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col gap-12">
          <LHeader align="center" {...header} />
          <div className="flex flex-col gap-6">
            {rows.map((r, i) => (
              <div key={i}>
                <div className={cx('grid gap-6', r.length === 2 ? 'md:grid-cols-[1fr_1fr]' : 'lg:grid-cols-[1fr_1fr_1fr]')}>
                  {r.map((c, j) => (
                    <div key={j}>
                      <div className="h-full overflow-hidden rounded-xl border border-[#eaebeb] bg-[#fafafa] p-4 md:p-8">
                        <div className="flex h-full flex-col gap-6">
                          <div className="flex flex-col items-start gap-4">
                            <div className="flex flex-col gap-2">
                              <Heading size={6} text={c.title} />
                              <Text size="sm" text={c.body} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ---------------------------------------------------------------- Tabs accordion (education / nonprofits) */
// click to open (single), media cross-fades on the right. items: [{ title, intro, points: [[t, d]], media: { src, w, h } | { video } }]
export function LTabsAccordion({ header, items }) {
  const [open, setOpen] = useState(0)
  const media = (m) =>
    m.video ? (
      <>
        <video className="hidden w-full lg:block" autoPlay muted loop playsInline preload="metadata">
          <source src={A(m.video)} type="video/mp4" />
        </video>
        <video className="block w-full lg:hidden" autoPlay muted loop playsInline preload="metadata">
          <source src={A(m.video)} type="video/mp4" />
        </video>
      </>
    ) : (
      <Img {...m} />
    )
  return (
    <Container>
      <div className="flex flex-col gap-12 py-16">
        <LHeader {...header} />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex w-full flex-col">
            {items.map((it, i) => {
              const on = i === open
              return (
                <div
                  key={i}
                  role="button"
                  onClick={() => setOpen(i)}
                  className={cx('flex flex-col items-start gap-2 border-t py-4', on ? 'border-[#090b0c]' : 'group cursor-pointer border-[#eff0f0]')}
                >
                  <div className="flex w-full items-start gap-3 text-left text-[#1d1f20]">
                    <div className="flex w-full flex-col">
                      <Text size="lg" color="primary" weight="semibold" text={it.title} />
                      <div className={cx('grid w-full transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]', on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                        <div className={cx('flex min-h-0 flex-col gap-4 overflow-hidden', on && 'pt-2')}>
                          <div className="pl-body-sm pl-c-secondary font-430">
                            <Lines text={it.intro} />
                            <ul className="list-disc space-y-2 pl-6">
                              {it.points.map(([t, d], k) => (
                                <li key={k}>
                                  <span>{t}</span>
                                  <br />
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="w-full lg:hidden">{media(it.media)}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded hover:bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cx('h-4 w-4 text-[#1d1f20]', on ? 'hidden rotate-180' : 'hidden group-hover:block')} aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="relative hidden w-full lg:block">
            <div className="invisible">{media(items[0].media)}</div>
            <div className="absolute inset-0 flex w-full items-center justify-center overflow-hidden">
              {items.map((it, i) => (
                <div key={i} className={cx('absolute inset-0 flex w-full items-center object-cover transition-opacity duration-300', i === open ? 'z-10 opacity-100' : 'opacity-0')}>
                  {media(it.media)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

/* ---------------------------------------------------------------- FAQ (legacy: independent toggles, all closed) */
export function LFaq({ title = 'FAQ', items }) {
  const [open, setOpen] = useState({})
  return (
    <Container>
      <div className="flex flex-col gap-6 py-16">
        <LHeader align="center" title={title} />
        <div className="mx-auto flex w-full max-w-5xl flex-col">
          {items.map((it, i) => {
            const on = !!open[i]
            return (
              <div key={i} className={cx('flex flex-col border-b p-6 transition-all duration-500', on ? 'border-transparent bg-[#fafafa]' : 'border-[#eff0f0] bg-white')}>
                <button type="button" onClick={() => setOpen((o) => ({ ...o, [i]: !o[i] }))} className="flex w-full cursor-pointer items-center justify-between text-left transition-colors focus:outline-none">
                  <Text size="lg" color="primary" text={it.q} />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cx('h-5 w-5 flex-shrink-0 text-[#676c6f] transition-transform duration-200', on && 'rotate-90')} aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
                <div className={cx('overflow-hidden pr-10 transition-all duration-500 ease-in-out', on ? 'max-h-96' : 'max-h-0')}>
                  <div className="pt-3">
                    <Text color="tertiary" text={it.a} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}

export { Btn }
