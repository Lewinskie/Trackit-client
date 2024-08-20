import React from "react";

const DashFullscreenBtn = ({ toggleFullscreen }) => {
  return (
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
  );
};

export default DashFullscreenBtn;
