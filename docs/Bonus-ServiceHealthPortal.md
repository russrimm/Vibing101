# Advanced reference: service-health visualization

**Status:** optional design reference, not a validated real-time monitoring lab. Earlier editor-specific commands, unverified permission lists, chart performance claims, and production-readiness promises are retired.

The [beginner course](lab-00-prerequisites.md) needs no service-health API or cloud account.

## Keep the useful idea: compare representations of the same data

1. Make three synthetic incident records with service name, status, and timestamp.
2. Show them in a plain accessible table first. Label them **Fictional demonstration data**.
3. Choose one chart only if it explains something the table does not. Keep a text/table equivalent.
4. Use the same fixed dataset when comparing chart libraries. Measure actual bundle size, render time, keyboard access, and behavior at narrow widths; do not assume published size or speed claims apply to your build.
5. Distinguish “last refreshed” from “current service health.” Stale, unknown, and failed-to-load must not appear healthy.

## Local acceptance checks

- Exactly the three fixtures appear with the correct statuses and times.
- Empty input, stale timestamps, and a simulated fetch failure have distinct readable states.
- Status is conveyed by text as well as color.
- Keyboard users can operate the controls; users who cannot see the chart can read the same information.
- Updating one fixture updates the view; build and lint still pass.

## Before any live integration

A public status page, Microsoft 365 tenant-specific service communications, and Azure resource health are different sources with different coverage and permissions. A facilitator must verify the exact endpoint, authentication audience, permission/role, tenant, refresh limits, cost implications, and allowed data.

Use an approved test tenant and least privilege. A permission-denied error is not permission to add broad roles. Do not paste tokens into third-party decoder sites, chat, screenshots, or logs.

This exercise cannot establish operational readiness, guaranteed incident detection, or an organization's actual service availability.

**References:** [Microsoft Graph service communications](https://learn.microsoft.com/graph/api/resources/service-communications-api-overview), [Recharts](https://recharts.org/), [Chart.js](https://www.chartjs.org/docs/latest/).

**Return to:** [optional next steps](lab-05-next-steps.md).
