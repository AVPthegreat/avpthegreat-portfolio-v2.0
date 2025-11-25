import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Work from './components/Work';
import Contact from './components/Contact';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  return (
    <div className="h-screen w-full flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory font-sans bg-[#fbfbf9] text-black">
      <Navbar />
      <ScrollIndicator />
      <Hero portraitSrc="/portrait.png" />
      <Bio portraitSrc="/portrait.png" />
      <Work quarrySrc="/quarry.png" squadhubSrc="/squadhub.png" />
      <Contact />
    </div>
  );
}

export default App;
