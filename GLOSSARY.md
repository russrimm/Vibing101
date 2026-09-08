# Beginner glossary

You do not need to memorize these terms. Return to [the course](README.md) and look one up when you need it.

## The three places you work

- **GitHub Copilot desktop app:** the AI coding app used for this course. You create a local project session, send prompts, review changes, and inspect results. Use the [official download page](https://github.com/features/ai/github-app) and follow your organization's installation policy. It is not GitHub Desktop, Copilot CLI, or the VS Code extension.
- **Chat:** the conversation where you give Copilot plain-English instructions. Do not paste terminal commands into chat unless you are asking Copilot to run or explain them.
- **Terminal:** a text window that runs commands on your computer. Use PowerShell on Windows, Terminal on macOS, or `/terminal` in an active Copilot desktop session; no editor is required.
- **Browser:** the app that displays websites. Its address bar is where you open the generated app's preview URL.

## Working with AI

- **Vibe coding:** a development approach where AI agents handle much of the coding while you guide, review, and verify.
- **Prompt:** a request to the AI. A useful one says what should change, what must not change, and how to test it.
- **Agent:** an AI assistant that can use tools to read/write files and run commands within its permissions. Its output can be wrong.
- **Plan:** a description of proposed work. Approving a plan is a separate decision from granting unrestricted tool access.
- **Permission:** authorization for an action. Read its target path, command, network destination, and potential cost before allowing it.
- **Acceptance criterion:** an observable result used to decide whether a feature works.
- **Evidence:** the result you actually saw, such as an error message, a browser behavior, an exit code, or a commit ID.
- **Synthetic data:** completely made-up data used for practice. Removing a real person's name does not necessarily make a record safe to share.

## Files and workspaces

- **Folder / directory:** a place containing files.
- **Path:** the address of a file or folder on a computer.
- **Project:** a set of related files for an app.
- **Session:** a conversation plus its working context in the desktop app.
- **Workspace / working directory:** the location where this session reads files and runs commands. Check it before making changes.
- **Worktree:** a separate checkout of a Git repository, often used to isolate a session's work. It can have a different path from the original project.
- **Scaffold:** the smallest initial set of files and settings needed to run an app.
- **Package:** reusable code installed from a package source.
- **Dependency:** a package your app or its development tools need.
- **Lockfile:** a record of resolved dependency versions (`package-lock.json` for npm). Keep it so later installs can reproduce that dependency tree.
- **Instruction file:** project guidance an AI may read. Instructions for the learning portal are not automatically appropriate for your small learner app.

## The local web app

- **Node.js:** runs JavaScript on your computer and powers tools such as Vite. This lab uses Node.js 24 LTS as its baseline.
- **LTS:** long-term support, a release support policy used by Node.js. Not every package has an LTS release.
- **npm:** Node.js's package manager and script runner. `npm run dev` runs the project's `dev` script.
- **React:** a library for building a user interface from components.
- **Component:** a reusable part of an interface, such as a list or a labeled form.
- **TypeScript:** JavaScript with type checks that catch some mistakes before running code. It does not replace runtime validation.
- **Vite:** provides a local dev server and builds browser files from source.
- **CSS / Tailwind CSS:** CSS controls appearance; Tailwind supplies small CSS utility classes. The core learner app can use plain CSS.
- **State:** values that can change while the app runs, such as the current records or search text.
- **Validation:** checking data before accepting it, such as rejecting a name made only of spaces.
- **Localhost:** an address referring to the computer making the request. It is not a public sharing URL.
- **Port:** the number after the colon in a local URL. Use the exact port printed by the dev server; another app may already occupy its first choice.
- **Origin:** the combination of scheme, host, and port. `localhost` and `127.0.0.1` are different hosts for browser storage.
- **localStorage / persistence:** browser storage can keep records after refresh at the same origin. Clearing site data, private browsing, or changing browser/origin may lose or separate it. It is not a secure database, cross-device sync, or backup.
- **Build:** checking/transforming source into files such as `dist`. A successful build does not prove the interface behaves correctly.
- **Lint / ESLint:** checks code against configured rules for common mistakes. The portal and pinned learner starter already include ESLint; run each project's existing `npm run lint` rather than installing another tool. A passing lint check does not prove an app is bug-free.
- **Exit code:** the number a finished command returns. Usually `0` means success and a nonzero value means failure.
- **Accessibility:** making the app usable by people with different abilities and input methods. A few keyboard tests are not a full conformance audit.

## Saving code

- **Git:** tracks file changes and saved snapshots locally.
- **Repository / repo:** a project with Git history. It does not have to be hosted online.
- **Diff:** a view of what changed. Newly created, untracked files also need review.
- **Stage:** select particular changes for the next commit.
- **Commit:** a named snapshot in local Git history. It is not a push, deployment, or off-device backup.
- **Branch:** a named line of work in Git.
- **Merge:** combine work from branches after reviewing the changes.
- **GitHub:** an online service for hosting repositories and collaboration.
- **Clone:** make a local copy of a Git repository and its history.
- **Fork:** create a separate copy of a repository on GitHub. Not required for this local lab.
- **Push / pull:** send commits to, or fetch and integrate work from, a remote repository. Neither happens just because you made a local commit.
- **Pull request:** a proposal to review and merge changes on a repository hosting service.

## Optional advanced terms—not prerequisites

- **API:** a defined way for programs to exchange requests and data.
- **Backend:** server-side code and storage, separate from browser code.
- **Authentication / authorization:** proving identity / checking which actions that identity may take.
- **Cloud / Azure:** remotely hosted computing services; use requires separate permission, cost, and privacy planning.
- **Deployment:** publishing or running an app in a target environment. It is not required for core completion.
- **MCP:** a protocol for connecting AI clients to external tools. A tool connection does not automatically connect the generated app to data.
- **Microsoft Graph:** an API for Microsoft 365 data with endpoint-specific permissions and account support.
- **Environment variable:** configuration supplied to a program. It is not automatically secret. Values prefixed `VITE_` can be bundled into browser files; never store credentials there.
- **Custom agent / Beast Mode:** user-defined behavior or instructions, not a built-in guarantee of quality, security, or production readiness. Not required.
- **VS Code / CLI / WSL:** an editor / a text-command interface / a Windows Linux environment. None is the Copilot desktop app; none is required for this course.
- **CI/CD:** configured automation for checking and delivering changes. A successful pipeline does not replace app-specific acceptance testing.

**Next:** [Start Lab 00](docs/lab-00-prerequisites.md).
