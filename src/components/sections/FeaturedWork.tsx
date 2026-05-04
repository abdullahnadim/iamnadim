"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const FeaturedWork = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-foreground text-background rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center hover:shadow-[0_0_50px_rgba(0,0,0,0.2)] transition-shadow duration-700"
      >
        {/* Left Side: Project Graphic / Image */}
        <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-background/10 rounded-2xl border border-background/20 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          {/* 
            Optional: If you have an image for Teka-Poysha, you can add the Next/Image here. 
            For now, it's a sleek text-based graphic block.
          */}
          <h4 className="text-3xl font-extrabold mb-2 relative z-20 tracking-tight">TekaPoysha</h4>
          <p className="text-background/70 relative z-20 font-medium uppercase tracking-widest text-sm">Automated Financial Tracker</p>
          
          {/* Decorative tech-stack tags */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            <span className="text-xs bg-background/20 px-3 py-1 rounded-full backdrop-blur-md">Firebase</span>
            <span className="text-xs bg-background/20 px-3 py-1 rounded-full backdrop-blur-md">Cloud Storage</span>
            <span className="text-xs bg-background/20 px-3 py-1 rounded-full backdrop-blur-md">Automation</span>
          </div>
        </div>

        {/* Right Side: Case Study Copy */}
        <div className="w-full md:w-1/2">
          <div className="inline-block px-3 py-1 rounded-full bg-background/20 text-background text-xs font-bold uppercase tracking-wider mb-6">
            Featured Web Application
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
            Streamlined Expense Automation & Cloud Syncing.
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-2 text-background/80 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-background/60" /> The Problem
              </h4>
              <p className="text-background/70 leading-relaxed">
                Managing granular financial data manually is tedious and prone to data loss. There was a need for a lightweight, highly accessible tracking system without the bloat of traditional banking apps.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-2 text-background/80 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-background/60" /> The Architecture
              </h4>
              <p className="text-background/70 leading-relaxed">
                Engineered a custom tracking application integrated with google server, live database management, paired with Firebase Cloud Storage for secure asset handling and CORS-enabled automation scripts.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2 text-background/80 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-background/60" /> The Result
              </h4>
              <p className="text-background/70 leading-relaxed">
                Delivered a frictionless financial ecosystem that syncs data instantly, significantly reducing manual entry time while providing clear, real-time fiscal overviews.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};