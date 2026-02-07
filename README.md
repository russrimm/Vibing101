# VibeCoding101

**Welcome to the future of coding!** This is an interactive learning experience designed for non-professional coders who want to build real applications using AI-assisted development. No prior coding experience required—just bring your curiosity and let AI handle the heavy lifting. Learn "vibe coding" where you guide the AI to create modern, professional web applications without writing code from scratch.

## Getting Started

### Prerequisites

**New to coding?** Check out the [Glossary](GLOSSARY.md) for definitions of all technical terms used in this guide.

Before you begin, make sure you have these tools installed:

1. **Visual Studio Code** - Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. **Node.js** (LTS version recommended) - Download from [https://nodejs.org/](https://nodejs.org/)
3. **Git** - Download from [https://git-scm.com/](https://git-scm.com/)
4. **GitHub Account** - Sign up at [https://github.com/](https://github.com/)
5. **GitHub Copilot CLI** - Install using winget:

   ```bash
   winget install GitHub.Copilot.CLI
   ```

6. **Windows Subsystem for Linux (WSL)** - For Windows users:

   **What is WSL?** WSL lets you run a Linux environment directly on Windows without a virtual machine. This gives you access to powerful Linux tools and makes development easier.

   **Install WSL:**

   ```bash
   wsl --install
   ```

   After installation, restart your computer. WSL will automatically install Ubuntu by default.

   **Install VS Code Extensions:**
   - [Remote Development Extension Pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) - Includes WSL, Remote-SSH, and Dev Containers extensions
   - Or install just the [WSL Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) if you only need WSL support

   **Connect to WSL:**
   - Click the button in the very bottom-left corner of VS Code
   - Select "Connect to WSL"
   - Your terminal will now run in Linux mode

   **Install Azure CLI in WSL:**

   ```bash
   curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
   ```

   > 💡 **Tip:** Always verify you're installing the **latest version** of Azure CLI. After installation, run `az --version` to confirm.

7. **GitHub Copilot Agent Mode Starter Kit** - Enhanced AI development setup:

   **What is it?** A powerful configuration that supercharges GitHub Copilot with custom agents and modes for better code generation.

   **Clone and Set Up (Fork Optional):**
   1. Navigate to: [https://github.com/bradcstevens/github-copilot-agent-mode-starter-kit](https://github.com/bradcstevens/github-copilot-agent-mode-starter-kit)
   2. (Optional) Click **Fork** if you want your own copy on GitHub.
   3. Clone to your local machine:
      ```bash
      cd c:\repos
      git clone https://github.com/bradcstevens/github-copilot-agent-mode-starter-kit.git
      ```
   4. Open the folder in VS Code:
      ```bash
      cd github-copilot-agent-mode-starter-kit
      code .
      ```
   5. **Enable instruction files in VS Code (recommended):**
      - Open VS Code Settings (Ctrl+, or Cmd+,)
      - Search for: **Use Instruction Files**
      - Turn it on
   6. **Increase Agent max requests (recommended):**
      - In VS Code Settings (Ctrl+, or Cmd+,)
      - Search for: **max requests**
      - Set **Max Requests** to **200**
   7. **Copy Copilot instruction files into your lab repo:**
      - Source folder (from this repo):
        `C:\repos\Vibing101\.github\instructions`
      - Copy these files into your lab project folder at:
        `C:\repos\LAB\.github\instructions`
        - `tailwind-v4-vite.instructions.md`
        - `vite.instructions.md`
        - `typescript.instructions.md`
        - `typescript-5-es2022.instructions.md`
        - `react.instructions.md`
   8. **Start using custom prompts (optional):**
      - In Copilot Chat, type `/` to see available prompts
      - Try `/create-plan` to generate a project plan
      - Try `/create-tasks` to convert plans into actionable tasks
      - Try `/create-readme` to generate documentation

   > **What you get:** Pre-configured prompts, instruction files that teach Copilot your standards, templates for planning/tasks, and MCP server configurations. The Memory Bank system enables sophisticated workflows with different complexity levels!

   This will give you pre-configured AI agents like "Beast Mode" for thorough development, "Plan Mode" for architecture, and more!

### Clone the Repository (Fork Optional)

Follow these steps to get a local copy of this project:

> This repository is the **lab portal** itself. During the lab you’ll also create a separate project folder (for example `C:\repos\LAB`) using the starter kit.

> For this lab, you can simply clone the repository to your machine. Forking is
> only needed if you want to push your changes to GitHub, open pull requests, or
> use GitHub-based workflows.

#### Option A (Optional): Fork the Repository on GitHub

1. Navigate to the repository on GitHub: https://github.com/russrimm/Vibing101
2. Click the **Fork** button in the top-right corner of the page
3. GitHub will create a copy of the repository in your account

#### Option B (Recommended for most learners): Clone to Your Local Machine

For the official GitHub instructions (with screenshots), see:
https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

1. Open the repo page on GitHub (either the original repo or your fork) and click the green **Code** button
2. Copy the repository URL (HTTPS is simplest for beginners; SSH also works if you’ve set it up)
   - Original repo example: `https://github.com/russrimm/Vibing101.git`
   - Fork example: `https://github.com/YOUR-USERNAME/Vibing101.git`

3. Open **VS Code**

4. Open the **integrated terminal** in VS Code:
   - Click `Terminal` in the top menu → `New Terminal`
   - Or use keyboard shortcut: `` Ctrl+` `` (backtick)

5. Navigate to where you want to store the project:

   ```bash
   cd c:\repos
   ```

6. Clone the repository:

   ```bash
   git clone https://github.com/russrimm/Vibing101.git
   ```

   (If you forked, use your fork URL instead.)

7. Navigate into the project folder:
   ```bash
   cd Vibing101
   ```

#### 3. Open the Project in VS Code

If you're not already in VS Code with the project open:

1. In VS Code, click `File` → `Open Folder`
2. Navigate to `c:\repos\Vibing101` (or wherever you cloned it)
3. Click **Select Folder**

You should now see the project files in the Explorer sidebar on the left.

### Installation

```bash
npm install
```

### Install and Start MCP Servers

This project uses Model Context Protocol (MCP) servers to enhance GitHub Copilot's capabilities.

#### 1. Install MCP Servers

1. Navigate to the MCP marketplace: [https://github.com/mcp](https://github.com/mcp)

2. Click the **Install** button for these recommended servers:
   - **Context7** - For up-to-date library documentation
   - **Microsoft Learn** - For official Microsoft/Azure documentation
   - Any other MCP servers that interest you

3. Follow the installation prompts in VS Code

#### 2. Verify MCP Servers Are Running

**Important:** Always verify your MCP servers are running before starting development.

1. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type and select: **MCP: List Servers**
3. You should see a list of active MCP servers with their status

✅ **Running servers will show as "Running"**  
❌ **If servers show as "Disconnected", restart them using MCP: List Servers, select the MCP, and select _Start Server_**

> **Pro Tip:** Check server status whenever you:
>
> - Open VS Code for a new session
> - Notice Copilot isn't responding as expected
> - Start working on the project after a break

### Development

Start the development server:

```bash
npm run dev
```

Open a browser and navigate to `http://localhost:5173`

### Using Agent Mode / Beast Mode

For this lab, you’ll do most work in **Agent** mode (so Copilot can edit files and run commands). Many learners also use a custom **Beast Mode** agent for more thorough, end-to-end changes.

To set this up, follow the in-app wizard (Environment Setup step) — it walks you through configuring a custom agent in VS Code.

#### Use Beast Mode in Your Workflow

1. Open **GitHub Copilot Chat** in VS Code:
   - Windows/Linux: `Ctrl+Shift+I`
   - Mac: `Cmd+Shift+I`

2. At the top of the chat panel, click the **chat mode selector** (shows "Default" or your current mode)

3. Select **Beast Mode** from the dropdown

   If you don’t see it yet, open the mode dropdown and choose **Configure Custom Agents**, then follow the wizard’s setup steps.

4. Enter your build prompt, for example:

```

Create a new contact form component with validation

```

5. Beast Mode will provide comprehensive solutions with:

- Complete, production-ready code
- Error handling and edge cases
- Accessibility considerations
- TypeScript type safety
- Detailed explanations

> **Pro Tip:** Use Beast Mode when you need:
>
> - Complete feature implementations
> - Complex problem solving
> - Production-ready code with all best practices
> - Thorough explanations and documentation

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/         # Button component with barrel export
│   │   ├── Button.tsx
│   │   └── index.ts
├── assets/             # Static assets (images, SVGs)
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind imports
```

## License

MIT
