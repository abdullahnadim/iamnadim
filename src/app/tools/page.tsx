// "use client";

// import { motion } from "framer-motion";
// import { Navbar } from "@/components/ui/Navbar";
// import { Footer } from "@/components/sections/Footer";
// import { ArrowUpRight, ServerOff, Sparkles, Image as ImageIcon, FolderSync, Palette, Database, RefreshCw, LayoutDashboard } from "lucide-react";
// import Link from "next/link";

// const TOOLS = [
//   {
//     id: "localrename",
//     name: "LocalRename",
//     tagline: "Zero-Server Batch Renamer & Image Converter",
//     description: "A privacy-first, client-side web application engineered to batch rename files and convert image formats directly within the browser. Built to ensure absolute data security without ever uploading a single byte.",
//     stack: ["Next.js", "React", "TypeScript", "Tailwind CSS v4"],
//     features: [
//       { icon: ServerOff, title: "Zero-Server Processing", desc: "Utilizes the File System Access API to modify files directly on the local drive." },
//       { icon: Sparkles, title: "Smart Batch Naming", desc: "Custom base names, starting sequences, and dynamic zero-padding." },
//       { icon: ImageIcon, title: "Native Image Engine", desc: "HTML5 Canvas integration to re-encode PNG, JPEG, or WebP on the fly." },
//       { icon: FolderSync, title: "Dual Operating Modes", desc: "Mount folders for in-place modifications or render copies to new destinations." },
//       { icon: Palette, title: "Dynamic Theme System", desc: "Fluid glassmorphism UI with ambient background glows." }
//     ],
//     link: "https://localrename.vercel.app/"
//   },
//   {
//     id: "tekapoysha",
//     name: "Teka Poysha",
//     tagline: "Full-Stack Web Application",
//     description: "A comprehensive Next.js full-stack application architected for seamless user experience and dynamic data management.",
//     stack: ["Next.js", "React", "Firebase Cloud", "Vercel"],
//     features: [
//       { icon: LayoutDashboard, title: "Full-Stack Architecture", desc: "End-to-end development ensuring high performance and reliability." },
//       { icon: Database, title: "Cloud Database Integration", desc: "Secure, real-time data storage and synchronization." }
//     ],
//     link: "https://tekapoysha.vercel.app/"
//   },
//   {
//     id: "noksha",
//     name: "Content Planner Noksha",
//     tagline: "Content Synchronization & Tracking Platform",
//     description: "A deployed platform designed to synchronize, track, and manage multi-platform content calendars and metadata efficiently.",
//     stack: ["Next.js", "React", "Google Apps Script", "Google APIs"],
//     features: [
//       { icon: RefreshCw, title: "Automated Workflows", desc: "Seamless content synchronization across multiple platforms." },
//       { icon: Database, title: "Metadata Management", desc: "Centralized tracking for optimized search engine visibility." }
//     ],
//     link: "https://noksha.vercel.app/"
//   }
// ];

// export default function ToolsPage() {
//   return (
//     <main className="flex min-h-screen flex-col items-center relative bg-background text-foreground">
//       <Navbar />
      
//       {/* Header Section */}
//       <div className="pt-40 pb-16 px-6 text-center max-w-4xl mx-auto w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="inline-block px-4 py-1.5 rounded-full bg-foreground/10 border border-foreground/20 text-xs font-bold tracking-widest uppercase mb-6"
//         >
//           Software & Utilities
//         </motion.div>
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-5xl md:text-7xl font-black tracking-tighter mb-6"
//         >
//           Built to solve.
//         </motion.h1>
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-lg md:text-xl text-foreground/70 font-medium max-w-2xl mx-auto leading-relaxed"
//         >
//           A collection of web applications, tools, and digital products engineered for privacy, performance, and automation.
//         </motion.p>
//       </div>

//       {/* Tools Grid */}
//       <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-24 flex flex-col gap-12 md:gap-24">
//         {TOOLS.map((tool, index) => (
//           <motion.div 
//             key={tool.id}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col border border-foreground/10 rounded-3xl overflow-hidden bg-foreground/[0.02]"
//           >
//             {/* Tool Header */}
//             <div className="p-8 md:p-12 border-b border-foreground/10 flex flex-col md:flex-row md:items-start justify-between gap-6">
//               <div className="max-w-2xl">
//                 <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2">{tool.name}</h2>
//                 <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">
//                   {tool.tagline}
//                 </p>
//                 <p className="text-foreground/80 font-medium leading-relaxed text-lg">
//                   {tool.description}
//                 </p>
                
//                 {/* Tech Stack Tags */}
//                 <div className="flex flex-wrap gap-2 mt-8">
//                   {tool.stack.map(tech => (
//                     <span key={tech} className="px-3 py-1 text-xs font-bold rounded-md bg-foreground/10 text-foreground/70">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
              
//               <Link 
//                 href={tool.link}
//                 className="group flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background hover:scale-105 transition-transform shrink-0"
//               >
//                 <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//               </Link>
//             </div>

//             {/* Tool Features */}
//             <div className="p-8 md:p-12 bg-background">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {tool.features.map((feature, i) => {
//                   const Icon = feature.icon;
//                   return (
//                     <div key={i} className="flex flex-col">
//                       <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center mb-4 text-foreground">
//                         <Icon size={20} />
//                       </div>
//                       <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
//                       <p className="text-sm text-foreground/60 font-medium leading-relaxed">
//                         {feature.desc}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <div className="w-full mt-auto">
//         <Footer />
//       </div>
//     </main>
//   );
// }



