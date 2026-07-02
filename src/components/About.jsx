import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const [hasAboutPic, setHasAboutPic] = useState(false);

  // Check if about.png exists in the public directory
  useEffect(() => {
    const img = new Image();
    img.src = '/about.png';
    img.onload = () => setHasAboutPic(true);
    img.onerror = () => setHasAboutPic(false);
  }, []);

  return (
    <section id="about" className="relative py-24 px-[6%] bg-space-dark">
      
      {/* Scroll Trigger container */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center max-w-6xl mx-auto">
        
        {/* Left Side: Modern Graphic */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center relative"
        >
          <div 
            className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-2xl border border-white/5 bg-[#0a1524]/40 relative flex justify-center items-center overflow-hidden shadow-dual-glow group"
          >
            {hasAboutPic ? (
              <img 
                src="/about.png" 
                alt="Gourav Swarnkar About" 
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 z-10" 
              />
            ) : (
              /* Custom vector space scene */
              <svg className="w-[85%] h-[85%] animate-float-slow group-hover:scale-105 transition-transform duration-500 z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="28" fill="rgba(0, 242, 254, 0.05)" stroke="#00f2fe" strokeWidth="1" />
                <circle cx="50" cy="50" r="18" fill="rgba(127, 0, 255, 0.1)" stroke="#7f00ff" strokeWidth="1.5" />
                {/* Planetary rings */}
                <ellipse cx="50" cy="50" rx="38" ry="8" stroke="#00f2fe" strokeWidth="1.5" transform="rotate(-15 50 50)" opacity="0.7" />
                <ellipse cx="50" cy="50" rx="42" ry="12" stroke="#fe08b5" strokeWidth="1" strokeDasharray="3 3" transform="rotate(-15 50 50)" opacity="0.5" />
                {/* Astronaut floating */}
                <g transform="translate(42, 38)">
                  <rect x="0" y="0" width="16" height="20" rx="4" fill="rgba(255,255,255,0.08)" stroke="#00f2fe" strokeWidth="1" />
                  <circle cx="8" cy="6" r="4" fill="#0c1a2d" stroke="#7f00ff" strokeWidth="1" />
                  <path d="M4 14 Q8 10, 12 14" stroke="#00f2fe" strokeWidth="1" />
                </g>
                {/* Little stars */}
                <circle cx="20" cy="20" r="1" fill="#ffffff" />
                <circle cx="80" cy="80" r="1.5" fill="#00f2fe" />
                <circle cx="75" cy="25" r="1" fill="#fe08b5" />
              </svg>
            )}

            {/* Rotating rings background */}
            <div className="absolute inset-[-10px] border border-dashed border-neon-cyan/15 rounded-full animate-spin-slow pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col"
        >
          <span className="font-orbitron text-xs font-semibold tracking-widest text-neon-cyan uppercase mb-2">
            Who I Am
          </span>
          <h2 className="font-orbitron font-extrabold text-white text-3xl md:text-4xl tracking-wide mb-6">
            About Gourav Swarnkar
          </h2>

          <div className="flex flex-col gap-6 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              I am a creative full-stack developer committed to creating interactive, robust, and visually stunning web systems. Over the years, I've built solutions integrating AI-driven metrics, IoT dashboards, and responsive frontends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-5 rounded-xl border border-white/5 bg-[#0a1524]/20 hover:border-neon-cyan/20 transition-all duration-300">
                <h4 className="font-orbitron font-semibold text-white text-xs tracking-wider uppercase mb-2 text-neon-cyan">
                  Education
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bachelor of Technology (B.Tech) in Computer Science & Engineering. Solid grounding in algorithms, databases, and network graphics.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-white/5 bg-[#0a1524]/20 hover:border-neon-purple/20 transition-all duration-300">
                <h4 className="font-orbitron font-semibold text-white text-xs tracking-wider uppercase mb-2 text-neon-purple">
                  Experience
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Hands-on developer internship experience building responsive React components, 3D WebGL modules, and high-performance server configurations.
                </p>
              </div>
            </div>

            <AnimatePresence>
              {expanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-2 p-5 rounded-xl border border-white/5 bg-[#0a1524]/30"
                >
                  <h4 className="font-orbitron font-semibold text-white text-xs tracking-wider uppercase mb-2 text-neon-pink">
                    My Passion
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    I thrive on building bridges between technical systems and user aesthetics. My passion is pushing the boundaries of what browser engines can do, deploying WebGL interfaces, smart automation pipelines, and IoT analytics integrations to solve complex problems.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              onClick={() => setExpanded(!expanded)} 
              className="mt-4 align-self-start self-start px-6 py-2.5 rounded-full border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/5 font-orbitron text-xs font-semibold tracking-wider transition-all duration-300 clickable cursor-pointer"
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
