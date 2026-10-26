// /switch-from-jira-data-center — Jira Data Center migration
// Structure converted from the live plane.so DOM (headless); long prose replaced with neutral placeholder copy.
import { useState } from 'react'

const DCFAQ_ITEMS = [
  {
    q: "How does migration from Jira DC work?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">This section explains the idea in plain words so readers can scan it quickly. Admins get the controls they need while members keep a calm, focused view. Teams keep their projects, notes, and updates together in one shared place. Work moves forward with fewer handoffs and clearer ownership for each task. A short.</div>
      </>
    ),
  },
  {
    q: "Can we self-host Plane like Jira Data Center?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Admins get the controls they need while members keep a calm, focused view. Teams keep their projects, notes, and updates together in one shared place. Work moves forward with fewer handoffs.</div>
      </>
    ),
  },
  {
    q: "What about SSO, LDAP, and audit requirements?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Small teams start quickly, and larger groups scale without extra setup. Use the views you prefer and switch between them without losing context. Connect the tools you already use and keep updates.</div>
      </>
    ),
  },
  {
    q: "Is Plane suitable for regulated industries?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Bring existing data along and pick up right where the team left off. This section explains the idea in plain words so readers can scan it quickly. Admins get the controls they need while members.</div>
      </>
    ),
  },
  {
    q: "Can we run Jira and Plane in parallel during migration?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups scale as as.</div>
      </>
    ),
  },
  {
    q: "What happens to our Jira plugins and Marketplace apps?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">
          Sample text stands in for the original paragraph at a similar length. Set it up once and adjust the details as your process grows over time. Reports summarize progress so leads can spot risks
          {' '}
          <a className="text-txt-primary underline underline-offset-2 hover:text-txt-accent" rel="noopener noreferrer" target="_blank" href="/marketplace">integrations marketplace</a>
          {' '}
          before they grow. Everyone instead again well.
        </div>
      </>
    ),
  },
  {
    q: "What deployment options does Plane support?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Reports summarize progress so leads can spot risks before they grow. Everyone can see what is planned, what is in progress, and what is done. Bring existing data along and pick up right.</div>
      </>
    ),
  },
]

