import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Code, BookOpen, Mail, ArrowBigLeft } from "lucide-react";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "Skills", path: "/skills", icon: BookOpen },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <div>
      {/* Mobile View */}
      <div className="fixed left-0 right-0 bottom-0 z-50 flex  sm:hidden">
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex-1 flex items-center justify-center p-4
              ${isActive ? "text-white" : "text-white/70 hover:text-white"}`
            }
          >
            <Icon className="w-6 h-6" />
          </NavLink>
        ))}
      </div>

      {/* Desktop View */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ease-in-out
                    ${isCollapsed ? "mr-0" : "mr-0"} hidden sm:block`}
      >
        <nav className="relative">
          <div
            className={`flex flex-col gap-4 p-4 transition-all duration-300
                        ${isCollapsed ? "w-16" : "w-40"}`}
          >
            {/* Collapse toggle button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 
                        rounded-full
                        flex items-center justify-center text-white/80
                        hover:scale-110 transition-transform duration-200"
            >
              <span
                className={`transform transition-transform duration-300 text-sm
                            ${isCollapsed ? "rotate-180" : "rotate-0"}`}
              >
                <ArrowBigLeft />
              </span>
            </button>

            {navItems.map(({ name, path, icon: Icon }, index) => (
              <NavLink
                key={name}
                to={path}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={({ isActive }) =>
                  `relative flex items-center gap-4 p-3 rounded-xl
                  transition-all duration-300 overflow-hidden
                  group cursor-pointer
                  ${isActive ? "text-white" : "text-white/70 hover:text-white"}
                  ${hoveredIndex === index ? "scale-105" : "scale-100"}
                  ${isCollapsed ? "justify-center" : "justify-end"}`
                }
              >
                {/* Active/Hover indicator */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300
                             ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                >
                  <div className="absolute right-0 top-0 h-full w-[2px] bg-white/50" />
                </div>

                {/* Text with slide animation */}
                <span
                  className={`whitespace-nowrap transition-all duration-300 order-1
                             ${isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}
                             ${hoveredIndex === index ? "transform -translate-x-1" : ""}`}
                >
                  {name}
                </span>

                {/* Icon with animation */}
                <div className="relative order-2">
                  <Icon
                    className={`w-5 h-5 transition-all duration-300
                               ${hoveredIndex === index ? "scale-110" : "scale-100"}`}
                  />
                </div>
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;