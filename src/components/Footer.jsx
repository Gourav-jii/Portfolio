import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-[6%] bg-space-deep border-t border-white/5 flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
        
        {/* Logo */}
        <div className="font-orbitron font-extrabold text-xl tracking-wider text-white">
          Portfolio<span className="text-neon-cyan animate-pulse">.</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {['home', 'about', 'services', 'skills', 'projects', 'experience', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`}
              className="font-orbitron text-[10px] font-semibold tracking-wider text-[#8b85a3] hover:text-neon-cyan uppercase transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            { icon: <FaLinkedinIn size={16} />, url: 'https://linkedin.com' },
            { icon: <FaGithub size={16} />, url: 'https://github.com' },
            { icon: <FaInstagram size={16} />, url: 'https://instagram.com' }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/5 flex justify-center items-center text-[#8b85a3] hover:text-neon-cyan hover:border-neon-cyan hover:shadow-cyan-glow bg-white/2 hover:bg-neon-cyan/5 transition-all duration-300 clickable"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Under line and Back to Top button */}
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 relative">
        <p className="text-xs text-[#5c5770] font-orbitron tracking-wider">
          &copy; {new Date().getFullYear()} Gourav Swarnkar. All rights reserved.
        </p>

        {/* Back to top button */}
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border border-white/5 bg-[#0a1524]/60 text-neon-cyan flex justify-center items-center hover:shadow-cyan-glow hover:border-neon-cyan hover:-translate-y-1 transition-all duration-300 absolute md:relative bottom-16 md:bottom-0 right-0 md:right-0 clickable"
          title="Back to Top"
        >
          <FaArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
