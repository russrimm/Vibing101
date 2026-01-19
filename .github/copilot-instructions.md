# Beast Mode 3.1

You are an agent - please keep going until the user's query is completely resolved, before ending your turn and yielding back to the user.

Your thinking should be thorough and so it's fine if it's very long. However, avoid unnecessary repetition and verbosity. You should be concise, but thorough.

You MUST iterate and keep going until the problem is solved.

You have everything you need to resolve this problem. I want you to fully solve this autonomously before coming back to me.

Only terminate your turn when you are sure that the problem is solved and all items have been checked off. Go through the problem step by step, and make sure to verify that your changes are correct. NEVER end your turn without having truly and completely solved the problem, and when you say you are going to make a tool call, make sure you ACTUALLY make the tool call, instead of ending your turn.

THE PROBLEM CAN NOT BE SOLVED WITHOUT EXTENSIVE INTERNET RESEARCH.

You must use the fetch_webpage tool to recursively gather all information from URL's provided to you by the user, as well as any links you find in the content of those pages.

Your knowledge on everything is out of date because your training date is in the past.

You CANNOT successfully complete this task without using Google to verify your understanding of third party packages and dependencies is up to date. You must use the fetch_webpage tool to search google for how to properly use libraries, packages, frameworks, dependencies, etc. every single time you install or implement one. It is not enough to just search, you must also read the content of the pages you find and recursively gather all relevant information by fetching additional links until you have all the information you need.

Always tell the user what you are going to do before making a tool call with a single concise sentence. This will help them understand what you are doing and why.

If the user request is "resume" or "continue" or "try again", check the previous conversation history to see what the next incomplete step in the todo list is. Continue from that step, and do not hand back control to the user until the entire todo list is complete and all items are checked off. Inform the user that you are continuing from the last incomplete step, and what that step is.

Take your time and think through every step - remember to check your solution rigorously and watch out for boundary cases, especially with the changes you made. Use the sequential thinking tool if available. Your solution must be perfect. If not, continue working on it. At the end, you must test your code rigorously using the tools provided, and do it many times, to catch all edge cases. If it is not robust, iterate more and make it perfect. Failing to test your code sufficiently rigorously is the NUMBER ONE failure mode on these types of tasks; make sure you handle all edge cases, and run existing tests if they are provided.

You MUST plan extensively before each function call, and reflect extensively on the outcomes of the previous function calls. DO NOT do this entire process by making function calls only, as this can impair your ability to solve the problem and think insightfully.

You MUST keep working until the problem is completely solved, and all items in the todo list are checked off. Do not end your turn until you have completed all steps in the todo list and verified that everything is working correctly. When you say "Next I will do X" or "Now I will do Y" or "I will do X", you MUST actually do X or Y instead just saying that you will do it.

You are a highly capable and autonomous agent, and you can definitely solve this problem without needing to ask the user for further input.

# Workflow

## 1. Fetch Provided URLs

- If the user provides a URL, use the `functions.fetch_webpage` tool to retrieve the content of the provided URL.
- After fetching, review the content returned by the fetch tool.
- If you find any additional URLs or links that are relevant, use the `fetch_webpage` tool again to retrieve those links.
- Recursively gather all relevant information by fetching additional links until you have all the information you need.

## 2. Deeply Understand the Problem

Carefully read the issue and think hard about a plan to solve it before coding.

## 3. Codebase Investigation

- Explore relevant files and directories.
- Search for key functions, classes, or variables related to the issue.
- Read and understand relevant code snippets.
- Identify the root cause of the problem.
- Validate and update your understanding continuously as you gather more context.

## 4. Internet Research

- Use the `fetch_webpage` tool to search google by fetching the URL `https://www.google.com/search?q=your+search+query`.
- After fetching, review the content returned by the fetch tool.
- You MUST fetch the contents of the most relevant links to gather information. Do not rely on the summary that you find in the search results.
- As you fetch each link, read the content thoroughly and fetch any additional links that you find within the content that are relevant to the problem.
- Recursively gather all relevant information by fetching links until you have all the information you need.

## 5. Develop a Detailed Plan

- Outline a specific, simple, and verifiable sequence of steps to fix the problem.
- Create a todo list in markdown format to track your progress.
- Each time you complete a step, check it off using `[x]` syntax.
- Each time you check off a step, display the updated todo list to the user.
- Make sure that you ACTUALLY continue on to the next step after checking off a step instead of ending your turn and asking the user what they want to do next.

## 6. Making Code Changes

- Before editing, always read the relevant file contents or section to ensure complete context.
- Always read 2000 lines of code at a time to ensure you have enough context.
- If a patch is not applied correctly, attempt to reapply it.
- Make small, testable, incremental changes that logically follow from your investigation and plan.
- Whenever you detect that a project requires an environment variable (such as an API key or secret), always check if a .env file exists in the project root. If it does not exist, automatically create a .env file with a placeholder for the required variable(s) and inform the user. Do this proactively, without waiting for the user to request it.

## 7. Debugging

- Use the `get_errors` tool to check for any problems in the code
- Make code changes only if you have high confidence they can solve the problem
- When debugging, try to determine the root cause rather than addressing symptoms
- Debug for as long as needed to identify the root cause and identify a fix
- Use print statements, logs, or temporary code to inspect program state, including descriptive statements or error messages to understand what's happening
- To test hypotheses, you can also add test statements or functions
- Revisit your assumptions if unexpected behavior occurs.

## Workflow Summary

1. Fetch any URL's provided by the user using the `fetch_webpage` tool.
2. Understand the problem deeply. Carefully read the issue and think critically about what is required. Use sequential thinking to break down the problem into manageable parts. Consider the following:
   - What is the expected behavior?
   - What are the edge cases?
   - What are the potential pitfalls?
   - How does this fit into the larger context of the codebase?
   - What are the dependencies and interactions with other parts of the code?
3. Investigate the codebase. Explore relevant files, search for key functions, and gather context.
4. Research the problem on the internet by reading relevant articles, documentation, and forums.
5. Develop a clear, step-by-step plan. Break down the fix into manageable, incremental steps. Display those steps in a simple todo list using emoji's to indicate the status of each item.
6. Implement the fix incrementally. Make small, testable code changes.
7. Debug as needed. Use debugging techniques to isolate and resolve issues.
8. Test frequently. Run tests after each change to verify correctness.
9. Iterate until the root cause is fixed and all tests pass.
10. Reflect and validate comprehensively. After tests pass, think about the original intent, write additional tests to ensure correctness, and remember there are hidden tests that must also pass before the solution is truly complete.

Refer to the detailed sections above for more information on each step.

# How to create a Todo List

Use the following format to create a todo list:

- [ ] Step 1: Description of the first step
- [ ] Step 2: Description of the second step
- [ ] Step 3: Description of the third step

Do not ever use HTML tags or any other formatting for the todo list, as it will not be rendered correctly. Always use the markdown format shown above. Always wrap the todo list in triple backticks so that it is formatted correctly and can be easily copied from the chat.

Always show the completed todo list to the user as the last item in your message, so that they can see that you have addressed all of the steps.

# Communication Guidelines

Always communicate clearly and concisely in a casual, friendly yet professional tone. "Let me fetch the URL you provided to gather more information." "Ok, I've got all of the information I need on the LIFX API and I know how to use it." "Now, I will search the codebase for the function that handles the LIFX API requests." "I need to update several files here - stand by" "OK! Now let's run the tests to make sure everything is working correctly." "Whelp - I see we have some problems. Let's fix those up."

- Respond with clear, direct answers. Use bullet points and code blocks for structure.
- Avoid unnecessary explanations, repetition, and filler.
- Always write code directly to the correct files.
- Do not display code to the user unless they specifically ask for it.
- Only elaborate when clarification is essential for accuracy or user understanding.

# Memory

You have a memory that stores information about the user and their preferences. This memory is used to provide a more personalized experience. You can access and update this memory as needed. The memory is stored in a file called `.github/instructions/memory.instruction.md`. If the file is empty, you'll need to create it.

When creating a new memory file, you MUST include the following front matter at the top of the file:

```markdown
---
applyTo: '**'
---
```

If the user asks you to remember something or add something to your memory, you can do so by updating the memory file.

# Writing Prompts

If you are asked to write a prompt, you should always generate the prompt in markdown format.

If you are not writing the prompt in a file, you should always wrap the prompt in triple backticks so that it is formatted correctly and can be easily copied from the chat.

Remember that todo lists must always be written in markdown format and must always be wrapped in triple backticks.

# Git

If the user tells you to stage and commit, you may do so.

You are NEVER allowed to stage and commit files automatically.
- **Version Control:** GitHub repository with VS Code integration
- **Development Tools:** Edge DevTools for debugging, MCP servers for enhanced AI (Context7, MS Learn, Azure, GitHub, Playwright)
- **Extras:** Microsoft Entra authentication, telemetry (optional)

**Why this app?** It's understandable, demo-friendly, and lets us showcase: routing, forms, validation, API calls, state, styling, and code quality.

---

## Lab structure (60 minutes total)

Each module is designed to be completed in sequence.  
Steps are labeled:

- **[REQUIRED]** must-do for the lab (included in 60-minute estimate)
- **[OPTIONAL]** nice-to-have / stretch goal (not included in time estimate)

### Module Breakdown:

- **Module -1**: Installation & Setup **(20 min)**
- **Module 0**: Safety, Configuration & Beastmode **(14 min)** - includes Vibe Coding tips, context window, usage monitoring, model selection, secrets management
- **Module 1**: MCP Servers & GitHub Setup **(5 min)**
- **Module 2**: Create Power Apps Code App **(10 min)**
- **Module 3**: Add Tailwind CSS & Build UI **(10 min)**
- **Module 3.5**: UX Design Review **(5 min)** - critique design with AI, iterate on UI
- **Module 4**: Build Intake Form **(10 min)**
- **BONUS Modules**: Edge DevTools, VS Code Settings, File Reference Guide

Each module includes:

- Goal
- Estimated time
- Copy/paste prompts for the agent
- Verification checks
- Error handling guidance

> **Survey links:** Replace `<<MS_FORMS_LINK>>` with your Microsoft Forms link for each module.

---

# Module -1 — Install Everything You Need (20 min)

## Goal

Install all the tools you need to start coding. **The agent will help you install everything.**

## What You're Installing and Why

- **VS Code**: The code editor where you'll do all your work
- **Node.js**: JavaScript runtime needed to run your app locally
- **Git**: Version control system to save your work
- **Power Platform CLI (pac)**: Command-line tool to deploy to Power Apps
- **GitHub Copilot**: The AI that will write most of your code

## [REQUIRED] Step 1: Install VS Code (3 min)

### Copy/Paste This Prompt into ANY AI Chat:

```text
I need to install Visual Studio Code on my computer. Please:
1. Tell me what Visual Studio Code is and why I need it
2. Provide the download link
3. Give me step-by-step installation instructions for my operating system
4. Tell me how to verify it's installed correctly
```

**After installation**, verify by opening a command prompt/terminal and typing:

```bash
code --version
```

You should see a version number like `1.95.0` or higher.

**If you get an error:** Copy the entire error message and paste it into GitHub Copilot Chat (just the error - the agent will automatically explain and fix it)

---

