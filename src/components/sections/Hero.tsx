"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button"; 

export const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 75, damping: 20, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const bgX = useTransform(springX, [-1, 1], [15, -15]);
  const bgY = useTransform(springY, [-1, 1], [15, -15]);
  
  const textX = useTransform(springX, [-1, 1], [-25, 25]);
  const textY = useTransform(springY, [-1, 1], [-25, 25]);
  
  const fgX = useTransform(springX, [-1, 1], [-60, 60]);
  const fgY = useTransform(springY, [-1, 1], [-60, 60]);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (windowSize.width === 0) return;
    const x = (e.clientX / windowSize.width) * 2 - 1;
    const y = (e.clientY / windowSize.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* LAYER 1: BACKGROUND */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none"
      >
        <div className="w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-foreground/5 blur-3xl" />
        <div className="hidden md:block absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-foreground/10 blur-[100px]" />
      </motion.div>

      {/* LAYER 2: MIDGROUND */}
      <motion.div 
        style={{ x: textX, y: textY }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mt-12 md:mt-0"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full bg-foreground/10 border border-foreground/20 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 md:mb-8 backdrop-blur-md"
        >
          Abdullah Nadim
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          // FIX: Added break-words and scaled-down text sizes for smaller mobile devices
          className="text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.1] md:leading-[0.9] mb-6 uppercase w-full break-words px-2"
        >
          MULTIDISCIPLINARY <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground/50 to-foreground">
            CREATOR.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // FIX: Adjusted padding for better breathing room on small screens
          className="text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mb-10 font-medium px-6 leading-relaxed"
        >
          I don't just write code. I am a freelance digital artist bridging the gap between web development, high-end video editing, graphic design, and conversion-driven marketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0"
        >
          <Button variant="primary" onClick={() => scrollToSection('portfolio')}>
            View My Work
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>
            Let's Talk
          </Button>
        </motion.div>
      </motion.div>

      {/* LAYER 3: FOREGROUND */}
      <motion.div 
        style={{ x: fgX, y: fgY }}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        {/* Floating Content Pill */}
        <div className="hidden md:flex absolute top-1/4 right-[10%] lg:right-[20%] px-5 py-3 bg-background/40 border border-foreground/10 rounded-2xl backdrop-blur-xl shadow-2xl rotate-6 items-center gap-3">
          <div className="w-4 h-4 rounded-full border-2 border-foreground/50" />
          <span className="font-bold text-sm text-foreground/80">Content & Motion</span>
        </div>

        {/* Floating Engineering Pill */}
        <div className="hidden md:flex absolute bottom-1/3 left-[10%] lg:left-[20%] px-6 py-3 bg-foreground text-background font-bold text-sm rounded-full shadow-[0_0_40px_rgba(0,0,0,0.3)] -rotate-12 backdrop-blur-md items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Website Managment
        </div>
      </motion.div>
    </section>
  );
};