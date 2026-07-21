"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";

type StatItem = { metric: string; title: string };

export function Stats({ items, disclaimer }: { items: StatItem[]; disclaimer?: string }) {
  return (
    <section className="border-b border-white/10 py-16">
      <div className="container-shell">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="enter"
          viewport={{ once: true, amount: 0.4 }}
          className="grid gap-10 sm:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={staggerItem} className="text-center sm:text-left">
              <div className="mb-3 h-px w-10 bg-gradient-to-r from-[#c8ff00] to-[#00d4ff] sm:mx-0 mx-auto" />
              <p className="bg-gradient-to-r from-[#c8ff00] to-[#00d4ff] bg-clip-text text-4xl font-semibold text-transparent md:text-5xl">
                {item.metric}
              </p>
              <p className="mt-2 text-sm text-[#9a9a9a]">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
        {disclaimer && <p className="mt-8 text-xs text-[#9a9a9a]">{disclaimer}</p>}
      </div>
    </section>
  );
}
