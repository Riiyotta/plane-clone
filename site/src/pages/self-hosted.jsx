// /self-hosted — Plane Self-hosted page (plane.so/self-hosted). Paragraph copy is placeholder.
import { InlineLink, Page } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { Bento, CardGrid, CheckColumns, CtaBanner, CtaCard, Faq, HeroCentered, IconCards, LogoStrip, ProgressTabs, SplitFeature } from '../components/plans/Blocks.jsx'
import { faq } from '../components/plans/faqs.js'
import { HUMAN, img } from '../components/plans/common.js'

const LICENSE = { label: 'Get your license', href: 'https://plane.so/pricing?mode=self-hosted' }

const FAQ = [
  ...faq([
    ['What hardware do I need to self-host Plane?', 338],
    ['Does self-hosted Plane need internet access?', 371],
    ['Can I turn off telemetry?', 311],
    ['How do I back up and restore Plane?', 337],
    ['How do self-hosted upgrades work?', 315],
    ['Can I use a local AI model?', 314],
  ], 262),
  {
    q: 'Can I migrate from Jira to self-hosted Plane?',
    a: (
      <>
        {ph(370, 322)} <InlineLink href="https://plane.so/blog/11-jira-alternatives-you-can-self-host-in-2026">Jira alternatives you can self-host</InlineLink>.
      </>
    ),
  },
]

