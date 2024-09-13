"use client"; // Add this at the very top

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a href="favicon.ico" className="text-white text-2xl font-semibold">
          Nahom Berhane
        </a>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
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

        {/* Nav Links (hidden on mobile, shown on larger screens) */}
        <ul
          className={`flex space-x-6 md:flex ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="relative group">
            <a href="#skills" className="text-gray-300 hover:text-white">
              Skills
            </a>
            {/* Dropdown Menu */}
            <ul className="absolute left-0 hidden group-hover:block bg-gray-700 text-white rounded-md shadow-lg mt-2">
              <li className="px-4 py-2 hover:bg-gray-600">
                <a href="#cpp">Grunnlegende and OOP C/C++</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <a href="#web">Basic Web Development</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <a href="#ux">Basic UX and Design Fundamentals</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-600">
                <a href="#software-dev">Grunnlegnede Software Development</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#about" className="text-gray-300 hover:text-white">
              About Me
            </a>
          </li>
          <li>
            <a href="#Education" className="text-gray-300 hover:text-white">
              Education
            </a>
          </li>
          <li>
            <a
              href="#WorkExperience"
              className="text-gray-300 hover:text-white"
            >
              Work Experience
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown for links */}
      {isMenuOpen && (
        <ul className="md:hidden mt-4 space-y-2 bg-gray-700 p-4 rounded-lg">
          <li>
            <a href="#skills" className="text-gray-300 hover:text-white block">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-300 hover:text-white block">
              About Me
            </a>
          </li>
          <li>
            <a
              href="#Education"
              className="text-gray-300 hover:text-white block"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#WorkExperience"
              className="text-gray-300 hover:text-white block"
            >
              Work Experience
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
