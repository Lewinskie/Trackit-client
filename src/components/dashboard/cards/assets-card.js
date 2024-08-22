import React from "react";

const AssetsCards = () => {
  return (
    <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
      <div className="flex justify-between mb-4">
        <div>
          <div className="flex items-center mb-1">
            <div className="text-2xl font-semibold">100</div>
          </div>
          <div className="text-sm font-medium text-gray-400">Assets</div>
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
  );
};

export default AssetsCards;
