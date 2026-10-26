// /partners — Partners
// Structure converted from the live plane.so DOM (headless); long prose replaced with neutral placeholder copy.
import { useState } from 'react'

const PARTNERSFAQ_ITEMS = [
  {
    q: "Who can join the Plane Solutions Partner Program?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-500 text-txt-tertiary font-430">
          <div>
            <p>Use the views you prefer and switch between them without losing context. Connect the tools you already use and keep updates flowing in both directions. The workspace stays fast and simple even as more people join the effort. Sample text.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    q: "Is there a cost to join the partner program?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-500 text-txt-tertiary font-430">
          <div>
            <p>Admins get the controls they need while members keep a calm, focused view. Teams keep their projects, notes instead.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    q: "What makes Plane different from other project management platforms?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-500 text-txt-tertiary font-430">
          <div>
            <p>Admins get the controls they need while members keep a calm, focused view. Teams keep their projects, notes, and updates together in one shared place. Work moves forward with fewer handoffs and clearer ownership for each task here.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    q: "What support do partners receive?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-500 text-txt-tertiary font-430">
          <div>
            <p>Each partner type gets tailored support:</p>
            <ul className="list-disc [&>:not(:last-child)]:mb-2 pl-6">
              <li>
                <span>
                  <strong>Technology Partners</strong>
                </span>
                <span>Admins get the controls they need while members keep a calm, focused view.</span>
              </li>
              <li>
                <span>
                  <strong>Solution Partners</strong>
                </span>
                <span>Admins get the controls they need while members keep a calm, focused view. Teams.</span>
              </li>
              <li>
                <span>
                  <strong>Channel Partners</strong>
                </span>
                <span>Use the views you prefer and switch between them without losing context. Connect.</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    q: "Can Plane help with Jira Data Center migrations?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-500 text-txt-tertiary font-430">
          <div>
            <p>Everyone can see what is planned, what is in progress, and what is done. Bring existing data along and pick up right where the team left off. This section explains the idea in plain words so readers can scan it quickly. Admins get the controls they need while members keep a calm.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    q: "What deployment options does Plane offer?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-500 text-txt-tertiary font-430">
          <div>
            <p>Connect the tools you already use and keep updates flowing in both directions. The workspace stays fast and simple even as more people join the effort. Sample text stands in for the original paragraph at a similar length.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    q: "How do partners get customers and leads?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-500 text-txt-tertiary font-430">
          <div>
            <p>Sample text stands in for the original paragraph at a similar length. Set it up once and adjust the details as your process grows over time. Reports summarize progress so leads can spot risks today.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    q: "How do I get started?",
    a: (
      <>
        <div className="md:whitespace-pre-line font-inter text-500 text-txt-tertiary font-430">
          <div>
            <p>Reports summarize progress so leads can spot risks before they grow. Everyone can see what is planned, what is in progress, and what is done. Bring existing data along and pick up right where the team left off. This section.</p>
          </div>
        </div>
      </>
    ),
  },
]

