/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        BebasNeue: ["Bebas Neue", "sans-serif"],
      },
      keyframes: {
        "slide-right": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(100px)" },
        },
      },
      animation: {
        "slide-right": "slide-right 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
