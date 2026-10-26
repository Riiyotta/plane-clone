// /security — Plane security page (plane.so/security). Paragraph copy is placeholder.
import { Container, Page, Svg } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { LogoStrip, STRIP_SELF_HOSTED } from '../components/plans/Blocks.jsx'
import { LCards, LHeader, LHero, LSplitCta } from '../components/plans/Legacy.jsx'

const CUST = (f) => ({ src: `${f}.svg`, w: 120, h: 100, alt: f })

export default function Security() {
  return (
    <Page>
      <LHero
        eyebrow="SECURE BY DEFAULT"
        title={'Enterprise-grade assurance \rand peace of mind for all'}
        body={`${ph(90, 545)}\n${ph(90, 546)}\n`}
        buttons={[{ label: 'Talk to Sales', href: '/talk-to-sales' }]}
      />
      <Container>
        <div className="flex w-full flex-col justify-between gap-12 overflow-hidden py-16 lg:flex-row lg:items-center">
          <div className="flex-1 overflow-hidden">
            <LHeader title={'Industry-standard compliance with\rcertified security controls'} body={ph(85, 547)} />
          </div>
          {/* SOC 2 / ISO 27001 / GDPR / CCPA badges: text-brand-900, hover brand-default */}
          <div className="flex flex-1 shrink-0 items-center gap-4">
            {['security_0', 'security_1', 'security_2', 'security_3'].map((k) => (
              <Svg key={k} k={k} size={122} className="text-[#005685] transition-all duration-300 hover:text-[#006399]" />
            ))}
          </div>
        </div>
      </Container>
      <LCards
        header={{ title: 'Secure from day zero' }}
        rows={[
          [
            { title: 'Two-step by default', body: ph(110, 548) },
            { title: 'Encryption everywhere', body: ph(123, 549) },
          ],
          [
            { title: 'Pre-set admin controls', body: ph(94, 550) },
            { title: 'RBAC + GAC', body: ph(124, 551) },
            { title: 'Private projects', body: ph(150, 552) },
          ],
        ]}
      />
      <LCards
        header={{ title: 'Compliance + privacy out of the box \rwith self-hosted Plane', body: '' }}
        rows={[
          [
            { title: 'Modular monolith', body: ph(130, 553) },
            { title: 'Instance Admin-only', body: ph(124, 554) },
          ],
          [
            { title: 'Configurable SSO', body: ph(110, 555) },
            { title: 'Two-step in your control', body: ph(106, 556) },
            { title: 'Airgapped Plane', body: ph(108, 557) },
          ],
        ]}
      />
      <LSplitCta
        title="Get out-of-the-box assurance for secure, private, and compliant work management."
        body={ph(193, 558)}
        buttons={[
          { label: 'Talk to Sales', href: '/talk-to-sales' },
          { label: 'Request compliance docs', href: 'https://security.plane.so', variant: 'secondary' },
        ]}
        side={{ title: 'Get in touch' }}
      />
      <LogoStrip
        caption={'Join 50,000+ teams\nthat actually enjoy work'}
        logos={{ desktop: ['accenture', 'ssi', 'texelis', 'sony', 'dolby', 'mirador'].map(CUST), mobile: STRIP_SELF_HOSTED.mobile }}
      />
    </Page>
  )
}
