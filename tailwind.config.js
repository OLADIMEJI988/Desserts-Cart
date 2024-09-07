/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      tablet:"750px",
      md:"860px",
      lg: "967px",
      xl: "1024px",
    },
    extend: {},
  },
  plugins: [],
}

