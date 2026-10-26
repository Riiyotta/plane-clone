// CLONE_SPEC §4 — static logo grid (not a marquee)
const LOGOS = [
  ['Sony', 'sony'],
  ['Aramco', 'aramco'],
  ['Dolby', 'dolby'],
  ['Accenture', 'accenture'],
  ['Amazon', 'amazon'],
  ['Essor', 'essor'],
  ['40AU', 'forty-au'],
  ['Hypersonica', 'hypersonica'],
  ['SSI', 'ssi'],
  ['Ruby Labs', 'ruby-labs'],
  ['République Française', 'republique-francaise'],
  ['Government of Lithuania', 'gov-of-lithuania'],
  ['Mirador Therapeutics', 'mirador-therapeutics'],
  ['Texelis', 'texelis'],
  ['OptiGRÜN', 'optigrun'],
  ['Stark Bank', 'starkbank'],
  ['Datum', 'datum'],
  ['Power Integrations', 'power-integration'],
]

export default function Customers() {
  return (
    <section aria-label="Customers" id="logos" className="bg-white py-16 md:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-[1256px]">
          <p className="text-center text-[12px] font-medium leading-[18px] tracking-[0.12em] text-[#6B7075] uppercase">
            Trusted by teams at
          </p>
          <ul className="mt-8 grid grid-cols-3 gap-x-2 md:mt-10 md:grid-cols-6 md:gap-x-6">
            {LOGOS.map(([alt, file]) => (
              <li key={file} className="flex h-16 items-center justify-center px-2 md:h-[84px]">
                <img
                  alt={alt}
                  src={`/assets/${file}.svg`}
                  width="180"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="max-h-10 w-auto object-contain opacity-75 md:max-h-12"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
