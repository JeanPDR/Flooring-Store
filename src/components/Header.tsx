"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

// Componente para a tarja com as estrelas e o texto
const TopBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#24A1AE] text-white py-2 flex justify-center items-center z-50">
      <div className="flex items-center space-x-1">
        <StarIcon className="text-[#E77420]" />
        <StarIcon className="text-[#E77420]" />
        <StarIcon className="text-[#E77420]" />
        <StarIcon className="text-[#E77420]" />
        <StarIcon className="text-[#E77420]" />
      </div>
      <span className="ml-2">See what our customers have to say!</span>
    </div>
  );
};

const Header: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleProductsClick = () => {
    const section = document.querySelector("#product");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Fechar o menu móvel
  };

  const currentPath = isClient ? window.location.pathname : "";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center bg-white z-40 w-full">
        <div className="flex-1 flex justify-center">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/images/Transparent-Logo.avif"
                alt="Logo"
                width={300}
                height={80}
              />
            </a>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
          {currentPath !== "/about" && (
            <>
              <div className="relative">
                <Link href="#">
                  <span
                    className="text-black tracking-wider font-bold cursor-pointer"
                    onClick={handleProductsClick}
                  >
                    PRODUCTS
                  </span>
                </Link>
              </div>
              <a
                href="/about"
                className="tracking-wider cursor-pointer space-x-2 font-bold"
              >
                ABOUT
              </a>
            </>
          )}
          {currentPath === "/about" && (
            <a
              href="https://catalogo-flooring-store.vercel.app/"
              className="tracking-wider cursor-pointer space-x-2 font-bold"
            >
              CATALOG
            </a>
          )}
          <a
            href="tel:+(635215885"
            className="text-black tracking-wider font-bold"
          >
            <PhoneAndroidIcon className="text-blue-500 mt-[-2%]" />
            863-521-5885
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61558388606455"
            className="text-blue-700 hover:text-blue-800"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/pnvflooring/"
            className="text-pink-500 hover:text-pink-600"
          >
            <InstagramIcon />
          </a>
          <button className="bg-[#E77420] text-[15.5px] w-[184px] h-[44px] m-[5px] rounded-[5px] text-white tracking-wider hover:bg-[#e77320e2] font-bold">
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
            <div className="flex w-full justify-between items-center mt-4">
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
                {currentPath !== "/about" && (
                  <>
                    <Link href="#">
                      <span
                        className="text-white tracking-wider font-bold cursor-pointer block"
                        onClick={handleProductsClick}
                      >
                        PRODUCTS
                      </span>
                    </Link>
                    <a
                      href="/about"
                      className="tracking-wider cursor-pointer space-x-2 font-bold w-full text-left block"
                    >
                      ABOUT
                    </a>
                  </>
                )}
                {currentPath === "/about" && (
                  <a
                    href="https://catalogo-flooring-store.vercel.app/"
                    className="tracking-wider cursor-pointer space-x-2 font-bold w-full text-left block"
                  >
                    CATALOG
                  </a>
                )}
              </div>
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
    </>
  );
};

export default Header;
