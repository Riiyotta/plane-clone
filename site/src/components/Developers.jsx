// CLONE_SPEC §13 — Developers (dark)
const ArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
)

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 shrink-0" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
)

const cards = [
  {
    title: 'APIs, Webhooks, and SDKs',
    body: 'REST API with OAuth 2.0, HMAC-signed webhooks, and typed SDKs in Node.js and Python. Build custom integrations, dashboards, and automations.',
    decor: '/assets/api.svg',
    href: 'https://plane.so/developers',
  },
  {
    title: 'MCP Server',
    body: 'Native MCP server, an agent framework with @mention support, and full Agent Run lifecycle tracking. Let AI manage work inside Plane, not just read it.',
    decor: '/assets/ai.svg',
    href: 'https://developers.plane.so/dev-tools/mcp-server',
  },
]

export default function Developers() {
  return (
    <section aria-label="Developers" id="developers" className="bg-dark-bg py-20">
      <div className="container-page">
        <div className="space-y-11">
          {/* Header */}
          <div className="flex flex-col items-start gap-6 text-left md:items-center md:text-center">
            <div className="flex flex-col items-start gap-4 text-left md:items-center md:text-center">
              <div className="font-inter text-500 font-430">
                <span className="text-400 uppercase text-txt-d-accent">LOVED BY DEVELOPERS AND PROJECTOPS ADMINS</span>
              </div>
              <h2 className="h2 text-txt-d-primary md:whitespace-pre-line">
                {'Every setting versioned, reviewed, and\ndeployed from your terminal.'}
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-start gap-4 md:justify-center">
              <a className="btn-primary-dark" href="https://app.plane.so/sign-up">Get started free</a>
              <a className="btn-secondary-dark" href="https://plane.so/talk-to-sales">Talk to a human →</a>
            </div>
          </div>

          <div className="space-y-6">
            {/* Big Compose card */}
            <div className="grid w-full grid-cols-1 items-center overflow-hidden rounded-xl bg-dark-card md:grid-cols-2">
              <div className="hidden w-full md:block">
                <img alt="project as code" loading="lazy" width="1200" height="800" decoding="async" className="h-auto w-full" src="/assets/project-as-code.webp" />
              </div>
              <div className="w-full md:hidden">
                <img alt="project as code" loading="lazy" width="424" height="329" decoding="async" className="h-auto w-full" src="/assets/project-as-code-mobile.webp" />
              </div>
              <div className="space-y-6 p-6">
                <div className="space-y-1.5">
                  <h3 className="h-inter text-txt-on-color">Plane Compose for Projects-as-Code</h3>
                  <div className="font-inter text-500 font-430 md:whitespace-pre-line">
                    <span className="text-[14px] font-430 text-txt-d-secondary">
                      {'Define projects in YAML, version in Git, deploy from your terminal. Start\ntreating project configuration as the infrastructure it is.'}
                    </span>
                  </div>
                </div>
                <a className="flex items-center gap-2 font-normal text-txt-d-primary" href="https://plane.so/plane-compose">
                  Learn More<span className="sr-only"> about Plane Compose for Projects-as-Code</span>
                  <ChevronRight />
                </a>
              </div>
            </div>

            {/* Link cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {cards.map((c) => (
                <a
                  key={c.title}
                  className="relative space-y-1.5 rounded-xl bg-dark-card p-6 transition-all duration-300 hover:scale-[1.01]"
                  target="_blank"
                  href={c.href}
                >
                  <div className="font-inter text-600 font-570 text-txt-on-color">
                    <span className="flex items-center gap-2">
                      {c.title}
                      <ArrowUpRight />
                    </span>
                  </div>
                  {/* pb-1.5: original (Tailwind v4) space-y applies margin-bottom to every non-last child; the absolute decor is last, so the body gets +6px (card 159 tall at 1440) */}
                  <div className="pb-1.5 md:max-w-sm">
                    <div className="font-inter text-500 font-430">
                      <span className="text-[14px] font-430 text-txt-d-secondary">{c.body}</span>
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 !mt-0 size-[110px]">
                    <img alt={c.title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-fill" src={c.decor} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
