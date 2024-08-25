/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "350px",
      xl: "1200px",
      md: "765px",
    },
    extend: {},
  },
  plugins: [],
}

