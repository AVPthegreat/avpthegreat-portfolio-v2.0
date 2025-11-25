import React from 'react';
const Hero = ({ portraitSrc }) => {
  return (
    <section id="bio" className="min-w-[100vw] h-screen flex flex-col justify-between px-8 pb-8 relative overflow-hidden snap-start">
      {/* Main Text */}
      <div className="flex-1 flex flex-col justify-center z-10 mt-20">
        <h1 className="text-[14vw] leading-[0.85] font-bold tracking-tight text-black">
          Creative is
        </h1>
        <div className="flex justify-end">
             <h1 className="text-[14vw] leading-[0.85] font-bold tracking-tight text-black italic pr-20">
            joy
          </h1>
        </div>
      </div>

      {/* Pink Graphic - </> Symbol */}
      <div className="absolute top-[20%] right-[10%] w-[25vw] h-[25vw] z-0 opacity-90 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-12">
            <text x="50" y="65" fontSize="80" fontWeight="bold" fill="none" stroke="#ff99cc" strokeWidth="2" textAnchor="middle" fontFamily="monospace">
              &lt;/&gt;
            </text>
        </svg>
      </div>

      {/* Footer Elements */}
      <div className="flex justify-between items-end mt-20">
        <div className="text-[10vw] font-bold leading-none tracking-tighter">
          ©2024
        </div>
        
        <div className="flex flex-col items-center gap-4">
             {/* Portrait Image */}
            <div className="w-48 h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                {portraitSrc && <img src={portraitSrc} alt="Portrait" className="w-full h-full object-cover" />}
            </div>
        </div>

        <div className="text-sm font-medium tracking-wide mb-2">
          /CREATING SINCE 2018
        </div>
      </div>
    </section>
  );
};

export default Hero;
