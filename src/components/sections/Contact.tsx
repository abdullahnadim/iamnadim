"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-4">
            Contact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's start a conversation.
          </h3>
          <p className="text-muted leading-relaxed text-lg mb-12 max-w-md">
            I am currently accepting new projects and freelance opportunities. Fill out the form, and I'll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-muted font-medium">Email</p>
                <a href="mailto:mirabdullahnadim@gmail.com" className="text-lg font-bold hover:underline decoration-2 underline-offset-4 transition-all">
                  mirabdullahnadim@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-muted font-medium">Location</p>
                <p className="text-lg font-bold">Based in Dhaka, Bangladesh.</p>
                <p className="text-sm text-muted">Working with clients worldwide.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-foreground text-background p-8 md:p-10 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-background/70 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background placeholder:text-background/30 focus:outline-none focus:border-background transition-colors"
                placeholder="Rahat Khan"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-background/70 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background placeholder:text-background/30 focus:outline-none focus:border-background transition-colors"
                placeholder="rahat@mail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-background/70 mb-2">Project Details</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background placeholder:text-background/30 focus:outline-none focus:border-background transition-colors resize-none"
                placeholder="Tell me about your goals, timeline, and budget..."
              ></textarea>
            </div>
            <button className="w-full bg-background text-foreground py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[0.98] transition-transform">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};