import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40 p-3 md:p-4 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-lg hover:shadow-xl border border-zinc-200 dark:border-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          style={{
            bottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))',
            right: 'max(1rem, env(safe-area-inset-right, 1rem))'
          }}
          aria-label="Back to top"
        >
          <ArrowUp 
            size={18} 
            className="md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-y-1" 
            strokeWidth={2.5}
          />
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;

