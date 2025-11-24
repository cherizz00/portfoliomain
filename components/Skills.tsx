
import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

// Map individual skills to the Radar Chart categories
const SKILL_MAPPING: { [key: string]: string } = {
  "React": "Frontend",
  "Angular": "Frontend",
  "Tailwind": "UI/UX",
  "Bootstrap": "UI/UX",
  "Node.js": "Backend",
  "Flask": "Backend",
  "Java": "Backend",
  "C": "Backend",
  "MongoDB": "Database",
  "SQL": "Database",
  "Python": "AI/ML",
  "Pandas": "AI/ML",
  "Numpy": "AI/ML",
  "AWS": "DevOps",
  "Git": "DevOps",
  "VS Code": "DevOps",
};

const CATEGORIES = [
  { label: "Frontend", value: 95 },
  { label: "Backend", value: 85 },
  { label: "AI/ML", value: 80 },
  { label: "Database", value: 75 },
  { label: "DevOps", value: 70 },
  { label: "UI/UX", value: 85 },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="py-8 md:py-32 px-4 md:px-6 overflow-hidden relative z-10 scroll-mt-20 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Text & Grid */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tighter mb-4 md:mb-6">
              Technical Arsenal
            </h2>
            <p className="text-sm md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 md:mb-12 max-w-xl">
              A comprehensive breakdown of my technical capabilities, mapped across core engineering domains. 
              <span className="hidden md:inline"> Hover over any skill or chart axis to visualize the connections.</span>
            </p>

            {/* Mobile Optimized Grid: 3 columns, tight gap */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 md:gap-4">
              {RESUME_DATA.skills.map((skill, index) => {
                const category = SKILL_MAPPING[skill.name];
                const isActive = activeCategory === category;
                const isDimmed = activeCategory && !isActive;

                return (
                  <div 
                    key={index}
                    onMouseEnter={() => setActiveCategory(category)}
                    onMouseLeave={() => setActiveCategory(null)}
                    className={`
                      group flex flex-col items-center justify-center gap-2 md:gap-3 p-2 md:p-4 rounded-xl md:rounded-2xl 
                      border transition-all duration-500 cursor-pointer relative overflow-hidden
                      ${isActive 
                        ? 'bg-white dark:bg-zinc-800 border-blue-500 dark:border-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-105 z-10' 
                        : isDimmed 
                          ? 'bg-white/20 dark:bg-zinc-900/20 border-white/5 dark:border-white/5 opacity-40 scale-95 blur-[1px]' 
                          : 'bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border-white/20 dark:border-white/10 hover:-translate-y-1 hover:shadow-lg'
                      }
                    `}
                  >
                    {/* Active Glow Background */}
                    {isActive && (
                        <div className="absolute inset-0 bg-blue-500/10 animate-pulse" />
                    )}

                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center relative z-10">
                       <img 
                         src={skill.icon} 
                         alt={skill.name} 
                         className={`w-full h-full object-contain drop-shadow-sm transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} 
                       />
                    </div>
                    <span className={`text-[10px] md:text-xs font-semibold text-center transition-colors duration-300 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white'}`}>
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Radar Chart */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative">
             {/* Ambient Background Glow */}
             <div className={`absolute w-full h-full bg-blue-500/10 blur-[100px] rounded-full pointer-events-none transition-opacity duration-700 ${activeCategory ? 'opacity-100 scale-110' : 'opacity-50'}`} />
             
             <RadarChart 
                data={CATEGORIES} 
                activeCategory={activeCategory} 
                onHoverCategory={setActiveCategory}
             />
          </div>

        </div>
      </div>
    </section>
  );
};

const RadarChart: React.FC<{ 
  data: { label: string; value: number }[]; 
  activeCategory: string | null;
  onHoverCategory: (cat: string | null) => void;
}> = ({ data, activeCategory, onHoverCategory }) => {
    const size = 450;
    const center = size / 2;
    const radius = 140; // Increased radius for better spacing
    const angleStep = (Math.PI * 2) / data.length;

    // Helper to calculate points
    const getPoint = (index: number, value: number) => {
        const angle = index * angleStep - Math.PI / 2; // Start at top
        const dist = (value / 100) * radius;
        return {
            x: center + Math.cos(angle) * dist,
            y: center + Math.sin(angle) * dist,
            angle // Return angle for label positioning
        };
    };

    const gridLevels = [100, 75, 50, 25];
    const polygonPoints = data.map((d, i) => {
        const p = getPoint(i, d.value);
        return `${p.x},${p.y}`;
    }).join(' ');

    return (
        <div className="relative w-full max-w-[320px] md:max-w-[500px] aspect-square animate-in zoom-in duration-1000">
            <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
                {/* Grid Lines (Hexagons) */}
                {gridLevels.map((level, i) => {
                    const points = data.map((_, idx) => {
                         const p = getPoint(idx, level);
                         return `${p.x},${p.y}`;
                    }).join(' ');
                    return (
                        <polygon 
                            key={i} 
                            points={points} 
                            fill="transparent" 
                            stroke="currentColor" 
                            className="text-zinc-200 dark:text-zinc-800 transition-colors duration-500"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Axis Lines */}
                {data.map((_, i) => {
                    const p = getPoint(i, 100);
                    return (
                        <line 
                            key={i} 
                            x1={center} 
                            y1={center} 
                            x2={p.x} 
                            y2={p.y} 
                            stroke="currentColor" 
                            className="text-zinc-200 dark:text-zinc-800"
                            strokeWidth="1"
                        />
                    );
                })}

                {/* Data Polygon (Filled Area) */}
                <motion.polygon 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    points={polygonPoints}
                    className="fill-blue-500/20 dark:fill-blue-500/30 stroke-blue-500 dark:stroke-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    strokeWidth="2"
                    strokeLinejoin="round"
                />
                
                {/* Interactive Data Points & Labels */}
                {data.map((d, i) => {
                    const p = getPoint(i, d.value);
                    const labelP = getPoint(i, 130); // Label position
                    const isActive = activeCategory === d.label;

                    return (
                        <g 
                          key={i} 
                          onMouseEnter={() => onHoverCategory(d.label)}
                          onMouseLeave={() => onHoverCategory(null)}
                          className="cursor-pointer group"
                        >
                            {/* Axis Hit Area (Invisible) */}
                            <circle cx={p.x} cy={p.y} r="20" fill="transparent" />

                            {/* Visible Dot */}
                            <circle 
                                cx={p.x} 
                                cy={p.y} 
                                r={isActive ? 6 : 4} 
                                className={`transition-all duration-300 ${isActive ? 'fill-blue-600 dark:fill-blue-400 stroke-white dark:stroke-black stroke-[3px]' : 'fill-white dark:fill-[#1C1C1E] stroke-blue-500 dark:stroke-blue-400 stroke-[2px]'}`}
                            />

                            {/* Connecting Line Effect when Active */}
                            {isActive && (
                                <line 
                                    x1={center} y1={center} x2={p.x} y2={p.y}
                                    className="stroke-blue-500 dark:stroke-blue-400 stroke-2 opacity-50"
                                />
                            )}

                            {/* Label */}
                            <text 
                                x={labelP.x} 
                                y={labelP.y} 
                                textAnchor="middle" 
                                dominantBaseline="middle"
                                className={`text-[10px] md:text-[13px] font-bold uppercase tracking-wider transition-all duration-300 select-none ${
                                    isActive 
                                    ? 'fill-blue-600 dark:fill-blue-400 text-shadow-glow scale-110' 
                                    : 'fill-zinc-400 dark:fill-zinc-500 group-hover:fill-zinc-600 dark:group-hover:fill-zinc-300'
                                }`}
                            >
                                {d.label}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default Skills;