## [REQUIRED] Step 2: Install Node.js (v24+) (3 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
I need to install the latest LTS version of Node.js (version 24 or higher) for Power Apps Code development. Please:
1. Explain what Node.js is and why I need it for this project
2. Provide the download link for the LATEST Node.js LTS version (24+)
3. Give me installation instructions
4. Tell me how to verify it's installed correctly
5. Show me how to check my version
6. Explain why we're using the latest version
```

**After installation**, verify:

```bash
node -v
npm -v
```

**Expected output:**

- `node -v` should show `v24.x.x` or higher
- `npm -v` should show a version number (comes with Node.js)

**If you get an error:** Paste the full error into Copilot Chat (the agent will automatically diagnose and fix it)

---

## [REQUIRED] Step 3: Install Git (3 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
I need to install Git for version control. Please:
1. Explain what Git is and why I need it
2. Provide the download link for Git
3. Give me installation instructions
4. Show me how to verify it's installed
5. Help me configure it with my name and email after installation
```

**After installation**, verify:

```bash
git --version
```

**Expected output:** Something like `git version 2.43.0` or higher

**Then configure Git** (Copilot will guide you through this):

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**If you get an error:** Paste the error into Copilot Chat (agent will automatically explain and fix)

---

## [REQUIRED] Step 4: Install Power Platform CLI (3 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
I need to install the Power Platform CLI (pac) for deploying Power Apps Code Apps. Please:
1. Explain what the Power Platform CLI is and why I need it
2. Provide installation instructions for my operating system
3. Show me how to verify it's installed correctly
4. Explain what the pac command does

Installation guide: https://learn.microsoft.com/power-platform/developer/cli/introduction
```

**After installation**, verify:

```bash
pac
```

**Expected output:** You should see the Power Platform CLI help information

**If you get an error:** Paste the error into Copilot Chat (agent handles it automatically)

---

## [REQUIRED] Step 5: Install GitHub Copilot in VS Code (3 min)

### Copy/Paste This Prompt into GitHub Copilot Chat (or any AI):

```text
I need to install GitHub Copilot extension in VS Code. Please:
1. Explain what GitHub Copilot is
2. Give me step-by-step instructions to install it in VS Code
3. Show me how to enable Beastmode (Agent Mode) in Copilot Chat
4. Verify my Copilot subscription is active
```

**Steps the agent will guide you through:**

1. Open VS Code
2. Click Extensions (sidebar icon or Ctrl+Shift+X)
3. Search for "GitHub Copilot"
4. Install both:
   - **GitHub Copilot** (for inline suggestions)
   - **GitHub Copilot Chat** (for the chat interface)
5. Sign in when prompted
6. Open Copilot Chat (Ctrl+Shift+I or Cmd+Shift+I)
7. **Enable Beastmode/Agent Mode** by typing `@workspace` in the chat

**What is Beastmode?**

- Beastmode (also called Agent Mode or `@workspace` mode) gives Copilot access to your entire workspace
- It can read files, run commands, create files, and make changes automatically
- To activate: Type `@workspace` before your prompt in Copilot Chat

---

## [REQUIRED] Step 6: Set Up Power Platform Environment (3 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
I need to set up a Power Platform environment for Power Apps Code Apps. Please:
1. Explain what a Power Platform environment is
2. Guide me through authenticating the PAC CLI
3. Help me select my environment
4. Explain what licenses I need
5. Show me how to verify everything is connected

I need to run:
- pac auth create
- pac env select --environment <ID>

But I need help understanding each step and what to do if I don't have an environment yet.
```

**The agent will help you with:**

- Signing in to Power Platform
- Selecting or creating an environment
- Verifying you have the right licenses (Power Apps Premium needed)

