import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Play, CheckCircle, Cpu, Shield, Send, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, isDark }) => {
  const [activeTab, setActiveTab] = useState<'demo' | 'architecture' | 'metrics'>('demo');

  // GymTraine simulator state
  const [fitnessGoal, setFitnessGoal] = useState('hypertrophy');
  const [trainingDays, setTrainingDays] = useState(4);
  const [fitnessOutput, setFitnessOutput] = useState<string | null>(null);
  const [isGeneratingPlan, setIsGeneratingPlan] = useState(false);

  // Chatbot simulator state
  const [chatMessages, setChatMessages] = useState<
    { sender: 'user' | 'bot'; text: string; citations?: string[] }[]
  >([
    {
      sender: 'bot',
      text: "👋 Hi! I am Sahil's RAG Support Assistant. Ask me anything about his full-stack projects, tech stack, or engineering experience!",
      citations: ['portfolio-resume-2026.pdf'],
    },
  ]);
  const [inputChat, setInputChat] = useState('');
  const [isChatTyping, setIsChatTyping] = useState(false);

  // EcoTrack calculator state
  const [commuteKm, setCommuteKm] = useState(15);
  const [transportType, setTransportType] = useState<'electric' | 'transit' | 'car'>('transit');
  const [mealsVeggie, setMealsVeggie] = useState(2);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Handle GymTraine AI plan generation
  const handleGenerateFitness = () => {
    setIsGeneratingPlan(true);
    setFitnessOutput(null);
    setTimeout(() => {
      let plan = '';
      if (fitnessGoal === 'hypertrophy') {
        plan = `🏋️‍♂️ **${trainingDays}-Day Hypertrophy Optimization Split (via Groq AI LLaMA 3 70B)**\n\n` +
          `• Day 1: Upper Power (Barbell Bench 4x6, Weighted Pull-ups 4x6, Incline DB Press 3x10)\n` +
          `• Day 2: Lower Hypertrophy (Back Squat 4x8, Romanian Deadlift 3x10, Leg Press 3x12)\n` +
          `• Day 3: Rest & Active Recovery (Light mobility + 10k steps)\n` +
          `• Day 4: Push Volume (Overhead Press 4x8, Cable Flyes 4x12, Lateral Raises 4x15)\n` +
          (trainingDays >= 5 ? `• Day 5: Pull Volume (Barbell Rows 4x8, Lat Pulldowns 3x12, Face Pulls 4x15)\n` : '') +
          `\n🥑 **Target Nutrition:** 2,450 kcal | 175g Protein | 260g Carbs | 65g Healthy Fats`;
      } else {
        plan = `🏃 **${trainingDays}-Day Lean Conditioning Split (via Groq AI LLaMA 3 70B)**\n\n` +
          `• Day 1: Full Body Circuit & HIIT Intervals (Kettlebell Swings, Push-ups, Box Jumps)\n` +
          `• Day 2: Zone 2 Steady Aerobic Base (45 min run / cycle @ 135 bpm)\n` +
          `• Day 3: Core & Isometric Strength (Planks, Turkish Get-ups, Farmer Walks)\n` +
          `• Day 4: High-Threshold Plyometrics & Agility\n` +
          `\n🥗 **Target Nutrition:** 2,100 kcal | 180g Protein | 190g Complex Carbs | 55g Fats`;
      }
      setFitnessOutput(plan);
      setIsGeneratingPlan(false);
    }, 600);
  };

  // Handle Chatbot simulation
  const handleSendChat = (customText?: string) => {
    const textToSend = customText || inputChat.trim();
    if (!textToSend) return;

    const newMessages = [...chatMessages, { sender: 'user' as const, text: textToSend }];
    setChatMessages(newMessages);
    setInputChat('');
    setIsChatTyping(true);

    setTimeout(() => {
      let reply = '';
      let citations: string[] = [];
      const lower = textToSend.toLowerCase();

      if (lower.includes('stack') || lower.includes('technology') || lower.includes('mern')) {
        reply =
          "Sahil specializes in the full MERN stack (MongoDB, Express.js, React.js, Node.js) along with Generative AI technologies like OpenAI API, Groq Cloud API, LangChain RAG pipelines, and Vector Embeddings.";
        citations = ['resume.pdf #Section2', 'skills_matrix.json'];
      } else if (lower.includes('gymtraine') || lower.includes('fitness')) {
        reply =
          "GymTraine is an AI Fitness Coach built with React, Vite, Node/Express, and Groq's high-speed API. It generates instant customized workouts and meal plans with sub-220ms latency and secure JWT authentication.";
        citations = ['gymtraine-architecture.md', 'vercel-deployment.log'];
      } else if (lower.includes('rag') || lower.includes('langchain')) {
        reply =
          "In the AI Support Chatbot, Sahil integrated LangChain with vector store embeddings to index company knowledge base documents. This eliminates hallucinations by grounding answers with direct document citations.";
        citations = ['langchain_rag_pipeline.ts', 'vector_store_faiss.py'];
      } else {
        reply =
          `I found verified matches in Sahil Dhatwalia's resume: Sahil is a B.Tech CSE ('27) student with production internship experience at Meander Software and Sensation Software Solutions, having delivered 4 live-hosted full-stack applications!`;
        citations = ['pcte_credentials.pdf', 'internship_cert.pdf'];
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: reply,
          citations,
        },
      ]);
      setIsChatTyping(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl neo-border shadow-pop-lg overflow-hidden transition-all ${
          isDark ? 'bg-[#171f33] text-white' : 'bg-white text-slate-900'
        }`}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b-2 border-black flex items-center justify-between bg-[#facc15] text-black">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl">{project.emoji}</span>
            <div>
              <h2 className="font-display font-extrabold text-lg sm:text-xl leading-tight">
                {project.title}
              </h2>
              <span className="font-mono text-xs font-bold block opacity-80">
                {project.badgeText}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl neo-border bg-white text-black hover:bg-red-400 font-bold flex items-center justify-center transition-colors shadow-pop-sm"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-black/20 p-2 gap-2 bg-slate-800/10 dark:bg-[#060e20]">
          <button
            type="button"
            onClick={() => setActiveTab('demo')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold neo-border transition-all flex items-center gap-2 ${
              activeTab === 'demo'
                ? 'bg-[#10b981] text-black shadow-pop-sm'
                : isDark
                ? 'bg-[#171f33] text-white hover:bg-[#222a3d]'
                : 'bg-white text-slate-800 hover:bg-slate-50'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Sandbox</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold neo-border transition-all flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'bg-[#38bdf8] text-black shadow-pop-sm'
                : isDark
                ? 'bg-[#171f33] text-white hover:bg-[#222a3d]'
                : 'bg-white text-slate-800 hover:bg-slate-50'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>System Architecture</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('metrics')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold neo-border transition-all flex items-center gap-2 ${
              activeTab === 'metrics'
                ? 'bg-[#c084fc] text-black shadow-pop-sm'
                : isDark
                ? 'bg-[#171f33] text-white hover:bg-[#222a3d]'
                : 'bg-white text-slate-800 hover:bg-slate-50'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Verified Metrics</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'demo' && (
            <div>
              {/* 1. Fitness Coach Simulator */}
              {project.demoType === 'fitness' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl neo-border bg-[#060e20] text-white font-mono text-xs">
                    <span className="text-[#10b981] font-bold">⚡ Groq Cloud LLaMA-3 Engine Live Terminal</span>
                    <p className="text-slate-400 mt-1">
                      Configure athlete parameters below to test the instant sub-second workout generator:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold mb-1 opacity-80">
                        PRIMARY GOAL
                      </label>
                      <select
                        value={fitnessGoal}
                        onChange={(e) => setFitnessGoal(e.target.value)}
                        className={`w-full p-2.5 rounded-xl neo-border text-xs sm:text-sm ${
                          isDark ? 'bg-[#222a3d] text-white' : 'bg-slate-100 text-slate-900'
                        }`}
                      >
                        <option value="hypertrophy">Muscle Hypertrophy &amp; Strength</option>
                        <option value="lean">Fat Loss &amp; Aerobic Conditioning</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold mb-1 opacity-80">
                        TRAINING FREQUENCY
                      </label>
                      <select
                        value={trainingDays}
                        onChange={(e) => setTrainingDays(Number(e.target.value))}
                        className={`w-full p-2.5 rounded-xl neo-border text-xs sm:text-sm ${
                          isDark ? 'bg-[#222a3d] text-white' : 'bg-slate-100 text-slate-900'
                        }`}
                      >
                        <option value={3}>3 Days / Week (Full Body)</option>
                        <option value={4}>4 Days / Week (Upper / Lower)</option>
                        <option value={5}>5 Days / Week (Push / Pull / Legs)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleGenerateFitness}
                    disabled={isGeneratingPlan}
                    className="w-full py-3 rounded-xl neo-border bg-[#facc15] text-black font-heading font-extrabold text-sm shadow-pop hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    {isGeneratingPlan ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        <span>Streaming from Groq API...</span>
                      </>
                    ) : (
                      <>
                        <span>⚡ Generate AI Fitness Plan Now</span>
                        <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {fitnessOutput && (
                    <div className="p-4 rounded-2xl neo-border bg-[#060e20] text-emerald-300 font-mono text-xs whitespace-pre-wrap leading-relaxed shadow-pop-emerald animate-fade-in">
                      {fitnessOutput}
                    </div>
                  )}
                </div>
              )}

              {/* 2. Chatbot Simulator */}
              {project.demoType === 'chatbot' && (
                <div className="space-y-4">
                  {/* Sample prompt chips */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      "What is Sahil's tech stack?",
                      'Explain RAG architecture',
                      'Tell me about GymTraine',
                      'Internship experience?',
                    ].map((chip, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendChat(chip)}
                        className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg neo-border-thin bg-surface-container-high hover:bg-[#38bdf8] hover:text-black transition-colors"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>

                  {/* Chat window */}
                  <div className="h-64 overflow-y-auto p-4 rounded-2xl neo-border bg-[#060e20] space-y-3">
                    {chatMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`max-w-[85%] p-3 rounded-2xl neo-border text-xs sm:text-sm font-body ${
                            msg.sender === 'user'
                              ? 'bg-[#38bdf8] text-black shadow-pop-sm'
                              : 'bg-[#171f33] text-white border-slate-700'
                          }`}
                        >
                          {msg.text}
                          {msg.citations && (
                            <div className="mt-2 pt-1 border-t border-white/20 flex flex-wrap gap-1 font-mono text-[10px] text-[#4edea3]">
                              <span>📎 Sources:</span>
                              {msg.citations.map((c, i) => (
                                <span key={i} className="underline">
                                  {c}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isChatTyping && (
                      <div className="text-xs font-mono text-[#38bdf8] animate-pulse">
                        🤖 RAG Engine vector searching knowledge base...
                      </div>
                    )}
                  </div>

                  {/* Input form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendChat();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={inputChat}
                      onChange={(e) => setInputChat(e.target.value)}
                      placeholder="Ask the AI Chatbot about Sahil's projects..."
                      className={`flex-1 p-2.5 rounded-xl neo-border text-xs sm:text-sm ${
                        isDark ? 'bg-[#222a3d] text-white' : 'bg-slate-100 text-slate-900'
                      }`}
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl neo-border bg-[#38bdf8] text-black font-heading font-bold text-xs sm:text-sm shadow-pop-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1.5"
                    >
                      <span>Send</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* 3. GigFlow Simulator */}
              {project.demoType === 'gigflow' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl neo-border bg-[#c084fc]/15 text-xs font-mono">
                    <span className="font-bold text-[#c084fc]">
                      🌐 Role-Based Access Control Preview (Render Staging)
                    </span>
                    <p className="text-slate-400 mt-1">
                      Explore live listings aggregated across clients and freelancers:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        title: 'Build Full-Stack MERN SaaS with JWT',
                        price: '$450',
                        seller: 'Sahil D.',
                        rating: '5.0 ⭐ (24 reviews)',
                        tag: 'MERN Stack',
                      },
                      {
                        title: 'Integrate LangChain RAG & Vector Embeddings',
                        price: '$600',
                        seller: 'Sahil D.',
                        rating: '5.0 ⭐ (18 reviews)',
                        tag: 'GenAI / RAG',
                      },
                      {
                        title: 'Convert Figma Designs into Responsive React + Tailwind',
                        price: '$280',
                        seller: 'Sahil D.',
                        rating: '4.9 ⭐ (32 reviews)',
                        tag: 'Frontend Arsenal',
                      },
                      {
                        title: 'Express.js RESTful API & MongoDB Schema Design',
                        price: '$350',
                        seller: 'Sahil D.',
                        rating: '5.0 ⭐ (15 reviews)',
                        tag: 'Backend',
                      },
                    ].map((gig, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-2xl neo-border bg-surface-container-high hover:border-[#c084fc] transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono text-[10px] bg-[#c084fc] text-black font-bold px-2 py-0.5 rounded-md">
                              {gig.tag}
                            </span>
                            <span className="font-display font-extrabold text-sm text-[#4edea3]">
                              {gig.price}
                            </span>
                          </div>
                          <h4 className="font-heading font-bold text-xs sm:text-sm mt-1">
                            {gig.title}
                          </h4>
                        </div>
                        <div className="mt-3 pt-2 border-t border-black/20 flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>{gig.seller}</span>
                          <span>{gig.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. EcoTrack Simulator */}
              {project.demoType === 'ecotrack' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl neo-border bg-[#facc15]/15 text-xs font-mono">
                    <span className="font-bold text-[#facc15]">
                      🌱 Live Carbon Footprint Calculator &amp; AQI Monitor
                    </span>
                    <p className="text-slate-400 mt-1">
                      Simulate daily lifestyle inputs to compute verified CO2 savings:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-2xl neo-border bg-surface-container-high">
                      <label className="block font-mono text-[11px] font-bold mb-1">
                        DAILY COMMUTE: {commuteKm} km
                      </label>
                      <input
                        type="range"
                        min={0}
                        max={50}
                        value={commuteKm}
                        onChange={(e) => setCommuteKm(Number(e.target.value))}
                        className="w-full accent-[#10b981]"
                      />
                    </div>

                    <div className="p-3 rounded-2xl neo-border bg-surface-container-high">
                      <label className="block font-mono text-[11px] font-bold mb-1">
                        COMMUTE MODE
                      </label>
                      <select
                        value={transportType}
                        onChange={(e) =>
                          setTransportType(e.target.value as 'electric' | 'transit' | 'car')
                        }
                        className={`w-full p-1.5 rounded-xl neo-border text-xs ${
                          isDark ? 'bg-[#222a3d] text-white' : 'bg-white text-slate-900'
                        }`}
                      >
                        <option value="transit">Public Transit (Metro / Bus)</option>
                        <option value="electric">Electric Vehicle (EV)</option>
                        <option value="car">Gasoline Car</option>
                      </select>
                    </div>

                    <div className="p-3 rounded-2xl neo-border bg-surface-container-high">
                      <label className="block font-mono text-[11px] font-bold mb-1">
                        PLANT-BASED MEALS: {mealsVeggie}/day
                      </label>
                      <input
                        type="range"
                        min={0}
                        max={3}
                        value={mealsVeggie}
                        onChange={(e) => setMealsVeggie(Number(e.target.value))}
                        className="w-full accent-[#facc15]"
                      />
                    </div>
                  </div>

                  {/* Calculated metrics */}
                  <div className="p-4 rounded-2xl neo-border bg-[#060e20] flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs text-slate-400 block">
                        ESTIMATED CO2 SAVED TODAY:
                      </span>
                      <span className="font-display font-extrabold text-2xl text-[#10b981]">
                        {(
                          (50 - commuteKm) * (transportType === 'car' ? 0.05 : 0.18) +
                          mealsVeggie * 1.5
                        ).toFixed(2)}{' '}
                        kg CO2e
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[11px] text-[#facc15] font-bold block">
                        LUDHIANA AQI: 84 (Moderate)
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        Synced via Weather API
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl neo-border bg-[#060e20] text-slate-200 font-mono text-xs leading-relaxed space-y-3">
                <div className="text-[#38bdf8] font-bold flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>END-TO-END DATA FLOW &amp; ARCHITECTURE</span>
                </div>
                <p>{project.architectureOverview}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-heading font-bold text-sm">Key Implementation Highlights:</h4>
                <ul className="space-y-2 font-body text-xs sm:text-sm text-slate-400 dark:text-[#bbcabf] list-disc list-inside">
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics?.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl neo-border bg-surface-container-high text-center shadow-pop-sm"
                  >
                    <span className="font-display font-extrabold text-xl sm:text-2xl text-[#10b981] block">
                      {m.value}
                    </span>
                    <span className="font-mono text-xs text-slate-400 font-bold block mt-1">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl neo-border bg-surface-container-high space-y-2">
                <span className="font-heading font-bold text-sm block">Deployed Technologies:</span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl neo-border bg-[#060e20] text-xs font-mono font-bold text-[#facc15]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t-2 border-black flex items-center justify-between bg-surface-container-lowest">
          <span className="font-mono text-xs text-slate-400">
            Verified Project on Sahil Dhatwalia&apos;s Portfolio
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl neo-border bg-[#10b981] text-black font-heading font-bold text-xs shadow-pop-sm hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
