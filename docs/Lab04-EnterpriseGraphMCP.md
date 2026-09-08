# Advanced reference: Graph and agent-tool access

**Status:** optional design reference, not a validated installation lab. The old editor-specific MCP installation commands, package assumptions, broad permission examples, and enterprise-readiness claims are retired.

**Beginner route:** [start here](lab-00-prerequisites.md). Microsoft Graph and MCP are not required for it.

## Keep the two connections separate

- **Microsoft Graph** is an API through which an application can request Microsoft 365 data with appropriate identity and permission.
- **MCP** is a protocol through which an AI tool client can use external tools. Giving an agent a Graph-related tool does not automatically authenticate the app you are building.
- An assistant describing an API is not evidence that it has made an authorized API call.

## Before a facilitator creates a new integration exercise

1. Define one read-only scenario in a dedicated test tenant with synthetic data. Identify the tenant owner and who authorizes access.
2. Verify the exact tool publisher, current supported package/distribution, transport, authentication flow, and compatibility with the **Copilot desktop build being used**. Do not reuse unverified package names from older versions of this lab.
3. Document the minimum permissions for the actual endpoint and account type. Do not grant organization-wide mail/file access to solve an unrelated setup problem.
4. Decide which data the agent may see. Never copy real organizational records, tokens, or secrets into a chat or screenshot without appropriate approval.
5. Describe how users revoke consent and how administrators remove test registrations. Review the exact affected resources before any cleanup.
6. Test refusal of consent, insufficient permission, network failure, and sign-out, not just successful sign-in.

## Evidence before calling an integration working

- An approved test identity can fetch exactly the permitted synthetic test data.
- An unapproved identity receives an appropriate denial, not another person's cached result.
- Cancellation and errors leave the local app usable.
- No token or secret is present in source, browser-delivered configuration, logs, or screenshots.
- The facilitator records the OS, desktop build, tool version, API endpoint, permissions, and test date.

These notes do not authorize account changes or establish security/compliance. Review current [Microsoft Graph documentation](https://learn.microsoft.com/graph/overview) and [permissions guidance](https://learn.microsoft.com/graph/permissions-overview) before writing a new executable lab.

**Related:** [Graph UI design reference](Lab05-UniversalGraphComponents.md); [optional next steps](lab-05-next-steps.md).
