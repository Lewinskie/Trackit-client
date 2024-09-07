import Btn from "@/src/utils/btn";
import React, { useState } from "react";
import { FullScreenIcon, ListIcon, SearchIcon } from "../../lib/icons";
import DashProfile from "./dash-profile";

const DashNav = ({
  toggleSidebar,
  toggleFullscreen,
  isDropdownOpen,
  toggleDropdown,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // Function to toggle the dropdown visibility
  const handleToggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  return (
    <div className="py-2 px-6 bg-[rgb(248,244,243)]  flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <Btn
        className="text-lg text-gray-900 font-semibold sidebar-toggle"
        onClick={toggleSidebar}
      >
        <ListIcon className="h-6 w-6 " style={{ fill: "gray" }} />
      </Btn>

      <ul className="ml-auto flex items-center">
        <li className="mr-1 dropdown">
          <Btn className="dropdown-toggle text-gray-400 mr-4 w-6 h-6 rounded flex items-center justify-center  hover:text-gray-900">
            <SearchIcon className="hover:bg-gray-200 rounded-full h-8 w-8 " />
          </Btn>
          <div className="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100">
            <form action="" className="p-4 border-b border-b-gray-100">
              <div className="relative w-full">
                <input
                  type="text"
                  className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
                  placeholder="Search..."
                />
                <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-900" />
              </div>
            </form>
          </div>
        </li>

        <Btn onClick={toggleFullscreen}>
          <FullScreenIcon className="hover:bg-gray-100 rounded-full" />
        </Btn>
        <DashProfile
          handleToggleDropdown={handleToggleDropdown}
          isDropdownVisible={isDropdownVisible}
        />
      </ul>
    </div>
  );
};

export default DashNav;
