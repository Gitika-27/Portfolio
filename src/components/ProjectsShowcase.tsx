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
    if (filterCategory === 'AI & ML') return project.category.includes('Machine Learning') || project.category.includes('Predictive') || project.category.includes('ML');
    if (filterCategory === 'Systems & Algo') return project.category.includes('Algorithm') || project.category.includes('Optimization');
    if (filterCategory === 'Fintech') return project.category.includes('Fintech');
    return true;
  });

  return (
    <section id="work" className="py-24 sm:py-32 relative bg-[#101112] border-t border-[#F2EEE8]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#F2EEE8]/12 pb-8">
          <div>
            <div className="font-mono text-xs text-[#D66F43] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43]"></span>
              <span>SECTION // 03</span>
              <span>•</span>
              <span>AUTHENTIC PROJECT ARCHIVES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F2EEE8] font-bold leading-tight">
              Selected Work <span className="font-editorial italic font-normal text-[#D66F43]">& Engineering Labs</span>
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#A9A29A] max-w-xl font-light">
              Actual application screenshots and codebase realities across explainable ML models, cybersecurity labs, and interactive algorithm engines.
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
                    ? 'bg-[#D66F43] text-[#101112] font-bold shadow-md shadow-[#D66F43]/20'
                    : 'bg-[#191817] text-[#A9A29A] hover:text-[#F2EEE8] border border-[#F2EEE8]/10'
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

            const isFutureForge = project.id === 'futureforge';
            const isCatchPhish = project.id === 'catchphish';
            const isTrafficSense = project.id === 'trafficsense';
            const isWealthAvatar = project.id === 'wealthavatar';
            const isAlgorithmLab = project.id === 'algorithm-lab';

            return (
              <article
                key={project.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isCatchPhish
                    ? 'bg-[#161715]/95 border-[#D66F43]/30 hover:border-[#D66F43]/60 shadow-xl shadow-orange-950/10'
                    : isFutureForge
                    ? 'bg-[#12161a]/95 border-[#E68962]/30 hover:border-[#E68962]/60 shadow-xl shadow-orange-950/10'
                    : isTrafficSense
                    ? 'bg-[#121815]/95 border-[#A85B3D]/35 hover:border-[#D66F43]/60 shadow-xl shadow-red-950/10'
                    : isWealthAvatar
                    ? 'bg-[#141b17]/95 border-[#10B981]/25 hover:border-[#10B981]/50 shadow-xl shadow-emerald-950/10'
                    : 'bg-[#12171c]/95 border-[#38BDF8]/25 hover:border-[#38BDF8]/50 shadow-xl shadow-cyan-950/10'
                }`}
              >
                {/* Project Header Bar */}
                <div className="px-6 py-3.5 border-b border-[#F2EEE8]/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="font-bold tracking-wider" style={{ color: project.accentColor }}>
                      PROJ_0{index + 1} // {project.title.toUpperCase()}
                    </span>
                    <span className="text-[#A9A29A]">•</span>
                    <span className="text-[#C8C2BA]">{project.category}</span>
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
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#A9A29A]/15 text-[#A9A29A] border border-[#A9A29A]/30">
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
                      className="group cursor-pointer relative rounded-xl overflow-hidden border border-[#F2EEE8]/10 bg-black/50 hover:border-[#D66F43]/50 transition-all duration-300 shadow-2xl"
                    >
                      {/* Actual Screenshot */}
                      <img
                        src={project.image}
                        alt={`${project.title} interface capture`}
                        className="w-full object-cover transform group-hover:scale-[1.015] transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Hover Overlay Hint */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-5">
                        <span className="font-mono text-xs text-[#F2EEE8] bg-[#101112]/90 px-3 py-1.5 rounded-lg border border-[#F2EEE8]/20 flex items-center gap-1.5">
                          <span>Inspect Full Case Study & Architecture</span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#D66F43]" />
                        </span>
                        <span className="font-mono text-[11px] text-[#D66F43]">
                          [CLICK TO EXPAND]
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-[#A9A29A] px-1">
                      <span>ASSET: {project.image}</span>
                      <span className="text-[#D66F43]">100% UNMODIFIED WORK REPOSITORY CAPTURE</span>
                    </div>
                  </div>

                  {/* Editorial Descriptions & Verified Roles */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl text-[#F2EEE8] font-bold leading-tight mb-1">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs text-[#D66F43] tracking-wider mb-4">
                        {project.subtitle}
                      </p>

                      <p className="font-serif text-sm text-[#C8C2BA] leading-relaxed font-light mb-6">
                        {project.tagline}
                      </p>

                      {/* Clear Role Separation */}
                      <div className="p-4 rounded-xl bg-[#101112]/80 border border-[#F2EEE8]/10 space-y-2 mb-6">
                        <div className="font-mono text-[10px] text-[#A9A29A] uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.accentColor }}></span>
                          <span>MY DIRECT RESPONSIBILITY:</span>
                        </div>
                        <p className="font-sans text-xs text-[#F2EEE8] font-semibold leading-relaxed">
                          {project.myRole}
                        </p>
                        {project.teammateRole && (
                          <div className="pt-2 border-t border-[#F2EEE8]/8 text-[11px] text-[#A9A29A] font-sans">
                            <span className="font-mono text-[10px] text-[#A9A29A] uppercase mr-1">Teammate:</span>
                            {project.teammateRole}
                          </div>
                        )}
                      </div>

                      {/* Real Highlights */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {project.metricsOrHighlights.slice(0, 2).map((m, i) => (
                          <div key={i} className="p-3 rounded-lg bg-[#191817] border border-[#F2EEE8]/8">
                            <span className="font-mono text-[9px] text-[#A9A29A] uppercase block">{m.label}</span>
                            <span className="font-display text-base font-bold text-[#F2EEE8] block mt-0.5">{m.value}</span>
                            {m.note && <span className="font-mono text-[9px] text-[#D66F43] block mt-0.5">{m.note}</span>}
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#242220] text-[11px] font-mono text-[#C8C2BA] border border-[#F2EEE8]/5"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-2 py-1 rounded-md bg-[#242220]/50 text-[11px] font-mono text-[#A9A29A]">
                            +{project.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2.5 rounded-lg text-xs font-display font-bold transition-all duration-200 flex items-center gap-2"
                        style={{
                          backgroundColor: project.accentColor,
                          color: '#101112',
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
                          className="px-3.5 py-2.5 rounded-lg bg-[#242220] text-xs font-mono text-[#F2EEE8] border border-[#F2EEE8]/10 hover:border-[#D66F43]/50 transition-colors flex items-center gap-1.5"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#D66F43]" />
                        </a>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="p-2.5 rounded-lg bg-[#242220] text-[#A9A29A] hover:text-[#F2EEE8] border border-[#F2EEE8]/10 hover:border-[#D66F43]/40 transition-colors"
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
