import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'services', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Services', target: 'services' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Experience', target: 'experience' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full h-20 flex justify-between items-center px-[6%] z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-space-dark/70 backdrop-blur-md border-b border-white/5 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="font-orbitron font-extrabold text-xl tracking-wider text-white select-none">
        Portfolio<span className="text-neon-cyan animate-pulse">.</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            className={`font-orbitron text-xs font-semibold tracking-widest uppercase transition-all duration-200 relative py-2 ${
              activeSection === item.target 
                ? 'text-neon-cyan drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {item.label}
            {activeSection === item.target && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_8px_#00f2fe]" />
            )}
          </a>
        ))}
      </nav>
      
      {/* Desktop Github Button */}
      <a 
        href="https://github.com/Gourav-jii" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hidden md:flex font-orbitron text-xs font-semibold tracking-wider text-white px-5 py-2.5 rounded-full border border-neon-purple hover:border-neon-cyan hover:bg-neon-cyan/5 hover:text-neon-cyan hover:shadow-cyan-glow transition-all duration-300 clickable"
      >
        Github Profile
      </a>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-10 h-10 flex justify-center items-center text-white border border-white/10 hover:border-neon-cyan rounded-xl bg-white/2 hover:bg-neon-cyan/5 transition-all duration-300 focus:outline-none z-50 cursor-pointer"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-[#08131f]/95 backdrop-blur-lg border-b border-white/5 py-8 px-[6%] flex flex-col gap-6 md:hidden z-40"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={() => setIsOpen(false)}
                  className={`font-orbitron text-sm font-semibold tracking-widest uppercase transition-all duration-200 py-2 border-b border-white/2 ${
                    activeSection === item.target 
                      ? 'text-neon-cyan drop-shadow-[0_0_8px_rgba(0,242,254,0.4)] border-neon-cyan/20' 
                      : 'text-slate-400 hover:text-white border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a 
              href="https://github.com/Gourav-jii" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsOpen(false)}
              className="font-orbitron text-xs font-semibold tracking-wider text-center text-white px-5 py-3 rounded-full border border-neon-purple hover:border-neon-cyan hover:bg-neon-cyan/5 hover:text-neon-cyan hover:shadow-cyan-glow transition-all duration-300 w-full clickable"
            >
              Github Profile
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
