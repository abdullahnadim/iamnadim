"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Search, Terminal, User, Briefcase, Mail, Laptop, Cpu, Copy, Link as LinkIcon, Command, Download } from "lucide-react";

export const CommandTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // 1. The Global Keydown Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input automatically when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // 2. The Command Registry
  const commands = [
    { id: "home", title: "Go to Home", category: "Navigation", icon: Terminal, action: () => router.push("/") },
    { id: "work", title: "View Case Studies", category: "Navigation", icon: Briefcase, action: () => { router.push("/#portfolio"); } },
    { id: "about", title: "About Me", category: "Navigation", icon: User, action: () => { router.push("/#about"); } },
    { id: "contact", title: "Contact / Hire Me", category: "Navigation", icon: Mail, action: () => { router.push("/#contact"); } },
    
    { id: "lab", title: "Enter The Lab (Experience)", category: "Software", icon: Laptop, action: () => router.push("/experience") },
    { id: "tools", title: "View Software & Tools", category: "Software", icon: Cpu, action: () => router.push("/tools") },
    { id: "copy-email", title: "Copy Email Address", category: "System", icon: Copy, action: () => {
        navigator.clipboard.writeText("mirabdullahnadim@gmail.com");
        alert("Email copied to clipboard!");
      }
    },
    { 
      id: "resume", 
      title: "Download Resume", 
      category: "System", 
      icon: Download, 
      action: () => {
        const link = document.createElement("a");
        link.href = "/Abdullah_Nadim_CV.pdf"; // This looks for a file named resume.pdf in your public folder
        link.download = "Abdullah_Nadim_Resume.pdf";
        link.click();
      } 
    },
    { id: "github", title: "Open GitHub Profile", category: "External", icon: LinkIcon, action: () => window.open("https://github.com/abdullahnadim", "_blank") },
    { id: "linkedin", title: "Open LinkedIn", category: "External", icon: LinkIcon, action: () => window.open("https://www.linkedin.com/in/itsnadim/", "_blank") },

    
  ];

  // Filter commands based on user search
  const filteredCommands = query === "" 
    ? commands 
    : commands.filter((cmd) => cmd.title.toLowerCase().includes(query.toLowerCase()) || cmd.category.toLowerCase().includes(query.toLowerCase()));

  // 3. Arrow Key Navigation Logic
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filteredCommands.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
      }
    }
  };

  // Reset index when searching
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4 sm:px-6">
          
          {/* Blurred Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background/60 backdrop-blur-md"
          />

          {/* The Terminal UI */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-background border border-foreground/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
          >
            
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-foreground/10 text-foreground">
              <Search size={20} className="text-foreground/50" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-base md:text-lg text-foreground placeholder:text-foreground/40 font-medium"
              />
              <div className="flex items-center gap-1 text-[10px] font-mono text-foreground/40 font-bold px-2 py-1 bg-foreground/10 rounded">
                ESC
              </div>
            </div>

            {/* Results List */}
            <div className="max-h-[50vh] overflow-y-auto py-2 custom-scrollbar">
              {filteredCommands.length === 0 ? (
                <div className="p-8 text-center text-foreground/50 text-sm">
                  No commands found for "{query}"
                </div>
              ) : (
                <div className="flex flex-col">
                  {filteredCommands.map((cmd, index) => {
                    const isSelected = index === selectedIndex;
                    const Icon = cmd.icon;
                    return (
                      <div
                        key={cmd.id}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => {
                          cmd.action();
                          setIsOpen(false);
                        }}
                        className={`flex items-center justify-between px-4 py-3 mx-2 rounded-xl cursor-pointer transition-colors duration-150 ${
                          isSelected ? "bg-foreground text-background" : "text-foreground hover:bg-foreground/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} className={isSelected ? "text-background" : "text-foreground/50"} />
                          <span className="font-semibold text-sm">{cmd.title}</span>
                        </div>
                        <span className={`text-[10px] uppercase font-bold tracking-widest ${
                          isSelected ? "text-background/60" : "text-foreground/30"
                        }`}>
                          {cmd.category}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-foreground/5 border-t border-foreground/10 px-4 py-3 flex items-center gap-4 text-[10px] font-mono text-foreground/50">
              <div className="flex items-center gap-1.5">
                <Command size={12} />
                <span>Nav with Arrows</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold border border-foreground/20 rounded px-1">↵</span>
                <span>Select</span>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};