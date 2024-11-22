/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        voyage: ["voyage", "serif"],
        pangram: ["pangram", "sans-serif"],
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        customLg: "6.5vw",
        customH1: "14rem",
        customP: "1rem",
        customSm: "1.2vw",
      },
      colors: {
        greenCustom: "#008846",
        blueCustom: "#086bff",
      },
      keyframes: {
        growBorder: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        growBorder: "growBorder 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
