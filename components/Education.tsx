
import React from 'react';
import Section from './Section';
import SpotlightCard from './SpotlightCard';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Award, Users, CheckCircle2, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Education Block */}
      <Section id="education" title="Education">
        {RESUME_DATA.education.map((edu, index) => (
          <SpotlightCard key={index} className="p-5 md:p-8 h-full">
             {/* Ambient Background Gradient */}
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />

             <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start h-full">
                {/* Icon */}
                <div className="shrink-0 p-3 md:p-4 rounded-xl md:rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 shadow-sm">
                    <GraduationCap size={32} className="md:w-12 md:h-12" strokeWidth={1.5} />
                </div>

                <div className="flex-1 w-full flex flex-col h-full">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-4 mb-4 md:mb-6">
                        <div>
                            <h3 className="text-xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight mb-1 md:mb-2">
                                {edu.institution}
                            </h3>
                            <p className="text-base md:text-xl font-medium text-zinc-600 dark:text-zinc-300 flex items-center gap-2">
                                {edu.degree}
                            </p>
                        </div>
                        <span className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-zinc-100 dark:bg-white/5 text-xs md:text-sm font-bold text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/5 whitespace-nowrap self-start md:self-auto">
                            {edu.period}
                        </span>
                    </div>
                    
                    <div className="pt-4 md:pt-6 border-t border-zinc-200/50 dark:border-white/5 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3 md:mb-4">
                            <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                                <BookOpen size={14} className="md:w-4 md:h-4" />
                            </div>
                            <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                                Relevant Coursework
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {edu.coursework.split(', ').map((course, i) => (
                                <span key={i} className="px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-zinc-50 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 text-[10px] md:text-xs font-bold border border-zinc-100 dark:border-white/5">
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
             </div>
          </SpotlightCard>
        ))}
      </Section>

      <Section id="responsibility" title="Leadership & Certifications">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
          
          {/* Leadership / Responsibility */}
          <SpotlightCard className="p-5 md:p-8 h-full flex flex-col">
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="p-2 md:p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20">
                    <Users size={20} className="md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">Leadership</h3>
                </div>

                <div className="space-y-6 md:space-y-8 flex-1 relative before:absolute before:left-[23px] md:before:left-[27px] before:top-12 md:before:top-16 before:bottom-4 before:w-[1px] before:bg-gradient-to-b before:from-purple-500/30 before:to-transparent">
                    {RESUME_DATA.responsibility.map((role, idx) => (
                        <div key={idx} className="relative pl-10 md:pl-12 group/item">
                            <div className="absolute left-[19px] md:left-[23px] top-[7px] w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white dark:bg-zinc-900 border-2 border-purple-500 z-10 transition-transform duration-300 group-hover/item:scale-125" />
                            
                            <h4 className="font-bold text-base md:text-lg text-zinc-900 dark:text-white mb-1 group-hover/item:text-purple-600 dark:group-hover/item:text-purple-400 transition-colors">
                                {role.role}
                            </h4>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2 block">
                                {role.period}
                            </span>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xs md:text-sm">
                                {role.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
          </SpotlightCard>

          {/* Certifications */}
          <SpotlightCard className="p-5 md:p-8 h-full flex flex-col">
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className="p-2 md:p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                        <Award size={20} className="md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">Certifications</h3>
                    </div>
                    
                    <div className="grid gap-3 md:gap-4 flex-1">
                        {RESUME_DATA.certifications.map((cert, idx) => (
                            <div 
                            key={idx} 
                            className="group/cert flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-zinc-100 dark:border-white/5 hover:border-emerald-500/30 hover:bg-emerald-50/50 dark:hover:bg-emerald-500/10 transition-all duration-300"
                            >
                                <div className="shrink-0 mt-0.5 text-zinc-300 dark:text-zinc-600 group-hover/cert:text-emerald-500 transition-colors">
                                    <CheckCircle2 size={16} className="md:w-[18px] md:h-[18px]" />
                                </div>
                                <span className="text-zinc-700 dark:text-zinc-200 font-medium text-xs md:text-sm leading-snug group-hover/cert:text-zinc-900 dark:group-hover/cert:text-white transition-colors">
                                    {cert}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
          </SpotlightCard>
        </div>
      </Section>
    </div>
  );
};

export default Education;
