import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer
      className={`border-t-2 border-black py-8 transition-colors ${
        isDark ? 'bg-[#060e20]' : 'bg-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#facc15] neo-border shadow-pop-sm flex items-center justify-center text-sm font-bold text-black">
            ⚡
          </div>
          <p className="font-mono text-xs text-slate-400">
            Crafted with 💖 by{' '}
            <strong className={isDark ? 'text-white' : 'text-slate-900'}>
              {PERSONAL_INFO.name}
            </strong>{' '}
            • MERN + GenAI Enthusiast
          </p>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-slate-400">
          <a
            className="hover:text-[#10b981] transition-colors"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            Email
          </a>
          <span>•</span>
          <a
            className="hover:text-[#38bdf8] transition-colors"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            className="hover:text-[#facc15] transition-colors"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
