export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-foreground/10 w-full mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-muted">
          © {currentYear} Abdullah Nadim. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="text-sm font-medium text-muted hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Behance</a>
          <a href="#" className="text-sm font-medium text-muted hover:text-foreground transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};