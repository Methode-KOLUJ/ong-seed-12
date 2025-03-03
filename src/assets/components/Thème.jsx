import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-3 bg-gray-200/45 dark:bg-gray-950/45 text-black dark:text-white rounded-full shadow-lg flex items-center justify-center fixed bottom-1 left-1 z-50"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon className="w-5 h-5" />
      ) : (
        <FaSun className="w-5 h-5 text-orange-400" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
