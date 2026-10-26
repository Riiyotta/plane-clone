import { useEffect, useRef, useState } from 'react'
import { Icon } from './icons.jsx'

// Small secondary button used for pagination / copy controls (measured: 14/21 500, px-12 py-6, border #dadcdd)
export const smallBtn =
  'inline-block rounded-lg border border-line-strong bg-white px-3 py-1.5 text-center font-inter text-[14px] font-medium leading-[21px] text-txt-secondary transition-colors hover:bg-surface-2 disabled:cursor-default disabled:bg-line-subtle disabled:text-[#909598]'

export function Dot({ className = '' }) {
  return <div className={`size-1 shrink-0 rounded-full bg-line-strong ${className}`} />
}

// satoshi 15/15, ls .3px — "text-label-sm"
export function Label({ children, className = '', weight = 'font-medium', tone = 'text-[#909598]' }) {
  return <label className={`font-satoshi text-[15px] leading-[15px] tracking-[0.3px] ${weight} ${tone} ${className}`}>{children}</label>
}

export function pageList(total, current) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const start = Math.max(1, Math.min(current - 2, total - 6))
  const head = Array.from({ length: 5 }, (_, i) => start + i).filter((p) => p <= total - 2)
  return [...head, '…', total - 1, total]
}

export function Pagination({ page, total, onChange }) {
  if (total <= 1) total = 1
  return (
    <nav aria-label="pagination" className="mx-auto flex w-full justify-center">
      <ul className="flex flex-row items-center gap-1">
        <li>
          <button type="button" aria-label="Go to previous page" disabled={page <= 1} onClick={() => onChange(page - 1)} className={smallBtn}>Prev</button>
        </li>
        {pageList(total, page).map((p, i) =>
          p === '…' ? (
            <li key={`e${i}`}>
              <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center text-black">
                <Icon name="ellipsis" className="h-4 w-4" />
                <span className="sr-only">More pages</span>
              </span>
            </li>
          ) : (
            <li key={p}>
              <button type="button" aria-current={p === page ? 'page' : undefined} disabled={p === page} onClick={() => onChange(p)} className={smallBtn}>{p}</button>
            </li>
          ),
        )}
        <li>
          <button type="button" aria-label="Go to next page" disabled={page >= total} onClick={() => onChange(page + 1)} className={smallBtn}>Next</button>
        </li>
      </ul>
    </nav>
  )
}

// Dark CTA card used at the bottom of /blog and blog posts (bg #001b29 + artwork, radius 12, p-48)
export function CtaCard({ compact = false, flat = false }) {
  const h = (
    <h3 className="whitespace-pre-line font-satoshi text-[28px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-on-color md:text-[40px]">
      {'Every team, every use case,\nthe right momentum'}
    </h3>
  )
  const body = compact
    ? 'Hundreds of Jira, Linear, Asana, and ClickUp customers\nhave rediscovered the joy of work. We’d love to help you do that, too.'
    : 'Hundreds of Jira, Linear, Asana, and ClickUp customers have rediscovered the joy of work.\nWe’d love to help you do that, too.'
  const p = <div className="font-inter text-600 text-txt-on-color"><span className="md:whitespace-pre-wrap">{body}</span></div>
  return (
    <div className={`relative w-full overflow-hidden bg-[#001b29] p-12 text-center ${flat ? '' : 'rounded-xl'}`}>
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <img alt="Plane" loading="lazy" src="/assets/collections/cta-card-bg.webp" className="absolute inset-0 h-full w-full object-cover" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        {compact ? <div className="flex flex-col gap-2">{h}{p}</div> : <>{h}{p}</>}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a className="btn-primary-dark" href="/talk-to-sales">Book a demo</a>
          <a className="btn-secondary-dark" href="https://app.plane.so/sign-up">Get started free</a>
        </div>
      </div>
    </div>
  )
}

// "Copy as markdown" split button + menu (blog posts, changelog entries)
export function CopyMenu({ getText, className = '', full = false }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (!open) return
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [open])
  const copy = async () => {
    try { await navigator.clipboard.writeText(getText ? getText() : window.location.href) } catch { /* clipboard blocked */ }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  const prompt = encodeURIComponent(`Read ${typeof window !== 'undefined' ? window.location.href : ''}`)
  const item = 'flex w-full items-center px-3 py-1.5 text-left font-inter text-[14px] font-medium leading-[21px] text-txt-secondary transition-colors hover:bg-surface-2 focus:outline-none'
  return (
    <div ref={ref} className={`relative ${full ? 'w-full' : ''} ${className}`}>
      <div className={`inline-flex overflow-hidden rounded-lg border border-line-strong bg-white ${full ? 'w-full' : ''}`}>
        <button type="button" onClick={copy} className={`flex items-center justify-start whitespace-nowrap px-3 py-1.5 font-inter text-[14px] font-medium leading-[21px] text-txt-secondary transition-colors hover:bg-surface-2 ${full ? 'flex-1' : ''}`}>
          <span className="flex items-center gap-2"><Icon name={copied ? 'check' : 'copy'} className="size-3.5 shrink-0" />{copied ? 'Copied' : 'Copy as markdown'}</span>
        </button>
        <button type="button" aria-expanded={open} aria-haspopup="menu" aria-label="More copy options" onClick={() => setOpen((o) => !o)} className="shrink-0 border-l border-line-strong px-3 py-1.5 text-txt-secondary transition-colors hover:bg-surface-2">
          <Icon name="chevronDown" className={`size-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {open && (
        <div role="menu" className="absolute right-0 top-full z-50 mt-1 w-full overflow-hidden rounded-lg border border-line-strong bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
          <button role="menuitem" type="button" className={item} onClick={() => { copy(); setOpen(false) }}>Copy as HTML</button>
          <a role="menuitem" className={item} target="_blank" rel="noreferrer" href={`https://chatgpt.com/?q=${prompt}`}>Open in ChatGPT</a>
          <a role="menuitem" className={item} target="_blank" rel="noreferrer" href={`https://claude.ai/new?q=${prompt}`}>Open in Claude</a>
          <a role="menuitem" className={item} target="_blank" rel="noreferrer" href={`https://v0.dev/chat?q=${prompt}`}>Open in v0</a>
        </div>
      )}
    </div>
  )
}

export function useDocTitle(title) {
  useEffect(() => { if (title) document.title = `${title} | Plane` }, [title])
}
