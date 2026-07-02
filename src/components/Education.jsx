import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'CHAIBASA ENGINEERING COLLEGE',
      duration: 'Oct 2023 - Sep 2027',
      status: 'Pursuing',
      desc: 'Gaining a solid foundation in Advanced Data Structures, Relational Databases, Operating Systems, Computer Architecture, and Artificial Intelligence models.',
      tags: ['Data Structures', 'Algorithms', 'DBMS', 'AI', 'Operating Systems'],
      grade: 'Ongoing',
      accentFrom: 'from-neon-cyan',
      accentTo: 'to-neon-purple',
      hoverBorder: 'hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)]',
      iconColor: 'text-neon-cyan',
      iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',
      tagStyle: 'text-neon-cyan bg-neon-cyan/5 border-neon-cyan/15',
    },
    {
      degree: 'Intermediate (PCM)',
      institution: 'MUSABONI MINES INTER COLLEGE',
      duration: '2021 - 2023',
      status: 'Completed',
      desc: 'Completed intermediate high school studies focusing on Physics, Chemistry, and Mathematics, achieving 69% marks under the JAC board.',
      tags: ['Physics', 'Chemistry', 'Mathematics', 'JAC Board'],
      grade: '69%',
      accentFrom: 'from-neon-cyan',
      accentTo: 'to-neon-purple',
      hoverBorder: 'hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)]',
      iconColor: 'text-neon-cyan',
      iconBg: 'bg-neon-cyan/10 border-neon-cyan/20',
      tagStyle: 'text-neon-cyan bg-neon-cyan/5 border-neon-cyan/15',
    },
    {
      degree: 'Matriculation',
      institution: 'SARASWATI SHISHU VIDYA MANDIR',
      duration: '2021',
      status: 'Completed',
      desc: 'Completed secondary school education achieving an impressive 90.80% marks under the JAC board with distinction.',
      tags: ['Secondary Education', 'JAC Board'],
      grade: '90.80%',
      accentFrom: 'from-neon-purple',
      accentTo: 'to-neon-cyan',
      hoverBorder: 'hover:border-neon-purple/30 hover:shadow-[0_0_20px_rgba(127,0,255,0.1)]',
      iconColor: 'text-neon-purple',
      iconBg: 'bg-neon-purple/10 border-neon-purple/20',
      tagStyle: 'text-neon-purple bg-neon-purple/5 border-neon-purple/15',
    },
  ];

  return (
    <section id="education" className="relative py-24 px-[6%] bg-space-deep">
      {/* Cyan glow */}
      <div className="absolute top-[20%] left-[3%] w-[280px] h-[280px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-semibold tracking-widest text-neon-cyan uppercase mb-2 block">
            Academic Background
          </span>
          <h2 className="font-orbitron font-extrabold text-white text-3xl md:text-4xl tracking-wide">
            My Education
          </h2>
          <p className="text-sm text-[#8b85a3] mt-4 max-w-xl mx-auto">
            Academic milestones that shaped my technical foundations and engineering mindset.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`relative p-6 bg-[#0a1524]/30 border border-white/5 rounded-2xl text-left transition-all duration-300 group flex flex-col ${item.hoverBorder}`}
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accentFrom} ${item.accentTo} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} border flex justify-center items-center ${item.iconColor}`}>
                  <FaGraduationCap size={18} />
                </div>

                {/* Grade / Status badge */}
                <div className="flex flex-col items-end gap-1">
                  <span className="font-orbitron text-[9px] tracking-wider text-[#5c5770] bg-white/2 border border-white/5 px-2 py-0.5 rounded-full">
                    {item.status}
                  </span>
                  {item.grade !== 'Ongoing' && (
                    <span className={`font-orbitron text-base font-extrabold ${item.iconColor} drop-shadow-[0_0_8px_currentColor]`}>
                      {item.grade}
                    </span>
                  )}
                </div>
              </div>

              {/* Degree title */}
              <h3 className="font-orbitron font-bold text-white text-sm tracking-wide leading-snug mb-1">
                {item.degree}
              </h3>

              {/* Institution */}
              <p className={`font-orbitron text-[10px] font-semibold tracking-wider uppercase mb-1 ${item.iconColor}`}>
                {item.institution}
              </p>

              {/* Duration */}
              <p className="font-orbitron text-[10px] text-[#5c5770] tracking-wider mb-4">
                📅 {item.duration}
              </p>

              {/* Description */}
              <p className="text-xs text-[#8b85a3] leading-relaxed mb-4 flex-grow">
                {item.desc}
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {item.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className={`font-orbitron text-[8px] tracking-wider border px-2 py-0.5 rounded-md ${item.tagStyle}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
