import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

// Custom Typing Loop Hook
const useTyping = (words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 1500) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      clearTimeout(timer);
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const Hero = () => {
  const words = ["Full Stack Developer", "MERN Stack Developer", "AI Enthusiast"];
  const typedText = useTyping(words);
  const [hasProfilePic, setHasProfilePic] = useState(false);
  


  // Check if profile.png exists in the public directory
  useEffect(() => {
    const img = new Image();
    img.src = '/profile.png';
    img.onload = () => setHasProfilePic(true);
    img.onerror = () => setHasProfilePic(false);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-[6%] pt-28 md:pt-20 overflow-hidden bg-space-dark">

      {/* Blurred Glowing Background Circles */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center w-full z-10">

        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-left"
        >
          <span className="font-orbitron text-sm font-semibold tracking-widest text-neon-cyan mb-2 uppercase">
            Hello, It's Me
          </span>
          <h1 className="font-orbitron font-extrabold text-white text-5xl md:text-7xl leading-tight tracking-wide mb-3 drop-shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
            Gourav Swarnkar
          </h1>
          <h3 className="font-orbitron text-xl md:text-3xl font-bold text-white mb-6">
            I am a <span className="text-neon-cyan border-r-2 border-neon-cyan animate-pulse pr-1 drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]">{typedText}</span>
          </h3>

          <p className="text-sm md:text-base text-[#8b85a3] max-w-lg mb-8 leading-relaxed">
            I build modern web applications, AI-powered systems, and IoT-based solutions with clean UI, scalable backend architecture, and real-world problem-solving.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <a
              href="/resume/Gourav_Swarnkar_Resume.pdf"
              download="Gourav_Swarnkar_Resume.pdf"
              className="px-8 py-3.5 rounded-full bg-neon-purple text-white font-orbitron text-xs font-semibold tracking-wider hover:bg-transparent hover:text-neon-cyan border border-neon-purple hover:border-neon-cyan hover:shadow-cyan-glow transition-all duration-300 flex items-center justify-center clickable"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-neon-cyan text-neon-cyan font-orbitron text-xs font-semibold tracking-wider hover:bg-neon-cyan/5 hover:shadow-cyan-glow transition-all duration-300 flex items-center justify-center clickable"
            >
              Hire Me
            </a>
          </div>

          {/* Glowing Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: <FaLinkedinIn size={18} />, url: 'https://linkedin.com' },
              { icon: <FaGithub size={18} />, url: 'https://github.com' },
              { icon: <FaInstagram size={18} />, url: 'https://instagram.com' },
              { icon: <FaEnvelope size={18} />, url: 'mailto:swarnkargourav123@gmail.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center text-[#8b85a3] hover:text-neon-cyan hover:border-neon-cyan hover:shadow-cyan-glow bg-white/2 hover:bg-neon-cyan/5 transition-all duration-300 clickable"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Profile Photo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center relative"
        >
          <div className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full p-[3px] bg-gradient-to-tr from-neon-cyan via-neon-purple to-neon-pink shadow-dual-glow flex justify-center items-center">
            <div className="w-full h-full rounded-full bg-space-dark overflow-hidden flex justify-center items-center">
              {hasProfilePic ? (
                <img
                  src="/profile.png"
                  alt="Gourav Swarnkar Profile"
                  className="w-[96%] h-[96%] object-cover rounded-full"
                />
              ) : (
                /* Custom Astronaut SVG Logo Graphic */
                <svg className="w-[70%] h-[70%]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="46" r="32" stroke="#00f2fe" strokeWidth="2.5" strokeDasharray="3 3" />
                  <path d="M50 10 C30 10, 18 24, 18 46 C18 68, 30 82, 50 82 C70 82, 82 68, 82 46 C82 24, 70 10, 50 10 Z" fill="rgba(12, 26, 45, 0.55)" stroke="#7f00ff" strokeWidth="2" />
                  <ellipse cx="50" cy="42" rx="22" ry="15" fill="rgba(0, 242, 254, 0.15)" stroke="#00f2fe" strokeWidth="2" />
                  <path d="M34 38 Q42 30, 52 32" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                  <circle cx="64" cy="38" r="1.5" fill="#ffffff" opacity="0.8" />
                  <path d="M26 76 C32 84, 68 84, 74 76" fill="none" stroke="#7f00ff" strokeWidth="2.5" />
                  <rect x="44" y="80" width="12" height="6" rx="2" fill="#00f2fe" opacity="0.5" />
                  <circle cx="47" cy="83" r="1.5" fill="#fe08b5" />
                  <circle cx="53" cy="83" r="1.5" fill="#00f2fe" />
                </svg>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
