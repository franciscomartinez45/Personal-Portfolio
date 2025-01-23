import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 p-2 bg-gray-800 text-white rounded-lg shadow-md transition duration-300 hover:bg-gray-600"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeSwitcher;
