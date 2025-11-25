import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-w-[100vw] h-screen bg-black text-white flex flex-col justify-between p-12 relative snap-start">
      
      {/* Top Section */}
      <div className="flex justify-between items-start mt-20">
        {/* Main Heading */}
        <h1 className="text-[8vw] font-bold leading-[0.9] tracking-tighter max-w-4xl">
          Scaling <br/>
          Start-ups <br/>
          for Growth.
        </h1>

        {/* Right Columns */}
        <div className="flex gap-32 mt-8 mr-20">
          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">/Quick links</h3>
            <div className="grid grid-cols-2 gap-4">
               <button className="bg-pink-300 text-black px-6 py-2 rounded-full font-bold hover:bg-pink-400 transition-colors">BIO</button>
               <button className="bg-pink-300 text-black px-6 py-2 rounded-full font-bold hover:bg-pink-400 transition-colors">WORK</button>
               <button className="bg-pink-300 text-black px-6 py-2 rounded-full font-bold hover:bg-pink-400 transition-colors">PROJECTS</button>
               <button className="bg-pink-300 text-black px-6 py-2 rounded-full font-bold hover:bg-pink-400 transition-colors">SERVICES</button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium">/Contact</h3>
            <div className="flex flex-col gap-2 text-gray-400 text-lg">
              <a href="mailto:mykhailo@creativestudio.com" className="hover:text-white transition-colors">mykhailo@creativestudio.com</a>
              <p>+44 (857) 857-9984</p>
              <div className="mt-4">
                <p>1901 Thornridge</p>
                <p>Cir. Shiloh, London</p>
                <p>81063</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Creative Is */}
      <div className="w-full">
         <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
            <div className="flex items-center gap-4">
               {/* Logo Icon */}
               <svg viewBox="0 0 100 100" className="w-32 h-32 text-white">
                 <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none" />
                 <path d="M50 95 L50 50 L20 20" stroke="currentColor" strokeWidth="8" fill="none" />
                 <path d="M50 50 L80 20" stroke="currentColor" strokeWidth="8" fill="none" />
               </svg>
               <span className="text-[12vw] font-bold tracking-tighter leading-none">Creative</span>
            </div>
            <span className="text-[12vw] font-bold tracking-tighter leading-none">is</span>
         </div>

         {/* Footer Links */}
         <div className="flex justify-between text-gray-500 text-sm font-medium">
            <p>©2025 Creative Studio.</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
         </div>
      </div>

    </section>
  );
};

export default Contact;
