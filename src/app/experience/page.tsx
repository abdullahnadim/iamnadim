import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { RealityDistortion } from "@/components/sections/RealityDistortion";
import { GravitySandbox } from "@/components/sections/GravitySandbox";
import { ImageShatter } from "@/components/sections/ImageShatter";

// You can import the other crazy stuff we build here later!

export default function Experience() {
  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <Navbar />
      
      {/* Intro Header for the Experience Page */}
      <div className="pt-40 pb-12 px-6 text-center max-w-3xl mx-auto w-full">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6">
          The Playground.
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 font-medium">
          Welcome to the lab. This is where I experiment with physics, 3D rendering, and reality distortion. 
          Hover around and see what happens when code meets creativity.
        </p>
      </div>

      {/* 1. X-Ray Lens */}
      <RealityDistortion />
      
      {/* 2. ASCII Shatter */}
      <ImageShatter />
      
      {/* 3. Gravity Sandbox */}
      <GravitySandbox />


      {/* Future experimental components will go here */}

      <div className="mt-auto w-full">
        <Footer />
      </div>
    </main>
  );
}