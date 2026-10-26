// /switch — Switch to Plane
// Structure converted from the live plane.so DOM (headless); long prose replaced with neutral placeholder copy.
import { useState } from 'react'

const SWITCHFAQ_ITEMS = [
  {
    q: "How do we know Plane fits the way our team works?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Small teams start quickly, and larger groups scale without extra setup. Use the views you prefer and switch between them without losing context. Connect the tools you already use and keep updates flowing.</div>
        <a className="text-txt-accent self-start text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="#tool-comparison">Compare your current tool</a>
      </>
    ),
  },
  {
    q: "What can we bring from our current tool?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">The workspace stays fast and simple even as more people join the effort. Sample text stands in for the original paragraph at a similar length. Set it up once and adjust the details as your process grows over time.</div>
        <a className="text-txt-accent self-start text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="https://docs.plane.so/importers/overview">Check what your importer supports</a>
      </>
    ),
  },
  {
    q: "What will we need to set up in Plane?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Work moves forward with fewer handoffs and clearer ownership for each task. A short description of how this feature helps teams plan and ship work. Placeholder copy describes the benefit here in a neutral, generic way. Small teams.</div>
        <a className="text-txt-accent self-start text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="https://docs.plane.so/importers/overview">Review the importer guides</a>
      </>
    ),
  },
  {
    q: "Can we move from Jira Data Center?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups scale without extra setup. Use the views you prefer and switch between them without losing context. Connect the tools you already use.</div>
        <a className="text-txt-accent self-start text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="https://docs.plane.so/importers/jira">Read the Jira migration guide</a>
      </>
    ),
  },
  {
    q: "Can we try one project before moving the team?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups scale without extra setup. Use the views you prefer and switch between them without losing context. Connect the tools you already.</div>
        <a className="text-txt-accent self-start text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="#how-it-works">See how switching works</a>
      </>
    ),
  },
  {
    q: "Can we keep Plane on our own infrastructure?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Work moves forward with fewer handoffs and clearer ownership for each task. A short description of how this feature helps teams plan and ship work. Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly.</div>
        <a className="text-txt-accent self-start text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="/self-hosted">Explore self-hosting</a>
      </>
    ),
  },
  {
    q: "Can Plane help with a complex migration?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Sample text stands in for the original paragraph at a similar length. Set it up once and adjust the details as your process grows over time. Reports summarize progress so leads can spot risks before they grow daily.</div>
        <a className="text-txt-accent self-start text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="/talk-to-sales">Talk to our team</a>
      </>
    ),
  },
  {
    q: "What if we’re still paying for our current tool?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Work moves forward with fewer handoffs and clearer ownership for each task. A short description of how this feature helps teams plan and ship work. Placeholder copy describes the benefit here again.</div>
        <a className="text-txt-accent self-start text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="/talk-to-sales">Discuss your contract match</a>
      </>
    ),
  },
  {
    q: "Can we take our data with us if we leave Plane?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Work moves forward with fewer handoffs and clearer ownership for each task. A short description of how this feature helps teams plan and ship work.</div>
        <a className="text-txt-accent self-start text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2" href="https://docs.plane.so/core-concepts/export">See export options</a>
      </>
    ),
  },
]

