import React, { useState } from "react";
import DashFullscreenBtn from "./dash-fullscreen-button";
import DashUserProfile from "./dash-user-profile";

const DashNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("notifications");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  return (
    <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button type="button" className="text-lg text-gray-900 font-semibold">
        <i className="ri-menu-line"></i>
      </button>

      <ul className="ml-auto flex items-center">
        <DashFullscreenBtn toggleFullscreen={toggleFullscreen} />
        <DashUserProfile toggleDropdown={toggleDropdown} isDropdownOpen={isDropdownOpen} />
      </ul>
    </div>
  );
};

export default DashNav;
