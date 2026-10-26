// /plane-in-2025 — dark year-in-review timeline. Measured live 2026-10-26.
// 1440: hero 58→632 (574), journey 632→7532 (6900), CTA 7532→8032 (500).
// Release titles, tags and stats are live; one-line descriptions are placeholder prose (long-form rule).
import '../components/company/company.css'
import { Btn } from '../components/company/Blocks.jsx'
import { ph } from '../components/company/placeholder.js'

const TAG = {
  Security: '#10b981', Planning: '#8b5cf6', Collaboration: '#3b82f6', Global: '#06b6d4', Experience: '#6366f1', Core: '#f43f5e',
  Migration: '#f59e0b', DevOps: '#ec4899', Docs: '#14b8a6', Workflow: '#f97316', Automation: '#ef4444', Analytics: '#0ea5e9',
  Productivity: '#84cc16', CRM: '#a855f7', Flexibility: '#22c55e', Platform: '#6366f1', Enterprise: '#7c3aed', Onboarding: '#2dd4bf',
  Brand: '#f472b6', AI: '#818cf8', Milestone: '#fbbf24', Integration: '#38bdf8', Mobile: '#34d399', Ecosystem: '#fb923c',
  Community: '#c084fc', Performance: '#4ade80', Developer: '#60a5fa',
}

// [month, [[title, tag, descLength], ...]]
const MONTHS = [
  ['January', [['SOC 2 Type II compliant', 'Security', 73], ['Epics introduced', 'Planning', 85], ['Teamspaces launched', 'Collaboration', 89], ['Language support added', 'Global', 66], ['New Home + Stickies', 'Experience', 50]]],
  ['February', [['Issues renamed to Work Items', 'Core', 118], ['Initiatives launched', 'Planning', 76], ['Importers introduced', 'Migration', 70], ['Integrations expanded', 'DevOps', 79], ['Wiki Home redesigned', 'Docs', 96]]],
  ['March', [['Intake Forms added', 'Workflow', 66], ['More languages added', 'Global', 82]]],
  ['April', [['Workflows introduced', 'Automation', 62], ['Dashboards launched', 'Analytics', 54], ['CSV import added', 'Migration', 34], ['Templates launched', 'Productivity', 52], ['Intake via Email added', 'Workflow', 70], ['Customers introduced', 'CRM', 69], ['Time estimates added', 'Planning', 64]]],
  ['May', [['Nested Pages launched', 'Docs', 56], ['Analytics upgraded', 'Analytics', 52], ['Epic ↔ Work Item conversion added', 'Flexibility', 54], ['Page Templates introduced', 'Docs', 53]]],
  ['June', [['Business plan launched', 'Platform', 49], ['Air-gapped edition launched', 'Enterprise', 54], ['Analytics 2.0 released', 'Analytics', 48], ['Pre-defined templates added', 'Onboarding', 59]]],
  ['July', [['Planes of Work campaign launched', 'Brand', 76], ['Navigation redesigned', 'Experience', 58], ['Search upgraded', 'Experience', 57], ['Private wiki sharing added', 'Collaboration', 43], ['Editor attachments added', 'Docs', 76]]],
  ['August', [['New website launched', 'Brand', 63], ['Plane AI launched', 'AI', 55], ['Enterprise connectivity expanded', 'Enterprise', 128]]],
  ['September', [['Community v1.0.0 GA', 'Milestone', 76], ['External embeds added', 'Integration', 90], ['Mobile catch-up shipped', 'Mobile', 74], ['Slack ↔ Work Items linking added', 'Integration', 70]]],
  ['October', [['Marketplace launched', 'Platform', 64], ['Partner program launched', 'Ecosystem', 54], ['Integrations expanded again', 'Integration', 45], ['Power K launched', 'Productivity', 71]]],
  ['November', [['AWS Marketplace launched', 'Enterprise', 64], ['40K GitHub stars', 'Community', 49], ['Plane AI in Slack', 'AI', 40], ['Added Claude Sonnet 4.0 model support to Plane AI.', 'AI', 38], ['Editable Pages from Plane AI', 'AI', 61], ['React Router + Vite migration', 'Performance', 74]]],
  ['December', [['New workspace navigation', 'Experience', 59], ['Custom intake forms enhanced', 'Workflow', 81], ['Advanced API and advanced search', 'Developer', 94]]],
]
const STATS = [['89', 'Releases'], ['40K', 'GitHub stars'], ['19', 'Languages'], ['4', 'Editions']]

