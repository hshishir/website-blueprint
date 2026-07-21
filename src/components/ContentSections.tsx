"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CpuChipIcon,
  BoltIcon,
  AdjustmentsHorizontalIcon,
  LinkIcon,
  ChartBarIcon,
  AcademicCapIcon,
  CheckIcon,
  ArrowRightIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";
import { ArrowRightIcon as ArrowRightIconSolid } from "@heroicons/react/24/solid";
import { Section } from "./Section";
import { arrowOscillate, cardHover, connectorShuttle, scaleUp, staggerContainer, staggerItem } from "@/lib/motion";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type Service = { title: string; description: string; outcome: string };
type Step = { number: string; title: string; description: string };
type Result = { metric: string; title: string; description: string };

const serviceIcons = [CpuChipIcon, BoltIcon, AdjustmentsHorizontalIcon, LinkIcon, ChartBarIcon, AcademicCapIcon];
const MotionArrowRightIcon = motion(ArrowRightIcon);
const MotionSolidArrowIcon = motion(ArrowRightIconSolid);
// Explicit lg placement keeps step cards in the same grid-placement pass as the
// explicitly-positioned connector arrows, so auto-placement doesn't bump the cards to row 2.
const stepGridPlacement = [
  "lg:[grid-column:1] lg:[grid-row:1]",
  "lg:[grid-column:2] lg:[grid-row:1]",
  "lg:[grid-column:3] lg:[grid-row:1]",
  "lg:[grid-column:4] lg:[grid-row:1]"
];

