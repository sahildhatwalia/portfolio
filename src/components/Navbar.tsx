import React, { useState, useEffect, useRef } from 'react';
import { Search, Sun, Moon, X, Menu, ExternalLink } from 'lucide-react';
import { PROJECTS, SKILL_CATEGORIES, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectProject: (projectId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  toggleTheme,
  searchQuery,
  setSearchQuery,
  onSelectProject,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Global keyboard shortcut '/' or 'Cmd+K' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        setIsSearchOpen(true);
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close search suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute matched items for quick dropdown jump
  const trimmed = searchQuery.trim().toLowerCase();
  const matchedProjects = trimmed
    ? PROJECTS.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.subtitle.toLowerCase().includes(trimmed) ||
          p.techStack.some((t) => t.toLowerCase().includes(trimmed)) ||
          p.bullets.some((b) => b.toLowerCase().includes(trimmed))
      )
    : [];

  const matchedSkills = trimmed
    ? SKILL_CATEGORIES.flatMap((c) =>
        c.skills
          .filter((s) => s.name.toLowerCase().includes(trimmed))
          .map((s) => ({ skill: s.name, category: c.title, categoryId: c.id }))
      )
    : [];

  const matchedExperiences = trimmed
    ? EXPERIENCES.filter(
        (e) =>
          e.company.toLowerCase().includes(trimmed) ||
          e.role.toLowerCase().includes(trimmed) ||
          e.bullets.some((b) => b.toLowerCase().includes(trimmed))
      )
    : [];

  const totalMatches = matchedProjects.length + matchedSkills.length + matchedExperiences.length;

  const handleJumpTo = (id: string) => {
    setIsSearchOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-3 z-50 max-w-7xl mx-auto px-3 sm:px-6 w-full">
      <nav
        className={`backdrop-blur-md neo-border rounded-2xl shadow-pop px-3 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 transition-colors ${
          isDark ? 'bg-[#171f33]/95 text-white' : 'bg-white/95 text-slate-900'
        }`}
      >
        {/* Brand Lockup */}
        <a
          href="#hero"
          onClick={() => {
            setSearchQuery('');
          }}
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0 focus:outline-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#facc15] text-black neo-border shadow-pop-sm flex items-center justify-center text-lg sm:text-xl group-hover:rotate-12 transition-transform">
            👨‍💻
          </div>
          <div className="hidden xs:block">
            <span className="font-display text-base sm:text-lg font-bold tracking-tight block leading-tight text-[#4edea3] dark:text-[#4edea3] group-hover:text-[#facc15] transition-colors">
              Sahil Dhatwalia
            </span>
            <span className="font-mono text-[11px] sm:text-xs text-[#38bdf8] font-bold tracking-wide">
              MERN • GEN AI 🚀
            </span>
          </div>
        </a>

        {/* Persistent Search Bar (Top Navigation Header) */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-md mx-1 sm:mx-2">
          <div
            className={`flex items-center neo-border rounded-xl px-2.5 py-1.5 transition-all shadow-pop-sm ${
              isDark ? 'bg-[#060e20] text-white' : 'bg-slate-50 text-slate-900'
            } focus-within:ring-2 focus-within:ring-[#4edea3]`}
          >
            <Search className="w-4 h-4 text-[#4edea3] shrink-0 mr-1.5" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Filter skills, projects, stack..."
              className="w-full bg-transparent text-xs sm:text-sm font-body outline-none placeholder:text-slate-400"
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  searchInputRef.current?.focus();
                }}
                className="text-slate-400 hover:text-white p-0.5 rounded focus:outline-none"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <kbd className="hidden md:inline-block font-mono text-[10px] bg-slate-800 text-slate-300 dark:bg-slate-800 dark:text-slate-300 light:bg-slate-200 light:text-slate-700 px-1.5 py-0.5 rounded border border-slate-700">
                /
              </kbd>
            )}
          </div>

          {/* Persistent Search Results Quick Jump Dropdown */}
          {isSearchOpen && trimmed && (
            <div
              className={`absolute top-full mt-2 left-0 right-0 max-h-96 overflow-y-auto neo-border rounded-2xl shadow-pop-lg p-3 z-50 ${
                isDark ? 'bg-[#171f33] text-white' : 'bg-white text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/20 font-mono text-xs">
                <span className="font-bold text-[#4edea3]">
                  {totalMatches} match{totalMatches === 1 ? '' : 'es'} found
                </span>
                <span className="text-[11px] text-slate-400">Click to jump</span>
              </div>

              {totalMatches === 0 ? (
                <div className="py-4 text-center text-xs text-slate-400">
                  No matching projects, skills, or experiences found for &quot;{searchQuery}&quot;
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Projects */}
                  {matchedProjects.length > 0 && (
                    <div>
                      <div className="font-mono text-[10px] uppercase font-bold text-[#38bdf8] mb-1">
                        Projects ({matchedProjects.length})
                      </div>
                      <div className="space-y-1">
                        {matchedProjects.map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => {
                              onSelectProject(p.id);
                              handleJumpTo('projects');
                            }}
                            className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between gap-2 hover:bg-[#4edea3]/20 transition-colors ${
                              isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
                            }`}
                          >
                            <span className="font-heading font-bold flex items-center gap-1.5 truncate">
                              <span>{p.emoji}</span>
                              <span className="truncate">{p.title}</span>
                            </span>
                            <span className="text-[10px] font-mono text-[#facc15] shrink-0">
                              Open Demo
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {matchedSkills.length > 0 && (
                    <div>
                      <div className="font-mono text-[10px] uppercase font-bold text-[#facc15] mb-1">
                        Skills ({matchedSkills.length})
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {matchedSkills.map((s, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleJumpTo('skills')}
                            className="text-[11px] font-mono font-bold px-2 py-1 rounded-lg bg-surface-container-high neo-border-thin hover:bg-[#facc15] hover:text-black transition-colors"
                          >
                            {s.skill}
                            <span className="opacity-60 text-[9px] ml-1">({s.category})</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Experiences */}
                  {matchedExperiences.length > 0 && (
                    <div>
                      <div className="font-mono text-[10px] uppercase font-bold text-[#c084fc] mb-1">
                        Work Experience ({matchedExperiences.length})
                      </div>
                      <div className="space-y-1">
                        {matchedExperiences.map((e) => (
                          <button
                            key={e.id}
                            type="button"
                            onClick={() => handleJumpTo('experience')}
                            className={`w-full text-left p-2 rounded-xl text-xs flex items-center justify-between gap-2 ${
                              isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
                            }`}
                          >
                            <span className="font-heading font-bold truncate">
                              💼 {e.role} @ {e.company}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400 shrink-0">
                              {e.period}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 font-heading font-semibold text-xs xl:text-sm">
          <a
            className="px-2.5 py-1.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 transition-colors hover:text-[#4edea3]"
            href="#about"
          >
            About
          </a>
          <a
            className="px-2.5 py-1.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 transition-colors hover:text-[#facc15]"
            href="#skills"
          >
            Skills Matrix
          </a>
          <a
            className="px-2.5 py-1.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 transition-colors hover:text-[#f472b6]"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="px-2.5 py-1.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 transition-colors hover:text-[#c084fc]"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="px-2.5 py-1.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 transition-colors hover:text-[#38bdf8]"
            href="#education"
          >
            Education
          </a>
        </div>

        {/* Right Actions: Theme Toggle + Contact CTA */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-xl neo-border shadow-pop-sm flex items-center justify-center transition-transform hover:scale-105 active:translate-x-0.5 active:translate-y-0.5 ${
              isDark ? 'bg-[#222a3d] text-[#facc15]' : 'bg-amber-100 text-amber-600'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="neo-border bg-[#10b981] hover:bg-[#4edea3] text-black font-heading font-extrabold text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-xl shadow-pop hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-1.5 shrink-0"
          >
            <span className="hidden xs:inline">Let&apos;s Talk</span>
            <span className="text-sm sm:text-base">💬</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl neo-border bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden mt-2 neo-border rounded-2xl p-4 shadow-pop-lg transition-all ${
            isDark ? 'bg-[#171f33] text-white' : 'bg-white text-slate-900'
          }`}
        >
          <div className="flex flex-col gap-2 font-heading font-semibold text-sm">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 text-left"
              href="#about"
            >
              👋 About Sahil
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 text-left"
              href="#skills"
            >
              🛠️ Skills Matrix
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 text-left"
              href="#projects"
            >
              💻 Built &amp; Live-Hosted Projects
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 text-left"
              href="#experience"
            >
              💼 Internship Experience
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 text-left"
              href="#education"
            >
              🎓 Education &amp; Certifications
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl hover:bg-slate-800/20 dark:hover:bg-slate-800/80 text-left text-[#4edea3]"
              href="#contact"
            >
              📬 Direct Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
