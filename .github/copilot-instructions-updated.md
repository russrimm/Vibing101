# copilot-instructions.md

> **Purpose:** This repo is a **Vibe Coding Lab** for **complete beginners**. Learn how to create a real **Power Apps Code App** using **Vite + React + TypeScript** with **VS Code + GitHub Copilot** by having the AI agent do nearly all the work.  
> This file is written for a **Copilot Coding Agent** (and for humans following along).
>
> **Guiding principle:** _The agent does 95% of the work. The human copies/pastes prompts, watches, verifies, and learns._
>
> **How this works:**
>
> 1. You copy/paste the provided prompts into GitHub Copilot Chat (Agent Mode)
> 2. The agent does the work (installs, creates files, runs commands)
> 3. You watch and verify the results
> 4. If there are ANY errors, copy the full error message and paste it into Copilot Chat with "Fix this error:"
> 5. Repeat until the error is resolved
> 6. Move to the next step
>
> **Error Handling Rule:** Never struggle with errors alone. Copy the entire error message and paste it into GitHub Copilot Chat in Agent Mode with the prompt: "Fix this error: [paste error here]". The agent will diagnose and fix it. Repeat until resolved.

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
- **UI:** Tailwind (optional) + simple component library (optional)
- **Forms:** Multi-step request intake form with validation
- **Extras:** Microsoft Entra authentication, telemetry (optional), "AI-enhanced" feature (optional)

**Why this app?** It's understandable, demo-friendly, and lets us showcase: routing, forms, validation, API calls, state, and code quality.

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
- "Copilot prompts" you can copy/paste
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

**What is VS Code?** Visual Studio Code is the code editor where you'll do all your work. It's free and works on Windows, Mac, and Linux.

**Install VS Code:**
1. Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Run the installer and follow the prompts
3. Launch VS Code after installation

**Verify installation** by opening a command prompt/terminal and typing:

```bash
code --version
```

You should see a version number like `1.95.0` or higher.

**If you get an error:** Copy the error message and paste it into GitHub Copilot Chat with "Fix this error: [your error]"

---

## [REQUIRED] Step 2: Install Node.js (v24+)

**What is Node.js?** Node.js is a JavaScript runtime that lets you run your React app locally during development. We need version 24+ for the latest features and security updates.