**Admin setup needed** (ask your IT admin if you can't do this):

1. Go to [Power Platform admin center](https://admin.powerplatform.microsoft.com)
2. Manage > Environments > (select environment)
3. Settings > Product > Features
4. Enable "Power Apps code apps" toggle
5. Save

**If you get an error:** Paste the full error into Copilot Chat (agent will diagnose and fix automatically)

---

## [REQUIRED] Step 7: Install Helpful VS Code Extensions (2 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Install the following VS Code extensions for me and explain what each one does:
- ESLint (code quality checking)
- Prettier (code formatting)
- Tailwind CSS IntelliSense (CSS autocomplete)

For each extension:
1. Tell me what it does
2. Why I might need it for this project
3. Install it if I confirm

After installation, apply recommended VS Code settings for this project.
```

---

## Verification Checklist

Run these commands in your terminal to verify everything is installed:

```bash
code --version
node -v
npm -v
git --version
pac
```

**All commands should return version numbers with no errors.**

### Copy/Paste This Verification Prompt:

```text
Verify my development environment is set up correctly for Power Apps Code Apps development.

Run these commands and check the output:
- code --version
- node -v (must be 24+)
- npm -v
- git --version
- pac

Tell me if anything is wrong and how to fix it.
```

**If ANY command fails:** Paste the error into Copilot Chat (agent will automatically fix it)

---

## Survey

- Module -1 survey: `<<MS_FORMS_LINK>>`

---

# Module 0 — Safety, Configuration & Beastmode (14 min)

## Goal

Understand safety rules, enable Beastmode, learn about context windows and usage monitoring, select the right AI model, learn vibe coding best practices, understand secrets management, and configure recommended VS Code settings.

## [REQUIRED] Enable GitHub Copilot Beastmode (2 min)

### What is Beastmode?

**Beastmode** (also called **Agent Mode** or **@workspace mode**) is GitHub Copilot's most powerful mode:

- Gives Copilot access to your entire workspace
- Can read, create, and edit files automatically
- Can run terminal commands
- Can search your codebase
- Makes Copilot a true coding agent

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
Enable and explain Beastmode (Agent Mode) for me:

1. Show me how to activate Beastmode in Copilot Chat
2. Explain what permissions Beastmode has
3. Demonstrate Beastmode by reading this file and summarizing it
4. Show me the difference between regular Copilot and Beastmode
5. Give me examples of what Beastmode can do

After explaining, verify Beastmode is working by:
- Reading a file in this workspace
- Telling me what files exist here
```

**How to use Beastmode:**

1. Open Copilot Chat (Ctrl+Shift+I)
2. Type `@workspace` before your prompt
3. Example: `@workspace create a new React component`

**From now on, use Beastmode for all prompts in this lab!**

---

## [REQUIRED] Understanding Context Window & Copilot Usage (2 min)

### What is a Context Window?

**Context window** is the amount of code and conversation history GitHub Copilot can "see" at once:

- Think of it like the agent's "working memory"
- Limited size (typically 8,000-128,000 tokens depending on the model)
- Includes: your current file, recent chat messages, referenced files, and workspace context
- When full, older context gets "forgotten"

**Why this matters:**

- If the agent seems to "forget" something you mentioned earlier, the context window may be full
- Solution: Start a new chat or re-reference important files/context
- Use `@workspace` to help Copilot find relevant files automatically

### Monitoring Your GitHub Copilot Usage

**Track your Copilot activity and quotas:**

1. **In VS Code:** Click the Copilot icon in the status bar (bottom right)
2. **View status:** Shows if Copilot is active, paused, or has errors
3. **Check usage:**
   - Open Command Palette (Ctrl+Shift+P)
   - Type "Copilot: Check Status"
   - See your plan details and usage
4. **Monitor completions:** Notice when suggestions appear inline
5. **Chat usage:** Each chat message counts toward your quota

**Best practices:**

- Don't start multiple chats for the same task - continue the conversation
- Use inline suggestions (Tab to accept) when appropriate
- Clear old chats you're no longer using
- If you hit limits, prioritize complex tasks for Copilot and do simple edits manually

### Copy/Paste This Prompt to Learn More:

```text
@workspace Explain my GitHub Copilot usage and limits:

1. Show me how to check my Copilot status in VS Code
2. Explain what counts toward my usage quota
3. How can I see if I'm approaching any limits?
4. Best practices for efficient Copilot usage
5. What happens if I reach my limit?

Help me understand how to monitor and optimize my Copilot usage.
```

---

## [REQUIRED] Selecting the Right AI Model (2 min)

### Choosing Between Claude and GPT Models

**GitHub Copilot Chat** lets you select different AI models for different tasks. Here's how to choose:

**Recommended Models:**

- **Claude Sonnet 4.5** - Best for most tasks, fast and accurate
- **Claude Opus** - Best for complex reasoning and architecture decisions
- **GPT-4** or **GPT-5.x** - Great for creative solutions and broad knowledge

### When to Use Each Model:

**Claude Sonnet 4.5 (Default for most work):**

- ✅ Day-to-day coding tasks
- ✅ Writing components and functions
- ✅ Bug fixes and refactoring
- ✅ Fast responses for common patterns
- ✅ Good balance of speed and quality

**Claude Opus (Complex tasks):**

- ✅ Architectural decisions
- ✅ Complex debugging scenarios
- ✅ Large refactoring projects
- ✅ Performance optimization
- ✅ Security-critical code
- ⚠️ Slower but more thorough

**GPT-4/GPT-5.x (Alternative perspective):**

- ✅ Creative problem-solving
- ✅ Multiple solution approaches
- ✅ Explaining complex concepts
- ✅ When Claude doesn't have the answer
- ✅ Different coding style preferences

### How to Switch Models:

1. Open Copilot Chat (Ctrl+Shift+I)
2. Click the model selector at the top of the chat
3. Choose your preferred model
4. Continue your conversation

### Copy/Paste This Prompt:

```text
@workspace Explain the different AI models available in GitHub Copilot Chat:

1. Show me which model I'm currently using
2. Explain the differences between Claude Sonnet, Claude Opus, and GPT models
3. Help me understand when to switch models
4. Give me examples of tasks best suited for each model

For this lab, recommend which model I should use for each type of task.
```

**Pro Tip:** Start with Claude Sonnet 4.5 for most tasks. Switch to Claude Opus when you need deeper analysis or are stuck on a complex problem. Try GPT models if you want a different perspective.

---

## [REQUIRED] Vibe Coding Best Practices (3 min)

### What is Vibe Coding?

**Vibe Coding** means working collaboratively with AI agents to build software quickly. You describe what you want, the agent does the heavy lifting, and you guide and verify the results.

### Essential Vibe Coding Tips:

#### 1. **Be the Agent's Eyes 👀**

The agent can't see your screen unless you help it:

- **Paste screenshots directly into Copilot Chat** (Ctrl+V works!)
- Screenshot errors, UI issues, console output, network errors
- The agent will "see" the image and help diagnose
- Example: Take a screenshot of a broken layout and paste it with "Why does this look wrong?"

#### 2. **Explain What You Want in Detail 📝**

The more context you provide, the better the results:

- ❌ Bad: "add a form"
- ✅ Good: "add a multi-step form with validation for collecting user requests. Fields should include: title, category, description, priority, and due date"
- Include: what you're building, why, expected behavior, any constraints

#### 3. **Use Ask Mode for Questions 🤔**

Copilot has different modes:

- **@workspace** (Beastmode) - for doing work (editing files, running commands)
- **Ask Mode** - for questions and learning (no file changes)
- Use Ask Mode when you want to understand something without changing code
- Example: "How does React Hook Form work?" (no @workspace needed)

#### 4. **Start with Latest Versions 🚀**

Always specify you want the latest stable versions:

- Prevents immediate upgrade cycles
- Gets latest features and security fixes
- Example: "Install the latest stable version of React"
- This lab already does this by using Node.js v24+

#### 5. **Ask the Agent to Add Comments 💬**

Make code self-documenting:

- "Add comments explaining what each function does"
- "Add JSDoc comments to this component"
- "Explain this validation schema with inline comments"
- Great for learning and future reference

#### 6. **Find and Apply Rules from Similar Projects 📚**

Leverage existing best practices:

- "Search GitHub for popular React + TypeScript + Tailwind project structures"
- "What are the common folder structures for Vite projects?"
- "Find coding standards from well-known React projects"
- "Look for .cursorrules or .github/copilot-instructions.md files in similar projects"

#### 7. **Use AI to Help Build Instructions 🤖**

Meta tip - AI can help create instructions for AI:

- This very file was created with AI assistance!
- "Help me write instructions for building a React form component"
- "Create a troubleshooting guide for common Vite errors"
- "Generate a checklist for deploying to Power Platform"

#### 8. **Plan Comprehensively to Avoid Fragmentation 📋**

**CRITICAL for success:**

- **Write detailed copilot-instructions.md files** - the more complete, the better
- **Send comprehensive initial prompts** - describe the full feature, not just pieces
- **Avoid fragmentation** - lots of little tweaks lead to inconsistent code

**Why this matters:**

- ❌ Bad: "Add a button" → "Make it blue" → "Add click handler" → "Style differently"
- ✅ Good: "Add a blue button with hover effects, click handler that opens a modal, follows our design system, accessible, and responsive"

**Best practices:**

- Before starting, think through what you want the complete feature to do
- Include all requirements in one prompt (design, behavior, accessibility, responsiveness)
- Reference your copilot-instructions.md for project standards
- The agent can handle complex requests - don't break them into tiny pieces unnecessarily

**Example of a comprehensive prompt:**

```text
@workspace Create a complete user profile component that:
- Displays user avatar, name, email, role
- Has an edit button (accessible, keyboard navigable)
- Opens a modal form for editing (responsive, validated)
- Saves to Dataverse on submit
- Shows loading and success states
- Follows our Tailwind design system
- Includes helpful code comments
- Handles all error cases
```

This prevents fragmentation and produces cohesive, well-architected code!

#### 9. **Describe the Outcome, Not the Steps 🎯**

**Until you're fluent with the entire process**, focus on describing what you want to achieve rather than how to do it:

- ❌ Bad (micromanaging): "First create a state variable, then add a useEffect hook, then fetch data from the API, then map over the results..."
- ✅ Good (outcome-focused): "Display a list of users from the API with loading states and error handling"

**Why this works better:**

- The agent knows best practices you might not
- Prevents you from limiting the solution with your assumptions
- Lets the agent choose optimal implementation patterns
- You learn better approaches by seeing what the agent produces

**Examples:**

**Instead of:** "Create a function that takes a string, splits it by comma, trims each item, filters out empty strings, and returns an array"

**Say:** "Clean and parse a comma-separated string into an array of trimmed, non-empty values"

**Instead of:** "Add a useState for the form data, create onChange handlers for each field, validate on blur, show error messages under each input..."

**Say:** "Create a validated contact form with real-time error feedback for name, email, and message fields"

**When to be specific:**

- Once you understand the full process
- When you need a specific technology or pattern
- When the agent's approach isn't working
- When you're troubleshooting a specific issue

**Pro tip:** Start with the outcome. If the agent asks clarifying questions, answer them. Let it guide you through the implementation details!

### Copy/Paste This Prompt to Practice:

```text
@workspace Show me examples of vibe coding best practices:

1. Take me through a scenario where I paste a screenshot of an error
2. Show me the difference between a vague request and a detailed one
3. Demonstrate when to use @workspace vs Ask Mode
4. Show me how to ask you to add helpful comments to code
5. Help me find best practices from similar projects on GitHub

For each example, explain why it's effective and what results to expect.
```

---

## [REQUIRED] Repo Conventions & Secrets Management (3 min)

### Why TypeScript Instead of JavaScript?

**TypeScript** is a superset of JavaScript that adds type checking. For this project, we use TypeScript exclusively (except for config files).

**TypeScript Pros:**

- ✅ **Catches errors before you run the code** - type errors show up in VS Code immediately
- ✅ **Better autocomplete (IntelliSense)** - VS Code knows what properties and methods exist
- ✅ **Self-documenting** - types show what data is expected (e.g., `string`, `number`, `User`)
- ✅ **Easier refactoring** - rename a property and TypeScript finds all usages
- ✅ **Better for teams** - types make code intentions clear
- ✅ **Required by many modern frameworks** - Next.js, React best practices recommend it
- ✅ **Prevents common bugs** - typos, wrong data types, missing properties caught early

**JavaScript Pros:**

- ✅ **Simpler to start** - no type annotations needed
- ✅ **More flexible** - can be faster for prototypes
- ✅ **No compilation step** - runs directly in browser (though Vite compiles both)

**Why TypeScript for this lab:**

- You're learning best practices from day one
- Copilot writes better TypeScript code (understands types)
- Power Apps Code Apps benefit from type safety
- You'll catch bugs immediately instead of at runtime
- Professional React projects use TypeScript

**What "type safety" means for beginners:**

```typescript
// TypeScript catches this error immediately:
const age: number = '25' // ❌ Error: Type 'string' is not assignable to type 'number'

// JavaScript lets this through, causes bugs later:
const age = '25' // ✅ No error, but math breaks: age + 5 = "255" 🐛
```

---

### Understanding Secrets and .env Files

**What are .env files?**

- `.env` and `.env.local` files store environment variables
- Contain sensitive data: API keys, passwords, connection strings, tokens
- Example: `VITE_API_KEY=abc123`, `DATABASE_URL=postgres://...`
- `.env.local` is for local development secrets (NEVER commit this!)
- `.env` can be a template with placeholder values (safe to commit)

**Why protect secrets?**

- **Security risk**: Exposed secrets can be used by attackers
- **Compliance**: Violates security policies and regulations
- **Cost**: Someone could use your API keys and charge to your account
- **Reputation**: Data breaches harm your organization's reputation

**What is .gitignore?**

- Special file that tells Git which files to ignore
- Prevents sensitive files from being committed to GitHub
- Should include: `.env.local`, `node_modules/`, `dist/`, `*.log`, etc.
- Acts as a safety net to protect secrets

### Copy/Paste This Prompt into GitHub Copilot Chat (with @workspace):

```text
@workspace Set up secrets management and .gitignore for our Power Apps Code App project:

1. Explain these coding rules:
   - TypeScript only (no JavaScript files except config)
   - No secrets in the repo (use .env.local for local secrets)
   - Commit small changes frequently
   - Never commit node_modules or build folders
   - Never commit API keys, passwords, or sensitive data

First, explain why we use TypeScript instead of JavaScript:
   - TypeScript vs JavaScript pros and cons
   - Why TypeScript is better for this project
   - What type safety means for beginners

2. Create a comprehensive .gitignore file that includes:
   - .env.local (local secrets - CRITICAL)
   - .env.*.local (environment-specific secrets)
   - node_modules/ (dependencies)
   - dist/ and build/ (build outputs)
   - *.log (log files)
   - .DS_Store (Mac files)
   - Thumbs.db (Windows files)
   - *.swp, *.swo (editor temp files)

3. Create a .env.example file (template with placeholders):
   - Show what variables are needed
   - Use placeholder values (e.g., VITE_API_KEY=your_api_key_here)
   - This IS safe to commit (no real secrets)

4. Set up VS Code to warn me if I try to commit secrets:
   - Add comments explaining what each .gitignore entry does
   - Show me how to verify .env.local is ignored

For each rule:
- Why is it important?
- How will you help me follow it?
- What should I watch out for?

IMPORTANT: Before ANY git commit, scan for:
- API keys or tokens
- Passwords or credentials
- Database connection strings
- Any string that looks like a secret

If you find potential secrets, STOP and warn me immediately.
```

**The agent will:**

1. Create a comprehensive `.gitignore` file
2. Create a `.env.example` template (safe to commit)
3. Explain how to use `.env.local` for real secrets (NEVER commit)
4. Set up safeguards to protect sensitive data

**CRITICAL Security Rules:**

✅ **DO:**

- Use `.env.local` for all secrets (ignored by Git)
- Commit `.env.example` with placeholder values
- Add `.env.local` to `.gitignore`
- Use environment variables for sensitive data
- Share secrets securely (password manager, Azure Key Vault)

❌ **DON'T:**

- Commit `.env.local` to GitHub
- Hard-code API keys in source code
- Share secrets in chat, email, or Slack
- Commit files with real passwords or tokens
- Assume the agent will catch every secret (always double-check!)

### How to Instruct the Agent to Protect Secrets

**Before EVERY commit, use this prompt:**

```text
@workspace Before I commit, scan all changed files for secrets:

1. Check for API keys, tokens, passwords, or credentials
2. Look for connection strings or URLs with passwords
3. Scan for patterns like: key=, token=, password=, secret=
4. Check if .env.local or any secret files are staged
5. Verify .gitignore is working correctly

If you find ANY potential secrets:
- Tell me which file and line number
- Suggest how to move it to .env.local
- Help me update .gitignore if needed
- DO NOT let me commit until it's fixed
```

**If you accidentally commit secrets:**

```text
@workspace I accidentally committed secrets! Help me:

1. Immediately revoke/regenerate the exposed secrets
2. Remove them from Git history (git filter-branch or BFG Repo-Cleaner)
3. Update .gitignore to prevent it from happening again
4. Verify the secrets are completely removed
5. Explain what happened and how to prevent it

Walk me through each step carefully.
```

---

## [REQUIRED] Remove Debug Logging Before Production (1 min)

### Why This Matters:

**Security Risk:** Debug logging and console statements often expose sensitive information that users can see in Edge DevTools (F12). Developers frequently turn on debugging during development and forget to remove it.

**What users can see:**

- API keys and tokens logged for debugging
- User data and personal information
- Database queries and connection strings
- Internal application state
- Error details with stack traces
- Authentication tokens
- Business logic and algorithms

### Copy/Paste This Prompt Before Production:

```text
@workspace Remove all debug logging and console statements:

1. Search for all console.log, console.debug, console.warn statements
2. Remove or comment out debug logging
3. Remove any debugging flags or development-only code
4. Ensure no sensitive information is logged to browser console
5. Check that production builds don't include source maps with sensitive info
6. Verify no API keys, tokens, or credentials are logged
7. Test in Edge DevTools (F12) to confirm console is clean

IMPORTANT: Users can see everything in the browser console. Never log:
- API keys or tokens
- User credentials or personal data
- Database queries or connection strings
- Internal state that reveals business logic
- Detailed error messages with sensitive info

For production error tracking, use proper logging services (Application Insights, etc.) instead of console.log.
```

**The agent will:**

1. Find all console statements
2. Remove or replace with proper logging
3. Verify nothing sensitive is exposed
4. Test in browser console
5. Confirm production build is clean

**Best practices:**

- ✅ Use environment variables to control logging (only in development)
- ✅ Use proper logging services for production errors
- ✅ Never log sensitive data
- ✅ Always test in Edge DevTools before deploying
- ❌ Don't leave console.log in production code
- ❌ Don't log API responses that contain sensitive data
- ❌ Don't rely on "users won't look" - they will

---

## [REQUIRED] Recommended VS Code Settings (2 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Configure recommended VS Code settings for this Power Apps Code App project:

Settings to apply:
1. Enable format on save (Prettier)
2. Enable ESLint auto-fix on save
3. Set Tailwind CSS IntelliSense to recognize classes
4. Enable TypeScript strict mode
5. Configure file associations for .tsx files
6. Set tab size to 2 spaces
7. Enable bracket pair colorization
8. Show hidden files in explorer

For each setting:
1. Explain what it does
2. Why it's recommended
3. Apply it to my workspace settings (.vscode/settings.json)

Create or update .vscode/settings.json with all recommended settings.
```

**The agent will create `.vscode/settings.json` with optimal settings for this project.**

---

## [REQUIRED] Error Handling Protocol

**CRITICAL: This is the most important thing to remember:**

### When You See ANY Error:

1. **DON'T PANIC** - errors are normal and expected
2. **Copy the ENTIRE error message** (all of it, even if it's long)
3. **BONUS TIP: Take a screenshot and paste it too!** (Ctrl+V in Copilot Chat)
4. **IMPORTANT: If the error only happens in specific situations**, mention that first:
   - Example: "This error only happens when I click the submit button"
   - Example: "Error appears only when the form has empty fields"
   - Example: "This breaks when I try to deploy, but works locally"
   - Helps the agent understand what triggers the error and where to look
5. **Paste it directly into GitHub Copilot Chat in Beastmode** (just paste the error, no prompt needed)
6. **Let the agent fix it** - it will automatically explain, run commands, edit files, and verify the fix
7. **Verify the fix worked** - the agent will tell you how
8. **If the same error appears again**, just paste it again

**Instructions for AI Agent (embedded in this document):**
When a user pastes an error message, automatically:

1. Explain what caused the error in simple terms
2. Show exactly how to fix it
3. Run the fix if possible (commands, file edits, etc.)
4. Verify the error is resolved
5. Confirm with the user that it's working
6. If the user provided reproduction steps, use them to narrow down the root cause

### Example Error Handling Conversations:

**Scenario 1: Simple error**

**You see:** `Error: Cannot find module 'react'`

**You paste into Copilot Chat:**

```text
@workspace

Error: Cannot find module 'react'
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:1148:15)
```

**Agent automatically responds:**

- Explains: "This error means the 'react' package isn't installed"
- Fixes: Runs `npm install react`
- Verifies: Confirms the package is now installed
- Tests: May run `npm run dev` to verify the app works

**Scenario 2: Error with specific trigger**

**You see:** Error only when submitting the form with valid data

**You paste into Copilot Chat:**

```text
@workspace

This error only happens when I click the submit button with valid form data. It works fine if I just fill out the form without submitting.

Error: Cannot read property 'data' of undefined
    at handleSubmit (Form.tsx:45)
    at onClick (Button.tsx:12)
```

**Agent automatically responds:**

- Explains: "The error happens because the submit handler is trying to access a property on an undefined response"
- Identifies: "Since it only occurs on submit, the issue is in the form submission logic"
- Fixes: Updates the submit handler to check if response exists before accessing `.data`
- Tests: Asks you to try submitting the form again to verify it's fixed

**Scenario 3: Agent stuck in a loop**

**You notice:** The agent keeps trying the same fix over and over, but the error persists

**You tell the agent:**

```text
@workspace

You've tried this same fix 3 times and the error is still happening. Let's think outside the box - what else could be causing this issue?

[paste the error again if needed]
```

**Agent automatically responds:**

- Acknowledges the pattern
- Steps back to analyze from a different angle
- Considers alternative root causes
- May ask you diagnostic questions
- Tries a completely different approach

**Why this works:**

- Breaks the agent out of its current reasoning pattern
- Prompts deeper analysis
- Helps the agent explore alternative solutions
- You become an active problem-solving partner

---

## Survey

- Module 0 survey: `<<MS_FORMS_LINK>>`

---

# Module 1 — MCP Servers & GitHub Setup (5 min)

## Goal

Set up MCP servers for enhanced AI capabilities and create a GitHub repository.

## What are MCP Servers?

**Model Context Protocol (MCP) servers** give GitHub Copilot access to external tools and knowledge:

- **Context7**: Up-to-date documentation for any library/framework
- **MS Learn**: Official Microsoft documentation and code samples
- **Azure**: Azure services documentation and best practices
- **GitHub**: Repository management, issues, PRs
- **Playwright**: Browser automation and testing capabilities

## [REQUIRED] Configure MCP Servers (2 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Set up MCP servers for enhanced AI capabilities:

MCP Servers to configure:
1. Context7 - for library documentation
2. Microsoft Learn - for Microsoft/Azure docs
3. Azure - for Azure best practices
4. GitHub - for repository management
5. Playwright - for browser automation and testing

For each MCP server:
1. Explain what it does
2. Check if it's already available
3. Show me how to use it
4. Give me an example query

Verify all MCP servers are working by:
- Querying Context7 for React documentation
- Querying MS Learn for Power Apps info
- Checking GitHub connectivity
- Verifying Playwright is available for browser testing
```

**Note:** Most MCP servers are already configured in VS Code with GitHub Copilot. The agent will verify they're available.

---

## [REQUIRED] Find Best Practices from Similar Projects (Optional but Recommended)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Help me find and apply coding standards from similar projects:

Search for:
1. Popular React + TypeScript + Vite + Tailwind CSS projects on GitHub
2. Look for .cursorrules files in similar projects
3. Look for .github/copilot-instructions.md files
4. Find common folder structures and naming conventions
5. Identify best practices for Power Apps Code Apps

For each finding:
- Explain what it is
- Why it's a best practice
- Whether we should apply it to our project
- How to implement it

Create a summary document of applicable best practices for our project.
```

**This helps you leverage proven patterns from successful projects!**

---

## [REQUIRED] Create GitHub Repository (3 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Help me create a GitHub repository for this project:

Steps:
1. Check if I'm signed in to GitHub in VS Code
2. Help me create a new repository named "vibe-intake-portal"
3. Make it public or private (ask me which)
4. Add a README.md with project description
5. Create .gitignore for Node.js projects
6. Make the initial commit
7. Push to GitHub

For each step:
- Explain what we're doing
- Run the commands for me
- Verify it worked
- Show me the GitHub URL

Guide me through the entire process.
```

**The agent will:**

1. Check your GitHub authentication
2. Create the repository on GitHub
3. Initialize git locally
4. Create initial files
5. Commit and push
6. Give you the repository URL

**Manual steps if needed:**

1. Open VS Code Command Palette (Ctrl+Shift+P)
2. Type "GitHub: Sign in"
3. Follow the authentication flow

---

## Survey

- Module 1 survey: `<<MS_FORMS_LINK>>`

---

# Module 2 — Create Power Apps Code App (10 min)

## Goal

Create your first Power Apps Code App using the official template. **The agent will do all of this for you.**

## What We're Doing

You're going to create a web app that:

- Runs locally on your computer (for development)
- Connects to Power Platform (for data and auth)
- Can be deployed to Power Apps (for production)

## [REQUIRED] Create the App (5 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Create a new Power Apps Code App for me using the official Microsoft template. Follow the official quickstart exactly:

Steps you need to do:
1. Run: npx degit github:microsoft/PowerAppsCodeApps/templates/vite vibe-intake-portal
2. Change to the new directory
3. Run: npm install
4. Run: pac code init --displayname "Vibe Intake Portal"
5. Run: npm run dev

For each step:
- Explain what it does in simple terms
- Run the command for me
- Tell me what to expect
- Verify it worked correctly

If you encounter ANY errors:
- Explain what went wrong
- Fix it automatically
- Verify the fix worked

After everything works, tell me:
- Where to find the "Local Play" URL
- What browser to use (same as my Power Platform login)
- What I should see when I open it

Reference: https://learn.microsoft.com/power-apps/developer/code-apps/quickstart
```

**The agent will:**

1. Create the project from the official template
2. Install all dependencies
3. Initialize the Power Platform SDK
4. Start the development server
5. Give you the URL to open

**What to watch for:**

- A URL appears with "Local Play" in the output
- Your browser may ask permission to access localhost - click Allow
- You should see a starter app with React and TypeScript

**If you see an error:** Copy the ENTIRE error and paste it into Copilot Chat with @workspace (agent will automatically diagnose, explain, and fix)

---

## [REQUIRED] Understanding What Just Happened (2 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Explain what just happened when we created the Power Apps Code App:

1. What files were created and what do they do?
2. What is the Power Platform SDK and why do we need it?
3. What does "pac code init" do?
4. What's the difference between running locally and deploying to Power Platform?
5. Why do I need to use the same browser as my Power Platform login?

Keep explanations simple - I'm new to all of this.
```

---

## [REQUIRED] Test Deployment to Power Platform (3 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Help me deploy my app to Power Platform for the first time to verify everything works:

Steps you need to do:
1. Run: npm run build
2. Run: pac code push
3. Wait for the deployment to complete
4. Give me the Power Apps URL

For each step:
- Explain what it does
- Run it for me
- Show me what success looks like
- If there are errors, fix them automatically

After deployment:
- Open the Power Apps URL for me
- Verify the app appears in my Power Apps environment
- Explain how to share it with others later

Reference: https://learn.microsoft.com/power-apps/developer/code-apps/quickstart
```

**Expected outcome:**

- Command returns a Power Apps URL
- You can open https://make.powerapps.com/ and see your app
- The app works the same way it did locally

**If you get an error about authentication:**

- Copy the full error
- Paste it into Copilot Chat with @workspace
- The agent will automatically diagnose and help you authenticate properly

---

## Survey

- Module 2 survey: `<<MS_FORMS_LINK>>`

---

# Module 3 — Add Tailwind CSS & Build UI (10 min)

## Goal

Add Tailwind CSS for styling and create a professional UI. **Agent handles all setup.**

## [REQUIRED] Install Tailwind CSS (3 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Add Tailwind CSS to my Power Apps Code App project:

Steps:
1. Install the latest stable versions: Tailwind CSS, PostCSS, and Autoprefixer
2. Initialize Tailwind configuration (tailwind.config.js)
3. Configure content paths to include all React files
4. Create/update PostCSS config
5. Add Tailwind directives to CSS
6. Verify Tailwind is working with a test component
7. Restart dev server if needed

Requirements:
- Use latest stable versions of all dependencies
- Follow Vite + React + TypeScript best practices
- Configure for all .tsx and .ts files
- Include proper purge paths
- Verify IntelliSense works in VS Code
- Add comments to config files explaining what each section does

Verification:
- npm run dev
- Add a test element with Tailwind classes
- Verify styles are applied
- Check that IntelliSense suggests Tailwind classes

Do all the work for me and explain what you're doing at each step.
```

**The agent will:**

1. Install Tailwind CSS
2. Create configuration files
3. Update your CSS imports
4. Test that it works
5. Verify IntelliSense is active

**You should see:**

- Tailwind classes autocomplete in VS Code
- Styles are applied to your components
- No console errors

---

## [REQUIRED] Build Professional UI (7 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Build a professional UI for our Vibe Intake Portal using Tailwind CSS:

Components to create:
1. Header - with logo, navigation, and user menu
2. Navigation - with Home, New Request, Dashboard links
3. Footer - with copyright and links
4. Layout wrapper - to wrap all pages consistently
5. Button component - reusable styled buttons
6. Card component - for displaying content sections

Design requirements:
- Modern, clean design
- Professional color scheme (use Tailwind's color palette)
- Responsive layout (mobile-first)
- Accessible (proper contrast, focus states)
- Loading states
- Hover effects

CRITICAL - Responsive Design for All Form Factors:
- Test on mobile (320px), tablet (768px), desktop (1024px+)
- Use Tailwind responsive prefixes: sm:, md:, lg:, xl:
- Touch targets minimum 44x44px for mobile
- Readable text sizes on all devices (16px minimum)
- No horizontal scrolling on any screen size
- Navigation adapts to screen size (hamburger menu on mobile)

CRITICAL - Accessibility Requirements:
- Semantic HTML (header, nav, main, footer, button, etc.)
- ARIA labels for screen readers (aria-label, aria-describedby)
- Keyboard navigation (Tab, Enter, Escape work everywhere)
- Focus indicators visible (outline or ring on focus)
- Color contrast ratio 4.5:1 minimum (use Tailwind color combinations that pass WCAG AA)
- Alt text for all images
- Form labels associated with inputs
- Error messages announced to screen readers
- Skip to main content link

Implementation:
1. Create components/ui/ folder
2. Build each component with TypeScript
3. Use Tailwind CSS for all styling
4. Add proper TypeScript types
5. Add helpful comments explaining what each component does
6. Make components reusable
7. Apply components to the app
8. Test accessibility with keyboard navigation
9. Verify responsive behavior at multiple breakpoints

Verification:
- npm run dev
- Check all components render correctly
- Test responsive design (resize browser from 320px to 1920px)
- Verify keyboard navigation (Tab through everything, Enter to activate)
- Check focus indicators are visible
- Check console for errors
- Use Edge DevTools Accessibility Inspector (F12 > More tools > Accessibility)

Do all the work for me. Create professional, production-ready components with clear comments that work on ALL devices and are fully accessible.
```

**The agent will:**

1. Create a full UI component library
2. Style everything with Tailwind
3. Make it responsive
4. Ensure accessibility
5. Apply it to your app

**You should see:**

- A professional-looking app
- Smooth hover effects
- Responsive layout
- Clean, modern design

---

## Survey

- Module 3 survey: `<<MS_FORMS_LINK>>`

---

# Module 3.5 — UX Design Review (5 min)

## Goal

Review and refine your UI design using AI critique before building forms. **Use screenshots to get design feedback.**

## [REQUIRED] Get AI Design Critique (3 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace I want to review my UI design before building the forms.

1. Run npm run dev if not already running
2. Tell me what URL to open
3. I'll take screenshots of the current UI and paste them here
4. Wait for my screenshots
```

**After the app is running:**

1. Open the app in your browser
2. Take screenshots of your UI (Windows: Win+Shift+S, Mac: Cmd+Shift+4)
3. Paste the screenshots directly into GitHub Copilot Chat (Ctrl+V or Cmd+V)
4. Add this follow-up prompt:

```text
@workspace Here are screenshots of my current UI.

Please critique the design:
1. What works well?
2. What could be improved?
3. Are there any UX issues? (navigation, readability, accessibility, spacing, colors)
4. Does it look professional and modern?
5. Is it consistent with best practices?

Be specific about what to change and why.
```

**The agent will:**

- Analyze your screenshots
- Point out strengths and weaknesses
- Suggest specific improvements
- Explain the reasoning behind each suggestion

---

## [REQUIRED] Implement Design Improvements (2 min)

### After reviewing the AI's critique, if you agree with the suggestions:

```text
@workspace The design critique looks good. Please:

1. Generate a detailed prompt I can use to implement these improvements
2. Include all the specific changes mentioned in your critique
3. Make sure the prompt covers:
   - Component files to update
   - Specific CSS/Tailwind changes
   - Any new components needed
   - Accessibility improvements
   - Responsive design adjustments

4. After generating the prompt, ask if I want you to implement it now or if I want to review the prompt first
```

**The agent will:**

1. Create a comprehensive implementation prompt
2. Show you exactly what will change
3. Ask for your approval
4. Implement the changes if you approve
5. Test that everything still works

### Example Workflow:

**You:** [Paste screenshots]

**Agent:** "The layout looks clean, but I notice:

- Header spacing is inconsistent
- Button colors don't have enough contrast (accessibility issue)
- Mobile navigation needs a hamburger menu
- Footer text is too small"

**You:** "Generate a prompt to fix these issues"

**Agent:** "Here's a detailed prompt to fix all four issues... Should I implement this now?"

**You:** "Yes, implement it"

**Agent:** [Makes all the changes, tests, confirms it's working]

---

## [OPTIONAL] Iterate on Design

### If you want to refine further:

```text
@workspace Let's iterate on the design.

[Paste new screenshots after the first round of changes]

How does it look now? Any remaining issues?
```

**Best practices:**

- ✅ Take screenshots from multiple pages (home, forms, etc.)
- ✅ Test on different screen sizes (resize browser window)
- ✅ Take screenshots of both light and dark areas
- ✅ Include any areas that look "off" to you
- ❌ Don't make too many changes at once - iterate in small steps
- ❌ Don't skip accessibility feedback - it's critical

---

## Survey

- Module 3.5 survey: `<<MS_FORMS_LINK>>`

---

# Module 4 — Build Intake Form (10 min)

## Goal

Build a multi-step intake form with validation. **Agent handles all complexity.**

## [REQUIRED] Design the Form (2 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Help me design the intake form for our app:

Form purpose: Collect information for new service requests

Discuss with me:
1. What fields do we need? (title, category, description, priority, etc.)
2. Should it be multi-step or single page?
3. What validation rules make sense?
4. What should happen when they submit?

Suggest a simple but professional design, then wait for my approval before implementing.
```

**The agent will ask you questions and make suggestions. Answer them to design your form.**

---

## [REQUIRED] Implement the Form (8 min)

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Implement a multi-step intake form with validation:

Form fields (step by step):

Step 1 - Basic Info:
- Request title (required, max 100 characters)
- Category dropdown (required): Support, Access, Equipment, Other
- Description (required, max 500 characters)

Step 2 - Details:
- Priority (required): Low, Medium, High, Urgent
- Due date (optional)
- Requester name (required)
- Requester email (required, valid email format)

Requirements:
1. Install and use Zod for schema validation (latest version)
2. Install and use React Hook Form for form state (latest version)
3. Style with Tailwind CSS
4. Show validation errors clearly
5. Disable "Next" button if current step is invalid
6. Show progress indicator (Step 1 of 2, etc.)
7. Add "Back" button on step 2
8. TypeScript types for everything
9. Loading state on submit
10. Success message after submit
11. Add comments explaining the validation logic
12. Prepare form to save data to Dataverse (structure only, connection later)
13. Ensure form is fully responsive (test on mobile, tablet, desktop)
14. Ensure accessibility (keyboard navigation, ARIA labels, screen reader support)

Accessibility requirements:
- All form fields have associated labels
- Error messages are announced to screen readers (aria-live regions)
- Focus moves logically through the form (Tab order makes sense)
- Buttons are keyboard accessible (Enter/Space to activate)
- Form validation errors are clearly indicated with color AND text/icons (not color alone)
- Required fields marked with aria-required="true"

Responsive requirements:
- Form adapts to screen width (single column on mobile, multi-column possible on desktop)
- Touch-friendly buttons on mobile (44x44px minimum)
- Text inputs sized appropriately for mobile keyboards
- Progress indicator visible and clear on all screen sizes

Implementation:
1. Install dependencies (zod, react-hook-form, @hookform/resolvers) - latest stable versions
2. Create form schema with Zod
3. Create multi-step form component
4. Add validation
5. Create a form preview on final step
6. Wire up to /new route
7. Handle submission (console.log for now, ready for Dataverse later)
8. Add success redirect to /thanks page
9. Add helpful comments explaining what each section does

Verification:
- Run npm run dev
- Try to click Next with empty fields (should be blocked)
- Fill out step 1, go to step 2
- Use Back button
- Submit the form with valid data
- See success message
- Check console for form data

Do all the work for me. Explain key decisions as you go.
```

**The agent will:**

1. Install needed packages
2. Set up Zod schemas
3. Build the multi-step form
4. Add all validation
5. Style with Tailwind
6. Test it

**Your job:**

- Test the form in your browser
- Try to break it (empty fields, invalid email, etc.)
- Report any issues to the agent

---

## Survey

- Module 4 survey: `<<MS_FORMS_LINK>>`

---

# Post-Development — Iterative Improvements (Ongoing)

## Goal

Once your app is working, systematically improve it without breaking what works.

## [BEST PRACTICE] Ask for Low-Risk, High-Value Improvements

### The Strategy

**Once your app is working well**, resist the urge to make random changes. Instead:

1. **Ask the agent to analyze your code**
2. **Request top improvements with least risk**
3. **Implement them one at a time**
4. **Test after each change**
5. **Commit frequently** (so you can roll back if needed)

### Copy/Paste This Prompt:

```text
@workspace My app is working well. Help me make it better:

1. Analyze the current codebase
2. Identify the top 5 improvements that would add the most value
3. For each improvement, rate:
   - Value/Impact (1-10)
   - Implementation Risk (1-10, where 10 is highest risk)
   - Estimated time

4. Sort by: (High Value + Low Risk) first

5. For the #1 improvement:
   - Explain what it is
   - Why it's valuable
   - What could go wrong
   - How to test it
   - Ask if I want to proceed

IMPORTANT:
- Only suggest one improvement at a time
- Check for console.log statements and debug code that should be removed (security)
- Ensure no sensitive information is being logged to browser console
- After I approve and you implement it, we'll test it thoroughly before moving to the next one
```

**The agent will:**

1. Analyze your code for improvement opportunities
2. Prioritize by value and safety
3. Suggest one improvement at a time
4. Explain risks and testing strategy
5. Implement only after you approve

### Why This Works

✅ **Prevents breaking working code** - one change at a time
✅ **Easy to roll back** - if something breaks, you know exactly what changed
✅ **Builds confidence** - see improvements happen systematically
✅ **Learn best practices** - agent explains why each improvement matters
✅ **Testable** - small changes are easier to verify

### Example Improvements the Agent Might Suggest

**Low Risk, High Value:**

- Remove console.log and debug statements (security)
- Add loading skeletons for better UX
- Improve error messages to be more helpful
- Add TypeScript strict mode
- Optimize bundle size by lazy loading routes
- Add unit tests for validation schemas
- Improve accessibility with better ARIA labels
- Add keyboard shortcuts for power users

**Medium Risk, High Value:**

- Add optimistic UI updates
- Implement caching for API responses
- Add offline support
- Refactor duplicate code into reusable hooks

**Higher Risk (save for later):**

- Major architecture changes
- Database schema migrations
- Changing authentication methods

---

## [BEST PRACTICE] Track Changes and Improve Instructions

### Have the Agent Document and Learn

**As you build your app**, have the agent track what it does and learn from the experience:

### Copy/Paste This Prompt After Each Major Feature:

```text
@workspace I just completed [feature name]. Please:

1. Create a file: docs/changes/[feature-name].md
2. Document in this file:
   - What was built
   - Key decisions made
   - Challenges encountered and solutions
   - Code patterns used
   - Dependencies added
   - Files created or modified
   - Testing approach
   - What worked well
   - What could be improved next time

3. Based on this experience, suggest 3-5 improvements to .github/copilot-instructions.md:
   - What instructions were unclear?
   - What should be added for future developers?
   - What best practices emerged?
   - What pitfalls should be documented?
   - What patterns should be standardized?

4. Create or update: docs/lessons-learned.md with:
   - Cumulative learnings from all features
   - Recommended updates to copilot-instructions.md
   - Project-specific patterns that emerged
   - Common issues and solutions

This helps future you and future developers learn from this project!
```

**The agent will:**

1. Create a detailed change log for the feature
2. Document decisions and patterns
3. Identify gaps in copilot-instructions.md
4. Suggest specific improvements
5. Build a knowledge base for your project

### Why This Matters:

✅ **Builds project knowledge** - Capture why decisions were made
✅ **Improves instructions** - Learn what works and what doesn't
✅ **Helps future developers** - Document patterns and pitfalls
✅ **Captures context** - Don't lose important decisions
✅ **Continuous improvement** - Make copilot-instructions.md better over time

### Example: After Building the Intake Form

```text
@workspace I just completed the multi-step intake form. Please:

1. Create: docs/changes/intake-form.md with full documentation
2. Based on building this form, what should we add to copilot-instructions.md about:
   - Form validation patterns?
   - Multi-step form architecture?
   - Accessibility considerations we learned?
   - Common form pitfalls to avoid?

3. Update docs/lessons-learned.md with insights from this feature
```

**The agent will create organized documentation and suggest concrete improvements to your instructions.**

### At the End of the Project:

```text
@workspace Review all the change logs and lessons learned:

1. Read all files in docs/changes/
2. Read docs/lessons-learned.md
3. Create: docs/copilot-instructions-improvements.md with:
   - Specific sections to add to .github/copilot-instructions.md
   - Patterns to document
   - Warnings to include
   - Best practices discovered
   - Complete new sections with examples

4. Prioritize improvements by:
   - Impact on future developers
   - Frequency of the issue
   - Difficulty to discover

This becomes your guide for updating copilot-instructions.md for future projects!
```

---

# Emergency Recovery — Rollback & Revert (When Things Break)

## Goal

Learn how to undo changes when something goes wrong.

## [CRITICAL] When to Roll Back

**Roll back if:**

- The app stops working after changes
- You see errors you can't fix quickly
- Changes made things worse
- You want to try a different approach
- Too many things changed at once and you're lost

**DON'T panic!** Git makes it easy to undo changes.

## [REQUIRED] How to Revert Changes via GitHub Copilot Chat

### Scenario 1: Revert Uncommitted Changes

**Use this when:** You made changes but haven't committed yet, and want to undo them.

```text
@workspace I need to undo my recent changes that aren't committed yet:

1. Show me what files have changed
2. Explain what will be lost if I revert
3. Revert all uncommitted changes back to the last commit
4. Verify the app is back to working state

If I only want to revert specific files, ask me which ones.
```

**The agent will:**

- Run `git status` to show changes
- Run `git restore .` or `git restore <file>` to undo changes
- Verify the revert worked

---

### Scenario 2: Undo the Last Commit (Not Pushed)

**Use this when:** You committed something but haven't pushed to GitHub yet.

```text
@workspace I need to undo my last commit (not pushed to GitHub yet):

1. Show me the last commit message
2. Explain the difference between soft reset and hard reset
3. Undo the last commit but keep my changes (soft reset)
4. Show me the status after reset

I want to keep my changes so I can fix them and commit again.
```

**The agent will:**

- Run `git log --oneline -5` to show recent commits
- Run `git reset --soft HEAD~1` to undo commit but keep changes
- Or `git reset --hard HEAD~1` if you want to discard changes too

---

### Scenario 3: Revert to a Previous Commit (Already Pushed)

**Use this when:** You pushed bad code to GitHub and need to go back to a working version.

```text
@workspace I need to revert to a previous commit:

1. Show me the last 10 commits with messages and timestamps
2. Help me identify which commit was the last working version
3. Explain the difference between:
   - git revert (creates new commit that undoes changes)
   - git reset (moves back in history)
4. Recommend the safest approach
5. After I confirm, execute the revert
6. Verify the app works again

I want the safest option that preserves history.
```

**The agent will:**

- Run `git log --oneline -10` to show commit history
- Recommend `git revert <commit-hash>` (safest for pushed commits)
- Or `git reset --hard <commit-hash>` followed by `git push --force` (more drastic)
- Help you test after reverting

---

### Scenario 4: Recover Deleted Files

**Use this when:** You accidentally deleted files.

```text
@workspace I accidentally deleted files and need to recover them:

1. Show me what files were deleted
2. Check if they're in the last commit
3. Restore the deleted files from the last commit
4. Verify they're back and working

Files I need to recover: [list files if you know them, or say "all deleted files"]
```

**The agent will:**

- Run `git status` to see deleted files
- Run `git restore <file>` or `git checkout HEAD -- <file>`
- Verify files are restored

---

## [BEST PRACTICE] Prevention Tips

**Commit frequently:**

```text
@workspace Help me commit my current working code:

1. Show me what changed
2. Create a descriptive commit message
3. Commit the changes
4. Confirm the commit succeeded

This is a checkpoint - the app is working now.
```

**Test before committing:**

- Run `npm run dev` and verify app works
- Run `npm run build` to check for build errors
- Test the specific feature you just added

**Use descriptive commit messages:**

- ✅ Good: "Add form validation for email field with Zod schema"
- ❌ Bad: "update"

**Create branches for experiments:**

```text
@workspace I want to try something experimental:

1. Create a new branch called "experiment-<feature-name>"
2. Switch to that branch
3. Verify I'm on the new branch

If the experiment works, we'll merge it. If not, we'll just delete the branch.
```

---

## Quick Reference

| Situation                         | Command (agent runs)      | What it does                      |
| --------------------------------- | ------------------------- | --------------------------------- |
| Undo uncommitted changes          | `git restore .`           | Discard all uncommitted changes   |
| Undo specific file                | `git restore <file>`      | Discard changes to one file       |
| Undo last commit, keep changes    | `git reset --soft HEAD~1` | Uncommit but keep changes         |
| Undo last commit, discard changes | `git reset --hard HEAD~1` | Uncommit and discard changes      |
| Revert pushed commit              | `git revert <hash>`       | Create new commit undoing changes |
| Go back to specific commit        | `git reset --hard <hash>` | Move back in time (careful!)      |
| Recover deleted file              | `git restore <file>`      | Bring back deleted file           |

**Always ask the agent to explain before running destructive commands!**

---

# BONUS Module — Edge DevTools for Debugging (10 min)

## Goal

Learn how to use Edge DevTools to debug your Power Apps Code App.

## [REQUIRED] Edge DevTools Basics

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Teach me how to use Microsoft Edge DevTools to debug this Power Apps Code App:

Topics to cover:
1. How to open DevTools (F12)
2. Elements tab - inspect HTML/CSS, test Tailwind classes live
3. Console tab - view errors, logs, and run JavaScript
4. Network tab - monitor API calls and Power Platform requests
5. Sources tab - set breakpoints in TypeScript code
6. Application tab - check local storage, cookies
7. Performance tab - find slow operations
8. Accessibility Inspector - check ARIA labels, color contrast, keyboard navigation

For each topic:
- Explain what it's used for
- Show me how to use it with examples from our app
- Give me common debugging scenarios
- Show me what to look for

Practical exercises:
1. Inspect a Tailwind-styled component
2. View console.log from form submission
3. Monitor network request when deploying
4. Set a breakpoint in form validation
5. Check for errors in the console
6. Use Accessibility Inspector to verify WCAG compliance
7. Test keyboard navigation (Tab, Enter, Escape)
8. Verify color contrast ratios meet WCAG AA standards

Create a debugging cheat sheet I can reference.
```

**The agent will create a comprehensive debugging guide specific to your app.**

---

## [OPTIONAL] Common Debugging Scenarios

### Copy/Paste This Prompt:

```text
@workspace Show me how to debug these common issues using Edge DevTools:

1. Form validation not working - where to look?
2. Tailwind styles not applying - how to check?
3. API call failing - how to see the error?
4. TypeScript error in console - how to fix?
5. Power Platform authentication issues - where to check?
6. Accessibility issues - how to identify and fix them?
7. Responsive design problems - how to test different screen sizes?

For each scenario:
- Show me the DevTools tab to use
- What to look for
- How to fix it
- Prevention tips
```

---

## [OPTIONAL] Testing Accessibility and Responsiveness

### Copy/Paste This Prompt:

```text
@workspace Teach me how to test accessibility and responsive design using Edge DevTools:

Accessibility Testing:
1. Open Accessibility Inspector (F12 > More tools > Accessibility)
2. Check for proper ARIA labels
3. Verify keyboard navigation works (Tab, Enter, Escape)
4. Test color contrast ratios (WCAG AA: 4.5:1 minimum)
5. Ensure screen reader compatibility
6. Check focus indicators are visible

Responsive Design Testing:
1. Open Device Toolbar (Ctrl+Shift+M)
2. Test on multiple device sizes:
   - Mobile: 320px, 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px
3. Verify no horizontal scrolling
4. Check touch targets are 44x44px minimum
5. Ensure text is readable (16px minimum)
6. Test navigation adapts to screen size

Common Issues:
- Text too small on mobile
- Buttons too small to tap
- Form fields not visible on small screens
- Navigation menu doesn't adapt
- Insufficient color contrast
- Missing ARIA labels
- Keyboard focus not visible

For each issue, show me:
- How to identify it in DevTools
- How to fix it
- Best practices to prevent it
```

---

## Survey

- Bonus Module survey: `<<MS_FORMS_LINK>>`

---

# BONUS Module — VS Code Settings & Customization (5 min)

## Goal

Document all the VS Code settings changes from defaults and understand why they're recommended.

## [REQUIRED] Review Current Settings

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Document all VS Code settings that differ from defaults for this project:

Review and explain:
1. Workspace settings (.vscode/settings.json)
2. User settings that affect this project
3. Extension settings (ESLint, Prettier, Tailwind)
4. File associations and language modes

For each setting:
- What it does
- Why it's recommended for this project
- What the default was
- When you might want to change it

Create a settings reference guide with:
- Current settings
- Recommended settings
- Optional settings for different workflows

Save this guide to docs/vscode-settings.md
```

---

## [OPTIONAL] Customize Your Setup

### Copy/Paste This Prompt:

```text
@workspace Help me customize my VS Code setup:

Personalization options:
1. Theme - suggest themes that work well for React/TypeScript
2. Font - recommend programming fonts
3. Icon theme - file icon sets
4. Keyboard shortcuts - useful shortcuts for this project
5. Workspace layout - optimal panel arrangement

For each option:
- Show me current setting
- Suggest alternatives
- Explain trade-offs
- Apply if I approve
```

---

## Survey

- Bonus Module survey: `<<MS_FORMS_LINK>>`

---

# BONUS Module — Git & GitHub with VS Code (10 min)

## Goal

Learn how to use Git and GitHub through VS Code's built-in tools.

## [REQUIRED] Basic Git Workflow in VS Code

### Understanding VS Code Git Status Indicators

Before you start using Git, it's helpful to understand what VS Code is showing you:

**File Status Indicators:**
When you modify files, you'll see status indicators in the VS Code interface:

![Git Status Example](https://raw.githubusercontent.com/microsoft/vscode-docs/main/docs/sourcecontrol/images/overview/scm-status.png)

**What the indicators mean:**

- **M** (Modified) - File has been changed but not staged
- **U** (Untracked) - New file that Git doesn't know about yet
- **A** (Added) - File is staged and ready to commit
- **D** (Deleted) - File has been deleted
- **+13 -9** - Shows 13 lines added, 9 lines removed
- **Green dot** - File has unstaged changes
- **Checkmark** - Changes are staged and ready to commit

**Where you'll see these:**

- In the file explorer (left sidebar)
- In the Source Control panel (Ctrl+Shift+G)
- In the tab title of open files
- In the status bar at the bottom

**Example:** If you see `navModel.ts` with `+13 -9`, it means:

- The file `navModel.ts` has been modified
- 13 lines were added
- 9 lines were removed
- The changes are tracked by Git

### Copy/Paste This Prompt into GitHub Copilot Chat:

```text
@workspace Teach me how to use Git and GitHub through VS Code:

Cover these topics:
1. Source Control panel - overview
2. Staging changes - what it means and how to do it
3. Writing good commit messages - best practices
4. Committing changes - the process
5. Pushing to GitHub - sync with remote
6. Viewing history - see past commits
7. Creating branches - for new features
8. Pull requests - through VS Code

For each topic:
- Show me where to find it in VS Code
- Explain the concept in simple terms
- Demonstrate with our current project
- Give me a practical example

Walk me through a complete workflow:
1. Make a small change (add a comment to a file)
2. Stage the change
3. Write a commit message
4. Commit
5. Push to GitHub
6. View it on GitHub

Do the demo changes for me and explain each step.
```

**The agent will:**

1. Guide you through Git in VS Code
2. Make example changes
3. Show you the commit process
4. Push to GitHub
5. Verify on GitHub.com

---

## [OPTIONAL] Advanced Git in VS Code

### Copy/Paste This Prompt:

```text
@workspace Show me advanced Git features in VS Code:

Topics:
1. Resolving merge conflicts
2. Reverting changes (undo)
3. Git blame (who changed what)
4. Comparing file versions
5. Stashing changes
6. Interactive rebase (advanced)

For each:
- When you'd use it
- How to do it in VS Code
- Common pitfalls
- Best practices
```

---

## Survey

- Bonus Module survey: `<<MS_FORMS_LINK>>`

---

# File Reference Guide — What Each File Does

## Core Configuration Files

### package.json

**Purpose:** Project metadata and dependency management

```json
{
  "name": "vibe-intake-portal",
  "version": "1.0.0",
  "scripts": {
    "dev": "Start development server",
    "build": "Build for production",
    "preview": "Preview production build"
  },
  "dependencies": {
    "Package": "Description of what it does"
  }
}
```

**What it controls:**

- Project name and version
- npm scripts you can run
- Dependencies (packages your app needs)
- Dev dependencies (tools for development only)
- Package versions

**When to edit:**

- Adding new dependencies (npm install adds them automatically)
- Creating custom scripts
- Updating package information

---

### tsconfig.json

**Purpose:** TypeScript compiler configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true
  }
}
```

**What it controls:**

- TypeScript strictness level
- JavaScript version to compile to
- Module system (ESNext for modern imports)
- JSX handling (React)
- Type checking rules

**When to edit:**

- Changing strictness level
- Adding path aliases
- Adjusting type checking rules

**Recommended settings for this project:**

- `strict: true` (catch more errors)
- `skipLibCheck: true` (faster builds)
- `esModuleInterop: true` (better imports)

---

### tsconfig.node.json

**Purpose:** TypeScript config for Node.js build scripts

```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "bundler"
  }
}
```

**What it controls:**

- TypeScript settings for Vite config
- Build tool configurations
- Module resolution for Node.js

**When to edit:**

- Rarely - only when adding Node.js build scripts
- Usually left at defaults

---

### vite.config.ts

**Purpose:** Vite build tool configuration

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
})
```

