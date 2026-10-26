// Neutral, original placeholder prose (PAGES_BRIEF content rule).
// ph(n, seed) returns English filler of ~n characters (within a word), so line wrapping
// and block heights stay close to the live page without copying plane.so paragraphs.
const POOL = [
  'Teams use this space to plan upcoming work and keep everyone aligned on priorities.',
  'Each update is captured in one place so progress stays visible across the group.',
  'This placeholder sentence stands in for the original copy on this part of the page.',
  'Work moves from idea to delivery with clear owners, shared context, and steady rhythm.',
  'A short note describing how the product supports everyday planning and review.',
  'Details are kept brief here so the layout, spacing, and line length stay accurate.',
  'Projects, documents, and conversations remain connected to the work they describe.',
  'The team reviews outcomes regularly and adjusts the plan as conditions change.',
  'Simple defaults help new groups get started, while deeper options appear over time.',
  'Everyone can see what is in progress, what is blocked, and what ships next.',
  'This text is neutral filler written to match the length of the original paragraph.',
  'Decisions are recorded alongside the tasks they affect, so context is never lost.',
]

export function ph(len, seed = 0) {
  if (!len || len <= 0) return ''
  let s = ''
  let i = Math.abs(seed) % POOL.length
  while (s.length < len) {
    s += (s ? ' ' : '') + POOL[i]
    i = (i + 1) % POOL.length
  }
  if (s.length <= len) return s
  let cut = s.lastIndexOf(' ', len - 1)
  if (cut < Math.min(len * 0.6, len - 12)) cut = len - 1
  s = s.slice(0, cut).replace(/[\s,.;:]+$/, '')
  return len > 20 ? s + '.' : s
}
