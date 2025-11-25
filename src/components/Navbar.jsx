import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 text-sm font-medium tracking-wide mix-blend-difference text-[#fbfbf9]">
      <div className="flex gap-8">
        <a href="#bio" className="hover:opacity-70 transition-opacity">BIO</a>
        <a href="#work" className="hover:opacity-70 transition-opacity">WORK</a>
      </div>
      <div>
        <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
