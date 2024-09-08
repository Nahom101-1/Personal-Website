import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm mb-2">
          Feel free to reach out to me at{" "}
          <a
            href="mailto:nahomberhane101@gmail.com"
            className="text-purple-400 hover:underline"
          >
            nahomberhane101@gmail.com
          </a>
        </p>
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://www.linkedin.com/in/nahom-berhane-19ab84233"
            className="hover:text-purple-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Nahom101-1"
            className="hover:text-purple-400"
          >
            GitHub
          </a>
        </div>
        <p className="text-xs text-gray-400">© 2024 Nahom Berhane</p>
      </div>
    </footer>
  );
};

export default Footer;
