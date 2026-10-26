// "Plane vs X, feature by feature" table (v2 template). Row labels / cell values are data-driven.
import { t, StatusIcon, Lines } from './ui.jsx'

function Cell({ icon, text }) {
  return (
    <td className="content-start p-4">
      <div className="relative flex h-full w-full flex-col items-start justify-start gap-3 md:flex-row">
        {icon && (
          <div className="pt-1">
            <StatusIcon type={icon} />
          </div>
        )}
        <div className="text-left">
          <div className={`${t.bodySm} text-txt-secondary md:whitespace-pre-line`}><div><p>{text}</p></div></div>
        </div>
      </div>
    </td>
  )
}

export default function FeatureTable({ d }) {
  return (
    <div id="feature-table">
      <div className="bg-surface-1 py-16">
        <div className="container-page">
          <div className="flex flex-col gap-12">
            <div className="mx-auto flex max-w-[700px] flex-col items-center gap-6 text-center">
              <div className="flex w-full flex-col items-center gap-2 self-stretch text-center">
                <h2 className="h2 w-full text-txt-primary md:whitespace-pre-line"><div><p>{d.h2}</p></div></h2>
                {d.sub && (
                  <div>
                    <Lines lines={d.sub} className={`${t.bodyBase} text-txt-secondary md:whitespace-pre-line`} />
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 overflow-auto">
              <table className="font-satoshi text-[16px] font-normal leading-[24px] text-black">
                <thead>
                  <tr className="rounded-xl border-b border-line-subtle">
                    <td className="p-4" style={{ width: '34%' }}>
                      <div className="flex h-full w-full items-center justify-start gap-3">
                        <div className="text-left"><div className={`${t.bodyBase} font-medium text-txt-primary md:whitespace-pre-line`}>Capability</div></div>
                      </div>
                    </td>
                    <td className="p-4" style={{ width: '33%' }}>
                      <div className="flex h-full w-full items-center justify-start gap-3">
                        <div className="text-left"><div className={`${t.bodyBase} font-medium text-txt-primary md:whitespace-pre-line`}>{d.competitor}</div></div>
                      </div>
                    </td>
                    <td className="p-4" style={{ width: '33%' }}>
                      <div className="flex h-full w-full items-center justify-start gap-3">
                        <div>
                          <div className="[&_img]:max-h-7 [&_img]:w-auto [&_img]:object-contain">
                            <img src="/assets/compare/plane-logo.svg" alt="plane-logo svg" width="95" height="20" className="w-full" />
                          </div>
                        </div>
                        <div className="text-left" />
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {d.groups.map((g, gi) => [
                    g.group && (
                      <tr key={`g${gi}`}>
                        <td colSpan={3} className="px-4 py-3">
                          <div className={`${t.bodyBase} font-570 text-txt-primary md:whitespace-pre-line`}>{g.group}</div>
                        </td>
                      </tr>
                    ),
                    ...g.rows.map((r) => (
                      <tr key={`${gi}-${r.label}`} className="rounded-xl border-t border-line-n2">
                        <td className="content-start p-4">
                          <div className="relative flex h-full w-full flex-col items-start justify-start gap-3 md:flex-row">
                            <div className="text-left">
                              <div className={`${t.bodyBase} font-570 text-txt-tertiary md:whitespace-pre-line`}>{r.label}</div>
                              {r.sub && <div className={`${t.bodySm} text-txt-secondary md:whitespace-pre-line`}><div><p>{r.sub}</p></div></div>}
                            </div>
                          </div>
                        </td>
                        {r.cells.map((cell, ci) => (
                          <Cell key={ci} icon={cell.icon} text={cell.text} />
                        ))}
                      </tr>
                    )),
                  ])}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
