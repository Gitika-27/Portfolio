import React, { useState } from 'react';
import { Terminal, Cpu, Database, Cloud, Code2, Link2, Sparkles, Filter, Search } from 'lucide-react';
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
    <section id="stack" className="py-24 sm:py-32 relative bg-[#101112] border-t border-[#F2EEE8]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 border-b border-[#F2EEE8]/12 pb-8">
          <div>
            <div className="font-mono text-xs text-[#D66F43] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43]"></span>
              <span>SECTION // 04</span>
              <span>•</span>
              <span>INDEX OF CAPABILITIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F2EEE8] font-bold">
              Technical Arsenal <span className="font-editorial italic font-normal text-[#D66F43]">& Ecosystem</span>
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#A9A29A] max-w-xl font-light">
              Grounded, verifiable engineering tooling mapped to actual projects and codebase implementations. Zero fabricated percentage bars.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools (e.g. Python, Docker, CrewAI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-72 px-4 py-2.5 rounded-xl bg-[#191817] border border-[#F2EEE8]/12 text-xs font-mono text-[#F2EEE8] placeholder-[#A9A29A] focus:outline-none focus:border-[#D66F43]/60 transition-colors"
              />
              <Search className="w-3.5 h-3.5 text-[#A9A29A] absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#D66F43] text-[#101112] font-bold shadow-md shadow-[#D66F43]/20'
                  : 'bg-[#191817] text-[#A9A29A] hover:text-[#F2EEE8] border border-[#F2EEE8]/8'
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
              className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                skill.highlight
                  ? 'bg-[#191817] border-[#D66F43]/30 hover:border-[#D66F43]/60 shadow-lg shadow-black/30'
                  : 'bg-[#141516] border-[#F2EEE8]/8 hover:border-[#F2EEE8]/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-base font-bold text-[#F2EEE8] flex items-center gap-2">
                    <span>{skill.name}</span>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43]" title="Core Production Tool"></span>
                    )}
                  </h3>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#242220] text-[#D66F43] border border-[#F2EEE8]/8 font-medium">
                    {skill.category}
                  </span>
                </div>

                <p className="font-serif text-xs text-[#C8C2BA] font-light leading-relaxed mb-4">
                  {skill.context}
                </p>
              </div>

              {skill.projectConnection && (
                <div className="pt-3 border-t border-[#F2EEE8]/8 flex items-center gap-1.5 font-mono text-[10px] text-[#A9A29A]">
                  <span className="text-[#D66F43] font-semibold">USED IN:</span>
                  <span className="text-[#F2EEE8] truncate">{skill.projectConnection}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Arsenal Footer */}
        <div className="mt-12 p-4 rounded-xl bg-[#191817]/60 border border-[#F2EEE8]/8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A9A29A]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D66F43]"></span>
            <span>GROUNDED CAPABILITIES: CODEBASE TESTED & DEPLOYED</span>
          </div>
          <div>
            <span>REVISION: 2026 // CHENNAI INSTITUTE OF TECHNOLOGY</span>
          </div>
        </div>

      </div>
    </section>
  );
};
