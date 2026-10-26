// CLONE_SPEC §15 — Footer + sticky wordmark reveal (pure CSS: sticky bottom-0, -z-10 under the z-20 rounded top block)
const P = 'https://plane.so'

const columns = [
  [
    {
      heading: 'Product',
      links: [
        ['Project Management', `${P}/project-management`],
        ['Wiki', `${P}/wiki`],
        ['Plane AI', `${P}/ai`],
        ['Plane Compose', `${P}/plane-compose`],
      ],
    },
    {
      heading: 'Self-hosted',
      links: [
        ['Commercial Edition', `${P}/self-hosted`],
        ['Airgapped Edition', `${P}/airgapped`],
        ['Prime Portal', 'https://prime.plane.so/'],
      ],
    },
  ],
  [
    {
      heading: 'Features',
      links: [
        ['Work items', `${P}/work-items`],
        ['Work item types', `${P}/work-item-types`],
        ['Intake', `${P}/intake`],
        ['Cycles', `${P}/cycles`],
        ['Workflows and Approvals', `${P}/workflows-and-approvals`],
        ['Epics and Initiatives', `${P}/epics-initiatives`],
        ['Customers', `${P}/customer-requests`],
        ['Dashboards', `${P}/dashboards`],
        ['Teamspaces', `${P}/teamspaces`],
        ['State of Projects + Updates', `${P}/state-of-projects-and-updates`],
      ],
    },
    {
      heading: 'Marketplace',
      links: [
        ['Apps and agents', `${P}/marketplace/categories/agents#list`],
        ['Importers', `${P}/marketplace/categories/importers#list`],
        ['Templates', `${P}/templates`],
      ],
    },
  ],
  [
    {
      heading: 'Plan and pricing',
      links: [
        ['Pro', `${P}/pro`],
        ['Business', `${P}/business`],
        ['Enterprise-grid', `${P}/enterprise-grid`],
      ],
    },
    {
      heading: 'Use cases',
      links: ['Product', 'Operations', 'Marketing', 'Agile', 'Design', 'Engineering'].map((x) => [
        x,
        `${P}/solutions/${x.toLowerCase()}`,
      ]),
    },
    {
      heading: 'Scale',
      links: [
        ['Startups', `${P}/solutions/startups`],
        ['Growing Teams', `${P}/solutions/growing-teams`],
        ['Enterprise Teams', `${P}/solutions/enterprise-teams`],
      ],
    },
  ],
  [
    {
      heading: 'Industries',
      links: ['Aerospace', 'Healthcare', 'Government', 'Retail', 'Manufacturing', 'Defense', 'Finance'].map((x) => [
        x,
        `${P}/industries/${x.toLowerCase()}`,
      ]),
    },
    {
      heading: 'Compare',
      links: [
        ['Jira', 'jira'],
        ['Asana', 'asana'],
        ['Monday.com', 'monday'],
        ['Linear', 'linear'],
        ['ClickUp', 'clickup'],
        ['Shortcut', 'shortcut'],
        ['Notion', 'notion'],
      ].map(([label, slug]) => [label, `${P}/plane-vs-${slug}`]),
    },
  ],
  [
    {
      heading: 'Learn',
      links: [
        ['The Plane blog', `${P}/blog`],
        ["What's new (Changelog)", `${P}/changelog`],
        ['Download', `${P}/download`],
        ['Mobile', `${P}/mobile`],
        ['Plane Academy', 'https://academy.plane.so/videos'],
      ],
    },
    {
      heading: 'Support',
      links: [
        ['Docs', `${P}/docs`],
        ['Developer Docs', `${P}/developers`],
        ['Status', 'https://status.plane.so/'],
        ['Forum', 'https://forum.plane.so/'],
      ],
    },
  ],
  [
    {
      heading: 'Company',
      links: [
        ['Terms', `${P}/legals/terms-and-conditions`],
        ['Privacy', `${P}/legals/privacy-policy`],
        ['Security', `${P}/security`],
        ['Legal', `${P}/legals`],
        ['Careers', `${P}/careers`],
        ['About', `${P}/about`],
        ['Wallpapers', `${P}/wallpapers`],
      ],
    },
    {
      heading: 'Plane in action',
      links: [
        ['Manifesto', `${P}/manifesto`],
        ['Make the switch', `${P}/switch`],
        ['Talk to Sales', `${P}/talk-to-sales`],
        ['General enquiries', `${P}/contact`],
        ['What our customers say', `${P}/customers`],
      ],
    },
  ],
]

