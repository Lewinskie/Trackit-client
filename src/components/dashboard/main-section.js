import React from "react";
import DashNav from "./dash-nav";
import CompaniesCards from "./cards/companies-card";
import AssetsCards from "./cards/assets-card";
import StaffCard from "./cards/staff-card";
import Roughwork from "./cards/roughwork";

const MainSection = (props) => {
  return (
    <main className="w-full md:w-[calc(100%-256px)] md:ml-64 min-h-screen transition-all main bg-blue-600">
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
