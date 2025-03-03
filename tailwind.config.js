/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4caf50",
          dark: "#81c784",
        },
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};
