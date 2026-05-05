"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

export const GravitySandbox = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    // 1. Setup Matter.js Engine and Variables
    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    engineRef.current = engine;

    // 2. Setup the Canvas Renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: 500,
        wireframes: false, // Turn off wireframes to see colors
        background: "transparent",
        pixelRatio: typeof window !== "undefined" ? window.devicePixelRatio : 1,
      }
    });

    // 3. Define your Tech Stack
    const techStack = [
       { label: "Next.js", color: "#111111", textColor: "#ffffff", width: 140 },
       { label: "React", color: "#61dafb", textColor: "#000000", width: 120 },
       { label: "Premiere Pro", color: "#9999ff", textColor: "#000000", width: 180 },
       { label: "Framer Motion", color: "#ff0055", textColor: "#ffffff", width: 190 },
       { label: "Tailwind CSS", color: "#38b2ac", textColor: "#000000", width: 170 },
       { label: "Meta Ads", color: "#0668E1", textColor: "#ffffff", width: 150 },
       { label: "TypeScript", color: "#3178c6", textColor: "#ffffff", width: 160 },
       { label: "Figma", color: "#f24e1e", textColor: "#ffffff", width: 120 },
    ];

    // 4. Create the Physics Bodies (The "Pills")
    const bodies = techStack.map((tech, i) => {
       return Bodies.rectangle(
         Math.random() * (render.options.width || 800), // Random horizontal start
         -100 - (i * 80), // Drop from above screen sequentially
         tech.width, 
         60, // Height of the pills
         {
           restitution: 0.8, // Bounciness (0-1)
           friction: 0.1,
           chamfer: { radius: 30 }, // Makes the rectangles into rounded pills
           render: { fillStyle: tech.color }
         }
       );
    });

    // 5. Create Invisible Boundaries (Floor and Walls)
    const width = render.options.width || 800;
    const height = render.options.height || 500;
    const wallOptions = { isStatic: true, render: { visible: false } };
    
    const ground = Bodies.rectangle(width / 2, height + 25, width + 100, 50, wallOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height * 2, wallOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height * 2, wallOptions);

    Composite.add(engine.world, [...bodies, ground, leftWall, rightWall]);

    // 6. Add Mouse Interactivity (Grabbing)
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });
    Composite.add(engine.world, mouseConstraint);
    
    // Keeps mouse scroll working on the rest of the page
    mouseConstraint.mouse.element.removeEventListener("mousewheel", (mouseConstraint.mouse as any).mousewheel);
mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", (mouseConstraint.mouse as any).mousewheel);

    // 7. Custom Render Loop to Draw Text on the Bodies
    Matter.Events.on(render, 'afterRender', function() {
        const context = render.context;
        context.font = "bold 18px Inter, sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";

        bodies.forEach((body, i) => {
           context.translate(body.position.x, body.position.y);
           context.rotate(body.angle);
           
           context.fillStyle = techStack[i].textColor;
           context.fillText(techStack[i].label, 0, 0);
           
           context.rotate(-body.angle);
           context.translate(-body.position.x, -body.position.y);
        });
    });

    // 8. Run the Engine
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 9. Cleanup on Unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) render.canvas.remove();
      Engine.clear(engine);
    };
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-medium tracking-widest uppercase text-muted mb-4 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
            Interactive Engine
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The Gravity Sandbox.
          </h3>
          <p className="text-foreground/70 font-medium">
            Grab, throw, and smash my tech stack.
          </p>
        </div>

        <div 
          ref={sceneRef} 
          className="w-full h-[500px] border border-foreground/10 rounded-3xl overflow-hidden bg-foreground/5 cursor-grab active:cursor-grabbing shadow-inner" 
        />
    </section>
  );
};