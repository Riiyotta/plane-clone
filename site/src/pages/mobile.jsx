// /mobile — Plane mobile apps page (plane.so/mobile). Paragraph copy is placeholder.
import { Page, Section, SectionHeader } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { Bento, CardGrid, CompareTable, CtaCard, Faq, HeroSplit, LogoStrip, STRIP_SELF_HOSTED, SplitFeature } from '../components/plans/Blocks.jsx'
import { faq } from '../components/plans/faqs.js'
import { img } from '../components/plans/common.js'

const CUST = (f) => ({ src: `${f}.svg`, w: 120, h: 100, alt: f })
const Y = true
const N = false

const FAQ = faq([
  ['Which Cloud plans support the mobile app?', 42],
  ['Which self-hosted plans support the mobile app?', 125],
  ['Is the Community Edition supported on mobile?', 60],
  ['Do I need a separate app for self-hosted?', 102],
  ['Are push notifications available on self-hosted?', 129],
  ['Can I switch between workspaces?', 163],
  ["A link isn't opening the app on iOS.", 146],
], 487)

export default function Mobile() {
  return (
    <Page>
      <HeroSplit
        eyebrow="Plane Mobile - iOS and Android"
        title="All of Plane, right in your pocket"
        sub={ph(104, 527)}
        buttons={[
          { label: 'Download on App Store', href: 'https://apps.apple.com/in/app/plane/id6657986465' },
          { label: 'Get it on Google Play', href: 'https://play.google.com/store/apps/details?id=com.plane.so', variant: 'secondary' },
        ]}
        image={img('screenshot-mobile-hero-706c6658.webp', 1232, 986)}
      />
      <LogoStrip
        caption={'Join 50,000+ teams\nthat actually enjoy work'}
        logos={{ desktop: ['mirador', 'rebiclique-francaise', 'power-integrations', 'aramco', 'accenture', 'amazon'].map(CUST), mobile: STRIP_SELF_HOSTED.mobile }}
      />
      <SplitFeature
        eyebrow="Optimized for away-from-keyboard work"
        title="Built for the moments between your deep work"
        body={ph(88, 528)}
        bullets={[
          { svg: 'mobile_0', text: 'Review and approve requests without reaching a desk' },
          { svg: 'mobile_1', text: 'Respond to your team and unblock work in seconds' },
          { svg: 'mobile_2', text: 'Capture ideas and create work from anywhere' },
        ]}
        image={img('screenshot-work-item-detail-cards-00226574.webp', 2464, 1972)}
      />
      <Bento
        bg="surface-2"
        cardBg="layer-2"
        header={{ variant: 'center', title: 'Your whole workspace travels with you' }}
        rows={[
          {
            cols: 'lg:grid-cols-3',
            cards: [
              { title: 'Projects & work items', body: ph(67, 529), image: img('screenshot-projects-bento-24db12f0.webp', 1360, 1404), fit: 'bottom' },
              { title: 'Wiki & docs', body: ph(66, 530), image: img('screenshot-wiki-bento-a205ea1b.webp', 1360, 1404), fit: 'bottom' },
              { title: 'Plane AI', body: ph(65, 531), image: img('screenshot-plane-ai-bento-90fc964c.webp', 1360, 1336), fit: 'inset' },
            ],
          },
        ]}
      />
      <SplitFeature
        rows={[
          {
            eyebrow: 'Inbox',
            title: 'Stay on top of your work',
            body: ph(112, 532),
            bullets: [
              { svg: 'mobile_3', text: 'Push notifications in realtime on Plane Cloud' },
              { svg: 'mobile_4', text: 'One Inbox across every workspace you belong to' },
              { svg: 'mobile_5', text: 'Catch up on everything that happened while you were away' },
            ],
            image: img('screenshot-inbox-cards-0b5185d8.webp', 2464, 1972),
          },
          {
            imageFirst: true,
            eyebrow: 'Capture',
            title: 'Capture work the moment it strikes',
            body: ph(127, 533),
            bullets: [
              { svg: 'mobile_2', text: 'New work items, pages, and projects from anywhere' },
              { svg: 'mobile_6', text: 'Assign members, priority, state, cycle, and module inline' },
              { svg: 'mobile_7', text: 'Full block toolbar for rich descriptions' },
            ],
            image: img('screenshot-create-cards-4ecae1c1.webp', 2464, 1972),
          },
          {
            eyebrow: 'Discuss',
            title: 'Unblock the team in a few taps',
            body: ph(90, 534),
            bullets: [
              { svg: 'mobile_1', text: 'Comments, replies, and reactions' },
              { svg: 'mobile_8', text: 'Swipe through sub-items, relations, links, and attachments' },
              { svg: 'mobile_6', text: 'Edit priority, state, and dates without a desk' },
            ],
            image: img('screenshot-catchup-cards-63e9377b.webp', 2464, 1972),
          },
        ]}
      />
      <CardGrid
        header={{ variant: 'center', eyebrow: 'Little things, big difference', title: 'Details that make mobile feel native', body: ph(77, 535) }}
        cards={[
          { image: img('screenshot-reactions-grids-696716c0.webp', 1612, 908), title: 'Replies & reactions', body: ph(108, 536) },
          { image: img('screenshot-stickies-grids-e0bd0ddb.webp', 1612, 908), title: 'Notes on work items', body: ph(71, 537) },
          { image: img('screenshot-edit-wiki-grids-0cacc93f.webp', 1612, 908), title: 'Edit the wiki on the go', body: ph(80, 538) },
          { image: img('screenshot-intake-grids-dd18c9a7.webp', 1612, 908), title: 'Create & triage requests', body: ph(86, 539) },
          { image: img('screenshot-timezone-grids-8ee897dc.webp', 1612, 908), title: 'Travel-aware timezone', body: ph(86, 540) },
          { image: img('screenshot-search-grids-54592f31.webp', 1612, 908), title: 'Search the whole workspace', body: ph(101, 541) },
        ]}
      />
      <CtaCard
        title="Why settle for legacy when you can self-host modern?"
        body={ph(125, 542)}
        buttons={[
          { label: 'Enable Plane AI', href: '/ai' },
          { label: 'Talk to a sales', href: '/talk-to-sales', variant: 'secondary' },
        ]}
        itemSvg="mobile_9"
        items={[
          'Summarize work items and long discussions',
          'Draft comments, descriptions, and updates',
          'Build mode — ask AI to do the hard work for you',
          '@mention AI agents to take on work items',
          'Web search — pull live answers from the internet',
        ]}
      />
      <Section className="py-16">
        <div className="flex flex-col gap-12">
          <SectionHeader variant="center" eyebrow="CLOUD, SELF-HOSTED & AIR-GAPPED" title="Runs wherever your Plane runs." body={ph(144, 543)} />
          <CompareTable
            columns={[{ label: 'Capability' }, { label: 'Plane Cloud' }, { label: 'Self-hosted' }, { label: 'Air-gapped' }]}
            rows={[
              { label: 'Full app — projects, work items, pages, comments, reactions', cells: [Y, Y, Y] },
              { label: 'Sign in (Cloud or self-hosted URL)', cells: [Y, 'v1.12.0 +', Y] },
              { label: 'Push notifications', cells: [Y, N, N] },
              { label: 'Deep links into the app', cells: [Y, N, N] },
              { label: 'Plane AI', cells: [Y, 'Coming soon', 'Coming soon'] },
            ]}
          />
        </div>
      </Section>
      <Faq eyebrow={null} title="FAQs" sub={ph(138, 544)} items={FAQ} />
    </Page>
  )
}
