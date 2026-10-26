// /education — Plane for Education (plane.so/education). Shared template: components/plans/Program.jsx.
import ProgramPage from '../components/plans/Program.jsx'
import { ph } from '../components/plans/ph.js'

const DATA = {
  hero: {
    eyebrow: 'PLANE FOR EDUCATION',
    title: 'Plane for student and educators',
    body: ph(123, 559),
    cta: 'Apply for the Education Program',
    image: { src: 'plane_for_education_hero_image.png', w: 1290, h: 1292, alt: 'plane for education hero image' },
  },
  logosCaption: 'Get the same delights and 10X more ROI as these brands',
  eligible: {
    body: ph(73, 560),
    cards: [
      { img: 'graduation-hat.png', w: 512, h: 512, title: 'Accredited Institution', body: ph(113, 561) },
      { img: 'teacher.png', w: 900, h: 900, title: 'Non-commercial Purpose', body: ph(105, 562) },
      { img: 'earth.png', w: 512, h: 512, title: 'Public or Private Institution', body: ph(110, 563) },
    ],
  },
  tabs: {
    title: 'Designed for the way learning happens today',
    body: ph(122, 564),
    items: [
      {
        title: 'For students',
        intro: 'Build as you learn',
        points: [
          ['Organize your work', 'Track assignments, projects, and deadlines with simple boards and timelines.'],
          ['Collaborate easily', 'Work with classmates, share files, and exchange feedback in real time.'],
          ['Build real skills', 'Use the same tools teams use in the world beyond campus.'],
        ],
        media: { src: 'projects-hero-desktop-light.webp', w: 3080, h: 2465 },
      },
      {
        title: 'For educators',
        intro: ['Teach, organize, and engage faster.', ''],
        points: [
          ['Plan and track courses', 'Manage lessons, deadlines, and student progress in one place.'],
          ['Collaborate seamlessly', 'Share content, coordinate with teaching staff, and keep everything up to date.'],
          ['Create dynamic resources', 'Build wikis for syllabi, readings, and shared materials.'],
        ],
        media: { video: 'Wiki-hero-1.mp4' },
      },
      {
        title: 'For campus IT and aministration',
        intro: 'Keep everything secure, and connected.',
        points: [
          ['Choose how you deploy', 'Run Plane on cloud, self-hosted, or air-gapped environments.'],
          ['Manage with control', 'Oversee users, permissions, and data across departments.'],
          ['Integrate seamlessly', 'Connect Plane with your existing campus tools and systems.'],
        ],
        media: { src: 'dashboards-organise-on-a-canvas-desktop-light-1.webp', w: 3080, h: 2055 },
      },
    ],
  },
  steps: {
    body: [ph(59, 565), 'Here’s how the process works ↓'],
    cards: [
      { title: 'Apply online', body: ph(71, 566) },
      { title: 'We review', body: ph(85, 567) },
      { title: 'Activate your workspace', body: ph(75, 568) },
    ],
  },
  why: {
    eyebrow: 'Why Partner with Plane?',
    title: 'Why educators choose Plane',
    body: ph(151, 569),
    cta: 'Join the campus program',
    items: [
      { title: 'Future-proof your students', body: ph(69, 570) },
      { title: 'Foster collaboration', body: ph(125, 571) },
      { title: 'Streamline academic operations', body: ph(98, 572) },
      {
        title: 'Affordable by design',
        body: (
          <>
            {ph(35, 573)} <strong>75% off</strong> {ph(56, 574)}
          </>
        ),
      },
    ],
  },
  cta: {
    title: 'Ready to bring Plane to your campus?',
    body: (
      <>
        {ph(133, 575)} <strong>75% off</strong>.
      </>
    ),
    button: 'Join the campus program',
    side: ph(83, 576),
  },
  faq: [
    ['Who is eligible for the Plane for Education program?', 152],
    ['What is the discount for educational institutions?', 159],
    ['What features are included in the educational program?', 178],
    ['How do we apply for the program?', 151],
    ['What kind of support is available for educational users?', 167],
    ['Can we upgrade or scale as our institution grows?', 169],
  ]
    .map(([q, n], i) => ({ q, a: ph(n, 579 + i) }))
    .concat({
      q: 'Can I get a self-hosted Commercial Edition or Air-Gapped license?',
      a: (
        <>
          {ph(162, 577)} <strong>self-hosted Commercial</strong> or <strong>Air-Gapped</strong> {ph(36, 578)}
        </>
      ),
    }),
}

export default function Education() {
  return <ProgramPage d={DATA} />
}
