import React from "react";

const StaffCard = () => {
  return (
    <div className="card-bg rounded-lg p-6 shadow-lg">
      <div className="flex justify-between mb-6">
        <div>
          <div className="text-2xl font-semibold mb-1">100</div>
          <div className="text-sm font-medium text-gray-400">Staff</div>
        </div>
      </div>
      <a
        href="#"
        className="text-[#f84525] font-medium text-sm hover:text-red-800"
      >
        View
      </a>
    </div>
  );
};

export default StaffCard;
