// /business — Plane Business plan page (plane.so/business). Paragraph copy is placeholder.
import { Page } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { AltRows, Bento, CardGrid, CtaBanner, Faq, HeroCentered, Logos, ProgressAccordion, ProgressTabs, SplitFeature, WideImage } from '../components/plans/Blocks.jsx'
import { BUSINESS_FAQ } from '../components/plans/faqs.js'
import { DELIGHT_CARDS, HUMAN, SELF_HOSTED_BULLETS, TRY, img, learn } from '../components/plans/common.js'

const TRY_BIZ = TRY('Try Plane Business for 14 days')

export default function Business() {
  return (
    <Page>
      <HeroCentered
        eyebrow="$13 per seat | 14-day free trial"
        title={['Plane Business, more power for', 'your teams and agents']}
        sub={ph.lines([72, 52], 165)}
        buttons={[TRY_BIZ, HUMAN]}
        image={img('screenshot-business-hero-9814b39a.webp', 5024, 2760)}
      />
      <Logos />
      <ProgressTabs
        header={{ variant: 'center', eyebrow: 'What unlocks in Business', title: 'Governance, agents, and\nvisibility in one plan', buttons: [TRY_BIZ, HUMAN] }}
        items={[
          { title: 'Enforce how work moves', body: ph(129, 175), image: img('screenshot-workflows-tabs-e1f6ea64.webp', 5024, 2152) },
          { title: 'Agents that ship', body: ph(134, 176), image: img('screenshot-ai-work-item-grid-1-77ee7d5f.webp', 5024, 2152) },
          { title: 'Dashboards that report up', body: ph(124, 177), image: img('screenshot-dashboards-tabs-f4f22ee2.webp', 5024, 2152) },
        ]}
      />
      <AltRows
        rows={[
          { eyebrow: 'INBOUND REQUESTS', title: 'Intake, triage, and execution in\none governed pipeline', body: ph(130, 178), image: img('screenshot-intake-cards-4f2a68e5.webp', 2464, 1644) },
          { eyebrow: 'WIKI AND PAGES', title: 'AI-powered Wiki that replaces\nyour docs tool entirely', body: ph(142, 179), image: img('screenshot-ai-pages-cards-1487e45a.webp', 2464, 1644), imageFirst: true },
        ]}
      />
      <WideImage
        header={{ variant: 'center', eyebrow: 'PLANE AI', title: 'AI that is always on,\nalways in context', body: '', buttons: [TRY_BIZ, HUMAN] }}
        image={img('screenshot-ai-work-item-grid-7a74be72.webp', 5024, 2160)}
      />
      <Bento
        header={{ variant: 'left', eyebrow: 'BUILT-IN INTELLIGENCE', title: 'Repetitive work, handled for you' }}
        rows={[
          {
            cols: 'md:grid-cols-2',
            cards: [
              { title: 'Duplicates caught before creation', body: ph(105, 180), image: img('screenshot-dedupes-bento-new.webp', 2460, 1272), fit: 'inset' },
              { title: 'One-click summaries across everything', body: ph(95, 181), image: img('screenshot-ai-summary-bento.webp', 2208, 1404), fit: 'bottom' },
            ],
          },
          {
            cols: 'lg:grid-cols-3',
            cards: [
              { title: 'First drafts, written and attached', body: ph(92, 182), image: img('screenshot-write-first-draft-bento.webp', 1300, 1404), fit: 'bottom' },
              { title: 'Incoming work, triaged automatically', body: ph(89, 183), image: img('screenshot-triage-bento-new-1.webp', 1360, 1356), fit: 'inset' },
              { title: 'Any block, rewritten in place', body: ph(76, 184), image: img('screenshot-ai-blocks-bento.webp', 1484, 1404), fit: 'right' },
            ],
          },
        ]}
      />
      <ProgressAccordion
        header={{ eyebrow: 'BUSINESS-ONLY FEATURES', title: 'Everything in Pro, plus the\nstructure to scale', body: ph(162, 185) }}
        items={[
          { title: 'Customer profiles', body: ph(110, 186), image: img('screenshot-customers-tabs-6f2c6e9b.webp', 2464, 2464) },
          { title: 'Recurring work items', body: ph(138, 187), image: img('screenshot-recurring-work-items-tabs-48ae1edb.webp', 2464, 2464) },
          { title: 'Project templates', body: ph(103, 188), image: img('screenshot-templates-tabs-83b71611.webp', 2464, 2464) },
          { title: 'Time tracking and management', body: ph(121, 189), image: img('screenshot-worklogs-tabs-e466ae89.webp', 2464, 2464) },
          { title: 'Intake via email and forms', body: ph(136, 190), image: img('screenshot-intake-forms-f346491e.webp', 2464, 2464) },
          { title: 'Nested pages', body: ph(89, 191), image: img('screenshot-nested-pages-tabs-313faff7.webp', 2464, 2464) },
        ]}
      />
      <SplitFeature
        dark
        eyebrow="Self-Hosted"
        title="Business-grade project management, inside your perimeter"
        body={ph(139, 192)}
        buttons={[
          { label: 'Get Business license', href: 'https://prime.plane.so/' },
          { label: 'See deployment options', href: '/self-hosted', variant: 'secondary' },
        ]}
        bullets={SELF_HOSTED_BULLETS('Air-gapped deployment available')}
        image={img('screenshot-self-hosted-items-12b930a9.webp', 2464, 1972)}
      />
      <CardGrid
        header={{ variant: 'center', eyebrow: 'DESIGNED FOR DELIGHT', title: 'Speed in every corner\nof the workspace', body: ph(158, 193), buttons: [TRY_BIZ, HUMAN] }}
        cards={DELIGHT_CARDS}
      />
      <CardGrid
        header={{ eyebrow: 'SECURITY AND COMPLIANCE', title: 'Enterprise-grade security, compliance, and control', body: ph(138, 194) }}
        cards={[
          { image: img('certified-project-management.webp', 1611, 1612), title: 'Certified across four compliance standards', body: ph(106, 195), link: learn('https://security.plane.so/', 'security.plane.so →') },
          { image: img('uptime-projectmanagement.webp', 1611, 1612), title: 'Fully committed uptime SLA', body: ph(103, 196), link: learn('https://status.plane.so/', 'status.plane.so →') },
          { image: img('authenticate-project-management.webp', 1611, 1612), title: 'Identity and access at every layer', body: ph(66, 197), link: learn('/for-enterprise', 'Plane for Enterprises →') },
        ]}
      />
      <Faq sub={ph(64, 198)} items={BUSINESS_FAQ} />
      <CtaBanner buttons={[TRY_BIZ, { label: 'Talk to a migration expert', href: '/talk-to-sales', variant: 'secondary' }]} />
    </Page>
  )
}
