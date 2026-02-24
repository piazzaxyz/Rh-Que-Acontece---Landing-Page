"use client";
import React, { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  opacityDir: number;
  life: number;
  maxLife: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1, y: -1 });

  const createParticle = useCallback((w: number, h: number, isInitial: boolean = false): Particle => {
    let x, y;
    
    if (isInitial) {
      // Inicialização aleatória na tela
      x = Math.random() * w;
      y = Math.random() * h;
    } else {
      // Reentrante por uma borda aleatória
      const side = Math.random();
      if (side < 0.25) {
        // Topo
        x = Math.random() * w;
        y = -20;
      } else if (side < 0.5) {
        // Fundo
        x = Math.random() * w;
        y = h + 20;
      } else if (side < 0.75) {
        // Esquerda
        x = -20;
        y = Math.random() * h;
      } else {
        // Direita
        x = w + 20;
        y = Math.random() * h;
      }
    }

    return {
      x,
      y,
      vx: (Math.random() - 0.5) * 0.1,
      vy: (Math.random() - 0.5) * 0.08,
      size: Math.random() * 2.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      opacityDir: Math.random() > 0.5 ? 1 : -1,
      life: 0,
      maxLife: Math.random() * 2000 + 1500,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create initial particles — scale count to viewport
    const count = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000));
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(canvas.width, canvas.height, true)
    );

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = { x: -1, y: -1 };
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const goldColor = { r: 228, g: 199, b: 90 };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;

        // Gentle floating
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion
        if (mouse.x > 0 && mouse.y > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        // Shimmer opacity
        p.opacity += p.opacityDir * 0.003;
        if (p.opacity > 0.7) {
          p.opacity = 0.7;
          p.opacityDir = -1;
        }
        if (p.opacity < 0.05) {
          p.opacity = 0.05;
          p.opacityDir = 1;
        }

        // Recycle out-of-bounds or old particles
        if (
          p.y < -50 ||
          p.x < -50 ||
          p.x > canvas.width + 50 ||
          p.y > canvas.height + 50 ||
          p.life > p.maxLife
        ) {
          particles[i] = createParticle(canvas.width, canvas.height, false);
          continue;
        }

        // Draw glow halo
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 3
        );
        gradient.addColorStop(
          0,
          `rgba(${goldColor.r},${goldColor.g},${goldColor.b},${p.opacity * 0.5})`
        );
        gradient.addColorStop(
          1,
          `rgba(${goldColor.r},${goldColor.g},${goldColor.b},0)`
        );
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw solid core
        ctx.beginPath();
        ctx.fillStyle = `rgba(${goldColor.r},${goldColor.g},${goldColor.b},${p.opacity})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connection lines between nearby particles (optimized)
      // Only check nearby particles to improve performance
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < Math.min(i + 15, particles.length); j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = 10000; // 100px squared
          
          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / 100) * 0.08;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${goldColor.r},${goldColor.g},${goldColor.b},${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh", zIndex: 1 }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
