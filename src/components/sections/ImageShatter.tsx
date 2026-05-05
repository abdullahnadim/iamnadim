"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ASCII_CHARS = "@#S%?*+;:,.. ";

export const ImageShatter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    // REPLACE THIS WITH YOUR ACTUAL IMAGE PATH
    img.src = img.src = "/projects/me.jpg";; 
    img.crossOrigin = "Anonymous";

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000, radius: 100 };

    class Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      color: string;
      char: string;
      size: number;
      vx: number;
      vy: number;
      friction: number;
      ease: number;

      constructor(x: number, y: number, color: string, char: string) {
        this.x = Math.random() * canvas!.width;
this.y = Math.random() * canvas!.height;
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.char = char;
        this.size = 10;
        this.vx = 0;
        this.vy = 0;
        this.friction = 0.95;
        this.ease = 0.1;
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.font = `${this.size}px monospace`;
        ctx!.fillText(this.char, this.x, this.y);
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceX = dx / distance;
        const forceY = dy / distance;

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.vx -= forceX * force * 10;
          this.vy -= forceY * force * 10;
        }

        this.vx += (this.originX - this.x) * this.ease;
        this.vy += (this.originY - this.y) * this.ease;
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      const width = 600;
      const height = (img.height / img.width) * width;
      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      const pixels = ctx.getImageData(0, 0, width, height).data;
      ctx.clearRect(0, 0, width, height);

      particles = [];
      const step = 10; // Resolution: lower is higher quality but slower

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const a = pixels[index + 3];

          if (a > 128) {
            const brightness = (r + g + b) / 3;
            const charIndex = Math.floor((brightness / 255) * (ASCII_CHARS.length - 1));
            const char = ASCII_CHARS[charIndex];
            const color = `rgb(${r},${g},${b})`;
            particles.push(new Particle(x, y, color, char));
          }
        }
      }
    };

    img.onload = () => {
      init();
      setIsLoaded(true);
      animate();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full flex flex-col items-center">
      <div className="mb-12 text-center md:text-left w-full">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          Data Visualization
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          The ASCII Matrix.
        </h3>
        <p className="text-foreground/70 font-medium max-w-xl">
          A visual representation of how I see the web. Move your cursor over the image to disrupt the digital structure.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        className="relative bg-background border border-foreground/10 rounded-3xl p-4 md:p-8 shadow-2xl cursor-none"
      >
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto rounded-xl"
        />
        
        {/* Custom Matrix Cursor */}
        <div className="hidden md:block absolute inset-0 pointer-events-none group">
           {/* The cursor logic is handled by the canvas, this just adds an aesthetic overlay if needed */}
        </div>
      </motion.div>
    </section>
  );
};