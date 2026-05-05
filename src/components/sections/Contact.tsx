"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x > trackWidth * 0.7) {
      setIsSent(true);
      console.log("Form Data Sent:", formData);
    }
  };

  const handleReset = () => {
    setIsSent(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    // FIX: Increased max-w-4xl to max-w-6xl so the side-by-side layout isn't squished
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-4 flex items-center justify-center md:justify-start gap-2">
          <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          Initiate Project
        </h2>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter">
          Let's build something.
        </h3>
      </div>

      {/* FIX: Adjusted gap and breakpoints for better alignment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-start pt-4">
          <p className="text-lg text-foreground/70 font-medium mb-12 max-w-md leading-relaxed">
            Whether you need a complete digital overhaul, a high-converting ad campaign, or custom web architecture, my inbox is open.
          </p>
          
          <div className="space-y-8">
            <div className="group w-max">
              <p className="text-sm font-bold text-foreground/40 tracking-widest uppercase mb-2">Email</p>
              {/* FIX: Updated to correct email */}
              <a href="mailto:mirabdullahnadim@gmail.com" className="text-xl font-bold hover:text-foreground/70 transition-colors">
                mirabdullahnadim@gmail.com
              </a>
            </div>
            
            <div className="group w-max">
              {/* FIX: Removed aggressive local time, replaced with standard location */}
              <p className="text-sm font-bold text-foreground/40 tracking-widest uppercase mb-2">Location</p>
              <p className="text-xl font-bold text-foreground">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: The Tactile Form */}
        <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm">
          {!isSent ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6"
            >
              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 0.99, y: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/30 transition-shadow shadow-inner"
                />
              </div>

              <div className="relative">
                <motion.input
                  whileFocus={{ scale: 0.99, y: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/30 transition-shadow shadow-inner"
                />
              </div>

              <div className="relative">
                <motion.textarea
                  whileFocus={{ scale: 0.99, y: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-4 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 focus:ring-1 focus:ring-foreground/30 transition-shadow shadow-inner resize-none"
                />
              </div>

              <div className="mt-2">
                <p className="text-xs font-bold text-foreground/40 tracking-widest uppercase mb-3 ml-1">
                  Confirmation Lock
                </p>
                <div 
                  ref={trackRef}
                  className="w-full h-16 bg-background border border-foreground/10 rounded-full relative flex items-center overflow-hidden shadow-inner"
                >
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-sm font-bold text-foreground/30 tracking-widest uppercase">
                      Slide to Transmit
                    </span>
                  </div>

                  <motion.div
                    drag="x"
                    dragConstraints={trackRef}
                    dragSnapToOrigin={true}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    whileDrag={{ scale: 0.95 }}
                    className="w-14 h-14 bg-foreground/90 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing absolute left-1 shadow-lg z-10"
                  >
                    <ArrowRight className="text-background" size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <Check className="text-green-500" size={32} />
              </div>
              <h4 className="text-2xl font-bold tracking-tight mb-2">Transmission Sent.</h4>
              <p className="text-foreground/70 font-medium mb-8">
                I've received your message and will process it shortly.
              </p>
              <button 
                onClick={handleReset}
                className="text-sm font-bold text-foreground/50 hover:text-foreground uppercase tracking-widest transition-colors"
              >
                Reset System
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};