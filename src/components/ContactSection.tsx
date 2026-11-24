import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, MapPin, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'gitikaomprakash@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative bg-[#111412] border-t border-[#EDEAE1]/10 overflow-hidden">
      
      {/* Background Accent Gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-radial from-[#526C56]/15 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Editorial Contact Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-[#A9B89B] tracking-widest uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A9B89B]"></span>
            <span>SECTION // 07</span>
            <span>•</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-[#EDEAE1] font-normal leading-[1.08] mb-6">
            Have an interesting problem?
            <br />
            <span className="italic text-[#A9B89B]">Let's make something happen.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#C4C0B5] font-light leading-relaxed">
            Whether you are discussing intelligent systems, cyber attack-path architectures, or ambitious project collaborations, I'm always curious to connect.
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card with Copy Action */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#181E1A] border border-[#EDEAE1]/10 flex flex-col justify-between group hover:border-[#A9B89B]/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#202823] flex items-center justify-center text-[#A9B89B] mb-5 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-[#888D85] uppercase tracking-wider block mb-1">
                Direct Inquiry
              </span>
              <h3 className="font-display text-lg font-bold text-[#EDEAE1] mb-2 truncate">
                {email}
              </h3>
              <p className="font-sans text-xs text-[#888D85] font-light mb-6">
                Fastest way to reach me for project inquiries and engineering conversations.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-[#EDEAE1]/10">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-2.5 px-3 rounded-lg bg-[#202823] hover:bg-[#28332C] text-xs font-mono text-[#EDEAE1] border border-[#EDEAE1]/10 transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981]">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#A9B89B]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="p-2.5 rounded-lg bg-[#EDEAE1] text-[#111412] hover:bg-[#A9B89B] transition-colors"
                aria-label="Send direct email"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#181E1A] border border-[#EDEAE1]/10 flex flex-col justify-between group hover:border-[#A9B89B]/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#202823] flex items-center justify-center text-[#EDEAE1] mb-5 group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-[#888D85] uppercase tracking-wider block mb-1">
                Code Repositories
              </span>
              <h3 className="font-display text-lg font-bold text-[#EDEAE1] mb-2">
                github.com/Gitika-27
              </h3>
              <p className="font-sans text-xs text-[#888D85] font-light mb-6">
                Explore full commit history, synthetic test suites, and open-source experiments.
              </p>
            </div>

            <div className="pt-4 border-t border-[#EDEAE1]/10">
              <a
                href="https://github.com/Gitika-27"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#202823] hover:bg-[#28332C] text-xs font-mono text-[#EDEAE1] border border-[#EDEAE1]/10 transition-colors flex items-center justify-between"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A9B89B]" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#181E1A] border border-[#EDEAE1]/10 flex flex-col justify-between group hover:border-[#A9B89B]/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#202823] flex items-center justify-center text-[#38BDF8] mb-5 group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-[#888D85] uppercase tracking-wider block mb-1">
                Professional Network
              </span>
              <h3 className="font-display text-lg font-bold text-[#EDEAE1] mb-2">
                in/gitika-omprakash
              </h3>
              <p className="font-sans text-xs text-[#888D85] font-light mb-6">
                Connect for professional opportunities, mentorship, and campus ambassador dialogue.
              </p>
            </div>

            <div className="pt-4 border-t border-[#EDEAE1]/10">
              <a
                href="https://www.linkedin.com/in/gitika-omprakash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#202823] hover:bg-[#28332C] text-xs font-mono text-[#EDEAE1] border border-[#EDEAE1]/10 transition-colors flex items-center justify-between"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A9B89B]" />
              </a>
            </div>
          </div>

        </div>

        {/* Location & Response Assurance */}
        <div className="p-6 rounded-2xl bg-[#181E1A]/60 border border-[#EDEAE1]/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#888D85]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#A9B89B]" />
            <span className="text-[#EDEAE1]">BASE LOCATION: CHENNAI, TAMIL NADU, INDIA</span>
          </div>
          <div>
            <span className="text-[#A9B89B]">TIMEZONE: IST (UTC+05:30)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
