/**
 * Theme configuration for BIO_LOGIC portfolio
 * Extracted from original HTML design
 */

export const theme = {
  colors: {
    primary: '#2D3422', // Deep forest green
    'background-light': '#F5F2EA', // Soft cream
    'background-dark': '#1A1C14', // Dark earthy charcoal
    'sage-green': '#8BA888',
    'moss-green': '#4A5D45',
    terracotta: '#C36A4D',
    'earthy-brown': '#5D4037',
    charcoal: '#262626',
  },
  spacing: {
    // Standard spacing values used throughout
    section: '1.5rem', // gap-6
    card: '1.5rem', // gap in masonry grid
  },
  typography: {
    fontFamilies: {
      display: ['Archivo', 'sans-serif'],
      sans: ['Inter', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  },
  borderRadius: {
    DEFAULT: '0.75rem',
    xl: '1.5rem',
  },
  scrollbar: {
    width: '8px',
    trackLight: '#F5F2EA',
    thumbLight: '#8BA888',
    trackDark: '#1A1C14',
    thumbDark: '#4A5D45',
  },
} as const;
