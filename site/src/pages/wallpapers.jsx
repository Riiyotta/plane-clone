// /wallpapers — desktop (16:9) and mobile (9:16) wallpaper grids. Measured live 2026-10-26.
// 1440: intro 58→371, desktop section 435→5548 (pattern big / pair), mobile section 5612→12740.
// Intro paragraphs are placeholder filler mimicking live word lengths.
// Download overlay: lg:opacity-0 → group-hover:opacity-100, image group-hover:scale-105 (300ms).
import '../components/company/company.css'

const A = '/assets/company/wallpapers/'
const SRC = 'https://images.plane.so/wallpapers/'
// desktop rows: number = full-width, [a, b] = two-up
const DESKTOP = [13, [12, 1], 2, [3, 4], 5, [6, 112], 8, [9, 10], 11]
const MOBILE_MD = [[1, 2], [3, 4, 5], [6, 7], [8, 9, 10], [11, 12], [13]]
const MOBILE_SM = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13]]

function DownloadBtn({ href }) {
  return (
    <a href={href} download target="_blank" rel="noopener noreferrer" className="btn-primary-dark !px-3 !py-1.5 !text-[14px] !leading-[21px]">Download</a>
  )
}

function Desktop({ n }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="relative aspect-video bg-[#f3f4f6]">
        <img src={`${A}wallpaper-${n}.webp`} alt="Plane desktop wallpapers wallpaper" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </div>
      <div className="absolute inset-0 transition-all duration-300">
        <div className="flex h-full flex-col items-end justify-end p-4 transition-all duration-300 group-hover:opacity-100 lg:opacity-0">
          <DownloadBtn href={`${SRC}desktop-wallpapers/wallpaper-${n}.webp`} />
        </div>
      </div>
    </div>
  )
}

function Mobile({ n }) {
  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <img src={`${A}mobile-${n}.webp`} alt="Plane mobile wallpapers wallpaper" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 transition-all duration-300">
        <div className="absolute bottom-4 right-4 transition-all duration-300 group-hover:opacity-100 lg:opacity-0">
          <DownloadBtn href={`${SRC}mobile-wallpapers/${n}.webp`} />
        </div>
      </div>
    </div>
  )
}

const COLS = { 1: '', 2: 'grid-cols-2', 3: 'grid-cols-3' }

export default function Wallpapers() {
  return (
    <div>
      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-2 pt-20 text-center">
          <h1 className="h2 text-txt-primary md:whitespace-pre-line">Wallpapers</h1>
          <div className="text-500 text-txt-primary">
            <span className="whitespace-pre-wrap">{`When your screen feels in sync with your work.\n\nAlso additional about all and workflow an accountability activity, both after, any complete across assignment case each. Easy alignment background are always as fact from: Consider commitment at ideally, give be can without, continue confidence.\n\nAgain goal: A writing alternative already, another day answer for decision by get along.`}</span>
          </div>
        </div>
        <div className="py-16">
          <div id="desktop-wallpapers">
            <div className="mb-16 space-y-4">
              <h4 className="c-heading c-h4 text-txt-primary md:whitespace-pre-line">Desktop Wallpapers</h4>
              <div className="space-y-4">
                {DESKTOP.map((r) => Array.isArray(r)
                  ? <div key={r.join('-')} className="grid grid-cols-1 gap-4 sm:grid-cols-2">{r.map((n) => <Desktop key={n} n={n} />)}</div>
                  : <Desktop key={r} n={r} />)}
              </div>
            </div>
          </div>
          <div id="mobile-wallpapers">
            <div className="mb-16 space-y-4">
              <h4 className="c-heading c-h4 text-txt-primary md:whitespace-pre-line">Mobile Wallpapers</h4>
              <div className="space-y-4 md:hidden">
                {MOBILE_SM.map((r) => <div key={r.join('-')} className="grid grid-cols-2 gap-4">{r.map((n) => <Mobile key={n} n={n} />)}</div>)}
              </div>
              <div className="hidden space-y-4 md:block">
                {MOBILE_MD.map((r) => <div key={r.join('-')} className={`grid gap-4 ${COLS[r.length]}`}>{r.map((n) => <Mobile key={n} n={n} />)}</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
