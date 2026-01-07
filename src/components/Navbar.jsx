import React from "react";
import { User, Briefcase, Mail, Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 transition-colors duration-500 ${
        darkMode ? "text-[#E65C9C]" : "mix-blend-difference text-[#fbfbf9]"
      }`}
    >
      <div className="flex gap-8">
        <a
          href="#bio"
          className="hover:opacity-70 transition-opacity"
          title="Bio"
        >
          <User size={20} />
        </a>
        <a
          href="#work"
          className="hover:opacity-70 transition-opacity"
          title="Work"
        >
          <Briefcase size={20} />
        </a>
      </div>
      <div className="flex items-center gap-6">
        <a
          href="#contact"
          className="hover:opacity-70 transition-opacity"
          title="Contact"
        >
          <Mail size={20} />
        </a>
        <button
          onClick={toggleDarkMode}
          className="hover:opacity-70 transition-opacity cursor-pointer p-2 rounded-full"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