const socials = [
  ['LinkedIn', 'https://www.linkedin.com/company/planepowers/', 'linkedin'],
  ['GitHub', 'https://github.com/makeplane/plane', 'github'],
  ['X (Twitter)', 'https://twitter.com/planepowers', 'x'],
  ['Discord', 'https://discord.com/invite/A92xrEGCge', 'discord'],
  ['Youtube', 'https://www.youtube.com/@planepowers', 'youtube'],
]

const dlBtn =
  'flex items-center gap-2 rounded-lg border border-dark-btn-border bg-dark-divider px-3 py-2 text-500 font-normal text-txt-d-secondary'

export default function Footer() {
  return (
    <footer className="relative z-20 bg-dark-bg text-[#f5fbff]">
      {/* Top block */}
      <div className="space-y-10 rounded-b-3xl bg-dark-bg py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-4 md:justify-between">
            <img alt="Plane" loading="lazy" width="66" height="40" decoding="async" src="/assets/logo-light.svg" />
            <a
              aria-label="Security compliance: GDPR, HIPAA, ISO 27001, and SOC 2 certified"
              className="flex cursor-pointer gap-2 md:justify-end"
              href="https://security.plane.so/"
            >
              {['gdpr', 'hipaa', 'iso-27001', 'soc-2'].map((b) => (
                <img key={b} alt="" loading="lazy" width="64" height="64" decoding="async" src={`/assets/${b}.svg`} />
              ))}
            </a>
          </div>
        </div>

        <div id="footer">
          <div className="container-page">
            <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-6">
              {columns.map((groups, i) => (
                <div key={i} className="col-span-1 flex flex-col gap-4 pb-6">
                  {groups.map((g) => (
                    <div key={g.heading} className="mb-4">
                      <p className="mb-2 font-satoshi text-[13px] font-semibold leading-[1.2] text-txt-d-placeholder">{g.heading}</p>
                      <ul className="mt-1 space-y-2 text-sm">
                        {g.links.map(([label, href]) => (
                          <li key={label}>
                            <div className="font-inter text-300 font-430">
                              <a className="text-txt-d-primary hover:underline" target="_self" href={href}>
                                {label}
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-dark-divider pt-10">
          <div className="container-page">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center justify-center gap-4 text-center md:justify-start">
                <div className="flex flex-wrap gap-4 font-inter">
                  <div className="hidden flex-wrap gap-4 md:flex">
                    <a className={dlBtn} rel="noopener noreferrer" target="_blank" href="https://go.plane.so/macos">
                      <img alt="apple store" loading="lazy" width="20" height="20" decoding="async" src="/assets/appstore.svg" />
                      Download for Mac
                    </a>
                    <a className={dlBtn} rel="noopener noreferrer" target="_blank" href="https://go.plane.so/windows">
                      <img alt="" aria-hidden="true" width="20" height="20" className="size-4 shrink-0" src="/assets/icon-windows.svg" />
                      Download for Windows
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 md:hidden">
                    <a className={dlBtn} rel="noopener noreferrer" target="_blank" href="https://go.plane.so/app-store">
                      <img alt="apple store" loading="lazy" width="20" height="20" decoding="async" src="/assets/appstore.svg" />
                      Download for iOS
                    </a>
                    <a className={dlBtn} rel="noopener noreferrer" target="_blank" href="https://go.plane.so/play-store">
                      <img alt="google play" loading="lazy" width="20" height="20" decoding="async" src="/assets/playstore.svg" />
                      Download for Android
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {socials.map(([label, href, icon]) => (
                  <a
                    key={label}
                    aria-label={label}
                    className="rounded-lg border border-dark-btn-border bg-dark-divider p-3 text-txt-d-secondary transition-colors"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {/* Icon tinted with currentColor via mask so the shared asset file is reused */}
                    <span
                      aria-hidden="true"
                      className="block size-6 bg-current"
                      style={{
                        WebkitMask: `url(/assets/social-${icon}.svg) center / contain no-repeat`,
                        mask: `url(/assets/social-${icon}.svg) center / contain no-repeat`,
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wordmark reveal */}
      <div className="sticky bottom-0 -z-10 bg-dark-footer px-4 pb-2 pt-4 sm:px-8 sm:pt-16">
        <img
          alt="Plane"
          loading="lazy"
          width="1600"
          height="476"
          decoding="async"
          className="mx-auto h-auto w-[1600px] max-w-full"
          src="/assets/footer-brand-wordmark.svg"
        />
      </div>
    </footer>
  )
}
