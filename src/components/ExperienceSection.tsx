import React from 'react';
import { GraduationCap, Briefcase, Building, CheckCircle2 } from 'lucide-react';
import { educationData, experienceData } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="journey" className="py-24 sm:py-32 relative bg-[#101112] border-t border-[#F2EEE8]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#F2EEE8]/12 pb-8">
          <div>
            <div className="font-mono text-xs text-[#D66F43] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43]"></span>
              <span>SECTION // 05</span>
              <span>•</span>
              <span>TRAJECTORY & FOUNDATIONS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F2EEE8] font-bold">
              Education <span className="font-editorial italic font-normal text-[#D66F43]">& Practical Experience</span>
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#A9A29A] max-w-xl font-light">
              Rigorous undergraduate foundations in Artificial Intelligence & Data Science, paired with hands-on web and ML internships.
            </p>
          </div>

          <div className="font-mono text-xs text-[#A9A29A]">
            ACADEMIC_CGPA: 9.09 / 10.0
          </div>
        </div>

        {/* Two-Column Grid: Education on Left, Experience on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D66F43] uppercase tracking-wider mb-2 font-semibold">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#191817] border border-[#F2EEE8]/12 shadow-xl relative overflow-hidden group"
              >
                {/* Subtle Terracotta Accent Flare */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D66F43]/10 rounded-bl-full pointer-events-none"></div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#242220] text-[#D66F43] border border-[#F2EEE8]/8 font-semibold">
                    {edu.period}
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#D66F43]/20 text-[#F2EEE8] font-bold border border-[#D66F43]/40">
                    {edu.score}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#F2EEE8] mb-1">
                  {edu.degree}
                </h3>

                <p className="font-sans text-sm text-[#D66F43] mb-5 flex items-center gap-1.5 font-medium">
                  <Building className="w-3.5 h-3.5" />
                  <span>{edu.institution}</span>
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#F2EEE8]/10">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#C8C2BA] font-serif font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43] mt-1.5 shrink-0"></span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Work & Internship Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D66F43] uppercase tracking-wider mb-2 font-semibold">
              <Briefcase className="w-4 h-4" />
              <span>PRACTICAL INTERNSHIPS</span>
            </div>

            <div className="space-y-5">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#191817] border border-[#F2EEE8]/10 hover:border-[#D66F43]/40 transition-all duration-200"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#242220] text-[#C8C2BA] border border-[#F2EEE8]/5">
                      {exp.period}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#D66F43]/15 text-[#D66F43] border border-[#D66F43]/30 font-semibold">
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#F2EEE8] mb-0.5">
                    {exp.role}
                  </h3>

                  <div className="font-mono text-xs text-[#D66F43] mb-3">
                    {exp.organization}
                  </div>

                  <p className="font-serif text-xs sm:text-sm text-[#C8C2BA] font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#F2EEE8]/8">
                    {exp.keyWork.map((work, wIdx) => (
                      <div key={wIdx} className="flex items-start gap-2 text-xs text-[#F2EEE8]/90 font-sans font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D66F43] mt-0.5 shrink-0" />
                        <span>{work}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
