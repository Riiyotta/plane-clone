// CLONE_SPEC §7 — Migrate
function Check() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-2 size-4 flex-shrink-0 text-txt-secondary">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

const WEEKS = [
  {
    label: 'WEEK 1',
    title: 'Discovery and set-up.',
    items: [
      'We run discovery scripts on your existing setup',
      'We map every issue, attachment, comment, and automation',
      'You get a migration plan tailored to your organization',
    ],
  },
  {
    label: 'WEEK 2',
    title: 'Run in parallel',
    items: [
      'Define workflows that match how your team actually works',
      'Connect to Slack, GitHub, Figma, and 50+ tools',
      'Set up initiatives, cycles, and team structures',
    ],
  },
  {
    label: 'WEEK 3',
    title: 'Cut over and onboard',
    items: [
      'Experience a tool that moves as fast as you do',
      'AI already knows your projects, your blockers, your priorities',
      'No more fighting your software to get work done',
    ],
  },
]

export default function Migrate() {
  return (
    <section aria-label="Migrate" id="migrate" className="py-20">
      <div className="container-page">
        <div className="space-y-11">
          <div className="flex flex-col items-start space-y-6 md:items-center">
            <div className="flex flex-col items-start space-y-3 text-left md:items-center md:text-center">
              <h2 className="h2 text-txt-primary md:whitespace-pre-line">
                {'Two Fortune 10 companies\n chose Plane for their Jira migration.'}
              </h2>
              <p className="font-inter text-500 font-430 text-txt-secondary md:whitespace-pre-line">
                {"Get out of Jira, Linear, ClickUp, Asana, or Monday without leaving your data behind.\nFull migration support from day one, whether you're moving 50 people or 10,000"}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-4 md:justify-center">
              <a className="btn-primary" href="https://app.plane.so/sign-up">Get started free</a>
              <a className="btn-secondary" href="https://plane.so/talk-to-sales">Talk to a migration expert →</a>
            </div>
          </div>

          <div>
            {/* Ruler: 1px #eff0f0 ticks every 16px */}
            <div className="relative h-7">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[length:16px_100%] bg-[image:repeating-linear-gradient(to_right,theme(colors.line.n2)_0,theme(colors.line.n2)_1px,transparent_1px,transparent_16px)]"
              />
            </div>
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
              {WEEKS.map((w) => (
                <div key={w.label} className="space-y-12 border-l border-line-n2 p-6">
                  <div className="space-y-3">
                    <div className="font-inter text-400 font-medium text-txt-accent">{w.label}</div>
                    <div className="font-inter text-600 font-570 text-txt-primary">{w.title}</div>
                  </div>
                  <div className="space-y-2">
                    {w.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check />
                        <div className="font-inter text-500 font-430 text-txt-secondary"><span className="text-[14px] leading-normal">{item}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
