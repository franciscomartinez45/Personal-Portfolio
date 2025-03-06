/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryBg: "rgb(210, 210, 210)",
        primaryText: "rgb(240,240,240)",
        secondaryBg: "rgb(240,240,240)",
        secondaryText: "rgb(0,0,0)",
        linkButtonBg: "rgb(33, 150, 243)",
        buttonBg: "rgb(240,240,240)",
        buttonHoverBg: "#3498DB",
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
