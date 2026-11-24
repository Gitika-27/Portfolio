import React from 'react';
import { ArrowDown, Github, Linkedin, Terminal, Sparkles, Compass } from 'lucide-react';
import { AbstractIdentity } from './AbstractIdentity';
import { VanteRibbon } from './VanteRibbon';

interface HeroProps {
  onSelectProject?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProject }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-grid-subtle"
    >
      {/* ===== LARGE G PARTICLE ANIMATION — BACKGROUND IDENTITY ELEMENT ===== */}
      <div
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.18 }}
      >
        <div className="w-[70vw] h-[70vh] max-w-[900px] max-h-[900px] pointer-events-auto">
          <AbstractIdentity className="w-full h-full" interactive={true} />
        </div>
      </div>

      {/* Editorial Watermark Background (Axon / Pink Rider inspiration) */}
      <div className="absolute top-20 right-4 sm:right-12 pointer-events-none select-none opacity-[0.03] leading-none font-display font-black text-[18vw] text-right z-0">
        AI·SYSTEMS
        <br />
        PORTFOLIO
      </div>

      {/* Top Technical Metadata Band */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 py-2.5 border-b border-[#F2EEE8]/12 text-xs font-mono text-[#A9A29A]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D66F43] animate-ping"></span>
            <span className="text-[#F2EEE8] font-semibold tracking-wider">GITIKA OMPRAKASH</span>
            <span className="text-[#A9A29A]">// AI ENGINEER & FULL-STACK</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>CHENNAI INSTITUTE OF TECHNOLOGY (2025–2029)</span>
            <span className="text-[#F2EEE8]">CGPA: 9.09 / 10.0</span>
          </div>
          <div className="flex items-center gap-2 text-[#D66F43]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43]"></span>
            <span className="tracking-wide">STATUS: EXPERIMENTING & BUILDING</span>
          </div>
        </div>
      </div>

      {/* Center Cinematic Composition: Oversized Name & Vante 3D Ribbon */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 my-auto py-8 sm:py-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Dominant Oversized Name Typography */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191817] border border-[#F2EEE8]/12 text-xs font-mono text-[#D66F43] w-fit mb-6">
            <Terminal className="w-3.5 h-3.5" />
            <span>PORTFOLIO ARCHIVE // 2026</span>
          </div>

          {/* DOMINANT OVERSIZED NAME */}
          <div className="mb-6">
            <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#F2EEE8] leading-[0.92]">
              Gitika
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2EEE8] via-[#F2EEE8] to-[#D66F43]">
                Omprakash
              </span>
            </h1>
            <div className="h-1.5 w-24 bg-[#D66F43] mt-4 rounded-full"></div>
          </div>

          {/* Expressive Editorial Subtitle in Lora Serif */}
          <p className="font-editorial italic text-xl sm:text-2xl text-[#C8C2BA] max-w-xl leading-relaxed mb-4 font-normal">
            "Exploring the space between intelligent systems, thoughtful engineering, and ideas that refuse to stay ideas."
          </p>

          <p className="font-sans text-sm sm:text-base text-[#A9A29A] max-w-lg leading-relaxed mb-8 font-light">
            AI & Data Science undergraduate at Chennai Institute of Technology. Building evidence-driven cyber labs, explainable ML classifiers, and interactive algorithm engines.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-1 mb-8">
            <a
              href="#work"
              className="px-6 py-3.5 rounded-full bg-[#D66F43] text-[#101112] font-display font-bold text-sm hover:bg-[#E68962] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#D66F43]/20 group"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#about"
              className="px-6 py-3.5 rounded-full bg-[#191817] text-[#F2EEE8] font-display text-sm border border-[#F2EEE8]/15 hover:border-[#D66F43]/50 hover:bg-[#242220] transition-all duration-200 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D66F43]" />
              <span>Personality Dossier</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Gitika-27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full bg-[#191817] text-[#C8C2BA] hover:text-[#F2EEE8] border border-[#F2EEE8]/12 hover:border-[#D66F43]/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/gitika-omprakash/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full bg-[#191817] text-[#C8C2BA] hover:text-[#F2EEE8] border border-[#F2EEE8]/12 hover:border-[#D66F43]/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: VANTE 3D RIBBON ANIMATION */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          <div className="w-full ribbon-container rounded-2xl bg-[#191817]/40 border border-[#F2EEE8]/10 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            {/* The 3D Ribbon showcasing CatchPhish, TrafficSense, FutureForge, WealthAvatar, Algorithm Lab */}
            <VanteRibbon onSelectProject={onSelectProject} />
          </div>
        </div>

      </div>

      {/* Bottom Floating Telemetry & Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 relative z-10 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F2EEE8]/12 pt-4">
          <div className="flex items-center gap-6 font-mono text-xs text-[#A9A29A]">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#D66F43]" />
              <span>LAT 13.0827° N, LON 80.2707° E</span>
            </div>
            <div className="hidden md:block">
              <span>BASE: CHENNAI, TAMIL NADU, INDIA</span>
            </div>
          </div>

          {/* Understated scroll indicator */}
          <a
            href="#work"
            className="flex items-center gap-2 font-mono text-xs text-[#D66F43] hover:text-[#F2EEE8] transition-colors"
          >
            <span>SCROLL TO WITNESS ARCHIVE</span>
            <div className="w-5 h-8 rounded-full border border-[#F2EEE8]/20 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-[#D66F43] animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
