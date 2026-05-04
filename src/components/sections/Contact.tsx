"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // FIX: Lock in the form reference before the async fetch happens
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert FormData to a clean JSON object
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      botcheck: formData.get("botcheck"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // FIX: Calls reset on the saved variable
        setTimeout(() => setStatus("idle"), 4000); 
      } else {
        throw new Error("Failed to send");
      }
      
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-16">
        
        {/* Left Side: Contact Info */}
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

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-foreground text-background p-8 md:p-10 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Honeypot for spam bots */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-background/70 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background placeholder:text-background/30 focus:outline-none focus:border-background transition-colors"
                placeholder="Rahat Khan"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-background/70 mb-2">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background placeholder:text-background/30 focus:outline-none focus:border-background transition-colors"
                placeholder="rahat@mail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-background/70 mb-2">Project Details</label>
              <textarea 
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-background placeholder:text-background/30 focus:outline-none focus:border-background transition-colors resize-none"
                placeholder="Tell me about your goals, timeline, and budget..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="w-full bg-background text-foreground py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[0.98] transition-all disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === "idle" && <>Send Message <Send size={18} /></>}
              {status === "submitting" && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
              {status === "success" && <><CheckCircle2 size={18} className="text-green-600" /> Message Sent!</>}
              {status === "error" && <><AlertCircle size={18} className="text-red-600" /> Error. Try Again.</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};