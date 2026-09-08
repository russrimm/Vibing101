# Advanced reference: a small Graph-backed component

**Status:** optional design reference. The former multi-component, any-organization implementation was not validated for current SDKs, account types, permissions, or Copilot desktop. Its copy-and-run snippets have been retired.

**Beginner route:** [Lab 00](lab-00-prerequisites.md). No Microsoft 365 connection is required.

## A safer learning sequence

1. Finish and save the local synthetic-data prototype.
2. Start a separate approved exercise with one **mock profile card**. Use a made-up person, not a colleague's record.
3. Verify loading, success, missing optional fields, error, and signed-out states using fixtures.
4. Only with a facilitator and test-tenant approval, plan a single read-only current-user request. Consult the actual endpoint's permissions and account support; not all tenants or accounts expose the same data.
5. Keep authentication separate from UI. Reuse one well-understood identity client, handle initialization and user cancellation, and clear user-specific state on sign-out.
6. Do not request directory-wide search, mail, calendar, presence, or files until a separately reviewed feature requires each permission.

## Acceptance criteria for that separate exercise

- The component works with synthetic fixtures before any integration.
- An authorized test identity sees only its intended data.
- Missing photos or optional properties do not break the page.
- Failed requests show a clear error rather than an endless spinner or misleading “no results.”
- Sign-out removes user-specific UI and cached data.
- Keyboard use, narrow viewports, TypeScript/build, and lint still pass.

Application IDs and tenant IDs are configuration, not passwords. Secrets and access tokens must not be embedded in browser code or `VITE_` variables. A `.gitignore` entry does not hide a value that has already been bundled for a browser.

## Further reading and limits

- [Microsoft Graph overview](https://learn.microsoft.com/graph/overview)
- [Microsoft identity platform documentation](https://learn.microsoft.com/entra/identity-platform/)
- [Graph and agent-tool access reference](Lab04-EnterpriseGraphMCP.md)

Do not describe a profile card as universally compatible, enterprise-ready, or a security review. The facilitator must produce and validate a current, narrowly scoped implementation before teaching this as a runnable extension.

**Return to:** [optional next steps](lab-05-next-steps.md).
