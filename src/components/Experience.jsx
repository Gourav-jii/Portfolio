import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

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

        {/* Experience Cards */}
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 bg-[#0a1524]/30 border border-white/5 rounded-2xl text-left hover:border-neon-pink/30 hover:shadow-[0_0_20px_rgba(254,8,181,0.1)] transition-all duration-300 group"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-neon-pink to-neon-purple rounded-full group-hover:shadow-[0_0_8px_#fe08b5] transition-all duration-300" />

              <div className="pl-5">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-neon-pink/10 border border-neon-pink/20 flex justify-center items-center text-neon-pink flex-shrink-0 mt-0.5">
                      <FaBriefcase size={14} />
                    </div>
                    <div>
                      <h3 className="font-orbitron font-bold text-white text-base tracking-wide leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neon-pink font-semibold mt-0.5">{item.organization}</p>
                    </div>
                  </div>
                  <span className="font-orbitron text-[10px] text-[#5c5770] tracking-wider whitespace-nowrap bg-white/2 border border-white/5 px-3 py-1 rounded-full self-start">
                    {item.duration}
                  </span>
                </div>

                <p className="text-xs text-[#8b85a3] leading-relaxed mb-4 pl-12">
                  {item.desc}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2 pl-12">
                  {item.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="font-orbitron text-[8px] tracking-wider text-neon-pink bg-neon-pink/5 border border-neon-pink/15 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
