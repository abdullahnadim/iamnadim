"use client";

import { motion } from "framer-motion";
import { Code2, Megaphone, PenTool, Video } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "High-performance, modern web applications built with Next.js and React. Optimized for speed, SEO, and maximum conversion rates.",
    icon: <Code2 size={24} />,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies, SEO, and paid media campaigns designed to scale your brand and generate qualified leads.",
    icon: <Megaphone size={24} />,
  },
  {
    title: "Graphic Design",
    description: "Premium visual identities, UI/UX design, and marketing collateral that positions your brand as an industry leader.",
    icon: <PenTool size={24} />,
  },
  {
    title: "Video Editing",
    description: "Engaging, high-retention video content for social media and corporate campaigns, polished with professional color grading and motion graphics.",
    icon: <Video size={24} />,
  },
];

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
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Comprehensive Solutions Under One Roof.
        </motion.h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group p-8 rounded-3xl bg-background border border-foreground/10 hover:border-foreground/30 hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 cursor-default"
          >
            <div className="h-14 w-14 rounded-full bg-foreground text-background flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out">
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h4>
            <p className="text-muted leading-relaxed text-lg">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};