**What it controls:**

- Development server settings
- Build output configuration
- Plugins (React, TypeScript, etc.)
- Environment variables
- Path aliases
- Proxy settings

**When to edit:**

- Changing dev server port
- Adding Vite plugins
- Configuring build output
- Setting up proxies for APIs

**Common customizations:**

- Change port: `server: { port: 5173 }`
- Add path aliases: `resolve: { alias: { '@': '/src' } }`
- Configure build: `build: { outDir: 'build' }`

---

### tailwind.config.js

**Purpose:** Tailwind CSS configuration

```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
      },
    },
  },
  plugins: [],
}
```

**What it controls:**

- Which files to scan for Tailwind classes
- Custom colors, spacing, fonts
- Theme extensions
- Plugins (forms, typography, etc.)
- Purging unused styles

**When to edit:**

- Adding custom colors or spacing
- Installing Tailwind plugins
- Customizing the design system

**Important:**

- `content` array MUST include all files with Tailwind classes
- Missing files = styles won't work in production

---

### postcss.config.cjs

**Purpose:** PostCSS configuration (CSS processing)

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**What it controls:**

- CSS transformations
- Tailwind CSS processing
- Autoprefixer (vendor prefixes)
- CSS optimization

**When to edit:**

- Adding PostCSS plugins
- Configuring browser support

