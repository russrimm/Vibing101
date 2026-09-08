# VibeCoding101

Build and verify a small local app with the **GitHub Copilot desktop app**. No coding experience is assumed. You guide the AI, review its changes, and check what actually works.

## Learners: start here

**Allow 60–90 minutes after setup** (setup may take 20–40 minutes or longer if access needs approval). Start with Retail, or choose one of [six bounded use cases](docs/use-cases.md).

1. [Set up the desktop app, tools, and a separate learner folder](docs/lab-00-prerequisites.md).
2. [Plan one record type and four small increments](docs/lab-01-plan.md).
3. [Scaffold, preview, and build one feature at a time](docs/lab-02-build.md).
4. [Test positive and negative cases, review, and save a local commit](docs/lab-03-test-and-save.md).
5. [Explain the result and its limits](docs/lab-04-completion.md).
6. [Choose an optional extension](docs/lab-05-next-steps.md), or stop at your completed core lab.

**Required:** a GitHub account with a Copilot plan, a supported computer, internet, Node.js 24 LTS with npm, Git, and a browser. Get the desktop app from its [official download page](https://github.com/features/ai/github-app). It is generally available for Windows, macOS, and Linux; this course gives Windows/macOS setup steps. Check your organization's installation/app policy and your plan's usage limits before the workshop.

**Not required:** VS Code, Copilot CLI, GitHub Desktop, WSL, custom agents, MCP servers, Microsoft 365, Azure, or public deployment. Do not install a similarly named product as a substitute for the Copilot desktop app.

The learning loop is **plan → small scaffold → preview → implement one feature → verify → save**. All records are synthetic. A local prototype is not a production system, a compliance claim, or a publicly deployed app.

### Two different projects

- **Learning portal:** this repository displays instructions and tracks learner-reported checkpoints.
- **Your learner app:** a new, empty, dedicated folder selected in a local Copilot desktop session. Do not scaffold inside the portal repository.

The session may use a separate **worktree**, so check its actual working directory. Follow the generated app's actual preview URL rather than assuming port 5173. Keep the portal and generated app in separate browser tabs.

The portal's checklist is your report of evidence, not an automated inspection of your app. Browser-stored progress and sample records are not durable cross-device backups.

Need a definition? See the [plain-English glossary](GLOSSARY.md).

## Maintainers: run this learning portal locally

These commands run **the portal**, not the app learners build. A fork, cloud account, or push is not needed for local use.

1. Open PowerShell on Windows or Terminal on macOS. Navigate to a parent folder where you keep projects.
2. **Terminal commands — one line at a time:**

   ```text
   git clone https://github.com/russrimm/Vibing101.git
   cd Vibing101
   npm ci
   npm run dev
   ```

3. Expect Vite to print `Local:` and a URL. Open that exact URL in your browser.
4. Optionally add this cloned folder as a local project in the Copilot desktop app to maintain the portal. Keep learner builds in a different project.
5. In a second terminal in the portal folder, run the existing checks:

   ```text
   npm run lint
   npm run build
   npm run test:e2e
   ```

   Each successful command exits with code 0. If Playwright reports a missing Chromium executable, run `npx playwright install chromium`, then retry the tests. Do not treat missing browsers as a passing test. On Windows with Edge already installed, the repository also supports this PowerShell alternative:

   ```powershell
   $env:PLAYWRIGHT_CHANNEL = 'msedge'
   npm run test:e2e
   ```

   This chooses Edge for that terminal's test runs; it does not install a new browser.

6. To inspect built files locally, run `npm run preview` and open its printed URL. This still does not publish the portal.

### Where the curriculum lives

- `docs/lab-00-prerequisites.md` through `docs/lab-05-next-steps.md`: canonical modules, also rendered in the portal.
- `src/data/curriculum.ts`: imports those modules and adapts Retail examples for the selected use case.
- `src/types/industry.ts`: six small use-case definitions.
- `src/data/wizardChecklist.ts`: checkpoint IDs, labels, and evidence descriptions.
- `src/components/steps`: stage presentation; shared checklist behavior belongs to the wizard.
- `src/data/glossary.json`: definitions used by portal glossary UI.
- [Curriculum review and release checks](docs/lab-review.md): findings, changes, and outstanding validation.

### Optional and historical documents

Older filenames remain as redirects or clearly labeled advanced design references, not alternate beginner routes. Graph, service-health, AI assistant, and [deployment planning](docs/Lab09-DeployToAzure.md) require separate technical/access reviews. No cloud resources are provisioned by following the core course.

## License

The repository's existing documentation identifies the license as MIT. A standalone license file is not currently included; maintainers should confirm licensing before redistribution.