// FAQ accordion (single open, first open by default). Live uses a 300ms grid-rows transition.
function SwitchFaq() {
  const [open, setOpen] = useState(0)
  return SwitchFaq.ITEMS.map((f, i) => {
    const on = open === i
    return (
      <div key={i} className="border-line-subtle border-t">
        <button
          aria-controls={`switch-faq-answer-${i}`}
          aria-expanded={on}
          className={`focus-visible:outline-txt-accent flex w-full cursor-pointer items-start justify-between gap-4 py-4 text-left transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 ${on ? 'border-line-strong' : ''}`}
          id={`switch-faq-question-${i}`}
          type="button"
          onClick={() => setOpen(on ? -1 : i)}
        >
          <span className="flex-1">
            <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-medium">{f.q}</div>
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide ${on ? 'lucide-chevron-down' : 'lucide-chevron-right'} text-txt-tertiary h-5 w-5 shrink-0`} aria-hidden="true">
            <path d={on ? 'm6 9 6 6 6-6' : 'm9 18 6-6-6-6'} />
          </svg>
        </button>
        <div aria-hidden={!on} aria-labelledby={`switch-faq-question-${i}`} className={`grid transition-all duration-300 ease-out ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`} id={`switch-faq-answer-${i}`} role="region" inert={on ? undefined : ''}>
          <div className="min-h-0 overflow-hidden">
            <div className="flex flex-col gap-3 pb-4">{f.a}</div>
          </div>
        </div>
      </div>
    )
  })
}
SwitchFaq.ITEMS = SWITCHFAQ_ITEMS

export default function SwitchPage() {
  return (
    <div className="font-satoshi text-[16px] font-normal leading-normal text-black">
      {/* ---- section 0 ---- */}
      <div className="relative min-h-screen">
        <div className="relative z-10 flex flex-col">
          <section aria-label="Switch to Plane" className="relative overflow-hidden" id="hero">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10">
              <img alt="" aria-hidden="true" width="3024" height="782" className="h-auto w-full object-cover object-top" srcSet="/assets/compare/hero-bg.webp 1.4175x" />
            </div>
            <div className="container-page">
              <div className="flex flex-col items-start gap-6 py-16 text-left sm:py-20 md:items-center md:text-center lg:py-28">
                <h1 className="md:whitespace-pre-line font-satoshi h1 text-txt-primary font-430">Switch to Plane</h1>
                <div className="max-w-xl">
                  <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Use the views you prefer and switch between them without losing context. Connect the tools you already use and keep updates flowing in both.</div>
                </div>
                <div className="flex flex-wrap items-center justify-start gap-4 md:justify-center">
                  <a className="btn-primary inline font-inter" href="https://app.plane.so/sign-up">Get started free</a>
                  <a className="btn-secondary inline font-inter" href="/talk-to-sales">Book a demo</a>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Humans and agents, working together" id="work-runs-on">
            <div className="container-page">
              <div className="flex flex-col gap-12 py-10 sm:py-14 lg:gap-16 lg:py-20">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                  <div className="[&_h2]:text-[24px] [&_h2]:leading-[1.3] [&_h2]:tracking-[-0.03em] sm:[&_h2]:text-[32px] md:[&_h2]:text-[44px]">
                    <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">
                      Humans and agents,
                      <br />
                      working together
                    </h2>
                  </div>
                  <div className="flex max-w-[52ch] flex-col gap-6 lg:pt-2">
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Everyone can see what is planned, what is in progress, and what is done. Bring existing data along and pick up right where the team left off. This section explains the idea in plain words so readers.</div>
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">This section explains the idea in plain words so readers can scan it quickly. Admins get the controls.</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-y-10 lg:-mx-6 lg:grid-cols-3">
                  <article aria-labelledby="switch-principle-process" className="border-line-subtle flex min-w-0 flex-col gap-6 border-t pt-8 first:border-t-0 first:pt-0 sm:grid sm:grid-cols-2 sm:items-center lg:flex lg:items-stretch lg:border-t-0 lg:border-l lg:px-6 lg:pt-0 lg:first:border-l-transparent">
                    <div className="relative aspect-square w-full overflow-hidden">
                      <img alt="" aria-hidden="true" className="object-contain" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/built.webp" srcSet="/assets/compare/built.webp 1200w" sizes="(min-width: 1536px) 451px, (min-width: 1280px) 387px, (min-width: 1024px) calc((100vw - 160px) / 3), (min-width: 640px) calc((100vw - 88px) / 2), calc(100vw - 32px)" />
                    </div>
                    <div className="flex flex-col gap-3 [text-wrap:balance]">
                      <h3 className="md:whitespace-pre-line font-satoshi text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[24px] text-txt-primary font-430" id="switch-principle-process">Built around your team</h3>
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Teams keep their projects, notes, and updates together in one shared place.</div>
                    </div>
                  </article>
                  <article aria-labelledby="switch-principle-people-and-agents" className="border-line-subtle flex min-w-0 flex-col gap-6 border-t pt-8 first:border-t-0 first:pt-0 sm:grid sm:grid-cols-2 sm:items-center lg:flex lg:items-stretch lg:border-t-0 lg:border-l lg:px-6 lg:pt-0 lg:first:border-l-transparent">
                    <div className="relative aspect-square w-full overflow-hidden">
                      <img alt="" aria-hidden="true" className="object-contain" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/people.webp" srcSet="/assets/compare/people.webp 1200w" sizes="(min-width: 1536px) 451px, (min-width: 1280px) 387px, (min-width: 1024px) calc((100vw - 160px) / 3), (min-width: 640px) calc((100vw - 88px) / 2), calc(100vw - 32px)" />
                    </div>
                    <div className="flex flex-col gap-3 [text-wrap:balance]">
                      <h3 className="md:whitespace-pre-line font-satoshi text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[24px] text-txt-primary font-430" id="switch-principle-people-and-agents">Humans lead, agents contribute</h3>
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Use the views you prefer and switch between them without losing context. Connect the tools daily.</div>
                    </div>
                  </article>
                  <article aria-labelledby="switch-principle-control" className="border-line-subtle flex min-w-0 flex-col gap-6 border-t pt-8 first:border-t-0 first:pt-0 sm:grid sm:grid-cols-2 sm:items-center lg:flex lg:items-stretch lg:border-t-0 lg:border-l lg:px-6 lg:pt-0 lg:first:border-l-transparent">
                    <div className="relative aspect-square w-full overflow-hidden">
                      <img alt="" aria-hidden="true" className="object-contain" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/run.webp" srcSet="/assets/compare/run.webp 1200w" sizes="(min-width: 1536px) 451px, (min-width: 1280px) 387px, (min-width: 1024px) calc((100vw - 160px) / 3), (min-width: 640px) calc((100vw - 88px) / 2), calc(100vw - 32px)" />
                    </div>
                    <div className="flex flex-col gap-3 [text-wrap:balance]">
                      <h3 className="md:whitespace-pre-line font-satoshi text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[24px] text-txt-primary font-430" id="switch-principle-control">Run it on your terms</h3>
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">A short description of how this feature helps teams plan and ship.</div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Introducing Plane" className="bg-surface-2" id="introducing-plane">
            <div className="container-page">
              <div className="flex flex-col gap-12 py-10 sm:py-14 lg:gap-16 lg:py-20">
                <div className="flex flex-col gap-4">
                  <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-medium">INTRODUCING PLANE</div>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16">
                    <div className="[&_h2]:text-[24px] [&_h2]:leading-[1.3] [&_h2]:tracking-[-0.03em] sm:[&_h2]:text-[32px] md:[&_h2]:text-[44px]">
                      <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">
                        Work infrastructure
                        <br />
                        for humans and agents
                      </h2>
                    </div>
                    <div className="flex max-w-[52ch] flex-col gap-6 lg:pt-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Set it up once and adjust the details as your process grows over time. Reports summarize progress so leads can spot risks too well again.</div>
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Bring existing data along and pick up right where the team left off. This section explains the idea.</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center gap-2 gap-y-4 md:grid-cols-6 md:gap-6 md:gap-y-8">
                  <div className="flex items-center justify-center">
                    <img alt="Sony" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/sony.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Aramco" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/aramco.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Dolby" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/dolby.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Accenture" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/accenture.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Power Integrations" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/power-integration.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Amazon" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/amazon.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Essor" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/essor.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="40AU" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/forty-au.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Hypersonica" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/hypersonica.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="SSI" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/ssi.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Ruby Labs" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/ruby-labs.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="République Française" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/republique-francaise.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Government of Lithuania" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/gov-of-lithuania.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Mirador Therapeutics" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/mirador-therapeutics.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Texelis" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/texelis.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="OptiGRÜN" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/optigrun.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Stark Bank" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/starkbank.svg" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img alt="Datum" width="190" height="56" className="h-auto max-h-14 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/datum.svg" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Why switch" id="why-switch">
            <div className="container-page">
              <div className="flex flex-col gap-20 py-10 sm:py-14 lg:gap-28 lg:py-20">
                <div className="flex flex-col items-start gap-4 text-left md:items-center md:text-center">
                  <div className="[&_h2]:text-[24px] [&_h2]:leading-[1.3] [&_h2]:tracking-[-0.03em] sm:[&_h2]:text-[32px] md:[&_h2]:text-[44px] flex flex-col gap-4 [text-wrap:balance]">
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-medium">WHY SWITCH</div>
                    <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">What your team gains with Plane</h2>
                  </div>
                  <div className="max-w-[68ch] [text-wrap:balance]">
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Shape all of it to match how your team already works.</div>
                  </div>
                </div>
                <div className="flex flex-col gap-20 lg:gap-28">
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center gap-4">
                      <h4 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-m-900 md:text-900 text-txt-primary font-430">Workflows that fit your team</h4>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups scale without extra setup. Use the views.</div>
                    </div>
                    <div className="border-line-subtle relative w-full self-start overflow-hidden rounded-xl border" style={{"aspectRatio":"3 / 2"}}>
                      <img alt="Plane workflow automation rules" className="object-cover" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/screenshot-workflows-cards.webp" srcSet="/assets/compare/screenshot-workflows-cards.webp 1848w" sizes="(max-width: 1023px) 100vw, 50vw" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center gap-4 lg:order-2">
                      <h4 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-m-900 md:text-900 text-txt-primary font-430">Bring agents into daily work</h4>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">The workspace stays fast and simple even as more people join the effort. Sample text stands in for the original paragraph at a similar length. Set.</div>
                    </div>
                    <div className="border-line-subtle relative w-full self-start overflow-hidden rounded-xl border lg:order-1" style={{"aspectRatio":"3 / 2"}}>
                      <img alt="Agents working alongside a team on a Plane board" className="object-cover" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/screenshot-agents-cards.webp" srcSet="/assets/compare/screenshot-agents-cards.webp 1848w" sizes="(max-width: 1023px) 100vw, 50vw" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center gap-4">
                      <h4 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-m-900 md:text-900 text-txt-primary font-430">Give every team a useful view</h4>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Bring existing data along and pick up right where the team left off. This section explains the idea in plain words so readers can scan it quickly. Admins weekly instead.</div>
                    </div>
                    <div className="border-line-subtle relative w-full self-start overflow-hidden rounded-xl border" style={{"aspectRatio":"3 / 2"}}>
                      <img alt="Plane query language filtering a saved view" className="object-cover" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/screenshot-pql-cards.webp" srcSet="/assets/compare/screenshot-pql-cards.webp 1848w" sizes="(max-width: 1023px) 100vw, 50vw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="How switching works" className="bg-surface-2" id="how-it-works">
            <div className="container-page">
              <div className="flex flex-col gap-10 py-10 sm:py-14 lg:py-20">
                <div className="flex flex-col gap-4">
                  <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-medium">HOW SWITCHING WORKS</div>
                  <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">Three steps, one project at a time</h2>
                </div>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
                  <div className="border-line-subtle flex min-h-72 flex-col gap-4 border-l pr-8 pl-6">
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-medium">01</div>
                    <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">Import one project</div>
                    <div className="mt-auto flex flex-col gap-4 [text-wrap:balance]">
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">The workspace stays fast and simple even as more people join again.</div>
                      <a className="w-fit" href="https://docs.plane.so/importers/overview">
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-medium">
                          See import options
                          ↗
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="border-line-subtle flex min-h-72 flex-col gap-4 border-l pr-8 pl-6">
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-medium">02</div>
                    <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">Rebuild your setup</div>
                    <div className="mt-auto flex flex-col gap-4 [text-wrap:balance]">
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Use the views you prefer and switch between them without losing context.</div>
                      <a className="w-fit" href="#migration-blueprint">
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-medium">
                          See what to rebuild
                          ↗
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="border-line-subtle flex min-h-72 flex-col gap-4 border-l pr-8 pl-6">
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-medium">03</div>
                    <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">Move your team</div>
                    <div className="mt-auto flex flex-col gap-4 [text-wrap:balance]">
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Reports summarize progress so leads can spot risks before they grow. Everyone.</div>
                      <a className="w-fit" href="/talk-to-sales">
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-medium">
                          Get migration help
                          ↗
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Which tool are you leaving?" className="py-20" id="tool-comparison">
            <div className="container-page">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col items-start gap-2 text-left">
                  <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">Which tool are you leaving?</h2>
                  <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">See what your team can gain by switching to Plane.</div>
                </div>
                <div className="flex items-center gap-2">
                  <button aria-label="Previous tools" className="font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none cursor-pointer disabled:bg-layer-disabled disabled:text-disabled text-center font-inter p-2 text-500 bg-white hover:text-txt-primary border border-line-n2 hover:border-line-card hover:bg-layer-1 aspect-square">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true">
                      <path d="m12 19-7-7 7-7" />
                      <path d="M19 12H5" />
                    </svg>
                  </button>
                  <button aria-label="Next tools" className="font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none cursor-pointer disabled:bg-layer-disabled disabled:text-disabled text-center font-inter p-2 text-500 bg-white hover:text-txt-primary border border-line-n2 hover:border-line-card hover:bg-layer-1 aspect-square">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-11">
              <div className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex w-full snap-x snap-mandatory scroll-pl-4 gap-6 overflow-auto pl-4 sm:scroll-pl-8 sm:pl-8 xl:scroll-pl-[calc((100vw-1256px)/2)] xl:pl-[calc((100vw-1256px)/2)] 2xl:scroll-pl-[calc((100vw-1448px)/2)] 2xl:pl-[calc((100vw-1448px)/2)]">
                <a aria-labelledby="tool-comparison-jira" className="group focus-visible:ring-brand-default flex w-3/5 shrink-0 snap-start flex-col gap-4 rounded-xl focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset sm:w-2/5 lg:w-1/5" href="/plane-vs-jira">
                  <div className="relative w-full overflow-hidden rounded-xl" style={{"aspectRatio":"888 / 1116"}}>
                    <img alt="" aria-hidden="true" className="object-cover transition-opacity duration-800 ease-out group-hover:opacity-0 group-focus-visible:opacity-0" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vsjira-default.webp" srcSet="/assets/compare/vsjira-default.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                    <img alt="" aria-hidden="true" className="object-cover opacity-0 transition-opacity duration-800 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vsjira-hover.webp" srcSet="/assets/compare/vsjira-hover.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                  </div>
                  <div className="flex flex-col gap-2 [text-wrap:balance]">
                    <h3 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-medium" id="tool-comparison-jira">
                      Plane vs
                      Jira
                    </h3>
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Shape your workflows. Choose your hosting.</div>
                  </div>
                </a>
                <a aria-labelledby="tool-comparison-linear" className="group focus-visible:ring-brand-default flex w-3/5 shrink-0 snap-start flex-col gap-4 rounded-xl focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset sm:w-2/5 lg:w-1/5" href="/plane-vs-linear">
                  <div className="relative w-full overflow-hidden rounded-xl" style={{"aspectRatio":"888 / 1116"}}>
                    <img alt="" aria-hidden="true" className="object-cover transition-opacity duration-800 ease-out group-hover:opacity-0 group-focus-visible:opacity-0" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vslinear-default.webp" srcSet="/assets/compare/vslinear-default.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                    <img alt="" aria-hidden="true" className="object-cover opacity-0 transition-opacity duration-800 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vslinear-hover.webp" srcSet="/assets/compare/vslinear-hover.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                  </div>
                  <div className="flex flex-col gap-2 [text-wrap:balance]">
                    <h3 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-medium" id="tool-comparison-linear">
                      Plane vs
                      Linear
                    </h3>
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Bring engineering and business teams together.</div>
                  </div>
                </a>
                <a aria-labelledby="tool-comparison-asana" className="group focus-visible:ring-brand-default flex w-3/5 shrink-0 snap-start flex-col gap-4 rounded-xl focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset sm:w-2/5 lg:w-1/5" href="/plane-vs-asana">
                  <div className="relative w-full overflow-hidden rounded-xl" style={{"aspectRatio":"888 / 1116"}}>
                    <img alt="" aria-hidden="true" className="object-cover transition-opacity duration-800 ease-out group-hover:opacity-0 group-focus-visible:opacity-0" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vsasana-default.webp" srcSet="/assets/compare/vsasana-default.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                    <img alt="" aria-hidden="true" className="object-cover opacity-0 transition-opacity duration-800 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vsasana-hover.webp" srcSet="/assets/compare/vsasana-hover.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                  </div>
                  <div className="flex flex-col gap-2 [text-wrap:balance]">
                    <h3 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-medium" id="tool-comparison-asana">
                      Plane vs
                      Asana
                    </h3>
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Connect project plans to engineering delivery.</div>
                  </div>
                </a>
                <a aria-labelledby="tool-comparison-clickup" className="group focus-visible:ring-brand-default flex w-3/5 shrink-0 snap-start flex-col gap-4 rounded-xl focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset sm:w-2/5 lg:w-1/5" href="/plane-vs-clickup">
                  <div className="relative w-full overflow-hidden rounded-xl" style={{"aspectRatio":"888 / 1116"}}>
                    <img alt="" aria-hidden="true" className="object-cover transition-opacity duration-800 ease-out group-hover:opacity-0 group-focus-visible:opacity-0" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vsclickup-default.webp" srcSet="/assets/compare/vsclickup-default.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                    <img alt="" aria-hidden="true" className="object-cover opacity-0 transition-opacity duration-800 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vsclickup-hover.webp" srcSet="/assets/compare/vsclickup-hover.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                  </div>
                  <div className="flex flex-col gap-2 [text-wrap:balance]">
                    <h3 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-medium" id="tool-comparison-clickup">
                      Plane vs
                      ClickUp
                    </h3>
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Start simple. Add workflows as you grow.</div>
                  </div>
                </a>
                <a aria-labelledby="tool-comparison-monday" className="group focus-visible:ring-brand-default flex w-3/5 shrink-0 snap-start flex-col gap-4 rounded-xl focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset sm:w-2/5 lg:w-1/5" href="/plane-vs-monday">
                  <div className="relative w-full overflow-hidden rounded-xl" style={{"aspectRatio":"888 / 1116"}}>
                    <img alt="" aria-hidden="true" className="object-cover transition-opacity duration-800 ease-out group-hover:opacity-0 group-focus-visible:opacity-0" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vsmonday-default.webp" srcSet="/assets/compare/vsmonday-default.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                    <img alt="" aria-hidden="true" className="object-cover opacity-0 transition-opacity duration-800 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/vsmonday-hover.webp" srcSet="/assets/compare/vsmonday-hover.webp 888w" sizes="(max-width: 639px) 60vw, (max-width: 1023px) 40vw, 20vw" />
                  </div>
                  <div className="flex flex-col gap-2 [text-wrap:balance]">
                    <h3 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-medium" id="tool-comparison-monday">
                      Plane vs
                      Monday
                    </h3>
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Give every team a clear view of shared work.</div>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section aria-label="The migration blueprint" className="bg-surface-2" id="migration-blueprint">
            <div className="container-page">
              <div className="flex flex-col gap-10 py-10 sm:py-14 lg:py-20">
                <div className="flex flex-col items-start gap-3 text-left md:items-center md:text-center">
                  <div className="flex flex-col items-start gap-4 md:items-center">
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-medium">THE MIGRATION BLUEPRINT</div>
                    <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">A migration, not a restart</h2>
                  </div>
                  <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                    This section explains the idea in plain words so readers can scan it quickly. Admins get the controls they need
                    <br className="hidden sm:block" />
                    while members keep a calm, focused view. Teams again well.
                  </div>
                </div>
                <div className="-mx-2 overflow-x-auto px-2 sm:mx-0 sm:px-0">
                  <table className="w-full min-w-[640px] border-collapse">
                    <caption className="sr-only">What a typical importer carries over compared with what Plane carries over</caption>
                    <thead>
                      <tr className="border-line-subtle border-b">
                        <th className="w-1/3 px-4 py-4 text-left font-normal" scope="col">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Object</div>
                        </th>
                        <th className="w-1/3 px-4 py-4 text-left font-normal" scope="col">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">A typical importer</div>
                        </th>
                        <th className="px-4 py-4 text-left font-normal" scope="col">
                          <img alt="Plane" width="96" height="20" className="h-5 w-auto object-contain" style={{"width":"auto"}} src="/assets/compare/logo-with-wordmark.svg" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-line-subtle border-b">
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Custom fields</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Dropped</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Carried as properties with their options; unsupported kinds listed</div>
                        </td>
                      </tr>
                      <tr className="border-line-subtle border-b">
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Attachments</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Links back to Jira</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Re-uploaded, on issues and comments</div>
                        </td>
                      </tr>
                      <tr className="border-line-subtle border-b">
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Sprints, versions, components</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Not carried</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Cycles, releases, modules, with dates and members</div>
                        </td>
                      </tr>
                      <tr className="border-line-subtle border-b">
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Running it twice</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Duplicates</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Updates what changed, matched on Jira identity</div>
                        </td>
                      </tr>
                      <tr className="border-line-subtle border-b">
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Jira Server and Data Center</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Cloud only</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Cloud, Server, and Data Center, with resume after a failure</div>
                        </td>
                      </tr>
                      <tr className="border-line-subtle border-b">
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Workflows, boards, dashboards, automations</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Not carried</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Not carried. Rebuilt in Plane; the migration guide lists every object</div>
                        </td>
                      </tr>
                      <tr className="border-line-subtle border-b">
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Service management, SCIM, issue security levels</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Not carried</div>
                        </td>
                        <td className="px-4 py-8 align-middle">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Not in Plane today. Said before you start</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Logos" className="py-12 md:py-16" id="logos">
            <div className="container-page">
              <div className="border-line-subtle bg-surface-1 overflow-hidden rounded-2xl border">
                <div className="flex flex-col gap-6 p-8 md:gap-10 md:p-8">
                  <div className="font-[ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] text-sm uppercase tracking-wide text-txt-primary">Sample text stands in for the original paragraph at a similar.</div>
                  <div className="grid grid-cols-3 items-center gap-x-4 gap-y-8 md:grid-cols-6 md:gap-x-6 md:gap-y-10">
                    <div className="flex items-center justify-start">
                      <img alt="Sony" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/sony.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Aramco" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/aramco.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Dolby" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/dolby.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Accenture" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/accenture.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Power Integrations" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/power-integration.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Amazon" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/amazon.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Essor" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/essor.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="40AU" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/forty-au.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Hypersonica" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/hypersonica.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="SSI" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/ssi.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Ruby Labs" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/ruby-labs.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="République Française" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/republique-francaise.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Government of Lithuania" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/gov-of-lithuania.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Mirador Therapeutics" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/mirador-therapeutics.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Texelis" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/texelis.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="OptiGRÜN" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/optigrun.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Stark Bank" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/starkbank.svg" />
                    </div>
                    <div className="flex items-center justify-start">
                      <img alt="Datum" width="190" height="56" className="max-h-14 w-auto object-contain" src="/assets/compare/datum.svg" />
                    </div>
                  </div>
                </div>
                <div className="bg-cover bg-center bg-no-repeat" style={{"backgroundImage":"url(/assets/compare/testimonial-bg.webp)"}}>
                  <div className="flex flex-col gap-8 p-6 md:p-8">
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3 md:gap-16">
                      <div className="md:col-span-1">
                        <div className="font-[ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] text-sm uppercase tracking-wide text-txt-primary">3/5 Data Center and Server customers are moving to Plane</div>
                        <div className="relative shrink-0 self-start px-8">
                          <img alt="" aria-hidden="true" width="526" height="433" className="w-full" src="/assets/compare/vast-station.webp" srcSet="/assets/compare/vast-station.webp 526w" sizes="(max-width: 767px) 100vw, 33vw" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 md:col-span-2">
                        <svg className="text-txt-accent" fill="none" height="28" viewBox="0 0 30 24" width="34" aria-hidden="true">
                          <path d="M0.5 16.233C0.5 12.82 1.59 9.68 3.77 6.83C5.96 3.99 8.66 1.71 11.88 0L13.28 2.49C11.73 3.62 10.32 4.84 9.08 6.14C7.83 7.43 6.76 8.96 5.88 10.72L8.76 13.05C9.96 13.98 10.76 14.91 11.18 15.84C11.6 16.78 11.8 17.76 11.8 18.8C11.8 20.4 11.31 21.67 10.32 22.6C9.34 23.534 8.09 24 6.58 24C5.59 24 4.71 23.82 3.93 23.46C3.15 23.09 2.45 22.65 1.83 22.14C0.94 20.27 0.5 18.3 0.5 16.233ZM16.72 16.233C16.72 12.82 17.81 9.68 19.99 6.83C22.172 3.99 24.87 1.71 28.1 0L29.5 2.49C27.94 3.62 26.54 4.84 25.29 6.14C24.043 7.43 22.98 8.96 22.09 10.72L24.98 13.05C26.17 13.98 26.98 14.91 27.4 15.84C27.81 16.78 28.02 17.76 28.02 18.8C28.02 20.4 27.53 21.67 26.54 22.6C25.55 23.534 24.3 24 22.8 24C21.81 24 20.92 23.82 20.15 23.46C19.37 23.09 18.664 22.65 18.04 22.14C17.16 20.27 16.72 18.3 16.72 16.233Z" fill="currentColor" />
                        </svg>
                        <blockquote className="text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[24px] text-txt-primary font-inter">The workspace stays fast and simple even as more people join the effort. Sample text stands in for the original paragraph at a similar length. Set it up once and adjust the details as your process grows over time. Reports summarize progress so leads can spot risks before they grow. Everyone can see what is planned, what is in progress, and what is done. Bring existing data along and pick up right where the team left off. This section explains the idea in plain words so readers can scan it quickly.</blockquote>
                        <div className="text-500 text-txt-secondary font-inter">■■, Software Engineer Leader at ■■■</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Frequently asked questions" className="py-12 md:py-16" id="faq">
            <div className="container-page">
              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
                <div className="flex max-w-[828px] flex-col gap-2 text-left">
                  <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">FAQs</h2>
                  <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Admins get the controls they need while members keep a calm, focused.</div>
                </div>
                <div className="flex flex-col">
                  <SwitchFaq />
                </div>
              </div>
            </div>
          </section>
        </div>
        <section aria-label="Final call to action" className="bg-[url('/assets/cta-bg.webp')] bg-cover bg-center bg-no-repeat py-20" id="final-cta">
          <div className="container-page">
            <div className="flex flex-col items-start [&>:not(:last-child)]:mb-10 text-left md:items-center md:text-center">
              <div className="flex flex-col items-start gap-4 md:items-center">
                <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">
                  <span className="h1 text-[#E4E6E7]">Your switch to Plane is free</span>
                </h2>
                <div className="max-w-xl">
                  <div className="md:whitespace-pre-line font-inter text-500 text-[#fafafa] font-430"><span>Reports summarize progress so leads can spot risks before they grow. Everyone can see what is planned, what is in progress overall too.</span></div>
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center justify-start gap-4 md:justify-center">
                <a className="btn-primary-dark inline font-inter" href="/talk-to-sales">Claim my contract match</a>
                <a className="btn-secondary-dark inline font-inter" href="https://app.plane.so/sign-up">Try Plane free</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
