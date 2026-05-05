import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-24 px-4 sm:px-6 flex flex-col items-center">
      
      {/* THE NEW PLAYGROUND CTA */}
      <div className="max-w-4xl mx-auto w-full mb-16 p-8 md:p-10 border border-foreground/10 rounded-3xl bg-foreground/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden group">
        {/* Subtle hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
        
        <div className="relative z-10">
          <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            Want to experience something?
          </h4>
          <p className="text-foreground/70 text-base font-medium">
            Step inside the lab.
          </p>
        </div>
        
        <Link 
          href="/experience" 
          className="relative z-10 px-8 py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 transition-transform duration-300 whitespace-nowrap flex items-center justify-center gap-2"
        >
          Enter the Playground <span className="animate-pulse">✦</span>
        </Link>
      </div>

      {/* YOUR ORIGINAL FOOTER INFO */}
      <div className="w-full border-t border-foreground/10 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-foreground/50">
            © {currentYear} Abdullah Nadim. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/itsnadim/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.behance.net/itsnadim" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors"
            >
              Behance
            </a>
            <a 
              href="https://github.com/abdullahnadim" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      
    </footer>
  );
};