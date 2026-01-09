import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";

const Hero = ({ portraitSrc, darkMode }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className={`w-full min-h-screen flex flex-col justify-between px-8 pb-8 relative overflow-hidden transition-colors duration-500 bg-transparent ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      {/* Main Text */}
      <Motion.div
        style={{ y: titleY, opacity }}
        className="flex-1 flex flex-col justify-center z-10 mt-20"
      >
        <h1
          className={`text-[14vw] leading-[0.85] font-bold tracking-tight transition-colors duration-500 relative z-10 font-serif ${
            darkMode ? "text-[#E65C9C]" : "text-black"
          }`}
        >
          avpthegreat
        </h1>
        <div className="flex justify-end items-center gap-10 pr-10 -mt-10">
          {/* Portrait Image Moved Near "..." */}
          <Motion.div
            style={{ y: imageY }}
            className="w-[26rem] h-[30rem] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:-rotate-2 transition-transform duration-700 z-0"
          >
            {portraitSrc && (
              <img
                src={portraitSrc}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            )}
          </Motion.div>
          <h1
            className={`text-[14vw] leading-[0.85] font-bold tracking-tight italic transition-colors duration-500 relative z-10 font-serif ${
              darkMode ? "text-[#E65C9C]" : "text-black"
            }`}
          >
            ...
          </h1>
        </div>
      </Motion.div>

      {/* Footer Elements Simplified */}
      <Motion.div
        style={{ opacity }}
        className="flex justify-between items-end w-full z-10"
      >
        <div className="text-[10vw] font-bold leading-none tracking-tighter">
          ©2026
        </div>
        <div className="text-right text-sm font-medium tracking-wide mb-6">
          /CREATING SINCE 2020
        </div>
      </Motion.div>
    </section>
  );
};

export default Hero;
