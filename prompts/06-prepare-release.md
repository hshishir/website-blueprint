# Claude Code Prompt: Prepare for Release

Perform a production-readiness review.

Check:

- Company name and contact details
- Sample content removal
- `TODO:` markers
- Metadata and social sharing
- Favicon and logo
- Broken links
- Responsive behavior
- Keyboard accessibility
- Reduced motion
- Console warnings
- Static export
- GitHub Pages base path
- Workflow configuration

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Fix technical errors.

Do not replace missing business content with invented copy. Report it.

Return a final release status:

- READY
- READY WITH KNOWN LIMITATIONS
- NOT READY
