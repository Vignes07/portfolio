/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      sm: "320px",
      md: "540px",
      lg: "976px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(20%)" },
        },
      },
      animation: {
        "waving-hand": "wave 3s linear infinite",
        "bounce-arrow": "bounce 2s linear infinite",
      },
    },
  },
  plugins: [],
};
