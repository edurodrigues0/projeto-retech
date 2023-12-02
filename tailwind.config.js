/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat , sans-serif',
      },
      backgroundImage: {
        'background-texture': "url('./public/bg.svg')",
      },
      colors: {
        'dark-green': '#004b23',
      },
    },
  },
  plugins: [],
}
