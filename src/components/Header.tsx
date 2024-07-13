"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center bg-gray-100 p-4 z-50 w-full h-[130px]">
      <div className="flex-1 flex justify-center">
        <Image
          src="/images/Transparent-Logo.avif"
          alt="Logo"
          width={140}
          height={80}
        />
      </div>

      <div className="flex-1 flex justify-center items-center space-x-6">
        <div className="relative" ref={dropdownRef}>
          <button
            className="tracking-wider cursor-pointer space-x-2m font-bold"
            onClick={toggleDropdown}
          >
            PRODUCTS
          </button>
          {isDropdownOpen && (
            <div className="absolute top-8 left-0 bg-white border rounded shadow-lg">
              <ul>
                <li className="px-4 py-4 hover:bg-gray-200 cursor-pointer">
                  DURAWOOD
                </li>
                <li className="px-4 py-4 hover:bg-gray-200 cursor-pointer">
                  V-EVO MAX
                </li>
                <li className="px-4 py-4 hover:bg-gray-200 cursor-pointer">
                  V-EVO XL
                </li>
                <li className="px-4 py-4 hover:bg-gray-200 cursor-pointer">
                  AZUL TORTUGA
                </li>
                <li className="px-4 py-4 hover:bg-gray-200 cursor-pointer">
                  PANZU
                </li>
                <li className="px-4 py-4 hover:bg-gray-200 cursor-pointer">
                  NUWUD
                </li>
              </ul>
            </div>
          )}
        </div>
        <a
          href="/about"
          className="tracking-wider cursor-pointer space-x-2 font-bold"
        >
          ABOUT
        </a>
        <a
          href="tel:+6562137247"
          className="text-black tracking-wider font-bold"
        >
          <PhoneAndroidIcon className="text-blue-500 " />
          656-213-7247
        </a>
        <button className="bg-blue-500 w-[180px] h-[40px] m-[5px] rounded-[5px] text-white tracking-wider hover:bg-blue-600 font-bold">
          SCHEDULE NOW
          <ArrowRightAltIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
