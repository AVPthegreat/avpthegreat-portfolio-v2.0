import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Work from "./components/Work";
import Contact from "./components/Contact";
import BackgroundEffect from "./components/BackgroundEffect";
import MobileRestriction from "./components/MobileRestriction";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen w-full font-sans transition-colors duration-500 relative ${
        darkMode ? "bg-[#030712] text-white" : "bg-[#fbfbf9] text-black"
      }`}
    >
      <MobileRestriction />
      <BackgroundEffect darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="relative z-10">
        <Hero portraitSrc="/avp.png" darkMode={darkMode} />
        <Bio
          portraitSrc="/Gemini_Generated_Image_ubqu55ubqu55ubqu.png"
          darkMode={darkMode}
        />
        <Work
          wallifyMockupSrc="/wallify_mockup.png"
          yuktiMockupSrc="/yukti_mockup.png"
          feelmitraMockupSrc="/feelmitra_mockup.png"
          chessMockupSrc="/chess_mockup.png"
          nexuscodeMockupSrc="/nexuscode_mockup.png"
          darkMode={darkMode}
        />
        <Contact darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
