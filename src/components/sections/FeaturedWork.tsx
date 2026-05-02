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
        <div className="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-background/10 rounded-2xl border border-background/20 flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h4 className="text-2xl font-bold mb-2 relative z-10">Fashion Asia Limited</h4>
          <p className="text-background/60 relative z-10">Corporate Web Portal</p>
        </div>

        <div className="w-full md:w-1/2">
          <div className="inline-block px-3 py-1 rounded-full bg-background/20 text-background text-xs font-bold uppercase tracking-wider mb-6">
            Featured Case Study
          </div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Digital Transformation for Enterprise Manufacturing.
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-bold mb-2 text-background/80 flex items-center gap-2">
                <CheckCircle2 size={18} /> The Problem
              </h4>
              <p className="text-background/70 leading-relaxed">
                A major Gazipur-based manufacturing company needed a modern digital presence to communicate their scale and attract international B2B partnerships.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-2 text-background/80 flex items-center gap-2">
                <CheckCircle2 size={18} /> The Solution
              </h4>
              <p className="text-background/70 leading-relaxed">
                Designed and engineered a high-performance Next.js corporate website with a clean UX, optimizing their service portfolio for global search visibility.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2 text-background/80 flex items-center gap-2">
                <CheckCircle2 size={18} /> The Result
              </h4>
              <p className="text-background/70 leading-relaxed">
                Established a premium brand authority online, leading to increased inbound inquiries and a streamlined client acquisition pipeline.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};