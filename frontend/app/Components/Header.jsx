import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useRef, useState } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import OutsideClick from "./OutsideClick";
import { useNavigate } from "react-router-dom";
import Image from 'next/image';

const Header = ({mobileNavsidebar, setMobileNavsidebar}) => {
  const [userMenuStatus, setUserMenuStatus] = useState(false);
  const buttonRef = useRef(null);
  const buttonOutsideClick = OutsideClick(buttonRef);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  const userMenuhandle = () => {
    setUserMenuStatus(!userMenuStatus);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    if (buttonOutsideClick) {
      setUserMenuStatus(false);
    }
  }, [buttonOutsideClick]);

  return (
    <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
      <MoonIcon
        className="h-12 stroke-slate-600 cursor-pointer sm:hidden"
        onClick={() => setMobileNavsidebar(!mobileNavsidebar)}
      />
      {/* SearchBox */}
      

      <div className="flex flex-shrink-0 items-center ml-auto">
        {/* { User Menu} */}
        <button
          className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg relative"
        >
          <span className="sr-only">User Menu</span>
          <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
            <span className="text-gray-600 text-sm font-medium">{user.name}</span>
          </div>
          <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
            <Image
              src="/user.png"
              alt="My Image" width={500} height={300}
            />
          </span>
        </button>
        <div className="border-l pl-3 ml-3 space-x-1">

          {/* Logout */}
          <button onClick={handleLogout} className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Log out</span>
            <svg
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
