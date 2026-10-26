// /one/why-plane-one — "Why Plane/One" essay (plane.so/one/why-plane-one).
// Essay body is placeholder prose (brief: long-form documents); headings, layout and links are reproduced.
import { A, Heading, Page, Text } from '../../components/plans/ui.jsx'
import { ph } from '../../components/plans/ph.js'

const U = ({ href, children }) => (
  <a className="underline" href={href}>
    {children}
  </a>
)

export default function WhyPlaneOne() {
  return (
    <Page>
      {/* plane.so renders this page in satoshi 16/24 w400, neutral-tertiary */}
      <div className="mx-auto max-w-3xl px-5 py-14 font-satoshi font-normal text-[#676c6f]">
        <div className="rounded-lg border border-[#f4d79a] bg-[#fbf2df] p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#ff6900]" aria-hidden="true">
                <path d="M12 10V2" />
                <path d="m4.93 10.93 1.41 1.41" />
                <path d="M2 18h2" />
                <path d="M20 18h2" />
                <path d="m19.07 10.93-1.41 1.41" />
                <path d="M22 22H2" />
                <path d="m16 6-4 4-4-4" />
                <path d="M16 18a4 4 0 0 0-8 0" />
              </svg>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <Heading size={6} text="We have sunset One." />
              <Text size="lg" text={ph(292, 832)} />
              <a className="max-w-fit cursor-pointer rounded-lg border border-[#f0c975] bg-[#fbf2df] px-4 py-2 text-[#676c6f] hover:bg-[#f8e6bf]" href="/pricing">
                All plans
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="w-full text-center">
            <Heading size={2} text="Why Plane/One" />
          </div>
          <Text size="lg" text={ph(152, 833)} />
          <div className="space-y-4">
            <Text text={ph(173, 834)} />
            <div className="space-y-3">
              <Text size="lg" text={ph(54, 835)} />
              <ul className="space-y-3 pl-6">
                {[85, 111].map((n, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#909598]" />
                    <Text text={ph(n, 847 + i)} />
                  </li>
                ))}
              </ul>
            </div>
            <Text text={ph(113, 836)} />
            <Text text={ph(228, 837)} />
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <Heading size={3} text="Plane One is an attempt at not leaving anyone behind." />
          <div className="space-y-4">
            <Text
              text={
                <>
                  {ph(8, 838)} <U href="https://plane.so/blog/how-we-got-to-20k-github-stars">extremely popular already</U>
                  {ph(275, 839)}
                </>
              }
            />
            <Text text={ph(636, 840)} />
            <Text
              text={
                <>
                  {ph(171, 841)} <U href="https://plane.so/pricing#storage">launching sometime soon</U>.
                </>
              }
            />
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <Heading size={3} text="Plane One isn't a pricing innovation. It doesn't have to be." />
          <div className="space-y-4">
            <Text text={ph(309, 842)} />
            <Text
              text={
                <>
                  {ph(33, 843)} <U href="https://once.com/">ONCE.COM</U>
                  {ph(298, 844)}
                </>
              }
            />
            <Text text={ph(125, 845)} />
            <Text text={ph(113, 846)} />
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div className="flex gap-8">
            {[
              ['vamsi-signature.webp', 'Vamsi signature', 'CEO, Plane'],
              ['vihar-signature.webp', 'Vihar signature', 'COO, Plane'],
            ].map(([src, alt, role]) => (
              <div key={src} className="flex flex-col gap-2">
                <img className="h-10 w-auto" src={A(src)} alt={alt} width="120" height="40" loading="lazy" />
                <div className="text-sm text-[#cfd2d3]">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  )
}
