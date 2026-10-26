import Prose from './Prose.jsx'
import { Icon } from './icons.jsx'
import { smallBtn, useDocTitle } from './ui.jsx'
import { TEMPLATES_CATEGORIES, TEMPLATES_HERO, TEMPLATES_ITEMS } from './data/templates.js'
import { MARKETPLACE_CATEGORIES, MARKETPLACE_HERO, MARKETPLACE_ITEMS } from './data/marketplace.js'

const REQUEST_URL = 'https://sites.plane.so/intake/c7b12cfb73dc4040a623ddec658116bb/'
const BUILD_URL = 'https://developers.plane.so/dev-tools/build-plane-app/overview'

export const CATALOGS = {
  templates: {
    base: '/templates',
    title: 'Templates',
    wordmark: '/assets/collections/templates-light.svg',
    hero: TEMPLATES_HERO,
    categories: TEMPLATES_CATEGORIES,
    items: TEMPLATES_ITEMS,
    navLinks: [['Request a template', REQUEST_URL]],
    request: { title: 'Request a template', sub: "Can't find the template you're looking for?", button: 'Submit a request for a template' },
  },
  marketplace: {
    base: '/marketplace',
    title: 'Marketplace',
    wordmark: '/assets/collections/marketplace-light.svg',
    hero: MARKETPLACE_HERO,
    categories: MARKETPLACE_CATEGORIES,
    items: MARKETPLACE_ITEMS,
    navLinks: [['Build an app', BUILD_URL], ['Request an app', REQUEST_URL]],
    request: { title: 'Request an app', sub: "Can't find the app you're looking for?", button: 'Submit a request' },
  },
}

const chip = 'inline-flex rounded-full bg-surface-2 px-2.5 py-1 font-inter text-[12px] font-semibold leading-4 text-txt-secondary'

