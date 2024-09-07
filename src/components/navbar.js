import React, { useState } from "react";
import navItems from "./navitems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-gray-800" x-data="{ isOpen: false }">
        <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a
              className="text-xl font-bold text-white transition-colors duration-300 transform md:text-2xl hover:text-indigo-400"
              href="/"
            >
              Track IT
            </a>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
                onClick={toggleMenu}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden"  */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0`}
          >
            {navItems.map((item, index) => (
              <a
                className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-400"
                key={index}
                href={item.path}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
