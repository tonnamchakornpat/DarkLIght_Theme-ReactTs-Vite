import React, { useState, useEffect } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: dark").matches) setTheme(true);
    else setTheme(false);
  }, []);

  useEffect(() => {
    if (theme) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => setTheme(!theme);

  return (
    <button
      onClick={handleThemeSwitch}
      className="bg-gray-100 dark:bg-slate-600 p-3 rounded-lg text-yellow-500 dark:text-white "
    >
      {theme ? <FaMoon /> : <BsSunFill />}
    </button>
  );
}

export default ThemeSwitcher;
