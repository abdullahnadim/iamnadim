"use client";

import { motion, HTMLMotionProps, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  const isPrimary = variant === "primary";
  const ref = useRef<HTMLButtonElement>(null);

  // 1. Create motion values for the X and Y coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 2. Wrap them in a spring for that bouncy, organic physics feel
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // 3. Calculate the distance from the mouse to the center of the button
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // The 0.3 multiplier dictates how "strong" the magnet is. 
    // Higher = pulls further away. Lower = subtle pull.
    x.set(middleX * 0.3); 
    y.set(middleY * 0.3);
  };

  // 4. Snap back to the absolute center when the mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold transition-colors duration-300 flex items-center justify-center ${
        isPrimary 
          ? "bg-foreground text-background hover:bg-foreground/90" 
          : "bg-transparent text-foreground border border-foreground/20 hover:border-foreground"
      }`}
      {...props}
    >
      {children}
    </motion.button>
  );
};