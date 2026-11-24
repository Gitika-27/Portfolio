import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechnicalArsenal } from './components/TechnicalArsenal';
import { ExperienceSection } from './components/ExperienceSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'about', 'stack', 'journey', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectProjectFromRibbon = (projectId: string) => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#101112] text-[#F2EEE8] selection:bg-[#D66F43]/30 selection:text-[#F2EEE8] relative overflow-x-hidden">
      {/* Subtle Analog Grain Overlay */}
      <div className="noise-overlay" />

      {/* Persistent Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Experience Flow */}
      <main>
        <Hero onSelectProject={handleSelectProjectFromRibbon} />
        <ProjectsShowcase />
        <About />
        <TechnicalArsenal />
        <ExperienceSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      {/* Monogram Footer */}
      <Footer />
    </div>
  );
};

export default App;
