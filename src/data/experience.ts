export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  badge: string;
  description: string;
  keyWork: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'Chennai Institute of Technology',
    period: '2025 — 2029',
    score: 'CGPA: 9.09 / 10.0',
    details: [
      'Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Linear Algebra, Machine Learning Foundations.',
      'Active contributor across technical clubs, campus ambassador ecosystems, and hackathon project teams.',
      'Maintaining consistent academic excellence with a 9.09 CGPA across rigorous AI & Data Science requirements.'
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'AI/ML Virtual Intern',
    organization: 'EduSkills Foundation (Google-Sponsored)',
    period: 'March 2026',
    badge: 'Virtual Internship',
    description: 'Specialized intensive virtual internship sponsored by Google, focusing on applied machine learning pipelines, cloud AI tooling, and real-world data engineering methodologies.',
    keyWork: [
      'Explored hands-on workflows with Google Cloud AI platforms and machine learning frameworks.',
      'Constructed data preprocessing, validation, and predictive modeling pipelines.',
      'Analyzed model performance metrics, error distributions, and generalization trade-offs.'
    ]
  },
  {
    role: 'Web Development Virtual Intern',
    organization: 'CodeAlpha',
    period: '2025',
    badge: 'Virtual Internship',
    description: 'Developed responsive, modern web applications, implementing UI components, client-side interactivity, and clean code principles.',
    keyWork: [
      'Built interactive frontend modules using modern JavaScript, HTML5, and responsive CSS.',
      'Structured clean, maintainable component code and responsive layouts across viewports.',
      'Enhanced user experience through accessible forms, transitions, and state management.'
    ]
  },
  {
    role: 'Web Development Intern',
    organization: 'Inhouse Engineering Sprints',
    period: 'July 2025 — September 2025',
    badge: 'Technical Internship',
    description: 'Developed and optimized client-facing web components, responsive layouts, and REST API integrations for internal digital platforms.',
    keyWork: [
      'Constructed responsive, accessible user interfaces using modern JavaScript, HTML, and CSS.',
      'Collaborated on REST API integration, client-side state handling, and component modularity.',
      'Implemented performance optimizations for web asset loading and interaction latency.'
    ]
  }
];
