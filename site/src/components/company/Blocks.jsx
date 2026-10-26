// Shared CMS-style blocks used across the company pages (plane.so "block" components).
// Values measured live 2026-10-26 at 1440 / 390; see each page file for per-page notes.
import './company.css'
import { PlaneIcon } from './icons.jsx'

const BTN = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  'primary-dark': 'btn-primary-dark',
  'secondary-dark': 'btn-secondary-dark',
}

// Buttons: md = 8px 16px 16/24 500 (CLONE_SPEC §0); sm = 6px 12px 14/21 500 (nav-size).
export function Btn({ variant = 'primary', size = 'md', href, external, className = '', children, ...rest }) {
  const sz = size === 'sm' ? '!px-3 !py-1.5 !text-[14px] !leading-[21px]' : ''
  const cls = `${BTN[variant]} ${sz} ${className}`
  if (!href) return <button type="button" className={cls} {...rest}>{children}</button>
  const ext = external ?? /^https?:/.test(href)
  return (
    <a className={cls} href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  )
}

// text-label-sm eyebrow: IBM Plex Mono 15/15 500 ls .3px uppercase.
// accent #006399 / secondary #4e5355. In block (space-y) contexts the live inline-flex sits
// in a 20px line box, bottom-aligned — reproduced with an explicit h-5 wrapper.
export function Eyebrow({ children, tone = 'accent', block = false, align = 'center', className = '' }) {
  const el = <div className={`c-eyebrow inline-flex ${tone === 'accent' ? 'text-txt-accent' : 'text-txt-secondary'} ${className}`}>{children}</div>
  if (!block) return el
  return <div className={`flex h-5 items-end ${align === 'center' ? 'justify-center' : 'justify-start'}`}>{el}</div>
}

// Centered page hero: div.relative.py-16 > container > flex-col gap-16 > [text block, media]
export function HeroCentered({ eyebrow, title, sub, actions, children }) {
  return (
    <div className="relative py-16">
      <div className="container-page">
        <div className="flex flex-col gap-16">
          <div className="space-y-6 text-center">
            {eyebrow && <Eyebrow block>{eyebrow}</Eyebrow>}
            <div className="space-y-4">
              <h1 className="h1 text-txt-primary md:whitespace-pre-line">{title}</h1>
              {sub && <p className="text-600 text-txt-primary">{sub}</p>}
            </div>
            {actions && <div className="flex flex-wrap justify-center gap-4">{actions}</div>}
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

// Left-aligned section header (h2 + body-base secondary), gap-2
export function SectionIntro({ eyebrow, title, body, className = '' }) {
  return (
    <div className={`flex flex-col items-start gap-6 text-left ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <div className="flex flex-col gap-2">
        <h2 className="h2 text-txt-primary md:whitespace-pre-line">{title}</h2>
        {body && <p className="text-500 text-txt-secondary">{body}</p>}
      </div>
    </div>
  )
}

// Icon feature cards: ul grid gap-10, li border #eff0f0 r12 p-6 gap-2; icon box 44 r6 bg #f5fbff, 28px icon #006399
export function IconCardGrid({ items }) {
  return (
    <ul className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => {
        const Icon = it.icon || PlaneIcon
        return (
          <li key={i} className="group flex flex-col gap-2 overflow-hidden rounded-xl border border-line-n2 p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#f5fbff] p-2">
              <Icon size={28} className="flex-shrink-0 text-txt-accent" />
            </div>
            <div className="text-500 font-570 text-txt-primary">{it.title}</div>
            {it.sub && <div className="text-400 font-570 text-txt-tertiary">{it.sub}</div>}
            {it.body && <p className="text-400 text-txt-tertiary">{it.body}</p>}
          </li>
        )
      })}
    </ul>
  )
}

// Two-column list of plane-icon items (operating manual "grid-default")
export function IconList({ items }) {
  return (
    <ul className="grid gap-10 md:grid-cols-2">
      {items.map((it, i) => (
        <li key={i}>
          <div className="flex items-start gap-2">
            <div className="flex-shrink-0 pt-1">
              <PlaneIcon size={16} className="flex-shrink-0 text-txt-tertiary" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-500 font-570 text-txt-primary">{it.title}</div>
              <p className="text-400 text-txt-tertiary">{it.body}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

// figcaption under CMS images: satoshi 13/13 ls .26 italic #676c6f, mt-2
export function Caption({ children }) {
  return <figcaption className="c-label-xs mt-2 text-center font-satoshi italic text-txt-tertiary">{children}</figcaption>
}