"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ArrowUpRight, ServerOff, Sparkles, Image as ImageIcon, FolderSync, Palette, Database, RefreshCw, LayoutDashboard, Terminal } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

const TOOLS = [
  {
    id: "localrename",
    name: "LocalRename",
    version: "v1.2.0",
    status: "Deployed",
    tagline: "Zero-Server Batch Renamer & Image Converter",
    description: "A privacy-first, client-side web application engineered to batch rename files and convert image formats directly within the browser. Built to ensure absolute data security without ever uploading a single byte.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS v4"],
    logs: [
      "> Initializing File System Access API...",
      "> Canvas context mounted successfully.",
      "> Zero-server environment ready."
    ],
    features: [
      { icon: ServerOff, title: "Zero-Server", desc: "Modifies files directly on the local drive." },
      { icon: Sparkles, title: "Smart Naming", desc: "Custom bases, sequences & zero-padding." },
      { icon: ImageIcon, title: "Native Engine", desc: "HTML5 Canvas PNG/JPEG/WebP encoding." },
      { icon: FolderSync, title: "Dual Modes", desc: "In-place mods or render to new destination." }
    ],
    link: "https://localrename.vercel.app"
  },
  {
    id: "tekapoysha",
    name: "Teka Poysha",
    version: "v2.0.1",
    status: "Live",
    tagline: "Full-Stack Web Application",
    description: "A comprehensive Next.js full-stack application architected for seamless user experience and dynamic data management.",
    stack: ["Next.js", "React", "Firebase", "Vercel"],
    logs: [
      "> Connecting to Firebase Cloud...",
      "> Fetching dynamic user collections...",
      "> Database synchronization active."
    ],
    features: [
      { icon: LayoutDashboard, title: "Full-Stack", desc: "End-to-end robust performance architecture." },
      { icon: Database, title: "Cloud DB", desc: "Secure, real-time data synchronization." }
    ],
    link: "https://tekapoysha.vercel.app"
  },
  {
    id: "noksha",
    name: "Content Planner Noksha",
    version: "v1.0.5",
    status: "Deployed",
    tagline: "Content Synchronization Platform",
    description: "A deployed platform designed to synchronize, track, and manage multi-platform content calendars and metadata efficiently.",
    stack: ["Next.js", "Google Apps Script", "Google APIs"],
    logs: [
      "> Authenticating Google APIs...",
      "> Running Apps Script macro sequence...",
      "> Metadata pipeline synchronized."
    ],
    features: [
      { icon: RefreshCw, title: "Automation", desc: "Seamless cross-platform sync workflows." },
      { icon: Terminal, title: "Metadata", desc: "Centralized tracking for SEO visibility." }
    ],
    link: "https://noksha.vercel.app"
  }
];

// Custom component to handle the complex interactive UI for each tool
const ToolCard = ({ tool }: { tool: typeof TOOLS[0] }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className="group relative border border-foreground/10 rounded-2xl bg-background overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:border-foreground/30"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Spotlight Hover Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              var(--foreground) 0%,
              transparent 80%
            )
          `,
          opacity: 0.03 
        }}
      />

      {/* MacOS Style App Header */}
      <div className="h-12 border-b border-foreground/10 bg-foreground/[0.02] flex items-center justify-between px-6 relative z-10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-foreground/40">{tool.version}</span>
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold text-green-500 tracking-widest uppercase">{tool.status}</span>
          </div>
        </div>
      </div>

      {/* App Content */}
      <div className="p-8 md:p-10 relative z-10 flex flex-col lg:flex-row gap-12">
        
        {/* Left Side: Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-2">{tool.name}</h2>
            <p className="text-sm font-bold text-foreground/50 uppercase tracking-widest mb-6">
              {tool.tagline}
            </p>
            <p className="text-foreground/70 font-medium leading-relaxed mb-8">
              {tool.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {tool.stack.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-bold rounded-md bg-foreground/5 border border-foreground/10 text-foreground/80">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <Link 
            href={tool.link}
            target="_blank"
            className="w-full sm:w-max px-8 py-4 bg-foreground text-background font-bold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg"
          >
            Launch Application <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Right Side: Visuals & Features */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Mini Terminal Boot Sequence */}
          <div className="bg-[#0A0A0A] rounded-xl p-4 border border-foreground/10 shadow-inner font-mono text-xs md:text-sm text-emerald-400/80 leading-relaxed overflow-hidden relative group/terminal">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0A0A0A] pointer-events-none" />
            <div className="opacity-70 group-hover/terminal:opacity-100 transition-opacity">
              <p className="text-foreground/40 mb-2">// System Boot</p>
              {tool.logs.map((log, i) => (
                <p key={i} className="mb-1">{log}</p>
              ))}
              <p className="mt-2 animate-pulse">_</p>
            </div>
          </div>

          {/* Core Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tool.features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="p-4 rounded-xl bg-foreground/[0.02] border border-foreground/5 flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon size={16} className="text-foreground/70" />
                    <h4 className="font-bold text-sm text-foreground">{feature.title}</h4>
                  </div>
                  <p className="text-xs text-foreground/50 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default function ToolsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center relative bg-background text-foreground">
      <Navbar />
      
      {/* Header Section */}
      <div className="pt-40 pb-16 px-6 text-center max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-foreground/10 border border-foreground/20 text-xs font-bold tracking-widest uppercase mb-6"
        >
          Engineering Lab
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase"
        >
          Software.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          A collection of web applications, tools, and digital products engineered for privacy, performance, and automation.
        </motion.p>
      </div>

      {/* Tools Grid */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-24 flex flex-col gap-12">
        {TOOLS.map((tool) => (
          <motion.div 
            key={tool.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </div>

      <div className="w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}