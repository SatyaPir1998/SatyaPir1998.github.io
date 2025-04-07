import React from "react";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Satyapir Ghosh
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
