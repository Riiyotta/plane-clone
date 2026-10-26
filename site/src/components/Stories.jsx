// CLONE_SPEC §6 — Customer stories
const CARD_HOVER = 'transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:scale-[1.01] cursor-pointer'

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function QuoteIcon() {
  return (
    <svg className="size-6 text-[#CFD2D3]" fill="none" height="24" viewBox="0 0 30 24" width="30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0.5 16.233C0.5 12.82 1.59 9.68 3.77 6.83C5.96 3.99 8.66 1.71 11.88 0L13.28 2.49C11.73 3.62 10.32 4.84 9.08 6.14C7.83 7.43 6.76 8.96 5.88 10.72L8.76 13.05C9.96 13.98 10.76 14.91 11.18 15.84C11.6 16.78 11.8 17.76 11.8 18.8C11.8 20.4 11.31 21.67 10.32 22.6C9.34 23.534 8.09 24 6.58 24C5.59 24 4.71 23.82 3.93 23.46C3.15 23.09 2.45 22.65 1.83 22.14C0.94 20.27 0.5 18.3 0.5 16.233ZM16.72 16.233C16.72 12.82 17.81 9.68 19.99 6.83C22.172 3.99 24.87 1.71 28.1 0L29.5 2.49C27.94 3.62 26.54 4.84 25.29 6.14C24.043 7.43 22.98 8.96 22.09 10.72L24.98 13.05C26.17 13.98 26.98 14.91 27.4 15.84C27.81 16.78 28.02 17.76 28.02 18.8C28.02 20.4 27.53 21.67 26.54 22.6C25.55 23.534 24.3 24 22.8 24C21.81 24 20.92 23.82 20.15 23.46C19.37 23.09 18.664 22.65 18.04 22.14C17.16 20.27 16.72 18.3 16.72 16.233Z" fill="currentColor" />
    </svg>
  )
}

function StoryCard({ href, logo, title, dark = false }) {
  return (
    <a
      href={href}
      className={`flex flex-col gap-8 rounded-2xl p-4 lg:p-8 ${CARD_HOVER} ${
        dark
          ? "bg-[url('/assets/testimonial.webp')] bg-cover bg-center bg-no-repeat"
          : 'border border-line-card bg-white'
      }`}
    >
      <div>
        <img alt={logo.alt} src={logo.src} width={logo.w} height={logo.h} loading="lazy" decoding="async" className={dark ? 'brightness-0 invert' : undefined} />
      </div>
      <div className="mt-auto space-y-5">
        <div className={`font-inter text-600 font-430 ${dark ? 'text-txt-on-color' : 'text-txt-primary'}`}>{title}</div>
        <div className={`flex items-center gap-2 font-inter text-500 font-normal ${dark ? 'text-txt-on-color' : 'text-txt-primary'}`}>
          Read customer story
          <ChevronRight />
        </div>
      </div>
    </a>
  )
}

const STORIES = [
  { href: 'https://plane.so/customers/minimalart', logo: { src: '/assets/minimalart.svg', alt: 'minimalart', w: 127, h: 16 }, title: 'Why MinimalArt replaced ClickUp with Plane for simpler project management' },
  { href: 'https://plane.so/customers/vates', logo: { src: '/assets/vates.svg', alt: 'vates', w: 35, h: 36 }, title: 'Why VATES replaced a Trello alternative with Plane as they scaled' },
  { href: 'https://plane.so/customers/inits', logo: { src: '/assets/inits.svg', alt: 'inits', w: 72, h: 20 }, title: 'How INITS built a real-world innovation lab for students with Plane' },
]

export default function Stories() {
  return (
    <div className="bg-surface-2 py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <StoryCard
            dark
            href="https://plane.so/customers/fortyau"
            logo={{ src: '/assets/40au.svg', alt: 'FortyAU', w: 134, h: 32 }}
            title="Why FortyAU replaced Monday and Trello with Plane for flexible, self-hosted project delivery"
          />

          <div className="space-y-8 rounded-2xl border border-line-card bg-white p-4 lg:col-span-2 lg:p-8">
            <div className="space-y-5">
              <QuoteIcon />
              <p className="font-inter text-800 font-430 text-txt-primary">
                The Plane team is creating a product that our business has been needing for years. Modern features, flexible workflows, without sacrificing reporting abilities.
              </p>
            </div>
            <div className="flex items-center gap-10">
              <div>
                <div className="font-inter text-500 font-medium text-txt-primary">Duane Arnett</div>
                <div className="font-inter text-300 font-430 text-txt-secondary">FortyAU</div>
              </div>
              <div aria-hidden="true" className="h-12 w-px shrink-0 bg-line-card" />
              <img alt="FortyAU" src="/assets/40au.svg" width={84} height={20} loading="lazy" decoding="async" className="shrink-0" />
            </div>
          </div>

          {STORIES.map((s) => (
            <StoryCard key={s.href} {...s} />
          ))}
        </div>
      </div>
    </div>
  )
}
