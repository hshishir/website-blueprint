"use client";

import { motion, useReducedMotion } from "framer-motion";
import { sectionReveal } from "@/lib/motion";

export function Section({
  id,
  children,
  className = ""
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      variants={reduce ? undefined : sectionReveal}
      initial={reduce ? undefined : "initial"}
      whileInView={reduce ? undefined : "enter"}
      viewport={{ once: true, amount: 0.15 }}
      className={`py-20 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}
