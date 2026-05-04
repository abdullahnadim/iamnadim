// "use client";

// import { motion } from "framer-motion";

// export const Capabilities = () => {
//   // Your exact list of skills
//   const skills = [
//     "Design",
//     "Video Edit",
//     "Motion",
//     "Website Management",
//     "Content Management",
//     "Digital Marketing",
//     "Facebook Ads",
//   ];

//   // We duplicate the array a few times so the marquee loops seamlessly
//   const marqueeItems = [...skills, ...skills, ...skills, ...skills];

//   return (
//     <section className="py-24 border-y border-foreground/10 overflow-hidden bg-foreground/5 relative flex items-center">
//       {/* Optional fade edges for a cleaner look */}
//       <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
//       <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

//       <motion.div
//         className="flex whitespace-nowrap"
//         animate={{
//           x: ["0%", "-50%"],
//         }}
//         transition={{
//           repeat: Infinity,
//           ease: "linear",
//           duration: 30, // Increase this number to slow the scroll down
//         }}
//       >
//         {marqueeItems.map((skill, index) => (
//           <div 
//             key={index} 
//             className="flex items-center mx-8 md:mx-12"
//           >
//             <span className="text-4xl md:text-6xl font-black tracking-tighter text-foreground/80 uppercase">
//               {skill}
//             </span>
//             <span className="ml-16 md:ml-24 text-foreground/30">
//               {/* This is a simple decorative dot separating the words */}
//               ✦
//             </span>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };



"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const skills = [
  { id: "01", name: "Digital Design", desc: "Social Media Post" },
  { id: "02", name: "Video Editing", desc: "High-Retention Visuals" },
  { id: "03", name: "Web Architecture", desc: "Website Maintenance" },
  { id: "04", name: "Content Control", desc: "End-to-End Management" },
  { id: "05", name: "Facebook Ads", desc: "Conversion-Driven Growth" },
  { id: "06", name: "Motion Graphics", desc: "Social Media Motion" },
];

