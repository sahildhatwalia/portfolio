export type ProjectCategory = 'all' | 'genai' | 'mern';

export interface Project {
  id: string;
  title: string;
  emoji: string;
  subtitle: string;
  badgeText: string;
  badgeColor: 'yellow' | 'cyan' | 'purple' | 'emerald';
  category: ('genai' | 'mern')[];
  date: string;
  bullets: string[];
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
  demoType: 'fitness' | 'chatbot' | 'gigflow' | 'ecotrack';
  metrics?: { label: string; value: string }[];
  architectureOverview: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  emoji: string;
  badgeColor: 'cyan' | 'emerald' | 'yellow' | 'purple' | 'pink';
  description: string;
  skills: { name: string; highlighted?: boolean }[];
  footerNote: string;
  spanCol?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  color: 'emerald' | 'purple';
  bullets: string[];
}

export interface Certification {
  id: string;
  title: string;
  emoji: string;
  description: string;
}

export interface SearchMatch {
  type: 'project' | 'skill' | 'experience' | 'education';
  title: string;
  snippet: string;
  targetId: string;
  category?: string;
}
