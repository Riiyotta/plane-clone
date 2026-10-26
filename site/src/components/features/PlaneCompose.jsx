// plane.so/plane-compose — custom dark page (not part of the CMS block system).
// Values measured live 2026-10-26. Paragraph copy is placeholder text of matching length.
import { useState } from 'react'

const MONO_SYS = 'font-[ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation_Mono","Courier_New",monospace]'
const CARD = 'rounded-xl border border-[#27272a] bg-gradient-to-b from-[rgba(24,24,27,0.8)] to-[#09090b] shadow-lg transition-all duration-300 hover:border-[#3f3f46] hover:shadow-xl'
const HEAD_FF = { fontFeatureSettings: '"cv05", "cv08" 0, "ss02", "ss03"' }
const DOCS = 'https://pypi.org/project/plane-compose/'

const Lucide = ({ children, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    {children}
  </svg>
)
const CopyIcon = ({ className }) => (
  <Lucide className={className}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </Lucide>
)

function Pill({ children }) {
  return (
    <div className="inline-flex w-fit items-center rounded-full border border-[#333537] bg-[#1a1b1c] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[#a1a1aa]">
      {children}
    </div>
  )
}

function H2({ children, className = '' }) {
  return (
    <h2 className={`h2 text-[#fafafa] md:whitespace-pre-line ${className}`} style={HEAD_FF}>
      {children}
    </h2>
  )
}

function InstallButton() {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen(!open)} className="btn-primary-dark">
        <span className="flex items-center gap-2">
          Install now
          <Lucide className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></Lucide>
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-[#27272a] bg-[#09090b] text-left shadow-xl">
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText('pipx install plane-compose')}
            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-[#18181b]"
          >
            <div className="min-w-0 flex-1">
              <div className="text-xs font-medium text-[#9f9fa9]">Install CLI</div>
              <code className={`${MONO_SYS} text-sm text-white`}>pipx install plane-compose</code>
            </div>
            <div className="flex size-8 shrink-0 items-center justify-center rounded-md text-[#71717b] transition-colors hover:bg-[#27272a] hover:text-white">
              <CopyIcon className="size-4" />
            </div>
          </button>
        </div>
      )}
    </div>
  )
}

function DocsButton() {
  return (
    <a href={DOCS} target="_blank" rel="noopener noreferrer" className="btn-secondary-dark">
      <span className="flex items-center gap-2">
        Read the docs
        <Lucide className="size-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></Lucide>
      </span>
    </a>
  )
}

// Terminal: static final frame of step 1. Live types four commands in a loop (flagged for Animation).
const TERM_LINES = [
  ['', ''],
  ['text-[#c4b4ff]', '? Select workspace › Acme Corp'],
  ['text-[#c4b4ff]', '? Project identifier › sprint-q1'],
  ['', ''],
  ['text-[#05df72]', '  ✓ Created plane.yaml'],
  ['text-[#05df72]', '  ✓ Created .plane/schema/'],
  ['text-[#05df72]', '  ✓ Created .plane/work/'],
  ['text-[#05df72]', '  ✓ Created .plane/inbox/'],
  ['', ''],
  ['text-[#71717b]', '  Project scaffold ready. Edit plane.yaml to configure.'],
]
const PRE = `${MONO_SYS} m-0 flex-1 p-0 text-sm leading-[1.7]`

