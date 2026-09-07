"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, MonitorPlay, Star } from "lucide-react";

const expertise = [
  { value: "10+", label: "Years Meta Ads", icon: Target },
  { value: "6+", label: "Years Digital Strategy", icon: TrendingUp },
  { value: "3+", label: "Years Video & Graphics", icon: MonitorPlay },
  { value: "100%", label: "Client Satisfaction", icon: Star },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: The Manifesto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-6">
            The Architect
          </h2>
          
          <div className="space-y-8">
            {/* The Hook */}
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-tight tracking-tight">
              I engineer digital ecosystems designed to <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground/70 to-foreground">captivate and convert.</span>
            </p>
            
            {/* The Breakdown */}
            <div className="space-y-6 text-lg text-muted leading-relaxed border-l-2 border-foreground/10 pl-6">
              <p>
                I bridge the gap between heavy computational logic and cinematic visual art. No boilerplate code. No generic templates.
              </p>
              <p>
                Merging system architecture with motion graphics and high-stakes media strategy, I build experiences that don't just look incredible—they perform flawlessly.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hybrid Stat & Skill Bento */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-[3rem] -z-10 blur-3xl" />
          
          <div className="grid grid-cols-2 gap-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-foreground/5 border border-foreground/10 p-6 md:p-8 rounded-3xl flex flex-col justify-between gap-4 hover:bg-foreground/10 transition-colors duration-300 relative overflow-hidden group"
                >
                  {/* Subtle Icon in background */}
                  <Icon 
                    size={120} 
                    strokeWidth={0.5} 
                    className="absolute -bottom-6 -right-6 text-foreground/5 group-hover:text-foreground/10 transition-colors duration-500" 
                  />
                  
                  <div className="relative z-10">
                    <h4 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-2">
                      {item.value}
                    </h4>
                    <span className="font-bold tracking-tight text-sm md:text-base text-muted group-hover:text-foreground transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};