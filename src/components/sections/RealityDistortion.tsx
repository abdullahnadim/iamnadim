"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";

export const RealityDistortion = () => {
  // Track mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Create a spring-animated value for the size of the X-Ray lens
  // This makes the lens "grow" when you hover, and "shrink" when you leave
  const maskSize = useSpring(0, { stiffness: 200, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // This is the magic: A CSS radial gradient mapped to your mouse coordinates
  const maskImage = useMotionTemplate`radial-gradient(${maskSize}px circle at ${mouseX}px ${mouseY}px, black 80%, transparent 100%)`;

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
      <div className="mb-12">
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          The Philosophy
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
          Two sides of the screen.
        </h3>
      </div>

      {/* The Interactive X-Ray Container */}
      <div 
        className="relative h-[450px] md:h-[500px] w-full rounded-3xl overflow-hidden cursor-crosshair border border-foreground/10 group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => maskSize.set(250)} // Grow lens to 250px
        onMouseLeave={() => maskSize.set(0)}   // Shrink lens to 0px
      >
        
        {/* BOTTOM LAYER: The Polished Reality (Design) */}
        <div className="absolute inset-0 bg-foreground/5 flex flex-col items-center justify-center p-8 text-center transition-colors group-hover:bg-foreground/10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
            Flawless <br/> Visual Experiences.
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-lg font-medium">
            Every pixel perfectly placed. Every animation liquid smooth. I design digital environments that feel alive, intuitive, and effortlessly premium.
          </p>
          <div className="mt-8 px-8 py-4 border-2 border-foreground text-foreground rounded-full font-bold">
            Hover to inspect
          </div>
        </div>

        {/* TOP LAYER: The Raw Code Reality (Engineering) */}
        {/* pointer-events-none ensures the mouse still interacts with the container beneath it */}
        <motion.div
          className="absolute inset-0 bg-[#0A0A0A] flex flex-col items-center justify-center p-4 md:p-8 text-left pointer-events-none"
          style={{ 
            WebkitMaskImage: maskImage, 
            maskImage: maskImage 
          }}
        >
          <pre className="text-emerald-400 font-mono text-xs md:text-sm leading-relaxed md:leading-loose opacity-90 overflow-hidden">
            <code>
{`// src/architecture/Engine.tsx
import { FramerMotion, WebGL } from "core/physics";

export const ExperienceEngine = () => {
  const pixelPerfect = true;
  const performanceMode = "ultra";
  const physicsEngine = new Spring({ tension: 120, friction: 14 });

  return (
    <Renderer 
      fps={60} 
      antiAlias={true} 
      acceleration="gpu"
    >
      <PhysicsProvider config={physicsEngine}>
        <UserInterface mode="premium" state="fluid" />
      </PhysicsProvider>
    </Renderer>
  );
};

// SYSTEM STATUS: OPTIMIZED
// MEMORY LEAKS: 0
// AESTHETIC: UNCOMPROMISED`}
            </code>
          </pre>
          
          {/* Secret terminal text in the corner */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-emerald-500/50 font-mono text-[10px] md:text-xs animate-pulse">
            ROOT_ACCESS_GRANTED //
          </div>
        </motion.div>

      </div>
    </section>
  );
};