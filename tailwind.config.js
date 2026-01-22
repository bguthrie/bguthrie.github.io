/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/minimal/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Newsreader", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
