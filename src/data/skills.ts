export interface SkillItem {
  name: string;
  category: 'Programming' | 'Development' | 'AI & Intelligent Systems' | 'Tools & Platforms';
  context: string;
  projectConnection?: string;
  highlight?: boolean;
}

export const skillCategories = [
  'All',
  'Programming',
  'Development',
  'AI & Intelligent Systems',
  'Tools & Platforms',
] as const;

export const skillsData: SkillItem[] = [
  // Programming
  { name: 'Python', category: 'Programming', context: 'Scripting, scanning runners, machine learning heuristics, and backend API microservices.', projectConnection: 'FutureForge, CatchPhish, TrafficSense', highlight: true },
  { name: 'C', category: 'Programming', context: 'Algorithmic fundamentals, memory concepts, and foundational systems programming.', projectConnection: 'Academic Foundation & DAA' },
  { name: 'C++', category: 'Programming', context: 'Object-oriented data structures, competitive programming, and performance optimization.', projectConnection: 'DAA Sem3 & Algorithms' },
  { name: 'Java', category: 'Programming', context: 'Object-oriented application architecture, modular data pipelines, and core programming paradigms.' },

  // Development
  { name: 'React', category: 'Development', context: 'Component-driven reactive single-page applications, custom hooks, and state management.', projectConnection: 'CatchPhish, WealthAvatar, FutureForge UI', highlight: true },
  { name: 'TypeScript', category: 'Development', context: 'Strict typing, scalable frontend interfaces, and robust component contracts.', projectConnection: 'TrafficSense, Modern Web Apps', highlight: true },
  { name: 'JavaScript', category: 'Development', context: 'Interactive visual state machines, DOM manipulation, and asynchronous web workflows.', projectConnection: 'Algorithm Lab, WealthAvatar' },
  { name: 'HTML & CSS', category: 'Development', context: 'Semantic web layouts, accessible markup, responsive grid structures, and design tokens.', projectConnection: 'Algorithm Lab & Modern Portfolios' },
  { name: 'Full-Stack Development', category: 'Development', context: 'End-to-end web architectures linking reactive frontends to asynchronous backend APIs.', projectConnection: 'CatchPhish & WealthAvatar', highlight: true },
  { name: 'REST APIs', category: 'Development', context: 'Contract-first API design, JSON serialization, HTTP status conventions, and endpoint security.', projectConnection: 'CatchPhish, FutureForge' },

  // AI & Intelligent Systems
  { name: 'AI/ML', category: 'AI & Intelligent Systems', context: 'Applied machine learning pipelines, classification heuristics, and feature engineering.', projectConnection: 'CatchPhish & TrafficSense AI', highlight: true },
  { name: 'LLM Applications', category: 'AI & Intelligent Systems', context: 'Generative AI workflows, prompt design, structured outputs, and LLM orchestration.' },
  { name: 'CrewAI', category: 'AI & Intelligent Systems', context: 'Multi-agent orchestration, autonomous role delegation, and collaborative reasoning chains.', highlight: true },
  { name: 'Agent Orchestration', category: 'AI & Intelligent Systems', context: 'Designing tool-calling agents, state machines, and context management protocols.' },
  { name: 'RAG Concepts', category: 'AI & Intelligent Systems', context: 'Retrieval-Augmented Generation architectures, chunking strategies, and semantic lookups.' },
  { name: 'AI Integrations', category: 'AI & Intelligent Systems', context: 'Embedding intelligent features, advisory engines, and predictions into consumer products.', projectConnection: 'WealthAvatar Cashius AI' },

  // Tools & Platforms
  { name: 'Git & GitHub', category: 'Tools & Platforms', context: 'Version control, collaborative branches, pull request workflows, and repository management.', projectConnection: 'All Repositories & CI', highlight: true },
  { name: 'Docker', category: 'Tools & Platforms', context: 'Containerization, multi-tier network segmentation, and automated testing environments.', projectConnection: 'FutureForge P1 Labs', highlight: true },
  { name: 'Firebase', category: 'Tools & Platforms', context: 'Real-time database synchronisation, user authentication, and cloud functions.' },
  { name: 'Cloud Platforms', category: 'Tools & Platforms', context: 'Hosting, container runners, cloud deployment protocols, and storage buckets.' },
  { name: 'Google AI Tooling', category: 'Tools & Platforms', context: 'Cloud AI foundations, developer toolkits, and student ecosystem technologies.', projectConnection: 'GSA \'26 & EduSkills Internship' }
];
