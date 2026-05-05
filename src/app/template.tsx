"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // 1. Initial state (when the page first starts loading)
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      
      // 2. Animate state (the final resting position of the page)
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      
      // 3. The timing and physics of the transition
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // This is a highly polished, Apple-like easing curve
      }}
    >
      {children}
    </motion.div>
  );
}