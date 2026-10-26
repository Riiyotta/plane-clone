// Shared primitives for the `compare` page group (plane-vs-*, /compare, /switch, /imports, ...).
// Values are the computed styles of the live plane.so v4 tokens (measured headless, 1440 + 390).
// Color tokens come from tailwind.config.js; one-off live tokens are noted inline.

const SAT = "font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03']"

export const t = {
  // text-h1 / text-h2 → existing global classes (58/44 desktop, 36/32 mobile)
  h1: 'h1',
  h2: 'h2',
  // text-h3: satoshi 40/52 (-1.2px) ≥768, 28/36.4 below
  h3: `${SAT} font-430 text-[28px] leading-[1.3] tracking-[-0.03em] md:text-[40px]`,
  // text-h4: satoshi 32/41.6 (-0.96px) ≥768, 24/31.2 below
  h4: `${SAT} font-430 text-m-900 md:text-900`,
  // text-h5: inter 24/31.2 (-0.72px) ≥768, 22/28.6 below
  h5: 'font-inter font-430 text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[24px]',
  // text-h6: satoshi 20/26 (-0.6px) weight 500
  h6: `${SAT} font-medium text-[20px] leading-[1.3] tracking-[-0.03em]`,
  bodyLg: 'font-inter text-600 font-430',
  bodyBase: 'font-inter text-500 font-430',
  bodySm: 'font-inter text-400 font-430',
  bodyXs: 'font-inter text-300 font-430',
  // text-label-sm: IBM Plex Mono 15/15 500, ls .3px, accent
  eyebrow: 'inline-flex font-mono font-medium uppercase text-[15px] leading-[15px] tracking-[0.02em] text-txt-accent',
  // text-label-xs: IBM Plex Mono 13/13 500, ls .26px
  eyebrowXs: 'inline-flex font-mono font-medium uppercase text-[13px] leading-[13px] tracking-[0.02em] text-txt-accent',
  // Tailwind v4 `font-mono text-sm uppercase tracking-wide` (system ui-monospace, 14/20, ls .35px)
  monoCaption:
    "font-[ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono','Courier_New',monospace] text-[14px] leading-[20px] uppercase tracking-[0.025em] text-txt-primary",
  // un-styled body text on live inner pages inherits satoshi 16/24 weight 400
  raw: 'font-satoshi font-normal text-[16px] leading-[24px]',
}

// Live token colors not present in tailwind.config.js (hex from canvas conversion)
export const c = {
  danger: 'text-[#9f0712]', // text-danger-primary
  onColor: 'text-[#f5fbff]', // text-neutral-on-color
  brandInverse: 'bg-[#001b29]', // bg-brand-inverse-1
  check: '#36AB57',
  partial: '#A0A4A7',
  cross: '#DB3E33',
}

