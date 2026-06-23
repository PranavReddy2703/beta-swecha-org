# Development Tasks: Swecha.org Frontend Platform

Track progress of implementation tasks for the frontend platform.

## Phase 1: Workspace Setup & Styling Foundation

- [ ] Initialize Astro application using Node 22 (`npm create astro@latest`)
- [ ] Set up Tailwind CSS inside Astro
- [ ] Configure daisyUI theme values matching the _Electric Cyan Tech Matrix_ color palette:
  - Base: `#080B10`
  - Primary: `#00D4FF`
  - Secondary: `#111827`
  - Accent: `#4DFFB8`
- [ ] Integrate shadcn/ui initialization framework for interactive components

## Phase 2: Page Layouts & i18n

- [ ] Implement Main Site Layout (`layouts/MainLayout.astro`)
- [ ] Create Navigation components (Header & Footer) supporting responsiveness
- [ ] Configure Astro i18n localization routing configuration for `/en/`, `/te/`, and `/hi/`
- [ ] Add JSON dictionary localization files in `src/i18n/`

## Phase 3: Core Features & Page Implementation

- [ ] Build **Homepage (F-001)** with Hero, Mission statement, and recent updates grid
- [ ] Build **Community Projects (F-003)** pages:
  - Create listing page with layout
  - Add search bar component (Hydrated using `client:visible`)
  - Add filtering by category/stack
  - Build project detail page templates
- [ ] Build **Programs & Initiatives (F-004)** listings and detail pages
- [ ] Build **Resource Center (F-005)** catalog and download handlers
- [ ] Build **Community Updates (F-006)** blog and news pages

## Phase 4: Quality, Accessibility & Release Validation

- [ ] Set up test suites using Vitest (Unit testing) and Playwright (E2E testing)
- [ ] Achieve `80%+` code coverage for reusable components (Buttons, Navigation, Language Selector)
- [ ] Validate keyboard navigation, focus trap in menus, and ARIA attributes
- [ ] Run Lighthouse audits locally and verify scores exceed `90` across all criteria
- [ ] Configure GitLab CI script to run `eslint`, `tsc --noEmit`, and the test suites
