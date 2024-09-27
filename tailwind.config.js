/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        serif: ['Serif', 'sans-serif', 'times-now-roman'],
        bebasneue: ['Bebas Neue', 'sans-serif'],
        platypi: ['Platypi', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
        roboto: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"]
      },
      colors: {
        custom1: '#96d0c5',
        custom2: '#73c3c1',
      },
    },
  },
  plugins: [],
}

