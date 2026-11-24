import React, { useState } from 'react';
import { Coffee, Radio, Cpu, Sparkles, Terminal, Activity, Disc3, Search } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dossier' | 'terminal'>('dossier');

  const personalityAttributes = [
    {
      key: 'ENERGY SOURCE',
      icon: Coffee,
      color: '#D66F43',
      summary: '2 AM inspiration, coffee, deadlines, interesting problems & clean builds',
      detail:
        'Late-night breakthroughs, curated shuffle playlists, caffeine in reasonable excess, and the singular, unmatched dopamine hit of watching a finicky build finally compile clean.',
      tag: 'RUNTIME_POWER',
    },
    {
      key: 'CURRENT DIMENSION',
      icon: Radio,
      color: '#E68962',
      summary: 'Somewhere between "it runs locally" and "please work on stage"',
      detail:
        'Perpetually balanced between local localhost perfection and the nerve-racking suspense of a live presentation where cloud dependencies decide to test your emotional resilience.',
      tag: 'COORDINATE_STATE',
    },
    {
      key: 'DEFAULT MODE',
      icon: Cpu,
      color: '#D66F43',
      summary: 'The Improviser',
      detail:
        'The Improviser. Calm when response latencies spike, delightfully stubborn with cryptic stack traces, and adept at finding non-obvious paths through stubborn constraints.',
      tag: 'OPERATING_SYSTEM',
    },
    {
      key: 'INSTALLED HOBBIES',
      icon: Disc3,
      color: '#A85B3D',
      summary: 'Badminton, music, full-stack apps, AI experiments & aggressive Googling',
      detail:
        'Competitive badminton reflexes on the court, endless music loops while programming, building full-stack products, testing modern agent frameworks, and high-velocity documentation archaeology.',
      tag: 'BACKGROUND_DAEMONS',
    },
    {
      key: 'SPECIAL FEATURE',
      icon: Sparkles,
      color: '#FACC15',
      summary: 'Prototyping questionable ideas and owning the architecture',
      detail:
        'Taking a vague, questionably ambitious idea at midnight, wrestling an API into submission, and then explaining the resultant architecture with complete composure as if it were the deliberate design all along.',
      tag: 'SUPERPOWER_EXEC',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#101112] border-t border-[#F2EEE8]/12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-[#F2EEE8]/12 pb-6">
          <div>
            <div className="font-mono text-xs text-[#D66F43] tracking-widest uppercase mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43]"></span>
              <span>SECTION // 02</span>
              <span>•</span>
              <span>THE PERSON BEHIND THE TERMINAL</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F2EEE8] font-bold">
              Digital Personality <span className="font-editorial italic font-normal text-[#D66F43]">& Dossier</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A9A29A]">
            SYS_PROFILE: GITIKA_OMPRAKASH.DOSSIER
          </div>
        </div>

        {/* Two-Column Grid: Original Voice Narrative vs Interactive Personality Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Voice */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6 text-[#C8C2BA] font-sans text-base sm:text-lg leading-relaxed font-light">
              <div className="p-3.5 rounded-xl bg-[#191817] border-l-2 border-[#D66F43] font-mono text-xs text-[#A9A29A] mb-4 flex items-center justify-between">
                <span>// AUTHENTIC_VOICE_STREAM</span>
                <span className="text-[#D66F43]">LIVE</span>
              </div>

              <p className="text-[#F2EEE8] text-xl sm:text-2xl font-editorial italic font-normal leading-snug">
                "I spend my time building things, breaking things, negotiating with stubborn APIs, experimenting with AI, and trying to turn ambitious ideas into working products."
              </p>

              <p className="font-serif text-[#C8C2BA]">
                I enjoy the intersection of AI, software engineering, thoughtful design, and real-world problem solving. Give me an interesting problem, a questionable deadline, and a terminal window, and I'll probably have something running before the coffee cools down.
              </p>

              <p className="text-[#A9A29A] font-sans text-sm">
                Based in Chennai, India. Pursuing my B.Tech in Artificial Intelligence & Data Science at Chennai Institute of Technology (2025–2029), currently holding a 9.09 CGPA.
              </p>
            </div>

            {/* Quick Stat Chips */}
            <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-[#F2EEE8]/10">
              <div className="p-4 rounded-xl bg-[#191817] border border-[#F2EEE8]/10">
                <div className="font-mono text-[10px] text-[#A9A29A] uppercase tracking-wider">Academics</div>
                <div className="font-display text-xl font-bold text-[#F2EEE8] mt-0.5">9.09 CGPA</div>
                <div className="text-[11px] text-[#D66F43] font-mono mt-0.5">CIT Chennai (2025–29)</div>
              </div>

              <div className="p-4 rounded-xl bg-[#191817] border border-[#F2EEE8]/10">
                <div className="font-mono text-[10px] text-[#A9A29A] uppercase tracking-wider">Campus Leadership</div>
                <div className="font-display text-xl font-bold text-[#F2EEE8] mt-0.5">3 Roles</div>
                <div className="text-[11px] text-[#D66F43] font-mono mt-0.5">GSA '26, Deutros, Asymm</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Personality Dossier */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#191817] border border-[#F2EEE8]/12 overflow-hidden shadow-2xl">
              
              {/* Dossier Terminal Header */}
              <div className="px-5 py-3.5 bg-[#242220] border-b border-[#F2EEE8]/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FACC15]/80"></div>
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/80"></div>
                  <span className="font-mono text-xs text-[#F2EEE8] ml-2 font-medium">
                    gitika_personality.v2.cfg
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-[#101112] p-1 rounded-lg border border-[#F2EEE8]/5 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('dossier')}
                    className={`px-3 py-1 rounded transition-colors ${
                      activeTab === 'dossier'
                        ? 'bg-[#2F2B28] text-[#F2EEE8] font-semibold'
                        : 'text-[#A9A29A] hover:text-[#F2EEE8]'
                    }`}
                  >
                    DOSSIER
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-3 py-1 rounded transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-[#2F2B28] text-[#F2EEE8] font-semibold'
                        : 'text-[#A9A29A] hover:text-[#F2EEE8]'
                    }`}
                  >
                    SYS_LOGS
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'dossier' ? (
                <div className="p-6 space-y-3.5">
                  <div className="font-mono text-xs text-[#A9A29A] mb-1 flex items-center justify-between">
                    <span>// PERSONALITY SPECIFICATION METRICS</span>
                    <span className="text-[#D66F43]">INTERACTIVE ATTRIBUTES</span>
                  </div>

                  <div className="space-y-3">
                    {personalityAttributes.map((attr) => {
                      const Icon = attr.icon;
                      return (
                        <div
                          key={attr.key}
                          className="group p-4 rounded-xl bg-[#242220]/50 hover:bg-[#242220] border border-[#F2EEE8]/8 hover:border-[#D66F43]/40 transition-all duration-200"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                                style={{ backgroundColor: `${attr.color}20`, color: attr.color }}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <span className="font-mono text-[10px] tracking-wider text-[#A9A29A] uppercase block">
                                  {attr.key}
                                </span>
                                <h3 className="font-display text-sm font-bold text-[#F2EEE8] group-hover:text-[#D66F43] transition-colors">
                                  {attr.summary}
                                </h3>
                              </div>
                            </div>

                            <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#101112] text-[#A9A29A] border border-[#F2EEE8]/8 shrink-0">
                              {attr.tag}
                            </span>
                          </div>

                          <p className="mt-3 text-xs text-[#C8C2BA] font-serif pl-11 border-l-2 border-[#D66F43]/40 leading-relaxed font-light">
                            {attr.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footnote */}
                  <div className="p-3 rounded-lg bg-[#101112]/50 border border-[#F2EEE8]/8 font-mono text-[11px] text-[#A9A29A] flex items-center justify-between">
                    <span>* GUARANTEE: Zero corporate resume cliches detected.</span>
                    <span className="text-[#D66F43]">STATE: 100% ORGANIC</span>
                  </div>
                </div>
              ) : (
                /* Terminal Logs View */
                <div className="p-6 font-mono text-xs space-y-3 bg-[#101112] text-[#C8C2BA]">
                  <div className="text-[#A9A29A]">// LIVE TELEMETRY LOGS</div>
                  <div>
                    <span className="text-[#D66F43]">[02:14:08 IST]</span>{' '}
                    <span className="text-[#FACC15]">ENERGY:</span> Late-night playlist synced. Terminal coffee index: 94%.
                  </div>
                  <div>
                    <span className="text-[#D66F43]">[02:14:09 IST]</span>{' '}
                    <span className="text-[#10B981]">SYSTEM:</span> FutureForge 33 tests verified. Min-cut attack path severed.
                  </div>
                  <div>
                    <span className="text-[#D66F43]">[02:18:22 IST]</span>{' '}
                    <span className="text-[#38BDF8]">INFERENCE:</span> CatchPhish Tier-1 fast path evaluated in 79ms.
                  </div>
                  <div>
                    <span className="text-[#D66F43]">[02:22:45 IST]</span>{' '}
                    <span className="text-[#E68962]">MODE:</span> The Improviser active. Handling mysterious API response payload...
                  </div>
                  <div>
                    <span className="text-[#D66F43]">[02:25:01 IST]</span>{' '}
                    <span className="text-[#F2EEE8]">COMMIT:</span> "It works locally. Deploying with confidence."
                  </div>
                  <div className="pt-4 text-[#A9A29A] flex items-center gap-2">
                    <span className="animate-pulse">gitika@cit-station:~$</span>
                    <span className="w-2 h-4 bg-[#D66F43] animate-pulse"></span>
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
