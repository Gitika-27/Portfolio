import React from 'react';
import { Users, Award, Shield, Sparkles } from 'lucide-react';
import { leadershipData, personalInterests } from '../data/leadership';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-24 sm:py-32 relative bg-[#0c0d0e] border-t border-[#F2EEE8]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#F2EEE8]/12 pb-8">
          <div>
            <div className="font-mono text-xs text-[#D66F43] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43]"></span>
              <span>SECTION // 06</span>
              <span>•</span>
              <span>BEYOND CODE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F2EEE8] font-bold">
              Leadership <span className="font-editorial italic font-normal text-[#D66F43]">& Community Influence</span>
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#A9A29A] max-w-xl font-light">
              Fostering developer ecosystems, cultural exchange, and transparent governance across campus initiatives.
            </p>
          </div>

          <div className="font-mono text-xs text-[#A9A29A]">
            AMBASSADORSHIP & CLUB ROLES
          </div>
        </div>

        {/* Leadership Triptych (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {leadershipData.map((role) => (
            <div
              key={role.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#191817] border border-[#F2EEE8]/12 hover:border-[#D66F43]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D66F43]/15 to-transparent pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-[#242220] text-[#D66F43] border border-[#F2EEE8]/5 uppercase tracking-wider font-semibold">
                    {role.type}
                  </span>
                  <span className="font-mono text-xs text-[#A9A29A]">
                    {role.period}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#F2EEE8] mb-1 group-hover:text-[#D66F43] transition-colors">
                  {role.role}
                </h3>

                <div className="font-mono text-xs text-[#C8C2BA] mb-3">
                  {role.organization}
                </div>

                <p className="font-editorial italic text-xs text-[#D66F43] mb-4">
                  "{role.tagline}"
                </p>

                <p className="font-serif text-xs text-[#C8C2BA] font-light leading-relaxed mb-6">
                  {role.description}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#F2EEE8]/10 text-xs font-sans text-[#F2EEE8]/90">
                {role.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43] mt-1.5 shrink-0"></span>
                    <span className="font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interests Strip */}
        <div className="p-8 rounded-2xl bg-[#141516] border border-[#F2EEE8]/12">
          <div className="flex items-center gap-2 font-mono text-xs text-[#D66F43] uppercase tracking-wider mb-6 font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>PERSONAL PASSIONS & HUMAN EQUATIONS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInterests.map((interest, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#191817] border border-[#F2EEE8]/8 space-y-1.5">
                <div className="font-mono text-[10px] text-[#D66F43] uppercase tracking-wider font-semibold">
                  {interest.category}
                </div>
                <h4 className="font-display text-base font-bold text-[#F2EEE8]">
                  {interest.name}
                </h4>
                <p className="font-serif text-xs text-[#A9A29A] font-light leading-relaxed">
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
