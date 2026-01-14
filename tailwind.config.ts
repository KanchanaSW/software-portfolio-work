import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'] as string[],
        sans: ['var(--font-sans)', 'sans-serif'] as string[],
        mono: ['var(--font-mono)', 'monospace'] as string[],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        xl: '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
