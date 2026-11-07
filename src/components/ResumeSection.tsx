import React, { useState } from 'react';
import { Download, FileText, Eye, CheckCircle, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [downloadTriggered, setDownloadTriggered] = useState(false);

  const handleDownload = () => {
    setDownloadTriggered(true);
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumePath;
    link.download = 'DHARANI-RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloadTriggered(false), 3000);
  };

  return (
    <section id="resume" className="relative py-28 px-6 md:px-12 bg-[#050505] overflow-hidden">
      {/* Background Subtle Spotlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

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
                Curriculum Vitae
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
              Verified credentials & <span className="italic font-light text-white">resume.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-mutedIvory font-light leading-relaxed">
            Directly inspect or download my official curriculum vitae containing complete academic records, project technical stacks, and internship milestones.
          </p>
        </div>
      </div>

      {/* Visually Prominent Resume Showcase Card */}
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 bg-[#0c0c10] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Background Corner Light */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/[0.04] rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            
            {/* Left Resume Meta Details */}
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-ivory">
                  <FileText className="w-6 h-6" />
                </span>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Verified Official Document
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-medium">
                    DHARANI-RESUME.pdf
                  </h3>
                </div>
              </div>

              <p className="text-sm text-mutedIvory font-light leading-relaxed">
                Includes full profile of Dharani S., B.Sc Computer Science at KPRCAS, Thiranex UI/UX Internship, complete full-stack project portfolio, hackathons, and certifications.
              </p>

              {/* Document Metadata Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/5 text-silver">
                  Format: PDF (High-Res)
                </span>
                <span className="px-3 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/5 text-silver">
                  Role: Creative Developer
                </span>
                <span className="px-3 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/5 text-silver">
                  Location: Coimbatore, India
                </span>
              </div>
            </div>

            {/* Right Action CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-ivory text-black font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                {downloadTriggered ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download My Resume</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setShowPreviewModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.03] text-ivory font-mono text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Eye className="w-4 h-4 text-silver" />
                <span>Preview Document</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Embedded High-Definition PDF Preview Modal */}
      {showPreviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
          <div className="relative w-full max-w-4xl h-[90vh] bg-[#0c0c10] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="p-4 px-6 border-b border-white/10 flex items-center justify-between bg-[#08080a]">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-purple-400" />
                <div>
                  <h4 className="font-serif text-lg text-ivory">DHARANI-RESUME.pdf</h4>
                  <span className="text-[10px] font-mono text-mutedIvory">Live Document Viewer</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="px-4 py-1.5 rounded-full bg-white text-black font-mono text-xs uppercase tracking-wider font-semibold hover:bg-ivory flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-1.5 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded IFrame PDF Viewer */}
            <div className="flex-1 w-full bg-[#1e1e24]">
              <iframe
                src={`${PERSONAL_INFO.resumePath}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Dharani S. Resume Preview"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
