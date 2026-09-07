"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ReactNode } from "react";

export const MotionProvider = ({ children }: { children: ReactNode }) => {
  return (
    // 'strict' has been removed. Standard motion tags will now work perfectly.
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
};