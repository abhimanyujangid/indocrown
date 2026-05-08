---
name: material-ui
description: Finds and applies Material UI documentation for React and Next.js apps, including component selection, theming, dark mode, accessibility, responsive patterns, and migration guidance. Use when the user mentions Material UI, MUI, @mui, theming, MUI components, or asks for UI implementation with Material UI.

---

# Material UI

## Purpose

Use this skill to:

1. Find the right MUI docs page quickly.
2. Produce implementation-ready MUI code for the user's stack (especially Next.js + TypeScript).
3. Keep guidance aligned with current MUI patterns (components, customization, integrations, migration).

## Default workflow

1. Identify the request type:
   - **Lookup**: "How does X component work?"
   - **Implementation**: "Build X UI using MUI"
   - **Migration**: "Upgrade from old MUI API/version"
2. Prefer official MUI docs as source of truth.
3. Give concise, actionable output:
   - For lookup: short explanation + best-practice caveats.
   - For implementation: complete snippet adapted to the current codebase.
   - For migration: breaking changes + step-by-step upgrade path.

## Source priority

1. Use the Material UI MCP/docs source when available.
2. Use official `mui.com` docs pages from the reference list.
3. Avoid relying on outdated memory when a docs lookup is possible.

## Implementation defaults

- Prefer TypeScript examples.
- In Next.js apps, follow MUI's Next.js integration patterns.
- Use theme-driven styling before ad-hoc inline styles.
- Keep accessibility defaults intact (`aria-*`, labels, focus behavior).
- For dark mode, use color scheme and flicker-safe initialization patterns.
- For responsiveness, use breakpoints and `useMediaQuery` where appropriate.

## Response patterns

### Component recommendation

Return:
- Best component(s) for the use case.
- Why this component fits.
- Key props and pitfalls.
- Minimal example tailored to user context.

### Theming/customization

Return:
- Whether change belongs in `theme` vs local styles.
- The exact `createTheme` / component override shape.
- Any SSR or color-scheme implications.

### Migration help

Return:
- Current version assumptions.
- API deltas and deprecated patterns.
- Ordered migration checklist with verification steps.

## Guardrails

- Do not invent component APIs; verify against docs.
- If docs are ambiguous, call that out and suggest a safe default.
- Prefer smaller composable examples over giant templates unless asked.

## Reference

- Full docs index: [mui-docs-index.md](mui-docs-index.md)