export function Btn({ href, primary, children, className = '' }) {
  const ext = /^https?:/.test(href || '') && !/^https?:\/\/(www\.)?plane\.so/.test(href)
  return (
    <a
      href={href}
      className={`${primary ? 'btn-primary' : 'btn-secondary'} ${className}`}
      {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}

export function Buttons({ items = [], className = '' }) {
  if (!items.length) return null
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {items.map((b) => (
        <Btn key={b.label} href={b.href} primary={b.primary}>
          {b.label}
        </Btn>
      ))}
    </div>
  )
}

export function Eyebrow({ children, className = '' }) {
  if (!children) return null
  return <div className={`${t.eyebrow} ${className}`}>{children}</div>
}

// Multi-line body copy rendered as <p> per line (live uses md:whitespace-pre-line + <p>s)
export function Lines({ lines, className = '' }) {
  const arr = (Array.isArray(lines) ? lines : [lines]).filter((l) => l != null)
  return (
    <div className={className}>
      <div>
        {arr.map((l, i) => (
          <p key={i}>{l}</p>
        ))}
      </div>
    </div>
  )
}

// Feature-table status icons (18x18, verbatim paths from live)
export function StatusIcon({ type }) {
  if (type === 'yes')
    return (
      <svg className="text-current" fill="none" height="18" viewBox="0 0 18 18" width="18" aria-hidden="true">
        <rect fill={c.check} height="18" rx="9" width="18" />
        <path d="M12.84 5.9C12.99 5.75 13.24 5.75 13.387 5.9C13.54 6.05 13.54 6.29 13.387 6.44L7.73 12.1C7.58 12.252 7.34 12.252 7.18 12.1L4.61 9.53C4.46 9.38 4.46 9.14 4.61 8.98C4.75 8.84 4.98 8.83 5.13 8.96L5.16 8.98L7.46 11.28L12.84 5.9Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
      </svg>
    )
  if (type === 'partial')
    return (
      <svg className="text-current" fill="none" height="18" viewBox="0 0 18 18" width="18" aria-hidden="true">
        <rect fill={c.partial} height="18" rx="9" width="18" />
        <path d="M12.75 8.75C13.03 8.75 13.25 8.97 13.25 9.25C13.25 9.53 13.03 9.75 12.75 9.75H5.25C4.97 9.75 4.75 9.53 4.75 9.25C4.75 8.97 4.97 8.75 5.25 8.75H12.75Z" fill="white" stroke="white" strokeWidth="0.5" />
      </svg>
    )
  if (type === 'no')
    return (
      <svg className="text-current" fill="none" height="18" viewBox="0 0 18 18" width="18" aria-hidden="true">
        <rect fill={c.cross} height="18" rx="9" width="18" />
        <path d="M11.43 6.1C11.56 5.97 11.77 5.97 11.9 6.1C12.03 6.23 12.03 6.44 11.9 6.57L6.57 11.9C6.44 12.03 6.23 12.03 6.1 11.9C5.97 11.77 5.97 11.56 6.1 11.43L11.43 6.1Z" fill="white" />
        <path d="M6.1 6.1C6.23 5.97 6.44 5.97 6.57 6.1L11.9 11.43L11.93 11.46C12.03 11.587 12.02 11.78 11.9 11.9C11.78 12.02 11.587 12.03 11.46 11.93L11.43 11.9L6.1 6.57C5.97 6.44 5.97 6.23 6.1 6.1Z" fill="white" />
        <path d="M11.43 6.1C11.56 5.97 11.77 5.97 11.9 6.1C12.03 6.23 12.03 6.44 11.9 6.57L6.57 11.9C6.44 12.03 6.23 12.03 6.1 11.9C5.97 11.77 5.97 11.56 6.1 11.43L11.43 6.1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
        <path d="M6.1 6.1C6.23 5.97 6.44 5.97 6.57 6.1L11.9 11.43L11.93 11.46C12.03 11.587 12.02 11.78 11.9 11.9C11.78 12.02 11.587 12.03 11.46 11.93L11.43 11.9L6.1 6.57C5.97 6.44 5.97 6.23 6.1 6.1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
      </svg>
    )
  return null
}

// number-flow-react static render: inline-block, line-height 1em, .25em vertical mask padding.
// The digit-roll transition on change is motion (flagged for Animation).
export function Price({ value }) {
  return (
    <span className="inline-block [font-kerning:none]" style={{ lineHeight: '1em', padding: '0.25em 0' }}>
      {value}
    </span>
  )
}

// Segmented control (live: role=tablist, bg-neutral-3 #f4f5f5, p-1 gap-2, active pill white w/ 1px #eff0f0)
export function Segmented({ items, value, onChange, label }) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="relative flex w-fit max-w-full snap-x snap-mandatory gap-2 overflow-auto rounded-lg bg-layer-1 p-1 font-normal [&::-webkit-scrollbar]:hidden"
    >
      {items.map((it) => {
        const active = it.value === value
        return (
          <button
            key={it.value}
            role="tab"
            type="button"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(it.value)}
            className={`group relative inline-flex cursor-pointer snap-center justify-center rounded-lg px-4 py-2 text-center font-satoshi transition-colors duration-200 hover:bg-white focus:outline-none ${active ? 'text-black' : 'text-txt-tertiary'}`}
          >
            {active && <div className="absolute inset-0 rounded-lg border border-line-n2 bg-white py-2" />}
            <div className={`relative flex items-center gap-1 whitespace-nowrap text-500 font-430 ${active ? 'text-black' : 'text-txt-tertiary'}`}>
              {it.label}
            </div>
          </button>
        )
      })}
    </div>
  )
}
