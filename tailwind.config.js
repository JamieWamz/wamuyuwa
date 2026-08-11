/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07090d',
        panel: '#0d1118',
        line: '#202733',
        electric: '#67a8ff',
        ember: '#ffad66',
        mist: '#a8b0be',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 70px rgba(78, 145, 255, 0.18)',
      },
    },
  },
  plugins: [],
}