export default function SelfHosted() {
  return (
    <div className="pl">
      <HeroCentered
        eyebrow="PLANE SELF-HOSTED"
        title="Self-hosted project management on your infrastructure"
        sub={ph.lines([68, 85], 302)}
        buttons={[LICENSE, HUMAN]}
        image={img('screenshot-self-hosted-hero-new-aa08d3ac.webp', 5024, 3088)}
      />
      <LogoStrip caption={['50,000+ teams run\nPlane in production', '']} />
      <CheckColumns
        header={{ eyebrow: 'BUILT FOR REGULATED TEAMS', title: 'Some work has to stay\ninside your walls', body: ph(177, 323), buttons: [LICENSE, HUMAN] }}
        columns={[
          { title: 'Minimal outbound by design', items: ['License and seat sync are the only required calls', 'All data and AI context stay in your perimeter', 'Every outbound call is logged and inspectable'] },
          { title: 'White-glove deployment and support', items: ['Deployment engineer support from day one', 'Enterprise SLA with guaranteed response times', 'Direct line for upgrades, audits, and incidents'] },
          { title: 'Telemetry you control', items: ['Every outbound call documented in public', 'Usage metrics toggle off from God Mode', 'Air-gapped ships with zero telemetry'] },
        ]}
      />
      <ProgressTabs
        header={{ variant: 'left', eyebrow: 'HOW IT INSTALLS', title: 'What self-hosting Plane looks like', body: ph(83, 324) }}
        items={[
          { title: 'Download and install the Commercial edition', body: ph(137, 325), image: img('screenshot-commercial-edition-tabs-f909a6a3.webp', 5024, 2152) },
          { title: 'Buy and activate the license', body: ph(151, 326), image: img('screenshot-prime-portal-tabs-a38997b7.webp', 5024, 2152) },
          { title: 'Configure in clicks on God Mode', body: ph(116, 327), image: img('screenshot-god-mode-tabs-07a74b02.webp', 5024, 2160) },
        ]}
      />
      <IconCards
        bg="surface-2"
        card="layer-2"
        iconBorder="strong"
        header={{ eyebrow: 'DEPLOYMENT METHODS', title: 'Deploy in minutes,\nscale to thousands', body: ph.lines([47, 54, 68], 312), buttons: [LICENSE, HUMAN] }}
        cards={[
          { icon: 'docker-opensource.svg', title: 'Docker Compose', body: ph(130, 328) },
          { icon: 'kubernetes.svg', title: 'Kubernetes (Helm Charts)', body: ph(119, 329) },
          { icon: 'settings-02-filled-gold.svg', title: 'Docker Swarm', body: ph(128, 330) },
          { icon: 'beaker-3.svg', title: 'Docker All-in-One', body: ph(110, 331) },
          { icon: 'cursor-3.svg', title: 'Managed platforms', body: ph(114, 332) },
          { icon: 'aws.svg', title: 'Official AWS Marketplace listing', body: ph(127, 333) },
        ]}
      />
      <SplitFeature
        dark
        bg="surface-2"
        eyebrow="Self-hosted AI"
        title={'AI that runs on\nyour infrastructure'}
        body={ph(104, 334)}
        buttons={[LICENSE, { label: 'Learn more', href: 'https://developers.plane.so/self-hosting/govern/plane-ai', variant: 'secondary' }]}
        bullets={[
          { src: 'chat-filled-1.svg', text: 'Prompts, responses, and actions logged locally' },
          { src: 'bar-filled-1.svg', text: 'Usage and spend analytics across workspaces' },
          { src: 'cursor-4.svg', text: 'Switch providers without a redeploy' },
        ]}
        image={img('abstract-selg-host-ai-cards-1.webp', 2464, 1972)}
      />
      <Bento
        dark
        rows={[
          {
            cols: 'md:grid-cols-2',
            cards: [
              { title: 'Bring your own LLM', body: ph(143, 335), image: img('screenshot-ai-models-bento.webp', 2208, 1356), fit: 'inset' },
              { title: 'Semantic search across everything', body: ph(119, 336), image: img('screenshot-ai-voice-bento.webp', 2208, 1356), fit: 'inset' },
            ],
          },
        ]}
      />
      <Bento
        header={{ variant: 'center', eyebrow: 'Cloud-grade, self-hosted', title: 'The full product, running on your infrastructure', buttons: [LICENSE, HUMAN] }}
        rows={[
          {
            cols: 'md:grid-cols-2',
            cards: [
              { title: 'A hierarchy that scales with your org', body: ph(79, 337), image: img('screenshot-initiatives-bento.webp', 2340, 1528), fit: 'right' },
              { title: 'A full Wiki, built in', body: ph(69, 338), image: img('screenshot-wiki-bento-a8f29ed8.webp', 2336, 1524), fit: 'right' },
            ],
          },
          {
            cols: 'lg:grid-cols-3',
            cards: [
              { title: 'Intake from every channel', body: ph(62, 339), image: img('screenshot-intake-bento.webp', 1484, 1404), fit: 'right' },
              { title: 'AI on your infrastructure', body: ph(76, 340), image: img('screenshot-sidecar-bento-1.webp', 1360, 1404), fit: 'bottom' },
              { title: 'Mobile apps for self-hosted', body: ph(96, 341), image: img('screenshot-mobile-app-bento.webp', 1360, 1404), fit: 'bottom' },
            ],
          },
        ]}
      />
      <CtaCard
        title="Plane for air-gapped environments"
        body={ph(112, 342)}
        buttons={[{ label: 'Deploy Plane Commercial', href: 'https://plane.so/pricing?mode=self-hosted' }, HUMAN]}
        items={[
          'License file activation',
          'Signed-offline bundle under 2GB',
          'Docker image cloning for internal registries',
          'Offline updates on your schedule',
          'Full Plane AI with local models',
          'Designed for classified networks and SCIF environments',
        ]}
      />
      <CardGrid
        header={{ variant: 'center', eyebrow: 'Out of the box', title: 'Self-hosted ships\nwith the full stack' }}
        cards={[
          { image: img('screenshot-github-stars-grids.webp', 1612, 908), title: 'Open source core', body: ph(69, 343) },
          { image: img('abstract-importers-grids.webp', 1612, 908), title: 'Ready importers', body: ph(94, 344) },
          { image: img('screenshot-webhooks-grids.webp', 1612, 908), title: 'Full REST API and webhooks', body: ph(93, 345) },
          { image: img('abstract-integrations-grids.webp', 1612, 908), title: 'Agents and integrations', body: ph(110, 346) },
          {
            image: img('screenshot-dev-docs-grids.webp', 1612, 908),
            title: 'Developer docs',
            body: (
              <>
                {ph(86, 347)} <InlineLink href="https://developers.plane.so/self-hosting/overview">developers.plane.so</InlineLink>.
              </>
            ),
          },
          { image: img('abstract-private-storage-buckets-grids.webp', 1612, 908), title: 'Signed file storage', body: ph(74, 348) },
        ]}
      />
      <Faq title="Common questions" sub={ph(36, 349)} items={FAQ} />
      <CtaBanner title="Run Plane on your infrastructure" sub="" buttons={[LICENSE, { label: 'Talk to a migration expert', href: '/talk-to-sales', variant: 'secondary' }]} />
    </div>
  )
}
