// CLONE_SPEC §9 — Self-hosted (dark)
const FEATURES = [
  {
    title: 'Prime CLI',
    body: 'Install, configure, upgrade, back up, and monitor your instance with single commands. Multi-instance support, custom domain setup, and service scaling built in.',
  },
  {
    title: 'Docker and Kubernetes',
    body: 'Deploy with Docker for quick setup or Kubernetes with Helm charts for production scale. Bring your own Postgres, Redis, and S3-compatible storage.',
  },
  {
    title: 'God Mode',
    body: 'One admin panel for your entire instance. Configure SMTP, authentication methods, SSO, workspace security, and telemetry preferences from a single screen.',
  },
]

export default function SelfHosted() {
  return (
    <section aria-label="Self-hosted" id="self-hosted" className="bg-dark-bg py-20">
      <div className="container-page">
        <div className="space-y-11">
          <div className="space-y-6">
            {/* original: grid gap-2 space-y-3 (v4 space-y = margin-bottom on h2) */}
            <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-2">
              <h2 className="h2 mb-3 text-txt-d-primary md:whitespace-pre-line">
                {'Self-host without compromise,\non-prem and air-gapped'}
              </h2>
              <div className="md:mt-5 md:pl-20">
                <p className="font-inter text-500 font-430 text-txt-d-secondary">
                  The only modern project management platform built for environments where you control every layer.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a className="btn-primary-dark" href="https://developers.plane.so/self-hosting/overview#deployment-methods">
                Self-host Plane
              </a>
              <a className="btn-secondary-dark" href="/talk-to-sales">
                Talk to a human →
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative hidden aspect-[1256/540] w-full overflow-hidden rounded-xl md:block">
              <img src="/assets/self-hosted.webp" alt="Self-hosted Plane" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="relative aspect-[424/339] w-full overflow-hidden rounded-xl md:hidden">
              <img src="/assets/self-hosted-mobile.webp" alt="Self-hosted Plane" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="space-y-1.5">
                  <div className="font-inter text-600 font-570 text-txt-on-color">{f.title}</div>
                  <div className="font-inter text-400 font-430 text-txt-d-secondary">{f.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
