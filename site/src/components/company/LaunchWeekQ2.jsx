// Launch Week Q2 2026 (/launch-week/q2-2026; /launch-week redirects here on live). Measured 2026-10-26.
// Desktop (≥lg): 300vh section with a sticky full-screen storefront video (scroll-scrubbed on live),
// a bottom day timeline, and a slide-up day panel (fixed inset-0, translate-y-full → 0, 900ms ease-out).
// Mobile (<lg): live uses a full-screen snap container: hero image, then a coffee-packet carousel.
// Day titles, feature names and links are live; panel intro + feature descriptions are placeholder.
import { useState } from 'react'
import './company.css'
import { ph } from './placeholder.js'
import { ArrowLeftIcon } from './icons.jsx'

const A = '/assets/company/launch-week/'

// [date, packetName, badge, h2, introLen, link, panelBg, accent, [[feature, descLen], ...]]
export const DAYS = [
  ['May 11', 'First Light', 'Day 1', 'Work item, reimagined', 131, '/blog/new-work-item-detail-view-custom-relations-and-more', '#e6d9ce', '#cbae98', [['New work-item view', 45], ['Time in state and transitions', 108], ['Custom relations', 58], ['Subscribers', 52], ['Upvote / Downvote', 111]]],
  ['May 12', 'The Query', 'Day 2', 'Everything PQL', 218, '/blog/introducing-pql-and-enhanced-dashboards', '#e2deca', '#b5a37f', [['PQL, Plane Query Language', 101], ['Text to PQL using AI', 74], ['PQL in dashboards', 79], ['Enhanced dashboards, quick filters, table widget', 87], ['Interactive charts', 104]]],
  ['May 13', 'The Blend', 'Day 3', 'Releases', 152, '/blog/introducing-releases', '#e3d7cb', '#d1ae8b', [['Releases', 146], ['Advanced custom properties', 68]]],
  ['May 14', 'Open Notebook', 'Day 4', 'Wiki Collections', 168, '/blog/introducing-collections-and-ai-native-documentation', '#e4d6cc', '#bca596', [['Collections', 121], ['AI block', 108], ['Plane agent in Pages', 139]]],
  ['May 15', 'The Experiment', 'Day 5', 'Plane AI with Cursor and MCPs', 185, '/blog/introducing-mcp-connectors-and-cursor-agent', '#dfd2c0', '#bdae9a', [['Auto-run', 113], ['MCP connectors', 128], ['Cursor agent', 39], ['Bitbucket integration', 61]]],
  ['June 8', 'Cold Brew', 'Day 6', 'Plane Runner and Scheduled Automations', 237, '/blog/introducing-plane-runner-and-scheduled-automations', '#e2d5c9', '#ae9984', [['Plane Runner', 137], ['Scheduled automations', 92]]],
  ['June 9', 'The Estate', 'Day 7', 'Workspace Work Item Types and Hierarchy', 238, '/blog/introducing-workspace-work-item-types-hierarchy', '#e5d7ce', '#cf997c', [['Workspace work item types', 119], ['Workspace-level hierarchy', 102]]],
  ['June 10', 'Single Origin', 'Day 8', 'Granular Access Control, LDAP, and Group Sync', 228, '/blog/introducing-granular-access-control-gac-ldap-idp-group-sync', '#dad2c0', '#a1946b', [['Granular Access Control (GAC)', 96], ['LDAP authentication', 107], ['IdP Group Sync', 92]]],
  ['June 11', 'The Protocol', 'Day 9', 'Custom Workflows and Approval Flows', 281, '/blog/introducing-custom-workflows-and-approval-flows', '#dfccc0', '#d08c62', [['Custom Workflows', 96], ['Approval Flows', 111], ['Pre-validation', 129], ['Post-actions', 128]]],
  ['June 12', 'The Program', 'Day 10', 'Enterprise Grid Plan', 249, '/blog/introducing-enterprise-grid', '#e4d8cb', '#c8bcaf', [['Plane Runner', 128], ['Scheduled Automations', 106], ['Hierarchy', 126], ['Granular Access Control (GAC)', 87], ['LDAP and IdP group sync', 138], ['Custom Workflows and Approval Flows', 125]]],
]

