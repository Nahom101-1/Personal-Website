import React from "react";
import Image from "next/image";

interface ButtonProps {
  href: string;
  label: string;
  primary?: boolean;
}

// Simple Button component
const Button: React.FC<ButtonProps> = ({ href, label, primary }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block px-6 py-3 text-lg font-medium rounded-md shadow-lg transition-colors duration-300 ${
      primary
        ? "bg-purple-500 text-white hover:bg-purple-600"
        : "bg-transparent text-purple-500 border border-purple-500 hover:bg-purple-100"
    }`}
  >
    {label}
  </a>
);

const ScrollDownArrow = () => (
  <svg
    className="animate-bounce w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 min-h-screen flex items-center justify-center text-white relative">
      <div className="flex flex-col lg:flex-row items-center justify-between w-10/12 max-w-7xl space-y-10 lg:space-y-0">
        {/* Left Section */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-5xl font-bold mb-2">Nahom Berhane</h1>
          <span className="inline-block bg-purple-500 text-sm font-medium text-white px-4 py-1 rounded-md mb-4">
            Aspiring Developer
          </span>
          <p className="text-gray-300 mb-8">
            I am a second-year programming student at NTNU Gjøvik, passionate
            about building software and eager to learn. As an aspiring
            developer, I am committed to expanding my skills and contributing to
            innovative projects that make a real impact.
          </p>
          <div className="space-x-4">
            <Button href="/assets/maincv.pdf" label="Download Resume" primary />
            <Button
              href="https://www.linkedin.com/in/nahom-berhane-19ab84233"
              label="LinkedIn"
            />
          </div>
        </div>

        {/* Right Section: Image Placeholder */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-lg bg-gray-100 flex items-center justify-center">
            <Image
              src="/assets/profile.jpg"
              alt="Nahom Berhane"
              className="rounded-lg object-cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <footer className="absolute bottom-5 flex flex-col justify-center items-center">
        <h3 className="text-2xl font-semibold mb-4">
          Scroll down to learn more
        </h3>
        <ScrollDownArrow />
      </footer>
    </header>
  );
};

export default Header;
