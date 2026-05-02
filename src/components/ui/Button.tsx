"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  const isPrimary = variant === "primary";
  
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold transition-colors duration-300 flex items-center justify-center ${
        isPrimary 
          ? "bg-foreground text-background hover:bg-accent" 
          : "bg-transparent text-foreground border border-foreground/20 hover:border-foreground"
      }`}
      {...props}
    >
      {children}
    </motion.button>
  );
};