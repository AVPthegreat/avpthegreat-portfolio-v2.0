import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const Bio = ({ portraitSrc, darkMode }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const column1Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const column2Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const column3Y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      id="bio"
      className={`w-full min-h-screen flex items-center justify-center transition-colors duration-500 px-20 relative bg-transparent ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="grid grid-cols-3 gap-12 w-full max-w-7xl items-end relative z-10">
        {/* Left Column */}
        <Motion.div
          style={{ y: column1Y }}
          className="flex flex-col justify-between h-full min-h-[60vh]"
        >
          <div className="relative">
            <h2
              className={`text-[12vw] font-bold leading-[0.8] tracking-tighter italic transition-colors duration-500 font-serif ${
                darkMode ? "text-[#E65C9C]" : "text-black"
              }`}
            >
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
            <h3 className="text-4xl font-bold leading-tight mb-2 font-serif">
              A<br />
              Startup-minded{" "}
              <span className="italic">Full Stack Developer</span>,<br />
              with real <br />
              AI product
              <br />
              experience
            </h3>
          </div>
        </Motion.div>

        {/* Center Column - Portrait */}
        <Motion.div
          style={{ y: column2Y }}
          className="relative h-[70vh] w-full rounded-3xl overflow-hidden shadow-2xl"
        >
          {portraitSrc && (
            <img
              src={portraitSrc}
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          )}
        </Motion.div>

        {/* Right Column */}
        <Motion.div
          style={{ y: column3Y }}
          className="flex flex-col justify-between h-full min-h-[60vh]"
        >
          <div className="text-lg font-medium">(02)</div>

          <div className="space-y-8 text-lg font-medium leading-relaxed max-w-xs">
            <p>
              I’m a Computer Science student, I love building on challenges that
              push the boundaries of conventional architecture. 10+ hackathon
              wins and, I’m currently architecting NexusCode.
            </p>
            <p>
              A repeatable founder who can kill ideas, partner fast, and rebuild
              from zero without identity loss
            </p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Bio;
