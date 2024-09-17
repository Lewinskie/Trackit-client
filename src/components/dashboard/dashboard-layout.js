import React, { useState, useEffect } from "react";
import SideNav from "../dashboard/side-nav";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Loading from "../../lib/loading";
import DashNav from "./dash-nav";
import Error from "../../lib/error";
import DarkModeToggle from "../../utils/darkmode-toggle";

const DashboardLayout = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
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
  };

  // Function to toggle dark/light mode and persist the preference
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
      return newMode;
    });
  };

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "enabled") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

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
    <div className={`flex min-h-screen ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-60" : "w-0"
        } transition-all duration-300 overflow-hidden bg-light-card-bg dark:bg-card-bg`}
      >
        <SideNav isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-light-primary dark:bg-primary min-h-screen transition-all duration-300">
        {/* Dashboard Navigation */}
        <DashNav
          toggleDropdown={toggleDropdown}
          toggleFullscreen={toggleFullscreen}
          toggleSidebar={toggleSidebar}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        {/* Main Content */}
        <main className="p-4 md:p-6 lg:p-8 text-light-text-h1 dark:text-text-h1">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              toggleSidebar,
              toggleDropdown,
              toggleFullscreen,
              isSidebarOpen,
            })
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
