import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowUpRight, Menu, X, Code2 } from 'lucide-react';

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
    { label: 'Leadership', href: '#leadership', id: 'leadership' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 ${
          isScrolled
            ? 'bg-[#101112]/90 backdrop-blur-md border-b border-[#F2EEE8]/12 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Monogram & Coordinates */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#191817] border border-[#F2EEE8]/15 flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-[#D66F43]/60 shadow-md">
              <span className="font-editorial text-xl italic font-bold text-[#F2EEE8] group-hover:text-[#D66F43] transition-colors">
                G
              </span>
            </div>
            <div>
              <div className="font-display text-sm font-bold tracking-tight text-[#F2EEE8] flex items-center gap-1.5">
                <span>Gitika Omprakash</span>
                <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#D66F43]"></span>
                <span className="hidden sm:inline text-xs font-mono text-[#A9A29A] font-normal">
                  AI & Full-Stack
                </span>
              </div>
              <div className="font-mono text-[10px] text-[#A9A29A] tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43] animate-pulse"></span>
                <span>CHENNAI {chennaiTime} IST</span>
              </div>
            </div>
          </a>

          {/* Desktop Floating Pill Menu */}
          <nav className="hidden md:flex items-center gap-1 bg-[#191817]/90 border border-[#F2EEE8]/12 px-3 py-1.5 rounded-full shadow-inner backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-1 text-xs font-display font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#101112] bg-[#F2EEE8] font-bold shadow-sm'
                      : 'text-[#C8C2BA] hover:text-[#F2EEE8] hover:bg-[#242220]'
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
              className="p-2 rounded-lg text-[#C8C2BA] hover:text-[#F2EEE8] hover:bg-[#191817] border border-transparent hover:border-[#F2EEE8]/10 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/gitika-omprakash/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-[#C8C2BA] hover:text-[#F2EEE8] hover:bg-[#191817] border border-transparent hover:border-[#F2EEE8]/10 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-lg bg-[#D66F43] text-[#101112] font-bold hover:bg-[#E68962] transition-all shadow-md shadow-[#D66F43]/20"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#F2EEE8] bg-[#191817] border border-[#F2EEE8]/12"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#101112]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="flex flex-col gap-2.5">
            <div className="font-mono text-[11px] text-[#A9A29A] tracking-widest uppercase mb-2">
              Navigation Index
            </div>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-3 px-4 rounded-xl text-lg font-display flex items-center justify-between border ${
                  activeSection === item.id
                    ? 'bg-[#191817] text-[#D66F43] border-[#D66F43]/40 font-bold'
                    : 'text-[#C8C2BA] border-transparent hover:bg-[#191817]'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-[#A9A29A]">0{navItems.indexOf(item) + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#F2EEE8]/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Gitika-27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#191817] text-[#F2EEE8]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gitika-omprakash/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#191817] text-[#F2EEE8]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="font-mono text-xs text-[#A9A29A]">
              CHENNAI, IN // 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
};
