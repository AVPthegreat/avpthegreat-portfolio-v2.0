import React from 'react';

const Bio = ({ portraitSrc }) => {
  return (
    <section id="bio-details" className="min-w-[100vw] h-screen flex items-center justify-center bg-[#fbfbf9] text-black px-20 relative snap-start">
      <div className="grid grid-cols-3 gap-12 w-full max-w-7xl items-end">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full min-h-[60vh]">
          <div className="relative">
             <h2 className="text-[12vw] font-bold leading-[0.8] tracking-tighter italic">Hey!</h2>
             {/* Smiley Face Graphic */}
             <svg className="absolute -bottom-10 right-0 w-32 h-32 text-orange-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8">
                <circle cx="50" cy="50" r="45" />
                <path d="M30 40 L30 40" strokeLinecap="round" strokeWidth="10" />
                <path d="M70 40 L70 40" strokeLinecap="round" strokeWidth="10" />
                <path d="M30 65 Q50 85 70 65" strokeLinecap="round" />
             </svg>
          </div>
          
          <div className="mt-auto">
            <h3 className="text-4xl font-bold leading-tight mb-2">
              Design <br/>
              by <span className="italic">Mykhailo</span>, a <br/>
              designer based in <br/>
              London, currently part <br/>
              of the design team at <br/>
              ©Gintera.
            </h3>
          </div>
        </div>

        {/* Center Column - Portrait */}
        <div className="relative h-[70vh] w-full rounded-3xl overflow-hidden">
           {portraitSrc && <img src={portraitSrc} alt="Portrait" className="w-full h-full object-cover" />}
           
           {/* White Logo Overlay */}
           <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 text-white opacity-90">
                 <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none" />
                 <path d="M50 95 L50 50 L20 20" stroke="currentColor" strokeWidth="8" fill="none" />
                 <path d="M50 50 L80 20" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
           </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between h-full min-h-[60vh]">
          <div className="text-lg font-medium">(02)</div>
          
          <div className="space-y-8 text-lg font-medium leading-relaxed max-w-xs">
            <p>
              I am a UI/UX designer with over 6 years of experience. I have won multiple international awards and had the privilege of collaborating with major companies like
            </p>
            <p>
              My work focuses on combining creativity and functionality to deliver exceptional user experiences while enhancing business performance. With a rich portfolio and a passion for innovation, I continue to contribute to impactful digital design solutions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Bio;
