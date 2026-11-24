import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowUpRight, Menu, X, Compass } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [chennaiTime, setChennaiTime] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setChennaiTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Index', href: '#hero', id: 'hero' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Stack', href: '#stack', id: 'stack' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-3 ${
          isScrolled
            ? 'bg-[#111412]/85 backdrop-blur-md border-b border-[#EDEAE1]/10 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Monogram & Coordinates */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-[#202823] border border-[#EDEAE1]/15 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-[#A9B89B]/50">
              <span className="font-editorial text-lg italic font-bold text-[#EDEAE1] group-hover:text-[#A9B89B] transition-colors">
                G
              </span>
            </div>
            <div>
              <div className="font-display text-sm font-semibold tracking-tight text-[#EDEAE1] flex items-center gap-1.5">
                <span>Gitika Omprakash</span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#A9B89B]"></span>
                <span className="hidden sm:inline text-xs font-mono text-[#888D85] font-normal">
                  AI & Full-Stack
                </span>
              </div>
              <div className="font-mono text-[10px] text-[#888D85] tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                <span>CHENNAI {chennaiTime} IST</span>
              </div>
            </div>
          </a>

          {/* Desktop Floating Pill Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-[#181E1A]/90 border border-[#EDEAE1]/10 px-3 py-1.5 rounded-full shadow-inner backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#111412] bg-[#EDEAE1] font-semibold shadow-sm'
                      : 'text-[#C4C0B5] hover:text-[#EDEAE1] hover:bg-[#202823]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Direct Links */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/Gitika-27"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-[#C4C0B5] hover:text-[#EDEAE1] hover:bg-[#202823] border border-transparent hover:border-[#EDEAE1]/10 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/gitika-omprakash"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-[#C4C0B5] hover:text-[#EDEAE1] hover:bg-[#202823] border border-transparent hover:border-[#EDEAE1]/10 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-md bg-[#202823] text-[#EDEAE1] border border-[#526C56]/40 hover:border-[#A9B89B] hover:bg-[#28332C] transition-all"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A9B89B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#EDEAE1] bg-[#202823] border border-[#EDEAE1]/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111412]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="flex flex-col gap-3">
            <div className="font-mono text-[11px] text-[#888D85] tracking-widest uppercase mb-2">
              Navigation Index
            </div>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl text-lg font-display flex items-center justify-between border ${
                  activeSection === item.id
                    ? 'bg-[#202823] text-[#EDEAE1] border-[#A9B89B]/40'
                    : 'text-[#C4C0B5] border-transparent hover:bg-[#181E1A]'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#888D85]">0{navItems.indexOf(item) + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#EDEAE1]/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Gitika-27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#202823] text-[#EDEAE1]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gitika-omprakash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#202823] text-[#EDEAE1]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="font-mono text-xs text-[#888D85]">
              CHENNAI, IN // 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
};
