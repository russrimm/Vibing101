# Beginner curriculum review

**Review date:** 2026-09-07. **Target:** first-time learners using the GitHub Copilot desktop app, not VS Code, CLI, or GitHub Desktop.

## Executive assessment

The original learning path mixed several different tools and levels of ambition. It asked beginners to configure enterprise tooling and generate large applications before giving them measurable local success criteria.

The revised core is one local, synthetic-data record board in **60–90 minutes after setup**. It teaches **plan → small scaffold → preview → implement one feature → verify → save**. Completion means the learner reported passing local checks; it does not mean deployment, certification, compliance, or production readiness.

**Readiness:** suitable for a facilitated pilot once the access and OS checks below are completed. Do not promise every learner can install the desktop app or that every AI-generated scaffold will be identical.

## Prioritized findings and dispositions

Evidence locations below refer to the **pre-modernization files**, not their replacement line numbers. They can be inspected in Git history.

| Priority | Finding and original evidence | Why it mattered | Disposition |
| --- | --- | --- | --- |
| P0 | Wrong product and excessive setup: `README.md:13`; `src/components/steps/SetupStep.tsx:41`; `docs/Lab02-SetupMac.md:300` | The requested desktop app was replaced by VS Code/CLI setup, WSL, custom agents, and MCP dependencies | Core setup now links the official public download, uses documented desktop labels, verifies a chat reply, checks local tools, and separates the learner workspace |
| P0 | Overbroad generation: the approximately 110 KB `src/components/steps/StructureStep.tsx`, including `:36–40,218,370,562,790,875` | Six very large production/enterprise prompts hid errors, enlarged scope, and made success difficult to judge | Replaced by one record type and four bounded increments with a preview/check after each |
| P0 | Blind approvals: `src/components/steps/StructureStep.tsx:1852–1853` | “Allow and Review / Allow and Skip” encouraged allowing actions without checking their target or impact | Explicit command/path/network review and pause boundaries; no blanket approval, public push, or deployment |
| P0 | Browser secret example: `src/data/glossary.json:76`; old `docs/Bonus-AzureOpenAIChatbot.md` environment/service sections | Calling `VITE_` keys secret could expose credentials in browser bundles even if files were ignored by Git | Glossaries corrected; unsafe runnable AI snippets retired; advanced reference requires server-side credential handling and separate review |
| P1 | Healthcare patient-system scope: `src/types/industry.ts:119`; `src/components/steps/StructureStep.tsx:790` | Introduced sensitive-data modeling and unsupported production assumptions into an introductory exercise | Fictional non-clinical clinic supplies only; explicit patient/clinical exclusions |
| P1 | Enterprise/financial/operational feature load across `src/types/industry.ts` and `docs/Lab01-ChooseYourVibe.md` | Multiple entities, live data, payments/advice, dispatch, and safety meanings differed greatly in complexity | All six use the same three fields, statuses, and test loop; domain-specific exclusions prevent misleading business use |
| P1 | Testing conflated with deployment: `src/components/steps/TestingStep.tsx:22,59`; old `src/data/wizardChecklist.ts` testing section | Vague clicking, a fixed port 5173, and mandatory hosting did not prove validation, persistence, or correctness | Concrete acceptance table, actual Vite URL, negative inputs, combined search/filter, refresh, keyboard/narrow viewport, build/lint exit codes, and reviewed local commit |
| P1 | Repeated unverified version advice: `src/components/steps/StructureStep.tsx:34,212,364,556,869` | “Latest” and incompatible/LTS assumptions are not reproducible dependency selection | Node.js 24 LTS baseline, rehearsed `create-vite@8.3.0` React/TypeScript generator, recorded installed versions and lockfile; generated feature outcomes still need checks |
| P1 | Misleading Graph path: `docs/Lab04-EnterpriseGraphMCP.md:93,132`; old `docs/Lab05-UniversalGraphComponents.md` | Unverified MCP package/install details, broad permissions, and “any organization” claims | Retained conceptual value in clearly labeled advanced references; no executable enterprise shortcut or universal compatibility claim |
| P1 | Unverified completion claims: `src/components/steps/CompletionStep.tsx:34`; `docs/Bonus-ServiceHealthPortal.md:764`; `docs/Bonus-AzureOpenAIChatbot.md:941` | Reading instructions or receiving AI output was treated as evidence of a working production system | Completion explicitly describes learner-reported local evidence; advanced promises removed |
| P1 | Progress was navigation, not evidence: original `src/components/LabWizard.tsx:59` | Moving forward marked a step complete without verification; refresh lost state | Integration owner added persisted, validated per-use-case checks and notes; completion is derived from required evidence, not page visits; read-ahead does not mark work complete |
| P1 | Inaccessible glossary interaction: original `src/components/GlossaryModal.tsx:141` and modal implementation | Search lacked a label and keyboard focus was not contained/restored reliably | Integration owner added labeled search and a shared Headless UI modal with keyboard/focus handling |
| P2 | Overlapping headers: original `src/App.tsx:33` and the wizard header | A fixed global header competed with the wizard header and could obscure content | Integration owner simplified layout and navigation, with responsive light/dark presentation |
| P2 | Copy control obscured short commands: original `src/components/CodeBlock.tsx:65` | Absolute-positioned Copy could overlap the command being read; clipboard failure was not a useful recovery path | Integration owner separated copy controls from code and added manual-copy recovery |
| P2 | Duplicated/disconnected curriculum: large stage JSX, old `ComponentsStep.tsx` and `DataStep.tsx`, missing next-lab links in bonus docs | Learners could reach contradictory routes and maintainers had several versions of the course | Canonical numbered Markdown modules rendered in portal; old stage components point to current modules; old filenames retained as redirects/reference notes |
| P2 | Confused workspace and URL expectations in old README/setup/testing | Portal vs learner app, worktree paths, fixed ports, and browser storage were easy to mix up | Separate project instructions; session-path verification; actual Vite URL; origin/profile/persistence limits and local-save semantics |

