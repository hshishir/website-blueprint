# AI Consulting Website Blueprint

A reusable, Claude Code–driven website factory for AI consulting, cloud consulting, and technology services companies.

The blueprint combines:

- The dark coal/charcoal visual theme with electric lime and cyan accents used by `ks-site`
- A centralized Framer Motion animation system inspired by the reusable motion patterns in `flowbit`
- Markdown-first business content
- Next.js App Router, TypeScript, Tailwind CSS, and static export
- GitHub Pages deployment
- Claude Code prompts for validation, generation, review, refinement, and release

## Fastest way to test the blueprint

The repository ships with sample content for a fictional company called **Northstar AI Consulting**.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

This lets you review:

- Color theme
- Hero sequencing
- Section reveal animations
- Staggered service cards
- Hover interactions
- Floating hero cards
- Responsive layout
- Reduced-motion behavior

## Create a real website

1. Create a new GitHub repository.
2. Copy all files from this blueprint into it.
3. Replace the sample files under `content/`.
4. Replace assets under `public/`.
5. Update `config/site.ts`.
6. Run the validation prompt in `prompts/01-validate-inputs.md`.
7. Run the build prompt in `prompts/02-build-website.md`.
8. Run the review and release prompts.
9. Push to `main`.
10. Enable GitHub Pages with **GitHub Actions** as the source.

## Content is the source of truth

Business claims must come from `content/` or `config/`. Claude Code must not invent:

- Customers
- Partnerships
- Certifications
- Metrics
- Testimonials
- Case studies
- Team biographies

See `CLAUDE.md` and `docs/CONTENT-GUIDE.md`.
