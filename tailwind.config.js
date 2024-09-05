/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "350px",
      sm: "640px",
      lg: "967px"
    },
    extend: {},
  },
  plugins: [],
}

