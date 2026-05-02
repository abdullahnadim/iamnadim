"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-[80%] max-w-3xl"
    >
      <nav className="flex items-center justify-between px-6 py-3 md:py-4 rounded-full bg-background/70 backdrop-blur-md border border-foreground/10 shadow-sm">
        <a href="#" className="font-extrabold tracking-tighter text-xl">
          AN.
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Work</a>
        </div>
        <a 
          href="#contact" 
          className="px-5 py-2 md:px-6 md:py-2.5 bg-foreground text-background rounded-full text-sm font-bold hover:scale-105 transition-transform duration-300"
        >
          Let's Talk
        </a>
      </nav>
    </motion.div>
  );
};