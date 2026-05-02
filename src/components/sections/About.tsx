"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Delivered", value: "50+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-4">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            A hybrid creator for modern brands.
          </h3>
          <p className="text-muted leading-relaxed mb-6 text-lg">
            I bridge the gap between creative vision and technical execution. As a multidisciplinary digital professional, I don't just build websites or design graphics—I engineer entire digital ecosystems designed to convert.
          </p>
          <p className="text-muted leading-relaxed text-lg">
            From crafting high-converting sales funnels to producing thumb-stopping video content, my approach is always data-driven and visually uncompromising.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl bg-foreground/5 border border-foreground/10 ${index === 2 ? 'col-span-2' : ''}`}
            >
              <h4 className="text-4xl font-bold mb-2">{stat.value}</h4>
              <p className="text-sm text-muted font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};