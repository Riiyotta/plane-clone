import { useState } from 'react'
import Prose from './Prose.jsx'
import { ph } from './ph.js'
import { Icon } from './icons.jsx'
import { useDocTitle } from './ui.jsx'
import { CAREERS, JOB_BODY } from './data/careers.js'

const eyebrow = 'inline-flex font-mono text-[15px] font-medium uppercase leading-[15px] tracking-[0.3px]'

function Figure({ f }) {
  return (
    <div className="relative mx-auto w-full" style={{ maxWidth: 1042 }}>
      <div className="overflow-hidden bg-layer-1 [&_img]:h-auto [&_img]:w-full [&_img]:max-w-full">
        <img alt={f.alt} src={f.desktop} width={f.dw} height={f.dh} loading="lazy" className="hidden w-full lg:block" />
        <img alt={f.alt.replace('desktop', 'mobile')} src={f.mobile} width={f.mw} height={f.mh} loading="lazy" className="block w-full lg:hidden" />
      </div>
      <figcaption className="mt-2 text-center font-satoshi text-[13px] italic leading-[13px] tracking-[0.26px] text-txt-tertiary"><p>{f.caption}</p></figcaption>
    </div>
  )
}

// Text block: heading + paragraphs (lengths from live, copy is placeholder)
function ProseBlock({ title, children }) {
  return (
    <div className="mx-auto flex flex-col gap-6 text-left" style={{ maxWidth: 750 }}>
      <div className="flex flex-col gap-4">
        <h3 className="font-satoshi text-[28px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-primary md:text-[40px]"><p>{title}</p></h3>
      </div>
      <div className="font-inter text-500 text-txt-secondary">
        <ul className="flex flex-col gap-2"><li className="flex items-start gap-3"><div>{children}</div></li></ul>
      </div>
    </div>
  )
}

function SectionHeader({ title, sub, center = true }) {
  return (
    <div className={`flex flex-col gap-6 ${center ? 'mx-auto max-w-[700px] items-center text-center' : 'max-w-[828px] items-start text-left'}`}>
      <div className={`flex w-full flex-col gap-2 self-stretch ${center ? 'items-center text-center' : 'items-start text-left'}`}>
        <h2 className="h2 w-full text-txt-primary"><p>{title}</p></h2>
        <div><div className="font-inter text-500 text-txt-secondary">{sub}</div></div>
      </div>
    </div>
  )
}

