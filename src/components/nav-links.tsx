import React from "react";
import { Link, useLocation } from "react-router-dom";

import { navLinks } from "../constants/nav-links";

interface NavLinksProps {
  className?: string;
}

export const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
  const location = useLocation();

  return (
    <ul className={className}>
      {navLinks.map((link, index) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={index}
            to={link.path}
            className={`font-semibold transition ${
              isActive ? "underline underline-offset-4" : "hover:text-gray-600 "
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </ul>
  );
};
