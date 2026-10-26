// /ph-launch — Product Hunt launch thank-you page. Measured live 2026-10-26.
// 1440: hero 58→790 (732, bg image), CTA banner 790→1128 (338), launch-day cards 1128→1625 (497).
import { Btn, Eyebrow, IconCardGrid, SectionIntro } from '../components/company/Blocks.jsx'
import { BinocularsIcon, ScanSearchIcon, SearchIcon } from '../components/company/icons.jsx'

const A = '/assets/company/ph-launch/'
const CAL = 'https://calendar.google.com/calendar/u/0/r/eventedit?text=Plane+on+Product+Hunt+%7C+plane.so/ph-launch&dates=20251013T070100Z/20251013T080100Z&details=Plane+is+launching+on+Product+Hunt+%F0%9F%9A%80%0A%0AJoin+us+at+plane.so/ph-launch&location=https://plane.so/ph-launch'

const CARDS = [
  { icon: ScanSearchIcon, title: 'Plane community 1.0', sub: 'Our open-core platform is officially open to everyone.', body: 'Projects, work items, cycles, views, pages and everything you need to work is ready.' },
  { icon: SearchIcon, title: 'Startup and partner program', sub: 'Friendly pricing, quick setup, and we grow together.', body: "If you're a founder or partner, we'll help you ship faster with Plane." },
  { icon: BinocularsIcon, title: 'Plane marketplace', sub: 'Plug in the tools that help you work better, faster.', body: 'Browse templates, integrations, and workflows. Customize Plane to work exactly how you want.' },
]

export default function PhLaunch() {
  return (
    <>
      <div className="relative py-16">
        <div className="absolute inset-0 top-0 -z-10">
          <img src={A + 'hero-bg.webp'} alt="hero block bg" className="h-full w-full object-cover" />
        </div>
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-left">
              <Eyebrow block align="start" tone="secondary">Cloud • Self-hosted • Air-gapped</Eyebrow>
              <div className="space-y-4">
                <h1 className="h1 text-txt-primary md:whitespace-pre-line">Thank You for an Incredible Launch!</h1>
                <div className="text-600 text-txt-primary">
                  <p>Our Product Hunt launch was a success, and we couldn't have done it without you.</p>
                  <p>Your support and feedback are invaluable as we continue to build the future of project management—one workspace for all teams.</p>
                </div>
              </div>
            </div>
            <img src={A + 'PH_launch_Plane.webp'} alt="PH_launch_Plane.png" className="w-full" width="604" height="604" />
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-page">
          <div className="relative z-0 flex flex-col gap-8 overflow-hidden rounded-2xl bg-[#001b29] p-8 md:p-12">
            <div className="absolute left-0 top-0 z-0 h-full w-full">
              <img src={A + 'bg.webp'} alt="Plane" className="h-full w-full object-cover" />
            </div>
            <div className="relative z-10 flex flex-col gap-4 text-center">
              <h4 className="c-heading c-h4 text-txt-on-color md:whitespace-pre-line">Get notified + exclusive early bird perks 🚀</h4>
            </div>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5">
              <Btn variant="primary-dark" href={CAL}>Mark this on my calendar</Btn>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-12 py-16 lg:items-center">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <SectionIntro title="What to expect on launch day" body="No hype, just pure progress. Here's what's going live." />
          </div>
          <IconCardGrid items={CARDS} />
        </div>
      </div>
    </>
  )
}
