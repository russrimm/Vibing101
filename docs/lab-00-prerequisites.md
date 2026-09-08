# Lab 00: Set up your workspace

**Time:** 20–40 minutes, before the 60–90 minute core lab. Downloads and account approval may take longer.

## What you will learn

- Tell the Copilot desktop app, a terminal, and your browser apart.
- Check the tools your computer needs.
- Keep your practice app separate from this learning portal.
- Review permissions before Copilot acts.

## Before you start

You need a computer, internet access, permission to install software, a GitHub account, and a Copilot plan. Follow your organization's software and account policies. Check your plan's usage limits before a workshop; this lab does not require a particular paid tier or a separate model-provider API key.

**This course uses the GitHub Copilot desktop app**—the app hosting the lab's coding sessions. It does **not** use GitHub Desktop (a Git tool), Copilot CLI (a terminal tool), or the VS Code extension. You do not need VS Code, WSL, custom agents, MCP servers, a Microsoft 365 tenant, or an Azure subscription.

The app is generally available for Windows, macOS, and Linux. This lab gives Windows/macOS setup steps; Linux installation and OS-specific requirements should be checked against the [official quickstart](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app). Minimum OS versions and installation privileges vary; do not bypass an organizational restriction.

**Vibe coding** means AI handles much of the coding while you guide it and verify the result. AI can make mistakes. A confident answer is not proof that an app works.

## Step 1: Understand the three places you will work

| Place | What goes there | How to recognize it |
| --- | --- | --- |
| Copilot desktop chat | Plain-English prompts | A message box with Copilot's replies |
| Terminal | Commands such as `node --version` | A text window with a command prompt and output |
| Browser | The generated app's preview URL | An address bar and the page you are testing |

A **terminal** runs commands on your computer. Copilot can run commands through its tools; its output is not the same as you opening the app in a browser.

1. On Windows, open **Start**, search for **PowerShell**, and open it. On macOS, open **Applications → Utilities → Terminal**.
2. Later, in an active Copilot desktop session, type `/terminal` in the prompt box and press Enter to open a terminal in the right panel. Check its folder before running project commands.
3. Keep the learning portal in one browser tab and your generated app in a second tab. They are different apps.

## Step 2: Check Node.js, npm, and Git

Git is a prerequisite for the desktop app. Node.js and npm run the web-development tools.

1. **Terminal commands — run one line at a time:**

   ```text
   node --version
   npm --version
   git --version
   ```

