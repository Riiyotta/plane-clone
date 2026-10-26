// Lucide-style icons (stroke 2, currentColor) used across the collections pages.
const P = {
  copy: <><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></>,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronRight: <path d="m9 18 6-6-6-6" />,
  chevronLeft: <path d="m15 18-6-6 6-6" />,
  arrowRight: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  arrowLeft: <><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></>,
  arrowUpRight: <><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>,
  search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
  ellipsis: <><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></>,
  external: <><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></>,
  link: <><path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" /><line x1="8" x2="16" y1="12" y2="12" /></>,
  textSearch: <><path d="M21 6H3" /><path d="M10 12H3" /><path d="M10 18H3" /><circle cx="17" cy="15" r="3" /><path d="m21 19-1.9-1.9" /></>,
  x: <><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  plus: <><path d="M5 12h14" /><path d="M12 5v14" /></>,
  minus: <path d="M5 12h14" />,
}

export function Icon({ name, className = 'size-4', strokeWidth = 2 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {P[name]}
    </svg>
  )
}

export const ShareIcons = {
  linkedin: (
    <svg fill="currentColor" height="20" width="20" viewBox="0 0 25 24" aria-hidden="true"><path d="M22.82 0H2.37C1.39 0 0.6 0.77 0.6 1.73V22.27C0.6 23.22 1.39 24 2.37 24H22.82C23.8 24 24.6 23.22 24.6 22.27V1.73C24.6 0.77 23.8 0 22.82 0ZM7.72 20.45H4.16V9H7.72V20.45ZM5.94 7.43C4.8 7.43 3.87 6.51 3.87 5.37C3.87 4.23 4.8 3.31 5.94 3.31C7.08 3.31 8 4.23 8 5.37C8 6.51 7.08 7.43 5.94 7.43ZM21.05 20.45H17.49V14.88C17.49 13.56 17.47 11.85 15.64 11.85C13.790 11.85 13.51 13.29 13.51 14.79V20.45H9.96V9H13.37V10.56H13.42C13.89 9.66 15.05 8.71 16.78 8.71C20.386 8.71 21.05 11.08 21.05 14.17V20.45V20.45Z" /></svg>
  ),
  x: (
    <svg fill="currentColor" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.33 1.9H21.7L14.33 10.33L23 21.79H16.21L10.894 14.838L4.81 21.79H1.43L9.32 12.78L1 1.9H7.96L12.77 8.26L18.33 1.9ZM17.14 19.77H19.01L6.95 3.82H4.94L17.14 19.77Z" /></svg>
  ),
  reddit: (
    <svg fill="currentColor" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.870-7.004 4.870-3.874 0-7.004-2.176-7.004-4.870 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-1.828 0-2.016-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
  ),
  hn: (
    <svg fill="none" height="20" width="20" viewBox="4 4 188 188" aria-hidden="true"><path d="m4 4h188v188h-188z" fill="#000" /><path d="m73.25 45.01 22.75 47.39 22.75-47.39h19.57l-34.32 64.49v41.49h-15.98v-41.49l-34.32-64.49z" fill="#fff" /></svg>
  ),
}
