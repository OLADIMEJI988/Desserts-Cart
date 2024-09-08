/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "400px",
      xs: "540px",
      sm: "640px",
      tablet:"750px",
      md:"860px",
      lg: "967px",
      xl: "1024px",
      xxl: "1280px",
    },
    extend: {},
  },
  plugins: [],
}

