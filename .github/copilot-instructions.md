# Vibe Coding Lab - Technical Specifications

> This file contains instructions for AI agents building the Vibe Coding Lab educational project. This is an interactive learning platform demonstrating modern React development patterns.

## Project Overview

**Project Name:** Vibe Intake Portal  
**Purpose:** Educational demo showcasing AI-assisted React development  
**Tech Stack:** Vite 5.x + React 18+ + TypeScript 5.x + Tailwind CSS 3.x  
**Deployment:** Azure App Service (vibing101.azurewebsites.net)

## Core Technologies & Versions

- **Vite:** 5.x (dev server, HMR, production builds)
- **React:** 18+ (strict mode enabled)
- **TypeScript:** 5.x (strict: true, noUncheckedIndexedAccess: true)
- **Tailwind CSS:** 4.x (JIT mode)
- **Node.js:** 24 LTS or newer
- **Package Manager:** npm (lock file: package-lock.json)

## Project Structure

```
/
├── .github/
│   ├── copilot-instructions.md (this file)
│   └── workflows/          (CI/CD pipelines)
├── public/                 (static assets)
├── src/
│   ├── main.tsx           (React entry point)
│   ├── App.tsx            (root component)
│   ├── index.css          (Tailwind imports)
│   ├── components/        (React components)
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── lib/               (utilities, validation)
│   ├── types/             (TypeScript definitions)
│   └── assets/            (images, icons)
├── index.html             (HTML template)
├── vite.config.ts         (Vite configuration)
├── tsconfig.json          (TypeScript config)
├── tailwind.config.js     (Tailwind config)
├── postcss.config.cjs     (PostCSS config)
└── package.json           (dependencies, scripts)
```

## Design System

### Color Palette (Dark Theme)

**Background Colors:**

