// Deterministic neutral placeholder copy of a given character length.
// Long-form bodies (legal, blog, changelog, jobs, stories) use this instead of copying plane.so prose.
const SENTENCES = [
  'Teams use this space to plan and track their work across projects with clear owners and shared context.',
  'Each update stays visible to the people who need it, so decisions move faster and nothing gets lost.',
  'This section explains how requests, settings, and records are handled in a simple and consistent way.',
  'You can review the details below and adjust the options that fit your workflow.',
  'Reach out to the team if anything here is unclear or needs more detail.',
  'Information is organized into short steps so readers can find the part that applies to them.',
  'The product helps groups coordinate releases, document their choices, and keep progress easy to follow.',
  'A short description of how this feature helps teams plan and ship work.',
  'Work moves from idea to delivery with fewer handoffs and less manual tracking.',
  'Everyone sees the same priorities, which keeps planning conversations focused and brief.',
  'Small changes add up over time when the process stays predictable for every contributor.',
  'Use the options described here to match the way your organization already operates.',
]

function hash(s) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619)
  return Math.abs(h)
}

// Placeholder words wrap slightly tighter than real copy; scale lengths so line counts match (measured ~4%).
export const DENSITY = 1.06

export function ph(n, seed = 0, raw = false) {
  if (!n || n < 2) return ''
  if (!raw && n > 40) n = Math.round(n * DENSITY)
  let i = typeof seed === 'number' ? seed : hash(String(seed))
  let out = ''
  while (out.length < n + 1) out += (out ? ' ' : '') + SENTENCES[i++ % SENTENCES.length]
  if (out.length <= n) return out
  let cut = out.slice(0, n - 1)
  const sp = cut.lastIndexOf(' ')
  if (sp > 0) cut = cut.slice(0, sp)
  else cut = 'Work'
  cut = cut.replace(/\s+(the|a|an|and|to|of|for|with|in|is|are|it|so|that|your|their|which)$/i, '')
  cut = cut.replace(/[ ,.;:]+$/, '')
  // trailing filler words would read as nonsense, so accept a word-boundary cut (a few chars short)
  return cut + '.'
}

// Short label-like placeholder (no trailing period), used for bold lead-ins and short cells.
export function phLabel(n, seed = 0) {
  const t = ph(n + 1, seed)
  return t.slice(0, -1)
}
