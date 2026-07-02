import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaMicrochip } from 'react-icons/fa';
import GlowCard from './GlowCard';

const Services = () => {
  const services = [
    {
      title: 'Full Stack Development',
      desc: 'Building responsive frontend panels and highly scalable Node.js/Express APIs with robust database layers in MongoDB and SQL.',
      icon: <FaCode size={28} className="text-neon-cyan" />,
      colorClass: 'group-hover:border-neon-cyan/40',
      borderGlow: 'bg-neon-cyan',
      glowColor: 'rgba(0, 242, 254, 0.15)',
    },
    {
      title: 'AI & Automation',
      desc: 'Integrating cognitive model APIs, appointment automation configurations, n8n webhook nodes, and real-time email dispatchers.',
      icon: <FaRobot size={28} className="text-neon-purple" />,
      colorClass: 'group-hover:border-neon-purple/40',
      borderGlow: 'bg-neon-purple',
      glowColor: 'rgba(127, 0, 255, 0.15)',
    },
    {
      title: 'IoT Projects',
      desc: 'Developing hardware-connected trackers, emergency warning sirens, and administrative maps showing real-time GPS locations.',
      icon: <FaMicrochip size={28} className="text-neon-pink" />,
      colorClass: 'group-hover:border-neon-pink/40',
      borderGlow: 'bg-neon-pink',
      glowColor: 'rgba(254, 8, 181, 0.15)',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="services" className="relative py-24 px-[6%] bg-space-deep">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-orbitron text-xs font-semibold tracking-widest text-neon-cyan uppercase mb-2 block">
            What I Offer
          </span>
          <h2 className="font-orbitron font-extrabold text-white text-3xl md:text-4xl tracking-wide">
            My Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="w-full h-full"
            >
              <GlowCard 
                glowColor={service.glowColor}
                className="group relative p-8 w-full h-full flex flex-col text-left overflow-hidden clickable"
              >
                {/* Top border animated glow strip */}
                <span className={`absolute top-0 left-0 w-0 h-[2px] ${service.borderGlow} group-hover:w-full transition-all duration-500`} />
                
                {/* Clean Neon Icon Box */}
                <div className="relative mb-6 w-14 h-14 rounded-xl bg-white/2 flex justify-center items-center border border-white/5 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="font-orbitron font-bold text-white text-lg tracking-wide mb-4">
                  {service.title}
                </h3>
                
                <p className="text-sm text-[#8b85a3] leading-relaxed">
                  {service.desc}
                </p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
