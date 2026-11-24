import React from 'react';
import { GraduationCap, Briefcase, Calendar, Award, CheckCircle2, Building } from 'lucide-react';
import { educationData, experienceData } from '../data/experience';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="journey" className="py-24 sm:py-32 relative bg-[#111412] border-t border-[#EDEAE1]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#EDEAE1]/10 pb-8">
          <div>
            <div className="font-mono text-xs text-[#A9B89B] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B]"></span>
              <span>SECTION // 05</span>
              <span>•</span>
              <span>TRAJECTORY & FOUNDATIONS</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#EDEAE1] font-normal">
              Education <span className="italic text-[#A9B89B]">& Practical Experience</span>
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#888D85] max-w-xl font-light">
              Rigorous undergraduate foundations in Artificial Intelligence & Data Science, paired with hands-on web and ML internships.
            </p>
          </div>

          <div className="font-mono text-xs text-[#888D85]">
            ACADEMIC_CGPA: 9.09 / 10.0
          </div>
        </div>

        {/* Two-Column Grid: Education on Left, Experience on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#A9B89B] uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4 text-[#FACC15]" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#181E1A] border border-[#EDEAE1]/10 shadow-xl relative overflow-hidden group"
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#526C56]/10 rounded-bl-full pointer-events-none"></div>

                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#202823] text-[#A9B89B] border border-[#EDEAE1]/5">
                    {edu.period}
                  </span>
                  <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#10B981]/15 text-[#10B981] font-semibold border border-[#10B981]/20">
                    {edu.score}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#EDEAE1] mb-1">
                  {edu.degree}
                </h3>

                <p className="font-sans text-sm text-[#A9B89B] mb-5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5" />
                  <span>{edu.institution}</span>
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#EDEAE1]/10">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#C4C0B5] font-sans font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B] mt-1.5 shrink-0"></span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Work & Internship Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#A9B89B] uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4 text-[#F97316]" />
              <span>PRACTICAL INTERNSHIPS</span>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#181E1A] border border-[#EDEAE1]/10 hover:border-[#A9B89B]/30 transition-all duration-200"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#202823] text-[#C4C0B5] border border-[#EDEAE1]/5">
                      {exp.period}
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20">
                      {exp.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#EDEAE1] mb-1">
                    {exp.role}
                  </h3>

                  <div className="font-mono text-xs text-[#A9B89B] mb-4">
                    {exp.organization}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#C4C0B5] font-light leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#EDEAE1]/10">
                    {exp.keyWork.map((work, wIdx) => (
                      <div key={wIdx} className="flex items-start gap-2 text-xs text-[#EDEAE1]/90 font-sans font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] mt-0.5 shrink-0" />
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
