import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Work = ({ quarrySrc, squadhubSrc }) => {
  return (
    <div className="flex">
      {/* Page 1: Header + Projects 1 & 2 */}
      <section id="work-1" className="min-w-[100vw] h-screen flex flex-col justify-center bg-[#fbfbf9] text-black px-20 relative snap-start border-r border-gray-200">
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-[10vw] font-bold leading-[0.85] tracking-tight">
              Featured <br/>
              Projects <sup className="text-4xl text-pink-300 align-top">®</sup>
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-16 w-full">
            
            {/* Project 1: Quarry */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-5xl font-bold mb-2">/Quarry</h3>
                <p className="text-lg text-gray-600">Web design & Development</p>
              </div>
              <div className="aspect-[4/3] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative group">
                 {quarrySrc && <img src={quarrySrc} alt="Quarry Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                 
                 {/* Links Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <ExternalLink size={24} /> Live
                    </a>
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <Github size={24} /> GitHub
                    </a>
                 </div>
              </div>
            </div>

            {/* Project 2: Squadhub */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-5xl font-bold mb-2">/Squadhub</h3>
                <p className="text-lg text-gray-600">Web design, Dashboard & Development</p>
              </div>
              <div className="aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative group">
                 {squadhubSrc && <img src={squadhubSrc} alt="Squadhub Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                 
                 {/* Links Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <ExternalLink size={24} /> Live
                    </a>
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <Github size={24} /> GitHub
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Page 2: Projects 3 & 4 */}
      <section id="work-2" className="min-w-[100vw] h-screen flex flex-col justify-center bg-[#fbfbf9] text-black px-20 relative snap-start">
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center pt-32">
           {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-16 w-full">
            
            {/* Project 3: Placeholder */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-5xl font-bold mb-2">/Project Alpha</h3>
                <p className="text-lg text-gray-600">Mobile App & Branding</p>
              </div>
              <div className="aspect-[4/3] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                 <span className="text-gray-400 text-xl font-mono">Image Coming Soon</span>
                 
                 {/* Links Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <ExternalLink size={24} /> Live
                    </a>
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <Github size={24} /> GitHub
                    </a>
                 </div>
              </div>
            </div>

            {/* Project 4: Placeholder */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-5xl font-bold mb-2">/Project Beta</h3>
                <p className="text-lg text-gray-600">E-commerce Platform</p>
              </div>
              <div className="aspect-[4/3] bg-gray-300 rounded-3xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                 <span className="text-gray-500 text-xl font-mono">Image Coming Soon</span>
                 
                 {/* Links Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <ExternalLink size={24} /> Live
                    </a>
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <Github size={24} /> GitHub
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Page 3: Projects 5 & 6 */}
      <section id="work-3" className="min-w-[100vw] h-screen flex flex-col justify-center bg-[#fbfbf9] text-black px-20 relative snap-start border-r border-gray-200">
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center pt-32">
           {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-16 w-full">
            
            {/* Project 5: Placeholder */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-5xl font-bold mb-2">/Project Gamma</h3>
                <p className="text-lg text-gray-600">Fintech Solution</p>
              </div>
              <div className="aspect-[4/3] bg-gray-400 rounded-3xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                 <span className="text-white text-xl font-mono">Image Coming Soon</span>
                 
                 {/* Links Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <ExternalLink size={24} /> Live
                    </a>
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <Github size={24} /> GitHub
                    </a>
                 </div>
              </div>
            </div>

            {/* Project 6: Placeholder */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-5xl font-bold mb-2">/Project Delta</h3>
                <p className="text-lg text-gray-600">Social Network</p>
              </div>
              <div className="aspect-[4/3] bg-gray-500 rounded-3xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                 <span className="text-white text-xl font-mono">Image Coming Soon</span>
                 
                 {/* Links Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <ExternalLink size={24} /> Live
                    </a>
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <Github size={24} /> GitHub
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Page 4: Projects 7 & 8 */}
      <section id="work-4" className="min-w-[100vw] h-screen flex flex-col justify-center bg-[#fbfbf9] text-black px-20 relative snap-start">
        <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center pt-32">
           {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-16 w-full">
            
            {/* Project 7: Placeholder */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-5xl font-bold mb-2">/Project Epsilon</h3>
                <p className="text-lg text-gray-600">AI Dashboard</p>
              </div>
              <div className="aspect-[4/3] bg-gray-600 rounded-3xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                 <span className="text-white text-xl font-mono">Image Coming Soon</span>
                 
                 {/* Links Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <ExternalLink size={24} /> Live
                    </a>
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <Github size={24} /> GitHub
                    </a>
                 </div>
              </div>
            </div>

            {/* Project 8: Placeholder */}
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-5xl font-bold mb-2">/Project Zeta</h3>
                <p className="text-lg text-gray-600">Travel App</p>
              </div>
              <div className="aspect-[4/3] bg-gray-700 rounded-3xl overflow-hidden shadow-2xl relative group flex items-center justify-center">
                 <span className="text-white text-xl font-mono">Image Coming Soon</span>
                 
                 {/* Links Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <ExternalLink size={24} /> Live
                    </a>
                    <a href="#" className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors">
                      <Github size={24} /> GitHub
                    </a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
