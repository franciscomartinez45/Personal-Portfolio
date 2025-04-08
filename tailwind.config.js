/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryBg: "#fdfefe",
        secondaryBg: "#000000",
        primaryText: "#515a5a",
        linkButtonBg: "#2C3930",
        cardBackground: "#f4f6f6",
        buttonHoverBg: "#3498DB",
        headerFontColor: "#17202a",
      },
    },
  },
  plugins: [],
};
