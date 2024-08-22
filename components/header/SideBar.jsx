"use client";
import Image from "next/image";
import { createContext } from "react";
import { useState, useContext } from "react";
import { FaChevronRight, FaInfo, FaUser } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const SidebarContext = createContext();

export const SideBar = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <aside className={`h-screen fixed`}>
      <nav className="h-full flex flex-col bg-gray-700/50 backdrop-blur-md border-r border-red-200/20 shadow-sm">
        {/* Top Panel */}
        <div className="p-4 pb-2 flex justify-between items-center">
          {/* Open-Close button */}
          <button
            onClick={handleClick}
            className="p-1.5 rounded-lg bg-transparent hover:text-gray-500"
          >
            {expanded ? <FaChevronLeft /> : <FaChevronRight />}
          </button>

          {/* Logo */}
          <Image
            src="https://img.logoipsum.com/243.svg"
            width={128}
            height={30}
            alt=""
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          />
        </div>

        {/* Links: Children */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* Footer segment */}
        <div className=" flex p-3">
          <FaUser className="w-10 h-10 rounded-md" />
          <div
            className={`
              flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }
            `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@mail.com</span>
            </div>
            <FaInfo />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export const SideBarItem = ({ icon, text, active, alert }) => {
  const { expanded } = useContext(SidebarContext);

  return (
    <div>
      <li
        className={`
          relative flex justify-between items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
            active
              ? "bg-gradient-to-tr from-indigo-700 to-indigo-800 text-indigo-200"
              : "hover:bg-indigo-800 text-gray-200"
          }
        `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded-full bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          ></div>
        )}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {text}
          </div>
        )}
      </li>
    </div>
  );
};
