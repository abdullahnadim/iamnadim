"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { createPortal } from "react-dom";

// 1. Added "Tools" to the categories
const categories = ["All", "Websites", "Tools", "Video", "Social Media", "Brand Identity"];

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  galleryImages?: string[]; 
};

// 2. Added the 3 new tools to the projects array
const projects: Project[] = [
  { 
    id: 1, 
    title: "Eminence College: A Concern of Daffodil Group | Digital Strategy", 
    category: "Social Media", 
    description: "Educational social media designs, course promo posts, and event coverage.",
    image: "/projects/eminence-campaign-cover.jpg",
    galleryImages: [
      "/projects/eminence-1.jpg", 
      "/projects/eminence-2.jpg", 
      "/projects/eminence-3.jpg",
      "/projects/eminence-4.jpg"
    ]
  },
  { 
    id: 2, 
    title: "Sonder: Brand Activation", 
    category: "Brand Identity", 
    description: "Social media visual direction and event photography for a premium women's clothing brand.",
    image: "/projects/sonder-campaign-cover.jpg",
    galleryImages: [
      "/projects/sonder-1.jpg", 
      "/projects/sonder-2.jpg", 
      "/projects/sonder-3.jpg"
    ]
  },
  { 
    id: 3, 
    title: "TekaPoysha : An essential money manager app", 
    category: "Websites", 
    description: "A money manager app which supports Android/iOS/Windows and Data Sync across device",
    image: "/projects/tekapoysha.jpg",
    link: "https://tekapoysha.vercel.app/"
  },
  { 
    id: 4, 
    title: "Eminence College Promo", 
    category: "Video", 
    description: "High-energy promotional video highlighting campus facilities and academics.",
    image: "/projects/eminence-video-thumbnail.jpg",
    link: "https://www.youtube.com/watch?v=f3DGejAotHw"
  },
  { 
    id: 5, 
    title: "LocalRename", 
    category: "Tools", 
    description: "Zero-server batch file renamer and image converter with native system theme detection. Built with absolute data privacy in mind using the modern File System Access API.",
    image: "/projects/localrename-cover.jpg",
    link: "https://localrename.vercel.app/" 
  },
  { 
    id: 6, 
    title: "Chobi-Karigor", 
    category: "Tools", 
    description: "Image processing and upscaling web application featuring dynamic UI controls and real-time model pricing integration.",
    image: "/projects/chobi-karigor-cover.jpg",
    link: "https://chobi-karigor.vercel.app/" 
  },
  { 
    id: 7, 
    title: "Ondhokar", 
    category: "Tools", 
    description: "A localized utility application to track and predict scheduled power outages. It parses complex DESCO feeder data into a clean, searchable interface for Dhaka residents.",
    image: "/projects/ondhokar-cover.jpg",
    link: "https://ondhokar.vercel.app/" 
  }
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Hydration fix for Portals in Next.js
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto w-full relative">
      {/* Header & Filters */}
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

      {/* Portfolio Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => ( // Added index here
            <motion.div
              key={project.id}
              layoutId={`project-container-${project.id}`} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <motion.div 
                layoutId={`project-image-${project.id}`}
                className="w-full aspect-video bg-foreground/5 rounded-2xl mb-4 overflow-hidden relative border border-foreground/10"
              >
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Fixed sizes
                  priority={index < 2} // Preloads the first 2 images for LCP optimization
                />
                <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="bg-background text-foreground rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl font-bold text-sm">
                    View Project
                  </div>
                </div>
              </motion.div>
              <motion.p layoutId={`project-category-${project.id}`} className="text-sm font-medium text-muted mb-1">{project.category}</motion.p>
              <motion.h4 layoutId={`project-title-${project.id}`} className="text-xl font-bold mb-2">{project.title}</motion.h4>
              <motion.p layoutId={`project-desc-${project.id}`} className="text-muted text-sm line-clamp-2">{project.description}</motion.p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* The Expandable App-Like Modal (WRAPPED IN PORTAL) */}
      {isMounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Blurred Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100] cursor-pointer"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Content */}
              <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-12 pointer-events-none">
                <motion.div 
                  layoutId={`project-container-${selectedProject.id}`}
                  data-lenis-prevent="true" 
                  className="bg-background w-full max-w-5xl max-h-[90vh] overflow-y-auto overscroll-contain rounded-[2rem] shadow-2xl border border-foreground/10 pointer-events-auto flex flex-col relative"
                >
                  {/* Close Button */}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-20 bg-background/80 backdrop-blur-md p-3 rounded-full text-foreground hover:scale-110 transition-transform"
                  >
                    <X size={20} />
                  </button>

                  {/* Hero Image inside Modal */}
                  <motion.div layoutId={`project-image-${selectedProject.id}`} className="w-full h-[40vh] md:h-[50vh] relative shrink-0">
                    <Image 
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      sizes="100vw" // Fixed sizes
                      priority // Forces modal image to load instantly
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </motion.div>

                  {/* Content Area */}
                  <div className="px-6 md:px-12 py-8 relative z-10 -mt-20">
                    <motion.p layoutId={`project-category-${selectedProject.id}`} className="text-sm font-medium tracking-widest uppercase text-muted mb-2">
                      {selectedProject.category}
                    </motion.p>
                    <motion.h4 layoutId={`project-title-${selectedProject.id}`} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                      {selectedProject.title}
                    </motion.h4>
                    <motion.p layoutId={`project-desc-${selectedProject.id}`} className="text-lg text-muted max-w-3xl mb-8 leading-relaxed">
                      {selectedProject.description}
                    </motion.p>

                    {/* External Link Button */}
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform mb-12">
                        View Live Project <ArrowUpRight size={18} />
                      </a>
                    )}

                    {/* Social Media / Event Gallery Grid */}
                    {selectedProject.galleryImages && (
                      <div className="mt-8">
                        <h5 className="text-xl font-bold mb-6 border-b border-foreground/10 pb-4">Campaign Assets</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                          {selectedProject.galleryImages.map((img, index) => (
                            <div key={index} className="relative w-full aspect-square bg-foreground/5 rounded-2xl overflow-hidden border border-foreground/10">
                              <Image 
                                src={img} 
                                alt={`${selectedProject.title} asset ${index + 1}`} 
                                fill 
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 50vw" // Fixed sizes
                                loading="lazy" // Ensures off-screen gallery images defer loading
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};