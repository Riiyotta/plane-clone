import { PRODUCT, SOLUTIONS, RESOURCES } from './navData.js'
import { MaskIcon, ArrowUpRight, LogIn } from './icons.jsx'

// Shared pieces — CLONE_SPEC §1 "Mega-menu dropdown"
export function ColumnHeading({ children, href }) {
  const cls = 'block text-400 font-medium text-txt-tertiary md:pl-3'
  return href ? <a href={href} className={cls}>{children}</a> : <div className={cls}>{children}</div>
}

export function MenuItem({ item }) {
  return (
    <a href={item.href} className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-[rgba(0,20,20,0.05)]">
      <MaskIcon src={item.icon} className="mt-0.5 text-txt-primary transition-colors group-hover:text-txt-accent" />
      <div className="space-y-1">
        <div className="text-400 font-medium text-txt-primary transition-colors group-hover:text-txt-accent">{item.title}</div>
        <div className="text-300 font-430 text-txt-tertiary transition-colors group-hover:text-txt-secondary">{item.desc}</div>
      </div>
    </a>
  )
}

// Items stack at 70px pitch: 12 + 22.4 + 4 (space-y-1) + 19.5 + 12
function ItemList({ items, className = '' }) {
  return (
    <div className={`grid rounded ${className}`}>
      {items.map((it) => <MenuItem key={it.title} item={it} />)}
    </div>
  )
}

function Column({ heading, href, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <ColumnHeading href={href}>{heading}</ColumnHeading>
      {children}
    </div>
  )
}

function Chip({ href, icon, name, iconClass = '' }) {
  return (
    <a href={href}
      className="inline-flex items-center gap-1 rounded-lg bg-white/40 px-2 py-1 text-400 font-430 text-txt-primary backdrop-blur-xl transition-all duration-300 hover:scale-[1.01]">
      <img src={icon} alt="" width="16" height="16" className={`size-4 ${iconClass}`} />
      {name}
      <ArrowUpRight size={16} />
    </a>
  )
}

export function ProductMenu() {
  const { products, features, selfHost, integrations, changelog } = PRODUCT
  return (
    <>
      <div className="container-page">
        <div className="grid grid-cols-4 gap-9 py-10">
          <Column heading={products.heading}><ItemList items={products.items} /></Column>
          <Column heading={features.heading} className="col-span-2">
            <div className="grid grid-cols-2 gap-x-9">
              {features.items.map((it) => <MenuItem key={it.title} item={it} />)}
            </div>
          </Column>
          <div className="grid w-full gap-3">
            <a href={selfHost.href} className="flex flex-col gap-4 rounded-lg bg-layer-1 p-4 px-5">
              <MaskIcon src={selfHost.icon} className="text-txt-primary" />
              <div className="flex flex-col gap-1.5">
                <div className="text-400 font-medium text-txt-primary">{selfHost.title}</div>
                <div className="text-300 font-430 text-txt-secondary">{selfHost.desc}</div>
              </div>
            </a>
            <div className="flex flex-col gap-4 rounded-lg bg-cover bg-center px-5 py-4"
              style={{ backgroundImage: 'url(/assets/nav-product-bg.webp)' }}>
              <div className="text-500 font-430 text-txt-primary">Works with your stack</div>
              <div className="flex flex-col items-start gap-3">
                <div className="flex flex-wrap gap-2">
                  {integrations.map((c) => <Chip key={c.name} {...c} iconClass="brightness-0" />)}
                </div>
                <a href="/marketplace" className="text-400 font-430 leading-[21px] text-txt-primary hover:underline">Browse marketplace →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-line-subtle py-5">
        <div className="container-page flex items-center justify-between">
          <div className="flex min-w-0 items-center gap-2">
            <div className="line-clamp-1 min-w-0 max-w-xl">
              <div className="text-400 font-430 text-txt-primary">
                <span className="text-[color:oklch(.6766_.1665_243.91)]">New:</span> {changelog}
              </div>
            </div>
            <a href="/changelog"><div className="text-400 font-medium text-txt-accent">Learn more →</div></a>
          </div>
          <a href="/download" className="flex items-center gap-2 font-inter text-500 font-normal text-txt-accent">
            <LogIn size={16} className="rotate-90" />
            <div className="text-400 font-medium">Download the Plane app</div>
            →
          </a>
        </div>
      </div>
    </>
  )
}

export function SolutionsMenu() {
  return (
    <div className="container-page">
      <div className="grid grid-cols-4 gap-4 py-10">
        {SOLUTIONS.columns.map((c) => (
          <Column key={c.heading} heading={c.heading} href={c.href}><ItemList items={c.items} /></Column>
        ))}
        <div className="flex w-full flex-col justify-between gap-4 rounded-xl bg-cover bg-center bg-no-repeat p-5 px-6"
          style={{ backgroundImage: 'url(/assets/nav-discovery.webp)' }}>
          <div className="flex flex-col gap-3">
            <h5 className="font-satoshi text-[24px] font-430 leading-[1.3] tracking-[-0.03em] text-txt-primary [font-feature-settings:'cv05','cv08'_0,'ss02','ss03']">Discover why teams switch to Plane</h5>
            <p className="text-300 font-430 text-txt-secondary">See how Plane stacks up against the tools you know</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {SOLUTIONS.competitors.map((c) => <Chip key={c.name} {...c} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ResourcesMenu() {
  const { columns, latest } = RESOURCES
  return (
    <div className="container-page">
      <div className="grid grid-cols-4 gap-4 py-10">
        {columns.map((c) => (
          <Column key={c.heading} heading={c.heading}><ItemList items={c.items} /></Column>
        ))}
        <div className="col-span-2">
          <div className="grid h-full gap-10 lg:grid-cols-2">
            <a href={latest.href} className="group flex w-full flex-col items-start gap-3 rounded">
              <div className="text-400 font-medium text-txt-tertiary">Latest update</div>
              <div className="h-full w-full rounded-xl border border-line-subtle bg-cover bg-center p-4"
                style={{ backgroundImage: 'url(/assets/nav-bg-changelog.webp)' }}>
                <div className="h-full transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex min-w-0 flex-col gap-3">
                      <div className="text-400 font-medium text-txt-accent">{latest.tag}</div>
                      <div className="flex flex-col gap-2">
                        <div className="text-400 font-medium text-txt-primary"><span className="line-clamp-3 block">{latest.title}</span></div>
                        <div className="text-300 font-430 text-txt-secondary">{latest.date}</div>
                      </div>
                    </div>
                    <div className="mt-auto flex size-10 shrink-0 items-center justify-center rounded-lg border border-line-subtle bg-white text-txt-primary" aria-hidden="true">
                      <MaskIcon src={latest.icon} size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="/download" className="group flex w-full flex-col items-start gap-3 rounded">
              <div className="text-400 font-medium text-txt-tertiary">Download</div>
              <div className="h-full w-full overflow-hidden rounded-xl border border-line-subtle bg-surface-2 bg-cover bg-center p-4"
                style={{ backgroundImage: 'url(/assets/nav-bg-download.webp)' }}>
                <div className="h-full transition-transform duration-300 group-hover:scale-[1.01]">
                  <div className="flex flex-col gap-1 pt-2">
                    <div className="text-400 font-medium text-white">Plane on every device</div>
                    <div className="text-300 font-430 text-[#cfd2d3]">Download for Mac, Windows, iOS, and Android</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MENU_CONTENT = { product: ProductMenu, solutions: SolutionsMenu, resources: ResourcesMenu }
