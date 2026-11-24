import React from 'react';
import { Users, Award, Shield, Compass, Sparkles, Trophy, Music, Languages, Flame } from 'lucide-react';
import { leadershipData, personalInterests } from '../data/leadership';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-24 sm:py-32 relative bg-[#0e110f] border-t border-[#EDEAE1]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#EDEAE1]/10 pb-8">
          <div>
            <div className="font-mono text-xs text-[#A9B89B] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B]"></span>
              <span>SECTION // 06</span>
              <span>•</span>
              <span>BEYOND CODE</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#EDEAE1] font-normal">
              Leadership <span className="italic text-[#A9B89B]">& Community Influence</span>
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#888D85] max-w-xl font-light">
              Fostering developer ecosystems, cultural exchange, and transparent governance across campus initiatives.
            </p>
          </div>

          <div className="font-mono text-xs text-[#888D85]">
            AMBASSADORSHIP & CLUB ROLES
          </div>
        </div>

        {/* Leadership Triptych (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {leadershipData.map((role, idx) => (
            <div
              key={role.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#181E1A] border border-[#EDEAE1]/10 hover:border-[#A9B89B]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#526C56]/20 to-transparent pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-[#202823] text-[#A9B89B] border border-[#EDEAE1]/5 uppercase tracking-wider">
                    {role.type}
                  </span>
                  <span className="font-mono text-xs text-[#888D85]">
                    {role.period}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#EDEAE1] mb-1 group-hover:text-[#A9B89B] transition-colors">
                  {role.role}
                </h3>

                <div className="font-mono text-xs text-[#C4C0B5] mb-3">
                  {role.organization}
                </div>

                <p className="font-editorial italic text-xs text-[#A9B89B] mb-4">
                  "{role.tagline}"
                </p>

                <p className="font-sans text-xs text-[#C4C0B5] font-light leading-relaxed mb-6">
                  {role.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#EDEAE1]/10 text-xs font-sans text-[#EDEAE1]/90">
                {role.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B] mt-1.5 shrink-0"></span>
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interests & Kinetic Pursuits Strip */}
        <div className="p-8 rounded-2xl bg-[#141815] border border-[#EDEAE1]/10">
          <div className="flex items-center gap-2 font-mono text-xs text-[#A9B89B] uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#FACC15]" />
            <span>PERSONAL PASSIONS & HUMAN EQUATIONS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInterests.map((interest, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#181E1A] border border-[#EDEAE1]/5 space-y-1.5">
                <div className="font-mono text-[10px] text-[#A9B89B] uppercase tracking-wider">
                  {interest.category}
                </div>
                <h4 className="font-display text-base font-semibold text-[#EDEAE1]">
                  {interest.name}
                </h4>
                <p className="font-sans text-xs text-[#888D85] font-light leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
