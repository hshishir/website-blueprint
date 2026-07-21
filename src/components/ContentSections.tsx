"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "./Section";
import { cardHover, staggerContainer, staggerItem } from "@/lib/motion";

type Service = { title: string; description: string; outcome: string };
type Step = { number: string; title: string; description: string };
type Result = { metric: string; title: string; description: string };

export function Services({ data }: { data: { eyebrow: string; title: string; intro: string; items: Service[] } }) {
  const reduce = useReducedMotion();
  return (
    <Section id="services">
      <div className="container-shell">
        <Eyebrow>{data.eyebrow}</Eyebrow><Heading>{data.title}</Heading>
        <p className="mt-5 max-w-2xl text-lg text-[#9a9a9a]">{data.intro}</p>
        <motion.div variants={staggerContainer} initial="initial" whileInView="enter" viewport={{ once: true }} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.items.map((item) => (
            <motion.article key={item.title} variants={staggerItem} whileHover={reduce ? undefined : cardHover} className="rounded-2xl border border-white/10 bg-[#141414] p-7">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-[#9a9a9a]">{item.description}</p>
              <p className="mt-6 border-t border-white/10 pt-4 text-sm text-[#c8ff00]">{item.outcome}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export function Approach({ data }: { data: { eyebrow: string; title: string; steps: Step[] } }) {
  return (
    <Section id="approach" className="border-y border-white/10 bg-white/[0.02]">
      <div className="container-shell">
        <Eyebrow>{data.eyebrow}</Eyebrow><Heading>{data.title}</Heading>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data.steps.map((step) => (
            <article key={step.number}>
              <div className="font-mono text-sm text-[#00d4ff]">{step.number}</div>
              <h3 className="mt-5 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 leading-7 text-[#9a9a9a]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Results({ data }: { data: { eyebrow: string; title: string; disclaimer: string; items: Result[] } }) {
  return (
    <Section id="results">
      <div className="container-shell">
        <Eyebrow>{data.eyebrow}</Eyebrow><Heading>{data.title}</Heading>
        <p className="mt-4 text-sm text-[#9a9a9a]">{data.disclaimer}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {data.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/10 p-7">
              <p className="text-4xl font-semibold text-[#c8ff00]">{item.metric}</p>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-[#9a9a9a]">{item.description}</p>
            </article>
          ))}
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
      <div className="container-shell rounded-3xl border border-[#c8ff00]/30 bg-[#141414] p-8 md:p-14">
        <Eyebrow>{data.eyebrow}</Eyebrow>
        <h2 className="max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">{data.title}</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#9a9a9a]">{data.body}</p>
        <a href={data.ctaHref} className="focus-ring mt-8 inline-flex rounded-full bg-[#c8ff00] px-6 py-3 font-semibold text-black">{data.ctaLabel}</a>
      </div>
    </Section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 font-mono text-sm uppercase tracking-[0.22em] text-[#00d4ff]">{children}</p>;
}
function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">{children}</h2>;
}
