# Claude Code Prompt: Build the Website

Read `CLAUDE.md` completely before changing code.

Then read every file under:

- `content/`
- `config/`
- `docs/`
- `public/`

Use the existing blueprint architecture. Do not replace the framework or redesign the repository structure.

Build the complete website using supplied content as the source of truth.

Requirements:

1. Preserve the approved dark ks-site-inspired theme unless configuration explicitly overrides it.
2. Use only the centralized animation patterns in `src/lib/motion.ts`.
3. Apply purposeful hero sequencing, section reveals, staggered cards, subtle hover motion, and restrained floating effects.
4. Respect `prefers-reduced-motion`.
5. Keep business content outside React components.
6. Do not invent claims, customers, metrics, partnerships, certifications, testimonials, or case studies.
7. Maintain static-export compatibility.
8. Ensure responsive behavior and keyboard accessibility.
9. Add SEO metadata from supplied company content.
10. Preserve GitHub Pages deployment.

After implementation:

- Run `npm run lint`
- Run `npm run typecheck`
- Run `npm run build`
- Fix all errors
- Search for sample names, sample email addresses, `TODO:`, and unresolved placeholders
- Summarize files changed
- Report any remaining content gaps
