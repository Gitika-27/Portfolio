import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Layers, ShieldCheck, Terminal, Compass, BarChart3, Database } from 'lucide-react';
import { projectsData, ProjectCaseStudy } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const ProjectsShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Cybersecurity', 'AI & ML', 'Systems & Algo', 'Fintech'];

  const filteredProjects = projectsData.filter((project) => {
    if (filterCategory === 'All') return true;
    if (filterCategory === 'Cybersecurity') return project.category.includes('Cybersecurity');
    if (filterCategory === 'AI & ML') return project.category.includes('Machine Learning') || project.category.includes('Predictive');
    if (filterCategory === 'Systems & Algo') return project.category.includes('Algorithm') || project.category.includes('Optimization');
    if (filterCategory === 'Fintech') return project.category.includes('Fintech');
    return true;
  });

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-[#111412] border-t border-[#EDEAE1]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#EDEAE1]/10 pb-8">
          <div>
            <div className="font-mono text-xs text-[#A9B89B] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B]"></span>
              <span>SECTION // 03</span>
              <span>•</span>
              <span>AUTHENTIC PROJECT ARCHIVES</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#EDEAE1] font-normal leading-tight">
              Selected Work <span className="italic text-[#A9B89B]">& Engineering Labs</span>
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#888D85] max-w-xl font-light">
              Actual screenshots and codebase realities from collaborative cybersecurity labs, explainable ML models, and interactive algorithm engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  filterCategory === cat
                    ? 'bg-[#EDEAE1] text-[#111412] font-semibold shadow-sm'
                    : 'bg-[#181E1A] text-[#888D85] hover:text-[#EDEAE1] border border-[#EDEAE1]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards: Individualized Visual Identities */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            // Specialized visual accents per project
            const isFutureForge = project.id === 'futureforge';
            const isCatchPhish = project.id === 'catchphish';
            const isTrafficSense = project.id === 'trafficsense';
            const isWealthAvatar = project.id === 'wealthavatar';
            const isAlgorithmLab = project.id === 'algorithm-lab';

            return (
              <article
                key={project.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isFutureForge
                    ? 'bg-[#10151a]/90 border-[#F97316]/25 hover:border-[#F97316]/50 shadow-xl shadow-orange-950/10'
                    : isCatchPhish
                    ? 'bg-[#0d0e11]/95 border-[#FACC15]/25 hover:border-[#FACC15]/50 shadow-xl shadow-yellow-950/10'
                    : isTrafficSense
                    ? 'bg-[#061612]/90 border-[#881337]/35 hover:border-[#881337]/60 shadow-xl shadow-red-950/10'
                    : isWealthAvatar
                    ? 'bg-[#151d18]/90 border-[#10B981]/25 hover:border-[#10B981]/50 shadow-xl shadow-emerald-950/10'
                    : 'bg-[#0c1017]/90 border-[#38BDF8]/25 hover:border-[#38BDF8]/50 shadow-xl shadow-cyan-950/10'
                }`}
              >
                {/* Individualized Project Card Header Bar */}
                <div className="px-6 py-3.5 border-b border-[#EDEAE1]/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="font-bold" style={{ color: project.accentColor }}>
                      PROJ_0{index + 1} // {project.title.toUpperCase()}
                    </span>
                    <span className="text-[#888D85]">•</span>
                    <span className="text-[#C4C0B5]">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono border"
                      style={{
                        backgroundColor: `${project.accentColor}15`,
                        borderColor: `${project.accentColor}40`,
                        color: project.accentColor,
                      }}
                    >
                      {project.badge}
                    </span>
                    {project.isDeployed ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                        LIVE PROTOTYPE
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#888D85]/15 text-[#888D85] border border-[#888D85]/30">
                        LOCAL / CLI REPO
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Grid: Large Authentic Screenshot & Editorial Details */}
                <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Screenshot Showcase */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer relative rounded-xl overflow-hidden border border-[#EDEAE1]/10 bg-black/40 hover:border-[#A9B89B]/50 transition-all duration-300 shadow-2xl"
                    >
                      {/* Actual Screenshot */}
                      <img
                        src={project.image}
                        alt={`${project.title} interface capture`}
                        className="w-full object-cover transform group-hover:scale-[1.015] transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                        <span className="font-mono text-xs text-[#EDEAE1] bg-[#111412]/90 px-3 py-1.5 rounded-lg border border-[#EDEAE1]/20 flex items-center gap-1.5">
                          <span>Inspect Full Case Study & Architecture</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#FACC15]" />
                        </span>
                        <span className="font-mono text-[11px] text-[#A9B89B]">
                          [CLICK TO EXPAND]
                        </span>
                      </div>
                    </div>

                    {/* Screenshot Caption with Technical Honesty */}
                    <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-[#888D85] px-1">
                      <span>ASSET: {project.image}</span>
                      <span className="text-[#A9B89B]">100% UNMODIFIED WORK REPOSITORY CAPTURE</span>
                    </div>
                  </div>

                  {/* Editorial Descriptions & Verified Roles */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Tagline & Subtitle */}
                      <h3 className="font-editorial text-3xl sm:text-4xl text-[#EDEAE1] font-normal leading-tight mb-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-[#A9B89B] tracking-wider mb-4">
                        {project.subtitle}
                      </p>

                      <p className="font-sans text-sm text-[#C4C0B5] leading-relaxed font-light mb-6">
                        {project.tagline}
                      </p>

                      {/* Clear Role Separation */}
                      <div className="p-4 rounded-xl bg-[#111412]/70 border border-[#EDEAE1]/10 space-y-2 mb-6">
                        <div className="font-mono text-[10px] text-[#888D85] uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }}></span>
                          <span>MY DIRECT RESPONSIBILITY:</span>
                        </div>
                        <p className="font-sans text-xs text-[#EDEAE1] font-medium leading-relaxed">
                          {project.myRole}
                        </p>
                        {project.teammateRole && (
                          <div className="pt-2 border-t border-[#EDEAE1]/5 text-[11px] text-[#888D85] font-sans">
                            <span className="font-mono text-[10px] text-[#888D85] uppercase mr-1">Teammate:</span>
                            {project.teammateRole}
                          </div>
                        )}
                      </div>

                      {/* Real Highlights / Metrics */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {project.metricsOrHighlights.slice(0, 2).map((m, i) => (
                          <div key={i} className="p-3 rounded-lg bg-[#181E1A]/80 border border-[#EDEAE1]/5">
                            <span className="font-mono text-[9px] text-[#888D85] uppercase block">{m.label}</span>
                            <span className="font-display text-base font-bold text-[#EDEAE1] block mt-0.5">{m.value}</span>
                            {m.note && <span className="font-mono text-[9px] text-[#A9B89B] block mt-0.5">{m.note}</span>}
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#202823] text-[11px] font-mono text-[#C4C0B5] border border-[#EDEAE1]/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-1 rounded-md bg-[#202823]/50 text-[11px] font-mono text-[#888D85]">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2.5 rounded-lg text-xs font-display font-semibold transition-all duration-200 flex items-center gap-2"
                        style={{
                          backgroundColor: project.accentColor,
                          color: '#111412',
                        }}
                      >
                        <span>Deep-Dive Case Study</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2.5 rounded-lg bg-[#202823] text-xs font-mono text-[#EDEAE1] border border-[#EDEAE1]/10 hover:border-[#A9B89B]/50 transition-colors flex items-center gap-1.5"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#A9B89B]" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="p-2.5 rounded-lg bg-[#202823] text-[#C4C0B5] hover:text-[#EDEAE1] border border-[#EDEAE1]/10 hover:border-[#A9B89B]/40 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
