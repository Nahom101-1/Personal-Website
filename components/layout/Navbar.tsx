"use client";

import { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import {
  TbCircleLetterNFilled,
  TbCircleLetterAFilled,
  TbCircleLetterHFilled,
  TbCircleLetterOFilled,
  TbCircleLetterMFilled,
} from "react-icons/tb";
import { IconType } from "react-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu Items for Navigation
  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "About", icon: <FaUserAlt /> },
    { name: "Skills", icon: <FaLaptopCode /> },
    { name: "Projects", icon: <FaProjectDiagram /> },
    { name: "Contact", icon: <FaEnvelope /> },
  ];

  // Mapping Letters to Icons
  const iconsMap: Record<string, IconType> = {
    N: TbCircleLetterNFilled,
    A: TbCircleLetterAFilled,
    H: TbCircleLetterHFilled,
    O: TbCircleLetterOFilled,
    M: TbCircleLetterMFilled,
  };
  const letters: Array<keyof typeof iconsMap> = ["N", "A", "H", "O", "M"];

  const DynamicStyles = isScrolled
    ? "bg-[#EFE3C2] text-[#123524]"
    : "bg-[#123524] text-[#EFE3C2]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#EFE3C2] text-[#123524]" : "bg-[#123524] text-[#EFE3C2]"
      } shadow-md`}
    >
      <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-3 text-3xl font-bold tracking-wide hover:scale-95 transition-transform"
        >
          {letters.map((letter, index) => {
            const Icon = iconsMap[letter];
            return (
              <Icon
                key={index}
                className={`text-5xl ${DynamicStyles}`}
              />
            );
          })}
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center space-x-2 hover:text-[#3E7B27] transition-all duration-300"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className={`w-6 h-6 ${
              isScrolled ? "text-[#123524]" : "text-[#EFE3C2]"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#EFE3C2] text-[#123524] py-6 shadow-md">
          <ul className="space-y-4 px-8">
            {menuItems.map((item) => (
              <li key={item.name} className="flex items-center space-x-2">
                <a
                  href={`#${item.name.toLowerCase()}`}
                  className="block text-lg items-center space-x-2 hover:text-[#3E7B27] transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
