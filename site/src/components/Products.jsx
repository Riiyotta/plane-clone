import { useCallback, useEffect, useRef, useState } from 'react'
import './products/Products.css'

// CLONE_SPEC §3 — one 48s looping video drives three 16s tab segments
const SEG = 16

const TABS = [
  {
    id: 'work',
    title: 'Work',
    icon: 'product-projects',
    lines: ['Plan projects, assign work items,', 'and track progress across teams.'],
    alt: 'A Plane board where a work item is assigned to an agent, reviewed by a person and moved to Done',
  },
  {
    id: 'wiki',
    title: 'Wiki',
    icon: 'product-wiki',
    lines: ['Build and maintain your org-wide', 'knowledge base. Specs, PRDs, and more.'],
    alt: 'A Plane wiki: collections in the library, a launch page with nested pages in columns, and a comment answered live in the page',
  },
  {
    id: 'ai',
    title: 'Plane AI',
    icon: 'product-ai',
    lines: ['Draft, analyze, plan with Plane AI.', 'Hand off work to agents.'],
    alt: 'Plane AI answering a question about a launch, asking for approval before it acts, then handing a work item to a coding agent that posts its update',
  },
]

// ASSET_MANIFEST §3 — <source> order AV1 then H.264; 2528 variants when width·DPR > 1400
const SOURCES = {
  1264: [
    ['/assets/hero-loop.v6.1264.av1.mp4', 'video/mp4; codecs="av01.0.05M.08"'],
    ['/assets/hero-loop.v6.1264.h264.mp4', 'video/mp4; codecs="avc1.640028"'],
  ],
  2528: [
    ['/assets/hero-loop.v6.2528.av1.mp4', 'video/mp4; codecs="av01.0.12M.08"'],
    ['/assets/hero-loop.v6.2528.h264.mp4', 'video/mp4; codecs="avc1.640033"'],
  ],
}

function PlayIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
    </svg>
  )
}

function PauseIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="14" y="3" width="5" height="18" rx="1" />
      <rect x="5" y="3" width="5" height="18" rx="1" />
    </svg>
  )
}

function shouldSkipAutoplay() {
  if (typeof window === 'undefined') return false
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  const saveData = navigator.connection?.saveData
  return Boolean(reduced || saveData)
}

