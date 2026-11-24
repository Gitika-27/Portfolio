import React from 'react';
import { ArrowUp, Github, Linkedin, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b0c0d] border-t border-[#F2EEE8]/12 py-16 text-[#A9A29A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#F2EEE8]/10">
          
          {/* Animated Monogram & Identity */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#191817] border border-[#D66F43]/40 flex items-center justify-center relative group shadow-md">
              <span className="font-editorial text-2xl italic font-bold text-[#F2EEE8] group-hover:text-[#D66F43] transition-colors">
                G
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D66F43] animate-ping"></span>
            </div>

            <div>
              <div className="font-display text-base font-bold text-[#F2EEE8]">
                Gitika Omprakash
              </div>
              <div className="font-mono text-xs text-[#A9A29A]">
                AI & Data Science // Full-Stack Developer
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a href="#hero" className="hover:text-[#F2EEE8] transition-colors">INDEX</a>
            <a href="#work" className="hover:text-[#F2EEE8] transition-colors">WORK</a>
            <a href="#about" className="hover:text-[#F2EEE8] transition-colors">ABOUT</a>
            <a href="#stack" className="hover:text-[#F2EEE8] transition-colors">STACK</a>
            <a href="#journey" className="hover:text-[#F2EEE8] transition-colors">JOURNEY</a>
            <a href="#leadership" className="hover:text-[#F2EEE8] transition-colors">LEADERSHIP</a>
            <a href="#contact" className="hover:text-[#F2EEE8] transition-colors">CONTACT</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#191817] text-[#F2EEE8] hover:bg-[#242220] hover:text-[#D66F43] border border-[#F2EEE8]/10 transition-colors flex items-center gap-2 text-xs font-mono"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#A9A29A]">
          <div>
            © {new Date().getFullYear()} Gitika Omprakash. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Gitika-27"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2EEE8] transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gitika-omprakash/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2EEE8] transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Gitika-27/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D66F43] transition-colors flex items-center gap-1"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Portfolio Repo</span>
            </a>
            <span>•</span>
            <span className="text-[#D66F43]">CHENNAI, IN</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
