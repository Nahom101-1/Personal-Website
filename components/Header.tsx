"use client";

import Button from "./utils/buttons";
import { scrollByAmount } from "./utils/utils";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Header = () => {  
  const handleScroll = () => scrollByAmount(window.innerHeight-25);

  return (
    <header className="bg-[#EFE3C2] min-h-screen relative flex flex-col items-center justify-center text-[#3E7B27]">
      <div className="text-center space-y-6 text-[#123529]">
        {/* Title Section */}
        <h1 className="text-5xl font-bold">Nahom Berhane</h1>
        <span className="inline-block text-sm font-medium text-[#123529]">
          Aspiring Developer
        </span>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <Button href="/assets/maincv.pdf" label="Download Resume" primary />
          <Button
            href="https://www.linkedin.com/in/nahom-berhane-19ab84233"
            label="LinkedIn"
          />
        </div>
      </div>

      {/* Scroll Down Button */}
      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
        onClick={handleScroll}
      >
        <FaArrowDown className="w-6 h-6 animate-bounce text-[#123524] hover:text-[#85A947] transition-all" />
      </button>
    </header>
  );
};

export default Header;
