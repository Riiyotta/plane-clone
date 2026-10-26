// CLONE_SPEC §12 — Enterprise
const COLUMNS = [
  {
    img: '/assets/certified.webp',
    title: 'Certified across four compliance standards',
    body: 'SOC 2, ISO 27001, GDPR, and CCPA compliance out of the box. Independently audited, continuously monitored.',
    link: 'Go to security.plane.so →',
    href: 'https://security.plane.so/',
    external: true,
  },
  {
    img: '/assets/uptime.webp',
    title: 'Fully committed uptime SLA',
    body: 'Automatic backups, real-time scaling, and multi-layer failovers. Built to stay up when it matters most.',
    link: 'Go to status.plane.so →',
    href: 'https://status.plane.so/',
    external: true,
  },
  {
    img: '/assets/identify.webp',
    title: 'Identity and access at every layer',
    body: 'SSO, SAML, and LDAP across every workspace. Authenticate your way.',
    link: 'Go to /enterprise →',
    href: '/solutions/enterprise-teams',
  },
]

export default function Enterprise() {
  return (
    <section aria-label="Enterprise" id="enterprise" className="py-20">
      <div className="container-page overflow-hidden">
        <div className="space-y-11">
          <div className="grid items-start md:grid-cols-2">
            <h2 className="h2 text-txt-primary md:whitespace-pre-line">
              {'Enterprise-grade security,\ncompliance, and control'}
            </h2>
            <div className="md:mt-5 md:pl-24">
              <p className="font-inter text-500 font-430 text-txt-secondary">
                Plane meets the security and compliance standards your InfoSec team requires, across cloud and self-hosted deployments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {COLUMNS.map((c) => (
              <div key={c.title} className="space-y-5">
                <div className="relative aspect-square overflow-hidden rounded-xl border-[0.5px] border-line-subtle bg-surface-2">
                  <div className="absolute inset-10">
                    <img src={c.img} alt={c.title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="font-inter text-600 font-570 text-txt-primary">{c.title}</div>
                    <div className="font-inter text-400 font-430 text-txt-secondary">{c.body}</div>
                  </div>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="inline-block whitespace-nowrap rounded-lg font-inter text-500 font-430 text-txt-primary transition-colors duration-150 hover:underline"
                  >
                    {c.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