// FAQ accordion (single open, first open by default). Live uses a 300ms grid-rows transition.
function DcFaq() {
  const [open, setOpen] = useState(0)
  return DcFaq.ITEMS.map((f, i) => {
    const on = open === i
    return (
      <div key={i} className="border-line-subtle border-t">
        <button className={`flex w-full cursor-pointer items-start justify-between gap-4 py-4 text-left transition-colors focus:outline-none sm:py-5 ${on ? 'border-line-strong' : ''}`} type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}>
          <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-medium">{f.q}</div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-txt-primary mt-0.5 size-5 shrink-0 transition-transform duration-300 ease-out" aria-hidden="true">
            <path d="M10.92 7.58C11.243 7.77 11.243 8.23 10.92 8.42L6.56 10.93C6.24 11.12 5.84 10.89 5.84 10.52V5.48C5.84 5.11 6.24 4.88 6.56 5.07L10.92 7.58Z" fill="currentColor" />
          </svg>
        </button>
        <div className={`grid transition-all duration-300 ease-out ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="min-h-0 overflow-hidden">
            <div className="pb-4">{f.a}</div>
          </div>
        </div>
      </div>
    )
  })
}
DcFaq.ITEMS = DCFAQ_ITEMS

export default function SwitchFromJiraDataCenterPage() {
  return (
    <div className="font-satoshi text-[16px] font-normal leading-normal text-black">
      {/* ---- section 0 ---- */}
      <div className="relative min-h-screen bg-surface-2">
        <nav aria-label="Jira DC table of contents" className="pointer-events-none fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
          <div className="pointer-events-auto group relative h-[102px] w-[55px] overflow-hidden rounded-xl border border-line-subtle bg-surface-1 p-5 px-4 shadow-sm transition-[width,height] duration-300 ease-out hover:h-[268px] hover:w-[291px] focus-within:h-[268px] focus-within:w-[291px]">
            <div aria-hidden="true" className="flex h-full flex-col items-end justify-center gap-2 transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0">
              <div className="block shrink-0 rounded-full transition-colors" style={{"width":"20px","height":"3px","backgroundColor":"#171B22"}} />
              <div className="block shrink-0 rounded-full transition-colors" style={{"width":"14px","height":"2px","backgroundColor":"#D5DAE0"}} />
              <div className="block shrink-0 rounded-full transition-colors" style={{"width":"14px","height":"2px","backgroundColor":"#D5DAE0"}} />
              <div className="block shrink-0 rounded-full transition-colors" style={{"width":"14px","height":"2px","backgroundColor":"#D5DAE0"}} />
              <div className="block shrink-0 rounded-full transition-colors" style={{"width":"14px","height":"2px","backgroundColor":"#D5DAE0"}} />
              <div className="block shrink-0 rounded-full transition-colors" style={{"width":"14px","height":"2px","backgroundColor":"#D5DAE0"}} />
              <div className="block shrink-0 rounded-full transition-colors" style={{"width":"14px","height":"2px","backgroundColor":"#D5DAE0"}} />
              <div className="block shrink-0 rounded-full transition-colors" style={{"width":"14px","height":"2px","backgroundColor":"#D5DAE0"}} />
            </div>
            <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              <div className="flex flex-col h-full p-5">
                <div className="mb-2">
                  <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-medium">Switch to Plane</div>
                </div>
                <ol className="min-h-0 flex-1 overflow-y-auto pr-1 flex list-none flex-col gap-2.5">
                  <li>
                    <a href="#atlassian-timeline" className="block max-w-full truncate rounded-sm transition-colors hover:bg-white">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-secondary font-medium">The Atlassian deadline</div>
                    </a>
                  </li>
                  <li>
                    <a href="#introducing-plane" className="block max-w-full truncate rounded-sm transition-colors hover:bg-white">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-secondary font-medium">The alternative to Atlassian Cloud</div>
                    </a>
                  </li>
                  <li>
                    <a href="#migration-steps" className="block max-w-full truncate rounded-sm transition-colors hover:bg-white">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-secondary font-medium">How to move from Jira DC</div>
                    </a>
                  </li>
                  <li>
                    <a href="#capability-comparison" className="block max-w-full truncate rounded-sm transition-colors hover:bg-white">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-secondary font-medium">Plane vs Jira</div>
                    </a>
                  </li>
                  <li>
                    <a href="#security" className="block max-w-full truncate rounded-sm transition-colors hover:bg-white">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-secondary font-medium">Security</div>
                    </a>
                  </li>
                  <li>
                    <a href="#resources" className="block max-w-full truncate rounded-sm transition-colors hover:bg-white">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-secondary font-medium">Resources</div>
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="block max-w-full truncate rounded-sm transition-colors hover:bg-white">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-secondary font-medium">FAQs</div>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </nav>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(15,23,42,0.07)_0.8px,transparent_2px)] bg-[length:1rem_1rem]" />
        <div className="relative z-10 flex flex-col gap-10 py-10 sm:py-14 lg:gap-12 lg:py-20">
          <section aria-label="Jira Data Center" id="hero">
            <div className="container-page">
              <div className="bg-surface-1 border-line-subtle flex flex-col gap-12 rounded-xl border p-6 sm:p-10 lg:gap-20 lg:p-16">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <h1 className="md:whitespace-pre-line font-satoshi h1 text-txt-primary font-430">
                      Jira Data Center is ending.
                      <br className="hidden sm:block" />
                      <span className="text-txt-tertiary">Switch to Plane without trade-offs.</span>
                    </h1>
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                      Placeholder copy describes the benefit here in
                      <br className="hidden sm:block" />
                      a neutral, generic way. Small teams start quickly, and larger groups scale without extra.
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                    <a className="btn-primary inline font-inter" href="/talk-to-sales">Run a pilot</a>
                    <a className="btn-secondary inline font-inter" href="/talk-to-sales">Talk to a migration expert</a>
                  </div>
                </div>
                <div className="flex flex-col gap-12 lg:gap-20">
                  <div>
                    <div className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-full overflow-x-auto pb-1">
                      <div className="relative w-full min-w-[38rem] sm:min-w-0">
                        <div className="relative w-full overflow-hidden" style={{"height":"144px"}} aria-hidden="true">
                          <div className="pointer-events-none absolute inset-0" style={{"backgroundSize":"calc(100% / 60) 16px","backgroundPosition":"0 0","backgroundImage":"radial-gradient(circle at center, #E0E0E0 3px, transparent 3.5px)"}} />
                          <div className="pointer-events-none absolute inset-0" style={{"backgroundSize":"calc(1.66667%) 16px","backgroundPosition":"0px 0px","backgroundImage":"radial-gradient(circle, rgb(219, 62, 51) 3px, transparent 3.5px)","maskImage":"linear-gradient(to right, black 0%, black 46.6667%, transparent 46.6667%)"}} />
                        </div>
                        <ul aria-label="Timeline years 2025 through 2029" className="relative z-0 h-12 w-full pt-6">
                          <li className="absolute top-2 flex -translate-x-1/2 flex-col items-center gap-1.5" style={{"left":"10%"}}>
                            <div className="h-4 w-px shrink-0 bg-line-n2" aria-hidden="true" />
                            <div className="md:whitespace-pre-line font-inter text-300 text-txt-tertiary font-medium">2025</div>
                          </li>
                          <li className="absolute top-2 flex -translate-x-1/2 flex-col items-center gap-1.5" style={{"left":"30%"}}>
                            <div className="h-4 w-px shrink-0 bg-line-n2" aria-hidden="true" />
                            <div className="md:whitespace-pre-line font-inter text-300 text-txt-tertiary font-medium">2026</div>
                          </li>
                          <li className="absolute top-2 flex -translate-x-1/2 flex-col items-center gap-1.5" style={{"left":"50%"}}>
                            <div className="h-4 w-px shrink-0 bg-line-n2" aria-hidden="true" />
                            <div className="md:whitespace-pre-line font-inter text-300 text-txt-tertiary font-medium">2027</div>
                          </li>
                          <li className="absolute top-2 flex -translate-x-1/2 flex-col items-center gap-1.5" style={{"left":"70%"}}>
                            <div className="h-4 w-px shrink-0 bg-line-n2" aria-hidden="true" />
                            <div className="md:whitespace-pre-line font-inter text-300 text-txt-tertiary font-medium">2028</div>
                          </li>
                          <li className="absolute top-2 flex -translate-x-1/2 flex-col items-center gap-1.5" style={{"left":"90%"}}>
                            <div className="h-4 w-px shrink-0 bg-line-n2" aria-hidden="true" />
                            <div className="md:whitespace-pre-line font-inter text-300 text-txt-tertiary font-medium">2029</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-line-subtle grid w-full grid-cols-1 gap-6 border-t md:grid-cols-3 md:gap-10">
                    <div className="flex flex-col gap-3 pt-6">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-tertiary font-430">MARCH 2026</div>
                      <div className="flex flex-col gap-1.5">
                        <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">End of sale</div>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Admins get the controls they need while members keep a calm, focused view.</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-6">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-tertiary font-430">MARCH 2028</div>
                      <div className="flex flex-col gap-1.5">
                        <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">End of expansion</div>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Reports summarize progress so leads can spot risks before they grow. Everyone.</div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-6">
                      <div className="md:whitespace-pre-line font-inter text-300 text-txt-tertiary font-430">MARCH 2029</div>
                      <div className="flex flex-col gap-1.5">
                        <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">End of life</div>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Placeholder copy describes the benefit here in a neutral, generic way. Small.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="The Atlassian Timeline" id="atlassian-timeline">
            <div className="container-page">
              <div className="bg-surface-1 border border-line-subtle relative overflow-visible rounded-xl p-6 sm:p-10 lg:p-16">
                <div className="relative z-0 flex flex-col gap-12 pt-6 md:pt-4">
                  <div className="flex flex-col gap-4">
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-accent font-medium">THE CASE AGAINST DEFAULTING</div>
                    <div className="flex flex-col gap-3">
                      <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">Defaulting to Atlassian Cloud is still a decision</h2>
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                        Use the views you prefer and switch between them without losing
                        {' '}
                        <a className="text-txt-primary underline underline-offset-2 hover:text-txt-accent" href="#introducing-plane">self-hosted Jira alternatives</a>
                        {' '}
                        context. Connect the tools you already use and keep updates flowing in both directions. The workspace.
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-0 md:gap-y-6">
                      <div className="flex flex-col items-start gap-6 border-line-subtle border-t p-4 first:border-t-0 md:border-t-0 md:border-l md:p-6 md:py-4">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-7 text-txt-primary" aria-hidden="true">
                          <path d="M7.33 1.64C7.33 1.38 7.33 1.25 7.28 1.17C7.23 1.1 7.16 1.05 7.07 1.03C6.98 1.01 6.86 1.05 6.61 1.14L3.73 2.22C3.32 2.38 2.96 2.51 2.68 2.76C2.43 2.97 2.25 3.24 2.13 3.55C2 3.89 2 4.28 2 4.72L2 8C2 9.88 3.03 11.46 4.13 12.61C4.85 13.36 5.68 14.04 6.56 14.6C6.8 14.75 6.91 14.83 7.02 14.82C7.12 14.82 7.21 14.76 7.27 14.69C7.33 14.6 7.33 14.45 7.33 14.16L7.33 1.64Z" fill="currentColor" />
                          <path d="M8.67 14.16C8.67 14.45 8.67 14.6 8.73 14.69C8.79 14.76 8.88 14.82 8.98 14.82C9.09 14.83 9.2 14.75 9.44 14.6C10.32 14.04 11.15 13.36 11.87 12.61C12.98 11.46 14 9.88 14 8L14 4.72C14 4.28 14 3.89 13.87 3.55C13.75 3.24 13.57 2.97 13.32 2.76C13.044 2.51 12.68 2.38 12.27 2.22L9.39 1.14C9.15 1.05 9.02 1.01 8.93 1.03C8.84 1.05 8.77 1.1 8.72 1.17C8.67 1.25 8.67 1.38 8.67 1.64L8.67 14.16Z" fill="currentColor" />
                        </svg>
                        <div className="flex flex-col gap-2">
                          <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-medium">Control and data residency</div>
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Small teams start quickly, and larger groups scale without extra setup. Use the views you prefer and switch between them without losing context. Connect the tools you already use and keep updates flowing in both directions.</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-6 border-line-subtle border-t p-4 first:border-t-0 md:border-t-0 md:border-l md:p-6 md:py-4">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-7 text-txt-primary" aria-hidden="true">
                          <path d="M1.38 12.93V2C1.38 1.65 1.65 1.375 2 1.375C2.35 1.375 2.63 1.65 2.63 2V12.93C2.63 13.13 2.63 13.24 2.63 13.32C2.63 13.34 2.64 13.35 2.64 13.36C2.638 13.36 2.64 13.362 2.64 13.36C2.65 13.36 2.66 13.37 2.68 13.37C2.76 13.37 2.87 13.375 3.07 13.375H14C14.35 13.375 14.625 13.65 14.625 14C14.625 14.35 14.35 14.625 14 14.625H3.07C2.89 14.625 2.72 14.63 2.58 14.61C2.43 14.602 2.25 14.57 2.08 14.48C1.84 14.36 1.64 14.16 1.52 13.92C1.43 13.75 1.398 13.57 1.39 13.42C1.37 13.28 1.38 13.11 1.38 12.93ZM12.877 4.91C13.11 4.65 13.51 4.64 13.76 4.88C14.01 5.11 14.03 5.51 13.79 5.76L11.18 8.55C11.12 8.61 10.97 8.78 10.77 8.88C10.62 8.95 10.45 8.97 10.29 8.96H10.29C10.18 8.95 10.08 8.92 9.99 8.88L9.8 8.79L7.69 7.69L5.12 10.43C4.89 10.68 4.49 10.692 4.24 10.46C3.99 10.22 3.97 9.82 4.21 9.57L6.82 6.78C6.88 6.72 7.03 6.55 7.23 6.46L7.34 6.41C7.46 6.38 7.59 6.36 7.71 6.37H7.71C7.93 6.39 8.12 6.51 8.2 6.55L10.31 7.64L12.877 4.91Z" fill="currentColor" />
                        </svg>
                        <div className="flex flex-col gap-2">
                          <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-medium">Cost trajectory</div>
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">A short description of how this feature helps teams plan and ship work. Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups.</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-6 border-line-subtle border-t p-4 first:border-t-0 md:border-t-0 md:border-l md:p-6 md:py-4">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-7 text-txt-primary" aria-hidden="true">
                          <path d="M10.334 1.375C11.12 1.38 11.87 1.69 12.43 2.24C12.98 2.8 13.29 3.55 13.292 4.33V8.71H13.334C13.85 8.71 14.35 8.92 14.72 9.28C15.09 9.65 15.292 10.15 15.292 10.667V12C15.292 12.34 15.156 12.67 14.91 12.91C14.83 12.999 14.73 13.071 14.626 13.13V14C14.626 14.34 14.35 14.62 14.001 14.625C13.66 14.625 13.376 14.35 13.376 14V13.292H11.959V14C11.959 14.345 11.68 14.62 11.334 14.625C10.99 14.625 10.709 14.35 10.709 14V13.13C10.6 13.071 10.51 13 10.42 12.91C10.18 12.67 10.042 12.34 10.042 12V10.667C10.042 10.15 10.249 9.65 10.62 9.28C10.98 8.92 11.48 8.71 12.001 8.71H12.042V4.33C12.04 3.88 11.86 3.45 11.542 3.125C11.22 2.8 10.79 2.63 10.334 2.625C9.88 2.625 9.45 2.8 9.13 3.125C8.81 3.45 8.63 3.88 8.63 4.33V11.667C8.63 12.45 8.31 13.2 7.76 13.76C7.2 14.31 6.45 14.62 5.67 14.625C4.88 14.62 4.13 14.31 3.58 13.76C3.02 13.2 2.71 12.45 2.71 11.667V7.29H2.67C2.15 7.29 1.65 7.08 1.28 6.72C0.92 6.35 0.71 5.85 0.71 5.33V4C0.71 3.66 0.84 3.33 1.09 3.09C1.17 3 1.27 2.93 1.38 2.87V2C1.38 1.65 1.66 1.375 2 1.375C2.35 1.38 2.63 1.66 2.63 2V2.71H4.04V2C4.04 1.65 4.32 1.38 4.67 1.375C5.01 1.38 5.29 1.65 5.29 2V2.87C5.4 2.93 5.49 3 5.58 3.09C5.82 3.33 5.96 3.66 5.96 4V5.33C5.96 5.85 5.75 6.35 5.39 6.72C5.02 7.08 4.52 7.29 4 7.29H3.96V11.667C3.96 12.12 4.14 12.55 4.46 12.875C4.78 13.2 5.21 13.37 5.67 13.375C6.12 13.37 6.55 13.2 6.875 12.875C7.2 12.55 7.38 12.12 7.38 11.667V4.33C7.38 3.55 7.69 2.8 8.24 2.24C8.8 1.69 9.55 1.375 10.334 1.375Z" fill="currentColor" />
                        </svg>
                        <div className="flex flex-col gap-2">
                          <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-medium">Plugin dependency</div>
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">A short description of how this feature helps teams plan and ship work. Placeholder copy describes the benefit here in a neutral, generic way. Small teams start.</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-6 border-line-subtle border-t p-4 first:border-t-0 md:border-t-0 md:border-l md:p-6 md:py-4">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-7 text-txt-primary" aria-hidden="true">
                          <path d="M10.22 8.22C10.47 7.98 10.865 7.98 11.109 8.22L13.78 10.89C14.02 11.14 14.02 11.53 13.78 11.78L11.109 14.44C10.865 14.69 10.47 14.69 10.22 14.44C9.98 14.2 9.98 13.8 10.22 13.56L11.82 11.958H2.67C2.32 11.958 2.04 11.68 2.04 11.333C2.04 10.988 2.32 10.708 2.67 10.708H11.82L10.22 9.11C9.98 8.86 9.98 8.47 10.22 8.22ZM6.89 1.56C7.14 1.31 7.53 1.31 7.78 1.56L10.442 4.22C10.69 4.47 10.686 4.86 10.442 5.11L7.78 7.78C7.53 8.02 7.14 8.02 6.89 7.78C6.65 7.53 6.65 7.14 6.89 6.89L8.49 5.29H2.67C2.32 5.29 2.04 5.01 2.04 4.67C2.04 4.32 2.32 4.04 2.67 4.04H8.49L6.89 2.44C6.65 2.2 6.65 1.8 6.89 1.56Z" fill="currentColor" />
                        </svg>
                        <div className="flex flex-col gap-2">
                          <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-medium">Migration experience</div>
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Admins get the controls they need while members keep a calm, focused view. Teams keep their projects, notes, and updates together in one shared place.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Introducing Plane" className="scroll-mt-[72px]" id="introducing-plane">
            <div className="container-page">
              <div className="bg-surface-1 border border-line-subtle flex flex-col rounded-xl">
                <div className="grid grid-cols-1 gap-10 p-6 pb-8 sm:p-10 sm:pb-10 lg:grid-cols-2 lg:gap-16 lg:p-16 lg:pb-12">
                  <div className="flex flex-col gap-8 lg:gap-10">
                    <div className="flex flex-col gap-4">
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-570">THE ALTERNATIVE TO ATLASSIAN CLOUD</div>
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-3">
                          <img alt="Plane" width="40" height="40" className="h-10 w-auto shrink-0 object-contain" src="/assets/compare/logo-dark.svg" />
                          <h3 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[28px] leading-[1.3] tracking-[-0.03em] md:text-[40px] text-txt-primary font-430">Self-hosted</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Work moves forward with fewer handoffs and clearer ownership for each task. A short description of how this feature helps teams plan and ship work. Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups.</div>
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Set it up once and adjust the details as your process grows over time. Reports summarize progress so leads can spot.</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <a className="btn-primary inline font-inter" href="/talk-to-sales">Talk to a migration expert</a>
                    </div>
                  </div>
                  <div className="flex flex-col divide-y divide-line-subtle">
                    <div className="flex flex-col gap-2 px-0 py-5 first:pt-0 last:pb-0 sm:px-4 sm:py-7">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Self-hosted by default</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Set it up once and adjust the details as your process grows over time. Reports summarize progress so leads as.</div>
                    </div>
                    <div className="flex flex-col gap-2 px-0 py-5 first:pt-0 last:pb-0 sm:px-4 sm:py-7">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Built as a system, not plugins</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups scale.</div>
                    </div>
                    <div className="flex flex-col gap-2 px-0 py-5 first:pt-0 last:pb-0 sm:px-4 sm:py-7">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Migration without disruption</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Small teams start quickly, and larger groups scale without extra setup. Use the views you prefer well.</div>
                    </div>
                  </div>
                </div>
                <div className="border-line-subtle flex flex-col gap-8 border-t p-6 pt-8 sm:p-10 sm:pt-10 lg:gap-10 lg:p-16 lg:pt-12">
                  <div className="mx-auto max-w-3xl text-center italic">
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                      Admins get the controls they need while members keep a calm, focused
                      <br className="hidden sm:block" />
                      view. Teams keep their projects, notes, and updates together in one shared.
                    </div>
                  </div>
                  <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
                    <div className="flex items-center justify-center px-2">
                      <img alt="Sony" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/sony.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="Aramco" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/aramco.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="Dolby" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/dolby.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="Accenture" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/accenture.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="Amazon" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/amazon.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="Government of Lithuania" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/gov-of-lithuania.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="Mirador Therapeutics" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/mirador-therapeutics.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="Texelis" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/texelis.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="OptiGRÜN" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/optigrun.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="République Française" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/republique-francaise.svg" />
                    </div>
                    <div className="flex items-center justify-center px-2">
                      <img alt="Power Integrations" width="190" height="56" className="max-h-12 w-auto object-contain grayscale md:max-h-14" src="/assets/compare/power-integration.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Migration steps" id="migration-steps">
            <div className="container-page">
              <div className="bg-surface-1 border border-line-subtle flex flex-col rounded-xl">
                <div className="relative grid grid-cols-1 gap-10 p-6 pb-8 sm:p-10 sm:pb-10 lg:grid-cols-2 lg:gap-16 lg:p-16 lg:pb-12">
                  <div className="flex max-w-xl flex-col gap-6 lg:sticky lg:top-20 lg:self-start">
                    <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-570">THE MIGRATION</div>
                    <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">{"How to move your Jira DC\nto Plane"}</h2>
                    <div>
                      <a className="btn-primary inline font-inter" href="/talk-to-sales">Talk to a migration expert</a>
                    </div>
                  </div>
                  <ol className="flex list-none flex-col divide-y divide-line-subtle">
                    <li className="flex flex-col gap-4 px-0 py-5 first:pt-0 last:pb-0 sm:flex-row sm:px-4">
                      <div aria-hidden="true" className="border-line-subtle text-txt-tertiary flex h-9 w-9 shrink-0 items-center justify-center border rounded-lg bg-white">01</div>
                      <div className="flex min-w-0 flex-col gap-2">
                        <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">Connect your Jira instance</div>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Bring existing data along and pick up right where the team left off. This section explains too.</div>
                      </div>
                    </li>
                    <li className="flex flex-col gap-4 px-0 py-5 first:pt-0 last:pb-0 sm:flex-row sm:px-4">
                      <div aria-hidden="true" className="border-line-subtle text-txt-tertiary flex h-9 w-9 shrink-0 items-center justify-center border rounded-lg bg-white">02</div>
                      <div className="flex min-w-0 flex-col gap-2">
                        <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">Map your workflows</div>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Reports summarize progress so leads can spot risks before they grow. Everyone overall instead.</div>
                      </div>
                    </li>
                    <li className="flex flex-col gap-4 px-0 py-5 first:pt-0 last:pb-0 sm:flex-row sm:px-4">
                      <div aria-hidden="true" className="border-line-subtle text-txt-tertiary flex h-9 w-9 shrink-0 items-center justify-center border rounded-lg bg-white">03</div>
                      <div className="flex min-w-0 flex-col gap-2">
                        <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">Run the import</div>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Sample text stands in for the original paragraph at a similar length. Set it up once and adjust instead.</div>
                      </div>
                    </li>
                    <li className="flex flex-col gap-4 px-0 py-5 first:pt-0 last:pb-0 sm:flex-row sm:px-4">
                      <div aria-hidden="true" className="border-line-subtle text-txt-tertiary flex h-9 w-9 shrink-0 items-center justify-center border rounded-lg bg-white">04</div>
                      <div className="flex min-w-0 flex-col gap-2">
                        <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-570">Validate and cut over</div>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Work moves forward with fewer handoffs and clearer ownership for each task. A short together.</div>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="border-line-subtle flex flex-col gap-8 border-t p-6 pt-8 sm:p-10 sm:pt-10 lg:gap-10 lg:p-16 lg:pt-12">
                  <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-14">
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Dedicated onboarding specialist</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Connect the tools you already use and keep updates flowing in both directions now.</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Run both tools in parallel</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">This section explains the idea in plain words so readers can scan together.</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Training and documentation</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Admins get the controls they need while members keep a calm, focused view. Teams.</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Real human support</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">The workspace stays fast and simple even as more people join the effort.</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">No plugins to rebuild</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Connect the tools you already use and keep updates flowing in both weekly.</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">AI from day one</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Connect the tools you already use and keep updates flowing in both.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Capability comparison" id="capability-comparison">
            <div className="container-page">
              <div className="bg-surface-1 border border-line-subtle flex flex-col rounded-xl">
                <div className="flex flex-col items-center gap-6 p-6 pb-8 text-center sm:p-10 sm:pb-10 lg:p-16 lg:pb-12">
                  <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-medium">PLANE VERSUS JIRA</div>
                  <div className="flex flex-col items-center gap-3">
                    <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">Everything you had on Data Center, and more</h2>
                    <div className="max-w-3xl">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Connect the tools you already use and keep updates flowing in both directions. The workspace stays fast and simple even as more people join the effort. Sample text.</div>
                    </div>
                  </div>
                </div>
                <div className="border-line-subtle border-t overflow-hidden">
                  <div className="-mx-2 overflow-x-auto px-2 sm:-mx-4 sm:px-4 md:mx-0 md:px-0">
                    <table className="w-full min-w-[720px] border-collapse text-400">
                      <caption className="sr-only">Comparison of capabilities across Jira Data Center, Jira Cloud, and Plane</caption>
                      <thead>
                        <tr className="border-line-subtle border-b">
                          <th className="w-16 hidden md:table-cell" />
                          <th className="text-black px-4 py-5 text-left font-normal" scope="col">
                            <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-medium">Capability</div>
                          </th>
                          <th className="bg-surface-2 border-line-subtle border-b px-4 py-5 align-bottom" scope="col">
                            <div className="flex items-center justify-center gap-2">
                              <img alt="" aria-hidden="true" width="96" height="28" className="h-7 w-auto object-contain opacity-90" src="/assets/compare/jira.svg" />
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Jira Data Center</div>
                            </div>
                          </th>
                          <th className="px-4 py-5 align-bottom" scope="col">
                            <div className="flex items-center justify-center gap-2">
                              <img alt="" aria-hidden="true" width="96" height="28" className="h-7 w-auto object-contain opacity-90" src="/assets/compare/jira.svg" />
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Jira Cloud</div>
                            </div>
                          </th>
                          <th className="bg-[#f5fbff] border-line-subtle border-b px-4 py-5 align-bottom" scope="col">
                            <div className="flex items-center justify-center gap-2">
                              <img alt="" aria-hidden="true" width="28" height="28" className="h-7 w-auto object-contain" src="/assets/compare/logo-dark.svg" />
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Plane</div>
                            </div>
                          </th>
                          <th className="w-16 hidden md:table-cell" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Self-hosted deployment</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Yes</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">No</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes (Docker, K8s)</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Air-gapped deployment</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Yes</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">No</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Full data residency control</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Full</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Limited regions</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Full</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">LDAP / SSO / SAML</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">Yes</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Projects + Docs in one tool</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">No (need Confluence)</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">No (need Confluence)</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes, built-in Wiki</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Time tracking built in</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">No (need plugin)</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">No (need plugin)</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Roadmaps built in</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">No (need plugin)</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Partial (Premium only)</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">AI-native capabilities</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">No</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes (paid add-on)</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes (built in)</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Open source / inspectable</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">No</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">No</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Yes (AGPL, Community)</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                        <tr>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                          <td className="border-line-subtle border-b px-4 py-4 align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">Plugin dependency</div>
                          </td>
                          <td className="bg-surface-2 border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">High (Marketplace)</div>
                          </td>
                          <td className="border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">High (Marketplace)</div>
                          </td>
                          <td className="bg-[#f5fbff] border-line-subtle border-b px-4 py-4 text-center align-top">
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">None</div>
                          </td>
                          <td className="w-16 border-line-subtle border-b hidden md:table-cell" />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Security and enterprise" id="security">
            <div className="container-page">
              <div className="bg-surface-1 border border-line-subtle relative overflow-visible rounded-xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
                  <div className="flex flex-col gap-10 px-6 py-8 sm:px-10 sm:py-10 lg:gap-16 lg:px-16 lg:py-12">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <h3 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[28px] leading-[1.3] tracking-[-0.03em] md:text-[40px] text-txt-primary font-430">Uncompromised security</h3>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">This section explains the idea in plain words so readers.</div>
                      </div>
                      <div>
                        <a className="btn-primary inline font-inter" href="/talk-to-sales">Run a pilot</a>
                      </div>
                    </div>
                    <ul className="flex flex-col gap-8">
                      <li className="flex gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-txt-primary mt-1 size-4 shrink-0" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.56 0.67H3.44C3.09 0.67 2.79 0.67 2.54 0.69C2.27 0.71 2.01 0.76 1.76 0.88C1.38 1.08 1.08 1.38 0.88 1.76C0.76 2.01 0.71 2.27 0.69 2.54C0.67 2.79 0.67 3.09 0.67 3.44V4.56C0.67 4.91 0.67 5.21 0.69 5.46C0.71 5.73 0.76 5.99 0.88 6.24C1.08 6.62 1.38 6.92 1.76 7.12C2.01 7.24 2.27 7.29 2.54 7.31C2.79 7.33 3.09 7.33 3.44 7.33H12.56C12.91 7.33 13.21 7.33 13.46 7.31C13.727 7.29 13.99 7.24 14.24 7.12C14.62 6.92 14.92 6.62 15.12 6.24C15.244 5.99 15.29 5.73 15.313 5.46C15.33 5.21 15.33 4.91 15.33 4.56V3.44C15.33 3.09 15.33 2.79 15.313 2.54C15.29 2.27 15.244 2.01 15.12 1.76C14.92 1.38 14.62 1.08 14.24 0.88C13.99 0.76 13.727 0.71 13.46 0.69C13.21 0.67 12.91 0.67 12.56 0.67ZM4 3.17C3.54 3.17 3.17 3.54 3.17 4C3.17 4.46 3.54 4.83 4 4.83C4.46 4.83 4.83 4.46 4.83 4C4.83 3.54 4.46 3.17 4 3.17Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.56 8.67H3.44C3.09 8.67 2.79 8.67 2.54 8.69C2.27 8.71 2.01 8.76 1.76 8.88C1.38 9.08 1.08 9.38 0.88 9.76C0.76 10.01 0.71 10.27 0.69 10.537C0.67 10.79 0.67 11.09 0.67 11.44V12.56C0.67 12.91 0.67 13.214 0.69 13.46C0.71 13.73 0.76 13.99 0.88 14.24C1.08 14.618 1.38 14.92 1.76 15.12C2.01 15.24 2.27 15.29 2.54 15.31C2.79 15.33 3.09 15.33 3.44 15.33H12.56C12.91 15.33 13.21 15.33 13.46 15.31C13.727 15.29 13.99 15.24 14.24 15.12C14.62 14.92 14.92 14.618 15.12 14.24C15.244 13.99 15.29 13.73 15.313 13.46C15.33 13.214 15.33 12.91 15.33 12.56V11.44C15.33 11.09 15.33 10.79 15.313 10.537C15.29 10.27 15.244 10.01 15.12 9.76C14.92 9.38 14.62 9.08 14.24 8.88C13.99 8.76 13.727 8.71 13.46 8.69C13.21 8.67 12.91 8.67 12.56 8.67ZM3.17 12C3.17 11.54 3.54 11.167 4 11.167C4.46 11.167 4.83 11.54 4.83 12C4.83 12.46 4.46 12.83 4 12.83C3.54 12.83 3.17 12.46 3.17 12Z" fill="currentColor" />
                        </svg>
                        <div className="flex min-w-0 flex-col gap-1">
                          <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Self-hosted and air-gapped</div>
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">The workspace stays fast and simple even as more people join.</div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-txt-primary mt-1 size-4 shrink-0" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M4 5.33C4 3.12 5.79 1.33 8 1.33C10.21 1.33 12 3.12 12 5.33V6.1C12.19 6.14 12.37 6.2 12.544 6.29C13.05 6.55 13.45 6.95 13.71 7.46C13.87 7.78 13.94 8.12 13.97 8.5C14 8.86 14 9.3 14 9.84V10.83C14 11.36 14 11.81 13.97 12.17C13.94 12.54 13.87 12.89 13.71 13.21C13.45 13.71 13.05 14.12 12.544 14.376C12.22 14.54 11.88 14.61 11.5 14.64C11.14 14.67 10.7 14.67 10.16 14.67H5.84C5.3 14.67 4.86 14.67 4.5 14.64C4.12 14.61 3.78 14.54 3.46 14.376C2.95 14.12 2.55 13.71 2.29 13.21C2.13 12.89 2.06 12.54 2.03 12.17C2 11.81 2 11.36 2 10.83V9.84C2 9.3 2 8.86 2.03 8.5C2.06 8.12 2.13 7.78 2.29 7.46C2.55 6.95 2.95 6.55 3.46 6.29C3.63 6.2 3.81 6.14 4 6.1V5.33ZM10.67 5.33V6H5.33V5.33C5.33 3.86 6.53 2.67 8 2.67C9.47 2.67 10.67 3.86 10.67 5.33ZM8.67 9.67C8.67 9.3 8.37 9 8 9C7.63 9 7.33 9.3 7.33 9.67V11C7.33 11.37 7.63 11.67 8 11.67C8.37 11.67 8.67 11.37 8.67 11V9.67Z" fill="currentColor" />
                        </svg>
                        <div className="flex min-w-0 flex-col gap-1">
                          <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Full data residency</div>
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Full control over where data is stored and processed.</div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-txt-primary mt-1 size-4 shrink-0" aria-hidden="true">
                          <path d="M2.02 3.88C4.14 0.78 8.32 -0.21 11.63 1.69C15.12 3.69 16.32 8.14 14.32 11.62C12.321 15.1 7.88 16.31 4.39 14.31C2.41 13.172 1.17 11.24 0.83 9.15C0.77 8.81 1.01 8.49 1.35 8.44C1.69 8.38 2.01 8.61 2.06 8.95C2.34 10.69 3.37 12.28 5.01 13.23C7.9 14.88 11.58 13.88 13.24 11C14.89 8.11 13.89 4.43 11.01 2.78C8.18 1.15 4.58 2.08 2.88 4.84L3.74 4.61C4.07 4.52 4.41 4.72 4.5 5.05C4.59 5.39 4.4 5.73 4.07 5.82L2.05 6.37C1.89 6.41 1.72 6.39 1.57 6.31C1.43 6.22 1.32 6.09 1.28 5.93L0.74 3.91C0.65 3.58 0.84 3.23 1.18 3.14C1.51 3.05 1.85 3.25 1.94 3.58L2.02 3.88ZM7.32 4.73C7.32 4.39 7.6 4.11 7.95 4.11C8.29 4.11 8.57 4.39 8.57 4.73V8.09L10.51 9.38C10.8 9.57 10.87 9.96 10.68 10.25C10.492 10.54 10.1 10.615 9.82 10.42L7.6 8.946C7.43 8.83 7.32 8.64 7.32 8.43V4.73Z" fill="currentColor" />
                        </svg>
                        <div className="flex min-w-0 flex-col gap-1">
                          <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Audit trails</div>
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Sample text stands in for the original paragraph at a similar today.</div>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-txt-primary mt-1 size-4 shrink-0" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M7.81 0.73C7.94 0.71 8.06 0.71 8.19 0.73C8.34 0.75 8.47 0.8 8.58 0.84L8.61 0.85L12.27 2.22C12.68 2.38 13.04 2.51 13.32 2.76C13.566 2.97 13.75 3.24 13.87 3.55C14 3.89 14 4.28 14 4.72L14 8C14 9.88 12.98 11.46 11.87 12.61C10.752 13.77 9.476 14.592 8.8 14.99L8.77 15C8.65 15.074 8.49 15.17 8.28 15.21C8.11 15.25 7.89 15.25 7.72 15.21C7.51 15.17 7.35 15.074 7.23 15L7.2 14.99C6.52 14.592 5.25 13.77 4.13 12.61C3.02 11.46 2 9.88 2 8L2 4.72C2 4.28 2 3.89 2.13 3.55C2.25 3.24 2.43 2.97 2.68 2.76C2.96 2.51 3.32 2.38 3.73 2.22L7.39 0.85L7.42 0.84C7.53 0.8 7.66 0.75 7.81 0.73ZM8 5C8.37 5 8.67 5.3 8.67 5.67V7H10C10.37 7 10.67 7.3 10.67 7.67C10.67 8.03 10.37 8.33 10 8.33H8.67V9.67C8.67 10.03 8.37 10.33 8 10.33C7.63 10.33 7.33 10.03 7.33 9.67V8.33H6C5.63 8.33 5.33 8.03 5.33 7.67C5.33 7.3 5.63 7 6 7H7.33V5.67C7.33 5.3 7.63 5 8 5Z" fill="currentColor" />
                        </svg>
                        <div className="flex min-w-0 flex-col gap-1">
                          <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Custom security policies</div>
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Work moves forward with fewer handoffs and clearer ownership again weekly.</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="border-line-subtle flex flex-col gap-8 border-t px-6 py-8 sm:px-10 sm:py-10 lg:gap-10 lg:border-t-0 lg:border-l lg:px-16 lg:py-12">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <h3 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[28px] leading-[1.3] tracking-[-0.03em] md:text-[40px] text-txt-primary font-430">Enterprise-ready</h3>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Connect the tools you already use and keep updates flowing in both directions.</div>
                      </div>
                      <div>
                        <a className="btn-primary inline font-inter" href="/talk-to-sales">Talk to a migration expert</a>
                      </div>
                    </div>
                    <img alt="Enterprise-ready" width="500" height="403" className="h-auto w-full max-w-md" src="/assets/compare/uncompromised-security.webp" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Resources" id="resources">
            <div className="container-page">
              <div className="bg-surface-1 border border-line-subtle rounded-xl p-6 sm:p-10 lg:p-16">
                <div className="flex flex-col gap-12">
                  <div className="flex flex-col gap-2 items-center">
                    <div className="text-center">
                      <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">Resources for your migration</h2>
                    </div>
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">The workspace stays fast and simple even as more people join the effort. Sample text stands overall.</div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <a className="border-line-subtle bg-surface-1 hover:bg-white flex min-h-[7.5rem] flex-col items-start justify-between gap-4 rounded-xl border p-5 sm:flex-row sm:items-center sm:p-6 hover:scale-[1.01] transition-all duration-300 cursor-pointer" rel="noopener noreferrer" target="_blank" href="https://developers.plane.so/self-hosting/overview">
                      <div className="min-w-0 flex-1 flex flex-col gap-1.5 text-left">
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-570">Self-hosting deployment guide</div>
                        <div className="line-clamp-2">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">A short description of how this feature helps teams plan and ship work. Placeholder copy describes here.</div>
                        </div>
                      </div>
                      <span aria-hidden="true" className="text-black text-xl leading-none shrink-0 self-end sm:self-auto">↗</span>
                    </a>
                    <a className="border-line-subtle bg-surface-1 hover:bg-white flex min-h-[7.5rem] flex-col items-start justify-between gap-4 rounded-xl border p-5 sm:flex-row sm:items-center sm:p-6 hover:scale-[1.01] transition-all duration-300 cursor-pointer" rel="noopener noreferrer" target="_blank" href="https://docs.plane.so/importers/jira">
                      <div className="min-w-0 flex-1 flex flex-col gap-1.5 text-left">
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-570">Jira to Plane migration guide</div>
                        <div className="line-clamp-2">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">A short description of how this feature helps teams plan and ship work. Placeholder copy describes.</div>
                        </div>
                      </div>
                      <span aria-hidden="true" className="text-black text-xl leading-none shrink-0 self-end sm:self-auto">↗</span>
                    </a>
                    <a className="border-line-subtle bg-surface-1 hover:bg-white flex min-h-[7.5rem] flex-col items-start justify-between gap-4 rounded-xl border p-5 sm:flex-row sm:items-center sm:p-6 hover:scale-[1.01] transition-all duration-300 cursor-pointer" rel="noopener noreferrer" target="_blank" href="https://developers.plane.so/self-hosting/plane-architecture">
                      <div className="min-w-0 flex-1 flex flex-col gap-1.5 text-left">
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-570">Plane self-hosted architecture</div>
                        <div className="line-clamp-2">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Admins get the controls they need while members keep a calm, focused view. Teams keep their projects, notes.</div>
                        </div>
                      </div>
                      <span aria-hidden="true" className="text-black text-xl leading-none shrink-0 self-end sm:self-auto">↗</span>
                    </a>
                    <a className="border-line-subtle bg-surface-1 hover:bg-white flex min-h-[7.5rem] flex-col items-start justify-between gap-4 rounded-xl border p-5 sm:flex-row sm:items-center sm:p-6 hover:scale-[1.01] transition-all duration-300 cursor-pointer" rel="noopener noreferrer" target="_blank" href="/airgapped">
                      <div className="min-w-0 flex-1 flex flex-col gap-1.5 text-left">
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-570">Air-gapped deployment</div>
                        <div className="line-clamp-2">
                          <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Everyone can see what is planned, what is in progress, and what is done. Bring existing data along and pick.</div>
                        </div>
                      </div>
                      <span aria-hidden="true" className="text-black text-xl leading-none shrink-0 self-end sm:self-auto">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="Frequently asked questions" id="faq">
            <div className="container-page">
              <div className="bg-surface-1 border border-line-subtle rounded-xl p-6 sm:p-10 lg:p-16">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className="flex flex-col gap-4">
                    <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">FAQs</h2>
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">Use the views you prefer and switch between them without losing context. Connect.</div>
                  </div>
                  <div className="flex flex-col">
                    <DcFaq />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
