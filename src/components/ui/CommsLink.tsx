"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, AtSign, Mail, X, MessageCircle } from "lucide-react";

export const CommsLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const LINKS = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/8801XXXXXXXXX", 
      color: "hover:text-green-500 hover:bg-green-500/10 border-green-500/20",
    },
    {
      name: "Instagram",
      icon: AtSign,
      href: "https://instagram.com/yourhandle", 
      color: "hover:text-pink-500 hover:bg-pink-500/10 border-pink-500/20",
    },
    {
      name: "Direct Email",
      icon: Mail,
      href: "mailto:mirabdullahnadim@gmail.com",
      color: "hover:text-blue-500 hover:bg-blue-500/10 border-blue-500/20",
    }
  ];

  return (
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[90] flex flex-col items-start gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2"
          >
            {LINKS.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl border border-foreground/10 bg-background/90 backdrop-blur-md shadow-lg transition-all duration-300 ${link.color}`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-bold tracking-wide">{link.name}</span>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        layout
        onClick={() => setIsOpen(!isOpen)}
        // FIX: Added w-12 on mobile, expanding to w-auto on md screens
        className={`flex items-center justify-center h-12 w-12 md:w-auto md:px-4 rounded-full border shadow-2xl backdrop-blur-md overflow-hidden transition-colors duration-300 ${
          isOpen
            ? "bg-foreground border-foreground text-background"
            : "bg-background/80 border-foreground/20 text-foreground hover:border-foreground/50"
        }`}
      >
        <motion.div layout className="flex items-center justify-center font-mono text-xs md:text-sm font-bold gap-3">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2"
              >
                <X size={16} strokeWidth={3} />
                <span className="hidden md:inline">CLOSE CHANNEL</span>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                <span className="hidden md:inline ml-1">SECURE COMMS</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.button>
    </div>
  );
};