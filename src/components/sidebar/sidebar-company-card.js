import React from "react";

const SidebarCompanyCard = () => {
  const items = [
    {
      name: "New Company",
      icon: "fa fa-plus",
      link: "/company/new",
    },
    {
      name: "Company List",
      icon: "fa fa-list",
      link: "/company/list",
    },
    {
      name: "Company Details",
      icon: "fa fa-info",
      link: "/company/details",
    },
  ];
  return (
    <div className="sidebar-card mt-4">
      <span className="text-gray-400 font-bold ">COMPANIES</span>
      {items.map((item, index) => (
        <li key={index} className="mt-1 mb-1 group">
          <a
            href="#"
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md"
          >
            <i className="ri-home-2-line mr-3 text-lg"></i>
            <span className="text-sm">{item.name}</span>
          </a>
        </li>
      ))}
    </div>
  );
};

export default SidebarCompanyCard;
