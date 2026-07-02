import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlowCard from './GlowCard';

const Projects = () => {
  const [projectImage, setProjectImage] = useState('/ai.png');

  // Check if project.png exists in public folder
  useEffect(() => {
    const img = new Image();
    img.src = '/project.png';
    img.onload = () => setProjectImage('/project.png');
    img.onerror = () => setProjectImage('/ai.png');
  }, []);

  const projects = [
    {
      title: 'AI Interview Agent',
      desc: 'I built a production-ready AI Interview Agent using the MERN Stack. It automates candidate interviewing with interactive voice sessions, real-time feedback, and behavioral response grading.',
      features: ['AI Interview Simulator', 'Speech Analysis & Transcription', 'MERN Stack Architecture', 'Scalable Candidate Dashboard'],
      badges: ['MongoDB', 'Express.js', 'React', 'Node.js', 'OpenAI API'],
      github: 'https://github.com/Gourav-jii/interviewIQ',
      demo: 'https://interviewiq-1-u1yr.onrender.com/',
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-[6%] bg-space-deep">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-semibold tracking-widest text-neon-cyan uppercase mb-2 block">
            My Portfolio
          </span>
          <h2 className="font-orbitron font-extrabold text-white text-3xl md:text-4xl tracking-wide">
            Recent Projects
          </h2>
        </div>

        {/* Projects Grid - Centered since we have only one project currently */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full max-w-md"
            >
              <GlowCard 
                glowColor="rgba(0, 242, 254, 0.15)"
                className="flex flex-col w-full h-full overflow-hidden group clickable"
              >
                {/* Image Holder with static reference */}
                <div className="w-full h-48 overflow-hidden border-b border-white/5 relative">
                  <img 
                    src={projectImage} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Project Meta */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="font-orbitron font-bold text-white text-lg tracking-wide mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-[#8b85a3] leading-relaxed mb-4 flex-grow">
                    {project.desc}
                  </p>

                  {/* Features list */}
                  <div className="flex flex-col gap-1.5 mb-5 border-t border-white/5 pt-4">
                    {project.features.map((feature, fIndex) => (
                      <span key={fIndex} className="text-xs text-[#5c5770] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.badges.map((badge, bIndex) => (
                      <span 
                        key={bIndex} 
                        className="font-orbitron text-[9px] font-semibold tracking-wider bg-white/2 border border-white/5 text-[#8b85a3] px-2.5 py-1 rounded-md"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Matching Premium Action Buttons */}
                  <div className="flex gap-4 border-t border-white/5 pt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-grow py-2.5 rounded-xl bg-neon-purple hover:bg-transparent text-white hover:text-neon-cyan border border-neon-purple hover:border-neon-cyan hover:shadow-purple-glow text-xs font-orbitron font-semibold tracking-wider transition-all duration-300 flex justify-center items-center gap-2 clickable"
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-grow py-2.5 rounded-xl bg-neon-cyan hover:bg-transparent text-space-dark hover:text-neon-cyan border border-neon-cyan hover:border-neon-cyan hover:shadow-cyan-glow text-xs font-orbitron font-semibold tracking-wider transition-all duration-300 flex justify-center items-center gap-2 clickable"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  </div>

                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
