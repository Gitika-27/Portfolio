import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Shield, Cpu, Layers, GitBranch, Terminal } from 'lucide-react';
import { ProjectCaseStudy } from '../data/projects';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose}></div>

      {/* Main Modal Card */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#141815] border border-[#EDEAE1]/15 text-[#EDEAE1] shadow-2xl shadow-black/80 flex flex-col">
        
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#141815]/95 backdrop-blur-md border-b border-[#EDEAE1]/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: project.accentColor }}
            ></span>
            <div>
              <span className="font-mono text-xs text-[#888D85] uppercase tracking-wider block">
                CASE STUDY ARCHIVE // {project.category}
              </span>
              <h2 className="font-display text-lg font-bold text-[#EDEAE1]">
                {project.title} — {project.subtitle}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#202823] text-[#EDEAE1] hover:bg-[#28332C] hover:text-[#A9B89B] border border-[#EDEAE1]/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-10">
          
          {/* 1. Project Hero Banner with Actual Screenshot */}
          <div className="rounded-xl overflow-hidden border border-[#EDEAE1]/10 bg-[#0d100e] relative group">
            <img
              src={project.image}
              alt={`${project.title} interface screenshot`}
              className="w-full max-h-[480px] object-contain sm:object-cover mx-auto"
            />
            <div className="p-4 bg-[#181E1A]/95 border-t border-[#EDEAE1]/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <span className="text-[#888D85]">
                VERIFIED ASSET: {project.image}
              </span>
              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#526C56] text-[#EDEAE1] font-semibold hover:bg-[#6E8F74] transition-colors"
                  >
                    <span>Live Prototype</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#202823] text-[#EDEAE1] border border-[#EDEAE1]/10 hover:border-[#A9B89B]/40 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>
              </div>
            </div>
          </div>

          {/* 2. Team vs Personal Contribution Notice (CRITICAL SECTION) */}
          <div className="p-5 rounded-xl bg-[#1c231e] border-l-4 border-[#A9B89B] space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-[#A9B89B] tracking-wider uppercase">
              <GitBranch className="w-4 h-4 text-[#FACC15]" />
              <span>TEAM CONTEXT & INDIVIDUAL ROLE ATTRIBUTION</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#111412] border border-[#EDEAE1]/5">
                <span className="text-[#888D85] uppercase block mb-1">My Direct Contribution:</span>
                <span className="text-[#EDEAE1] font-semibold font-sans text-sm block">
                  {project.myRole}
                </span>
              </div>
              <div className="p-3 rounded-lg bg-[#111412] border border-[#EDEAE1]/5">
                <span className="text-[#888D85] uppercase block mb-1">Teammates / Collaboration:</span>
                <span className="text-[#C4C0B5] font-sans text-xs block">
                  {project.teammateRole || project.teamContext}
                </span>
              </div>
            </div>
          </div>

          {/* 3. Problem Statement & Proposed Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#181E1A] border border-[#EDEAE1]/10">
              <div className="font-mono text-xs text-[#F97316] uppercase tracking-wider mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="font-sans text-sm text-[#C4C0B5] leading-relaxed font-light">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#181E1A] border border-[#EDEAE1]/10">
              <div className="font-mono text-xs text-[#10B981] uppercase tracking-wider mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Proposed Solution</span>
              </div>
              <p className="font-sans text-sm text-[#C4C0B5] leading-relaxed font-light">
                {project.solution}
              </p>
            </div>
          </div>

          {/* 4. Architecture & Technical Workflow */}
          <div className="p-6 rounded-xl bg-[#181E1A] border border-[#EDEAE1]/10 space-y-4">
            <div className="flex items-center justify-between border-b border-[#EDEAE1]/10 pb-3">
              <div className="font-mono text-xs text-[#A9B89B] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>System Architecture & Execution Pipeline</span>
              </div>
              <span className="font-mono text-[11px] text-[#888D85]">
                {project.architectureWorkflow.length} STAGES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {project.architectureWorkflow.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#202823]/70 border border-[#EDEAE1]/5 flex items-start gap-3 text-xs text-[#C4C0B5]"
                >
                  <span className="font-mono text-[#FACC15] font-bold shrink-0">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Personal Technical Responsibilities & Implementation Details */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-[#A9B89B] uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#FACC15]" />
              <span>Personal Implementation Details (Codebase Evidence)</span>
            </div>

            <div className="space-y-2.5">
              {project.personalContributions.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#181E1A] border border-[#EDEAE1]/5 flex items-start gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B] mt-2 shrink-0"></span>
                  <span className="text-sm text-[#EDEAE1] font-sans font-light leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Engineering Challenges Overcome */}
          <div className="p-6 rounded-xl bg-[#181E1A] border border-[#EDEAE1]/10 space-y-3">
            <div className="font-mono text-xs text-[#888D85] uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#38BDF8]" />
              <span>Key Engineering Challenges</span>
            </div>
            <ul className="space-y-2.5 text-xs text-[#C4C0B5] font-sans font-light">
              {project.engineeringChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-[#38BDF8] shrink-0 font-bold">»</span>
                  <span className="leading-relaxed">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 7. Honest Technical Limitations & Current Status */}
          <div className="p-5 rounded-xl bg-[#201815] border border-[#F97316]/30 space-y-3">
            <div className="font-mono text-xs text-[#F97316] uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Technical Limitations & Integrity Statement</span>
            </div>
            <ul className="space-y-2 text-xs text-[#EDEAE1]/90 font-mono">
              {project.limitationsAndStatus.map((limitation, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#F97316] shrink-0">•</span>
                  <span className="leading-relaxed">{limitation}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 8. Verified Technologies */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#888D85] uppercase tracking-wider">
              Verified Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[#202823] text-xs font-mono text-[#EDEAE1] border border-[#EDEAE1]/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#181E1A] border-t border-[#EDEAE1]/10 flex items-center justify-between font-mono text-xs">
          <span className="text-[#888D85]">
            GITHUB: {project.githubUrl}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#202823] text-[#EDEAE1] hover:bg-[#28332C] transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
