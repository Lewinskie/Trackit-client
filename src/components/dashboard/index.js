import React from "react";
import SideNav from "./side-nav";
import MainSection from "./main-section";
import Head from "next/head";

const MainDashboard = ({
  toggleSidebar,
  isSidebarOpen,
  toggleFullscreen,
  toggleDropdown,
}) => {
  return (
    <div>
      <Head>
        <title>Admin Panel</title>
      </Head>
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
