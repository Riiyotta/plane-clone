import Prose from './Prose.jsx'
import { STORIES, TESTIMONIALS, FORTYAU_BODY } from './data/customers.js'
import { smallBtn, useDocTitle } from './ui.jsx'

function StoryCard({ s }) {
  return (
    <div className="group relative px-4 py-6 hover:bg-surface-2 md:px-8 md:py-10">
      <div className="flex flex-col items-start gap-8 md:gap-16">
        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex flex-row flex-wrap items-start gap-3 md:items-center md:justify-between md:gap-6">
            <div className="hidden lg:block"><div className="inline-flex font-mono text-[15px] font-medium uppercase leading-[15px] tracking-[0.3px] text-txt-secondary">{s.industry}</div></div>
            <div className="block lg:hidden"><div className="inline-flex font-mono text-[13px] font-medium uppercase leading-[13px] tracking-[0.26px] text-txt-secondary">{s.industry}</div></div>
            {s.migrated.length > 0 && (
              <div className="ml-auto flex items-center gap-2">
                <div className="hidden md:block"><div className="font-inter text-[14px] leading-[22.4px] text-[#909598]">Migrated from</div></div>
                <div className="block md:hidden"><div className="font-inter text-300 text-[#909598]">Migrated from</div></div>
                {s.migrated.map((m) => (
                  <div key={m.d} className="h-4 [&_img]:h-full [&_img]:w-auto [&_img]:object-cover">
                    <img alt={m.alt} src={m.d} width={m.dw} height={m.dh} loading="lazy" className="hidden w-full lg:block" />
                    <img alt={m.alt} src={m.m} width={m.mw} height={m.mh} loading="lazy" className="block w-full lg:hidden" />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="my-2 md:hidden [&_img]:h-full [&_img]:w-auto [&_img]:object-cover" style={{ width: s.logo.w, height: s.logo.h }}>
            <img alt={s.logo.alt} src={s.logo.src} width={s.logo.w} height={s.logo.h} loading="lazy" className="w-full" />
          </div>
          <div className="flex flex-col gap-1.5 md:gap-2">
            <h5 className="font-satoshi text-[22px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-primary md:text-[24px]"><p className="text-left">{s.title}</p></h5>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="absolute bottom-4 right-4 hidden group-hover:block md:bottom-10 md:right-8 [&_img]:h-full [&_img]:w-auto [&_img]:object-cover" style={{ width: s.logo.w, height: s.logo.h }}>
            <img alt={s.logo.alt} src={s.logo.src} width={s.logo.w} height={s.logo.h} className="w-full" />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4">
          <a className={smallBtn} href={`/customers/${s.slug}`}>Read full story</a>
        </div>
      </div>
    </div>
  )
}

function StoryGrid({ items }) {
  return (
    <section className="py-10 md:py-16">
      <div className="container-page">
        <div className="flex w-full flex-col gap-12">
          <div className="grid border border-line-n2 bg-white md:grid-cols-2 [&>*+*]:border-t [&>*]:border-line-n2 md:[&>*+*]:border-t-0 md:[&>*:nth-child(n+3)]:border-t md:[&>*:nth-child(odd)]:border-r">
            {items.map((s) => <StoryCard key={s.slug} s={s} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonial({ t }) {
  return (
    <div aria-hidden="true" className="container-page">
      <div className="flex flex-col gap-8 py-10 md:py-16">
        <div className="grid grid-cols-1 overflow-hidden border border-line-n2 lg:grid-cols-3">
          <div className={`border-line-n2 md:col-span-1 ${t.imageFirst ? 'order-1 border-b lg:border-b-0 lg:border-r' : 'order-2 border-t lg:border-l lg:border-t-0'}`}>
            <div className="h-full w-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
              <img alt="" src={t.image} width={t.imageW} height={t.imageH} loading="lazy" className="w-full" />
            </div>
          </div>
          <div className={`flex items-center justify-center md:col-span-2 ${t.imageFirst ? 'order-2' : 'order-1'}`}>
            <div className="flex flex-col items-center gap-6 px-8 py-10 text-center">
              <div className="max-h-7 max-w-[120px] [&_img]:h-full [&_img]:w-auto [&_img]:object-contain">
                <img alt={t.logoAlt} src={t.logo} width={t.logoW} height={t.logoH} loading="lazy" className="w-full" />
              </div>
              <div className="font-inter text-500 text-txt-primary"><p>{t.quote}</p></div>
              <div className="flex flex-col gap-0.5">
                <div className="font-inter text-500 font-[570] text-txt-primary">{t.name}</div>
                <div className="font-inter text-[14px] leading-[22.4px] text-[#909598]">{t.company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CustomersCta() {
  return (
    <div className="py-16">
      <div className="container-page">
        <div className="relative z-0 flex flex-col gap-8 overflow-hidden rounded-2xl bg-[#001b29] p-8 md:p-12">
          <div className="absolute left-0 top-0 z-0 h-full w-full">
            <img alt="Plane" src="/assets/collections/cta-card-bg.webp" width="1200" height="600" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="relative z-10 flex flex-col gap-4 text-center">
            <h4 className="font-satoshi text-[24px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-on-color md:whitespace-pre-line md:text-[32px]">{'For all teams everywhere that want to\nmodernize and collaborate'}</h4>
          </div>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
            <a href="https://app.plane.so/sign-up/" target="_blank" rel="noopener noreferrer" className="btn-primary-dark">Switch to Plane</a>
            <a href="/talk-to-sales" className="btn-secondary-dark">Talk to Sales</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CustomersIndex() {
  useDocTitle('Customers')
  return (
    <div className="font-satoshi">
      <div className="relative py-16">
        <div className="container-page">
          <div className="flex flex-col gap-16">
            <div className="space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="h1 text-txt-primary"><p>Meet our customers</p></h1>
                <div className="font-inter text-600 text-txt-primary"><p>Trusted by more than 50,000+ teams, from ambitious startups to major enterprises.</p></div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://app.plane.so/sign-up/" target="_blank" rel="noopener noreferrer" className="btn-primary">Get started for free</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StoryGrid items={STORIES.slice(0, 4)} />
      <Testimonial t={TESTIMONIALS[0]} />
      <StoryGrid items={STORIES.slice(4, 8)} />
      <Testimonial t={TESTIMONIALS[1]} />
      <CustomersCta />
    </div>
  )
}

const GENERIC_STORY = [
  { t: 'h2', text: 'About the company' }, { t: 'p', n: 260 }, { t: 'p', n: 300 },
  { t: 'h2', text: 'The challenge' }, { t: 'p', n: 340 }, { t: 'ul', items: [{ n: 60 }, { n: 48 }, { n: 70 }] },
  { t: 'callout', n: 180, attr: '— Customer team' },
  { t: 'h2', text: 'Why Plane was the best fit' }, { t: 'p', n: 320 }, { t: 'p', n: 230, b: 40, br: 1 }, { t: 'p', n: 250, b: 36, br: 1 },
  { t: 'h2', text: 'Results' }, { t: 'p', n: 280 },
]

export function CustomerStory({ slug }) {
  const s = STORIES.find((x) => x.slug === slug)
  const title = s ? s.h1 : `How ${slug} uses Plane`
  useDocTitle(title)
  const blocks = s?.body === 'fortyau' ? FORTYAU_BODY : GENERIC_STORY
  return (
    <article className="pb-16 pt-16 font-satoshi">
      <div>
        <div className="pb-6 pt-10">
          <div className="container-page">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2" />
                <div className="flex flex-col gap-2">
                  <h1 className="h2 text-txt-primary">{title}</h1>
                  <div className="font-inter text-600 text-txt-primary" />
                </div>
              </div>
              {s?.hero && (
                <div className="flex items-center justify-center">
                  <div className="h-auto w-full max-w-md"><img alt={`${s.logo.alt} customer story`} src={s.hero} width="2464" height="2464" className="w-full" /></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container-page">
            <div className="relative flex gap-6">
              <div className="sticky top-20 hidden h-fit w-[280px] shrink-0 lg:block">
                <div className="space-y-6">
                  {(s?.meta || []).map((g) => (
                    <div key={g.label}>
                      <div className="font-inter text-500 font-[570] text-txt-primary">{g.label}</div>
                      {Array.isArray(g.value) ? (
                        <div className="mt-1 space-y-2">
                          {g.value.map((v) => (
                            <div key={v.label} className="group flex items-center gap-2">
                              <img alt={v.label} src={v.icon} width="16" height="16" className="h-4 w-4" />
                              <a href={v.href}><div className="font-inter text-[14px] leading-[22.4px] text-txt-primary"><span className="capitalize group-hover:underline">{v.label}</span></div></a>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="font-inter text-[14px] leading-[22.4px] text-txt-primary"><span className={g.label === 'Plane plan' ? 'capitalize' : ''}>{g.value}</span></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="-mt-6 max-w-none">
                  <Prose blocks={blocks} className="cl-blog mx-auto" density={1.05} seedBase={slug?.length || 0} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
