import { useEffect, useRef, useState } from 'react'
import Prose, { slugify } from './Prose.jsx'
import legal from './data/legal.js'

// Floating minimap TOC (xl+ only), measured on plane.so/legals/*
function LegalToc({ items }) {
  const [active, setActive] = useState(items[0]?.id)
  const barsRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      let cur = items[0]?.id
      for (const it of items) {
        const el = document.getElementById(it.id)
        if (el && el.getBoundingClientRect().top <= 120) cur = it.id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  useEffect(() => {
    const box = barsRef.current
    const bar = box?.querySelector(`[data-heading-id="${active}"]`)
    if (box && bar) box.scrollTop = bar.offsetTop - box.clientHeight / 2
  }, [active])

  if (!items.length) return null
  return (
    <nav aria-label="Legal page table of contents" className="pointer-events-none fixed right-4 top-1/2 z-20 hidden -translate-y-1/2 xl:block">
      <div className="group pointer-events-auto relative h-[102px] w-[55px] overflow-hidden rounded-xl border border-line-subtle bg-white p-5 px-4 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] transition-[width,height] duration-300 ease-out focus-within:h-[320px] focus-within:w-[291px] hover:h-[320px] hover:w-[291px]">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden p-5 px-4 transition-opacity duration-200 group-focus-within:opacity-0 group-hover:opacity-0">
          <div ref={barsRef} className="relative flex h-full flex-col items-end gap-2 overflow-y-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((it) => (
              <div
                key={it.id}
                data-heading-id={it.id}
                className="block shrink-0 rounded-full transition-colors"
                style={it.id === active ? { width: 20, height: 3, backgroundColor: '#171B22' } : { width: 14, height: 2, backgroundColor: '#D5DAE0' }}
              />
            ))}
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 transition-opacity duration-200 group-focus-within:opacity-100 group-hover:opacity-100">
          <div className="flex h-full flex-col p-5">
            <div className="mb-2 text-[14px] font-medium leading-[22.4px] text-txt-primary">Contents</div>
            <ol className="flex min-h-0 flex-1 list-none flex-col gap-2.5 overflow-y-auto scroll-smooth pr-1">
              {items.map((it) => (
                <li key={it.id}>
                  <a href={`#${it.id}`} className="block max-w-full truncate rounded-sm transition-colors hover:bg-layer-hover" style={{ paddingLeft: it.level === 2 ? 12 : 24 }}>
                    <span className={`text-[13px] font-medium leading-[19.5px] ${it.id === active || it.level === 2 ? 'text-txt-primary' : 'text-txt-secondary'}`}>{it.text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </nav>
  )
}

export function LegalHeader({ title, sub }) {
  return (
    <div className="pb-12">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          <h1 className="h1 text-txt-primary">{title}</h1>
          <div className="text-500 text-txt-tertiary">{sub}</div>
        </div>
      </div>
    </div>
  )
}

export default function LegalPage({ slug }) {
  const doc = legal[slug]
  const toc = doc.blocks
    .filter((b) => b.t === 'h2' || b.t === 'h3')
    .map((b) => ({ id: b.id || slugify(b.text), text: b.text, level: +b.t[1] }))
  useEffect(() => {
    document.title = `${doc.title} | Plane`
  }, [doc.title])
  return (
    <div className="min-h-screen py-20 font-inter">
      <LegalHeader title={doc.title} sub={doc.updated} />
      <div>
        <div className="container-page">
          <div className="relative">
            <LegalToc items={toc} />
            <div className="mx-auto max-w-3xl">
              <Prose blocks={doc.blocks} className="cl-legal" headingLink density={1.04} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const LEGAL_LINKS = [
  ['Terms of Service', '/legals/terms-and-conditions'],
  ['Privacy Policy', '/legals/privacy-policy'],
  ['Acceptable Use Policy', '/legals/acceptable-use-policy'],
  ['Service Level Agreement', '/legals/service-level-agreement'],
  ['Data Processing Addendum', '/legals/dpa'],
  ['Sub-Processors', '/legals/sub-processors'],
  ['Cookie Policy', '/legals/cookie-policy'],
  ['Business Associate Agreement', '/legals/business-associate-agreement'],
  ['AI Terms', '/legals/ai-terms'],
  ['End User License Agreement (EULA)', '/legals/eula'],
]
