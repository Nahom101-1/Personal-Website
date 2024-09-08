const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a href="favicon.ico" className="text-white text-2xl font-semibold">
          Nahom Berhane
        </a>

        {/* Skills with Dropdown */}
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

        {/* Nav Links */}
        <ul className="flex space-x-6">
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
    </nav>
  );
};

export default Navbar;
