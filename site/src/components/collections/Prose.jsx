import { useState } from 'react'
import { ph as basePh, phLabel } from './ph.js'

// Per-variant length scale so placeholder copy wraps to the same line count as the live copy
let DENS = 1.05
const ph = (n, seed) => basePh(n > 40 ? Math.round(n * DENS) : n, seed, true)
import './collections.css'

export const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-')

function Lead({ n, b, seed, br }) {
  if (!b) return ph(n, seed)
  const lead = phLabel(Math.max(2, b - 1), seed + 1000) + (br ? '' : '.')
  const rest = n - b - 1 > 2 ? ph(n - b - 1, seed) : ''
  return br ? <><strong>{lead}</strong><br />{rest}</> : <><strong>{lead}</strong> {rest}</>
}

function Cell({ text, seed, keep = 48 }) {
  if (!text) return null
  return text.length <= keep ? text : ph(text.length, seed)
}

function List({ block, seed }) {
  const Tag = block.t === 'ol' ? 'ol' : 'ul'
  return (
    <Tag start={block.start || undefined}>
      {block.items.map((it, i) => (
        <li key={i}>
          <Lead n={it.n} b={it.b} seed={seed + i} />
          {it.sub && <List block={it.sub} seed={seed + i * 13} />}
        </li>
      ))}
    </Tag>
  )
}

// Renders an extracted block structure with placeholder prose but real heading text.
// Minimal github-light colouring for JSON snippets (keys #005CC5, strings #032F62)
function highlight(code, lang) {
  if (lang !== 'json') return code
  const out = []
  const re = /"(?:[^"\\]|\\.)*"(\s*:)?/g
  let last = 0
  let m
  while ((m = re.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index))
    const str = m[1] ? m[0].slice(0, -m[1].length) : m[0]
    out.push(<span key={m.index} style={{ color: m[1] ? '#005CC5' : '#032F62' }}>{str}</span>)
    if (m[1]) out.push(m[1])
    last = re.lastIndex
  }
  out.push(code.slice(last))
  return out
}

function CodeBlock({ lang, code }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(code) } catch { /* blocked */ }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="cl-codeblock relative pb-4 pt-3">
      <div className="flex items-center justify-between rounded-t-xl bg-layer-1 px-4 py-2">
        <div className="font-inter text-500 text-[#909598]">{lang}</div>
        <button type="button" aria-label="Copy code" onClick={copy} className="cursor-pointer text-sm text-[#909598]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
            {copied ? <path d="M20 6 9 17l-5-5" /> : <><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></>}
          </svg>
        </button>
      </div>
      <div className="overflow-auto rounded-b-xl bg-surface-2 p-4">
        <pre><code>{highlight(code, lang)}</code></pre>
      </div>
    </div>
  )
}

// Collapsible section (changelog "Enhancements" / "Bug fixes"): grid-rows 0fr -> 1fr, 300ms ease-out
function Accordion({ block, idx, density }) {
  const [open, setOpen] = useState(false)
  const id = slugify(block.title)
  return (
    <div className="cl-acc">
      <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <h2 id={id}>{block.title}</h2>
        <svg viewBox="0 0 20 20" fill="currentColor" className={`size-5 shrink-0 text-txt-tertiary transition-transform duration-200 ${open ? 'rotate-90' : ''}`} aria-hidden="true"><path d="M8 6.5v7l5-3.5z" /></svg>
      </button>
      <div className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="pb-5"><Prose blocks={block.body} className="cl-acc-body" seedBase={idx * 97} density={density} /></div>
        </div>
      </div>
    </div>
  )
}

