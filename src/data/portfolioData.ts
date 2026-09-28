import { Project, SkillCategory, Experience, Certification } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Sahil Dhatwalia',
  title: 'MERN Stack Developer | Generative AI Enthusiast',
  status: 'Open for SDE & GenAI Opportunities',
  speechBubble: "Hi, I'm Sahil! 👋 Let's build something cool!",
  summary:
    'Aspiring MERN Full Stack Developer experienced in building and shipping end-to-end, live-hosted web apps with MongoDB, Express.js, React.js, and Node.js, with hands-on exposure to integrating Generative AI (RAG, chatbots) using OpenAI, Groq, and LangChain. Strong foundation in REST API design and writing clean, production-ready code.',
  location: 'Ludhiana, Punjab, India',
  phone: '+91 79867 07642',
  email: 'sahildhatwalia04@gmail.com',
  educationTag: "B.Tech '27",
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA952juij3v0rzkDv0cP4L57Z5yaLyal_J0flv3Aicx8jOdHXm84Va2r9vwugc-Hych4ojna3seaHYRUo2soyoxG4rUfA_XTMMVY8CerdW_9o6oZm_doF9yLYtrADspD_QKWMjObTmIDPrTSWkxqQnq02uste-h_AmH6Fa4-asbURsvH4WdLmmSq_0EXAJFlyx1KARTFRHvbqZU7-eVaOMg3hy0jXWyk5znwFAv_36jEGdIMlrpZoaqNQ',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

