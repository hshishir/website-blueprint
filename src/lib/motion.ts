import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease } }
};

export const sectionReveal: Variants = {
  initial: { opacity: 0, y: 28 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.55, ease } }
};

export const staggerContainer: Variants = {
  initial: {},
  enter: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.42, ease } }
};

export const heroHeadline: Variants = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.62, ease, delay: 0.08 } }
};

export const heroSupporting: Variants = {
  initial: { opacity: 0, y: 18 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease, delay: 0.2 } }
};

export const cardHover = {
  y: -6,
  transition: { duration: 0.18, ease }
};

export const floatingCard = {
  y: [0, -8, 0],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }
};

export const arrowOscillate = {
  x: [0, 5, 0],
  transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" as const }
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -28 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.5, ease } }
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 28 },
  enter: { opacity: 1, x: 0, transition: { duration: 0.5, ease } }
};

export const scaleUp: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  enter: { opacity: 1, scale: 1, transition: { duration: 0.28, ease } }
};

export const connectorShuttle = {
  x: ["-27%", "27%", "-27%"],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const }
};
