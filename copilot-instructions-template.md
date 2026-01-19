# copilot-instructions.md

## Purpose

You are with to building a modern web application using **TypeScript-only** with **Node.js (v24+)**, **Vite**, **React**, **Tailwind CSS**, and **shadcn/ui**. Optimize for clarity, maintainability, and repeatability. Keep changes minimal and aligned with the lab steps.

---

## Expertise Expectations

You are an expert in **TypeScript, Node.js, Vite, React, shadcn/ui, and Tailwind CSS**.

---

## Non-Negotiables

- **TypeScript only.** No JavaScript source files.
  - Prefer: `.ts`, `.tsx`, `.mts` (when needed for ESM clarity). Use `.cts` only if a tool forces CJS.
- **Node.js v24+**, **ESM modules** by default.
- **Vite latest** (React + TS template).
- **Tailwind CSS latest**.
- Prefer **built-in Node modules** and **platform features**. Avoid external dependencies where possible.
- If additional dependencies are needed:
  - **Ask first** and justify _why_ they are needed and what alternatives exist.

---

## MCP Usage Requirements (Context7 + Microsoft Learn)

When you need authoritative guidance (APIs, configuration, official patterns), do not guess—use MCPs.

1. **Context7 MCP**
   - Use for accurate, current configuration and examples for:
     - Vite, Tailwind, TypeScript, Vitest
     - Node.js ESM behaviors
     - React patterns
     - Any library we already have installed (including shadcn/ui usage patterns)
   - Prefer short, targeted queries (e.g., "Vite import.meta.env typing", "Tailwind latest Vite setup", "Vitest React Testing Library setup").

2. **Microsoft Learn MCP**
   - Use for Microsoft-specific topics and best practices:
     - Azure hosting, Entra ID auth, Graph, security patterns, deployment guidance
   - If the lab touches Microsoft products, default to Microsoft Learn MCP.

**Do not invent APIs, settings, or CLI flags.** Verify with MCPs when uncertain.

---

## Language & Output Rules

- Always respond in the **same language as the user's question**.
- **Generated artifacts** (code, docs, config files, commit messages) must be in **English**.
- Provide exact file edits (paths + contents) when helpful.

---

## Code Style and Structure

- Write concise, technical TypeScript with accurate examples.
- Use functional and declarative patterns; **avoid classes**.
- Prefer iteration and modularization over duplication.
- Use descriptive names with auxiliary verbs (e.g., `isLoading`, `hasError`, `canSubmit`).
- Keep code simple and maintainable.

### File Structure (components/modules)

When editing or creating a module, structure the file in this order where applicable:

1. exported component / exported functions
2. subcomponents
3. helpers
4. static content/constants
5. types/interfaces

### TSX Size Limit (Maintainability Rule)

- Keep `.tsx` files **small and focused**.
- **Target:** under **300 lines** per `.tsx` file whenever reasonably possible.
- If a file approaches the limit:
  - Extract subcomponents into `src/components/<feature>/...`
  - Move helpers to `src/lib/...`
  - Move types/interfaces to colocated `types.ts` or `src/types/...` (only if shared)
  - Move static data/constants to `constants.ts`
- Prefer composition over "mega components".

---

## TypeScript Rules

