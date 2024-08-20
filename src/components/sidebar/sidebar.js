import React, { useState } from "react";
import SidebarCompanyCard from "./sidebar-company-card";
import SidebarAssetCard from "./sidebar-asset-card";
import SidebarStaffCard from "./sidebar-staff-card";
import SidebarLogo from "./sidebar-logo";

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState({
    users: false,
    posts: false,
  });

  const toggleDropdown = (section) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
      {/* SIDEBAR TITLE/ LOGO  */}
      <SidebarLogo />
      <ul className="mt-8">
        <SidebarCompanyCard />
        <SidebarAssetCard />
        <SidebarStaffCard />
      </ul>
    </div>
  );
};

export default Sidebar;
