# Gitika Omprakash — Personal Portfolio & Creative Technologist Space

> **"Exploring the space between intelligent systems, thoughtful engineering, and ideas that refuse to stay ideas."**  
> A dark, sophisticated, cinematic developer portfolio for **Gitika Omprakash**, an Artificial Intelligence and Data Science undergraduate at Chennai Institute of Technology, AI engineer, and full-stack developer.

---

## 01. Visual Transformation & Design Concept

This portfolio is an expressive, dark editorial developer experience combining:
- **Oversized Typographic Identity**: Massive, unmistakable `GITIKA OMPRAKASH` typography dominating the hero composition.
- **Vante 3D Project Ribbon**: A smooth Three.js WebGL continuous ribbon showcasing real project screenshots (CatchPhish, TrafficSense AI, FutureForge, WealthAvatar, Algorithm Lab) flowing along a curved 3D serpentine trajectory that responds to pointer tilt and scroll.
- **Cryptographic G Particle Identity**: The signature HTML5 Canvas particle constellation forming an architectural **G / OM** monogram that repels on hover and disperses with a shockwave on click.
- **Dark Editorial Palette**:
  - Background: `#101112`
  - Secondary background: `#191817`
  - Primary text: `#F2EEE8` (Warm Ivory)
  - Secondary text: `#A9A29A` (Warm Grey)
  - Accent: `#D66F43` (Burnt Orange / Terracotta)
  - Muted Accent: `#A85B3D`
  - Borders: `rgba(242, 238, 232, 0.12)`
- **Typography**:
  - **Nunito**: Headings, navigation, interface text, and labels.
  - **Lora**: Editorial paragraphs, selected descriptions, and expressive text.
  - **JetBrains Mono**: Technical metadata, coordinates, and terminal telemetry.

---

## 02. Featured Projects & Codebase Reality

All 5 projects feature actual unmodified repository screenshots from `public/images/projects/`:

| Project | Domain | Direct Contribution | Teammate Contribution | Status & Link |
| :--- | :--- | :--- | :--- | :--- |
| **CatchPhish** | Applied ML & Cybersecurity | **Frontend & Backend Lead**: FastAPI service, React terminal UI, SHAP visualization, browser extension protocols, leakage correction | ML model development and data collection (P. Ashvika) | Live Demo ([Link](https://catch-phish.vercel.app/) \| [GitHub](https://github.com/Gitika-27/CatchPhish)) |
| **TrafficSense AI** | Urban Analytics & Prediction | **Model & Prediction Lead**: Data preprocessing, congestion heuristics, velocity modeling | Frontend & mapping interface (P. Ashvika) | Live Prototype ([Link](https://ashvika-p.github.io/trafficsense_AI_final/) \| [GitHub](https://github.com/Gitika-27/TrafficSense)) |
| **FutureForge** | Cybersecurity & Attack-Path ILP | **P1 Lead**: 2 Docker Compose labs (6 assets, 3 isolated subnets), Nmap/Trivy scanner runners, schema parser, synthetic mock fixtures, 33 unit tests | P2: Graph & PuLP ILP; P3: Skeptic Rule Ledger; P4: React/Cytoscape UI | In-Development Lab ([GitHub](https://github.com/Gitika-27/DataOps-FurtureForge)) |
| **WealthAvatar** | Fintech & Wealth Planning | **Full-Stack / Financial Math**: Goal planner state machine, future value algorithms, Cashius AI recommendation engine | Profile & Asset allocation views | Open-Source Repo ([GitHub](https://github.com/Gitika-27/wealthavatar)) |
| **Algorithm Lab** | DAA Interactive Workbench | **Sole Creator**: 10 interactive algorithm visualizers, async generator stepper, zero-server execution | Sole Author | Live Pages ([Link](https://gitika-27.github.io/DAA-Algorithm/) \| [GitHub](https://github.com/Gitika-27/DAA-Algorithm)) |

---

## 03. Leadership & Community

- **Google Student Ambassador (GSA '26)** — Representing Chennai Institute of Technology, introducing students to cloud tools and developer ecosystems.
- **Secretary — Deutros** — German Language & Culture Club, organizing immersion workshops and multilingual dialogues.
- **Treasurer — Asymmetric** — Technical Club, managing budgeting and fiscal transparency for campus tech workshops and hackathons.

---

## 04. Technical Architecture

- **Framework**: React 19 + TypeScript + Vite 6
- **3D Graphics**: Three.js (CatmullRom 3D ribbon curve, curved perspective panels, mesh materials)
- **Styling**: Tailwind CSS with custom editorial tokens
- **Motion & Interaction**: HTML5 Canvas particle engine, smooth spring physics, Framer Motion
- **Icons**: Lucide React
- **Fonts**: Nunito (Headings/UI) & Lora (Editorial) via Google Fonts

---

## 05. Local Development Setup

```bash
# Clone the repository
git clone https://github.com/Gitika-27/Portfolio.git
cd Portfolio

# Install dependencies
pnpm install

# Start local development server
pnpm run dev
# Server will launch at http://localhost:3000/

# Build for production
pnpm run build

# Preview production build locally
pnpm run preview
# Preview server runs at http://localhost:4173/
```

---

## 06. Deployment to Vercel

Configured with [vercel.json](file:///e:/Portfolio/vercel.json) for automatic zero-configuration Vite builds on Vercel:

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "feat: visual transformation with Vante 3D ribbon and Nunito/Lora typography"
   git push origin main
   ```
2. Connected repository on [Vercel](https://vercel.com) will automatically deploy the latest production build.
