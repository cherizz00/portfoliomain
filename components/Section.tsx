
import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section 
        id={id} 
        // Reduced py-10 to py-8 for mobile compactness, scroll-mt adjusted
        className={`py-8 md:py-32 px-4 md:px-6 scroll-mt-20 md:scroll-mt-32 ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }} // Trigger sooner on mobile
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Reduced bottom margin on title */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-16 text-zinc-900 dark:text-white tracking-tight relative inline-block">
            {title}
            <span className="absolute -bottom-3 md:-bottom-4 left-0 w-8 md:w-12 h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <div className="grid gap-6 md:gap-8">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
