
import React from 'react';
import Section from './Section';
import SpotlightCard from './SpotlightCard';
import { SERVICES_DATA } from '../constants';
import { Layout, Cpu, Code, Cloud } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  Layout, Cpu, Code, Cloud
};

const Services: React.FC = () => {
  return (
    <Section id="services" title="What I Can Do For You">
      {/* Forced grid-cols-2 on mobile with tight gap */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
        {SERVICES_DATA.map((service, index) => {
          const Icon = iconMap[service.icon] || Code;
          return (
            <SpotlightCard key={index} className="group h-full hover:-translate-y-1 transition-transform duration-300">
              <div className="relative z-10 p-4 md:p-8 h-full flex flex-col">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 md:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm border border-blue-100 dark:border-blue-500/20 shrink-0">
                    <Icon size={20} className="md:w-[28px] md:h-[28px]" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-sm md:text-2xl font-bold text-zinc-900 dark:text-white mb-2 md:mb-4 tracking-tight leading-tight">
                    {service.title}
                </h3>
                
                <p className="text-xs md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed flex-grow line-clamp-4 md:line-clamp-none">
                    {service.description}
                </p>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
