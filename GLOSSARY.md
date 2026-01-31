# Glossary of Terms

**New to coding and development?** This glossary explains all the technical terms you'll encounter in this learning experience. Don't worry if these seem overwhelming at first—you'll become familiar with them as you go!

---

## Git & GitHub Terms

### **Git**
A version control system that tracks changes to your files over time. Think of it like "track changes" in Microsoft Word, but much more powerful. It lets you save snapshots of your work and go back to previous versions if needed.

### **GitHub**
A website where developers store and share their code using Git. It's like Google Drive or Dropbox, but specifically designed for code projects. GitHub also provides collaboration tools and social features for developers.

### **Repository (Repo)**
A folder/project that contains all your code files and their history. When you create a project on GitHub, it's stored in a repository. Think of it as a "home" for your project.

### **Clone**
Making a copy of a repository from GitHub to your local computer. It's like downloading a project so you can work on it on your own machine.

**Example:** When you "clone" this project, you're downloading all the files to your computer.

### **Fork**
Creating your own copy of someone else's repository on GitHub. It's like making a photocopy of a document so you can make changes without affecting the original. Your fork lives in your GitHub account.

### **Commit**
Saving a snapshot of your changes with a description of what you changed. It's like saving your work with a note about what you did. Each commit creates a point in history you can return to.

**Example:** "Fixed the login button" might be a commit message.

### **Push**
Sending your local commits (saved changes) from your computer to GitHub. It's like uploading your work so others can see it and so it's backed up in the cloud.

### **Pull**
Downloading changes from GitHub to your local computer. If someone else made changes to the project on GitHub, you "pull" those changes to get the latest version.

### **Pull Request (PR)**
A request to merge your changes into the main project. It's like saying "Hey, I made some improvements—would you like to include them?" Other people can review your changes before they're accepted.

### **Branch**
A separate version of your code where you can experiment without affecting the main version. It's like creating a draft copy where you can try things out safely.

### **Merge**
Combining changes from one branch into another. After you finish working on a branch, you merge it back into the main version.

---

## Development Tools

### **Visual Studio Code (VS Code)**
A free code editor made by Microsoft. It's where you'll write and edit code, similar to how you'd use Microsoft Word for documents. VS Code has lots of helpful features for developers.

### **Terminal (Command Line)**
A text-based interface where you type commands instead of clicking buttons. It might seem intimidating at first, but it's very powerful! In VS Code, you can open a terminal at the bottom of the window.

**Example commands:**
- `cd foldername` - Change directory (move into a folder)
- `ls` or `dir` - List files in current folder
- `node -v` - Check Node.js version

### **Node.js**
A tool that lets you run JavaScript code on your computer (not just in a web browser). It's required for most modern web development. Think of it as the engine that powers your development tools.

### **npm (Node Package Manager)**
A tool that comes with Node.js that helps you install and manage code libraries (packages) that other people have created. It's like an app store for code.

**Example:** `npm install` downloads all the packages your project needs.

### **Package**
A collection of pre-written code that adds functionality to your project. Instead of writing everything from scratch, you can use packages that solve common problems.

---

## Frontend Technologies

### **React**
A popular JavaScript library for building user interfaces (the visual part of websites/apps). It breaks your interface into reusable components, making it easier to build complex applications.

### **Vite**
A modern build tool that makes development faster. It starts a local server where you can see your website as you build it, and it automatically refreshes when you make changes.

### **TypeScript**
A version of JavaScript that adds "types" to help catch errors before you run your code. It's like spell-check for programming—it helps you avoid mistakes.

### **Tailwind CSS**
A CSS framework that provides pre-made styling classes you can use to design your website. Instead of writing custom styles, you add class names like `bg-blue-500` (blue background) or `text-center` (centered text).

### **Component**
A reusable piece of user interface. Think of it like a LEGO brick—you can use the same button component in many places throughout your app.

### **JSX**
A syntax that lets you write HTML-like code inside JavaScript. It's what React uses to define what should appear on the screen.

---

## Web Development Concepts

### **Frontend**
The part of a website or app that users see and interact with. It includes all the visual elements, buttons, forms, and layouts.

### **Backend**
The part of a website that users don't see—the server, database, and logic that powers the frontend. For this project, we're focusing on the frontend.

### **API (Application Programming Interface)**
A way for different software programs to talk to each other. It's like a waiter at a restaurant—it takes your request (order) to the kitchen (server) and brings back what you asked for (data).

### **Localhost**
Your own computer acting as a web server. When you run `npm run dev`, your project is available at `http://localhost:3000`—only you can see it, it's not on the internet yet.

