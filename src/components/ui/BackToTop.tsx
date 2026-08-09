"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [scrollPercent, setScrollPercent] = useState("000");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05 && !isLaunching) {
      setIsVisible(true);
    } else if (latest <= 0.05) {
      setIsVisible(false);
    }
    const percent = Math.min(100, Math.max(0, Math.round(latest * 100)));
    setScrollPercent(percent.toString().padStart(3, "0"));
  });

  const handleAscend = () => {
    setIsLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      setIsLaunching(false);
      setIsVisible(false);
      setIsHovered(false);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={
            isLaunching
              ? { opacity: 0, y: -1000, scale: 0.5 } 
              : { opacity: 1, y: 0, scale: 1 }       
          }
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: isLaunching ? 0.8 : 0.4, ease: "easeOut" }}
          // FIX: Tighter to the corner on mobile (bottom-4 right-4)
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[90]"
        >
          <motion.button
            layout
            onClick={handleAscend}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            // FIX: Added w-12 on mobile, expanding to w-auto on md screens
            className={`flex items-center justify-center h-12 w-12 md:w-auto md:px-4 rounded-full border shadow-2xl backdrop-blur-md overflow-hidden transition-colors duration-300 ${
              isHovered
                ? "bg-foreground border-foreground text-background"
                : "bg-background/80 border-foreground/20 text-foreground"
            }`}
          >
            <motion.div
              layout
              className="flex items-center justify-center font-mono text-xs md:text-sm font-bold gap-3"
            >
              <AnimatePresence mode="wait">
                {isHovered ? (
                  <motion.div
                    key="hover"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    >
                      <ArrowUp size={16} strokeWidth={3} />
                    </motion.div>
                    <span className="hidden md:inline">INITIATE ASCENT</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span className="hidden md:inline opacity-70">SYS.Y:</span>
                    <span>{scrollPercent}%</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};