## Six-use-case assessment

All cases share `id`, `name`, and `status` (**New / In progress / Done**). The labels “In progress” and “Done” are demonstrations, not operational authority.

| Use case | Beginner assessment | Retained learning value | Removed scope / guardrail |
| --- | --- | --- | --- |
| Retail | **Recommended first**; familiar objects and easy named tests | Stock-item list, add/validate, status, search/filter | No customers, orders, payment flow, live stock/purchasing |
| Oil, Gas & Energy | Appropriate as a fictional check board, not an asset system | Named equipment-check tasks | No telemetry, safety judgments, operating instructions, compliance claims |
| Transportation | Appropriate as delivery preparation, not fleet control | Named task status and retrieval | No drivers, real addresses, GPS, optimization, live dispatch |
| Manufacturing | Appropriate as workshop tasks, not production monitoring | Work-item workflow | No machine control, production decisions, quality/safety certification |
| Healthcare | Appropriate only after moving away from patient records | Non-clinical supply requests | No patients, appointments, diagnosis, treatment, health records |
| Finance | Appropriate as internal office requests, not financial processing | Request tracking without monetary logic | No accounts, payments, advice, authoritative approvals, compliance claims |

The exact examples and common acceptance criteria live in [use-cases.md](use-cases.md) and `src/types/industry.ts`.

## Curriculum file inventory and integration contract

Changed/new files in this curriculum scope:

- Root: `README.md`, `GLOSSARY.md`.
- Canonical modules: `docs/lab-00-prerequisites.md`, `docs/lab-01-plan.md`, `docs/lab-02-build.md`, `docs/lab-03-test-and-save.md`, `docs/lab-04-completion.md`, `docs/lab-05-next-steps.md`.
- Supporting documents: `docs/use-cases.md`, `docs/lab-review.md`.
- Retained older paths: `docs/Lab00-WelcomeToTheFuture.md`, `docs/Lab01-ChooseYourVibe.md`, `docs/Lab02-SetupMac.md`, `docs/Lab04-EnterpriseGraphMCP.md`, `docs/Lab05-UniversalGraphComponents.md`, `docs/Lab09-DeployToAzure.md`, `docs/Bonus-AzureOpenAIChatbot.md`, `docs/Bonus-ServiceHealthPortal.md`.
- Stage components: `src/components/steps/SetupStep.tsx`, `src/components/steps/StructureStep.tsx`, `src/components/steps/TestingStep.tsx`, `src/components/steps/CompletionStep.tsx`, `src/components/steps/WhatsNextStep.tsx`, `src/components/steps/ComponentsStep.tsx`, `src/components/steps/DataStep.tsx`, new `src/components/steps/CurriculumStage.tsx`.
- Curriculum data: `src/data/curriculum.ts`, `src/data/wizardChecklist.ts`, `src/data/glossary.json`, `src/types/industry.ts`.

