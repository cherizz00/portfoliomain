
import React from 'react';
import { RESUME_DATA } from '../constants';
import NeuralFeed from './NeuralFeed';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 pb-20 md:pb-12 border-t border-zinc-200 dark:border-zinc-900 bg-apple-gray dark:bg-black relative z-10" style={{ paddingBottom: 'max(5rem, calc(1.5rem + env(safe-area-inset-bottom, 0)))' }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8 text-center">
        
        {/* Live System Status (Integrated Here) */}
        <NeuralFeed />

        <div className="flex items-center gap-6 mt-4">
             <a href={RESUME_DATA.personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">LinkedIn</a>
             <a href={RESUME_DATA.personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">GitHub</a>
             <a href={RESUME_DATA.personalInfo.social.resume} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm">Resume</a>
        </div>

        <div className="space-y-2">
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
            © {new Date().getFullYear()} {RESUME_DATA.personalInfo.name}. All rights reserved.
            </p>
            <p className="text-[10px] text-zinc-400/60 dark:text-zinc-700 uppercase tracking-widest">
            Designed in Andhra Pradesh
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
