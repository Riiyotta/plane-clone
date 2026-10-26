// /pricing — plans (Cloud / Self-hosted × Monthly / Yearly), savings calculator, logo band,
// feature comparison table, testimonials, compliance and FAQ. Data: pricingData.js.
// MOTION (handoff): price digits roll (number-flow), the selected tab pill slides, the knob of the
// billing switch slides, logo band cross-fades, plan-card button rows expand/collapse.
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { A, Container, Heading, Svg, Text, cx } from './ui.jsx'
import { ph } from './ph.js'
import { LFaq } from './Legacy.jsx'
import { FEATURE_GROUPS, PLANS } from './pricingData.js'

const B = 'border-[#eff0f0]' // border-neutral-2
const BTN = 'rounded-lg text-center font-inter font-medium whitespace-nowrap transition-colors focus:outline-none cursor-pointer'
const BTN_SM = 'px-3 py-1.5 text-[14px] leading-[21px]'
const PRIMARY = 'bg-[#090b0c] text-white hover:bg-[#1d1f20] focus-within:bg-[#4e5355]'
const SECONDARY = 'border border-[#dadcdd] bg-white text-[#4e5355] hover:bg-[#fafafa]'

// prices: yearly / monthly (per seat per month)
const PRICE = { Free: [0, 0], Pro: [6, 8], Business: [13, 15] }
const SAVE = { Pro: 25, Business: 13 }
// short plan taglines (reproduced)
const TAGLINE = {
  Free: 'No-frills project management for startups, passion projects and more.',
  Pro: 'Designed and built for mature teams that need more',
  Business: 'Best for group PMs, larger teams, and greater workflow controls',
  'Enterprise Grid': 'Custom plans that include wishlist bells and whistles for your company',
}

/* ---------------------------------------------------------------- tabs (Cloud / Self-hosted, plan tabs) */
function Tabs({ items, value, onChange, label = 'Pricing options' }) {
  return (
    <div className="relative flex w-fit max-w-full snap-x snap-mandatory gap-2 overflow-auto rounded-lg bg-[#f4f5f5] p-1 font-normal [&::-webkit-scrollbar]:hidden" role="tablist" aria-label={label}>
      {items.map((it) => {
        const on = it.value === value
        return (
          <button
            key={it.value}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => onChange(it.value)}
            className={cx('group relative inline-flex cursor-pointer snap-center justify-center rounded-lg px-4 py-2 text-center transition-colors duration-200 hover:bg-white focus:outline-none', on ? 'text-black' : 'text-[#676c6f]')}
          >
            {on && <div className={cx('absolute inset-0 rounded-lg border bg-white py-2', B)} data-motion="tab-pill" />}
            <div className={cx('relative flex items-center gap-1 whitespace-nowrap text-[16px] font-430 leading-[1.5]', on ? 'text-black' : 'text-[#676c6f]')}>
              {it.icon && <Svg k={it.icon} size={16} className="size-4 text-[#676c6f]" />}
              {it.label}
            </div>
          </button>
        )
      })}
    </div>
  )
}

/* ---------------------------------------------------------------- plan feature row (with tooltip on hover/click) */
function FeatureItem({ f, seed }) {
  const [open, setOpen] = useState(false)
  if (f.link) {
    return (
      <a className="group relative underline underline-offset-2" href={f.link} rel="noopener noreferrer" target="_blank">
        <div className="flex items-center gap-3">
          <Svg k="mobile_9" size={16} className="size-4 flex-shrink-0" />
          <div className="flex flex-col gap-1">
            <div className="pl-body-sm pl-c-secondary font-430">
              <span className="text-[14px]">{f.label}</span>
            </div>
          </div>
        </div>
      </a>
    )
  }
  return (
    <div className="group relative flex items-start gap-2">
      <Svg k={f.ai ? 'pricing_5' : 'mobile_9'} size={16} className={cx('mt-1 size-4 flex-shrink-0', f.ai && 'text-[#006399]')} />
      <div className="flex flex-col">
        <div className="pl-body-sm pl-c-secondary font-430">
          <button
            type="button"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen((o) => !o)}
            className={cx('cursor-pointer text-[14px] transition-all duration-200 group-hover:underline', f.ai && 'text-[#006399]')}
          >
            {f.label}
          </button>
        </div>
        <div className={cx('absolute left-0 top-4 z-20 mt-2 w-64 rounded-lg bg-[#001b29] p-3 shadow-lg transition-opacity duration-200', open ? 'opacity-100' : 'pointer-events-none opacity-0')}>
          <div className="pl-body-xs font-430 text-[#fafafa]">{ph(f.tip, 20000 + seed)}</div>
        </div>
      </div>
    </div>
  )
}

