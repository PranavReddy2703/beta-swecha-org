## Refactor Context & Motivation

Explain why this structural optimization is necessary. Describe the technical debt, legacy workaround, or architectural inconsistency being addressed.

---

## Scope of Modification

- **Target Modules / Files:** 
- **Dependency Impact:** Are any dependencies being updated, replaced, or removed as part of this change? [ Yes / No ] — if yes, specify below.

---

## Non-Breaking Assurance Checklist

- [ ] This change introduces no modifications to visible UI or existing functional behavior.
- [ ] All orphaned files, unused styles, and dead exports have been removed (`npm run knip`)
- [ ] Codebase compiles without TypeScript errors or warnings (`npm run typecheck`)
- [ ] Code style and syntax conform to project linting standards (`npm run lint`)