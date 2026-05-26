/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4EFE7",
        red: "#6A241B",
        burgundy: "#4A1812",
        beige: "#D9C5AF",
        brown: "#5A1E16",
        chocolate: "#2B1A14",
        ink: "#2B1A14",
        soft: "#F4EFE7",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        script: ['"Pinyon Script"', '"Cormorant Garamond"', "cursive"],
        sans: ['"Inter"', '"Helvetica Neue"', "Arial", "sans-serif"],
      },
      boxShadow: {
        editorial: "0 28px 60px rgba(43, 26, 20, 0.25)",
        paper: "0 18px 35px rgba(43, 26, 20, 0.15)",
        polaroid: "0 15px 30px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
