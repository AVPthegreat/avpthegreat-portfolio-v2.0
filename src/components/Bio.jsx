import React from "react";

const Bio = ({ portraitSrc }) => {
  return (
    <section
      id="bio-details"
      className="min-w-[100vw] h-screen flex items-center justify-center bg-[#fbfbf9] text-black px-20 relative snap-start"
    >
      <div className="grid grid-cols-3 gap-12 w-full max-w-7xl items-end">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full min-h-[60vh]">
          <div className="relative">
            <h2 className="text-[12vw] font-bold leading-[0.8] tracking-tighter italic">
              Hey!
            </h2>
            {/* Smiley Face Graphic */}
            <svg
              className="absolute -bottom-10 right-0 w-32 h-32 text-orange-300"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
            >
              <circle cx="50" cy="50" r="45" />
              <path d="M30 40 L30 40" strokeLinecap="round" strokeWidth="10" />
              <path d="M70 40 L70 40" strokeLinecap="round" strokeWidth="10" />
              <path d="M30 65 Q50 85 70 65" strokeLinecap="round" />
            </svg>
          </div>

          <div className="mt-auto">
            <h3 className="text-4xl font-bold leading-tight mb-2">
              A<br />
              Startup-minded{" "}
              <span className="italic">Full Stack Developer</span>,<br />
              with real <br />
              AI product
              <br />
              experience
            </h3>
          </div>
        </div>

        {/* Center Column - Portrait */}
        <div className="relative h-[70vh] w-full rounded-3xl overflow-hidden">
          {portraitSrc && (
            <img
              src={portraitSrc}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between h-full min-h-[60vh]">
          <div className="text-lg font-medium">(02)</div>

          <div className="space-y-8 text-lg font-medium leading-relaxed max-w-xs">
            <p>
              I’m a Computer Science student dedicated to building high-impact
              software. I thrive on challenges that push the boundaries of
              conventional architecture. 10+ hackathon wins later, I’m currently
              architecting NexusCode.
            </p>
            <p>
              A serial builder who prioritizes rapid iteration, swift execution,
              and the ability to pivot without losing momentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
