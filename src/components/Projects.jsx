import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import GlowCard from './GlowCard';

const Projects = () => {
  const projects = [
    {
      title: 'AI Interview Agent',
      desc: 'I built a production-ready AI Interview Agent using the MERN Stack. This project teaches real-world SaaS architecture, backend structuring, authentication, payments integration, and production deployment.',
      features: ['AI Interview Simulator', 'Speech Analysis & Transcription', 'MERN Stack Architecture', 'Scalable Candidate Dashboard'],
      badges: ['MongoDB', 'Express.js', 'React', 'Node.js', 'OpenAI API'],
      github: 'https://github.com/Gourav-jii/interviewIQ',
      demo: 'https://interviewiq-1-u1yr.onrender.com/',
      image: '/project.png',
      glowColor: 'rgba(0, 242, 254, 0.18)',
      accentGrad: 'from-neon-cyan via-[#00f2fe]/40 to-transparent',
      dotBg: 'bg-neon-cyan shadow-[0_0_8px_rgba(0,242,254,0.5)]',
      titleHover: 'group-hover:text-neon-cyan',
      githubBtn: 'border-white/10 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-cyan-glow text-white/70 bg-white/2 hover:bg-neon-cyan/5',
      demoBtn: 'bg-neon-cyan hover:bg-transparent text-space-dark hover:text-neon-cyan border border-neon-cyan hover:border-neon-cyan hover:shadow-cyan-glow',
    },
    {
      title: 'AI Resume Screening & Shortlisting',
      desc: 'An automated resume screening and candidate shortlisting platform. It allows recruiters to upload batches of resumes, extract core skills, evaluate ATS compatibility scores, and rank/shortlist the best candidates using an AI-powered pipeline.',
      features: ['Bulk Resume Upload & Parsing', 'ATS Score Compatibility Evaluation', 'Interactive Recruitment Dashboard', 'n8n Workflow Automation'],
      badges: ['MongoDB', 'Express.js', 'React', 'Node.js', 'n8n', 'AI Integration'],
      github: 'https://github.com/Gourav-jii/AI-Resume-Screening',
      demo: 'https://ai-resume-screening-1jrn.onrender.com/',
      image: '/resume-screening.png',
      glowColor: 'rgba(127, 0, 255, 0.18)',
      accentGrad: 'from-neon-purple via-[#7f00ff]/40 to-transparent',
      dotBg: 'bg-neon-purple shadow-[0_0_8px_rgba(127,0,255,0.5)]',
      titleHover: 'group-hover:text-neon-purple',
      githubBtn: 'border-white/10 hover:border-neon-purple hover:text-neon-purple hover:shadow-purple-glow text-white/70 bg-white/2 hover:bg-neon-purple/5',
      demoBtn: 'bg-neon-purple hover:bg-transparent text-white hover:text-neon-purple border border-neon-purple hover:border-neon-purple hover:shadow-purple-glow',
    },
    {
      title: 'HealFlow - AI Healthcare Chatbot',
      desc: 'An AI-powered healthcare companion and clinic management platform. It helps users understand symptoms, explore medicine insights, schedule appointments with doctors, and delivers reassurance through an interactive, LLM-powered chatbot UI.',
      features: ['AI Symptom & Medication Checker', 'Real-time Doctor Appointment Booking', 'n8n Workflow & Webhook Integration', 'Secure Doctor & Patient Dashboard'],
      badges: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript', 'n8n'],
      github: 'https://github.com/Gourav-jii/Medical-chatboat',
      demo: 'https://healflow-medical-chatbot.onrender.com/',
      image: '/healflow.png',
      glowColor: 'rgba(254, 8, 181, 0.18)',
      accentGrad: 'from-neon-pink via-[#fe08b5]/40 to-transparent',
      dotBg: 'bg-neon-pink shadow-[0_0_8px_rgba(254,8,181,0.5)]',
      titleHover: 'group-hover:text-neon-pink',
      githubBtn: 'border-white/10 hover:border-neon-pink hover:text-neon-pink hover:shadow-pink-glow text-white/70 bg-white/2 hover:bg-neon-pink/5',
      demoBtn: 'bg-neon-pink hover:bg-transparent text-white hover:text-neon-pink border border-neon-pink hover:border-neon-pink hover:shadow-pink-glow',
    },
    {
      title: 'Creative Space Portfolio',
      desc: 'A premium, interactive personal portfolio website designed with custom scrolling starfield constellations, dynamic mouse-tracking 3D glow cards, and macOS-style app windows. Fully optimized with structured SEO schemas.',
      features: ['Interactive Starfield Constellations', '3D Mouse-Tracking Glow Effects', 'macOS-style App Window Mockups', 'Fully Indexed SEO Setup & Site Map'],
      badges: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'PostCSS'],
      github: 'https://github.com/Gourav-jii/Portfolio',
      demo: 'https://gouravswarnkar.com/',
      image: '/portfolio-ss.png',
      glowColor: 'rgba(0, 242, 254, 0.18)',
      accentGrad: 'from-neon-cyan via-neon-purple to-transparent',
      dotBg: 'bg-neon-cyan shadow-[0_0_8px_rgba(0,242,254,0.5)]',
      titleHover: 'group-hover:text-neon-cyan',
      githubBtn: 'border-white/10 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-cyan-glow text-white/70 bg-white/2 hover:bg-neon-cyan/5',
      demoBtn: 'bg-neon-cyan hover:bg-transparent text-space-dark hover:text-neon-cyan border border-neon-cyan hover:border-neon-cyan hover:shadow-cyan-glow',
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-[6%] bg-space-deep overflow-hidden">
      
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-neon-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-semibold tracking-widest text-neon-cyan uppercase mb-2 block animate-pulse">
            My Portfolio
          </span>
          <h2 className="font-orbitron font-extrabold text-white text-3xl md:text-4xl tracking-wide">
            Recent Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto justify-items-center">
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
                glowColor={project.glowColor}
                className="flex flex-col w-full h-full overflow-hidden group clickable border border-white/5 bg-[#0a1524]/30 backdrop-blur-md"
              >
                
                {/* Colored Top Accent Line on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.accentGrad} opacity-30 group-hover:opacity-100 transition-opacity duration-500 z-30`} />

                {/* macOS Style Browser Mockup Frame */}
                <div className="w-full h-48 overflow-hidden border-b border-white/5 relative group/img bg-[#08131f]">
                  {/* Window Controls Bar */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/5 bg-[#070e17]/80 backdrop-blur-sm z-20 relative">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f56] opacity-80" />
                    <span className="w-2 h-2 rounded-full bg-[#ffbd2e] opacity-80" />
                    <span className="w-2 h-2 rounded-full bg-[#27c93f] opacity-80" />
                    <div className="mx-auto text-[9px] text-[#8b85a3]/50 font-mono tracking-wider select-none truncate max-w-[180px]">
                      {project.demo.replace('https://', '').split('/')[0]}
                    </div>
                  </div>
                  
                  {/* Screenshot Container */}
                  <div className="relative w-full h-[calc(100%-33px)] overflow-hidden">
                    {/* Dark filter overlay that fades out on hover */}
                    <div className="absolute inset-0 bg-space-dark/25 group-hover/img:bg-transparent transition-colors duration-500 z-10" />
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Project Meta */}
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className={`font-orbitron font-bold text-white text-lg tracking-wide mb-2 transition-colors duration-300 ${project.titleHover}`}>
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#8b85a3] leading-relaxed mb-5 flex-grow">
                    {project.desc}
                  </p>

                  {/* Features list */}
                  <div className="flex flex-col gap-2 mb-5 border-t border-white/5 pt-4">
                    {project.features.map((feature, fIndex) => (
                      <span key={fIndex} className="text-xs text-[#8b85a3] flex items-center gap-2 group-hover:text-white/80 transition-colors duration-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${project.dotBg} transition-transform duration-300 group-hover:scale-110`} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.badges.map((badge, bIndex) => (
                      <span
                        key={bIndex}
                        className="font-orbitron text-[9px] font-semibold tracking-wider bg-white/2 border border-white/5 text-[#8b85a3] px-2.5 py-1.5 rounded-md hover:text-white transition-colors duration-300 hover:bg-white/5"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Matching Premium Action Buttons */}
                  <div className="flex gap-4 border-t border-white/5 pt-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-grow py-2.5 rounded-xl border font-orbitron text-xs font-semibold tracking-wider transition-all duration-300 flex justify-center items-center gap-2 clickable ${project.githubBtn}`}
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-grow py-2.5 rounded-xl border border-transparent font-orbitron text-xs font-semibold tracking-wider transition-all duration-300 flex justify-center items-center gap-2 clickable ${project.demoBtn}`}
                    >
                      <FaExternalLinkAlt size={11} /> Live Demo
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