**Install Node.js:**
1. Download the latest LTS version (24+) from [https://nodejs.org/](https://nodejs.org/)
2. Run the installer and follow the prompts (install all default components)
3. Restart your command prompt/terminal after installation

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

**What is Git?** Git is version control software that saves your code history and lets you collaborate with others. It's essential for working with GitHub.

**Install Git:**
1. Download from [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Run the installer (use all default settings)
3. Complete the installation

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

**What is Power Platform CLI?** The Power Platform CLI (pac) is a command-line tool that lets you deploy your app to Power Apps.

**Install Power Platform CLI:**

**Windows:**
1. Download the MSI installer: [https://aka.ms/PowerAppsCLI](https://aka.ms/PowerAppsCLI)
2. Run the installer and follow the prompts

**Mac/Linux:**
1. Install .NET SDK if not already installed: [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)
2. Run: `dotnet tool install --global Microsoft.PowerApps.CLI.Tool`

**Full documentation:** [https://learn.microsoft.com/power-platform/developer/cli/introduction](https://learn.microsoft.com/power-platform/developer/cli/introduction)

**After installation**, verify:

```bash
pac
```

**Expected output:** You should see the Power Platform CLI help information

**If you get an error:** Paste into Copilot Chat: "Fix this error: [error message]"

---

## [REQUIRED] Step 5: Install GitHub Copilot in VS Code

**What is GitHub Copilot?** GitHub Copilot is an AI coding assistant that writes code for you. It's the key tool that makes this lab work.

**Requirements:**
- GitHub Copilot subscription: [https://github.com/features/copilot](https://github.com/features/copilot)
- Free trial available for new users

**Install GitHub Copilot:**

1. Open VS Code
2. Click Extensions (sidebar icon or Ctrl+Shift+X)
3. Search for "GitHub Copilot"
4. Install both:
   - **GitHub Copilot**: [https://marketplace.visualstudio.com/items?itemName=GitHub.copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
   - **GitHub Copilot Chat**: [https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
5. Sign in with your GitHub account when prompted
6. Open Copilot Chat (Ctrl+Shift+I or Cmd+Shift+I)
7. Enable Agent Mode by typing `@workspace` before your prompts

---

## [REQUIRED] Step 6: Set Up Power Platform Environment

**What is a Power Platform environment?** An environment is a space in Power Platform where your apps and data live. You need one to deploy your app.

**Set up Power Platform:**

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

**Recommended extensions for this project:**

1. **ESLint** - Code quality checking
   - Marketplace: [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - Or search "ESLint" in VS Code Extensions (Ctrl+Shift+X)

2. **Prettier** - Code formatting
   - Marketplace: [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - Or search "Prettier" in VS Code Extensions

3. **Tailwind CSS IntelliSense** - CSS autocomplete
   - Marketplace: [https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
   - Or search "Tailwind CSS IntelliSense" in VS Code Extensions

**To install:** Open Extensions panel (Ctrl+Shift+X), search for each extension, and click Install.

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
3. **Paste it into GitHub Copilot Chat in Agent Mode**:
4. **Let the agent fix it** - it will run commands, edit files, and verify the fix
5. **Verify the fix worked** - the agent will tell you its findings and changes
6. **If the same error appears again**, paste it again - the agent will see that it's still occurring and try a different approach
7. **IMPORTANT: Document the fix** - After resolution, have the agent add the error and solution to docs/troubleshooting.md so you don't lose this knowledge if you start a new chat later

## [REQUIRED] Understanding Context Windows & Agent Memory

**CRITICAL CONCEPT:** Context windows are limited and model-dependent.

### What is a Context Window?

**Context window** is the amount of code and conversation history GitHub Copilot can "see" at once:

- Think of it like the agent's "working memory"
- Limited size - different models have different limits (8K to 200K+ tokens depending on the model)
- Includes: your current file, recent chat messages, referenced files, and workspace context
- When full, older context gets "forgotten"

### The Problem:

**Context windows are finite memory:**

- Different models have different limits (8K to 200K+ tokens)
- Your prompts + instructions + conversation history all consume tokens
- If you start with large instructions and rely on distant memory, you WILL exceed the window
- When the window fills, **the agent loses access to earlier context** - it literally "forgets"

**Real-world impact:**

- Agent may contradict earlier decisions
- May repeat work already done
- May lose track of project structure
- May forget critical requirements or constraints

### The Solution: Document Everything

**Take notes as you work:**

```text
@workspace After completing [feature/module], document what we did:

1. Create docs/progress/[feature-name].md with:
   - What was built
   - Key decisions and why
   - Files created or modified
   - Dependencies added
   - Challenges and solutions
   - Current state of the app

2. Update docs/project-summary.md with:
   - Overall project status
   - Completed modules/features
   - Known issues or TODOs
   - Next steps

This creates a reference I can reload if we start a new chat.
```

**When to start fresh:**

- Agent seems confused or contradicts itself
- Responses become generic or miss project context
- You've been working for 30+ minutes in one chat
- After completing a major milestone

**How to start fresh with full context:**

```text
@workspace I'm starting a new chat to clear the context window.

Please create a comprehensive summary I can paste into the new chat:

1. Read all progress docs in docs/progress/
2. Read docs/project-summary.md
3. Analyze current project structure
4. Create docs/context-reset-summary.md with:
   - Complete project overview
   - All completed features
   - Current architecture and file structure
   - Active dependencies and versions
   - Known issues and constraints
   - Coding standards and patterns used
   - Next steps

Make this summary detailed enough that a new agent can continue seamlessly.
```

**In the new chat, paste:**

```text
@workspace I'm continuing work on this Power Apps Code App project.
Here's the complete context:

[Paste the summary from docs/context-reset-summary.md]

Please confirm you understand the project state and are ready to continue.
```

### Best Practices:

✅ **DO:**

- Document after each module/feature
- Take notes of decisions and rationale
- Create summaries before context fills
- Start new chats when agent seems confused
- Reload context from summaries, not raw chat history

❌ **DON'T:**

- Try to work in one chat session for hours
- Ignore signs the agent is losing context
- Expect the agent to remember distant conversations
- Start fresh without a summary (you'll lose valuable context)

---

## Survey

- Module 0 survey: `<<MS_FORMS_LINK>>`

---

# Module 1 — Understanding MCP (15 min - Reading Only)

## Goal

Understand what MCP is and why it helps. **No installation needed - the agent handles this automatically.**

## What is MCP? (Simple Explanation)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Explain Model Context Protocol (MCP) to me like I'm a complete beginner:

1. What is MCP in simple terms?
2. Why does it matter for this project?
3. What can the agent do with MCP that it couldn't do otherwise?
4. What MCP servers are automatically available in VS Code?
5. Do I need to install or configure anything?

Keep it simple and practical - I just want to understand what's happening behind the scenes.
```

## What MCP Does For You (Behind the Scenes)

**MCP lets the agent:**

- Read and write files in your project safely
- Run commands in your terminal
- Search your codebase
- Install packages
- Create folders and files
- Verify everything works

**You don't need to understand the technical details** - just know that MCP is why the agent can actually DO things instead of just suggesting them.

## Safety Rules (Agent Enforces These Automatically)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Explain the safety rules for our project:

1. Why should the agent never read outside our project folder?
2. Why should we never put secrets in our code?
3. Why should we commit changes frequently?
4. How will you enforce these rules automatically?

I want to understand the 'why' behind each rule.
```

**The agent will automatically:**

- Stay within the project folder
- Warn you if you're about to commit secrets
- Suggest commits at good stopping points
- Use `.env.local` for any sensitive data

## Survey

- Module 1 survey: `<<MS_FORMS_LINK>>`

---

# Module 2 — Create the Power Apps Code App (30 min)

## Goal

Create your first Power Apps Code App using the official template. **The agent will do all of this for you.**

## What We're Doing

You're going to create a web app that:

- Runs locally on your computer (for development)
- Connects to Power Platform (for data and auth)
- Can be deployed to Power Apps (for production)

## [REQUIRED] Create the App

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Create a new Power Apps Code App for me using the official Microsoft template. Follow the official quickstart exactly:

Steps you need to do:
1. Run: npx degit github:microsoft/PowerAppsCodeApps/templates/vite vibe-intake-portal
2. Change to the new directory
3. Run: npm install
4. Run: pac code init --displayname "Vibe Intake Portal"
5. Run: npm run dev

For each step:
- Explain what it does in simple terms
- Run the command for me
- Tell me what to expect
- Verify it worked correctly

If you encounter ANY errors:
- Explain what went wrong
- Fix it automatically
- Verify the fix worked

After everything works, tell me:
- Where to find the "Local Play" URL
- What browser to use (same as my Power Platform login)
- What I should see when I open it

Reference: https://learn.microsoft.com/power-apps/developer/code-apps/quickstart
```

**The agent will:**

1. Create the project from the official template
2. Install all dependencies
3. Initialize the Power Platform SDK
4. Start the development server
5. Give you the URL to open

**What to watch for:**

- A URL appears with "Local Play" in the output
- Your browser may ask permission to access localhost - click Allow
- You should see a starter app with React and TypeScript

**If you see an error:** Copy the ENTIRE error and paste into Copilot Chat: "Fix this error: [error]"

---

## [REQUIRED] Test Deployment to Power Platform

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Help me deploy my app to Power Platform for the first time to verify everything works:

Steps you need to do:
1. Run: npm run build
2. Run: pac code push
3. Wait for the deployment to complete
4. Give me the Power Apps URL

For each step:
- Explain what it does
- Run it for me
- Show me what success looks like
- If there are errors, fix them automatically

After deployment:
- Open the Power Apps URL for me
- Verify the app appears in my Power Apps environment
- Explain how to share it with others later

Reference: https://learn.microsoft.com/power-apps/developer/code-apps/quickstart
```

**Expected outcome:**

- Command returns a Power Apps URL
- You can open https://make.powerapps.com/ and see your app
- The app works the same way it did locally

**If you get an error about authentication:**

- Copy the full error
- Paste into Copilot Chat: "Fix this error: [error]"
- The agent will help you authenticate properly

---

## [OPTIONAL] Add Tailwind CSS

### Copy/Paste This Prompt (only if you want Tailwind):

```text
Add Tailwind CSS to my Power Apps Code App project:

1. Install Tailwind CSS and dependencies
2. Create the Tailwind configuration files
3. Set up the CSS imports correctly
4. Verify it works with a simple example
5. Explain what Tailwind CSS is and why I might want to use it

Keep the setup minimal and explain each step.
```

---

## Verification Checklist

Before moving to the next module, verify:

```bash
# In your terminal, run:
npm run dev
```

✅ App runs locally without errors  
✅ You can open the "Local Play" URL in your browser  
✅ You see a React app with TypeScript  
✅ `npm run build` completes successfully  
✅ `pac code push` deploys to Power Platform  
✅ App appears in Power Apps portal

**If ANY of these fail:** Paste the error into Copilot Chat with "Fix this error:"

---

## Survey

- Module 2 survey: `<<MS_FORMS_LINK>>`

---

# Module 3 — Vibe Coding Workflow (30 min)

## Goal

Learn the workflow pattern for working with the agent effectively.

## The Vibe Coding Prompt Template

Use this template for your requests to the agent:

```text
You are the repo coding agent.

Goal:
- [What do you want to accomplish?]

Scope limits:
- Only change these files: [list files]
- Do NOT introduce new frameworks
- TypeScript only

Acceptance criteria:
- [How will we know it worked?]

Plan:
- Provide a short plan (max 5 bullets), then implement

Verification:
- Provide the exact commands to run
- Tell me what "success" looks like

Output format:
- 1) Plan
- 2) Changes made (file-by-file summary)
- 3) Verification commands
- 4) Commit message suggestion
- 5) Document this change in docs/progress/ (to preserve context for future chats)
```

### Context Window Reminder:

After every 3-5 significant changes, consider having the agent update your project summary:

```text
@workspace Update docs/project-summary.md with our recent progress:

1. What features were added
2. What files were created/modified
3. Current project state
4. Any issues encountered and resolved

This helps preserve context if we need to start a new chat.
```

### Asking for Recommendations

**After building any feature, ask for improvements:**

```text
@workspace Now that [feature] is working, review it and suggest improvements:

1. Code quality: Any refactoring opportunities?
2. UX: Is the user experience intuitive?
3. Design: Does it look polished and professional?
4. Accessibility: Any accessibility concerns?
5. Performance: Any obvious bottlenecks?

My design preferences:
- Style: [modern/clean/bold/minimalist/etc.]
- Colors: [brand colors or preferred palette]

Prioritize by impact and effort. Let's tackle the quick wins first.
```

## [REQUIRED] Practice Example

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Let's practice the Vibe Coding workflow. Help me add a simple navigation component:

Goal:
- Add a navigation bar to the app with links to Home and About pages

Scope limits:
- Create new component in src/components/Navigation
- TypeScript only
- Use simple HTML/CSS, no libraries needed yet

Acceptance criteria:
- Navigation shows "Home" and "About" links
- Links are clickable (we'll wire them up later)
- Navigation appears at the top of the app
- App still runs with no errors

Plan:
- Provide your plan first, then implement

Verification:
- Run npm run dev
- Check that navigation appears
- Check that app has no errors

Output format:
- Plan
- Changes made
- Verification steps
- Suggested commit message

Do all the work for me - I'm just learning by watching.
```

**The agent will:**

1. Make a plan
2. Create the files
3. Make the changes
4. Run verification
5. Suggest a commit message

**Your job:**

- Read the output to understand what happened
- Run the verification commands the agent suggests
- Commit changes when ready using good commit messages

**Good commit message patterns:**
- `feat: add [feature]` - new feature
- `fix: resolve [issue]` - bug fix
- `chore: update [thing]` - maintenance
- `docs: update [doc]` - documentation

---

## Survey

- Module 3 survey: `<<MS_FORMS_LINK>>`

---

# Module 4 — App Structure + Routing (30 min)

## Goal

Set up a clean folder structure and add routing. **The agent does all the work.**

## [REQUIRED] Folder Structure

**Standard folder structure for this project:**
- `src/app/` - app shell and routes
- `src/components/` - reusable UI components
- `src/features/` - feature slices (intake forms, admin, etc.)
- `src/lib/` - utilities (api calls, validation, types)
- `src/types/` - shared TypeScript types

The agent will help you set this up when needed.

---

## [REQUIRED] Add Routing

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Add routing to the app using React Router:

Pages we need:
- / (Home page)
- /new (New intake request form)
- /thanks (Confirmation page)
- /admin (Admin view - optional for now)

Steps:
1. Install react-router-dom
2. Set up the router in App.tsx
3. Create placeholder components for each page
4. Add navigation links in the Navigation component
5. Verify each route works

Requirements:
- TypeScript only
- Keep it simple - just placeholder pages for now
- Each page should show its title and a brief description
- Navigation should highlight the current page

Verification:
- npm run dev
- Click each navigation link
- Verify each page loads
- Verify browser back button works

Do all the work for me and explain what you're doing at each step.
```

**The agent will:**

1. Install React Router
2. Set up all the routes
3. Create placeholder pages
4. Wire up navigation
5. Test everything

**Your job:**

- Watch the output
- Run the verification steps
- Report any errors (paste into chat)

---

## Survey

- Module 4 survey: `<<MS_FORMS_LINK>>`

---

# Module 5 — Multi-Step Intake Form + Validation (30 min)

## Goal

Build the core intake form with validation. **Agent handles all complexity.**

## [REQUIRED] Design the Form

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Help me design the intake form for our app:

Form purpose: Collect information for new service requests

Discuss with me:
1. What fields do we need? (title, category, description, priority, etc.)
2. Should it be multi-step or single page?
3. What validation rules make sense?
4. What should happen when they submit?

Design preferences:
- Overall style: [modern/clean/minimal - or specify your preference]
- Color scheme: [professional blues and whites - or specify brand colors]
- Layout: [clean and spacious - or describe your vision]

Suggest a simple but professional design that matches these preferences, then wait for my approval before implementing.
```

**The agent will ask you questions and make suggestions. Answer them to design your form.**

---

## [REQUIRED] Implement the Form

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Implement a multi-step intake form with validation:

Form fields (step by step):

Step 1 - Basic Info:
- Request title (required, max 100 characters)
- Category dropdown (required): Support, Access, Equipment, Other
- Description (required, max 500 characters)

Step 2 - Details:
- Priority (required): Low, Medium, High, Urgent
- Due date (optional)
- Requester name (required)
- Requester email (required, valid email format)

Requirements:
1. Use Zod for schema validation
2. Use React Hook Form for form state
3. Show validation errors clearly
4. Disable "Next" button if current step is invalid
5. Show progress indicator (Step 1 of 2, etc.)
6. Add "Back" button on step 2
7. TypeScript types for everything

Implementation:
1. Install dependencies (zod, react-hook-form)
2. Create form schema with Zod
3. Create multi-step form component
4. Add validation
5. Create a form preview on final step
6. Wire up to /new route

Verification:
- Run npm run dev
- Try to click Next with empty fields (should be blocked)
- Fill out step 1, go to step 2
- Use Back button
- Submit the form (console.log for now)

Do all the work for me. Explain key decisions as you go.
```

**The agent will:**

1. Install needed packages
2. Set up Zod schemas
3. Build the multi-step form
4. Add all validation
5. Test it

**Your job:**

- Test the form in your browser
- Try to break it (empty fields, invalid email, etc.)
- Report any issues to the agent

---

## Survey

- Module 5 survey: `<<MS_FORMS_LINK>>`

---

# Module 6 — Connect to Data (30 min)

## Goal

Connect to data storage. **Agent will guide you through options.**

## [REQUIRED] Choose Data Strategy

**Data storage options:**
- **Power Platform Connectors** - Dataverse, Azure SQL, SharePoint (production-ready)
- **Local Dev Backend** - Simple JSON server or mock data (for learning)

Choose based on your goals:
- Learning: Start with local/mock data
- Production: Use Power Platform connectors

The agent will guide you through implementation once you decide.

---

## [REQUIRED OPTION A] Connect to Power Platform Data

### Copy/Paste This Prompt (if using Power Platform):

```text
Set up Power Platform data connection for my intake form:

Choice of data source: [Dataverse / Azure SQL / SharePoint]

Requirements:
1. Show me how to authenticate
2. Help me create the data schema
3. Implement the connection in code
4. Update the form to save to Power Platform
5. Add error handling
6. Test the connection

Steps:
1. Explain what authentication is needed
2. Set up the connection in code
3. Update form submission to use Power Platform
4. Add loading states
5. Handle errors gracefully

Verification:
- Submit a form
- Verify data appears in Power Platform
- Check error handling works

Reference: https://learn.microsoft.com/power-apps/developer/code-apps/connect-to-data

Do all the implementation for me.
```

---

## [REQUIRED OPTION B] Create Local Development Backend

### Copy/Paste This Prompt (if using local backend):

```text
Create a simple local development backend for testing:

Requirements:
1. Create server/ folder with Express.js
2. Endpoint: POST /api/requests (save submission)
3. Endpoint: GET /api/requests (list all)
4. Store data in data/requests.json
5. Add CORS for localhost only
6. Validate payload with Zod on server
7. TypeScript for server code too

Steps:
1. Install Express and dependencies
2. Create server file
3. Add request validation
4. Implement file storage
5. Add error handling
6. Update package.json with server script
7. Update frontend to use API

Verification:
- Run server: npm run server
- Submit a form
- Check data/requests.json has the data
- GET /api/requests returns the data

Security:
- Only accept from localhost
- Validate all inputs
- Don't trust client data

Do all the work for me, including the server code.
```

**The agent will create a complete backend for you.**

---

## Survey

- Module 6 survey: `<<MS_FORMS_LINK>>`

---

# Module 7 — UI Polish + Accessibility (30 min)

## Goal

Make it look professional and accessible. **Agent handles the details.**

## [REQUIRED] UI Improvements

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Improve the UI and accessibility of our app:

UI improvements:
1. Add consistent spacing and layout
2. Make the form look professional
3. Add loading states
4. Add success/error messages
5. Improve button styles
6. Add a simple header and footer

Accessibility improvements:
1. Ensure keyboard navigation works everywhere
2. Add proper labels for screen readers
3. Use semantic HTML
4. Add ARIA labels where needed
5. Ensure sufficient color contrast
6. Add focus indicators

Implementation:
1. Create a design system (colors, spacing, typography)
2. Update components to use it
3. Add loading and error states
4. Test keyboard navigation
5. Add accessibility attributes

Verification:
- Tab through the entire app (keyboard only)
- Verify all interactive elements are reachable
- Check that screen reader text makes sense
- Test the happy path and error states

Do all the work for me. Explain accessibility decisions as you go.
```

---

## [REQUIRED] Ask the Agent for UX and Code Improvement Recommendations

**IMPORTANT:** Don't just accept the first version - ask the agent to critique and improve!

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Review the current state of our app and provide recommendations:

1. UX/Design Review:
   - How does the overall user experience feel?
   - Is the layout intuitive and easy to navigate?
   - Are there any confusing elements or flows?
   - Does it look modern and professional?
   - Are the colors, spacing, and typography consistent?
   - Any improvements for mobile/responsive design?

2. Visual Design Review:
   - Analyze the current design aesthetic
   - My target style is: [specify: modern/clean/minimalist/bold/corporate/etc.]
   - My preferred colors: [specify: brand colors, color palette, or "suggest something professional"]
   - Typography: Does the font choice match the style?
   - Spacing: Is it consistent and balanced?

3. Application Code Review:
   - Are there any code smells or anti-patterns?
   - Can any components be refactored or simplified?
   - Are we following React and TypeScript best practices?
   - Any performance concerns?
   - Code organization: is it maintainable?
   - Are there duplicated patterns that could be abstracted?

4. Prioritized Recommendations:
   - List top 5 improvements by impact (High/Medium/Low)
   - Rate each by implementation effort (Easy/Medium/Hard)
   - Suggest which to tackle first

For each recommendation:
- Explain why it matters
- Show a before/after example or description
- Estimate time to implement
- Ask if I want you to implement it

Let's focus on high-impact, low-effort improvements first.
```

### Example: Specify Your Design Preferences

**For a modern, clean look:**

```text
@workspace I want a modern, clean design aesthetic:
- Style: Minimalist and professional
- Colors: Blues and whites (like Microsoft or Dropbox)
- Typography: Sans-serif, plenty of white space
- Interactions: Subtle animations, smooth transitions
- Overall vibe: Trustworthy, corporate, calm

Review the current design and suggest specific improvements to achieve this.
```

**For a bold, vibrant look:**

```text
@workspace I want a bold, energetic design aesthetic:
- Style: Modern and eye-catching
- Colors: Bright accent colors (oranges, purples, teals)
- Typography: Bold headings, clear hierarchy
- Interactions: Playful micro-interactions
- Overall vibe: Fun, innovative, startup-like

Review the current design and suggest specific improvements to achieve this.
```

**For brand-specific colors:**

```text
@workspace Apply our brand colors to the design:
- Primary: #0066CC (blue)
- Secondary: #FF6B35 (orange)
- Neutral: #F5F5F5 (light gray)
- Text: #333333 (dark gray)

Review the current design and:
1. Ensure brand colors are used consistently
2. Check color contrast meets accessibility standards
3. Suggest where to use each color (buttons, headers, accents)
4. Create a cohesive color system
```

### Iterative Improvement Process

**After the agent provides recommendations:**

```text
@workspace Great recommendations! Let's implement #1 [describe the recommendation].

Before you start:
1. Show me a detailed plan
2. Which files will you change?
3. Any risks or dependencies?
4. How will we verify it worked?

If I approve, go ahead and implement it.
```

**After implementation:**

```text
@workspace The improvement looks good!

Now let's review again:
- Did this achieve what we wanted?
- Are there any side effects or issues?
- What's the next highest-priority improvement?
- Should we continue or take a different direction?
```

### Best Practices for Improvement Requests:

✅ **DO:**

- Be specific about your target aesthetic (modern, clean, corporate, playful, etc.)
- Provide brand colors or color preferences if you have them
- Ask for both UX and code improvements
- Request prioritization by impact and effort
- Implement one improvement at a time
- Review and test after each change

❌ **DON'T:**

- Accept the first version without critique
- Make changes without clear goals ("make it better" is too vague)
- Implement multiple large changes at once
- Ignore accessibility in favor of aesthetics
- Skip the review step after implementation

---

## Survey

- Module 7 survey: `<<MS_FORMS_LINK>>`

---

# Module 8 — Quality Gates (30 min)

## Goal

Add automated quality checks. **Agent sets everything up.**

## [REQUIRED] Add Linting and Type Checking

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Set up quality gates for our Power Apps Code App:

Tools needed:
1. ESLint for code quality
2. TypeScript compiler for type checking
3. Prettier for formatting (optional)

Requirements:
1. Configure ESLint for React + TypeScript
2. Add lint script to package.json
3. Add typecheck script
4. Make them run before commit (git hooks)
5. Fix any existing issues

Scripts to add:
- npm run lint (check for issues)
- npm run lint:fix (auto-fix issues)
- npm run typecheck (verify TypeScript)
- npm run check (run all checks)

Steps:
1. Install ESLint and plugins
2. Create .eslintrc.json config
3. Add scripts to package.json
4. Run lint and fix any issues
5. Set up pre-commit hook

Verification:
- Run npm run lint (should pass)
- Run npm run typecheck (should pass)
- Run npm run check (should run both)
- Try to commit (hooks should run)

Do all the work for me, including fixing any linting issues found.
```

**The agent will:**

1. Set up all tools
2. Configure them properly
3. Fix existing issues
4. Add git hooks
5. Test everything

---

## Survey

- Module 8 survey: `<<MS_FORMS_LINK>>`

---

# Module 9 — Testing (Optional) (30 min)

## Goal

Add basic tests. **Agent writes the tests.**

## [OPTIONAL] Add Playwright Tests

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Add Playwright tests for our Power Apps Code App:

Tests to write:
1. Smoke test - app loads
2. Navigation test - all links work
3. Form validation test - can't submit empty form
4. Form submission test - happy path works

Requirements:
1. Install Playwright
2. Configure for our app
3. Write tests in TypeScript
4. Add npm scripts
5. Make tests run in CI (future)

Implementation:
1. Install @playwright/test
2. Create playwright.config.ts
3. Create tests/e2e/ folder
4. Write the tests
5. Add scripts to package.json

Verification:
- Run npm run test:e2e
- All tests should pass
- Screenshots on failure

Do all the work for me, including writing the tests.
```

---

## Survey

- Module 9 survey: `<<MS_FORMS_LINK>>`

---

# Module 10 — Agent Discipline Patterns (15 min)

## Goal

Understand best practices for working with agents. **Agent teaches by example.**

## [REQUIRED] Agent Rules

**Rules the agent follows when working on this project:**

1. **No secrets in code** - All sensitive data goes in .env.local files (never committed)
2. **TypeScript only** - All source files use .ts or .tsx extensions
3. **Small changes** - One feature at a time, easy to verify and rollback
4. **Always include** - Files changed, verification commands, acceptance criteria
5. **Document changes** - Update docs/progress/ to preserve context
6. **Watch context window** - If the chat gets long or the agent seems confused, start fresh with a summary

**Checklist to verify agent's work:**
- ✅ No secrets or API keys in code
- ✅ All files are TypeScript (.ts/.tsx)
- ✅ Changes are focused and testable
- ✅ Verification steps provided
- ✅ Progress documented

### [REQUIRED] Context Window Management

**CRITICAL for longer projects:**

```text
@workspace Create a context management strategy for this project:

1. Set up automatic documentation:
   - Create docs/progress/ folder
   - Create docs/project-summary.md template
   - Create docs/troubleshooting.md for errors and solutions

2. After each module completion, help me:
   - Document what was built
   - Record key decisions
   - Update project summary
   - Track dependencies and versions

3. Teach me warning signs that context is filling:
   - Agent repeats questions already answered
   - Agent suggests approaches we already tried
   - Agent loses track of project structure
   - Responses become generic

4. Show me how to create a comprehensive summary when needed:
   - What information to include
   - How to structure it
   - Where to save it
   - How to reload it in a new chat

5. Practice the context reset process:
   - Create a mock summary now (as practice)
   - Show me how to paste it into a new chat
   - Verify the new agent understands the context

This is insurance against losing progress due to context limits.
```

---

## [REQUIRED] Continuous Improvement Mindset

**IMPORTANT:** Your agent is a design and code review partner, not just an implementation tool.

### Copy/Paste This Prompt:

```text
@workspace I want to adopt a continuous improvement approach. Teach me:

1. When should I ask for improvement recommendations?
   - After completing each module?
   - After implementing any feature?
   - When something feels "off"?
   - Before considering a feature "done"?

2. What aspects should I ask you to review?
   - Code quality and architecture
   - UX and user flows
   - Visual design and aesthetics
   - Accessibility
   - Performance
   - Security

3. How should I communicate my design vision?
   - What information do you need to make good recommendations?
   - Examples: style preferences, brand colors, target audience
   - How specific should I be?

4. Create a "review checklist" I can use:
   - Questions to ask after completing any feature
   - Format as a reusable prompt template
   - Include both code and UX aspects

5. Demo the process:
   - Pick a component from our app
   - Review it for me now
   - Show me how you'd recommend improvements
   - Explain your reasoning

Goal: Make improvement reviews a habit, not an afterthought.
```

### The Review Template (Use This Regularly):

```text
@workspace Review [feature/component/page name]:

**Code Review:**
- Is the code clean and maintainable?
- Following best practices for React and TypeScript?
- Any refactoring opportunities?
- Performance concerns?
- Security considerations?

**UX Review:**
- User flow intuitive and efficient?
- Clear feedback for user actions?
- Error handling and edge cases covered?
- Loading and empty states handled?
- Mobile experience optimized?

**Design Review:**
- Target style: [modern/clean/bold/corporate/playful/minimalist]
- Brand colors: [specify colors or "suggest professional palette"]
- Visual hierarchy clear?
- Spacing and typography consistent?
- Accessibility standards met (WCAG AA)?
- Responsive across device sizes?

**Recommendations:**
- Prioritize by: Impact (High/Medium/Low) + Effort (Quick/Medium/Complex)
- Focus on high-impact, low-effort improvements first
- For each recommendation, explain why and estimate time

After providing recommendations, ask which I'd like to implement.
```

### When to Use the Review Template:

- ✅ After completing any module or feature
- ✅ Before deploying to production
- ✅ When something feels "not quite right"
- ✅ Every 2-3 features as a checkpoint
- ✅ When onboarding team members (to document decisions)
- ✅ Before context reset (to capture improvement ideas)

---

## [REQUIRED] Dependency Management

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Explain your approach to adding dependencies:

When I ask you to add a new npm package, your process should be:

1. Explain what the package does
2. Explain why we need it
3. Check if there's a simpler alternative
4. Show the license and popularity
5. Ask for my approval
6. Install it
7. Show me how to use it

Practice this process with a mock example:
- Pretend I asked you to add a date picker library
- Walk me through your decision process
- Show me the alternatives
- Recommend the best option

This is just practice - don't actually install anything.
```

---

## Survey

- Module 10 survey: `<<MS_FORMS_LINK>>`

---

# Module 11 — Optional: Telemetry (30 min)

## Goal

Add basic logging/telemetry. **Agent implements it.**

## [OPTIONAL] Add Telemetry

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Add basic telemetry/logging to our Power Apps Code App:

Approach:
- Create a logger wrapper for development
- Structure logs like they'd go to Application Insights
- Log to console in dev (can add App Insights later)

Events to track:
- trackEvent(name, properties) - user actions
- trackError(error, properties) - errors
- trackPageView(name) - page navigation

Implementation:
1. Create src/lib/telemetry.ts
2. Implement logger functions
3. Add to key places: form submit, page loads, errors
4. Use TypeScript for type safety
5. Add development mode checks

Verification:
- Submit form, check console for events
- Navigate pages, check for pageview events
- Trigger an error, check error logging

Do all the work for me and show me where you added logging calls.
```

---

## Survey

- Module 11 survey: `<<MS_FORMS_LINK>>`

---

# Module 12 — Deploy to Power Platform (30-60 min)

## Goal

Deploy your finished app to production. **Agent helps with deployment.**

## [REQUIRED] Production Deployment

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Help me deploy my Power Apps Code App to production:

Pre-deployment checklist:
1. Run all quality checks (lint, typecheck, build)
2. Verify tests pass
3. Check no secrets in code
4. Review .gitignore

Deployment steps:
1. Run npm run build
2. Review build output
3. Run pac code push
4. Verify deployment succeeded
5. Open the Power Apps URL
6. Test the production app
7. Show me how to share it with users

Post-deployment:
1. Verify app appears in Power Apps
2. Test all functionality
3. Check performance
4. Show me monitoring options

Do all the work for me and guide me through each step.

Reference: https://learn.microsoft.com/power-apps/developer/code-apps/quickstart
```

**The agent will:**

1. Run all checks
2. Build the app
3. Deploy to Power Platform
4. Verify deployment
5. Test the production app

---

## [OPTIONAL] CI/CD Pipeline

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Set up a CI/CD pipeline for automatic deployment:

Options:
- GitHub Actions (if using GitHub)
- Azure DevOps (if preferred)

Pipeline should:
1. Run on push to main branch
2. Install dependencies
3. Run lint and typecheck
4. Run tests
5. Build the app
6. Deploy to Power Platform
7. Notify on success/failure

Requirements:
- Use service principal for auth
- Store credentials securely
- Environment-based deployment
- Rollback on failure

Implementation:
1. Explain the pipeline structure
2. Create the workflow file
3. Set up authentication
4. Configure environment variables
5. Test the pipeline

Do I want to set this up now, or should we skip it for now?

Reference: https://learn.microsoft.com/power-apps/developer/code-apps/alm
```

---

## [OPTIONAL] Monitoring

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Show me how to monitor my deployed Power Apps Code App:

Cover:
1. How to view app health in Power Platform admin center
2. How to check usage metrics
3. How to monitor connector usage
4. How to set up alerts
5. How to troubleshoot issues

Walk me through each monitoring option and show me where to find them.
```

---

## Survey

- Module 12 survey: `<<MS_FORMS_LINK>>`

---

# Troubleshooting Playbook

## When Things Go Wrong

### The Golden Rule:

**Copy the ENTIRE error message and paste it into GitHub Copilot Chat with "Fix this error:"**

The agent will:

1. Explain what went wrong
2. Show you how to fix it
3. Fix it automatically if possible
4. Verify the fix worked

### Common Issues and Quick Fixes

#### Node version mismatch

```text
Fix this error: I'm getting Node version errors

Please:
1. Check my Node version
2. Tell me if I need to upgrade
3. Help me install the right version
4. Verify it's fixed
```

#### Type errors

```text
Fix this error: [paste TypeScript error]

Please:
1. Explain what the type error means in simple terms
2. Fix the type error
3. Run typecheck to verify
4. Explain what you changed and why
```

#### Build failures

```text
Fix this error: npm run build is failing

Error: [paste full error]

Please:
1. Diagnose the issue
2. Fix it step by step
3. Run build again
4. Verify it succeeds
```

#### Deployment failures

```text
Fix this error: pac code push failed

Error: [paste full error]

Please:
1. Check my authentication
2. Check environment setup
3. Fix the issue
4. Try deploying again
5. Verify it succeeded
```

---

# Copy/Paste Prompts for Each Module

## Module Prompt: Create the App

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

## Module Prompt: Add Routing

```text
Add simple routing with Home, New Request, and Thanks screens using React Router.

Constraints:
- TypeScript only
- Keep changes minimal
- Use React Router v6

Acceptance criteria:
- Navigation works between all pages
- Browser refresh works on each route
- Back button works correctly

Verification:
- npm run dev
- Test all routes manually
- Verify browser back/forward
- No console errors

Do all the work for me and show me what you changed.
```

## Module Prompt: Build the Intake Form

```text
Implement a multi-step intake form wizard with validation.

Constraints:
- TypeScript only
- Use Zod for schema validation
- Use React Hook Form for state management

Acceptance criteria:
- Cannot proceed with invalid inputs
- Shows helpful error messages
- Submission posts data successfully
- Progress indicator shows current step

Verification:
- npm run dev
- Try to submit empty form (should be blocked)
- Fill out form and submit
- Check data is saved/logged
- No console errors

Do all the work for me and test it thoroughly.
```

## Module Prompt: Connect to Data

```text
Connect the form to [Power Platform / local backend]:

For Power Platform:
- Set up authentication
- Connect to [Dataverse/Azure SQL/SharePoint]
- Update form to save data
- Add error handling

For local backend:
- Create Express server
- Add POST /api/requests endpoint
- Add GET /api/requests endpoint
- Store in data/requests.json

Constraints:
- TypeScript only
- Validate server-side with Zod
- Handle errors gracefully

Acceptance criteria:
- Posting from UI saves data
- GET returns saved data
- Error handling works

Verification:
- Submit a form
- Verify data is saved
- Test error cases
- Provide curl examples

Do all the work for me, including the backend/connection code.
```

---

# Definition of Done

Your lab is complete when:

✅ App runs locally end-to-end  
✅ Intake form validates and submits  
✅ Data is saved (Power Platform or local backend)  
✅ `npm run lint` passes  
✅ `npm run build` succeeds  
✅ `pac code push` deploys to Power Platform  
✅ App works in Power Apps portal  
✅ You have a README explaining the project

---

# Final Words

**Remember:**

1. **The agent does the work** - you copy/paste prompts and learn by watching
2. **Errors are normal** - paste them into Copilot Chat with "Fix this error:"
3. **Ask questions** - the agent will explain anything you don't understand
4. **Take your time** - this is a learning experience
5. **Have fun** - you're building something real!

**When you get stuck:**

```text
I'm stuck on [describe issue]. Please:
1. Explain what might be wrong
2. Show me how to diagnose it
3. Fix it for me
4. Verify it's resolved
5. Explain what you did so I can learn
```

**Congratulations on completing the Vibe Coding Lab! 🎉**
