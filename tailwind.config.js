/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato",
      },
      colors: {
        "dark-blue": "#3949AB",
        "dark-blue-100": "#4E6CB2",
        "dark-blue-200": "#7890CD",
      },
    },
  },
  plugins: [require("daisyui")],
};
