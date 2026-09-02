import dynamic from 'next/dynamic';
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";

// LIGHTHOUSE FIX: Lazy loading below-the-fold components to reduce Total Blocking Time
const Capabilities = dynamic(() => import("@/components/sections/Capabilities").then(mod => mod.Capabilities), { ssr: true });
const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services").then(mod => mod.Services), { ssr: true });
const FeaturedWork = dynamic(() => import("@/components/sections/FeaturedWork").then(mod => mod.FeaturedWork), { ssr: true });
const Portfolio = dynamic(() => import("@/components/sections/Portfolio").then(mod => mod.Portfolio), { ssr: true });
const Cta = dynamic(() => import("@/components/sections/Cta").then(mod => mod.Cta), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact), { ssr: true });
const Footer = dynamic(() => import("@/components/sections/Footer").then(mod => mod.Footer), { ssr: true });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Navbar />
      <Hero />
      <Capabilities />
      <About />
      <Services />
      <FeaturedWork />
      <Portfolio />
      <Cta />
      <Contact />
      <Footer />
    </main>
  );
}