// /testimonials — "Wall of love". Measured live 2026-10-26.
// 1440: hero 58→488 (430), logo row 488→653 (165), grid 652→2936 (2284, 3 cols, gap 24).
// Quotes are third-party prose → neutral placeholder text of the same length (content rule);
// names, handles, inline @mentions/links and source icons are kept.
import { HeroCentered, Btn } from '../components/company/Blocks.jsx'
import { ph } from '../components/company/placeholder.js'

const A = '/assets/company/testimonials/'
const LOGOS = [
  ['Sony-logo-color.png', 'Sony-logo-color', 18], ['Datum-logo-color.png', 'Datum-logo-color', 24], ['40au.webp', '40au logo', 24],
  ['Accenture-logo-color.webp', 'Accenture-logo-color', 27], ['dolby-logo-color.png', 'dolby-logo-color', 26],
  ['able-logo-color.png', 'able-logo-color', 37], ['publicgrid-logo-color.webp', 'publicgrid-logo-color', 18],
]
const ICON = { x: ['twitter-2.webp', 'twitter.png'], discord: ['discord.webp', 'discord.png'], reddit: ['reddit.webp', 'reddit.png'] }

// [name, handle, source, segments]; segment = number (placeholder length) | ' ' | [text, href] | 'br' | 'p'
const CARDS = [
  ['Clay Risser', '@risserclay', 'x', [['@_jakeCodes', 'https://x.com/_jakeCodes'], ' ', ['@linear', 'https://x.com/linear'], 21, ['plane.so', 'https://plane.so'], ' ', ['@planepowers', 'https://x.com/planepowers']]],
  ['BogDrakonov.eth 🏴', '@BogDrakonov', 'x', [4, ['@linear', 'https://twitter.com/linear'], 89, ['@planepowers', 'https://twitter.com/planepowers'], 40]],
  ['wings', '', 'discord', [130]],
  ['kelisidupf', '', 'discord', [94]],
  ['Albert', '', 'discord', [95]],
  ['Pandie', '', 'discord', [182]],
  ['Don_Sandman', '', 'discord', [98]],
  ['[RR-JsnMtth', '', 'discord', [170]],
  ['lsass.exe', '', 'discord', [82]],
  ['danielcdude', '', 'reddit', [141]],
  ['framvaren', '', 'reddit', [34, ['github.com/makeplane/plan...', 'https://github.com/makeplane/plane'], 'br', 'br', 87]],
  ['EntrepreneurRound53', '', 'reddit', [408]],
  ['The Ghost Lab', '', 'discord', [78]],
  ['Niran', '', 'discord', [149]],
  ['scottloadablecontent', '', 'discord', [99]],
  ['chsasank', '', 'discord', [67]],
  ['McHectic', '', 'discord', [21, 'br', 18]],
  ['MAHcodes', '', 'discord', [50]],
  ['DrH0rrible', '', 'reddit', [146]],
  ['ithanlara1', '', 'reddit', [20, ['github.com/makeplane/plan...', 'https://github.com/makeplane/plane'], 123, 'br', 'br', 145]],
  ['vanekgsa', '', 'reddit', [['Plane.so', 'https://plane.so/'], 9]],
]

function Body({ segs, seed }) {
  return segs.map((s, i) => {
    if (typeof s === 'number') return <span key={i}>{' ' + ph(Math.round(s * 0.95), seed + i) + ' '}</span>
    if (s === 'br' || s === 'p') return <br key={i} />
    if (typeof s === 'string') return s
    return <a key={i} href={s[1]} target="_blank" rel="noopener noreferrer" className="text-txt-accent hover:text-txt-accent/80">{s[0]}</a>
  })
}

export default function Testimonials() {
  return (
    <>
      <HeroCentered
        eyebrow="When they fell in love"
        title={'Our customers say\nthe nicest things about us'}
        sub="Over 1M+ users use Plane. See what some of them think about that."
        actions={<Btn href="https://senja.io/p/plane/r/GafXi3">Add your testimonial</Btn>}
      />
      <div className="py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-center gap-y-6 md:flex-nowrap">
            {LOGOS.map(([f, alt, h]) => (
              <div key={f} className="flex w-1/4 items-center justify-center px-4 transition-all hover:scale-110 md:w-full">
                <img src={A + f} alt={alt} width="100" height={h} className="h-auto w-[100px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-page">
        <div className="flex flex-col gap-4 py-16">
          <div className="flex flex-col items-center gap-4" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CARDS.map(([name, handle, src, segs], ci) => (
              <div key={name} className="flex h-full w-full max-w-full px-2">
                <div className="flex flex-1 flex-col justify-between gap-8 rounded-xl border border-line-subtle bg-surface-2 p-4">
                  <div className="flex flex-col">
                    <div className="text-600 text-txt-primary">{name}</div>
                    {handle && <div className="text-500 text-txt-tertiary">{handle}</div>}
                  </div>
                  <p className="text-500 text-txt-primary"><Body segs={segs} seed={ci} /></p>
                  <div className="flex w-full items-end justify-between gap-4">
                    <div className="flex-1" />
                    <div className="flex h-full max-h-6 max-w-32">
                      <img src={A + ICON[src][0]} alt={ICON[src][1]} width="24" height="24" loading="lazy" className="h-auto w-[15px] lg:w-[23px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
