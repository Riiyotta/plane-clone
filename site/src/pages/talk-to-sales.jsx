// /talk-to-sales — split layout: bg image + card (left), contact form (right).
// Measured live 2026-10-26. At ≥lg the section is h = 100dvh − 58px (842 at 1440x900).
// Form: fields, layout and validation styling replicated; submit is local only (no network).
import { useState } from 'react'
import '../components/company/company.css'
import { MinusIcon, PlusIcon } from '../components/company/icons.jsx'

const A = '/assets/company/talk-to-sales/'
const LOGOS = [
  ['Sony', 'sony'], ['Aramco', 'aramco'], ['Dolby', 'dolby'], ['Accenture', 'accenture'],
  ['Mirador Therapeutics', 'mirador'], ['Amazon', 'amazon'], ['SSI', 'ssi'],
  ['République Française', 'rebiclique-francaise'], ['Government of Lithuania', 'government-of-the-republic-of-lithuania'],
  ['Texelis', 'texelis'], ['Power Integrations', 'power-integrations'], ['Stark Bank', 'stark-bank'],
]

// field wrapper: border #eff0f0 r8 px-3; hover border #eaebeb + bg #fafafa
const BOX = 'relative flex cursor-pointer items-center gap-2 rounded-lg border border-line-n2 px-3 hover:border-line-subtle hover:bg-surface-2'
const INPUT = 'c-placeholder h-[38px] w-full bg-transparent text-400 text-black transition-colors duration-200 focus:outline-none'

function Label({ children }) {
  return <div className="text-400 text-txt-primary">{children}<sup>*</sup></div>
}
// error: 13/13 430 ls .26px #e7000b (text-label-xs text-error-secondary)
function Err({ children }) {
  return children ? <p className="c-label-xs text-[#e7000b]">{children}</p> : null
}

