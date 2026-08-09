"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (pathname === "/") {
      // If on the homepage, smooth scroll to the section
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on a different page, route to the homepage and append the hash
      router.push(`/#${targetId}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] md:w-[80%] max-w-3xl"
    >
      <nav className="flex items-center justify-between px-6 py-3 md:py-4 rounded-full bg-background/70 backdrop-blur-md border border-foreground/10 shadow-sm">
        
        {/* Logo */}
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="font-extrabold tracking-tighter text-xl"
        >
          AN.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a 
            href="/#about" 
            onClick={(e) => handleNavClick(e, "about")} 
            className="hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="/#services" 
            onClick={(e) => handleNavClick(e, "services")} 
            className="hover:text-foreground transition-colors"
          >
            Services
          </a>
          <a 
            href="/#portfolio" 
            onClick={(e) => handleNavClick(e, "portfolio")} 
            className="hover:text-foreground transition-colors"
          >
            Work
          </a>
        </div>

        {/* CTA Button */}
        <a 
          href="/#contact" 
          onClick={(e) => handleNavClick(e, "contact")}
          className="px-5 py-2 md:px-6 md:py-2.5 bg-foreground text-background rounded-full text-sm font-bold hover:scale-105 transition-transform duration-300"
        >
          Let's Talk
        </a>
        
      </nav>
    </motion.div>
  );
};