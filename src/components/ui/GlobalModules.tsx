"use client";

import { CommandTerminal } from "@/components/ui/CommandTerminal";
import { CommsLink } from "@/components/ui/CommsLink";
import { BackToTop } from "@/components/ui/BackToTop";
import { CustomCursor } from "@/components/ui/CustomCursor"; // Import it here

export const GlobalModules = () => {
  return (
    <>
      <CustomCursor /> {/* Add it to the wrapper */}
      <CommandTerminal />
      <CommsLink />
      <BackToTop />
    </>
  );
};