import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onDownloadResume }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle interactive parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-24 sm:pt-28 pb-10 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#050505]"
    >
      {/* ============================================================== */}
      {/* FULL-SCREEN COVER BACKGROUND IMAGE (CLEAR, CRISP, HIGH-DEF)    */}
      {/* ============================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <img
          src="/hero-laptop.jpg"
          alt="Creative Developer Workspace Setup"
          className="w-full h-full object-cover object-bottom sm:object-center transform scale-105 filter contrast-110 brightness-95 transition-transform duration-700 ease-out"
          style={{
            transform: `scale(1.05) translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        />

        {/* Ambient Top & Bottom Fades for Seamless Section Transition */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent"></div>
      </div>

      {/* Top Telemetry Line */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-white/50 border-b border-white/10 relative z-20">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>DHARANI // CREATIVE DEVELOPER</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-white/40">
          <span>COIMBATORE, INDIA</span>
          <span>•</span>
          <span>DEVELOPMENT + UI/UX</span>
        </div>
        <div className="flex items-center gap-2">
          <span>PORTFOLIO 2026</span>
        </div>
      </div>

      {/* Main Center Content Overlaid on Full-Cover Image */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center my-auto py-10 sm:py-16">
        
        {/* Role subtitle above title */}
        <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-silver font-light tracking-wider sm:tracking-[0.2em] uppercase mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Creative Developer <span className="text-white/40 px-1 sm:px-2">|</span> Development + UI/UX
        </p>

        {/* "Portfolio" Heading */}
        <h1 className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] text-white tracking-tight leading-[0.92] select-none text-glow drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)] mb-6 sm:mb-8">
          Portfolio
        </h1>

        {/* Short Introduction with Soft Glass Capsule */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-ivory font-light leading-relaxed mb-10 px-7 py-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl">
          "Turning ideas into beautiful, responsive and meaningful web experiences."
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-9 sm:px-10 py-4 rounded-full bg-ivory text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </button>

          <button
            onClick={onDownloadResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 sm:px-10 py-4 rounded-full border border-white/25 bg-black/70 text-ivory font-mono text-xs uppercase tracking-widest font-medium hover:bg-white/15 hover:border-white/50 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Download className="w-4 h-4 text-silver" />
            <span>Download Resume</span>
          </button>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex flex-col items-center gap-2 select-none pt-2">
        <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-white/50">
          Scroll to Explore
        </span>
        <button
          onClick={onExploreWork}
          className="p-2.5 rounded-full border border-white/15 bg-black/50 backdrop-blur-sm text-white/80 hover:text-white hover:border-white/40 transition-all duration-300 animate-bounce cursor-pointer"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