// Dark sticky sub-header ("Templates" / "Marketplace" wordmark + links)
export function CatalogSubHeader({ kind }) {
  const c = CATALOGS[kind]
  return (
    <header className="sticky top-[66px] z-30 bg-[#001b29] py-3 text-white lg:top-[58px]">
      <div className="container-page">
        <nav className="relative flex w-full items-center justify-between gap-2 py-2">
          <div className="w-64">
            <a href={c.base}><img alt="Plane" src={c.wordmark} width="120" height="20" className="h-6 w-auto hover:opacity-80" /></a>
          </div>
          <div className="hidden items-center gap-6 lg:flex">
            {c.navLinks.map(([label, href]) => (
              <div key={label} className="font-inter text-[14px] leading-[22.4px] text-txt-d-primary transition-all duration-300 hover:font-medium hover:text-white">
                <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

function CatalogCta({ kind }) {
  const isMp = kind === 'marketplace'
  return (
    <div className="pb-16">
      <div className="container-page">
        <div className="flex h-full w-full flex-col justify-between gap-6 rounded-lg bg-[#001b29] p-16 md:flex-row">
          <div className="flex w-full flex-col gap-6">
            <div className="relative size-12 shrink-0"><img alt="Plane" src="/assets/logo-light.svg" className="absolute inset-0 h-full w-full object-contain" /></div>
            <div className="mt-auto flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h5 className="font-satoshi text-[22px] font-[430] leading-[1.3] tracking-[-0.03em] text-white md:text-[24px]">{isMp ? 'Build your own app' : 'Request a template'}</h5>
                <div className="font-inter text-[14px] leading-[22.4px] text-white/50">
                  {isMp
                    ? 'Create an app just for your team or publish it on the Plane Marketplace for everyone to use.'
                    : 'Every team works differently. If you need a template we don’t have yet, let us know — we’ll build and share it.'}
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {isMp && (
                  <a target="_blank" rel="noreferrer" href={BUILD_URL} className="whitespace-nowrap rounded-lg bg-inverse px-3 py-1.5 text-center font-inter text-[14px] font-medium leading-[21px] text-white transition-colors hover:bg-inverse-hover">Build an app</a>
                )}
                <a target="_blank" rel="noreferrer" href={REQUEST_URL} className="whitespace-nowrap rounded-lg border border-dark-strong bg-dark-divider px-3 py-1.5 text-center font-inter text-[14px] font-medium leading-[21px] text-txt-d-secondary transition-colors hover:bg-dark-subtle">{isMp ? 'Request an app' : 'Request now'}</a>
              </div>
            </div>
          </div>
          {isMp && (
            <div className="md:w-[641px]"><img alt="Integrations" src="/assets/collections/marketplace-cta-dark.webp" width="616" height="493" loading="lazy" className="grid h-auto w-full rounded-xl" /></div>
          )}
        </div>
      </div>
    </div>
  )
}

function Svg({ html }) {
  return <span className="flex size-4 shrink-0 items-center justify-center [&>svg]:size-4" dangerouslySetInnerHTML={{ __html: html }} />
}

function ItemCard({ kind, item }) {
  const c = CATALOGS[kind]
  return (
    <a href={`${c.base}/${item.slug}`}>
      <div className="flex h-full flex-col gap-4 rounded-xl border border-line-n2 bg-white p-4 transition-all duration-300 hover:cursor-pointer hover:bg-surface-2">
        {item.preview && (
          <div className="relative h-44 flex-shrink-0 overflow-hidden rounded-lg border border-line-n2 bg-layer-1 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <img alt={item.name} src={item.preview} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        )}
        <div className="flex items-center gap-2">
          {item.letter ? (
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-line-n2 bg-surface-2 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
              <span className="font-satoshi text-[20px] font-semibold leading-[26px] tracking-[-0.6px] text-black">{item.letter}</span>
            </div>
          ) : (
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-line-n2 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
              <img alt={item.name} src={item.logo} width="48" height="48" loading="lazy" className="size-12 rounded-lg p-2" />
            </div>
          )}
          <div className="w-full">
            <div className="font-inter text-500 font-bold text-txt-primary"><div className="text-wrap">{item.name}</div></div>
            <div className="font-inter text-300 text-txt-primary"><div className="line-clamp-1 text-wrap">{item.by}</div></div>
          </div>
        </div>
        <div className="flex h-full flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="font-inter text-[14px] leading-[22.4px] text-txt-primary"><div className="line-clamp-2">{item.desc}</div></div>
          </div>
          <div className="mt-auto overflow-hidden">
            <div className="flex flex-wrap gap-1.5">{item.tags.map((t) => <span key={t} className={chip}>{t}</span>)}</div>
          </div>
        </div>
      </div>
    </a>
  )
}

const catSlug = (label) => label.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export function CatalogListing({ kind, category }) {
  const c = CATALOGS[kind]
  const cat = category ? c.categories.find((x) => x.slug === category) : c.categories[0]
  const active = cat || {
    slug: category,
    label: category,
    title: category.replace(/-/g, ' ').replace(/^\w/, (s) => s.toUpperCase()),
    desc: `No ${kind === 'templates' ? 'templates' : 'apps'} in this category yet.`,
  }
  useDocTitle(category ? `${active.title} • ${c.title}` : c.title)
  const items = category ? c.items.filter((it) => it.tags.some((t) => catSlug(t) === category)) : c.items

  return (
    <>
      <CatalogSubHeader kind={kind} />
      <div className="relative font-satoshi">
        <div className="relative">
          <div className="absolute inset-0 top-0 -z-10">
            <img alt="hero block bg" src="/assets/collections/hero-bg.webp" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="container-page">
            <div className="relative grid grid-cols-12 gap-4 py-16 md:gap-10">
              <div className="col-span-12 flex items-center justify-start md:col-span-6">
                <div className="w-full lg:max-w-[400px]">
                  <h1 className="font-satoshi text-[28px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-primary md:text-[40px]">{c.hero.h1}</h1>
                </div>
              </div>
              <div className="col-span-12 flex items-center justify-center md:col-span-6">
                <div className="font-inter text-500 text-txt-primary">{c.hero.sub}</div>
              </div>
            </div>
          </div>
        </div>
        <div id="list" className="relative scroll-mt-20 scroll-smooth">
          <div className="relative py-16">
            <div className="container-page">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
                <div className="col-span-1 lg:col-span-2">
                  <aside className="flex flex-col gap-14">
                    <div className="flex flex-col gap-5">
                      <div className="font-inter text-600 font-medium text-txt-primary">Categories</div>
                      <nav className="relative flex flex-row gap-3 overflow-hidden overflow-x-auto [scrollbar-width:none] lg:flex-col">
                        {c.categories.map((x) => {
                          const on = (x.slug || null) === (category || null)
                          const href = x.slug ? `${c.base}/categories/${x.slug}#list` : `${c.base}#list`
                          return (
                            <a key={x.label} href={href} className="group relative w-full cursor-pointer transition-colors">
                              <div className={`absolute left-0 h-full border-l-2 border-[#009ff5] ${on ? '' : 'opacity-0 transition-opacity duration-200 group-hover:opacity-100'}`} />
                              <div className={on ? 'pl-3 text-txt-accent transition-all duration-200' : 'pl-2 text-txt-tertiary transition-all duration-200 group-hover:translate-x-1 group-hover:text-txt-accent'}>
                                <div className="flex items-center gap-2">
                                  <Svg html={x.svg} />
                                  <div className="w-full">
                                    <div className={`font-inter text-[14px] leading-[22.4px] ${on ? 'font-[570] text-txt-accent' : 'text-txt-tertiary group-hover:text-txt-accent'}`}>
                                      <div className="text-nowrap text-left">{x.label}</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          )
                        })}
                      </nav>
                    </div>
                    <div className="hidden max-w-2xl flex-col gap-4 rounded lg:mr-10 lg:flex">
                      <div className="flex flex-col gap-1">
                        <div className="font-inter text-500 font-[570] text-txt-primary">{c.request.title}</div>
                        <div className="font-inter text-[14px] leading-[22.4px] text-txt-secondary">{c.request.sub}</div>
                      </div>
                      <a className="flex justify-start" href={REQUEST_URL} target="_blank" rel="noopener noreferrer">
                        <span className={smallBtn}>
                          <span className="flex items-center gap-2"><span>{c.request.button}</span><Icon name="external" className="h-4 w-4" /></span>
                        </span>
                      </a>
                    </div>
                  </aside>
                </div>
                <div className="col-span-1 lg:col-span-4">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <h6 className="font-satoshi text-[20px] font-[430] leading-[24px] tracking-[-0.4px] text-txt-primary">{active.title}</h6>
                      <div className="font-inter text-[14px] leading-[22.4px] text-txt-secondary">{active.desc}</div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {items.map((it) => <ItemCard key={it.slug} kind={kind} item={it} />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CatalogCta kind={kind} />
    </>
  )
}

function MetaGroup({ label, children }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-inter text-[14px] font-[570] leading-[22.4px] text-txt-primary">{label}</div>
      {children}
    </div>
  )
}

export function CatalogDetail({ kind, slug }) {
  const c = CATALOGS[kind]
  const found = c.items.find((it) => it.slug === slug)
  const name = slug ? slug.replace(/-/g, ' ').replace(/^\w/, (s) => s.toUpperCase()) : c.title
  const item = found || {
    slug,
    name,
    by: 'By Plane',
    desc: kind === 'templates' ? 'Project template for planning and tracking work in Plane.' : `Connect ${name} with your Plane workspace.`,
    tags: [],
    letter: name[0]?.toUpperCase(),
    logo: null,
    meta: [],
    cta: { label: kind === 'templates' ? 'Use Template' : 'Add to Plane', href: 'https://app.plane.so/' },
    blocks: [{ t: 'p', n: 400 }, { t: 'p', n: 380 }, { t: 'p', n: 200 }],
  }
  useDocTitle(`${item.name} • ${c.title}`)
  const isTpl = kind === 'templates'

  return (
    <>
      <CatalogSubHeader kind={kind} />
      <div className="border-b border-line-subtle bg-[url('/assets/collections/hero-bg.webp')] bg-cover bg-center bg-no-repeat py-16 font-satoshi">
        <div className="container-page">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              {isTpl || !item.logo ? (
                <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl border border-line-n2 bg-surface-2 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
                  <span className="font-satoshi text-[32px] font-semibold leading-[1.3] tracking-[-0.03em] text-black md:text-[44px]">{item.letter || item.name[0]}</span>
                </div>
              ) : (
                <div className="flex size-24 shrink-0 items-center justify-center rounded-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
                  <img alt={item.name} src={item.logo} width="80" height="80" className="size-20" />
                </div>
              )}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h1 className="font-satoshi text-[24px] font-[430] leading-[1.3] tracking-[-0.03em] text-txt-primary md:text-[32px]">{item.name}</h1>
                  <div className="font-inter text-[14px] leading-[22.4px] text-txt-secondary">{item.desc}</div>
                </div>
              </div>
            </div>
            <a target="_blank" rel="noreferrer" href={item.cta?.href}><span className="btn-primary">{item.cta?.label || (isTpl ? 'Use Template' : 'Add to Plane')}</span></a>
          </div>
        </div>
      </div>
      <div className="container-page font-satoshi">
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-[280px_1fr]">
          <aside className="flex flex-col gap-10">
            {item.meta.filter((m) => m.label === 'WEBSITE').map((m) => (
              <MetaGroup key={m.label} label={m.label}>
                <a className="font-inter text-[14px] leading-[22.4px] text-txt-accent hover:underline" href={m.values[0]} target="_blank" rel="noreferrer">{m.values[0]}</a>
              </MetaGroup>
            ))}
            <MetaGroup label="CATEGORY">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((t) => <a key={t} href={`${c.base}/categories/${catSlug(t)}`} className={`${chip} transition-colors hover:bg-layer-1`}>{t}</a>)}
              </div>
            </MetaGroup>
            {item.meta.filter((m) => m.label !== 'WEBSITE').map((m) => (
              <MetaGroup key={m.label} label={m.label}>
                {m.kind === 'chips' ? (
                  <div className="flex flex-wrap gap-1.5">{m.values.map((v) => <span key={v} className={chip}>{v}</span>)}</div>
                ) : m.kind === 'link' ? (
                  <a className="text-txt-accent hover:underline" href={m.href}>{m.values[0]}</a>
                ) : (
                  <div className="flex flex-wrap gap-1">
                    {m.values.map((v) => <div key={v} className="font-inter text-[14px] leading-[22.4px] text-txt-secondary">{v.endsWith(',') ? `${v} ` : v}</div>)}
                  </div>
                )}
              </MetaGroup>
            ))}
          </aside>
          <div className="min-w-0 max-w-none">
            <Prose blocks={item.blocks} className="cl-blog" density={1.08} seedBase={item.slug?.length || 0} />
          </div>
        </div>
      </div>
      <CatalogCta kind={kind} />
    </>
  )
}
