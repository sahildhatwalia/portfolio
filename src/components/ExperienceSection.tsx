import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceSectionProps {
  isDark: boolean;
  searchQuery: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ isDark, searchQuery }) => {
  const query = searchQuery.trim().toLowerCase();

  return (
    <section className="space-y-8" id="experience">
      <div>
        <div className="inline-block bg-[#38bdf8] text-black font-heading font-extrabold text-xs px-3 py-1 rounded-xl neo-border shadow-pop uppercase mb-2">
          Practical Industry Work
        </div>
        <h2
          className={`font-display text-3xl sm:text-4xl font-extrabold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Internship Experience 💼
        </h2>
        <p className="font-body text-slate-400 dark:text-[#bbcabf] text-sm sm:text-base mt-1">
          Professional production experience building with engineering teams.
        </p>
      </div>

      <div className="space-y-6">
        {EXPERIENCES.map((exp) => {
          const shadowClass =
            exp.color === 'emerald' ? 'shadow-pop-emerald' : 'shadow-pop-purple';
          const badgeColor =
            exp.color === 'emerald' ? 'text-[#10b981]' : 'text-[#c084fc]';
          const subTitleColor =
            exp.color === 'emerald' ? 'text-[#facc15]' : 'text-[#f472b6]';

          const matches =
            !query ||
            exp.company.toLowerCase().includes(query) ||
            exp.role.toLowerCase().includes(query) ||
            exp.bullets.some((b) => b.toLowerCase().includes(query));

          return (
            <div
              key={exp.id}
              className={`rounded-3xl p-6 sm:p-8 neo-border ${shadowClass} relative overflow-hidden transition-all ${
                isDark ? 'bg-[#171f33]' : 'bg-white'
              } ${!matches ? 'opacity-40 grayscale' : 'opacity-100'}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span
                    className={`text-xs font-mono font-bold uppercase tracking-wider block ${badgeColor}`}
                  >
                    INTERNSHIP
                  </span>
                  <h3
                    className={`font-display font-bold text-2xl ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {exp.role}
                  </h3>
                  <p className={`font-heading font-semibold text-base ${subTitleColor}`}>
                    {exp.company}
                  </p>
                </div>
                <span
                  className={`font-mono text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-xl neo-border self-start sm:self-auto ${badgeColor} ${
                    isDark ? 'bg-[#222a3d]' : 'bg-slate-100'
                  }`}
                >
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5 font-body text-sm sm:text-base text-slate-300 dark:text-[#bbcabf] list-disc list-inside leading-relaxed">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-snug">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
