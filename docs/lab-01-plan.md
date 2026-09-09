# Lab 01: Make a small plan

**Time:** 10 minutes. **Prerequisite:** complete [Lab 00](lab-00-prerequisites.md).

## What you will learn

- Describe a small result instead of requesting an entire business system.
- Define observable acceptance criteria.
- Separate planning from permission to build.

## What we are building

The recommended first app is **Store Inventory Practice**: a small board for fictional stock items. The portal adapts these examples to your selected industry. If reading the Markdown files directly, use Retail, or substitute the examples from [all six use cases](use-cases.md).

Each app has **one kind of record**, with only:

- `id`: a unique identifier created by the app.
- `name`: a visible name, required after trimming spaces.
- `status`: exactly **New**, **In progress**, or **Done**.

We will list two samples, add one record, change its status, search/filter the list, and keep changes after refresh in this browser. No delete feature, login, charts, routing, backend, or remote data is needed.

**Scope boundary:** Fictional stock items only; no customer details, payments, live stock control, or purchasing.

## Step 1: Write a plain-English brief

1. Return to the **same local Copilot desktop session** from setup. Choose **Plan** in the mode dropdown below the prompt field.
2. **Chat prompt — planning only:**

   ```prompt
   Help me plan a beginner practice app called Store Inventory Practice.
   It tracks one record type: stock item, with id, name, and status.
   Use only synthetic data. Start with Notebook pack (New) and Desk organizer (Done).
   Allowed statuses: New, In progress, Done.
   Scope boundary: Fictional stock items only; no customer details, payments, live stock control, or purchasing.
   Keep the app local: no authentication, cloud, external APIs, MCP servers,
   custom agents, or enterprise integrations.

   Make a short plan for these separate increments:
   1. Scaffold and show the two records.
   2. Add one record with a required trimmed Name field.
   3. Change a record's status; search by name and filter by status.
   4. Persist records in localStorage with useful error handling.
   Use React, TypeScript, and Vite. Favor simple accessible HTML and CSS.
   Define one visible check for each increment. Explain unfamiliar terms.
   Do not create files, install packages, or run commands yet.
   ```

3. Read the proposed plan. A **scaffold** is the smallest set of files needed to run the app. An **acceptance criterion** is a result you can check yourself.
4. **Verify:** the plan has one record type and four small increments—not a full enterprise portal. If it adds accounts, patients, payments, scheduling, or cloud services, ask Copilot to remove them.
5. State the first criterion aloud: “When I open the preview, I can see Notebook pack as New and Desk organizer as Done.”

## Step 2: Know the repeatable loop

1. **Plan:** describe one result and how you will check it.
2. **Scaffold:** create only enough code to see the first page.
3. **Preview:** open the actual URL and look at the result.
4. **Implement one feature:** give permission for one bounded change.
5. **Verify:** try the happy path and a failing input; report what happened.
6. **Save:** review the changed files and intentionally keep a local checkpoint.

Repeat steps 3–6 for the next feature. **Do not paste every prompt at once.**

## Common issues

- **The plan is too large:** say “Keep only the four increments above. Remove everything else.”
- **Copilot starts editing during planning:** pause it, review any changes, and ask it to wait. Do not discard work blindly.
- **You are unsure what a file does:** ask for a one-sentence explanation, not another feature.

## Verification and summary

You should be able to name the one record type, the three fields, and a concrete visible test. Keep this agreed plan in the session conversation.

**Next:** [Lab 02: Build one feature at a time](lab-02-build.md).
