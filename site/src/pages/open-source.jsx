// /open-source — Plane Community Edition page (plane.so/open-source). Paragraph copy is placeholder.
import { InlineLink, Page, Section, SectionHeader } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { Bento, CardGrid, CompareTable, CtaBanner, CtaCard, Faq, HeroSplit, IconCards, LogoStrip, ProgressAccordion, ResourceColumns } from '../components/plans/Blocks.jsx'
import { faq } from '../components/plans/faqs.js'
import { img, learn } from '../components/plans/common.js'

const LOGO = (src, w, h) => ({ src, w, h, alt: src.replace(/\.\w+$/, '') })
const OS_LOGOS = {
  desktop: [LOGO('tencent-logo-svgrepo-com.svg', 125, 16), LOGO('Accenture-logo-color.png', 100, 23), LOGO('microsoft-svgrepo-com.svg', 113, 24), LOGO('amazon-com-logo-svgrepo-com.svg', 127, 24), LOGO('grok.svg', 82, 26)],
  mobile: ['tencent-logo-svgrepo-com.svg', 'Accenture-logo-color.png', 'microsoft-svgrepo-com.svg', 'amazon-com-logo-svgrepo-com.svg', 'grok.svg'].map((f) => LOGO(f, 100, 32)),
}

const Y = true
const N = false
const TABLE = {
  columns: [
    { label: 'Capability' },
    { logo: { src: 'plane-logo.svg', w: 95, h: 20, alt: 'plane-logo svg' } },
    { logo: { src: 'openproject.svg', w: 278, h: 53, alt: 'Open Project' } },
    { logo: { src: 'taiga.svg', w: 83, h: 34, alt: 'taiga' } },
    { logo: { src: 'lean-time.svg', w: 101, h: 27, alt: 'lean-time svg' } },
    { logo: { src: 'wekan.svg', w: 84, h: 24, alt: 'wekan svg' } },
  ],
  rows: [
    { label: 'Multiple layout views', cells: [Y, N, N, N, N] },
    { label: 'Built-in docs', cells: [Y, Y, Y, N, N] },
    { label: 'Intake and triage', cells: [Y, N, N, N, N] },
    { label: 'Free cloud tier', cells: [Y, N, N, Y, N] },
    { label: 'Cycles / sprint planning', cells: [Y, Y, Y, Y, N] },
    { label: 'Modules', cells: [Y, N, N, N, N] },
    { label: 'Kubernetes with Helm', cells: [Y, Y, N, N, N] },
    { label: 'Progressive complexity', cells: [Y, Y, N, N, N] },
    { label: 'Command K navigation', cells: [Y, N, N, N, N] },
    { label: 'API and webhooks', cells: [Y, Y, Y, Y, Y] },
    { label: 'Minimum users for paid', cells: [Y, N, Y, Y, Y] },
    { label: 'GitHub stars', cells: ['60,000+', '16,000+', '3,000+', '11,700+', '21,100+'] },
    { label: 'License', cells: ['AGPL-3.0', 'GPL-3.0', 'MPL-2.0', 'AGPL-3.0', 'MIT'] },
  ],
}

const FAQ = faq([
  ['What is Plane?', 257],
  ['What open source license does Plane use?', 117],
  ["What features are in Plane's free Community Edition?", 133],
  ['How do I self-host Plane?', 174],
  ['Is Plane a good open source alternative to Jira?', 152],
  ['What is the difference between Community and Commercial Edition?', 214],
  ['Can I use Plane in an air-gapped environment?', 144],
  ['How does Plane compare to OpenProject?', 227],
  ['Is Plane free?', 113],
], 378)

const MORE = (href) => learn(href, 'Learn more →')