function Terminal() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-[rgba(64,64,72,0.5)] bg-gradient-to-b from-[rgba(24,24,27,0.98)] to-[#09090b] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2.5 border-b border-white/5 bg-gradient-to-b from-[rgba(39,39,42,0.8)] to-[rgba(24,24,27,0.8)] px-[18px] py-2">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-4 flex items-center gap-2 rounded-md border border-[rgba(64,64,72,0.5)] bg-[rgba(63,63,70,0.3)] px-4 py-1.5">
          <span className={`${MONO_SYS} text-xs text-[#9f9fa9]`}>~/projects/acme</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5 rounded bg-[rgba(63,63,70,0.3)] px-2.5 py-1">
          <svg className="opacity-70" fill="none" height="14" viewBox="0 0 24 24" width="14" aria-hidden="true">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#a1a1aa" />
            <path d="M2 17l10 5 10-5" stroke="#a1a1aa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M2 12l10 5 10-5" stroke="#a1a1aa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span className={`${MONO_SYS} text-[11px] font-medium tracking-wide text-[#9f9fa9]`}>COMPOSE</span>
        </div>
      </div>
      <div className="max-h-[420px] min-h-[320px] overflow-y-auto p-6 py-2">
        <div className="flex items-start">
          <span className={`${MONO_SYS} mr-2.5 text-sm font-semibold text-[#9f9fa9]`}>❯</span>
          <pre className={`${PRE} text-[#e4e4e7]`}>plane init</pre>
        </div>
        {TERM_LINES.map(([c, t], i) => (
          <div key={i} className="flex items-start">
            <pre className={`${PRE} ${c || 'text-[#9f9fa9]'}`}>{t}</pre>
          </div>
        ))}
        <div className="mt-2 flex items-center opacity-30 transition-opacity duration-200">
          <span className={`${MONO_SYS} mr-2.5 text-sm font-semibold text-[#9f9fa9]`}>❯</span>
          <span className="inline-block h-[18px] w-[9px] bg-[#9f9fa9]" />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-[rgba(64,64,72,0.5)] bg-[rgba(39,39,42,0.5)] px-[18px] py-2">
        <div className="flex items-center gap-4">
          <span className={`${MONO_SYS} text-[11px] text-[#52525c]`}>zsh</span>
          <span className={`${MONO_SYS} flex items-center gap-1 text-[11px] text-[#00d492]`}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#00d492]" />
            authenticated
          </span>
        </div>
        <div className="flex items-center gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`h-2 w-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-[#615fff]' : 'bg-[rgba(64,64,72,0.5)]'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

const CAPABILITIES = [
  {
    title: 'Bootstrap instantly',
    desc: 'Placeholder text explains how a single command sets up a new project folder with a fixed layout.',
    code: 'plane init\n# Select workspace → Set project key\n# Creates:\n#   plane.yaml\n#   .plane/\n#   schema/\n#   work/',
  },
  {
    title: 'Schema as YAML',
    desc: 'Placeholder text describes keeping project settings in plain files that are easy to read, review, and track over time.',
    code: '# schema/workflows/sprint.yaml\nstates:\n  - name: backlog\n    color: "#6B7280"\n  - name: in-progress\n    color: "#3B82F6"\n  - name: done\n    color: "#10B981"',
  },
  {
    title: 'Push and pull',
    desc: 'Placeholder text explains keeping local files and the workspace in sync with familiar commands too.',
    code: 'plane schema pull   # Fetch remote → local\nplane schema push   # Apply local → remote\nplane push          # Sync work items\nplane pull          # Pull work items',
  },
  {
    title: 'Clone your project',
    desc: 'Placeholder text describes copying a full project setup so other teams can reuse it as it is.',
    code: 'plane clone PROJECT_ID\n# Edit plane.yaml → new project name\nplane schema push\n# → Identical structure, new project',
  },
]

const STEPS = [
  { n: '01', title: 'Initialize', desc: 'Placeholder text describing the first command that prepares a project folder and its files.', cmd: 'plane init' },
  { n: '02', title: 'Define', desc: 'Placeholder text describing how project settings are written in plain files.', cmd: 'vim schema/workflows.yaml' },
  { n: '03', title: 'Push', desc: 'Placeholder text describing how changes are applied safely.', cmd: 'plane schema push' },
  { n: '04', title: 'Version', desc: 'Placeholder text describing how changes are reviewed by the team.', cmd: 'git commit -am "add workflow"' },
]

const STATS = [
  ['$2T', 'Wasted annually on poor project management'],
  ['60%', 'Time spent on "work about work"'],
  ['28×', 'Less waste with IaC principles'],
]

const GRID_BG = {
  backgroundImage:
    'linear-gradient(to right, rgba(34, 36, 37, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 36, 37, 0.2) 1px, transparent 1px)',
  backgroundSize: '48px 48px',
  backgroundAttachment: 'fixed', // live: a position:fixed grid layer behind the content
}

const BODY_CAP = 'font-inter font-430 text-[#909598] md:whitespace-pre-line'

export default function PlaneCompose() {
  return (
    <div className="relative min-h-screen bg-[#0F0F10] font-satoshi" style={GRID_BG}>
      <div className="relative z-10">
        {/* Hero */}
        <div>
          <div className="container-page">
            <div className="w-full">
              <div className="grid min-h-[50vh] w-full grid-cols-1 items-center gap-8 py-8 md:min-h-[60vh] md:grid-cols-2 md:gap-16 md:py-16">
                <div className="flex flex-col gap-4 text-center md:text-left">
                  <div className="flex justify-center md:justify-start">
                    <Pill>Projects-as-code</Pill>
                  </div>
                  <h1 className="h1 text-[#fafafa] md:whitespace-pre-line" style={HEAD_FF}>Plane Compose</h1>
                  <div className={`${BODY_CAP} text-600`}>
                    A short placeholder description of the product: how a project setup can be written as files, tracked in version control, and shared like code across teams and each project.
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2 sm:gap-4 md:justify-start">
                    <InstallButton />
                    <DocsButton />
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4 md:justify-start">
                    {[
                      ['bg-[#00bc7d]', 'CLI first'],
                      ['bg-[#ffb900]', 'GitOps ready'],
                      ['bg-[#2b7fff]', 'Built for scale'],
                    ].map(([dot, label]) => (
                      <label key={label} className="text-[15px] font-430 leading-[15px] tracking-[0.02em] text-txt-tertiary md:whitespace-pre-line">
                        <span className="flex items-center gap-1.5">
                          <span className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex h-full items-center justify-center">
                  <div className="w-full">
                    <div className="relative flex items-center justify-center overflow-hidden">
                      <Terminal />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="w-full py-16">
          <div className="container-page">
            <div className="flex flex-col items-center gap-4 px-4 pb-8 text-center">
              <H2>See it in action</H2>
              <div className={`${BODY_CAP} text-500`}>Watch how Plane Compose transforms project management workflows</div>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-xl border border-[#222425]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/rzpc1UVW1Xw"
                title="Plane Compose"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="w-full py-16">
          <div className="container-page">
            <div className="flex flex-col items-center gap-4 px-4 pb-12 text-center">
              <Pill>Capabilities</Pill>
              <H2>
                Everything you need to manage
                <br />
                <span className="text-[#909598]">projects-as-code</span>
              </H2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className={`group flex h-full flex-col overflow-hidden ${CARD}`}>
                  <div className="p-5 pb-4">
                    <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                    <p className="mt-2 font-mono text-sm leading-relaxed text-[#9f9fa9]">{c.desc}</p>
                  </div>
                  <div className="mx-4 mb-4 flex flex-1 flex-col overflow-hidden rounded-lg border border-[#27272a] bg-[#09090b]">
                    <div className="flex items-center justify-between border-b border-[#27272a] px-3 py-2">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#3f3f46]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#3f3f46]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#3f3f46]" />
                      </div>
                      <button
                        type="button"
                        onClick={() => navigator.clipboard?.writeText(c.code)}
                        className="flex items-center gap-1.5 rounded px-2 py-1 text-xs text-[#71717b] transition-colors hover:bg-[#27272a] hover:text-white"
                      >
                        <CopyIcon className="size-3.5" />
                        Copy
                      </button>
                    </div>
                    <pre className="flex-1 overflow-x-auto p-4 font-mono text-xs leading-relaxed text-[#d4d4d8]">
                      <code className={MONO_SYS}>{c.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What is Projects-as-code */}
        <div className="w-full py-16">
          <div className="container-page">
            <div className={`mx-auto max-w-5xl overflow-hidden p-6 sm:p-8 md:p-12 ${CARD}`}>
              <div className="mb-8 text-center">
                <H2>
                  What is <span className="text-[#909598]">Projects-as-code</span>
                </H2>
              </div>
              <div className={`flex flex-col gap-6 ${BODY_CAP} text-500`}>
                <div>
                  Every project has two parts: <span className="font-semibold text-white">the work</span> and{' '}
                  <span className="font-semibold text-white">the structure</span> around it all.
                </div>
                <div>
                  Placeholder paragraph describing the day-to-day work inside a project and the lasting knowledge that builds up around it over time. This sample text stands in for the original explanation and keeps the same rough length so the layout of the section is preserved for all readers on the page.
                </div>
                <div>
                  Placeholder paragraph describing the structure of a project and the settings that shape how a team runs its process each and every week of work.
                </div>
                <div>
                  Placeholder sentence noting that settings managed only in an interface are hard to compare or reuse at scale for a team.
                </div>
                <div>
                  <span className="font-semibold text-white">Projects-as-code</span> placeholder paragraph explaining that a project can live as plain files next to the code, move through review like any other change, and be copied, compared, or restored across teams without extra effort for anyone involved in the daily work of the whole team.
                </div>
                <div>
                  Placeholder closing sentence about applying the same care used for code to the way projects are set up by teams.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="w-full py-16">
          <div className="container-page">
            <div className="flex flex-col items-center gap-4 px-4 pb-12 text-center">
              <Pill>How it works</Pill>
              <H2>
                Four commands to transform
                <br />
                <span className="text-[#909598]">your workflow</span>
              </H2>
            </div>
            <div className="mx-auto flex max-w-5xl flex-col gap-6">
              {STEPS.map((s) => (
                <div key={s.n} className={`group flex items-start gap-6 overflow-hidden p-6 md:items-center md:gap-8 md:p-8 ${CARD}`}>
                  <div className="font-mono text-3xl font-bold text-[#3f3f47] transition-colors group-hover:text-[#52525c] md:text-4xl">{s.n}</div>
                  <div className="flex min-w-0 flex-1 flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#9f9fa9]">{s.desc}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigator.clipboard?.writeText(s.cmd)}
                      className="group flex min-w-0 max-w-full items-center gap-2 rounded-lg border border-[#333537] bg-[#1a1b1c] px-3 py-2 font-mono text-xs text-[#e4e4e7] transition-colors hover:border-[#444] hover:bg-[#222] sm:px-4 sm:text-sm md:shrink-0"
                    >
                      <span className="truncate">$ {s.cmd}</span>
                      <CopyIcon className="size-4 text-[#71717a] transition-colors group-hover:text-white" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why this matters */}
        <div className="w-full py-16">
          <div className="container-page">
            <div className="flex flex-col items-center gap-4 px-4 pb-12 text-center">
              <Pill>Why this matters</Pill>
              <H2>
                Project management hasn&apos;t caught up
                <br />
                <span className="text-[#909598]">to how developers work</span>
              </H2>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
              {STATS.map(([n, l]) => (
                <div key={n} className={`group flex flex-col items-center gap-3 overflow-hidden p-6 text-center sm:p-8 ${CARD}`}>
                  <div className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">{n}</div>
                  <p className="font-mono text-xs leading-relaxed text-[#9f9fa9] sm:text-sm sm:leading-relaxed">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden bg-[#0F0F10]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, #ffffff 40px, #ffffff 41px)' }}
          />
          <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #0F0F10 70%)' }} />
          <div className="relative flex min-h-[500px] w-full items-center justify-center">
            <div className="container-page">
              <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-4 text-center">
                <H2>{'Start building \nwith Plane Compose'}</H2>
                <div className={`${BODY_CAP} text-600`}>
                  Placeholder line about writing project setups as files in Git.
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  Placeholder line about treating setup like any other code you ship.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <InstallButton />
                  <DocsButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
