import { useEffect, useState } from "react";

function useDarkMode(): [boolean, () => void] {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("dark-mode");
    return (
      savedMode === "true" ||
      window.matchMedia("(prefers-color-scheme)").matches
    );
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      localStorage.setItem("dark-mode", (!prevMode).toString());
      return !prevMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
