// /self-hosted/whitepaper — "The Plane Self-Hosting Guide" reader (TOC + one section at a time).
// Section content comes from whitepaperData.js; prose is placeholder copy of the measured length.
// MOTION (handoff): plane.so fades/slides the section body in when the active section changes.
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Heading, Svg, Text, cx } from './ui.jsx'
import { ph } from './ph.js'
import { WP_CTA_LEN, WP_FAQ, WP_INTRO_LEN, WP_SECTIONS } from './whitepaperData.js'

const LABEL = 'font-mono text-[13px] leading-none font-430 uppercase tracking-[0.14em]'
const SHADOW = 'shadow-[0_1px_2px_rgba(23,26,31,0.05),0_10px_28px_-18px_rgba(23,26,31,0.25)]'
const PROSE =
  'flex flex-col gap-6 [&>p]:max-w-[68ch] [&>p]:text-[16px] [&>p]:leading-[1.7] [&>p]:text-[#4e5355] [&>p:first-child]:text-[18px] [&>p:first-child]:leading-[1.6] [&>p:first-child]:text-[#1d1f20] [&>h3]:mt-4 [&>h3]:max-w-[68ch] [&>h3]:font-satoshi [&>h3]:text-[20px] [&>h3]:font-medium [&>h3]:leading-[1.3] [&>h3]:tracking-[-0.03em] [&>h3]:text-[#1d1f20] [&_strong]:text-[#1d1f20]'

// chapters in TOC order
const CHAPTERS = WP_SECTIONS.reduce((acc, s, i) => {
  const c = s.num.split('.')[0]
  if (!acc.length || acc[acc.length - 1].n !== c) acc.push({ n: c, title: s.chapter, items: [] })
  acc[acc.length - 1].items.push(i)
  return acc
}, [])

const txt = (v, seed) => (typeof v === 'number' ? ph(v, seed) : v)

