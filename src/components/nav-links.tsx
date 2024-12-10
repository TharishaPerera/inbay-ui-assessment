import React from "react"
import { Link } from "react-router-dom";

import { navLinks } from "../constants/nav-links";

interface NavLinksProps {
    className?: string
}

export const NavLinks: React.FC<NavLinksProps> = ({ className }) => {
    return (
      <ul className={className}>
        {navLinks.map((link, index) => (
          <Link key={index} to={link.path} className="font-semibold hover:text-gray-600 transition">
            {link.name}
          </Link>
        ))}
      </ul>
    );
}