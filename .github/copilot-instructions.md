# copilot-instructions.md

> **Purpose:** This repo is a **Vibe Coding Lab** for **complete beginners**. Learn how to create a real **Power Apps Code App** using **Vite + React + TypeScript + Tailwind CSS** with **VS Code + GitHub Copilot Beastmode** by having the AI agent do nearly all the work.  
> This file is written for a **Copilot Coding Agent** (and for humans following along).
>
> **Prerequisites:** Latest version of Windows only. Everything else will be installed during the lab.
>
> **Total Lab Time:** ~60 minutes
>
> **Guiding principle:** _The agent does 95% of the work. The human copies/pastes prompts, watches, verifies, and learns._
>
> **How this works:**
>
> 1. You copy/paste the provided prompts into GitHub Copilot Chat (**Beastmode/Agent Mode** enabled)
> 2. The agent does the work (installs, creates files, runs commands)
> 3. You watch and verify the results
> 4. If there are ANY errors, copy the full error message and paste it into Copilot Chat with "Fix this error:"
> 5. Repeat until the error is resolved
> 6. Move to the next step
>
> **Error Handling Rule:** Never struggle with errors alone. Copy the entire error message and paste it into GitHub Copilot Chat in Beastmode with the prompt: "Fix this error: [paste error here]". The agent will diagnose and fix it. Repeat until resolved.

**Accessibility Rule:** All UI elements MUST meet WCAG AA standards (4.5:1 contrast ratio minimum). Test with browser DevTools Accessibility Inspector before committing.

---

## What is a Power Apps Code App?

**Power Apps Code Apps (preview)** let developers bring Power Apps capabilities into custom web apps built in a code-first IDE. You can:

- Develop locally in VS Code and run the same app in Power Platform
- Build with popular frameworks (React, Vue, etc.) while keeping full control over UI and logic
- Access Microsoft Entra authentication and authorization
- Connect to Power Platform data sources and 1,500+ connectors directly from JavaScript
- Publish and host line-of-business web apps in Power Platform
- Adhere to Managed Platform policies (sharing limits, Conditional Access, Data Loss Prevention)