Additional portal and validation files changed:

- Application and navigation: `src/App.tsx`, `src/components/IndustrySelector.tsx`, `src/components/LabWizard.tsx`, `src/components/StepProgress.tsx`.
- Checkpoints and persistence: new `src/components/CheckpointPanel.tsx`, new `src/hooks/useLabProgress.ts`, new `src/lib/labProgress.ts`, `src/components/FullChecklistModal.tsx`.
- Accessible presentation: new `src/components/Modal.tsx`, `src/components/AboutModal.tsx`, `src/components/GlossaryModal.tsx`, `src/components/MarkdownRenderer.tsx`, `src/components/CodeBlock.tsx`, `src/components/ThemeToggle.tsx`, `src/components/Button/Button.tsx`, `src/hooks/useTheme.ts`, `src/index.css`, `index.html`.
- Build and regression coverage: `package.json`, `package-lock.json`, `tsconfig.json`, `.gitignore`, new `playwright.config.ts`, new `tests/lab.spec.ts`, new `tests/documentation.spec.ts`, new `.github/workflows/lab-checks.yml`.

Existing industry IDs/exports remain unchanged. Industry metadata adds `recordLabel`, `sampleNames` (two strings), `newRecordName`, `scopeNote`, and optional `recommended`. Setup, Structure, and Testing retain their prior props and require `canContinue: boolean`; their forward buttons are disabled until the shared wizard says the evidence is complete. Each also accepts optional `checkpoints: ReactNode`, rendered by the shared stage wrapper after lesson content and before bottom navigation. Completion/Next/legacy-stage prop interfaces remain compatible. There is no separate checkbox state inside a stage.

## Checkpoint contract and evidence

The portal uses `WIZARD_CHECKLIST`; each required item has a stable ID and visible evidence description. **Checking an item is a learner attestation, not an automated test result.** The wizard is responsible for persistence, gating, reset, and industry isolation.

| Stage | Required IDs | Evidence |
| --- | --- | --- |
| Setup | `setup-desktop-response`, `setup-tool-versions`, `setup-local-workspace`, `setup-permissions` | Real desktop reply; three successful version outputs in-session; recorded local path/worktree; understood permissions boundary |
| Build | `structure-small-plan`, `structure-preview`, `structure-add-validation`, `structure-status-search`, `structure-refresh` | One-entity plan; actual preview; valid/blank/spaces outcomes; combined filter behavior; same-origin refresh with no duplicate seeds |
| Test/save | `testing-acceptance`, `testing-keyboard-mobile`, `testing-build-lint`, `testing-reviewed-commit` | Every table row checked; visible keyboard focus and narrow layout; both exit codes 0; inspected staged content and recorded commit/status |
| Completion | `completion-explain`, `completion-return` | Optional reflection on local outcome, storage limits, and returning to saved work |
| Next steps | `whatsnext-one-improvement`, `whatsnext-recheck` | Optional extension plan and recheck; not core completion requirements |

Core requirement: **13 learner-reported checkpoints** across setup, structure, and testing. Old checklist IDs must not be migrated as verified evidence for the new course.

## Verification boundaries and remaining release checks

### Curriculum checks

