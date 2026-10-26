// Shared template for the discount-program pages (/education, /nonprofits). Driven by a data object.
import { Page } from './ui.jsx'
import { LFaq, LFeatureSplit, LGrid, LHero, LLogoCloud, LSplitCta, LTabsAccordion } from './Legacy.jsx'

const LOGOS = ['Sony-logo-color.png', 'Datum-logo-color.png', 'hypersonica-logo-color.png', 'Accenture-logo-color.png', 'dolby-logo-color.png', null]
const STEP_ICONS = ['education_2', 'education_3', 'education_4']
const WHY_ICONS = ['education_5', 'education_6', 'education_7', 'education_8']

export default function ProgramPage({ d }) {
  return (
    <Page>
      <LHero align="split" eyebrow={d.hero.eyebrow} title={d.hero.title} body={d.hero.body} buttons={[{ label: d.hero.cta, href: '/talk-to-sales' }]} image={d.hero.image} />
      <LLogoCloud caption={d.logosCaption} logos={LOGOS} />
      <LGrid header={{ title: 'Who’s eligible', body: d.eligible.body }} cards={d.eligible.cards} />
      <LTabsAccordion header={{ title: d.tabs.title, body: d.tabs.body }} items={d.tabs.items} />
      <LGrid
        header={{ title: 'Let’s get started', body: d.steps.body, buttons: [{ label: 'Apply here', href: '/talk-to-sales' }] }}
        cards={d.steps.cards.map((c, i) => ({ ...c, svg: STEP_ICONS[i] }))}
      />
      <LFeatureSplit
        id="grid-default"
        header={{ eyebrow: d.why.eyebrow, title: d.why.title, body: d.why.body, buttons: [{ label: d.why.cta, href: '/talk-to-sales' }] }}
        items={d.why.items.map((it, i) => ({ ...it, icon: WHY_ICONS[i] }))}
        image={{ src: 'partners-why-partner-with-plane-desktop-light-2.png', w: 2465, h: 2465 }}
      />
      <LSplitCta darkButtons title={d.cta.title} body={d.cta.body} buttons={[{ label: d.cta.button, href: '/talk-to-sales' }]} side={{ title: 'See partner resources', body: d.cta.side }} />
      <LFaq items={d.faq} />
    </Page>
  )
}
