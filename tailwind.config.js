/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  colors: {
    primaryRed: "EB544D",
    primaryWhite: "FEFBF9",
    primmaryBlack: "000000",
    red100: "63120E",
    red90: "851E19",
    red80: "A72D27",
    red70: "C93F38",
    red50: "FF665F",
    red40: "FF8983",
    red30: "FFABA7",
    red20: "FFCDCB",
    red10: "FFF0EF",
    gray60: "444444",
    gray50: "666666",
    gray40: "888888",
    gray30: "AAAAAA",
    gray20: "CCCCCC",
    gray10: "EEEEEE",
    greenLight: "56CA76",
    greenKauai: "56CAAE",
  },
  fontfamily: {
    thaisans: "BM Plex Sans Thai",
  },
  theme: {
    screens: {
      mobile: "640px",
      desktop: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
