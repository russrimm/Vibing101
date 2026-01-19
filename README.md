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

- Node.js (LTS version recommended)
- npm

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
