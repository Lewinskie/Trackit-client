import React from "react";
import DashNav from "./dash-nav";
import CompaniesCards from "./cards/companies-card";
import AssetsCards from "./cards/assets-card";
import StaffCard from "./cards/staff-card";
import Roughwork from "./cards/roughwork";

const MainSection = (props) => {
  return (
    <main
      className={`min-h-screen bg-gray-200 md:[calc(100%-256px) transition-all duration-300 ${
        props.isSidebarOpen ? "ml-60" : "ml-0"
      }`}
    >
      <DashNav
        toggleFullscreen={props.toggleFullscreen}
        toggleSidebar={props.toggleSidebar}
      />
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <CompaniesCards />
          <AssetsCards />
          <StaffCard />
        </div>
        <Roughwork />
      </div>
    </main>
  );
};

export default MainSection;
