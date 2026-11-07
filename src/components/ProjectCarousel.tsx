import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles,
  Play,
  Pause,
  ExternalLink
} from 'lucide-react';
import type { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectCarouselProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ onSelectProject }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragDistance, setDragDistance] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [cardTilt, setCardTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const totalProjects = PROJECTS.length;

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
    setCardTilt({ x: 0, y: 0 });
  }, [totalProjects]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
    setCardTilt({ x: 0, y: 0 });
  }, [totalProjects]);

  // Auto-scroll animation (cycles every 3 seconds when enabled, pauses only while actively dragging)
  useEffect(() => {
    if (!autoPlay || isDragging) return;

    const interval = setInterval(() => {
      nextProject();
    }, 3000);

    return () => clearInterval(interval);
  }, [autoPlay, isDragging, nextProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextProject();
      } else if (e.key === 'ArrowLeft') {
        prevProject();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextProject, prevProject]);

  // Pointer / Drag Handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    // Only capture if not clicking a button
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a')) {
      return;
    }
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDistance(0);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
      setCardTilt({ x, y });
      return;
    }
    const distance = e.clientX - dragStartX;
    setDragDistance(distance);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragDistance < -50) {
      nextProject();
    } else if (dragDistance > 50) {
      prevProject();
    }
    setDragDistance(0);
    setCardTilt({ x: 0, y: 0 });
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setDragDistance(0);
    setCardTilt({ x: 0, y: 0 });
  };

  const activeProject = PROJECTS[currentIndex];

  return (
    <section 
      id="projects" 
      className="relative py-28 px-4 sm:px-6 md:px-12 bg-[#050505] overflow-hidden select-none"
    >
      {/* Dynamic Ambient Background Glow tuned to Current Project's Color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-25"
        style={{ background: activeProject.theme.primary }}
      ></div>

      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="editorial-divider mb-16"></div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                04 //
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-silver/80">
                Selected Works
              </span>
            </div>
            {/* Exact Required Heading: "My Works." */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              My <span className="italic font-light text-white">Works.</span>
            </h2>
          </div>

          {/* Autoscroll Controls & Counter */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Auto-Scroll Toggle Pill */}
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all duration-300 ${
                autoPlay 
                  ? 'border-emerald-500/40 bg-emerald-950/20 text-emerald-400' 
                  : 'border-white/10 bg-white/[0.03] text-mutedIvory hover:text-white'
              }`}
              title="Toggle Auto-Scroll"
            >
              {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{autoPlay ? 'Auto-Scroll: ON' : 'Auto-Scroll: OFF'}</span>
            </button>

            {/* Counter Badge */}
            <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] font-mono text-sm tracking-widest text-ivory flex items-center gap-2">
              <span className="text-white font-bold">{activeProject.number}</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50">0{totalProjects}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Carousel Stage */}
      <div 
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        className="relative w-full max-w-6xl mx-auto h-[540px] sm:h-[580px] flex items-center justify-center perspective-container cursor-grab active:cursor-grabbing touch-none select-none z-10"
      >
        {PROJECTS.map((project, index) => {
          let offset = index - currentIndex;
          if (offset > totalProjects / 2) offset -= totalProjects;
          if (offset < -totalProjects / 2) offset += totalProjects;

          const isCenter = offset === 0;
          const isImmediate = Math.abs(offset) === 1;

          const translateXBase = offset * 320;
          const dragInfluence = isDragging ? dragDistance * 0.8 : 0;
          const totalTranslateX = translateXBase + dragInfluence;
          const translateZ = isCenter ? 70 : -100 - Math.abs(offset) * 60;
          
          const tiltRotateY = isCenter ? cardTilt.x : 0;
          const tiltRotateX = isCenter ? cardTilt.y : 0;
          const baseRotateY = offset * -20;
          const rotateY = baseRotateY + tiltRotateY;
          const rotateX = tiltRotateX;

          const scale = isCenter ? 1 : 0.88;
          const opacity = isCenter ? 1 : isImmediate ? 0.65 : 0.2;
          const zIndex = 30 - Math.abs(offset) * 5;

          return (
            <div
              key={project.id}
              onClick={() => {
                if (Math.abs(dragDistance) < 10) {
                  if (isCenter) {
                    onSelectProject(project);
                  } else {
                    setCurrentIndex(index);
                  }
                }
              }}
              style={{
                transform: `translateX(${totalTranslateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(${scale})`,
                zIndex,
                opacity,
                transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s ease',
              }}
              className="absolute w-[330px] sm:w-[420px] md:w-[480px] h-[480px] sm:h-[520px] rounded-[28px] p-6 sm:p-8 flex flex-col justify-between backface-hidden cursor-pointer"
            >
              {/* Card Container with Customized Rounded Border & Dynamic Project Glow Effect */}
              <div 
                className="absolute inset-0 rounded-[28px] transition-all duration-500 overflow-hidden"
                style={{
                  background: project.theme.cardBg,
                  border: isCenter 
                    ? `1.5px solid ${project.theme.border}` 
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: isCenter 
                    ? `0 30px 80px -15px ${project.theme.glow}, 0 0 35px -5px ${project.theme.primary}50` 
                    : '0 15px 30px rgba(0, 0, 0, 0.8)',
                }}
              >
                {/* Dynamic Mouse Spotlight Reflection in Center Card */}
                {isCenter && (
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at ${50 + cardTilt.x * 2}% ${50 - cardTilt.y * 2}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
                    }}
                  />
                )}

                {/* Subtle Geometric Graphic Overlay */}
                <div 
                  className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-2xl opacity-30 pointer-events-none"
                  style={{ background: project.theme.secondary }}
                ></div>

                {/* Top Corner Badge & Domain Tag */}
                <div className="relative z-10 p-6 sm:p-8 flex items-start justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-xs font-mono uppercase tracking-[0.2em] px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: project.theme.tagBg,
                          color: project.theme.textAccent,
                          border: `1px solid ${project.theme.border}`
                        }}
                      >
                        {project.domain}
                      </span>
                      {project.badge && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/50 hidden sm:inline-block">
                          • {project.badge}
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-xs tracking-widest text-white/40">
                      PROJECT // {project.number}
                    </div>
                  </div>

                  {/* Project Color Monogram Marker */}
                  <div 
                    className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-transform"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${project.theme.border}`,
                      color: project.theme.textAccent
                    }}
                  >
                    {project.number}
                  </div>
                </div>

                {/* Center Content: Title & Concept */}
                <div className="relative z-10 px-6 sm:px-8 mt-2 space-y-3">
                  <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-medium tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-silver/80 font-normal">
                    {project.concept}
                  </p>
                  <p className="text-xs sm:text-sm text-mutedIvory/80 line-clamp-3 font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tech Stack Tags & Interactive Action */}
                <div className="relative z-10 p-6 sm:p-8 mt-auto space-y-4">
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-silver/90 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded text-white/40">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Full Screen Showcase Trigger & Direct GitHub Repo Link */}
                  <div className="pt-2 flex items-center justify-between border-t border-white/[0.08]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-mutedIvory/60 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: project.theme.primary }} />
                      <span className="hidden sm:inline">Verified Artifacts</span>
                      <span className="sm:hidden">Case Study</span>
                    </span>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onPointerDown={(e) => e.stopPropagation()}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full border border-white/15 bg-white/[0.04] text-silver hover:text-white hover:border-white/30 hover:bg-white/15 transition-all cursor-pointer"
                          title="Open Verified GitHub Repository"
                          aria-label="Open GitHub Repository"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onPointerDown={(e) => e.stopPropagation()}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:text-white hover:border-emerald-400 hover:bg-emerald-500/25 transition-all cursor-pointer"
                          title="Open Live Website on GitHub Pages"
                          aria-label="Open Live Website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <button
                        type="button"
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider text-white flex items-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                        style={{
                          backgroundColor: project.theme.primary,
                          boxShadow: `0 4px 18px ${project.theme.glow}`
                        }}
                      >
                        <span>Explore</span>
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Carousel Controls & Dot Navigation */}
      <div className="max-w-6xl mx-auto mt-12 flex items-center justify-between relative z-20 px-4">
        {/* Previous Button */}
        <button
          onClick={prevProject}
          className="p-3.5 rounded-full border border-white/10 bg-[#0c0c10] text-ivory hover:text-white hover:border-white/30 hover:scale-110 active:scale-95 transition-all shadow-lg focus:outline-none cursor-pointer"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dynamic Project Dots Indicator */}
        <div className="flex items-center gap-2">
          {PROJECTS.map((proj, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={proj.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-500 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-10 h-2 bg-white'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/50'
                }`}
                style={isActive ? { backgroundColor: proj.theme.primary } : undefined}
                aria-label={`Go to project ${proj.number}`}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={nextProject}
          className="p-3.5 rounded-full border border-white/10 bg-[#0c0c10] text-ivory hover:text-white hover:border-white/30 hover:scale-110 active:scale-95 transition-all shadow-lg focus:outline-none cursor-pointer"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
