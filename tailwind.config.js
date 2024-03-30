/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textLightPink: "#ffd4dd",
        textDarkPink: "#FE6784",
        textLightGreen: "#A4FDFB",
        textDarkGreen: "#25A3A1",
      },
      fontFamily: {
        shortStack: "Short Stack",
      },
      boxShadow: {
        darkShadow: "3px 8px 5px 0px rgba(0,0,0,0.25);",
      },
    },
  },
  plugins: [],
};
