# Markdown Content Guide

## Principle

Markdown files are business-controlled inputs. React components are presentation logic.

## Frontmatter

Each content file starts with YAML frontmatter:

```markdown
---
eyebrow: Services
title: What we do
items:
  - title: AI Strategy
    description: ...
    outcome: ...
---
```

Keep indentation consistent. Use two spaces for nested values.

## Writing guidance

- Lead with customer outcomes.
- Avoid generic claims such as "world-class" unless supported.
- Prefer concrete verbs: design, build, deploy, optimize, govern.
- Keep service descriptions around 20–40 words.
- Do not overuse acronyms.
- Use technology names only where they add credibility or specificity.
- Keep the homepage scannable.

## Missing information

Use:

```text
TODO: Add verified customer result.
```

Do not ask Claude Code to make up a replacement.
