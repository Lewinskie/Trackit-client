import React, { useState } from "react";
import SideLogo from "./side-logo";
import SideCompany from "./side-company";
import SideAssets from "./side-assets";
import SideStaff from "./side-staff";
import DashNav from "./dash-nav";

const MainDashboard = () => {
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
    <>
      <title>Admin Panel</title>

      {/*sidenav */}
      <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
        <SideLogo />
        <ul className="mt-8">
          <SideCompany />
          <SideAssets />
          <SideStaff />
        </ul>
      </div>
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay" />
      {/* end sidenav */}
      <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
        {/* navbar */}
        <DashNav />
        {/* end navbar */}
        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="flex items-center mb-1">
                    <div className="text-2xl font-semibold">2</div>
                  </div>
                  <div className="text-sm font-medium text-gray-400">Users</div>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i className="ri-more-fill" />
                  </button>
                </div>
              </div>
              <a
                href="#"
                className="text-[#f84525] font-medium text-sm hover:text-red-800"
              >
                View
              </a>
            </div>
            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-4">
                <div>
                  <div className="flex items-center mb-1">
                    <div className="text-2xl font-semibold">100</div>
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    Companies
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i className="ri-more-fill" />
                  </button>
                </div>
              </div>
              <a
                href="/#"
                className="text-[#f84525] font-medium text-sm hover:text-red-800"
              >
                View
              </a>
            </div>
            <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
              <div className="flex justify-between mb-6">
                <div>
                  <div className="text-2xl font-semibold mb-1">100</div>
                  <div className="text-sm font-medium text-gray-400">Blogs</div>
                </div>
              </div>
              <a
                href="#"
                className="text-[#f84525] font-medium text-sm hover:text-red-800"
              >
                View
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
              <div className="rounded-t mb-0 px-0 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                      Users
                    </h3>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto"></div>
              </div>
            </div>
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">Activities</div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="dropdown-toggle text-gray-400 hover:text-gray-600"
                  >
                    <i className="ri-more-fill" />
                  </button>
                  <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 ">
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md lg:col-span-2">
              <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">Order Statistics</div>
              </div>

              <div>
                <canvas id="order-chart" />
              </div>
            </div>
            <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
              <div className="flex justify-between mb-4 items-start">
                <div className="font-medium">Earnings</div>
              </div>
            </div>
          </div>
        </div>
        {/* End Content */}
      </main>
    </>
  );
};

export default MainDashboard;
