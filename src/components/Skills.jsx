import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiSupabase, 
  SiPython, SiCplusplus 
} from 'react-icons/si';
import { FaGitAlt, FaGithub, FaJava, FaCss3Alt } from 'react-icons/fa';
import GlowCard from './GlowCard';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      glowColor: 'rgba(0, 242, 254, 0.15)',
      skills: [
        { name: 'HTML5', percentage: 95, icon: <SiHtml5 size={18} className="text-[#e34f26]" /> },
        { name: 'CSS3', percentage: 90, icon: <FaCss3Alt size={18} className="text-[#1572b6]" /> },
        { name: 'JavaScript', percentage: 90, icon: <SiJavascript size={16} className="text-[#f7df1e] rounded-sm" /> },
        { name: 'React', percentage: 85, icon: <SiReact size={18} className="text-[#61dafb] animate-spin-slow" /> },
        { name: 'Tailwind CSS', percentage: 92, icon: <SiTailwindcss size={18} className="text-[#38bdf8]" /> },
      ]
    },
    {
      title: 'Backend',
      glowColor: 'rgba(127, 0, 255, 0.15)',
      skills: [
        { name: 'Node.js', percentage: 85, icon: <SiNodedotjs size={18} className="text-[#339933]" /> },
        { name: 'Express.js', percentage: 82, icon: <SiExpress size={18} className="text-white" /> },
        { name: 'MongoDB', percentage: 80, icon: <SiMongodb size={18} className="text-[#47a248]" /> },
        { name: 'Firebase', percentage: 75, icon: <SiFirebase size={18} className="text-[#ffca28]" /> },
        { name: 'Supabase', percentage: 78, icon: <SiSupabase size={18} className="text-[#3ecf8e]" /> },
      ]
    },
    {
      title: 'Other',
      glowColor: 'rgba(254, 8, 181, 0.15)',
      skills: [
        { name: 'Git & GitHub', percentage: 88, icon: <FaGitAlt size={18} className="text-[#f05032]" /> },
        { name: 'Python', percentage: 82, icon: <SiPython size={18} className="text-[#3776ab]" /> },
        { name: 'Java', percentage: 80, icon: <FaJava size={18} className="text-[#007396]" /> },
        { name: 'C++', percentage: 75, icon: <SiCplusplus size={18} className="text-[#00599c]" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-[6%] bg-space-dark">
      
      {/* Blurred background glows */}
      <div className="absolute top-[40%] left-[5%] w-[250px] h-[250px] bg-neon-pink/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-semibold tracking-widest text-neon-cyan uppercase mb-2 block">
            Capabilities
          </span>
          <h2 className="font-orbitron font-extrabold text-white text-3xl md:text-4xl tracking-wide">
            My Skills
          </h2>
        </div>

        {/* Skills Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="w-full h-full"
            >
              <GlowCard 
                glowColor={category.glowColor}
                className="p-6 w-full h-full text-left clickable"
              >
                <h3 className="font-orbitron font-bold text-white text-base tracking-wider uppercase mb-6 text-neon-cyan border-b border-white/5 pb-3">
                  {category.title}
                </h3>
                
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="p-3.5 rounded-xl border border-white/5 bg-[#0c1a2d]/30 hover:border-white/10 hover:bg-[#0c1a2d]/50 transition-all duration-200 flex flex-col group/skill"
                    >
                      <div className="flex justify-between items-center mb-2.5">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 rounded-lg bg-white/2 border border-white/5 group-hover/skill:scale-110 transition-transform duration-200 flex justify-center items-center">
                            {skill.icon}
                          </div>
                          <span className="font-orbitron text-xs font-semibold text-slate-400 tracking-wide group-hover/skill:text-white transition-colors duration-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-orbitron text-xs font-semibold text-neon-cyan">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.05 }}
                          style={{ originX: 0 }}
                          className="h-full bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full shadow-cyan-glow"
                        />
                      </div>
                    </div>
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

export default Skills;
