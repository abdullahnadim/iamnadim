"use client";

import dynamic from "next/dynamic";

// Safely lazy load heavy interactive overlays only on the client
const CommandTerminal = dynamic(() => import("@/components/ui/CommandTerminal").then(mod => mod.CommandTerminal), { ssr: false });
const CommsLink = dynamic(() => import("@/components/ui/CommsLink").then(mod => mod.CommsLink), { ssr: false });
const BackToTop = dynamic(() => import("@/components/ui/BackToTop").then(mod => mod.BackToTop), { ssr: false });

export const GlobalModules = () => {
  return (
    <>
      <CommandTerminal />
      <CommsLink />
      <BackToTop />
    </>
  );
};