import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      if (prefersReducedMotion) return;
      
      const particleCount = Math.min(Math.floor(window.innerWidth / 15), 100);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawConnections = () => {
      if (!ctx || prefersReducedMotion) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 1500})`;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Soft gradient mesh background
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const time = Date.now() * 0.0005;
      
      const x1 = canvas.width * 0.5 + Math.cos(time) * canvas.width * 0.3;
      const y1 = canvas.height * 0.5 + Math.sin(time) * canvas.height * 0.3;
      const gradient1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, canvas.width * 0.6);
      gradient1.addColorStop(0, 'rgba(20, 25, 30, 0.4)');
      gradient1.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const x2 = canvas.width * 0.5 + Math.cos(time + Math.PI) * canvas.width * 0.3;
      const y2 = canvas.height * 0.5 + Math.sin(time + Math.PI) * canvas.height * 0.3;
      const gradient2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, canvas.width * 0.6);
      gradient2.addColorStop(0, 'rgba(30, 20, 25, 0.4)');
      gradient2.addColorStop(1, 'rgba(5, 5, 5, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (!prefersReducedMotion) {
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
        drawConnections();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ background: '#050505' }}
    />
  );
}
