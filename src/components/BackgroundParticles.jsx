import React, { useEffect, useRef } from 'react';

const BackgroundParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = (Math.random() - 0.5) * 0.35;
        
        // Randomly assign cyan, purple, or white colors
        const colors = ['rgba(0, 242, 254, ', 'rgba(127, 0, 255, ', 'rgba(255, 255, 255, '];
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.2;
        this.fadeSpeed = 0.005 + Math.random() * 0.005;
        this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
      }

      update(mouseX, mouseY) {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse Parallax shift (gently pull particles towards mouse coordinate vector)
        const dx = mouseX - canvas.width / 2;
        const dy = mouseY - canvas.height / 2;
        this.x += dx * 0.0005 * this.size;
        this.y += dy * 0.0005 * this.size;

        // Wrap boundaries
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }

        // Pulse alpha
        this.alpha += this.fadeSpeed * this.fadeDirection;
        if (this.alpha > 0.8) {
          this.fadeDirection = -1;
        } else if (this.alpha < 0.1) {
          this.fadeDirection = 1;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.colorBase}${this.alpha})`;
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = this.colorBase.includes('0, 242') ? '#00f2fe' : '#7f00ff';
        ctx.fill();
      }
    }

    // Initialize particles list
    const particleCount = 100;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Track mouse coordinates
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background space gradients
      // Draw constellation connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // If close enough, draw a faint glowing line
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Fading alpha based on distance
            const alpha = (1 - dist / 110) * 0.12;
            const grad = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            
            // Gradient connection between different colored particles
            const col1 = particles[i].colorBase + alpha + ')';
            const col2 = particles[j].colorBase + alpha + ')';
            
            grad.addColorStop(0, col1);
            grad.addColorStop(1, col2);
            
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.55;
            ctx.shadowBlur = 0; // Disable shadow blur for line performance
            ctx.stroke();
          }
        }
      }

      // Draw and update each particle
      particles.forEach((p) => {
        p.update(mouseX, mouseY);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    // Cleanups
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-none" 
    />
  );
};

export default BackgroundParticles;
