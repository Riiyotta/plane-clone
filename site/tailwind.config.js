/** @type {import('tailwindcss').Config} */
// Tokens measured from plane.so — see ../CLONE_SPEC.md §0
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['satoshi', 'satoshi Fallback', 'sans-serif'],
        inter: ['inter', 'inter Fallback', 'sans-serif'],
        mono: ['IBM Plex Mono', 'IBM Plex Mono Fallback', 'monospace'],
      },
      fontWeight: { 430: '430', 570: '570' },
      maxWidth: { 336: '84rem', 384: '96rem' },
      colors: {
        surface: { 1: '#ffffff', 2: '#fafafa' },
        layer: { 1: '#f4f5f5', 'hover': '#eff0f0' },
        card: '#f7f7f8',
        stage: { window: '#f2f2f3', frame: '#e7e1d4' },
        dark: {
          bg: '#0f0f10', card: '#181a1b', footer: '#141415',
          border: '#2c2e30', divider: '#1d1f20', 'btn-border': '#36393a',
          subtle: '#222425', strong: '#36393a',
        },
        txt: {
          primary: '#1d1f20', secondary: '#4e5355', tertiary: '#676c6f', placeholder: '#80868a',
          accent: '#006399',
          'd-primary': '#e4e6e7', 'd-secondary': '#cacdce', 'd-tertiary': '#afb3b6',
          'd-placeholder': '#959a9d', 'd-accent': '#2893cc', 'on-color': '#fafafa',
        },
        line: { subtle: '#eaebeb', strong: '#dadcdd', n2: '#eff0f0', card: '#e4e6e7', tab: '#e4e5e6' },
        inverse: { DEFAULT: '#090b0c', hover: '#1d1f20', active: '#4e5355', dark: '#f5f5f5', 'dark-hover': '#e4e6e7', 'dark-text': '#0e0f10' },
        tab: { dark: '#111315', icon: '#4a4f54', box: '#f0f1f2', 'box-hover': '#e4e5e6', hover: '#f7f7f8', inactive: '#6b6f74' },
      },
      fontSize: {
        1200: ['58px', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
        1100: ['44px', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
        900: ['32px', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
        800: ['24px', { lineHeight: '1.5' }],
        600: ['18px', { lineHeight: '1.5' }],
        500: ['16px', { lineHeight: '1.5' }],
        400: ['14px', { lineHeight: '1.6' }],
        300: ['13px', { lineHeight: '1.5' }],
        'm-1200': ['36px', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
        'm-1100': ['32px', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
        'm-900': ['24px', { lineHeight: '1.3', letterSpacing: '-0.03em' }],
      },
      transitionTimingFunction: { ios: 'cubic-bezier(.32,.72,0,1)' },
    },
  },
  plugins: [],
}
