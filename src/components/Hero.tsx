import React from 'react';
import { ArrowDown, Github, Linkedin, Terminal, Sparkles, Compass } from 'lucide-react';
import { AbstractIdentity } from './AbstractIdentity';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-grid-subtle"
    >
      {/* Editorial Watermark Background Text (Axon/Pink Rider aesthetic) */}
      <div className="absolute top-24 right-4 sm:right-12 pointer-events-none select-none opacity-[0.035] leading-none font-display font-extrabold text-[18vw] text-right z-0">
        AI·DATA
        <br />
        SYSTEMS
      </div>

      {/* Top Technical Metadata Band */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 py-2 border-b border-[#EDEAE1]/10 text-xs font-mono text-[#888D85]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></span>
            <span className="text-[#EDEAE1] font-medium">GITIKA OMPRAKASH</span>
            <span className="text-[#888D85]">// B.TECH AI & DATA SCIENCE</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>CHENNAI INSTITUTE OF TECHNOLOGY (2025–2029)</span>
            <span>CGPA: 9.09/10</span>
          </div>
          <div className="flex items-center gap-3 text-[#A9B89B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B]"></span>
            <span>STATUS: BUILDING & EXPERIMENTING</span>
          </div>
        </div>
      </div>

      {/* Center Experimental Editorial Layout */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 my-auto py-8 sm:py-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Expressive Typography (Oversized Headline & Identity) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202823] border border-[#526C56]/30 text-xs font-mono text-[#A9B89B] w-fit mb-6">
            <Terminal className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>PORTFOLIO MANIFESTO // 01</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal tracking-tight text-[#EDEAE1] leading-[1.04] mb-6">
            Not just code.
            <br />
            <span className="italic font-light text-[#A9B89B]">A way of thinking.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#C4C0B5] max-w-xl leading-relaxed mb-8 font-light">
            Exploring the space between intelligent systems, thoughtful engineering, and ideas that refuse to stay ideas. Crafting evidence-driven cyber labs, explainable ML models, and interactive tools from Chennai, India.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-[#EDEAE1] text-[#111412] font-display font-semibold text-sm hover:bg-[#A9B89B] transition-all duration-200 flex items-center gap-2 shadow-lg shadow-white/5 group"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#about"
              className="px-6 py-3 rounded-full bg-[#202823] text-[#EDEAE1] font-display text-sm border border-[#EDEAE1]/15 hover:border-[#A9B89B]/50 hover:bg-[#28332C] transition-all duration-200 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FACC15]" />
              <span>A Little About Me</span>
            </a>

            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/Gitika-27"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full bg-[#181E1A] text-[#C4C0B5] hover:text-[#EDEAE1] border border-[#EDEAE1]/10 hover:border-[#A9B89B]/40 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/gitika-omprakash"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full bg-[#181E1A] text-[#C4C0B5] hover:text-[#EDEAE1] border border-[#EDEAE1]/10 hover:border-[#A9B89B]/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Abstract Generative Identity Canvas (NO face photography) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full max-w-md aspect-square rounded-2xl bg-[#181E1A]/80 border border-[#EDEAE1]/10 backdrop-blur-md p-3 relative shadow-2xl shadow-black/40 group">
            {/* The Generative G Constellation */}
            <AbstractIdentity className="w-full h-full rounded-xl overflow-hidden bg-[#111412]" />

            {/* Corner Precision Markers (Axon inspiration) */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#A9B89B]/60 pointer-events-none"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#A9B89B]/60 pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#A9B89B]/60 pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#A9B89B]/60 pointer-events-none"></div>
          </div>

          <div className="mt-3 font-mono text-[11px] text-[#888D85] text-center flex items-center gap-2">
            <span>ABSTRACT IDENTITY MATRIX</span>
            <span>•</span>
            <span className="text-[#A9B89B]">CRYPTOGRAPHIC SIGNATURE</span>
          </div>
        </div>

      </div>

      {/* Bottom Floating Telemetry & Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 relative z-10 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#EDEAE1]/10 pt-4">
          <div className="flex items-center gap-6 font-mono text-xs text-[#888D85]">
            <div className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#526C56]" />
              <span>LAT 13.0827° N, LON 80.2707° E</span>
            </div>
            <div className="hidden md:block">
              <span>SPECIALTY: AI & CYBER ARCHITECTURE</span>
            </div>
          </div>

          {/* Understated scroll indicator */}
          <a
            href="#work"
            className="flex items-center gap-2 font-mono text-xs text-[#A9B89B] hover:text-[#EDEAE1] transition-colors"
          >
            <span>SCROLL TO EXPLORE SELECTED WORK</span>
            <div className="w-5 h-8 rounded-full border border-[#EDEAE1]/20 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-[#FACC15] animate-bounce"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
