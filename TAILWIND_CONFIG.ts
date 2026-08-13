import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',
        'dark-gray': '#1a1a1a',
        gold: '#b8975a',
        'gold-light': '#d4af88',
        border: '#333',
        text: '#e5e5e5',
        'text-muted': '#999',
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", 'serif'],
        sans: ["'Outfit'", 'sans-serif'],
      },
      spacing: {
        'container-padding': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
