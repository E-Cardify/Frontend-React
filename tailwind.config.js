/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "text-red-500",
    "text-yellow-400",
    "text-green-500",
    "text-blue-500",
    "text-purple-500",
    "text-gray-700",
    "text-teal-500",
    "text-amber-500",
    "text-indigo-500",
    "text-emerald-500",
    "bg-red-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-gray-700",
    "bg-teal-500",
    "bg-amber-500",
    "bg-indigo-500",
    "bg-emerald-500",
  ],
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
        "fade-left-reverse": {
          "0%": {
            opacity: "1",
            transform: "translateX(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
        },
        "fade-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "slide-right": "slide-right 2.5s ease-in-out infinite",
        "fade-left": "fade-left 0.5s ease-out",
        "fade-left-reverse": "fade-left-reverse 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
