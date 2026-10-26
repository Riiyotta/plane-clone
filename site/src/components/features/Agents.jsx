// plane.so/agents — custom page. Values measured live 2026-10-26.
// Canvas illustrations on the live page are animated; here they are static frames captured from the live canvases.
// Paragraph copy is placeholder text of matching length.
import { useRef, useState } from 'react'
import { LogoStrip } from './blocks.jsx'
import { AGENT_ICONS } from './agentIcons.js'

const A = '/assets/features/agents'
const HEAD_FF = { fontFeatureSettings: '"cv05", "cv08" 0, "ss02", "ss03"' }

const LOGOS = [
  ['aramco', 'Aramco'], ['mirador', 'Mirador Therapeutics'], ['rebiclique-francaise', 'République Française'],
  ['power-integrations', 'Power Integrations'], ['sony', 'Sony'], ['dolby', 'Dolby'],
].map(([f, alt]) => ({ src: `/assets/features/${f}.svg`, alt, w: 190, h: 56 }))
const MARQUEE = [
  ['sony', 'Sony'], ['aramco', 'Aramco'], ['dolby', 'Dolby'], ['accenture', 'Accenture'], ['mirador', 'Mirador Therapeutics'],
  ['amazon', 'Amazon'], ['ssi', 'SSI'], ['rebiclique-francaise', 'République Française'],
  ['government-of-the-republic-of-lithuania', 'Government of Lithuania'], ['texelis', 'Texelis'],
  ['power-integrations', 'Power Integrations'], ['stark-bank', 'Stark Bank'],
].map(([f, alt]) => ({ src: `/assets/features/${f}.svg`, alt }))

const SIGNUP = 'https://app.plane.so/sign-up'
const BTN_ROW = [
  { label: 'Get started free', href: SIGNUP, kind: 'primary' },
  { label: 'Book a demo', href: '/talk-to-sales', kind: 'secondary' },
]

function Btn({ label, href, kind, dark }) {
  const cls = kind === 'primary' ? (dark ? 'btn-primary-dark' : 'btn-primary') : dark ? 'btn-secondary-dark' : 'btn-secondary'
  return <a href={href} className={cls}>{label}</a>
}

function Eyebrow({ children }) {
  return (
    <div className="font-inter text-500 font-medium text-txt-primary md:whitespace-pre-line">
      <span className="text-400 font-430 uppercase text-[#006399]">{children}</span>
    </div>
  )
}

const TabBar = () => <div className="absolute left-0 top-0 h-[2px] w-full origin-left bg-[rgba(9,11,11,0.8)]" data-tab-progress />

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section aria-label="Hero section" id="hero">
      <div className="py-12 md:py-16">
        <div className="container-page">
          <div className="flex flex-col items-center gap-16">
            <div className="flex w-full max-w-[900px] flex-col gap-10 md:items-center">
              <div className="flex flex-col gap-4 md:items-center md:text-center">
                <Eyebrow>Plane Agents, now available</Eyebrow>
                <h1 className="h1 text-txt-primary md:whitespace-pre-line" style={HEAD_FF}>Give agents a job, not just a prompt.</h1>
                <div className="font-inter text-600 font-430 text-txt-secondary md:whitespace-pre-line">
                  {'Placeholder copy: agents that take on repetitive, context-heavy work 24/7—handling changes,\nhelping teams plan next steps and act across Plane and connected tools.'}
                </div>
              </div>
              <div className="flex flex-wrap gap-4 md:items-center md:justify-center">
                {BTN_ROW.map((b) => <Btn key={b.label} {...b} />)}
              </div>
            </div>
            <div className="w-full md:hidden">
              <div className="relative z-0 aspect-[639/102] overflow-hidden">
                <img src={`${A}/canvas-0.png`} alt="" aria-hidden="true" className="w-full" />
              </div>
              <img src={`${A}/hero-mobile.webp`} alt="agent-hero-image" className="relative z-10 w-full" />
            </div>
            <div className="hidden w-full md:block">
              <div className="relative z-0">
                <img src={`${A}/canvas-1.png`} alt="" aria-hidden="true" className="aspect-[1256/120] w-full" />
              </div>
              <img src={`${A}/hero.webp`} alt="agent-hero-image" className="relative z-10 w-full" />
            </div>
          </div>
        </div>
      </div>
      <LogoStrip text="<div><p>Join 50,000+ teams that actually enjoy work</p></div>" logos={LOGOS} marquee={MARQUEE} />
    </section>
  )
}

