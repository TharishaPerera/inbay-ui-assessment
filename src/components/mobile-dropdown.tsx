import { NavLinks } from "./nav-links";

export const MobileDropdown = () => {
    return (
      <div className="md:hidden container mx-auto rounded-lg bg-gray-50 mt-2 border border-gray-200">
        {/* Navigation Links */}
        <NavLinks className="flex flex-col items-center space-y-2 p-4" />
      </div>
    );
}