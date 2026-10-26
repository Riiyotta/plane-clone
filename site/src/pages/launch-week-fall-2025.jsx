// /launch-week-fall-2025 — hero + five alternating "card-block-horizontal" rows. Measured live 2026-10-26.
// 1440: hero 58→971 (913), each row 635 (py-16, image 588x470 + caption).
// Row descriptions are one-sentence product blurbs, kept as short list-level copy.
import { Btn, Caption, Eyebrow, HeroCentered } from '../components/company/Blocks.jsx'

const A = '/assets/company/launch-week-fall-2025/'
const ROWS = [
  { date: '17 . 11', title: 'Power K 2.0 + Shortcuts', body: 'Move across Plane, create work instantly, and stay in flow with a faster Power K and dozens of new keyboard shortcuts.', img: 'LW-Drop-1-Power-K.webp', alt: 'LW Drop 1 Power K', cta: ['Read blog', 'https://plane.so/blog/introducing-power-k-keyboard-first-navigation-and-actions'], cta2: ['Support on X', 'https://x.com/planepowers'] },
  { date: '18 . 11', title: 'Introducing Plane AI actions', body: 'Create work items, update projects, manage cycles, organize modules, generate documentation, and run multi-step flows — all through a conversation.', img: 'PI-Actions-Corrected-Update.webp', alt: 'PI Actions Update', cta: ['Read blog', 'https://plane.so/blog/introducing-plane-ai-actions'], cta2: ['Support on X', 'https://x.com/planepowers'] },
  { date: '19 . 11', title: 'React Router + Vite Migration', body: 'A faster, cleaner frontend engine — 12k+ files refactored for instant reloads and smoother development.', img: 'Next-to-Vite-Migration-Launch-Week.webp', alt: 'Next to Vite Migration Launch Week', cta: ['Read blog', 'https://plane.so/blog/why-did-we-migrate-plane-from-nextjs-to-react-router-vite'], cta2: ['See the community repo', 'https://github.com/makeplane/plane'] },
  { date: '20 . 11', title: 'Auto‑schedule Cycles', body: 'With Auto‑Schedule Cycles, Plane can now create and manage cycles for you — on your terms — so your team keeps a predictable rhythm.', img: 'Auto-Schedule-Cycles.webp', alt: 'Auto Schedule Cycles', cta: ['Try them now', 'https://app.plane.so'], cta2: ['Support on X', 'https://x.com/planepowers'] },
  { date: '21 . 11', title: 'Form Intake v2', body: <>Form Intake now supports <strong className="font-bold">custom work types</strong>, smarter routing, and a cleaner submission flow.</>, img: 'Form-Intake-v2.webp', alt: 'Form Intake v2', cta: ['Join Discord (to request Beta)', 'https://discord.com/invite/A92xrEGCge'], cta2: ['Support on X', 'https://x.com/planepowers'] },
]

function Row({ r, flip }) {
  const media = (
    <div className={`flex w-full flex-col gap-4 ${flip ? 'order-1 md:order-2' : ''}`}>
      <img src={A + r.img} alt={r.alt} className="w-full" width="588" height="470" />
      <Caption>{r.alt}</Caption>
    </div>
  )
  const text = (
    <div className={`flex flex-col items-start gap-6 ${flip ? 'order-2 md:order-1' : ''}`}>
      <div className="flex flex-col items-start gap-4">
        <Eyebrow tone="secondary">{r.date}</Eyebrow>
        <div className="flex flex-col gap-2">
          <h5 className="c-heading c-h5 text-txt-primary md:whitespace-pre-line">{r.title}</h5>
          <p className="text-500 text-txt-secondary">{r.body}</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Btn href={r.cta[1]}>{r.cta[0]}</Btn>
          <Btn variant="secondary" href={r.cta2[1]}>{r.cta2[0]}</Btn>
        </div>
      </div>
    </div>
  )
  return (
    <div id="card-block-horizontal">
      <div className="py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
            {flip ? <>{text}{media}</> : <>{media}{text}</>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LaunchWeekFall2025() {
  return (
    <>
      <HeroCentered
        eyebrow="One week. Five launches."
        title="Launch Week | Fall 2025"
        sub="Five straight days of product releases, upgrades, and surprises."
        actions={<Btn href="https://x.com/planepowers">Subscribe for updates on X</Btn>}
      >
        <figure className="flex flex-col">
          <img src={A + 'Launch-Week-Hero-All.webp'} alt="Launch Week Hero All" className="w-full" width="1256" height="409" />
          <figcaption className="c-label-xs mt-[72px] text-center font-satoshi italic text-txt-tertiary">Launch Week Hero All</figcaption>
        </figure>
      </HeroCentered>
      {ROWS.map((r, i) => <Row key={r.title} r={r} flip={i % 2 === 1} />)}
    </>
  )
}
