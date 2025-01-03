import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Code, BookOpen, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "Skills", path: "/skills", icon: BookOpen },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <div className="fixed w-full z-50 top-0">
      <div
        className={`absolute inset-x-4 top-2 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 
                    rounded-3xl shadow-lg backdrop-blur-md transition-all duration-300 
                    ${scrolled ? "py-1" : "py-3"}`}
      >
        <nav className="relative">
          <div className="container mx-auto px-4 relative">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <h1 className="text-3xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300">
                  Nafisa Lubaba
                </span>
              </h1>

              {/* Desktop navigation */}
              <ul className="hidden md:flex space-x-8">
                {navItems.map(({ name, path, icon: Icon }) => (
                  <li key={name} className="group">
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `font-medium tracking-wide transition-all duration-300 flex items-center gap-2 p-2 ${
                          isActive
                            ? "text-yellow-300"
                            : "text-white hover:text-yellow-300"
                        }`
                      }
                    >
                      <Icon
                        className={`w-4 h-4 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}
                      />
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobile(!isMobile)}
                className="md:hidden p-2 text-white hover:text-yellow-300"
              >
                {isMobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile menu */}
            {isMobile && (
              <div className="absolute top-full left-0 w-full bg-gradient-to-b from-blue-900 to-indigo-900 mt-2 py-4 rounded-2xl shadow-xl">
                <ul className="space-y-2">
                  {navItems.map(({ name, path, icon: Icon }) => (
                    <li key={name} className="group">
                      <NavLink
                        to={path}
                        onClick={() => setIsMobile(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-6 py-3 transition-all duration-300 ${
                            isActive
                              ? "text-yellow-300 bg-white/10"
                              : "text-white hover:bg-white/5 hover:text-yellow-300"
                          }`
                        }
                      >
                        <Icon className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;



 