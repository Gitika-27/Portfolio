import React, { useState } from 'react';
import { Mail, Github, Linkedin, ArrowUpRight, Copy, Check, MapPin, Code2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'gitikaomprakash@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative bg-[#101112] border-t border-[#F2EEE8]/12 overflow-hidden">
      
      {/* Background Accent Radial Gradient */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-radial from-[#D66F43]/15 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Editorial Contact Header */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-xs text-[#D66F43] tracking-widest uppercase mb-4 flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43]"></span>
            <span>SECTION // 07</span>
            <span>•</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#F2EEE8] font-black leading-[1.05] mb-6">
            Have an interesting problem?
            <br />
            <span className="font-editorial italic font-normal text-[#D66F43]">Let's make something happen.</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-[#C8C2BA] font-light leading-relaxed">
            Whether you want to discuss intelligent systems, cybersecurity attack-path architectures, or ambitious project collaborations, I'm always curious to connect.
          </p>
        </div>

        {/* Contact Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card with Copy Action */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#191817] border border-[#F2EEE8]/12 flex flex-col justify-between group hover:border-[#D66F43]/50 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#242220] flex items-center justify-center text-[#D66F43] mb-5 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-[#A9A29A] uppercase tracking-wider block mb-1">
                Direct Inquiry
              </span>
              <h3 className="font-display text-lg font-bold text-[#F2EEE8] mb-2 truncate">
                {email}
              </h3>
              <p className="font-serif text-xs text-[#A9A29A] font-light mb-6">
                Fastest way to reach me for project inquiries and engineering conversations.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-[#F2EEE8]/10">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-2.5 px-3 rounded-lg bg-[#242220] hover:bg-[#2F2B28] text-xs font-mono text-[#F2EEE8] border border-[#F2EEE8]/10 transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981] font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#D66F43]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="p-2.5 rounded-lg bg-[#D66F43] text-[#101112] hover:bg-[#E68962] transition-colors"
                aria-label="Send direct email"
              >
                <ArrowUpRight className="w-4 h-4 font-bold" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#191817] border border-[#F2EEE8]/12 flex flex-col justify-between group hover:border-[#D66F43]/50 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#242220] flex items-center justify-center text-[#F2EEE8] mb-5 group-hover:scale-105 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-[#A9A29A] uppercase tracking-wider block mb-1">
                Code Repositories
              </span>
              <h3 className="font-display text-lg font-bold text-[#F2EEE8] mb-2">
                github.com/Gitika-27
              </h3>
              <p className="font-serif text-xs text-[#A9A29A] font-light mb-6">
                Explore full commit history, synthetic test suites, and open-source experiments.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2EEE8]/10">
              <a
                href="https://github.com/Gitika-27"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#242220] hover:bg-[#2F2B28] text-xs font-mono text-[#F2EEE8] border border-[#F2EEE8]/10 transition-colors flex items-center justify-between"
              >
                <span>View GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D66F43]" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#191817] border border-[#F2EEE8]/12 flex flex-col justify-between group hover:border-[#D66F43]/50 transition-all shadow-xl">
            <div>
              <div className="w-11 h-11 rounded-xl bg-[#242220] flex items-center justify-center text-[#38BDF8] mb-5 group-hover:scale-105 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-[#A9A29A] uppercase tracking-wider block mb-1">
                Professional Network
              </span>
              <h3 className="font-display text-lg font-bold text-[#F2EEE8] mb-2">
                in/gitika-omprakash
              </h3>
              <p className="font-serif text-xs text-[#A9A29A] font-light mb-6">
                Connect for professional opportunities, mentorship, and campus ambassador dialogue.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F2EEE8]/10">
              <a
                href="https://www.linkedin.com/in/gitika-omprakash/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#242220] hover:bg-[#2F2B28] text-xs font-mono text-[#F2EEE8] border border-[#F2EEE8]/10 transition-colors flex items-center justify-between"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D66F43]" />
              </a>
            </div>
          </div>

        </div>

        {/* Location & Portfolio Source Bar */}
        <div className="p-6 rounded-2xl bg-[#191817]/60 border border-[#F2EEE8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#A9A29A]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D66F43]" />
            <span className="text-[#F2EEE8]">BASE LOCATION: CHENNAI, TAMIL NADU, INDIA</span>
          </div>

          <a
            href="https://github.com/Gitika-27/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#D66F43] hover:text-[#F2EEE8] transition-colors"
          >
            <Code2 className="w-4 h-4" />
            <span>OPEN SOURCE: GITHUB.COM/GITIKA-27/PORTFOLIO</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
