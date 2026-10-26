// Shared primitives for the plans group. Classes mirror plane.so's CMS blocks (see plans.css for tokens).
import { Fragment } from 'react'
import './plans.css'

export const cx = (...a) => a.filter(Boolean).join(' ')

// '\n' in copy = <br> on the live site; '\r' = a break only at md+ (CMS text with a literal newline under
// md:whitespace-pre-line). Arrays = separate <p> elements.
export function Lines({ text }) {
  if (text == null) return null
  const paras = Array.isArray(text) ? text : [text]
  // '' = an empty <p><br></p> (the CMS emits these; they add one blank line)
  return paras.map((p, i) => (p === '' ? <p key={i}><br /></p> : typeof p !== 'string' ? <p key={i}>{p}</p> : (
    <p key={i}>
      {String(p).split('\n').map((l, j) => (
        <Fragment key={j}>
          {j > 0 && <br />}
          {l.split('\r').map((seg, k) => (
            <Fragment key={k}>
              {k > 0 && (
                <>
                  {' '}
                  <br className="hidden md:inline" />
                </>
              )}
              {seg}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </p>
  )))
}

// inline text link inside prose (text-brand-primary hover:/80)
export function InlineLink({ href, children }) {
  return (
    <a className="text-[#006399] hover:text-[#006399]/80" href={href}>
      {children}
    </a>
  )
}

// local asset path for files downloaded from plane.so
export const A = (name) => `/assets/plans/${name}`

export function Page({ children, className }) {
  return <div className={cx('pl', className)}>{children}</div>
}

export function Container({ className, children }) {
  return <div className={cx('container-page', className)}>{children}</div>
}

// Standard CMS section wrapper: py-12 md:py-16 + surface
export function Section({ bg = 'surface-1', dark, className, children, as: Tag = 'div', ...rest }) {
  return (
    <Tag className={cx(className ?? 'py-12 md:py-16', dark && 'pl-dark', bg && `pl-bg-${bg}`)} {...rest}>
      <Container>{children}</Container>
    </Tag>
  )
}

export function Eyebrow({ children, className, size = 'sm', color = 'accent' }) {
  if (!children) return null
  return (
    <div className={cx('inline-flex uppercase', size === 'xs' ? 'pl-label-xs' : 'pl-label-sm', `pl-c-${color}`, className)}>
      {children}
    </div>
  )
}

const HTAG = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6' }
// size = visual scale (h1..h6), as = semantic tag
export function Heading({ size = 2, as, text, className, color = 'primary' }) {
  const Tag = HTAG[as ?? size]
  return (
    <Tag className={cx('pl-h', `pl-h${size}`, `pl-c-${color}`, 'w-full', className)}>
      <Lines text={text} />
    </Tag>
  )
}

const WEIGHT = { regular: 'font-430', medium: 'font-medium', semibold: 'font-570' }
export function Text({ size = 'base', color = 'secondary', weight = 'regular', text, className, list }) {
  if (text == null || text === '') return null
  const inner = list ? (
    <ul className="flex flex-col gap-2">
      <li className="flex items-start gap-3">
        <div>
          <Lines text={text} />
        </div>
      </li>
    </ul>
  ) : (
    <Lines text={text} />
  )
  return <div className={cx(`pl-body-${size}`, `pl-c-${color}`, WEIGHT[weight], className)}>{inner}</div>
}

// button: { label, href, variant: 'primary' | 'secondary' | 'link' }
export function Btn({ label, href = '#', variant = 'primary', className, size }) {
  return (
    <a className={cx('pl-btn', size === 'sm' && 'pl-btn-sm', `pl-btn-${variant}`, className)} href={href}>
      {label}
    </a>
  )
}

export function Buttons({ items, className = 'flex flex-wrap gap-4' }) {
  if (!items?.length) return null
  return (
    <div className={className}>
      {items.map((b, i) => (
        <Btn key={i} {...b} />
      ))}
    </div>
  )
}

export function Img({ src, alt = '', w, h, className = 'w-full', eager }) {
  return (
    <img
      className={className}
      src={src.startsWith('/') ? src : A(src)}
      alt={alt || src.replace(/\.\w+$/, '')}
      width={w}
      height={h}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  )
}

// Section header variants measured on plane.so:
//  split:  eyebrow over a 2-col grid (h2 | body, body lg:mt-4)
//  center: max-w-175 (700px) centered stack, optional buttons
//  left:   max-w-207 (828px) left stack
export function SectionHeader({ variant = 'split', eyebrow, title, body, buttons, hSize = 2 }) {
  if (variant === 'split') {
    return (
      <div className="flex flex-col gap-6">
        <Eyebrow>{eyebrow}</Eyebrow>
        <div className="grid items-start gap-2 lg:grid-cols-2 lg:gap-20">
          <Heading size={hSize} as={2} text={title} />
          {body != null && (
            <div className="lg:mt-4">
              <Text text={body} />
            </div>
          )}
        </div>
        <Buttons items={buttons} />
      </div>
    )
  }
  const center = variant === 'center'
  return (
    <div
      className={cx(
        'flex flex-col gap-6',
        center ? 'mx-auto max-w-[700px] items-center text-center' : 'max-w-[828px] items-start text-left'
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className={cx('flex w-full flex-col gap-2 self-stretch', center ? 'items-center text-center' : 'items-start text-left')}>
        <Heading size={hSize} as={2} text={title} />
        {body != null && (
          <div>
            <Text text={body} />
          </div>
        )}
      </div>
      <Buttons items={buttons} className={cx('flex flex-wrap gap-4', center && 'justify-center')} />
    </div>
  )
}

// lucide icons used inline on plane.so
export function Icon({ name, className = 'size-5', strokeWidth = 2 }) {
  const P = ICONS[name]
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {P}
    </svg>
  )
}
const ICONS = {
  check: <path d="M20 6 9 17l-5-5" />,
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  'chevron-right': <path d="m9 18 6-6-6-6" />,
  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  'arrow-up-right': (
    <>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </>
  ),
  x: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  plus: (
    <>
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </>
  ),
}

// Inline SVG captured from plane.so (see svgs.js). k = key, size = rendered px.
import { SVG } from './svgs.js'
export function Svg({ k, size = 24, w, h, className }) {
  const s = SVG[k]
  if (!s) return null
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w ?? size}
      height={h ?? size}
      viewBox={s.vb}
      fill={s.fill ?? 'none'}
      stroke={s.stroke}
      strokeWidth={s.sw}
      strokeLinecap={s.stroke ? 'round' : undefined}
      strokeLinejoin={s.stroke ? 'round' : undefined}
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: s.inner }}
    />
  )
}
