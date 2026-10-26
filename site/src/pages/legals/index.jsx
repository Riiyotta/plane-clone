import { LegalHeader, LEGAL_LINKS } from '../../components/collections/LegalPage.jsx'

export default function Legals() {
  return (
    <div className="min-h-screen py-20 font-inter">
      <LegalHeader title="Legal" sub="Policies and agreements that apply to your use of Plane." />
      <div>
        <div className="container-page">
          <ul className="mx-auto flex max-w-3xl flex-col gap-4">
            {LEGAL_LINKS.map(([label, href]) => (
              <li key={href}>
                <a className="text-500 font-medium text-txt-accent underline-offset-4 transition-colors hover:text-txt-accent/80 hover:underline" href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