export const MARQUEE_ITEMS = [
  '🚀 BUILDING COOL THINGS',
  '⚛️ REACT.JS & REDUX',
  '🍃 MONGODB & MONGOOSE',
  '🤖 GENERATIVE AI & RAG (LANGCHAIN + GROQ)',
  '⚡ LIVE HOSTED FULL-STACK APPS',
  '🎓 B.TECH CSE (2023 - 2027)',
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Arsenal',
    emoji: '🎨',
    badgeColor: 'cyan',
    description: 'Building dynamic, highly responsive single-page interfaces with modern state management.',
    skills: [
      { name: 'React.js', highlighted: true },
      { name: 'Redux', highlighted: true },
      { name: 'Vite', highlighted: true },
      { name: 'JavaScript (ES6+)' },
      { name: 'Tailwind CSS' },
      { name: 'HTML5 & CSS3' },
    ],
    footerNote: '✓ Interactive State & Responsive UI',
  },
  {
    id: 'backend',
    title: 'Backend & Real-Time',
    emoji: '⚡',
    badgeColor: 'emerald',
    description: 'Architecting modular REST API endpoints, secure auth, and bidirectional streaming.',
    skills: [
      { name: 'Node.js', highlighted: true },
      { name: 'Express.js', highlighted: true },
      { name: 'REST APIs', highlighted: true },
      { name: 'JWT Authentication' },
      { name: 'WebSockets' },
    ],
    footerNote: '✓ Secure Session & Concurrency Flow',
  },
  {
    id: 'genai',
    title: 'Generative AI & RAG',
    emoji: '🤖',
    badgeColor: 'yellow',
    description: 'Connecting LLMs with contextual company knowledge bases and lightning-fast inference.',
    skills: [
      { name: 'OpenAI API', highlighted: true },
      { name: 'Groq API (Ultra-Fast)', highlighted: true },
      { name: 'LangChain', highlighted: true },
      { name: 'RAG Architecture' },
      { name: 'Prompt Engineering' },
    ],
    footerNote: '✓ Context Retrieval & Semantic Search',
  },
  {
    id: 'database',
    title: 'Database Systems',
    emoji: '🗄️',
    badgeColor: 'purple',
    description: 'NoSQL schema modeling, relational basics, and cloud cluster management.',
    skills: [
      { name: 'MongoDB', highlighted: true },
      { name: 'Mongoose ODM', highlighted: true },
      { name: 'MongoDB Atlas', highlighted: true },
      { name: 'SQL Basics' },
    ],
    footerNote: '✓ High Performance Data Models',
  },
  {
    id: 'devops',
    title: 'DevOps, Tools & Concepts',
    emoji: '🚀',
    badgeColor: 'pink',
    spanCol: true,
    description: 'Version control, continuous deployments, test suites, and modern team workflows.',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Vercel (Client Hosting)', highlighted: true },
      { name: 'Render (Server Hosting)', highlighted: true },
      { name: 'OOPs', highlighted: true },
      { name: 'Agile / Scrum' },
      { name: 'CI/CD Basics' },
    ],
    footerNote: 'Soft Skills: Team Collaboration • Problem-Solving • Communication',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'gymtraine',
    title: 'AI Fitness Coach (GymTraine)',
    emoji: '🏋️‍♂️',
    subtitle: 'AI-Powered Personal Training App',
    badgeText: 'Groq AI + MERN • 2026',
    badgeColor: 'yellow',
    category: ['genai', 'mern'],
    date: '2026',
    bullets: [
      'Built a full-stack AI fitness coach generating personalized workout & diet plans via the high-speed Groq AI API.',
      'Engineered a fast client using React + Vite paired with an event-driven Node.js / Express backend.',
      'Implemented secure JWT authentication and a scalable MongoDB database layer.',
      'Deployed client on Vercel and backend on Render for seamless global availability.',
    ],
    techStack: ['Groq API', 'React.js', 'Vite', 'Node / Express', 'MongoDB', 'JWT'],
    demoType: 'fitness',
    metrics: [
      { label: 'Inference Speed', value: '750 tokens/sec' },
      { label: 'Latency', value: '< 220ms' },
      { label: 'Personalization Depth', value: '18 Parameters' },
    ],
    architectureOverview:
      'React Vite SPA with custom workout forms → Express.js REST API with rate-limited JWT authentication → Groq Cloud SDK invoking LLaMA 3 70B with optimized temperature 0.3 → MongoDB Atlas user workout history & dietary profile collection.',
  },
  {
    id: 'support-chatbot',
    title: 'AI-Powered Support Chatbot',
    emoji: '💬',
    subtitle: 'GenAI + MERN Stack Support Engine',
    badgeText: 'GenAI + RAG • July 2026',
    badgeColor: 'cyan',
    category: ['genai', 'mern'],
    date: 'July 2026',
    bullets: [
      'Built a full-stack AI chatbot utilizing OpenAI’s API with RAG (LangChain) and vector-store embeddings.',
      'Enabled high-precision semantic search against indexed knowledge docs to eliminate hallucinations.',
      'Designed REST APIs for authenticated chat sessions with token-based JWT security.',
      'Crafted a responsive React UI featuring real-time token streaming and dynamic message state.',
    ],
    techStack: ['OpenAI API', 'LangChain RAG', 'Vector Embeddings', 'React.js', 'REST APIs'],
    demoType: 'chatbot',
    metrics: [
      { label: 'Hallucination Drop', value: '-94%' },
      { label: 'Query Matching', value: '0.88 Cosine Sim' },
      { label: 'Stream Latency', value: '45ms TTFT' },
    ],
    architectureOverview:
      'Client React streaming interface with Server-Sent Events (SSE) → Node.js / Express API gateway → LangChain RAG pipeline querying in-memory vector store → OpenAI GPT-4o-mini embeddings & completion synthesis.',
  },
  {
    id: 'gigflow',
    title: 'GigFlow Marketplace',
    emoji: '🌐',
    subtitle: 'Freelance Gig Marketplace Architecture',
    badgeText: 'MERN Marketplace • June 2026',
    badgeColor: 'purple',
    category: ['mern'],
    date: 'June 2026',
    bullets: [
      'Built a responsive React frontend for seamlessly browsing, searching, and filtering gig listings.',
      'Engineered a modular MERN architecture capable of scalable listing aggregations.',
      'Implemented JWT-based role authentication with distinct workflows for clients and freelancers.',
      'Deployed live and fully accessible on Render.',
    ],
    techStack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Role-Based Auth', 'Render'],
    demoType: 'gigflow',
    metrics: [
      { label: 'Aggregation Speed', value: '38ms pipeline' },
      { label: 'Role Security', value: 'JWT RBAC' },
      { label: 'Deploy Platform', value: 'Render Cloud' },
    ],
    architectureOverview:
      'Dual-role React SPA (Client / Freelancer) → Express API with role-based JWT middleware → MongoDB multi-index collections for gigs, orders, ratings, and escrow status pipelines.',
  },
  {
    id: 'ecotrack',
    title: 'EcoTrack Dashboard',
    emoji: '🌱',
    subtitle: 'Sustainability & Carbon Footprint Dashboard',
    badgeText: 'Analytics & Gamification • March 2026',
    badgeColor: 'yellow',
    category: ['mern'],
    date: 'March 2026',
    bullets: [
      'Built a full-stack MERN app to record eco-friendly activities, calculate CO2 savings, and gamify sustainability.',
      'Designed point scoring rules with dynamic live leaderboards for active community engagement.',
      'Developed RESTful, JWT-secured APIs protecting user audit records.',
      'Integrated live external Weather / AQI APIs and visual analytics with Chart.js, deployed on Render.',
    ],
    techStack: ['MERN Stack', 'Chart.js', 'Weather & AQI APIs', 'Gamification', 'Render'],
    demoType: 'ecotrack',
    metrics: [
      { label: 'CO2 Formula Accuracy', value: 'IPCC Standards' },
      { label: 'Realtime AQI API', value: 'OpenWeather Sync' },
      { label: 'Leaderboard Updates', value: 'Live Redis cache' },
    ],
    architectureOverview:
      'React frontend with interactive interactive Chart.js visualization → Express REST endpoints → MongoDB activity logs → OpenWeather AQI third-party API integration for localized environmental impact.',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'meander',
    role: 'MERN Stack Developer Intern',
    company: 'Meander Software, Mohali',
    location: 'Mohali, Punjab',
    period: 'Jun 2026 - Jul 2026',
    color: 'emerald',
    bullets: [
      'Built and maintained full-stack features using MongoDB, Express.js, React.js, and Node.js in an Agile team environment.',
      'Developed REST API endpoints and integrated frontend components with backend services to streamline data flows.',
      'Collaborated in daily scrums, code reviews, and Git feature-branch workflows.',
    ],
  },
  {
    id: 'sensation',
    role: 'MERN Stack Developer Intern',
    company: 'Sensation Software Solutions, Mohali',
    location: 'Mohali, Punjab',
    period: 'Jun 2025 - Jul 2025',
    color: 'purple',
    bullets: [
      'Developed responsive web pages and reusable components using the MERN stack, improving UI consistency across devices.',
      'Gained hands-on experience with Git/GitHub, REST APIs, debugging, and staging deployment workflows.',
      'Partnered with senior engineers to resolve frontend cross-browser glitches and optimize load speeds.',
    ],
  },
];

export const EDUCATION = {
  degree: 'B.Tech in Computer Science and Engineering',
  institution: 'PCTE Institute of Engineering and Technology, Punjab, India',
  period: '2023 - 2027',
  classOf: 'Class of 2027',
  location: 'Punjab, India',
  description:
    'Focused on core computational theory, algorithms, database architectures, object-oriented programming, and modern full-stack web software delivery.',
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'github',
    title: 'Active GitHub Contributor',
    emoji: '⭐',
    description: 'Maintains multiple full-stack, live-deployed MERN projects and open code repos.',
  },
  {
    id: 'coursework',
    title: 'Certified Coursework',
    emoji: '📜',
    description: 'Completed specialized online training in React.js, Node.js, MongoDB, and Generative AI / LangChain fundamentals.',
  },
  {
    id: 'softskills',
    title: 'Core Soft Skills',
    emoji: '🤝',
    description: 'Team Collaboration, Problem-Solving, High-Clarity Communication, Time Management.',
  },
];
