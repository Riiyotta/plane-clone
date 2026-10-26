// /imports — Importers
// Structure converted from the live plane.so DOM (headless); long prose replaced with neutral placeholder copy.
import { useState } from 'react'


const STEPS = [
  {
    "title": "Authorize",
    "body": "Let Plane to talk to your current work management software.",
    "alt": "importers-authorize",
    "w": 3768,
    "h": 1614,
    "src": "/assets/compare/importers-authorize.webp"
  },
  {
    "title": "Map",
    "body": "Use the views you prefer and switch between them without losing context. Connect.",
    "alt": "importers-map-states",
    "w": 3768,
    "h": 1614,
    "src": "/assets/compare/importers-map-states.webp"
  },
  {
    "title": "Sit back",
    "body": "Bring existing data along and pick up right where the team left off.",
    "alt": "importers-sit-back",
    "w": 3768,
    "h": 1614,
    "src": "/assets/compare/importers-sit-back.webp"
  }
]

const IMPORTERS = [
  {
    "title": "Jira",
    "body": "Small teams start quickly, and larger groups scale without extra setup. Use overall.",
    "alt": "imports-see-how-it-works-desktop-jira-light.webp",
    "w": 2412,
    "h": 2412,
    "src": "/assets/compare/imports-see-how-it-works-desktop-jira-light.webp"
  },
  {
    "title": "Linear",
    "body": "Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups scale.",
    "alt": "imports-see-how-it-works-desktop-linear-light.webp",
    "w": 2412,
    "h": 2412,
    "src": "/assets/compare/imports-see-how-it-works-desktop-linear-light.webp"
  },
  {
    "title": "Asana",
    "body": "Everyone can see what is planned, what is in progress, and what is done. Bring existing data along.",
    "alt": "imports-see-how-it-works-desktop-asana-light.webp",
    "w": 2412,
    "h": 2412,
    "src": "/assets/compare/imports-see-how-it-works-desktop-asana-light.webp"
  }
]

// Fading image stack (live: opacity transition 300ms, active layer z-10)
function ImageStack({ items, active }) {
  return (
    <div className="relative hidden w-full lg:block">
      <div className="invisible">
        <img alt="" width={items[0].w} height={items[0].h} className="w-full" src={items[0].src} srcSet={`${items[0].src} ${items[0].w}w`} sizes="(max-width: 1024px) 100vw, 80vw" />
      </div>
      <div className="absolute inset-0 flex w-full items-center justify-center overflow-hidden">
        {items.map((it, i) => (
          <div key={it.src} className={`absolute inset-0 flex w-full items-center object-cover transition-opacity duration-300 ${i === active ? 'z-10 opacity-100' : 'opacity-0'}`}>
            <img alt={it.alt} width={it.w} height={it.h} className="w-full" src={it.src} srcSet={`${it.src} ${it.w}w`} sizes="(max-width: 1024px) 100vw, 80vw" />
          </div>
        ))}
      </div>
    </div>
  )
}

function TabCard({ it, active, onClick, gap }) {
  return (
    <button className={`lg:hover:bg-surface-2 flex w-full cursor-pointer flex-col gap-4 rounded-lg p-4 text-left ${active ? 'lg:bg-surface-2' : ''}`} type="button" aria-pressed={active} onClick={onClick}>
      <div className="flex items-start gap-2">
        <div className={gap}>
          <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">{it.title}</div>
          <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
            <div>
              <p>{it.body}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden">
        <img alt={it.alt} width={it.w} height={it.h} className="w-full" src={it.src} srcSet={`${it.src} ${it.w}w`} sizes="(max-width: 1024px) 100vw, 80vw" />
      </div>
    </button>
  )
}

function ImportSteps() {
  const [active, setActive] = useState(0)
  return (
    <div className="flex flex-col gap-6">
      <ImageStack items={STEPS} active={active} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((it, i) => (
          <TabCard key={it.title} it={it} active={i === active} onClick={() => setActive(i)} gap="-m-1 flex flex-col gap-2" />
        ))}
      </div>
    </div>
  )
}

function ImporterTabs() {
  const [active, setActive] = useState(0)
  return (
    <div className="grid grid-cols-1 items-center gap-12 overflow-hidden py-16 lg:grid-cols-2">
      <div className="flex w-full flex-col gap-12">
        <div className="flex flex-col gap-6 items-start text-left">
          <div className="flex flex-col gap-2">
            <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">See how it works</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {IMPORTERS.map((it, i) => (
            <TabCard key={it.title} it={it} active={i === active} onClick={() => setActive(i)} gap="-mt-1 flex flex-col gap-1" />
          ))}
        </div>
      </div>
      <ImageStack items={IMPORTERS} active={active} />
    </div>
  )
}

