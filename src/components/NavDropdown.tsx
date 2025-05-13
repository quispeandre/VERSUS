import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  title: string;
  path: string;
}

interface NavDropdownProps {
  title: string;
  items: NavItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="py-2 px-3 flex items-center text-white hover:text-[#d33b38] transition-colors font-medium focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          size={16}
          className={`ml-1 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-full min-w-[200px] bg-white shadow-lg rounded-b-lg z-20 transform origin-top transition-all duration-200 ${
          isOpen
            ? 'scale-y-100 opacity-100'
            : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="py-2">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#d33b38] ${
                  isActive ? 'text-[#d33b38]' : 'text-gray-800'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;