import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="h-screen w-full flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory font-sans bg-[#fbfbf9] text-black">
      <Navbar />
      <Hero portraitSrc="/avp.png" />
      <Bio portraitSrc="/Gemini_Generated_Image_ubqu55ubqu55ubqu.png" />
      <Work
        wallifyMockupSrc="/wallify_mockup.png"
        yuktiMockupSrc="/yukti_mockup.png"
        feelmitraMockupSrc="/feelmitra_mockup.png"
        chessMockupSrc="/chess_mockup.png"
        nexuscodeMockupSrc="/nexuscode_mockup.png"
      />
      <Contact />
    </div>
  );
}

export default App;
