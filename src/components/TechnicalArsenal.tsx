import React, { useState } from 'react';
import { Terminal, Cpu, Database, Cloud, Code2, Link2, Sparkles, Filter } from 'lucide-react';
import { skillsData, skillCategories, SkillItem } from '../data/skills';

export const TechnicalArsenal: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.projectConnection && skill.projectConnection.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="stack" className="py-24 sm:py-32 relative bg-[#111412] border-t border-[#EDEAE1]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-[#EDEAE1]/10 pb-8">
          <div>
            <div className="font-mono text-xs text-[#A9B89B] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B]"></span>
              <span>SECTION // 04</span>
              <span>•</span>
              <span>INDEX OF CAPABILITIES</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#EDEAE1] font-normal">
              Technical Arsenal <span className="italic text-[#A9B89B]">& Ecosystem</span>
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#888D85] max-w-xl font-light">
              Grounded, verifiable engineering tooling mapped to actual projects and codebase implementations. Zero fabricated percentage bars.
            </p>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Filter by keyword (e.g. Python, SHAP, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-xl bg-[#181E1A] border border-[#EDEAE1]/10 text-xs font-mono text-[#EDEAE1] placeholder-[#888D85] focus:outline-none focus:border-[#A9B89B]/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#A9B89B] text-[#111412] font-semibold'
                  : 'bg-[#181E1A] text-[#888D85] hover:text-[#EDEAE1] border border-[#EDEAE1]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technical Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={`p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                skill.highlight
                  ? 'bg-[#181E1A] border-[#A9B89B]/30 hover:border-[#A9B89B]/60 shadow-lg shadow-black/20'
                  : 'bg-[#141815] border-[#EDEAE1]/5 hover:border-[#EDEAE1]/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-base font-semibold text-[#EDEAE1] flex items-center gap-2">
                    <span>{skill.name}</span>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]" title="Core Production Tool"></span>
                    )}
                  </h3>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#202823] text-[#A9B89B] border border-[#EDEAE1]/5">
                    {skill.category}
                  </span>
                </div>

                <p className="font-sans text-xs text-[#C4C0B5] font-light leading-relaxed mb-4">
                  {skill.context}
                </p>
              </div>

              {skill.projectConnection && (
                <div className="pt-3 border-t border-[#EDEAE1]/5 flex items-center gap-1.5 font-mono text-[10px] text-[#888D85]">
                  <span className="text-[#A9B89B]">USED IN:</span>
                  <span className="text-[#EDEAE1] truncate">{skill.projectConnection}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Arsenal Footer Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#181E1A]/60 border border-[#EDEAE1]/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#888D85]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>PHILOSOPHY: DEEP FUNDAMENTALS OVER TEMPORARY FADS</span>
          </div>
          <div>
            <span>STACK REVISION: 2026.02 // CIT CSE (AI & DS)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
