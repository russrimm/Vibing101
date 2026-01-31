# 🤖 Bonus Lab: AI Chat Assistant with Azure AI Foundry

> **Difficulty:** Intermediate | **Duration:** 60-90 minutes | **Optional Module**

## 📚 What You'll Learn

- Set up Azure AI Foundry
- Deploy Claude Sonnet or Claude Opus models
- Build an interactive chat interface
- Implement streaming responses for real-time feel
- Add conversation memory and context
- Apply content filtering and safety best practices
- Create an AI assistant that helps visitors navigate your portal

## 🎯 What You'll Build

An **AI Chat Assistant** that:

- 💬 Answers visitor questions about your portal
- 🧠 Maintains conversation context across messages
- ⚡ Streams responses in real-time (like ChatGPT)
- 🎨 Matches your site's theme and design
- 🛡️ Includes content filtering for safety
- 📱 Works on mobile and desktop
- 🔒 Protects API keys securely

**Use cases:**

- Help visitors navigate your site
- Answer questions about vibe coding
- Guide users through lab exercises
- Provide technical support
- Demo your industry-specific knowledge

---

## 📖 Prerequisites

Before starting this lab:

- ✅ Have an Azure subscription (free tier works!)
- ✅ Basic understanding of APIs and environment variables
- ✅ Completed [Lab05: Universal Graph Components](./Lab05-UniversalGraphComponents.md) (optional, for auth patterns)
- ✅ Familiarity with async JavaScript/TypeScript

---

## 🌐 Understanding Azure AI Foundry

### What is Azure AI Foundry?

**Azure AI Foundry** is Microsoft's unified platform for building, deploying, and managing AI applications. It brings together:

- **Model Catalog** - Access to hundreds of AI models including Claude, GPT, Llama, and more
- **Azure AI Services** - Enterprise-grade AI capabilities
- **Prompt Flow** - Visual prompt engineering
- **AI Studio** - Web-based development environment
- **Content Safety** - Built-in moderation and filtering

**Why use Azure AI Foundry?**

- ✅ Enterprise-grade security and compliance
- ✅ Data stays in your Azure region (GDPR, privacy)
- ✅ Integration with Azure services (Key Vault, App Insights)
- ✅ Cost management and usage tracking
- ✅ Content filtering and responsible AI tools

### Available Models (as of 2026)

| Model             | Best For                                                 | Context Window |
| ----------------- | -------------------------------------------------------- | -------------- |
| **Claude Sonnet** | Balanced performance, fast responses, excellent for chat | 200K tokens    |
| **Claude Opus**   | Most capable, complex reasoning, best quality responses  | 200K tokens    |
| **Claude Haiku**  | Ultra-fast, lightweight tasks, simple queries            | 200K tokens    |

**Recommendation for this lab:** Use **Claude Sonnet** for the best balance of speed and capability. Upgrade to **Claude Opus** if you need the highest quality responses for complex tasks.

---

## 🚀 Step 1: Create Azure AI Foundry Resource

### Option A: Using Azure Portal (Beginner-Friendly)

