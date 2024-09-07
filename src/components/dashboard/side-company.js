import React from "react";
import { InfoIcon, ListIcon, PlusIcon, TrashIcon } from "../../lib/icons";
import CardWrapper from "../../lib/card-wrapper";

const SideCompany = () => {
  const items = [
    {
      title: "New Company",
      icon: <PlusIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/companies/new",
    },
    {
      title: "List Companies",
      icon: <ListIcon className="w-4 h-4 mr-3 text-lg text-gray-700" />,
      link: "/companies",
    },
  ];

  return (
    <CardWrapper>
      <span className="text-h2 font-semibold">COMPANIES</span>
      {items.map((item, index) => (
        <li className="mb-1 mt-3 group" key={index}>
          <a
            href={item.link}
            className="flex items-center py-2 px-4 text-p hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100"
          >
            {item.icon}
            <span className="text-sm">{item.title}</span>
          </a>
        </li>
      ))}
    </CardWrapper>
  );
};

export default SideCompany;
