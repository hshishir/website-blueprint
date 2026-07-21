export type HomepageData = {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  heroCards: Array<{ label: string; value: string; icon?: "sparkles" | "shield" | "bolt" }>;
};

export type ServicesData = {
  eyebrow: string;
  title: string;
  intro: string;
  items: Array<{ title: string; description: string; outcome: string }>;
};

export type ApproachData = {
  eyebrow: string;
  title: string;
  steps: Array<{ number: string; title: string; description: string }>;
};

export type ResultsData = {
  eyebrow: string;
  title: string;
  disclaimer: string;
  items: Array<{ metric: string; title: string; description: string }>;
};

export type AboutData = {
  eyebrow: string;
  title: string;
  highlights: string[];
};

export type ContactData = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};
