
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

const ContactTerminal: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('');
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const placeholders = ["Yes", "Confirm", "Let's go", "Absolutely"];

  // Start animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll completely disabled - no scroll interference with page scrolling

  // Focus input when it becomes visible
  useEffect(() => {
    if (inputVisible && !isSubmitted) {
      const timer: ReturnType<typeof setTimeout> = setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [inputVisible, isSubmitted, lines]);

  // Ghost Placeholder Typing Effect
  useEffect(() => {
    if (!inputVisible || isSubmitted || inputValue.length > 0) {
        setPlaceholderText('');
        return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
        const currentWord = placeholders[wordIndex];
        
        if (isDeleting) {
            setPlaceholderText(currentWord.substring(0, charIndex - 1));
            charIndex--;
        } else {
            setPlaceholderText(currentWord.substring(0, charIndex + 1));
            charIndex++;
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            speed = 2000; // Wait before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % placeholders.length;
            speed = 500; // Wait before typing next word
        }

        timer = setTimeout(type, speed);
    };

    type();

    return () => clearTimeout(timer);
  }, [inputVisible, isSubmitted, inputValue]);

  useEffect(() => {
    if (!startAnimation) return;

    const runSequence = async () => {
      const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
      
      await wait(500);
      setLines(prev => [...prev, "> Dasari_VPK_AI_Protocol v2.5.0 initialized..."]);
      
      await wait(600);
      setLines(prev => [...prev, "> Role: Full-Stack Engineer"]);

      await wait(600);
      setLines(prev => [...prev, "> Checking availability..."]);
      
      await wait(800);
      setLines(prev => [...prev, "> STATUS: Open for opportunities."]);
      
      await wait(600);
      setLines(prev => [...prev, "> AUTOMATION: Initiate 15-min feasibility call booking? [Y/n]"]);
      
      await wait(300);
      setInputVisible(true);
    };

    runSequence();
  }, [startAnimation]);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      if (isSubmitted) return; 

      const rawInput = inputValue.trim();
      const command = rawInput.toLowerCase();
      
      setLines(prev => [...prev, `$ ${rawInput}`]);
      setInputValue('');

      const validYes = ['y', 'yes', 'sure', 'ok', 'yeah', 'confirm', 'let\'s go', 'absolutely', '']; 
      const validNo = ['n', 'no', 'nah', 'cancel', 'exit', 'abort'];

      if (validYes.includes(command)) {
        setIsSubmitted(true);
        setInputVisible(false); 

        const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
        await wait(400);
        setLines(prev => [...prev, "> Confirmed. Redirecting to scheduler..."]);
        await wait(600);
        setShowButton(true);
      } else if (validNo.includes(command)) {
        setIsSubmitted(true);
        setInputVisible(false);

        const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
        await wait(400);
        setLines(prev => [...prev, "> Sequence aborted by user."]);
        await wait(600);
        setLines(prev => [...prev, "> Switching to manual contact mode..."]);
        await wait(600);
        setShowButton(true);
      } else {
        const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
        await wait(150);
        setLines(prev => [...prev, `> Error: Command '${rawInput}' not found.`]);
        setLines(prev => [...prev, "> Please type 'Yes' [Y] or 'No' [n]."]);
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputVisible && !isSubmitted) {
      inputRef.current?.focus();
    }
  };

  return (
    <section id="contact" className="py-16 pb-24 md:pb-32 px-4 md:py-32 md:px-6 bg-transparent transition-colors duration-500 scroll-mt-20 md:scroll-mt-32">
      <div ref={terminalRef} className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-4 md:mb-6 tracking-tight">
                Initialize Connection
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-light px-4">
                Have an idea? Need a technical feasibility check or a working prototype? Type 'Yes' to validate it.
            </p>
        </div>

        {/* Terminal Window */}
        <div 
          className="w-full max-w-3xl rounded-xl overflow-hidden bg-[#0D0D0E]/90 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-zinc-800/50 font-mono text-xs sm:text-sm md:text-base relative group h-[300px] md:h-[380px] flex flex-col cursor-text"
          onClick={handleTerminalClick}
        >
            
            {/* Terminal Chrome */}
            <div className="bg-[#1C1C1E]/90 px-5 py-3.5 flex items-center border-b border-white/5 relative shrink-0 select-none backdrop-blur-md">
                <div className="flex gap-2 absolute left-5">
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#E0443E]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840] border border-[#1AAB29]/50" />
                </div>
                <div className="w-full text-center text-zinc-500 text-xs font-medium opacity-70 flex justify-center items-center gap-2">
                    <TerminalIcon size={12} />
                    <span className="tracking-wide">dasari_vpk_interface — -zsh</span>
                </div>
            </div>

            {/* Terminal Body */}
            <div ref={terminalBodyRef} className="p-4 md:p-8 flex-1 text-left flex flex-col font-mono relative overflow-y-auto no-scrollbar">
                <div className="space-y-3">
                    {lines.map((line, idx) => (
                        <div 
                          key={idx} 
                          className={`font-medium tracking-wide break-words leading-relaxed ${
                            line.startsWith('> Error') 
                              ? 'text-red-400' 
                              : line.startsWith('$') 
                                ? 'text-zinc-300' 
                                : 'text-[#4ADE80] drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]'
                          }`}
                        >
                            {line}
                        </div>
                    ))}
                </div>

                {/* Interactive Input Line */}
                {inputVisible && !isSubmitted && (
                    <div className="mt-4 flex items-center gap-3 text-zinc-300">
                        <span className="text-[#4ADE80] font-bold text-lg select-none">$</span> 
                        <div className="relative flex-1">
                           {/* Ghost Placeholder Text */}
                           {inputValue === '' && (
                             <span className="absolute top-0 left-0 text-zinc-600 font-bold tracking-wider text-lg pointer-events-none opacity-50">
                               {placeholderText}
                             </span>
                           )}
                           
                           <input
                              ref={inputRef}
                              type="text"
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                              onKeyDown={handleKeyDown}
                              className="w-full bg-transparent outline-none border-none text-white font-bold tracking-wider text-lg p-0 m-0 relative z-10"
                              autoComplete="off"
                              spellCheck="false"
                              autoFocus
                           />
                           {/* Custom Block Cursor */}
                           {inputValue === '' && (
                               <span className="absolute top-0 left-0 w-2.5 h-6 bg-zinc-500 animate-blink pointer-events-none opacity-70" 
                                style={{ left: `${placeholderText.length * 11}px` }}
                               />
                           )}
                             {inputValue === '' && (
                               <span className="absolute top-0 w-2.5 h-6 bg-zinc-500/50 animate-blink pointer-events-none" style={{ left: 0 }} />
                             )}
                        </div>
                    </div>
                )}
                
                {showButton && (
                   <div className="mt-4 text-zinc-500 text-xs md:text-sm italic border-t border-white/5 pt-4 animate-in fade-in duration-500">
                      {'>'} Session closed. Interface ready below.
                   </div>
                )}
                
            </div>
        </div>

        {/* Action Button */}
        <div className={`mt-10 md:mt-14 transition-all duration-700 transform ${showButton ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
            <a 
                href="mailto:cherrybangari583@gmail.com" 
                className="flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-full font-bold text-base md:text-lg shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all hover:scale-105 active:scale-95"
            >
                <Phone className="fill-current w-5 h-5" />
                <span>Book a 15-min Feasibility Call</span>
            </a>
        </div>

      </div>
    </section>
  );
};

export default ContactTerminal;
