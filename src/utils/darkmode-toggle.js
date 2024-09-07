import React, { useState, useEffect } from "react";
import { Moon, Sun } from "../lib/icons";

const DarkModeToggle = (props) => {
  // const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class on the root element
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  // Handler for the checkbox
  // const handleToggle = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className={props.className}>
      <label htmlFor="dark-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            name="dark-mode"
            id="dark-toggle"
            className="checkbox hidden"
            checked={props.darkMode}
            onChange={props.toggleDarkMode}
          />
          {/* Border of the toggle */}
          <div
            className={`block w-7 h-4 rounded-full transition-colors duration-300 ${
              props.darkMode ? "bg-black border-black" : "bg-gray-300 border-black"
            }`}
          />
          {/* Dot inside the toggle */}
          <div
            className={`dot absolute left-1 top-1 w-2 h-2 rounded-full transition-all duration-300 ${
              props.darkMode ? "transform translate-x-3 bg-white" : "bg-gray-800"
            }`}
          />
        </div>
        <div className="ml-3 font-medium transition-colors duration-300 text-gray-900 dark:text-white">
          {/* Show sun icon for light mode, moon icon for dark mode */}
          {props.darkMode ? <Moon /> : <Sun />}
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
