# Advanced reference: an AI chat assistant

**Status:** optional architecture and safety reference, not a validated deployment lab. The old model/region tables, SDK snippets, browser-side API-key pattern, and production/compliance promises are retired.

The [beginner course](lab-00-prerequisites.md) does not need an AI API in the app being built. Copilot already supplies the learning assistant.

## Start with a no-network interface

1. Use fixed, clearly labeled synthetic replies to build a small chat layout.
2. Test submitting a message, rejecting empty input, a simulated waiting state, an error state, cancellation, and clearing the conversation.
3. Ensure the input has a label, buttons have accessible names, new messages are announced without stealing focus, and the layout works at a narrow width.
4. Do not add live AI until those basic behaviors work.

## Requirements before a separate live-AI project

- Verify the selected provider, specific model/deployment, supported API/SDK, region, quotas, data handling, and current pricing from official sources. Model names alone do not guarantee availability or compatibility.
- Keep credentials on a trusted server, not in the browser. **Never put an API key in a `VITE_` variable.** Those values can be included in browser-delivered files even when `.env.local` is ignored by Git.
- Design authorization, request size limits, rate limits, timeouts, logging rules, and spending controls before exposing a server endpoint.
- Use only approved data. Decide whether prompts or responses may be retained and how they will be removed.
- Treat model output as untrusted. Do not execute instructions returned by a model or retrieved document.
- Test unsafe/irrelevant requests, provider failures, limits, and misleading answers. A content filter or system prompt is not a compliance or accuracy guarantee.
- Review costs and cleanup with the resource owner. Budget alerts do not guarantee spending stops.

## Evidence needed before teaching the live extension

1. A facilitator records the exact supported desktop build, backend runtime, SDK, model, endpoint, and test date.
2. Tests show empty/oversized requests are rejected and unauthorized use is denied.
3. Network/browser inspection confirms the credential is never shipped to the client.
4. Timeouts, cancellation, and rate-limit responses leave the interface usable.
5. The privacy notice accurately explains the configured data flow and retention.

No resources are created by this reference. It is not an authorization to deploy, and it does not certify a model, architecture, or application.

**Further reading:** [Microsoft Foundry documentation](https://learn.microsoft.com/azure/ai-foundry/), [Responsible AI](https://www.microsoft.com/ai/responsible-ai).

**Return to:** [optional next steps](lab-05-next-steps.md).