function Block({ b, k }) {
  switch (b.t) {
    case 'p':
      return <p>{ph(b.n, k)}</p>
    case 'h3':
      return <h3>{b.text}</h3>
    case 'quote':
      return (
        <figure className="my-1 max-w-[68ch] border-l-2 border-[#1d1f20] pl-6">
          <blockquote className="pl-h pl-h5 pl-c-primary">{ph(b.n, k)}</blockquote>
        </figure>
      )
    case 'ul':
      return (
        <ul className="flex max-w-[68ch] flex-col gap-2.5">
          {b.items.map(([strong, n], i) => (
            <li key={i} className="relative pl-5 text-[16px] leading-[1.7] text-[#4e5355] before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:bg-[#090b0c] before:content-[''] [&_strong]:text-[#1d1f20]">
              {strong && <strong>{strong}</strong>} {ph(n, k + i)}
            </li>
          ))}
        </ul>
      )
    case 'steps':
      return (
        <ol className="flex max-w-[68ch] flex-col gap-2.5">
          {b.items.map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className={cx('mt-1 shrink-0 font-mono text-[13px] leading-none tabular-nums text-[#676c6f]')}>{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[16px] leading-[1.7] text-[#4e5355]">{t}</span>
            </li>
          ))}
        </ol>
      )
    case 'refs':
      return (
        <ol className="flex max-w-[68ch] flex-col">
          {b.items.map(([org, title, href], i) => (
            <li key={i} className="pl-bd-subtle flex gap-4 border-t py-3.5 first:border-t-0">
              <span className="mt-0.5 font-mono text-[13px] leading-none tabular-nums text-[#676c6f]">{String(i + 1).padStart(2, '0')}</span>
              <p className="pl-body-sm font-satoshi leading-relaxed text-[#4e5355]">
                <span className="font-medium text-[#1d1f20]">{org}</span>{' '}
                <a className="underline decoration-[#dadcdd] underline-offset-2 transition-colors hover:text-[#1d1f20] hover:decoration-[#1d1f20]" href={href} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </p>
            </li>
          ))}
        </ol>
      )
    case 'table':
      return (
        <div className="pl-bd-subtle overflow-hidden rounded-[2px] border">
          <div className="overflow-x-auto">
          <table className="w-full border-collapse text-[14px] leading-[1.6]" style={b.minW ? { minWidth: b.minW } : undefined}>
            <caption className="sr-only">{b.caption}</caption>
            <thead>
              <tr className={cx('pl-bd-subtle border-b', b.headBg && 'pl-bg-surface-2')}>
                {b.head.map((h, i) => (
                  <th key={i} className="px-4 py-3.5 text-left align-bottom font-normal">
                    <span className={cx(LABEL, 'text-[#676c6f]')}>{h}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className="pl-bd-subtle border-b last:border-b-0">
                  {r.map((c, j) => (
                    <td key={j} className={cx('px-4 py-3.5 align-top', j === 0 ? 'text-[#1d1f20]' : 'text-[#4e5355]')}>
                      {txt(c, k + i * b.head.length + j)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      )
    case 'callout':
      return (
        <div className="pl-bd-subtle pl-bg-surface-2 rounded-[2px] border p-5 sm:p-6">
          <div className="max-w-[65ch]">
            <p className={cx(LABEL, 'mb-2.5 text-[#1d1f20]')}>{b.label}</p>
            <div className="text-[14px] leading-relaxed text-[#4e5355]">{ph(b.n, k)}</div>
          </div>
        </div>
      )
    case 'stats':
      return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {b.items.map(([big, unit, cap], i) => (
            <div key={i} className="pl-bd-subtle pl-bg-surface-2 rounded-[2px] border p-5">
              <div className="pl-h pl-h4 pl-c-primary">
                {big}
                <span className="text-[#676c6f]"> {unit}</span>
              </div>
              <p className="mt-2 text-[14px] leading-snug text-[#676c6f]">{cap}</p>
            </div>
          ))}
        </div>
      )
    case 'flow':
      return (
        <figure className="pl-bd-subtle pl-bg-surface-2 rounded-[2px] border p-5 sm:p-6">
          {b.top && <div className={cx(LABEL, 'mb-3 rounded-[2px] bg-[#090b0c] px-4 py-3 text-center text-[#fafafa]')}>{b.top}</div>}
          <div className="flex flex-col">
            {b.steps.map((s, i) => (
              <div key={i}>
                {(b.top || i > 0) && <div aria-hidden="true" className="pl-bd-strong mx-auto h-4 w-0 border-l" />}
                <div className={cx('pl-bd-subtle pl-bg-surface-1 grid gap-3 rounded-[2px] border p-4 sm:grid-cols-[160px_1fr] sm:items-center', (b.top || i > 0) && 'mt-3')}>
                  <div>
                    <p className={cx(LABEL, 'text-[#1d1f20]')}>{s.label}</p>
                    <p className="mt-1 text-[13px] leading-snug text-[#676c6f]">{s.sub}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.chips.map((c) => (
                      <span key={c} className="pl-bd-subtle pl-bg-surface-2 rounded-md border px-2.5 py-1 font-mono text-[13px] leading-none text-[#4e5355]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <figcaption className="mt-4 font-mono text-[13px] leading-none text-[#676c6f]">{b.caption}</figcaption>
        </figure>
      )
    case 'pre':
      return (
        <div className="pl-bd-subtle pl-bg-surface-2 overflow-hidden rounded-[2px] border">
          <div className="pl-bd-subtle border-b px-4 py-2.5">
            <span className={cx(LABEL, 'text-[#676c6f]')}>{b.label}</span>
          </div>
          <pre className="overflow-x-auto p-4">
            <code className="whitespace-pre font-mono text-[13px] leading-relaxed text-[#4e5355]">{b.code}</code>
          </pre>
        </div>
      )
    case 'note':
      return <div className="pl-bd-subtle max-w-[68ch] border-t pt-5 text-[14px] leading-relaxed text-[#676c6f]">{ph(b.n, k)}</div>
    default:
      return null
  }
}

function Arrow({ dir }) {
  return <Svg k={dir === 'prev' ? 'self_hosted_whitepaper_0' : 'self_hosted_whitepaper_1'} size={16} className="size-4 shrink-0" />
}

function Reader() {
  const [idx, setIdx] = useState(0)
  const ref = useRef(null)
  const { hash } = useLocation()
  // deep links such as /self-hosted/whitepaper#air-gapped open that section
  useEffect(() => {
    const i = WP_SECTIONS.findIndex((x) => `#${x.id}` === hash)
    if (i >= 0) {
      setIdx(i)
      requestAnimationFrame(() => window.scrollTo({ top: ref.current.getBoundingClientRect().top + window.scrollY - 98 }))
    }
  }, [hash])
  const s = WP_SECTIONS[idx]
  const next = WP_SECTIONS[idx + 1]
  const go = (i) => {
    setIdx(i)
    const top = ref.current.getBoundingClientRect().top + window.scrollY - 98
    window.scrollTo({ top })
  }
  return (
    <section id="whitepaper" aria-label="Whitepaper reader" ref={ref}>
      <Container>
        <div className="grid items-start gap-6 lg:grid-cols-[264px_minmax(0,1fr)] lg:gap-8">
          <div className="hidden lg:sticky lg:top-24 lg:block">
            <div className={cx('pl-bd-subtle pl-bg-surface-1 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[2px] border [scrollbar-width:thin]', SHADOW)}>
              <nav aria-label="Table of contents">
                {CHAPTERS.map((c, ci) => {
                  const on = c.items.includes(idx)
                  return (
                    <div key={c.n} className={ci ? 'pl-bd-subtle border-t' : undefined}>
                      <button type="button" onClick={() => go(c.items[0])} className="flex w-full cursor-pointer items-center gap-3.5 px-5 py-4 text-left transition-colors hover:bg-[#fafafa] lg:px-6">
                        <span className={cx('flex size-7 shrink-0 items-center justify-center rounded-md font-mono text-[13px] leading-none tabular-nums transition-colors', on ? 'bg-[#006399] text-[#fafafa]' : 'pl-bg-layer-1 text-[#4e5355]')}>{c.n}</span>
                        <span className={cx('text-[16px] font-medium leading-snug transition-colors', on ? 'text-[#006399]' : 'text-[#1d1f20]')}>{c.title}</span>
                      </button>
                      <ul className="pl-bd-subtle border-t border-dashed px-5 py-2.5 lg:px-6">
                        {c.items.map((i) => {
                          const a = i === idx
                          return (
                            <li key={i}>
                              <button type="button" onClick={() => go(i)} className="group flex w-full cursor-pointer items-baseline gap-3.5 py-2 text-left">
                                <span className={cx('w-7 shrink-0 font-mono text-[13px] leading-none tabular-nums transition-colors', a ? 'text-[#006399]' : 'text-[#80868a]')}>{WP_SECTIONS[i].num}</span>
                                <span className={cx('text-[14px] leading-snug transition-colors', a ? 'font-medium text-[#006399]' : 'text-[#676c6f] group-hover:text-[#1d1f20]')}>{WP_SECTIONS[i].title}</span>
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )
                })}
              </nav>
            </div>
          </div>
          <div className="min-w-0">
            <div className={cx('pl-bd-subtle pl-bg-surface-1 min-h-[70vh] rounded-[2px] border px-6 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-14', SHADOW)}>
              <div className="mb-8 lg:hidden">
                <div className="lg:hidden">
                  <label htmlFor="whitepaper-jump" className={cx(LABEL, 'mb-2 block text-[#676c6f]')}>
                    Jump to section
                  </label>
                  <select
                    id="whitepaper-jump"
                    value={idx}
                    onChange={(e) => go(Number(e.target.value))}
                    className="pl-bd-subtle pl-bg-surface-2 w-full cursor-pointer rounded-lg border px-3 py-2.5 text-[14px] leading-[1.6] text-[#1d1f20] transition-colors focus-visible:border-[#006399] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006399]/40"
                  >
                    {CHAPTERS.map((c) => (
                      <optgroup key={c.n} label={`${c.n}. ${c.title}`}>
                        {c.items.map((i) => (
                          <option key={i} value={i}>
                            {WP_SECTIONS[i].num} {WP_SECTIONS[i].title}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sr-only" role="status">
                Section {idx + 1} of {WP_SECTIONS.length}: {s.title}
              </div>
              <div className="relative min-h-[440px] overflow-hidden" aria-label="Whitepaper section" role="region">
                <div key={s.id} data-motion="section-enter">
                  <section>
                    <div className="pl-bd-subtle mb-8 flex flex-col gap-3 border-b pb-6">
                      <p className={cx(LABEL, 'text-[#676c6f]')}>
                        <span className="text-[#1d1f20]">{s.num}</span> · {s.chapter}
                      </p>
                      <h2 className="pl-h pl-h4 pl-c-primary outline-none" id="whitepaper-active-heading">
                        {s.title}
                      </h2>
                    </div>
                    <div className={PROSE}>
                      {s.blocks.map((b, i) => (
                        <Block key={i} b={b} k={10000 + idx * 2000 + i * 60} />
                      ))}
                    </div>
                  </section>
                </div>
              </div>
              <div className="pl-bd-subtle mt-10 border-t pt-6">
                <div className="pl-bg-layer-1 mb-5 h-[3px] w-full overflow-hidden rounded-full">
                  <div className="h-full rounded-full bg-[#090b0c] transition-[width] duration-300 ease-out" style={{ width: `${((idx + 1) / WP_SECTIONS.length) * 100}%` }} />
                </div>
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    aria-label="Previous section"
                    disabled={idx === 0}
                    onClick={() => go(idx - 1)}
                    className="pl-bd-strong inline-flex min-w-0 cursor-pointer items-center gap-1.5 rounded-lg border bg-[#fafafa] px-3.5 py-2 text-[14px] font-medium leading-[1.6] text-[#1d1f20] transition-colors hover:bg-[#f4f5f5] disabled:cursor-not-allowed disabled:border-[#eaebeb] disabled:bg-transparent disabled:text-[#909598]"
                  >
                    <Arrow dir="prev" />
                    <span className="hidden max-w-[10rem] truncate sm:inline lg:max-w-[15rem]">
                      {idx === 0 ? (
                        'Prev'
                      ) : (
                        <>
                          <span className="opacity-60">Prev · </span>
                          {WP_SECTIONS[idx - 1].num} {WP_SECTIONS[idx - 1].title}
                        </>
                      )}
                    </span>
                  </button>
                  <span className="shrink-0 font-mono text-[13px] leading-none tabular-nums text-[#676c6f]">
                    {String(idx + 1).padStart(2, '0')} / {WP_SECTIONS.length}
                  </span>
                  <button
                    type="button"
                    aria-label={next ? `Next: ${next.num} ${next.title}` : 'Next section'}
                    disabled={!next}
                    onClick={() => go(idx + 1)}
                    className="inline-flex min-w-0 cursor-pointer items-center gap-1.5 rounded-lg bg-[#090b0c] px-4 py-2 text-[14px] font-medium leading-[1.6] text-white transition-colors hover:bg-[#1d1f20] disabled:cursor-not-allowed disabled:bg-white disabled:text-[#909598]"
                  >
                    <span className="hidden max-w-[10rem] truncate sm:inline lg:max-w-[15rem]">
                      {next ? (
                        <>
                          <span className="opacity-60">Next · </span>
                          {next.num} {next.title}
                        </>
                      ) : (
                        'Next'
                      )}
                    </span>
                    <Arrow dir="next" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function WpFaq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" aria-label="Frequently asked questions">
      <Container>
        <div className={cx('pl-bd-subtle pl-bg-surface-1 rounded-[2px] border p-6 sm:p-10 lg:p-16', SHADOW)}>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="flex flex-col gap-3">
              <p className={cx(LABEL, 'text-[#676c6f]')}>FAQ</p>
              <Heading size={2} text="Frequently asked questions" />
            </div>
            <div className="flex flex-col">
              {WP_FAQ.map(([q, n], i) => {
                const on = i === open
                return (
                  <div key={i} className="pl-bd-subtle border-t last:border-b">
                    <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)} className="flex w-full cursor-pointer items-start justify-between gap-4 rounded-md py-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006399]/40">
                      <Text color="primary" weight="medium" text={q} />
                      <Svg k={on ? 'self_hosted_whitepaper_2' : 'self_hosted_whitepaper_3'} size={16} className="mt-0.5 size-5 shrink-0 text-[#1d1f20]" />
                    </button>
                    <div className={cx('grid transition-all duration-300 ease-out', on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                      <div className="min-h-0 overflow-hidden">
                        <div className="pb-6">
                          <Text size="sm" text={ph(n, 1097 + i)} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function Whitepaper() {
  return (
    <div className="pl">
      <div className="pl-bg-surface-2 min-h-screen font-satoshi font-430">
        <div className="pl-bd-subtle pl-bg-surface-1 border-b">
          <section aria-label="The Plane Self-Hosting Guide">
            <Container>
              <div className="flex flex-col pb-10 pt-10 sm:pt-14 lg:pb-14 lg:pt-20">
                <div className="flex flex-col gap-6">
                  <p className={cx(LABEL, 'text-[#676c6f]')}>Guide · Self-hosted</p>
                  <div className="max-w-4xl">
                    <Heading size={1} text="The Plane Self-Hosting Guide" />
                  </div>
                </div>
                <div className="pl-bd-subtle mt-10 grid gap-8 border-t pt-8 lg:mt-12 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-14">
                  <div className="flex flex-col gap-7">
                    <p className="max-w-2xl text-[18px] leading-[1.6] text-[#4e5355]">{ph(WP_INTRO_LEN, 61000)}</p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <a className="pl-btn pl-btn-primary" href="/talk-to-sales">
                        Talk to sales
                      </a>
                      <a className="pl-btn pl-btn-secondary" href="https://developers.plane.so">
                        Read the docs
                      </a>
                    </div>
                  </div>
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-5 lg:grid-cols-1 lg:border-l lg:border-[#eaebeb] lg:pl-8">
                    {[
                      ['For', 'CIOs, CISOs, platform teams, and Jira administrators'],
                      ['Editions', 'Commercial and Airgapped'],
                      ['Reading time', 'About 25 minutes'],
                    ].map(([t, d]) => (
                      <div key={t} className="flex flex-col gap-1">
                        <dt className={cx(LABEL, 'text-[#676c6f]')}>{t}</dt>
                        <dd className="text-[14px] leading-[1.6] text-[#1d1f20]">{d}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Container>
          </section>
        </div>
        <div className="flex flex-col gap-12 py-10 sm:py-14 lg:gap-16 lg:py-16">
          <Reader />
          <WpFaq />
          <section id="whitepaper-cta" aria-label="Talk to sales">
            <Container>
              <div className="flex flex-col items-center gap-7 rounded-[2px] bg-[#090b0c] px-6 py-16 text-center sm:px-10 lg:py-20">
                <p className={cx(LABEL, 'text-[#fafafa] opacity-60')}>The Plane Self-Hosting Guide</p>
                <h2 className="pl-h pl-h2 text-[#fafafa]">Run Plane on infrastructure you control</h2>
                <div className="max-w-xl opacity-80">
                  <Text size="lg" className="!text-[#fafafa]" text={ph(WP_CTA_LEN, 61001)} />
                </div>
                <div className="pl-dark flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a className="pl-btn pl-btn-primary" href="/talk-to-sales">
                    Talk to sales
                  </a>
                  <a className="pl-btn pl-btn-secondary" href="https://developers.plane.so">
                    Read the docs
                  </a>
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>
    </div>
  )
}

