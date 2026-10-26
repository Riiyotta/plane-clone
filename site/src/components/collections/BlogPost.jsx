import { useEffect, useMemo, useState } from 'react'
import Prose, { slugify } from './Prose.jsx'
import { BLOG_POSTS, CONTINUOUS_DISCOVERY_BODY } from './data/blog.js'
import { PostCard } from './BlogCards.jsx'
import { CopyMenu, CtaCard, useDocTitle } from './ui.jsx'
import { Icon, ShareIcons } from './icons.jsx'

// Generic structure for posts we have no measured outline for (placeholder copy).
const GENERIC_BODY = [
  { t: 'p', n: 260 }, { t: 'p', n: 210 },
  { t: 'h2', text: 'Overview' }, { t: 'p', n: 320 }, { t: 'p', n: 240 },
  { t: 'ul', items: [{ n: 90, b: 18 }, { n: 110, b: 22 }, { n: 80, b: 16 }] },
  { t: 'h2', text: 'How it works' }, { t: 'h3', text: '1. Set up your workspace' }, { t: 'p', n: 280 },
  { t: 'h3', text: '2. Bring your team in' }, { t: 'p', n: 250 }, { t: 'h3', text: '3. Track progress' }, { t: 'p', n: 300 },
  { t: 'h2', text: 'Final thoughts' }, { t: 'p', n: 260 },
]

export function findPost(slug) {
  const found = BLOG_POSTS.find((p) => p.slug === slug)
  if (found) return found
  const title = slug
    ? slug.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())
    : 'Untitled post'
  return { slug, title, category: 'Product', date: BLOG_POSTS[0].date, authors: ['Plane Team'], image: BLOG_POSTS[0].image, fallback: true }
}

function useActiveHeading(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      let cur = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) cur = id
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

