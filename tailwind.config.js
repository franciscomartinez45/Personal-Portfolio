/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryBg: "#FFFFFF",
        primaryText: "#333333",
        secondaryBg: "#F7F7F7",
        buttonBg: "#4A90E2",
        buttonHoverBg: "#3498DB",
        darkPrimaryBg: "#2C3E50",
        darkPrimaryText: "#FFFFFF",
        darkSecondaryBg: "#34495E",
        darkButtonBg: "#1F78D1",
        darkButtonHoverBg: "#1566A4",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--primary-text": theme("colors.primaryText"),
          "--secondary-text": theme("colors.darkPrimaryText"),
        },
      });
    },
  ],
};
