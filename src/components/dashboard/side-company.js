import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { InfoIcon, ListIcon, PlusIcon, TrashIcon } from "./icons";

const SideCompany = () => {
  const items = [
    {
      title: "New Company",
      icon: <PlusIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/company/new",
    },
    {
      title: "List Companies",
      icon: <ListIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/company/list",
    },
    {
      title: "Company Details",
      icon: <InfoIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/company/detail",
    },
    // {
    //   title: "Company Delete",
    //   icon: <TrashIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
    //   link: "/company/delete",
    // },
  ];

  return (
    <>
      <span className="text-gray-400 font-bold ">COMPANIES</span>
      {items.map((item, index) => (
        <li className="mb-1 mt-4 group">
          <a
            key={index}
            href={item.link}
            className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
          >
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </a>
        </li>
      ))}
    </>
  );
};

export default SideCompany;
