import React, { useState } from 'react';
import { Coffee, Radio, Cpu, Sparkles, Terminal, Activity, Layers, Disc3 } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dossier' | 'terminal' | 'metrics'>('dossier');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const personalityAttributes = [
    {
      key: 'ENERGY SOURCE',
      icon: Coffee,
      color: '#FACC15',
      summary: 'Late-night inspiration, music on shuffle, coffee, interesting problems',
      detail:
        'Late-night inspiration, music on shuffle, coffee, interesting problem statements and the unmatched satisfaction of a successful build.',
      tag: 'RUNTIME_POWER',
    },
    {
      key: 'CURRENT DIMENSION',
      icon: Radio,
      color: '#A9B89B',
      summary: 'Between "It works on my machine" and "Please let it work on stage"',
      detail:
        'Somewhere between "It works on my machine" and "Please let it work on stage."',
      tag: 'COORDINATE_STATE',
    },
    {
      key: 'DEFAULT MODE',
      icon: Cpu,
      color: '#F97316',
      summary: 'The Improviser',
      detail:
        'The Improviser. Calm under high latency, resourceful with stubborn bugs, and persistently agile.',
      tag: 'OPERATING_SYSTEM',
    },
    {
      key: 'HOBBIES INSTALLED',
      icon: Disc3,
      color: '#38BDF8',
      summary: 'Badminton, music, full-stack, AI, Stack Overflow archaeology',
      detail:
        'Badminton, music, building full-stack applications, experimenting with AI, Stack Overflow archaeology and overthinking architecture decisions.',
      tag: 'BACKGROUND_DAEMONS',
    },
    {
      key: 'SPECIAL ABILITY',
      icon: Sparkles,
      color: '#10B981',
      summary: 'Rapid prototyping & explaining architecture like it was always the plan',
      detail:
        'Turning a vague idea into a working prototype, figuring out why it works, and then explaining the architecture as if everything went according to plan.',
      tag: 'SUPERPOWER_EXEC',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#111412] border-t border-[#EDEAE1]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-[#EDEAE1]/10 pb-6">
          <div>
            <div className="font-mono text-xs text-[#A9B89B] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B]"></span>
              <span>SECTION // 02</span>
              <span>•</span>
              <span>THE PERSON BEHIND THE TERMINAL</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#EDEAE1] font-normal">
              Digital Personality <span className="italic text-[#A9B89B]">& Dossier</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#888D85]">
            SYSTEM_ID: GITIKA_OMPRAKASH.DOSSIER
          </div>
        </div>

        {/* Two-Column Grid: Editorial Narrative vs Interactive Personality Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Editorial Narrative & Voice */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6 text-[#C4C0B5] font-sans text-base sm:text-lg leading-relaxed font-light">
              <div className="p-4 rounded-xl bg-[#181E1A] border-l-2 border-[#A9B89B] font-mono text-xs text-[#888D85] mb-4">
                // AUTHENTIC_VOICE_STREAM // NO_AI_FLUFF
              </div>

              <p className="text-[#EDEAE1] text-xl sm:text-2xl font-editorial italic font-normal leading-snug">
                "I'm Gitika. An AI & Data Science undergraduate who enjoys turning ambitious ideas into functioning software, occasionally negotiating with APIs that clearly have other plans."
              </p>

              <p>
                My days usually involve building intelligent systems, experimenting with new technologies, untangling questionable code and making ambitious project ideas work against increasingly suspicious deadlines.
              </p>

              <p>
                I like the intersection of AI, software engineering and product thinking. Give me an interesting problem, a questionable amount of time and a terminal window, and I'll probably have something running by the end of it.
              </p>
            </div>

            {/* Quick At-A-Glance Metric Chips */}
            <div className="grid grid-cols-2 gap-3 mt-10 pt-8 border-t border-[#EDEAE1]/10">
              <div className="p-3.5 rounded-xl bg-[#181E1A] border border-[#EDEAE1]/5">
                <div className="font-mono text-[10px] text-[#888D85] uppercase">Academics</div>
                <div className="font-display text-xl font-bold text-[#EDEAE1] mt-0.5">9.09 CGPA</div>
                <div className="text-[11px] text-[#A9B89B] font-mono mt-0.5">CIT Chennai (2025–29)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#181E1A] border border-[#EDEAE1]/5">
                <div className="font-mono text-[10px] text-[#888D85] uppercase">Campus Roles</div>
                <div className="font-display text-xl font-bold text-[#EDEAE1] mt-0.5">3 Leadership</div>
                <div className="text-[11px] text-[#A9B89B] font-mono mt-0.5">GSA '26, Deutros, Asymm</div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Personality File / Dossier */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#181E1A] border border-[#EDEAE1]/10 overflow-hidden shadow-2xl">
              
              {/* Dossier Terminal Header */}
              <div className="px-5 py-3.5 bg-[#202823] border-b border-[#EDEAE1]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FACC15]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                  <span className="font-mono text-xs text-[#EDEAE1] ml-2">
                    personality_dossier.v2.cfg
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-[#111412] p-1 rounded-lg border border-[#EDEAE1]/5 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('dossier')}
                    className={`px-3 py-1 rounded transition-colors ${
                      activeTab === 'dossier'
                        ? 'bg-[#28332C] text-[#EDEAE1] font-semibold'
                        : 'text-[#888D85] hover:text-[#EDEAE1]'
                    }`}
                  >
                    DOSSIER
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-3 py-1 rounded transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-[#28332C] text-[#EDEAE1] font-semibold'
                        : 'text-[#888D85] hover:text-[#EDEAE1]'
                    }`}
                  >
                    SYS_LOGS
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'dossier' ? (
                <div className="p-6 space-y-4">
                  <div className="font-mono text-xs text-[#888D85] mb-2 flex items-center justify-between">
                    <span>// PERSONALITY SPECIFICATION (INTERACTIVE ATTRIBUTES)</span>
                    <span className="text-[#A9B89B]">HOVER / CLICK TO EXPAND</span>
                  </div>

                  <div className="space-y-3">
                    {personalityAttributes.map((attr, idx) => {
                      const Icon = attr.icon;
                      return (
                        <div
                          key={attr.key}
                          className="group p-4 rounded-xl bg-[#202823]/60 hover:bg-[#202823] border border-[#EDEAE1]/5 hover:border-[#A9B89B]/30 transition-all duration-200"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                style={{ backgroundColor: `${attr.color}15`, color: attr.color }}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="font-mono text-[10px] tracking-wider text-[#888D85] uppercase block">
                                  {attr.key}
                                </span>
                                <h3 className="font-display text-sm font-semibold text-[#EDEAE1] group-hover:text-[#A9B89B] transition-colors">
                                  {attr.summary}
                                </h3>
                              </div>
                            </div>

                            <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#111412] text-[#888D85] border border-[#EDEAE1]/5 shrink-0">
                              {attr.tag}
                            </span>
                          </div>

                          {/* Expanded nuanced description */}
                          <p className="mt-3 text-xs text-[#C4C0B5] font-sans pl-11 border-l-2 border-[#526C56]/40 leading-relaxed font-light">
                            {attr.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footnote humor */}
                  <div className="p-3 rounded-lg bg-[#111412]/50 border border-[#EDEAE1]/5 font-mono text-[11px] text-[#888D85] flex items-center justify-between">
                    <span>* GUARANTEE: Zero generic buzzwords loaded into memory.</span>
                    <span className="text-[#10B981]">STATUS: 100% ORGANIC</span>
                  </div>
                </div>
              ) : (
                /* Terminal Logs View */
                <div className="p-6 font-mono text-xs space-y-3 bg-[#111412] text-[#C4C0B5]">
                  <div className="text-[#888D85]">// RECENT RUNTIME ACTIVITY STREAM</div>
                  <div>
                    <span className="text-[#A9B89B]">[2026-11-23 23:42:10]</span>{' '}
                    <span className="text-[#FACC15]">INFO:</span> Initializing FutureForge min-cut ILP optimizer...
                  </div>
                  <div>
                    <span className="text-[#A9B89B]">[2026-11-23 23:42:11]</span>{' '}
                    <span className="text-[#10B981]">SUCCESS:</span> 33 unit & integration tests passed. Modeled attack paths severed.
                  </div>
                  <div>
                    <span className="text-[#A9B89B]">[2026-11-24 00:15:02]</span>{' '}
                    <span className="text-[#F97316]">NOTICE:</span> CatchPhish Tier-1 latency verified at 82ms. Safe verdict returned.
                  </div>
                  <div>
                    <span className="text-[#A9B89B]">[2026-11-24 01:04:19]</span>{' '}
                    <span className="text-[#38BDF8]">ROUTINE:</span> Coffee level dropped below 15%. Executing refill subroutine.
                  </div>
                  <div>
                    <span className="text-[#A9B89B]">[2026-11-24 01:04:22]</span>{' '}
                    <span className="text-[#EDEAE1]">DEBUG:</span> "It works on my machine" flag raised. Pushing to git anyway.
                  </div>
                  <div className="pt-4 text-[#888D85] flex items-center gap-2">
                    <span className="animate-pulse">gitika@thinkpad:~$</span>
                    <span className="w-2 h-4 bg-[#EDEAE1] animate-pulse"></span>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
