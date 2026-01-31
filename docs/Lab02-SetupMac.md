---
title: 'Setup Your Mac for Vibe Coding'
description: 'Get your Mac ready for AI-assisted development with all the right tools'
duration: '20 minutes'
order: 2
difficulty: 'beginner'
platform: 'mac'
quiz:
  - question: 'Why do we need Node.js?'
    options:
      - 'To browse the internet'
      - 'To run JavaScript outside the browser and manage packages'
      - 'To write documents'
      - 'To play music'
    correct: 1
    points: 10
    explanation: 'Node.js lets us run JavaScript on our computer (not just in browsers) and includes npm, which manages all the code libraries our project needs!'
  - question: 'What does VS Code do?'
    options:
      - 'Creates videos'
      - "It's a powerful code editor where we write and edit code"
      - 'Manages our calendar'
      - 'Plays games'
    correct: 1
    points: 10
    explanation: 'VS Code is our code editor—think of it like Microsoft Word, but designed specifically for writing code. It has tons of features to make coding easier!'
  - question: 'What are MCP Servers?'
    options:
      - 'Minecraft servers'
      - 'Tools that enhance GitHub Copilot with up-to-date documentation'
      - 'Email servers'
      - 'Game servers'
    correct: 1
    points: 10
    explanation: 'MCP (Model Context Protocol) servers give Copilot access to current documentation and specialized knowledge, making it even smarter!'
---

# 🍎 Setup Your Mac for Vibe Coding

## Let's Get You Ready to Build!

Don't worry if this feels like a lot—we'll go through everything step by step. By the end, you'll have a professional development environment ready to create amazing things!

⏱️ **Time needed:** About 20 minutes (most of it is downloading and installing)

---

## ✅ What We're Installing

Here's your toolkit:

1. **Visual Studio Code** - Where you'll write and view code
2. **Node.js** - JavaScript runtime and package manager
3. **Git** - Version control (tracks changes to your code)
4. **GitHub Account** - Store and share your code online
5. **GitHub Copilot** - Your AI coding partner
6. **MCP Servers** - Enhanced AI capabilities

---

## Step 1: Install Visual Studio Code

**What is it?** Your code editor—like Microsoft Word, but for code!

### Installation:

1. **Visit**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. **Click**: The big blue "Download Mac Universal" button
3. **Open**: The downloaded `.zip` file (usually in Downloads)
4. **Drag**: Visual Studio Code to your Applications folder
5. **Launch**: Open VS Code from Applications

### ✅ Verify It Worked:

- VS Code should open showing a Welcome screen
- You should see "Visual Studio Code" in your menu bar

🎉 **Success!** You've got your code editor ready!

---

## Step 2: Install Node.js

**What is it?** The engine that runs JavaScript and manages packages (code libraries).

### Installation:

