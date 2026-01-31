# VibeCoding101

**Welcome to the future of coding!** This is an interactive learning experience designed for non-professional coders who want to build real applications using AI-assisted development. No prior coding experience required—just bring your curiosity and let AI handle the heavy lifting. Learn "vibe coding" where you guide the AI to create modern, professional web applications without writing code from scratch.

## Getting Started

### Prerequisites

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

   **Use WSL in VS Code:**
   - Open VS Code
   - Install the "WSL" extension (search for `ms-vscode-remote.remote-wsl`)
   - Click the green button in the bottom-left corner of VS Code
   - Select "Connect to WSL"
   - Your terminal will now run in Linux mode

   **Install Azure CLI in WSL:**

   ```bash
   curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
   ```

   > 💡 **Tip:** Always verify you're installing the **latest version** of Azure CLI. After installation, run `az --version` to confirm.

7. **GitHub Copilot Agent Mode Starter Kit** - Enhanced AI development setup:

   **What is it?** A powerful configuration that supercharges GitHub Copilot with custom agents and modes for better code generation.

   **Fork and Set Up:**
   1. Navigate to: [https://github.com/russrimm/github-copilot-agent-mode-starter-kit](https://github.com/russrimm/github-copilot-agent-mode-starter-kit)
   2. Click the **Fork** button (top-right corner)
   3. Clone your fork to your local machine:
      ```bash
      cd c:\repos
      git clone https://github.com/YOUR-USERNAME/github-copilot-agent-mode-starter-kit.git
      ```
   4. Open the folder in VS Code:
      ```bash
      cd github-copilot-agent-mode-starter-kit
      code .
      ```
   5. Follow the README instructions in that repository to configure custom agents

   This will give you pre-configured AI agents like "Beast Mode" for thorough development, "Plan Mode" for architecture, and more!

### Fork and Clone the Repository

Follow these steps to get a local copy of this project:

#### 1. Fork the Repository on GitHub

1. Navigate to the repository on GitHub: `git clone https://github.com/russrimm/Vibing101.git`
2. Click the **Fork** button in the top-right corner of the page
3. GitHub will create a copy of the repository in your account

#### 2. Clone Your Fork to Your Local Machine

1. On your forked repository page, click the green **Code** button
2. Copy the HTTPS URL (it will look like: `https://github.com/YOUR-USERNAME/Vibing101.git`)

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
   git clone https://github.com/YOUR-USERNAME/Vibing101.git
   ```

   (Replace `YOUR-USERNAME` with your actual GitHub username)

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
❌ **If servers show as "Disconnected", restart them using MCP: List Servers, select the MCP, and select *Start Server***

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

Open a browser and navigate to `http://localhost:3000`

### Using Beast Mode for Development

Beast Mode is a powerful GitHub Copilot chat mode that enables more thorough code generation and problem-solving.

#### Step 1: Add Beast Mode as a Chat Mode

1. Open **GitHub Copilot Chat** in VS Code:
   - Windows/Linux: `Ctrl+Shift+I`
   - Mac: `Cmd+Shift+I`

2. Click the **Agent/Ask mode button** at the top of the chat panel

3. Select **Configure Custom Agents**

4. Click **Create new custom agent**

   > 📖 **Learn More:** For detailed instructions on creating custom agents, see the [official GitHub documentation](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-custom-agents#creating-a-custom-agent-profile-in-visual-studio-code).

5. Select **User Data**

6. Enter **Beast Mode** as the agent name

7. Paste the following Beast Mode instructions into the window:

```markdown
You are an expert developer. Provide thorough, production-ready solutions with detailed explanations. Always consider edge cases, error handling, accessibility, and best practices. Be comprehensive and leave no stone unturned.

8. Save the custom agent

#### Step 2: Enter the Build Prompt in Beast Mode

1. Open **GitHub Copilot Chat** in VS Code:
   - Windows/Linux: `Ctrl+Shift+I`
   - Mac: `Cmd+Shift+I`

2. At the top of the chat panel, click the **chat mode selector** (shows "Default" or your current mode)

3. Select **Beast Mode** from the dropdown

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

## Tailwind CSS v4

This template uses Tailwind CSS v4 with the latest features:

- Uses `@import "tailwindcss";` directive
- PostCSS plugin: `@tailwindcss/postcss`
- Updated gradient syntax: `bg-linear-to-r` instead of `bg-gradient-to-r`

## Technologies

- **React** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS
- **ESLint** - Linting utility
- **Prettier** - Code formatter

## License

MIT
