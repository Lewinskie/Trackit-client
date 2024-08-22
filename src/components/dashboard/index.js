import React, { useState } from "react";
import SideNav from "./side-nav";
import MainSection from "./main-section";

const MainDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };
  return (
    <div>
      <title>Admin Panel</title>
      <SideNav isSidebarOpen={isSidebarOpen} />
      <MainSection
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        toggleFullscreen={toggleFullscreen}
        toggleDropdown={toggleDropdown}
      />
    </div>
  );
};

export default MainDashboard;