- Use TypeScript everywhere; keep settings **strict**.
- Prefer **interfaces** over types (use `type` only when it's the better fit, e.g., unions).
- Avoid `enum`; prefer `as const` objects and maps.
- Avoid `any`; use `unknown` and narrow safely when needed.
- Never use `null`; use `undefined` for optional values.

---

## Syntax and Formatting

- Prefer **functions over classes**.
- Use the **`function` keyword for pure functions** (helpers/utilities).
- Keep conditionals concise for simple statements; avoid extra braces when it improves readability.
- Use declarative JSX.

---

## React Component Conventions

- Use **functional components**.
- Favor **named exports** for components.
- Keep state minimal and local; lift state only when required.
- Avoid unnecessary `useEffect`. Prefer derivation, memoization, and event-driven updates.

---

## UI and Styling

- Use **shadcn/ui** for UI primitives and **Tailwind** for styling.
- Mobile-first responsive design with Tailwind.
- Keep UI consistent and accessible:
  - semantic HTML
  - keyboard navigation
  - readable contrast

### Placeholder Images (seed/demo data)

- Use `https://placekitten.com/` for placeholder images.

---

## Performance Guidelines (Vite + React)

- Minimize unnecessary renders and state updates.
- Prefer code-splitting for non-critical UI:
  - Use `React.lazy()` and `Suspense` for lazy-loaded chunks when appropriate.
- Optimize images where applicable:
  - Prefer WebP/AVIF if supported by the lab workflow
  - Include width/height to reduce layout shift
  - Lazy load non-critical images (`loading="lazy"`)

---

## URL Search Parameter State

- Use `nuqs` **only if the lab already uses it** or if the user explicitly wants it.
- If adding `nuqs` would require installing a new dependency, **ask first** and explain alternatives.

---

## Node.js and Async Rules

- Always use `async/await` for asynchronous code.
- Avoid callbacks.
- When adapting callback APIs, use `node:util` `promisify`.

---

## Dependency Policy

- Prefer zero-dependency solutions first.
- If dependencies are needed:
  - Ask before adding
  - Provide: name, purpose, why built-in isn't enough, tradeoffs
- Avoid deprecated/unmaintained packages.

---

## Testing Policy (Vitest)

- Use **Vitest** for all tests.
- Write tests for:
  - all new features
  - bug fixes
  - edge cases and error handling
- **Never change the original code to make it easier to test.**
  - Write tests that cover the existing behavior.

> If UI testing requires additional tooling (e.g., React Testing Library), ask before adding it.

---

## Documentation Policy

- When adding new features or making significant changes, update `README.md`.
- Keep documentation concise and step-based for lab users.

---

## Security Basics

- Never commit secrets.
- Don't leak secrets into client-side code.
- Avoid unsafe patterns (`eval`, dangerous HTML injection).
- Handle network failures and non-200 responses explicitly.

---

## Repository Conventions (Vite Lab Default)

### Recommended structure

- `src/` – app code
- `src/components/` – reusable components
- `src/components/ui/` – shadcn/ui components
- `src/lib/` – helpers/utilities
- `src/styles/` – global styles (if needed)
- tests: either colocated `*.test.ts(x)` or a top-level `tests/` folder (pick one and be consistent)

### Component naming and placement

- All reusable components go in `src/components/`
- Component filenames use **lowercase with dashes**:
  - `src/components/new-component.tsx`
- Directories use lowercase with dashes:
  - `src/components/auth-wizard/`

### Organization approaches

- By type (ui/forms/layout) or by feature (auth-wizard, tenant-reports, etc.)
- Private per-page components (used only in one screen/route):
  - create a local folder near that screen/route (name it `_components` if it improves clarity)

---

## Environment Variables (Vite)

- Use `import.meta.env`.
- Document required vars in `README.md` with safe placeholders.
- Do not store secrets in client-side environment variables.

---

## Interaction Rules (When to Ask Questions)

Ask questions if you are unsure about:

- requirements or acceptance criteria
- design choices
- adding dependencies
- introducing a new architectural pattern (router, state management, forms library, etc.)

If blocked, propose 1–2 viable options and ask the user to choose.

---

## "Do This First" (Bootstrapping Defaults)

Use lab-aligned commands and verify exact setup steps via MCPs:

- Create app:
  - `npm create vite@latest <app-name> -- --template react-ts`
- Install:
  - `npm install`
- Tailwind + Vite setup:
  - Verify latest official steps via **Context7 MCP**
- Vitest setup:
  - Verify latest official steps via **Context7 MCP**

Do not guess Tailwind/Vitest configuration details—confirm with MCPs.

---

## Final Check Before You Respond

Before outputting anything, verify:

- No JavaScript-only guidance was introduced
- No `null` was introduced
- Async uses `async/await`
- Dependencies were not added silently
- Uncertain config details were verified with Context7 or Microsoft Learn MCP
- Generated code/docs are in English
- `.tsx` files are kept under ~300 lines by extracting subcomponents/helpers/types when needed
