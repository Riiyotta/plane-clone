import { useMemo, useState } from 'react'
import { BLOG_POSTS, BLOG_TABS } from '../../components/collections/data/blog.js'
import { FeaturedPost, PostCard, PostRow } from '../../components/collections/BlogCards.jsx'
import { CtaCard, Pagination, useDocTitle } from '../../components/collections/ui.jsx'
import { Icon } from '../../components/collections/icons.jsx'
import { slugify } from '../../components/collections/Prose.jsx'

const PER_PAGE = 10

export default function Blog() {
  useDocTitle('Blog')
  const [tab, setTab] = useState('all')
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const [featured, ...rest] = BLOG_POSTS
  const filtered = useMemo(
    () =>
      BLOG_POSTS.filter((p) => tab === 'all' || slugify(p.category) === tab).filter(
        (p) => !q.trim() || p.title.toLowerCase().includes(q.trim().toLowerCase()),
      ),
    [tab, q],
  )
  const total = Math.max(1, Math.ceil(filtered.length / PER_PAGE))
  const shown = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const go = (p) => {
    setPage(p)
    document.getElementById('blog-list')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative flex flex-col gap-20 pb-20 font-satoshi">
      <div>
        <div className="flex flex-col gap-12 pb-20">
          <div className="container-page">
            <div className="flex flex-col gap-8">
              <div>
                <FeaturedPost post={featured} />
                <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {rest.slice(0, 3).map((p) => <PostCard key={p.slug} post={p} />)}
                </div>
                <div id="blog-list" className="scroll-mt-24" />
                <div className="mt-10" />
              </div>
              <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                <div role="tablist" aria-label="Blog navigation" className="relative flex w-fit max-w-full snap-x snap-mandatory gap-2 overflow-auto rounded-lg bg-layer-1 p-1 font-normal [&::-webkit-scrollbar]:hidden">
                  {BLOG_TABS.map(([value, label]) => {
                    const sel = value === tab
                    return (
                      <button
                        key={value}
                        type="button"
                        role="tab"
                        aria-selected={sel}
                        tabIndex={sel ? 0 : -1}
                        onClick={() => { setTab(value); setPage(1) }}
                        className="group relative inline-flex cursor-pointer snap-center justify-center rounded-lg px-4 py-2 text-center transition-colors duration-200 hover:bg-white focus:outline-none"
                      >
                        {sel && <div className="absolute inset-0 rounded-lg border border-line-n2 bg-white" />}
                        <div className={`relative flex items-center gap-1 whitespace-nowrap text-500 ${sel ? 'text-black' : 'text-txt-tertiary'}`}>{label}</div>
                      </button>
                    )
                  })}
                </div>
                <div className="w-full lg:max-w-xs">
                  <div className="relative flex h-10 w-full items-center gap-2 rounded-lg border border-line-n2 p-2">
                    <Icon name="search" className="pointer-events-none size-4 shrink-0 text-txt-tertiary" />
                    <input
                      type="search"
                      value={q}
                      onChange={(e) => { setQ(e.target.value); setPage(1) }}
                      placeholder="Find what you're looking for"
                      className="w-full bg-transparent font-satoshi text-500 text-black transition-all duration-200 placeholder:text-[#909598] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="font-inter text-500 text-txt-tertiary">{filtered.length === 0 ? 'No posts found.' : ''}</div>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {shown.map((p) => <PostRow key={p.slug} post={p} />)}
              </div>
              <div className="container-page">
                <Pagination page={page} total={total} onChange={go} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-page">
        <div className="pt-10"><CtaCard /></div>
      </div>
    </div>
  )
}
