// /manifesto — dark long-form page with sticky principle TOC. Measured live 2026-10-26.
// 1440: hero block 58→1169 (1111), principles 1169→3659 (2490), stripe 80, CTA 3740→3960 (220).
// Headings, numbers, TOC labels and short pull-quotes are live; body paragraphs are placeholder prose.
// Static state = fully "revealed" headings (live animates the white fill on scroll — see handoff).
import '../components/company/company.css'
import { useState } from 'react'
import { ph } from '../components/company/placeholder.js'

const A = '/assets/company/manifesto/'
const LINE = '#222425'

// [id, num, title, tocImage, blocks]; block = placeholder body string | ['q', live pull-quote] | ['ql', placeholder quote]
// Placeholder strings are neutral filler mimicking the live word lengths (keeps wrapping/heights).
const ALT = {
  'system-of-records.svg': 'Unified work graph illustration', 'flexibility.svg': 'Guardrails and flexibility illustration',
  'legibility.svg': 'Machine-readable work graph illustration', 'deployment.svg': 'Deployment options illustration',
  'scalability.svg': 'Composable scale illustration', 'operational.svg': 'Operational visibility illustration',
}
const SECTIONS = [
  ["one-system-of-record", "01", "Keep one system of record", "system-of-records.svg", ["Own them consistent or require which direction per indicate routine, see coordinate set discussed section. So while whole to documents reason: Then up the world, important we several, sharing us they, two \"would\" an a considering.", ["q", "Context retention should be inexpensive."], "Write record framework use similar as highlight at way including.", "Why about be yes consideration all and any this. Time internal are understanding language tool result review maintain turn by development rhythm after do."]],
  ["opinionated-flexibility", "02", "Be flexibly opinionated", "flexibility.svg", ["Can someone again second should along. Day argue for interface characteristics, get go material being. Has board dependency a simple environment how movement information.", ["q", "Plane is opinionated about guardrails, not doctrine."], "Its very discussion want everything, if well sustain through, key build let what knowledge, experience, single, may towards in check new when navigate typical. Milestone slowly necessary organized, not otherwise clear."]],
  ["legible-to-machines", "03", "Make it legible for machines", "legibility.svg", ["Social source now placement could is will. One with count spread our work out potential procedure frameworks. It year steady of a also on reference, or daily early stream both so. To own case coordination strong each.", ["q", "High-performing AI requires structured, intelligible systems."], "Per usually every up easy fact we see from. Give represent set observed first. Focus us perspective an a ordinary-version goal given: Foundation individual, original group, whether ideally, good guide. As at the responses have horse without selection practice writing already priority help seriously.", ["q", "The future of work is human and AI, together. The foundation has to serve both."]]],
  ["deployment-should-not-be-centralized", "04", "Never coerce deployment", "deployment.svg", ["Accountability preferences here be another by recognition progress. Question idea issue a arrange reliable do system introduced two later management go remember. Just balance use layer structure: Level light between way response, keep might model things why schedule yes maintained kind.", ["ql", "All last less, never if sustained. Often operations, typically though, order other, toward place, and broader organization according unless particular. Significant any percentage update presentation."]]],
  ["scale-should-not-introduce-new-complexity", "05", "Scale without adding complexity", "scalability.svg", ["Are like point quite list ready right in useful capture make: Can sequence, day roles, for implementation. Permission, get many careful has how alternative settings.", ["q", "Build for the team. Let the teams compose."], "Arrangement within scope more documentation, its serve preferably. Key most previously across move let collaboration shape may responsibility share."]],
  ["operational-truth-at-every-level", "06", "Surface operational truth at every layer", "operational.svg", ["Much snapshot-clearly shift collect need new always is. Short next not it regularly now company since, note small only of space one context accountability default.", ["q", "Visibility for the organization should never be a side quest; it is the system's core function."], "Open part on our deliver a standard calculation plan. Or a answer, start state still straight details, strategy priorities, out collections example same explain feature students alignment. Story characteristics table general before, own suggests thing."]],
]

// vertical-rule stripe rows (bg 1px #222425 lines every 16px)
function Stripe({ className = '' }) {
  return (
    <div className={`h-20 overflow-hidden border-y border-[#222425] ${className}`}>
      <div className="container-page">
        <div className="h-20 w-full border-r border-[#222425]" style={{ backgroundImage: `linear-gradient(90deg, ${LINE} 1px, transparent 1px)`, backgroundSize: '16px 100%' }} />
      </div>
    </div>
  )
}

