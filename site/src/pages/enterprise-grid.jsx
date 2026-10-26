// /enterprise-grid — Plane Enterprise Grid page (plane.so/enterprise-grid). Paragraph copy is placeholder.
import { Page } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { Bento, CardGrid, CtaBanner, Faq, HeroCentered, IconCards, Logos, ProgressAccordion } from '../components/plans/Blocks.jsx'
import { ENTERPRISE_FAQ } from '../components/plans/faqs.js'
import { img, learn } from '../components/plans/common.js'

const SALES = (label = 'Talk to Sales', variant = 'primary') => ({ label, href: '/talk-to-sales', variant })
const DEMO = SALES('Book a demo', 'secondary')

export default function EnterpriseGrid() {
  return (
    <Page>
      <HeroCentered
        eyebrow="MULTI-WORKSPACE GOVERNANCE WITH ENTERPRISE GRID"
        title={"Enterprise governance,\nacross every workspace"}
        sub={ph.lines([70, 68], 199)}
        buttons={[SALES('Request a trial license'), SALES('Talk to Sales', 'secondary')]}
      />
      <Logos />
      <ProgressAccordion
        bg="surface-1"
        header={{ eyebrow: 'Why Enterprise Grid', title: 'Built for the way enterprises operate', body: ph.lines([57, 62], 209), buttons: [SALES(), DEMO] }}
        items={[
          { title: 'Security and compliance built-in', body: ph(123, 229), image: img('screenshot-indetity-tabs-21701fbb.webp', 2464, 2464) },
          { title: 'Built to scale across teams and workspaces', body: ph(115, 230), image: img('screenshot-initiatives-tabs-c1f5028c.webp', 2464, 2464) },
          { title: 'AI that runs inside your rules', body: ph(104, 231), image: img('screenshot-plane-ai-tabs-c04c159c.webp', 2464, 2464) },
          { title: 'Deploy on your terms', body: ph(112, 232), image: img('screenshot-self-hosted-tabs-340890d1.webp', 2464, 2464) },
          { title: 'Migrate without disrupting', body: ph(145, 233), image: img('screenshot-imports-tabs-619d2e99.webp', 2464, 2464) },
        ]}
      />
      <CardGrid
        bg="surface-2"
        cols="lg:grid-cols-2"
        header={{ variant: 'center', eyebrow: 'MULTI-WORKSPACE GOVERNANCE', title: 'Your org structure, reflected\nin your workspace', body: ph.lines([52, 40], 219) }}
        cards={[
          { image: img('screenshot-workgraph-card-new.webp', 2464, 1644), title: 'Workspaces that mirror your org', body: ph(157, 234) },
          { image: img('screenshot-instance-admin-card.webp', 2464, 1644), title: 'A global policy layer across every workspace', body: ph(146, 235) },
        ]}
      />
      <Bento
        dark
        header={{ variant: 'center', eyebrow: 'Enterprise AI', title: ['Context-aware Enterprise AI,\norganization-wide governance', ''] }}
        rows={[
          {
            cols: 'md:grid-cols-2',
            cards: [
              { title: 'AI with full workspace context', body: ph(154, 236), image: img('screenshot-sidecar-bento.webp', 2336, 1404), fit: 'left' },
              { title: 'Agents that do real work', body: ph(154, 237), image: img('screenshot-agents-bento.webp', 2208, 1356), fit: 'inset' },
            ],
          },
          {
            cols: 'lg:grid-cols-3',
            cards: [
              { title: 'Enterprise AI search', body: ph(78, 238), image: img('screenshot-ai-search-bento-new.webp', 1480, 1416), fit: 'right' },
              { title: 'Enterprise AI governance', body: ph(66, 239), image: img('screenshot-ai-usage-bento.webp', 1484, 1416), fit: 'right' },
              { title: 'Self-hosted AI', body: ph(91, 240), image: img('screenshot-ai-code-bento-new.webp', 1484, 1460), fit: 'right' },
            ],
          },
        ]}
      />
      <CardGrid
        header={{ variant: 'center', eyebrow: 'Enterprise capabilities', title: 'Run your organization with more\ncontrol, consistency, and depth' }}
        cards={[
          { image: img('screenshot-workflows-grid.webp', 1612, 908), title: 'Govern how work flows', body: ph(94, 241) },
          { image: img('screenshot-automations-card.webp', 1612, 908), title: 'Automate the work around work', body: ph(87, 242) },
          { image: img('screenshot-pql-grid.webp', 1612, 908), title: 'Search and query across the system', body: ph(91, 243) },
          { image: img('screenshot-version-history-grid.webp', 1612, 908), title: 'Version control for configuration', body: ph(86, 244) },
          { image: img('screenshot-custom-apps-grid.webp', 1612, 908), title: 'Extend the platform your way', body: ph(94, 245) },
          { image: img('screenshot-compliance-grid.webp', 1612, 908), title: 'Standardize without forcing sameness', body: ph(92, 246) },
        ]}
      />
      <IconCards
        dark
        header={{ eyebrow: 'Migration and rollout', title: ['From pilot to production,\nwith white-glove support', ''], body: ph(135, 247), buttons: [SALES('Talk to a migration expert'), DEMO] }}
        cards={[
          { icon: 'beaker-02.svg', title: 'Migration proof of concept', body: ph(91, 248) },
          { icon: 'shield-filled.svg', title: 'Enterprise SLAs and support', body: ph(78, 249) },
          { icon: 'handshake-filled.svg', title: 'Work with trusted partners', body: ph(99, 250) },
        ]}
      />
      <CardGrid
        header={{ eyebrow: 'EXTENSIBILITY', title: 'Integrate, extend, and standardize with consistency', body: ph(102, 251) }}
        cards={[
          { image: img('marketplace-and-custom-apps.webp', 1611, 1612), title: 'Marketplace and private apps', body: ph(96, 252), link: learn('/marketplace', 'Browse marketplace apps →') },
          { image: img('api-webhook.webp', 1611, 1612), title: 'APIs, webhooks, and OAuth 2.0', body: ph(85, 253), link: learn('https://developers.plane.so/', 'Explore Developer docs →') },
          { image: img('script-runner-pql-1.webp', 1611, 1612), title: 'Script Runner + PQL', body: ph(112, 254), link: learn('/talk-to-sales', 'Get a demo →') },
        ]}
      />
      <IconCards
        bg="surface-2"
        card="layer-2"
        iconBorder="strong"
        header={{
          variant: 'center',
          eyebrow: 'SECURITY AND COMPLIANCE',
          title: 'Security and compliance,\nwithout compromise',
          buttons: [
            { label: 'Request security docs', href: 'https://security.plane.so/' },
            { label: 'Learn more', href: '/security', variant: 'secondary' },
          ],
        }}
        cards={[
          { icon: 'lock-01.svg', title: 'No model training on your data', body: ph(83, 255) },
          { icon: 'shield-tick.svg', title: 'Dedicated security expertise', body: ph(90, 256) },
          { icon: 'server-01.svg', title: 'Data sovereignty and control', body: ph(80, 257) },
          { icon: 'lock-keyhole-circle.svg', title: 'Enterprise-grade controls by default', body: ph(70, 258) },
          { icon: 'file-shield-02.svg', title: 'Enforceable commitments', body: ph(76, 259) },
          { icon: 'microscope.svg', title: 'Independently tested and certified', body: ph(87, 260) },
        ]}
      />
      <Faq title="Everything enterprise teams ask first" sub={ph(56, 261)} items={ENTERPRISE_FAQ} />
      <CtaBanner
        buttons={[
          { label: 'Try Plane today', href: 'https://app.plane.so/sign-up/' },
          { label: 'Talk to a migration expert', href: '/talk-to-sales', variant: 'secondary' },
        ]}
      />
    </Page>
  )
}
