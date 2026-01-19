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
> 4. If there are ANY errors, copy the full error message and paste it into Copilot Chat Agent Mode
> 5. Repeat until all errors are resolved (be patient as it may take many iterations)
> 6. Continue improving as needed

---

## What is a Power Apps Code App?

**Power Apps Code Apps (preview)** let developers bring Power Apps capabilities into custom web apps built in a code-first IDE. You can:

- Develop locally in VS Code and run the same app in Power Platform
- Build with popular frameworks (React, Vite, Vue, etc.) while keeping full control over UI and logic
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

## [REQUIRED] Step 4: Install Power Platform CLI

**What is Power Platform CLI?** The Power Platform CLI (pac) is a command-line tool that lets you deploy your app to Power Apps.

**Install Power Platform CLI:**

**Windows:**

1. Download the MSI installer: [https://aka.ms/PowerAppsCLI](https://aka.ms/PowerAppsCLI)
2. Run the installer and follow the prompts

**After installation**, verify:

```bash
pac
```

---

## [REQUIRED] Step 5: Install GitHub Copilot in VS Code

**What is GitHub Copilot?** GitHub Copilot is an AI coding assistant that writes code for you. It's the key tool that makes this lab work.

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


## Survey





**Congratulations on completing the Vibe Coding Lab! 🎉**
