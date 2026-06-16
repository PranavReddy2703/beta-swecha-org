# Technical Specification

## Project Name

Swecha.org Frontend Platform

---

# Architecture

## Architecture Pattern

Hybrid-rendered frontend using Astro Island Architecture.

### Objectives

- Minimize client-side JavaScript
- Improve performance
- Support multilingual content
- Enable selective hydration

---

# Technology Stack

| Layer | Technology |
|---------|-----------|
| Framework | Astro |
| Styling | Tailwind CSS |
| Component Library | daisyUI |
| Interactive UI | shadcn/ui |
| Language | TypeScript |
| Runtime | Node.js 22 |

---

# Project Structure

```text
src/
├── components/
├── layouts/
├── pages/
├── styles/
└── i18n/

public/
tailwind.config.ts
astro.config.mjs
tsconfig.json
```

---

# Rendering Strategy

## Static Rendering

Used for:

- Homepage
- Resource pages
- Project pages
- Program pages

## Client Hydration

Used for:

- Search
- Filters
- Language switcher
- Interactive forms

---

# Internationalization

## Requirements

- Locale-based routing
- Translation files
- Fallback language
- URL localization

Example:

```text
/en/
/te/
/hi/
```

---

# Styling Architecture

## Tailwind CSS

Responsible for:

- Utility styling
- Responsive layouts
- Theme support

## daisyUI

Responsible for:

- Common UI primitives

## shadcn/ui

Responsible for:

- Interactive components

---

# Design Tokens

| Token | Value |
|---------|---------|
| Canvas Base | #080B10 |
| Secondary Background | #111827 |
| Card Background | #1B2432 |
| Elevated Surface | #263445 |
| Primary Brand | #00D4FF |
| Hover Brand | #33E4FF |
| Secondary Accent | #4DFFB8 |
| Structural Borders | #273449 |

---

# Performance Requirements

## Lighthouse

| Metric | Target |
|----------|---------|
| Performance | 90+ |
| Accessibility | 90+ |
| SEO | 90+ |
| Best Practices | 90+ |

---

# Security Requirements

- No secrets exposed in frontend
- Environment variables protected
- CSP compatibility
- XSS prevention

---

# Build & Deployment

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

---

# CI/CD Requirements

Pipeline should validate:

- ESLint
- TypeScript
- Translation integrity
- Test execution