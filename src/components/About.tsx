import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* ============================================================== */}
      {/* FULL COVER BACKGROUND IMAGE FOR THE ABOUT ME SECTION           */}
      {/* ============================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <img
          src="/about-bg.jpg"
          alt="Dark Geometric Texture Background"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Soft Vignettes & Fades for seamless section integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]"></div>
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#050505] to-transparent"></div>
      </div>

      {/* Subtle Editorial Top Separator */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="editorial-divider"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Split Layout: Left editorial storytelling, Right structured info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Section number & label */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                02 //
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-silver/80">
                About Me
              </span>
            </div>

            {/* Clean, Elegant Editorial Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-normal leading-[1.1] tracking-tight">
              A curious mind with <span className="italic font-light text-white">big dreams.</span>
            </h2>

            {/* Personal Introduction */}
            <div className="space-y-4 text-mutedIvory text-base sm:text-lg font-light leading-relaxed">
              <p>
                Hello, I am <span className="text-ivory font-normal">Dharani</span> — a Creative Developer and UI/UX specialist operating at the intersection of computational engineering and refined visual aesthetics. Currently pursuing my Computer Science degree in Coimbatore, I combine robust backend logic with an intuitive eye for user-centric interaction design.
              </p>
              <p>
                My work is driven by the conviction that code should not only function reliably behind the scenes—it should evoke delight, simplicity, and confidence on the screen.
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): Compact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-2">
              Credentials & Metrics
            </div>

            {/* Card 1: Degree & Major */}
            <div className="p-6 rounded-2xl bg-[#0c0c10]/85 backdrop-blur-md border border-white/[0.08] hover:border-white/25 transition-all duration-300 group shadow-lg">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-ivory group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-mutedIvory/60">
                  Degree
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-2xl text-ivory font-medium">B.Sc Computer Science</h3>
                <p className="text-xs text-mutedIvory/80 mt-1 font-mono">{PERSONAL_INFO.college}</p>
              </div>
            </div>

            {/* Card 2: Timeline Period & CGPA */}
            <div className="grid grid-cols-2 gap-4">
              {/* Timeline Card */}
              <div className="p-5 rounded-2xl bg-[#0c0c10]/85 backdrop-blur-md border border-white/[0.08] hover:border-white/25 transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-2 text-mutedIvory/60 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">Timeline</span>
                </div>
                <div className="font-mono text-lg text-ivory font-medium">2024 – Present</div>
                <div className="text-[11px] text-mutedIvory/60 mt-1">Undergraduate Study</div>
              </div>

              {/* CGPA Card */}
              <div className="p-5 rounded-2xl bg-[#0c0c10]/85 backdrop-blur-md border border-white/[0.08] hover:border-white/25 transition-all duration-300 shadow-lg">
                <div className="flex items-center gap-2 text-mutedIvory/60 mb-3">
                  <Award className="w-4 h-4" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">Academic Merit</span>
                </div>
                <div className="font-serif text-2xl text-ivory font-medium">CGPA: 7.5</div>
                <div className="text-[11px] text-mutedIvory/60 mt-1">Strong Core Foundation</div>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className="p-6 rounded-2xl bg-[#0c0c10]/85 backdrop-blur-md border border-white/[0.08] hover:border-white/25 transition-all duration-300 group shadow-lg">
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-ivory group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Based In
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-2xl text-ivory font-medium">{PERSONAL_INFO.location}</h3>
                <p className="text-xs text-mutedIvory/80 mt-1 font-mono">Tamil Nadu, India • Creative Developer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