- All existing files under `docs` were reviewed, including old Graph/cloud/AI/service-health references.
- Canonical Markdown is shared with the portal rather than duplicating long prose in JSX.
- Prompts use deterministic sample names and a small data shape; package selection and AI implementation remain variable.
- Old tool-specific executable routes are retired, and surviving advanced documents are clearly optional/non-validated.
- Final repository and generated-app results are recorded below. Portal checks prove portal behavior, **not** that the learner generated an app successfully.
- Curriculum-author checks passed: targeted ESLint for stage components, industry metadata, curriculum helper, and checklists; integrated `tsc --noEmit`; relative-link/code-fence checks across all 18 learner Markdown files; glossary JSON parsing. The final integration run may add newer results below.
- Exact content checks passed for all six personalized build/test modules: app/sample/test names, scope boundaries, distinct storage keys, no leftover Retail examples in non-Retail prompts, and 13 required checkpoint IDs.
- Scaffold source inspection confirmed `create-vite@8.3.0` exists in the public npm registry, supports Node.js 24, includes a TypeScript 5/ESLint React template, and implements the documented `--template`, `--no-interactive`, and `--no-rolldown` flags. The integration owner executed the exact published `npm exec --yes --package=create-vite@8.3.0 -- create-vite . --template react-ts --no-interactive --no-rolldown` command in a fresh learner folder, followed by a separate `npm install`, `npm run build`, and `npm run lint`; all four passed, resolving Vite 7.3.6 with TypeScript 5 and ESLint. This is the authoritative learner baseline; the portal remains on its own tooling versions.
- The Windows rehearsal exposed shell-dependent alteration of backslashes in an absolute-path generator argument. The published command avoids that issue by entering the empty workspace first and using `.` as the generator target. This is an observed environment-specific failure, not a claim that every Windows shell behaves that way.
- Eight existing Playwright checks passed using installed **Microsoft Edge**: documentation links, bounded use-case metadata, and the full portal journey for each of six industries (gating, notes, resume, read-ahead). Command: set `PLAYWRIGHT_CHANNEL=msedge`, then `npm run test:e2e -- documentation.spec.ts lab.spec.ts --grep "documentation|bounded entity|full learner journey"`. The initial default-Chromium attempt could not launch because its executable was not installed; it was not treated as a pass. These tests traverse the **portal**, not a separately generated learner app.

### Final integration and learner-app results

The final integrated portal passed **19 browser regression tests** using Microsoft Edge, plus the complete production build and lint checks. Checkpoints now appear **after each lesson and before its Continue button**, with a jump link for returning learners. Canonical lesson links stay inside the portal. Progress and notes persist per use case; browser tabs synchronize saved evidence without changing each other's current lesson.

| Validation | Current evidence | Remaining work |
| --- | --- | --- |
| Portal regressions | 19/19 passed: six full journeys and personalized prompts, progress gating/revocation, resume, history, reset confirmation, two-tab synchronization, corrupt/blocked storage, dialog focus, glossary search, exact clipboard/error handling, evidence download, module navigation, local Markdown links | CI workflow added; its hosted run and repository-required status configuration were not exercised here |
| Accessibility and responsive layout | Zero automated WCAG A/AA violations on the landing page and core stages in both themes; no page overflow at 320, 375, and 768 pixels; keyboard dialog behavior covered | Human screen-reader and assistive-technology review remains necessary; no full WCAG-conformance claim |
| Type safety and lint | `npm run build` and `npm run lint` exit 0, including `noUncheckedIndexedAccess`; original baseline had 54 lint errors and four warnings | Keep the checks running as the course changes |
| Fresh-folder scaffold | Exact published `create-vite@8.3.0` command, install, build, and lint all succeeded on Windows with Node 24.19.0/npm 11.17.0 | First-install dependency resolution can change; retain each workshop's tested lockfile |
| Generated Retail features | One curriculum-aligned implementation on that pinned scaffold passed build, lint, and **31 browser assertions** | This was an adapted implementation, not sequential replay of all Copilot prompts; no independently generated non-Retail app was exercised |
| Desktop workflow | Official download, account policy, project/session labels, modes, Changes, and `/terminal` checked against first-party documentation | Fresh installation/sign-in, permission dialogs, and an actual learner's local Git commit still need a human desktop rehearsal |

The final Retail rehearsal used **React 19.2.8, TypeScript 5.9.3, Vite 7.3.6, ESLint 9.39.5**, and Microsoft Edge. It used the exact published names (**Notebook pack**, **Desk organizer**, **Blue notebook**), statuses, control labels, and storage key. The browser checks exercised valid input, blank and spaces-only rejection, target-only status changes, case-insensitive search, combined filters, clearing controls, same-origin reload without duplicated seeds, keyboard focus/order, 375-pixel layout, invalid stored values, blocked reads, failed writes, and continued in-memory use. No runtime errors or external app requests occurred. Seven package/configuration file hashes remained unchanged when the feature sources were transferred onto the pinned scaffold. The temporary dev server was stopped afterward.

Raw expected-versus-actual JSON, screenshots, the generated source, its lockfile, and its rehearsal script are retained in this work session's artifacts, not shipped as a second application inside the portal repository. An earlier create-vite 9.2.0 exploration is **not** counted as verification of the final published instructions. No fresh desktop install, sign-in, permission approval, cloud operation, sequential AI-prompt replay, or learner Git commit is claimed by these automated results.

