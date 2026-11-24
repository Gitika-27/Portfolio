export interface SkillItem {
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'AI & ML' | 'Databases' | 'Cloud & Tools' | 'Blockchain';
  context: string;
  projectConnection?: string;
  highlight?: boolean;
}

export const skillCategories = [
  'All',
  'Programming',
  'AI & ML',
  'Frontend',
  'Backend',
  'Databases',
  'Cloud & Tools',
  'Blockchain'
] as const;

export const skillsData: SkillItem[] = [
  // Programming
  { name: 'Python', category: 'Programming', context: 'Primary language for ML, scripting, scanning orchestration, and backend APIs.', projectConnection: 'FutureForge, CatchPhish, TrafficSense', highlight: true },
  { name: 'TypeScript', category: 'Programming', context: 'Typed frontend architectures and scalable UI components.', projectConnection: 'TrafficSense, Modern Web Apps', highlight: true },
  { name: 'JavaScript', category: 'Programming', context: 'Interactive visual state machines, DOM manipulation, and asynchronous web logic.', projectConnection: 'Algorithm Lab, WealthAvatar' },
  { name: 'C / C++', category: 'Programming', context: 'Algorithmic fundamentals, memory structures, and performance-critical systems.', projectConnection: 'Academic Foundation & DAA' },
  { name: 'Java', category: 'Programming', context: 'Object-oriented programming, data structures, and enterprise backend patterns.' },
  { name: 'SQL', category: 'Programming', context: 'Relational data modeling, querying, and schema definition.', projectConnection: 'TrafficSense, MySQL Pipelines' },

  // AI & ML
  { name: 'XGBoost', category: 'AI & ML', context: 'Gradient boosting algorithms for high-speed tabular classification.', projectConnection: 'CatchPhish Phishing Detection', highlight: true },
  { name: 'SHAP', category: 'AI & ML', context: 'Game-theoretic Shapley values for explainable machine learning predictions.', projectConnection: 'CatchPhish Explainability Engine', highlight: true },
  { name: 'Generative AI', category: 'AI & ML', context: 'LLM orchestration, prompt engineering, and contextual reasoning workflows.' },
  { name: 'CrewAI', category: 'AI & ML', context: 'Multi-agent orchestration and task delegation for complex autonomous flows.' },
  { name: 'Feature Engineering', category: 'AI & ML', context: 'Lexical, host-based, and traffic time-series signal extraction.', projectConnection: 'CatchPhish & TrafficSense' },
  { name: 'Predictive Modeling', category: 'AI & ML', context: 'Congestion modeling and speed trend forecasting.', projectConnection: 'TrafficSense AI' },

  // Frontend
  { name: 'React', category: 'Frontend', context: 'Component-driven reactive UIs, state management, and custom hook architectures.', projectConnection: 'CatchPhish, WealthAvatar, FutureForge UI', highlight: true },
  { name: 'Angular', category: 'Frontend', context: 'Structured single-page application framework and dependency injection.' },
  { name: 'HTML5 & CSS3', category: 'Frontend', context: 'Semantic layout, responsive grid systems, and custom design systems.', projectConnection: 'Algorithm Lab & Web Projects' },
  { name: 'Tailwind CSS', category: 'Frontend', context: 'Utility-first modern styling, responsive tokens, and micro-interactions.' },

  // Backend
  { name: 'FastAPI', category: 'Backend', context: 'High-performance asynchronous Python REST APIs with automatic OpenAPI docs.', projectConnection: 'CatchPhish & FutureForge', highlight: true },
  { name: 'Flask', category: 'Backend', context: 'Lightweight microservices and prototype endpoints.' },
  { name: 'REST APIs', category: 'Backend', context: 'Contract-first API design, JSON serialization, and error handling.', projectConnection: 'CatchPhish, FutureForge' },

  // Databases
  { name: 'MySQL', category: 'Databases', context: 'Relational schema design, normalization, indexing, and transactional integrity.' },
  { name: 'MongoDB', category: 'Databases', context: 'Document storage, aggregation pipelines, and schema-less data stores.' },
  { name: 'Firebase', category: 'Databases', context: 'Real-time database, authentication, and cloud functions.' },

  // Cloud & Tools
  { name: 'Docker Compose', category: 'Cloud & Tools', context: 'Multi-container network segmentation, isolated labs, and scanner deployment.', projectConnection: 'FutureForge P1 Labs', highlight: true },
  { name: 'Git & GitHub', category: 'Cloud & Tools', context: 'Version control, branch management, collaborative pull requests, and CI/CD.' },
  { name: 'AWS', category: 'Cloud & Tools', context: 'Cloud infrastructure essentials, S3 object storage, and compute hosting.' },
  { name: 'n8n', category: 'Cloud & Tools', context: 'Workflow automation, webhook integration, and service connectivity.' },
  { name: 'Nmap & Trivy', category: 'Cloud & Tools', context: 'Network port discovery and container image vulnerability assessment.', projectConnection: 'FutureForge Lab Ingestion' },

  // Blockchain
  { name: 'Solidity', category: 'Blockchain', context: 'Smart contract development, EVM state transitions, and contract logic.' },
  { name: 'Blockchain Fundamentals', category: 'Blockchain', context: 'Distributed ledgers, consensus mechanisms, cryptographic hashing, and peer-to-peer security.' }
];
