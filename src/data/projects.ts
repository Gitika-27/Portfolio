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
    id: 'futureforge',
    title: 'FutureForge',
    subtitle: 'Patch Min-Cut Planner',
    tagline: 'Evidence-driven vulnerability remediation through modeled attack-path analysis and minimum-cost patch optimization.',
    category: 'Cybersecurity & Graph Optimization',
    image: '/images/projects/futureforge.png',
    accentColor: '#F97316',
    badge: 'P1 Lab & Ingestion Lead',
    githubUrl: 'https://github.com/Gitika-27/DataOps-FurtureForge',
    isDeployed: false,
    statusNote: 'Locally running cyber lab project. Not publicly deployed.',
    teamContext: 'Team Engineering Project (4-Person Architecture: Lab/Ingestion, Graph/Optimizer, Skeptic/Report, UI/API)',
    myRole: 'P1 — Lab Architecture & Data Ingestion Pipeline',
    teammateRole: 'P2: Graph Construction & ILP Optimizer; P3: Skeptic Rule Engine & Evidence Ledger; P4: React/Cytoscape UI & FastAPI',
    overview: 'FutureForge replaces arbitrary CVSS-score triage with graph-modeled attack reachability. By modeling network boundaries, open service vulnerabilities, and crown jewel assets as a directed graph, it formulates patch planning as a minimum-cut optimization problem—finding the exact subset of patches with the lowest total administrative cost that provably cuts every modeled path from external entry points to critical databases.',
    problem: 'Enterprise vulnerability scans dump thousands of isolated CVE alerts. Security teams waste hours patching non-exploitable services that are trapped behind closed firewalls while overlooking multi-hop attack paths that chain low-severity flaws into database compromise.',
    solution: 'Engineered an end-to-end laboratory and ingestion pipeline that deploys multi-zone container topologies, orchestrates real Nmap and Trivy scanners, normalizes heterogeneous network/vulnerability output into a strict schema, and pipes reachability data into an ILP solver for provable attack-path elimination.',
    architectureWorkflow: [
      'Lab Containerization: Deploy two multi-tier environments (Lab A & Lab B) with 6 assets spanning Internet, DMZ, and Internal Core networks.',
      'Scanner Orchestration: Trigger Nmap version detection and Trivy container vulnerability scanning across target subnets.',
      'Normalization Pipeline: Parse raw XML/JSON into canonical Asset, Service, and Finding records with verified reachability.',
      'Attack Graph Construction: P2 synthesizes findings into directed bipartite attack graphs bounded by hop caps.',
      'Min-Cut ILP Optimization: PuLP solver computes the minimal-cost patch set required to sever all attack trajectories.',
      'Skeptic Rule Ledger: P3 independently checks compensating controls and verifies zero lingering reachable paths.'
    ],
    technologies: ['Python', 'Docker Compose', 'Nmap', 'Trivy', 'FastAPI', 'React', 'NetworkX', 'PuLP', 'Cytoscape'],
    personalContributions: [
      'Designed and orchestrated two distinct Docker Compose lab topologies (Lab A & Lab B), each isolating 6 assets across 3 segmented network bridges (Internet Outer, DMZ Middle, Core Internal).',
      'Developed cross-platform scanner orchestration runners (`run_scan.py`, `run_scan.ps1`, `run_scan.sh`) automating Docker inventory collection and scanning execution.',
      'Authored the ingestion parsing engine (`parse_scan.py`) translating raw Nmap XML and Trivy JSON into normalized schema objects (assets, services, CVE findings, port reachability).',
      'Created Docker-free fallback systems with normalized mock fixtures (`data/mock/lab_a/`, `lab_b/`, `scanner-format/`) enabling rapid headless testing and CI validation.',
      'Established 33 passing automated unit and integration tests across parser accuracy, reachability validation, and schema consistency (`test_ingestion.py`).'
    ],
    engineeringChallenges: [
      'Bridging scanner outputs: Harmonizing disparate Nmap port/service XML schemas with Trivy container image JSON vulnerabilities into a single unified topology graph.',
      'Reachability normalization: Ensuring declared network memberships accurately reflected real-world TCP port accessibility without introducing false positive lateral paths.',
      'Providing realistic mock testing: Constructing synthetic fixtures that allow downstream graph and optimizer algorithms to be rigorously stress-tested in cloud CI without requiring Docker-in-Docker daemons.'
    ],
    limitationsAndStatus: [
      'Scanner orchestration code is complete and passes 33 automated tests; actual live scanning on Windows Docker Desktop remains to be exercised end-to-end by the team.',
      'Committed scanner-format fixtures are synthetic test data rather than live captures from production networks.',
      'Vulnerability version parsing relies on dotted-numeric heuristics and does not execute real-world exploits (strictly evidence-bounded).'
    ],
    metricsOrHighlights: [
      { label: 'Automated Tests', value: '33 Passed', note: 'Parser, offline cache, graph, optimizer & skeptic' },
      { label: 'Lab Assets', value: '6 Nodes / Lab', note: 'Spanning 3 isolated subnets' },
      { label: 'Path Reduction', value: '100%', note: 'Modeled entry-to-crown paths severed' },
      { label: 'Execution Mode', value: 'Local CLI / Lab', note: 'Evidence-bounded security workbench' }
    ],
    visualIdentityNotes: 'Dark cybersecurity laboratory HUD (#10151a), technical network nodes, orange/emerald state pills, white control panels, and monospaced diagnostic telemetry.'
  },
  {
    id: 'catchphish',
    title: 'CatchPhish',
    subtitle: 'Explainable Phishing Intelligence',
    tagline: 'Real-time URL classification and threat explanation powered by two-tier feature engineering and SHAP interpretability.',
    category: 'Applied Machine Learning & Cybersecurity',
    image: '/images/projects/catchphish.png',
    accentColor: '#FACC15',
    badge: 'Frontend & Backend Lead',
    liveUrl: 'https://catch-phish.vercel.app/',
    githubUrl: 'https://github.com/Gitika-27/CatchPhish',
    isDeployed: true,
    statusNote: 'Live web deployment with client-side interactive scan interface.',
    teamContext: 'Two-person Collaborative Engineering Project',
    myRole: 'Full-Stack Engineering (FastAPI Backend, React Web Interface, Extension APIs, SHAP Visualization)',
    teammateRole: 'ML Engineering (Model Training, Feature Selection, PhiUSIIL Dataset Benchmark, Stacking Ensemble)',
    overview: 'CatchPhish bridges the gap between opaque machine-learning classification and human trust in cybersecurity. While standard phishing detectors output an uninformative binary verdict, CatchPhish evaluates URLs through a lightning-fast two-tier architecture and provides SHAP-driven explanations detailing the exact lexical, structural, and domain signals that triggered the threat score.',
    problem: 'Existing phishing detectors force an unacceptable trade-off: fast heuristic filters miss zero-day homograph attacks, while deep scrapers suffer heavy latency penalties that slow down user browsing. Furthermore, users rarely trust unexplained "Blocked" warnings without evidence.',
    solution: 'Designed and deployed a dual-tier architecture: Tier-1 evaluates 21 lexical and host features in under 100ms before page retrieval; only ambiguous URLs trigger the Tier-2 crawler. Wrapped in a high-speed FastAPI service and high-contrast terminal UI with live SHAP waterfall plots.',
    architectureWorkflow: [
      'URL Ingestion: User or browser extension submits target URL via REST API endpoint.',
      'Lexical & Host Extraction: Fast path extracts 21 features (entropy, digit ratios, TLD risk, homoglyph punycode) in <100ms.',
      'Tier-1 Classifier: Stacking ensemble determines confidence; safe or blatantly malicious URLs return immediately.',
      'Tier-2 Deep Inspection: Ambiguous scores trigger automated DOM fetching (hidden password inputs, iframe ratios, title mismatch).',
      'SHAP Attribution: Game-theoretic Shapley values quantify the exact positive and negative contribution of each feature.',
      'Terminal UI Output: Live verdict (Safe / Suspicious / Dangerous) and explanation returned to user.'
    ],
    technologies: ['React', 'Python', 'FastAPI', 'XGBoost', 'SHAP', 'Tailwind CSS', 'Browser Extensions'],
    personalContributions: [
      'Engineered the production FastAPI service delivering sub-100ms prediction latency and asynchronous inference pipelines.',
      'Built the reactive, hacker-lab-inspired frontend interface featuring real-time terminal log streaming and confidence gauges.',
      'Implemented the SHAP explainability visualizer translating complex multidimensional tensors into intuitive feature attribution bars.',
      'Designed browser extension integration protocols communicating with background service workers.',
      'Co-discovered and corrected the critical `URLSimilarityIndex` data-leakage artifact in the benchmark dataset, ensuring valid real-world evaluation.'
    ],
    engineeringChallenges: [
      'Eliminating Data Leakage: Identified that the benchmark PhiUSIIL dataset had a feature (`URLSimilarityIndex`) that equaled 100.0 for 100% of legitimate URLs—artificially generating 100% accuracy in naive models. Removed this feature to produce a realistic, robust classifier.',
      'Sub-100ms Latency: Optimizing Python regex and domain parsing routines to ensure the Tier-1 fast path completes before browser HTTP handshakes finish.',
      'SHAP Rendering in Browser: Serializing high-overhead TreeExplainer outputs into lightweight JSON payloads for instant client-side rendering.'
    ],
    limitationsAndStatus: [
      'Live deployment runs on Vercel frontend with cloud backend; cold starts on free-tier containers can occasionally add initial latency.',
      'Tier-2 deep webpage scraping is subject to rate-limiting or anti-bot Cloudflare screens on target sites.'
    ],
    metricsOrHighlights: [
      { label: 'Inference Speed', value: '< 100ms', note: 'Tier-1 fast path without page fetch' },
      { label: 'Stacking Ensemble F1', value: '0.9973', note: 'Honest evaluation with leaky feature removed' },
      { label: 'Dataset Evaluated', value: '235K+ URLs', note: 'PhiUSIIL Phishing Benchmark' },
      { label: 'Explainability', value: 'SHAP Values', note: 'Feature-level attribution for every verdict' }
    ],
    visualIdentityNotes: 'Dark carbon (#0d0e11), high-voltage cyber yellow (#FACC15), crimson threat tags, and terminal log diagnostics.'
  },
  {
    id: 'trafficsense',
    title: 'TrafficSense AI',
    subtitle: 'Predictive Smart City Intelligence',
    tagline: 'Urban traffic analytics, congestion forecasting, and route optimization prototype across Indian metropolitan corridors.',
    category: 'Urban Analytics & Predictive Modeling',
    image: '/images/projects/trafficsense.png',
    accentColor: '#881337',
    badge: 'Data & Model Lead',
    liveUrl: 'https://ashvika-p.github.io/trafficsense_AI_final/',
    githubUrl: 'https://github.com/Gitika-27/TrafficSense',
    isDeployed: true,
    statusNote: 'Live web prototype showcasing analytics dashboards and simulated corridor forecasts.',
    teamContext: 'Two-person Collaborative Engineering Project',
    myRole: 'Model & Data Lead (Dataset Processing, Traffic Feature Engineering, Congestion Prediction Logic)',
    teammateRole: 'Frontend & Interface Lead (Dashboard Architecture, TomTom Mapping Integration, Route Comparison UI)',
    overview: 'TrafficSense AI is a smart city traffic intelligence prototype designed to give municipal planners and commuters proactive visibility into urban congestion. Instead of reacting to gridlock after it forms, the system correlates historical travel speeds, bottleneck choke points, and temporal variables to model congestion waves across major transit corridors.',
    problem: 'Traditional GPS navigation systems are purely reactive: when a main artery clogs, routing algorithms redirect thousands of drivers onto identical residential side streets, merely relocating the bottleneck. City planners lack unified foresight into emergent congestion patterns.',
    solution: 'Formulated predictive traffic models analyzing congestion severity across arterial zones (e.g., Chennai: T Nagar, Anna Nagar, Velachery, Guindy). Integrated route comparison metrics and elevation graphs to simulate traffic flow under varying peak-hour conditions.',
    architectureWorkflow: [
      'Corridor Telemetry: Ingest real-time and historical speed profiles across metropolitan checkpoints.',
      'Feature Engineering: Calculate moving averages, velocity ratios, weather impact weights, and time-of-day peak multipliers.',
      'Predictive Modeling: Forecast bottleneck progression and corridor delay probabilities.',
      'Interactive Visualization: Stream corridor metrics to interactive map views with elevation congestion curves.',
      'Route Recommendation: Compare alternate transit paths with congestion risk weightings.'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'TomTom APIs', 'SQL', 'Chart.js'],
    personalContributions: [
      'Spearheaded dataset acquisition and preprocessing for multi-corridor transit records across metropolitan zones.',
      'Developed feature engineering pipelines calculating rolling average speeds and congestion index thresholds.',
      'Formulated predictive classification heuristics distinguishing between temporary signal delays and systemic corridor blockages.',
      'Prepared data schemas and API contracts connecting model outputs to the frontend mapping dashboard.'
    ],
    engineeringChallenges: [
      'Distinguishing Prototype Metrics: Transparently separating prototype UI indicators (such as 92.6% accuracy or 48K daily volume) from empirical, ground-truth production measurements.',
      'Heterogeneous Speed Data: Normalizing erratic GPS velocity pings from crowded Indian arterial junctions with heavy mixed traffic.',
      'Latency-sensitive Prediction: Designing lightweight inference logic capable of updating corridor risk scores in real-time.'
    ],
    limitationsAndStatus: [
      'Prototype Status: Displayed metrics (e.g. 92.6% accuracy, 48K predictions) are illustrative prototype demonstrations, not independently audited production KPIs.',
      'Combines live TomTom API feeds with rule-based heuristics and simulated experimental ML models.'
    ],
    metricsOrHighlights: [
      { label: 'Metropolitan Zones', value: '4 Key Hubs', note: 'T Nagar, Anna Nagar, Velachery, Guindy (Chennai)' },
      { label: 'Telemetry Visualized', value: 'Real-time Curves', note: 'Congestion elevation profiles' },
      { label: 'Model Modality', value: 'Hybrid Analytics', note: 'Live API + Predictive Heuristics' },
      { label: 'Design System', value: 'Civic Editorial', note: 'Deep pine, burgundy & warm ivory' }
    ],
    visualIdentityNotes: 'Deep pine green (#061612), dark wine burgundy (#881337), warm cream/ivory typography (#F5F0E6), and civic data curves.'
  },
  {
    id: 'wealthavatar',
    title: 'WealthAvatar',
    subtitle: 'Compound Growth & Milestone Planner',
    tagline: 'Clean personal finance platform featuring multi-goal compound growth tracking and Cashius AI automated SIP advisory.',
    category: 'Fintech & Algorithmic Planning',
    image: '/images/projects/wealthavatar.png',
    accentColor: '#10B981',
    badge: 'Full-Stack Team Project',
    githubUrl: 'https://github.com/Gitika-27/wealthavatar',
    isDeployed: false,
    statusNote: 'Open-source repository with client dashboard and local simulation workflows.',
    teamContext: 'Collaborative Engineering Project',
    myRole: 'Frontend Architecture, Financial Math Engines, and Goal State Management',
    teammateRole: 'Co-development of UI components, user profile models, and asset allocation views',
    overview: 'WealthAvatar is an intuitive personal finance and wealth management dashboard created to demystify long-term compound growth. By breaking down intimidating lifetime financial targets into tangible monthly SIP (Systematic Investment Plan) trajectories, the application provides clear visual status on whether life milestones are on track or falling behind.',
    problem: 'Retail investors frequently save money without understanding how compounding timelines, inflation, and market volatility affect long-term goals. Static spreadsheets fail to alert savers when a milestone is at risk before it is too late to adjust contributions.',
    solution: 'Built an elegant, goal-driven wealth platform with specialized milestone planners (Retirement Corpus, Dream Home, Higher Education). Embedded Cashius AI advisory callouts that calculate precise supplemental monthly investments needed to rescue lagging milestones.',
    architectureWorkflow: [
      'Milestone Definition: Users configure target amounts, target completion dates, and existing accumulated capital.',
      'Compound Growth Modeling: Algorithmic engine calculates required monthly SIP contributions using expected rate of return curves.',
      'Risk Status Calculation: Progress rings compare actual accumulated corpus against expected linear and compound trajectory curves.',
      'Cashius AI Advisory: Automated advisory algorithm triggers when lag is detected, computing the exact revised SIP needed to bridge the deficit.',
      'Unified Dashboard View: Consolidates overview, spending, portfolio, and goals into a clean responsive interface.'
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage', 'Responsive UI', 'Financial Modeling'],
    personalContributions: [
      'Implemented the Goal Planner interface with interactive circular progress indicators and dynamic milestone status tags.',
      'Programmed financial calculation algorithms determining future value (FV) and required monthly annuity payments.',
      'Developed the Cashius AI dynamic recommendation callout banner providing actionable SIP step-up guidance.',
      'Ensured a clean, accessible layout adhering to high-density fintech dashboard standards.'
    ],
    engineeringChallenges: [
      'Compound Interest Precision: Accurately handling compound growth calculations across varying target horizons (from 5-year home purchases to 20-year retirement funds).',
      'Non-Linear Progress Representation: Visualizing financial progress realistically, accounting for the reality that compounding accumulates disproportionately in the final third of a timeline.',
      'Clutter-Free Information Architecture: Presenting multi-crore targets, monthly contributions, and risk states without cognitive overload.'
    ],
    limitationsAndStatus: [
      'Current version operates with client-side state and mock financial inputs; multi-brokerage API integrations are part of future iterations.',
      'Financial projections assume stable compounding rates and do not incorporate custom tax-bracket deductions.'
    ],
    metricsOrHighlights: [
      { label: 'Milestones Supported', value: 'Multi-Goal', note: 'Retirement, Real Estate, Education' },
      { label: 'Advisory Engine', value: 'Cashius AI', note: 'Dynamic SIP deficit compensation' },
      { label: 'UI Precision', value: 'Pixel Perfect', note: 'Forest green, pure white & terracotta accents' },
      { label: 'Repository', value: 'Open Source', note: 'Gitika-27/wealthavatar' }
    ],
    visualIdentityNotes: 'Clean minimalist fintech dashboard, pure white cards, soft mint/sage surface, emerald green accents, and circular SVG progress rings.'
  },
  {
    id: 'algorithm-lab',
    title: 'Algorithm Lab',
    subtitle: 'Interactive DAA Algorithm Workbench',
    tagline: 'Interactive algorithm experimentation workbench featuring 10 classic DAA experiments with step-by-step visualization and zero server overhead.',
    category: 'Computer Science & Visual Learning',
    image: '/images/projects/algorithm-lab.png',
    accentColor: '#38BDF8',
    badge: 'Creator & Lead Developer',
    liveUrl: 'https://gitika-27.github.io/DAA-Algorithm/',
    githubUrl: 'https://github.com/Gitika-27/DAA-Algorithm',
    isDeployed: true,
    statusNote: 'Live GitHub Pages deployment with zero-dependency browser execution.',
    teamContext: 'Independent Academic Engineering Project (Design and Analysis of Algorithms)',
    myRole: 'Sole Author & Architect (Algorithm Implementations, Visual State Machines, Step Execution Engine)',
    overview: 'Algorithm Lab is an interactive educational workbench built to bring theoretical Computer Science to life. Covering 10 core Design and Analysis of Algorithms (DAA) experiments, it replaces static textbook pseudocode with live, editable visual simulations where students can manipulate input arrays, step through execution, and watch comparisons, swaps, and recursive backtracks in real-time.',
    problem: 'Computer Science students frequently struggle with abstract algorithmic complexity because textbooks only present static trace tables. Understanding how Dijkstra relaxes edges or how Matrix Chain Multiplication memoizes subproblems requires interactive, visible state transitions.',
    solution: 'Architected a zero-server-roundtrip, client-side workbench featuring 10 full algorithm simulations. Each experiment includes configurable inputs, step-by-step execution controls, comparison counters, and asymptotic complexity curves ranging from O(log log n) to O(E log V).',
    architectureWorkflow: [
      'Input Ingestion: User modifies test arrays, graphs, or matrices directly in the browser DOM.',
      'Generator State Machine: JavaScript generator functions yield step-by-step execution states preserving call stacks.',
      'DOM Visualizer: SVG and Canvas elements highlight active comparisons, minimum-cut edges, and visited vertices.',
      'Telemetry Counters: Tracks operations in real-time (comparisons, memory allocations, recursive depths).',
      'Complexity Context: Situates observed performance against theoretical asymptotic curves.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'SVG Animation', 'Algorithms & Data Structures'],
    personalContributions: [
      'Implemented 10 core algorithm visualizers: Interpolation vs Binary Search, Pattern Matching (KMP & Rabin-Karp), Minimum Spanning Tree (Kruskal & Prim), Dijkstra Shortest Path, Min-Max Divide & Conquer, Matrix Chain Multiplication, etc.',
      'Designed an async generator-driven stepper allowing forward and backward execution states without page reloads.',
      'Crafted a high-contrast blueprint grid aesthetic with custom SVG complexity curves and responsive card layouts.',
      'Deployed directly to GitHub Pages with 100% client-side performance and zero external dependencies.'
    ],
    engineeringChallenges: [
      'Visualizing Asynchronous State: Managing animated stepping for graph algorithms like Dijkstra without blocking the browser event loop.',
      'Arbitrary User Inputs: Robustly validating user-supplied graphs and arrays to prevent infinite loops or rendering crashes during stepping.',
      'Clean Mathematical Visualization: Rendering mathematical matrix parenthood and tree structures using lightweight, dependency-free CSS and SVG.'
    ],
    limitationsAndStatus: [
      'Optimized for desktop and tablet screens to allow side-by-side inspection of input arrays and visualizer canvases.',
      'Large array sizes (>100 elements) are clamped in certain visualizers to ensure step animations remain comprehensible.'
    ],
    metricsOrHighlights: [
      { label: 'Experiments', value: '10 Rebuilt', note: 'Complete DAA semester lab syllabus' },
      { label: 'Topics Covered', value: '6 Domains', note: 'Searching, Strings, Graphs, DP, D&C, Greedy' },
      { label: 'Server Latency', value: '0 ms', note: 'Pure client-side execution' },
      { label: 'Complexity Range', value: 'O(log log n) - O(E log V)', note: 'Interactive asymptotic curves' }
    ],
    visualIdentityNotes: 'Technical blue-grey dark grid (#0c1017), warm amber headline accents, cyan metrics, and mathematical complexity curve graphs.'
  }
];
