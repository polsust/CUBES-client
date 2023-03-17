/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10AEA5",
        secondary: "#23272A",
        info: "#738BD7",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: "#__next",
};
