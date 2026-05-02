import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Cta } from "@/components/sections/Cta";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Navbar />
      <Hero />
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