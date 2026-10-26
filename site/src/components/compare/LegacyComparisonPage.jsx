// Shared template for the older "Switch from X" comparison pages:
// /plane-vs-monday and /plane-vs-clickup-deprecated. Driven by ./data/*.js.
import { useState } from 'react'
import { t, Buttons, Eyebrow, Lines, StatusIcon, Segmented } from './ui.jsx'
import { PricingCompare } from './ComparisonPage.jsx'

const RAW = 'font-satoshi text-[16px] font-normal leading-normal text-black'

function Icon({ paths, className }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide ${className}`} aria-hidden="true">
      {paths.map(({ t: tag, ...attrs }, i) => {
        const Tag = tag
        return <Tag key={i} {...attrs} />
      })}
    </svg>
  )
}

// Paragraphs + bullet lists (live: <p>…</p><p/><ul class="list-disc space-y-2 pl-6"><li><span>…)
function Rich({ items, className = '' }) {
  return (
    <div className={className}>
      {items.map((it, i) =>
        it.p ? (
          <p key={i}>{it.p}</p>
        ) : (
          [
            <p key={`${i}s`} />,
            <ul key={i} className="list-disc pl-6 [&>:not(:last-child)]:mb-2">
              {it.ul.map((li, k) => (
                <li key={k}>
                  <span>{li}</span>
                </li>
              ))}
            </ul>,
          ]
        ),
      )}
    </div>
  )
}

function Heading({ h2, sub, align = 'center', extra }) {
  const center = align === 'center'
  return (
    <div className={`flex flex-col gap-6 ${center ? 'items-center text-center' : 'items-start text-left'}`}>
      <div className="flex flex-col gap-2">
        <h2 className="h2 text-txt-primary md:whitespace-pre-line">{h2}</h2>
        {sub && (
          <div>
            <div className={`${t.bodyBase} text-txt-secondary md:whitespace-pre-line`}>
              <div>
                {sub.map((l, i) =>
                  Array.isArray(l) ? (
                    <p key={i}>
                      {l.map((seg, j) => [j > 0 && <br key={`b${j}`} />, seg])}
                    </p>
                  ) : (
                    <p key={i}>{l}</p>
                  ),
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      {extra}
    </div>
  )
}

function SplitHero({ d }) {
  return (
    <div className="relative py-16">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-left [&>:not(:last-child)]:mb-6">
            <Eyebrow>{d.eyebrow}</Eyebrow>
            <div className="[&>:not(:last-child)]:mb-4">
              <h1 className="h1 text-txt-primary md:whitespace-pre-line">{d.h1}</h1>
              <Lines lines={d.sub} className={`${t.bodyLg} text-txt-primary md:whitespace-pre-line`} />
            </div>
            <Buttons items={d.buttons} />
          </div>
          <img src={d.image.src} alt={d.image.alt} width={d.image.w} height={d.image.h} className="w-full" />
        </div>
      </div>
    </div>
  )
}

// Desktop: 7-col grid (caption + 6 logos). Live cycles the logos in each cell (opacity/translateY) — motion flagged.
// Mobile: horizontal marquee of 12 logos — static row here, marquee motion flagged.
function LogoRow({ d }) {
  return (
    <div className="bg-surface-1 py-5 md:py-16">
      <div className="container-page">
        <div className="hidden grid-cols-7 items-center lg:grid">
          <div className="whitespace-nowrap">
            <div className={`${t.bodySm} text-txt-primary md:whitespace-pre-line`}><div><p>{d.caption}</p></div></div>
          </div>
          {d.desktop.map((l, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="relative flex items-center justify-center overflow-hidden">
                <div className="max-h-12 w-auto">
                  <img src={l.src} alt={l.alt} width="120" height="100" className="max-h-12 w-auto object-fill" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div id="logo-cloud" className="border border-transparent lg:hidden">
          <div role="marquee" aria-label="Customer logos" className="group relative flex w-full flex-row gap-2 overflow-x-hidden">
            {[0, 1].map((copy) => (
              <div key={copy} className="z-[1] flex min-w-full flex-row items-center gap-2 [flex:0_0_auto]" data-marquee aria-hidden={copy ? 'true' : undefined}>
                {d.mobile.map((l, i) => (
                  <div key={i} className={`max-w-full flex-shrink-0 ${copy ? 'flex-1' : ''}`}>
                    <div className="flex h-10 items-center justify-center px-8">
                      <img src={l.src} alt={copy ? '' : l.alt} width="100" height="32" className="max-h-8 w-auto object-contain" />
                    </div>
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

function CompareTable({ d }) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-col gap-4 overflow-auto rounded-xl border border-line-subtle">
        <table className={RAW}>
          <thead>
            <tr className="rounded-xl border-b border-line-subtle bg-[#f5fbff]">
              {d.head.map((h, i) => (
                <td key={i} className="p-4" style={h.width ? { width: h.width } : undefined}>
                  {h.img && (
                    <div className="justify-left my-3 flex h-full items-center [&_img]:max-h-7 [&_img]:w-auto [&_img]:object-contain">
                      <img src={h.img.src} alt={h.img.alt} width={h.img.w} height={h.img.h} className="w-full" />
                    </div>
                  )}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {d.rows.map((r, ri) => (
              <tr key={ri} className={`rounded-xl border-t border-line-n2 ${r.alt ? 'bg-surface-2' : ''}`}>
                <td className="content-start p-4" style={r.widths[0] ? { width: r.widths[0] } : undefined}>
                  <div className="relative flex h-full w-full flex-col items-start justify-start gap-3 md:flex-row">
                    <div className="text-left">
                      <div className={`${t.bodyBase} font-570 text-txt-tertiary md:whitespace-pre-line`}>{r.label}</div>
                      <div className={`${t.bodySm} text-txt-secondary md:whitespace-pre-line`}><div /></div>
                    </div>
                  </div>
                </td>
                {r.cells.map((cell, ci) => (
                  <td key={ci} className="content-start p-4" style={r.widths[ci + 1] ? { width: r.widths[ci + 1] } : undefined}>
                    <div className="relative flex h-full w-full flex-col items-start justify-start gap-3 md:flex-row">
                      <div className="pt-1"><StatusIcon type={cell.icon} /></div>
                      <div className="text-left">
                        <div className={`${t.bodySm} text-txt-secondary md:whitespace-pre-line`}><div><p>{cell.text}</p></div></div>
                      </div>
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

function WhyTable({ d }) {
  return (
    <div className="container-page">
      <div className="flex flex-col gap-12 py-16">
        <Heading h2={d.h2} />
        <CompareTable d={d} />
      </div>
    </div>
  )
}

const CARD = 'h-full overflow-hidden rounded-xl border border-line-subtle bg-surface-2 p-4 md:p-8'
const H6 = `${t.h6.replace('font-medium', 'font-430')} text-txt-primary md:whitespace-pre-line`

function Stepper({ d }) {
  const [step, setStep] = useState(0)
  const n = d.items.length
  const cur = d.items[step]
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="relative mb-12 flex w-full items-center justify-between py-1.5">
        <div className="absolute left-0 top-6 h-[2px] w-full -translate-y-1/2 bg-line-n2 md:top-8" />
        <div className="absolute left-0 top-6 h-[2px] w-full -translate-y-1/2 bg-txt-accent transition-all duration-300 ease-in-out md:top-8" style={{ width: `calc((100% - 1rem) * ${step / (n - 1)})` }} />
        {d.items.map((s, i) => {
          const on = i <= step
          const edge = i === 0 ? 'items-start text-left' : i === n - 1 ? 'items-end text-right' : ''
          return (
            <div key={s.label} className={`flex flex-col items-center gap-2 text-center ${edge}`}>
              <button
                type="button"
                onClick={() => setStep(i)}
                className={`relative z-10 flex size-8 cursor-pointer flex-col items-center justify-center gap-2 rounded-full p-1 md:size-12 ${on ? 'bg-txt-accent' : 'border border-line-card bg-surface-2'}`}
              >
                <Icon paths={s.icon} className={`flex-shrink-0 size-5 md:size-7 ${on ? 'text-white' : ''}`} />
              </button>
              <div className="text-sm font-semibold text-txt-secondary md:text-base">{s.label}</div>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col gap-4 rounded-xl bg-white p-6">
        <div className="flex size-12 items-center justify-center rounded-xl bg-[#f5fbff]">
          <Icon paths={cur.icon} className="flex-shrink-0 text-txt-accent" />
        </div>
        <h6 className={H6}>{cur.title}</h6>
        <Rich items={cur.rich} />
      </div>
    </div>
  )
}

function SwitchSteps({ d }) {
  return (
    <div className="py-16">
      <div className="container-page">
        <div className="flex flex-col gap-12">
          <Heading h2={d.h2} sub={d.sub} />
          <div className="flex flex-col gap-6">
            <div>
              <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
                <div>
                  <div className={CARD}>
                    <div className="flex h-full flex-col gap-6">
                      <div className="flex flex-col items-start gap-4">
                        <div className="flex flex-col gap-2">
                          <h6 className={H6}>{d.card1.title}</h6>
                          <Rich items={d.card1.rich} className={`${t.bodySm} text-txt-secondary md:whitespace-pre-line`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={CARD}>
                    <div>
                      <img src={d.card2.src} alt={d.card2.alt} width={d.card2.w} height={d.card2.h} loading="lazy" className="w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid gap-6 md:grid-cols-[1fr]">
                <div>
                  <div className={CARD}>
                    <div className="flex h-full w-full flex-col gap-6">
                      <div className="flex flex-col items-start gap-4 overflow-auto">
                        <Icon paths={d.steps.icon} className="flex-shrink-0 text-txt-accent" />
                        <div className="flex flex-col gap-2">
                          <h6 className={H6}>{d.steps.title}</h6>
                          <div className="text-txt-secondary"><div><p>{d.steps.sub}</p></div></div>
                        </div>
                        <Stepper d={d.steps} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardText({ c }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-col gap-2">
        <h6 className={H6}>{c.title}</h6>
        <div className={`${t.bodySm} text-txt-secondary md:whitespace-pre-line`}><div><p>{c.text}</p></div></div>
      </div>
    </div>
  )
}

function Experience({ d }) {
  return (
    <div className="py-16">
      <div className="container-page">
        <div className="flex flex-col gap-12">
          <Heading h2={d.h2} align="left" />
          <div className="flex flex-col gap-6">
            {d.rows.map((row, ri) => (
              <div key={ri}>
                <div className={`grid gap-6 ${row.cols}`}>
                  {row.cards.map((card, ci) => (
                    <div key={ci}>
                      <div className={CARD}>
                        {card.split ? (
                          <div className="grid h-full items-center gap-6 md:grid-cols-2">
                            <CardText c={card} />
                            <img src={card.img.src} alt={card.img.alt} width={card.img.w} height={card.img.h} loading="lazy" className="w-full" />
                          </div>
                        ) : (
                          <div className="flex h-full flex-col gap-6">
                            <CardText c={card} />
                            <img src={card.img.src} alt={card.img.alt} width={card.img.w} height={card.img.h} loading="lazy" className="w-full" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Rounded dark banner CTA (bg-brand-inverse-1 + /home/v4/cta/bg.webp cover image)
export function BannerCta({ d }) {
  return (
    <div className="py-16">
      <div className="container-page">
        <div className="relative z-0 flex flex-col gap-8 overflow-hidden rounded-2xl bg-[#001b29] p-8 md:p-12">
          <div className="absolute left-0 top-0 z-0 h-full w-full">
            <img src="/assets/compare/cta-bg-v4.webp" alt="Plane" width="1200" height="600" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col gap-4 text-center">
            <h4 className={`${t.h4} text-[#fafafa] md:whitespace-pre-line`}>{d.h4}</h4>
            {d.lines?.length > 0 && (
              <div className={`${t.bodyBase} text-[#909598] md:whitespace-pre-line`}>
                <div>
                  {d.lines.map((l, i) => (
                    <p key={i}>{Array.isArray(l) ? l.map((seg, j) => [j > 0 && <br key={`b${j}`} />, seg]) : l}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
            {d.buttons.map((b) => (
              <a key={b.label} href={b.href} className={`font-inter ${b.primary ? 'btn-primary-dark' : 'btn-secondary-dark'}`}>
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Editions({ d }) {
  const [tab, setTab] = useState(0)
  const it = d.items[tab]
  return (
    <div className="container-page">
      <div className="flex flex-col gap-6 py-16">
        <Heading h2={d.h2} sub={[d.sub]} align="left" />
        <Segmented label={undefined} value={tab} onChange={setTab} items={d.tabs.map((l, i) => ({ value: i, label: l }))} />
        <div className="grid w-full grid-cols-1 items-center gap-12 overflow-hidden lg:grid-cols-2 [&>*:first-child]:order-2 [&>*:last-child]:order-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {it.tags.map((tag) => (
                <div key={tag} className={t.eyebrowXs}>{tag}</div>
              ))}
            </div>
            <h4 className={`${t.h4} text-txt-primary md:whitespace-pre-line`}>{it.title}</h4>
            <Rich items={it.rich} />
            <Buttons items={it.buttons} />
          </div>
          <div className="relative hidden w-full lg:block">
            <div className="invisible">
              <img src={d.images[0].src} alt="" width={d.images[0].w} height={d.images[0].h} className="w-full" />
            </div>
            <div className="absolute inset-0 order-first flex w-full items-center justify-center overflow-hidden">
              {d.images.map((img, i) => (
                <div key={img.src} className={`absolute inset-0 flex w-full items-center object-cover transition-opacity duration-300 ${i === tab ? 'z-10 opacity-100' : 'opacity-0'}`}>
                  <img src={img.src} alt={img.alt} width={img.w} height={img.h} loading="lazy" className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Integrations({ d }) {
  return (
    <div className="py-16">
      <div className="container-page">
        <div className="flex flex-col gap-12">
          <Heading h2={d.h2} sub={[d.sub]} align="left" extra={<Buttons items={d.buttons} className="justify-start" />} />
          <div className="grid grid-cols-1 gap-6 gap-y-12 md:grid-cols-2">
            {d.cards.map((card) => (
              <div key={card.title} className="flex h-full flex-col gap-5">
                <img src={card.img.src} alt={card.img.alt} width={card.img.w} height={card.img.h} loading="lazy" className="w-full" />
                <div className="flex flex-col items-start gap-4">
                  <CardText c={card} />
                  <Buttons items={card.buttons} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureTableLegacy({ d }) {
  return (
    <div id="feature-table">
      <div className="container-page">
        <div className="flex flex-col gap-12 py-16">
          <Heading h2={d.h2} />
          <CompareTable d={d} />
        </div>
      </div>
    </div>
  )
}

export default function LegacyComparisonPage({ data }) {
  return (
    <div className={RAW}>
      <SplitHero d={data.hero} />
      <LogoRow d={data.logos} />
      <WhyTable d={data.why} />
      <SwitchSteps d={data.switch} />
      <Experience d={data.experience} />
      <BannerCta d={data.cta1} />
      <PricingCompare d={data.pricing} />
      <Editions d={data.editions} />
      <Integrations d={data.github} />
      <FeatureTableLegacy d={data.table} />
      <BannerCta d={data.cta2} />
    </div>
  )
}
