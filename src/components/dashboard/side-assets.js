import React from "react";
import { PlusIcon, ListIcon, InfoIcon } from "../../lib/icons";

const SideAssets = () => {
  const items = [
    {
      title: "New Asset",
      icon: <PlusIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/asset/new",
    },
    {
      title: "List Assets",
      icon: <ListIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/asset/list",
    },
    {
      title: "Asset Details",
      icon: <InfoIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/asset/detail",
    },
  ];
  return (
    <div className="mt-8">
      <span className="text-gray-400 font-bold">BLOG</span>
      {items.map((item, index) => (
        <li key={index} className="mb-1 mt-4 group">
          <a
            href=""
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle"
          >
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </a>
        </li>
      ))}
    </div>
  );
};

export default SideAssets;