export function Services({ data }: { data: { eyebrow: string; title: string; intro: string; items: Service[] } }) {
  const reduce = useReducedMotion();
  return (
    <Section id="services">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>{data.eyebrow}</Eyebrow>
          <Heading center>{data.title}</Heading>
          <p className="mt-5 text-lg text-[#9a9a9a]">{data.intro}</p>
        </div>
        <motion.div variants={staggerContainer} initial="initial" whileInView="enter" viewport={{ once: true }} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <motion.article
                key={item.title}
                variants={staggerItem}
                whileHover={reduce ? undefined : cardHover}
                className="group rounded-2xl border border-white/10 bg-[#141414] p-7 transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#c8ff00]/60 hover:bg-gradient-to-b hover:from-[#c8ff00]/[0.06] hover:to-transparent hover:shadow-[0_0_32px_-6px_rgba(200,255,0,0.45)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c8ff00]/10 text-[#c8ff00] transition-colors duration-300 group-hover:bg-[#c8ff00]/20 group-hover:ring-2 group-hover:ring-[#c8ff00]/50">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#9a9a9a]">{item.description}</p>
                <p className="mt-6 flex items-start gap-2 border-t border-white/10 pt-4 text-sm text-[#c8ff00]">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {item.outcome}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}

export function Approach({ data }: { data: { eyebrow: string; title: string; steps: Step[] } }) {
  const reduce = useReducedMotion();
  return (
    <Section id="approach" className="border-y border-white/10 bg-white/[0.02]">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>{data.eyebrow}</Eyebrow>
          <Heading center>{data.title}</Heading>
        </div>
        <motion.div
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : "initial"}
          whileInView={reduce ? undefined : "enter"}
          viewport={{ once: true }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-10 lg:grid-cols-4"
        >
          {data.steps.map((step, index) => (
            <motion.article
              key={step.number}
              variants={reduce ? undefined : staggerItem}
              className={`rounded-2xl border border-white/10 bg-[#141414] p-7 text-center ${stepGridPlacement[index] ?? ""}`}
            >
              <motion.span
                variants={reduce ? undefined : scaleUp}
                className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c8ff00] font-mono text-sm font-semibold text-black"
              >
                {step.number}
              </motion.span>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-[#9a9a9a]">{step.description}</p>
            </motion.article>
          ))}
          {data.steps.slice(0, -1).map((_, i) => (
            <div
              key={`connector-${i}`}
              aria-hidden="true"
              style={{ gridColumn: `${i + 1} / ${i + 3}`, gridRow: 1 }}
              className="pointer-events-none relative hidden lg:block"
            >
              <MotionSolidArrowIcon
                animate={reduce ? undefined : connectorShuttle}
                transition={{ delay: i * 0.4 }}
                className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 text-[#c8ff00] drop-shadow-[0_0_8px_rgba(200,255,0,0.75)]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export function Results({ data }: { data: { eyebrow: string; title: string; disclaimer: string; items: Result[] } }) {
  const reduce = useReducedMotion();
  const [highlight, ...rest] = data.items;
  return (
    <Section id="results">
      <div className="container-shell">
        <div>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <Heading>{data.title}</Heading>
          <p className="mt-4 text-sm text-[#9a9a9a]">{data.disclaimer}</p>
        </div>
        <div className="mt-9 grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <motion.div variants={staggerContainer} initial="initial" whileInView="enter" viewport={{ once: true }} className="grid gap-3">
            {data.items.map((item) => (
              <motion.div key={item.title} variants={staggerItem} className="rounded-xl border border-white/10 p-5">
                <p className="flex items-center gap-2 font-semibold text-white">
                  <MotionArrowRightIcon
                    animate={reduce ? undefined : arrowOscillate}
                    className="h-4 w-4 shrink-0 text-[#c8ff00]"
                    aria-hidden="true"
                  />
                  {item.title}
                </p>
                <p className="mt-2 pl-6 leading-7 text-[#9a9a9a]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          {highlight && (
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#c8ff00]/10 via-transparent to-[#00d4ff]/10 p-10">
              <svg aria-hidden="true" className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 text-white/10" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <p className="bg-gradient-to-r from-[#c8ff00] to-[#00d4ff] bg-clip-text text-4xl font-semibold text-transparent md:text-5xl">
                {highlight.metric}
              </p>
              <p className="mt-3 text-xl font-medium text-white">{highlight.title}</p>
              {rest.length > 0 && <p className="mt-8 text-sm text-[#9a9a9a]">+{rest.length} more measured outcome{rest.length > 1 ? "s" : ""} listed alongside.</p>}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

export function About({ data, body }: { data: { eyebrow: string; title: string; highlights: string[] }; body: string }) {
  return (
    <Section id="about" className="border-y border-white/10 bg-white/[0.02]">
      <div className="container-shell grid gap-10 lg:grid-cols-2">
        <div><Eyebrow>{data.eyebrow}</Eyebrow><Heading>{data.title}</Heading></div>
        <div>
          <p className="leading-8 text-[#9a9a9a]">{body}</p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {data.highlights.map((item) => <li key={item} className="border-l-2 border-[#00d4ff] pl-3 text-white">{item}</li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Contact({ data }: { data: { eyebrow: string; title: string; body: string; ctaLabel: string; ctaHref: string } }) {
  return (
    <Section id="contact">
      <div className="container-shell rounded-3xl border border-[#c8ff00]/30 bg-[#141414] p-8 text-center md:p-14">
        <span className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#c8ff00]/15 text-[#c8ff00]">
          <SparklesIcon className="h-6 w-6" aria-hidden="true" />
        </span>
        <Eyebrow center>{data.eyebrow}</Eyebrow>
        <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{data.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#9a9a9a]">{data.body}</p>
        <PrimaryButton href={data.ctaHref} className="mt-8">{data.ctaLabel}</PrimaryButton>
      </div>
    </Section>
  );
}

function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return <p className={`mb-4 font-mono text-sm uppercase tracking-[0.22em] text-[#00d4ff] ${center ? "text-center" : ""}`}>{children}</p>;
}
function Heading({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return <h2 className={`max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl ${center ? "mx-auto text-center" : ""}`}>{children}</h2>;
}