export default function Prose({ blocks, className = '', headingLink = false, renderHeading, cellP = false, onImage, seedBase = 0, density = 1.05 }) {
  DENS = density
  return (
    <div className={className}>
      {blocks.map((b, i) => {
        const seed = seedBase + i * 31
        if (/^h[1-6]$/.test(b.t)) {
          const H = b.t
          const id = b.id || slugify(b.text)
          if (renderHeading) return renderHeading(b, id, i)
          let inner = b.text
          if (b.code && b.text.includes(b.code)) {
            const [pre, post] = b.text.split(b.code)
            inner = <>{pre}<code>{b.code}</code>{post}</>
          }
          if (b.strong) inner = <strong>{inner}</strong>
          return (
            <H key={i} id={id}>
              {headingLink ? <a href={`#${id}`} className="cl-anchor">{inner}</a> : inner}
            </H>
          )
        }
        switch (b.t) {
          case 'p':
            if (!b.n) return null
            if (b.em) return <p key={i}><em>{ph(b.n, seed)}</em></p>
            return <p key={i}><Lead n={b.n} b={b.b} br={b.br} seed={seed} /></p>
          case 'callout':
            return (
              <div key={i} className="cl-callout">
                <div className="flex h-12 shrink-0 items-center justify-center" />
                <div className="cl-callout-body"><p>“{ph(Math.max(10, b.n - 2), seed)}”{b.attr && <><br />{b.attr}</>}</p></div>
              </div>
            )
          case 'text':
            return <p key={i}>{ph(b.n, seed)}</p>
          case 'ul':
          case 'ol':
            return <List key={i} block={b} seed={seed} />
          case 'blockquote':
            return <blockquote key={i}><p>{ph(b.n, seed)}</p></blockquote>
          case 'spacer':
            return <div key={i} className="cl-spacer">&nbsp;</div>
          case 'hr':
            return <hr key={i} />
          case 'pre':
            return <pre key={i}><code>{b.code}</code></pre>
          case 'img':
            return (
              <figure key={i} className="cl-figure">
                <div>
                  {onImage ? (
                    <button type="button" aria-label="Open image in lightbox" className="w-full cursor-zoom-in" onClick={() => onImage(b)}>
                      <img src={b.src} alt={b.alt || ''} width={b.nw || b.w} height={b.nh || b.h} loading="lazy" className="h-auto w-full" />
                    </button>
                  ) : (
                    <img src={b.src} alt={b.alt || ''} width={b.nw || b.w} height={b.nh || b.h} loading="lazy" />
                  )}
                </div>
              </figure>
            )
          case 'video':
            return (
              <div key={i} className="cl-video"><video src={b.src} poster={b.poster} controls playsInline preload="none" /></div>
            )
          case 'table': {
            const rows = b.rows
            const head = b.head ? rows[0] : null
            const body = b.head ? rows.slice(1) : rows
            return (
              <div key={i} className="cl-table-wrap">
                <div>
                <table>
                  {head && (
                    <thead>
                      <tr>{head.map((c, j) => <th key={j}>{c}</th>)}</tr>
                    </thead>
                  )}
                  <tbody>
                    {body.map((r, k) => (
                      <tr key={k}>
                        {r.map((c, j) => <td key={j}>{cellP ? <p><Cell text={c} seed={seed + k * 5 + j} /></p> : <Cell text={c} seed={seed + k * 5 + j} />}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            )
          }
          case 'codeblock':
            return <CodeBlock key={i} lang={b.lang} code={b.code} />
          case 'badge':
            return (
              <div key={i} className="cl-badge"><h2 id={slugify(b.text)}><span>{b.text}</span></h2></div>
            )
          case 'acc': {
            // consecutive accordions share one bordered group
            if (blocks[i - 1]?.t === 'acc') return null
            const group = []
            for (let k = i; blocks[k]?.t === 'acc'; k++) group.push(blocks[k])
            return (
              <div key={i} className="cl-acc-group">
                {group.map((g, k) => <Accordion key={k} block={g} idx={i + k} density={density} />)}
              </div>
            )
          }
          case 'details':
            return (
              <details key={i}>
                <summary>{b.summary}</summary>
                <Prose blocks={b.body} />
              </details>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