// FAQ accordion (single open, all closed by default). Live animates max-height (500ms) and chevron rotation (200ms).
function PartnersFaq() {
  const [open, setOpen] = useState(-1)
  return PartnersFaq.ITEMS.map((f, i) => {
    const on = open === i
    return (
      <div key={i} className={`flex flex-col border-b p-6 transition-all duration-500 ${on ? 'bg-surface-2 border-transparent' : 'bg-white border-line-n2'}`}>
        <button className="flex w-full cursor-pointer items-center justify-between text-left transition-colors focus:outline-none" type="button" aria-expanded={on} onClick={() => setOpen(on ? -1 : i)}>
          <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-430">{f.q}</div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-chevron-right text-txt-tertiary h-5 w-5 flex-shrink-0 transition-transform duration-200 ${on ? 'rotate-90' : ''}`} aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
        <div className={`overflow-hidden pr-10 transition-all duration-500 ease-in-out ${on ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pt-3">{f.a}</div>
        </div>
      </div>
    )
  })
}
PartnersFaq.ITEMS = PARTNERSFAQ_ITEMS

export default function PartnersPage() {
  return (
    <div className="font-satoshi text-[16px] font-normal leading-normal text-black">
      {/* ---- section 0 ---- */}
      <div className="relative py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="[&>:not(:last-child)]:mb-6 text-left">
              <div className="inline-flex font-medium font-mono uppercase text-txt-accent text-[15px] leading-[15px] tracking-[0.02em]">Power What’s Next</div>
              <div className="[&>:not(:last-child)]:mb-4">
                <h1 className="md:whitespace-pre-line font-satoshi h1 text-txt-primary font-430">Become a Plane partner</h1>
                <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-430">
                  <div>
                    <p>
                      Small teams start quickly, and larger groups scale without
                      <br />
                      extra setup. Use the views you prefer and switch between them.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://go.plane.so/partner" rel="noopener noreferrer" target="_blank" className="btn-primary inline font-inter">Join the partner program</a>
              </div>
            </div>
            <img alt="about-us-editions.webp" width="2465" height="2465" className="w-full" src="/assets/compare/about-us-editions.webp" srcSet="/assets/compare/about-us-editions.webp 2465w" sizes="(max-width: 1024px) 100vw, 80vw" />
          </div>
        </div>
      </div>
      {/* ---- section 1 ---- */}
      <div id="logo-cloud-primary">
        <div className="py-16">
          <div className="container-page">
            <div className="grid grid-cols-5 gap-6 md:grid-cols-7">
              <div className="col-span-5 flex items-center justify-center text-center md:col-span-2">
                <div className="md:whitespace-pre-line font-inter text-500 text-txt-tertiary font-430">Trusted by partners shaping the future of work</div>
              </div>
              <div className="decoration-[#0089d1] flex items-center justify-center transition-all hover:scale-110">
                <img alt="it-methods-partner" width="84" height="16" src="/assets/compare/itmethods-logo.svg" />
              </div>
              <div className="decoration-[#0089d1] flex items-center justify-center transition-all hover:scale-110">
                <img alt="jss-digital-partner-black" width="72.93" height="18.37" src="/assets/compare/jss-digital-black.avif" />
              </div>
              <div className="decoration-[#0089d1] flex items-center justify-center transition-all hover:scale-110">
                <img alt="honicon-partner" width="121.03" height="14.62" srcSet="/assets/compare/honicon.png 3.3594x" />
              </div>
              <div className="decoration-[#0089d1] flex items-center justify-center transition-all hover:scale-110">
                <img alt="tekstripes-partner" width="99.6" height="22.8" src="/assets/compare/tekstripes.svg" />
              </div>
              <div className="decoration-[#0089d1] flex items-center justify-center transition-all hover:scale-110">
                <img alt="saas-genier-partner" width="92.65" height="20.03" srcSet="/assets/compare/saas-genie.webp 1.8542x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---- section 2 ---- */}
      <div className="py-16">
        <div className="container-page">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6 items-start text-left">
              <div className="flex flex-col gap-2">
                <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">Three ways to partner with Plane</h2>
                <div>
                  <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                    <div>
                      <p>Work moves forward with fewer handoffs and clearer ownership for each task. A short description of how this feature helps.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
                  <div>
                    <div className="bg-surface-2 border-line-subtle h-full overflow-hidden rounded-xl border p-4 md:p-8">
                      <div className="flex h-full flex-col gap-6">
                        <div className="flex flex-col items-start gap-4">
                          <div className="flex flex-col gap-2">
                            <h6 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-430">Technology Partners</h6>
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">
                              <div>
                                <p>Connect the tools you already use and keep updates flowing in both directions. The workspace stays fast and simple even as more people join the effort. Sample text stands.</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <a href="https://go.plane.so/partner" rel="noopener noreferrer" target="_blank" className="btn text-txt-primary hover:bg-[rgba(0,20,20,.05)] inline font-inter !p-0 hover:underline !font-normal">Become a technology partner ↗</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-surface-2 border-line-subtle h-full overflow-hidden rounded-xl border p-4 md:p-8">
                      <div className="flex h-full flex-col gap-6">
                        <div className="flex flex-col items-start gap-4">
                          <div className="flex flex-col gap-2">
                            <h6 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-430">Solutions Partners</h6>
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">
                              <div>
                                <p>This section explains the idea in plain words so readers can scan it quickly. Admins get the controls they need while members keep a calm, focused view. Teams together.</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <a href="https://go.plane.so/partner" rel="noopener noreferrer" target="_blank" className="btn text-txt-primary hover:bg-[rgba(0,20,20,.05)] inline font-inter !p-0 hover:underline !font-normal">Become a solutions partner ↗</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-surface-2 border-line-subtle h-full overflow-hidden rounded-xl border p-4 md:p-8">
                      <div className="flex h-full flex-col gap-6">
                        <div className="flex flex-col items-start gap-4">
                          <div className="flex flex-col gap-2">
                            <h6 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-430">Reseller and Channel Partners</h6>
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">
                              <div>
                                <p>Use the views you prefer and switch between them without losing context. Connect the tools you already use and keep updates flowing in both directions.</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                            <a href="https://go.plane.so/partner" rel="noopener noreferrer" target="_blank" className="btn text-txt-primary hover:bg-[rgba(0,20,20,.05)] inline font-inter !p-0 hover:underline !font-normal">Become a channel partner ↗</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---- section 3 ---- */}
      <div id="grid-default">
        <div className="container-page">
          <div className="flex flex-col gap-x-36 gap-y-12 py-16 lg:flex-row lg:items-center">
            <div className="flex w-full flex-col gap-12">
              <div className="flex flex-col gap-6 items-start text-left">
                <div className="inline-flex font-medium font-mono uppercase text-txt-accent text-[15px] leading-[15px] tracking-[0.02em]">Why Partner with Plane?</div>
                <div className="flex flex-col gap-2">
                  <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">Grow with an ecosystem built for the future of work</h2>
                  <div>
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                      <div>
                        <p>This section explains the idea in plain words so readers can scan it quickly. Admins get the controls they need while members keep a calm.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-start">
                  <a href="https://go.plane.so/partner" rel="noopener noreferrer" target="_blank" className="btn-primary inline font-inter">Join the partner program</a>
                </div>
              </div>
              <ul className="flex flex-col gap-10">
                <li>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 pt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-txt-tertiary flex-shrink-0" aria-hidden="true">
                        <path d="m15 15 6 6" />
                        <path d="m15 9 6-6" />
                        <path d="M21 16v5h-5" />
                        <path d="M21 8V3h-5" />
                        <path d="M3 16v5h5" />
                        <path d="m3 21 6-6" />
                        <path d="M3 8V3h5" />
                        <path d="M9 9 3 3" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Expand your reach</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                        <div>
                          <p>Teams keep their projects, notes, and updates together in one shared place. Work moves forward with fewer handoffs and clearer ownership.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 pt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-txt-tertiary flex-shrink-0" aria-hidden="true">
                        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M12 2v2" />
                        <path d="M12 22v-2" />
                        <path d="m17 20.66-1-1.73" />
                        <path d="M11 10.27 7 3.34" />
                        <path d="m20.66 17-1.73-1" />
                        <path d="m3.34 7 1.73 1" />
                        <path d="M14 12h8" />
                        <path d="M2 12h2" />
                        <path d="m20.66 7-1.73 1" />
                        <path d="m3.34 17 1.73-1" />
                        <path d="m17 3.34-1 1.73" />
                        <path d="m11 13.73-4 6.93" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Build deeper solutions</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                        <div>
                          <p>Placeholder copy describes the benefit here in a neutral, generic way. Small teams start.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 pt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-txt-tertiary flex-shrink-0" aria-hidden="true">
                        <path d="M12 13V2l8 4-8 4" />
                        <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
                        <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Create impact together</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                        <div>
                          <p>Placeholder copy describes the benefit here in a neutral, generic way. Small teams.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-2">
                    <div className="flex-shrink-0 pt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-txt-tertiary flex-shrink-0" aria-hidden="true">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                        <path d="m9 9.5 2 2 4-4" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Access partner resources</div>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                        <div>
                          <p>The workspace stays fast and simple even as more people join the effort again.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col gap-2">
              <img alt="partners-why-partner-with-plane-desktop-light-2" width="2465" height="2465" className="w-full" src="/assets/compare/partners-why-partner-with-plane-desktop-light-2.png" srcSet="/assets/compare/partners-why-partner-with-plane-desktop-light-2.png 2465w" sizes="(max-width: 1024px) 100vw, 80vw" />
            </div>
          </div>
        </div>
      </div>
      {/* ---- section 4 ---- */}
      <div className="py-16">
        <div className="container-page">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6 items-start text-left">
              <div className="inline-flex font-medium font-mono uppercase text-txt-accent text-[15px] leading-[15px] tracking-[0.02em]">Unmatched Deployment Flexibility</div>
              <div className="flex flex-col gap-2">
                <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">Serve any customer, anywhere</h2>
                <div>
                  <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                    <div>
                      <p>
                        Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups
                        <br />
                        scale without extra setup. Use the views you prefer and switch between them without losing context. Connect as.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
                  <div>
                    <div className="bg-surface-2 border-line-subtle h-full overflow-hidden rounded-xl border p-4 md:p-8">
                      <div className="flex h-full flex-col gap-6">
                        <img alt="partners-cloud-desktop-light_1" width="2211" height="993" className="w-full" src="/assets/compare/partners-cloud-desktop-light_1.png" srcSet="/assets/compare/partners-cloud-desktop-light_1.png 2211w" sizes="(max-width: 1024px) 100vw, 80vw" />
                        <div className="flex flex-col items-start gap-4">
                          <div className="flex flex-col gap-2">
                            <h6 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-430">Cloud</h6>
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">
                              <div>
                                <p style={{"textAlign":"left"}}>Help teams launch instantly with a secure, scalable setup.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-surface-2 border-line-subtle h-full overflow-hidden rounded-xl border p-4 md:p-8">
                      <div className="flex h-full flex-col gap-6">
                        <img alt="partners-self-hosted-desktop-light_1" width="2211" height="993" className="w-full" src="/assets/compare/partners-self-hosted-desktop-light_1.png" srcSet="/assets/compare/partners-self-hosted-desktop-light_1.png 2211w" sizes="(max-width: 1024px) 100vw, 80vw" />
                        <div className="flex flex-col items-start gap-4">
                          <div className="flex flex-col gap-2">
                            <h6 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-430">Self‑hosted</h6>
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">
                              <div>
                                <p style={{"textAlign":"left"}}>Admins get the controls they need while members keep a calm, focused.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-surface-2 border-line-subtle h-full overflow-hidden rounded-xl border p-4 md:p-8">
                      <div className="flex h-full flex-col gap-6">
                        <img alt="partners-airgapped-desktop-light_1" width="2211" height="993" className="w-full" src="/assets/compare/partners-airgapped-desktop-light_1.png" srcSet="/assets/compare/partners-airgapped-desktop-light_1.png 2211w" sizes="(max-width: 1024px) 100vw, 80vw" />
                        <div className="flex flex-col items-start gap-4">
                          <div className="flex flex-col gap-2">
                            <h6 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-430">Air‑gapped</h6>
                            <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">
                              <div>
                                <p>Set it up once and adjust the details as your process grows over time.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---- section 5 ---- */}
      <div id="grid-default">
        <div className="container-page">
          <div className="flex flex-col gap-12 py-16 lg:items-center">
            <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-6 items-start text-left">
                <div className="inline-flex font-medium font-mono uppercase text-txt-accent text-[15px] leading-[15px] tracking-[0.02em]">Jira Data Center migration opportunity</div>
                <div className="flex flex-col gap-2">
                  <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">Capitalize on the Jira Data Center EOL</h2>
                  <div>
                    <div className="md:whitespace-pre-line font-inter text-500 text-txt-secondary font-430">
                      <div>
                        <p>Work moves forward with fewer handoffs and clearer ownership for each task. A short description of how this feature helps teams plan and ship work. Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly, and larger groups scale without extra setup. Use.</p>
                        <p />
                        <p>
                          Admins get the controls{' '}
                          <a className="text-txt-accent hover:text-txt-accent/80" href="/blog/an-open-letter-to-jira-data-center-customers" rel="noreferrer">Open Letter to Jira Data Center Customers ↗</a>
                          they need while members keep a calm, focused view. Teams.
                        </p>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img alt="partners-jira-data-center-desktop-light" width="2465" height="1057" className="w-full" src="/assets/compare/partners-jira-data-center-desktop-light.png" srcSet="/assets/compare/partners-jira-data-center-desktop-light.png 2465w" sizes="(max-width: 1024px) 100vw, 80vw" />
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              <li className="border-line-n2 group flex flex-col gap-2 overflow-hidden rounded-xl border p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md p-2 bg-[#f5fbff]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-txt-accent flex-shrink-0" aria-hidden="true">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                    <path d="m3.3 7 8.7 5 8.7-5" />
                    <path d="M12 22V12" />
                  </svg>
                </div>
                <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Seamless transition</div>
                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                  <div>
                    <p>Everyone can see what is planned, what is in progress, and what is done. Bring existing data along and pick.</p>
                  </div>
                </div>
              </li>
              <li className="border-line-n2 group flex flex-col gap-2 overflow-hidden rounded-xl border p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md p-2 bg-[#f5fbff]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-txt-accent flex-shrink-0" aria-hidden="true">
                    <circle cx="12" cy="16" r="1" />
                    <rect x="3" y="10" width="18" height="12" rx="2" />
                    <path d="M7 10V7a5 5 0 0 1 10 0v3" />
                  </svg>
                </div>
                <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Enhanced features</div>
                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                  <div>
                    <p>This section explains the idea in plain words so readers can scan it quickly. Admins get the controls.</p>
                  </div>
                </div>
              </li>
              <li className="border-line-n2 group flex flex-col gap-2 overflow-hidden rounded-xl border p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md p-2 bg-[#f5fbff]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide text-txt-accent flex-shrink-0" aria-hidden="true">
                    <path d="m18 14 4 4-4 4" />
                    <path d="m18 2 4 4-4 4" />
                    <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
                    <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
                    <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
                  </svg>
                </div>
                <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Future-proof choice</div>
                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                  <div>
                    <p>A short description of how this feature helps teams plan and ship work. Placeholder copy describes today.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* ---- section 6 ---- */}
      <div className="py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="relative flex h-full flex-col gap-16 overflow-hidden rounded-2xl p-8 md:p-12 lg:col-span-2">
              <img alt="" className="object-cover" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/split-long.webp" srcSet="/assets/compare/split-long.webp 2487w" sizes="(min-width: 1024px) 66vw, 100vw" />
              <div className="relative size-12 shrink-0">
                <img alt="Plane" className="object-contain" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/logo-light.svg" />
              </div>
              <div className="relative flex flex-col gap-6">
                <div className="flex flex-col gap-2 dark">
                  <h5 className="md:whitespace-pre-line font-satoshi text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[24px] text-txt-primary font-430">Ready to partner with Plane?</h5>
                  <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">
                    <div>
                      <p>Admins get the controls they need while members keep a calm, focused view. Teams keep their projects, notes, and updates together in one shared place. Work moves forward.</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a href="https://go.plane.so/partner" rel="noopener noreferrer" target="_blank" className="btn-primary-dark inline font-inter">Become a Plane Partner</a>
                </div>
              </div>
            </div>
            <a className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 transition-transform duration-300 hover:scale-[1.01]" href="/talk-to-sales">
              <img alt="" className="object-cover" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/split-short.webp" srcSet="/assets/compare/split-short.webp 1209w" sizes="(min-width: 1024px) 33vw, 100vw" />
              <div className="relative flex justify-end text-[#f5fbff]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-8 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
              <div className="relative flex flex-col gap-2 dark">
                <h6 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-430">See partner resources</h6>
                <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Bring existing data along and pick up right where the team left off. This section explains the idea in plain.</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* ---- section 7 ---- */}
      <div className="container-page">
        <div className="flex flex-col gap-6 py-16">
          <div className="flex flex-col gap-6 items-center text-center">
            <div className="flex flex-col gap-2">
              <h2 className="md:whitespace-pre-line font-satoshi h2 text-txt-primary font-430">FAQ</h2>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-5xl flex-col">
            <PartnersFaq />
          </div>
        </div>
      </div>
    </div>
  )
}