export default function ImportsPage() {
  return (
    <div className="font-satoshi text-[16px] font-normal leading-normal text-black">
      {/* ---- section 0 ---- */}
      <div className="relative py-16">
        <div className="absolute inset-0 top-0 -z-10">
          <img alt="hero block bg" className="h-full w-full object-cover" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/hero-bg.webp" />
        </div>
        <div className="container-page">
          <div className="flex flex-col gap-16">
            <div className="[&>:not(:last-child)]:mb-6 text-center">
              <div className="inline-flex font-medium font-mono uppercase text-txt-accent text-[15px] leading-[15px] tracking-[0.02em]">THE SIMPLEST IMPORTERS ON THE PLANET</div>
              <div className="[&>:not(:last-child)]:mb-4">
                <h1 className="md:whitespace-pre-line font-satoshi h1 text-txt-primary font-430">{"Switch to Plane\nin clicks"}</h1>
                <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-430">
                  <div>
                    <p>Break out of chaotic, config-heavy software into Plane</p>
                    <p>with our ready importers for Jira, Linear, Asana, and more.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://app.plane.so/sign-up" rel="noopener noreferrer" target="_blank" className="btn-primary inline font-inter">Get started with a free workspace</a>
                <a href="/talk-to-sales" rel="noopener noreferrer" target="_blank" className="btn-secondary inline font-inter">Book a demo</a>
              </div>
            </div>
            <img alt="importers-hero" width="3978" height="2331" className="w-full" src="/assets/compare/importers-hero.webp" srcSet="/assets/compare/importers-hero.webp 3978w" sizes="(max-width: 1024px) 100vw, 80vw" />
          </div>
        </div>
      </div>
      {/* ---- section 1 ---- */}
      <div className="container-page">
        <div className="flex flex-col gap-12 py-16">
          <div className="flex flex-col gap-6 items-start text-left">
            <div className="inline-flex font-medium font-mono uppercase text-txt-accent text-[15px] leading-[15px] tracking-[0.02em]">THE SIMPLEST IMPORTERS ON THE PLANET</div>
            <div className="flex flex-col gap-2">
              <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">As easy as 1-2-3</h2>
              <div>
                <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                  <div>
                    <p>A short description of how this feature helps teams plan and ship work. Placeholder copy describes the benefit here in a neutral.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-start">
              <a href="https://app.plane.so/sign-up" rel="noopener noreferrer" target="_blank" className="btn-primary inline font-inter">Try it free</a>
            </div>
          </div>
          <ImportSteps />
        </div>
      </div>
      {/* ---- section 2 ---- */}
      <div className="container-page">
        <ImporterTabs />
      </div>
      {/* ---- section 3 ---- */}
      <div className="py-16">
        <div className="container-page">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
                <div className="flex w-full flex-col gap-4">
                  <img alt="importers-data-integrity" width="1848" height="1479" className="w-full" src="/assets/compare/importers-data-integrity.webp" srcSet="/assets/compare/importers-data-integrity.webp 1848w" sizes="(max-width: 1024px) 100vw, 80vw" />
                </div>
                <div className="flex flex-col items-start gap-6">
                  <div className="flex flex-col items-start gap-4">
                    <div className="inline-flex font-medium font-mono uppercase text-txt-accent text-[15px] leading-[15px] tracking-[0.02em]">ZERO DATA LOSS</div>
                    <div className="flex flex-col gap-2">
                      <h5 className="md:whitespace-pre-line font-satoshi text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[24px] text-txt-primary font-430">{"Give all your data a\nnew nicer Plane to live."}</h5>
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                        <div>
                          <p>Use the views you prefer and switch between them without losing.</p>
                          <p>Should something go wrong, just start the import again.</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://app.plane.so/sign-up" rel="noopener noreferrer" target="_blank" className="btn-primary inline font-inter">Try for yourself</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---- section 4 ---- */}
      <div className="py-16">
        <div className="container-page">
          <div className="bg-[#001b29] relative z-0 flex flex-col gap-8 overflow-hidden rounded-2xl p-8 md:p-12">
            <div className="absolute top-0 left-0 z-0 h-full w-full">
              <img alt="Plane" width="1200" height="600" className="h-full w-full object-cover" src="/assets/compare/cta-bg-v4.webp" />
            </div>
            <div className="relative z-10 flex flex-col gap-4 text-center">
              <h4 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-m-900 md:text-900 text-[#fafafa] font-430">Move into a peaceful Plane</h4>
              <div className="md:whitespace-pre-line font-inter text-500 text-[#909598] font-430">
                <div>
                  <p>Plane is the #1 new work management tool for teams</p>
                  <p>of all shapes and sizes everywhere.</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
              <a href="/talk-to-sales" rel="noopener noreferrer" target="_blank" className="btn-primary-dark inline font-inter">Talk to Sales</a>
              <a href="https://app.plane.so/sign-up" rel="noopener noreferrer" target="_blank" className="btn-secondary-dark inline font-inter">See why</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
