module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oxygen: ["Oxygen, sans-serif"],
        poppins: ["Poppins, sans-serif"],
        srccode: ["Source Code Pro, monospace"],
      },
      colors: {
        dark: {
          light: "#000957",
        },
        ondark: {
          light: "#DADDFC",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
