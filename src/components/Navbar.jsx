import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      className={`fixed top-0 left-0 w-100% w-full h-20 flex justify-between items-center px-[6%] z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-space-dark/70 backdrop-blur-md border-b border-white/5 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="font-orbitron font-extrabold text-xl tracking-wider text-white">
        Portfolio<span className="text-neon-cyan animate-pulse">.</span>
      </div>
      
      <nav className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <a
            key={item.target}
            href={`#${item.target}`}
            className={`font-orbitron text-xs font-semibold tracking-widest uppercase transition-all duration-200 relative py-2 ${
              activeSection === item.target 
                ? 'text-neon-cyan drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]' 
                : 'text-text-muted hover:text-white'
            }`}
          >
            {item.label}
            {activeSection === item.target && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-cyan shadow-[0_0_8px_#00f2fe]" />
            )}
          </a>
        ))}
      </nav>

      <a 
        href="https://github.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="font-orbitron text-xs font-semibold tracking-wider text-white px-5 py-2.5 rounded-full border border-neon-purple hover:border-neon-cyan hover:bg-neon-cyan/5 hover:text-neon-cyan hover:shadow-cyan-glow transition-all duration-300 clickable"
      >
        Github Profile
      </a>
    </header>
  );
};

export default Navbar;
