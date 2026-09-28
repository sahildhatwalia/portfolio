import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  isDark: boolean;
  onExploreProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark, onExploreProjects }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-6 sm:pt-10" id="hero">
      {/* Ambient background glows */}
      <div className="absolute -top-10 left-1/4 w-72 h-72 bg-[#4edea3]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#c084fc]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Intro Details */}
        <div className="lg:col-span-6 space-y-6">
          {/* Status Badge */}
          <div
            className={`inline-flex items-center gap-2 border-2 border-black rounded-full px-4 py-1.5 shadow-pop ${
              isDark ? 'bg-[#171f33]' : 'bg-white'
            }`}
          >
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping" />
            <span className="font-mono text-xs sm:text-sm font-bold text-[#10b981]">
              🟢 {PERSONAL_INFO.status}
            </span>
          </div>

          <div className="space-y-3">
            <div className="relative inline-block">
              {/* Cartoon speech bubble callout */}
              <div className="absolute -top-10 right-0 sm:right-2 bg-white text-black font-display text-xs font-bold px-3 py-1.5 rounded-xl neo-border shadow-pop animate-wiggle z-20">
                {PERSONAL_INFO.speechBubble}
                <div className="absolute -bottom-2 left-6 w-3 h-3 bg-white border-b-2 border-r-2 border-black rotate-45" />
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                <span className={isDark ? 'text-white' : 'text-slate-900'}>Sahil </span>
                <span className="text-[#4edea3] underline decoration-[#facc15] decoration-wavy decoration-3">
                  Dhatwalia
                </span>
              </h1>
            </div>

            <p className="font-heading text-lg sm:text-2xl font-bold text-[#facc15]">
              MERN Stack Developer <span className={isDark ? 'text-white' : 'text-slate-900'}>|</span>{' '}
              Generative AI Enthusiast
            </p>
          </div>

          {/* Professional Summary */}
          <p
            className={`font-body text-sm sm:text-base leading-relaxed p-5 rounded-2xl neo-border shadow-pop-emerald ${
              isDark ? 'bg-[#171f33]/70 text-[#bbcabf]' : 'bg-white text-slate-700'
            }`}
          >
            Aspiring MERN Full Stack Developer experienced in building and shipping end-to-end,
            live-hosted web apps with{' '}
            <strong className="text-[#4edea3] font-bold">
              MongoDB, Express.js, React.js, and Node.js
            </strong>
            , with hands-on exposure to integrating{' '}
            <strong className="text-[#38bdf8] font-bold">
              Generative AI (RAG, chatbots)
            </strong>{' '}
            using{' '}
            <strong className="text-[#f472b6] font-bold">OpenAI, Groq, and LangChain</strong>.
            Strong foundation in REST API design and writing clean, production-ready code.
          </p>

          {/* Quick Badges & Contacts */}
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
            <span
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl neo-border ${
                isDark ? 'bg-[#171f33] text-white' : 'bg-white text-slate-800'
              }`}
            >
              📍 {PERSONAL_INFO.location}
            </span>
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl neo-border hover:bg-[#4edea3] hover:text-black transition-colors ${
                isDark ? 'bg-[#171f33] text-white' : 'bg-white text-slate-800'
              }`}
            >
              📞 {PERSONAL_INFO.phone}
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl neo-border hover:bg-[#38bdf8] hover:text-black transition-colors ${
                isDark ? 'bg-[#171f33] text-white' : 'bg-white text-slate-800'
              }`}
            >
              ✉️ {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="button"
              onClick={onExploreProjects}
              className="neo-border bg-[#10b981] hover:bg-[#4edea3] text-black font-heading font-extrabold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-2xl shadow-pop hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2"
            >
              <span>Explore My 4 Real Projects</span>
              <span className="text-lg">🎯</span>
            </button>
            <a
              href="#contact"
              className={`neo-border font-heading font-bold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-2xl shadow-pop hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-2 ${
                isDark
                  ? 'bg-[#222a3d] text-white hover:bg-slate-700'
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Contact Sahil</span>
              <span>📬</span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Cartoon Avatar with Floating Stickers */}
        <div className="lg:col-span-6 flex justify-center relative mt-6 lg:mt-0">
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-square">
            {/* Background Offset Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/30 to-[#c084fc]/30 rounded-3xl neo-border shadow-pop-lg transform -rotate-1" />

            {/* Avatar Frame Container */}
            <div className="relative w-full h-full rounded-3xl neo-border bg-[#060e20] overflow-hidden shadow-pop z-10 flex items-center justify-center">
              {!imgError ? (
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Sahil Dhatwalia 3D Cartoon Avatar - MERN & GenAI Developer"
                  onError={() => setImgError(true)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* High-fidelity Vector Fallback */
                <div className="w-full h-full bg-gradient-to-b from-indigo-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-8xl mb-3 animate-wiggle">👨‍💻</div>
                  <div className="font-display font-bold text-2xl text-[#4edea3]">Sahil Dhatwalia</div>
                  <div className="font-mono text-xs text-[#38bdf8] mt-1">Full-Stack MERN &amp; GenAI</div>
                </div>
              )}

              {/* Bottom Capsule Overlay */}
              <div
                className={`absolute bottom-3 inset-x-3 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl neo-border shadow-pop flex items-center justify-between ${
                  isDark ? 'bg-[#171f33]/90 text-white' : 'bg-white/90 text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="font-heading font-bold text-xs sm:text-sm">
                    Coding Live in Tech Universe
                  </span>
                </div>
                <span className="font-mono text-[11px] sm:text-xs bg-[#facc15] text-black font-bold px-2 py-0.5 rounded-lg border border-black">
                  {PERSONAL_INFO.educationTag}
                </span>
              </div>
            </div>

            {/* Floating Sticker 1: Groq + OpenAI */}
            <div className="absolute -top-5 -left-3 sm:-left-4 z-20 bg-[#facc15] text-black font-heading font-extrabold text-[11px] sm:text-xs px-3 py-1.5 rounded-2xl neo-border shadow-pop animate-float-slow flex items-center gap-1.5">
              <span>⚡</span>
              <span>Groq + OpenAI APIs</span>
            </div>

            {/* Floating Sticker 2: React + Vite */}
            <div className="absolute -top-4 -right-3 sm:-right-4 z-20 bg-[#38bdf8] text-black font-heading font-extrabold text-[11px] sm:text-xs px-3 py-1.5 rounded-2xl neo-border shadow-pop animate-float-delayed flex items-center gap-1.5">
              <span>⚛️</span>
              <span>React &amp; Vite Wizard</span>
            </div>

            {/* Floating Sticker 3: MongoDB Master */}
            <div className="absolute top-1/2 -right-4 sm:-right-6 z-20 bg-[#10b981] text-black font-heading font-extrabold text-[11px] sm:text-xs px-3 py-1.5 rounded-2xl neo-border shadow-pop animate-wiggle hidden xs:flex items-center gap-1.5">
              <span>🍃</span>
              <span>MongoDB Master</span>
            </div>

            {/* Floating Sticker 4: Node & WebSockets */}
            <div className="absolute -bottom-4 -left-2 sm:-left-3 z-20 bg-[#c084fc] text-black font-heading font-extrabold text-[11px] sm:text-xs px-3 py-1.5 rounded-2xl neo-border shadow-pop animate-float-slow flex items-center gap-1.5">
              <span>🛠️</span>
              <span>Node.js &amp; WebSockets</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
