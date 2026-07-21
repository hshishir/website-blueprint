# Design Guide

## Default visual system

| Token | Value | Purpose |
|---|---:|---|
| Coal | `#0a0a0a` | Main background |
| Charcoal | `#141414` | Cards and secondary surfaces |
| Electric lime | `#c8ff00` | Primary CTA and key emphasis |
| Cyan | `#00d4ff` | Secondary emphasis and labels |
| Cloud | `#d4d4d4` | Primary body text |
| Ash | `#9a9a9a` | Secondary text |

## Visual direction

- Dark, technical, premium
- Strong typography
- Spacious section layouts
- Fine borders instead of heavy shadows
- Limited accent colors
- Subtle grid and radial background treatments
- Rounded cards and CTAs
- Abstract UI cards rather than generic stock images

## Customization

Override values only in `config/theme.ts` and CSS variables.

Preserve:

- Contrast hierarchy
- One primary accent
- One secondary accent
- Dark neutral surfaces
- Restrained motion
