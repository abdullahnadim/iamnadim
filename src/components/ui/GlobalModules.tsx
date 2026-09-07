"use client";

// REMOVED: next/dynamic. 
// Standard imports allow Next.js to SSR the initial HTML structure instantly, 
// preventing post-paint DOM mutations and layout thrashing on Desktop.
import { CommandTerminal } from "@/components/ui/CommandTerminal";
import { CommsLink } from "@/components/ui/CommsLink";
import { BackToTop } from "@/components/ui/BackToTop";

export const GlobalModules = () => {
  return (
    <>
      <CommandTerminal />
      <CommsLink />
      <BackToTop />
    </>
  );
};