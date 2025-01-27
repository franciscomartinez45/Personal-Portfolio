import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 p-2 bottom-10 right-5 bg-darkPrimaryBg text-darkPrimaryText dark:bg-primaryBg dark:text-primaryText rounded-lg shadow-md transition duration-300 hover:bg-gray-600"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeSwitcher;
