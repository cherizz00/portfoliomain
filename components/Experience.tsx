
import React from 'react';
import Section from './Section';
import SpotlightCard from './SpotlightCard';
import { RESUME_DATA } from '../constants';
import { Briefcase, MapPin, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="relative space-y-6 md:space-y-12">
        
        {/* Timeline Line - Desktop */}
        <motion.div 
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute left-[260px] top-8 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-zinc-200 dark:via-zinc-800 to-transparent origin-top z-0" 
            style={{ transform: 'translateX(-0.5px)' }}
        />

        {/* Timeline Line - Mobile - Fixed Position & Alignment */}
        <motion.div 
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="md:hidden absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/50 via-zinc-200 dark:via-zinc-800 to-transparent origin-top z-0" 
            style={{ transform: 'translateX(-0.5px)' }}
        />

        {RESUME_DATA.experience.map((exp, index) => (
          <div key={index} className="relative flex flex-col md:flex-row gap-4 md:gap-20 group">
            
            {/* Date Sidebar (Desktop) */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="hidden md:flex flex-col items-end text-right w-[220px] shrink-0 pt-2"
            >
              <span className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight leading-none">
                {exp.period.split('–')[0].trim()}
              </span>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-2">
                {exp.period.includes('Present') ? 'Present' : exp.period.split('–')[1]?.trim()}
              </span>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 px-2 py-1 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5">
                 <MapPin size={10} />
                 {exp.location}
              </div>
            </motion.div>

            {/* Timeline Connector Dot - Perfectly Centered */}
            <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2, type: "spring" }}
                className="absolute left-6 md:left-[260px] top-[24px] md:top-9 z-10 flex items-center justify-center"
                style={{ transform: 'translateX(calc(-50% + 0.5px))' }}
            >
                {/* Solid background ensures the line doesn't show through the dot */}
                <div className="relative w-3 h-3 md:w-4 md:h-4 bg-apple-gray dark:bg-black rounded-full border-2 border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.1)] z-10">
                     <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                </div>
            </motion.div>

            {/* Content Card */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="flex-1 pl-16 md:pl-0" 
            >
                {/* Mobile Date Header - Compact and Aligned */}
                <div className="md:hidden mb-3 relative z-20">
                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-500/20 shadow-sm">
                        {exp.period}
                    </span>
                </div>

                <SpotlightCard className="p-5 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4 md:mb-6">
                            <div>
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mb-1 leading-tight">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300 font-medium text-sm md:text-lg">
                                    <Briefcase size={14} className="text-zinc-400 shrink-0 md:w-4 md:h-4" />
                                    {exp.company}
                                </div>
                            </div>
                            <div className="hidden sm:flex w-10 h-10 rounded-lg bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/10 items-center justify-center shadow-sm text-zinc-400 dark:text-zinc-500 group-hover:scale-110 transition-transform duration-300">
                                <Building2 size={20} />
                            </div>
                        </div>

                        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                            {exp.description.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-xs sm:text-sm md:text-base">
                                <span className="mt-1.5 md:mt-2 w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span>{point}</span>
                            </li>
                            ))}
                        </ul>

                        {exp.tech && (
                            <div className="flex flex-wrap gap-2 pt-4 md:pt-6 border-t border-zinc-100 dark:border-white/5">
                                {exp.tech.map((t, i) => (
                                    <span 
                                        key={i}
                                        className="px-2 py-1 md:px-2.5 md:py-1 rounded-md text-[10px] md:text-xs font-bold bg-zinc-100/80 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/5"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </SpotlightCard>
            </motion.div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
