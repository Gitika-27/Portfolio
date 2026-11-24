export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  period: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export const leadershipData: LeadershipItem[] = [
  {
    id: 'gsa',
    role: 'Google Student Ambassador',
    organization: 'Google Student Ambassador Program — GSA \'26',
    type: 'Ambassadorship',
    period: '2026',
    tagline: 'Bridging developer ecosystems, Google technologies, and campus innovation.',
    description: 'Selected as a Google Student Ambassador representing Chennai Institute of Technology. Fostering a vibrant developer culture by introducing students to modern cloud tools, developer platforms, and collaborative tech initiatives.',
    highlights: [
      'Serving as the primary campus liaison for Google developer ecosystems and student programs.',
      'Promoting hands-on technical learning, workshop participation, and community events.',
      'Advocating for inclusive technical communities and accessible learning pathways for peers.'
    ]
  },
  {
    id: 'deutros',
    role: 'Secretary',
    organization: 'Deutros — German Language & Culture Club',
    type: 'Club Executive',
    period: 'Active',
    tagline: 'Fostering multilingual fluency, cross-cultural appreciation, and community dialogue.',
    description: 'Leading organizational operations, community outreach, and event coordination for the German Language and Culture Club at Chennai Institute of Technology.',
    highlights: [
      'Coordinating language immersion sessions, vocabulary workshops, and cultural celebration forums.',
      'Managing club documentation, inter-club communication, and student engagement initiatives.',
      'Pursuing German language proficiency alongside engineering studies.'
    ]
  },
  {
    id: 'asymmetric',
    role: 'Treasurer',
    organization: 'Asymmetric — Technical Club',
    type: 'Club Executive',
    period: 'Active',
    tagline: 'Managing fiscal resources and supporting student-driven engineering events.',
    description: 'Overseeing financial planning, resource allocation, and budget transparency for Asymmetric, CIT’s student-led technical club.',
    highlights: [
      'Directing fiscal allocations for technical workshops, hackathons, and hardware project kits.',
      'Ensuring accountable, transparent budgeting and expense tracking across all club activities.',
      'Collaborating with executive peers to plan and execute high-impact campus tech gatherings.'
    ]
  }
];

export const personalInterests = [
  {
    name: 'Badminton',
    category: 'Athletics & Focus',
    description: 'Competitive tournament discipline, swift tactical reflexes, and court endurance.'
  },
  {
    name: 'Music on Shuffle',
    category: 'Creative Soundtrack',
    description: 'Fuel for late-night code sprints, spanning eclectic genres from indie to ambient.'
  },
  {
    name: 'German Language',
    category: 'Linguistics',
    description: 'Active language learner exploring German grammar, syntax, and cultural context.'
  },
  {
    name: 'Hackathons & Sprints',
    category: 'Engineering Culture',
    description: 'Thriving under tight countdowns, shipping working prototypes, and solving hard bugs.'
  }
];
