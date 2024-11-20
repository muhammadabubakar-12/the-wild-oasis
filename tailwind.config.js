/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fix-48rem': '48rem',
        'fix-1fr': '26rem 1fr',
        'cabin-header': ' 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr',
      },
      gridTemplateRows: {
        'auto-1fr': 'auto 1fr',
      },
      colors: {
        'gray-0': '#fff',
      },
      fontFamily: {
        sono: 'Sono',
      },
    },
  },
  plugins: [],
};
