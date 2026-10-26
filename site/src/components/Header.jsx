import { useCallback, useEffect, useRef, useState } from 'react'
import './Header.css'
import { MENUS, PRODUCT, SOLUTIONS, RESOURCES } from './header/navData.js'
import { MENU_CONTENT, ColumnHeading, MenuItem } from './header/MegaMenuContent.jsx'
import { MenuIcon, XIcon, ChevronRight, ArrowUpRight } from './header/icons.jsx'

// CLONE_SPEC §0 Buttons — "Nav transparent" / "Nav primary" (6px 12px, 14/21, h 33)
const NAV_LINK =
  'rounded-lg px-3 py-1.5 text-center text-[14px] leading-[21px] whitespace-nowrap transition-colors text-txt-primary font-430 hover:bg-[rgba(0,20,20,0.05)]'
const NAV_PRIMARY =
  'rounded-lg px-3 py-1.5 text-center text-[14px] leading-[21px] whitespace-nowrap transition-colors font-medium bg-inverse text-white hover:bg-inverse-hover active:bg-inverse-active'

const PANEL_MS = 220
const SWAP_MS = 230

/* ---------------- Desktop (≥1024) — §1 ---------------- */
function DesktopHeader() {
  const [active, setActive] = useState(null) // trigger currently expanded
  const [rendered, setRendered] = useState(null) // menu shown in panel (persists through close anim)
  const [closing, setClosing] = useState(false)
  const [leaving, setLeaving] = useState(null) // previous menu during content swap
  const [swapped, setSwapped] = useState(false) // animate current content in (only on switch)
  const closeTimer = useRef()
  const swapTimer = useRef()

  const openMenu = useCallback((key) => {
    clearTimeout(closeTimer.current)
    setActive(key)
    if (rendered && !closing) {
      if (rendered === key) return
      clearTimeout(swapTimer.current)
      setLeaving(rendered)
      setSwapped(true)
      setRendered(key)
      swapTimer.current = setTimeout(() => setLeaving(null), SWAP_MS)
    } else {
      setClosing(false)
      setLeaving(null)
      setSwapped(false)
      setRendered(key)
    }
  }, [rendered, closing])

  const closeMenu = useCallback(() => {
    if (!rendered) return
    setActive(null)
    setClosing(true)
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => {
      setRendered(null)
      setClosing(false)
      setLeaving(null)
    }, PANEL_MS)
  }, [rendered])

  useEffect(() => {
    if (!active) return
    const onKey = (e) => e.key === 'Escape' && closeMenu()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, closeMenu])

  useEffect(() => () => { clearTimeout(closeTimer.current); clearTimeout(swapTimer.current) }, [])

  const Content = rendered && MENU_CONTENT[rendered]
  const Leaving = leaving && MENU_CONTENT[leaving]

  return (
    <div className="hidden lg:block" onMouseLeave={closeMenu}>
      <header className="border-b border-line-subtle bg-surface-1 py-3">
        <div className="relative z-50">
          <div className="container-page">
            <nav className="flex w-full items-center gap-6 xl:gap-8">
              <div className="relative shrink-0">
                <a href="/">
                  <img alt="Plane" width="96" height="20" src="/assets/logo-with-wordmark.svg" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2" id="dropdown-menu-wrapper">
                  {MENUS.map((m) => (
                    <div key={m.key} className="flex-shrink-0">
                      <button
                        type="button"
                        aria-expanded={active === m.key}
                        aria-haspopup="menu"
                        aria-controls="desktop-nav-dropdown-panel"
                        className="cursor-pointer"
                        onMouseEnter={() => openMenu(m.key)}
                        onClick={() => (active === m.key ? closeMenu() : openMenu(m.key))}
                      >
                        <div
                          className={`flex items-center gap-1 rounded-md px-3 py-0.5 transition-colors hover:bg-layer-1 ${
                            active === m.key ? 'bg-layer-1' : ''
                          }`}
                        >
                          <div className="text-400 font-430 text-txt-primary">{m.label}</div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex-shrink-0">
                  <a className={NAV_LINK} href="/pricing">Pricing</a>
                </div>
                <div className="flex-shrink-0">
                  <a className={NAV_LINK} href="/self-hosted">
                    Self-host <span className="hidden xl:inline">Plane</span>
                  </a>
                </div>
              </div>
              <div className="ml-auto flex shrink-0 items-center gap-2">
                <a className={NAV_LINK} href="/view-demo">View demo</a>
                <a className={NAV_LINK} href="/talk-to-sales">
                  <span className="xl:hidden">Sales</span>
                  <span className="hidden xl:inline">Contact sales</span>
                </a>
                <a className={NAV_LINK} href="https://app.plane.so/" target="_blank" rel="noreferrer">Login</a>
                <a className={NAV_PRIMARY} href="https://app.plane.so/sign-up" target="_blank" rel="noreferrer">
                  Get started free
                </a>
              </div>
            </nav>
          </div>

          {Content && (
            <div
              id="desktop-nav-dropdown-panel"
              className={`absolute inset-x-0 top-full z-40 flex h-screen flex-col ${closing ? 'pointer-events-none' : ''}`}
            >
              <div
                role="menu"
                className={`relative mt-3 overflow-hidden border-t border-line-subtle bg-white ${
                  closing ? 'nav-panel-out' : 'nav-panel-in'
                }`}
              >
                <div key={rendered} className={swapped ? 'nav-swap-in' : ''}>
                  <Content />
                </div>
                {Leaving && (
                  <div key={`out-${leaving}`} aria-hidden="true" className="nav-swap-out pointer-events-none absolute inset-x-0 top-0 bg-white">
                    <Leaving />
                  </div>
                )}
              </div>
              <div
                className={`flex-1 bg-[rgba(9,11,11,0.3)] ${closing ? 'nav-overlay-out' : 'nav-overlay-in'}`}
                onClick={closeMenu}
              />
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

/* ---------------- Mobile (<1024) — §1b ---------------- */
const MOBILE_ACCORDIONS = [
  { key: 'product', label: 'Product', columns: [PRODUCT.products, PRODUCT.features] },
  { key: 'solutions', label: 'Solutions', columns: SOLUTIONS.columns },
  { key: 'resources', label: 'Resources', columns: RESOURCES.columns },
]
const MOBILE_LINKS = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Self-hosted Plane', href: '/self-hosted' },
  { label: 'View demo', href: '/view-demo' },
  { label: 'Contact Sales', href: '/talk-to-sales' },
]
const ROW = 'flex w-full items-center justify-between px-4 py-4 text-500 font-570 text-txt-primary'

function MobileHeader() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState({})

  const iconBase = 'absolute inset-0 mt-1 size-5 transition-all duration-300 ease-in-out'

  return (
    <div className="relative block lg:hidden">
      <nav className={open ? 'relative flex h-[100vh] flex-col overflow-hidden bg-white' : 'relative'}>
        <header className="border-b border-line-n2 bg-white py-4">
          <div className="container-page">
            <div className="flex w-full items-center justify-between">
              <a href="/">
                <img alt="Plane" width="96" height="20" src="/assets/logo-with-wordmark.svg" />
              </a>
              <div className="flex items-center gap-3">
                <a className={NAV_PRIMARY} href="https://app.plane.so/">Get started free</a>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-label={open ? 'Close menu' : 'Open menu'}
                  className="relative size-6 cursor-pointer text-txt-primary"
                  onClick={() => setOpen((o) => !o)}
                >
                  <MenuIcon
                    size={24}
                    className={`${iconBase} ${open ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
                  />
                  <XIcon
                    size={24}
                    className={`${iconBase} ${open ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </header>

        {open && (
          <div className="flex h-full flex-col overflow-auto bg-white">
            {MOBILE_ACCORDIONS.map((a) => {
              const isOpen = !!expanded[a.key]
              return (
                <div key={a.key} className="border-b border-line-subtle">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className={ROW}
                    onClick={() => setExpanded((e) => ({ ...e, [a.key]: !e[a.key] }))}
                  >
                    {a.label}
                    <ChevronRight
                      size={20}
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
                    />
                  </button>
                  <div className="m-acc" data-open={isOpen}>
                    <div className="flex flex-col gap-4 px-4 pb-4">
                      {a.columns.map((c) => (
                        <div key={c.heading} className="flex flex-col gap-2">
                          <ColumnHeading href={c.href}>{c.heading}</ColumnHeading>
                          <div className="grid rounded">
                            {c.items.map((it) => <MenuItem key={it.title} item={it} />)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
            {MOBILE_LINKS.map((l) => (
              <div key={l.label} className="border-b border-line-subtle">
                <a href={l.href} className={ROW}>
                  {l.label}
                  <ArrowUpRight size={20} />
                </a>
              </div>
            ))}
            <div className="flex flex-col gap-4 border-y border-line-subtle p-4">
              <a className="btn-secondary w-full" href="https://app.plane.so/">Login</a>
              <a className="btn-primary w-full" href="https://app.plane.so/sign-up">Get started free</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default function Header() {
  return (
    <div className="sticky top-0 z-50 font-inter font-430">
      <DesktopHeader />
      <MobileHeader />
    </div>
  )
}