export default function PlaneIn2025() {
  let seed = 0
  return (
    <div className="relative min-h-screen bg-dark-bg">
      <div className="relative z-10 text-txt-d-primary">
        <section className="relative flex flex-col py-8 md:py-16">
          <div className="container-page">
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
              <span className="inline-flex items-center rounded-full border border-[#414141] bg-[#1a1a1c] px-5 py-2.5 font-satoshi text-[14px] leading-5 tracking-[0.025em] text-[#999]">Year in review</span>
              <h1 className="text-center font-satoshi text-[60px] font-bold leading-[1.1] tracking-[-0.025em] text-txt-d-primary md:text-[96px]">
                Plane in <span className="text-[#909598]">2025</span>
              </h1>
              <p className="text-600 text-[#909598]">89 releases. 12 months. 4 editions.</p>
              <div className="mt-4 grid w-full max-w-4xl grid-cols-2 gap-4 md:mt-8 md:grid-cols-4 md:gap-5">
                {STATS.map(([n, l]) => (
                  <div key={l} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-[#2a2a2d] bg-[#151517]/80 px-4 py-8 backdrop-blur-sm transition-colors duration-300 hover:border-[#3a3a3d] hover:bg-[#1a1a1c]/80 md:px-8 md:py-10">
                    <span className="font-satoshi text-[30px] font-bold leading-9 text-white md:text-[36px] md:leading-10">{n}</span>
                    <label className="c-label-xs font-satoshi uppercase text-txt-tertiary">{l}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="the-journey" className="relative py-8 md:py-16">
          <div className="container-page">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-px bg-[#333] md:left-36" />
              <div className="space-y-12 md:space-y-16">
                {MONTHS.map(([month, items]) => (
                  <div key={month} id={month} className="relative md:flex md:gap-8">
                    <div className="sticky top-0 z-20 flex h-fit items-center gap-4 bg-dark-bg py-2 md:top-24 md:w-40 md:shrink-0 md:flex-row-reverse md:bg-transparent md:py-0">
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#333] bg-[#1a1a1c]">
                        <div className="h-3 w-3 rounded-full bg-[#555]" />
                      </div>
                      <span className="c-mono text-[14px] uppercase leading-5 tracking-[0.1em] text-[#888]">{month}</span>
                    </div>
                    <div className="ml-8 mt-6 flex-1 space-y-4 md:ml-8 md:mt-0">
                      {items.map(([title, tag, len]) => (
                        <div key={title} className="group relative rounded-xl border border-[#414141] bg-[#151517] p-5 transition-all duration-300 hover:border-[#3a3a3d] hover:bg-[#1a1a1c]">
                          <div className="flex flex-col gap-3">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-satoshi text-[16px] font-semibold leading-6 text-white md:text-[18px] md:leading-7">{title}</h3>
                              <span className="hidden shrink-0 items-center rounded-full px-2.5 py-1 font-satoshi text-[12px] font-medium leading-4 md:inline-flex" style={{ color: TAG[tag], backgroundColor: TAG[tag] + '15' }}>{tag}</span>
                            </div>
                            <p className="text-400 text-[#909598]">{ph(len, seed++)}</p>
                            <div className="md:hidden">
                              <span className="inline-flex shrink-0 items-center rounded-full px-2.5 py-1 font-satoshi text-[12px] font-medium leading-4" style={{ color: TAG[tag], backgroundColor: TAG[tag] + '15' }}>{tag}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="bg-dark-bg">
          <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,1) 50px, rgba(255,255,255,1) 51px)' }} />
            <div className="container-page">
              <div className="flex h-full w-full flex-col items-center justify-center gap-6 text-center">
                <h2 className="h2 text-txt-on-color md:whitespace-pre-line">We are just getting started</h2>
                <p className="text-600 text-[#909598]">Join 50,000+ teams building with Plane.</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Btn variant="primary-dark" href="https://app.plane.so/sign-up">Get started free</Btn>
                  <Btn variant="secondary-dark" href="/talk-to-sales">Talk to Sales</Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
