import {Link, useLocation} from "react-router-dom";
import { CloudIcon, DocumentIcon, FolderIcon } from "@heroicons/react/24/solid";
import { React, useRef, useState, useEffect } from "react";
import OutsideClick from "./OutsideClick";

const Sidebar = ({ mobileNavsidebar }) => {
  const sidebarRef = useRef(null);
  const sidebarOutsideClick = OutsideClick(sidebarRef);

  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const sidebarClose = () => {
    setSidebarStatus(false);
  };

  const sidebarOpen = () => {
    setSidebarStatus(true);
  };

  const location = useLocation();

  useEffect(() => {
    if (sidebarOutsideClick) {
      setSidebarStatus(false);
    }

    setActiveLink(location.pathname);
  }, [sidebarOutsideClick, location]);

  const isLinkActive = (link) => {
    return activeLink === link ? "text-gray-400 bg-gray-700" : "";
  };


  return (
    <aside
      className={`${
        mobileNavsidebar ? "block" : "hidden"
      } sm:flex sm:flex-col z-50`}
      ref={sidebarRef}
    >
      {/* logo */}
      {/* <Link to="/dashboard">
        <span className="inline-flex items-center justify-center h-20 w-full bg-blue-600 hover:bg-blue-500 focus:bg-blue-500 cursor-pointer">
          <svg fill="none" viewBox="0 0 64 64" className="h-12 w-14">
            <title> untitle </title>
            <path
              d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z"
              fill="#fff"
            />
          </svg>
        </span>
      </Link> */}

      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        {/* sidebar */}
        <nav
          className="flex flex-col mx-4 my-6 space-y-4"
          sidebarOutsideClick={sidebarOutsideClick}
        >
          <Link to="/dashboard" className={isLinkActive("/dashboard")}>
            <span className="inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3 cursor-pointer relative group">
              <span className="flex items-center">
                <span className="text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </Link>

          <Link to="/book" className={isLinkActive("/book")}>
            <span className="inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3 cursor-pointer relative group">
              <span className="flex items-center">
                <span className="text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 mr-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="blue" viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </span>
              </span>
            </span>
          </Link>

          <Link to="/jadwal" className={isLinkActive("/jadwal")}>
            <span className="inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3 cursor-pointer relative group">
              <span className="flex items-center">
                <span className="text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 mr-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="green" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </span>
            </span>
          </Link>

          <Link to="/pengunjung" className={isLinkActive("/pengunjung")}>
            <span className="inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3 cursor-pointer relative group">
              <span className="flex items-center">
                <span className="text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 mr-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="red" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </span>
              </span>
            </span>
          </Link>

          <Link to="/petugas" className={isLinkActive("/petugas")}>
            <span className="inline-flex items-center justify-between py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg px-3 cursor-pointer relative group">
              <span className="flex items-center">
                <span className="text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 mr-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="yellow" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    class="w-6 h-6">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </span>
              </span>
            </span>
          </Link>
        </nav>

        {/* Setting */}
        <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
          <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Settings</span>
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
