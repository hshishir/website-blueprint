"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SparklesIcon, ShieldCheckIcon, BoltIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { heroHeadline, heroSupporting, staggerContainer, staggerItem, floatingCard, cardHover } from "@/lib/motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const heroIcons = {
  sparkles: SparklesIcon,
  shield: ShieldCheckIcon,
  bolt: BoltIcon
} as const;

type HeroCard = { label: string; value: string; icon?: keyof typeof heroIcons };

type HeroData = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  heroCards: HeroCard[];
};

export function Hero({ data }: { data: HeroData }) {
  const reduce = useReducedMotion();
  return (
    <section className="grid-overlay relative border-b border-white/10 py-24 md:py-36">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            variants={reduce ? undefined : heroSupporting}
            initial={reduce ? undefined : "initial"}
            animate={reduce ? undefined : "enter"}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 font-mono text-sm uppercase tracking-[0.22em] text-[#c8ff00]"
          >
            <SparklesIcon className="h-4 w-4" aria-hidden="true" />
            {data.eyebrow}
          </motion.p>
          <motion.h1
            variants={reduce ? undefined : heroHeadline}
            initial={reduce ? undefined : "initial"}
            animate={reduce ? undefined : "enter"}
            className="text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl"
          >
            <span className="block">{data.headlineLead}</span>
            <span className="block bg-gradient-to-r from-[#c8ff00] to-[#00d4ff] bg-clip-text text-transparent">
              {data.headlineAccent}
            </span>
          </motion.h1>
          <motion.div variants={reduce ? undefined : heroSupporting} initial={reduce ? undefined : "initial"} animate={reduce ? undefined : "enter"}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#9a9a9a] md:text-xl">{data.subheadline}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <PrimaryButton href="mailto:hello@example.com">{data.primaryCta}</PrimaryButton>
              <a href="#services" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:border-[#00d4ff]">
                {data.secondaryCta}
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : "initial"}
          animate={reduce ? undefined : "enter"}
          className="mt-16 grid gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#c8ff00]/10 via-transparent to-[#00d4ff]/10 p-6 sm:grid-cols-3"
        >
          {data.heroCards.map((card) => {
            const Icon = card.icon ? heroIcons[card.icon] : SparklesIcon;
            return (
              <motion.div key={card.label} variants={reduce ? undefined : staggerItem}>
                <motion.div
                  animate={reduce ? undefined : floatingCard}
                  whileHover={reduce ? undefined : cardHover}
                  className="flex h-full w-full items-start gap-3 rounded-2xl border border-white/10 bg-[#141414]/90 p-6 backdrop-blur transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#c8ff00]/40 hover:bg-[#141414] hover:shadow-[0_0_28px_-6px_rgba(200,255,0,0.35)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c8ff00]/15 text-[#c8ff00]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#00d4ff]">{card.label}</p>
                    <p className="mt-2 text-xl font-medium text-white">{card.value}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
