export type WizardStepId =
  | 'setup'
  | 'structure'
  | 'testing'
  | 'completion'
  | 'whatsnext'

export interface ChecklistItem {
  id: string
  text: string
  detail?: string
}

export interface ChecklistSection {
  stepId: WizardStepId
  title: string
  items: ChecklistItem[]
}

export const WIZARD_CHECKLIST: ChecklistSection[] = [
  {
    stepId: 'setup',
    title: 'Environment Setup',
    items: [
      {
        id: 'setup-vscode',
        text: 'Install Visual Studio Code (latest stable)',
      },
      {
        id: 'setup-node',
        text: 'Install Node.js (v24+ recommended in this lab)',
      },
      {
        id: 'setup-git',
        text: 'Install Git',
      },
      {
        id: 'setup-copilot',
        text: 'Install GitHub Copilot Chat extension and sign in',
      },
      {
        id: 'setup-prettier',
        text: 'Install the “Prettier - Code Formatter” VS Code extension',
      },
      {
        id: 'setup-eslint',
        text: 'Install the “ESLint” VS Code extension',
      },
      {
        id: 'setup-beast',
        text: 'Configure the “Beast Mode” custom agent',
        detail:
          'Create the agent, paste the Beast Mode content into Beast Mode.agent.md, and save.',
      },
      {
        id: 'setup-maxrequests',
        text: 'Set chat.agent.maxRequests to 200',
      },
      {
        id: 'setup-mcp',
        text: 'Install MCP servers (Context7, GitHub, Microsoft Learn, Playwright)',
      },
    ],
  },
  {
    stepId: 'structure',
    title: 'Project Structure',
    items: [
      {
        id: 'structure-prereq',
        text: 'Confirm Step 1 is complete (tools + Copilot + Beast Mode + MCP)',
      },
      {
        id: 'structure-open-chat',
        text: 'Open GitHub Copilot Chat and switch to Beast Mode',
      },
      {
        id: 'structure-prompt',
        text: 'Paste the build prompt for your selected industry',
      },
      {
        id: 'structure-approve',
        text: 'Approve Agent actions during the build (Allow and Review / Allow and Skip)',
      },
      {
        id: 'structure-verify',
        text: 'Verify the app scaffolds correctly (files created, app runs)',
      },
    ],
  },
  {
    stepId: 'testing',
    title: 'Test & Deploy',
    items: [
      { id: 'testing-install', text: 'Run npm install' },
      {
        id: 'testing-dev',
        text: 'Run npm run dev and verify the app in the browser',
      },
      {
        id: 'testing-fix',
        text: 'If you hit errors, paste them into Beast Mode and iterate',
      },
      { id: 'testing-build', text: 'Run npm run build' },
      {
        id: 'testing-deploy',
        text: 'Deploy (Azure Static Web Apps or GitHub Pages)',
      },
    ],
  },
  {
    stepId: 'completion',
    title: 'Complete!',
    items: [
      {
        id: 'completion-review',
        text: 'Review what you built and key features',
      },
      {
        id: 'completion-next',
        text: 'Pick a next enhancement (auth, real database, CI/CD, tests, etc.)',
      },
      {
        id: 'completion-repeat',
        text: 'Optionally build another app/industry',
      },
    ],
  },
  {
    stepId: 'whatsnext',
    title: "What's Next",
    items: [
      {
        id: 'whatsnext-pick',
        text: 'Pick one upgrade to implement (PDF/DOCX export, charts, 3D, etc.)',
      },
      {
        id: 'whatsnext-iterate',
        text: 'Implement in small steps and validate with npm run build',
      },
      {
        id: 'whatsnext-ship',
        text: 'Deploy again after the upgrade (Azure Static Web Apps, etc.)',
      },
    ],
  },
]
