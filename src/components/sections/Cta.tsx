"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "../ui/Button";

export const Cta = () => {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto w-full text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-foreground/5 rounded-[3rem] p-12 md:p-20 border border-foreground/10"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Ready to scale your digital presence?
        </h2>
        <p className="text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Whether you need a high-performance website, a comprehensive marketing strategy, or premium visual assets—let's build something exceptional together.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-[280px] sm:max-w-none mx-auto">
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="primary">
              <span className="flex items-center justify-center gap-2">
                <Mail size={18} /> Get in Touch
              </span>
            </Button>
          </a>
          <a href="/Abdullah_Nadim_CV.pdf" download className="w-full sm:w-auto">
            <Button variant="secondary">
              <span className="flex items-center justify-center gap-2">
                <Download size={18} /> Download CV
              </span>
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};