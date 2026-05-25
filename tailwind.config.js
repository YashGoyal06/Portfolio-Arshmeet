/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F1ECE2",
        red: "#6A1F1A",
        burgundy: "#4A1414",
        beige: "#D9C7B8",
        brown: "#3B2B28",
        soft: "#F6F0E8",
        ink: "#1D1B19",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"Poppins"', '"Inter"', "Arial", "sans-serif"],
        script: ['"Pinyon Script"', '"Cormorant Garamond"', "cursive"],
        sans: ['"Inter"', '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 28px 60px rgba(35, 18, 14, 0.34)",
        paper: "0 18px 35px rgba(59, 43, 40, 0.25)",
      },
    },
  },
  plugins: [],
};
