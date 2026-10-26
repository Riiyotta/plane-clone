// /airgapped — Plane air-gapped edition page (plane.so/airgapped). Paragraph copy is placeholder.
import { Container, Page } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { LogoStrip, STRIP_SELF_HOSTED } from '../components/plans/Blocks.jsx'
import { LFeatureSplit, LGrid, LHeader, LHero, LSplitCta, LTable } from '../components/plans/Legacy.jsx'
import { img } from '../components/plans/common.js'

const SALES = { label: 'Talk to Sales', href: '/talk-to-sales' }
const DEMO = { label: 'Book a demo', href: '/talk-to-sales', variant: 'secondary' }
const CUST = (f) => ({ src: `${f}.svg`, w: 120, h: 100, alt: f })

export default function Airgapped() {
  return (
    <Page>
      <LHero
        eyebrow="Your workspace, fully offline"
        eyebrowColor="secondary"
        title={'Enterprise project management, \rbuilt for air-gapped environments'}
        body={ph.lines([99, 81], 350)}
        buttons={[
          { label: 'Book a demo', href: '/talk-to-sales' },
          { label: 'Download the white paper', href: '/self-hosted/whitepaper#air-gapped', variant: 'secondary' },
        ]}
      />
      <LogoStrip
        caption={'Join 50,000+ teams\nthat actually enjoy work'}
        logos={{ desktop: ['mirador', 'rebiclique-francaise', 'power-integrations', 'aramco', 'accenture', 'amazon'].map(CUST), mobile: STRIP_SELF_HOSTED.mobile }}
      />
      <LFeatureSplit
        header={{ title: 'Project management inside your perimeter', body: ph(101, 360), buttons: [SALES, DEMO] }}
        items={[
          { icon: 'airgapped_0', title: 'True Air Gap Deployment', body: ph(125, 361) },
          { icon: 'airgapped_1', title: 'Enterprise Authentication', body: ph(118, 362) },
          { icon: 'airgapped_2', title: 'Performance at Scale', body: ph(121, 363) },
        ]}
        image={img('airgapped-max-security-desktop-light.webp', 2465, 1973)}
      />
      <LSplitCta
        title="Get help migrating to self-hosted Plane"
        body={ph(176, 364)}
        buttons={[{ label: 'Talk to us', href: '/talk-to-sales' }]}
        side={{ title: 'Compliance-ready documentation', body: ph(113, 365) }}
      />
      <Container>
        <div className="flex flex-col gap-12 py-16">
          <LHeader align="center" title="Why leading enterprises choose Plane Air-Gapped" body={ph(97, 366)} />
          <LTable
            columns={['Feature', 'Plane Airgapped', 'Jira Data Center (EOL announced)', 'Open Source PM']}
            rows={[
              { title: 'Modern User Experience', sub: 'Intuitive interface your teams will actually use', cells: [true, 'Outdated UI, now EOL', 'Varies; inconsistent UX'] },
              { title: 'True Air Gap Deployment', sub: 'Zero external dependencies. No data egress.', cells: [true, true, 'Varies; some rely on\n3rd-party integrations'] },
              { title: 'Enterprise Support & SLA', sub: '24/7 support with guaranteed response times', cells: [true, true, 'Community-only,\nno SLA guarantees'] },
              { title: 'Total Cost of Ownership', sub: 'Transparent pricing without per-user licensing', cells: [true, 'Expensive, per-user add-ons', true] },
              { title: 'Deployment Complexity', sub: 'One-click deployment with Docker/Kubernetes', cells: [true, 'Heavy, complex deployment', 'Fragmented docs and DIY ops'] },
              { title: 'Active Development', sub: 'Regular updates with new features and security patches', cells: [true, 'EOL, no active development', 'Irregular development cycles'] },
            ]}
          />
        </div>
      </Container>
      <LGrid
        variant="bordered"
        header={{ title: 'Built for security-first organizations', body: ph(104, 367) }}
        image={img('airgapped-security-first-org-desktop-light.webp', 2465, 1057)}
        cards={[
          { svg: 'airgapped_5', title: 'Financial Services', body: ph(147, 368) },
          { svg: 'airgapped_6', title: 'Defense & Government', body: ph(123, 369) },
          { svg: 'airgapped_7', title: 'Healthcare & Pharma', body: ph(131, 370) },
        ]}
      />
      <LFeatureSplit
        gapX="gap-x-32"
        listClass="grid gap-10 md:grid-cols-2"
        header={{ title: 'Enterprise-grade architecture', body: ph(103, 371), buttons: [SALES, DEMO] }}
        items={[
          { icon: 'airgapped_8', title: 'Deployment options', body: ph(102, 372) },
          { icon: 'airgapped_9', title: 'System requirements', body: ph(75, 373) },
          { icon: 'airgapped_10', title: 'Security features', body: ph(131, 374) },
          { icon: 'airgapped_2', title: 'Scalability and Performance', body: ph(89, 375) },
        ]}
        image={img('airgapped-enterprise-grade-architecture-desktop-light.webp', 2465, 1973)}
      />
      <LSplitCta
        title="The modern alternative to legacy air-gapped tools"
        body={ph(140, 376)}
        buttons={[{ label: 'Talk to us', href: '/talk-to-sales' }]}
        side={{ title: 'Migrate with confidence', body: ph(91, 377) }}
      />
    </Page>
  )
}
