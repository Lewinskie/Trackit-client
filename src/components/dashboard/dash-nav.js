import Btn from "@/src/utils/btn";
import React, { useState } from "react";
import { FullScreenIcon, ListIcon, SearchIcon } from "../../lib/icons";
import DashProfile from "./dash-profile";
import DarkModeToggle from "../../utils/darkmode-toggle";

const DashNav = ({
  toggleSidebar,
  toggleFullscreen,
  darkMode,
  toggleDarkMode,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // Function to toggle the dropdown visibility
  const handleToggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="py-2 px-6 bg-primary  flex items-center sticky top-0 left-0 z-30">
      <Btn
        className="text-lg text-gray-900 font-semibold sidebar-toggle"
        onClick={toggleSidebar}
      >
        <ListIcon className="h-6 w-6 " style={{ fill: "gray" }} />
      </Btn>

      <ul className="ml-auto flex items-center">
        <Btn onClick={toggleFullscreen}>
          <FullScreenIcon className="hover:bg-gray-100 rounded-full" />
        </Btn>
        <DarkModeToggle
          className="flex flex-row justify-between toggle ml-5"
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <DashProfile
          handleToggleDropdown={handleToggleDropdown}
          isDropdownVisible={isDropdownVisible}
        />
      </ul>
    </div>
  );
};

export default DashNav;