export default function Manifesto() {
  const [active] = useState(0) // live: updated by scroll position (Animation hand-off)
  return (
    <div className="bg-dark-bg text-[#F5F6F7]">
      <div>
        <div className="border-b border-[#222425]">
          <div className="container-page">
            <div className="relative h-20 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:to-[#222425] after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-gradient-to-b after:from-transparent after:to-[#222425]" />
          </div>
        </div>
        <div className="container-page">
          <div className="w-full border-x border-[#222425] px-5 pt-11 md:pt-9">
            <div className="flex min-h-[60vh] flex-col items-center justify-between gap-10 text-center">
              <div className="flex w-full flex-col items-center">
                <div className="mb-4 flex justify-center">
                  <div className="c-mono inline-flex w-fit items-center whitespace-nowrap rounded-full border border-[#333537] bg-[#1a1b1c] px-3 py-1.5 text-[10px] uppercase leading-4 tracking-[0.05em] text-[#a1a1aa] sm:text-[12px]">A manifesto for the age of adaptive systems</div>
                </div>
                <h1 className="h1 text-txt-on-color md:whitespace-pre-line">
                  A{' '}
                  <span className="group relative inline-flex items-center">
                    <span className="border-b border-dashed border-[#9EA2A8] pb-1 hover:text-[#009ff5]">steerable</span>
                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 hidden w-72 -translate-x-1/2 select-none rounded-xl border border-[#2f3236] bg-[#0f1012] p-3 text-left font-satoshi text-xs tracking-wide text-[#E5E7EB] opacity-0 shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-opacity duration-200 group-hover:opacity-100 md:block">
                      <span className="c-mono mb-2 block border-b border-[#2b2e33] pb-2 text-[12px] font-430 leading-4 text-[#9EA2A8]">Dictionary</span>
                      <span className="mb-1 block text-base font-semibold text-white">steer</span>
                      <span className="block text-[13px] text-[#9EA2A8]">/stɪr/ verb</span>
                      <span className="mt-2 block text-[14px] leading-relaxed text-[#D6D9DD]">to guide direction through changing conditions while maintaining stability</span>
                    </span>
                  </span>{' '}
                  system for work
                </h1>
                <div className="mt-6 max-w-2xl text-balance">
                  <div className="text-600 text-[#909598]">Product and engineering principles that guide how Plane is designed and built.</div>
                </div>
                <blockquote className="mt-12 max-w-2xl rounded-xl border border-[#222425] bg-[#0f0f10] px-6 py-5 text-center">
                  <div className="text-600 text-[#909598]">
                    <span className="text-[#f5fbff]">Plane is a steerable system of record for execution.</span> {ph(270, 8)} <span className="text-[#f5fbff]">Control over direction stays with the team.</span>
                  </div>
                </blockquote>
              </div>
              <div className="relative mt-6 aspect-[2/1] w-full max-w-4xl overflow-hidden rounded-2xl">
                <div className="absolute inset-x-0 top-0 aspect-square w-full">
                  <img src={A + 'hero.svg'} alt="Manifesto hero illustration" className="h-full w-full object-contain object-top" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Stripe />
      </div>

      <div>
        <div className="container-page">
          <div className="border-x border-[#222425] px-5 py-16 md:px-9">
            <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
              <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <p className="c-mono text-xs uppercase tracking-[0.3em] text-[#9EA2A8]">Principles</p>
                <div className="mb-6 space-y-4 border-l border-[#222425] pl-4 lg:mb-0">
                  {SECTIONS.map(([id, num, title], i) => (
                    <a key={id} href={`#${id}`} className={`group relative flex items-center gap-3 font-satoshi text-sm transition-colors duration-300 ease-out before:absolute before:-left-[17px] before:top-0 before:h-full before:w-0.5 before:bg-[#47bfff] before:transition-opacity before:duration-300 ${i === active ? 'text-white before:opacity-100' : 'text-[#9EA2A8] before:opacity-0 hover:text-white'}`}>
                      <span className={`c-mono w-6 text-xs font-semibold ${i === active ? 'text-[#47bfff]' : 'text-[#009ff5]'}`}>{num}</span>
                      <span className={i === active ? 'font-semibold' : 'font-medium'}>{title}</span>
                    </a>
                  ))}
                </div>
                <div className="hidden aspect-square w-full overflow-hidden rounded-xl opacity-100 transition-opacity duration-300 ease-out lg:block">
                  <img src={A + SECTIONS[active][3]} alt={ALT[SECTIONS[active][3]]} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="space-y-16 lg:pb-8">
                {SECTIONS.map(([id, num, title, img, blocks]) => (
                  <section key={id} id={id} className="scroll-mt-24 space-y-8">
                    <div className="space-y-6">
                      <div className="flex flex-col gap-2">
                        <span className="c-heading c-h6 text-[#9EA2A8]">{num}</span>
                        <h2 className="h2 text-txt-on-color md:whitespace-pre-line">
                          <span className="inline-block bg-[#9EA2A8] bg-left bg-no-repeat bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg,#ffffff,#ffffff)', backgroundSize: '100% 100%' }}>{title}</span>
                        </h2>
                      </div>
                      <div className="space-y-6">
                        {blocks.map((b, j) => typeof b === 'string'
                          ? <div key={j} className="text-600 text-[#909598]">{b}</div>
                          : <p key={j} className="border-l-2 border-[#009ff5] pl-6 font-satoshi text-lg font-normal italic text-[#D6D9DD]">{b[1]}</p>)}
                      </div>
                    </div>
                    <div className="lg:hidden">
                      <img src={A + img} alt={ALT[img]} className="aspect-square w-full" />
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Stripe />
      <div className="border-b border-[#222425]">
        <div className="container-page">
          <div className="border-x border-[#222425] bg-[#141415] px-5 py-12 text-center md:px-9">
            <h2 className="h2 text-txt-on-color"><span className="font-normal">Stay steerable as you scale</span></h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a className="btn-primary-dark" href="https://app.plane.so/sign-up/"><span>Get Started with Plane</span></a>
              <a className="btn-secondary-dark" href="/talk-to-sales" target="_blank" rel="noopener noreferrer"><span>Talk to us</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
