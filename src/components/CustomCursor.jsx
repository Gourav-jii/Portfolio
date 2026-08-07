import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, input, textarea, [role="button"], .clickable');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', () => setHovered(true));
        target.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-neon-cyan/40 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: clicked ? 0.8 : hovered ? 1.5 : 1,
          borderColor: clicked ? '#fe08b5' : hovered ? '#00f2fe' : 'rgba(0, 242, 254, 0.4)',
          backgroundColor: hovered ? 'rgba(0, 242, 254, 0.1)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_#00f2fe]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: clicked ? 1.5 : hovered ? 0.5 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
