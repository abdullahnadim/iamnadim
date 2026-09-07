"use client";

// Added the Variants type import
import { motion, Variants } from "framer-motion";

interface KineticTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const KineticText = ({ text, className = "", delay = 0 }: KineticTextProps) => {
  const words = text.split(" ");

  // Explicitly typed as Variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.12, 
        delayChildren: delay 
      },
    },
  };

  // Explicitly typed as Variants
  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring", // TypeScript now knows this is a valid Framer Motion type
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};