/* ---------------- Build agents (side tabs + square image) ---------------- */
const BUILD = [
  ['Define what it owns', 'Placeholder copy about starting from a template or a blank agent, then giving it a name, a clear job, and a goal to aim for.', 'build-1.webp'],
  ['Give it a playbook', 'Placeholder copy about describing how the work should be done, what a good result looks like, and which limits apply, plus the skills and the model it should use.', 'build-2.webp'],
  ['Choose when it starts', 'Placeholder copy about bringing the agent into work by assignment or mention, or letting changes and schedules start it, with filters that decide when it should run.', 'build-3.webp'],
  ['Connect its working context', 'Placeholder copy about choosing the projects, trusted sources, and connected tools the agent can use, and which account it should work through.', 'build-4.webp'],
]

function BuildAgents() {
  const [active, setActive] = useState(0)
  return (
    <section aria-label="Build agents ready for real work" id="build-agents" className="py-20">
      <div className="container-page">
        <div className="space-y-11">
          <div className="flex flex-col">
            <h2 className="h2 text-txt-primary md:whitespace-pre-line" style={HEAD_FF}>Build agents ready for real work</h2>
          </div>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative hidden aspect-square w-full overflow-hidden rounded-xl lg:block">
              {BUILD.map(([t, , img], i) => (
                <div key={t} className={`absolute inset-0 transition-opacity duration-300 ${i === active ? 'z-10 opacity-100' : 'opacity-0'}`}>
                  <img src={`${A}/${img}`} alt={t} className="absolute inset-0 h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              {BUILD.map(([t, d, img], i) => {
                const on = i === active
                return (
                  <div key={t}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`relative w-full cursor-pointer border-t py-6 text-left ${on ? 'border-txt-primary' : 'border-line-subtle'}`}
                    >
                      {on && <TabBar />}
                      <div className="space-y-1.5">
                        <div className={`font-inter text-600 font-570 md:whitespace-pre-line ${on ? 'text-txt-primary' : 'text-txt-tertiary'}`}>{t}</div>
                        <div className={`font-inter text-400 font-430 md:whitespace-pre-line ${on ? 'text-txt-secondary' : 'text-txt-tertiary'}`}>{d}</div>
                      </div>
                    </button>
                    {on && (
                      <div className="pb-6 lg:hidden">
                        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                          <img src={`${A}/${img}`} alt={t} className="absolute inset-0 h-full w-full object-cover" />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Ready-made agents carousel ---------------- */
const CARDS = [
  { title: 'Standup Agent', grad: '#F0873C33', desc: 'Placeholder copy about gathering progress, blockers, and next steps from a team and turning them into a short daily update.', works: [['Slack', 'slack.svg'], ['Gmail', 'gmail.svg'], ['Projects']], skills: ['Progress tracking', 'Team summarization'] },
  { title: 'Delivery Risk Agent', grad: '#10B98133', desc: 'Placeholder copy about watching work for stalls, blockers, dependencies, and slipping dates so teams can respond to risks early.', works: [['Github', 'github.svg'], ['Slack', 'slack.svg'], ['Projects']], skills: ['Risk detection', 'Dependency tracking'] },
  { title: 'Spec Agent', grad: '#4E7FE033', desc: 'Placeholder copy about turning rough ideas and requests into structured requirements, finding gaps, and asking questions for scope.', works: [['Figma', 'figma.svg'], ['Wiki'], ['Pages']], skills: ['PRD writing', 'Product clarity'] },
  { title: 'Request Triage Agent', grad: '#E8B84B33', desc: 'Placeholder copy about reviewing incoming requests, spotting duplicates, adding context, and routing each one to the right team.', works: [['Slack', 'slack.svg'], ['Projects'], ['Intake']], skills: ['Request analysis', 'Duplicate detection'] },
  { title: 'Customer Feedback Agent', grad: '#F0A8C933', desc: 'Placeholder copy about collecting customer feedback from many channels, grouping it into clear themes, and linking it to the work that matters most.', works: [['Slack', 'slack.svg'], ['Projects'], ['Wiki']], skills: ['Feedback analysis', 'Theme clustering'] },
]

const Chevron = ({ d }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

function ReadyMade() {
  const track = useRef(null)
  const scroll = (dir) => {
    const el = track.current
    if (!el) return
    const card = el.firstElementChild
    el.scrollBy({ left: dir * (card ? card.getBoundingClientRect().width + 24 : 300), behavior: 'smooth' })
  }
  const nav = 'inline-flex aspect-square items-center justify-center rounded-lg border border-line-n2 bg-white p-2 font-inter text-500 font-medium transition-colors hover:border-[#dadcdd] hover:bg-layer-1 hover:text-txt-primary'
  return (
    <section aria-label="Ready-made Agents" id="ready-made-agents" className="py-20">
      <div className="container-page">
        <div className="space-y-11">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col items-start gap-3 text-left">
              <Eyebrow>Your 24/7 teammates</Eyebrow>
              <h2 className="h2 text-txt-primary md:whitespace-pre-line" style={HEAD_FF}>Start with the work that keeps coming back</h2>
              <div className="font-inter text-500 font-430 text-txt-secondary md:whitespace-pre-line">
                {'Placeholder copy about picking a ready-made agent for recurring planning, delivery, and reporting work.\nThen shape it to fit your team and context.'}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" aria-label="Previous" onClick={() => scroll(-1)} className={nav}><Chevron d="m15 18-6-6 6-6" /></button>
              <button type="button" aria-label="Next" onClick={() => scroll(1)} className={nav}><Chevron d="m9 18 6-6-6-6" /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-11">
        <div
          ref={track}
          className="flex w-full snap-x snap-mandatory scroll-pl-4 gap-6 overflow-auto pl-4 [scrollbar-width:none] sm:scroll-pl-8 sm:pl-8 xl:scroll-pl-[calc((100vw-1256px)/2)] xl:pl-[calc((100vw-1256px)/2)] 2xl:scroll-pl-[calc((100vw-1448px)/2)] 2xl:pl-[calc((100vw-1448px)/2)] [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map((c, i) => (
            <div key={c.title} className="relative w-3/5 shrink-0 snap-start overflow-hidden rounded-xl border border-line-strong bg-white sm:w-4/5 lg:w-1/4">
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40" style={{ background: `linear-gradient(to bottom, ${c.grad}, #ffffff)` }} />
              <div className="relative flex h-full flex-col gap-6 p-6">
                <div className="size-20">
                  <img src={`${A}/canvas-${i + 2}.png`} alt="" aria-hidden="true" className="h-full w-full" />
                </div>
                <div className="space-y-1.5">
                  <h5 className="font-satoshi font-430 text-[22px] leading-[1.3] tracking-[-0.03em] text-txt-primary md:whitespace-pre-line md:text-[24px]" style={HEAD_FF}>{c.title}</h5>
                  <div className="font-inter text-400 font-430 text-txt-secondary md:whitespace-pre-line">{c.desc}</div>
                </div>
                <div className="mt-auto space-y-3">
                  <div className="text-sm font-semibold text-txt-tertiary">Works on</div>
                  <div className="flex flex-wrap gap-2">
                    {c.works.map(([label, icon]) => (
                      <span key={label} className="flex items-center gap-1.5 rounded-lg bg-line-n2 px-2 py-1.5 text-xs text-txt-primary">
                        {icon ? (
                          <img src={`${A}/${icon}`} alt={label} width="16" height="16" className="size-4" />
                        ) : (
                          <span className="size-4 [&>svg]:size-4" dangerouslySetInnerHTML={{ __html: AGENT_ICONS[label] }} />
                        )}
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-txt-tertiary">Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {c.skills.map((s) => (
                      <span key={s} className="rounded-lg bg-line-n2 px-2 py-1.5 text-xs text-txt-primary">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Shows up (dark bento) ---------------- */
const SHOWS = [
  { grid: 'grid grid-cols-1 gap-6 md:grid-cols-2', cards: [
    ['Assign it work', 'Placeholder copy about assigning an agent to a work item so it picks up context and starts.', 'mt-auto px-4 pb-4 md:px-8 md:pb-7', 'screenshot-agent-assign-bento.webp'],
    ['Mention it', 'Placeholder copy about mentioning an agent in a conversation to gather details or take a next step.', 'mt-auto px-4 pb-4 md:px-8 md:pb-7', 'screenshot-agent-mention-bento.webp'],
  ] },
  { grid: 'grid grid-cols-1 gap-6 md:grid-cols-3', cards: [
    ['Trigger it from change', 'Placeholder copy about starting an agent when work is created, updated, moved, or removed.', 'flex flex-1 items-center justify-end pl-4 md:pl-8', 'screenshot-agent-trigger-bento.webp'],
    ['Connect work across tools', 'Placeholder copy about letting agents use chosen tools and trusted sources for context.', 'mt-auto px-4 pb-4 md:px-8 md:pb-7', 'screenshot-agent-tools-bento.webp'],
    ['Put recurring work on a schedule', 'Placeholder copy about running reviews and checks on a fixed or custom schedule.', 'mt-auto pl-4 md:pl-8', 'screenshot-agent-schedule-bento.webp'],
  ] },
]

function ShowsUp() {
  return (
    <section aria-label="Agents show up when the work does" id="shows-up" className="bg-[#0F0F10] py-20">
      <div className="container-page">
        <div className="space-y-11">
          <div className="flex flex-col gap-6 md:items-center md:text-center">
            <div className="space-y-3">
              <h2 className="h2 text-txt-primary md:whitespace-pre-line" style={HEAD_FF}><span className="text-[#E4E6E7]">Agents show up when the work does</span></h2>
              <div className="font-inter text-600 font-430 text-txt-secondary md:whitespace-pre-line">
                <span className="text-[#CACDCE]">Placeholder copy about calling on an agent that acts with context and reports back in place.</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 md:items-center md:justify-center">
              {BTN_ROW.map((b) => <Btn key={b.label} {...b} dark />)}
            </div>
          </div>
          <div className="space-y-6">
            {SHOWS.map((row, r) => (
              <div key={r} className={row.grid}>
                {row.cards.map(([t, d, imgCls, img]) => (
                  <div key={t} className="flex h-full flex-col overflow-hidden rounded-xl border-[0.5px] border-[#2C2E30] bg-[#181A1B]">
                    <div className="p-4 py-4 md:p-8 md:py-7">
                      <div className="space-y-1.5">
                        <div className="font-inter text-600 font-medium text-txt-on-color md:whitespace-pre-line">{t}</div>
                        <div className="font-inter text-400 font-430 text-txt-primary md:whitespace-pre-line"><span className="text-[#CACDCE]">{d}</span></div>
                      </div>
                    </div>
                    <div className={imgCls}>
                      <img src={`${A}/${img}`} alt={t} className="h-auto w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Control and visibility (top image + 3 tabs) ---------------- */
const CONTROL = [
  ['Choose its reach', 'Placeholder copy about picking the projects, trusted sources, and tools each agent may use.', 'screenshot-agent-control-bento.webp'],
  ['Choose whose access it uses', 'Placeholder copy about giving tools access through a person or through a shared service account for a team.', 'screenshot-agent-permission-bento.webp'],
  ['See where your credits go', 'Placeholder copy about tracking adoption, completion rate, time to finish, and usage for each agent.', 'screenshot-agent-usage-bento.webp'],
]

function Control() {
  const [active, setActive] = useState(0)
  return (
    <section aria-label="Control and visibility" id="control-visibility" className="py-20">
      <div className="container-page">
        <div className="space-y-11">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <Eyebrow>Control and visibility</Eyebrow>
              <h2 className="h2 text-txt-primary md:whitespace-pre-line" style={HEAD_FF}>Set the boundaries. Follow every run.</h2>
              <div className="font-inter text-500 font-430 text-txt-secondary md:whitespace-pre-line">
                {'Placeholder copy about deciding where each agent works and what it may reach, and seeing when it runs and \nwhat it returns.'}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {BTN_ROW.map((b) => <Btn key={b.label} {...b} />)}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="hidden md:mb-10 md:block">
              <div className="relative w-full overflow-hidden rounded-xl">
                <img src={`${A}/${CONTROL[0][2]}`} alt="" aria-hidden="true" className="invisible w-full" />
                <div className="absolute inset-0">
                  {CONTROL.map(([t, , img], i) => (
                    <div key={t} className={`absolute inset-0 transition-opacity duration-300 ${i === active ? 'z-10 opacity-100' : 'opacity-0'}`}>
                      <img src={`${A}/${img}`} alt={t} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {CONTROL.map(([t, d, img], i) => {
                const on = i === active
                return (
                  <div key={t}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`relative w-full cursor-pointer space-y-1.5 border-t pt-4 text-left ${on ? 'border-txt-primary' : 'border-line-subtle'}`}
                    >
                      <div className={`font-inter text-500 font-570 md:whitespace-pre-line ${on ? 'text-txt-primary' : 'text-txt-tertiary'}`}>{t}</div>
                      <div className={`font-inter text-400 font-430 md:whitespace-pre-line ${on ? 'text-txt-secondary' : 'text-txt-tertiary'}`}>{d}</div>
                      {on && <TabBar />}
                    </button>
                    {on && (
                      <div className="mt-4 overflow-hidden rounded-xl md:hidden">
                        <img src={`${A}/${img}`} alt={t} className="h-full w-full object-cover" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Final CTA ---------------- */
function FinalCta() {
  return (
    <section aria-label="Final call to action" id="final-cta" className="overflow-hidden bg-[#0e0f10]">
      <div className="relative flex min-h-[420px] w-full flex-col items-center justify-center gap-8 py-16 md:flex-row md:gap-0 md:py-40">
        <div className="pointer-events-none aspect-[2/1] w-full md:aspect-[531/216] md:absolute md:left-0 md:top-1/2 md:-ml-10 md:w-[300px] md:-translate-y-1/2 lg:w-[500px]">
          <img src={`${A}/canvas-7.png`} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        </div>
        <div className="container-page">
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-10 text-center md:gap-16">
            <h2 className="h2 md:whitespace-pre-line" style={HEAD_FF}>
              <span className="text-[#E4E6E7]">{'The work keeps coming.\nPut an Agent on it.'}</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Btn label="Try Plane today" href={SIGNUP} kind="primary" dark />
              <Btn label="Talk to a migration expert" href="/talk-to-sales" kind="secondary" dark />
            </div>
          </div>
        </div>
        <div className="pointer-events-none aspect-[2/1] w-full md:aspect-[528/239] md:absolute md:right-0 md:top-1/2 md:-mr-10 md:w-[300px] md:-translate-y-1/2 lg:w-[500px]">
          <img src={`${A}/canvas-8.png`} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default function Agents() {
  return (
    <div className="font-inter">
      <Hero />
      <BuildAgents />
      <ReadyMade />
      <ShowsUp />
      <Control />
      <FinalCta />
    </div>
  )
}
