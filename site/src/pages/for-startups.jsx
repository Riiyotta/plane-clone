// /for-startups — plane.so/for-startups (redirects to /solutions/startups on the live site).
// Paragraph copy is placeholder.
import { Page } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { Bento, CardGrid, CtaBanner, Faq, HeroCentered, LogoStrip, STRIP_SELF_HOSTED, SplitFeature, Testimonial } from '../components/plans/Blocks.jsx'
import { faq } from '../components/plans/faqs.js'
import { img } from '../components/plans/common.js'

const FREE = { label: 'Get started free', href: 'https://app.plane.so/sign-up/' }
const MORE = { label: 'Learn more', href: '/talk-to-sales' }
const CUST = (f) => ({ src: `${f}.svg`, w: 120, h: 100, alt: f })
const small = (href) => ({ label: 'Learn more →', href, small: true })

const FAQ = faq([
  ['Does Plane offer a discount for startups?', 183],
  ['Who can request startup pricing?', 144],
  ['Do we need to be backed by a VC or accelerator?', 147],
  ['Can existing Plane customers request a discount?', 128],
  ['Can we start using Plane before applying?', 183],
  ['Is Plane AI included?', 158],
  ['Can we bring our existing work into Plane?', 160],
  ['Is Plane ready for larger customer requirements?', 169],
  ['What happens when our startup discount ends?', 168],
], 679)

export default function ForStartups() {
  return (
    <Page>
      <HeroCentered
        eyebrow="Plane for founders and first teams"
        title="Give ambition one place to move"
        sub={ph(164, 719)}
        buttons={[FREE, { label: 'Book a demo', href: '/talk-to-sales', variant: 'secondary' }]}
        image={img('screenshot-work-item-detail-hero-20bcd39d.webp', 5024, 3088)}
      />
      <LogoStrip
        caption={'Teams that run their intake\nthrough Plane'}
        logos={{ desktop: ['mirador', 'rebiclique-francaise', 'power-integrations', 'aramco', 'accenture', 'amazon'].map(CUST), mobile: STRIP_SELF_HOSTED.mobile }}
      />
      <CardGrid
        bg="surface-2"
        header={{ title: 'Turn early momentum into\nlasting advantage', body: ph(98, 720) }}
        cards={[
          { image: img('screenshot-customers-cards-3ff001b4.webp', 1611, 1612), title: 'Clarity for the next bet', body: ph(94, 721), link: small('/project-management') },
          { image: img('screenshot-pages-cards-6319784d.webp', 1611, 1612), title: 'Context that compounds', body: ph(101, 722), link: small('/wiki') },
          { image: img('screenshot-ai-cards-ea7c755c.webp', 1611, 1612), title: 'AI leverage from day one', body: ph(94, 723), link: small('/ai') },
        ]}
      />
      <Testimonial
        quote={ph(185, 724)}
        name="Duane Arnett"
        company="FortyAU"
        logo={{ src: '40au.svg', w: 66, h: 16, alt: '40au' }}
        story={{ href: 'https://plane.so/customers/fortyau', logo: { src: '40au-white-56a6c745.svg', w: 100, h: 24, alt: '40au-white' }, title: 'Why FortyAU replaced OpenProject with Plane for flexible, self-hosted project delivery' }}
      />
      <SplitFeature
        rows={[
          {
            title: 'Give the idea a clear path forward',
            body: ph(127, 725),
            buttons: [MORE],
            bullets: [
              { src: 'work-items-filled.svg', text: 'Keep assumptions, trade-offs, and open questions visible' },
              { svg: 'for_startups_2', text: 'Turn outcomes into briefs and buildable projects' },
              { svg: 'for_startups_3', text: 'Give teammates and agents the context to start well' },
            ],
            image: img('screenshot-initaitives-cards-81151aa9.webp', 2464, 1972),
          },
          {
            imageFirst: true,
            title: 'Keep moving when everything is changing',
            body: ph(133, 726),
            buttons: [MORE],
            bullets: [
              { src: 'properties-filled-primary.svg', text: 'Shape each cycle around what matters now' },
              { src: 'cursor-02.svg', text: 'See what is moving, blocked, or at risk' },
              { svg: 'for_startups_4', text: 'Keep people and agents aligned around the same release' },
            ],
            image: img('screenshot-cycles-cards-606c0aa8.webp', 2464, 1972),
          },
          {
            title: 'Learn from every customer without chasing every request',
            body: ph(100, 727),
            buttons: [MORE],
            bullets: [
              { src: 'work-items-filled.svg', text: 'Capture interviews, support notes, and sales feedback' },
              { svg: 'for_startups_2', text: 'Use AI to find recurring themes across customer signals' },
              { svg: 'for_startups_3', text: 'Move validated ideas into the next product cycle' },
            ],
            image: img('screenshot-intake-cards-f5a65368.webp', 2464, 1972),
          },
        ]}
      />
      <Bento
        dark
        header={{ variant: 'center', title: 'More leverage from the stack you already have' }}
        rows={[
          {
            cols: 'md:grid-cols-2',
            cards: [
              { title: 'Connect what you use and extend what you need', body: ph(108, 728), image: img('illustration-across-apps-bento-31a3d80b.webp', 2040, 1296), fit: 'inset' },
              { title: 'Give AI agents the context to help', body: ph(104, 729), image: img('screenshot-claude-code-bento-fc755090.webp', 2336, 1404), fit: 'right' },
            ],
          },
        ]}
      />
      <CardGrid
        gap="gap-12"
        header={{ title: 'Protect runway without\nlimiting what comes next', body: ph(104, 730) }}
        cards={[
          { image: img('screenshot-features-enable-cards-db1767bf.webp', 1611, 1612), title: 'Give the first team room to build', body: ph(87, 731) },
          { image: img('screenshot-security-cards-5f8dda5a.webp', 1611, 1612), title: 'Ready for the deal that changes everything', body: ph(70, 732) },
          { image: img('screenshot-members-cards-c85a2ae4.webp', 1611, 1612), title: 'Grow without starting over', body: ph(104, 733) },
        ]}
      />
      <Faq eyebrow={null} title="FAQs" sub={ph(91, 734)} items={FAQ} />
      <CtaBanner title="From day zero, build what’s next on Plane" buttons={[FREE, { label: 'Talk to a migration expert', href: '/talk-to-sales', variant: 'secondary' }]} />
    </Page>
  )
}
