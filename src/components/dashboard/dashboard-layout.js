import React, { useState } from "react";
import SideNav from "../dashboard/side-nav";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loading from "../../lib/loading";
import DashNav from "./dash-nav";
import Error from "../../lib/error";

const DashboardLayout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user, isLoading, error } = useUser();
  const router = useRouter();

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to toggle fullscreen mode
  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/api/auth/login");
    }
  }, [user, isLoading, router]);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className="flex">
      <div
        className={`${
          isSidebarOpen ? "w-60" : "w-0"
        } transition-all duration-300 overflow-hidden`}
      >
        <SideNav isSidebarOpen={isSidebarOpen} />
      </div>

      <div className="flex-1 min-h-screen bg-gray-200 md:[calc(100%-256px) transition-all duration-300 ">
        <DashNav
          toggleDropdown={toggleDropdown}
          toggleFullscreen={toggleFullscreen}
          toggleSidebar={toggleSidebar}
        />
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            toggleSidebar,
            toggleDropdown,
            toggleFullscreen,
            isSidebarOpen,
          })
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