function SeatStepper() {
  const [n, setN] = useState(10)
  const set = (v) => setN(Math.max(10, Math.min(999, v || 10)))
  const step = 'flex size-6 items-center justify-center rounded-md bg-[#f4f5f5] text-[#4e5355] transition-colors hover:bg-[#fafafa] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer'
  return (
    <div className={cx('flex h-11 items-center justify-between rounded-lg border bg-[#f4f5f5] px-3', B)}>
      <div className="flex items-center gap-1.5">
        <div className="pl-body-base pl-c-secondary font-430">
          <span className="text-[14px]">Seat count</span>
        </div>
        <span className="group relative inline-flex">
          <Svg k="pricing_9" size={14} className="h-3.5 w-3.5 cursor-help text-[#676c6f]" />
          <span role="tooltip" className={cx('pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-[200px] -translate-x-1/2 rounded-md border bg-[#090b0c] px-3 py-2 text-xs text-[#f5fbff] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100', B)}>
            Self-hosted licenses require a minimum of 10 seats. You can add more anytime.
            <span aria-hidden="true" className={cx('absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r bg-[#090b0c]', B)} />
          </span>
        </span>
      </div>
      <div className={cx('flex items-center gap-3 rounded-lg border bg-white p-1', B)}>
        <button type="button" aria-label="Decrease seat count" disabled={n <= 10} onClick={() => set(n - 1)} className={step}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3" aria-hidden="true">
            <path d="M5 12h14" />
          </svg>
        </button>
        <input
          aria-label="Seat count"
          type="number"
          min="10"
          max="999"
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          onBlur={() => set(n)}
          className="pl-body-sm w-10 bg-transparent text-center font-medium text-black outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button type="button" aria-label="Increase seat count" disabled={n >= 999} onClick={() => set(n + 1)} className={step}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3" aria-hidden="true">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
      </div>
    </div>
  )
}

const CARD_CLS = [
  '',
  'border-l-0 lg:border-l border-t lg:border-t-0',
  'border-l-0 lg:border-l relative z-10 border-t shadow-[0px_-10px_10px_-10px_#292F3D0A,0px_-30px_60px_-12px_#292F3D1A] xl:border-t-0',
  'border-l-0 lg:border-l border-t xl:border-t-0',
]
const CLOUD_CTA = {
  Free: { label: 'Get started free', href: 'https://app.plane.so/sign-up', secondary: true },
  Pro: { label: 'Get Pro at this price', href: 'https://app.plane.so/upgrade/pro/', trial: true },
  Business: { label: 'Get Business at this price', href: 'https://app.plane.so/upgrade/business/', trial: true },
  'Enterprise Grid': { label: 'Talk to us', href: '/talk-to-sales' },
}

