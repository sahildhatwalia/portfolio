import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MarqueeBanner } from './components/MarqueeBanner';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types/portfolio';
import { PROJECTS } from './data/portfolioData';
import { X, Search } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('sahil_portfolio_theme');
    if (saved) return saved === 'dark';
    return true; // default dark as in prompt design
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('sahil_portfolio_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenProjectById = (projectId: string) => {
    const proj = PROJECTS.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const handleExploreProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen relative overflow-x-hidden transition-colors duration-200 ${
        isDark ? 'bg-[#0b1326] text-[#dae2fd] grid-bg-dark' : 'bg-[#f7f9fd] text-[#0f172a] grid-bg-light'
      }`}
    >
      {/* Top Playful Sticky Navigation Header with Persistent Search Bar */}
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectProject={handleOpenProjectById}
      />

      {/* Marquee Ticker Banner */}
      <MarqueeBanner />

      {/* Search Filter Banner (Active Query Notification) */}
      {searchQuery && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
          <div className="p-3 rounded-2xl neo-border bg-[#facc15] text-black shadow-pop flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-heading font-bold">
              <Search className="w-4 h-4 shrink-0" />
              <span>
                Filtering across all portfolio sections for: &quot;
                <span className="underline">{searchQuery}</span>&quot;
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-3 py-1 rounded-xl bg-black text-white text-xs font-mono font-bold flex items-center gap-1 hover:bg-slate-800 transition-colors"
            >
              <span>Clear Filter</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-20 space-y-24 sm:space-y-28">
        {/* 1. Hero Section: Bio + 3D Avatar + Floating Stickers */}
        <section id="about">
          <HeroSection isDark={isDark} onExploreProjects={handleExploreProjects} />
        </section>

        {/* 2. Technical Skills Matrix */}
        <SkillsSection isDark={isDark} searchQuery={searchQuery} />

        {/* 3. Built & Live-Hosted Web Apps */}
        <ProjectsSection
          isDark={isDark}
          searchQuery={searchQuery}
          onOpenProjectModal={(proj) => setSelectedProject(proj)}
        />

        {/* 4. Internship Experience */}
        <ExperienceSection isDark={isDark} searchQuery={searchQuery} />

        {/* 5. Education & Certifications */}
        <EducationSection isDark={isDark} searchQuery={searchQuery} />

        {/* 6. Playful Interactive Contact Console */}
        <ContactSection isDark={isDark} />
      </main>

      {/* Playful Footer */}
      <Footer isDark={isDark} />

      {/* Interactive Project Simulation Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          isDark={isDark}
        />
      )}
    </div>
  );
}
