import React from 'react';
import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-purple-400" />;
      case 'experience':
        return <Briefcase className="w-4 h-4 text-blue-400" />;
      case 'leadership':
        return <Users className="w-4 h-4 text-emerald-400" />;
      default:
        return <Award className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section id="journey" className="relative py-28 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Top divider */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="editorial-divider mb-16"></div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                05 //
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-silver/80">
                Experience & Journey
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              A trajectory of <span className="italic font-light text-white">learning & growth.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-mutedIvory font-light leading-relaxed">
            From foundational academics to real-world design internships, competitive hackathons, and departmental leadership.
          </p>
        </div>
      </div>

      {/* Minimal Vertical Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Continuous Central Vertical Line */}
        <div className="absolute top-2 bottom-2 left-6 sm:left-8 w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent"></div>

        <div className="space-y-8 relative">
          {TIMELINE_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className="relative pl-16 sm:pl-20 group"
            >
              {/* Timeline Node Dot / Icon */}
              <div className="absolute left-3.5 sm:left-5.5 top-1 -translate-x-1/2 w-6 h-6 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:scale-110 transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-white/60 group-hover:bg-purple-400 transition-colors"></span>
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0c10] border border-white/[0.06] hover:border-white/20 transition-all duration-300 shadow-sm space-y-2.5">
                {/* Period & Tag Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-white/[0.03]">
                      {getTimelineIcon(item.type)}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-purple-400 font-medium">
                      {item.period}
                    </span>
                  </div>

                  {item.tag && (
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/[0.04] text-mutedIvory border border-white/5">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-serif text-2xl text-ivory font-medium group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-silver/80 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                {/* Detail Description */}
                {item.detail && (
                  <p className="text-xs sm:text-sm text-mutedIvory/80 font-light leading-relaxed pt-1">
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
