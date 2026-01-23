# VibeCoding101

A modern starter template for building React applications with Vite, TypeScript, and Tailwind CSS v4.

## Features

- ⚡️ **Vite** - Lightning-fast build tool
- ⚛️ **React 18** - Modern React with hooks
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework with latest version
- 📘 **TypeScript** - Type safety and better developer experience
- 🔍 **ESLint + Prettier** - Code quality and formatting
- 🏗️ **Component Architecture** - Modular component structure with barrel exports

## Getting Started

### Prerequisites

Before you begin, make sure you have these tools installed:

1. **Visual Studio Code** - Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. **Node.js** (LTS version recommended) - Download from [https://nodejs.org/](https://nodejs.org/)
3. **Git** - Download from [https://git-scm.com/](https://git-scm.com/)
4. **GitHub Account** - Sign up at [https://github.com/](https://github.com/)

### Fork and Clone the Repository

Follow these steps to get a local copy of this project:

#### 1. Fork the Repository on GitHub

1. Navigate to the repository on GitHub: `https://github.com/[original-repo-url]`
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

In the VS Code terminal, run:

```bash
npx -y @modelcontextprotocol/create-server install
```

Follow the prompts to install recommended MCP servers for this project.

#### 2. Start MCP Servers

After installation, the MCP servers should start automatically. If they don't, or if you need to restart them:

1. Open the **Command Palette** in VS Code:
   - Windows/Linux: `Ctrl+Shift+P`
   - Mac: `Cmd+Shift+P`

2. Type and select: **MCP: Restart Servers**

#### 3. Verify MCP Servers Are Running

**Important:** Always verify your MCP servers are running before starting development.

1. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type and select: **MCP: List Servers**
3. You should see a list of active MCP servers with their status

✅ **Running servers will show as "Connected"**  
❌ **If servers show as "Disconnected", restart them using MCP: Restart Servers**

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

The app will open at `http://localhost:3000`

### Using Beast Mode for Development

Beast Mode is a powerful GitHub Copilot chat mode that enables more thorough code generation and problem-solving.

#### Step 1: Add Beast Mode as a Chat Mode

1. Open **Settings** in VS Code:
   - Windows/Linux: `Ctrl+,`
   - Mac: `Cmd+,`

2. Search for: `github.copilot.chat.customModes`

3. Click **Edit in settings.json**

4. Add the Beast Mode configuration to the `github.copilot.chat.customModes` array:

```json
{
  "github.copilot.chat.customModes": [
    {
      "id": "beast",
      "name": "Beast Mode",
      "description": "Deep analysis and comprehensive code generation",
      "instructions": "You are an expert developer. Provide thorough, production-ready solutions with detailed explanations. Always consider edge cases, error handling, accessibility, and best practices. Be comprehensive and leave no stone unturned."
    }
  ]
}
```

5. Save the settings file

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

### Lint

Run ESLint:

```bash
npm run lint
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
