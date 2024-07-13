"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center bg-white p-4 z-50 w-full h-[130px]">
      <div className="flex-1 flex justify-center animate-float">
        <Image
          src="/images/Transparent-Logo.avif"
          alt="Logo"
          width={140}
          height={80}
        />
      </div>

      <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
        <div className="relative" ref={dropdownRef}>
          <button
            className="tracking-wider cursor-pointer space-x-2 font-bold"
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

        <a
          href="https://www.facebook.com"
          className="text-blue-700 hover:text-blue-800 "
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com"
          className="text-pink-500 hover:text-pink-600"
        >
          <InstagramIcon />
        </a>
        <button className="bg-blue-500 text-[15.5px] w-[180px] h-[40px] m-[5px] rounded-[5px] text-white tracking-wider hover:bg-blue-600 font-bold">
          SCHEDULE NOW
          <ArrowRightAltIcon />
        </button>
      </div>

      <div className="md:hidden flex items-center">
        <button
          className="text-black tracking-wider font-bold"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-blue-700 text-white flex flex-col items-start p-8 z-40">
          <div className="flex w-full justify-between items-center animate-float">
            <Image
              src="/images/Transparent-Logo.avif"
              alt="Logo"
              width={140}
              height={80}
            />
            <button
              className="text-white tracking-wider font-bold"
              onClick={toggleMobileMenu}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col mt-8 space-y-4 w-full">
            <div className="relative w-full" ref={dropdownRef}>
              <button
                className="tracking-wider cursor-pointer space-x-2 font-bold w-full text-left"
                onClick={toggleDropdown}
              >
                PRODUCTS
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white text-black rounded shadow-lg w-full">
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
              className="tracking-wider cursor-pointer space-x-2 font-bold w-full text-left"
            >
              ABOUT
            </a>
            {/* <a
              href="/catalog"
              className="tracking-wider cursor-pointer space-x-2 font-bold w-full text-left"
            >
              CATALOG
            </a> */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com" className="text-white">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com" className="text-white">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