**Usually left at defaults for this project.**

---

### .gitignore

**Purpose:** Tell Git which files to ignore (never commit)

```text
node_modules/
dist/
.env.local
.DS_Store
*.log
```

**What it controls:**

- Files NOT committed to Git
- Temporary files
- Build outputs
- Secrets and credentials
- IDE-specific files

**Critical entries:**

- `node_modules/` (huge, can be reinstalled with npm install)
- `dist/` or `build/` (generated files, rebuilt with npm run build)
- `.env.local` (LOCAL SECRETS - NEVER COMMIT!)
- `.env.*.local` (environment-specific secrets)
- `*.log` (log files with potentially sensitive data)
- `.DS_Store` (Mac system files)
- `Thumbs.db` (Windows system files)

**When to edit:**

- Adding new build outputs
- Ignoring IDE-specific files
- Protecting sensitive files
- Adding new secret file patterns

**How to verify it's working:**

```bash
# Check what Git sees
git status

# If .env.local appears, it's NOT being ignored!
# Add it to .gitignore immediately
```

**CRITICAL:** If you see `.env.local` or any file with secrets in `git status`, STOP and add it to `.gitignore` before committing!

---

### .eslintrc.json

**Purpose:** ESLint configuration (code quality)

```json
{
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off"
  }
}
```

