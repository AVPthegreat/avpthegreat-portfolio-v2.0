import React from "react";
import { User, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-[#fbfbf9]">
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
      <div>
        <a
          href="#contact"
          className="hover:opacity-70 transition-opacity"
          title="Contact"
        >
          <Mail size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
