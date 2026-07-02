import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const GlowCard = ({ children, className = '', glowColor = 'rgba(0, 242, 254, 0.18)' }) => {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });

    // 3D Tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((centerY - y) / centerY) * 7; // Max 7 degrees
    const tiltY = ((x - centerX) / centerX) * 7;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 220, damping: 22, mass: 0.5 }}
      style={{ 
        transformStyle: 'preserve-3d', 
        perspective: 1000,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        willChange: 'transform'
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a1524]/40 backdrop-blur-md transition-all duration-300 [transform:translateZ(0)] ${className}`}
    >
      {/* Glowing spotlight following mouse */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 mix-blend-screen"
          style={{
            width: '320px',
            height: '320px',
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            left: `${coords.x - 160}px`,
            top: `${coords.y - 160}px`,
            zIndex: 1,
          }}
        />
      )}
      
      {/* Content wrapper with translateZ to pop content out */}
      <div className="relative z-10 w-full h-full" style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