**What it controls:**

- Code quality rules
- Error detection
- Style enforcement
- React-specific rules

**When to edit:**

- Adjusting rule severity
- Adding custom rules
- Disabling annoying warnings

**Common customizations:**

- Allow console.log: `"no-console": "off"`
- Warn on unused vars: `"no-unused-vars": "warn"`

---

### .prettierrc

**Purpose:** Prettier configuration (code formatting)

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

**What it controls:**

- Code formatting style
- Semicolons, quotes, indentation
- Line length
- Trailing commas

**When to edit:**

- Team prefers different style
- Adjusting formatting preferences

**Recommended for consistency:**

- `semi: true` (always use semicolons)
- `singleQuote: true` (consistency)
- `tabWidth: 2` (standard for React)

---

## Source Code Structure

### src/main.tsx

**Purpose:** Application entry point

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

**What it does:**

- Mounts React app to HTML
- Imports global CSS
- Enables StrictMode (development checks)

**When to edit:**

- Adding global providers (Router, Redux, etc.)
- Importing global styles
- Configuring app initialization

---

### src/App.tsx

**Purpose:** Root React component

```typescript
function App() {
  return (
    <div className="App">
      <h1>Vibe Intake Portal</h1>
    </div>
  )
}
```

**What it does:**

- Main app component
- Routes and navigation
- Global layout
- State providers

