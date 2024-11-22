/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        voyage: ["voyage", "sans-serif"],
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        customLg: "6.5vw",
        customH1: "12vw",
        customSm: "1.2vw",
      },
      colors: {
        greenCustom: "#008846",
        blueCustom: "#086bff",
      },
    },
  },
  plugins: [],
};
