// Shared template for the v2 "Plane vs X" pages:
// /plane-vs-jira, -asana, -linear, -clickup, -shortcut, -notion.
// Driven by a data object (see ./data/*.js). Structure and classes mirror live plane.so.
import { useState } from 'react'
import { t, c, Buttons, Eyebrow, Lines, Price, Segmented } from './ui.jsx'
import FeatureTable from './FeatureTable.jsx'

const A = '/assets/compare/'
const LOGOS = [
  ['Sony', 'sony'], ['Aramco', 'aramco'], ['Dolby', 'dolby'], ['Accenture', 'accenture'],
  ['Power Integrations', 'power-integration'], ['Amazon', 'amazon'], ['Essor', 'essor'], ['40AU', 'forty-au'],
  ['Hypersonica', 'hypersonica'], ['SSI', 'ssi'], ['Ruby Labs', 'ruby-labs'], ['République Française', 'republique-francaise'],
  ['Government of Lithuania', 'gov-of-lithuania'], ['Mirador Therapeutics', 'mirador-therapeutics'], ['Texelis', 'texelis'],
  ['OptiGRÜN', 'optigrun'], ['Stark Bank', 'starkbank'], ['Datum', 'datum'],
]
const LOTTIES = ['single-stack', 'built-for-ai', 'runs-where-you-need-it', 'enterprise-controls']

