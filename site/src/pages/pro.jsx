// /pro — Plane Pro plan page (plane.so/pro). Paragraph copy is placeholder (brief content rule).
import { Page } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { Bento, CardGrid, CtaBanner, Faq, HeroCentered, Logos, ProgressAccordion, SplitFeature } from '../components/plans/Blocks.jsx'
import { PRO_FAQ } from '../components/plans/faqs.js'
import { DELIGHT_CARDS, SELF_HOSTED_BULLETS, img, learn } from '../components/plans/common.js'


export default function Pro() {
  return (
    <Page>
      <HeroCentered
        eyebrow="$6 per seat   |   14-day free trial"
        title={['Plane Pro, structure and context', 'for modern teams']}
        sub={ph.lines([62, 64], 100)}
        buttons={[
          { label: 'Try Plane for 14 days', href: 'https://app.plane.so/sign-up/' },
          { label: 'Talk to a human', href: '/talk-to-sales', variant: 'secondary' },
        ]}
        image={img('screenshot-pro-hero-bbd64480.webp', 3768, 2070)}
      />
      <Logos />
      <CardGrid
        header={{ eyebrow: 'What unlocks in Pro', title: 'Every team works differently,\nPro makes that official', body: ph.lines([57, 35], 110) }}
        cards={[
          { image: img('screenshot-forms-wi-types-cards-new-1.webp', 1611, 1612), title: 'Define work your way', body: ph(87, 140), link: learn('/work-items') },
          { image: img('screenshot-wiki-cards-b9e32f59.webp', 1208, 1209), title: 'Keep context with execution', body: ph(79, 141), link: learn('/wiki') },
          { image: img('screenshot-dashboards-cards-new.webp', 1611, 1612), title: 'See execution across teams', body: ph(91, 142), link: learn('/dashboards') },
        ]}
      />
      <ProgressAccordion
        header={{ eyebrow: 'PRO FEATURES', title: 'Unlock depth as your\nteam grows', body: ph.lines([60, 34], 120) }}
        items={[
          { title: 'Time management and tracking', body: ph(111, 143), image: img('screenshot-worklogs-tabs-377b220f.webp', 2464, 2464) },
          { title: 'Reusable templates', body: ph(100, 144), image: img('screenshot-page-templates-tabs-61f3e7b3.webp', 2464, 2464) },
          { title: 'Published views', body: ph(99, 145), image: img('screenshot-publish-view-tabs-6c2c6e69.webp', 2464, 2464) },
          { title: 'Integrations and imports', body: ph(128, 146), image: img('screenshot-integrations-tabs-02fce9e2.webp', 2464, 2464) },
          { title: 'Intake and triage', body: ph(137, 147), image: img('screenshot-intake-tabs-c8cf9b56.webp', 2464, 2464) },
          { title: 'Custom exports', body: ph(96, 148), image: img('screenshot-exports-tabs-1763b4c2.webp', 2464, 2464) },
        ]}
      />
      <Bento
        dark
        header={{ variant: 'center', eyebrow: 'BUILT-IN INTELLIGENCE', title: 'AI that works where your\nteam already does', body: ph(82, 149) }}
        rows={[
          {
            cols: 'md:grid-cols-2',
            cards: [
              { title: 'Duplicates caught before creation', body: ph(105, 150), image: img('screenshot-dedupes-bento-1.webp', 2208, 1356), fit: 'inset' },
              { title: 'First drafts, written and attached', body: ph(92, 151), image: img('screenshot-sidecar-wiki-bento.webp', 2336, 1404), fit: 'left' },
            ],
          },
          {
            cols: 'lg:grid-cols-3',
            cards: [
              { title: 'Plane AI across your stack', body: ph(92, 152), image: img('screenshot-connect-apps-bento.webp', 1360, 1356), fit: 'inset' },
              { title: 'Open-source MCP, any client', body: ph(56, 153), image: img('screenshot-mcp-bento-1.webp', 1480, 1404), fit: 'right' },
              { title: 'AI-powered filters', body: ph(86, 154), image: img('screenshot-ai-filters-bento.webp', 1480, 1356), fit: 'right' },
            ],
          },
        ]}
      />
      <CardGrid
        header={{ variant: 'center', eyebrow: 'DESIGNED FOR DELIGHT', title: 'Speed in every corner\nof the workspace', body: ph.lines([73, 74], 130) }}
        cards={DELIGHT_CARDS}
      />
      <CardGrid
        bg="surface-2"
        header={{ eyebrow: 'AI-NATIVE PLATFORM', title: 'Agents, APIs, and integrations that work inside your stack', body: ph(144, 155) }}
        cards={[
          { image: img('connect-your-favorite-apps.png', 1611, 1612), title: 'Connect your favorite apps', body: ph(101, 156), link: learn('/marketplace') },
          { image: img('build-with-apis-and-webhooks.png', 1611, 1612), title: 'Build with APIs and webhooks', body: ph(106, 157), link: learn('https://developers.plane.so/api-reference/introduction') },
          { image: img('bring-your-own-agents.png', 1611, 1612), title: 'Bring your own agents', body: ph(109, 158), link: learn('/ai') },
        ]}
      />
      <SplitFeature
        dark
        eyebrow="Self-Hosted"
        title={"Pro capabilities for self-hosted\nproject management"}
        body={ph(139, 159)}
        buttons={[
          { label: 'Get Pro license', href: 'https://prime.plane.so/' },
          { label: 'See deployment options', href: '/self-hosted', variant: 'secondary' },
        ]}
        bullets={SELF_HOSTED_BULLETS()}
        image={img('screenshot-self-hosted-deployment-cards-d3a21c15.webp', 2464, 1972)}
      />
      <CardGrid
        header={{ eyebrow: 'SECURITY AND COMPLIANCE', title: 'Enterprise-grade security, compliance, and control', body: ph(138, 160) }}
        cards={[
          { image: img('certified-project-management.webp', 1611, 1612), title: 'Certified across four compliance standards', body: ph(106, 161), link: learn('https://security.plane.so/', 'security.plane.so →') },
          { image: img('uptime-projectmanagement.webp', 1611, 1612), title: 'Infrastructure that stays up', body: ph(89, 162), link: learn('https://status.plane.so/', 'status.plane.so →') },
          { image: img('illlustration-pro-security-cards-new.webp', 1611, 1612), title: 'Access that follows the work', body: ph(110, 163), link: learn('/talk-to-sales', 'Learn more →') },
        ]}
      />
      <Faq sub={ph(58, 164)} items={PRO_FAQ} />
      <CtaBanner />
    </Page>
  )
}
