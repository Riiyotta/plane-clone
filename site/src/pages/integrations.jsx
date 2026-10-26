// /integrations — Integrations
// Structure converted from the live plane.so DOM (headless); long prose replaced with neutral placeholder copy.
export default function IntegrationsPage() {
  return (
    <div className="font-satoshi text-[16px] font-normal leading-normal text-black">
      {/* ---- section 0 ---- */}
      <header className="bg-[#001b29] sticky z-30 py-3 text-white top-[66px] lg:top-[58px]">
        <div className="container-page">
          <nav className="relative flex w-full items-center justify-between gap-2 py-2">
            <div className="w-64">
              <a href="/marketplace">
                <img alt="Plane" width="120" height="20" className="h-6 w-auto hover:opacity-80" src="/assets/compare/marketplace-light.svg" />
              </a>
            </div>
            <div className="hidden items-center gap-6 lg:flex">
              <div className="text-400 hover:text-white text-[#e4e6e7] transition-all duration-300 hover:font-medium">
                <a href="https://developers.plane.so/dev-tools/build-plane-app/overview" rel="noopener noreferrer" target="_blank">Build an app</a>
              </div>
              <div className="text-400 hover:text-white text-[#e4e6e7] transition-all duration-300 hover:font-medium">
                <a href="https://sites.plane.so/intake/c7b12cfb73dc4040a623ddec658116bb/" rel="noopener noreferrer" target="_blank">Request an app</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* ---- section 1 ---- */}
      <div className="relative">
        <div className="relative">
          <div className="absolute inset-0 top-0 -z-10">
            <img alt="hero block bg" className="h-full w-full object-cover" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/hero-bg.webp" srcSet="/assets/compare/hero-bg.webp 4536w" sizes="100vw" />
          </div>
          <div className="container-page">
            <div className="relative grid grid-cols-12 gap-4 py-16 md:gap-10">
              <div className="col-span-12 flex items-center justify-start md:col-span-6">
                <div className="w-full lg:max-w-[400px]">
                  <h1 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[28px] leading-[1.3] tracking-[-0.03em] md:text-[40px] text-txt-primary font-430">Your work, your tools, all in one place</h1>
                </div>
              </div>
              <div className="col-span-12 flex items-center justify-center md:col-span-6">
                <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-430">Bring existing data along and pick up right where the team left off. This section explains the idea in plain words so readers can scan it quickly. Admins.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative scroll-mt-20 scroll-smooth" id="list">
          <div className="relative py-16">
            <div className="container-page">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
                <div className="col-span-1 lg:col-span-2">
                  <aside className="flex flex-col gap-14">
                    <div className="flex flex-col gap-5">
                      <div className="md:whitespace-pre-line font-inter text-600 text-txt-primary font-medium">Categories</div>
                      <nav className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative flex flex-row gap-3 overflow-hidden overflow-x-auto lg:flex-col">
                        <a className="group relative w-full cursor-pointer transition-colors" href="/marketplace#list">
                          <div className="border-[#009ff5] absolute left-0 h-full border-l-2" />
                          <div className="text-txt-accent pl-3 transition-all duration-200">
                            <div className="flex items-center gap-2 active">
                              <div className="flex size-4 shrink-0 items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide" aria-hidden="true">
                                  <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
                                  <rect x="14" y="2" width="8" height="8" rx="1" />
                                </svg>
                              </div>
                              <div className="w-full">
                                <div className="md:whitespace-pre-line font-inter text-400 text-txt-accent font-570">
                                  <div className="text-left whitespace-nowrap">All</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="group relative w-full cursor-pointer transition-colors" href="/marketplace/categories/agents#list">
                          <div className="absolute left-0 h-full border-l-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          <div className="text-txt-tertiary group-hover:text-txt-accent pl-2 transition-all duration-200 group-hover:translate-x-1">
                            <div className="flex items-center gap-2">
                              <div className="flex size-4 shrink-0 items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide" aria-hidden="true">
                                  <path d="M12 8V4H8" />
                                  <rect width="16" height="12" x="4" y="8" rx="2" />
                                  <path d="M2 14h2" />
                                  <path d="M20 14h2" />
                                  <path d="M15 13v2" />
                                  <path d="M9 13v2" />
                                </svg>
                              </div>
                              <div className="w-full">
                                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                                  <div className="text-left whitespace-nowrap">Agents</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="group relative w-full cursor-pointer transition-colors" href="/marketplace/categories/analytics-and-reporting#list">
                          <div className="absolute left-0 h-full border-l-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          <div className="text-txt-tertiary group-hover:text-txt-accent pl-2 transition-all duration-200 group-hover:translate-x-1">
                            <div className="flex items-center gap-2">
                              <div className="flex size-4 shrink-0 items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-current">
                                  <path d="M13.375 5.2C13.375 4.63 13.37 4.24 13.35 3.94C13.33 3.64 13.28 3.49 13.23 3.38C13.09 3.12 12.88 2.91 12.624 2.77C12.51 2.72 12.357 2.67 12.06 2.65C11.76 2.63 11.37 2.625 10.8 2.625H5.2C4.63 2.625 4.24 2.63 3.94 2.65C3.64 2.67 3.49 2.72 3.38 2.77C3.12 2.91 2.91 3.12 2.77 3.38C2.72 3.49 2.67 3.64 2.65 3.94C2.63 4.24 2.625 4.63 2.625 5.2V10.8C2.625 11.37 2.63 11.76 2.65 12.06C2.67 12.357 2.72 12.51 2.77 12.624C2.91 12.88 3.12 13.09 3.38 13.23C3.49 13.28 3.64 13.33 3.94 13.35C4.24 13.37 4.63 13.375 5.2 13.375H10.8C11.37 13.375 11.76 13.37 12.06 13.35C12.357 13.33 12.51 13.28 12.624 13.23C12.88 13.09 13.09 12.88 13.23 12.624C13.28 12.51 13.33 12.357 13.35 12.06C13.37 11.76 13.375 11.37 13.375 10.8V5.2ZM4.71 11.333V8.67C4.71 8.32 4.99 8.04 5.33 8.04C5.68 8.04 5.96 8.32 5.96 8.67V11.333C5.96 11.68 5.68 11.958 5.33 11.958C4.99 11.96 4.71 11.68 4.71 11.333ZM7.375 11.333V4.67C7.375 4.32 7.65 4.04 8 4.04C8.35 4.04 8.625 4.32 8.625 4.67V11.333C8.625 11.68 8.35 11.958 8 11.958C7.65 11.958 7.375 11.68 7.375 11.333ZM10.042 11.333V7.33C10.04 6.99 10.32 6.71 10.667 6.71C11.01 6.71 11.29 6.99 11.292 7.33V11.333C11.292 11.68 11.012 11.96 10.667 11.958C10.32 11.958 10.042 11.68 10.042 11.333ZM14.625 10.8C14.625 11.35 14.63 11.8 14.6 12.16C14.57 12.54 14.5 12.87 14.34 13.19C14.09 13.69 13.69 14.09 13.19 14.34C12.87 14.5 12.54 14.57 12.16 14.6C11.8 14.63 11.35 14.625 10.8 14.625H5.2C4.65 14.625 4.2 14.63 3.84 14.6C3.46 14.57 3.13 14.5 2.81 14.34C2.31 14.09 1.91 13.69 1.66 13.19C1.5 12.87 1.43 12.54 1.4 12.16C1.37 11.8 1.375 11.35 1.375 10.8V5.2C1.375 4.65 1.37 4.2 1.4 3.84C1.43 3.46 1.5 3.13 1.66 2.81C1.91 2.31 2.31 1.91 2.81 1.66C3.13 1.5 3.46 1.43 3.84 1.4C4.2 1.37 4.65 1.375 5.2 1.375H10.8C11.35 1.375 11.8 1.37 12.16 1.4C12.54 1.43 12.87 1.5 13.19 1.66C13.69 1.91 14.09 2.31 14.34 2.81C14.5 3.13 14.57 3.46 14.6 3.84C14.63 4.2 14.625 4.65 14.625 5.2V10.8Z" fill="currentColor" />
                                </svg>
                              </div>
                              <div className="w-full">
                                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                                  <div className="text-left whitespace-nowrap">Analytics & Reporting</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="group relative w-full cursor-pointer transition-colors" href="/marketplace/categories/communication-and-collaboration#list">
                          <div className="absolute left-0 h-full border-l-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          <div className="text-txt-tertiary group-hover:text-txt-accent pl-2 transition-all duration-200 group-hover:translate-x-1">
                            <div className="flex items-center gap-2">
                              <div className="flex size-4 shrink-0 items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide" aria-hidden="true">
                                  <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                  <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
                                </svg>
                              </div>
                              <div className="w-full">
                                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                                  <div className="text-left whitespace-nowrap">Communication & Collaboration</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="group relative w-full cursor-pointer transition-colors" href="/marketplace/categories/development-and-devops#list">
                          <div className="absolute left-0 h-full border-l-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          <div className="text-txt-tertiary group-hover:text-txt-accent pl-2 transition-all duration-200 group-hover:translate-x-1">
                            <div className="flex items-center gap-2">
                              <div className="flex size-4 shrink-0 items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide" aria-hidden="true">
                                  <path d="m18 16 4-4-4-4" />
                                  <path d="m6 8-4 4 4 4" />
                                  <path d="m14.5 4-5 16" />
                                </svg>
                              </div>
                              <div className="w-full">
                                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                                  <div className="text-left whitespace-nowrap">Development & DevOps</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="group relative w-full cursor-pointer transition-colors" href="/marketplace/categories/engineering#list">
                          <div className="absolute left-0 h-full border-l-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          <div className="text-txt-tertiary group-hover:text-txt-accent pl-2 transition-all duration-200 group-hover:translate-x-1">
                            <div className="flex items-center gap-2">
                              <div className="flex size-4 shrink-0 items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide" aria-hidden="true">
                                  <rect width="18" height="18" x="3" y="3" rx="2" />
                                  <path d="M11 9h4a2 2 0 0 0 2-2V3" />
                                  <circle cx="9" cy="9" r="2" />
                                  <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
                                  <circle cx="15" cy="15" r="2" />
                                </svg>
                              </div>
                              <div className="w-full">
                                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                                  <div className="text-left whitespace-nowrap">Engineering</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="group relative w-full cursor-pointer transition-colors" href="/marketplace/categories/importers#list">
                          <div className="absolute left-0 h-full border-l-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          <div className="text-txt-tertiary group-hover:text-txt-accent pl-2 transition-all duration-200 group-hover:translate-x-1">
                            <div className="flex items-center gap-2">
                              <div className="flex size-4 shrink-0 items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide" aria-hidden="true">
                                  <path d="M12 13v8" />
                                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                                  <path d="m8 17 4-4 4 4" />
                                </svg>
                              </div>
                              <div className="w-full">
                                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                                  <div className="text-left whitespace-nowrap">Importers</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a className="group relative w-full cursor-pointer transition-colors" href="/marketplace/categories/integrations#list">
                          <div className="absolute left-0 h-full border-l-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                          <div className="text-txt-tertiary group-hover:text-txt-accent pl-2 transition-all duration-200 group-hover:translate-x-1">
                            <div className="flex items-center gap-2">
                              <div className="flex size-4 shrink-0 items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide" aria-hidden="true">
                                  <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" />
                                </svg>
                              </div>
                              <div className="w-full">
                                <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                                  <div className="text-left whitespace-nowrap">Integrations</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </nav>
                    </div>
                    <div className="hidden max-w-2xl flex-col gap-4 rounded lg:mr-10 lg:flex">
                      <div className="flex flex-col gap-1">
                        <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-570">Request an app</div>
                        <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Can't find the app you're looking for?</div>
                      </div>
                      <a className="flex justify-start" href="https://sites.plane.so/intake/c7b12cfb73dc4040a623ddec658116bb/" rel="noopener noreferrer" target="_blank">
                        <button className="btn-secondary inline font-inter !px-3 !py-1.5 !text-[14px] !leading-[21px]">
                          <div className="flex items-center gap-2">
                            <div>Submit a request</div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right h-4 w-4" aria-hidden="true">
                              <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                              <path d="m21 3-9 9" />
                              <path d="M15 3h6v6" />
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </aside>
                </div>
                <div className="col-span-1 lg:col-span-4">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <h6 className="md:whitespace-pre-line font-satoshi [font-feature-settings:'cv05','cv08'_0,'ss02','ss03'] text-[20px] leading-[1.3] tracking-[-0.03em] text-txt-primary font-430">Browse all</h6>
                      <div className="md:whitespace-pre-line font-inter text-400 text-txt-secondary font-430">Reports summarize progress so leads can spot risks before they grow.</div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <a href="/marketplace/asana">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Asana" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/99d09b6348a04b0ca34b23ffaf00a43a-asana-20avatar-7aefb182.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Asana</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Placeholder copy describes the benefit here in a neutral, generic way. Small teams start quickly.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Importers</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/claude">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Claude" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/02697ae46e83434e98e954e3031914bb-claude-color-afdc1cfd.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Claude</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Admins get the controls they need while members keep a calm.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Agents</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Engineering</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/clickup">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="ClickUp" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/6a80cfdce4ea4f248326c016c07879bf-clickup2-d52c175e.jpeg" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">ClickUp</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Bring existing data along and pick up right where the team left off. This section explains the idea.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Importers</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/confluence">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Confluence" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/061f29f9169a4acd9892e11f82c7c421-confluence_icon-53ccbf37.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Confluence</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Connect the tools you already use and keep updates flowing in both directions. The workspace.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Importers</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/cursor">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Cursor" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/a989ac1cd46f4d36b7f87ea6990ad365-app_icon_25d_dark-fa51548d.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Cursor</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Let Cursor execute work directly from your Plane work items</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Agents</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Development & DevOps</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Engineering</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/drawio">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Draw.io" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/9d2faa735a5b4fc0a3643c64116fc7b3-idj2cqy2cz_1759859786868-ef743b8f.jpeg" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Draw.io</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Admins get the controls they need while members keep a calm, focused view. Teams today.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Development & DevOps</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Engineering</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/github">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="GitHub" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/3561c588dc474a1382ab07c3b86b151e-github-mark-20abc06a.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">GitHub</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Connect and sync your GitHub work items with Plane.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Development & DevOps</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Engineering</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Integrations</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/github-enterprise">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="GitHub Enterprise Server" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/da0a45aac5ba4684922df771a1d32ba7-github-254f931d.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">GitHub Enterprise Server</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">This section explains the idea in plain words so readers well.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Development & DevOps</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Engineering</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Integrations</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/gitlab">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="GitLab" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/27e7d7c7bb244153a39318acbcc58a82-gitlab_icon-logo_brandlogos.net_tschk-4b38981b.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">GitLab</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Connect and sync your Gitlab Merge Requests with Plane.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Development & DevOps</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Engineering</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Integrations</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/gitlab-enterprise">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="GitLab Enterprise" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/618b2dfaa7e4427a97a0cce3928e1be9-gitlab-logo-500-4c490c7e.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">GitLab Enterprise</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Use the views you prefer and switch between them today.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Development & DevOps</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Integrations</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/jira">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Jira" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/946ee7cc89f0414b88bec75610e24045-jira_icon-575546cc.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Jira</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">The workspace stays fast and simple even as more people join the effort. Sample text.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Importers</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/jira-server">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Jira Server" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/5173f12166c54e2fb439a4d101a8aedf-jira_icon-446fa498.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Jira Server</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">A short description of how this feature helps teams plan and ship work. Placeholder copy today.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Importers</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/linear">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Linear" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/6d0129dc1fef415e8150a5a0ae2cc055-linear-4e6decef.jpeg" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Linear</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Everyone can see what is planned, what is in progress, and what is done. Bring existing data.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Importers</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/notion">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Notion" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/b7394a23ab24407fb754d6c3240b0095-notion-f6b499a5.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Notion</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Admins get the controls they need while members keep a calm, focused view. Teams keep their projects.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Importers</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/raycast">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Raycast" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/8677335f82e247c59144f7a084051931-raycast_ide-hcbj9b_1-d95e5c7f.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Raycast</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">The workspace stays fast and simple even as more people join the effort. Sample.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Engineering</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Integrations</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/sentry">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Sentry" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/7758aa6d993a4bd29873ba0cd3ab56db-sentry-logo-fb944da1.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Sentry</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Connect your Sentry workspace with Plane.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Analytics & Reporting</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Engineering</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Integrations</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/slack">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="Slack" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/3ac7ba7ac322471f8d7e42fbd4c99eac-slack_mark-logo_brandlogos.net_45ac3-184f22e7.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">Slack</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">Connect your Slack workspace with Plane.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Communication & Collaboration</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                      <a href="/marketplace/vs-code-mcp">
                        <div className="bg-white hover:bg-surface-2 border-line-n2 flex h-full flex-col gap-4 rounded-xl border p-4 transition-all duration-300 hover:cursor-pointer">
                          <div className="flex items-center gap-2">
                            <div className="border-line-n2 flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm">
                              <img alt="VS Code MCP" width="48" height="48" className="size-12 rounded-lg p-2" src="/assets/compare/fef2d965704544e78d4259cc478e2ed2-visual-20studio-20code-20-28vs-20code-29-37f1046d.png" />
                            </div>
                            <div className="w-full">
                              <div className="md:whitespace-pre-line font-inter text-500 text-txt-primary font-bold">
                                <div className="[text-wrap:wrap]">VS Code MCP</div>
                              </div>
                              <div className="md:whitespace-pre-line font-inter text-300 text-txt-primary font-430">
                                <div className="line-clamp-1 [text-wrap:wrap]">By Plane</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex h-full flex-col gap-3">
                            <div className="flex flex-col gap-2">
                              <div className="md:whitespace-pre-line font-inter text-400 text-txt-primary font-430">
                                <div className="line-clamp-2">This section explains the idea in plain words so readers.</div>
                              </div>
                            </div>
                            <div className="mt-auto overflow-hidden">
                              <div className="flex flex-wrap gap-1.5">
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Agents</span>
                                <span className="bg-surface-2 text-txt-secondary font-inter inline-flex rounded-full px-2.5 py-1 text-xs font-semibold">Engineering</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---- section 2 ---- */}
      <div className="pb-16">
        <div className="container-page">
          <div className="bg-[#001b29] flex h-full w-full flex-col justify-between gap-6 rounded-lg p-16 md:flex-row">
            <div className="flex w-full flex-col gap-6">
              <div className="relative size-12 shrink-0">
                <img alt="Plane" className="object-contain" style={{"position":"absolute","height":"100%","width":"100%","left":"0","top":"0","right":"0","bottom":"0"}} src="/assets/compare/logo-light.svg" />
              </div>
              <div className="mt-auto flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h5 className="md:whitespace-pre-line font-satoshi text-[22px] leading-[1.3] tracking-[-0.03em] md:text-[24px] text-txt-primary font-430">
                    <span className="text-white">Build your own app</span>
                  </h5>
                  <div className="md:whitespace-pre-line font-inter text-400 text-txt-tertiary font-430">
                    <div className="text-white/50">Reports summarize progress so leads can spot risks before they grow. Everyone again here.</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a target="_blank" className="btn-primary inline font-inter !px-3 !py-1.5 !text-[14px] !leading-[21px]" href="https://developers.plane.so/dev-tools/build-plane-app/overview">Build an app</a>
                  <a target="_blank" className="btn-secondary-dark inline font-inter !px-3 !py-1.5 !text-[14px] !leading-[21px]" href="https://sites.plane.so/intake/c7b12cfb73dc4040a623ddec658116bb/">Request an app</a>
                </div>
              </div>
            </div>
            <div>
              <img alt="Integrations" width="616" height="493" className="grid h-auto w-full rounded-xl" srcSet="/assets/compare/marketplace-cta-dark.webp 3.2188x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
