import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_12px_35px_rgba(0,0,0,0.85)]'
          : 'py-5 bg-gradient-to-b from-[#050505]/95 via-[#050505]/60 to-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Left Side: Brand Name & Region */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full border border-white/20 bg-gradient-to-br from-white/[0.08] to-white/[0.01] flex items-center justify-center font-serif text-xl text-ivory tracking-wider group-hover:border-white/50 group-hover:scale-105 transition-all duration-300 shadow-inner">
              D
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl tracking-wide text-ivory block group-hover:text-white transition-colors font-medium">
                Dharani
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-mutedIvory/70 font-mono block">
                Creative Dev & UI/UX
              </span>
            </div>
          </button>

          {/* Location Telemetry for Desktop */}
          <div className="hidden xl:flex items-center gap-2 pl-4 border-l border-white/10 text-[11px] font-mono text-mutedIvory/50">
            <span>Coimbatore, IN</span>
          </div>
        </div>

        {/* Center: Navigation Links Pill (Numbers Removed) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#0c0c12]/80 border border-white/[0.08] backdrop-blur-xl px-5 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[12px] uppercase font-mono tracking-wider px-4 py-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-white bg-white/[0.12] font-semibold shadow-[0_0_15px_rgba(255,255,255,0.08)] border border-white/10'
                    : 'text-mutedIvory/70 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Side: Status Badge & Quick CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-950/30 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available</span>
          </div>

          <a
            href={PERSONAL_INFO.resumePath}
            download="DHARANI-RESUME.pdf"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-mutedIvory hover:text-white px-3.5 py-2 rounded-full border border-white/10 hover:border-white/25 bg-white/[0.02] transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-silver" />
            <span>CV</span>
          </a>

          <button
            onClick={() => handleLinkClick('contact')}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ivory px-5 py-2.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-ivory p-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-colors focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-[#07070a]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-sm font-mono tracking-wider py-3 px-4 rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'text-white bg-white/10 font-semibold'
                    : 'text-mutedIvory hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for Projects
              </span>
              <button
                onClick={() => handleLinkClick('contact')}
                className="text-xs font-mono px-5 py-2.5 bg-white text-black rounded-full font-semibold"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
