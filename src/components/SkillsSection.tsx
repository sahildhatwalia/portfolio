import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsSectionProps {
  isDark: boolean;
  searchQuery: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark, searchQuery }) => {
  const query = searchQuery.trim().toLowerCase();

  const getBorderShadowClass = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'shadow-pop-cyan';
      case 'emerald':
        return 'shadow-pop-emerald';
      case 'yellow':
        return 'shadow-pop-yellow';
      case 'purple':
        return 'shadow-pop-purple';
      case 'pink':
        return 'shadow-pop-pink';
      default:
        return 'shadow-pop';
    }
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'bg-[#38bdf8] text-black';
      case 'emerald':
        return 'bg-[#10b981] text-black';
      case 'yellow':
        return 'bg-[#facc15] text-black';
      case 'purple':
        return 'bg-[#c084fc] text-black';
      case 'pink':
        return 'bg-[#f472b6] text-black';
      default:
        return 'bg-[#facc15] text-black';
    }
  };

  return (
    <section className="space-y-8" id="skills">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-block bg-[#f472b6] text-black font-heading font-extrabold text-xs px-3 py-1 rounded-xl neo-border shadow-pop uppercase mb-2">
            Superpowers &amp; Stack
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl font-extrabold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Technical Skills Matrix 🛠️
          </h2>
          <p className="font-body text-slate-400 dark:text-[#bbcabf] text-sm sm:text-base mt-1">
            Exact tools, libraries, and frameworks from Sahil&apos;s verified resume.
          </p>
        </div>
        <div className="font-mono text-xs text-black bg-[#facc15] px-3.5 py-1.5 rounded-xl neo-border shadow-pop font-bold self-start md:self-auto">
          READY FOR PRODUCTION
        </div>
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat) => {
          const shadowClass = getBorderShadowClass(cat.badgeColor);
          const iconBg = getIconBg(cat.badgeColor);
          const matchesCategory =
            !query ||
            cat.title.toLowerCase().includes(query) ||
            cat.description.toLowerCase().includes(query) ||
            cat.skills.some((s) => s.name.toLowerCase().includes(query));

          return (
            <div
              key={cat.id}
              className={`rounded-3xl p-6 neo-border ${shadowClass} hover:-translate-y-1 transition-all flex flex-col justify-between ${
                cat.spanCol ? 'lg:col-span-2' : ''
              } ${
                isDark ? 'bg-[#171f33]' : 'bg-white'
              } ${!matchesCategory ? 'opacity-40 grayscale' : 'opacity-100'}`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-2xl neo-border shadow-pop flex items-center justify-center text-2xl mb-4 ${iconBg}`}
                >
                  {cat.emoji}
                </div>
                <h3
                  className={`font-heading font-extrabold text-xl mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {cat.title}
                </h3>
                <p className="font-body text-xs text-slate-400 dark:text-[#bbcabf] mb-4 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, index) => {
                    const isMatched = query && skill.name.toLowerCase().includes(query);
                    return (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-xl neo-border text-xs font-mono font-bold transition-all ${
                          isMatched
                            ? 'bg-[#facc15] text-black scale-105 ring-2 ring-black'
                            : skill.highlighted
                            ? cat.badgeColor === 'cyan'
                              ? 'bg-[#38bdf8]/15 text-[#38bdf8] border-black'
                              : cat.badgeColor === 'emerald'
                              ? 'bg-[#10b981]/15 text-[#10b981] border-black'
                              : cat.badgeColor === 'yellow'
                              ? 'bg-[#facc15]/15 text-[#facc15] border-black'
                              : cat.badgeColor === 'purple'
                              ? 'bg-[#c084fc]/15 text-[#c084fc] border-black'
                              : 'bg-[#f472b6]/15 text-[#f472b6] border-black'
                            : isDark
                            ? 'bg-[#222a3d] text-white'
                            : 'bg-slate-100 text-slate-800'
                        }`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Note */}
              <div
                className={`mt-6 pt-4 border-t border-black/30 font-mono text-[11px] font-bold ${
                  cat.badgeColor === 'cyan'
                    ? 'text-[#38bdf8]'
                    : cat.badgeColor === 'emerald'
                    ? 'text-[#10b981]'
                    : cat.badgeColor === 'yellow'
                    ? 'text-[#facc15]'
                    : cat.badgeColor === 'purple'
                    ? 'text-[#c084fc]'
                    : 'text-[#f472b6]'
                }`}
              >
                {cat.footerNote}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
