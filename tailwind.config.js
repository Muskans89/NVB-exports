/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       cream2: '#fee5b2',
        cream: '#fffbf5',
        yellow:'#d2ae35',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],  // Adding Forum font
      },
    },
  },
  plugins: [],
}
