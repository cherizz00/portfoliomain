
import React, { useState } from 'react';
import Section from './Section';
import SpotlightCard from './SpotlightCard';
import { MY_EDGE_DATA, PROCESS_DATA } from '../constants';
import { Briefcase, Palette, Layers, Search, PenTool, Code, Rocket, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: { [key: string]: LucideIcon } = {
  Briefcase, Palette, Layers, Search, PenTool, Code, Rocket
};

const HowIWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div id="process" className="space-y-8 md:space-y-24 scroll-mt-20 md:scroll-mt-32">
      {/* My Edge Section - Optimized for Mobile Grid (Side-by-Side) */}
      <Section title="My Edge">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {MY_EDGE_DATA.map((edge, index) => {
            const Icon = iconMap[edge.icon] || Briefcase;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                  <SpotlightCard className="group h-full hover:-translate-y-1 transition-transform duration-300">
                    <div className="relative z-10 flex flex-col h-full p-3 md:p-8">
                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-2 md:mb-6 shadow-sm border border-blue-100 dark:border-blue-500/20 shrink-0 group-hover:scale-110 transition-transform duration-500">
                            <Icon size={16} className="md:w-6 md:h-6" />
                        </div>
                        <h3 className="text-xs md:text-xl font-bold text-zinc-900 dark:text-white mb-1 md:mb-3 tracking-tight leading-tight">
                            {edge.title}
                        </h3>
                        <p className="text-[10px] md:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow line-clamp-4 md:line-clamp-none">
                            {edge.description}
                        </p>
                    </div>
                  </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Interactive Process Reactor */}
      <Section title="How I Work">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
           
           {/* Left: Text Steps */}
           <div className="w-full lg:w-1/2 space-y-3 md:space-y-4">
              {PROCESS_DATA.map((step, index) => {
                const isActive = activeStep === index;
                const Icon = iconMap[step.icon] || Code;

                return (
                    <div 
                      key={index}
                      onMouseEnter={() => setActiveStep(index)}
                      onMouseLeave={() => setActiveStep(null)}
                      className={`relative p-4 md:p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 cursor-default
                        ${isActive 
                           ? 'bg-white dark:bg-zinc-800 border-blue-500 dark:border-blue-400 shadow-lg scale-[1.02] z-10' 
                           : 'bg-white/40 dark:bg-zinc-900/40 border-transparent hover:bg-white/60 dark:hover:bg-zinc-900/60'
                        }
                      `}
                    >
                        <div className="flex items-start gap-3 md:gap-5">
                            <div className={`w-8 h-8 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center text-xs md:text-lg font-bold transition-colors duration-300 ${isActive ? 'bg-blue-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400'}`}>
                                {step.step}
                            </div>
                            <div>
                                <h3 className={`text-sm md:text-xl font-bold mb-1 md:mb-2 transition-colors duration-300 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-900 dark:text-white'}`}>
                                    {step.title}
                                </h3>
                                <p className="text-xs md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2 md:mb-3">
                                    {step.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5 md:gap-2">
                                    {step.tags?.map((tag, i) => (
                                        <span key={i} className="text-[9px] md:text-xs font-bold px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )
              })}
           </div>

           {/* Right: The "Process Reactor" SVG */}
           <div className="w-full lg:w-1/2 flex justify-center relative py-4 md:py-0">
               <ProcessReactor 
                  activeStep={activeStep} 
                  onHoverStep={setActiveStep} 
                  steps={PROCESS_DATA} 
               />
           </div>
        </div>
      </Section>
    </div>
  );
};

// Interactive SVG Component
const ProcessReactor: React.FC<{ 
  activeStep: number | null; 
  onHoverStep: (idx: number | null) => void;
  steps: typeof PROCESS_DATA;
}> = ({ activeStep, onHoverStep, steps }) => {
    const size = 400;
    const center = size / 2;
    const radius = 120;
    const activeIconData = activeStep !== null ? steps[activeStep] : null;
    
    const ActiveIcon = (activeIconData && iconMap[activeIconData.icon]) ? iconMap[activeIconData.icon] : Zap;

    return (
        <div className="relative w-[280px] md:w-full max-w-[300px] md:max-w-[400px] aspect-square">
            <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
                
                {/* Connecting Rings */}
                <circle cx={center} cy={center} r={radius} fill="none" stroke="currentColor" className="text-zinc-200 dark:text-zinc-800" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx={center} cy={center} r={radius * 0.6} fill="none" stroke="currentColor" className="text-zinc-100 dark:text-zinc-800/50" strokeWidth="20" />

                {/* Central Core */}
                <g className="transition-all duration-500 ease-out">
                    <circle 
                        cx={center} cy={center} r={45} 
                        className={`transition-all duration-500 ${activeStep !== null ? 'fill-blue-500 shadow-glow' : 'fill-zinc-100 dark:fill-zinc-800'}`} 
                    />
                    <foreignObject x={center - 20} y={center - 20} width="40" height="40">
                        <div className={`w-full h-full flex items-center justify-center text-white transition-transform duration-500 ${activeStep !== null ? 'scale-100' : 'scale-75 opacity-50 grayscale'}`}>
                            <ActiveIcon size={24} strokeWidth={2} />
                        </div>
                    </foreignObject>
                </g>

                {/* Orbital Nodes */}
                {steps.map((step, i) => {
                    const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
                    const x = center + Math.cos(angle) * radius;
                    const y = center + Math.sin(angle) * radius;
                    const isActive = activeStep === i;
                    const StepIcon = iconMap[step.icon] || Code;

                    return (
                        <g 
                            key={i} 
                            onMouseEnter={() => onHoverStep(i)}
                            onMouseLeave={() => onHoverStep(null)}
                            className="cursor-pointer group"
                        >
                            {/* Connection Line to Center */}
                            <line 
                                x1={center} y1={center} x2={x} y2={y} 
                                className={`transition-all duration-300 stroke-[2px] ${isActive ? 'stroke-blue-500' : 'stroke-transparent'}`}
                            />

                            {/* Node Circle */}
                            <circle 
                                cx={x} cy={y} r={28} 
                                className={`transition-all duration-300 ${isActive ? 'fill-blue-600 stroke-blue-300 stroke-4' : 'fill-white dark:fill-zinc-900 stroke-zinc-200 dark:stroke-zinc-700 stroke-2 hover:stroke-blue-400'}`}
                            />
                            
                            {/* Icon inside Node */}
                            <foreignObject x={x - 12} y={y - 12} width="24" height="24" className="pointer-events-none">
                                <div className={`w-full h-full flex items-center justify-center transition-colors ${isActive ? 'text-white' : 'text-zinc-400 dark:text-zinc-500'}`}>
                                    <StepIcon size={16} />
                                </div>
                            </foreignObject>
                        </g>
                    )
                })}
            </svg>
            
            {/* Ambient Glow for Reactor */}
            {activeStep !== null && (
                 <div className="absolute inset-0 bg-blue-500/20 blur-[80px] -z-10 rounded-full pointer-events-none animate-pulse" />
            )}
        </div>
    );
};

export default HowIWork;
