/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '640px' },
        'sm-md': { 'max': '1100px' },
        'md': { 'min': '641px', 'max':'1100px' }
      }
    },
  },
  plugins: [],
}

