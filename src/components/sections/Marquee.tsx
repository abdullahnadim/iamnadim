export const Marquee = () => {
  const skills = [
    "Next.js", "Adobe Premiere Pro", "SEO Optimization", "React", "After Effects", 
    "UI/UX Design", "Framer Motion", "Google Analytics", "Brand Strategy"
  ];

  return (
    <div className="w-full overflow-hidden bg-foreground text-background py-4 my-12 rotate-[-1deg] scale-105">
      <div className="flex whitespace-nowrap animate-scroll w-max">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <span key={index} className="text-xl md:text-3xl font-bold uppercase tracking-widest px-8">
            {skill} •
          </span>
        ))}
      </div>
    </div>
  );
};