/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: { 900: '#0a0a0a', 800: '#131313' }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0,0,0,.06), 0 10px 30px rgba(0,0,0,.10)'
      }
    },
  },
  plugins: [],
}
