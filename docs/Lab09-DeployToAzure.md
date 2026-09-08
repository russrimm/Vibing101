# Optional reference: plan before publishing

**Status:** facilitator-led advanced reference, not a validated deployment runbook. Publishing is **not required** to complete [the beginner course](lab-00-prerequisites.md). The old automatic creation/deletion commands and “your app is live” promises are retired.

## Local is not public

`localhost` points to the computer using it. Starting Vite does not publish a public website. A deployment uploads built files or runs services somewhere else; it may make information accessible to other people and can incur costs.

## Pre-deployment checklist

1. **Ownership:** identify who owns the app, destination account/subscription, and ongoing maintenance.
2. **Scope:** confirm this is the learner app, not the learning portal or a shared business project.
3. **Data:** use synthetic records only. Inspect source, built output, screenshots, and logs for secrets or personal data. Browser variables prefixed with `VITE_` are not secret.
4. **Audience:** decide who may access the site and whether authentication is required. A hard-to-guess URL is not access control.
5. **Platform:** choose a hosting product appropriate for the actual app. App Service and Static Web Apps have different configurations; do not copy one product's commands into the other.
6. **Cost:** verify current pricing, free-tier limits, region support, quota, and a budget with the owner. Agree on spending controls and who responds to alerts.
7. **Permissions:** verify the minimum deployment permissions. Review repository visibility and workflow triggers before connecting hosting to source control.
8. **Recovery:** name a known-good commit, rollback procedure, cleanup owner, and the exact resources that may be removed. Never delete a shared resource group to clean up a single exercise.

## Planning prompt for the Copilot desktop app

```text
Plan only: do not create resources, change accounts, push code, or deploy.
Review my local learner app and list what would be needed to publish it.
Identify the proposed hosting product, account owner, data/privacy risks,
minimum permissions, current cost assumptions, build/output settings,
validation, rollback, and narrowly scoped cleanup.
Use current official documentation and call out anything not verified.
Wait for a separate explicit approval before any remote action.
```

## Evidence needed before claiming a deployment succeeded

- Local build, lint, and acceptance checks pass at the intended commit.
- The deployment job finishes successfully, not merely resource creation.
- The actual HTTPS URL serves that version and passes the same visible checks.
- Refresh/deep-link behavior, browser errors, and unintended data exposure are checked.
- Browser storage remains per-user/per-origin; hosting does not turn it into a shared database.
- The resource owner knows how to monitor, roll back, and clean up without affecting others.

The facilitator must create a current runbook for the chosen product, OS, authentication method, and account before delivering this as an executable workshop. No cloud deployment has been verified merely by reading this document.

**Official starting points:** [Azure Static Web Apps](https://learn.microsoft.com/azure/static-web-apps/), [Azure App Service](https://learn.microsoft.com/azure/app-service/).

**Return to:** [optional next steps](lab-05-next-steps.md).
