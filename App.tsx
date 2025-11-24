
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const THEME_STORAGE_KEY = 'theme-preference';
type ThemeMode = 'dark' | 'light';

const getStoredPreference = (): ThemeMode | null => {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
  } catch (error) {
    console.warn('Unable to read theme preference', error);
  }
  return null;
};

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') return false;
  const storedPreference = getStoredPreference();
  if (storedPreference) {
const applyTheme = (mode: ThemeMode) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const body = document.body;
  root.classList.toggle('dark', mode === 'dark');
  body.classList.toggle('dark', mode === 'dark');
  root.dataset.theme = mode;
};

    return storedPreference === 'dark';
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

// Lazy load components for better performance on slow networks
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const HowIWork = lazy(() => import('./components/HowIWork'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const ContactTerminal = lazy(() => import('./components/ContactTerminal'));
const Footer = lazy(() => import('./components/Footer'));
const BackToTop = lazy(() => import('./components/BackToTop'));

// Loading placeholder component
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode);

  useEffect(() => {
    // Force scroll to top on refresh to prevent starting at the bottom/terminal
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Scroll to top immediately and after page load to ensure it sticks
    window.scrollTo(0, 0);
    
    const handleLoad = () => {
      window.scrollTo(0, 0);
      // Force scroll again after a short delay to override any other scroll behavior
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    applyTheme(darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (!window.matchMedia) {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event: MediaQueryListEvent) => {
      const storedPreference = getStoredPreference();
      if (!storedPreference) {
        setDarkMode(event.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      try {
        const mode: ThemeMode = next ? 'dark' : 'light';
        window.localStorage.setItem(THEME_STORAGE_KEY, mode);
        applyTheme(mode);
      } catch (error) {
        console.warn('Unable to persist theme preference', error);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-apple-gray dark:bg-black selection:bg-blue-500 selection:text-white relative overflow-hidden">
      
      {/* Fixed Ambient Background Blobs for Glassmorphism - Optimized for performance */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-400/20 dark:bg-purple-900/20 blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/20 dark:bg-blue-900/20 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-400/20 dark:bg-indigo-900/20 blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Film Grain / Noise Overlay - The 'Top Tier' Finish */}
      <div className="fixed inset-0 bg-noise opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-0 mix-blend-overlay"></div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="flex flex-col relative z-10">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowIWork />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Education />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ContactTerminal />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      
      {/* Back to Top Button */}
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  );
};

export default App;
