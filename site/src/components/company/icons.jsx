// Lucide icons used on company pages (paths copied from the live inline SVGs).
const base = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
const I = (children) => function Icon({ size = 16, className = '', ...rest }) {
  return <svg {...base} width={size} height={size} className={className} {...rest}>{children}</svg>
}
export const PlaneIcon = I(<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />)
export const ScanSearchIcon = I(<><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><circle cx="12" cy="12" r="3" /><path d="m16 16-1.9-1.9" /></>)
export const SearchIcon = I(<><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></>)
export const BinocularsIcon = I(<><path d="M10 10h4" /><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" /><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" /><path d="M 22 16 L 2 16" /><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" /><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" /></>)
export const PlayIcon = I(<polygon points="6 3 20 12 6 21 6 3" />)
export const PlusIcon = I(<><path d="M5 12h14" /><path d="M12 5v14" /></>)
export const MinusIcon = I(<path d="M5 12h14" />)
export const ChevronDownIcon = I(<path d="m6 9 6 6 6-6" />)
export const ArrowLeftIcon = I(<><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></>)
export const TextIcon = I(<><path d="M17 6.1H3" /><path d="M21 12.1H3" /><path d="M15.1 18H3" /></>)
export const Share2Icon = I(<><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></>)
export const PauseIcon = I(<><rect x="14" y="4" width="4" height="16" rx="1" /><rect x="6" y="4" width="4" height="16" rx="1" /></>)
