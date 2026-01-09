import React from "react";
import { Monitor } from "lucide-react";

const MobileRestriction = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] text-white p-10 text-center lg:hidden">
      <div className="relative mb-10">
        <Monitor size={80} className="text-[#E65C9C] animate-pulse" />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-4 border-[#030712]" />
      </div>

      <h1 className="text-4xl font-bold mb-6 tracking-tighter">
        Experience <br />
        <span className="text-[#E65C9C]">avpthegreat</span> <br />
        on Desktop
      </h1>

      <p className="text-gray-400 text-lg max-w-xs leading-relaxed mb-12">
        This portfolio is designed for large-scale immersion. Please switch to a
        desktop or laptop for the full cinematic experience.
      </p>

      <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#E65C9C] to-transparent opacity-50" />

      <div className="mt-12 text-xs font-mono tracking-widest text-[#E65C9C]/40 uppercase">
        Optimized for 1024px+
      </div>
    </div>
  );
};

export default MobileRestriction;
