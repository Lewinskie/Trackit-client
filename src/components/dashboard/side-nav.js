import React, { useState } from "react";
import SideLogo from "./side-logo";
import SideCompany from "./side-company";
import SideAssets from "./side-assets";
import SideStaff from "./side-staff";

const SideNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // bg-[#f8f4f3]
  return (
    <div>
      <div className="fixed left-0 top-0 w-64 h-full bg bg-red-400  p-4 z-50 sidebar-menu transition-transform">
        <SideLogo />
        <ul className="mt-8">
          <SideCompany />
          <SideAssets />
          <SideStaff />
        </ul>
      </div>

      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay" />
    </div>
  );
};

export default SideNav;
