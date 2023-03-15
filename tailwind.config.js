/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#10AEA5",
      secondary: "#23272A",
      info: "#738BD7",
    },
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: "#__next",
};
