/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./views/**/*.html",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: { 
        main: "#faf8f1", 
        text: "#2b2b2b", 
        granate: "#7b2d26", 
        "granate-dark": "#3f0a06", 
        marron: "#cba440", 
        "marron-dark": "#a67845", 
      },
      fontFamily: {
        header: ["Georgia", "serif"], 
        body: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      }
    }
  },
  plugins: [],
}

