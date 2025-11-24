
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

// REWRITTEN: Robust Typewriter with safety checks and clean cursor
const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);

  // Initial delay trigger
  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  // Typing logic
  useEffect(() => {
    if (!started || !text) return;

    let currentIndex = 0;
    const speed = 80; // ms per char

    // Reset text to ensure clean start
    setDisplayedText('');

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        // Use substring to ensure absolute correctness of the string state
        setDisplayedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [started, text]);

  // Cursor blinking logic
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-flex items-center tracking-widest min-h-[24px] whitespace-nowrap">
        {displayedText}
        <span 
          className={`ml-1 w-[2px] h-4 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
        ></span>
    </span>
  );
};

const Hero: React.FC = () => {
  const { personalInfo } = RESUME_DATA;
  const firstName = personalInfo.name.split(' ')[0]; // Dasari
  const restOfName = personalInfo.name.split(' ').slice(1).join(' '); // Venkata Prasanna Kumar

  return (
    <section id="hero" className="relative min-h-[65vh] md:min-h-[100vh] pt-24 md:pt-32 pb-8 md:pb-20 flex flex-col items-center justify-center overflow-hidden text-center selection:bg-blue-500/30">
      
      {/* --- GOD MODE BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-apple-gray dark:bg-[#050505] perspective-1000">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-500/20 dark:bg-indigo-500/10 blur-[80px] md:blur-[100px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

      <div className="relative z-10 px-4 max-w-6xl mx-auto flex flex-col items-center w-full">
        
        {/* STATUS BADGE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 md:mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-white/10 shadow-sm cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300">
            Available for work
          </span>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="mb-6 md:mb-12 relative group"
        >
            <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"></div>
            <img 
                src={personalInfo.profilePic} 
                alt={personalInfo.name}
                loading="eager"
                decoding="async"
                className="relative w-24 h-24 md:w-40 md:h-40 rounded-full object-cover border-2 border-white dark:border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
            />
        </motion.div>

        {/* TYPOGRAPHY HERO */}
        <div className="relative mb-6 md:mb-10 flex flex-col items-center z-20 w-full">
            
            {/* Primary Name - Optimized text size for mobile */}
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] select-none"
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-600 filter drop-shadow-sm">
                    {firstName}
                </span>
            </motion.h1>

            {/* Secondary Name */}
            <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mt-2 md:mt-4 text-lg sm:text-2xl md:text-5xl font-medium text-zinc-400/80 dark:text-zinc-500/80 tracking-tight text-center max-w-4xl mix-blend-difference px-2"
            >
                {restOfName}
            </motion.h2>
        </div>

        {/* DESCRIPTION */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto text-center space-y-4 md:space-y-8 mb-8 md:mb-12 flex flex-col items-center"
        >
            {/* Role Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 rounded-full bg-zinc-50/50 dark:bg-[#0A0A0C] border border-blue-500/20 dark:border-blue-500/30 shadow-[0_0_25px_-5px_rgba(59,130,246,0.15)] backdrop-blur-xl group transition-all hover:border-blue-500/50 hover:shadow-[0_0_35px_-5px_rgba(59,130,246,0.25)] max-w-full overflow-hidden">
                <div className="relative flex items-center justify-center shrink-0">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse" />
                </div>
                <span className="text-zinc-700 dark:text-blue-100 font-mono text-xs md:text-base font-bold tracking-widest uppercase min-w-[160px] md:min-w-[200px] text-left truncate">
                    <Typewriter text={personalInfo.title} delay={1000} />
                </span>
            </div>
            
            <p className="text-sm md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light antialiased text-pretty px-4">
                {personalInfo.summary}
            </p>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-20 w-full px-4"
        >
            <a
                href="#contact"
                className="group relative px-6 py-3 md:px-8 md:py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-zinc-900/20 dark:shadow-white/10 overflow-hidden text-sm md:text-base w-full sm:w-auto flex justify-center"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span className="flex items-center gap-2 relative z-10">
                    <Mail size={16} className="md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                    <span>Contact Me</span>
                </span>
            </a>

            <div className="flex gap-3 w-full sm:w-auto justify-center">
                <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-6 py-3 md:px-8 md:py-4 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 text-sm md:text-base flex-1 sm:flex-auto justify-center"
                >
                    <Github size={16} className="md:w-[18px] md:h-[18px]" />
                    <span>GitHub</span>
                </a>
                
                <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-6 py-3 md:px-8 md:py-4 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-semibold border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 text-sm md:text-base flex-1 sm:flex-auto justify-center"
                >
                    <Linkedin size={16} className="md:w-[18px] md:h-[18px]" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
