// /work-trials — "Hiring at Plane" work-trial page (plane.so/work-trials).
// Long-form body copy is placeholder (brief content rule); headings, labels and layout are reproduced.
import { Fragment } from 'react'
import { A, Buttons, Container, Eyebrow, Heading, Img, InlineLink, Page, Section, SectionHeader, Text, cx } from '../components/plans/ui.jsx'
import { ph } from '../components/plans/ph.js'
import { CtaBanner, Faq } from '../components/plans/Blocks.jsx'
import { faq } from '../components/plans/faqs.js'

// paragraph spec: [chars, trailingBlankLine] ; 'gap' = an empty <p><br></p>
const P = (n, seed, blank) => ph(n, seed) + (blank ? '\n\n' : '')
const SECTIONS = [
  {
    title: 'Why we run trials',
    paras: [P(126, 785, true), `${P(236, 786, true)}${ph(250, 775)}`],
    img: 'hiring-signal',
    desk: ['work-trials-hiring-signal-diagram-desktop-light-fb209a0e.png', 4172, 1792],
    mob: ['work-trials-hiring-signal-diagram-mobile-light-594c795e.png', 1700, 2026],
  },
  {
    title: 'Both sides are deciding',
    paras: [P(195, 787, true), P(227, 788, true), ph(192, 776)],
    desk: ['work-trials-two-way-evaluation-diagram-desktop-light-28edd898.png', 4172, 1792],
    mob: ['work-trials-two-way-evaluation-diagram-mobile-light-4ea421d3.png', 1700, 3005],
  },
  {
    title: 'How a trial runs',
    paras: [P(331, 789, true), P(220, 790, true), ph(285, 777)],
    desk: ['work-trials-trial-timeline-diagram-desktop-light-8830da29.png', 4172, 1792],
    mob: ['work-trials-trial-timeline-diagram-mobile-light-97ad6f83.png', 1700, 3268],
  },
  {
    title: 'Built around your life',
    paras: [ph(166, 778), '', P(233, 791, true), ph(191, 779)],
    desk: ['work-trials-trial-schedule-grid-diagram-desktop-light-4ce00e19.png', 4172, 1792],
    mob: ['work-trials-trial-schedule-grid-diagram-mobile-light-846c4e13.png', 1700, 2927],
  },
  {
    title: 'What you will work on',
    paras: [ph(142, 780), '', ph(415, 781)],
  },
]

const COMMITMENTS = [
  ['Paid, always', 118],
  ['Your schedule', 117],
  ['Your job stays safe', 112],
  ['The team you would join', 102],
  ['Sized for evaluation', 77],
  ['A fast, honest answer', 91],
  ['An alternative path', 99],
  ['It is okay to say no', 133],
]

const FAQ = faq([
  ['Is the trial really paid?', 320],
  ['I have a full-time job. How do I do this without risking it?', 219],
  ['My visa or my contract does not allow paid outside work. Am I out?', 301],
  ['What happens to the work I produce?', 438],
  ['Who decides, and how fast?', 324],
  ['Can I skip the trial?', 339],
  ['What does a trial project actually look like?', 434],
  ['Will AI agents be evaluating me?', 265],
], 735)

const commitBorder = (i) => (i === 0 ? '' : i === 1 ? 'border-t md:border-t-0 md:border-l' : i % 2 ? 'border-t md:border-l' : 'border-t')

export default function WorkTrials() {
  return (
    <Page>
      {/* Hero: dark, full-height (min-h calc(100vh-75px)), content pinned to the bottom */}
      <div className="pl-dark pl-bg-surface-1">
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${A('work-track-hero-bg-9c085de3.webp')})` }}>
          <div className="flex min-h-[calc(100vh-75px)] flex-col justify-end py-12 md:py-16">
            <Container>
              <div className="flex flex-col gap-16">
                <div className="w-full">
                  <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
                    <div className="flex flex-col items-start gap-6 text-left">
                      <div className="flex flex-col items-start gap-4">
                        <Eyebrow>Hiring at Plane</Eyebrow>
                        <Heading size={1} text="The best interview is a few days of real work" />
                      </div>
                      <Buttons items={[{ label: 'See open roles', href: '/careers#open-roles' }]} className="flex flex-wrap justify-start gap-4" />
                    </div>
                    <div className="flex flex-col items-center text-left">
                      <Text size="lg" text={ph(235, 782)} />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>

      {/* Long-form sections: h3 + prose (max-w 750) + full-width diagram (max-w 1042) */}
      <Section>
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-16 md:gap-20">
            {SECTIONS.map((s, i) => (
              <div key={i} className="flex flex-col gap-8">
                <div className="mx-auto flex flex-col gap-6 text-left" style={{ maxWidth: 750 }}>
                  <div className="flex flex-col gap-4">
                    <Heading size={3} text={s.title} />
                  </div>
                  <Text text={s.paras} list />
                </div>
                {s.desk && (
                  <div className="relative mx-auto w-full" style={{ maxWidth: 1042 }}>
                    <div className="pl-bg-layer-1 overflow-hidden [&_img]:h-auto [&_img]:w-full [&_img]:max-w-full">
                      <Img src={s.desk[0]} w={s.desk[1]} h={s.desk[2]} className="hidden w-full lg:block" />
                      <Img src={s.mob[0]} w={s.mob[1]} h={s.mob[2]} className="block w-full lg:hidden" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The eight commitments */}
      <Section bg="surface-2">
        <div className="flex flex-col gap-10">
          <SectionHeader
            variant="center"
            title="The eight commitments"
            body={
              <>
                {ph(67, 783)}
                <br />
                <a href="mailto:careers@plane.so">careers@plane.so</a> {ph(31, 784)}
              </>
            }
          />
          <div className="pl-bd-subtle grid grid-cols-1 overflow-hidden rounded-xl border md:grid-cols-2">
            {COMMITMENTS.map(([t, n], i) => (
              <div key={i} className={cx('pl-bd-subtle pl-bg-surface-1 flex flex-col gap-3 p-6 md:p-8', commitBorder(i))}>
                <div className="flex items-center gap-2">
                  <Text size="lg" color="primary" weight="semibold" text={t} />
                </div>
                <Text size="sm" color="tertiary" text={ph(n, 792 + i)} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Faq
        eyebrow={null}
        title="Questions you might have"
        sub={
          <Fragment>
            Anything not answered here goes to <InlineLink href="mailto:careers@plane.so">careers@plane.so</InlineLink>.
          </Fragment>
        }
        items={FAQ}
      />
      <CtaBanner
        titleLines={['A week of working together', 'beats months of guessing']}
        sub={['If that sounds fair, we want to meet you.', 'Bring your questions, your skepticism, and your calendar.']}
        buttons={[
          { label: 'View open roles', href: '/careers' },
          { label: 'Write to us', href: 'mailto:careers@plane.so', variant: 'secondary' },
        ]}
      />
    </Page>
  )
}
