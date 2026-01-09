import React, { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";

const Contact = ({ darkMode }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const footerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <section
      ref={containerRef}
      id="contact"
      className={`w-full min-h-screen flex flex-col justify-between p-12 relative transition-colors duration-500 bg-transparent ${
        darkMode ? "text-white" : "text-white"
      }`}
    >
      {/* Top Section */}
      <Motion.div
        style={{ y: headingY, opacity }}
        className="flex flex-col lg:flex-row justify-between items-start mt-20"
      >
        {/* Main Heading */}
        <h1
          className={`text-[8vw] font-bold leading-[0.9] tracking-tighter max-w-4xl transition-colors duration-500 font-serif ${
            darkMode ? "text-[#E65C9C]" : "text-white"
          }`}
        >
          Building <br />
          Products <br />
          that Matter.
        </h1>

        {/* Right Columns */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mt-8 lg:mr-20">
          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">/Quick links</h3>
            <div className="flex flex-col gap-4">
              <a
                href="#hero"
                className="bg-pink-300 text-black px-6 py-2 rounded-full font-bold hover:bg-pink-400 transition-colors text-center"
              >
                TOP
              </a>
              <a
                href="#work"
                className="bg-pink-300 text-black px-6 py-2 rounded-full font-bold hover:bg-pink-400 transition-colors text-center"
              >
                WORK
              </a>
              <a
                href="https://blog.avpthegreat.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-300 text-black px-6 py-2 rounded-full font-bold hover:bg-pink-400 transition-colors text-center"
              >
                BLOG
              </a>
            </div>
          </div>

          {/* Connect Section with SVGs */}
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl font-medium">/Connect</h3>

            {/* Social Icons Row */}
            <div className="flex gap-6 text-gray-400">
              <a
                href="https://www.linkedin.com/in/avpthegreat/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://github.com/AVPthegreat"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="GitHub"
              >
                <Github size={32} />
              </a>
            </div>

            {/* Contact Details List */}
            <div className="flex flex-col gap-5 text-gray-400 text-lg mt-2">
              <a
                href="mailto:contact@avpthegreat.tech"
                className="flex items-center gap-4 hover:text-white transition-colors group"
              >
                <Mail
                  size={24}
                  className="group-hover:text-pink-300 transition-colors"
                />
                <span>contact@avpthegreat.tech</span>
              </a>

              <div className="flex items-center gap-4 group">
                <Phone
                  size={24}
                  className="group-hover:text-pink-300 transition-colors"
                />
                <span>+91 8874497809</span>
              </div>

              <div className="flex items-center gap-4 group">
                <MapPin
                  size={24}
                  className="group-hover:text-pink-300 transition-colors"
                />
                <span>Based in Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>
      </Motion.div>

      {/* Bottom Section - Creative Is */}
      <Motion.div style={{ y: footerY }} className="w-full">
        <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
          <div className="flex items-center gap-4">
            {/* Logo Icon */}
            <svg
              viewBox="0 0 100 100"
              className={`w-32 h-32 transition-colors duration-500 ${
                darkMode ? "text-[#E65C9C]" : "text-white"
              }`}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
              />
              <text
                x="50"
                y="62"
                fontSize="38"
                fontWeight="900"
                fill="currentColor"
                textAnchor="middle"
                fontFamily="serif"
                letterSpacing="-2"
              >
                AVP
              </text>
            </svg>
            <span
              className={`text-[6.84vw] font-bold tracking-tighter leading-none transition-colors duration-500 font-serif ${
                darkMode ? "text-[#E65C9C]" : "text-white"
              }`}
            >
              ANANT VARDHAN PANDEY
            </span>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-between text-gray-500 text-sm font-medium">
          <p>©2026 avpthegreat.</p>
          <p>Built with &lt;/&gt; in India</p>
          <p>Always Learning, Always Building</p>
        </div>
      </Motion.div>
    </section>
  );
};

export default Contact;