export default function OpenSource() {
  return (
    <Page>
      <HeroSplit
        eyebrow="PLANE COMMUNITY EDITION - AGPL-3.0"
        title={[
          <>
            The{' '}
            <InlineLink href="https://github.com/makeplane/plane">
              <span style={{ color: '#006399' }}>#1</span>
            </InlineLink>{' '}
            open source
          </>,
          'project management platform',
        ]}
        sub={ph(98, 418)}
        buttons={[
          { label: 'Deploy Community Edition', href: 'https://github.com/makeplane/plane' },
          { label: 'Try Plane Cloud free', href: 'https://app.plane.so/sign-up', variant: 'secondary' },
        ]}
        image={img('screenshot-kanban-hero-4278c9d8.webp', 2464, 2000)}
      />
      <LogoStrip
        className="py-12 md:py-16"
        cols="grid-cols-6"
        caption="Used by 50,000+ teams across the globe"
        captionClass=""
        captionSize="base"
        captionWeight="medium"
        logos={OS_LOGOS}
        imgClass="max-h-9 w-auto object-fill"
        cellClass="relative flex h-20 items-center justify-center overflow-hidden"
        mobileClass="mt-10"
      />
      <IconCards
        header={{ eyebrow: 'OPEN SOURCE TRACTION', title: 'The open source standard for modern teams', body: ph(112, 419) }}
        cards={[
          { icon: 'git-hub-opensource.svg', title: '60,000+ GitHub stars', body: ph(65, 420) },
          { icon: 'docker-opensource.svg', title: '3,000,000+ Docker pulls', body: ph(82, 421) },
          { icon: 'heart-opensource.svg', title: '200+ contributors', body: ph(82, 422) },
        ]}
      />
      <ProgressAccordion
        imageSide="left"
        header={{ eyebrow: 'CAPABILITIES', title: 'One workspace. Projects, docs, cycles, and intake.', body: ph(128, 423) }}
        items={[
          { title: 'Projects and work items', body: ph(160, 424), image: img('screenshot-projects-workitems-tabs-3c5b998a.webp', 2464, 2464) },
          { title: 'Cycles and modules', body: ph(140, 425), image: img('screenshot-cycles-tabs-8965e1aa.webp', 2464, 2464) },
          { title: 'Pages and documentation', body: ph(122, 426), image: img('screenshot-pages-tabs-6d13f121.webp', 2464, 2464) },
          { title: 'Five layout views', body: ph(122, 427), image: img('screenshot-layouts-tabs-f475c260.webp', 2464, 2464) },
          { title: 'Intake and triage', body: ph(137, 428), image: img('screenshot-intake-tabs-3225f57f.webp', 2464, 2464) },
          { title: 'Command K and keyboard-first', body: ph(111, 429), image: img('screenshot-cmd-k-tabs-fe345d64.webp', 2464, 2464) },
        ]}
      />
      <Bento
        dark
        header={{ variant: 'center', title: 'Deploy on your infrastructure in\nminutes. Not months.', body: '' }}
        rows={[
          {
            cols: 'md:grid-cols-2',
            cards: [
              { title: 'Docker Compose', body: ph(117, 430), image: img('screenshot-docker-compose-bento.webp', 2336, 1296), fit: 'right', link: { label: 'Read Docs →', href: 'https://developers.plane.so/self-hosting/methods/docker-compose' } },
              { title: 'Multiply what your team ships', body: ph(115, 431), image: img('screenshot-helm-upgrade-bento.webp', 2336, 1296), fit: 'right', link: { label: 'Read Docs →', href: 'https://github.com/makeplane/helm-charts/blob/master/charts/plane-ce/README.md' } },
            ],
          },
        ]}
      />
      <Section bg="surface-2" className="py-16">
        <div className="flex flex-col gap-12">
          <SectionHeader
            variant="center"
            eyebrow="COMPARE"
            title="How Plane compares to other open source project management tools"
            body={
              <>
                {ph(65, 432)} <InlineLink href="https://plane.so/blog/11-jira-alternatives-you-can-self-host-in-2026">11 Jira alternatives you can self-host →</InlineLink>
              </>
            }
          />
          <CompareTable {...TABLE} />
        </div>
      </Section>
      <CtaCard
        title="Scale from team to organization. Without switching tools."
        body={ph(108, 433)}
        buttons={[
          { label: 'Deploy Plane Commercial', href: '/self-hosted' },
          { label: 'Book a demo', href: '/talk-to-sales', variant: 'secondary' },
        ]}
        items={[
          'Workflows and approval gates',
          'Audit trails and compliance logs',
          'SSO with SAML, OIDC, and LDAP',
          'Epics, initiatives, and teamspaces',
          'Work item types and custom properties',
          'GitHub, GitLab, and Slack integrations',
          'Wiki for org-wide knowledge',
          'Priority support and SLAs',
        ]}
      />
      <CardGrid
        bg="surface-2"
        header={{ eyebrow: 'PLATFORM', title: 'Open source project management, built to scale', body: ph(170, 434) }}
        cards={[
          { image: img('illustration-modern-experience-cards.webp', 1611, 1612), title: 'Modern experience', body: ph(107, 435), link: MORE('https://plane.so/') },
          { image: img('illustration-fully-extensible.webp', 1611, 1612), title: 'Fully extensible', body: ph(96, 436), link: MORE('https://plane.so/marketplace') },
          { image: img('illustration-ready-when-are.webp', 1611, 1612), title: 'Ready when you are', body: ph(96, 437), link: MORE('/for-enterprise') },
        ]}
      />
      <ResourceColumns
        header={{ eyebrow: 'Resources', title: ['Everything you need to get started', ''], body: ph(71, 438) }}
        items={[
          { icon: 'git-hub-opensource.svg', title: 'Source code on GitHub', body: ph(77, 439), link: MORE('https://github.com/makeplane/plane/') },
          { icon: 'documentation-filled.svg', title: 'Developer documentation', body: ph(69, 440), link: MORE('https://developers.plane.so/') },
          { icon: 'heart-opensource.svg', title: 'Join the community', body: ph(71, 441), link: MORE('https://forum.plane.so') },
          { icon: 'embed-filled.svg', title: 'Deploy in minutes', body: ph(59, 442), link: MORE('https://developers.plane.so/self-hosting/methods/docker-compose') },
          { icon: 'git-branch-02-filled.svg', title: 'Contributing guide', body: ph(72, 443), link: MORE('https://github.com/makeplane/plane?tab=contributing-ov-file') },
          { icon: 'History.svg', title: 'Changelog', body: ph(52, 444), link: MORE('/changelog') },
        ]}
      />
      <Faq title="Common questions about Plane" sub={ph(72, 445)} items={FAQ} />
      <CtaBanner
        title={'Next-gen project\nmanagement starts here.'}
        sub="Start with Community Edition. Scale when you're ready."
        buttons={[
          { label: 'Try Plane today', href: 'https://app.plane.so/sign-up/' },
          { label: 'Talk to a migration expert', href: '/talk-to-sales', variant: 'secondary' },
        ]}
      />
    </Page>
  )
}
