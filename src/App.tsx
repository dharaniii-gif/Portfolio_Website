import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectCarousel } from './components/ProjectCarousel';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import type { Project } from './types';
import { PERSONAL_INFO, PROJECTS } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync with URL hash if project parameter exists
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = hash.replace('#project-', '');
        const found = PROJECTS.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `project-${project.id}`;
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    history.pushState('', document.title, window.location.pathname + window.location.search);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumePath;
    link.download = 'DHARANI-RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F0] overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      {/* 01. Hero Section */}
      <Hero
        onExploreWork={() => scrollToSection('projects')}
        onDownloadResume={handleDownloadResume}
      />

      {/* 02. About Me Section */}
      <About />

      {/* 03. Skills & Technologies Section */}
      <Skills />

      {/* 04. Projects – Main Interactive 3D Feature */}
      <ProjectCarousel onSelectProject={handleSelectProject} />

      {/* 05. Resume Section */}
      <ResumeSection />

      {/* 07. Contact Section */}
      <Contact />

      {/* Full Screen Project Showcase Presentation */}
      {selectedProject && (
        <ProjectShowcase
          project={selectedProject}
          onClose={handleCloseProject}
          onSelectProject={handleSelectProject}
        />
      )}
    </div>
  );
}

export default App;
