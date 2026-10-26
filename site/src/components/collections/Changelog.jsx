import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Prose, { slugify } from './Prose.jsx'
import { CHANGELOG, CHANGELOG_TABS } from './data/changelog.js'
import { CopyMenu, CtaCard, Pagination, smallBtn, useDocTitle } from './ui.jsx'
import { Icon } from './icons.jsx'

const PER_PAGE = 5

export function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [image, onClose])
  if (!image) return null
  return (
    <div role="dialog" aria-modal="true" aria-label="Image preview" onClick={onClose} className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-[rgba(9,11,11,0.8)] p-6">
      <button type="button" aria-label="Close" onClick={onClose} className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20">
        <Icon name="x" className="size-5" />
      </button>
      <img src={image.src} alt={image.alt || ''} className="max-h-full max-w-full rounded-lg object-contain" />
    </div>
  )
}

function Tabs({ value, onChange }) {
  return (
    <div className="max-w-full overflow-x-auto">
      <div role="tablist" aria-label="Changelog navigation" className="relative flex w-fit max-w-full snap-x snap-mandatory gap-1 overflow-auto rounded-lg bg-layer-1 p-px font-normal [&::-webkit-scrollbar]:hidden">
        {CHANGELOG_TABS.map(([v, label]) => {
          const sel = v === value
          return (
            <button key={v} type="button" role="tab" aria-selected={sel} tabIndex={sel ? 0 : -1} onClick={() => onChange(v)} className="group relative inline-flex h-8 cursor-pointer snap-center items-center justify-center rounded-lg px-2 text-center transition-colors duration-200 hover:bg-white focus:outline-none">
              {sel && <div className="absolute inset-0 rounded-lg border border-line-subtle bg-white" />}
              <div className={`relative flex items-center gap-1 whitespace-nowrap font-inter text-[14px] leading-[22.4px] ${sel ? 'text-black' : 'text-txt-tertiary'}`}>{label}</div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Entry({ entry, first, onImage }) {
  return (
    <article className="relative flex flex-col gap-10 md:flex-row">
      <div className="relative hidden flex-shrink-0 md:block lg:w-[400px]">
        <div className="absolute bottom-0 left-3 top-0 -z-10 hidden w-px bg-layer-1 md:block" />
        <div className="sticky top-20 flex items-center gap-4 pl-1.5">
          <div className={`size-3 rounded-full ${first ? 'bg-txt-accent' : 'bg-line-n2'}`} />
          <div className="w-40 py-1"><div className="font-inter text-500 text-txt-primary">{entry.date}</div></div>
        </div>
      </div>
      <div className="flex w-full min-w-0 flex-col gap-2 pb-20 pt-1">
        <div className="relative block flex-shrink-0 md:hidden"><div className="font-inter text-500 text-txt-primary">{entry.date}</div></div>
        <div className="flex flex-col gap-4">
          <a className="group" href={`/changelog/${entry.slug}`}>
            <h5 className="font-inter text-[26px] font-[570] leading-[1.3] text-txt-primary decoration-2 underline-offset-4 group-hover:underline md:text-[36px] md:leading-[1.2]">{entry.title}</h5>
          </a>
          <Prose blocks={entry.blocks} className="cl-changelog max-w-none" density={1.1} onImage={onImage} seedBase={entry.slug.length} />
        </div>
      </div>
    </article>
  )
}

export function ChangelogIndex() {
  useDocTitle('Changelog')
  const [params, setParams] = useSearchParams()
  const tab = CHANGELOG_TABS.some(([v]) => v === params.get('category')) ? params.get('category') : 'cloud'
  const entries = CHANGELOG.filter((e) => e.tab === tab)
  const total = Math.max(1, Math.ceil(entries.length / PER_PAGE))
  const page = Math.min(total, Math.max(1, parseInt(params.get('page') || '1', 10) || 1))
  const shown = entries.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const [image, setImage] = useState(null)
  const setTab = (v) => setParams({ category: v })
  const setPage = (p) => { setParams({ category: tab, page: String(p) }); window.scrollTo(0, 0) }

  return (
    <div className="changelog-page relative flex flex-col gap-20 pb-20 font-inter">
      <div className="relative flex flex-col gap-20">
        <div className="relative">
          <div className="container-page">
            <div className="flex flex-col gap-4 pb-6 pt-16 md:pt-24">
              <div className="font-inter text-[14px] font-medium leading-[22.4px] text-txt-accent">What’s new</div>
              <h1 className="font-inter text-m-1200 font-[570] text-txt-primary md:text-1200">Changelog</h1>
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
                <div className="font-inter text-600 text-txt-secondary">Stay up to date with the latest features and updates from Plane.</div>
                <Tabs value={tab} onChange={setTab} />
              </div>
            </div>
            <div className="border-b border-line-n2" />
          </div>
        </div>
        <div className="container-page">
          <div className="relative flex flex-col gap-20">
            <div>
              {shown.map((e, i) => <Entry key={e.slug} entry={e} first={page === 1 && i === 0} onImage={setImage} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="container-page">
        <Pagination page={page} total={total} onChange={setPage} />
      </div>
      <Lightbox image={image} onClose={() => setImage(null)} />
    </div>
  )
}

// Hover-to-expand minimap TOC on the left of a changelog entry (lg+)
function EntryToc({ items, active }) {
  const openH = Math.min(91 + items.length * 34.4, 520)
  return (
    <div className="pointer-events-none absolute inset-y-0 left-8 hidden lg:block">
      <nav aria-label="Changelog table of contents" className="sticky top-1/2 -translate-y-1/2">
        <div className="group pointer-events-auto relative h-[52px] w-[28px]" style={{ '--toc-open-height': `${openH}px` }}>
          <div className="absolute left-0 top-1/2 h-[52px] w-[28px] -translate-y-1/2 overflow-hidden border border-transparent transition-[width,height,border-radius,background-color,border-color,box-shadow] duration-300 ease-ios group-focus-within:h-[var(--toc-open-height)] group-focus-within:w-[360px] group-focus-within:rounded-xl group-focus-within:border-line-subtle group-focus-within:bg-white group-focus-within:shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)] group-hover:h-[var(--toc-open-height)] group-hover:w-[360px] group-hover:rounded-xl group-hover:border-line-subtle group-hover:bg-white group-hover:shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
            <div aria-hidden="true" className="absolute left-0 top-0 h-[52px] w-[28px] overflow-hidden transition-opacity delay-150 duration-150 group-focus-within:opacity-0 group-focus-within:delay-0 group-hover:opacity-0 group-hover:delay-0">
              <div className="flex h-full flex-col items-start gap-1.5 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {items.map((it) => (
                  <div key={it.id} className="block shrink-0 rounded-full transition-colors" style={{ width: it.id === active ? 28 : it.level === 2 ? 20 : 12, height: 2, backgroundColor: it.id === active ? '#171B22' : '#D5DAE0' }} />
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 h-[var(--toc-open-height)] w-[360px] opacity-0 transition-opacity duration-75 group-focus-within:opacity-100 group-focus-within:delay-150 group-focus-within:duration-150 group-hover:opacity-100 group-hover:delay-150 group-hover:duration-150">
              <div className="flex h-full flex-col p-5">
                <div className="mb-0.5"><span className="font-inter text-[13px] font-medium text-txt-secondary">IN THIS PAGE</span></div>
                <ol className="flex min-h-0 flex-1 list-none flex-col overflow-y-auto scroll-smooth pr-1">
                  {items.map((it) => (
                    <li key={it.id} className="relative pl-7">
                      {it.level === 2 ? (
                        <span aria-hidden="true" className="absolute left-[4px] top-[14px] size-2 rotate-45" style={{ backgroundColor: it.id === active ? '#171B22' : '#C9CCCD' }} />
                      ) : (
                        <span aria-hidden="true" className="absolute bottom-0 left-2 top-0 w-0.5" style={{ backgroundColor: it.id === active ? '#171B22' : '#E0E2E3' }} />
                      )}
                      <a href={`#${it.id}`} className="block rounded-sm py-1.5 transition-colors [overflow-wrap:anywhere]">
                        <div className={`font-inter text-[14px] font-medium leading-[22.4px] ${it.id === active ? 'text-txt-primary' : 'text-txt-secondary'}`}>{it.text}</div>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

function tocFor(blocks) {
  const out = []
  for (const b of blocks) {
    if (b.t === 'badge') out.push({ id: slugify(b.text), text: b.text, level: 2 })
    else if (b.t === 'acc') out.push({ id: slugify(b.title), text: b.title, level: 2 })
    else if (b.t === 'h2') out.push({ id: slugify(b.text), text: b.text, level: 2 })
    else if (b.t === 'h3') out.push({ id: slugify(b.text), text: b.text, level: 3 })
  }
  return out
}

function useActive(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const on = () => {
      let cur = ids[0]
      for (const id of ids) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 140) cur = id }
      setActive(cur)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [ids])
  return active
}

export function ChangelogDetail({ slug }) {
  const entry = CHANGELOG.find((e) => e.slug === slug) || {
    slug,
    tab: 'cloud',
    date: CHANGELOG[0].date,
    title: (slug || 'Changelog entry').replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()),
    blocks: [{ t: 'badge', text: "What's new" }, { t: 'h3', text: 'Overview' }, { t: 'p', n: 220 }, { t: 'ul', items: [{ n: 160, b: 30 }, { n: 140, b: 26 }] }],
  }
  useDocTitle(entry.title)
  const toc = useMemo(() => tocFor(entry.blocks), [entry])
  const ids = useMemo(() => toc.map((t) => t.id), [toc])
  const active = useActive(ids)
  const [image, setImage] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(true)
  const [copied, setCopied] = useState(false)
  const recent = CHANGELOG.filter((e) => e.tab === entry.tab && e.slug !== entry.slug).slice(0, 3)
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(window.location.href) } catch { /* blocked */ }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <article className="changelog-page pt-8 font-inter lg:pt-16">
      <div className="container-page">
        <div className="relative">
          <EntryToc items={toc} active={active} />
          <div className="mx-auto max-w-[750px]">
            <div className="flex flex-col gap-6">
              <a href={`/changelog?category=${entry.tab}`} className="whitespace-nowrap font-inter text-[14px] font-[430] leading-[21px] text-txt-primary hover:underline">
                <span className="flex items-center gap-2"><Icon name="arrowLeft" className="size-4 shrink-0" /> Back to Changelog</span>
              </a>
              <h1 className="font-inter text-[30px] font-[570] leading-[1.3] tracking-[-0.03em] text-txt-primary md:text-[40px]">{entry.title}</h1>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="font-inter text-500 text-txt-tertiary">{entry.date}</div>
                <div className="relative flex items-center gap-2">
                  <div className="group/copy-link relative shrink-0">
                    <button type="button" aria-label="Copy link" onClick={copyLink} className={smallBtn}>
                      <span className="flex h-[21px] items-center"><Icon name={copied ? 'check' : 'link'} className="size-3.5 shrink-0" /></span>
                    </button>
                    <span aria-hidden="true" className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-inverse px-2 py-1 font-inter text-[12px] font-medium leading-4 text-white opacity-0 shadow-sm transition-opacity duration-150 group-hover/copy-link:opacity-100">{copied ? 'Copied' : 'Copy link'}</span>
                  </div>
                  <CopyMenu getText={() => `# ${entry.title}\n\n${window.location.href}`} />
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-line-subtle" />
            <div className="mt-6 lg:hidden">
              <div className="relative mt-1 flex h-auto flex-col gap-2 overflow-hidden rounded p-2">
                <button type="button" className="flex cursor-pointer items-center gap-2 text-left" onClick={() => setMobileOpen((o) => !o)} aria-expanded={mobileOpen}>
                  <Icon name="textSearch" className="h-4 w-4 text-black" />
                  <div className="font-inter text-[13px] font-[570] leading-[19.5px] text-txt-primary">TABLE OF CONTENT</div>
                </button>
                {mobileOpen && (
                  <nav aria-label="Table of contents">
                    <ol className="list-none">
                      {toc.map((it) => (
                        <li key={it.id} className="relative flex items-start gap-2 rounded">
                          <div className={`w-full ${it.level === 3 ? 'border-l border-line-n2' : ''}`} style={{ paddingLeft: it.level === 3 ? 18 : 0 }}>
                            <div className={`font-inter text-[14px] leading-[22.4px] ${it.id === active ? 'text-txt-accent' : 'text-txt-tertiary'}`}>
                              <a className={`line-clamp-2 block py-1.5 ${it.id === active ? 'font-medium' : 'hover:underline'}`} href={`#${it.id}`} title={it.text}>{it.text}</a>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
              </div>
            </div>
            <div className="mt-6 max-w-none">
              <Prose blocks={entry.blocks} className="cl-changelog" density={1.1} onImage={setImage} seedBase={entry.slug.length} />
            </div>
          </div>
        </div>
        {recent.length > 0 && (
          <section aria-labelledby="recent-changelogs-heading" className="pt-16">
            <h3 id="recent-changelogs-heading" className="font-inter text-[28px] font-[570] leading-[1.3] tracking-[-0.03em] text-txt-primary md:text-[40px]">Recent Changelogs</h3>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((e) => (
                <a key={e.slug} href={`/changelog/${e.slug}`} className="flex flex-col gap-2 rounded-xl border border-line-subtle bg-white p-6 transition-colors hover:border-line-strong">
                  <div className="font-inter text-[14px] leading-[22.4px] text-txt-tertiary">{e.date}</div>
                  <div className="font-inter text-500 font-[570] text-txt-primary"><span className="line-clamp-2">{e.title}</span></div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
      <div className="mt-12 w-full">
        <CtaCard compact flat />
      </div>
      <Lightbox image={image} onClose={() => setImage(null)} />
    </article>
  )
}