**Key Docs:** [Power Apps Code Apps Overview](https://learn.microsoft.com/en-us/power-apps/developer/code-apps/overview)

---

## What we're building in this lab

A small but impressive "**Universal Intake Portal**" web app as a **Power Apps Code App**:

- **Frontend:** Vite + React + TypeScript
- **Power Apps Integration:** Power Platform SDK for authentication, connectors, and managed deployment
- **Data:** Power Platform connectors (Dataverse, Azure SQL, SharePoint) OR local dev backend
- **UI:** Tailwind with WCAG AA compliant design system (4.5:1 minimum contrast)
- **Forms:** Multi-step request intake form with validation and full accessibility
- **Accessibility:** Semantic HTML, ARIA labels, keyboard navigation, screen reader support
- **Extras:** Microsoft Entra authentication, telemetry (optional), "AI-enhanced" feature (optional)

**Why this app?** It’s understandable, demo-friendly, and lets us showcase: routing, forms, validation, API calls, state, and code quality.

---

## Lab structure (modular ~30 minutes each)

Each module is designed to be completed independently.  
Steps are labeled:

- **[REQUIRED]** must-do for the lab
- **[OPTIONAL]** nice-to-have / stretch goal

Each module includes:

- Goal
- Key vibe-coding techniques to practice
- Exact actions (commands, files)
- “Copilot prompts” you can copy/paste
- Verification checks

> **Survey links:** Replace `<<MS_FORMS_LINK>>` with your Microsoft Forms link for each module.

---

# Module -1 — Install Everything You Need (30-45 min)

## Goal

Install all the tools you need to start coding. **The agent will help you install everything.**

## What You're Installing and Why

- **VS Code**: The code editor where you'll do all your work
- **Node.js**: JavaScript runtime needed to run your app locally
- **Git**: Version control system to save your work
- **Power Platform CLI (pac)**: Command-line tool to deploy to Power Apps
- **GitHub Copilot**: The AI that will write most of your code

## [REQUIRED] Step 1: Install VS Code

### Copy/Paste This Prompt into ANY AI Chat:

```text
I need to install Visual Studio Code on my computer. Please:
1. Tell me what Visual Studio Code is and why I need it
2. Provide the download link
3. Give me step-by-step installation instructions for my operating system
4. Tell me how to verify it's installed correctly
```

**After installation**, verify by opening a command prompt/terminal and typing:

```bash
code --version
```

You should see a version number like `1.95.0` or higher.

**If you get an error:** Copy the error message and paste it into GitHub Copilot Chat with "Fix this error: [your error]"

---

## [REQUIRED] Step 2: Install Node.js (v24+)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
I need to install Node.js version 24 or higher for Power Apps Code development. Please:
1. Explain what Node.js is and why I need it for this project
2. Provide the download link for Node.js LTS version 24+
3. Give me installation instructions
4. Tell me how to verify it's installed correctly
5. Show me how to check my version
```

**After installation**, verify:

```bash
node -v
npm -v
```

**Expected output:**

- `node -v` should show `v24.x.x` or higher
- `npm -v` should show a version number (comes with Node.js)

**If you get an error:** Paste the full error into Copilot Chat: "Fix this error: [error message]"

---

## [REQUIRED] Step 3: Install Git

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
I need to install Git for version control. Please:
1. Explain what Git is and why I need it
2. Provide the download link for Git
3. Give me installation instructions
4. Show me how to verify it's installed
5. Help me configure it with my name and email after installation
```

**After installation**, verify:

```bash
git --version
```

**Expected output:** Something like `git version 2.43.0` or higher

**Then configure Git** (Copilot will guide you through this):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**If you get an error:** Paste into Copilot Chat: "Fix this error: [error message]"

---

## [REQUIRED] Step 4: Install Power Platform CLI

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
I need to install the Power Platform CLI (pac) for deploying Power Apps Code Apps. Please:
1. Explain what the Power Platform CLI is and why I need it
2. Provide installation instructions for my operating system
3. Show me how to verify it's installed correctly
4. Explain what the pac command does

Installation guide: https://learn.microsoft.com/power-platform/developer/cli/introduction
```

**After installation**, verify:

```bash
pac
```

**Expected output:** You should see the Power Platform CLI help information

**If you get an error:** Paste into Copilot Chat: "Fix this error: [error message]"

---

## [REQUIRED] Step 5: Install GitHub Copilot in VS Code

### Copy/Paste This Prompt into GitHub Copilot Chat (or any AI):

```text
I need to install GitHub Copilot extension in VS Code. Please:
1. Explain what GitHub Copilot is
2. Give me step-by-step instructions to install it in VS Code
3. Show me how to enable Agent Mode in Copilot Chat
4. Verify my Copilot subscription is active
```

**Steps the agent will guide you through:**

1. Open VS Code
2. Click Extensions (sidebar icon)
3. Search for "GitHub Copilot"
4. Install both:
   - GitHub Copilot
   - GitHub Copilot Chat
5. Sign in when prompted
6. Open Copilot Chat (Ctrl+Shift+I or Cmd+Shift+I)
7. Enable Agent Mode with `@workspace`

---

## [REQUIRED] Step 6: Set Up Power Platform Environment

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
I need to set up a Power Platform environment for Power Apps Code Apps. Please:
1. Explain what a Power Platform environment is
2. Guide me through authenticating the PAC CLI
3. Help me select my environment
4. Explain what licenses I need
5. Show me how to verify everything is connected

I need to run:
- pac auth create
- pac env select --environment <ID>

But I need help understanding each step and what to do if I don't have an environment yet.
```

**The agent will help you with:**

- Signing in to Power Platform
- Selecting or creating an environment
- Verifying you have the right licenses (Power Apps Premium needed)

**Admin setup needed** (ask your IT admin if you can't do this):

1. Go to [Power Platform admin center](https://admin.powerplatform.microsoft.com)
2. Manage > Environments > (select environment)
3. Settings > Product > Features
4. Enable "Power Apps code apps" toggle
5. Save

**If you get an error:** Paste the full error into Copilot Chat: "Fix this error: [error message]"

---

## [OPTIONAL] Step 7: Install Helpful VS Code Extensions

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Install the following VS Code extensions for me and explain what each one does:
- ESLint
- Prettier
- Tailwind CSS IntelliSense

For each extension:
1. Tell me what it does
2. Why I might need it for this project
3. Install it if I confirm
```

---

## Verification Checklist

Run these commands in your terminal to verify everything is installed:

```bash
code --version
node -v
npm -v
git --version
pac
```

**All commands should return version numbers with no errors.**

### Copy/Paste This Verification Prompt:

```text
Verify my development environment is set up correctly for Power Apps Code Apps development.

Run these commands and check the output:
- code --version
- node -v (must be 24+)
- npm -v
- git --version
- pac

Tell me if anything is wrong and how to fix it.
```

**If ANY command fails:** Paste the error into Copilot Chat: "Fix this error: [error message]"

---

## Survey

- Module -1 survey: `<<MS_FORMS_LINK>>`

---

# Module 0 — Safety Rails & Best Practices (15 min)

## Goal

Understand the safety rules and best practices. The agent will enforce these automatically.

## [REQUIRED] Repo conventions (Agent will enforce these)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Explain these coding rules for our Power Apps Code App project:

1. TypeScript only (no JavaScript files except config)
2. No secrets in the repo (use .env.local for local secrets)
3. Commit small changes frequently
4. Never commit node_modules or build folders

For each rule:
- Why is it important?
- How will you help me follow it?
- What should I watch out for?

Then help me set up a .gitignore file that follows these rules.
```

**The agent will create a proper `.gitignore` file for you.**

---

## [REQUIRED] Error Handling Protocol

**CRITICAL: This is the most important thing to remember:**

### When You See ANY Error:

1. **DON'T PANIC** - errors are normal and expected
2. **Copy the ENTIRE error message** (all of it, even if it's long)
3. **Paste it into GitHub Copilot Chat in Agent Mode** with this prompt:

```text
Fix this error:

[paste your full error message here]

Please:
1. Explain what caused this error in simple terms
2. Show me exactly how to fix it
3. Run the fix for me if possible
4. Verify the error is resolved
```

4. **Let the agent fix it** - it will run commands, edit files, and verify the fix
5. **Verify the fix worked** - the agent will tell you how
6. **If the same error appears again**, paste it again with "This error came back: [error]"

### Example Error Handling Conversation:

**You see:** `Error: Cannot find module 'react'`

**You paste into Copilot Chat:**

```text
Fix this error:

Error: Cannot find module 'react'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:1148:15)

Please:
1. Explain what caused this error
2. Show me exactly how to fix it
3. Run the fix for me
4. Verify it's resolved
```

**Agent responds and fixes it for you.**

---

## Survey

- Module 0 survey: `<<MS_FORMS_LINK>>`

---

# Module 1 — MCP basics + setting up MCP servers (30 min)

## Goal

Understand MCP at a practical level and configure a few helpful MCP servers.

## What is MCP (short explanation)

**Model Context Protocol** lets your coding agent connect to tools (filesystem, browser automation, docs, etc.) through a standard interface.  
In this lab, MCP is used to:

- read/write files safely
- run repo-wide analysis
- automate browser verification (optional)
- capture repeatable “agent behaviors”

## [REQUIRED] MCP servers for this lab (recommended)

- **Filesystem MCP** (read/write project files)
- **GitHub MCP** (issues, PRs, repo context; optional if repo is local only)
- **Playwright MCP** (optional; for automated UI checks)
- **Sequential Thinking MCP** (optional; for structured reasoning)
- **Memory MCP** (optional; keep lab notes consistent across sessions)

> Use the MCP setup method required by your organization/tooling (VS Code, GitHub Copilot Agent Mode, or your approved MCP runner).

## [REQUIRED] Safety rules for MCP usage

- The agent must never read outside the repository folder unless explicitly asked
- Never exfiltrate secrets from `.env.local`
- Never paste tokens into chat
- Prefer deterministic checks: `npm test`, `npm run lint`, `npm run build`

## Survey

- Module 1 survey: `<<MS_FORMS_LINK>>`

---

# Module 2 — Create the Vite + React + TS app (30 min)

## Goal

Scaffold the app using the Power Apps Code Apps template and run it locally.

## [REQUIRED] Create Power Apps Code App

### Official Power Apps Code First Steps

Follow these steps from the [official quickstart](https://learn.microsoft.com/power-apps/developer/code-apps/quickstart):

1. **Initialize from template:**

   ```bash
   npx degit github:microsoft/PowerAppsCodeApps/templates/vite vibe-intake-portal
   cd vibe-intake-portal
   ```

2. **Install dependencies and initialize Power Platform SDK:**

   ```bash
   npm install
   pac code init --displayname "Vibe Intake Portal"
   ```

   This command:
   - Installs the Power Platform SDK
   - Configures your code app for Power Platform deployment
   - Creates necessary configuration files

3. **Test locally:**

   ```bash
   npm run dev
   ```

   - Open the URL labeled **Local Play** in your browser
   - **Important:** Open in the same browser profile as your Power Platform tenant

   **Note about Local Network Access:**
   - Chrome/Edge may block requests from public origins to localhost
   - You may need to grant browser permission during development
   - For details: [Control local network access in Edge](https://support.microsoft.com/topic/control-a-website-s-access-to-the-local-network-in-microsoft-edge-ef7eff4c-676d-4105-935c-2acbcd841d51)

### Verify

- App runs locally with Hot Module Replacement (HMR)
- Power Platform SDK is initialized
- You can see the starter template in the browser

## [REQUIRED] Baseline scripts

Ensure `package.json` has at least:

- `dev` (already configured by template)
- `build` (already configured by template)
- `preview`

## [REQUIRED] Deploy test to Power Platform

Before continuing, verify you can deploy to Power Platform:

```bash
npm run build
pac code push
```

**Expected outcome:**

- Command returns a Power Apps URL
- You can open the app in [Power Apps](https://make.powerapps.com/)
- App appears in your environment's app list

## [OPTIONAL] Add Tailwind

If you want Tailwind, add it now (keep it simple). If not, skip.

## Survey

- Module 2 survey: `<<MS_FORMS_LINK>>`

---

# Module 3 — Vibe coding workflow in VS Code (30 min)

## Goal

Use GitHub Copilot the _right way_ (small steps, tight loops, verification).

## The vibe coding loop (repeat constantly)

1. **State intent** (what and why)
2. **Constrain scope** (files, functions, acceptance criteria)
3. **Ask Copilot** for a small change
4. **Review output** (security + correctness)
5. **Run checks** (lint/build/tests)
6. **Commit**

## [REQUIRED] Prompting rules (agent + human)

- Always ask for **one small change** per prompt
- Always require **acceptance criteria**
- Always require **commands to verify**
- Always require **files changed list**
- Prefer **type-safe** solutions (Zod, typed APIs, etc.)

## Copy/paste: “Vibe Coding Prompt Template”

Use this template with Copilot Chat / Agent Mode:

```text
You are the repo coding agent.

Goal:
- Implement <FEATURE>.

Scope limits:
- Only change these files: <LIST FILES OR "create new files under src/…">
- Do NOT introduce new frameworks.
- TypeScript only.

Acceptance criteria:
- <BULLET LIST>

Plan:
- Provide a short plan (max 6 bullets), then implement.

Verification:
- Provide the exact commands to run and what “success” looks like.

Output format:
- 1) Plan
- 2) Diff-like summary of changes
- 3) Verification commands
```

## [REQUIRED] Commit discipline

- Commit after each module
- Use clear messages: `feat: add intake form step 1`, `chore: add lint`, etc.

## Survey

- Module 3 survey: `<<MS_FORMS_LINK>>`

---

# Module 4 — App structure + routing (30 min)

## Goal

Add simple routing and a clean folder structure.

## [REQUIRED] Folder standards

```
src/
  app/            # app shell, routes
  components/     # reusable UI components
  features/       # feature slices (intake, admin, etc.)
  lib/            # utilities (api, validation, types)
  styles/         # global styles
  types/          # shared types
```

## [REQUIRED] Routing

Pick one:

- React Router (simple and common)
- Or keep it single-page with conditional screens (simpler)

### Suggested screens

- `/` Home
- `/new` New Request (wizard)
- `/thanks` Confirmation
- `/admin` (optional)

## Survey

- Module 4 survey: `<<MS_FORMS_LINK>>`

---

# Module 5 — Multi-step intake form + validation (30 min)

## Goal

Build the intake experience.

## [REQUIRED] Data model (TypeScript)

Create a type for the submission, e.g.:

- request title
- category
- requester info
- details
- priority
- due date (optional)

## [REQUIRED] Validation

Recommended: **Zod** for schema validation.

- Validate on each step
- Block “Next” if invalid
- Show friendly errors

## [REQUIRED] Form state

Choose one:

- React Hook Form (recommended)
- Or lightweight local state (fine for small)

## Survey

- Module 5 survey: `<<MS_FORMS_LINK>>`

---

# Module 6 — Backend API + persistence (30 min)

## Goal

Connect to Power Platform data sources or create a local dev backend.

## [REQUIRED] Choose data strategy

### Option A (Recommended): Power Platform Connectors

- Use Power Platform SDK to connect to:
  - **Dataverse** (structured business data)
  - **Azure SQL** (relational data)
  - **SharePoint** (document-based data)
  - Any of 1,500+ Power Platform connectors

**Benefits:**

- Production-ready authentication
- Automatic DLP enforcement
- No separate backend to maintain
- Follows [How to: Connect to data](https://learn.microsoft.com/power-apps/developer/code-apps/connect-to-data)

### Option B (Dev/Testing): Local Backend

If you need offline development or testing without Power Platform:

- Create `server/` folder with small Express app
- Endpoint: `POST /api/requests`
- Persist to `data/requests.json` (append with timestamps)
- Add `GET /api/requests` for admin view

## [REQUIRED] CORS + security baseline

- For local dev: Only accept requests from localhost
- For Power Platform: Use built-in authentication from SDK
- Validate payload on server (Zod again)
- Never trust the client

## [OPTIONAL] Power Platform data source examples

- Create Dataverse table for requests
- Configure SharePoint list for submissions
- Use Azure SQL with managed identity

## Survey

- Module 6 survey: `<<MS_FORMS_LINK>>`

---

# Module 7 — UI polish + accessibility (30 min)

## Goal

Make it look professional and fully accessible (WCAG AA compliant).

## [REQUIRED] Accessibility & UI Checklist

### Color Contrast (WCAG AA: 4.5:1 minimum)

**Verified Accessible Color Combinations:**
- ✅ White text (#FFFFFF) on dark backgrounds (slate-900 #0f172a): 15.5:1
- ✅ Light text (slate-300 #cbd5e1) on dark backgrounds (slate-900): 10.1:1
- ✅ Cyan-500 (#06b6d4) on slate-900: 6.2:1 - PASSES AA
- ✅ White on cyan-500: 3.5:1 - Use white for large text only (18px+)
- ⚠️ For buttons: Use white text on cyan-500 for 18px+ text, or add darker cyan (cyan-600 #0891b2) for smaller text

**Testing Color Contrast:**
- Use browser DevTools Accessibility Inspector (F12 > Accessibility tab)
- Or use online tool: https://webaim.org/resources/contrastchecker/
- All text must be readable without relying on color alone
- Include icons or text labels alongside color indicators

### Semantic HTML Requirements
- Use proper heading hierarchy (h1 → h2 → h3, no skipping)
- Use `<button>` for interactive elements (not `<div onclick>`)
- Use `<nav>` for navigation menus
- Use `<main>` for primary content
- Use `<section>` and `<article>` for content grouping
- Use `<label>` properly associated with form inputs
- Use `<form>` for all forms

### ARIA Labels & Attributes
- Add `aria-label` to icon-only buttons: `<button aria-label="Close dialog">`
- Use `aria-labelledby` to associate headings with sections
- Add `aria-describedby` for additional context
- Mark required fields: `<input aria-required="true" required>`
- Use `aria-invalid="true"` for fields with errors
- Add `aria-live` regions for dynamic content (form errors, success messages)
- Use `role="alert"` for error messages

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Test with Tab (forward), Shift+Tab (backward), Enter (activate), Escape (cancel)
- Focus order must be logical (top to bottom, left to right)
- Focus indicators must be visible (2px outline minimum)
- Skip links for navigation: `<a href="#main" class="sr-only focus:not-sr-only">Skip to main content</a>`
- Trap focus in modals (prevent Tab from leaving modal)

### Screen Reader Support  
- Test with NVDA (Windows), JAWS (Windows), or VoiceOver (Mac)
- All images must have `alt` text (or `alt=""` if decorative)
- Form errors must be announced: `<div role="alert" aria-live="polite">`
- Loading states announced: `<div aria-live="polite" aria-busy="true">Loading...</div>`
- Success messages announced: `<div role="alert" aria-live="polite">Form submitted successfully</div>`

### Visual Requirements
- Clear headings with proper hierarchy
- Consistent spacing and padding
- Error messages visible and associated with fields
- Submit button disabled while saving with clear loading indicator
- Hover effects visible and smooth (use `transition-colors` or `transition-transform`)
- Focus indicators always visible (don't use `outline: none` without replacement)
- Minimum touch target size: 44x44px for mobile

### Responsive Design
- Mobile-first approach (320px minimum width)
- Test at: 320px, 375px, 768px, 1024px, 1920px
- No horizontal scrolling at any breakpoint
- Text remains readable (16px minimum on mobile)
- Buttons and inputs appropriately sized for touch

### Testing Checklist Before Commit
- [ ] Run browser DevTools Accessibility Inspector - no critical issues
- [ ] Navigate entire app with keyboard only (no mouse)
- [ ] Tab order is logical and complete
- [ ] All interactive elements have visible focus indicators  
- [ ] All images have alt text
- [ ] All forms have associated labels
- [ ] Color contrast meets 4.5:1 minimum (verified with tool)
- [ ] Error messages are announced and visible
- [ ] Test with browser zoom at 200% (text must remain readable)
- [ ] Test in Edge/Chrome DevTools mobile emulation

## [REQUIRED] Accessible Form Example

```tsx
<form onSubmit={handleSubmit} aria-labelledby="form-title">
  <h2 id="form-title">Contact Form</h2>
  
  {/* Input with label */}
  <div>
    <label htmlFor="name" className="block text-sm font-medium">
      Name <span className="text-red-500" aria-label="required">*</span>
    </label>
    <input
      id="name"
      type="text"
      required
      aria-required="true"
      aria-invalid={errors.name ? "true" : "false"}
      aria-describedby={errors.name ? "name-error" : undefined}
      className="mt-1 block w-full rounded border-2 border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
    />
    {errors.name && (
      <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
        {errors.name}
      </p>
    )}
  </div>

  {/* Accessible button */}
  <button
    type="submit"
    disabled={isSubmitting}
    aria-busy={isSubmitting}
    className="px-6 py-3 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
  >
    {isSubmitting ? (
      <>
        <span className="sr-only">Submitting form...</span>
        <span aria-hidden="true">Submitting...</span>
      </>
    ) : (
      'Submit'
    )}
  </button>
</form>
```
- Consistent spacing
- Keyboard navigation works
- Error messages are visible and associated with fields
- Submit button disabled while saving

## [REQUIRED] Accessibility Testing Tools

### Browser DevTools
- **Edge/Chrome:** F12 > More Tools > Accessibility Inspector
- **Firefox:** F12 > Accessibility tab
- Shows: ARIA attributes, contrast ratios, keyboard accessibility

### Online Tools
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **WAVE:** https://wave.webaim.org/ (paste URL to scan)
- **axe DevTools:** Browser extension for automated testing

### Screen Readers (Test with these)
- **NVDA:** Free, Windows - https://www.nvaccess.org/
- **JAWS:** Commercial, Windows - https://www.freedomscientific.com/products/software/jaws/
- **VoiceOver:** Built-in, Mac/iOS (Cmd+F5 to enable)
- **Narrator:** Built-in, Windows (Ctrl+Win+Enter)

### Keyboard Testing Checklist
- Tab through entire page - reaches all interactive elements
- Shift+Tab works in reverse
- Enter activates buttons/links
- Escape closes modals/dialogs
- Arrow keys work in menus/selects
- Space toggles checkboxes
- Focus visible on all elements

## [OPTIONAL] Component library

- Keep it light. Avoid heavy rewrites.

## Survey

- Module 7 survey: `<<MS_FORMS_LINK>>`

---

# Module 8 — Quality gates (lint, format, build) (30 min)

## Goal

Add “trustable” checks.

## [REQUIRED] Add linting + formatting

- ESLint (TypeScript + React)
- Prettier (optional if your org already enforces formatting)

## [REQUIRED] Scripts

Add scripts like:

- `lint`
- `typecheck`
- `build`

## [REQUIRED] Verification

```bash
npm run lint
npm run build
```

## Survey

- Module 8 survey: `<<MS_FORMS_LINK>>`

---

# Module 9 — Playwright smoke test (optional, 30 min)

## Goal

Prove UI works with a real browser run.

## [OPTIONAL] Add Playwright

- Generate one smoke test:
  - load home page
  - navigate to new request
  - fill required fields
  - submit
  - see confirmation

## [OPTIONAL] Use Playwright MCP

If available, use it to:

- run tests
- capture screenshots
- validate flows

## Survey

- Module 9 survey: `<<MS_FORMS_LINK>>`

---

# Module 10 — “Agent discipline” patterns (30 min)

## Goal

Make agent outputs consistent and safe.

## [REQUIRED] Agent rules (non-negotiable)

1. **No secrets** in code or logs
2. **TypeScript only**
3. **No large refactors** unless explicitly requested
4. Every change must include:
   - files changed
   - verification commands
   - acceptance criteria check

## [REQUIRED] “Ask before adding dependencies”

If the agent wants to add a dependency, it must:

- explain why
- offer an alternative
- show license + basic trust check (popular, maintained)
- keep dependency count minimal

## Survey

- Module 10 survey: `<<MS_FORMS_LINK>>`

---

# Module 11 — Optional: telemetry stub (Application Insights style) (30 min)

## Goal

Teach the idea of logging/telemetry (even if not fully wired to Azure).

## [OPTIONAL] Telemetry approach

- Add a tiny client logger wrapper:
  - `trackEvent(name, props)`
  - `trackError(err, props)`
- For the lab, log to console in dev, and structure messages as if they were going to App Insights.

## Survey

- Module 11 survey: `<<MS_FORMS_LINK>>`

---

# Module 12 — Optional: Deploy (30–60 min)

## Goal

Deploy the Power Apps Code App to Power Platform.

## [REQUIRED] Deploy to Power Platform

Power Apps Code Apps have a built-in deployment process:

1. **Build your app:**

   ```bash
   npm run build
   ```

2. **Push to Power Platform:**

   ```bash
   pac code push
   ```

3. **Verify deployment:**
   - Command returns a Power Apps URL
   - Open [Power Apps](https://make.powerapps.com/)
   - Find your app in the app list
   - Test in production environment
   - Share with users (follows Power Platform sharing limits)

## [OPTIONAL] Advanced deployment scenarios

### CI/CD Pipeline

- Set up GitHub Actions or Azure DevOps
- Automate `npm run build` and `pac code push`
- Use service principals for authentication
- Follow [ALM documentation](https://learn.microsoft.com/power-apps/developer/code-apps/alm)

### Environment strategy

- Dev environment: for active development
- Test environment: for validation
- Production environment: for end users
- Use PAC CLI to switch: `pac env select --environment <ENV_ID>`

### Monitoring

- Use Power Platform admin center for health metrics
- Review app usage and performance
- Monitor connector usage and throttling

**Security baseline:**

- Credentials managed by Power Platform
- No secrets in repo
- DLP policies enforced automatically
- Conditional Access policies apply

## Survey

- Module 12 survey: `<<MS_FORMS_LINK>>`

---

# Troubleshooting playbook (quick)

## Common issues

- **Node version mismatch**
  - Fix by installing Node LTS 24+ and restarting terminal
- **Type errors exploding**
  - Ask Copilot to fix _one file at a time_ and re-run typecheck
- **Dependency conflicts**
  - Avoid `--force` unless you understand breaking changes
- **Form state chaos**
  - Centralize schema + defaults, validate each step
- **API 404**
  - Confirm dev proxy config + server port
- **CORS errors**
  - Lock origins to localhost, validate headers

---

# Copy/paste prompts for each module (agent-ready)

## Module prompt: scaffold + run

```text
Create a Power Apps Code App using the official Microsoft template following the exact steps from the Power Apps Code First documentation:

1. Initialize from the official template: npx degit github:microsoft/PowerAppsCodeApps/templates/vite vibe-intake-portal
2. Install dependencies and initialize Power Platform SDK: npm install && pac code init --displayname "Vibe Intake Portal"
3. Test locally: npm run dev
4. Deploy test: npm run build && pac code push

Constraints:
- Follow the official Power Apps Code First quickstart exactly
- TypeScript only
- Ensure PAC CLI is authenticated before deployment

Acceptance criteria:
- App runs locally with HMR at the "Local Play" URL
- Power Platform SDK is initialized
- pac code push successfully deploys to Power Platform
- App appears in Power Apps environment

Verification:
- Provide exact commands and expected output for each step
- Confirm Power Apps URL is returned after deployment
```

## Module prompt: routing

```text
Add simple routing with Home, New Request, and Thanks screens.
Constraints:
- TypeScript only
- Keep changes minimal
Acceptance criteria:
- navigation works
- refresh on each route works in dev
Verification:
- include commands and a quick manual test checklist
```

## Module prompt: intake form wizard

```text
Implement a multi-step intake form wizard with validation.
Constraints:
- TypeScript only
- Prefer Zod for schema validation
Acceptance criteria:
- cannot proceed with invalid inputs
- shows helpful error messages
- submission posts to /api/requests
Verification:
- commands + manual test steps
```

## Module prompt: API + persistence

```text
Create a minimal Node/Express API under /server with endpoints:
- POST /api/requests (validate payload, persist)
- GET /api/requests (return list)
Constraints:
- Validate server-side with Zod
- Store to data/requests.json
Acceptance criteria:
- posting from the UI saves data
- GET returns the saved data
Verification:
- exact commands + curl examples
```

---

# Definition of Done (DoD)

A lab run is “done” when:

- App runs locally end-to-end
- Intake form validates and submits
- Backend persists at least one request
- Lint/build passes
- Repo has readable README + this lab guide
- At least one smoke test exists (manual or Playwright)

---

# Maintainer notes (for you)

- Keep modules short and independent
- Avoid “magic” steps; every action should be copy/paste runnable
- When updating the lab, update this file and keep prompts consistent
- Prefer clarity over cleverness
