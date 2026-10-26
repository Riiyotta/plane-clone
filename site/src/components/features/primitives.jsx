// Shared primitives for the feature-page block system (plane.so CMS v4 blocks).
// Tokens measured live 2026-10-26 (see report). Colors reference tailwind.config.js tokens.
import { createContext, useContext } from 'react'

export const ToneContext = createContext('light')
export const useDark = () => useContext(ToneContext) === 'dark'

// Text color roles → light / dark token classes
const COLOR = {
  primary: ['text-txt-primary', 'text-txt-d-primary'],
  secondary: ['text-txt-secondary', 'text-txt-d-secondary'],
  tertiary: ['text-txt-tertiary', 'text-txt-d-tertiary'],
  accent: ['text-txt-accent', 'text-txt-d-accent'],
}
export function useColor(role) {
  const dark = useDark()
  return COLOR[role][dark ? 1 : 0]
}

// Satoshi heading ramp (mobile <768 / desktop ≥768), line-height 1.3, letter-spacing -0.03em
const HEADING = {
  h1: 'h1',
  h2: 'h2',
  h3: 'font-satoshi font-430 text-[28px] leading-[1.3] tracking-[-0.03em] md:text-[40px]',
  h4: 'font-satoshi font-430 text-m-900 md:text-900',
  h5: 'font-satoshi font-430 text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[24px]',
  h6: 'font-satoshi font-430 text-[20px] leading-[1.3] tracking-[-0.03em]',
}
const HEADING_FEATURES = { fontFeatureSettings: '"cv05", "cv08" 0, "ss02", "ss03"' }

export function Heading({ as = 'h2', size, html, color = 'primary', className = '', wrap = true }) {
  const Tag = as
  const c = useColor(color)
  const cls = `${HEADING[size || as]} ${c} md:whitespace-pre-line ${className}`
  // CMS rich text: headings wrap their paragraphs in a <div>
  const inner = wrap ? `<div>${html}</div>` : html
  return <Tag className={cls} style={HEADING_FEATURES} dangerouslySetInnerHTML={{ __html: inner }} />
}

// Inter body text: lg 18/27, base 16/24, sm 14/22.4
const BODY = { lg: 'text-600', base: 'text-500', sm: 'text-400' }
const WEIGHT = { regular: 'font-430', medium: 'font-medium', semibold: 'font-570' }
export function Body({ size = 'base', color = 'secondary', weight = 'regular', html, className = '' }) {
  const c = useColor(color)
  if (html === undefined || html === null) return null
  return (
    <div
      className={`md:whitespace-pre-line font-inter ${BODY[size]} ${c} ${WEIGHT[weight]} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

// Eyebrow: IBM Plex Mono 15/15, 500, +0.3px, uppercase, accent
export function Eyebrow({ text, className = '' }) {
  const c = useColor('accent')
  if (!text) return null
  return (
    <div className={`inline-flex font-mono text-[15px] font-medium uppercase leading-[15px] tracking-[0.02em] ${c} ${className}`}>
      {text}
    </div>
  )
}

export function Button({ label, href, kind = 'primary', dark: forceDark, target }) {
  const dark = useDark() || !!forceDark
  const ext = target === '_blank' ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  if (kind === 'link') {
    return (
      <a href={href} {...ext} className="whitespace-nowrap rounded-lg text-center font-inter text-500 font-medium text-txt-primary transition-colors hover:underline">
        {label}
      </a>
    )
  }
  const cls =
    kind === 'primary'
      ? dark ? 'btn-primary-dark' : 'btn-primary'
      : dark ? 'btn-secondary-dark' : 'btn-secondary'
  return (
    <a href={href} {...ext} className={cls}>
      {label}
    </a>
  )
}

export function Buttons({ items, className = '' }) {
  if (!items || !items.length) return null
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {items.map((b, i) => (
        <Button key={i} {...b} />
      ))}
    </div>
  )
}

export function Img({ img, className = '', eager = false }) {
  if (!img) return null
  return (
    <img
      src={img.src}
      alt={img.alt}
      width={img.w}
      height={img.h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`h-auto ${className || img.cls || 'w-full'}`}
    />
  )
}

// Desktop / mobile image pair (CMS renders `hidden lg:block` + `block lg:hidden`)
export function ImgPair({ img, imgMobile, eager }) {
  if (!imgMobile) return <Img img={img} className="w-full" eager={eager} />
  return (
    <>
      <Img img={img} className="hidden w-full lg:block" eager={eager} />
      <Img img={imgMobile} className="block w-full lg:hidden" eager={eager} />
    </>
  )
}

const CHECK = 'M20 6 9 17l-5-5'
export function LucideIcon({ d, size = 24, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
export const ICON = { check: CHECK, chevronDown: 'm6 9 6 6 6-6', chevronRight: 'm9 18 6-6-6-6' }

// Section shell: py-12 md:py-16 (v4) or py-16 (legacy blocks); bg surface-1 / surface-2 / dark surface-1
const BG = { s1: 'bg-white', s2: 'bg-surface-2', dark: 'bg-[#0e0f10]', none: '' }
export function Shell({ bg = 's1', py = 'v4', as = 'div', label, children, className = '' }) {
  const Tag = as
  const pad = py === 'v4' ? 'py-12 md:py-16' : py === 'old' ? 'py-16' : ''
  return (
    <ToneContext.Provider value={bg === 'dark' ? 'dark' : 'light'}>
      <Tag aria-label={label} className={`${pad} ${BG[bg]} ${className}`}>
        <div className="container-page">{children}</div>
      </Tag>
    </ToneContext.Provider>
  )
}
