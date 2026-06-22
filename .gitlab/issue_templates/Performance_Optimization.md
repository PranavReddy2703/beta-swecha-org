## Performance Bottleneck

Describe the identified performance issue in detail (e.g., layout shift on initial render, unoptimized image assets, excessive client-side JavaScript bundle size).

---

## Target Optimization Metrics

- **Core Web Vital Target:** _(Lighthouse Score / CLS / LCP / Total Blocking Time)_
- **Current Metric:**
- **Target Baseline:**

---

## Astro Hydration Strategy

- Is a component being migrated from an aggressive hydration directive (`client:load`) to a deferred or static rendering approach (`client:idle`, `client:visible`, or a pure daisyUI CSS primitive)? [ Yes / No ] — if yes, specify the component and the proposed directive change below.

---

## Verification Checklist

- [ ] Bundle audit confirms a net reduction in total asset size.
- [ ] Production build completes without runtime warnings or memory allocation issues (`NODE_OPTIONS` verified).
- [ ] Lighthouse audit or local profiling confirms all target metric thresholds are met.
