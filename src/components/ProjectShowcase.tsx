import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  X,
  Image as ImageIcon,
  Compass
} from 'lucide-react';
import type { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectShowcaseProps {
  project: Project;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ 
  project, 
  onClose,
  onSelectProject
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lock background scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, selectedImage]);

  // Find next project for seamless cycling
  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#050505] text-[#F5F5F0] selection:bg-white/20 selection:text-white antialiased">
      {/* Top Floating Glass Navigation Bar */}
      <header className="sticky top-0 z-40 w-full px-6 md:px-12 py-4 bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.08] flex items-center justify-between">
        {/* Back to Projects Navigation */}
        <button
          onClick={onClose}
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-ivory hover:text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        {/* Project Monogram & Number */}
        <div className="hidden sm:flex items-center gap-3">
          <span 
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: project.theme.primary }}
          ></span>
          <span className="font-mono text-xs uppercase tracking-widest text-silver">
            {project.title}
          </span>
          <span className="text-white/30 font-mono text-xs">•</span>
          <span className="font-mono text-xs text-white/50">{project.number} / 0{PROJECTS.length}</span>
        </div>

        {/* Direct Action Links */}
        <div className="flex items-center gap-3">
          {project.prototypeUrl && (
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-mono uppercase tracking-wider text-amber-300 hover:bg-amber-500 hover:text-black transition-all"
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Visily Prototype</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/[0.08] text-xs font-mono uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-ivory hover:bg-white hover:text-black transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">GitHub Repository</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-white/15 transition-colors"
            aria-label="Close presentation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Full-Screen Presentation Body */}
      <main className="relative min-h-screen pb-32">
        {/* Project Specific Bespoke Ambient Background Lighting */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full blur-[160px] pointer-events-none opacity-30"
          style={{ background: project.theme.secondary }}
        ></div>

        {/* Section 1: Hero Showcase Title & Metadata */}
        <section className="relative pt-16 sm:pt-24 pb-16 px-6 md:px-16 max-w-6xl mx-auto">
          {/* Domain & Badge Header */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span 
              className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest"
              style={{
                backgroundColor: project.theme.tagBg,
                color: project.theme.textAccent,
                border: `1px solid ${project.theme.border}`
              }}
            >
              {project.domain}
            </span>
            {project.badge && (
              <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.05] border border-white/10 text-mutedIvory">
                {project.badge}
              </span>
            )}
            <span className="font-mono text-xs tracking-widest text-white/40 ml-auto">
              CASE STUDY // {project.number}
            </span>
          </div>

          {/* Oversized Editorial Project Title */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory font-normal leading-[1.05] tracking-tight mb-8">
            {project.title}
          </h1>

          {/* Subheading Concept & Summary */}
          <p className="text-xl sm:text-2xl font-light text-silver/90 max-w-4xl leading-relaxed mb-12">
            {project.concept}
          </p>

          {/* Quick Spec Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0c0c10]/80 border border-white/[0.08] backdrop-blur-xl">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-mutedIvory/60">
                Core Domain
              </div>
              <div className="text-sm font-medium text-ivory mt-1">{project.domain}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-mutedIvory/60">
                Primary Architecture
              </div>
              <div className="text-sm font-medium text-ivory mt-1">{project.stack[0]}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-mutedIvory/60">
                Verification
              </div>
              <div className="text-sm font-medium text-emerald-400 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>GitHub Verified</span>
              </div>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-mutedIvory/60">
                Live Status
              </div>
              <div className="text-sm font-medium text-ivory mt-1">
                {project.liveUrl ? 'Public Demo' : project.prototypeUrl ? 'Visily Prototype' : 'Source Repo'}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Deep Dive Presentation */}
        <section className="px-6 md:px-16 max-w-6xl mx-auto space-y-16">
          
          {/* Problem & Purpose Section */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0a0e] border border-white/[0.08] relative overflow-hidden">
            <div 
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{ background: project.theme.primary }}
            ></div>

            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mutedIvory/60">
                <Sparkles className="w-3.5 h-3.5" style={{ color: project.theme.primary }} />
                <span>Problem Statement & Verified Objective</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-ivory font-normal leading-snug">
                Why this project was engineered.
              </h2>
              <p className="text-base sm:text-lg text-mutedIvory/90 font-light leading-relaxed">
                {project.purpose}
              </p>
              <p className="text-sm sm:text-base text-mutedIvory/70 font-light leading-relaxed pt-2">
                {project.description}
              </p>
            </div>
          </div>

          {/* Actual Verified Project Screenshots (If Available) */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mutedIvory/60">
                <ImageIcon className="w-3.5 h-3.5" style={{ color: project.theme.primary }} />
                <span>Verified Visuals & Interface Screens</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
                Actual Project Screenshots
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((shot, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(shot.url)}
                    className="group relative rounded-2xl overflow-hidden bg-[#0a0a0d] border border-white/10 hover:border-white/30 transition-all cursor-zoom-in"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-[#111116] flex items-center justify-center">
                      <img
                        src={shot.url}
                        alt={shot.caption}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 bg-[#0a0a0d]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono text-silver/90">{shot.caption}</span>
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Click to Zoom</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 3: Key Features Breakdown */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mutedIvory/60 mb-2">
                  <Layers className="w-3.5 h-3.5" style={{ color: project.theme.primary }} />
                  <span>Feature Architecture</span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
                  Features Verified from Source Code & Documentation
                </h3>
              </div>
              <span className="text-xs font-mono text-mutedIvory/60">
                {project.features.length} verified functional modules
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c0c10] border border-white/[0.06] hover:border-white/20 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: project.theme.tagBg,
                      color: project.theme.textAccent,
                      border: `1px solid ${project.theme.border}`
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-silver/90 font-light leading-relaxed group-hover:text-white transition-colors">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Technologies Used */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0a0a0e] border border-white/[0.08] space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mutedIvory/60">
              <Cpu className="w-3.5 h-3.5" style={{ color: project.theme.primary }} />
              <span>Technology Stack & Integrations</span>
            </div>
            <h3 className="font-serif text-3xl text-ivory font-normal">
              Verified Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-white/[0.03] border border-white/10 text-ivory hover:border-white/30 hover:bg-white/[0.06] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section 5: Dharani's Contribution */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-mutedIvory/60">
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: project.theme.primary }} />
              <span>Developer Contribution & Craft</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-ivory font-normal">
              My Engineering & Design Impact
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.contribution.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c0c10] border border-white/[0.06] hover:border-white/20 transition-all flex items-start gap-3.5"
                >
                  <CheckCircle2 
                    className="w-5 h-5 shrink-0 mt-0.5" 
                    style={{ color: project.theme.primary }}
                  />
                  <p className="text-sm text-mutedIvory/90 leading-relaxed font-light">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Action Panel & Authentic Links */}
          <div 
            className="p-8 sm:p-12 rounded-3xl border transition-all text-center space-y-6 relative overflow-hidden"
            style={{
              background: project.theme.cardBg,
              borderColor: project.theme.border,
              boxShadow: `0 25px 60px -20px ${project.theme.glow}`
            }}
          >
            <h4 className="font-serif text-3xl sm:text-4xl text-ivory font-medium">
              Explore the Project Artifacts
            </h4>
            <p className="max-w-xl mx-auto text-sm text-mutedIvory/80 font-light">
              Inspect the repository on GitHub or test the live prototype/deployment directly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-ivory hover:shadow-lg transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {project.prototypeUrl && (
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300 font-mono text-xs uppercase tracking-widest font-medium hover:bg-amber-400 hover:text-black transition-all"
                >
                  <Compass className="w-4 h-4" />
                  <span>Open Visily Prototype</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/[0.05] text-ivory font-mono text-xs uppercase tracking-widest font-medium hover:bg-white/15 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Site</span>
                </a>
              )}
            </div>
          </div>

          {/* Bottom Project Switcher & Back CTA */}
          <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="group flex items-center gap-3 text-left font-mono text-xs uppercase tracking-wider text-mutedIvory hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="block text-[10px] text-white/40">Previous Project</span>
                <span className="font-serif text-base text-ivory font-normal">{prevProject.title}</span>
              </div>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full border border-white/20 bg-white/[0.03] text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Exit Showcase
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="group flex items-center gap-3 text-right font-mono text-xs uppercase tracking-wider text-mutedIvory hover:text-white transition-colors"
            >
              <div>
                <span className="block text-[10px] text-white/40">Next Project</span>
                <span className="font-serif text-base text-ivory font-normal">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </section>
      </main>

      {/* Lightbox Image Preview Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-y-auto cursor-zoom-out"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/15 text-white hover:bg-white/30 transition-all cursor-pointer"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl my-auto py-6">
            <img
              src={selectedImage}
              alt="Enlarged screenshot"
              className="w-auto max-h-[90vh] mx-auto object-contain rounded-2xl shadow-2xl border border-white/20"
            />
          </div>
        </div>
      )}
    </div>
  );
};
