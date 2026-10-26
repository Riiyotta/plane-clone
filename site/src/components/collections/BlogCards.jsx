import { Dot, Label } from './ui.jsx'
import { Icon } from './icons.jsx'
import { ph } from './ph.js'

export function Authors({ authors, first = false }) {
  return authors.map((a, i) => (
    <div key={a} className="flex items-center gap-2">
      {(i > 0 || first) && <Dot />}
      <Label weight="font-[430]">{a}</Label>
    </div>
  ))
}

// Hero/featured row on /blog (grid lg:2 cols, image right)
export function FeaturedPost({ post }) {
  return (
    <a href={`/blog/${post.slug}`} className="my-4 grid w-full cursor-pointer grid-cols-1 items-center gap-6 overflow-hidden rounded-xl px-4 py-4 hover:bg-surface-2 lg:grid-cols-2">
      <div className="order-2 flex flex-col gap-2 lg:order-1">
        <div className="flex flex-wrap items-center gap-2">
          <Label weight="font-[570]" tone="text-txt-tertiary">{post.category}</Label>
          <Dot />
          <Label weight="font-[570]" tone="text-txt-tertiary">{post.date}</Label>
        </div>
        <h5 className="font-satoshi text-[22px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-primary md:text-[24px]">{post.title}</h5>
        <div className="font-inter text-500 text-txt-tertiary"><p>{post.excerpt || ph(100, post.slug)}</p></div>
        <div className="flex flex-wrap items-center gap-2"><Authors authors={post.authors} /></div>
        <div className="mt-6 flex items-start">
          <span className="cursor-pointer whitespace-nowrap rounded-lg border border-line-card bg-transparent px-3 py-1 text-center font-satoshi text-[14px] font-medium leading-[21px] text-txt-secondary transition-colors hover:border-line-strong hover:text-black">
            <span className="inline-flex items-center">Read more<Icon name="arrowRight" className="ml-1.5 mt-0.5 size-4" /></span>
          </span>
        </div>
      </div>
      <div className="order-1 w-full lg:order-2">
        <img alt={`Blog cover ${post.title}`} src={post.image} width="1200" height="758" className="h-auto w-full rounded-lg object-contain" />
      </div>
    </a>
  )
}

// Card used in the 3-up grid on /blog and "Recommended for you"
export function PostCard({ post, readTime = false }) {
  return (
    <a href={`/blog/${post.slug}`} className="flex w-full flex-col overflow-hidden rounded-xl rounded-b-lg border border-line-n2 hover:bg-surface-2">
      <div className="w-full">
        <img alt={`Cover image for ${post.title}`} src={post.image} width="1200" height="759" loading="lazy" className="h-auto w-full rounded-lg object-contain" />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <Label><span className="line-clamp-2">{post.category}</span></Label>
          <Dot />
          <Label>{post.date}</Label>
          {readTime && (<><Dot /><Label>{post.readTime || 8} min read</Label></>)}
        </div>
        <div className="font-inter text-500 font-medium text-txt-primary"><span className="line-clamp-2">{post.title}</span></div>
        <div className="mt-auto flex flex-wrap items-center gap-2"><Authors authors={post.authors} /></div>
      </div>
    </a>
  )
}

// Row in the filterable list (2 cols on lg)
export function PostRow({ post }) {
  return (
    <a href={`/blog/${post.slug}`} className="h-full w-full border-b border-line-n2">
      <div className="flex h-full w-full flex-col gap-6 rounded-xl px-0 py-8 hover:bg-surface-2 md:flex-row md:items-center md:px-8">
        <div className="w-full flex-shrink-0 md:w-1/3">
          <img alt="card image" loading="lazy" src={post.image} width="600" height="380" className="h-auto w-full rounded-lg object-contain" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2 md:hidden">
            <Label>{post.category}</Label>
            <div className="flex items-center gap-2"><Dot /><Label>{post.date}</Label></div>
          </div>
          <div className="font-inter text-500 font-medium text-txt-primary">{post.title}</div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="hidden md:block"><Label>{post.category}</Label></div>
            <div className="hidden items-center gap-2 md:flex"><Dot /><Label>{post.date}</Label></div>
            <Dot className="hidden md:block" />
            {post.authors.map((a, i) => (
              <span key={a} className="contents">
                {i > 0 && <Dot />}
                <Label weight="font-[430]">{a}</Label>
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}
