---
description: 'React (with TypeScript) development standards and best practices for this Vite + React lab project'
applyTo: '**/*.{tsx,ts,jsx,js}'
---

# React + TypeScript Instructions

Use these rules when generating or editing React code in this repo.

## React patterns
- Prefer function components and hooks; avoid class components.
- Keep components small and focused; refactor if a single `.tsx` file grows too large.
- Prefer composition (`children`, small reusable components) over prop-heavy “god components”.

## TypeScript expectations
- This repo uses strict TypeScript. Avoid `any`; prefer `unknown` + narrowing or proper types.
- Type component props explicitly (`interface XProps { ... }`).
- Use discriminated unions for variant/state modeling.
- Avoid storing derived values in state; compute them from source state/props.

## State, effects, and data flow
- Use `useState` for local state and `useReducer` for complex state transitions.
- Treat `useEffect` as an escape hatch:
  - Include correct dependency arrays.
  - Always clean up subscriptions/timers.
  - Avoid effects that merely derive state from props.
- Keep data flow predictable: lift state up when needed, otherwise keep state local.

## Accessibility (required)
- Use semantic HTML (`button`, `label`, `nav`, `main`, headings in order).
- Ensure all interactive elements work with keyboard navigation.
- Provide accessible names (`aria-label`) for icon-only buttons.
- For forms: connect `<label htmlFor>` to inputs and announce errors (`role="alert"`).

## Styling conventions
- Prefer Tailwind utility classes for layout/spacing/typography and consistent design.
- Keep className strings readable; extract reusable styles into components when repeated.
- Don’t introduce new styling systems without a clear reason (e.g., avoid adding CSS-in-JS libraries).

## Testing (when tests exist)
- Prefer React Testing Library patterns: test behavior and user interactions, not implementation details.
- Add a11y-focused tests where practical.
