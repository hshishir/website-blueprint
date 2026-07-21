"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroHeadline, heroSupporting, staggerContainer, staggerItem, floatingCard } from "@/lib/motion";

type HeroData = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  heroCards: Array<{ label: string; value: string }>;
};

export function Hero({ data }: { data: HeroData }) {
  const reduce = useReducedMotion();
  return (
    <section className="grid-overlay relative border-b border-white/10 py-24 md:py-36">
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.p variants={reduce ? undefined : heroSupporting} initial={reduce ? undefined : "initial"} animate={reduce ? undefined : "enter"} className="mb-6 font-mono text-sm uppercase tracking-[0.22em] text-[#c8ff00]">
            {data.eyebrow}
          </motion.p>
          <motion.h1 variants={reduce ? undefined : heroHeadline} initial={reduce ? undefined : "initial"} animate={reduce ? undefined : "enter"} className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
            {data.headline}
          </motion.h1>
          <motion.div variants={reduce ? undefined : heroSupporting} initial={reduce ? undefined : "initial"} animate={reduce ? undefined : "enter"}>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#9a9a9a] md:text-xl">{data.subheadline}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="mailto:hello@example.com" className="focus-ring rounded-full bg-[#c8ff00] px-6 py-3 font-semibold text-black">{data.primaryCta}</a>
              <a href="#services" className="focus-ring rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-[#00d4ff]">{data.secondaryCta}</a>
            </div>
          </motion.div>
        </div>
        <motion.div variants={staggerContainer} initial="initial" animate="enter" className="relative grid gap-4">
          {data.heroCards.map((card, index) => (
            <motion.div
              key={card.label}
              variants={staggerItem}
              animate={reduce ? undefined : floatingCard}
              style={{ marginLeft: `${index * 1.5}rem` }}
              className="rounded-2xl border border-white/10 bg-[#141414]/90 p-6 backdrop-blur"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00d4ff]">{card.label}</p>
              <p className="mt-2 text-xl font-medium text-white">{card.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
