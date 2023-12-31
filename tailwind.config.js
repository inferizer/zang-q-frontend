/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen:{
      mobile:"640px",
      desktop:"1024px"
    },
    extend: {},
  },
  plugins: [],
}