To repeat the portal coverage, run `npm run test:e2e` after following the browser setup in [README](../README.md). The added CI job installs Chromium and runs lint, build, and these regressions without cloud credentials. It is separate from the existing deployment workflow; configure required pull-request checks before treating it as a publishing gate.

**Intentional design choices:** semantic Markdown blockquotes retain a side border as a familiar quotation/tip convention; the generic design-hook warning for that pattern is not treated as a defect. System typography follows the repository design system.

### Desktop documentation verification

Official sources were fetched on 2026-09-07. This verifies documented availability and labels, **not** a fresh installation or successful sign-in on every learner computer.

- [General availability announcement, 2026-06-17](https://github.blog/changelog/2026-06-17-github-copilot-app-generally-available/): the desktop app is generally available for Windows, macOS, and Linux. It is not waitlisted or facilitator-only.
- [Current quickstart](https://docs.github.com/en/copilot/get-started/quickstart-copilot-app): links the [public download page](https://github.com/features/ai/github-app); requires a GitHub account, Git, and a Copilot plan or a separately configured model provider. The course uses a Copilot plan and does not teach provider credentials.
- Current quickstart policy guidance takes precedence over the older announcement's CLI-policy note: Business/Enterprise access uses the separate **GitHub Copilot app** policy.
- Documented labels: **Sign in to GitHub**; **+** beside **Sessions**; **Add project from → Local folder or repository**; **Start session in**; **Changes** above the prompt; **Create PR** (not needed for a local checkpoint).
- [Session guidance](https://docs.github.com/en/copilot/how-tos/github-copilot-app/agent-sessions): **Plan**, **Interactive**, and **Autopilot** modes; execution can use a new working tree, local repository, or cloud sandbox. Only the cloud sandbox is described as preview; do not describe the entire desktop app that way or assume every local session has isolated files.
- [Slash-command reference](https://docs.github.com/en/copilot/reference/github-copilot-app-reference/slash-commands): `/terminal` opens a terminal in the right panel of an active session; `/reset-allowed-tools` clears session approvals and turns auto-approval off.
- No universal React/Vite **Preview** button or native local **Commit** button is assumed. The course starts the dev server, opens its actual URL, and explicitly asks for a reviewed local Git commit without pushing or creating a PR.

### Facilitator preflight—required before a workshop

1. **Desktop access:** use the verified official public download; confirm the chosen build's OS requirements, installation rights, sign-in, account plan, organization app policy, and quotas. Minimum OS versions and installation privileges were not independently tested.
2. **UI wording:** record screenshots of local project creation, session creation, workspace display, and review in the exact workshop build. The current instructions use verified documentation labels with a version-variation caveat.
3. **Windows rehearsal:** run the entire course in a new learner folder, including Node/npm/Git discovery in the app, permission review, actual preview port, all negative checks, and a local commit.
4. **macOS rehearsal:** repeat with the same curriculum and document differing install prompts, terminal behavior, and supported OS/build.
5. **Generated-app rehearsal:** the pinned scaffold and one Retail implementation have passed the checks above. Next, run the prompts sequentially with a novice in the desktop app and repeat at least one non-retail case. Record the lockfile, actual completion time, and any hidden facilitator steps; portal substitution tests are not independent generated-app tests.
6. **Storage and recovery:** test a changed port/browser profile, interrupted session, blocked storage, invalid saved data, an occupied dev-server port, missing tool, and a deliberate build error. Confirm no secret/deletion/publishing shortcuts are needed.
7. **Instruction usability:** have a first-time learner distinguish chat, terminal, browser, portal, and generated app without prompting. Revise unclear steps from observed difficulties.
8. **Optional cloud:** require a separate up-to-date runbook, owner approval, pricing/permissions/privacy review, sandbox tests, rollback, and narrowly scoped cleanup. No cloud/Graph/AI deployment was performed by this curriculum rewrite.

### Rollout decision

Pilot with a facilitator first; record actual completion times and failures. The public installation path is documented; broader “fully rehearsed” claims still require actual account/access and end-to-end Windows/macOS runs. A successful portal build or checklist traversal is not a universal guarantee of desktop access, generated-code quality, security, accessibility conformance, or business readiness.