2. **Expected output:** Node shows `v24.x.x` (the lab's Node.js 24 LTS baseline); npm shows a version number; Git shows `git version` followed by a version number. The `x` characters mean your installed patch numbers, not text to type. A newer Node LTS may work, but rehearse it with the chosen scaffold first.
3. If Node or npm is missing, use the [official Node.js downloads](https://nodejs.org/en/download) to install Node.js 24 LTS for your operating system. npm comes with Node.js.
4. If Git is missing, use the [official Git installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). On macOS, `git --version` may offer Apple's Command Line Tools; follow your organization's approved installation process.
5. Close and reopen the terminal after installing tools. If Copilot desktop is already open, restart it too. Run all three commands again.
6. Write down the three actual versions. Do not mark this checkpoint while a command still fails.

**Troubleshooting:** “command not found” or “not recognized” usually means a tool is missing or the app still has its old environment. On Windows, if policy blocks `npm.ps1`, try `npm.cmd --version` and use `npm.cmd` in later commands. Do not weaken machine-wide execution policies or run random repair scripts. Ask your facilitator or IT support if approved installs are blocked.

## Step 3: Install, sign in, and check Copilot

1. Open the [official GitHub Copilot app download page](https://github.com/features/ai/github-app). Download the installer for your operating system; official versioned packages are also available from [GitHub's app releases](https://github.com/github/app/releases).
2. Open the downloaded installer and follow your operating system's installation prompts. Use your organization's approved software process if required. If you already have the app, open it and check the installed version instead.
3. Click **Sign in to GitHub**. Complete sign-in on the expected service's sign-in page and return to the app. Use **Use GitHub Enterprise** only if your organization uses that option. Never paste a password, access token, recovery code, or secret into chat.
4. Confirm you have a Copilot plan, then finish onboarding. You can skip connecting recent repositories—we will add an empty local folder next. Bring-your-own-provider credentials are an alternative supported by the app, but are outside this beginner route.
5. For a Business/Enterprise account, an administrator may need to check the separate **GitHub Copilot app** policy. The current app policy is separate from the CLI policy; installing the CLI does not resolve disabled app access.
6. Open **Chats** in the sidebar and start a conversation. **Chat prompt — paste into Copilot, not a terminal:**

   ```text
   In one sentence, explain what a local web app is. Do not create files or run commands.
   ```

7. **Verify:** you receive a meaningful reply. Record the desktop app version. An access, quota, or policy error is a setup blocker, not something to bypass.

> These labels were checked against the official documentation on 2026-09-07. Placement may differ in another app build. Consult the [current quickstart](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app) if labels differ; do not switch to a similarly named Copilot product.

## Step 4: Make a dedicated learner folder and local session

1. In Windows File Explorer or macOS Finder, create a new folder named **VibeProjects** inside your personal Documents folder.
2. Inside it, create an **empty** folder named **my-first-vibe-app**. If that name already contains files, choose a new name; do not delete existing work.
3. In the **Copilot desktop app**, click **+** beside **Sessions**. Under **Add project from**, choose **Local folder or repository**. Select your new empty folder—not this `Vibing101` portal repository.
4. Click **+** beside **Sessions** again and choose that project under **Start session in**.
5. In the dropdown below the prompt box, choose a **local** execution location, not a cloud sandbox. The app may offer a new working tree or the local repository, depending on the project. Use one local session for this lab; do not assume it always has a separate branch or isolated files.
6. Choose **Interactive** from the mode dropdown below the prompt field. **Chat prompt:**

   ```text
   Before changing anything, report this session's actual working directory,
   its project root, and whether it uses a separate Git worktree.
   List the existing files, including hidden project instructions.
   Run node --version, npm --version, and git --version here and show their output.
   Do not create, overwrite, delete, install, or deploy anything.
   ```

7. **Verify:** the reported project is your new learner project, and all three commands succeed inside the session too. An empty folder may contain Git metadata created by the app; it must not contain another app or private files.
8. Record the **actual session working directory**. A **worktree** is a separate checkout used by a session; its path may differ from the original folder. All later commands, file reviews, and commits must use this same session workspace.
9. Try `/terminal` in the active session. It opens a right-panel terminal. Keep terminal commands there and plain-English requests in chat.

> Never scaffold inside the portal or copy the portal's enterprise instruction files into your beginner app. They describe a different project. If a session path or existing instruction is unexpected, pause and inspect it with your facilitator.

## Step 5: Agree on safe permissions

1. Stay in **Interactive** mode for the build steps. Use **Plan** for the next module's planning task; do not select **Autopilot** for this beginner exercise.
2. Before allowing an action, read its command, target path, and network destination. Ask “What will change, and can I undo it?”
3. Allow only actions needed for the current small step. Package installation downloads and runs code, so review the package names and source first.
4. Pause requests to delete files, read unrelated folders, reveal credentials, add accounts, publish a repository, expose a dev server to the network, or deploy cloud resources.
5. Do not enable blanket approval to make the lab faster. If you previously enabled tool auto-approval, `/reset-allowed-tools` in an active session clears session approvals and turns auto-approval off. Review the resulting permissions before continuing.
6. **Chat prompt if unsure:**

   ```text
   Pause. Explain this permission request in plain language: which files,
   commands, network destinations, and costs are involved? Offer the smallest
   local-only alternative. Do not proceed until I explicitly approve it.
   ```

## Verify and continue

In the portal's checklist, confirm only what you personally observed: a Copilot reply, three successful version checks, the correct local workspace, and a reviewed permissions boundary. These are learner-reported checks; the portal cannot inspect your computer or generated app.

**Summary:** you have an AI conversation, working tools, and an isolated place to learn.

**Official references:** [quickstart](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app), [session modes and locations](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions), [slash commands](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands).

**Next:** [Lab 01: Make a small plan](lab-01-plan.md).
