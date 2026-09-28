import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  isDark: boolean;
  searchQuery: string;
  onOpenProjectModal: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  isDark,
  searchQuery,
  onOpenProjectModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const query = searchQuery.trim().toLowerCase();

  const filteredProjects = PROJECTS.filter((project) => {
    // Category filter
    const matchesCategory =
      activeCategory === 'all' || project.category.includes(activeCategory);

    // Search filter
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.techStack.some((t) => t.toLowerCase().includes(query)) ||
      project.bullets.some((b) => b.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const getShadowClass = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'shadow-pop-emerald';
      case 'cyan':
        return 'shadow-pop-cyan';
      case 'purple':
        return 'shadow-pop-purple';
      case 'yellow':
        return 'shadow-pop-yellow';
      default:
        return 'shadow-pop';
    }
  };

  const getBadgeClass = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'bg-[#10b981] text-black';
      case 'cyan':
        return 'bg-[#38bdf8] text-black';
      case 'purple':
        return 'bg-[#c084fc] text-black';
      case 'yellow':
        return 'bg-[#facc15] text-black';
      default:
        return 'bg-[#facc15] text-black';
    }
  };

  const getLiveBtnBg = (color: string) => {
    switch (color) {
      case 'emerald':
        return 'bg-[#10b981] hover:bg-[#4edea3] text-black';
      case 'cyan':
        return 'bg-[#38bdf8] hover:bg-cyan-300 text-black';
      case 'purple':
        return 'bg-[#c084fc] hover:bg-purple-300 text-black';
      case 'yellow':
        return 'bg-[#facc15] hover:bg-yellow-300 text-black';
      default:
        return 'bg-[#10b981] text-black';
    }
  };

  return (
    <section className="space-y-8" id="projects">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-block bg-[#facc15] text-black font-heading font-extrabold text-xs px-3 py-1 rounded-xl neo-border shadow-pop uppercase mb-2">
            Real Verifiable Projects
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl font-extrabold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Built &amp; Live-Hosted Web Apps 💻
          </h2>
          <p className="font-body text-slate-400 dark:text-[#bbcabf] text-sm sm:text-base mt-1">
            Exact projects documented on Sahil Dhatwalia&apos;s resume with live architectures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex items-center gap-1.5 p-1.5 rounded-2xl neo-border shadow-pop ${
            isDark ? 'bg-[#222a3d]' : 'bg-slate-100'
          }`}
        >
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold transition-all ${
              activeCategory === 'all'
                ? 'bg-[#10b981] text-black shadow-pop-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All (4)
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('genai')}
            className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold transition-all ${
              activeCategory === 'genai'
                ? 'bg-[#38bdf8] text-black shadow-pop-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            GenAI &amp; RAG
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('mern')}
            className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold transition-all ${
              activeCategory === 'mern'
                ? 'bg-[#c084fc] text-black shadow-pop-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Full-Stack MERN
          </button>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div
          className={`text-center py-12 rounded-3xl neo-border shadow-pop p-6 ${
            isDark ? 'bg-[#171f33]' : 'bg-white'
          }`}
        >
          <div className="text-4xl mb-3">🔍</div>
          <h3 className="font-heading font-bold text-lg mb-1">No projects matched your criteria</h3>
          <p className="font-body text-xs text-slate-400">
            Try adjusting your search query or switching categories.
          </p>
        </div>
      ) : (
        /* Projects Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const shadowClass = getShadowClass(project.badgeColor);
            const badgeClass = getBadgeClass(project.badgeColor);
            const liveBtnClass = getLiveBtnBg(project.badgeColor);

            return (
              <div
                key={project.id}
                className={`rounded-3xl p-6 sm:p-7 neo-border ${shadowClass} flex flex-col justify-between hover:-translate-y-1 transition-all ${
                  isDark ? 'bg-[#171f33]' : 'bg-white'
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 font-heading font-extrabold text-[11px] sm:text-xs px-3 py-1 rounded-xl neo-border shadow-pop-sm ${badgeClass}`}
                    >
                      <span>⚡</span>
                      <span>{project.badgeText}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => onOpenProjectModal(project)}
                      className={`font-heading font-bold text-xs px-3 py-1.5 rounded-xl neo-border shadow-pop-sm flex items-center gap-1.5 hover:translate-x-0.5 hover:translate-y-0.5 transition-all ${liveBtnClass}`}
                      title="Open interactive sandbox and live demo"
                    >
                      <span>Live Demo</span>
                      <span className="text-sm">↗</span>
                    </button>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className={`font-display font-extrabold text-2xl mb-1 flex items-center gap-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    <span>{project.title}</span>
                    <span className="text-xl">{project.emoji}</span>
                  </h3>
                  <p
                    className={`font-mono text-xs font-semibold mb-4 ${
                      project.badgeColor === 'emerald'
                        ? 'text-[#10b981]'
                        : project.badgeColor === 'cyan'
                        ? 'text-[#38bdf8]'
                        : project.badgeColor === 'purple'
                        ? 'text-[#c084fc]'
                        : 'text-[#facc15]'
                    }`}
                  >
                    {project.subtitle}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 font-body text-sm text-slate-300 dark:text-[#bbcabf] list-disc list-inside mb-6 leading-relaxed">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-snug">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tech Stack Tags + Quick Test Action */}
                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-black/30">
                    {project.techStack.map((tech, idx) => {
                      const isTechMatched = query && tech.toLowerCase().includes(query);
                      return (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 rounded-lg neo-border text-xs font-mono transition-all ${
                            isTechMatched
                              ? 'bg-[#facc15] text-black font-bold ring-2 ring-black'
                              : isDark
                              ? 'bg-[#222a3d] text-white'
                              : 'bg-slate-100 text-slate-800'
                          }`}
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenProjectModal(project)}
                    className="mt-4 w-full py-2 rounded-xl neo-border font-heading font-bold text-xs bg-slate-800/10 dark:bg-slate-800/60 hover:bg-[#4edea3] hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    <span>🎮 Launch Interactive Sandbox &amp; Architecture</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
