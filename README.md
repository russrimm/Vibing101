# ViteBase

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

### Development

Start the development server:

```bash
npm run dev
```

The app will open at `http://localhost:3000`

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
