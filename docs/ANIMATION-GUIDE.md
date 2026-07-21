# Animation Guide

The animation system is centralized in `src/lib/motion.ts`.

## Goals

- Establish hierarchy
- Guide attention
- Make transitions feel polished
- Preserve performance
- Remain accessible

## Default patterns

- Hero headline: one-time entrance
- Supporting hero content: delayed entrance
- Hero cards: staggered entrance plus subtle floating
- Sections: reveal once as they enter the viewport
- Service cards: staggered reveal and small hover lift
- Mobile menu: simple appearance; avoid elaborate choreography

## Rules

- Use approved variants.
- Do not create arbitrary animation values inside every component.
- Avoid large rotations, dramatic scaling, or long entrance sequences.
- Do not animate every paragraph.
- Do not delay critical content excessively.
- Continuous animation must stop when reduced motion is enabled.
- Maintain usable content when JavaScript is delayed.

## Reduced motion

Use `useReducedMotion()`.

When true:

- Remove continuous floating
- Remove or minimize translation
- Remove large scaling
- Keep content immediately understandable
