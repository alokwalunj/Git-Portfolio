/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Calibre', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        background: 'rgb(60, 66, 55)',
        foreground: 'rgb(230, 225, 215)',
        accent: 'rgb(200, 180, 160)',
      },
    },
  },
  plugins: [],
};