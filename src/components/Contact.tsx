import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#ffffff', '#c084fc', '#60a5fa']
      });
    } catch {
      // Fallback
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-white/[0.02] via-transparent to-transparent pointer-events-none"></div>

      {/* Top divider */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="editorial-divider mb-16"></div>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              06 //
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-silver/80">
              Contact & Collaboration
            </span>
          </div>
          {/* Exact Required Heading */}
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ivory font-normal tracking-tight leading-[1.05]">
            Let's create something <span className="italic font-light text-white">amazing together.</span>
          </h2>
          <p className="text-mutedIvory text-base sm:text-lg font-light leading-relaxed mt-6">
            Available for creative development roles, frontend engineering challenges, and UI/UX design opportunities. Reach out directly or dispatch a transmission below.
          </p>
        </div>
      </div>

      {/* Main Contact Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
        
        {/* Left Column (5 cols): Quick Contact & Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-3">
            Direct Transmissions
          </div>

          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-[#0c0c10] border border-white/[0.08] hover:border-white/25 transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-mutedIvory/60">
                Official Email
              </span>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="text-[11px] font-mono text-mutedIvory hover:text-white flex items-center gap-1.5 p-1 rounded transition-colors"
                title="Copy email to clipboard"
              >
                {copiedItem === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="mt-3 flex items-center gap-3 text-ivory group-hover:text-white font-mono text-sm sm:text-base transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
                <Mail className="w-4 h-4 text-purple-400" />
              </div>
              <span className="break-all">{PERSONAL_INFO.email}</span>
            </a>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-2xl bg-[#0c0c10] border border-white/[0.08] hover:border-white/25 transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-wider text-mutedIvory/60">
                Direct Phone
              </span>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="text-[11px] font-mono text-mutedIvory hover:text-white flex items-center gap-1.5 p-1 rounded transition-colors"
                title="Copy phone number"
              >
                {copiedItem === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="mt-3 flex items-center gap-3 text-ivory group-hover:text-white font-mono text-sm sm:text-base transition-colors"
            >
              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/5">
                <Phone className="w-4 h-4 text-blue-400" />
              </div>
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0c0c10] border border-white/[0.08] hover:border-white/25 hover:bg-white/[0.04] transition-all group flex flex-col justify-between h-28"
            >
              <div className="flex items-center justify-between">
                <LinkedinIcon className="w-5 h-5 text-blue-400" />
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-mutedIvory/60 block">
                  Professional
                </span>
                <span className="font-serif text-lg text-ivory font-medium">LinkedIn</span>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0c0c10] border border-white/[0.08] hover:border-white/25 hover:bg-white/[0.04] transition-all group flex flex-col justify-between h-28"
            >
              <div className="flex items-center justify-between">
                <GithubIcon className="w-5 h-5 text-silver" />
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-mutedIvory/60 block">
                  Source Repos
                </span>
                <span className="font-serif text-lg text-ivory font-medium">GitHub</span>
              </div>
            </a>
          </div>

          {/* Location Badge */}
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-mutedIvory">
            <span>Coimbatore, Tamil Nadu, India</span>
            <span className="text-white/60">IST (UTC +5:30)</span>
          </div>
        </div>

        {/* Right Column (7 cols): Functional Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0c10] border border-white/10 shadow-2xl relative overflow-hidden">
            
            {formSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-ivory">Message Dispatched!</h3>
                  <p className="text-sm text-mutedIvory max-w-md mx-auto font-light leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been received. I will review and reply to {formData.email} promptly.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-full border border-white/20 bg-white/[0.05] text-xs font-mono uppercase tracking-wider text-ivory hover:bg-white hover:text-black transition-all"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-xs uppercase tracking-widest text-silver">
                    Initiate Transmission
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-mutedIvory/70">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-ivory text-sm placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-mutedIvory/70">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-ivory text-sm placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-mutedIvory/70">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry, Creative Collaboration, or Full-Time Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-ivory text-sm placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-mutedIvory/70">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share details regarding your timeline, scope, or vision..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-ivory text-sm placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-ivory text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Required Minimal Footer */}
      <footer className="max-w-6xl mx-auto pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-mutedIvory/70">
        <div className="text-ivory font-medium tracking-wide">
          Dharani – Creative Developer
        </div>
        <div className="text-white/40 tracking-wider">
          Designed with passion.
        </div>
      </footer>
    </section>
  );
};
