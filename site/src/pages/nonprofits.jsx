// /nonprofits — Plane for Nonprofits (plane.so/nonprofits). Shared template: components/plans/Program.jsx.
import ProgramPage from '../components/plans/Program.jsx'
import { ph } from '../components/plans/ph.js'

const DATA = {
  hero: {
    eyebrow: 'Amplify your impact',
    title: 'Plane for Nonprofits',
    body: ph(132, 619),
    cta: 'Apply for the nonprofit program',
    image: { src: 'nonprofit-heor.webp', w: 3454, h: 3454 },
  },
  logosCaption: 'Get the same workspace being used by these organizations',
  eligible: {
    body: ph(73, 620),
    cards: [
      { img: 'blue-heart.png', w: 512, h: 512, title: 'Mission-driven', body: ph(114, 621) },
      { img: 'leaf.png', w: 512, h: 512, title: 'Registered as a nonprofit', body: ph(83, 622) },
      { img: 'vote.png', w: 512, h: 512, title: 'Non-political', body: ph(80, 623) },
    ],
  },
  tabs: {
    title: 'Built for the way your organization creates change',
    body: ph(129, 624),
    items: [
      {
        title: 'For program teams',
        intro: 'Empower your team to deliver impact more effectively.',
        points: [
          ['Manage projects with clarity', 'Track initiatives, milestones, and outcomes in one shared workspace.'],
          ['Collaborate across partners', 'Coordinate with volunteers, NGOs, and communities in real time.'],
          ['Show your impact', 'Capture progress and generate transparent reports for donors and stakeholders.'],
        ],
        media: { src: 'projects-hero-desktop-light.webp', w: 3080, h: 2465 },
      },
      {
        title: 'For fundraising and development',
        intro: ['Empower your team to grow support and strengthen donor relationships.', ''],
        points: [
          ['Manage every campaign', 'Track grants, fundraising goals, and donor pipelines in one workspace.'],
          ['Align your teams', 'Keep development, communications, and program teams on the same page.'],
          ['Stay organized', 'Centralize proposals, outreach, and reports for easy access.'],
        ],
        media: { video: 'Wiki-hero-1.mp4' },
      },
      {
        title: 'For operations and leadership',
        intro: 'Give your organization the clarity and control to scale its impact.',
        points: [
          ['Work securely', 'Protect donor and beneficiary information with enterprise-grade security.'],
          ['See the big picture', 'Gain real-time visibility into projects, budgets, and team performance.'],
          ['Operate transparently', 'Build accountability across programs, teams, and leadership.'],
        ],
        media: { src: 'dashboards-organise-on-a-canvas-desktop-light-1.webp', w: 3080, h: 2055 },
      },
    ],
  },
  steps: {
    body: [ph(59, 625), 'Here’s how the process works ↓'],
    cards: [
      { title: 'Apply online', body: ph(67, 626) },
      { title: 'We review', body: ph(85, 627) },
      { title: 'Activate your workspace', body: ph(75, 628) },
    ],
  },
  why: {
    eyebrow: 'Why partner with Plane?',
    title: 'Why choose Plane for your nonprofit?',
    body: ph(156, 629),
    cta: 'Join the Nonprofit program',
    items: [
      { title: 'Maximize your resources', body: ph(135, 630) },
      { title: 'Scale your impact', body: ph(125, 631) },
      { title: 'Enhance transparency and accountability', body: ph(105, 632) },
      {
        title: 'Affordable by design',
        body: (
          <>
            {ph(33, 633)} <strong>75% off</strong> {ph(56, 634)}
          </>
        ),
      },
    ],
  },
  cta: {
    title: 'Ready to amplify your impact with Plane?',
    body: ph(128, 635),
    button: 'Join the nonprofit program',
    side: ph(122, 636),
  },
  faq: [
    ['Who is eligible for the Plane for the Nonprofits program?', 212],
    ['What is the discount for nonprofit organizations?', 165],
    ['What features are included in the nonprofit program?', 177],
    ['How do we apply for the program?', 182],
    ['What kind of support is available for nonprofit users?', 165],
    ['Can we upgrade or scale as our organization grows?', 168],
    ['Do you offer discounts for fiscal sponsors or umbrella organizations?', 182],
  ]
    .map(([q, n], i) => ({ q, a: ph(n, 639 + i) }))
    .concat({
      q: 'Can I get a self-hosted Commercial Edition or Air-Gapped license?',
      a: (
        <>
          {ph(162, 637)} <strong>self-hosted Commercial</strong> or <strong>Air-Gapped</strong> {ph(36, 638)}
        </>
      ),
    }),
}

export default function Nonprofits() {
  return <ProgramPage d={DATA} />
}
