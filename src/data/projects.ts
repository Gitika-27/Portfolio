export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  image: string;
  accentColor: string;
  badge: string;
  liveUrl?: string;
  githubUrl: string;
  isDeployed: boolean;
  statusNote?: string;
  teamContext: string;
  myRole: string;
  teammateRole?: string;
  overview: string;
  problem: string;
  solution: string;
  architectureWorkflow: string[];
  technologies: string[];
  personalContributions: string[];
  engineeringChallenges: string[];
  limitationsAndStatus: string[];
  metricsOrHighlights: { label: string; value: string; note?: string }[];
  visualIdentityNotes: string;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'catchphish',
    title: 'CatchPhish',
    subtitle: 'Explainable Phishing URL Intelligence',
    tagline: 'An intelligent phishing URL detection platform combining machine learning and multiple security signals to identify suspicious websites with SHAP explainability.',
    category: 'Applied ML & Cybersecurity',
    image: '/images/projects/catchphish.png',
    accentColor: '#D66F43',
    badge: 'Frontend & Backend Lead',
    liveUrl: 'https://catch-phish.vercel.app/',
    githubUrl: 'https://github.com/Gitika-27/CatchPhish',
    isDeployed: true,
    statusNote: 'Live web deployment with client-side interactive scan interface.',
    teamContext: 'Two-person Collaborative Engineering Project',
    myRole: 'Frontend & Backend Implementation, Application Integration, and Model Connection',
    teammateRole: 'Machine Learning Model Development and Data Collection (P. Ashvika)',
    overview: 'CatchPhish combines machine learning and multi-signal URL intelligence to detect phishing threats in real time. Rather than delivering an opaque binary verdict, CatchPhish evaluates URLs through an instant two-tier architecture and uses SHAP-based explainability to show users the exact lexical, structural, and domain features influencing the risk verdict.',
    problem: 'Phishing attacks leverage lookalike domains, Unicode homoglyphs, and rapid redirections. Conventional blacklists fail against zero-day URLs, while black-box ML models provide no reasoning, leaving users unable to distinguish genuine false positives from severe risks.',
    solution: 'Built an asynchronous FastAPI backend and responsive high-contrast React terminal web interface. Implemented sub-100ms lexical and host-based fast-path feature extraction, browser extension protocol integration, and real-time SHAP feature attribution plots.',
    architectureWorkflow: [
      'URL Submission: User or browser extension inputs suspicious URL into the scanning interface.',
      'Tier-1 Feature Extraction: Instant extraction of 21 lexical & host signals (punycode homoglyphs, entropy, token length, TLD credibility) in under 100ms.',
      'Classifier Evaluation: Stacking ensemble model predicts confidence tier (Safe, Suspicious, Dangerous).',
      'Tier-2 Deep Check: Ambiguous or borderline scores trigger selective DOM inspection (form targets, iframe ratios).',
      'SHAP Reasoning: Game-theoretic Shapley values calculate per-feature positive and negative threat contributions.',
      'Terminal Dashboard Output: Live scan verdict with transparent threat indicators rendered directly to the user.'
    ],
    technologies: ['React', 'Python', 'FastAPI', 'XGBoost', 'SHAP', 'Tailwind CSS', 'Browser Extension APIs'],
    personalContributions: [
      'Engineered the complete frontend web application featuring real-time terminal logs, responsive gauges, and scan history.',
      'Built and deployed the high-speed FastAPI backend providing asynchronous REST endpoints with sub-100ms response targets.',
      'Integrated the client-facing user experience with backend model inference pipelines and SHAP explanation serializers.',
      'Designed browser extension background worker protocols for inline URL interception.',
      'Co-discovered and corrected the `URLSimilarityIndex` dataset leakage artifact in the benchmark, ensuring realistic model evaluation without artificial inflation.'
    ],
    engineeringChallenges: [
      'Sub-100ms Latency: Streamlining URL parsing routines in Python to deliver instant verdict feedback before web page load.',
      'SHAP Serialization: Converting complex high-dimensional Shapley tensors into lightweight JSON payloads for instant browser charting.',
      'Data Leakage Elimination: Removing leaky benchmark features to ensure true generalization against unseen malicious domains.'
    ],
    limitationsAndStatus: [
      'Live deployment runs on Vercel with cloud backend containers; occasional cold starts may add initial connection delay.',
      'Tier-2 deep webpage analysis is subject to rate-limiting or anti-scraping protections on target endpoints.'
    ],
    metricsOrHighlights: [
      { label: 'Fast Path Latency', value: '< 100ms', note: 'Lexical & host evaluation' },
      { label: 'Stacking F1-Score', value: '0.9973', note: 'Honest benchmark evaluation' },
      { label: 'Explainability', value: 'SHAP Plots', note: 'Feature attribution per scan' },
      { label: 'Deployment', value: 'Vercel + Cloud', note: 'Live interactive app' }
    ],
    visualIdentityNotes: 'Dark charcoal background, vibrant cyber yellow and terracotta accents, terminal log stream, and red threat indicators.'
  },
  {
    id: 'trafficsense',
    title: 'TrafficSense AI',
    subtitle: 'AI-Driven Urban Traffic Intelligence',
    tagline: 'An AI-driven traffic intelligence platform designed to predict congestion, analyse transit corridors, and support proactive route optimisation.',
    category: 'Urban Analytics & Prediction',
    image: '/images/projects/trafficsense.png',
    accentColor: '#E68962',
    badge: 'Data & Prediction Lead',
    liveUrl: 'https://ashvika-p.github.io/trafficsense_AI_final/',
    githubUrl: 'https://github.com/Gitika-27/TrafficSense',
    isDeployed: true,
    statusNote: 'Live web prototype showcasing transit analytics dashboards and corridor prediction interfaces.',
    teamContext: 'Two-person Collaborative Engineering Project (Exchanged Roles vs CatchPhish)',
    myRole: 'Model & Prediction-Oriented Development (Data Preprocessing, Congestion Heuristics, Prediction Modeling)',
    teammateRole: 'Frontend & Application Interface Development (TomTom API Integration, Route Comparison Dashboard - P. Ashvika)',
    overview: 'TrafficSense AI is an urban traffic intelligence prototype developed to forecast congestion hotspots and evaluate multi-corridor transit bottlenecks across Indian metropolitan arteries. By analyzing travel velocity patterns and bottleneck propagation, it provides city planners with proactive traffic foresight.',
    problem: 'Urban congestion in Indian metropolitan centers is highly dynamic and non-linear. Commuters and municipal authorities typically react to gridlock after choke points are already paralyzed, leading to cascading delays across alternate streets.',
    solution: 'Designed and implemented predictive modeling heuristics and data processing pipelines focused on arterial corridors (Chennai: T Nagar, Anna Nagar, Velachery, Guindy). Created congestion index models and speed profile estimators feeding into the interactive dashboard.',
    architectureWorkflow: [
      'Telemetry Processing: Ingest transit speed records, bottleneck coordinates, and peak-hour variables.',
      'Feature Engineering: Compute rolling velocity averages, congestion thresholds, and time-of-day multipliers.',
      'Congestion Modeling: Estimate bottleneck risk levels (Low, Medium, High) across arterial segments.',
      'API Schema Contracts: Package prediction outputs into structured JSON for frontend map rendering.',
      'Visual Dashboard: Display live congestion elevation graphs and alternative route recommendations.'
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'TomTom APIs', 'SQL', 'Chart.js'],
    personalContributions: [
      'Led the data engineering pipeline, cleaning and structuring heterogeneous transit speed datasets.',
      'Formulated congestion prediction heuristics and velocity ratio algorithms across key metropolitan zones.',
      'Authored the prediction API schema connecting computational modeling outputs to the client interface.',
      'Calibrated corridor delay estimates against historical rush-hour benchmark ranges.'
    ],
    engineeringChallenges: [
      'Data Integrity: Distinguishing prototype demonstration metrics from empirical real-world production measurements.',
      'Mixed Traffic Variance: Normalizing erratic speed readings across diverse urban roads with heavy bus, two-wheeler, and auto-rickshaw density.',
      'Lightweight Modeling: Ensuring prediction algorithms compute without demanding excessive cloud server resources.'
    ],
    limitationsAndStatus: [
      'Prototype Demonstration: Displayed metrics (e.g. 92.6% accuracy, 48K daily volume) represent prototype demonstrations, not independently audited production KPIs.',
      'The platform combines real-world mapping APIs with simulated data and experimental prediction heuristics.'
    ],
    metricsOrHighlights: [
      { label: 'Metropolitan Zones', value: '4 Key Corridors', note: 'Chennai: T Nagar, Anna Nagar, etc.' },
      { label: 'Modality', value: 'Hybrid Analytics', note: 'API feeds + Predictive models' },
      { label: 'Role Attribution', value: 'ML & Prediction', note: 'Teammate built frontend UI' },
      { label: 'Status', value: 'Live Prototype', note: 'GitHub Pages demo' }
    ],
    visualIdentityNotes: 'Deep pine green, dark burgundy, warm cream typography, and civic congestion elevation wave curves.'
  },
  {
    id: 'futureforge',
    title: 'FutureForge',
    subtitle: 'Security Attack-Path & Min-Cut Patch Planner',
    tagline: 'Evidence-driven cybersecurity attack-path analysis and minimum-cost patch optimization platform.',
    category: 'Cybersecurity & Graph Optimization',
    image: '/images/projects/futureforge.png',
    accentColor: '#D66F43',
    badge: 'P1 Lab & Ingestion Lead',
    githubUrl: 'https://github.com/Gitika-27/DataOps-FurtureForge',
    isDeployed: false,
    statusNote: 'In-development technical lab project. NOT publicly deployed.',
    teamContext: 'Team Engineering Project (4-Person Architecture: Lab/Ingestion, Graph/Optimizer, Skeptic/Report, UI/API)',
    myRole: 'P1 — Lab Architecture & Data Ingestion (Docker Labs, Nmap/Trivy Orchestration, Schema Parser, Mock Data)',
    teammateRole: 'P2: Graph Construction & ILP Optimizer; P3: Skeptic Rule Ledger; P4: React/Cytoscape UI & FastAPI',
    overview: 'FutureForge tackles vulnerability overload by modeling network topology, open ports, and vulnerabilities as a directed bipartite attack graph. Formulating patch planning as an Integer Linear Programming (ILP) minimum-cut optimization problem, it finds the lowest-effort patch set that provably cuts every modeled trajectory from external entry points to critical crown-jewel databases.',
    problem: 'Enterprise vulnerability scanners produce thousands of disconnected CVE alerts. IT teams waste effort patching firewalled, unexploitable services while missing complex multi-hop chains that combine low-severity flaws into total database compromise.',
    solution: 'Designed and implemented the core P1 ingestion layer: containerized multi-network labs, automated Nmap and Trivy scan runners, built a robust normalization parser, and created Docker-free synthetic fixtures with 33 passing automated tests.',
    architectureWorkflow: [
      'Multi-Tier Lab Deployment: Two Docker Compose environments (Lab A & Lab B) with 6 assets across 3 isolated subnets.',
      'Scanner Orchestration: Cross-platform runners trigger Nmap port/service scans and Trivy container vulnerability inspections.',
      'Normalization Engine: Ingestion parser translates heterogeneous XML and JSON outputs into normalized Asset, Service, and Finding records.',
      'Attack Graph Construction: P2 constructs directed reachability graphs with hop-capped path bounds.',
      'Min-Cut ILP Solver: PuLP solver computes the mathematically optimal minimum-cost patch combination.',
      'Skeptic Rule Verification: P3 independently verifies that zero modeled entry-to-crown paths remain.'
    ],
    technologies: ['Python', 'Docker Compose', 'Nmap', 'Trivy', 'FastAPI', 'React', 'NetworkX', 'PuLP', 'Cytoscape'],
    personalContributions: [
      'Implemented two Docker Compose labs (Lab A & Lab B), each configuring 6 assets across 3 segmented networks (Internet Outer, DMZ Middle, Core Internal).',
      'Orchestrated Nmap service/version scanning and Trivy container image scanning via `run_scan.py`, `run_scan.ps1`, and `run_scan.sh`.',
      'Built the normalization parser (`parse_scan.py`) extracting assets, services, scanner-native findings, and declared-network open-port reachability.',
      'Created Docker-free fallback support with 6-asset mock datasets and synthetic Nmap XML / Trivy JSON fixtures under `data/mock/`.',
      'Maintained 33 passing automated unit and integration tests across ingestion, reachability parsing, and schema consistency.'
    ],
    engineeringChallenges: [
      'Schema Harmonization: Parsing disparate Nmap XML schemas and Trivy JSON vulnerabilities into a single canonical topology representation.',
      'Reachability Accuracy: Ensuring network boundaries and port bindings were parsed without generating false positive lateral hops.',
      'Headless CI Testing: Building realistic synthetic fixtures so downstream graph solvers could be tested without requiring Docker-in-Docker daemons.'
    ],
    limitationsAndStatus: [
      'In-development project: Scanner orchestration and parsing pass 33 automated tests, but live scanning on Windows Docker Desktop remains to be verified by the team.',
      'Checked-in scanner fixtures are synthetic test datasets, not live captures from production networks.',
      'Strictly evidence-bounded; does not execute real-world exploits.'
    ],
    metricsOrHighlights: [
      { label: 'Automated Tests', value: '33 Passed', note: 'Parser, offline cache, graph & ILP' },
      { label: 'Network Isolation', value: '3 Subnets / Lab', note: 'Internet, DMZ, Core Internal' },
      { label: 'Path Reduction', value: '100% Modeled', note: 'All entry-to-crown paths severed' },
      { label: 'Execution', value: 'In-Development', note: 'Locally run laboratory CLI' }
    ],
    visualIdentityNotes: 'Cybersecurity laboratory HUD (#10151a), network node graph, orange and green state indicators, and diagnostic telemetry.'
  },
  {
    id: 'wealthavatar',
    title: 'WealthAvatar',
    subtitle: 'Compound Growth & Wealth Planning Experience',
    tagline: 'A personal finance and wealth planning application featuring multi-goal compound growth tracking and Cashius AI automated SIP advisory.',
    category: 'Fintech & Wealth Planning',
    image: '/images/projects/wealthavatar.png',
    accentColor: '#10B981',
    badge: 'Application Project',
    githubUrl: 'https://github.com/Gitika-27/wealthavatar',
    isDeployed: false,
    statusNote: 'Open-source repository with client-side dashboard and goal simulation workflows.',
    teamContext: 'Collaborative Engineering Project',
    myRole: 'Goal Planner Interface, Financial Math Algorithms, and Milestone State Handling',
    teammateRole: 'Co-development of UI views, profile settings, and portfolio breakdown cards',
    overview: 'WealthAvatar is a personal finance and wealth planning dashboard built to demystify long-term compound growth. By breaking large multi-year savings targets into manageable monthly SIP (Systematic Investment Plan) trajectories, it provides clear visual status on whether life milestones are on track or falling behind.',
    problem: 'Retail savers often invest without knowing how compounding timelines, inflation, and market volatility impact their real financial goals. Static spreadsheets fail to warn users when a milestone is falling behind before it becomes too late to recover.',
    solution: 'Built an application experience with dedicated milestone planners (Retirement Corpus, Dream Home, Higher Education). Added Cashius AI recommendation callouts calculating the exact revised monthly SIP required to recover lagging milestones.',
    architectureWorkflow: [
      'Milestone Configuration: Configure target corpus, deadline dates, and existing accumulated capital.',
      'Compound Growth Modeling: Financial math formulas compute required monthly SIP annuities based on expected return rates.',
      'Lag & Risk Detection: Progress indicators evaluate accumulated funds against compound growth curves to detect at-risk milestones.',
      'Cashius AI Advisory: Algorithmic callouts compute supplemental contributions needed to get back on track.',
      'Unified Overview: Consolidates overview, spending, portfolio, and goals in a clear dashboard.'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage', 'Responsive UI', 'Financial Modeling'],
    personalContributions: [
      'Implemented the Goal Planner view with circular SVG progress rings and dynamic risk badges (On Track vs At Risk).',
      'Programmed financial calculation algorithms determining future value (FV) and required monthly annuities.',
      'Built dynamic Cashius AI deficit compensation recommendation banners.',
      'Engineered responsive layouts adhering to clean fintech design standards.'
    ],
    engineeringChallenges: [
      'Compound Calculation Precision: Accurately handling compound growth over multi-decade horizons (e.g. 20-year retirement funds).',
      'Non-Linear Progress Visualization: Representing financial progress where exponential compounding concentrates in later years.',
      'Clean UI Structure: Organizing multi-crore goals, SIPs, and target dates cleanly without clutter.'
    ],
    limitationsAndStatus: [
      'Current version operates with client-side state and mock financial data; real brokerage API integrations are future enhancements.',
      'Financial projections assume stable compounding rates and do not constitute actual regulated investment advice.'
    ],
    metricsOrHighlights: [
      { label: 'Milestones', value: 'Multi-Goal', note: 'Retirement, Home, Education' },
      { label: 'Advisory Engine', value: 'Cashius AI', note: 'Deficit calculation' },
      { label: 'Design System', value: 'Clean Fintech', note: 'White & sage surfaces' },
      { label: 'Repository', value: 'Open Source', note: 'Gitika-27/wealthavatar' }
    ],
    visualIdentityNotes: 'Clean fintech dashboard, white surfaces, soft mint/sage background, emerald green accents, and circular progress rings.'
  },
  {
    id: 'algorithm-lab',
    title: 'Algorithm Lab',
    subtitle: 'Interactive DAA Learning & Visualisation Workbench',
    tagline: 'An interactive algorithm workbench showcasing 10 classic DAA experiments with step-by-step visual execution and zero server latency.',
    category: 'Computer Science & Visual Learning',
    image: '/images/projects/algorithm-lab.png',
    accentColor: '#38BDF8',
    badge: 'Creator & Lead Developer',
    liveUrl: 'https://gitika-27.github.io/DAA-Algorithm/',
    githubUrl: 'https://github.com/Gitika-27/DAA-Algorithm',
    isDeployed: true,
    statusNote: 'Live GitHub Pages deployment with zero-dependency browser execution.',
    teamContext: 'Independent Academic Engineering Project (Design and Analysis of Algorithms)',
    myRole: 'Sole Author & Architect (Algorithm Stepper Engine, Visual State Machines, Interactive UI)',
    overview: 'Algorithm Lab is an interactive educational workbench built to bring theoretical Computer Science concepts to life. Rebuilding 10 core Design and Analysis of Algorithms (DAA) experiments as live, editable web simulations, it allows students to modify inputs, step through execution, and watch comparisons, swaps, and recursive backtracks in real-time.',
    problem: 'Computer Science students frequently struggle with abstract algorithmic complexity because textbooks only provide static trace tables. Understanding how Dijkstra relaxes edges or how Matrix Chain Multiplication memoizes subproblems requires interactive, visible state transitions.',
    solution: 'Architected a zero-server-overhead, client-side workbench featuring 10 full algorithm simulations. Each experiment includes configurable inputs, step-by-step execution controls, operation counters, and asymptotic complexity curves from O(log log n) to O(E log V).',
    architectureWorkflow: [
      'Input Ingestion: User modifies test arrays, graphs, or matrices directly in the browser.',
      'Generator State Machine: JavaScript generator functions yield execution states preserving call stacks.',
      'DOM Visualizer: SVG and Canvas elements highlight active comparisons, minimum-cut edges, and visited vertices.',
      'Operation Counters: Tracks comparisons, memory allocations, and recursive depth in real time.',
      'Complexity Curves: Situates performance against theoretical asymptotic curves.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'SVG Animation', 'Algorithms & Data Structures'],
    personalContributions: [
      'Implemented 10 algorithm visualizers: Interpolation vs Binary Search, Pattern Matching (KMP & Rabin-Karp), Minimum Spanning Tree (Kruskal & Prim), Dijkstra Shortest Path, Min-Max Divide & Conquer, Matrix Chain Multiplication, etc.',
      'Designed an asynchronous generator stepper allowing forward and backward execution without page reloads.',
      'Crafted a high-contrast blueprint grid aesthetic with custom SVG complexity curves and responsive card layouts.',
      'Deployed directly to GitHub Pages with 100% client-side performance and zero external dependencies.'
    ],
    engineeringChallenges: [
      'Visualizing Asynchronous State: Managing animated stepping for graph algorithms like Dijkstra without blocking the browser event loop.',
      'Input Validation: Validating arbitrary user-supplied graphs and arrays to prevent infinite loops during stepping.',
      'Lightweight Mathematical Graphics: Rendering parenthood trees and matrices using lightweight CSS and SVG.'
    ],
    limitationsAndStatus: [
      'Optimized for desktop and tablet screens to allow side-by-side inspection of input arrays and visualizer canvases.',
      'Array sizes over 100 elements are clamped to maintain visual comprehension.'
    ],
    metricsOrHighlights: [
      { label: 'Experiments', value: '10 Rebuilt', note: 'Complete DAA syllabus' },
      { label: 'Domains', value: '6 Topics', note: 'Searching, Strings, Graphs, DP, D&C, Greedy' },
      { label: 'Server Latency', value: '0 ms', note: 'Pure client-side execution' },
      { label: 'Complexity', value: 'O(log log n) - O(E log V)', note: 'Interactive asymptotic curves' }
    ],
    visualIdentityNotes: 'Technical blue-grey dark grid, warm amber headline accents, cyan metrics, and mathematical complexity curve graphs.'
  }
];
