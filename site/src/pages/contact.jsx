// /contact — "How can we help?" card grid. Measured live 2026-10-26.
// 1440: section 58→909 (h 851, py-16), 6 cards 403x285 in 3 cols gap 24.
import '../components/company/company.css'

const A = '/assets/company/contact/'
const CARDS = [
  { icon: 'phone.svg', alt: 'phone', title: 'Sales inquiries', body: 'Talk to our team about pricing, enterprise deployments, and migrating off other tools.', cta: 'Talk to Sales', href: '/talk-to-sales' },
  { icon: 'help-circle-filled.svg', alt: 'help-circle-filled', title: 'Help and Support', body: 'Get help with setup, configuration, or troubleshooting.', cta: 'Talk to Support', href: 'https://forum.plane.so/c/support/5' },
  { icon: 'message-chat-square-filled-black.svg', alt: 'message-chat-square-filled-black.svg', title: 'Forum', body: 'Ask questions, share feedback, and connect with other Plane users.', cta: 'Go to Forum', href: 'https://forum.plane.so/' },
  { icon: 'documentation-filled-1.svg', alt: 'documentation-filled', title: 'Documentation', body: 'Find product guides, how-tos, and FAQs to get started or troubleshoot on your own.', cta: 'Read our docs', href: 'https://docs.plane.so/' },
  { icon: 'embed-filled-1.svg', alt: 'embed-filled', title: 'Developers', body: 'Explore APIs, webhooks, SDKs, and the Agent Development Kit.', cta: 'Build on Plane', href: 'https://developers.plane.so/' },
  { icon: 'mail-01-filled.svg', alt: 'mail-01-filled', title: 'General inquiries', body: 'Reach out about partnerships, media inquiries, and more.', cta: 'hello@plane.so', href: 'mailto:hello@plane.so' },
]

export default function Contact() {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container-page">
        <div className="flex flex-col gap-10">
          <div className="mx-auto flex max-w-[700px] flex-col items-center gap-6 text-center">
            <div className="flex w-full flex-col items-center gap-2 self-stretch text-center">
              <h2 className="h2 w-full text-txt-primary md:whitespace-pre-line">How can we help?</h2>
              <p className="text-500 text-txt-secondary">From sales inquiries to press coverage, we have you covered.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CARDS.map((c) => (
              <div key={c.title} className="flex flex-col justify-between gap-16 rounded-xl border border-line-subtle bg-layer-1 p-6 transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#cfd2d3]">
                  <img src={A + c.icon} alt={c.alt} width="24" height="24" className="size-6" />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-600 font-570 text-txt-primary">{c.title}</p>
                    <p className="text-400 text-txt-tertiary">{c.body}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={c.href}
                      {...(/^https?:/.test(c.href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center whitespace-nowrap rounded-lg border border-line-strong bg-white px-3 py-1.5 text-center text-[14px] font-medium leading-[21px] text-txt-secondary transition-colors hover:bg-surface-2"
                    >
                      {c.cta} ▸
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
