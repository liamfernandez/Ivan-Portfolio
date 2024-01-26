/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        myanmar: ["Myanmar Sangam MN", 'sans-serif'],
        bangala: ["Bangala Sangam MN", 'sans-serif']
      }
    },
  },
  plugins: [],
}