1. **Visit**: [https://nodejs.org/](https://nodejs.org/)
2. **Download**: The **LTS** version (left button—it says "Recommended For Most Users")
   - LTS means "Long Term Support"—it's the stable version
   - ⚠️ **Important**: Always choose the **latest LTS version** (currently v20.x or newer)
   - The site automatically shows you the current LTS—download that one!
3. **Open**: The downloaded `.pkg` file
4. **Follow**: The installer (just keep clicking "Continue" and "Install")
5. **Enter**: Your Mac password when prompted

### ✅ Verify It Worked:

1. **Open Terminal** in VS Code:
   - In VS Code, click `Terminal` → `New Terminal`
   - Or press: `Ctrl + ` (backtick key, usually above Tab)

2. **Check Node version**:

   ```bash
   node --version
   ```

   You should see something like: `v20.11.0` (your numbers might be different—that's okay!)

3. **Check npm version**:

   ```bash
   npm --version
   ```

   You should see something like: `10.2.4`

🎉 **Success!** Node.js and npm are installed!

---

## Step 3: Install Git

**What is it?** Version control system—tracks every change you make to your code.

### Installation:

1. **Open Terminal** in VS Code (if not already open)

2. **Check if Git is already installed**:

   ```bash
   git --version
   ```

   - ✅ If you see a version number, **you're done!** Skip to Step 4.
   - ❌ If you see "command not found", continue below.

3. **Install Git** (if needed):

   When you run `git --version` above and it's not found, macOS will prompt you to install "Command Line Developer Tools". Click **Install** and wait for it to finish.

   Or visit: [https://git-scm.com/download/mac](https://git-scm.com/download/mac) and download the installer.

### ✅ Verify It Worked:

```bash
git --version
```

You should see something like: `git version 2.39.2`

🎉 **Success!** Git is ready!

---

## Step 4: Create a GitHub Account

**What is it?** Your online home for code—like Google Drive, but for developers.

### Setup:

1. **Visit**: [https://github.com/](https://github.com/)
2. **Click**: "Sign up" (top right)
3. **Follow**: The signup process
   - Choose a username (this will be public!)
   - Use a real email (you'll need to verify it)
   - Create a strong password

4. **Verify** your email address (check your inbox)

### ✅ You're Ready When:

- You can log into github.com
- You have a username
- Your email is verified

🎉 **Success!** You're part of the global developer community!

---

## Step 5: Install GitHub Copilot in VS Code

**What is it?** Your AI pair programmer—the magic that makes vibe coding possible!

### Installation:

1. **In VS Code**, click the **Extensions** icon (four squares in the sidebar)
   - Or press: `Cmd + Shift + X`

2. **Search for**: `GitHub Copilot`

3. **Click Install** on the "GitHub Copilot" extension (by GitHub)

4. **Also install**: `GitHub Copilot Chat`

5. **Sign in**:
   - VS Code will prompt you to sign in
   - Click "Sign in to GitHub"
   - Authorize in your browser
   - Return to VS Code

### ⚠️ Important Notes:

**Always Install Latest Versions:**

- Extensions update frequently with bug fixes and new features
- Click "Update" if you see it next to the extension
- Copilot works best with the latest VS Code version

**Copilot Requires a Subscription:**

- **Students/Teachers**: Free! Get verified at [education.github.com](https://education.github.com/)
- **Individual**: $10/month or $100/year
- **Free Trial**: 30 days available

### ✅ Verify It Worked:

- Look for the Copilot icon in the bottom-right of VS Code
- You should see a chat icon in the sidebar (left side)

🎉 **Success!** Your AI partner is ready!

---

## Step 6: Install GitHub Copilot CLI

**What is it?** A command-line interface that brings GitHub Copilot's AI assistance to your terminal.

### Installation:

1. **Open Terminal** (or VS Code terminal)

2. **Install GitHub CLI using Homebrew:**

   ```bash
   brew install gh
   ```

   > 💡 **Tip:** Always install the **latest version** of GitHub CLI (gh) to get the newest Copilot CLI features

3. **Install GitHub Copilot CLI extension:**

   ```bash
   gh extension install github/gh-copilot
   ```

4. **Authenticate with GitHub:**
   ```bash
   gh auth login
   ```

   - Choose "GitHub.com"
   - Select "HTTPS" protocol
   - Choose "Login with a web browser" and follow prompts

### ✅ Verify Installation:

```bash
gh copilot --version
```

**Expected result:**

```
gh-copilot version X.X.X
```

✅ **Success!** You can now use Copilot in your terminal:

- `gh copilot suggest` - Get command suggestions
- `gh copilot explain` - Explain commands

> **Try it:** Type `gh copilot suggest "list all files in current directory"` to see it in action!

🎉 **Success!** You have AI assistance in your terminal!

---

## Step 7: Install MCP Servers

**What are they?** They supercharge Copilot with up-to-date documentation and specialized knowledge.

### Installation:

1. **Open Copilot Chat** in VS Code:
   - Click the chat icon in the sidebar
   - Or press: `Cmd + Shift + I`

2. **Navigate to MCP Marketplace**:
   - Type: `/mcp`
   - Or visit: Extensions → Search "MCP"

3. **Install these servers** (always use latest versions):
   - ✅ **Context7** - Up-to-date library documentation
   - ✅ **Microsoft Learn** - Official Microsoft/Azure docs
   - ✅ Any others that interest you!
   - 💡 **Tip**: MCP servers update regularly—install the newest versions available

4. **Start the servers**:
   - Open Command Palette: `Cmd + Shift + P`
   - Type: `MCP: Restart Servers`
   - Press Enter

### ✅ Verify They're Running:

1. **Command Palette**: `Cmd + Shift + P`
2. **Type**: `MCP: List Servers`
3. **Check**: All servers show as "Connected" ✅

### 🔧 Troubleshooting:

If servers show "Disconnected":

- Try: `MCP: Restart Servers` again
- Restart VS Code
- Check your internet connection

🎉 **Success!** MCP servers are enhancing your AI!

---

## Step 8: Configure Git

**Why?** So Git knows who you are when you save code.

### Configuration:

1. **Open Terminal** in VS Code

2. **Set your name**:

   ```bash
   git config --global user.name "Your Name"
   ```

   (Use your real name or GitHub username)

3. **Set your email**:
   ```bash
   git config --global user.email "your.email@example.com"
   ```
   (Use the email from your GitHub account)

### ✅ Verify It Worked:

```bash
git config --list
```

You should see your name and email in the output.

🎉 **Success!** Git knows who you are!

---

## Step 9: Create Your First Project Folder

**Why?** We need a home for your vibe coding projects!

### Setup:

1. **In Terminal**, create a projects folder:

   ```bash
   mkdir -p ~/Development/VibeProjects
   cd ~/Development/VibeProjects
   ```

2. **Open this folder in VS Code**:
   ```bash
   code .
   ```

### ✅ Verify It Worked:

- VS Code should reopen showing "VIBEPROJECTS" in the Explorer sidebar
- You now have a dedicated space for your creations!

🎉 **Success!** You've got your workspace!

---

## 🎯 Quick Reference: Keyboard Shortcuts

**You'll use these a lot:**

| Action               | Shortcut          |
| -------------------- | ----------------- |
| Open Terminal        | `Ctrl + `` `      |
| Open Command Palette | `Cmd + Shift + P` |
| Open Copilot Chat    | `Cmd + Shift + I` |
| Save File            | `Cmd + S`         |
| Find in Files        | `Cmd + Shift + F` |

---

## ✅ Final Checklist

Before moving on, make sure you have:

- [ ] VS Code installed and opens correctly
- [ ] Node.js installed (`node --version` works)
- [ ] npm installed (`npm --version` works)
- [ ] Git installed (`git --version` works)
- [ ] GitHub account created
- [ ] GitHub Copilot installed and signed in
- [ ] MCP Servers installed and connected
- [ ] Git configured with your name and email
- [ ] Project folder created

---

## 🎉 You Did It!

**Congratulations!** Your Mac is now a professional development machine. You have the same setup that professional developers use—and you set it up yourself!

### What You Accomplished:

✅ Installed a professional code editor  
✅ Set up the JavaScript/Node.js ecosystem  
✅ Connected to the global developer community  
✅ Activated AI-assisted development  
✅ Enhanced AI with specialized knowledge

**You're not just learning to code—you're learning to vibe code with AI as your partner.**

---

## 🚀 What's Next?

Ready to meet your AI partner and learn how to work together? Head to the next lab: **Meet Your AI Partner**!

You'll learn:

- How to talk to AI effectively
- Beast Mode for complex tasks
- Plan Mode for big-picture thinking
- Your first AI-assisted code

**Let's start building!** 🎨

---

_Estimated time: 20 minutes • Difficulty: Beginner • Platform: macOS • Next: Meet Your AI Partner_

### 💡 Pro Tip

Bookmark this page! You might need to reference these setup steps later, or help a friend get started on their vibe coding journey.
