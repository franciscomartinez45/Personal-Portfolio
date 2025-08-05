/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryBg: "#fdfefe",
        secondaryBg: "#000000",
        primaryText: "#EDE8D0",
        buttonText:"#000000",
        linkButtonBg: "	#e4d5b7",
        cardBackground: "#f4f6f6",
        buttonHoverBg: "#3498DB",
      
      },
    },
  },
  plugins: [],
};