export const Capabilities = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full group relative"
      onMouseMove={handleMouseMove}
    >
      <div className="mb-12 md:mb-16">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          The Arsenal
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
          Everything you need. <br className="hidden md:block" />
          <span className="text-foreground/50">Managed by one person.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="relative border border-foreground/10 bg-background rounded-2xl p-8 overflow-hidden group/card transition-colors hover:bg-foreground/[0.02]"
          >
            {/* The High-Tech Cursor Spotlight */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/card:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    350px circle at ${mouseX}px ${mouseY}px,
                    var(--foreground) 0%,
                    transparent 80%
                  )
                `,
                // This makes the background a very subtle glow using your theme's foreground color
                opacity: 0.05 
              }}
            />

            {/* Glowing Border Spotlight */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/card:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    300px circle at ${mouseX}px ${mouseY}px,
                    var(--foreground) 0%,
                    transparent 100%
                  )
                `,
                // This masks the background so it ONLY shows up on the 1px border edge
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='black' stroke-width='2'/%3E%3C/svg%3E")`,
                opacity: 0.2
              }}
            />

            {/* Card Content */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-xs font-bold text-foreground/40 tracking-wider">
                  // {skill.id}
                </span>
                <ArrowUpRight 
                  size={20} 
                  className="text-foreground/20 group-hover/card:text-foreground transition-all duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1" 
                />
              </div>

              <div>
                <h4 className="text-xl font-bold mb-2 tracking-tight">
                  {skill.name}
                </h4>
                <p className="text-sm text-foreground/60 font-medium">
                  {skill.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};






// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   PenTool, 
//   Video, 
//   Layers, 
//   Globe, 
//   Database, 
//   TrendingUp, 
//   Target 
// } from "lucide-react";

// // The exact skills you provide
// const SKILLS = [
//   { id: "design", label: "Design", icon: PenTool },
//   { id: "video", label: "Video Edit", icon: Video },
//   { id: "motion", label: "Motion", icon: Layers },
//   { id: "web", label: "Website Management", icon: Globe },
//   { id: "content", label: "Content Management", icon: Database },
//   { id: "marketing", label: "Digital Marketing", icon: TrendingUp },
//   { id: "ads", label: "Facebook Ad", icon: Target },
// ];

// // The Project Archetypes that trigger your specific skill combinations
// const ARCHETYPES = [
//   {
//     id: "ecommerce",
//     title: "E-Commerce Launch",
//     requiredSkills: ["design", "video", "web", "marketing", "ads"],
//     description: "From designing the visual identity to managing the storefront and driving high-converting traffic through targeted media buying."
//   },
//   {
//     id: "brand",
//     title: "Brand Refresh",
//     requiredSkills: ["design", "video", "motion"],
//     description: "Breathing new life into stagnant brands with high-end aesthetic overhauls, dynamic motion graphics, and cinematic video assets."
//   },
//   {
//     id: "content",
//     title: "Content Engine",
//     requiredSkills: ["content", "video", "motion", "marketing"],
//     description: "Building an automated, high-retention content pipeline. I edit, animate, manage, and distribute content designed for algorithmic growth."
//   },
//   {
//     id: "scale",
//     title: "Global Scale Campaign",
//     requiredSkills: ["marketing", "ads", "web"],
//     description: "Pure performance. Optimizing the web architecture for conversions while scaling aggressive, data-driven Facebook Ad campaigns."
//   }
// ];

// export const Capabilities = () => {
//   const [activeProject, setActiveProject] = useState<string | null>(null);

//   // Get the active project object if one is selected
//   const currentProjectData = ARCHETYPES.find(p => p.id === activeProject);

//   return (
//     <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      
//       {/* Section Header */}
//       <div className="mb-16 md:mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
//         <div>
//           <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-4 flex items-center justify-center md:justify-start gap-2">
//             <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
//             Capabilities
//           </h2>
//           <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
//             The Workflow.
//           </h3>
//         </div>
//         <p className="text-foreground/50 max-w-sm text-sm font-medium">
//           Select a project archetype below to see exactly how my skills activate and combine to deliver end-to-end solutions.
//         </p>
//       </div>

//       {/* Interactive Layout */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
//         {/* Left Side: Project Selectors */}
//         <div className="lg:col-span-5 flex flex-col gap-3">
//           {ARCHETYPES.map((project) => {
//             const isActive = activeProject === project.id;
//             return (
//               <button
//                 key={project.id}
//                 onClick={() => setActiveProject(isActive ? null : project.id)}
//                 className={`relative w-full text-left p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${
//                   isActive 
//                     ? "border-foreground bg-foreground text-background shadow-2xl" 
//                     : "border-foreground/10 bg-background hover:bg-foreground/5 hover:border-foreground/30 text-foreground"
//                 }`}
//               >
//                 <div className="relative z-10 font-bold text-lg tracking-tight">
//                   {project.title}
//                 </div>
//               </button>
//             );
//           })}

//           {/* Dynamic Description Box */}
//           <div className="mt-4 h-32">
//             <AnimatePresence mode="wait">
//               {currentProjectData ? (
//                 <motion.div
//                   key={currentProjectData.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                   className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10"
//                 >
//                   <p className="text-sm font-medium leading-relaxed text-foreground/80">
//                     <span className="font-bold text-foreground mr-2">Strategy:</span>
//                     {currentProjectData.description}
//                   </p>
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="empty"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="h-full flex items-center justify-center border border-dashed border-foreground/20 rounded-2xl text-foreground/40 text-sm font-medium"
//                 >
//                   Awaiting project selection...
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Right Side: The Neural Skill Grid */}
//         <div className="lg:col-span-7">
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//             {SKILLS.map((skill) => {
//               const Icon = skill.icon;
//               // Determine if this skill is required by the currently selected project
//               const isRequired = currentProjectData?.requiredSkills.includes(skill.id);
//               // Determine visual state based on selection
//               const isDimmed = activeProject !== null && !isRequired;
//               const isHighlighted = activeProject !== null && isRequired;

//               return (
//                 <motion.div
//                   key={skill.id}
//                   animate={{
//                     opacity: isDimmed ? 0.2 : 1,
//                     scale: isHighlighted ? 1.02 : 1,
//                     y: isHighlighted ? -5 : 0,
//                   }}
//                   transition={{ duration: 0.4, ease: "easeOut" }}
//                   className={`flex flex-col items-center justify-center text-center p-6 rounded-2xl border transition-colors duration-500 ${
//                     isHighlighted
//                       ? "bg-foreground/5 border-foreground/30 shadow-[0_0_30px_rgba(0,0,0,0.1)]"
//                       : "bg-background border-foreground/10"
//                   }`}
//                 >
//                   <div className={`mb-4 p-4 rounded-full transition-colors duration-500 ${
//                     isHighlighted ? "bg-foreground text-background" : "bg-foreground/5 text-foreground"
//                   }`}>
//                     <Icon size={24} strokeWidth={1.5} />
//                   </div>
//                   <span className={`font-bold text-sm tracking-tight transition-colors duration-500 ${
//                     isHighlighted ? "text-foreground" : "text-foreground/70"
//                   }`}>
//                     {skill.label}
//                   </span>
                  
//                   {/* Glowing active indicator */}
//                   <div className={`mt-3 w-1.5 h-1.5 rounded-full transition-all duration-500 ${
//                     isHighlighted ? "bg-green-500 shadow-[0_0_10px_#22c55e]" : "bg-transparent"
//                   }`} />
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };