# 🚀 Lab 09: Deploy Your App to Azure

> **Difficulty:** Intermediate | **Duration:** 30-45 minutes

## 📚 What You'll Learn

- Use GitHub Copilot with Azure CLI to deploy your app
- Leverage Azure MCP for intelligent Azure resource management
- Create an Azure Static Web App resource
- Configure CI/CD with GitHub Actions
- Manage your deployment with AI assistance

## 🎯 What You'll Build

An **automated deployment pipeline** that:

- 🌐 Deploys your Vibe Coding app to a live URL
- ⚡ Auto-deploys on every git push to main branch
- 🔒 Securely manages Azure credentials
- 📊 Provides deployment logs and monitoring
- 🌍 Makes your app accessible worldwide

---

## 📖 Prerequisites

Before starting this lab:

- ✅ Completed [Lab02: Setup](./Lab02-SetupMac.md) (Azure CLI installed)
- ✅ Have an Azure subscription (free tier works!)
- ✅ GitHub Copilot and Azure MCP configured
- ✅ Your app builds successfully (`npm run build`)
- ✅ Changes committed to your GitHub repository

---

## 🤖 Using GitHub Copilot with Azure

**The Power of AI-Assisted Deployment:**

Instead of memorizing complex Azure CLI commands, you'll use **GitHub Copilot** combined with **Azure MCP** to intelligently manage your Azure resources. The AI understands Azure's structure and can guide you through deployment.

### How It Works:

1. **Azure MCP** gives Copilot real-time knowledge of:
   - Available Azure regions and services
   - Your subscription and resource groups
   - Current resource status
   - Best practices and configurations

2. **GitHub Copilot** helps you:
   - Generate correct Azure CLI commands
   - Troubleshoot deployment issues
   - Configure resources optimally
   - Understand what each step does

Let's put this into practice! 🎉

---

## 🚀 Step 1: Authenticate with Azure

### Open GitHub Copilot Chat

Press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Shift+I` (Mac) to open Copilot Chat.

### Ask Copilot to Help You Log In

**Copilot Prompt:**

```
Help me log into Azure CLI. I want to authenticate with my Azure subscription so I can deploy a static web app.
```

**What Copilot will suggest:**

Copilot will provide the login command and explain what happens:

```bash
az login
```

**Run the command** that Copilot suggests. A browser window will open for you to authenticate.

### Select Your Subscription

After logging in, if you have multiple subscriptions, ask Copilot:

**Copilot Prompt:**

```
I have multiple Azure subscriptions. How do I list them and select the one I want to use?
```

**Expected commands:**

```bash
# List subscriptions
az account list --output table

# Set active subscription
az account set --subscription "YOUR-SUBSCRIPTION-ID"
```

✅ **Verification:** Run `az account show` to confirm you're using the correct subscription.

---

## 📦 Step 2: Create a Resource Group

### Ask Copilot for Best Practices

**Copilot Prompt:**

```
I want to create an Azure resource group for my Vibe Coding static web app. What's a good naming convention and which region should I use?
```

**What Copilot will explain:**

- Resource group naming conventions (e.g., `vibing101-rg`, `rg-vibing101-prod`)
- Region selection based on your location
- Cost considerations

### Create the Resource Group

**Copilot Prompt:**

```
Create an Azure CLI command to create a resource group named "vibing101-rg" in East US region.
```

**Expected command:**

```bash
az group create --name vibing101-rg --location eastus
```

**Run the command.** You should see JSON output confirming creation.

✅ **Success indicator:** `"provisioningState": "Succeeded"`

---

## 🌐 Step 3: Create Azure Static Web App

This is where Azure MCP really shines! It knows the latest Azure Static Web Apps features and configuration options.

### Ask Copilot to Create the Static Web App

**Copilot Prompt:**

```
Create an Azure Static Web App for my React Vite app in the vibing101-rg resource group.
- App name: vibing101
- GitHub repo: https://github.com/YOUR-USERNAME/Vibing101
- Branch: main
- Build output location: dist
- App location: /

Use the latest best practices and always verify I'm using the latest Azure CLI version.
```

**What Copilot will generate:**

Copilot will provide a command similar to:

```bash
az staticwebapp create \
  --name vibing101 \
  --resource-group vibing101-rg \
  --source https://github.com/YOUR-USERNAME/Vibing101 \
  --location eastus2 \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github
```

### Follow the GitHub Authentication Flow

When you run the command:

1. You'll see a **device code** (e.g., `A1B2-C3D4`)
2. Navigate to **https://github.com/login/device**
3. Enter the code
4. Authorize Azure to access your repository

⏳ **Wait time:** 1-2 minutes for resource creation

### Get Your App URL

**Copilot Prompt:**

```
How do I get the URL of my newly created Azure Static Web App named "vibing101"?
```

**Expected command:**

```bash
az staticwebapp show \
  --name vibing101 \
  --resource-group vibing101-rg \
  --query "defaultHostname" \
  --output tsv
```

**Result:** Your live URL! (e.g., `polite-sand-abc123.2.azurestaticapps.net`)

🎉 **Your app is now live!**

---

## ⚙️ Step 4: Understanding the GitHub Actions Workflow

Azure automatically created a GitHub Actions workflow for CI/CD.

### Ask Copilot to Explain What Happened

**Copilot Prompt:**

```
Azure created a GitHub Actions workflow in my repository. Can you explain what it does and show me where to find it?
```

**What Copilot will explain:**

1. **Workflow location:** `.github/workflows/azure-static-web-apps-*.yml`
2. **What it does:**
   - Triggers on push to `main` branch
   - Builds your app (`npm install` + `npm run build`)
   - Deploys `dist/` folder to Azure
   - Updates your live site automatically

### View Deployment Status

**Copilot Prompt:**

```
How can I check the status of my Azure Static Web App deployment in GitHub?
```

**Copilot will guide you:**

1. Go to your GitHub repo
2. Click the **"Actions"** tab
3. See the workflow run: "Azure Static Web Apps CI/CD"
4. Click on the run to see logs

---

## 🔧 Step 5: Troubleshooting with Copilot

If something goes wrong, Copilot + Azure MCP can help diagnose issues.

### Common Issues

#### Build Fails

**Copilot Prompt:**

```
My Azure Static Web App deployment failed during the build step. How do I view the error logs and diagnose the issue?
```

**Copilot will suggest:**

- Check GitHub Actions logs
- Verify `package.json` scripts
- Ensure `npm run build` works locally
- Check for missing environment variables

#### App Shows 404

**Copilot Prompt:**

```
My Azure Static Web App URL shows a 404 error. What could be wrong with my configuration?
```

**Common fixes Copilot might suggest:**

- Verify `output-location` is set to `"dist"`
- Check if build succeeded
- Ensure `index.html` exists in `dist/`
- Review `staticwebapp.config.json` routes

#### Deployment Takes Too Long

**Copilot Prompt:**

```
My Azure Static Web App deployment is taking a long time. How can I check if it's stuck or just slow?
```

---

## 🎨 Step 6: Custom Domain (Optional)

Want to use your own domain instead of `*.azurestaticapps.net`?

**Copilot Prompt:**

```
I want to add a custom domain (www.myvibeapp.com) to my Azure Static Web App. Walk me through the process using Azure CLI and explain DNS configuration.
```

**Copilot will guide you through:**

1. Add custom domain with `az staticwebapp hostname set`
2. Configure DNS records (CNAME)
3. SSL certificate (automatic with Azure)
4. Verification steps

---

## 📊 Step 7: Monitor Your App

### View App Analytics

**Copilot Prompt:**

```
How can I view analytics and usage statistics for my Azure Static Web App using Azure CLI?
```

### Check Deployment History

**Copilot Prompt:**

```
Show me the deployment history for my Azure Static Web App named "vibing101".
```

---

## 🔄 Step 8: Update Your App

The beauty of CI/CD: just push to update!

### Make Changes Locally

1. Edit your code
2. Test with `npm run dev`
3. Build with `npm run build`

### Deploy Changes

```bash
git add .
git commit -m "feat: update homepage design"
git push
```

**That's it!** GitHub Actions automatically deploys your changes in 2-5 minutes.

### Monitor Deployment with Copilot

**Copilot Prompt:**

```
I just pushed changes to my repo. How can I verify the deployment is progressing and when it will be live?
```

---

## 🧹 Step 9: Clean Up Resources (When Done)

If you want to delete the app later to save costs:

**Copilot Prompt:**

```
I want to delete my Azure Static Web App and all associated resources. Show me the safest way to do this.
```

**Expected commands:**

```bash
# Delete Static Web App
az staticwebapp delete \
  --name vibing101 \
  --resource-group vibing101-rg