function TocList({ items, active }) {
  // h3 entries are only expanded under the h2 section that contains the active heading
  let parent = null
  const parentOf = {}
  for (const it of items) { if (it.level === 2) parent = it.id; parentOf[it.id] = it.level === 2 ? it.id : parent }
  const activeParent = parentOf[active]
  return (
    <ol className="list-none">
      {items.map((it) => {
        const open = it.level === 2 || parentOf[it.id] === activeParent
        const isActive = it.id === active
        return (
          <li key={it.id} className={`relative flex items-start gap-2 rounded transition-all duration-300 ease-in-out ${open ? 'pointer-events-auto max-h-96 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'}`}>
            <div className={`w-full transition-colors ${it.level === 3 ? 'border-l border-line-n2' : ''}`} style={{ paddingLeft: it.level === 3 ? 18 : 0 }}>
              <div className={`font-inter text-[14px] leading-[22.4px] ${isActive ? 'text-txt-accent' : 'text-txt-tertiary'}`}>
                <a href={`#${it.id}`} title={it.text} className={`line-clamp-2 block py-1.5 ${isActive ? 'font-medium' : 'hover:underline'}`}>{it.text}</a>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

function Share({ post }) {
  const url = encodeURIComponent(`https://plane.so/blog/${post.slug}`)
  const t = encodeURIComponent(post.title)
  const links = [
    ['Share on LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${url}`, ShareIcons.linkedin],
    ['Share on X', `https://twitter.com/intent/tweet?url=${url}&text=${t}`, ShareIcons.x],
    ['Share on Reddit', `https://www.reddit.com/submit?url=${url}&title=${t}`, ShareIcons.reddit],
    ['Share on Hacker News', `https://news.ycombinator.com/submitlink?u=${url}&t=${t}`, ShareIcons.hn],
  ]
  return (
    <div className="flex w-full items-center gap-3 lg:flex-col lg:items-start">
      <div className="font-inter text-[13px] font-[570] leading-[19.5px] text-txt-primary">Share</div>
      <div className="flex items-center gap-1">
        {links.map(([label, href, icon]) => (
          <a key={label} aria-label={label} title={label} href={href} target="_blank" rel="noopener noreferrer" className="flex size-8 items-center justify-center rounded-lg bg-white text-black transition-colors hover:bg-surface-2">{icon}</a>
        ))}
      </div>
    </div>
  )
}

export default function BlogPost({ slug }) {
  const post = findPost(slug)
  useDocTitle(post.title)
  const blocks = post.body === 'continuous' ? CONTINUOUS_DISCOVERY_BODY : GENERIC_BODY
  const toc = useMemo(
    () => blocks.filter((b) => b.t === 'h2' || b.t === 'h3').map((b) => ({ id: b.id || slugify(b.text), text: b.text, level: +b.t[1] })),
    [blocks],
  )
  const ids = useMemo(() => toc.map((t) => t.id), [toc])
  const active = useActiveHeading(ids)
  const [mobileOpen, setMobileOpen] = useState(true)
  const recommended = useMemo(() => {
    const others = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    const same = others.filter((p) => p.category === post.category)
    return [...same, ...others.filter((p) => p.category !== post.category)].slice(0, 3)
  }, [post])

  return (
    <article className="pb-16 pt-16 font-satoshi">
      <div className="container-page">
        <div className="mx-auto flex flex-col gap-10 xl:max-w-[80%]">
          <div className="flex w-full flex-col gap-4 pb-2">
            <div className="flex flex-wrap items-center gap-2">
              <a href="/blog"><div className="font-inter text-[14px] leading-[22.4px] text-txt-tertiary">Blog /</div></a>
              <div className="font-inter text-[14px] leading-[22.4px] text-txt-accent">{post.category}</div>
            </div>
            <h1 className="font-satoshi text-[28px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-primary md:text-[40px]">{post.title}</h1>
            <h6 className="font-satoshi text-[20px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-tertiary" />
            <div className="flex items-center gap-2">
              <div className="font-inter text-[14px] leading-[22.4px] text-[#909598]">{post.authors.join(', ')}</div>
              <div className="flex flex-nowrap items-center gap-2">
                <div className="text-[6px] text-[#909598]">●</div>
                <div className="font-inter text-[14px] leading-[22.4px] text-[#909598]">{post.date}</div>
              </div>
            </div>
            <div className="mt-4 h-auto w-full rounded-lg">
              <img alt={`Cover image for ${post.title}`} src={post.image} width="1920" height="1215" className="h-auto w-full rounded-lg" />
            </div>
          </div>

          <div className="relative flex flex-col lg:flex-row lg:gap-8">
            <div className="top-24 mt-[18px] block h-fit w-full shrink-0 pr-8 lg:sticky lg:mb-4 lg:w-80">
              <div className="flex w-full flex-col">
                <div className="pb-6">
                  <CopyMenu full getText={() => `# ${post.title}\n\n${window.location.href}`} />
                  <div className="pt-6 lg:hidden"><Share post={post} /></div>
                </div>
                <div className="border-t border-line-subtle py-6">
                  <div className="relative mt-1 flex h-auto flex-col gap-2 overflow-hidden rounded p-2 lg:hidden">
                    <button type="button" className="flex cursor-pointer items-center gap-2 text-left" onClick={() => setMobileOpen((o) => !o)} aria-expanded={mobileOpen}>
                      <Icon name="textSearch" className="h-4 w-4 text-black" />
                      <div className="font-inter text-[13px] font-[570] leading-[19.5px] text-txt-primary">TABLE OF CONTENT</div>
                    </button>
                    {mobileOpen && <nav aria-label="Table of contents"><TocList items={toc} active={active} /></nav>}
                  </div>
                  <div className="relative mt-1 hidden flex-col gap-2 overflow-visible lg:flex">
                    <div id="blog-post-toc-heading" className="font-inter text-[13px] font-[570] leading-[19.5px] text-txt-primary">TABLE OF CONTENT</div>
                    <nav aria-labelledby="blog-post-toc-heading" style={{ maxHeight: '70vh', overflow: 'auto', scrollbarWidth: 'thin' }}>
                      <TocList items={toc} active={active} />
                    </nav>
                  </div>
                </div>
                <div className="hidden border-t border-line-subtle pt-6 lg:block">
                  <div className="flex flex-col gap-3">
                    <Share post={post} />
                    <a href="https://app.plane.so/sign-up" className="btn-secondary w-full">Start a free trial</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <Prose blocks={blocks} className="cl-blog mx-auto" cellP density={1.08} />
            </div>
          </div>

          <section className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h4 className="font-satoshi text-[24px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-primary md:text-[32px]">Recommended for you</h4>
              <a href="/blog" className="flex items-center gap-1.5 text-[#909598] transition-colors hover:text-black">
                <div className="font-inter text-500 text-txt-primary">View all blogs</div>
                <Icon name="external" className="size-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommended.map((p) => <PostCard key={p.slug} post={p} readTime />)}
            </div>
          </section>
          <div className="py-12">
            <div className="container-page"><CtaCard compact /></div>
          </div>
        </div>
      </div>
    </article>
  )
}