function DayPanel({ day, open, onClose }) {
  const d = DAYS[day]
  const [, name, badge, title, introLen, link, bg, accent, feats] = d
  return (
    <div className={`fixed inset-0 z-40 overflow-y-auto text-white ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`min-h-full w-full transition-transform duration-[900ms] ease-out ${open ? 'translate-y-0' : 'translate-y-full'}`} style={{ backgroundColor: bg }}>
        <div className="container-page">
          <div className="relative flex min-h-screen w-full flex-col lg:h-screen">
            <div className="h-[89px] w-full shrink-0 max-lg:h-[69px]" />
            <div className="grid flex-1 grid-cols-1 gap-6 pb-10 lg:grid-cols-2 lg:gap-0">
              <div className="flex min-h-[420px] flex-col gap-6 lg:h-full lg:min-h-0 lg:pr-5">
                <div>
                  <button type="button" onClick={onClose} className="rounded-lg border border-black px-3 py-1 font-satoshi text-400 text-txt-primary">
                    <span className="inline-flex items-center gap-1"><ArrowLeftIcon size={14} /><span>Back</span></span>
                  </button>
                </div>
                <div className="flex h-[45vh] min-h-[340px] items-center justify-center p-0 sm:h-[58vh] sm:min-h-[420px] sm:p-2 lg:h-auto lg:min-h-0 lg:flex-1 lg:p-4">
                  <div className="mx-auto flex h-full w-full max-w-none items-center justify-center">
                    <img src={`${A}packet-${day + 1}.webp`} alt={`Day ${day + 1} packet, ${name}`} className="max-h-full w-auto max-w-[60%] object-contain" />
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center overflow-y-auto border-t pt-4 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0" style={{ borderColor: accent }}>
                <div className="w-full max-w-none lg:max-w-xl">
                  <div className="flex flex-col gap-3">
                    <div className="max-w-fit whitespace-nowrap rounded px-3 py-2 font-satoshi text-400 font-medium uppercase tracking-[0.2em] text-txt-primary shadow-sm" style={{ backgroundColor: accent }}>{badge}</div>
                    <h2 className="h2 text-txt-primary md:whitespace-pre-line">{title}</h2>
                  </div>
                  <div className="mt-2 pr-2">
                    <p className="font-satoshi text-[16px] font-medium leading-[26px] text-txt-primary">{ph(introLen, day)}</p>
                    <a href={link} className="mt-2 inline-flex rounded-lg bg-black px-4 py-2 font-satoshi text-400 font-medium text-white">Read what's new</a>
                    <div className="mt-10">
                      <p className="font-satoshi text-400 text-txt-primary">Features</p>
                      <div className="mt-4">
                        {feats.map(([f, len], i) => (
                          <div key={f} className="grid grid-cols-1 gap-2 py-3 md:grid-cols-2 md:gap-8" style={{ borderBottom: i < feats.length - 1 ? `1px solid ${accent}` : 'none' }}>
                            <p className="font-satoshi text-[16px] font-semibold leading-6 text-txt-primary">{f}</p>
                            <p className="font-satoshi text-[16px] font-normal leading-6 text-txt-primary">{ph(len, day * 7 + i)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LaunchWeekQ2() {
  const [open, setOpen] = useState(false)
  const [day, setDay] = useState(0)
  const [slide, setSlide] = useState(0)
  const show = (i) => { setDay(i); setOpen(true) }

  return (
    <div className="bg-black text-white">
      {/* ≥lg: scroll-scrubbed storefront */}
      <section className="relative hidden h-[300vh] w-full lg:block">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <video className="h-full w-full object-cover" src={A + 'day-10.mp4'} muted playsInline preload="auto" />
          {/* bottom day timeline (live: fades in once the scrub completes) */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#00000074] to-[#00000000] pb-12">
            <div className="h-24 w-full" />
            <div className="mx-auto w-full max-w-[1200px] px-6">
              <div className="border-t border-white/50 pt-3">
                <div className="flex justify-between gap-3 text-white">
                  {DAYS.map(([date, name], i) => (
                    <button key={date} type="button" onClick={() => show(i)} className="group relative flex min-w-0 cursor-pointer flex-col gap-1 text-left text-white/60 transition-colors hover:text-white">
                      <p className="font-satoshi text-[11px] uppercase leading-[16.5px] tracking-[0.18em]">{date}</p>
                      <p className="font-satoshi text-400">{name}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* scroll cue (live: fixed, hides after first scroll) */}
          <div className="pointer-events-none absolute bottom-7 left-1/2 z-[40] flex -translate-x-1/2 flex-col items-center gap-2 text-white">
            <span className="font-satoshi text-xs font-semibold uppercase tracking-[0.28em] text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]">Scroll</span>
            <span className="relative flex h-11 w-7 items-start justify-center rounded-full border border-white/70 bg-black/25 p-1 shadow-[0_0_30px_rgba(255,255,255,0.28)] backdrop-blur-sm">
              <span className="h-2.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.9)]" />
            </span>
            <span className="relative -mt-0.5 h-3 w-3 rotate-45 border-b-2 border-r-2 border-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.55)]" />
          </div>
        </div>
      </section>

      {/* <lg: hero image + packet carousel */}
      <div className="bg-white text-[#171717] lg:hidden">
        <section aria-label="Launch week hero" className="h-[100svh] w-full">
          <div className="relative h-full min-h-0 w-full">
            <img src={A + 'mobile-hero.webp'} alt="Launch Week — new features every day starting May 11, 2026. Plane storefront hero." className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </section>
        <section aria-label="Launch week days" className="flex h-[100svh] w-full flex-col overflow-hidden">
          <div className="flex h-full min-h-0 w-full flex-col overflow-hidden pb-4 pt-2">
            <div className="flex min-h-0 flex-1">
              <div className="c-scrollbar-none flex h-full w-full snap-x snap-mandatory items-center gap-14 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth px-6 py-2 sm:gap-20"
                onScroll={(e) => { const el = e.currentTarget; const w = el.firstElementChild?.nextElementSibling; if (w) setSlide(Math.round(el.scrollLeft / (w.offsetWidth + 56))) }}>
                <div className="pointer-events-none shrink-0 select-none snap-none [width:max(0px,calc((100%-clamp(150px,38vw,230px))/2))]" />
                {DAYS.map(([, name], i) => (
                  <div key={name} className="flex w-[clamp(150px,38vw,230px)] shrink-0 snap-center snap-always items-center justify-center">
                    <button type="button" aria-label={`${name}, day ${i + 1}`} onClick={() => show(i)} className="relative flex w-full items-center justify-center rounded-lg transition-transform active:scale-[0.99]">
                      <img src={`${A}packet-${i + 1}.webp`} alt={`Day ${i + 1} packet, ${name}`} className="mx-auto h-auto max-h-[64vh] w-full object-contain sm:max-h-[52vh]" />
                    </button>
                  </div>
                ))}
                <div className="pointer-events-none shrink-0 select-none snap-none [width:max(0px,calc((100%-clamp(150px,38vw,230px))/2))]" />
              </div>
            </div>
            <div className="flex shrink-0 justify-center px-3 pb-4 pt-1">
              <div role="tablist" aria-label="Launch days" className="flex max-w-full items-center justify-center gap-px">
                {DAYS.slice(0, 5).map(([, name], i) => {
                  const dist = Math.abs(i - (slide % 5))
                  const size = [8, 7, 6, 5, 4][dist]
                  return (
                    <button key={name} type="button" role="tab" aria-label={`Day ${i + 1}, ${name}`} className="flex h-10 w-7 shrink-0 touch-manipulation items-center justify-center">
                      <span className="block shrink-0 rounded-full" style={{ width: size, height: size, backgroundColor: dist === 0 ? '#0095F6' : '#909598' }} />
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col items-start gap-3 px-5 pb-20 text-left">
              <div className="text-600 text-txt-primary">{DAYS[slide]?.[0]}</div>
              <h3 className="c-heading c-h3 text-txt-primary" style={{ fontWeight: 600 }}>{DAYS[slide]?.[1]}</h3>
              <div className="w-full">
                <button type="button" onClick={() => show(slide)} className="btn-primary flex w-full justify-center !px-3 !py-1.5 !text-[14px] !leading-[21px]">Read more</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <DayPanel day={day} open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
