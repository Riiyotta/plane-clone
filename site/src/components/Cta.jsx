// CLONE_SPEC §14 — CTA
export default function Cta() {
  return (
    <section
      aria-label="Cta"
      id="cta"
      className="bg-[url('/assets/cta-bg.webp')] bg-cover bg-center bg-no-repeat py-20"
    >
      <div className="container-page">
        <div className="flex flex-col items-center space-y-10 text-center">
          <h2 className="h1 text-txt-d-primary md:whitespace-pre-line">
            {'Next-gen project management\nstarts here'}
          </h2>
          <div className="flex w-full flex-wrap items-center justify-center gap-4">
            <a className="btn-primary-dark" href="https://app.plane.so/sign-up/">Get started free</a>
            <a className="btn-secondary-dark" href="https://plane.so/talk-to-sales">Talk to a migration expert</a>
          </div>
        </div>
      </div>
    </section>
  )
}
