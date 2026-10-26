// CLONE_SPEC §8 — Core capabilities
const SMALL_CARDS = [
  { icon: '/assets/cycles.svg', title: 'Cycles and sprints', body: 'Time-box work with velocity tracking and burndown charts built in' },
  { icon: '/assets/documentation.svg', title: 'Documentation built-in', body: 'Rich documentation features that live alongside projects' },
  { icon: '/assets/Initiative.svg', title: 'Initiatives and epics', body: 'Align team-level work to org-level goals with rollup tracking' },
  { icon: '/assets/workflows.svg', title: 'Workflows and approvals', body: 'Automate handoffs, reviews, and stage gates without plugins' },
]

export default function Capabilities() {
  return (
    <section id="ai-native" className="py-20">
      <div className="container-page">
        <div className="space-y-11">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="font-inter text-500 font-medium uppercase text-txt-accent">Core Capabilities</div>
              <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-2">
                <h2 className="h2 text-txt-primary md:mb-3 md:whitespace-pre-line">
                  {'Flexible features for every\nproject, and all teams'}
                </h2>
                {/* Original: grid `space-y-3` (v4 margin-bottom on h2) + col 2 `md:mt-5 md:pl-20` */}
                <div className="mt-3 md:mt-5 md:pl-20">
                  <p className="font-inter text-500 font-430 text-txt-secondary md:whitespace-pre-line">
                    {'Plane is fast to set-up and easy-to-adapt.\nMultiple views, time-boxed cycles, built-in docs, and real-time dashboards help teams plan and ship without fighting their tools.'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a className="btn-primary" href="https://app.plane.so/sign-up">Get started free</a>
              <a className="btn-secondary" href="https://plane.so/talk-to-sales">Talk to a human →</a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="h-full rounded-xl bg-[url('/assets/ai-background.webp')] bg-cover bg-center p-6 pb-0">
                <div className="space-y-10">
                  <div className="space-y-1.5">
                    <div className="font-inter text-600 font-medium text-txt-on-color">Every view your team needs</div>
                    <div className="font-inter text-400 font-430 text-txt-on-color">
                      Board, Spreadsheet, List, Gantt. Switch instantly. Every role sees the work that matters to them.
                    </div>
                  </div>
                  <div className="w-full">
                    <img alt="Every view your team needs" src="/assets/view.webp" width={2320} height={1504} loading="lazy" decoding="async" className="h-auto w-full" />
                  </div>
                </div>
              </div>
              <div className="h-full rounded-xl bg-surface-2 p-6">
                <div className="space-y-10">
                  <div className="space-y-1.5">
                    <div className="font-inter text-600 font-medium text-txt-primary">Real-time dashboards without the setup</div>
                    <div className="font-inter text-400 font-430 text-txt-primary">
                      Track cycle velocity, workload, blockers, and scope changes with dashboards that populate automatically. No manual reports, no Friday status decks.
                    </div>
                  </div>
                  <div className="w-full">
                    <img alt="Real-time dashboards" src="/assets/real-time.webp" width={2162} height={1164} loading="lazy" decoding="async" className="h-auto w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SMALL_CARDS.map((c) => (
                <div key={c.title} className="space-y-12 rounded-xl border-[0.5px] border-line-subtle bg-card p-5">
                  <div className="flex size-10 items-center justify-center rounded-lg border-[0.5px] border-line-subtle bg-white">
                    <img alt="" src={c.icon} width={20} height={20} loading="lazy" decoding="async" className="size-5" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="font-inter text-500 font-570 text-txt-primary">{c.title}</div>
                    <div className="font-inter text-400 font-430 text-txt-secondary">{c.body}</div>
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
