
import React from 'react';
import Section from './Section';
import SpotlightCard from './SpotlightCard';
import { RESUME_DATA } from '../constants';
import { ArrowUpRight, FolderGit2, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Selected Work">
      {/* Changed to grid-cols-2 on mobile with tighter gap */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
        {RESUME_DATA.projects.map((project, index) => {
          const primaryLink = project.demoUrl || project.repoUrl;

          return (
            <SpotlightCard key={index} className="group h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="relative z-10 p-4 md:p-10 flex flex-col h-full">
                {/* Clickable Area */}
                <a 
                  href={primaryLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-0"
                  aria-label={`View ${project.name}`}
                />

                <div className="flex items-start justify-between mb-3 md:mb-8 pointer-events-auto relative z-20">
                  <div className="p-2 md:p-4 rounded-xl md:rounded-2xl bg-white/50 dark:bg-white/5 text-zinc-900 dark:text-white ring-1 ring-black/5 dark:ring-white/10 shadow-sm group-hover:scale-105 transition-transform duration-500 backdrop-blur-md">
                    <FolderGit2 size={18} className="md:w-[28px] md:h-[28px]" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex gap-2 md:gap-3">
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                        title="View Code"
                      >
                        <Github size={14} className="md:w-[18px] md:h-[18px]" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 rounded-full bg-blue-600 text-white text-[10px] md:text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                        title="Live Demo"
                      >
                        <span className="hidden md:inline">Live Demo</span>
                        <ArrowUpRight size={12} className="md:w-[16px] md:h-[16px]" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-sm md:text-3xl font-bold text-zinc-900 dark:text-white mb-2 md:mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                  {project.name}
                </h3>
                
                {/* Clamped description for mobile side-by-side view */}
                <p className="text-xs md:text-lg text-zinc-500 dark:text-zinc-400 mb-4 md:mb-8 leading-relaxed flex-grow line-clamp-4 md:line-clamp-none">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-3 mt-auto">
                  {project.tech.slice(0, 3).map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-zinc-100/50 dark:bg-white/5 text-[9px] md:text-xs font-bold uppercase tracking-wide text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/5 whitespace-nowrap"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                     <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-zinc-100/50 dark:bg-white/5 text-[9px] md:text-xs font-bold text-zinc-500 border border-black/5 dark:border-white/5">
                        +{project.tech.length - 3}
                     </span>
                  )}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
