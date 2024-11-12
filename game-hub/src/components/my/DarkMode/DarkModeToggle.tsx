import React from "react";
import useDarkMode from "./useDarkMode";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="dark-mode-toggle">
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
