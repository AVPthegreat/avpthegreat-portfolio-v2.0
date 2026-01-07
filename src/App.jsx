import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`h-screen w-full flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory font-sans transition-colors duration-500 ${
        darkMode ? "bg-[#030712] text-white" : "bg-[#fbfbf9] text-black"
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
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
  );
}

export default App;
