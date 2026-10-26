// Data shared by several plan pages.
import { ph } from './ph.js'

export const img = (src, w, h) => ({ src, w, h })
export const learn = (href, label = 'Learn more ▸') => ({ label, href })
export const TRY = (label = 'Try Plane for 14 days') => ({ label, href: 'https://app.plane.so/sign-up/' })
export const HUMAN = { label: 'Talk to a human', href: '/talk-to-sales', variant: 'secondary' }

// "Designed for delight" six-card grid (pro, business)
export const DELIGHT_CARDS = [
  { image: img('abstract-cmd-k-grid.webp', 1612, 908), title: 'Command K everything', body: ph(108, 887) },
  { image: img('screenshot-ai-search-grid.webp', 1612, 908), title: 'AI-powered search', body: ph(85, 888) },
  { image: img('abstract-real-time-grid.webp', 1612, 908), title: 'Real-time collaboration', body: ph(100, 889) },
  { image: img('screenshot-features-grid.webp', 1612, 908), title: 'Progressive complexity', body: ph(109, 890) },
  { image: img('screenshot-slash-command-grid.webp', 1612, 908), title: 'Slash commands everywhere', body: ph(93, 891) },
  { image: img('screenshot-convert-to-work-item-grid-1.webp', 1612, 908), title: 'Turn text into work items', body: ph(90, 892) },
]

export const SELF_HOSTED_BULLETS = (third = 'Built for restricted environments') => [
  { icon: 'sliders', text: 'Full infrastructure control' },
  { icon: 'sparkles', text: 'AI and agents in your environment' },
  { icon: 'shield', text: third },
]