function Hero({ d }) {
  return (
    <div className="bg-surface-1">
      <div className="py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col items-center gap-16">
            <div className="flex w-full max-w-[900px] flex-col items-center gap-2">
              <div className={`${t.h1} flex flex-wrap items-center justify-center gap-3`}>
                <img src={`${A}plane-logo-badge.svg`} alt="Plane" width="56" height="56" className="object-contain sm:h-[1em] sm:w-[1em]" />
                <h1 className="h1 text-txt-primary">Plane</h1>
                <h1 className="h1 text-txt-primary">vs</h1>
                <img src={d.logo} alt={`${d.competitor.toLowerCase()}-logo`} width="56" height="56" className="h-[1em] w-[1em] object-contain" />
                <h1 className="h1 text-txt-primary">{d.competitor}</h1>
              </div>
              <div className="flex flex-col items-center gap-10 text-center">
                <div className="flex flex-col items-center gap-4">
                  <h1 className="h1 text-txt-primary md:whitespace-pre-line"><div><p>{d.title}</p></div></h1>
                  <Lines lines={d.sub} className={`${t.bodyLg} text-txt-secondary md:whitespace-pre-line`} />
                </div>
                <Buttons items={d.buttons} className="justify-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function QuoteMark() {
  return (
    <svg className="text-txt-accent" fill="none" height="28" viewBox="0 0 30 24" width="34" aria-hidden="true">
      <path d="M0.5 16.233C0.5 12.82 1.59 9.68 3.77 6.83C5.96 3.99 8.66 1.71 11.88 0L13.28 2.49C11.73 3.62 10.32 4.84 9.08 6.14C7.83 7.43 6.76 8.96 5.88 10.72L8.76 13.05C9.96 13.98 10.76 14.91 11.18 15.84C11.6 16.78 11.8 17.76 11.8 18.8C11.8 20.4 11.31 21.67 10.32 22.6C9.34 23.534 8.09 24 6.58 24C5.59 24 4.71 23.82 3.93 23.46C3.150 23.09 2.45 22.65 1.83 22.14C0.94 20.27 0.5 18.3 0.5 16.233ZM16.72 16.233C16.72 12.82 17.81 9.68 19.99 6.83C22.172 3.99 24.87 1.71 28.1 0L29.5 2.49C27.94 3.62 26.54 4.84 25.29 6.14C24.043 7.43 22.98 8.96 22.09 10.72L24.98 13.05C26.17 13.98 26.98 14.91 27.4 15.84C27.81 16.78 28.02 17.76 28.02 18.8C28.020 20.4 27.53 21.67 26.54 22.6C25.55 23.534 24.3 24 22.8 24C21.81 24 20.92 23.82 20.15 23.46C19.37 23.09 18.664 22.65 18.04 22.14C17.16 20.27 16.72 18.3 16.72 16.233Z" fill="currentColor" />
    </svg>
  )
}

export function LogosQuote({ d }) {
  return (
    <section id="logos" aria-label="Logos" className="bg-surface-1 py-12 md:py-16">
      <div className="container-page">
        <div className="overflow-hidden rounded-2xl border border-line-subtle bg-surface-1">
          <div className="flex flex-col gap-6 p-8 md:gap-10 md:p-8">
            <div className={t.monoCaption}><div><p>{d.caption}</p></div></div>
            <div className="grid grid-cols-3 items-center gap-x-4 gap-y-8 md:grid-cols-6 md:gap-x-6 md:gap-y-10">
              {LOGOS.map(([alt, f]) => (
                <div key={f} className="flex items-center justify-start">
                  <img src={`/assets/${f}.svg`} alt={alt} width="190" height="56" loading="lazy" className="max-h-14 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${A}compare-logo-bg-3935737a.webp)` }}>
            <div className="flex flex-col gap-8 p-6 md:p-8">
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-16">
                <div className="md:col-span-1">
                  <div className={t.monoCaption}><div><p>{d.caption2}</p></div></div>
                  <div className="relative shrink-0 self-start px-8">
                    <img src={d.image} alt="compare-logo-image" width="526" height="433" loading="lazy" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 md:col-span-2">
                  <QuoteMark />
                  <div className={`${t.h5} text-txt-primary`}><div><p>{d.quote}</p></div></div>
                  <div className="font-inter text-500 font-normal text-txt-secondary"><div><p>{d.author}</p></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CenteredHeader({ h2, sub, className = '' }) {
  return (
    <div className={`mx-auto flex max-w-[700px] flex-col items-center gap-6 text-center ${className}`}>
      <div className="flex w-full flex-col items-center gap-2 self-stretch text-center">
        <h2 className="h2 w-full text-txt-primary md:whitespace-pre-line"><div><p>{h2}</p></div></h2>
        {sub && (
          <div>
            <Lines lines={sub} className={`${t.bodyBase} text-txt-secondary md:whitespace-pre-line`} />
          </div>
        )}
      </div>
    </div>
  )
}

function RichText({ html, text }) {
  if (html) return <p dangerouslySetInnerHTML={{ __html: html }} />
  return <p>{text}</p>
}

function Further({ d }) {
  return (
    <div className="bg-surface-1 py-12 md:py-16">
      <div className="container-page">
        <div className="flex flex-col gap-10">
          <CenteredHeader h2={d.h2} />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {d.cards.map((card, i) => (
              <div key={card.title} className="flex flex-col gap-5">
                {/* Live renders a dotLottie <canvas> (2:1). Static poster frame here; animation flagged for Animation. */}
                <div className="overflow-hidden border-b border-line-subtle">
                  <img src={`${A}lottie-${LOTTIES[i % 4]}.png`} alt="" aria-hidden="true" className="block aspect-[2/1] w-full object-cover" data-lottie={`${A}${['single-stack-d91226ae', 'built-for-ai-3a2cfd29', 'runs-where-you-need-it-1440a98a', 'enterprise-controls-57b716ca'][i % 4]}.lottie`} />
                </div>
                <div className="flex flex-col gap-2">
                  <div className={`${t.bodyLg} font-570 text-txt-primary md:whitespace-pre-line`}><div><p>{card.title}</p></div></div>
                  <div className={`${t.bodySm} text-txt-tertiary md:whitespace-pre-line`}>
                    <ul className="flex flex-col gap-2">
                      <li className="flex items-start gap-3">
                        <div>
                          <RichText html={card.html} text={card.body} />
                        </div>
                      </li>
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

export function AgentTabs({ d, bg = 'bg-surface-2' }) {
  const [active, setActive] = useState(0)
  return (
    <div className={`${bg} py-12 md:py-16`}>
      <div className="container-page">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-6">
            <div className="grid items-start gap-2 lg:grid-cols-2 lg:gap-20">
              <h2 className="h2 w-full text-txt-primary md:whitespace-pre-line"><div><p>{d.h2}</p></div></h2>
              <div className="lg:mt-4">
                <Lines lines={d.intro} className={`${t.bodyBase} text-txt-secondary md:whitespace-pre-line`} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-8 lg:order-1">
              <div className="flex flex-col">
                {d.tabs.map((tab, i) => {
                  const on = i === active
                  return (
                    <div key={tab.title}>
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        className={`relative w-full cursor-pointer border-t py-4 text-left ${on ? 'border-txt-primary' : 'border-line-subtle'}`}
                      >
                        {/* Autoplay progress bar (live: width animates 0→100%, then advances tab). Motion flagged. */}
                        {on && <div className="absolute left-0 top-0 h-[2px] w-0 origin-left bg-[#090b0b]/80" data-progress />}
                        <div className={`${t.bodyLg} font-570 md:whitespace-pre-line ${on ? 'mb-1.5 text-txt-primary' : 'text-txt-tertiary'}`}><div><p>{tab.title}</p></div></div>
                        {on && (
                          <div className={`${t.bodyBase} text-txt-secondary md:whitespace-pre-line`}>
                            <ul className="flex flex-col gap-2">
                              <li className="flex items-start gap-3"><div><p>{tab.desc}</p></div></li>
                            </ul>
                          </div>
                        )}
                      </button>
                      {on && (
                        <div className="pb-4 lg:hidden">
                          <img src={d.images[i].src} alt={d.images[i].alt} width="2464" height="2464" className="w-full" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative hidden w-full lg:order-2 lg:block">
              <div className="invisible">
                <img src={d.images[0].src} alt="" width="2464" height="2464" className="w-full" />
              </div>
              <div className="absolute inset-0 flex w-full items-center justify-center overflow-hidden">
                {d.images.map((img, i) => (
                  <div key={img.src} className={`absolute inset-0 flex w-full items-center object-cover transition-opacity duration-300 ${i === active ? 'z-10 opacity-100' : 'opacity-0'}`}>
                    <img src={img.src} alt={img.alt} width="2464" height="2464" loading={i ? 'lazy' : undefined} className="w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PricingCompare({ d }) {
  const [period, setPeriod] = useState('yearly')
  return (
    <section className="bg-surface-1 py-16">
      <div className="container-page">
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex flex-col gap-2">
                <h2 className="h2 text-txt-primary md:whitespace-pre-line">{d.h2}</h2>
                <div>
                  <Lines lines={d.sub} className={`${t.bodyBase} text-txt-secondary md:whitespace-pre-line`} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex justify-center">
              <Segmented
                label="Billing period"
                value={period}
                onChange={setPeriod}
                items={[{ value: 'yearly', label: 'Billed yearly' }, { value: 'monthly', label: 'Billed monthly' }]}
              />
            </div>
            <div className="grid w-full gap-6 md:grid-cols-2">
              {d.cards.map((card) => (
                <div key={card.plan + card.logo} className="flex w-full flex-col items-center gap-6 rounded-xl border border-line-subtle bg-layer-1 px-6 py-10">
                  <div className="h-7 w-auto [&>img]:h-full [&>img]:w-auto [&>img]:object-contain">
                    <img src={card.logo} alt={card.logoAlt} width={card.w} height={card.h} loading="lazy" className="w-full" />
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <h6 className={`${t.h6} text-txt-primary md:whitespace-pre-line`}>{card.plan}</h6>
                    <div className="flex items-baseline gap-1">
                      <p className={`h2 ${card.plane ? 'text-txt-accent' : c.danger} transition-all duration-300`}>
                        <Price value={card[period]} />
                      </p>
                    </div>
                    <div className={`${t.raw} text-center text-txt-tertiary`}><div><p>{card.per}</p></div></div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${t.raw} text-center text-txt-secondary`}>
              <div>
                <p>
                  {d.note[0]}
                  <br />
                  {d.note[1]}
                  <a className="text-txt-accent hover:text-txt-accent/80" href="https://plane.so/pricing" rel="noreferrer" target="_blank">
                    <span className="underline">Plane’s core features</span>
                  </a>
                </p>
              </div>
            </div>
            <Buttons items={d.buttons} className="justify-center" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Switch({ d }) {
  return (
    <div className="bg-surface-1 py-12 md:py-16">
      <div className="container-page">
        <div className="flex flex-col gap-10">
          <div className="flex max-w-[828px] flex-col items-start gap-6 text-left">
            <Eyebrow>{d.eyebrow}</Eyebrow>
            <div className="flex w-full flex-col items-start gap-2 self-stretch text-left">
              <h2 className="h2 w-full text-txt-primary md:whitespace-pre-line"><div><p>{d.h2}</p></div></h2>
              <div>
                <Lines lines={d.body} className={`${t.bodyBase} text-txt-secondary md:whitespace-pre-line`} />
              </div>
            </div>
            <Buttons items={d.buttons} className="justify-start" />
          </div>
          <div className="w-full">
            <img src={d.image} alt={d.imageAlt} width={d.w} height={d.h} loading="lazy" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Cards({ items }) {
  return (
    <div className="bg-surface-1 py-12 md:py-16">
      <div className="container-page">
        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {items.map((card) => (
              <div key={card.title} className="flex flex-col gap-3">
                <div className="relative overflow-hidden">
                  <div className="w-full">
                    <img src={card.img} alt={card.alt} width={card.w} height={card.h} loading="lazy" className="w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className={`${t.bodyBase} font-570 text-txt-primary md:whitespace-pre-line`}><div><p>{card.title}</p></div></div>
                  <div className={`${t.bodySm} text-txt-tertiary md:whitespace-pre-line`}>
                    <ul className="flex flex-col gap-2">
                      <li className="flex items-start gap-3"><div><p>{card.body}</p></div></li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a className="font-satoshi text-[14px] font-medium leading-[20px] text-txt-primary hover:underline" href={card.link.href}>
                      {card.link.label}
                    </a>
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

export function DarkCta({ lines, sub, buttons }) {
  return (
    <section aria-label="Call to action" className="bg-cover bg-center bg-no-repeat py-12 md:py-16" style={{ backgroundImage: `url(${A}cta-bg-v4.webp)` }}>
      <div className="container-page">
        <div className="flex flex-col items-start space-y-6 text-left lg:items-center lg:space-y-10 lg:text-center">
          <div className="space-y-2">
            <h2 className="h2 md:whitespace-pre-line">
              <span className={`h1 ${c.onColor}`}>
                <div>
                  {lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </span>
            </h2>
            {sub && sub.length > 0 && <Lines lines={sub} className={`${t.bodyBase} text-txt-d-secondary md:whitespace-pre-line`} />}
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 lg:justify-center">
            {buttons.map((b) => (
              <a key={b.label} href={b.href} className={b.primary ? 'btn-primary-dark' : 'btn-secondary-dark'}>
                {b.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ComparisonPage({ data }) {
  return (
    <>
      <Hero d={data.hero} />
      <LogosQuote d={data.logos} />
      <Further d={data.further} />
      <AgentTabs d={data.agents} />
      <PricingCompare d={data.pricing} />
      <FeatureTable d={data.table} />
      <Switch d={data.switch} />
      <Cards items={data.cards} />
      <DarkCta lines={data.cta.lines} sub={data.cta.sub} buttons={data.cta.buttons} />
    </>
  )
}

