import { useCallback, useEffect, useRef, useState } from 'react'

// CLONE_SPEC §5 — Plane AI insight tabs (auto-advance 6000ms, 50ms progress ticks while in view)
const DURATION = 6000
const TICK = 50

const TABS = [
  {
    title: 'Answers from across your workspace',
    body: 'Ask Plane AI anything. Status on a cycle, blockers on a project, what changed in a doc last week. It reads across your complete workspace.',
    img: 'hierarchy',
  },
  {
    title: 'Agents that do the work for you',
    body: 'Built-in agents handle the busywork. Triage incoming requests, assign owners, track blockers, and ship updates automatically.',
    img: 'agents',
  },
  {
    title: 'Works where your team already talks',
    body: 'Bring Plane AI into Slack or Teams. Turn conversations into work items, get updates, and keep projects moving without switching tools.',
    img: 'works',
  },
]

export default function Insight() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [inView, setInView] = useState(false)

  // elapsed ms of the current tab, kept across pauses (leaving the viewport keeps progress)
  const elapsedRef = useRef(0)
  // bumps on click to restart the timers with fresh state
  const [cycle, setCycle] = useState(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let start = performance.now() - elapsedRef.current
    let advanceT

    const scheduleAdvance = () => {
      advanceT = setTimeout(() => {
        setActive((a) => (a + 1) % TABS.length)
        elapsedRef.current = 0
        setProgress(0)
        start = performance.now()
        scheduleAdvance()
      }, Math.max(0, DURATION - elapsedRef.current))
    }
    scheduleAdvance()

    const tickT = setInterval(() => {
      const elapsed = Math.min(DURATION, performance.now() - start)
      elapsedRef.current = elapsed
      setProgress((elapsed / DURATION) * 100)
    }, TICK)

    return () => {
      clearTimeout(advanceT)
      clearInterval(tickT)
    }
  }, [inView, cycle])

  const select = useCallback((i) => {
    setActive(i)
    elapsedRef.current = 0
    setProgress(0)
    setCycle((c) => c + 1)
  }, [])

  return (
    <section ref={sectionRef} aria-label="Insight" id="insight" className="bg-dark-bg py-20">
      <div className="container-page">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="text-500 font-medium">
                <span className="text-400 font-430 uppercase text-txt-d-accent">PLANE AI</span>
              </div>
              <div className="space-y-3">
                <h2 className="h2 md:whitespace-pre-line">
                  <span className="text-txt-d-primary">AI that works because it knows your context</span>
                </h2>
                <div className="text-500 font-430 md:whitespace-pre-line">
                  <span className="text-txt-d-secondary">
                    {'Plane was not retrofitted for AI, it was built around it. Plane AI reads across every project, cycle, doc, and\nthread in your workspace. Agents take real assignments and do real work.'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a className="btn-primary-dark" href="https://app.plane.so/sign-up">Get started free</a>
              <a className="btn-secondary-dark" href="/talk-to-sales">Talk to a human →</a>
            </div>
          </div>

          <div aria-label="Plane AI insights" className="sr-only">
            {TABS.map((t, i) => (
              <div key={t.img}>
                <h3>{`${i + 1}. ${t.title}`}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>

          <div className="space-y-10">
            <div className="relative aspect-[157/67] w-full overflow-hidden rounded-xl max-md:hidden">
              {TABS.map((t, i) => (
                <img
                  key={t.img}
                  alt={t.title}
                  src={`/assets/${t.img}.webp`}
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${
                    i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3">
              {TABS.map((t, i) => {
                const isActive = i === active
                return (
                  <div key={t.img}>
                    {/* v4 space-y = margin-bottom on non-last children: the active button keeps mb-1.5 even when its mobile image is md:hidden */}
                    <button
                      type="button"
                      onClick={() => select(i)}
                      className={`relative w-full cursor-pointer space-y-1.5 border-t border-dark-border pt-4 text-left ${isActive ? 'mb-1.5' : ''}`}
                    >
                      {isActive && (
                        <div
                          className="absolute left-0 top-0 h-[2px] bg-txt-d-primary transition-[width] duration-150 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                      <div className="!mt-0 text-600 font-570">
                        <span className={isActive ? 'text-txt-d-primary' : 'text-txt-d-tertiary'}>{t.title}</span>
                      </div>
                      <div className="text-500 font-430">
                        <span className={`text-[14px] font-430 ${isActive ? 'text-txt-d-secondary' : 'text-txt-d-placeholder'}`}>
                          {t.body}
                        </span>
                      </div>
                    </button>
                    {isActive && (
                      <div className="relative aspect-[424/339] w-full overflow-hidden md:hidden">
                        <img
                          alt={t.title}
                          src={`/assets/${t.img}-mobile.webp`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
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
