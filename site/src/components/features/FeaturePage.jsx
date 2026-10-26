// Renders a plane.so feature page from a list of CMS-style section objects (see ./data/*.js).
import {
  Hero, LogoStrip, Section, SelfHost, Faq, CtaBanner, HeroOld, FeatureRowOld, CtaCardOld, AccordionOld,
} from './blocks.jsx'

const SECTIONS = {
  hero: Hero,
  logos: LogoStrip,
  section: Section,
  selfHost: SelfHost,
  faq: Faq,
  ctaBanner: CtaBanner,
  heroOld: HeroOld,
  featureRowOld: FeatureRowOld,
  ctaCardOld: CtaCardOld,
  accordionOld: AccordionOld,
}

export default function FeaturePage({ sections }) {
  return (
    <>
      {sections.map((s, i) => {
        const C = SECTIONS[s.type]
        return C ? <C key={i} {...s} /> : null
      })}
    </>
  )
}
