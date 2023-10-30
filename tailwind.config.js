/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl' : '4px 4px 2px 0px rgba(0,0,0,0.75)'
      }
    },
  },
  plugins: [],
}

