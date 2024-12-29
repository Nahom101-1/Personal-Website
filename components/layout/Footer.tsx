import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#123524] text-[#EFE3C2] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 px-6">
        {/* Column 1: Contact */}
        <div className="text-center md:text-left">
        <p className="text-lg font-semibold flex items-center justify-center md:justify-start space-x-3">
  <CiMail className="w-5 h-5" />
  <span>Contact</span>
</p>

          <a
            href="mailto:nahomberhane101@gmail.com"
            className="block text-sm hover:text-[#3E7B27] mt-2 hover:text-[#3E7B27] hover:scale-110 transition-transform"
          >
            nahomberhane101@gmail.com
          </a>
        </div>

        {/* Column 2: Social Links */}
        <div className="text-center">
          <p className="text-lg font-semibold flex items-center justify-center space-x-2">
          <IoShareSocial />
            <span>Social Links</span>
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nahom-berhane-19ab84233/"
              className="hover:text-[#3E7B27]"
            >
              <FaLinkedin className="w-6 h-6 hover:text-[#3E7B27] hover:scale-110 transition-transform" />
            </a>
            <a
              target="_blank"
              href="https://github.com/Nahom101-1"
              className="hover:text-[#3E7B27]"
            >
              <FaGithub className="w-6 h-6 hover:text-[#3E7B27] hover:scale-110 transition-transform" />

            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="hover:text-[#3E7B27]"
            >
              <FaInstagram className="w-6 h-6 hover:text-[#3E7B27] hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Column 3: Copyright */}
        <div className="text-center md:text-right">
          <p className="text-xs flex items-center justify-center md:justify-end space-x-2">
            <span>© 2024 Nahom Berhane</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
