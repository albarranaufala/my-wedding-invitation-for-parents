/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        afacad: ['"Afacad"', "sans-serif"],
        "cedarville-cursive": ['"Cedarville Cursive"', "cursive"],
        "abril-fatface": ['"Abril Fatface"', "serif"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "swipe-left": {
          "0%": {
            transform: "scale(1.2) translateX(0)",
            opacity: "0",
          },
          "10%": {
            transform: "scale(1.2) translateX(0)",
            opacity: "0",
          },
          "20%": {
            transform: "scale(1) translateX(0)",
            opacity: "1",
          },
          "80%": {
            transform: "scale(1) translateX(-200px)",
            opacity: "1",
          },
          "90%": {
            transform: "scale(1) translateX(-200px)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1.2) translateX(0)",
            opacity: "0",
          },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        "swipe-left": "swipe-left 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