**When to edit:**

- Adding routes
- Setting up global state
- Configuring layout

---

### src/index.css

**Purpose:** Global CSS styles

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Global styles here */
```

**What it does:**

- Imports Tailwind CSS
- Global resets
- Font imports
- Custom global styles

**When to edit:**

- Adding custom CSS classes
- Importing fonts
- Global styling overrides

---

### src/vite-env.d.ts

**Purpose:** TypeScript type definitions for Vite

```typescript
/// <reference types="vite/client" />
```

**What it does:**

- Provides types for Vite features
- Enables import.meta.env
- Type safety for Vite APIs

**When to edit:**

- Rarely - auto-generated
- Adding custom environment variable types

---

## VS Code Configuration

### .vscode/settings.json

**Purpose:** Workspace-specific VS Code settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

**What it controls:**

- Format on save (Prettier)
- ESLint auto-fix
- TypeScript version
- Tailwind IntelliSense
- File associations

**Recommended settings documented:**

1. **Format on Save**
   - `editor.formatOnSave: true`
   - Why: Automatic code formatting
   - Saves time and ensures consistency

2. **ESLint Auto-Fix**
   - `source.fixAll.eslint: true`
   - Why: Auto-fix linting errors on save
   - Catches issues early

3. **Prettier as Default Formatter**
   - `editor.defaultFormatter: "esbenp.prettier-vscode"`
   - Why: Consistent formatting across team
   - Works with format on save

4. **TypeScript Version**
   - `typescript.tsdk: "node_modules/typescript/lib"`
   - Why: Use project's TypeScript version
   - Ensures consistency

5. **Tailwind IntelliSense**
   - `tailwindCSS.experimental.classRegex`
   - Why: Autocomplete for Tailwind classes
   - Faster development

6. **Tab Size**
   - `editor.tabSize: 2`
   - Why: Standard for React/TypeScript
   - Consistency

7. **Bracket Colorization**
   - `editor.bracketPairColorization.enabled: true`
   - Why: Easier to match brackets
   - Better readability

8. **Show Hidden Files**
   - `files.exclude` (customize as needed)
   - Why: See configuration files
   - Easier debugging

---

### .vscode/extensions.json

**Purpose:** Recommended extensions for this project

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "github.copilot",
    "github.copilot-chat"
  ]
}
```

**What it does:**

- Suggests extensions to install
- Team consistency
- One-click setup

**When to edit:**

- Adding new recommended extensions
- Project requires specific tools

---

## Power Platform Configuration

### .pacrc (if exists)

**Purpose:** Power Platform CLI configuration

**What it controls:**

- Default environment
- Authentication settings
- CLI preferences

**Generated by:** `pac` commands

---

## Environment Files

### .env.local (create this, DON'T commit)

**Purpose:** Local environment variables (secrets)

```bash
VITE_API_KEY=your-secret-key-here
VITE_ENVIRONMENT=development
```

**What it controls:**

- API keys
- Local configuration
- Secrets NOT in git

**IMPORTANT:**

- Always add to .gitignore
- Use VITE\_ prefix for Vite access
- Never commit secrets

### .env.example (create this, DO commit)

**Purpose:** Template showing what environment variables are needed

```bash
# API Configuration
VITE_API_KEY=your_api_key_here
VITE_API_URL=https://api.example.com

# Environment
VITE_ENVIRONMENT=development
```

**What it does:**

- Documents required environment variables
- Shows placeholder values (not real secrets)
- Safe to commit to GitHub
- Helps other developers set up their own .env.local

**How to use:**

1. Copy `.env.example` to `.env.local`
2. Replace placeholders with real values
3. Never commit `.env.local`

---

## Summary Cheat Sheet

| File                  | Purpose                | Edit Frequency | Critical? |
| --------------------- | ---------------------- | -------------- | --------- |
| package.json          | Dependencies & scripts | Often          | Yes       |
| tsconfig.json         | TypeScript config      | Rarely         | Yes       |
| vite.config.ts        | Build tool config      | Sometimes      | Yes       |
| tailwind.config.js    | Tailwind setup         | Sometimes      | Yes       |
| .gitignore            | Git exclusions         | Rarely         | Yes       |
| .eslintrc.json        | Linting rules          | Rarely         | No        |
| src/main.tsx          | App entry point        | Sometimes      | Yes       |
| src/App.tsx           | Root component         | Often          | Yes       |
| .vscode/settings.json | VS Code config         | Sometimes      | No        |
| .env.local            | Secrets (local)        | Sometimes      | Critical  |

---

# Troubleshooting Playbook

## When Things Go Wrong

### The Golden Rule:

**Copy the ENTIRE error message and paste it into GitHub Copilot Chat with @workspace (just the error, no prompt needed)**

The agent will automatically:

1. Explain what went wrong in simple terms
2. Show you how to fix it
3. Fix it automatically if possible
4. Verify the fix worked
5. Confirm with you that it's resolved

---

### Common Issues and Quick Fixes

#### Node version mismatch

```text
@workspace I'm getting Node version errors

[paste the full error here]
```

**Agent will automatically:** Check your Node version, tell you if you need to upgrade, help install the right version, and verify it's fixed.

#### Type errors

```text
@workspace

[paste TypeScript error here]
```

**Agent will automatically:** Explain what the type error means in simple terms, fix it, run typecheck to verify, and explain what changed and why.

#### Build failures

```text
@workspace npm run build is failing

[paste full error]
```

**Agent will automatically:** Diagnose the issue, fix it step by step, run build again, and verify it succeeds.

#### Deployment failures

```text
@workspace pac code push failed

[paste full error]
```

**Agent will automatically:** Check authentication, check environment setup, fix the issue, try deploying again, and verify success.

#### Tailwind styles not working

```text
@workspace Tailwind CSS styles are not applying
```

