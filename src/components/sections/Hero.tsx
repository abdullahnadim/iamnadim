"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto pt-20">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        className="flex flex-col items-center"
      >
        <motion.span 
          variants={fadeUp}
          className="text-sm font-medium tracking-widest uppercase text-muted mb-6"
        >
          Abdullah Nadim — Digital Strategist & Creator
        </motion.span>
        
        <motion.h1 
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Building Digital Experiences <br className="hidden md:block" /> That Drive Results.
        </motion.h1>
        
        <motion.p 
          variants={fadeUp}
          className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed"
        >
          I help brands scale through high-performance website development, strategic digital marketing, premium graphic design, and engaging video editing.
        </motion.p>
        
        <motion.div 
          variants={fadeUp} 
          className="flex flex-col sm:flex-row gap-4 w-full max-w-[280px] sm:max-w-none mx-auto sm:justify-center"
        >
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="primary">
              <span className="flex items-center gap-2">
                Hire Me <ArrowRight size={18} />
              </span>
            </Button>
          </a>
          <a href="#portfolio" className="w-full sm:w-auto">
            <Button variant="secondary">View Work</Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};