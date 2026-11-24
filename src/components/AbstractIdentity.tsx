import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  angle: number;
  speed: number;
  isCore: boolean;
}

export const AbstractIdentity: React.FC<{ className?: string; interactive?: boolean }> = ({
  className = '',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pulseCount, setPulseCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 95 };

    // New Warm Charcoal & Terracotta Palette
    const colors = [
      '#F2EEE8', // warm ivory
      '#D66F43', // terracotta accent
      '#A85B3D', // muted burnt orange
      '#C8C2BA', // light warm grey
      '#A9A29A', // muted secondary
    ];

    const initParticles = () => {
      particles.length = 0;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;

      // 1. Core geometric points defining the iconic architectural 'G'
      const numArcPoints = 145;
      for (let i = 0; i < numArcPoints; i++) {
        const angle = 0.55 + (i / numArcPoints) * Math.PI * 1.68;
        const r = radius * (0.92 + Math.sin(i * 0.4) * 0.05);
        const px = centerX + Math.cos(angle) * r;
        const py = centerY + Math.sin(angle) * r;

        particles.push({
          x: px + (Math.random() - 0.5) * 35,
          y: py + (Math.random() - 0.5) * 35,
          originX: px,
          originY: py,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2.2 + 1.2,
          color: i % 14 === 0 ? colors[1] : (i % 3 === 0 ? colors[3] : colors[0]),
          alpha: Math.random() * 0.6 + 0.4,
          angle: Math.random() * Math.PI * 2,
          speed: 0.02 + Math.random() * 0.02,
          isCore: true,
        });
      }

      // Horizontal crossbar of 'G'
      const numBarPoints = 50;
      for (let i = 0; i < numBarPoints; i++) {
        const px = centerX + (i / numBarPoints) * (radius * 0.88);
        const py = centerY;

        particles.push({
          x: px + (Math.random() - 0.5) * 25,
          y: py + (Math.random() - 0.5) * 25,
          originX: px,
          originY: py,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2.0 + 1.4,
          color: i % 6 === 0 ? colors[1] : colors[0],
          alpha: 0.8,
          angle: Math.random() * Math.PI * 2,
          speed: 0.02,
          isCore: true,
        });
      }

      // Vertical down-spur of 'G'
      const numSpurPoints = 35;
      for (let i = 0; i < numSpurPoints; i++) {
        const px = centerX + radius * 0.88;
        const py = centerY + (i / numSpurPoints) * (radius * 0.48);

        particles.push({
          x: px + (Math.random() - 0.5) * 20,
          y: py + (Math.random() - 0.5) * 20,
          originX: px,
          originY: py,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2.0 + 1.2,
          color: colors[0],
          alpha: 0.75,
          angle: Math.random() * Math.PI * 2,
          speed: 0.02,
          isCore: true,
        });
      }

      // 2. Ambient orbital halo & harmonic constellation field
      const numHaloPoints = 120;
      for (let i = 0; i < numHaloPoints; i++) {
        const theta = Math.random() * Math.PI * 2;
        const dist = radius * (0.3 + Math.random() * 1.3);
        const px = centerX + Math.cos(theta) * dist;
        const py = centerY + Math.sin(theta) * dist;

        particles.push({
          x: px,
          y: py,
          originX: px,
          originY: py,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.5 + 0.6,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.4 + 0.15,
          angle: theta,
          speed: 0.005 + Math.random() * 0.015,
          isCore: false,
        });
      }
    };

    initParticles();

    // Mouse handlers (magnetic deflection & repulsion)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Click handler (shockwave dispersion)
    const handleClick = () => {
      setPulseCount((prev) => prev + 1);
      particles.forEach((p) => {
        const dx = p.x - width / 2;
        const dy = p.y - height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        p.vx += (dx / dist) * 14;
        p.vy += (dy / dist) * 14;
      });
    };

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
      canvas.addEventListener('click', handleClick);
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Subtle warm center focal glow
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        width * 0.48
      );
      grad.addColorStop(0, 'rgba(214, 111, 67, 0.12)');
      grad.addColorStop(0.5, 'rgba(25, 24, 23, 0.05)');
      grad.addColorStop(1, 'rgba(16, 17, 18, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Connective constellation threads
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i += 4) {
        for (let j = i + 1; j < Math.min(i + 12, particles.length); j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 1600) {
            const alpha = (1 - Math.sqrt(distSq) / 40) * 0.14;
            ctx.strokeStyle = `rgba(214, 111, 67, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Harmonic breath
        const breath = Math.sin(time + p.angle) * (p.isCore ? 1.5 : 4);
        const targetX = p.originX + Math.cos(time * 0.5 + p.angle) * breath;
        const targetY = p.originY + Math.sin(time * 0.5 + p.angle) * breath;

        // Mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (1 - distance / mouse.radius) * 7.5;
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force;
          p.vy -= Math.sin(angle) * force;
        }

        // Spring return to harmonic target
        const spring = p.isCore ? 0.05 : 0.02;
        p.vx += (targetX - p.x) * spring;
        p.vy += (targetY - p.y) * spring;

        // Damping
        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        // Render point
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('click', handleClick);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <div
      className={`relative group flex items-center justify-center select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair transition-opacity duration-700"
      />

      {/* Decorative Framing Coordinates */}
      <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-[#A9A29A] pointer-events-none flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D66F43] animate-pulse"></span>
        <span>ID // G_OMPRAKASH.0x27</span>
      </div>

      <div className="absolute top-3 right-3 font-mono text-[10px] tracking-wider text-[#A9A29A] pointer-events-none hidden sm:block">
        [MODE: ARCHITECTURAL_CONSTELLATION]
      </div>

      <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-wider text-[#A9A29A]/80 pointer-events-none">
        <span>CLICK TO DISPERSE // HOVER TO DEFLECT</span>
      </div>

      <div className="absolute bottom-3 right-3 font-mono text-[9px] tracking-wider text-[#D66F43] pointer-events-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D66F43]"></span>
        <span>NODES: 350 ACTIVE</span>
      </div>
    </div>
  );
};