- Primary: `bg-slate-900` (#0f172a) - Main background
- Secondary: `bg-slate-800` (#1e293b) - Cards, panels
- Tertiary: `bg-slate-700` (#334155) - Hover states

**Text Colors:**

- Primary: `text-white` (#ffffff) - Headings, important text (15.5:1 contrast)
- Secondary: `text-slate-300` (#cbd5e1) - Body text (10.1:1 contrast)
- Tertiary: `text-slate-400` (#94a3b8) - Muted text

**Accent Colors:**

- Primary: `text-cyan-500` (#06b6d4) - Links, CTAs (6.2:1 contrast - WCAG AA)
- Hover: `text-cyan-400` (#22d3ee) - Interactive states
- Focus: `ring-cyan-500` - Focus indicators

**Semantic Colors:**

- Success: `text-green-500`, `bg-green-500/10`
- Error: `text-red-500`, `bg-red-500/10`
- Warning: `text-yellow-500`, `bg-yellow-500/10`
- Info: `text-blue-500`, `bg-blue-500/10`

### Typography

- **Font Family:** System fonts (`-apple-system, BlinkMacSystemFont, "Segoe UI", ...`)
- **Headings:** `font-bold`, sizes: `text-4xl`, `text-3xl`, `text-2xl`, `text-xl`
- **Body:** `font-normal`, `text-base` (16px)
- **Small:** `text-sm` (14px)
- **Line Height:** `leading-relaxed` (1.625) for readability

### Spacing

- Use Tailwind's spacing scale: `p-4`, `m-6`, `gap-4`, etc.
- Container max-width: `max-w-7xl`
- Section padding: `py-12` or `py-16`
- Component padding: `p-4`, `p-6`, `p-8`

## Component Architecture

### Component Structure

Each component should follow this pattern:

```typescript
// components/ComponentName/ComponentName.tsx
import { FC } from 'react';
import styles from './ComponentName.module.css'; // if needed

interface ComponentNameProps {
  // Props with JSDoc comments
  /** Description of prop */
  propName: string;
  children?: React.ReactNode;
}

export const ComponentName: FC<ComponentNameProps> = ({
  propName,
  children
}) => {
  return (
    <div className="...">
      {/* Component JSX */}
    </div>
  );
};

// components/ComponentName/index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName';
```

### Button Component Example

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
}

// Styles based on variant
const variants = {
  primary: 'bg-cyan-500 text-white hover:bg-cyan-600',
  secondary: 'bg-slate-700 text-white hover:bg-slate-600',
  ghost: 'bg-transparent text-cyan-500 hover:bg-cyan-500/10',
}
```

## Accessibility Requirements (WCAG AA)

### Color Contrast

- **Large text (18px+):** Minimum 3:1 contrast ratio
- **Normal text:** Minimum 4.5:1 contrast ratio
- **Interactive elements:** Minimum 4.5:1 contrast ratio

✅ **Verified Combinations:**

- White on slate-900: 15.5:1 (Excellent)
- Slate-300 on slate-900: 10.1:1 (Excellent)
- Cyan-500 on slate-900: 6.2:1 (Passes AA)

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<button>` for clickable elements (not `<div>`)
- Use `<nav>` for navigation
- Use `<main>` for main content
- Use `<form>` for forms with proper `<label>` elements

### ARIA Attributes

```tsx
// Form fields
<label htmlFor="email">Email</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && <span id="email-error" role="alert">Error message</span>}

// Buttons
<button aria-label="Close dialog" onClick={onClose}>
  <XIcon aria-hidden="true" />
</button>

// Loading states
<div aria-live="polite" aria-busy={isLoading}>
  {isLoading ? "Loading..." : content}
</div>
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Focus indicators must be visible: `focus:ring-2 focus:ring-cyan-500 focus:outline-none`
- Skip links for screen readers
- Logical tab order (use `tabIndex` sparingly, prefer semantic HTML)

### Screen Reader Support

- Use `aria-label` for icon buttons
- Use `aria-describedby` for error messages
- Use `role="alert"` for dynamic error messages
- Use `aria-live="polite"` for status updates
- Hide decorative images: `aria-hidden="true"`

## TypeScript Standards

### Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### Strict Type Safety

- Enable `strict: true`
- Enable `noUncheckedIndexedAccess: true`
- Define explicit types for all props, state, and function parameters
- Avoid `any` - use `unknown` or proper types
- Use `const` assertions for literal types

### Type Definitions

```typescript
// Prefer interfaces for component props
interface UserProfile {
  id: string
  email: string
  displayName: string
  createdAt: Date
}

// Use type for unions and complex types
type Status = 'idle' | 'loading' | 'success' | 'error'

// Generic types for reusable components
interface FormFieldProps<T> {
  value: T
  onChange: (value: T) => void
  validation?: (value: T) => string | undefined
}
```

## Code Quality Standards

### ESLint Rules (Recommended)

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "off"
  }
}
```

### File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `Button.tsx`, `IntakeForm.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`, `validateEmail.ts`)
- Types: `camelCase.ts` or in component file (e.g., `types/user.ts`)
- CSS Modules: `Component.module.css`

### Import Order

1. React imports
2. Third-party libraries
3. Internal components
4. Utilities/hooks
5. Types
6. Styles

```typescript
import { FC, useState } from 'react'
import { z } from 'zod'
import { Button } from '@/components/Button'
import { validateEmail } from '@/lib/validation'
import type { UserProfile } from '@/types/user'
import styles from './Component.module.css'
```

## Form Validation with Zod

Use Zod for runtime type validation:

```typescript
import { z } from 'zod'

// Define schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

// Use in component
const handleSubmit = (data: ContactFormData) => {
  const result = contactFormSchema.safeParse(data)
  if (!result.success) {
    setErrors(result.error.flatten().fieldErrors)
    return
  }
  // Process valid data
}
```

## State Management

### Local State (useState)

Use for component-specific state:

```typescript
const [formData, setFormData] = useState<FormData>({
  email: '',
  name: '',
})
```

### Derived State

Avoid storing derived values in state:

```typescript
// ❌ Don't do this
const [items, setItems] = useState([...]);
const [itemCount, setItemCount] = useState(0);

// ✅ Do this
const [items, setItems] = useState([...]);
const itemCount = items.length; // Derived
```

### Complex State (useReducer)

Use for complex state logic:

```typescript
type State = {
  status: 'idle' | 'loading' | 'success' | 'error'
  data: Data | null
}
type Action =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: Data }
  | { type: 'FETCH_ERROR'; error: string }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, status: 'loading' }
    case 'FETCH_SUCCESS':
      return { status: 'success', data: action.payload }
    case 'FETCH_ERROR':
      return { ...state, status: 'error' }
    default:
      return state
  }
}
```

## Performance Optimization

### React.memo

Memoize components that receive stable props:

```typescript
export const ExpensiveComponent = React.memo<Props>(({ data }) => {
  // Expensive rendering logic
})
```

### useMemo & useCallback

```typescript
// Expensive computation
const filteredItems = useMemo(
  () => items.filter((item) => item.active),
  [items]
)

// Stable callback reference
const handleClick = useCallback(() => doSomething(id), [id])
```

### Code Splitting

```typescript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<LoadingSpinner />}>
  <HeavyComponent />
</Suspense>
```

## Testing Requirements

### Unit Tests (Vitest)

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    screen.getByRole('button').click();
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
```

### Accessibility Tests

```typescript
import { axe } from 'jest-axe';

it('has no accessibility violations', async () => {
  const { container } = render(<Component />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Build & Deployment

### Development

```bash
npm run dev          # Start dev server (localhost:5173)
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

### Production Build

```bash
npm run build        # Build for production (dist/)
npm run preview      # Preview production build
```

### Azure App Service Deployment

```bash
# Build locally
npm run build

# Deploy to Azure (via Azure CLI or GitHub Actions)
az webapp up --name vibing101 --resource-group vibe-rg
```

### Environment Variables

Create `.env.local` for local development:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Vibe Intake Portal
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## Git Workflow

### Commit Messages (Conventional Commits)

```
feat: add intake form validation
fix: correct color contrast for accessibility
chore: update dependencies
docs: add component documentation
style: format code with prettier
refactor: simplify form state management
test: add Button component tests
```

### Branch Strategy

- `main` - Production-ready code
- `feature/*` - New features
- `fix/*` - Bug fixes
- `chore/*` - Maintenance tasks

## Security Best Practices

### Input Validation

- Validate all user inputs with Zod
- Sanitize user content before display
- Use TypeScript for type safety

### Secrets Management

- Never commit `.env.local` files
- Use Azure Key Vault for production secrets
- Use environment variables for configuration

### Dependencies

- Run `npm audit` regularly
- Keep dependencies updated
- Review security advisories

## Common Patterns

### Error Boundaries

```typescript
class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}
```

### Loading States

```typescript
{isLoading && <LoadingSpinner />}
{error && <ErrorMessage error={error} />}
{data && <DataDisplay data={data} />}
```

### Form Handling

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  try {
    await submitForm(formData)
    setSuccess(true)
  } catch (error) {
    setError(error.message)
  } finally {
    setIsLoading(false)
  }
}
```

## API Integration (Future)

When integrating with backend APIs:

```typescript
// Use fetch with proper types
interface ApiResponse<T> {
  data: T
  error?: string
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url)
  if (!response.ok) {
    return { error: `HTTP ${response.status}` }
  }
  const data = await response.json()
  return { data }
}

// Usage
const { data, error } = await fetchData<UserProfile>('/api/user')
```

## Lab Documentation Structure

### File Organization

**Each lab module must be in a separate markdown file:**

- `lab-00-prerequisites.md` - Environment setup
- `lab-01-create-project.md` - Initial project scaffolding
- `lab-02-add-components.md` - Building React components
- `lab-03-add-forms.md` - Form creation and validation
- `lab-04-styling.md` - Tailwind CSS and design system
- `lab-05-accessibility.md` - WCAG AA compliance
- `lab-06-deployment.md` - Azure deployment
- etc.

### Writing Style Requirements

**CRITICAL: These labs are for ALL experience levels, including complete beginners who have never "vibe coded" before.**

**When writing lab instructions:**

1. **Use extremely clear, simple language**
   - Avoid jargon without explanation
   - Define technical terms when first used
   - Write at a 6th-8th grade reading level
   - Use short sentences and paragraphs

2. **Provide step-by-step instructions**
   - Number every step explicitly
   - Include exact commands to copy/paste
   - Show expected output after each command
   - Include screenshots or ASCII diagrams where helpful

3. **Explain the "why" not just the "what"**
   - "We're installing Node.js because React needs JavaScript to run"
   - "This command creates a new project folder with all the files React needs"
   - Help learners understand concepts, not just follow steps blindly

4. **Include verification steps**
   - After each major step, show how to verify it worked
   - "You should see..." or "If successful, you'll see..."
   - Provide troubleshooting for common errors

5. **Format for easy scanning**
   - Use headings liberally (##, ###)
   - Use bold for **important terms** and actions
   - Use code blocks with language tags: `bash`, `typescript`
   - Use > blockquotes for tips, warnings, or explanations
   - Use ✅, ❌, ⚠️ emoji for visual cues

6. **Assume zero prior knowledge**
   - Explain what "terminal" means
   - Show where to find VS Code's terminal
   - Explain what npm, git, and other tools do
   - Define "vibe coding" at the start: "a development approach where AI agents handle most coding while you guide and verify"

### Example Lab Section Format

````markdown
## Step 3: Install Dependencies

Now we need to install the packages (libraries) that React needs to work.

**What are dependencies?** Think of them like ingredients for a recipe. React needs certain tools (like Vite for building) to work properly.

1. **Open the integrated terminal in VS Code:**
   - Click `Terminal` in the top menu
   - Select `New Terminal`
   - You should see a command prompt at the bottom of VS Code

2. **Run the install command:**
   ```bash
   npm install
   ```
````

**What this does:** Downloads all the packages listed in package.json

3. **Wait for completion:**
   - You'll see progress bars
   - Takes 30-60 seconds typically
   - ✅ Success looks like: "added 247 packages"

4. **Verify it worked:**

   ```bash
   npm run dev
   ```

   **Expected result:** You should see:

   ```
   VITE v5.0.0  ready in 350 ms

   ➜  Local:   http://localhost:5173/
   ```

> **Troubleshooting:** If you see "command not found", Node.js isn't installed correctly. Go back to Lab 00.

```

### Lab Structure Template

Each lab file should include:

1. **Header:** Lab number, title, estimated time
2. **Learning Objectives:** What you'll learn (3-5 bullets)
3. **Prerequisites:** What must be done first
4. **Overview:** 2-3 sentences explaining what this lab accomplishes
5. **Step-by-Step Instructions:** Numbered, detailed, with commands and explanations
6. **Verification:** How to confirm everything works
7. **Common Issues:** Troubleshooting section
8. **Summary:** What was accomplished
9. **Next Steps:** Link to next lab

## AI Agent Instructions

When building features for this project:

1. **Follow all standards above** - TypeScript strict mode, accessibility, design system
2. **One feature at a time** - Build incrementally, test after each change
3. **Verify after changes** - Run `npm run lint`, `npm run build`, `npm run dev`
4. **Ask clarifying questions** - If requirements are ambiguous, ask before implementing
5. **Provide verification steps** - After changes, explain how to test/verify
6. **List all files changed** - Always provide a summary of modified files
7. **Maintain consistency** - Follow existing patterns in the codebase
8. **Prioritize accessibility** - WCAG AA compliance is mandatory
9. **Use TypeScript fully** - No `any` types, proper type definitions
10. **Document complex logic** - Add JSDoc comments for non-obvious code

## Questions to Ask Before Building

Before implementing a feature, clarify:
- What are the acceptance criteria?
- Are there any existing components to reuse?
- What's the expected user flow?
- Are there accessibility requirements beyond WCAG AA?
- Should this work offline or handle network errors?
- What's the mobile experience?
```
