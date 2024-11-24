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
        customH2: "14.5rem",
        customP: "1rem",
        customSm: "1.2vw",
      },
      colors: {
        customBg: "#f1f0ea",
        greenCustom: "#008846",
        blueCustom: "#086bff",
      },
      keyframes: {
        growBorder: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        fadeInFromLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px) rotate(-90deg)" },
          "100%": { opacity: "1", transform: "translateX(0) rotate(-90deg)" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        growBorder: "growBorder 1s ease-out forwards",
        fadeInFromLeft: "fadeInFromLeft 1.5s ease-out forwards",
        spin: "spin 7s linear infinite",
      },
    },
  },
  plugins: [],
};