function PlanCard({ p, i, mode, yearly }) {
  const self = mode === 'self-hosted'
  const price = PRICE[p.name]
  const cta = CLOUD_CTA[p.name]
  const feats = self ? p.self : p.cloud
  return (
    <div className={cx('w-full bg-white', B, CARD_CLS[i])}>
      <div className={cx('flex flex-col gap-6 border-b p-6', B)}>
        <div className="flex flex-col gap-1.5">
          <div>
            <div className="flex items-center justify-between">
              <div className="pl-body-base pl-c-primary font-medium">
                <span className="whitespace-nowrap">{p.name}</span>
              </div>
              {yearly && SAVE[p.name] && (
                <div>
                  <div className="pl-label-xs inline-flex uppercase text-[#ca3500]">Save {SAVE[p.name]}%</div>
                </div>
              )}
            </div>
            <section className="flex h-12 items-center gap-2">
              <div className="flex translate-y-0 transform items-center gap-2 text-balance opacity-100 transition-all duration-300">
                {price ? (
                  <>
                    <h5 className="pl-h pl-h5 pl-c-primary">
                      ${/* MOTION: number-flow digit roll on change */}
                      <span className="pl-nf" data-motion="number-flow">{price[yearly ? 0 : 1]}</span>
                    </h5>
                    <Text color="tertiary" text="per seat per month" />
                  </>
                ) : (
                  <h5 className="pl-h pl-h5 pl-c-primary">Quote on request</h5>
                )}
              </div>
            </section>
          </div>
          <div className="h-10 flex-shrink-0">
            <div className="pl-body-xs pl-c-secondary font-430">
              <span className="text-[14px]">{TAGLINE[p.name]}</span>
            </div>
          </div>
        </div>
        {self ? (
          <div className="flex w-full flex-col gap-2">
            <div className="mt-2 h-11">{(p.name === 'Pro' || p.name === 'Business') && <SeatStepper />}</div>
            {p.name === 'Free' ? (
              <a className={cx(BTN, BTN_SM, SECONDARY)} href="https://developers.plane.so/self-hosting/overview#deployment-methods">
                Self-host Plane
              </a>
            ) : p.name === 'Enterprise Grid' ? (
              <a className={cx(BTN, BTN_SM, PRIMARY)} href="/talk-to-sales">
                Talk to us
              </a>
            ) : (
              // plane.so creates a Stripe checkout session via prime.plane.so here; the clone links to Prime.
              <a className={cx(BTN, BTN_SM, PRIMARY)} href="https://prime.plane.so/">
                Self-host Plane
              </a>
            )}
          </div>
        ) : (
          <div className="flex w-full flex-col gap-2">
            <a className={cx(BTN, BTN_SM, cta.secondary ? SECONDARY : PRIMARY)} href={cta.href}>
              {cta.label}
            </a>
            <div className="grid overflow-hidden transition-all duration-300 ease-in-out">
              {cta.trial ? (
                <a className={cx(BTN, BTN_SM, 'bg-transparent text-[#1d1f20] !font-[430] hover:bg-[rgba(9,11,11,0.05)]')} href="https://app.plane.so/sign-up">
                  <div className="flex w-full items-center justify-center gap-1">
                    Start two-week free trial
                    <Svg k="business_4" size={16} className="h-4 w-4" />
                  </div>
                </a>
              ) : (
                <div className="h-[34.5px]" />
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex flex-col gap-3">
          <Text size="sm" color="primary" weight="semibold" text={p.featTitle} />
          <div className="flex flex-col gap-4">
            {feats.map((f, k) => (
              <FeatureItem key={`${mode}-${k}`} f={f} seed={i * 5 + k} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- band wrapper (full-width border-b row + container with side borders) */
const Band = ({ className, inner, children }) => (
  <div className={cx('w-full border-b', B, className)}>
    <Container>
      <div className={cx(B, inner)}>{children}</div>
    </Container>
  </div>
)

function Plans({ mode, setMode, yearly, setYearly }) {
  return (
    <div className="flex flex-col items-center" id="pricing">
      <Band className="text-center" inner="w-full border-x lg:px-20">
        <div className={cx('mx-auto flex w-full flex-col items-center gap-4 py-20 lg:border-x', B)}>
          <h1 className="pl-h pl-h1 pl-c-primary">
            Start free, <br /> upgrade comfortably
          </h1>
          <div className="pl-body-base pl-c-secondary font-430 md:whitespace-pre-line">
            {ph(64, 1013)}
            {'\n'}
            {ph(45, 1014)}{' '}
            <a className="text-[#006399] hover:text-[#009ff5]" href="/pricing#features">
              See for yourself
            </a>
          </div>
        </div>
      </Band>
      <Band inner="flex w-full flex-col items-center justify-between gap-4 border-x px-5 py-6 lg:flex-row lg:gap-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Tabs
            value={mode}
            onChange={setMode}
            items={[
              { value: 'cloud', label: 'Cloud', icon: 'pricing_0' },
              { value: 'self-hosted', label: 'Self-hosted', icon: 'pricing_1' },
            ]}
          />
          <div className={cx('flex items-center gap-2 border-l pl-3', B)}>
            <div className={cx('font-medium transition-colors', yearly ? 'text-[#676c6f]' : 'text-black')}>Monthly</div>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              aria-label="Annually"
              onClick={() => setYearly(!yearly)}
              className={cx('group relative inline-flex h-4 w-6 shrink-0 items-center rounded-full transition-colors duration-200', yearly ? 'bg-[#003c5c]' : 'bg-[#eff0f0]')}
            >
              <span className="sr-only">{yearly ? 'Annually' : 'Monthly'}</span>
              <span className="inline-block h-3 w-3 rounded-full bg-white shadow will-change-transform" style={{ transform: `translateX(${yearly ? 10 : 2}px)` }} data-motion="switch-knob" />
            </button>
            <div className={cx('font-medium transition-colors', yearly ? 'text-black' : 'text-[#676c6f]')}>Yearly</div>
          </div>
        </div>
      </Band>
      <Band inner="grid w-full grid-cols-1 border-x lg:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((p, i) => (
          <PlanCard key={p.name} p={p} i={i} mode={mode} yearly={yearly} />
        ))}
      </Band>
      <Band inner="grid w-full grid-cols-1 gap-4 border-x px-5 py-8 lg:grid-cols-3">
        {[
          ['pricing_1', 'Run Plane your way on your infrastructure.', 71],
          ['pricing_7', 'Full data ownership', 85],
          ['airgapped_10', 'Built for compliance and custom infra', 73],
        ].map(([icon, title, n], i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="flex-shrink-0 pt-1.5">
              <Svg k={icon} size={16} className="size-4 flex-shrink-0" />
            </div>
            <div>
              <div className="pl-body-base pl-c-primary font-medium">
                <span className="text-[14px]">{title}</span>
              </div>
              <div className="pl-body-sm pl-c-tertiary font-430">
                <span className="text-[14px]">{ph(n, 1017 + i)}</span>
              </div>
            </div>
          </div>
        ))}
      </Band>
      <Band inner="mx-auto flex w-full flex-wrap items-center justify-center gap-4 border-x py-4">
        <a className="pl-btn pl-btn-primary" href="/pricing#features">
          Complete feature list
        </a>
        <a className="pl-btn pl-btn-secondary" href="/pricing#calculator">
          Savings calculator
        </a>
      </Band>
    </div>
  )
}

/* ---------------------------------------------------------------- savings calculator */
const PM = [
  ['Jira', 'project-management-jira.svg', 12.48],
  ['Linear', 'project-management-linear.svg', 12],
  ['ClickUp', 'project-management-click-up.svg', 12],
  ['Asana', 'project-management-asana.svg', 24.99],
  ['Monday', 'project-management-monday.svg', 19],
  ['GitHub', 'project-management-github-light.svg', 21],
  ['Trello', 'project-management-trello.svg', 17.5],
  ['Wrike', 'project-management-wrike.svg', 24.8],
]
const KM = [
  ['Confluence', 'knowledge-management-confluence.svg', 4.89],
  ['Microsoft Word', 'knowledge-management-word.svg', 8.25],
  ['Obsidian', 'knowledge-management-obsidian.svg', 4.16],
  ['Notion', 'knowledge-management-notion-light.svg', 10],
  ['Google Docs', 'knowledge-management-google-docs.svg', 7.2],
  ['Outline', 'knowledge-management-outline-light.svg', 4],
  ['Coda', 'knowledge-management-coda.svg', 7],
]
const PLANE_SEAT = 6
const MARKS = [10, 100, 1000, 5000] // slider stops at 0, 1/3, 2/3, 1 (piecewise linear)
const fmt = (v) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(v)
const toFrac = (m) => {
  if (m <= MARKS[0]) return 0
  for (let i = 0; i < 3; i++) if (m <= MARKS[i + 1]) return (i + (m - MARKS[i]) / (MARKS[i + 1] - MARKS[i])) / 3
  return 1
}
const fromFrac = (f) => {
  const s = Math.min(2, Math.floor(f * 3))
  return Math.round(MARKS[s] + (f * 3 - s) * (MARKS[s + 1] - MARKS[s]))
}

function Slider({ value, onChange }) {
  const ref = useRef(null)
  const [w, setW] = useState(0)
  useEffect(() => {
    const el = ref.current
    const ro = new ResizeObserver(() => setW(el.offsetWidth))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  const at = (clientX) => {
    const r = ref.current.getBoundingClientRect()
    onChange(fromFrac(Math.max(0, Math.min(1, (clientX - r.left) / r.width))))
  }
  const down = (e) => {
    at(e.clientX)
    const move = (ev) => at(ev.clientX)
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }
  const fill = Math.max(12, toFrac(value) * w)
  return (
    <div className="relative flex flex-col gap-1">
      <div ref={ref} onPointerDown={down} className="relative flex h-3 w-full rounded bg-[#eff0f0]" style={{ userSelect: 'auto' }}>
        <div className="absolute left-0 top-0 h-full rounded-full bg-[#001b29]" style={{ width: `${fill}px` }} />
        <div className="absolute top-1/2 h-2 w-2 -translate-y-1/2 cursor-pointer rounded-full bg-white shadow-sm transition-transform hover:scale-110" style={{ left: `${fill - 10}px` }} />
      </div>
      <div className="flex w-full justify-between">
        {MARKS.map((m) => (
          <div key={m} className="pointer-events-none">
            <Text size="sm" color="tertiary" text={String(m)} />
          </div>
        ))}
      </div>
    </div>
  )
}

function ToolPicker({ title, tools, value, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <Text text={title} />
      <div className="flex flex-wrap gap-4">
        {tools.map(([name, file]) => (
          <button
            key={name}
            type="button"
            onClick={() => onChange(name)}
            className={cx('flex h-14 w-[60px] cursor-pointer flex-col items-center justify-center rounded-md border', value === name ? 'border-[#009ff5]' : B)}
          >
            <img className="h-8" src={A(file)} alt={name} width="32" height="32" style={{ width: 'auto' }} loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}

function Calculator() {
  const [m, setM] = useState(10)
  const [pm, setPm] = useState('Jira')
  const [km, setKm] = useState('Confluence')
  const pmCost = PM.find((t) => t[0] === pm)[2] * 12 * m
  const kmCost = KM.find((t) => t[0] === km)[2] * 12 * m
  const plane = PLANE_SEAT * 12 * m
  const BOX = cx('rounded-md border bg-[#f4f5f5] p-2 text-sm text-black', B)
  return (
    <div className="flex flex-col" id="calculator">
      <Band inner="flex flex-col gap-4 border-x px-4 pb-4 pt-20">
        <Heading size={4} text="Slash your bills by more than 70%" />
        <Text color="primary" text={ph(95, 1015)} />
      </Band>
      <Band inner="grid border-x lg:grid-cols-3">
        <div className={cx('w-full border-r bg-white lg:col-span-2', B)}>
          <div className={cx('flex flex-col gap-8 border-b p-8 pb-4', B)}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Text color="primary" text="Number of members" />
                <input
                  aria-label="Number of members"
                  value={m}
                  onChange={(e) => {
                    const v = parseInt(e.target.value.replace(/\D/g, ''), 10)
                    setM(Number.isNaN(v) ? 0 : Math.min(5000, v))
                  }}
                  className={cx('flex w-14 items-center justify-center rounded-md border bg-[#f4f5f5] p-2 text-center outline-none', B)}
                />
              </div>
              <Slider value={m} onChange={setM} />
            </div>
            <ToolPicker title="Project management software" tools={PM} value={pm} onChange={setPm} />
            <ToolPicker title="Knowledge management software" tools={KM} value={km} onChange={setKm} />
          </div>
          <div className={cx('grid gap-8 p-8 pt-4 lg:grid-cols-2', B)}>
            <div className="flex flex-col gap-2 whitespace-nowrap">
              <Text size="sm" color="tertiary" text="Plan" />
              <div className="flex gap-2">
                <button type="button" className="rounded-md border border-[#009ff5] bg-[#009ff5]/10 px-4 py-2 text-sm text-[#006399] transition-colors">
                  Pro
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 whitespace-nowrap">
              <div className="pl-body-sm pl-c-tertiary font-430">
                <span className="whitespace-nowrap">Price</span>
              </div>
              <div className={BOX}>${PLANE_SEAT} seat per month</div>
            </div>
            {[
              [pm, pmCost],
              [km, kmCost],
            ].map(([tool, cost]) => (
              <div key={tool} className="flex flex-col gap-2 whitespace-nowrap">
                <div className="pl-body-sm pl-c-tertiary font-430">
                  <span className="whitespace-nowrap">
                    Annual cost with {tool} for <span className="pl-nf" data-motion="number-flow">{fmt(m)}</span> users
                  </span>
                </div>
                <div className={BOX}>
                  $<span className="pl-nf" data-motion="number-flow">{fmt(cost)}</span> per year
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={cx('flex flex-col gap-8 border-t bg-white p-8 lg:col-span-1 lg:border-t-0', B)}>
          <Heading size={5} text="We did the math for you." />
          <div className="flex flex-1 flex-col justify-evenly gap-8">
            {[
              ['Your tools of choice today', pmCost + kmCost],
              ['Price with Plane', plane],
              ['Savings with Plane', pmCost + kmCost - plane],
            ].map(([label, v]) => (
              <div key={label} className={cx('flex h-full flex-col items-center justify-center gap-2 rounded-xl border bg-[#fafafa] px-4 py-6', B)}>
                <Text color="tertiary" text={label} />
                <h5 className="pl-h pl-h5 pl-c-primary">
                  <span className="pl-nf" data-motion="number-flow">${fmt(v)}</span>
                </h5>
              </div>
            ))}
          </div>
        </div>
      </Band>
    </div>
  )
}

/* ---------------------------------------------------------------- logo band */
const BAND_DESKTOP = ['ssi', 'texelis', 'sony', 'accenture']
const BAND_MOBILE = ['sony', 'aramco', 'dolby', 'accenture', 'mirador', 'amazon', 'ssi', 'rebiclique-francaise', 'government-of-the-republic-of-lithuania', 'texelis', 'power-integrations', 'stark-bank']
function LogoBand() {
  return (
    <div className="w-full md:border-y md:border-[#eff0f0] md:bg-[#fafafa] md:pt-0">
      <Container>
        <a className="hidden w-full divide-x divide-[#eff0f0] border-x border-[#eff0f0] md:grid md:grid-cols-6" href="/testimonials" id="logo-cloud" aria-label="View testimonials from 50,000+ teams using Plane">
          <div className="col-span-2 hidden items-center p-6 md:flex">
            <h6 className="pl-h pl-h6 pl-c-primary">
              Join <span className="text-[#009ff5]">50,000+</span> teams <br className="hidden md:block" />
              that actually enjoy their work
            </h6>
          </div>
          {BAND_DESKTOP.map((f) => (
            <div key={f} className="flex items-center justify-center">
              <div className="relative flex h-40 items-center justify-center overflow-hidden">
                <div className="max-h-8 w-auto" data-motion="logo-cycle">
                  <img className="max-h-8 w-auto object-fill" src={A(`${f}.svg`)} alt={f} width="100" height="100" loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </a>
        <div className="pl-bd-subtle border-x md:hidden">
          <a className="mt-6 py-6" href="/testimonials">
            <div className="relative flex flex-row gap-2 overflow-x-hidden" data-motion="marquee">
              {[0, 1].map((k) => (
                <div key={k} className="z-[1] flex flex-none flex-row items-center gap-2" aria-hidden={k === 1 || undefined}>
                  {BAND_MOBILE.map((f) => (
                    <div key={f} className="flex-shrink-0">
                      <div className="flex h-10 items-center justify-center px-8">
                        <img className="max-h-8 w-auto object-contain" src={A(`${f}.svg`)} alt={f} width="100" height="32" loading="lazy" />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </a>
        </div>
      </Container>
    </div>
  )
}

/* ---------------------------------------------------------------- feature comparison */
const COLS = [
  { name: 'Free', cta: ['Get started free', 'https://app.plane.so/sign-up/', 'secondary'] },
  { name: 'Pro', cta: ['Get Pro', 'https://app.plane.so/upgrade/pro', 'primary'] },
  { name: 'Business', cta: ['Get Business', 'https://app.plane.so/upgrade/business', 'primary'] },
  { name: 'Enterprise Grid', cta: ['Talk to us', '/talk-to-sales', 'primary'] },
]
function Cell({ v }) {
  return (
    <div className="flex flex-col items-center justify-center text-center text-sm lg:flex-1">
      {v === 'Y' ? (
        <div className="flex justify-center">
          <Svg k="mobile_9" size={16} className="h-4 w-4 text-black" />
        </div>
      ) : v === 'N' ? (
        <div className="flex justify-center">
          <Svg k="pricing_20" size={16} className="h-4 w-4 text-[#676c6f]" />
        </div>
      ) : (
        <div className="pl-body-sm pl-c-secondary font-430">
          <span className="text-[14px]">{v}</span>
        </div>
      )}
    </div>
  )
}

function Features({ yearly }) {
  const [tab, setTab] = useState(0)
  let seed = 0
  return (
    <div className="flex w-full flex-col" id="features">
      <Band inner="w-full border-x px-4 pb-4 pt-20">
        <Heading size={4} text="Features that unlock just when you need them" />
      </Band>
      <Container>
        <div className={cx('relative border-x', B)}>
          <div className={cx('z-30 hidden border-b bg-white lg:sticky lg:top-16 lg:flex lg:justify-end', B)}>
            <div className="w-full p-4">
              <div className="flex flex-1 justify-between">
                <Heading size={6} as={6} text="Features" className="!w-auto" />
              </div>
            </div>
            <div className="flex w-full flex-shrink-0 justify-evenly lg:w-[70%]">
              {COLS.map((c) => {
                const price = PRICE[c.name]
                return (
                  <div key={c.name} className="flex w-full flex-col gap-3 border-l border-[#eff0f0] p-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-1 justify-between">
                        <Text size="lg" color="primary" weight="medium" text={c.name} />
                      </div>
                      {price ? (
                        <section className="flex flex-col gap-2 xl:flex-row xl:items-center">
                          <Text color="primary" text={`$${price[yearly ? 0 : 1]}`} />
                          <Text size="sm" color="tertiary" text="per seat per month" />
                        </section>
                      ) : (
                        <section className="flex items-center gap-2">
                          <Text color="primary" text="Quote on request" />
                        </section>
                      )}
                    </div>
                    <a className={cx('pl-btn', c.cta[2] === 'primary' ? 'pl-btn-primary' : 'pl-btn-secondary')} href={c.cta[1]}>
                      {c.cta[0]}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="sticky top-8 z-10 bg-white pt-4 lg:hidden">
            <Tabs value={tab} onChange={setTab} items={['Free', 'Pro', 'Business', 'Enterprise'].map((l, i) => ({ value: i, label: l }))} />
          </div>
          <div className="overflow-hidden">
            {FEATURE_GROUPS.map((g) => [
              <div key={g.id} className={cx('z-10 w-full', B)}>
                <div className="flex w-full flex-col gap-2 bg-white pb-0 text-sm font-semibold lg:w-[30%]">
                  <a className="block w-full p-4 pt-12" href={`#${g.id}`} id={g.id} style={{ scrollMarginTop: '12rem', cursor: 'pointer' }}>
                    <Text size="lg" color="primary" weight="medium" text={g.title} />
                  </a>
                </div>
              </div>,
              <table key={`${g.id}-t`} className="w-full">
                <tbody className={cx('flex w-full flex-col border-t', B)}>
                  {g.rows.map((r) => (
                    <tr key={r.label} className={cx('flex h-full w-full justify-evenly !rounded-none border-b', B)}>
                      <td className="flex w-full self-stretch p-4 text-sm font-semibold lg:w-[30%]">
                        <div className="flex flex-1 items-center justify-between gap-2">
                          <div>
                            <div id={r.label.toLowerCase().replaceAll(' ', '-')} style={{ scrollMarginTop: '14rem', cursor: 'pointer' }} className="pl-body-sm pl-c-primary font-medium">
                              <span className="text-[14px] md:whitespace-pre-wrap">{r.label}</span>
                              <span className="group relative z-0 ml-1 hidden align-middle font-430 md:inline-flex">
                                <Svg k="pricing_9" size={14} className="size-3.5 cursor-help text-[#676c6f]" />
                                <span role="tooltip" className="pointer-events-none absolute bottom-full left-0 z-30 mb-2 w-max max-w-xs rounded-md bg-white px-3 py-2 text-sm text-[#676c6f] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                                  {ph(r.info, 30000 + seed++)}
                                  <span className="absolute left-2 top-full h-2 w-2 -translate-y-1/2 rotate-45 bg-white" />
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2" />
                        </div>
                      </td>
                      {r.cells.map((v, j) => (
                        <td key={j} className="hidden flex-1 border-l border-[#eff0f0] p-4 lg:flex">
                          <Cell v={v} />
                        </td>
                      ))}
                      <td className="flex w-full justify-center border-l border-[#eff0f0] p-4 lg:hidden">
                        <Cell v={r.cells[tab]} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>,
            ])}
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ---------------------------------------------------------------- testimonials + compliance */
function Quote({ n, name, org, wide, seed }) {
  return (
    <>
      {wide && (
        <div className="mb-2">
          <Svg k="for_startups_0" w={30} h={24} className="text-[#8ad6ff]" />
        </div>
      )}
      <Text size="lg" color="primary" text={ph(n, 40000 + seed)} />
      <div className="pt-16">
        {name && <Text color="primary" text={name} />}
        <Text text={org} className="!text-[#909598]" />
      </div>
    </>
  )
}
const LOGO = (f, w, h) => <img className="max-h-8 w-auto" src={A(`v2-${f}.svg`)} alt={f} width={w} height={h} loading="lazy" />

function Testimonials() {
  const cell = 'group flex px-6 py-10 hover:bg-[#fafafa]'
  return (
    <Container>
      <div className="flex flex-col pb-10 md:pb-20">
        <div className="z-20 flex w-full items-center justify-center border-x-2 border-white pb-8 pt-10 text-center md:pb-16 md:pt-20">
          <h3 className="pl-h pl-h3 pl-c-primary">
            <span className="hidden md:block">Chosen by at-scale ambitious teams</span>
            <span className="block whitespace-pre-wrap md:hidden">{'Chosen by at-scale\nambitious teams'}</span>
          </h3>
        </div>
        <div className={cx('w-full divide-[#eff0f0] border lg:divide-y', B)}>
          <div className="flex w-full flex-wrap divide-[#eff0f0] lg:divide-x">
            <div className={cx(cell, 'w-full flex-col justify-between lg:w-3/5')}>
              <Quote wide n={257} name="Devries" org="Capital Land" seed={1} />
            </div>
            <div className={cx(cell, B, 'w-1/2 items-center justify-center border-r border-t lg:w-1/5 lg:border-t-0')}>{LOGO('dolby', 72, 18)}</div>
            <div className={cx(cell, B, 'w-1/2 flex-col justify-between border-t lg:w-1/5 lg:border-t-0')}>
              <Quote n={68} org="The Ghost Lab" seed={2} />
            </div>
          </div>
          <div className="hidden w-full divide-x divide-[#eff0f0] lg:flex">
            <div className={cx(cell, 'w-1/5 items-center justify-center')}>{LOGO('sony', 69, 12)}</div>
            <div className={cx(cell, 'w-1/5 items-center justify-center')}>{LOGO('accenture', 84, 22)}</div>
            <div className={cx(cell, 'w-3/5 flex-col justify-between')}>
              <Quote wide n={370} name="Lucas" org="Recovering Jira survivor" seed={3} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function Compliance() {
  return (
    <div>
      <Container>
        <div className={cx('grid w-full grid-cols-1 gap-4 border bg-white py-10 lg:grid-cols-5', B)}>
          <div className="flex flex-col justify-center gap-6 pl-6 text-center lg:col-span-2 lg:justify-start lg:text-left">
            <div className="flex flex-col gap-2">
              <Heading size={3} color="secondary" text={'Plane is independently \r audited and certified'} />
              <div className="hidden lg:block">
                <Text size="lg" text={ph(79, 1016)} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:col-span-3">
            <div className="grid w-full grid-cols-4" role="img" aria-label="Compliance certifications: GDPR, HIPAA, ISO 27001, and SOC 2">
              {['security_0', 'security_3', 'security_2', 'security_1'].map((k) => (
                <div key={k} className="flex items-center justify-center p-4 lg:p-10">
                  <Svg k={k} size={100} className="text-[#4e5355]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const FAQ = [
  ['What is Plane?', 207],
  ['Is Plane free to use?', 145],
  ['Can I self-host Plane?', 185],
  ['What integrations does Plane support?', 144],
  ['How do I migrate from other project management tools?', 160],
  ['Is my data secure?', 208],
].map(([q, n], i) => ({ q, a: ph(n, 1057 + i) }))

export default function Pricing() {
  // ?mode=self-hosted selects the Self-hosted tab (plane.so keeps the mode in the URL)
  const [mode, setModeState] = useState(() => (new URLSearchParams(window.location.search).get('mode') === 'self-hosted' ? 'self-hosted' : 'cloud'))
  const [yearly, setYearly] = useState(true)
  const { search } = useLocation()
  useEffect(() => {
    setModeState(new URLSearchParams(search).get('mode') === 'self-hosted' ? 'self-hosted' : 'cloud')
  }, [search])
  const setMode = (m) => {
    setModeState(m)
    const url = new URL(window.location.href)
    if (m === 'self-hosted') url.searchParams.set('mode', 'self-hosted')
    else url.searchParams.delete('mode')
    window.history.replaceState(window.history.state, '', url)
  }
  return (
    <div className="pl">
      <div>
        <div>
          <Plans mode={mode} setMode={setMode} yearly={yearly} setYearly={setYearly} />
          <Calculator />
          <div className={cx('-mt-[1px]', B)}>
            <Container>
              <div className={cx('h-20 w-full border-x', B)} />
            </Container>
          </div>
          <LogoBand />
          <Features yearly={yearly} />
          <div className={cx('-mt-[1px] border-t', B)} />
          <Testimonials />
          <Compliance />
          <LFaq title="What can we answer for you today?" items={FAQ} />
        </div>
      </div>
    </div>
  )
}
