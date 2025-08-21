/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-custom': '#C8A8D8',
        'coral': '#FF7F7F',
      }
    },
  },
  plugins: [],
}

