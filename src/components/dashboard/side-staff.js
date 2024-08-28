import React from "react";
import { PlusIcon, ListIcon, InfoIcon } from "../../lib/icons";

const SideStaff = () => {
  const items = [
    {
      title: "New Staff",
      icon: <PlusIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/staff/new",
    },
    {
      title: "List Staff",
      icon: <ListIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/staff/list",
    },
    {
      title: "Staff Details",
      icon: <InfoIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/staff/detail",
    },
  ];
  return (
    <div className="mt-8">
      <span className="text-gray-400 font-bold">STAFF</span>
      {items.map((item, index) => (
        <li className="mb-1 mt-4 group">
          <a
            href=""
            key={index}
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
          >
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </a>
        </li>
      ))}
    </div>
  );
};

export default SideStaff;
