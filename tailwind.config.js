/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFE8F7',
          100: '#FFB6E5',
          200: '#FF84D4',
          300: '#FF52C2',
          400: '#FF20B1',
          500: '#DD0F95',
          600: '#BB027A',
          700: '#990064',
          800: '#77004D',
          900: '#550037',
        },
      },
      fontFamily: {
        'ibm-plex-sans-thai': ["IBM Plex Sans Thai", 'sans-serif'],
      },
      screens: {
        mobile: "640px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
