/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'lg': '2px 4px 8px rgb(0, 0, 0)'
      }
    },
  },
  plugins: [],
}

