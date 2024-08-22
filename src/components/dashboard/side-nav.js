import React, { useState } from "react";
import SideLogo from "./side-logo";
import SideCompany from "./side-company";
import SideAssets from "./side-assets";
import SideStaff from "./side-staff";

const SideNav = (props) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full w-60 bg-[#f8f4f3] p-4 z-50 transition-transform duration-300 ${
        props.isSidebarOpen ? "translate-x-0 " : "-translate-x-full"
      }`}
    >
      <SideLogo />
      <ul className="mt-8">
        <SideCompany />
        <SideAssets />
        <SideStaff />
      </ul>
    </div>
  );
};

export default SideNav;
