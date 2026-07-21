"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageVariants } from "@/lib/motion";

export function AnimatedPage({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.main
      variants={reduce ? undefined : pageVariants}
      initial={reduce ? undefined : "initial"}
      animate={reduce ? undefined : "enter"}
      className="overflow-hidden"
    >
      {children}
    </motion.main>
  );
}
