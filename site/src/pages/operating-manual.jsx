// /operating-manual — long-form page: headings, eyebrows, item titles and images are live;
// every paragraph/body is neutral placeholder prose of matching length (PAGES_BRIEF content rule).
// Measured live 2026-10-26 at 1440: hero 58→950 (892), intro 950→1631 (681), philosophy 1632→2404 (772),
// workspace 2403→3236 (833), projects 3236→4069 (833), governance 4068→4901 (833), foundation 4901→5887 (986).
import { Eyebrow, HeroCentered, IconCardGrid, IconList, SectionIntro } from '../components/company/Blocks.jsx'
import { ph } from '../components/company/placeholder.js'

const A = '/assets/company/operating-manual/'

const INTRO_CARDS = [
  { title: 'Who is Plane built for?', body: ph(170, 1) },
  { title: 'How is Plane different?', body: ph(212, 2) },
  { title: 'What editions does Plane offer?', body: ph(142, 3) },
]
const PHILOSOPHY = [
  { img: 'project-management-see-essential-metrics.webp', alt: 'project-management-see-essential-metrics', eyebrow: 'One Workspace for All', title: 'Power without the configuration tax', len: 208 },
  { img: 'project-management-turn-on-desktop-light-1.webp', alt: 'project-management-turn-on-desktop-light', eyebrow: 'Context is King', title: 'Everything together, actually working together', len: 220 },
  { img: 'self-hosted-centralized-admin-desktop-light.webp', alt: 'self-hosted-centralized-admin-desktop-light', eyebrow: 'Momentum Over Motion', title: 'Scale and control—on your terms', len: 203 },
]
const GRIDS = [
  {
    eyebrow: 'Where work lives — Workspace', title: 'Everything in one workspace', len: 147,
    img: 'operating-manual-everything-in-one-workspace-desktop-light-2.webp', alt: 'operating-manual-everything-in-one-workspace-desktop-light-2',
    items: [['Projects', 159], ['Wiki', 130], ['AI (Pi)', 141], ['Initiatives', 128], ['Teamspaces', 124], ['Marketplace', 119]],
  },
  {
    eyebrow: 'How teams work — Projects', title: 'Organize and execute work', len: 126, reverse: true,
    img: 'operating-manual-organize-and-execute-desktop-light.webp', alt: 'operating-manual-organize-and-execute-desktop-light',
    items: [['Work Items', 124], ['Epics', 132], ['Cycles', 131], ['Modules', 121], ['Pages', 130], ['Layouts and Views', 123]],
  },
  {
    eyebrow: 'How admins govern — Governance & Control', title: 'Control, automate, and scale', len: 89,
    img: 'operating-manual-control-automate-scale-desktop-light.webp', alt: 'operating-manual-control-automate-scale-desktop-light',
    items: [['Workflows and Approvals', 128], ['Automations', 132], ['Dashboards', 134], ['Authentication & Security', 119], ['Views & Filters', 115], ['Intake', 127]],
  },
]
const FOUNDATION = [
  ['operating-manual-rock-solid-open-core-desktop-light.webp', 'Open at core', 99],
  ['operating-manual-rock-solid-enterprise-desktop-light.webp', 'Enterprise-grade security', 90],
  ['operating-manual-rock-solid-deploy-your-way-desktop-light.webp', 'Deploy your way', 100],
  ['operating-manual-rock-solid-seamless-support-desktop-light.webp', 'Seamless support', 85],
  ['operating-manual-rock-solid-extensive-doc-desktop-light.webp', 'Extensive documentation', 89],
  ['operating-manual-rock-solid-growing-marketplace-desktop-light.webp', 'Growing marketplace', 81],
]

function GridDefault({ g, seed }) {
  return (
    <div id="grid-default">
      <div className="container-page">
        <div className={`flex gap-x-32 gap-y-12 py-16 lg:items-center ${g.reverse ? 'flex-col-reverse lg:flex-row-reverse' : 'flex-col lg:flex-row'}`}>
          <div className="flex w-full flex-col gap-12">
            <SectionIntro eyebrow={g.eyebrow} title={g.title} body={ph(g.len, seed)} />
            <IconList items={g.items.map(([title, len], i) => ({ title, body: ph(len, seed + i + 1) }))} />
          </div>
          <div className="flex w-full flex-col gap-2">
            <img src={A + g.img} alt={g.alt} className="w-full" width="564" height="705" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OperatingManual() {
  return (
    <>
      <HeroCentered
        eyebrow="One Workspace, Infinite Momentum"
        title="The Plane Operating Manual"
        sub="A comprehensive guide to understanding Plane's philosophy, hierarchy, and unified approach to project management"
      >
        <img src={A + 'operating-manual-hero-desktop-light.webp'} alt="operating-manual-hero-desktop-light" className="w-full" width="1256" height="538" />
      </HeroCentered>

      <div id="introduction">
        <div className="container-page">
          <div className="flex flex-col gap-12 py-16 lg:items-center">
            <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <SectionIntro eyebrow="Introduction" title="What is Plane?" body={ph(162, 0)} />
              <div className="flex flex-col gap-2">
                <img src={A + 'operating-manual-what-is-plane-desktop-light.webp'} alt="operating-manual-what-is-plane-desktop-light" className="w-full" width="604" height="259" />
              </div>
            </div>
            <IconCardGrid items={INTRO_CARDS} />
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container-page">
          <div className="flex flex-col gap-12">
            <SectionIntro title="Core Philosophy" body={ph(217, 4)} />
            <div className="flex flex-col gap-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
                {PHILOSOPHY.map((c, i) => (
                  <div key={c.title}>
                    <div className="h-full overflow-hidden rounded-xl border border-line-subtle bg-surface-2 p-4 md:p-8">
                      <div className="flex h-full flex-col gap-6">
                        <img src={A + c.img} alt={c.alt} className="w-full" width="337" height="190" />
                        <div className="flex flex-col items-start gap-4">
                          <Eyebrow tone="secondary">{c.eyebrow}</Eyebrow>
                          <div className="flex flex-col gap-2">
                            <h6 className="c-heading c-h6 text-txt-primary md:whitespace-pre-line">{c.title}</h6>
                            <p className="text-400 text-txt-secondary">{ph(c.len, 5 + i)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {GRIDS.map((g, i) => <GridDefault key={g.title} g={g} seed={10 + i * 7} />)}

      <div className="py-16">
        <div className="container-page">
          <div className="flex flex-col gap-12">
            <SectionIntro title="Rock-solid foundation" body={ph(148, 3)} className="lg:pr-[69px]" />
            <div className="grid grid-cols-1 gap-6 gap-y-12 md:grid-cols-3">
              {FOUNDATION.map(([img, title, len], i) => (
                <div key={title} className="flex flex-col gap-5">
                  <img src={A + img} alt={img.replace('.webp', '')} className="w-full" width="403" height="227" />
                  <div className="flex flex-col gap-2">
                    <h6 className="c-heading c-h6 text-txt-primary md:whitespace-pre-line">{title}</h6>
                    <p className="text-400 text-txt-secondary">{ph(len, 8 + i)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
