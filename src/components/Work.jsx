import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const Work = ({
  wallifyMockupSrc,
  yuktiMockupSrc,
  feelmitraMockupSrc,
  chessMockupSrc,
  nexuscodeMockupSrc,
  darkMode,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const slides = [
    {
      id: "slide-1",
      projects: [
        {
          title: "/Yukti Bharat",
          subtitle: "Career Advisor Platform",
          image: yuktiMockupSrc,
          live: "https://yuktibharat.com",
          github: "#",
          dark: true,
        },
        {
          title: "/FeelMitra",
          subtitle: "Mental Wellbeing Platform",
          image: feelmitraMockupSrc,
          live: "#",
          github: "#",
          dark: false,
        },
      ],
    },
    {
      id: "slide-2",
      projects: [
        {
          title: "/Chess",
          subtitle: "React-based rating manager",
          image: chessMockupSrc,
          live: "#",
          github: "#",
          dark: false,
        },
        {
          title: "/Wallify",
          subtitle: "Sleek dark-themed wallpaper app",
          image: wallifyMockupSrc,
          live: "#",
          github: "#",
          dark: true,
        },
      ],
    },
    {
      id: "slide-3",
      projects: [
        {
          title: "/NexusCode",
          subtitle: "Online Code Judge Platform",
          image: nexuscodeMockupSrc,
          live: "#",
          github: "#",
          dark: true,
        },
        {
          isCTA: true,
          title: "/More Projects",
          subtitle: "Open Source & Experiments",
          github: "https://github.com/avpthegreat",
        },
      ],
    },
  ];

  const nextSlide = () => {
    if (isLocked) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    lockInteraction();
  };

  const prevSlide = () => {
    if (isLocked) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    lockInteraction();
  };

  const lockInteraction = () => {
    setIsLocked(true);
    setTimeout(() => setIsLocked(false), 800);
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || Math.abs(e.deltaY) > 50) {
      if (e.deltaX > 0 || e.deltaY > 50) {
        nextSlide();
      } else if (e.deltaX < 0 || e.deltaY < -50) {
        prevSlide();
      }
    }
  };

  return (
    <section
      id="work"
      className={`min-w-[100vw] h-screen flex flex-col justify-center transition-colors duration-500 px-20 relative snap-start overflow-hidden group ${
        darkMode ? "bg-[#030712] text-white" : "bg-[#fbfbf9] text-black"
      }`}
      onWheel={handleWheel}
    >
      <div
        className="absolute left-0 top-0 w-32 h-full z-30 cursor-pointer flex items-center justify-center group/left"
        onClick={prevSlide}
        onMouseEnter={() => !isLocked && prevSlide()}
      >
        <div
          className={`w-1 h-32 rounded-full opacity-0 group-hover/left:opacity-100 transition-opacity ${
            darkMode ? "bg-white/20" : "bg-black/5"
          }`}
        />
      </div>
      <div
        className="absolute right-0 top-0 w-32 h-full z-30 cursor-pointer flex items-center justify-center group/right"
        onClick={nextSlide}
        onMouseEnter={() => !isLocked && nextSlide()}
      >
        <div
          className={`w-1 h-32 rounded-full opacity-0 group-hover/right:opacity-100 transition-opacity ${
            darkMode ? "bg-white/20" : "bg-black/5"
          }`}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto h-full flex flex-col justify-center relative pointer-events-none">
        <div className="mb-12 z-10">
          <h2
            className={`text-[8vw] font-bold leading-[0.85] tracking-tight pointer-events-auto transition-colors duration-500 ${
              darkMode ? "text-[#E65C9C]" : "text-black"
            }`}
          >
            Featured <br />
            Projects
          </h2>
        </div>

        <div className="relative overflow-hidden w-full pointer-events-auto">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-full grid grid-cols-2 gap-16 pr-4"
              >
                {slide.projects.map((project, pIdx) => (
                  <div key={pIdx} className="flex flex-col gap-4">
                    {project.isCTA ? (
                      <>
                        <div>
                          <h3 className="text-5xl font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-lg text-gray-600">
                            {project.subtitle}
                          </p>
                        </div>
                        <div className="aspect-[4/3] bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative group/cta flex flex-col items-center justify-center p-8 text-center border border-gray-100">
                          <Github
                            size={64}
                            className="text-white mb-6 animate-pulse"
                          />
                          <h4 className="text-white text-2xl font-bold mb-2">
                            Visit GitHub for amazing projects
                          </h4>
                          <p className="text-gray-400">
                            See more of my open-source work and creative
                            experiments.
                          </p>
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-white text-2xl font-bold hover:text-pink-300 transition-colors px-8 py-4 border-2 border-white rounded-full"
                            >
                              <Github size={32} /> View Profile
                            </a>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h3 className="text-5xl font-bold mb-2">
                            {project.title}
                          </h3>
                          <p className="text-lg text-gray-600">
                            {project.subtitle}
                          </p>
                        </div>
                        <div
                          className={`aspect-[4/3] ${
                            project.dark ? "bg-gray-900" : "bg-gray-100"
                          } rounded-3xl overflow-hidden shadow-2xl relative group/item flex items-center justify-center`}
                        >
                          {project.image ? (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-105"
                            />
                          ) : (
                            <span className="text-gray-400 text-xl font-mono">
                              Image Coming Soon
                            </span>
                          )}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors"
                            >
                              <ExternalLink size={24} /> Live
                            </a>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-white text-xl font-bold hover:text-pink-300 transition-colors"
                            >
                              <Github size={24} /> GitHub
                            </a>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-12 pointer-events-auto">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? darkMode
                    ? "w-8 bg-white"
                    : "w-8 bg-black"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
