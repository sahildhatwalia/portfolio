import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface EducationSectionProps {
  isDark: boolean;
  searchQuery: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ isDark, searchQuery }) => {
  const query = searchQuery.trim().toLowerCase();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="education">
      {/* Education Column */}
      <div
        className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 neo-border shadow-pop flex flex-col justify-between transition-all ${
          isDark ? 'bg-[#171f33]' : 'bg-white'
        }`}
      >
        <div>
          <div className="inline-block bg-[#facc15] text-black font-heading font-extrabold text-xs px-3 py-1 rounded-xl neo-border shadow-pop uppercase mb-2">
            Academic Track
          </div>
          <h2
            className={`font-display text-3xl font-extrabold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Education 🎓
          </h2>

          <div
            className={`p-5 rounded-2xl neo-border shadow-pop-emerald mb-6 ${
              isDark ? 'bg-[#222a3d]' : 'bg-slate-50'
            }`}
          >
            <span className="font-mono text-xs text-[#10b981] font-bold">DEGREE PROGRAM</span>
            <h3
              className={`font-display font-extrabold text-xl mt-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {EDUCATION.degree}
            </h3>
            <p className="font-heading font-semibold text-[#facc15] text-sm mt-0.5">
              {EDUCATION.institution}
            </p>
            <div className="mt-3 inline-block font-mono text-xs bg-black/40 text-[#4edea3] px-3 py-1 rounded-lg neo-border">
              📅 Duration: {EDUCATION.period}
            </div>
          </div>

          <p className="font-body text-sm text-slate-400 dark:text-[#bbcabf] leading-relaxed">
            {EDUCATION.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-black/30 font-mono text-xs text-slate-400 flex items-center justify-between">
          <span>{EDUCATION.location}</span>
          <span className="text-[#10b981] font-bold">{EDUCATION.classOf}</span>
        </div>
      </div>

      {/* Certifications & Achievements Column */}
      <div
        className={`lg:col-span-5 rounded-3xl p-6 sm:p-8 neo-border shadow-pop-yellow flex flex-col justify-between transition-all ${
          isDark ? 'bg-[#171f33]' : 'bg-white'
        }`}
      >
        <div>
          <div className="inline-block bg-[#f472b6] text-black font-heading font-extrabold text-xs px-3 py-1 rounded-xl neo-border shadow-pop uppercase mb-2">
            Recognition
          </div>
          <h2
            className={`font-display text-3xl font-extrabold mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Certifications 🏆
          </h2>

          <div className="space-y-4">
            {CERTIFICATIONS.map((cert) => {
              const matches =
                !query ||
                cert.title.toLowerCase().includes(query) ||
                cert.description.toLowerCase().includes(query);

              return (
                <div
                  key={cert.id}
                  className={`flex items-start gap-3 p-3.5 rounded-2xl neo-border transition-all ${
                    isDark ? 'bg-[#222a3d]' : 'bg-slate-50'
                  } ${!matches ? 'opacity-40 grayscale' : 'opacity-100'}`}
                >
                  <span className="text-xl">{cert.emoji}</span>
                  <div>
                    <h4
                      className={`font-heading font-bold text-sm ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {cert.title}
                    </h4>
                    <p className="font-body text-xs text-slate-400 dark:text-[#bbcabf] mt-0.5 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-black/30 font-mono text-xs text-[#facc15] font-bold">
          Continuous Learner &amp; Builder
        </div>
      </div>
    </section>
  );
};
