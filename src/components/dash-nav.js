import React, { useState } from "react";

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
        <li className="mr-1 relative">
          <button
            type="button"
            className="text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center hover:text-gray-600"
            onClick={toggleNotifications}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="hover:bg-gray-100 rounded-full"
              viewBox="0 0 24 24"
              fill="gray"
            >
              <path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </button>
          {isNotificationsOpen && (
            <div className="absolute right-0 shadow-md shadow-black/5 z-30 max-w-xs w-full bg-white rounded-md border border-gray-100">
              <div className="flex items-center px-4 pt-4 border-b border-b-gray-100">
                <button
                  type="button"
                  data-tab="notification"
                  className={`text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 ${
                    activeTab === "notifications" ? "text-gray-600" : ""
                  } pb-1 mr-4`}
                  onClick={() => setActiveTab("notifications")}
                >
                  Notifications
                </button>
                <button
                  type="button"
                  data-tab="messages"
                  className={`text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 ${
                    activeTab === "messages" ? "text-gray-600" : ""
                  } pb-1`}
                  onClick={() => setActiveTab("messages")}
                >
                  Messages
                </button>
              </div>
              <div className="my-2">
                {activeTab === "notifications" && (
                  <ul className="max-h-64 overflow-y-auto">
                    <li>
                      <a
                        href="#"
                        className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                      >
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded block object-cover align-middle"
                        />
                        <div className="ml-2">
                          <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                            New order
                          </div>
                          <div className="text-[11px] text-gray-400">
                            from a user
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Additional notification items */}
                  </ul>
                )}
                {activeTab === "messages" && (
                  <ul className="max-h-64 overflow-y-auto">
                    <li>
                      <a
                        href="#"
                        className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                      >
                        <img
                          src="https://placehold.co/32x32"
                          alt=""
                          className="w-8 h-8 rounded block object-cover align-middle"
                        />
                        <div className="ml-2">
                          <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                            John Doe
                          </div>
                          <div className="text-[11px] text-gray-400">
                            Hello there!
                          </div>
                        </div>
                      </a>
                    </li>
                    {/* Additional message items */}
                  </ul>
                )}
              </div>
            </div>
          )}
        </li>
        <button
          id="fullscreen-button"
          onClick={toggleFullscreen}
          className="text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center hover:text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className="hover:bg-gray-100 rounded-full"
            viewBox="0 0 24 24"
            fill="gray"
          >
            <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path>
          </svg>
        </button>
        <li className="relative ml-3">
          <button
            type="button"
            className="flex items-center"
            onClick={toggleDropdown}
          >
            <div className="flex-shrink-0 w-10 h-10 relative">
              <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                  alt=""
                />
                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <div className="p-2 md:block text-left">
              <h2 className="text-sm font-semibold text-gray-800">John Doe</h2>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                >
                  Settings
                </a>
              </li>
              <li>
                <form method="POST" action="">
                  <a
                    role="menuitem"
                    className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      // Add logout logic here
                    }}
                  >
                    Log Out
                  </a>
                </form>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default DashNav;
