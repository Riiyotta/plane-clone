// Inline lucide icons used by plane.so on the plans pages (paths copied from the live SVGs).
const svg = (children, size = 20) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

export const LUCIDE = {
  check: svg(<path d="M20 6 9 17l-5-5" />),
  sliders: svg(
    <>
      <line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" /><line x1="21" x2="12" y1="12" y2="12" />
      <line x1="8" x2="3" y1="12" y2="12" /><line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" />
      <line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />
    </>
  ),
  sparkles: svg(
    <>
      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
      <path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" />
    </>
  ),
  shield: svg(
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M12 22V2" />
    </>
  ),
}
export const lucide = svg

// comparison-table marks (18px, filled circle)
export const YES = (
  <svg className="text-current" fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#36AB57" height="18" rx="9" width="18" />
    <path d="M12.84 5.9C12.99 5.75 13.24 5.75 13.387 5.9C13.54 6.05 13.54 6.29 13.387 6.44L7.73 12.1C7.58 12.252 7.34 12.252 7.18 12.1L4.61 9.53C4.46 9.38 4.46 9.14 4.61 8.98C4.75 8.84 4.98 8.83 5.13 8.96L5.16 8.98L7.46 11.28L12.84 5.9Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
  </svg>
)
export const NO = (
  <svg className="text-current" fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
    <rect fill="#DB3E33" height="18" rx="9" width="18" />
    <path d="M11.43 6.1C11.56 5.97 11.77 5.97 11.9 6.1C12.03 6.23 12.03 6.44 11.9 6.57L6.57 11.9C6.44 12.03 6.23 12.03 6.1 11.9C5.97 11.77 5.97 11.56 6.1 11.43L11.43 6.1Z" fill="white" />
    <path d="M6.1 6.1C6.23 5.97 6.44 5.97 6.57 6.1L11.9 11.43L11.93 11.46C12.03 11.587 12.02 11.78 11.9 11.9C11.78 12.02 11.587 12.03 11.46 11.93L11.43 11.9L6.1 6.57C5.97 6.44 5.97 6.23 6.1 6.1Z" fill="white" />
    <path d="M11.43 6.1C11.56 5.97 11.77 5.97 11.9 6.1C12.03 6.23 12.03 6.44 11.9 6.57L6.57 11.9C6.44 12.03 6.23 12.03 6.1 11.9C5.97 11.77 5.97 11.56 6.1 11.43L11.43 6.1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
    <path d="M6.1 6.1C6.23 5.97 6.44 5.97 6.57 6.1L11.9 11.43L11.93 11.46C12.03 11.587 12.02 11.78 11.9 11.9C11.78 12.02 11.587 12.03 11.46 11.93L11.43 11.9L6.1 6.57C5.97 6.44 5.97 6.23 6.1 6.1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.7" />
  </svg>
)