# Delete Resource Group (removes everything)
az group delete --name vibing101-rg --yes
```

⚠️ **Warning:** This permanently deletes your app and cannot be undone!

---

## 🎓 Key Learnings

### What You Accomplished

- ✅ Deployed a production React app to Azure
- ✅ Set up automated CI/CD with GitHub Actions
- ✅ Used GitHub Copilot + Azure MCP for intelligent Azure management
- ✅ Learned to troubleshoot deployments with AI assistance
- ✅ Got a live URL to share your app with the world

### The Power of AI-Assisted DevOps

Instead of memorizing dozens of Azure CLI commands, you:

- **Asked Copilot** what you wanted to accomplish
- **Received** context-aware suggestions
- **Learned** what each command does
- **Deployed** confidently with AI guidance

This is **vibe coding for DevOps**! 🚀

---

## 🚀 Going Further

### Production Enhancements

**Ask Copilot:**

```
What are the best practices for securing and optimizing my Azure Static Web App for production use?
```

**Topics Copilot might cover:**

- Environment variables and secrets
- Custom error pages (404, 500)
- Authentication and authorization
- CDN and caching strategies
- Performance monitoring
- Cost optimization

### Multi-Environment Setup

**Copilot Prompt:**

```
I want to set up separate development, staging, and production environments for my Azure Static Web App. How should I structure this?
```

---

## 🐛 Troubleshooting with Copilot

### When to Ask for Help

If you encounter issues, describe them to Copilot:

**Example prompts:**

```
My deployment succeeded but the site shows a blank page. Help me debug.
```

```
Error: The content server has rejected the request with: BadRequest. What does this mean?
```

```
How do I roll back to a previous deployment if something breaks?
```

### Copilot + Azure MCP Advantages

- **Real-time knowledge** of your Azure resources
- **Context-aware** suggestions based on your setup
- **Error interpretation** with actionable fixes
- **Best practices** automatically applied
- **Version checking** ensures latest tools/features

---

## 📚 Additional Resources

### Official Documentation

**When to reference:**

- Deep technical details
- Advanced configuration options
- Pricing and limits

**How to ask Copilot:**

```
Can you point me to the official Azure Static Web Apps documentation for [specific topic]?
```

### Community Support

**Copilot Prompt:**

```
Where can I get help if I have issues with Azure Static Web Apps deployment?
```

---

## ✅ Lab Complete!

You've successfully deployed your Vibe Coding app to Azure using AI-assisted tools! 🎉

**Your app is live at:** `https://[your-site].azurestaticapps.net`

**Share your accomplishment:**

- Send the URL to friends and family
- Add it to your resume/portfolio
- Post on LinkedIn with #VibeCoding #AzureStaticWebApps

---

## 🎯 Next Steps

- **Share Your App:** Post your URL in the community!
- **Customize Domain:** Set up a custom domain name
- **Add Features:** Use other Azure services (Functions, Databases)
- **Monitor Performance:** Set up Application Insights
- **Explore More Labs:** Check out bonus modules for advanced features

**Questions?** Ask GitHub Copilot! That's what it's there for. 🤖✨

---

## 🔑 Key Commands Summary

```bash
# Login to Azure
az login

# Create resource group
az group create --name vibing101-rg --location eastus

# Create Static Web App (with GitHub auth)
az staticwebapp create \
  --name vibing101 \
  --resource-group vibing101-rg \
  --source https://github.com/YOUR-USERNAME/Vibing101 \
  --location eastus2 \
  --branch main \
  --app-location "/" \
  --output-location "dist" \
  --login-with-github

# Get app URL
az staticwebapp show \
  --name vibing101 \
  --resource-group vibing101-rg \
  --query "defaultHostname" -o tsv

# Delete resources (cleanup)
az group delete --name vibing101-rg --yes
```

**Pro Tip:** Don't memorize these! Just ask Copilot what you want to do, and it will generate the right commands. That's vibe coding! 🎵
