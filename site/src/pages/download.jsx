// /download — Download Plane (desktop + mobile apps) — plane.so/download.
import { A, Container, Heading, Page, Svg, Text, cx } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { Faq } from '../components/plans/Blocks.jsx'

const TAG = 'pl-bg-layer-3 rounded-md px-2 py-1 font-inter text-[11px] font-medium leading-none pl-c-tertiary'
const ROW_BTN = 'pl-bd-subtle inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border px-2 py-1 font-inter text-sm font-medium text-black transition-colors hover:bg-[#fafafa]'

function PlatformRow({ icon, name, href, action, soon }) {
  return (
    <div className="pl-bd-subtle flex flex-col gap-3 border-b py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="flex min-w-0 flex-1 gap-3">
        <span className="shrink-0 text-black">
          <Svg k={icon} size={20} className="shrink-0 text-black" />
        </span>
        <div className="flex min-w-0 flex-col gap-3">
          <p className="font-inter text-sm font-medium text-black">{name}</p>
          <div className="flex flex-wrap gap-3">
            <span className={TAG}>Cloud</span>
            <span className={TAG}>Self-hosted</span>
          </div>
        </div>
      </div>
      {soon ? (
        <span className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#f5fbff] px-2 py-1 font-inter text-sm font-medium text-[#006399]">Coming soon</span>
      ) : (
        <a className={ROW_BTN} href={href}>
          <Svg k={action === 'store' ? 'download_5' : 'download_1'} size={16} className="size-4" />
          {action === 'store' ? 'Open store' : 'Download'}
        </a>
      )}
    </div>
  )
}

function Platform({ image, alt, title, rows, order, id }) {
  return (
    <div className={cx('flex flex-col gap-8', order)}>
      <div className="pl-bg-surface-1 overflow-hidden rounded-xl">
        <div className="relative aspect-[596/324] w-full">
          <img className="absolute inset-0 h-full w-full object-contain object-bottom" src={A(image)} alt={alt} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1.5">
          <div id={id}>
            <Text size="lg" color="primary" weight="semibold" text={title} />
          </div>
        </div>
        <div>
          {rows.map((r) => (
            <PlatformRow key={r.name} {...r} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Qr({ img, alt, href, icon, label }) {
  return (
    <div className="pl-bd-subtle pl-bg-layer-1 flex flex-col items-center gap-6 rounded-xl border p-8">
      <div className="relative size-[152px]">
        <img className="absolute inset-0 h-full w-full object-contain" src={A(img)} alt={alt} />
      </div>
      <a className="pl-btn pl-btn-sm pl-btn-secondary" href={href}>
        <span className="inline-flex items-center gap-2">
          <Svg k={icon} size={20} className="shrink-0 text-black" />
          {label}
        </span>
      </a>
    </div>
  )
}

const FAQ = [
  ['[Mobile] Which Cloud plans support the mobile app?', 66],
  ['[Mobile] Which self-hosted plans support the mobile app?', 83],
  ['[Mobile] Is the Community Edition supported on mobile?', 60],
  ['[Mobile] Do I need a separate app for self-hosted instances?', 74],
  ['[Mobile] Are push notifications available on self-hosted?', 75],
  ['[Desktop] Which platforms does the desktop app support?', 195],
  ['[Desktop] Does the desktop app support self-hosted instances?', 55],
  ['[Desktop] Does the desktop app support Plane Cloud?', 45],
  ['[Desktop] Do I need a separate account for the desktop app?', 46],
  ['[Desktop] Are desktop push notifications available?', 137],
].map(([q, n], i) => ({ q, a: ph(n, 447 + i) }))

export default function Download() {
  return (
    <Page>
      <div className="min-h-screen font-inter">
        <Container>
          <header className="mx-auto flex max-w-3xl justify-center py-12 md:py-20">
            <div className="flex items-center gap-4 md:gap-6">
              <img className="h-[72px] w-[72px] md:h-[88px] md:w-[88px]" src={A('icon-artwork.svg')} alt="Plane logo icon" width="104" height="104" />
              <div className="text-left">
                <Heading size={1} text="Download Plane" />
                <Text text="The full workspace. On every device." />
              </div>
            </div>
          </header>
          <section className="pl-bd-subtle border-t py-12 md:py-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              <Platform
                order="order-2 md:order-1"
                id="download-desktop-heading"
                image="desktop.webp"
                alt="Plane desktop app showing projects and workspace"
                title="Download Plane for Desktop"
                rows={[
                  { icon: 'download_0', name: 'macOS (Universal)', href: 'https://go.plane.so/macos' },
                  { icon: 'download_2', name: 'Windows (x64)', soon: true },
                  { icon: 'download_3', name: 'Linux (AppImage)', href: 'https://go.plane.so/linux' },
                ]}
              />
              <Platform
                order="order-1 md:order-2"
                image="mobile.webp"
                alt="Plane mobile app on a phone"
                title="Download Plane for Mobile"
                rows={[
                  { icon: 'download_4', name: 'iOS', href: 'https://go.plane.so/app-store', action: 'store' },
                  { icon: 'download_6', name: 'Android', href: 'https://go.plane.so/play-store', action: 'store' },
                ]}
              />
            </div>
          </section>
          <section className="pl-bd-subtle flex flex-col gap-6 border-t py-12 md:py-20">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-2 text-center">
              <h2 className="pl-h pl-h3 pl-c-primary" id="download-qr-heading">
                Scan QR from your mobile
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <Qr img="app-store-qrcode.svg" alt="QR code to download Plane for iOS" href="https://go.plane.so/app-store" icon="download_4" label="App Store" />
              <Qr img="play-store-qrcode.svg" alt="QR code to download Plane for Android" href="https://go.plane.so/play-store" icon="download_6" label="Google Play" />
            </div>
          </section>
        </Container>
        <Faq eyebrow={null} title="FAQs" sub={ph(128, 446)} items={FAQ} />
      </div>
    </Page>
  )
}
