import React from 'react';
import { MARQUEE_ITEMS } from '../data/portfolioData';

export const MarqueeBanner: React.FC = () => {
  // Duplicate for seamless infinite marquee loop
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="mt-5 w-full bg-[#facc15] text-black py-2.5 overflow-hidden border-y-2 border-black font-heading font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-pop flex items-center select-none">
      <div className="animate-marquee whitespace-nowrap flex gap-6 sm:gap-8 items-center">
        {displayItems.map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            <span className="text-black/60 font-bold">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
