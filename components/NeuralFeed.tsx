
import React, { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SYSTEM_LOGS = [
  { category: "NETWORK", text: "Handshake established (US-EAST)" },
  { category: "KERNEL", text: "Optimizing render cycles..." },
  { category: "MEMORY", text: "Allocating heap for 3D assets" },
  { category: "SECURITY", text: "TLS 1.3 Encryption active" },
  { category: "AI_MOD", text: "Predictive pre-fetching enabled" },
  { category: "UI_THREAD", text: "Frame timing: < 16ms" },
  { category: "NETWORK", text: "Latency stable at 24ms" },
  { category: "SYSTEM", text: "Garbage collection complete" }
];

const NeuralFeed: React.FC = () => {
  const [currentLog, setCurrentLog] = useState(SYSTEM_LOGS[0]);
  const [time, setTime] = useState(new Date());
  const [latency, setLatency] = useState(145);

  // Clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      setLatency(prev => Math.max(20, Math.min(200, prev + (Math.random() > 0.5 ? 5 : -5))));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Log rotater
  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = SYSTEM_LOGS[Math.floor(Math.random() * SYSTEM_LOGS.length)];
      setCurrentLog(randomLog);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  return (
    <div className="w-full max-w-md mx-auto font-mono select-none mt-8">
      
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-3 opacity-60">
        <Activity size={14} className="text-blue-500 animate-pulse" />
        <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 uppercase">
          System Status // Live
        </span>
      </div>

      {/* Status Box */}
      <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 overflow-hidden shadow-sm">
         
         {/* Subtle Scanline effect */}
         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.02)_51%)] dark:bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.02)_51%)] bg-[size:100%_4px] pointer-events-none"></div>
         
         <div className="relative z-10 flex justify-between items-start mb-2">
            <div className="flex gap-2 text-[10px] font-bold text-zinc-500 dark:text-zinc-400">
                <span>[{formatTime(time)}]</span>
                <span className="text-blue-600 dark:text-blue-400">{currentLog.category}</span>
            </div>
            <div className="text-[9px] text-zinc-400 dark:text-zinc-500 font-bold tracking-widest">
                T: {latency}ms
            </div>
         </div>

         <AnimatePresence mode="wait">
            <motion.div
                key={currentLog.text}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-medium text-zinc-700 dark:text-zinc-300 tracking-wide truncate text-center"
            >
                {currentLog.text}
            </motion.div>
         </AnimatePresence>

         {/* Decorative corner */}
         <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-blue-500/30 rounded-br-sm"></div>
         <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-blue-500/30 rounded-tl-sm"></div>
      </div>
    </div>
  );
};

export default NeuralFeed;
