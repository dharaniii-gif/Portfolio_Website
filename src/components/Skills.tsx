import React, { useState } from 'react';
import { Layers, Server, Database, Wrench } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  color: string;
  iconSvg: React.ReactNode;
}

export const Skills: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories: { 
    key: 'frontend' | 'backend' | 'database' | 'tools'; 
    label: string; 
    subtitle: string;
    icon: React.ReactNode 
  }[] = [
    { 
      key: 'frontend', 
      label: 'Frontend', 
      subtitle: 'Interfaces & UI Experience',
      icon: <Layers className="w-5 h-5 text-blue-400" /> 
    },
    { 
      key: 'backend', 
      label: 'Backend', 
      subtitle: 'Server Systems & OOP Logic',
      icon: <Server className="w-5 h-5 text-emerald-400" /> 
    },
    { 
      key: 'database', 
      label: 'Database', 
      subtitle: 'Data Architecture & Storage',
      icon: <Database className="w-5 h-5 text-cyan-400" /> 
    },
    { 
      key: 'tools', 
      label: 'Tools & Design', 
      subtitle: 'Dev Tools & UI/UX Workflow',
      icon: <Wrench className="w-5 h-5 text-purple-400" /> 
    },
  ];

  const technologies: TechItem[] = [
    // -------------------------------------------------------------------------
    // FRONTEND (HTML5, CSS3, JavaScript, React, Bootstrap - Tailwind Removed)
    // -------------------------------------------------------------------------
    {
      name: 'HTML5',
      category: 'frontend',
      color: '#E44D26',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <path fill="#E44D26" d="M19.2 114.7L9.8 9.3h108.4l-9.4 105.4L64 128l-44.8-13.3z"/>
          <path fill="#F16529" d="M64 118.6l36.8-10.2 8-89.9H64v100.1z"/>
          <path fill="#EBEBEB" d="M64 55.4H47.1l-1.2-13.1H64V29.7H32.6l3.5 38.3H64V55.4zm0 35.8l-.2.1-14.7-4-1-10.8H35.4l1.9 21.6 26.6 7.4.1-.3V91.2z"/>
          <path fill="#FFFFFF" d="M63.9 55.4v12.6h15.7l-1.5 16.6-14.2 3.8v13.1l25.6-7.1.2-2.3 2.9-32.9.4-3.8H63.9zm0-25.7v12.6h31.8l.3-3.1.8-9.5H63.9z"/>
        </svg>
      )
    },
    {
      name: 'CSS3',
      category: 'frontend',
      color: '#264DE4',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <path fill="#264DE4" d="M19.2 114.7L9.8 9.3h108.4l-9.4 105.4L64 128l-44.8-13.3z"/>
          <path fill="#2965F1" d="M64 118.6l36.8-10.2 8-89.9H64v100.1z"/>
          <path fill="#EBEBEB" d="M64 55.4H47.1l-1.2-13.1H64V29.7H32.6l3.5 38.3H64V55.4zm0 35.8l-.2.1-14.7-4-1-10.8H35.4l1.9 21.6 26.6 7.4.1-.3V91.2z"/>
          <path fill="#FFFFFF" d="M63.9 55.4v12.6h15.7l-1.5 16.6-14.2 3.8v13.1l25.6-7.1.2-2.3 2.9-32.9.4-3.8H63.9zm0-25.7v12.6h31.8l.3-3.1.8-9.5H63.9z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      color: '#F7DF1E',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.184H1.408z"/>
          <path fill="#000000" d="M27.744 100.416l10.976-6.656c2.112 3.68 4.256 6.816 8.768 6.816 4.48 0 7.328-1.792 7.328-8.832V47.52H68.8v44.256c0 13.056-7.68 18.944-19.872 18.944-10.752 0-16.96-5.632-21.184-10.304zm47.04-1.92l10.848-6.304c3.04 4.896 7.648 8.672 14.176 8.672 5.92 0 9.728-2.912 9.728-6.944 0-4.8-3.872-6.528-10.4-9.344l-3.584-1.536c-10.336-4.384-17.184-9.92-17.184-21.76 0-10.848 8.288-19.04 21.088-19.04 9.12 0 15.68 3.328 20.32 11.232l-9.696 6.208c-2.24-3.808-5.184-5.632-10.368-5.632-4.576 0-7.392 2.144-7.392 5.536 0 3.84 2.88 5.408 8.928 8.032l3.584 1.536c12.224 5.216 18.88 10.464 18.88 22.464 0 12.832-10.016 19.968-23.488 19.968-13.12 0-21.76-6.272-25.488-14.568z"/>
        </svg>
      )
    },
    {
      name: 'React',
      category: 'frontend',
      color: '#61DAFB',
      iconSvg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      )
    },
    {
      name: 'Bootstrap',
      category: 'frontend',
      color: '#7952B3',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <path fill="#7952B3" d="M16 28.5C16 19.4 23.4 12 32.5 12h63c9.1 0 16.5 7.4 16.5 16.5v71c0 9.1-7.4 16.5-16.5 16.5h-63C23.4 116 16 108.6 16 99.5v-71z"/>
          <path fill="#FFFFFF" d="M48.2 38.3h20.6c7.9 0 13.5 1.7 17.2 5.2 3.6 3.4 5.4 8.2 5.4 14.2 0 4.5-1.2 8.3-3.6 11.4-2.4 3-5.9 5.2-10.6 6.3 5.7 1.1 9.9 3.5 12.8 7.1 2.9 3.6 4.3 8.3 4.3 14 0 6.6-2.1 11.9-6.3 15.8-4.2 3.9-10.5 5.8-19 5.8H48.2V38.3zm14.8 28.4h5.2c4.1 0 7.2-.8 9.3-2.3 2.1-1.6 3.2-4 3.2-7.2 0-3.3-1.1-5.7-3.2-7.1-2.1-1.4-5.2-2.1-9.3-2.1H63v18.7zm0 37.4h6.3c4.8 0 8.4-.9 10.7-2.7 2.3-1.8 3.5-4.6 3.5-8.3 0-3.6-1.1-6.3-3.4-8.1-2.3-1.8-5.9-2.7-10.8-2.7H63v21.8z"/>
        </svg>
      )
    },

    // -------------------------------------------------------------------------
    // BACKEND (Node.js, Express.js with White Circle, Java)
    // -------------------------------------------------------------------------
    {
      name: 'Node.js',
      category: 'backend',
      color: '#339933',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <path fill="#339933" d="M64 8.9L16.3 36.4v55.2L64 119.1l47.7-27.5V36.4L64 8.9zm37.9 77.2L64 107.8 26.1 86.1V42.6L64 20.8l37.9 21.8v43.5z"/>
          <path fill="#339933" d="M64 43.1L38.4 57.9v29.6L64 102.3l25.6-14.8V57.9L64 43.1zm16.5 39.8L64 92.5l-16.5-9.6V65.7L64 56.1l16.5 9.6v17.2z"/>
        </svg>
      )
    },
    {
      name: 'Express.js',
      category: 'backend',
      color: '#FFFFFF',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <circle cx="64" cy="64" r="60" fill="#FFFFFF"/>
          <text x="64" y="80" fill="#181818" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="62" fontWeight="300" letterSpacing="-2" textAnchor="middle">
            ex
          </text>
        </svg>
      )
    },
    {
      name: 'Java',
      category: 'backend',
      color: '#EA2D2E',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <path fill="#5382A1" d="M46.7 94.6s-5.6 1.4-8.8 1.4c-8.9 0-11-4.7-11-4.7s2.5 1.4 7.6 1.4c7.3 0 12.2-4.1 12.2-4.1zm1.2-8.3s-4.6 1.9-8.4 2.4c-6.1.8-11.4-.4-11.4-.4s2.3.9 6.8 1.1c7 .2 13-3.1 13-3.1zm1.9-9.1s-4.3 2.1-7.7 2.7c-5.8 1-11.2.5-11.2.5s2.3.8 6.4 1c6.5.3 12.5-4.2 12.5-4.2zm2.1-9s-4.1 2.3-7.2 3.1c-5.2 1.3-10.7 1.4-10.7 1.4s2.3.6 5.9.8c6 .2 12-5.3 12-5.3zm2.5-8.5s-4 2.5-6.9 3.4c-4.8 1.5-10.2 2-10.2 2s2.2.5 5.5.7c5.4.3 11.6-6.1 11.6-6.1zm2.3-7.9s-3.7 2.7-6.4 3.7c-4.4 1.7-9.5 2.5-9.5 2.5s2.1.4 5.1.5c4.8.2 10.8-6.7 10.8-6.7z"/>
          <path fill="#E76F00" d="M72.2 44.8s-3.3 3.6-7.8 7.3c-7.3 6-15.5 13.8-15.5 23.9 0 7.7 4.7 13.7 12.2 17.6 7.4 3.8 17.5 4.8 28 3 14.5-2.5 24.3-10.6 24.3-21.7 0-14.7-15.9-22.1-24.3-27.1-7.2-4.3-16.9-3-16.9-3zm18.4 46.1c-8.9 1.6-17.5.8-23.7-2.3-6.2-3.2-9.9-8.1-9.9-14.1 0-8.2 6.9-14.7 13.5-20.2 4.1-3.4 7.2-6.7 7.2-6.7s7.8 3.8 13.7 7.7c7.1 4.7 18.5 10.6 18.5 21.2.1 8.7-7.7 13.1-19.3 14.4z"/>
          <path fill="#5382A1" d="M77.1 13.6s-10.7 10.7-5.9 21.8c5.4 12.5-2.5 19.3-2.5 19.3s10.3-6.1 5.9-19c-4-11.8 2.5-22.1 2.5-22.1zm-8.4 8.7s-8.1 8.1-4.5 16.5c4.1 9.5-1.9 14.7-1.9 14.7s7.8-4.6 4.5-14.4c-3.1-9 1.9-16.8 1.9-16.8z"/>
        </svg>
      )
    },

    // -------------------------------------------------------------------------
    // DATABASE (MongoDB with White Circle, MySQL, SQL)
    // -------------------------------------------------------------------------
    {
      name: 'MongoDB',
      category: 'database',
      color: '#47A248',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <circle cx="64" cy="64" r="60" fill="#FFFFFF"/>
          <path fill="#47A248" d="M64.6 22.4c-1.8 0-3.5 1-4.4 2.5-4.9 8.3-26.3 47.8-26.3 66.6 0 17.2 14 24.7 30.2 24.7 16.6 0 30.2-7.5 30.2-24.7 0-18.7-21-58.2-25.8-66.6-.9-1.5-2.5-2.5-3.9-2.5zm-.5 14.6c1.4 3.3 22.1 49 22.1 61.7 0 14.1-11 19.6-22.1 19.6-11 0-22.1-5.5-22.1-19.6 0-12.7 20.7-58.4 22.1-61.7z"/>
          <path fill="#3FA037" d="M64 110.2V37c1.4 3.3 22.1 49 22.1 61.7 0 14.1-11 19.6-22.1 19.6"/>
          <path fill="#47A248" d="M64.6 116h-1c-.9 0-1.6-.7-1.6-1.6V103h4.2v11.4c0 .9-.7 1.6-1.6 1.6z"/>
        </svg>
      )
    },
    {
      name: 'MySQL',
      category: 'database',
      color: '#00758F',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <path fill="#00758F" d="M64.2 16.2C38 16.2 16.8 37.4 16.8 63.6s21.2 47.4 47.4 47.4 47.4-21.2 47.4-47.4S90.4 16.2 64.2 16.2zm-2.8 77.8c-18.4 0-33.4-15-33.4-33.4S43 27.2 61.4 27.2s33.4 15 33.4 33.4-15 33.4-33.4 33.4z"/>
          <path fill="#F29111" d="M78.6 57.4c-1.2-5.4-5.2-9.6-10.4-11.2l-1.8 5.6c3.2 1 5.6 3.6 6.4 6.8l5.8-1.2z"/>
          <circle cx="61.4" cy="60.6" r="14" fill="#00758F"/>
        </svg>
      )
    },
    {
      name: 'SQL',
      category: 'database',
      color: '#38BDF8',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <ellipse cx="64" cy="30" rx="44" ry="18" fill="#0284C7"/>
          <path d="M20 30v34c0 10 20 18 44 18s44-8 44-18V30" fill="none" stroke="#38BDF8" strokeWidth="8"/>
          <path d="M20 64v34c0 10 20 18 44 18s44-8 44-18V64" fill="none" stroke="#38BDF8" strokeWidth="8"/>
        </svg>
      )
    },

    // -------------------------------------------------------------------------
    // TOOLS & DESIGN (Git, VS Code, Visily)
    // -------------------------------------------------------------------------
    {
      name: 'Git',
      category: 'tools',
      color: '#F05032',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <path fill="#F05032" d="M124.7 57.3L70.7 3.3c-4.4-4.4-11.5-4.4-15.9 0L42.2 16l19.5 19.5c4.7-1.6 10.2-.5 13.9 3.2 3.7 3.7 4.8 9.2 3.2 13.9l18.8 18.8c4.7-1.6 10.2-.5 13.9 3.2 5.5 5.5 5.5 14.4 0 19.9s-14.4 5.5-19.9 0c-4.1-4.1-5-10.1-2.6-15.1L71.3 61.7v30.4c1.6.8 3.1 1.9 4.3 3.2 5.5 5.5 5.5 14.4 0 19.9s-14.4 5.5-19.9 0c-5.5-5.5-5.5-14.4 0-19.9 1.6-1.6 3.6-2.8 5.7-3.5V60.9c-2.1-.7-4.1-1.9-5.7-3.5-4.1-4.1-5-10.1-2.6-15.1L34.3 23.9 3.3 54.9c-4.4 4.4-4.4 11.5 0 15.9l54 54c4.4 4.4 11.5 4.4 15.9 0l51.5-51.5c4.4-4.5 4.4-11.6 0-16z"/>
        </svg>
      )
    },
    {
      name: 'VS Code',
      category: 'tools',
      color: '#007ACC',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <path fill="#007ACC" d="M96.7 6.8L68.8 33.3 39.5 10.8c-3.1-2.4-7.5-2.2-10.4.5L5.7 32.8c-2.8 2.6-3.2 6.9-1 10l20.4 28.5L4.7 99.8c-2.2 3.1-1.8 7.4 1 10l23.4 21.5c2.9 2.7 7.3 2.9 10.4.5l29.3-22.5 27.9 26.5c3.5 3.3 9.1 2.9 12.1-.9l15.9-20.2c2.7-3.4 2.7-8.2 0-11.6L98.5 76l26.2-26.9c2.7-3.4 2.7-8.2 0-11.6L108.8 7.3c-3-3.8-8.6-4.2-12.1-.5zm-2.8 33.9L55.4 76.5l38.5 35.8V40.7z"/>
        </svg>
      )
    },
    {
      name: 'Visily',
      category: 'tools',
      color: '#A855F7',
      iconSvg: (
        <svg viewBox="0 0 128 128" className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 drop-shadow-md">
          <rect width="128" height="128" rx="28" fill="#181824"/>
          <path d="M38 34L64 92L90 34H75L64 64L53 34H38Z" fill="url(#visilyGradNew)"/>
          <defs>
            <linearGradient id="visilyGradNew" x1="38" y1="34" x2="90" y2="92" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A855F7"/>
              <stop offset="1" stopColor="#06B6D4"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-white/[0.02] via-purple-500/[0.015] to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Editorial Separator - Harmonized with About and Projects */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="editorial-divider mb-16"></div>

        {/* Section Heading Design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                03 //
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-silver/80">
                Skills & Technologies
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              A curated technical <span className="italic font-light text-white">palette.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-mutedIvory font-light leading-relaxed">
            Organized across frontend client experiences, backend architectures, relational and document databases, and development tooling.
          </p>
        </div>
      </div>

      {/* Categorized Skills Showcase with Enhanced Editorial Subheadings & PURE LOGOS (No Boxes) */}
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {categories.map((cat) => {
          const itemsInCat = technologies.filter((t) => t.category === cat.key);
          return (
            <div key={cat.key} className="space-y-8">
              
              {/* Enhanced Subheading for Category */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-[#0e0e14] border border-white/10 shadow-inner">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
                      {cat.label}
                    </h3>
                    <p className="text-xs sm:text-sm font-sans text-mutedIvory/80 font-light mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-silver/70 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/10">
                    {itemsInCat.length} Technologies
                  </span>
                </div>
              </div>

              {/* PURE LOGOS ONLY (No outer card boxes, just floating icons with smooth hover lift) */}
              <div className="flex flex-wrap items-center justify-start gap-8 sm:gap-12 md:gap-16 pt-2">
                {itemsInCat.map((tech) => {
                  const isHovered = hoveredTech === tech.name;
                  return (
                    <div
                      key={tech.name}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="group flex flex-col items-center justify-center gap-3 select-none cursor-pointer"
                    >
                      {/* Tech Icon Container (No box, no card border, pure logo) */}
                      <div 
                        className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-all duration-300 transform ${
                          isHovered ? 'scale-115 -translate-y-2' : 'hover:scale-105'
                        }`}
                        style={{
                          filter: isHovered ? `drop-shadow(0 12px 26px ${tech.color}60)` : 'none'
                        }}
                      >
                        {tech.iconSvg}
                      </div>

                      {/* Tech Name Label */}
                      <span 
                        className={`text-xs sm:text-sm font-sans tracking-wide transition-colors duration-200 text-center ${
                          isHovered ? 'text-white font-medium' : 'text-mutedIvory/80'
                        }`}
                      >
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
};
