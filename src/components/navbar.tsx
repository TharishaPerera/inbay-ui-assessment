import { useState } from "react";
import { Link } from "react-router-dom";

import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { RiMovie2AiLine } from "react-icons/ri";

import { NavLinks } from "./nav-links";
import { MobileDropdown } from "./mobile-dropdown";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-gray-800">
      <div className="container mx-auto flex items-center justify-between shadow-md px-6 py-4 rounded-lg">
        {/* logo */}
        <Link to="/" className="flex items-center space-x-2">
          <RiMovie2AiLine className="w-6 h-6 md:w-8 md:h-8" />
          <h1 className="text-md md:text-xl font-semibold uppercase tracking-wider">
            omdb movies
          </h1>
        </Link>

        {/* hamburger menu for mobile screens */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <MdClose className="w-8 h-8" />
          ) : (
            <IoMenu className="w-8 h-8" />
          )}
        </button>

        <div className="hidden md:flex md:items-center md:space-x-4">
          {/* navigation links */}
          <NavLinks className="flex items-center space-x-4" />
        </div>
      </div>

      {/* mobile dropdown */}
      {menuOpen && <MobileDropdown />}
    </nav>
  );
};
