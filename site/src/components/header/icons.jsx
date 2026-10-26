// Asset SVGs drawn via CSS mask so they take `currentColor` (needed for hover → #006399).
export function MaskIcon({ src, size = 16, className = '' }) {
  const m = `url("${src}")`
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        width: size, height: size,
        WebkitMaskImage: m, maskImage: m,
        WebkitMaskSize: 'contain', maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center', maskPosition: 'center',
      }}
    />
  )
}

// lucide icons (24 viewBox, stroke 2) — inline, matching the live markup
function Lucide({ size = 16, className = '', children }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={className} aria-hidden="true">
      {children}
    </svg>
  )
}
export const MenuIcon = (p) => <Lucide {...p}><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></Lucide>
export const XIcon = (p) => <Lucide {...p}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></Lucide>
export const ChevronRight = (p) => <Lucide {...p}><path d="m9 18 6-6-6-6" /></Lucide>
export const ArrowUpRight = (p) => <Lucide {...p}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></Lucide>
export const LogIn = (p) => <Lucide {...p}><path d="m10 17 5-5-5-5" /><path d="M15 12H3" /><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /></Lucide>