### **Port**
A number that identifies a specific service on your computer. When you see `:3000` in a URL, that's the port number. Different apps use different ports so they don't interfere with each other.

### **Build**
The process of converting your development code into optimized files ready for deployment. It's like compiling all your work into a final, polished product.

### **Deploy**
Publishing your website to the internet so others can use it. Before deployment, your site only exists on your computer.

---

## AI & Development Terms

### **GitHub Copilot**
An AI assistant built into VS Code that helps you write code. You describe what you want in plain English, and it generates the code for you. It's like having an expert programmer helping you.

### **Agent Mode**
A special mode in GitHub Copilot where the AI can perform multiple tasks autonomously. Instead of just suggesting code, it can create entire files, run commands, and build features.

### **Beast Mode**
A custom GitHub Copilot configuration that provides thorough, production-ready code with detailed explanations. It's designed to teach you as it builds.

### **Vibe Coding**
A development approach where you guide AI to create applications without writing code from scratch. You describe what you want in natural language, and the AI does the implementation.

### **Prompt**
Instructions or questions you give to an AI. A good prompt clearly describes what you want the AI to do.

### **MCP (Model Context Protocol)**
A system that gives GitHub Copilot access to external tools and data sources, making it more powerful and knowledgeable about specific topics like Azure or library documentation.

---

## Azure & Cloud Terms

### **Azure**
Microsoft's cloud computing platform. It provides services for hosting websites, storing data, running AI models, and much more.

### **Cloud**
Computing resources (servers, storage, databases) that you access over the internet instead of running on your own computer. It's like renting instead of buying.

### **Deployment**
The process of making your application available on the internet using a cloud service like Azure. After deployment, anyone with the URL can access your app.

### **Static Web App**
A type of website that doesn't require a backend server. All the files are pre-built and served directly to users. Static sites are fast, secure, and inexpensive to host.

### **WSL (Windows Subsystem for Linux)**
A feature in Windows that lets you run a Linux environment directly on your Windows computer. Many development tools work better in Linux, so WSL gives you the best of both worlds.

### **CLI (Command Line Interface)**
A program you interact with by typing commands in a terminal. For example, the Azure CLI lets you manage Azure resources using text commands.

---

## File & Project Structure

### **Directory**
Another word for folder. In programming, we often say "directory" instead of "folder."

### **Path**
The location of a file or folder on your computer. 
- **Absolute path:** Full location (e.g., `C:\repos\Vibing101\README.md`)
- **Relative path:** Location relative to current folder (e.g., `./src/App.tsx`)

### **Root Directory**
The top-level folder of your project. Everything else is inside the root.

### **Extension**
The letters after the dot in a filename that indicate the file type.
- `.md` - Markdown file (formatted text)
- `.ts` or `.tsx` - TypeScript file
- `.json` - JSON file (data format)
- `.css` - Stylesheet file

### **README.md**
A file that explains what a project is and how to use it. It's usually the first thing people read when they visit a repository. The `.md` extension means it's written in Markdown.

### **package.json**
A file that lists all the packages your project needs, along with project information and scripts you can run. It's like a recipe that says what ingredients (packages) are required.

### **node_modules**
A folder that contains all the installed packages. It's created when you run `npm install`. This folder can be huge—it's like having a library of pre-written code you can use.

---

## Common Commands

### **`cd`** (Change Directory)
Navigate to a different folder.
```bash
cd c:\repos
cd Vibing101
```

### **`ls`** (List) or **`dir`** (Windows)
Show all files and folders in the current directory.

### **`npm install`**
Download and install all the packages listed in package.json.

### **`npm run dev`**
Start the development server so you can see your project in a browser.

### **`npm run build`**
Create the production-ready version of your project.

### **`git clone`**
Download a repository from GitHub to your computer.

### **`git status`**
See what changes you've made that haven't been committed yet.

### **`code .`**
Open the current folder in VS Code.

---

## Tips for Beginners

- **Don't memorize everything!** Use this glossary as a reference. You'll naturally remember terms as you use them.
- **Google is your friend.** Developers look things up constantly—it's completely normal.
- **Errors are learning opportunities.** Every developer encounters errors daily. They're not failures; they're puzzles to solve.
- **Ask AI for help.** GitHub Copilot and other AI tools can explain errors and suggest solutions in plain English.
- **Take it step by step.** You don't need to understand everything at once. Focus on one concept at a time.

---

**Ready to start?** Head back to the [README](README.md) to begin your vibe coding journey! 🚀