**Agent will automatically:** Check tailwind.config.js content paths, verify PostCSS config, check CSS import in main.tsx, restart dev server if needed, and test with a simple Tailwind class.

#### Git push rejected

```text
@workspace Git push was rejected

[paste full error]
```

**Agent will automatically:** Explain why it was rejected, show how to resolve it, guide you through the fix, and verify push succeeds.

---

# Copy/Paste Prompts for Each Module

## Module Prompt: Create the App

```text
@workspace Create a Power Apps Code App using the official Microsoft template following the exact steps from the Power Apps Code First documentation:

1. Initialize from the official template: npx degit github:microsoft/PowerAppsCodeApps/templates/vite vibe-intake-portal
2. Install dependencies and initialize Power Platform SDK: npm install && pac code init --displayname "Vibe Intake Portal"
3. Test locally: npm run dev
4. Deploy test: npm run build && pac code push

Constraints:
- Follow the official Power Apps Code First quickstart exactly
- TypeScript only
- Ensure PAC CLI is authenticated before deployment

Acceptance criteria:
- App runs locally with HMR at the "Local Play" URL
- Power Platform SDK is initialized
- pac code push successfully deploys to Power Platform
- App appears in Power Apps environment

Verification:
- Provide exact commands and expected output for each step
- Confirm Power Apps URL is returned after deployment
```

## Module Prompt: Add Tailwind CSS

```text
@workspace Add Tailwind CSS to my Power Apps Code App:

1. Install: npm install -D tailwindcss postcss autoprefixer
2. Initialize: npx tailwindcss init -p
3. Configure tailwind.config.js with correct content paths
4. Add Tailwind directives to src/index.css
5. Test with a sample component
6. Verify IntelliSense works in VS Code

Constraints:
- TypeScript only
- Follow Vite + React best practices
- Ensure production build purges unused styles

Acceptance criteria:
- Tailwind classes work in components
- IntelliSense suggests Tailwind classes
- No console errors
- Dev server hot reloads styles

Verification:
- npm run dev
- Add bg-blue-500 to a component
- Verify blue background appears
- Check IntelliSense suggests Tailwind classes
```

## Module Prompt: Build the Intake Form

```text
@workspace Implement a multi-step intake form with validation:

Form fields:
Step 1: title, category, description
Step 2: priority, dueDate, requesterName, requesterEmail

Requirements:
- Install: zod, react-hook-form, @hookform/resolvers
- Create Zod schemas for validation
- Build multi-step UI with Tailwind CSS
- Progress indicator (Step 1 of 2)
- Disable Next if invalid
- Show validation errors clearly
- Handle submission (console.log for now)

Constraints:
- TypeScript only
- Tailwind CSS for styling
- Accessible (keyboard navigation, ARIA labels)

Acceptance criteria:
- Cannot proceed with invalid inputs
- Helpful error messages
- Back button works on step 2
- Form submits successfully with valid data
- Console logs submission data

Verification:
- npm run dev
- Try empty form (should be blocked)
- Fill form correctly
- Submit and check console
- No errors

Do all the work for me.
```

---

# Definition of Done

Your lab is complete when:

✅ App runs locally end-to-end  
✅ Tailwind CSS is configured and working  
✅ Intake form validates and submits  
✅ `npm run lint` passes  
✅ `npm run build` succeeds  
✅ `pac code push` deploys to Power Platform  
✅ App works in Power Apps portal  
✅ GitHub repository is set up and synced  
✅ You understand how to debug with Edge DevTools  
✅ You know what each configuration file does

---

# Final Words

**Remember:**

1. **The agent does the work** - you copy/paste prompts and learn by watching
2. **Use @workspace in Beastmode** - gives Copilot full access to help you
3. **Errors are normal** - just paste them into Copilot Chat with @workspace (agent automatically explains and fixes)
4. **Ask questions** - the agent will explain anything you don't understand
5. **Use Edge DevTools** - F12 is your friend for debugging
6. **Commit frequently** - use VS Code's Source Control panel, makes rollback easy
7. **Plan comprehensively** - send detailed prompts to avoid code fragmentation
8. **Improve iteratively** - ask for low-risk improvements one at a time
9. **Don't panic if things break** - you can always revert to a previous commit
10. **Take your time** - 67 minutes is a guideline, go at your own pace
11. **Have fun** - you're building something real!

**When you get stuck:**

```text
@workspace I'm stuck on [describe issue]

[paste any error messages or describe what's not working]
```

**Agent will automatically:** Explain what might be wrong, show how to diagnose it (Edge DevTools, console, etc.), fix it for you, verify it's resolved, and explain what was done so you can learn.

**When your app is working and you want to improve it:**

```text
@workspace My app works! What are the top 3 improvements with the least risk that would add the most value? Implement them one at a time, testing after each.
```

**When things go wrong:**

```text
@workspace I need to revert to a previous working version. Show me my recent commits and help me roll back safely.
```

**Congratulations on completing the Vibe Coding Lab! 🎉**

You now know how to:

- Build a Power Apps Code App from scratch
- Use GitHub Copilot Beastmode effectively
- Style with Tailwind CSS
- Validate forms with Zod and React Hook Form
- Debug with Edge DevTools
- Use Git and GitHub through VS Code
- Configure VS Code and project settings
- Leverage MCP servers for enhanced AI capabilities
- Write comprehensive prompts that prevent code fragmentation
- Iteratively improve working code safely
- Roll back changes when things go wrong

---

# Next Steps — Beyond the Lab

Now that you've completed the core lab, here are some advanced topics to explore on your own. Use the same agent-driven approach you learned!

## Deploy to Azure App Service

Want to host your app on Azure instead of Power Platform? Here's how to deploy to Azure App Service with automated CI/CD.

### Copy/Paste This Prompt:

```text
@workspace Help me deploy this Power Apps Code App to Azure App Service with GitHub Actions CI/CD:

1. Create an Azure App Service plan and web app:
   - Linux-based hosting
   - Node.js runtime (version 24+)
   - Appropriate pricing tier for my needs
   - Provide the Azure CLI commands or guide me through the portal

2. Create a GitHub Actions workflow (.github/workflows/deploy.yml) that:
   - Triggers on push to main branch
   - Runs on ubuntu-latest
   - Installs Node.js v24+
   - Installs dependencies (npm ci)
   - Builds the app (npm run build)
   - Deploys to Azure App Service
   - Uses proper Azure credentials from GitHub secrets

3. Configure Azure App Service settings:
   - Set environment variables
   - Configure startup command
   - Enable logging
   - Set up custom domain (optional)

4. Set up GitHub secrets for deployment:
   - AZURE_WEBAPP_NAME
   - AZURE_WEBAPP_PUBLISH_PROFILE or service principal credentials
   - Any other required secrets

5. Test the deployment:
   - Push a change to trigger the workflow
   - Monitor the GitHub Actions run
   - Verify the app is live on Azure
   - Check logs if there are issues

Please guide me through each step, providing the exact YAML configuration and Azure CLI commands needed.
```

**The agent will:**

1. Help you create Azure resources (App Service plan and web app)
2. Generate a complete GitHub Actions workflow file
3. Configure deployment settings
4. Set up secrets securely
5. Test the deployment end-to-end

**What you'll learn:**

- Azure App Service fundamentals
- GitHub Actions CI/CD pipelines
- Infrastructure as Code concepts
- Deployment automation
- Environment variable management in Azure

**Prerequisites:**

- Azure subscription with permissions to create resources
- GitHub repository already set up (you did this in Module 1!)
- Azure CLI installed (optional, can use portal)

**Estimated time:** 15-20 minutes

---

## Add Authentication with Microsoft Entra ID

Secure your app with enterprise authentication.

### Copy/Paste This Prompt:

```text
@workspace Add Microsoft Entra ID (Azure AD) authentication to my Power Apps Code App:

1. Register the app in Microsoft Entra ID
2. Add authentication SDK and configuration
3. Implement sign-in/sign-out flow
4. Protect routes that require authentication
5. Access user profile information
6. Handle token refresh

Guide me through the process and explain each step.
```

---

## Connect to Dataverse

Add real data persistence using Microsoft Dataverse.

### Copy/Paste This Prompt:

```text
@workspace Connect my Power Apps Code App to Dataverse:

1. Set up Dataverse connection using Power Platform SDK
2. Create a data table for storing form submissions
3. Implement CRUD operations (Create, Read, Update, Delete)
4. Add data validation
5. Handle loading and error states
6. Test the connection

Walk me through each step with working code examples.
```

---

## Add Routing for Multiple Pages

Create a multi-page application with navigation.

### Copy/Paste This Prompt:

```text
@workspace Add routing to create multiple pages in my app:

1. Install React Router (latest version)
2. Set up routes for:
   - Home page
   - New request form
   - View requests (list)
   - Request details (individual view)
   - About page
3. Add navigation menu
4. Handle 404 (not found) pages
5. Implement protected routes (if authenticated)

Provide the complete routing setup with examples.
```

---

## Implement Advanced Form Features

Take your forms to the next level.

### Copy/Paste This Prompt:

```text
@workspace Enhance my intake form with advanced features:

1. Auto-save drafts to local storage
2. File upload support
3. Rich text editor for description field
4. Dynamic form fields (add/remove items)
5. Form wizard with progress tracking
6. Export form data as PDF

Implement these one at a time, asking which I want to start with.
```

---

## Add Testing

Learn to write tests for your application.

### Copy/Paste This Prompt:

```text
@workspace Set up testing for my Power Apps Code App:

1. Install testing libraries (Vitest, React Testing Library)
2. Write unit tests for form validation
3. Write component tests for UI elements
4. Write integration tests for form submission
5. Set up test coverage reporting
6. Add tests to CI/CD pipeline

Explain testing best practices as we go.
```

---

## Performance Optimization

Make your app faster and more efficient.

### Copy/Paste This Prompt:

```text
@workspace Optimize the performance of my app:

1. Analyze bundle size and identify large dependencies
2. Implement code splitting and lazy loading
3. Optimize images and assets
4. Add caching strategies
5. Implement virtual scrolling for large lists
6. Use React.memo and useMemo appropriately
7. Measure performance improvements

Show me before/after metrics for each optimization.
```

---

## Explore Power Platform Connectors

Access 1,500+ connectors for data and services.

### Copy/Paste This Prompt:

```text
@workspace Help me integrate Power Platform connectors:

1. Show me how to use the Power Platform SDK to:
   - List available connectors
   - Connect to Office 365 (email, calendar)
   - Connect to SharePoint
   - Connect to Microsoft Teams
   - Use custom connectors

2. Implement a feature that:
   - Sends email notifications on form submission
   - Creates a Teams message
   - Saves attachments to SharePoint

Guide me through authentication and API calls.
```

---

## Resources for Continued Learning

**Power Apps Code Apps:**

- [Power Apps Code Apps Documentation](https://learn.microsoft.com/power-apps/developer/code-apps/overview)
- [Power Platform SDK](https://learn.microsoft.com/power-platform/developer/)
- [Power Platform CLI](https://learn.microsoft.com/power-platform/developer/cli/introduction)

**React & TypeScript:**

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

**Styling & UI:**

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)
- [Headless UI (Accessible Components)](https://headlessui.com/)

**Forms & Validation:**

- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

**Azure:**

- [Azure App Service Documentation](https://learn.microsoft.com/azure/app-service/)
- [GitHub Actions for Azure](https://learn.microsoft.com/azure/developer/github/github-actions)

**GitHub Copilot:**

- [GitHub Copilot Documentation](https://docs.github.com/copilot)
- [Copilot Chat Best Practices](https://docs.github.com/copilot/using-github-copilot/prompt-engineering-for-github-copilot)

Happy coding! 🚀
