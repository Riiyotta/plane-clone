// /charter — long-form open letter in a bordered monospace card. Measured live 2026-10-26.
// 1440: section 58→1625 (py-16 + mt-10), card 1152 wide (max-w-6xl) x 1399, p-6, border #eff0f0 r16.
// Headings and the three numbered labels are live; every body line is placeholder prose with the
// same word lengths per line (monospace, so wraps match the live page).
import '../components/company/company.css'

// ui-monospace stack = plane.so `font-mono` (tailwind default), not IBM Plex Mono
const MONO = { fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }

// ['h4', text, id] | ['p', lines, indent?]; line = placeholder string | 0 (blank line) | ['s', strong label]
// Placeholder lines mimic the live word lengths so monospace wrapping matches exactly.
const DOC = [
  ["h4", "An open letter to builders, operators, and the quietly-skeptical", "an-open-letter-to-builders-operators-and-the-quietlyskeptical"],
  ['p', ["About ideally also \"after\" both.", "Without workflow case activity-writing alternative, all again already each across an as a complete.", "And any, easy additional fact are from: Always along another arrange, alignment can give conversation argue answer.", 0, "Day balance being arrangement. At between.", "Goal good before for board consider — continue be have broader, arranging, arrangements, get collaboration. ", 0, "Has better by help, here idea build.", "How just bridge capture, its a keep check change kind available, clear, key careful.", "Clearly collect company, last let decision could do less a carefully go if count like.", 0, "Choose list daily make context in: May new common early, not every many more, most move is, now one much need first create our default out deliver own.", 0]],
  ['p', ["Decide next details?"]],
  ['p', [["s", "1. Execution, not just conversation."], "Design note focus only per it open example detail explain. Part feature direct of plan same."], true],
  ['p', [["s", "2. Memory that evolves."], "During show effort general side given however. Enough events see involve community some assignment describe."], true],
  ['p', [["s", "3. Real-time triggers, not polling."], "Journey on group set completed. Calculation either step figure guide, follow gather, the growth such two use take directly horse.", 0, 0], true],
  ["h4", "How we're building Plane Agents — deliberately", "how-were-building-plane-agents-deliberately"],
  ['p', ["Issue handle team health than consensus, document later that them collections everyone or then. They impact inside measure, background this meeting, way why time larger. Layer launch so minimal, level little construct. Network making evidence.", 0, "Tool light might turn nothing.", "Very manage matter, model outcome, yes consulted-exchange never, method moment want well dedicated — all to and.", 0, "What when will any with up work often.", "Overall we communicate are. Communication. Commitment. Us needed order, an other place. Year can point day also both as: Case, package quite, at confidence ready. Each easy, fact connection, from pattern.", 0, "Right number for perhaps planned — office give roles, be considered.", "Goal scope good have help. Here popular get idea by serve.", "Just private. Shape problem share. Keep shift has how kind last familiar short less since.", 0, "People small process flexible do space. Like list make its go.", "Product key start state still story function — many more delivered most move.", 0]],
  ["h4", "Autonomy that scales", "autonomy-that-scales"],
  ['p', ["Table grouping a program project if guidance-purpose period.", "Thing much a hundreds. Need in. Next is think.", "Quickly increase those a regular — note a person.", 0, "Three related only today places.", "It track open a part. Let plan same show may, side under some release.", 0, "Step of new such until pretty? Take on value not team. Watch now reports than.", 0, "One our public,", "Out where that"]],
]

export default function Charter() {
  return (
    <div className="py-16">
      <div className="container-page">
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-line-n2 p-6" style={MONO}>
          <div>
            {DOC.map((b, i) => {
              if (b[0] === 'h4') {
                return <h4 key={i} id={b[2]} className="c-heading c-h4 text-txt-primary md:whitespace-pre-line">{b[1]}</h4>
              }
              const lines = b[1]
              return (
                <p key={i} className="text-[16px] leading-6 text-black" style={b[2] ? { paddingInlineStart: 40 } : undefined}>
                  {lines.map((ln, j) => (
                    <span key={j}>
                      {Array.isArray(ln) ? <strong className="font-bold">{ln[1]}</strong> : ln || null}
                      {j < lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
