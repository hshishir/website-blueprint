# CLAUDE.md

This file defines the operating rules for Claude Code in this repository.

## Objective

Build and maintain a polished, animated, accessible, static marketing website using the content in `content/` and the configuration in `config/`.

## Source of truth

1. `content/*.md` contains company and page copy.
2. `config/site.ts` contains global identity, links, contact information, and feature switches.
3. `config/theme.ts` contains approved design tokens.
4. `src/lib/motion.ts` contains approved animation variants.
5. `docs/` contains implementation and quality requirements.

Never invent business facts. If a required fact is absent, preserve a visible `TODO:` marker or report the gap.

Never invent:

- Customer names
- Revenue or savings claims
- Performance metrics
- Testimonials
- Certifications
- Partnerships
- Awards
- Case studies
- Employee biographies

## Technology constraints

Use:

- Next.js App Router
- TypeScript with strict mode
- Tailwind CSS
- Framer Motion
- gray-matter
- react-markdown
- remark-gfm

Do not introduce another framework, animation library, CMS, state library, or component system unless explicitly requested.

## Architecture

- `src/app/` — routes and global layout
- `src/components/layout/` — navigation and footer
- `src/components/sections/` — page sections
- `src/components/ui/` — reusable presentation components
- `src/lib/content.ts` — Markdown loading
- `src/lib/motion.ts` — all animation variants
- `content/` — editable business copy
- `config/` — project-specific settings
- `public/` — approved static assets

Keep business copy out of React components. Components may contain only generic UI labels when necessary.

## Theme

The default theme is based on the approved `ks-site` visual direction:

- Coal: `#0a0a0a`
- Charcoal: `#141414`
- Electric lime: `#c8ff00`
- Cyan: `#00d4ff`
- Cloud text: `#d4d4d4`
- Ash text: `#9a9a9a`

Preserve this theme unless `config/theme.ts` explicitly defines approved overrides.

Do not add unrelated bright colors, gradients, or visual styles.

## Animation system

All reusable Framer Motion variants must live in `src/lib/motion.ts`.

Approved patterns:

- `pageVariants`
- `sectionReveal`
- `staggerContainer`
- `staggerItem`
- `heroHeadline`
- `heroSupporting`
- `cardHover`
- `floatingCard`
- `slideInLeft`
- `slideInRight`
- `scaleUp`

Use the state names:

- `initial`
- `enter`
- `exit`

Typical usage:

```tsx
<motion.div
  variants={sectionReveal}
  initial="initial"
  whileInView="enter"
  viewport={{ once: true, amount: 0.2 }}
/>
```

Motion must be restrained and purposeful. Favor short transitions, generally 150–400 ms. Decorative floating motion may be slower.

Respect the operating-system `prefers-reduced-motion` setting through Framer Motion's `useReducedMotion`. Reduced motion must remove continuous floating and substantially simplify translation and scaling.

## Accessibility

Required:

- Semantic landmarks and headings
- One `h1` per page
- Keyboard-accessible navigation
- Visible focus styles
- Descriptive link text
- Sufficient color contrast
- Alt text for meaningful images
- Decorative imagery marked appropriately
- Reduced-motion support
- No interaction that depends only on hover
- Mobile navigation that can be opened and closed by keyboard

## Responsive behavior

Validate at approximately:

- 375 px
- 768 px
- 1024 px
- 1440 px

Avoid horizontal overflow.

## Static deployment

The project must remain compatible with `output: "export"`.

Do not add server-only APIs, server actions, runtime databases, or dynamic functionality that cannot be statically exported.

## Commands

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
```

Before declaring work complete:

1. Run lint.
2. Run type checking.
3. Run the production build.
4. Fix all errors.
5. Report unresolved content placeholders.
6. Summarize files changed.
