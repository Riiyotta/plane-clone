// /view-demo — demo video stage + chapter list / transcript sidebar. Measured live 2026-10-26.
// At ≥lg the hero fills the viewport below the header (live: body is 100dvh flex; no footer on live).
// The film width follows plane.so's CSS-module rule (see company.css .vd-stage).
// Transcript lines are placeholder prose (content rule); chapter names + timestamps are live.
import { useState } from 'react'
import '../components/company/company.css'
import { ph } from '../components/company/placeholder.js'
import { ChevronDownIcon, PlayIcon, Share2Icon, TextIcon } from '../components/company/icons.jsx'

const A = '/assets/company/view-demo/'
const VIDEO_ID = 'NUEZaKG846Q'

// [n, title, start, [[time, placeholderLength], ...]]
const CHAPTERS = [
  ['01', 'Introduction', '0:00', [['0:02', 73], ['0:09', 99], ['0:18', 87]]],
  ['02', 'Work', '0:26', [['0:26', 119], ['0:37', 147], ['0:48', 134], ['1:00', 95], ['1:08', 90]]],
  ['03', 'Types and workflows', '1:15', [['1:15', 60], ['1:20', 99], ['1:28', 88], ['1:35', 78], ['1:43', 117], ['1:53', 53]]],
  ['04', 'Wiki', '1:58', [['1:58', 96], ['2:06', 143], ['2:17', 160], ['2:29', 137], ['2:43', 69]]],
  ['05', 'Plane AI', '2:50', [['2:50', 74], ['2:57', 85], ['3:05', 153]]],
  ['06', 'Agents', '3:19', [['3:19', 178], ['3:31', 146], ['3:43', 226], ['3:59', 165]]],
  ['07', 'Initiatives and dashboards', '4:11', [['4:11', 103], ['4:20', 87], ['4:26', 239], ['4:45', 118]]],
  ['08', 'Integrations', '4:55', [['4:56', 51], ['5:00', 89], ['5:09', 102]]],
  ['09', 'Moving to Plane', '5:20', [['5:21', 141], ['5:30', 223], ['5:46', 44]]],
  ['10', 'Recap', '5:50', [['5:50', 37], ['5:55', 128], ['6:04', 88]]],
]
const secs = (t) => t.split(':').reduce((a, b) => a * 60 + +b, 0)
const MONO = 'c-mono text-[13px] font-normal leading-5 text-txt-tertiary'

