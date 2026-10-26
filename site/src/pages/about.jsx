// /about — cinematic scroll page (sticky frames sized in svh). Measured live 2026-10-26 at 1440x900 and 390x900:
//   hero+principles wrapper 0→4500 (hero 100svh + principles 400svh), reason 4500→6750 (250svh),
//   our-story 6750→12555 (645svh), mission 12555→13905 (150svh).
// Live renders its own transparent fixed header instead of the global one (see handoff).
// This file builds the static frames; every scroll-driven state (active principle, word reveal,
// Then→Now loop, story intro → timeline, year/month stepping) is exposed as a `step`-style prop or
// constant so the Animation pass can drive it. Paragraph prose is placeholder (content rule).
import '../components/company/company.css'
import principlesSvg from '../components/company/about-principles.svg?raw'
import { ph } from '../components/company/placeholder.js'

const A = '/assets/company/about/'
const WRAP = 'px-6 sm:px-10 lg:px-16 xl:px-[8.5%]'

const PRINCIPLES = [
  ['Consolidation', 'Projects, knowledge, service, and decisions belong together, so the context behind work stays with it.'],
  ['Coordination', 'Humans and agents need shared context, clear ownership, and explicit handoffs to work well together.'],
  ['Cognition', 'What an organization learns should outlast any one project. Decisions and their context should inform the work that follows.'],
]

// Story timeline (titles + months live; one-line descriptions are placeholder, ~live length)
const TIMELINE = [
  ['2023', [['Jan', 'Open-source debut', 65], ['Nov', '$4M seed round', 59]]],
  ['2024', [['', 'Commercial Edition', 71]]],
  ['2025', [['Jan', 'Teamspaces', 64], ['Feb', 'Initiatives', 65], ['Apr', 'Workflows', 71], ['Jun', 'Airgapped Plane', 80], ['Jul', 'Wiki and Pages', 62], ['Aug', 'Planes of Work', 72], ['Sep', 'Community v1.0', 75], ['Nov', 'Plane AI actions', 63]]],
  ['2026', [['Mar', '50K GitHub stars', 66], ['Jun', 'Plane Runner', 69], ['Jun', 'Enterprise Grid', 85]]],
]

