import React from "react";

const CompaniesCards = () => {
  return (
    <div>
      <div className="card-bg rounded-lg  p-6 shadow-lg">
        <div className="flex justify-between mb-6">
          <div>
            <div className="flex items-center mb-1">
              <div className="text-2xl font-semibold">2</div>
            </div>
            <div className="text-sm font-medium text-gray-400">Companies</div>
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
    </div>
  );
};

export default CompaniesCards;
