import React, { useState } from 'react';
import { Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  isDark: boolean;
}
// if anybody want to connect they can contact me through various options
export const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Full-Time MERN Developer Role');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setIsSubmitted(false);
      }, 7000);
    }, 900);
  };

  return (
    <section className="space-y-8" id="contact">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-block bg-[#f472b6] text-black font-heading font-extrabold text-xs px-3 py-1 rounded-xl neo-border shadow-pop uppercase">
          Transmission Port
        </div>
        <h2
          className={`font-display text-3xl sm:text-5xl font-extrabold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Let&apos;s Build Something Cool! 🚀
        </h2>
        <p className="font-body text-slate-400 dark:text-[#bbcabf] text-sm sm:text-base">
          Available for MERN developer roles, Generative AI projects, and engineering internships. Reach out directly to Sahil!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Verified Contact Details Card */}
        <div
          className={`lg:col-span-5 rounded-3xl p-6 sm:p-8 neo-border shadow-pop-emerald space-y-6 transition-all ${
            isDark ? 'bg-[#171f33]' : 'bg-white'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#facc15] neo-border shadow-pop flex items-center justify-center text-2xl">
              📬
            </div>
            <div>
              <h3
                className={`font-display font-extrabold text-xl ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Direct Coordinates
              </h3>
              <p className="font-mono text-xs text-[#10b981]">Always responsive within 24h</p>
            </div>
          </div>

          <div className="space-y-3">
            {/* Email */}
            <div
              className={`flex items-center justify-between p-3.5 rounded-2xl neo-border transition-all ${
                isDark ? 'bg-[#222a3d]' : 'bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="w-10 h-10 rounded-xl bg-[#38bdf8] text-black neo-border flex items-center justify-center text-lg shrink-0">
                  ✉️
                </span>
                <div className="overflow-hidden">
                  <span className="block font-mono text-[11px] text-slate-400">EMAIL ADDRESS</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs sm:text-sm font-bold text-[#4edea3] hover:underline truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2 rounded-xl neo-border bg-white text-black hover:bg-[#38bdf8] transition-colors shadow-pop-sm shrink-0 ml-2"
                title="Copy email address"
              >
                {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div
              className={`flex items-center justify-between p-3.5 rounded-2xl neo-border transition-all ${
                isDark ? 'bg-[#222a3d]' : 'bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#10b981] text-black neo-border flex items-center justify-center text-lg shrink-0">
                  📞
                </span>
                <div>
                  <span className="block font-mono text-[11px] text-slate-400">PHONE / WHATSAPP</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-xs sm:text-sm font-bold text-[#facc15] hover:underline"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2 rounded-xl neo-border bg-white text-black hover:bg-[#10b981] transition-colors shadow-pop-sm shrink-0"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location */}
            <div
              className={`flex items-center gap-3.5 p-3.5 rounded-2xl neo-border ${
                isDark ? 'bg-[#222a3d]' : 'bg-slate-50'
              }`}
            >
              <span className="w-10 h-10 rounded-xl bg-[#c084fc] text-black neo-border flex items-center justify-center text-lg shrink-0">
                📍
              </span>
              <div>
                <span className="block font-mono text-[11px] text-slate-400">LOCATION</span>
                <span
                  className={`font-mono text-xs sm:text-sm font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-black/30">
            <span className="font-mono text-xs text-slate-400 font-bold block mb-3">
              CONNECT GLOBALLY:
            </span>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 px-3 rounded-xl bg-[#d0bcff] text-black font-heading font-extrabold text-xs neo-border shadow-pop hover:-translate-y-1 transition-all"
              >
                LinkedIn 💼
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center py-2.5 px-3 rounded-xl bg-[#facc15] text-black font-heading font-extrabold text-xs neo-border shadow-pop hover:-translate-y-1 transition-all"
              >
                GitHub 🐙
              </a>
            </div>
          </div>
        </div>

        {/* Right: Interactive Terminal Form */}
        <div
          className={`lg:col-span-7 rounded-3xl p-6 sm:p-8 neo-border shadow-pop-yellow transition-all ${
            isDark ? 'bg-[#171f33]' : 'bg-white'
          }`}
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/30">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 border border-black" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
              <span className="w-3 h-3 rounded-full bg-green-500 border border-black" />
              <span className="font-mono text-xs text-slate-400 ml-2 font-bold">
                quick_message.sh
              </span>
            </div>
            <span className="font-mono text-xs text-[#facc15] font-bold">256-BIT DISPATCH</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs text-slate-400 font-bold mb-1">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Satya or Recruiter"
                  className={`w-full px-4 py-2.5 rounded-xl neo-border text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981] ${
                    isDark ? 'bg-[#222a3d] text-white' : 'bg-slate-50 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 font-bold mb-1">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className={`w-full px-4 py-2.5 rounded-xl neo-border text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981] ${
                    isDark ? 'bg-[#222a3d] text-white' : 'bg-slate-50 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-slate-400 font-bold mb-1">
                INTERESTED IN
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl neo-border text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981] ${
                  isDark ? 'bg-[#222a3d] text-white' : 'bg-slate-50 text-slate-900'
                }`}
              >
                <option>Full-Time MERN Developer Role</option>
                <option>Generative AI &amp; LangChain Project</option>
                <option>Software Engineering Internship</option>
                <option>Tech Collaboration &amp; Chat</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs text-slate-400 font-bold mb-1">
                MESSAGE
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Sahil, loved your GymTraine and AI Chatbot projects..."
                className={`w-full px-4 py-2.5 rounded-xl neo-border text-sm focus:outline-none focus:ring-2 focus:ring-[#10b981] ${
                  isDark ? 'bg-[#222a3d] text-white' : 'bg-slate-50 text-slate-900'
                }`}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="font-mono text-xs text-slate-400">
                Instant notification via webhook
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto neo-border bg-[#10b981] hover:bg-[#4edea3] text-black font-heading font-extrabold text-sm px-6 py-2.5 rounded-xl shadow-pop hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⚡</span>
                    <span>Dispatching...</span>
                  </>
                ) : (
                  <>
                    <span>Send to Sahil</span>
                    <span>⚡</span>
                  </>
                )}
              </button>
            </div>

            {/* Alert on successful submission */}
            {isSubmitted && (
              <div className="p-3.5 rounded-xl bg-[#10b981] text-black font-mono text-xs font-bold text-center neo-border shadow-pop-sm animate-bounce">
                🎉 Message dispatched successfully! Sahil will reply shortly at {PERSONAL_INFO.email}.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