function CardGrid({ cards, seed }) {
  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-line-subtle md:grid-cols-2">
      {cards.map((c, i) => {
        const border = i === 0 ? '' : i === 1 ? 'border-t md:border-l md:border-t-0' : i % 2 ? 'border-t md:border-l' : 'border-t'
        return (
          <div key={c.title} className={`flex flex-col gap-3 border-line-subtle bg-white p-6 md:p-8 ${border}`}>
            <div className="flex items-center gap-2"><div className="font-inter text-600 font-[570] text-txt-primary"><p>{c.title}</p></div></div>
            <div className="font-inter text-[14px] leading-[22.4px] text-txt-tertiary">
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-3">
                  <div>
                    {c.items.length ? (
                      <ul className="list-disc space-y-2 pl-6">{c.items.map((it) => <li key={it}><span>{it}</span></li>)}</ul>
                    ) : (
                      <p>{ph(c.n, seed + i)}</p>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="flex flex-col">
      {items.map((f, i) => {
        const on = open === i
        return (
          <div key={f.q} className="border-t border-line-subtle">
            <button type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)} className="flex w-full cursor-pointer items-start justify-between gap-4 py-4 text-left transition-colors focus:outline-none">
              <span className="flex-1"><div className="font-inter text-600 font-medium text-txt-primary"><p>{f.q}</p></div></span>
              <Icon name={on ? 'chevronDown' : 'chevronRight'} className="h-5 w-5 flex-shrink-0 text-txt-tertiary" />
            </button>
            <div className={`grid transition-all duration-300 ease-out ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="min-h-0 overflow-hidden">
                <div className="pb-4"><div className="font-inter text-[14px] leading-[22.4px] text-txt-secondary"><p>{ph(f.n, 70 + i)}</p></div></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function RoleRow({ job }) {
  return (
    <a href={`/careers/${job.id}`} className="group flex w-full border-b border-line-subtle">
      <div className="-mx-2 flex flex-1 flex-col gap-2 rounded-lg px-2 py-4 transition-colors hover:bg-layer-1 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <div className="font-inter text-500 font-medium text-txt-primary">{job.title}</div>
          <div className="font-inter text-[14px] leading-[22.4px] text-txt-tertiary">{job.type}</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="font-inter text-[14px] leading-[22.4px] text-txt-tertiary">{job.location}</div>
          <span className="flex items-center gap-1 whitespace-nowrap group-hover:underline">
            <div className="font-inter text-[14px] font-medium leading-[22.4px] text-txt-primary">Apply now</div>
            <Icon name="arrowUpRight" className="h-4 w-4 flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  )
}

export function CareersIndex() {
  useDocTitle('Careers')
  const C = CAREERS
  const [why, building, hiring] = C.prose
  return (
    <div className="font-satoshi">
      {/* Hero */}
      <div className="bg-[#0f0f10]">
        <div className="bg-[url('/assets/collections/careers/career-hero.webp')] bg-cover bg-center bg-no-repeat">
          <div className="flex min-h-[calc(100vh-75px)] flex-col justify-end py-12 md:py-16">
            <div className="container-page">
              <div className="flex flex-col gap-16">
                <div className="w-full">
                  <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
                    <div className="flex flex-col items-start gap-6 text-left">
                      <div className="flex flex-col items-start gap-4">
                        <div className={`${eyebrow} text-txt-d-accent`}>Plane · Careers</div>
                        <h1 className="h1 text-txt-d-primary"><p>Build the infrastructure <br />work runs on</p></h1>
                      </div>
                      <div className="flex flex-wrap justify-start gap-4">
                        <a href="#open-roles" className="btn-primary-dark">See open roles</a>
                        <a href="/work-trials" className="btn-secondary-dark">How we hire</a>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-left">
                      <div className="font-inter text-600 text-txt-d-secondary">
                        <p className="text-left">{ph(C.heroPs[0], 1)} <br /><br /></p>
                        <p className="text-left">{ph(C.heroPs[1], 2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Plane / What we are building */}
      <div className="bg-white py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-16 md:gap-20">
              <div className="flex flex-col gap-8">
                <ProseBlock title={why.h}>
                  <p className="text-left">{ph(why.ps[0], 3)}<br /><br /></p>
                  <p className="text-left">{ph(why.ps[1], 4)}</p>
                  <p><br /></p>
                  <p className="text-left">{ph(why.ps[3], 5)}</p>
                </ProseBlock>
                <Figure f={C.figures[0]} />
              </div>
              <div className="flex flex-col gap-8">
                <ProseBlock title={building.h}>
                  <p>{ph(building.ps[0], 6)}<br /><br /></p>
                  <p>{ph(building.ps[1], 7)}</p>
                </ProseBlock>
                <Figure f={C.figures[1]} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#0f0f10]">
        <div className="bg-[url('/assets/collections/careers/stats-bg.webp')] bg-cover bg-center bg-no-repeat">
          <div className="flex min-h-[480px] flex-col justify-center gap-32 py-16 md:min-h-[560px] md:py-24">
            <div className="container-page"><div className="flex w-full flex-col items-start gap-2 text-left"><div className="font-inter text-500 text-txt-d-secondary" /></div></div>
            <div className="container-page">
              <div className="mt-10 flex justify-start">
                <div className="grid w-full max-w-md grid-cols-2 gap-x-8 space-y-8">
                  {[['2M+', 'people plan their work here'], ['55K+', 'stars on a public codebase'], ['1', 'work graph underneath everything'], ['100%', 'of hires do a paid work trial']].map(([n, l]) => (
                    <div key={n} className="flex flex-col gap-2">
                      <h2 className="h2 text-txt-d-primary">{n}</h2>
                      <div className="font-inter text-[14px] leading-[22.4px] text-txt-d-tertiary">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How we work */}
      <div className="bg-surface-2 py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col gap-10">
            <SectionHeader title="How we work" sub={<p>Six things you would notice in your first month.</p>} />
            <CardGrid cards={C.cards[0]} seed={10} />
          </div>
        </div>
      </div>

      {/* Who does well here */}
      <div className="bg-surface-2 py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col gap-10">
            <SectionHeader title="Who does well here" sub={<p>Plane suits some people and not others.</p>} />
            <CardGrid cards={C.cards[1]} seed={20} />
          </div>
        </div>
      </div>

      {/* How hiring works */}
      <div className="bg-white py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-16 md:gap-20">
              <div className="flex flex-col gap-8">
                <ProseBlock title={hiring.h}>
                  <p className="text-left">{ph(250, 8)} <br /><br />{ph(hiring.ps[0] - 252, 9)} <a className="text-txt-accent hover:text-txt-accent/80" href="/work-trials">plane.so/work-trials</a>.</p>
                  <p className="text-left"><br />{ph(hiring.ps[1] - 30, 10)} <a className="text-txt-accent hover:text-txt-accent/80" href="https://github.com/makeplane/plane" target="_blank" rel="noreferrer">github.com/makeplane/plane</a>.</p>
                </ProseBlock>
                <Figure f={C.figures[2]} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Open roles */}
      <div id="open-roles" className="scroll-mt-20">
        <div className="bg-white py-12 md:py-16">
          <div className="container-page">
            <div className="mx-auto flex flex-col gap-11" style={{ maxWidth: 750 }}>
              <SectionHeader title="Open roles" sub={null} center={false} />
              <div className="flex flex-col gap-8">
                {C.groups.map((g) => (
                  <div key={g.dept} className="flex flex-col gap-2">
                    <div className="font-inter text-[14px] leading-[22.4px] text-txt-tertiary">{g.dept}</div>
                    <div className="flex flex-col">{g.jobs.map((j) => <RoleRow key={j.id} job={j} />)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Practical terms */}
      <div className="bg-surface-2 py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col gap-10">
            <SectionHeader title="The practical terms" sub={null} />
            <CardGrid cards={C.cards[2]} seed={30} />
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-12 md:py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <SectionHeader center={false} title="Questions you might have" sub={<p>Anything not answered here goes to <a href="mailto:careers@plane.so">careers@plane.so</a>, and someone from our team will get back to you.</p>} />
            </div>
            <Faq items={C.faq} />
          </div>
        </div>
      </div>

      {/* CTA */}
      <section aria-label="Call to action" className="bg-[url('/assets/cta-bg.webp')] bg-cover bg-center bg-no-repeat py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col items-start space-y-6 text-left lg:items-center lg:space-y-10 lg:text-center">
            <div className="space-y-2">
              <h2 className="h2"><span className="font-satoshi text-m-1200 text-[#f5fbff] md:text-1200"><p>The next era of work needs its builders</p></span></h2>
              <div className="font-inter text-500 text-txt-d-secondary"><p>If you want your decade to compound into something everyone uses, there is room here.</p></div>
            </div>
            <div className="flex w-full flex-wrap items-center justify-start gap-4 lg:justify-center">
              <a href="#open-roles" className="btn-primary-dark">See open roles</a>
              <a href="mailto:careers@plane.so" className="btn-secondary-dark">Write to us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function JobPage({ id }) {
  const all = CAREERS.groups.flatMap((g) => g.jobs.map((j) => ({ ...j, dept: g.dept })))
  const job = all.find((j) => j.id === id) || { id, title: 'Open role', type: 'Full Time', location: 'Remote' }
  useDocTitle(`${job.title} • Careers`)
  const apply = `https://jobs.ashbyhq.com/plane/${job.id}/application`
  return (
    <article className="py-16 font-satoshi">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <a href="/careers"><div className="font-inter text-[14px] font-medium leading-[22.4px] text-txt-accent">Plane Careers</div></a>
          <h1 className="font-inter text-m-1100 font-[430] text-txt-primary md:text-1100">{job.title}</h1>
          <div className="font-inter text-500 text-txt-tertiary">{job.location} · {job.type}</div>
          <a href={apply} target="_blank" rel="noopener noreferrer" className="btn-primary">Apply now</a>
        </div>
        <Prose blocks={JOB_BODY} className="cl-job mx-auto mt-16 max-w-3xl" density={1.06} seedBase={job.title.length} />
        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-6 rounded-2xl border border-dark-subtle bg-[url('/assets/cta-bg.webp')] bg-cover bg-center bg-no-repeat p-10 text-center">
          <div className="flex flex-col gap-1">
            <h4 className="font-satoshi text-[24px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-d-primary md:text-[32px]">Apply for this role</h4>
            <div className="font-inter text-500 text-txt-d-secondary">Tell us what you have built and why this role fits.</div>
          </div>
          <div><a href={apply} target="_blank" rel="noopener noreferrer" className="btn-primary-dark">Apply now</a></div>
        </div>
      </div>
    </article>
  )
}
