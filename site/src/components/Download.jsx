// CLONE_SPEC §10 — Download (mobile apps, dark)
const STORES = [
  { label: 'Download for iOS', icon: '/assets/appstore.svg', alt: 'app-store', href: 'https://apps.apple.com/in/app/plane/id6657986465' },
  { label: 'Download for Android', icon: '/assets/playstore.svg', alt: 'play-store', href: 'https://play.google.com/store/apps/details?id=com.plane.so' },
]

// lucide arrow-up-right (inline in the original)
function ArrowUpRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-[18px] shrink-0" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

export default function Download() {
  return (
    <section aria-label="Download" id="download" className="bg-dark-bg py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="space-y-7">
            <div className="space-y-4">
              <div className="font-inter text-500 font-medium">
                <span className="text-400 font-430 uppercase text-txt-d-accent">Mobile</span>
              </div>
              {/* original has no whitespace-pre-line here: the source newlines collapse */}
              <h2 className="h-inter text-txt-d-primary">
                Your entire workspace on your mobile on both our Cloud and your self-hosted instance
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {STORES.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block space-y-6 rounded-xl border-[0.5px] border-dark-border bg-dark-card p-4 transition-all duration-300 hover:scale-105"
                >
                  <img src={s.icon} alt={s.alt} width="24" height="24" loading="lazy" decoding="async" />
                  <div className="text-500 font-medium text-txt-d-primary">
                    <div className="flex gap-3">
                      {s.label}
                      <ArrowUpRight />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="relative hidden aspect-[616/469] w-full md:block">
            <img src="/assets/mobile.webp" alt="Plane mobile app" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="relative aspect-[424/329] w-full md:hidden">
            <img src="/assets/mobile-mobile.webp" alt="Plane mobile app" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