function Principles({ active = 0 }) {
  return (
    <section className="relative h-[400svh] w-full bg-[#0000004D]">
      <div className="sticky top-0 flex h-svh items-center">
        <div className={`w-full ${WRAP}`}>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div className="min-w-0">
              <h2 id="anatomy-heading" className="font-satoshi text-[30px] font-[400] leading-[1.15] tracking-[-0.025em] text-white md:text-[40px]">The principles behind Plane</h2>
              <ol className="relative mt-10 md:mt-14">
                <span className="absolute left-[3px] top-[27px] h-[calc(100%-60px)] w-px bg-white/25" />
                <span className="absolute left-[3px] top-[27px] h-0 w-px bg-white" />
                {PRINCIPLES.map(([t, d], i) => (
                  <li key={t} className="relative py-3 pl-12 md:pl-14">
                    <span className={`absolute left-0 top-[1.45rem] size-[7px] transition-colors duration-500 motion-reduce:transition-none ${i === active ? 'bg-white' : 'bg-white/30'}`} />
                    <h3 className={`font-satoshi text-[24px] font-[400] leading-[1.2] tracking-[-0.02em] transition-colors duration-500 motion-reduce:transition-none md:text-[30px] ${i === active ? 'text-white' : 'text-white/55'}`}>{t}</h3>
                    <div className={`grid transition-all duration-500 ease-out motion-reduce:transition-none ${i === active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <p className="max-w-md overflow-hidden text-[15px] font-[400] leading-[1.6] text-white/70 md:text-[16px]"><span className="block pt-3">{d}</span></p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex min-h-[420px] items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-[632px]">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 backdrop-blur-[10px]" style={{ clipPath: 'url(#about-glass-stack)' }} />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 backdrop-blur-[10px]" style={{ clipPath: 'url(#about-glass-sides)', opacity: 0 }} />
                <div className="relative w-full max-w-[632px] [&>svg]:h-auto [&>svg]:w-full" dangerouslySetInnerHTML={{ __html: principlesSvg }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Reason({ now = false }) {
  return (
    <div className="bg-white">
      <div className="container-page">
        <section className="relative h-[250svh]">
          <div className="sticky top-0 flex min-h-svh items-center">
            <div className="w-full py-8 md:py-16">
              <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <h2 id="reason-heading" className="text-balance font-satoshi text-[30px] font-[400] leading-[1.15] tracking-[-0.025em] text-txt-primary md:text-[40px]">Faster loops need better coordination</h2>
                <div className="space-y-5">
                  <p className="text-[17px] font-[400] leading-[1.7] text-txt-primary md:text-[18px]">{ph(372, 0)}</p>
                  <p className="text-[17px] font-[400] leading-[1.7] text-txt-primary md:text-[18px]">{ph(208, 5)}</p>
                </div>
              </div>
              <figure className="relative isolate mt-8 grid min-h-[200px] grid-cols-[minmax(0,1fr)] overflow-hidden rounded-2xl md:mt-16 md:min-h-[312px]">
                <img src={A + 'execution-loop.webp'} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
                <div className="col-start-1 row-start-1 flex items-center justify-center px-6 py-14">
                  <div className="scale-[0.46] sm:scale-[0.72] md:scale-90 lg:scale-100">
                    <div className="flex items-center gap-2">
                      <span className="mr-3 grid w-9 justify-items-end">
                        <span className="col-start-1 row-start-1 whitespace-nowrap text-[15px] font-[400] leading-none text-white" style={{ opacity: now ? 0 : 1 }}>Then</span>
                        <span className="col-start-1 row-start-1 whitespace-nowrap text-[15px] font-[400] leading-none text-white" style={{ opacity: now ? 1 : 0 }}>Now</span>
                      </span>
                      <span className="flex h-16 shrink-0 items-center justify-center rounded-xl bg-black/20 text-[15px] font-[400] leading-none text-white" style={{ width: 104 }}>Decide</span>
                      <span className="flex h-16 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/20 text-[15px] font-[400] leading-none text-white" style={{ width: now ? 106 : 418 }}>Execute</span>
                      <span className="flex h-16 shrink-0 items-center justify-center rounded-xl bg-black/20 text-[15px] font-[400] leading-none text-white" style={{ width: 104 }}>Judge</span>
                    </div>
                  </div>
                </div>
                <figcaption className="col-start-1 row-start-1 self-end px-6 pb-6 text-center text-[13px] leading-[1.5] text-white/85">Execution collapsed to machine speed. Deciding and judging still run at human speed.</figcaption>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// phase: 'intro' (heading + paragraph) | 'timeline' (rule + details row); year/item = active milestone
function Story({ phase = 'intro', year = 0, item = 0 }) {
  const [, items] = TIMELINE[year]
  const cur = items[item]
  const showTimeline = phase === 'timeline'
  return (
    <section id="our-story" aria-labelledby="our-story-heading" className="relative h-[645svh]">
      <div className="sticky top-0 h-svh overflow-hidden">
        <img src={A + 'story-bg.webp'} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center" style={{ opacity: showTimeline ? 0 : 1 }}>
          <h2 id="our-story-heading" className="font-satoshi text-[clamp(2.25rem,4vw,3.5rem)] font-[400] leading-[1.1] tracking-[-0.02em] text-white">Our story</h2>
          <div className="mt-10 max-w-[640px] space-y-5 text-[clamp(1rem,1.25vw,1.1875rem)] leading-[1.6] text-white">
            <p>{ph(252, 7)}</p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 sm:px-8 xl:px-11">
          <div className="mx-auto w-full xl:max-w-336 2xl:max-w-384">
            <span className="block h-px w-full origin-center bg-white/70" style={{ opacity: showTimeline ? 1 : 0, transform: `scaleX(${showTimeline ? 1 : 0})` }} />
            <div data-timeline-details="true" className="mt-6 grid gap-x-6 gap-y-4 lg:mt-[26px] lg:grid-cols-[139px_113px_379px_221px_minmax(0,1fr)] lg:gap-0" style={{ opacity: showTimeline ? 1 : 0 }}>
              <p className="text-[15px] leading-none text-white">Our story</p>
              <div className="relative lg:h-[42px]">
                <div className="flex gap-3 lg:hidden">
                  {TIMELINE.map(([y], i) => <p key={y} className={`font-satoshi text-[22px] font-[400] leading-none transition-colors duration-500 ${i === year ? 'text-white' : 'text-white/35'}`}>{y}</p>)}
                </div>
                <div className="absolute left-0 top-0 hidden lg:block">
                  {TIMELINE.map(([y], i) => <p key={y} className={`flex h-[42px] items-start font-satoshi text-[26px] font-[400] leading-none transition-colors duration-500 ${i === year ? 'text-white' : 'text-white/35'}`}>{y}</p>)}
                </div>
              </div>
              <div className="flex flex-wrap items-start gap-x-4 gap-y-2">
                {items.map(([m], i) => m && <span key={i} className={`text-[15px] leading-none transition-colors duration-300 ${i === item ? 'text-white' : 'text-white/35'}`}>{m}</span>)}
              </div>
              <p className="text-[15px] leading-none text-white">{cur[1]}</p>
              <p className="max-w-[420px] text-[15px] leading-[1.6] text-white">{ph(cur[2], year * 10 + item)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <div className="bg-white">
      <div className="container-page">
        <section className="relative h-[150svh]">
          <div className="sticky top-0 flex min-h-svh items-center py-16 md:py-24">
            <div className="relative isolate w-full overflow-hidden rounded-[24px] md:rounded-[28px]">
              <img src={A + 'mission-bg.webp'} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
              <div className="flex min-h-[440px] flex-col justify-between gap-16 p-8 md:p-12 lg:min-h-[600px] lg:p-16">
                <div className="flex flex-col-reverse items-start gap-6 md:flex-row md:justify-between md:gap-8">
                  <h2 id="mission-heading" className="max-w-[620px] font-satoshi text-[26px] font-[400] leading-[1.3] tracking-[-0.02em] text-white md:text-[32px] lg:text-[40px]">Building the system where all forms of work consolidate, humans and agents coordinate, and organizations develop intelligence</h2>
                  <p className="whitespace-nowrap text-[12px] uppercase leading-[1.5] tracking-[0.12em] text-white md:text-[13px]" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace' }}>Our mission</p>
                </div>
                <div>
                  <p className="max-w-[380px] text-[14px] leading-[1.6] text-white/85 md:text-[15px]">Projects, knowledge, and service, one system for humans and agents, running anywhere</p>
                  <div className="mt-6">
                    <a href="/careers" className="btn-primary-dark !px-3 !py-1.5 !text-[14px] !leading-[21px]">Explore careers</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="font-inter text-txt-primary">
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#5f6a5c]">
          <div className="sticky top-0 h-svh w-full overflow-hidden">
            <img src={A + 'hero-bg.webp'} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/25" />
          </div>
        </div>
        <section className={`flex min-h-svh w-full flex-col justify-center gap-8 pb-14 pt-[calc(66px+2rem)] md:justify-between md:gap-16 md:pb-20 md:pt-[calc(66px+5rem)] ${WRAP}`}>
          <h1 id="about-heading" className="text-balance font-satoshi text-[clamp(2.25rem,6.2vw,6.5rem)] font-[400] leading-[1.12] tracking-[-0.03em] text-white">
            <span className="block">Work infrastructure</span>
            <span className="block">for humans and agents</span>
          </h1>
          <div className="max-w-[46rem] space-y-6 text-white/90">
            <p className="text-[clamp(1rem,1.3vw,1.375rem)] font-[400] leading-[1.6]">We’re building one connected system for projects, knowledge, and service, with shared context for teams and the agents they work with.</p>
            <p className="text-[clamp(1rem,1.3vw,1.375rem)] font-[400] leading-[1.6]">It runs in our cloud, your cloud, or no cloud at all.</p>
          </div>
        </section>
        <Principles active={0} />
      </div>
      <Reason />
      <Story phase="intro" />
      <Mission />
    </div>
  )
}
