import React, { useRef, useState } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCard = ({ project, darkMode }) => {
  return (
    <div className="relative w-full h-[65vh] lg:h-[75vh] rounded-[2.5rem] overflow-hidden shadow-2xl group shrink-0">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <Github size={64} className="text-white opacity-20" />
        </div>
      )}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-10 lg:p-16 transition-opacity duration-500 opacity-95 group-hover:opacity-100">
        <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <h3
            className={`text-5xl lg:text-7xl font-bold mb-6 transition-colors duration-500 font-serif ${
              darkMode ? "text-[#E65C9C]" : "text-white"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-gray-300 text-xl lg:text-2xl mb-10 max-w-3xl line-clamp-2 font-medium leading-relaxed">
            {project.subtitle}
          </p>
          <div className="flex gap-8">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/10 hover:bg-[#E65C9C] hover:text-white backdrop-blur-xl rounded-full text-white text-xl font-bold transition-all flex items-center gap-3 border border-white/10"
            >
              <ExternalLink size={24} /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white/10 hover:bg-[#E65C9C] hover:text-white backdrop-blur-xl rounded-full text-white text-xl font-bold transition-all flex items-center gap-3 border border-white/10"
            >
              <Github size={24} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = ({
  wallifyMockupSrc,
  yuktiMockupSrc,
  feelmitraMockupSrc,
  chessMockupSrc,
  nexuscodeMockupSrc,
  darkMode,
}) => {
  const [currentIndex, setCurrentIndex] = useState(4); // Start with NexusCode (index 4)
  const projects = [
    {
      title: "/Yukti Bharat",
      subtitle:
        "Career Advisor Platform designed to empower the youth of India with data-driven career choices.",
      image: yuktiMockupSrc,
      live: "https://yuktibharat.com",
      github: "#",
    },
    {
      title: "/FeelMitra",
      subtitle:
        "A mental wellbeing companion focused on providing accessible emotional support through AI.",
      image: feelmitraMockupSrc,
      live: "#",
      github: "#",
    },
    {
      title: "/Chess",
      subtitle:
        "A React-based rating manager for local chess communities and tournament organization.",
      image: chessMockupSrc,
      live: "#",
      github: "#",
    },
    {
      title: "/Wallify",
      subtitle:
        "A minimalist wallpaper application with curated high-resolution dark-themed assets.",
      image: wallifyMockupSrc,
      live: "#",
      github: "#",
    },
    {
      title: "/NexusCode",
      subtitle:
        "A secure, robust online judge platform for competitive programming and hiring assessments.",
      image: nexuscodeMockupSrc,
      live: "#",
      github: "#",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="work"
      className="w-full relative px-8 lg:px-24 bg-transparent py-40 z-10 overflow-hidden"
    >
      <Motion.div
        ref={headerRef}
        style={{ y: headerY }}
        className="max-w-7xl mx-auto mb-24"
      >
        <h2
          className={`text-[12vw] font-bold leading-none tracking-tight transition-colors duration-500 font-serif ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Featured <br />
          <span className={darkMode ? "text-[#E65C9C]" : "text-black italic"}>
            Projects
          </span>
        </h2>
      </Motion.div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto">
        <div className="relative overflow-hidden pt-4 pb-8">
          <Motion.div
            className="flex gap-10"
            animate={{
              x: `calc(-${currentIndex * 100}% - ${currentIndex * 2.5}rem)`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} darkMode={darkMode} />
            ))}
          </Motion.div>
        </div>

        {/* Navigation Interface */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-12 gap-8">
          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={prevSlide}
              className={`p-6 rounded-full border-2 transition-all duration-300 ${
                darkMode
                  ? "border-[#E65C9C]/30 text-[#E65C9C] hover:border-[#E65C9C] hover:bg-[#E65C9C]/10"
                  : "border-black/10 text-black hover:border-black hover:bg-black/5"
              }`}
            >
              <ChevronLeft size={36} strokeWidth={2.5} />
            </button>
            <button
              onClick={nextSlide}
              className={`p-6 rounded-full border-2 transition-all duration-300 ${
                darkMode
                  ? "border-[#E65C9C]/30 text-[#E65C9C] hover:border-[#E65C9C] hover:bg-[#E65C9C]/10"
                  : "border-black/10 text-black hover:border-black hover:bg-black/5"
              }`}
            >
              <ChevronRight size={36} strokeWidth={2.5} />
            </button>

            {/* Pagination Numbers */}
            <div
              className={`text-2xl font-bold ml-4 tracking-tighter ${
                darkMode ? "text-[#E65C9C]/50" : "text-black/30"
              }`}
            >
              <span className={darkMode ? "text-[#E65C9C]" : "text-black"}>
                {(currentIndex + 1).toString().padStart(2, "0")}
              </span>
              <span className="mx-2">/</span>
              <span>{projects.length.toString().padStart(2, "0")}</span>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex gap-4">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-500 rounded-full h-3 ${
                  currentIndex === idx
                    ? darkMode
                      ? "w-20 bg-[#E65C9C]"
                      : "w-20 bg-black"
                    : darkMode
                    ? "w-3 bg-[#E65C9C]/20 hover:bg-[#E65C9C]/40"
                    : "w-3 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