export default function ViewDemo() {
  const [start, setStart] = useState(null) // null = poster; number = playing from t
  const [transcript, setTranscript] = useState(false)
  const [toast, setToast] = useState(false)
  const play = (t = 0) => setStart(t)

  const share = async () => {
    try { await navigator.clipboard?.writeText(window.location.href) } catch { /* clipboard unavailable */ }
    setToast(true)
    setTimeout(() => setToast(false), 2000)
  }

  return (
    <section aria-labelledby="view-demo-title" className="vd-hero pb-10 pt-6 lg:pb-6 [@media(min-width:90rem)]:pt-8">
      <div className="container-page vd-container">
        <div className="vd-stage grid grid-cols-1 gap-y-4 lg:gap-x-6 lg:gap-y-0">
          <div className="flex min-w-0 max-w-[520px] flex-col gap-2 lg:col-span-2 lg:row-start-1 lg:mb-5 [@media(min-width:90rem)]:mb-6">
            <h1 id="view-demo-title" className="h2 text-txt-primary md:whitespace-pre-line">See Plane in action</h1>
            <p className="text-600 text-txt-secondary">How teams and agents use Work, Wiki, and AI</p>
          </div>

          {/* film */}
          <div className="min-w-0 max-lg:mx-auto max-lg:w-full max-lg:max-w-[calc((100svh-2rem)*16/9)] lg:col-start-1 lg:row-start-2">
            <div role="region" aria-label="Plane demo video" className="relative aspect-video overflow-hidden rounded-xl border border-[#E4E6E7] lg:rounded-2xl">
              {start === null ? (
                <>
                  <img src={A + 'poster.webp'} alt="The Plane demo: the Brightwell workspace with the Mobile app board open" className="absolute inset-0 h-full w-full cursor-pointer object-cover" onClick={() => play(0)} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button type="button" onClick={() => play(0)} className="relative inline-flex max-w-[calc(100%_-_24px)] cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-[rgba(9,11,12,0.92)] py-2.5 pl-3 pr-3.5 font-inter text-[14px] leading-[22.4px] text-white shadow-[0_8px_12px_rgba(0,0,0,0.18)] transition-[background-color,box-shadow] duration-150 hover:bg-[#090B0C] hover:shadow-[0_12px_24px_rgba(0,0,0,0.28)] lg:text-[16px] lg:leading-6">
                      <PlayIcon size={20} className="size-4 shrink-0 fill-white lg:size-5" />
                      <span className="truncate font-medium">Watch the demo</span>
                      <span className="shrink-0 font-430 text-[#CACDCE]">6 min 16 sec</span>
                    </button>
                  </div>
                </>
              ) : (
                <iframe
                  key={start}
                  title="Plane demo"
                  className="absolute inset-0 h-full w-full border-0"
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&start=${start}`}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:hidden">
            <a className="btn-primary" href="https://app.plane.so/sign-up/?utm_source=plane.so&utm_medium=view-demo&utm_content=hero">Try Plane Business for 14 days</a>
            <a className="btn-secondary" href="/talk-to-sales">Talk to a human →</a>
          </div>

          {/* sidebar */}
          <div className="relative min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-2">
            <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl border border-[#E4E6E7] bg-white font-inter lg:absolute lg:inset-0">
              <div className="flex shrink-0 items-center justify-between gap-3 border-b border-line-subtle px-4 pb-3.5 pt-4 lg:px-5 lg:py-3">
                <h2 className="text-[16px] font-medium leading-6 text-txt-primary">{transcript ? 'Transcript' : 'Jump to a chapter'}</h2>
              </div>
              {!transcript && (
                <ol className="flex flex-col lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
                  {CHAPTERS.map(([n, title, t]) => (
                    <li key={n} className="relative h-12 hover:bg-[#F7F7F8] lg:h-auto lg:min-h-8 lg:flex-1">
                      <button type="button" aria-label={`${title}, ${t}`} onClick={() => play(secs(t))} className="flex h-full w-full flex-col justify-center rounded-lg px-4 text-left lg:px-5">
                        <span className="grid w-full grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-3">
                          <span className="c-mono text-[13px] font-normal leading-5 text-[#676C6F]">{n}</span>
                          <span className="text-[15px] font-430 leading-[22px] text-txt-primary">{title}</span>
                          <span className="c-mono text-[13px] font-normal leading-5 text-[#676C6F]">{t}</span>
                        </span>
                      </button>
                    </li>
                  ))}
                </ol>
              )}
              {transcript && (
                <div id="view-demo-transcript" role="region" className="block lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
                  <div className="px-2 py-3 lg:px-3">
                    <div className="flex flex-col gap-5">
                      {CHAPTERS.map(([n, title, t, lines], ci) => (
                        <section key={n}>
                          <h3 className="flex items-baseline gap-3 px-2">
                            <span className={MONO}>{n}</span>
                            <span className="flex-1 font-inter text-[15px] font-medium leading-[22px] text-txt-primary">{title}</span>
                            <span className={MONO}>{t}</span>
                          </h3>
                          <div className="mt-1.5">
                            {lines.map(([lt, len], li) => (
                              <button key={lt + li} type="button" onClick={() => play(secs(lt))} className="grid min-h-11 w-full grid-cols-[44px_minmax(0,1fr)] gap-3 rounded-lg px-2 py-1.5 text-left font-inter text-[15px] leading-6 text-txt-secondary hover:bg-[#F7F7F8] lg:min-h-0">
                                <span className={MONO}>{lt}</span>
                                <span className="font-normal">{ph(len, ci * 3 + li)}</span>
                              </button>
                            ))}
                          </div>
                        </section>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="hidden shrink-0 flex-col gap-2 border-t border-line-subtle p-3 lg:flex">
                <a className="btn-primary" href="https://app.plane.so/sign-up/?utm_source=plane.so&utm_medium=view-demo&utm_content=hero">Try Plane Business for 14 days</a>
                <a className="btn-secondary" href="/talk-to-sales">Talk to a human →</a>
              </div>
            </div>
          </div>

          {/* actions under the film */}
          <div className="flex flex-col gap-2 lg:col-start-1 lg:row-start-3 lg:mt-3 lg:flex-row lg:items-center lg:gap-1">
            <button type="button" aria-expanded={transcript} aria-controls="view-demo-transcript" onClick={() => setTranscript(!transcript)} className={`inline-flex w-full items-center gap-2 rounded-xl border border-[#E4E6E7] px-4 py-3 font-inter text-[14px] font-medium leading-[22.4px] text-txt-primary hover:bg-[#F7F7F8] lg:w-auto lg:rounded-lg lg:border-0 lg:px-2 lg:py-1.5 lg:text-txt-secondary ${transcript ? 'lg:bg-[#F7F7F8]' : ''}`}>
              <TextIcon size={16} />
              <span className="flex-1 text-left lg:flex-none">{transcript ? 'Hide the transcript' : 'Read the transcript'}</span>
              <ChevronDownIcon size={16} className={transcript ? 'rotate-180' : ''} />
            </button>
            <button type="button" onClick={share} className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-2 py-1.5 font-inter text-[14px] font-medium leading-[22.4px] text-txt-secondary hover:bg-[#F7F7F8] max-lg:w-full max-lg:rounded-xl max-lg:border max-lg:border-[#E4E6E7] max-lg:px-4 max-lg:py-3 max-lg:text-txt-primary">
              <Share2Icon size={16} />
              Share this demo
            </button>
          </div>
        </div>
      </div>
      <div role="status" className="pointer-events-none fixed bottom-6 left-1/2 z-[110] -translate-x-1/2">
        {toast && <div className="rounded-lg bg-[#090b0c] px-3 py-2 text-[14px] text-white shadow-lg">Link copied</div>}
      </div>
    </section>
  )
}
