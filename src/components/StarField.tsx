import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  hue: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationId: number;
    let time = 0;

    const starCount = Math.min(Math.floor((width * height) / 4000), 300);
    const stars: Star[] = [];

    const createStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 0.8 + 0.2,
          radius: Math.random() * 1.5 + 0.3,
          baseOpacity: Math.random() * 0.5 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          hue: Math.random() > 0.85 ? 45 : Math.random() > 0.5 ? 30 : 0,
        });
      }
    };

    createStars();

    const shootingStars: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      length: number;
    }[] = [];

    const spawnShootingStar = () => {
      if (Math.random() > 0.995 && shootingStars.length < 2) {
        const startX = Math.random() * width * 0.6;
        const startY = Math.random() * height * 0.4;
        const angle = Math.PI * 0.25 + Math.random() * 0.2;
        const speed = Math.random() * 4 + 6;
        shootingStars.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0,
          maxLife: 80,
          length: 80 + Math.random() * 60,
        });
      }
    };

    const nebulae = [
      { x: width * 0.2, y: height * 0.3, r: 300, color: 'rgba(30, 58, 95, 0.08)' },
      { x: width * 0.8, y: height * 0.6, r: 250, color: 'rgba(212, 168, 42, 0.04)' },
      { x: width * 0.5, y: height * 0.8, r: 350, color: 'rgba(42, 107, 107, 0.05)' },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const neb of nebulae) {
        const grad = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, neb.r);
        grad.addColorStop(0, neb.color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.fillRect(neb.x - neb.r, neb.y - neb.r, neb.r * 2, neb.r * 2);
      }

      for (const star of stars) {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const opacity = star.baseOpacity * twinkle * star.z;
        const r = star.radius * star.z;

        if (star.hue > 0) {
          ctx.fillStyle = `hsla(${star.hue}, 70%, 70%, ${opacity})`;
        } else {
          ctx.fillStyle = `rgba(230, 230, 245, ${opacity})`;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, r, 0, Math.PI * 2);
        ctx.fill();

        if (star.hue === 45 && twinkle > 0.85) {
          ctx.fillStyle = `rgba(232, 197, 68, ${opacity * 0.15})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      spawnShootingStar();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.vx;
        s.y += s.vy;
        s.life++;

        const progress = s.life / s.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.8;

        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - s.vx * (s.length / 8), s.y - s.vy * (s.length / 8)
        );
        grad.addColorStop(0, `rgba(243, 217, 107, ${alpha})`);
        grad.addColorStop(0.4, `rgba(232, 197, 68, ${alpha * 0.5})`);
        grad.addColorStop(1, 'rgba(232, 197, 68, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * (s.length / 8), s.y - s.vy * (s.length / 8));
        ctx.stroke();

        if (s.life >= s.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

      time++;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createStars();
      nebulae[0].x = width * 0.2;
      nebulae[0].y = height * 0.3;
      nebulae[1].x = width * 0.8;
      nebulae[1].y = height * 0.6;
      nebulae[2].x = width * 0.5;
      nebulae[2].y = height * 0.8;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