function LogoMarquee() {
  const row = (aria) => (
    <div className="c-marquee flex shrink-0 flex-row items-center gap-2" aria-hidden={aria || undefined}>
      {LOGOS.map(([alt, f]) => (
        <div key={f} className="flex h-9 shrink-0 items-center justify-center px-4 sm:h-10">
          <img src={`${A}${f}.svg`} alt={aria ? '' : alt} className="max-h-7 w-auto object-contain sm:max-h-8" style={{ width: 109 }} />
        </div>
      ))}
    </div>
  )
  return (
    <div className="relative -mx-4 overflow-hidden sm:mx-0">
      <div className="c-marquee-group relative flex flex-row gap-2 overflow-x-hidden" style={{ '--gap': '8px', '--duration': '40s' }} role="marquee" aria-label="Customer logos">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

function SalesForm() {
  const [v, setV] = useState({ name: '', email: '', team: '10', msg: '' })
  const [errs, setErrs] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const step = (d) => setV({ ...v, team: String(Math.max(1, (parseInt(v.team, 10) || 0) + d)) })

  const onSubmit = (e) => {
    e.preventDefault()
    const n = {}
    if (!v.name.trim()) n.name = 'We need both your first and last names.'
    if (!v.email.trim()) n.email = 'We do need an email address to talk to you.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) n.email = 'Please enter a valid email address'
    setErrs(n)
    if (!Object.keys(n).length) setSent(true) // local success state only — nothing is posted
  }
  const big = (parseInt(v.team, 10) || 0) >= 100

  if (sent) {
    return (
      <div className="flex w-full flex-col items-start gap-3 rounded-xl text-left" role="status">
        <p className="text-600 font-570 text-txt-primary">Thanks, {v.name.trim().split(' ')[0]}.</p>
        <p className="text-400 text-txt-secondary">This is a local demo form — your message was not sent anywhere.</p>
        <button type="button" className="btn-secondary mt-2" onClick={() => { setSent(false); setV({ name: '', email: '', team: '10', msg: '' }) }}>Send another message</button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="relative flex h-full w-full flex-col items-center justify-center rounded-xl" name="contact-form">
      <div className="z-10 flex h-full w-full flex-col gap-7">
        <div className="flex flex-col gap-2 text-left">
          <Label>Your name</Label>
          <div className={BOX}><input className={INPUT} placeholder="John Ternus" type="text" value={v.name} onChange={set('name')} aria-invalid={!!errs.name} /></div>
          <Err>{errs.name}</Err>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <Label>Your email</Label>
          <div className={BOX}><input className={INPUT} placeholder="What's your work email?" type="text" value={v.email} onChange={set('email')} aria-invalid={!!errs.email} /></div>
          <Err>{errs.email}</Err>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <Label>How big is your team?</Label>
          <div className={BOX}>
            <input className={`${INPUT} c-number`} placeholder="100" type="number" value={v.team} onChange={set('team')} />
            <div className="my-1 flex gap-1">
              <button type="button" onClick={() => step(1)} className="flex size-8 cursor-pointer items-center justify-center rounded-md border border-transparent bg-surface-2 hover:border-line-strong hover:bg-layer-1">
                <span className="sr-only">Increase value</span><PlusIcon size={16} className="text-txt-secondary" />
              </button>
              <button type="button" onClick={() => step(-1)} className="flex size-8 cursor-pointer items-center justify-center rounded-md border border-transparent bg-surface-2 hover:border-line-strong hover:bg-layer-1">
                <span className="sr-only">Decrease value</span><MinusIcon size={16} className="text-txt-secondary" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <label className="text-[14px] font-medium leading-none text-black">What brings you to Plane?</label>
          <div className={BOX}>
            <textarea rows={3} className="c-placeholder w-full resize-y bg-transparent py-3 text-400 text-black transition-all duration-200 focus:outline-none" placeholder="Details about your use case, wishlist features, whether you prefer self-managed Plane, anything goes" value={v.msg} onChange={set('msg')} />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 text-center">
          <button type="submit" className="btn-primary w-full">Send a message</button>
          <div aria-hidden={!big} className={`transition-opacity duration-500 ${big ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
            <div className="text-400 text-txt-tertiary">
              Looking for 100+ seats?{' '}
              <a className="underline decoration-dashed" target="_blank" rel="noopener noreferrer" tabIndex={big ? 0 : -1} href="https://go.plane.so/talk-to-sales">Book directly on the calendar.</a>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default function TalkToSales() {
  return (
    <div className="relative w-full min-h-[calc(100dvh-58px)] bg-[#fafafa] font-inter lg:h-[calc(100dvh-58px)] lg:min-h-0 lg:overflow-hidden lg:bg-transparent">
      <div className="pointer-events-none absolute inset-0 z-0 hidden grid-cols-2 lg:grid">
        <div className={`h-full bg-cover bg-center`} style={{ backgroundImage: `url(${A}talk-to-sales-bg.webp)` }} />
        <div />
      </div>
      <div className="relative z-10 flex w-full flex-col px-4 py-8 sm:px-6 sm:py-10 lg:absolute lg:inset-0 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:px-0 lg:py-0">
        <div className="container-page lg:h-full">
          <div className="mb-8 text-left lg:hidden">
            <h1 className="h2 text-balance text-black">Talk to a human</h1>
            <div className="mt-2 text-400 text-txt-secondary">Get pricing, walk through a live demo, plan a migration, or scope self-hosted and air-gapped deployment.</div>
          </div>
          <div className="grid w-full flex-1 grid-cols-1 gap-10 lg:h-full lg:min-h-0 lg:grid-cols-2 lg:gap-0">
            <div className="order-2 flex items-center justify-center lg:order-1 lg:h-full lg:min-h-0">
              <div className="w-full lg:pr-10 xl:pr-32">
                <div className="flex w-full flex-col gap-16 rounded-2xl border border-[#eff0f0] bg-white p-10 shadow-[0_10px_30px_rgba(17,24,39,0.08)]">
                  <div className="hidden text-left lg:block">
                    <h1 className="h2 text-balance text-black">Talk to a human</h1>
                    <div className="mt-3 text-400 text-txt-secondary">Get pricing, walk through a live demo, plan a migration, or scope self-hosted and air-gapped deployment.</div>
                  </div>
                  <div className="text-left">
                    <div className="text-400 text-txt-tertiary">Trusted by 50,000+ teams</div>
                    <div className="mt-2"><LogoMarquee /></div>
                  </div>
                  <div className="text-300 text-txt-secondary">
                    Technical or product support:{' '}
                    <a className="font-semibold text-txt-primary hover:underline" href="mailto:support@plane.so">support@plane.so</a>{' '}or see the{' '}
                    <a className="font-semibold text-txt-primary hover:underline" href="https://docs.plane.so" target="_blank" rel="noopener noreferrer">docs</a>.
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 flex min-h-0 w-full flex-col items-center justify-center lg:order-2 lg:h-full lg:py-20 lg:pl-10 xl:pl-32">
              <div className="w-full">
                <SalesForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