export default function Products() {
  const stageRef = useRef(null)
  const videoRef = useRef(null)
  const barRefs = useRef([])

  const [active, setActive] = useState(0)
  const activeRef = useRef(0)
  const [variant, setVariant] = useState(null) // null until the lazy-load IO fires
  const [playing, setPlaying] = useState(false)
  const [shown, setShown] = useState(false) // video opacity: 0 until first `playing`
  const [manual, setManual] = useState(shouldSkipAutoplay) // reduced-motion / saveData / autoplay blocked

  const userPausedRef = useRef(false)
  const inViewRef = useRef(false)
  const manualRef = useRef(manual)
  manualRef.current = manual

  const tryPlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    const p = v.play()
    if (p && p.catch) {
      p.catch((err) => {
        if (err && err.name === 'NotAllowedError') setManual(true)
      })
    }
  }, [])

  const autoPlayIfAllowed = useCallback(() => {
    if (manualRef.current || userPausedRef.current || !inViewRef.current || document.hidden) return
    tryPlay()
  }, [tryPlay])

  // Progress bars: write transforms straight to the DOM every video frame
  const update = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    const t = v.currentTime
    const seg = Math.min(TABS.length - 1, Math.max(0, Math.floor(t / SEG)))
    if (seg !== activeRef.current) {
      activeRef.current = seg
      setActive(seg)
    }
    const p = Math.min(1, Math.max(0, (t - seg * SEG) / SEG))
    barRefs.current.forEach((bar, i) => {
      if (bar) bar.style.transform = `scaleX(${i === seg ? p : 0})`
    })
  }, [])

  // 1) Attach sources lazily (IO rootMargin 400px 0px)
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const w = stage.getBoundingClientRect().width
        setVariant(w * (window.devicePixelRatio || 1) > 1400 ? 2528 : 1264)
        io.disconnect()
      },
      { rootMargin: '400px 0px' },
    )
    io.observe(stage)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!variant) return
    const v = videoRef.current
    if (!v) return
    v.load()
    autoPlayIfAllowed()
  }, [variant, autoPlayIfAllowed])

  // 2) Play at ratio ≥ .12, pause at ≤ .02; pause while document hidden
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const io = new IntersectionObserver(
      ([entry]) => {
        const r = entry.intersectionRatio
        if (r >= 0.12) {
          inViewRef.current = true
          autoPlayIfAllowed()
        } else if (r <= 0.02) {
          inViewRef.current = false
          videoRef.current?.pause()
        }
      },
      { threshold: [0, 0.02, 0.12] },
    )
    io.observe(stage)
    const onVis = () => {
      if (document.hidden) videoRef.current?.pause()
      else autoPlayIfAllowed()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [autoPlayIfAllowed])

  // 3) Frame loop: requestVideoFrameCallback, rAF fallback
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const hasRVFC = 'requestVideoFrameCallback' in HTMLVideoElement.prototype
    let rvfcId = null
    let rafId = null
    let running = false

    const loop = () => {
      update()
      if (!running) return
      if (hasRVFC) rvfcId = v.requestVideoFrameCallback(loop)
      else rafId = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      if (rvfcId != null && hasRVFC) v.cancelVideoFrameCallback(rvfcId)
      if (rafId != null) cancelAnimationFrame(rafId)
      rvfcId = rafId = null
    }
    const onPlay = () => {
      setPlaying(true)
      stop()
      running = true
      loop()
    }
    const onPause = () => {
      setPlaying(false)
      stop()
      update()
    }
    const onPlaying = () => setShown(true)

    v.addEventListener('play', onPlay)
    v.addEventListener('pause', onPause)
    v.addEventListener('playing', onPlaying)
    v.addEventListener('seeked', update)
    return () => {
      stop()
      v.removeEventListener('play', onPlay)
      v.removeEventListener('pause', onPause)
      v.removeEventListener('playing', onPlaying)
      v.removeEventListener('seeked', update)
    }
  }, [update])

  const selectTab = (i) => {
    const v = videoRef.current
    activeRef.current = i
    setActive(i)
    barRefs.current.forEach((bar) => bar && (bar.style.transform = 'scaleX(0)'))
    userPausedRef.current = false
    setManual(false)
    if (!v) return
    v.currentTime = i * SEG
    tryPlay()
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      userPausedRef.current = true
      v.pause()
    } else {
      userPausedRef.current = false
      setManual(false)
      tryPlay()
    }
  }

  const startManual = () => {
    userPausedRef.current = false
    setManual(false)
    tryPlay()
  }

  const tab = TABS[active]

  return (
    <section aria-label="Products" id="products">
      <div className="container-page">
        <div className="mx-auto flex max-w-[1352px] flex-col">
          <div
            ref={stageRef}
            className="pt-stage group/stage relative aspect-[1352/760] w-full overflow-hidden rounded-[min(20px,1.5vw)] bg-stage-frame"
          >
            <img
              alt=""
              src="/assets/stage-texture.webp"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              id="home-v2-stage"
              role="tabpanel"
              aria-label={tab.alt}
              className="absolute top-[8.42%] bottom-0 left-[3.25%] w-[93.49%] overflow-hidden rounded-t-[min(12px,0.9vw)] bg-stage-window"
            >
              <img
                alt={tab.alt}
                src={`/assets/still-${tab.id}.v6.webp`}
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <video
                ref={videoRef}
                aria-hidden="true"
                tabIndex={-1}
                muted
                loop
                playsInline
                preload="none"
                disablePictureInPicture
                disableRemotePlayback
                className={`absolute inset-0 size-full object-cover object-top transition-opacity duration-300 ease-[cubic-bezier(.4,0,.2,1)] ${
                  shown ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {variant && SOURCES[variant].map(([src, type]) => <source key={src} src={src} type={type} />)}
              </video>
            </div>

            {manual ? (
              <button
                type="button"
                aria-label="Play the product walkthrough"
                onClick={startManual}
                className="absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/95 text-tab-dark shadow-[0_8px_24px_-6px_rgba(16,24,40,0.3)] transition-transform duration-150 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-txt-accent"
              >
                <PlayIcon className="size-5 translate-x-px fill-current" />
              </button>
            ) : (
              <button
                type="button"
                aria-label={playing ? 'Pause the product walkthrough' : 'Play the product walkthrough'}
                onClick={togglePlay}
                className={`absolute right-3 bottom-3 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white/90 text-tab-dark shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_2px_8px_-2px_rgba(16,24,40,0.25)] backdrop-blur transition-opacity duration-150 ease-[cubic-bezier(.4,0,.2,1)] focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-txt-accent [@media(hover:none)]:opacity-100 ${
                  playing ? 'opacity-0 group-hover/stage:opacity-100' : 'opacity-100'
                }`}
              >
                {playing ? (
                  <PauseIcon className="size-3.5 fill-current" />
                ) : (
                  <PlayIcon className="size-3.5 translate-x-px fill-current" />
                )}
              </button>
            )}
          </div>

          <div role="tablist" aria-label="Plane products" className="mt-8 grid w-full grid-cols-1 md:grid-cols-3">
            {TABS.map((t, i) => {
              const isActive = i === active
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="home-v2-stage"
                  onClick={() => selectTab(i)}
                  className={`group relative flex cursor-pointer items-start gap-3 border-t border-line-tab px-6 pt-7 pb-[30px] text-left transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-txt-accent md:min-h-32 ${
                    i > 0 ? 'md:border-l' : ''
                  } ${isActive ? '' : 'hover:bg-tab-hover'}`}
                >
                  <span
                    ref={(el) => (barRefs.current[i] = el)}
                    aria-hidden="true"
                    className="absolute top-[-1px] left-0 h-0.5 w-full origin-left bg-tab-dark"
                    style={{ transform: 'scaleX(0)' }}
                  />
                  <span
                    aria-hidden="true"
                    className={`flex size-6 shrink-0 items-center justify-center rounded-md transition-colors duration-200 ${
                      isActive ? 'bg-tab-dark' : 'bg-tab-box group-hover:bg-tab-box-hover'
                    }`}
                  >
                    <span
                      className={`size-3.5 transition-colors duration-200 ${isActive ? 'bg-white' : 'bg-tab-icon'}`}
                      style={{
                        maskImage: `url(/assets/${t.icon}.svg)`,
                        WebkitMaskImage: `url(/assets/${t.icon}.svg)`,
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                      }}
                    />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                    <span
                      className={`text-[18px] font-medium leading-6 tracking-[-0.01em] transition-colors duration-200 ${
                        isActive ? 'text-tab-dark' : 'text-tab-inactive group-hover:text-tab-dark'
                      }`}
                    >
                      {t.title}
                    </span>
                    <span
                      className={`pt-desc max-w-[360px] text-pretty text-[14px] font-normal leading-5 transition-colors duration-200 ${
                        isActive ? 'text-tab-icon' : 'text-[#8A8F94] group-hover:text-tab-icon'
                      }`}
                    >
                      <span className="pt-desc-line">{t.lines[0]}</span>{' '}
                      <span className="pt-desc-line">{t.lines[1]}</span>
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