1. **Navigate to Azure Portal:**
   - Go to [https://portal.azure.com](https://portal.azure.com)
   - Sign in with your Microsoft account

2. **Create Resource:**
   - Click **"+ Create a resource"**
   - Search for **"Azure AI Foundry"** or **"Azure AI Studio"**
   - Click **"Create"**

3. **Configure Resource:**

   ```
   Subscription: [Your subscription]
   Resource Group: [Create new: "vibing101-rg"]
   Region: East US (or nearest region)
   Name: vibing101-ai
   Pricing Tier: Standard S0
   ```

   > 💡 **Tip:** Not all regions support Azure OpenAI. Use **East US**, **West Europe**, or **Australia East** for best availability. Always verify the latest region availability in Azure docs.

4. **Review + Create:**
   - Click **"Review + create"**
   - Click **"Create"**
   - Wait 2-3 minutes for deployment

5. **Get Keys and Endpoint:**
   - Go to your resource
   - Click **"Keys and Endpoint"** in the left menu
   - Copy:
     - ✅ **KEY 1** (your API key)
     - ✅ **Endpoint** (looks like: `https://vibing101-openai.openai.azure.com/`)

### Option B: Using Azure CLI (Advanced)

```bash
# Login to Azure (ensure you have the latest Azure CLI version)
az login

# Create resource group
az group create --name vibing101-rg --location eastus

# Create Azure OpenAI resource
az cognitiveservices account create \
  --name vibing101-openai \
  --resource-group vibing101-rg \
  --kind OpenAI \
  --sku S0 \
  --location eastus \
  --yes

# Get keys
az cognitiveservices account keys list \
  --name vibing101-openai \
  --resource-group vibing101-rg
```

---

## 🤖 Step 2: Deploy a Model in Azure AI Foundry

### Using Azure AI Foundry Studio

1. **Open Azure AI Foundry:**
   - Go to [https://ai.azure.com](https://ai.azure.com)
   - Sign in with the same account
   - Select your **vibing101-openai** resource

2. **Navigate to Deployments:**
   - Click **"Deployments"** in the left menu
   - Click **"+ Create new deployment"**

3. **Configure Deployment:**

   ```
   Select a model: Claude Sonnet (or Claude Opus if available)
   Deployment name: vibing101-chat
   Model version: [Latest - auto-update recommended]
   Deployment type: Standard
   Tokens per minute rate limit: 10K (adjust based on expected traffic)
   Content filter: Default (recommended)
   ```

4. **Deploy:**
   - Click **"Create"**
   - Wait 1-2 minutes for deployment
   - ✅ **Note the deployment name:** `vibing101-chat`

### Why Deployment Name Matters

You'll use this exact name in your API calls:

```typescript
// This must match your deployment name!
const deploymentName = 'vibing101-chat'
```

---

## 🔐 Step 3: Set Up Environment Variables

**Security First:** Never commit API keys to GitHub!

### Create Environment File

Create `.env.local` in your project root:

```bash
# Azure OpenAI Configuration
VITE_AZURE_OPENAI_ENDPOINT=https://vibing101-openai.openai.azure.com/
VITE_AZURE_OPENAI_KEY=your-api-key-here
VITE_AZURE_OPENAI_DEPLOYMENT=vibing101-chat
VITE_AZURE_OPENAI_API_VERSION=2024-02-15-preview
```

> ⚠️ **Important:**
>
> - Always use the **latest API version** from [Azure OpenAI API docs](https://learn.microsoft.com/azure/ai-services/openai/reference)
> - Replace `your-api-key-here` with your actual KEY 1 from Step 1
> - `.env.local` is already in `.gitignore` by default

### Add to .gitignore

Verify `.gitignore` includes:

```gitignore
# Environment variables
.env
.env.local
.env.*.local
```

---

## 📦 Step 4: Install Azure OpenAI SDK

Install the official Azure SDK:

```bash
npm install @azure/openai
```

> 💡 **Tip:** Always verify you're installing the **latest version** of `@azure/openai` (check npm for current version)

**What this installs:**

- Official Azure OpenAI client
- TypeScript types
- Streaming support
- Error handling utilities

---

## 🛠️ Step 5: Create OpenAI Service

Build a service to interact with Azure OpenAI.

**Create file:** `src/services/openAIService.ts`

**Copilot Prompt (Beast Mode):**

```
Create src/services/openAIService.ts with these features:

1. Import OpenAIClient and AzureKeyCredential from '@azure/openai'
2. Import environment variables from import.meta.env
3. Create config interface:
   - endpoint, apiKey, deploymentName, apiVersion

4. Initialize OpenAI client (singleton pattern):
   const client = new OpenAIClient(
     import.meta.env.VITE_AZURE_OPENAI_ENDPOINT,
     new AzureKeyCredential(import.meta.env.VITE_AZURE_OPENAI_KEY)
   )

5. Create interfaces:
   - ChatMessage { role: 'system' | 'user' | 'assistant', content: string }
   - ChatOptions { temperature?: number, maxTokens?: number, stream?: boolean }
   - ChatResponse { message: string, usage?: { promptTokens, completionTokens, totalTokens } }

6. Create sendMessage function:
   async sendMessage(
     messages: ChatMessage[],
     options?: ChatOptions
   ): Promise<ChatResponse>

   - Call client.getChatCompletions()
   - Use deployment name from env
   - Handle errors gracefully
   - Return message and token usage
   - Default temperature: 0.7
   - Default maxTokens: 800

7. Create sendStreamingMessage function:
   async sendStreamingMessage(
     messages: ChatMessage[],
     onChunk: (text: string) => void,
     options?: ChatOptions
   ): Promise<void>

   - Call client.streamChatCompletions()
   - Emit chunks via onChunk callback
   - Handle stream completion
   - Error handling with try/catch

8. Create helper: createSystemMessage(context: string): ChatMessage
   - Returns system role message
   - Use for bot personality/instructions

9. Add JSDoc comments for all functions
10. Export all interfaces and functions

Always verify you're using the latest Azure OpenAI SDK API syntax.
```

**Expected result:** A service that wraps Azure OpenAI with streaming support and proper error handling.

---

## 💬 Step 6: Build Chat Interface Component

Create the main chat UI component.

**Create file:** `src/components/ChatAssistant.tsx`

**Copilot Prompt (Beast Mode):**

```
Create src/components/ChatAssistant.tsx with:

1. Import useState, useRef, useEffect
2. Import openAIService, ChatMessage
3. Import lucide-react icons: Send, Bot, User, X, Minimize2, Maximize2

4. Create state:
   - messages: ChatMessage[] (conversation history)
   - inputValue: string (current message)
   - isLoading: boolean (waiting for response)
   - isStreaming: boolean (receiving streamed response)
   - isMinimized: boolean (toggle chat window)
   - isOpen: boolean (show/hide chat)
   - error: string | null

5. Create system message with personality:
   "You are a helpful AI assistant for VibeCoding101, a modern React learning platform.
   Help users learn vibe coding, navigate the site, and answer questions about React,
   Vite, TypeScript, and modern web development. Be friendly, encouraging, and concise."

6. Create handleSendMessage function:
   - Add user message to messages state
   - Call openAIService.sendStreamingMessage()
   - Accumulate streamed chunks into assistant message
   - Update messages state as chunks arrive
   - Handle errors with toast notification

7. Create layout (dark theme, our colors):

   Floating button (bottom-right):
   - <button> with Bot icon
   - onClick toggles isOpen
   - Pulsing animation when closed
   - Badge showing "AI Assistant"

   Chat window (appears when isOpen):
   - Fixed position, bottom-right
   - Width: 400px desktop, 100% mobile
   - Height: 600px max
   - bg-slate-800 with border-cyan-500
   - Rounded corners, shadow

   Header:
   - Title: "AI Assistant"
   - Minimize/Maximize button
   - Close button

   Messages area:
   - Scrollable div (overflow-y-auto)
   - User messages: right-aligned, bg-cyan-500
   - Bot messages: left-aligned, bg-slate-700
   - Show Bot/User icons
   - Auto-scroll to bottom on new message

   Input area:
   - Textarea (multi-line support)
   - Send button (disabled while loading)
   - "Thinking..." indicator during isLoading
   - "Press Enter to send, Shift+Enter for new line"

8. Add keyboard shortcuts:
   - Enter key sends message (without Shift)
   - Shift+Enter adds new line
   - Escape closes chat

9. Add welcome message on mount:
   - "Hi! I'm your AI assistant. How can I help you today?"

10. Accessibility:
    - aria-label on all buttons
    - role="log" on messages area
    - focus management (focus input when opened)

11. Mobile responsive:
    - Full-screen on mobile
    - Swipe-down to close gesture (optional)

12. Use Tailwind CSS with our theme:
    - bg-slate-900, bg-slate-800, bg-slate-700
    - text-white, text-slate-300, text-cyan-500
    - Smooth animations with framer-motion

Always use the latest React patterns and hooks.
```

---

## 🎨 Step 7: Style and Animate

Enhance the chat with smooth animations.

**Copilot Prompt:**

```
Update ChatAssistant.tsx to add framer-motion animations:

1. Import motion from 'framer-motion'

2. Animate chat window appearance:
   <motion.div
     initial={{ opacity: 0, y: 20, scale: 0.95 }}
     animate={{ opacity: 1, y: 0, scale: 1 }}
     exit={{ opacity: 0, y: 20, scale: 0.95 }}
     transition={{ duration: 0.2 }}
   >

3. Animate individual messages:
   - Fade in from left (bot) or right (user)
   - Slight scale animation (0.95 -> 1)
   - Stagger delay for multiple messages

4. Animate floating button:
   - Pulse effect when closed
   - Bounce on new message received
   - Rotate on hover

5. Animate typing indicator:
   - Three dots with staggered animation
   - Fade in/out loop

6. Add loading skeleton for streamed messages:
   - Show placeholder while streaming
   - Reveal text as chunks arrive

Always use latest framer-motion API syntax.
```

---

## 🧠 Step 8: Add Conversation Memory

Implement context awareness across messages.

**Create file:** `src/hooks/useChatHistory.ts`

**Copilot Prompt:**

```
Create src/hooks/useChatHistory.ts with:

1. Custom hook: useChatHistory(maxMessages = 20)
   - Stores conversation in state
   - Limits to maxMessages (keep recent context)
   - Persists to localStorage (optional)
   - Returns: { messages, addMessage, clearHistory }

2. Create addMessage function:
   - Appends new message
   - Trims oldest if exceeds maxMessages
   - Maintains system message at index 0

3. Create clearHistory function:
   - Resets to only system message
   - Clears localStorage

4. Calculate context window size:
   - Sum token count (rough estimate: ~4 chars = 1 token)
   - Claude models support 200K token context window
   - Warn if approaching limit for better UX

5. Export hook with TypeScript types

Use latest React hooks patterns.
```

**Update ChatAssistant.tsx:**

**Copilot Prompt:**

```
Update ChatAssistant.tsx to use useChatHistory hook:

1. Replace useState for messages with useChatHistory()
2. Use addMessage instead of setMessages
3. Add "Clear conversation" button in header
4. Show token usage indicator (estimate)
5. Warn user if approaching context limit

Keep existing functionality intact.
```

---

## 🛡️ Step 9: Add Content Filtering

Implement safety and content moderation.

**Copilot Prompt (Beast Mode):**

```
Update src/services/openAIService.ts to add content filtering:

1. Azure OpenAI has built-in content filtering (configured in Foundry)
2. Handle filtered responses gracefully:
   - Check response.choices[0].finishReason
   - If 'content_filter', show user-friendly message
   - "I can't respond to that. Let's keep our conversation helpful and appropriate."

3. Client-side pre-filtering (optional):
   - Check user input for obvious inappropriate content
   - Reject before API call (save costs)
   - Use simple word list or regex

4. Add function: isContentAppropriate(text: string): boolean
   - Returns false if clearly inappropriate
   - Show gentle warning to user

5. Log filtered attempts (for monitoring):
   - console.warn with timestamp
   - Track patterns (optional analytics)

Always follow Microsoft's Responsible AI principles.
```

---

## 📍 Step 10: Add Context-Aware Responses

Make the bot aware of your portal content.

**Create file:** `src/data/chatContext.ts`

**Copilot Prompt:**

```
Create src/data/chatContext.ts with:

1. Export siteContext object with:
   - availableLabs: array of lab titles and descriptions
   - industryVerticals: list from Lab01 (Retail, Finance, etc.)
   - technologies: React, Vite, TypeScript, Tailwind, etc.
   - commonQuestions: FAQ array with questions and answers

2. Export function: buildSystemPrompt(userContext?: any): string
   - Includes site context
   - Includes user's selected industry (if available)
   - Includes current lab progress (if available)
   - Returns comprehensive system message

Example:
"You are an AI assistant for VibeCoding101.
Available labs: [list]. User is currently on: [current].
Industry focus: [selected industry].
Answer questions about React, vibe coding, and help navigate the portal."

3. Export contextual suggestions:
   - Based on current page, suggest relevant questions
   - "Ask me about..." prompts

Use TypeScript for type safety.
```

**Update ChatAssistant.tsx:**

**Copilot Prompt:**

```
Update ChatAssistant.tsx to use dynamic context:

1. Import buildSystemPrompt from chatContext.ts
2. Get current route/page (useLocation hook)
3. Get user's industry selection (from context or localStorage)
4. Build system message dynamically:
   const systemMessage = buildSystemPrompt({
     currentPage: location.pathname,
     selectedIndustry: industry,
     completedLabs: progress
   })

5. Add contextual quick replies:
   - Show 3-4 suggested questions based on current page
   - "How do I...?", "What is...?", "Show me..."
   - Click to auto-fill input

Keep existing chat functionality.
```

---

## 🔌 Step 11: Integrate with Your App

Add the chat assistant to your main application.

**Update:** `src/App.tsx`

**Copilot Prompt:**

```
Update App.tsx to include ChatAssistant:

1. Import ChatAssistant component
2. Add at root level (outside main content):
   <div className="app-container">
     {/* Existing routes/content */}
     <ChatAssistant />
   </div>

3. ChatAssistant should float above all content
   - z-index: 1000
   - Not affected by routing

4. Optional: Add toggle in navbar
   - Icon button to open chat
   - Badge for unread bot messages

Use latest React Router patterns if applicable.
```

---

## 📱 Step 12: Make It Mobile-Friendly

Ensure great experience on mobile devices.

**Copilot Prompt:**

```
Update ChatAssistant.tsx for mobile:

1. Detect mobile: window.innerWidth < 768
2. On mobile:
   - Full-screen overlay (not floating window)
   - Slide up from bottom animation
   - Add top bar with drag handle
   - Swipe down to close
   - Hide floating button on small screens

3. Touch optimizations:
   - Larger tap targets (min 44x44px)
   - Prevent text selection during scroll
   - Handle keyboard appearance (adjust height)

4. Use Tailwind responsive classes:
   - w-96 md:w-full (width)
   - h-screen md:h-[600px] (height)
   - fixed md:bottom-4 md:right-4 (position)

Test on mobile viewport sizes.
```

---

## 🧪 Step 13: Test Your Chatbot

Verify everything works correctly.

### Manual Testing Checklist

✅ **Basic Functionality:**

- [ ] Chat window opens and closes
- [ ] Messages send successfully
- [ ] Bot responds within 3-5 seconds
- [ ] Streaming works (text appears gradually)
- [ ] Conversation history maintained

✅ **Error Handling:**

- [ ] Graceful handling of network errors
- [ ] Content filter responses
- [ ] Rate limit handling
- [ ] Empty message prevention

✅ **User Experience:**

- [ ] Animations smooth
- [ ] Mobile responsive
- [ ] Keyboard shortcuts work
- [ ] Auto-scroll to new messages
- [ ] Clear conversation works

✅ **Context Awareness:**

- [ ] Bot mentions current page
- [ ] Answers about available labs
- [ ] Knows selected industry
- [ ] Provides relevant suggestions

### Test Conversations

Try these prompts:

1. **Navigation help:**

   ```
   How do I get started with vibe coding?
   ```

2. **Technical questions:**

   ```
   What's the difference between Vite and Create React App?
   ```

3. **Lab-specific:**

   ```
   I'm stuck on Lab02, can you help?
   ```

4. **Industry context:**
   ```
   Show me examples for the Finance industry
   ```

---

## 🎯 Step 14: Customize Bot Personality

Make the assistant match your brand.

**Copilot Prompt:**

```
Update chatContext.ts to customize bot personality:

1. Update system prompt with:
   - Tone: friendly, encouraging, but professional
   - Style: use emojis sparingly (✅, 🎉, 💡)
   - Expertise: React, TypeScript, modern web dev
   - Limitations: be honest when you don't know
   - Call-to-action: encourage trying labs

2. Add personality traits:
   "Be encouraging to beginners. Celebrate their progress.
   Use simple language but teach proper terminology.
   Suggest hands-on exercises. Link to relevant labs.
   Keep responses under 150 words unless asked for detail."

3. Add response templates:
   - Greeting: "Hi! 👋 I'm here to help..."
   - Goodbye: "Happy coding! 🎉"
   - Confused: "Hmm, I'm not sure about that..."
   - Encouragement: "You're doing great! Keep going! 🚀"

4. Industry-specific tweaks:
   - Finance: mention compliance, security
   - Healthcare: emphasize data privacy
   - Retail: focus on user experience

Test different prompts to refine personality.
```

---

## 💰 Step 15: Monitor Usage and Costs

Track API usage and manage spending.

### View Usage in Azure Portal

1. Go to your Azure OpenAI resource
2. Click **"Metrics"** in left menu
3. View:
   - Total tokens processed
   - API calls per minute
   - Token rate usage

### Monitor Usage

1. Navigate to **Cost Management** in Azure Portal
2. Set up budget alerts based on your needs
3. Monitor token usage in Azure OpenAI Studio

### Add Usage Display

**Copilot Prompt:**

```
Update ChatAssistant.tsx to show token usage:

1. Track tokens from ChatResponse.usage
2. Display in chat footer:
   "💬 Tokens used: 1,234 / 8,000"
3. Show progress bar
4. Warn at 90% capacity
5. Link to "Learn about token limits"

Keep UI minimal and non-intrusive.
```

---

## 🚀 Going Further

### Production Enhancements

1. **Rate Limiting:**

   ```typescript
   // Limit to 10 messages per minute per user
   const rateLimiter = new RateLimiter(10, 60000)
   ```

2. **Conversation Analytics:**
   - Track common questions
   - Identify gaps in content
   - Measure user satisfaction

3. **Feedback System:**
   - Thumbs up/down on responses
   - "Was this helpful?" after each answer
   - Submit feedback to improve prompts

4. **Advanced Features:**
   - Voice input (Web Speech API)
   - Code syntax highlighting in responses
   - Multi-language support
   - File attachments (for code review)

5. **Integration with Other Services:**
   - Search your documentation
   - Query your database
   - Call external APIs for real-time data

### Prompt Engineering Tips

**Make responses more accurate:**

```typescript
const improvedSystemPrompt = `
You are an AI assistant for VibeCoding101.

ALWAYS follow these rules:
1. Be concise - max 150 words unless asked for detail
2. Use code examples when explaining technical concepts
3. Link to relevant labs: [Lab02](docs/Lab02-SetupMac.md)
4. If unsure, say "I don't have that information" instead of guessing
5. Encourage hands-on practice

NEVER:
- Make up facts or links
- Provide outdated information
- Be overly technical without explanation

Current context:
- User's industry: {{industry}}
- Current page: {{currentPage}}
- Completed labs: {{completedLabs}}
`
```

---

## 🐛 Troubleshooting

### "API key not found" Error

**Problem:** Environment variables not loading

**Solution:**

1. Verify `.env.local` exists in project root
2. Restart dev server: `npm run dev`
3. Check variable names start with `VITE_`
4. Import correctly: `import.meta.env.VITE_AZURE_OPENAI_KEY`

### "Model deployment not found"

**Problem:** Deployment name doesn't match

**Solution:**

1. Check deployment name in Azure AI Foundry
2. Must exactly match (case-sensitive)
3. Update `VITE_AZURE_OPENAI_DEPLOYMENT` in `.env.local`

### "Rate limit exceeded"

**Problem:** Too many requests

**Solution:**

1. Increase rate limit in deployment settings (Azure portal)
2. Add client-side throttling
3. Implement request queue
4. Upgrade to higher tier if needed

### Streaming Not Working

**Problem:** Responses appear all at once

**Solution:**

```typescript
// Ensure you're using the streaming method
await openAIService.sendStreamingMessage(messages, (chunk) => {
  // This callback must update UI incrementally
  setCurrentResponse((prev) => prev + chunk)
})
```

### High Costs

**Problem:** Unexpected Azure bills

**Solution:**

1. Set up budget alerts (Step 15)
2. Reduce maxTokens in responses
3. Implement caching for common questions
4. Add authentication to prevent abuse

---

## 📚 Resources

### Official Documentation

- [Azure OpenAI Service](https://learn.microsoft.com/azure/ai-services/openai/) - Always verify latest features
- [Azure AI Foundry](https://learn.microsoft.com/azure/ai-studio/)
- [Azure OpenAI SDK for JavaScript](https://learn.microsoft.com/javascript/api/@azure/openai) - Check for latest version
- [Prompt Engineering Guide](https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering)

### Best Practices

- [Responsible AI Guidelines](https://www.microsoft.com/ai/responsible-ai)
- [Content Filtering](https://learn.microsoft.com/azure/ai-services/openai/concepts/content-filter)
- [Token Optimization](https://learn.microsoft.com/azure/ai-services/openai/concepts/tokens)

### Community

- [Azure OpenAI Samples](https://github.com/Azure-Samples/openai)
- [Microsoft Learn AI Hub](https://learn.microsoft.com/ai/)

---

## ✅ Lab Complete!

You've built a **production-ready AI Chat Assistant** with:

- ✅ Azure OpenAI integration with latest models
- ✅ Real-time streaming responses
- ✅ Conversation memory and context awareness
- ✅ Content filtering and safety
- ✅ Mobile-responsive design
- ✅ Cost monitoring and optimization
- ✅ Customizable personality

**Your visitors can now get instant AI-powered help!** 🎉

---

## 🎯 Next Steps

- [Bonus: Service Health Portal](./Bonus-ServiceHealthPortal.md) - Monitor Azure/M365 status
- [Bonus: Power Apps Code Components](./Bonus-PowerAppsCodeComponents.md) - Integrate with Power Platform
- [Lab09: Ready for the World](./Lab09-ReadyForTheWorld.md) - Deploy to Azure

**Questions?** Ask your new AI assistant! 😉

---

## 🔒 Security Checklist

Before deploying to production:

- [ ] API keys stored in Azure Key Vault (not .env)
- [ ] Content filtering enabled in Azure
- [ ] Rate limiting implemented
- [ ] CORS configured properly
- [ ] Budget alerts set up
- [ ] Authentication added (optional but recommended)
- [ ] Logging and monitoring configured
- [ ] Privacy policy updated (mention AI usage)

**Never commit `.env.local` to Git!**
