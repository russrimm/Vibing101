# Choose one beginner use case

**Time:** 5 minutes, included in planning. All six choices use the same small build-and-check loop. **Retail is the recommended first choice** because no specialist knowledge is needed.

## One app shape, six sets of fictional labels

Each choice has one record type with `id`, `name`, and `status`. The statuses are **New**, **In progress**, and **Done**. “Done” is a practice label, not an approval, safety clearance, clinical decision, or business authorization.

| Choice | App / one record type | Seed records (New; Done) | Record to add and test | Not in scope |
| --- | --- | --- | --- | --- |
| Retail — recommended | Store Inventory Practice / stock item | Notebook pack; Desk organizer | Blue notebook | Customers, payments, orders, live inventory |
| Oil, Gas & Energy | Equipment Check Practice / equipment check | Demo pump check; Demo valve check | Demo gauge check | Live telemetry, operating or safety instructions, inspection certification |
| Transportation & Logistics | Delivery Task Practice / delivery task | Demo parcel labels; Demo crate packing | Demo box sorting | Drivers, addresses, GPS, route optimization, live dispatch |
| Manufacturing | Workshop Task Practice / work item | Demo label batch; Demo packing batch | Demo carton batch | Machine control, production scheduling, safety or quality certification |
| Healthcare | Clinic Supply Practice / supply request | Demo clipboard request; Demo folder request | Demo label request | Patients, health records, appointments, treatment, clinical decisions |
| Financial Services | Internal Request Practice / internal request | Demo report layout; Demo meeting agenda | Demo training request | Account details, payments, investing, financial advice, authoritative approvals |

## Step-by-step choice

1. Choose a familiar theme in the portal. Do not import workplace data.
2. Read its one-record scope and the exclusions above.
3. Follow [Lab 00](lab-00-prerequisites.md), then [Lab 01](lab-01-plan.md). In the portal, prompts and test examples adapt to your choice.
4. When using these Markdown files without the portal, use Retail as written. For another choice, substitute its app name, record label, two samples, and test-record name from the table. Use a distinct localStorage key, such as `vibe-practice-healthcare-v1`.
5. Use a separate learner project for each attempt. Changing the portal choice does not rename files or convert an app you already generated.

## The same meaningful acceptance criteria for all six

1. The first preview shows the two named samples with the specified statuses.
2. The named third record can be added once; blank and spaces-only input cannot add a record.
3. Only the chosen record changes to **In progress**.
4. Searching for its full name in lowercase finds it; combining that search with **Done** gives no matches; clearing controls restores the list.
5. Refresh at the same browser origin retains all three records and the updated status without duplicate seeds.
6. Keyboard controls and a 375px viewport remain usable; build and lint exit with code 0.
7. The learner reviews new/changed files and verifies a local Git commit without publishing.

## Why these scopes changed

- **Retail:** a stock board teaches forms and state without shopping carts or transactions.
- **Energy:** a fictional check board teaches status updates without pretending to monitor hazardous equipment.
- **Transportation:** preparation tasks teach filtering without mapping, live locations, or personal data.
- **Manufacturing:** small work items teach the same workflow without controlling a factory.
- **Healthcare:** non-clinical supplies remove the need to model patients or make medical claims.
- **Finance:** office requests avoid money movement, advice, and regulated approval systems.

These are educational prototypes, not simplified production specifications. Real systems require domain experts, privacy/security design, durable storage, and operational testing.

**Next:** [Lab 00: Set up your workspace](lab-00-prerequisites.md).
