import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import GlowCard from './GlowCard';

const Experience = () => {
  const experienceData = [
    {
      title: 'Full Stack & AI Automation Intern',
      organization: 'Izzki Tech Solution PVT.LTD',
      duration: '26 May 2026 - 30 June 2026',
      desc: 'As an AI Automation Intern, I developed an AI Automation-based Resume Parsing & Candidate Shortlisting System, alongside an AI Medical-Healthcare Chatbot.',
      tags: ['AI Automation', 'React', 'Node.js', 'Resume Parser', 'Healthcare AI'],
    },

    // Add more work experience here
  ];

  return (
    <section id="experience" className="relative py-24 px-[6%] bg-space-dark">
      {/* Purple glow */}
      <div className="absolute top-[30%] right-[5%] w-[280px] h-[280px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-semibold tracking-widest text-neon-pink uppercase mb-2 block">
            Work History
          </span>
          <h2 className="font-orbitron font-extrabold text-white text-3xl md:text-4xl tracking-wide">
            My Experience
          </h2>
          <p className="text-sm text-[#8b85a3] mt-4 max-w-xl mx-auto">
            Professional internships and hands-on real-world work experience.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="w-full h-full flex"
            >
              <GlowCard
                glowColor="rgba(254, 8, 181, 0.15)"
                className="group relative p-6 w-full flex flex-col text-left overflow-hidden clickable bg-[#09111e]/40 border border-white/5 rounded-3xl"
              >
                {/* Cyber Grid Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(254,8,181,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(254,8,181,0.02)_1px,transparent_1px)] bg-[size:24px_24px] opacity-35 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

                {/* Glowing Top Border Edge */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-pink via-neon-purple to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Header: Icon & Duration */}
                <div className="flex justify-between items-start mb-5 relative z-10 w-full">
                  <div className="w-10 h-10 rounded-xl bg-neon-pink/10 border border-neon-pink/25 flex justify-center items-center text-neon-pink shadow-[0_0_15px_rgba(254,8,181,0.1)] group-hover:scale-110 transition-transform duration-300">
                    <FaBriefcase size={16} />
                  </div>

                  {/* Duration Badge */}
                  <span className="font-orbitron text-[9px] text-neon-pink font-bold tracking-widest bg-neon-pink/5 border border-neon-pink/20 px-3 py-1.5 rounded-full flex items-center gap-1 shadow-[inset_0_0_8px_rgba(254,8,181,0.05)]">
                    <span className="w-1 h-1 rounded-full bg-neon-pink animate-pulse" />
                    {item.duration}
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="mb-4 relative z-10">
                  <h3 className="font-orbitron font-extrabold text-white text-base tracking-wide leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-neon-pink tracking-wider mt-1">{item.organization}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mb-6 flex-grow relative z-10">
                  {item.desc}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4 mt-auto relative z-10">
                  {item.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="font-orbitron text-[8px] font-bold tracking-widest uppercase text-slate-300 hover:text-white bg-white/2 border border-white/10 hover:border-neon-pink/40 hover:bg-neon-pink/5 px-2 py-0.5 rounded-full transition-all duration-300 cursor-default shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
