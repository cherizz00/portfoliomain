
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Download } from 'lucide-react';
import { NAV_LINKS, RESUME_DATA } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Reduced timeout to 50ms for near-instant response
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <>
      {/* Navbar Container - Handles spacing and positioning */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] flex justify-center transition-all duration-300 pointer-events-none 
        ${mobileMenuOpen ? 'h-full items-start' : 'pt-2 md:pt-6'}`}
      >
        <div
          className={`
                pointer-events-auto
                relative flex items-center justify-between px-4 md:px-6 
                transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
                ${mobileMenuOpen
              ? 'w-full bg-transparent border-transparent shadow-none pt-2 md:pt-6 rounded-none' // Open Menu: Transparent
              : isScrolled
                ? 'w-[95%] md:w-fit md:min-w-[750px] md:px-10 h-12 md:h-14 rounded-full bg-white/70 dark:bg-[#1C1C1E]/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#1C1C1E]/60'
                : 'w-full max-w-6xl h-14 md:h-20 rounded-3xl bg-white/50 dark:bg-[#0C0C0F]/50 border border-white/30 dark:border-white/5 backdrop-blur-md shadow-[0_25px_60px_rgba(15,15,15,0.05)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.5)] supports-[backdrop-filter]:bg-white/30 dark:supports-[backdrop-filter]:bg-[#0C0C0F]/30'
            }
            `}
        >
          {/* Logo - High Z-index to stay above menu */}
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, 'hero')}
            className={`text-base md:text-lg font-bold tracking-tighter z-[70] shrink-0 transition-colors duration-300 ${mobileMenuOpen ? 'text-zinc-900 dark:text-white' : 'text-zinc-900 dark:text-white'}`}
          >
            Dasari<span className="text-zinc-400">.VPK</span>
          </a>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-1 transition-all duration-500 ${isScrolled ? 'scale-100 gap-6 mx-8' : 'gap-8'}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-2 md:gap-3 shrink-0 z-[70] transition-all duration-300`}>
            {/* Resume Button (Icon only on scroll) */}
            <a
              href={RESUME_DATA.personalInfo.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex items-center gap-2 text-sm font-medium transition-all ${isScrolled ? 'px-2' : 'text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'}`}
              title="Resume"
            >
              <FileText size={18} />
              <span className={`${isScrolled ? 'hidden' : 'block'}`}>Resume</span>
            </a>

            <div className={`hidden md:block w-px h-4 bg-zinc-200 dark:bg-zinc-700 ${isScrolled ? 'hidden' : 'block'}`}></div>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${mobileMenuOpen ? 'text-zinc-900 dark:text-zinc-200' : 'text-zinc-600 dark:text-zinc-400 hover:bg-black/5 dark:hover:bg-white/10'}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-1 transition-colors ${mobileMenuOpen ? 'text-zinc-900 dark:text-white' : 'text-zinc-900 dark:text-white'}`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 w-full h-[100dvh] bg-[#F5F5F7] dark:bg-[#000000] z-[50] flex flex-col pt-24 px-6 animate-in fade-in duration-200 overflow-y-auto overscroll-contain">
          <div className="flex flex-col items-start gap-2 w-full pb-12">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-3xl sm:text-4xl font-bold tracking-tighter text-zinc-900 dark:text-white w-full py-3 border-b border-zinc-200 dark:border-zinc-800 last:border-none animate-in slide-in-from-bottom-4 fade-in fill-mode-backwards"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {link.label}
              </a>
            ))}

            <div className="h-6" /> {/* Spacer */}

            <a
              href={RESUME_DATA.personalInfo.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-2xl w-full transition-all active:scale-95 shadow-lg shadow-blue-500/20"
            >
              <Download size={20} />
              Download Resume
            </a>

            <div className="h-6" />

            <div className="w-full flex justify-between text-xs font-medium text-zinc-400 uppercase tracking-widest mt-auto pb-8">
              <span>Socials</span>
              <div className="flex gap-4">
                <a href={RESUME_DATA.personalInfo.social.linkedin} className="hover:text-zinc-900 dark:hover:text-white">LinkedIn</a>
                <a href={RESUME_DATA.personalInfo.social.github} className="hover:text-zinc-900 dark:hover:text-white">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
