/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html"
  ],
  theme: {
    fontFamily :{
      "Sans":[ "Open Sans", "sans-serif"]
    },
    extend: {
      colors:{
        "brand-nude": "#a8977b",
        "brand-dark": "#1c1c1d",
         "brand-darker": "#131313",
          "brand-light": "#d7e4d7"
      }
    },
  },
  plugins: [],
}

