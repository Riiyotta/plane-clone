// CLONE_SPEC §11 — Apps & integrations
const CARD = 'rounded-xl border-[0.5px] border-line-subtle bg-card'
const CARD_PAD = 'px-5 py-4 md:px-8 md:py-7'
const LINK = 'inline-block whitespace-nowrap rounded-lg font-inter text-500 font-430 text-txt-primary transition-colors duration-150 hover:underline'

function Img({ src, alt, aspect, className = '', imgClass = 'object-cover' }) {
  return (
    <div className={`relative w-full overflow-hidden ${aspect} ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className={`absolute inset-0 h-full w-full ${imgClass}`} />
    </div>
  )
}

function CardText({ title, body, link }) {
  return (
    <div className="space-y-3">
      <div className="space-y-1.5">
        <div className="font-inter text-600 font-570 text-txt-primary">
          <div className="flex items-center gap-2">{title}</div>
        </div>
        <div className="font-inter text-400 font-430 text-txt-secondary">{body}</div>
      </div>
      <a className={LINK} href={link.href} {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {link.label}
      </a>
    </div>
  )
}

export default function Apps() {
  return (
    <section aria-label="Apps" id="apps" className="py-20">
      <div className="container-page">
        <div className="space-y-11">
          <div className="flex flex-col items-center gap-3 md:text-center">
            <h2 className="h2 text-txt-primary md:whitespace-pre-line">
              {'Extend Plane with apps, agents,\nand your own integrations'}
            </h2>
          </div>

          <div className="space-y-7">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className={`${CARD} ${CARD_PAD} space-y-9`}>
                <CardText
                  title={
                    <>
                      Browse the <img src="/assets/logo.svg" alt="logo" width="134" height="25" loading="lazy" decoding="async" />
                    </>
                  }
                  body="GitHub, GitLab, Slack, Sentry, and more. Sync issues, track PRs, and import from Jira, Linear, Asana, ClickUp or Monday."
                  link={{ label: 'Go to Marketplace →', href: '/marketplace' }}
                />
                <div>
                  <Img src="/assets/browse.webp" alt="browse" aspect="aspect-[552/334]" className="hidden md:block" />
                  <Img src="/assets/browse-mobile.webp" alt="browse" aspect="aspect-[376/227]" className="md:hidden" />
                </div>
              </div>

              <div className={`${CARD} ${CARD_PAD} space-y-9`}>
                <CardText
                  title="Build your own"
                  body="Open API, webhooks, OAuth apps, and a native MCP server. Build custom integrations or AI agents that work inside Plane."
                  link={{ label: 'Read the docs →', href: 'https://developers.plane.so/dev-tools/agents/building-an-agent', external: true }}
                />
                <div className="flex w-full justify-center">
                  <Img src="/assets/build.webp" alt="Build your own" aspect="aspect-[552/334]" className="hidden md:block" />
                  <Img src="/assets/build-mobile.webp" alt="Build your own" aspect="aspect-[380/230]" className="md:hidden" />
                </div>
              </div>
            </div>

            <div className={`${CARD} grid grid-cols-1 lg:grid-cols-2 lg:gap-20`}>
              <div className={`${CARD_PAD} flex flex-col justify-between space-y-5`}>
                <img src="/assets/slack.svg" alt="Slack integration" width="114" height="40" loading="lazy" decoding="async" className="h-10 w-[114px]" />
                <CardText
                  title="Don’t miss our AGI-like Slack integration."
                  body={
                    <>
                      <span className="rounded bg-[#E4ECFB] px-[3px] text-[#2060DF]">@Plane</span> in any Slack channel. Describe what needs to happen. Plane creates the work, assigns it, and syncs the thread back.
                    </>
                  }
                  link={{ label: 'Add Plane to Slack →', href: '/marketplace' }}
                />
                <div className="font-inter text-400 font-430">
                  <div className="flex items-center gap-2 text-txt-secondary">Coming soon to Microsoft Teams</div>
                </div>
              </div>
              <div className="hidden w-full pr-0 pt-4 md:pt-7 lg:flex">
                <Img src="/assets/slack-image.webp" alt="Slack integration" aspect="aspect-[574/261]" className="mt-auto" imgClass="object-cover object-bottom" />
              </div>
              <div className="w-full pl-5 pr-0 pt-4 md:pl-7 md:pt-5 lg:hidden">
                <Img src="/assets/slack-image-mobile.webp" alt="Slack integration" aspect="aspect-[400/212]" imgClass="object-cover object-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
