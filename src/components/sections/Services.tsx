"use client";

import { motion } from "framer-motion";
import { Code2, MonitorCog, Megaphone, PenTool, Video, Sparkles } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "High-performance, modern web applications built with Next.js, React, and Tailwind CSS. Optimized for speed, SEO, and maximum conversion rates.",
    icon: <Code2 size={24} />,
  },
  {
    title: "Website Management",
    description: "Strategic oversight of site architecture, content organization, and developer workflows to ensure seamless digital operations and brand consistency.",
    icon: <MonitorCog size={24} />,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies, brand marketing, and media campaigns designed to scale your reach and generate qualified leads.",
    icon: <Megaphone size={24} />,
  },
  {
    title: "Graphic Design",
    description: "Premium visual identities, UI/UX design, and commercial photo retouching that positions your brand as an industry leader.",
    icon: <PenTool size={24} />,
  },
  {
    title: "Video Editing",
    description: "Engaging, high-retention content for social media, polished with professional motion graphics, custom animations, and seamless editing.",
    icon: <Video size={24} />,
  },
  {
    title: "AI Visual Generation",
    description: "Advanced prompt engineering for commercial apparel and digital media, optimizing e-commerce product imagery while preserving precise garment specifications.",
    icon: <Sparkles size={24} />,
  }
];

// --- FRAMER MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Controls the cascading delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-6xl mx-auto w-full bg-foreground/5 rounded-[3rem] my-12">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium tracking-widest uppercase text-muted mb-4"
        >
          Expertise
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
        >
          Comprehensive Solutions Under One Roof.
        </motion.h3>
      </div>

      {/* PARENT CONTAINER CONTROLS THE STAGGER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, index) => (
          /* CHILDREN INHERIT STATE AUTOMATICALLY */
          <motion.div
            key={index}
            variants={cardVariants}
            className="group p-8 rounded-3xl bg-background border border-foreground/10 hover:border-foreground/30 hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 cursor-default flex flex-col h-full"
          >
            <div className="h-14 w-14 rounded-full bg-foreground text-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out shrink-0">
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold mb-3 tracking-tight text-foreground">
              {service.title}
            </h4>
            <p className="text-muted leading-relaxed text-lg flex-grow">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};