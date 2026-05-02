"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Websites", "Video", "Marketing & Design"];

const projects = [
  { 
    id: 1, 
    title: "Fashion Asia Limited", 
    category: "Websites", 
    description: "Official corporate website engineered for a major manufacturing firm.",
    image: "/projects/fashion-asia.jpg",
    link: "https://www.fashionasialtd.com/"
  },
  { 
    id: 2, 
    title: "Eminence College Promo", 
    category: "Video", 
    description: "High-energy promotional video highlighting campus facilities and academics.",
    image: "/projects/eminence-promo.jpg",
    link: "https://www.youtube.com/watch?v=f3DGejAotHw"
  },
  { 
    id: 3, 
    title: "TekaPoysha - A money tracker app", 
    category: "Websites", 
    description: "Interactive web application built with Next.js, Firebase, and Cloud services.",
    image: "/projects/tekapoysha.jpg", 
    link: "https://tekapoysha.vercel.app/"
  },
  { 
    id: 4, 
    title: "Sonder", 
    category: "Marketing & Design", 
    description: "Brand representation and marketing collateral for Sonder and Happier.",
    image: "/projects/sonder.jpg", 
    link: "https://sonderbd.com/"
  },
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto w-full">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-widest uppercase text-muted mb-4"
          >
            Selected Works
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Digital Craftsmanship.
          </motion.h3>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-foreground text-background"
                  : "bg-foreground/5 text-foreground hover:bg-foreground/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-video bg-foreground/5 rounded-2xl mb-4 overflow-hidden relative border border-foreground/10 group">
                
                {/* The Next.js Optimized Image */}
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* The Hover Overlay Link */}
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <div className="bg-background text-foreground rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </a>
                
              </div>
              <p className="text-sm font-medium text-muted mb-1">{project.category}</p>
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-muted text-sm">{project.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};