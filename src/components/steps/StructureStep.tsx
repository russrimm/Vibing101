import { Industry } from '../../types/industry'
import CodeBlock from '../CodeBlock'

interface StructureStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
}

export default function StructureStep({
  industry,
  onNext,
  onPrevious,
}: StructureStepProps) {
  // Special prompt for retail industry
  const retailPrompt = `You are GitHub Copilot running in Agent/Beast Mode with access to Context7 MCP and Microsoft Learn MCP.

MISSION
Build a fully functional, production-ready Retail Store Inventory Portal web application (NOT a mock UI). It must include real data models, complete CRUD, business logic, navigation/app shell, and working persistence via a swappable data-access layer (mock/local now, Dataverse-ready abstraction). This should be suitable to demonstrate a real “Power Apps Code-First / Dataverse-ready” style solution.

NON-NEGOTIABLES (BLOCKING)
1) LTS-ONLY: Use the latest Long-Term Support (LTS) version of EVERY major component (Node.js, Vite, React, TypeScript, Router, UI framework, forms/validation, charts, state). Do NOT guess versions.
   - Use Context7 MCP (and Microsoft Learn MCP when relevant) to confirm current LTS/latest stable versions compatible with Node LTS.
   - Pin versions explicitly in package.json (no wildcards). Add \`.nvmrc\` and \`package.json\` engines.node.
2) REPO GOVERNANCE: Create and maintain \`.github/copilot-instructions.md\` during scaffolding (before feature implementation). Treat it as a binding contract. Keep it updated as the project evolves.
3) PROGRESS LEDGER: Create \`PROGRESS_LEDGER.md\` in repo root during scaffolding and update it at the end of every phase (0–10). You may NOT advance phases until the current phase is marked complete and includes verification steps.
4) ARCHITECTURE: Feature-based modular folders, reusable components, thin data layer. No single .tsx file > ~300 lines (refactor into components/hooks).
5) USABILITY: Mobile-first responsive design (store associates use tablets/phones), accessible UI (labels, keyboard nav, proper errors), modern professional theme (choose a cohesive retail-forward palette; document it), persistent app shell (nav/header/alerts).
6) END-TO-END: The app must run and be usable across all required modules; no placeholder screens for required features.

DELIVERABLES YOU MUST CREATE IMMEDIATELY (PHASE 1–2)
- \`.github/copilot-instructions.md\` containing:
  - Project summary and definition of done
  - Exact pinned versions and LTS policy
  - Folder structure rules
  - Coding standards (TS strict, linting, max ~300 lines per .tsx)
  - Data layer contract (repository interfaces + adapter pattern: mock/local ↔ Dataverse-ready)
  - Run commands
  - Feature acceptance checklist mirroring the scope below
- \`PROGRESS_LEDGER.md\` (living execution log) and enforce its phase gates.
- Standard repo configs: tsconfig (strict), eslint, formatting baseline.

RETAIL FUNCTIONAL SCOPE (ALL REQUIRED)

A) Inventory Tracking
- Product catalog management (create/edit/delete products)
  - SKU (unique), name, description, category, brand, barcode/UPC (optional), cost, price, tax category (optional)
  - Status (active/inactive/discontinued)
- Stock levels and movements
  - Current on-hand quantity per location (at least one default store; multi-location ready if feasible)
  - Stock adjustments (reason codes: receiving, sale, return, damage, theft, correction)
  - Stock movement history/audit trail (timestamp, user/actor, delta, reason)
- Reorder management
  - Reorder point and reorder quantity per product (and per location if supported)
  - Low-stock alerts and a “Reorder Needed” list
- Inventory views
  - Search by SKU/name/barcode
  - Filters by category/status/low stock
  - Product detail page showing stock history and key metrics

B) Order Management
- Orders (create, view, update, cancel) with full workflow
  - Order status: draft, placed, paid, picking, fulfilled, shipped (optional), completed, cancelled, refunded (optional)
  - Line items linked to products with quantity, unit price, discount (optional), tax (optional), line total
  - Order totals: subtotal, discounts, tax, grand total
- Order fulfillment logic
  - When order is placed/paid, decrement on-hand inventory (with clear business rules)
  - When order is cancelled/refunded (if implemented), restock inventory with an audit entry
- Assignments (optional but recommended)
  - Assign order to staff member for picking/fulfillment
- Order views
  - List view with filters (status, date range)
  - Detail view with timeline/audit
  - Basic receipt/invoice view (in-app; PDF export optional)

C) Customer Profiles
- Customer CRUD
  - Name, email (unique if provided), phone, address (optional), notes
  - Basic preferences (optional)
- Order history per customer
  - Link orders to customers
  - Customer detail page shows spend and order list
- Customer analytics (simple but real)
  - Total spend, average order value, last purchase date, purchase frequency indicator
- Privacy/UX
  - Clear consent-style wording for storing customer notes (basic disclaimer in UI)

D) Dashboards & Analytics (Required)
- KPI dashboard with real computed metrics:
  - Total products
  - Low stock items count
  - Inventory value on hand (cost-based and/or retail-based; document approach)
  - Orders today / this week
  - Revenue (based on completed/paid orders; document status rules)
  - Top-selling products (by quantity or revenue; document)
  - Returning customers count (based on >1 order)
- Charts/visuals (simple but real)
  - Orders over time (daily)
  - Low stock by category
  - Top products bar chart

ARCHITECTURE EXPECTATIONS
- Clear data models for products, inventory levels/movements, orders/order items, customers, staff (if used), locations (optional).
- Thin data-access layer (interfaces) suitable for swapping between local/mock storage and Dataverse.
- Reusable components + modular feature folders.
- Scaffold full structure first (routes, layout, navigation) then implement features incrementally WITHOUT SKIPPING ANY REQUIRED AREA.

DATA LAYER REQUIREMENTS
- All UI/business logic depends on repository interfaces only.
- Provide at least one working implementation using local persistence (persist across reload).
- Provide clear adapter boundary so a future Dataverse implementation can replace local adapter with minimal changes.
- Audit/movement/order history must be stored and viewable (not computed-only, not transient).

EXECUTION PLAN (MUST FOLLOW; UPDATE PROGRESS_LEDGER.md EACH PHASE)
Phase 0: Verify latest LTS versions via MCP (no guessing) and decide minimal stable libs.
Phase 1: Scaffold Vite+React+TS repo; add strict TS, linting; pin versions; add \`.nvmrc\` and engines.node.
Phase 2: Create \`.github/copilot-instructions.md\` and \`PROGRESS_LEDGER.md\` in full.
Phase 3: App shell + routing + nav for all modules (mobile-first).
Phase 4: Domain models + validation schemas.
Phase 5: Repository interfaces + working local persistence adapter + seed data + provider injection.
Phase 6: Implement features end-to-end in order:
  6A Staff (optional) + basic identity for audit entries (or implement a simple “actor” field)
  6B Products CRUD + search + filters + details
  6C Inventory levels + stock adjustments + movement/audit trail + low stock alerts + reorder list
  6D Customers CRUD + customer detail metrics + order history linkage
  6E Orders CRUD + workflow/status transitions + inventory decrement/restock rules + audit timeline
Phase 7: Analytics dashboard with real computed KPIs and charts.
Phase 8: UX polish (toasts, empty/loading states) + accessibility verification.
Phase 9: Quality gates (build passes, lint passes, TS strict, .tsx size rule enforced; add tests for KPI calculations and stock adjustment/order decrement logic if test stack present).
Phase 10: Final docs (README) + update copilot-instructions + end-to-end walkthrough verification.

BUSINESS LOGIC RULES (DOCUMENT IN COPILOT INSTRUCTIONS)
- Define exactly when inventory is decremented (e.g., on “paid” or “fulfilled”) and ensure consistency.
- Ensure cancellations/refunds (if implemented) properly restock with an audit entry.
- Prevent negative on-hand inventory unless an explicit override is used (document behavior).
- SKU must be unique; enforce validation and error UX.

OUTPUT / REPORTING REQUIREMENTS
- At the end of scaffolding, print “Repo Artifacts Created” listing key files/folders including \`.github/copilot-instructions.md\` and \`PROGRESS_LEDGER.md\`.
- After each phase: update PROGRESS_LEDGER.md with:
  - status (complete)
  - what changed (files/folders)
  - how to verify (exact commands + key UI clicks)

START NOW
1) Run Phase 0 (MCP version verification) and pin versions.
2) Execute Phases 1–2 (scaffold + governance artifacts) before any feature work.
3) Continue phases sequentially, updating the ledger and keeping copilot-instructions current.`

  const oilGasPrompt = `You are GitHub Copilot running in Agent/Beast Mode with access to Context7 MCP and Microsoft Learn MCP.

MISSION
Build a fully functional, production-ready Field Asset Management web application (NOT a mock UI). It must include real data models, complete CRUD, business logic, navigation/app shell, and working persistence via a swappable data-access layer (mock/local now, Dataverse-ready abstraction).

NON-NEGOTIABLES (BLOCKING)
1) LTS-ONLY: Use the latest Long-Term Support (LTS) version of EVERY major component (Node.js, Vite, React, TypeScript, Router, UI framework, forms/validation, charts, state). Do NOT guess versions.
   - Use Context7 MCP (and Microsoft Learn MCP when relevant) to confirm current LTS/latest stable versions compatible with Node LTS.
   - Pin versions explicitly in package.json (no wildcards). Add \`.nvmrc\` and \`package.json\` engines.node.
2) REPO GOVERNANCE: Create and maintain \`.github/copilot-instructions.md\` during scaffolding (before feature implementation). Treat it as a binding contract. Keep it updated as the project evolves.
3) PROGRESS LEDGER: Create \`PROGRESS_LEDGER.md\` in repo root during scaffolding and update it at the end of every phase (0–10). You may NOT advance phases until the current phase is marked complete and includes verification steps.
4) ARCHITECTURE: Feature-based modular folders, reusable components, thin data layer. No single .tsx file > ~300 lines (refactor into components/hooks).
5) USABILITY: Mobile-first responsive design (tablets/phones), accessible UI (labels, keyboard nav, proper errors), modern professional ORANGE theme, persistent app shell (nav/header/alerts).
6) END-TO-END: The app must run and be usable across all modules; no placeholder screens for required features.

DELIVERABLES YOU MUST CREATE IMMEDIATELY (PHASE 1–2)
- \`.github/copilot-instructions.md\` containing:
  - Project summary and definition of done
  - Exact pinned versions and LTS policy
  - Folder structure rules
  - Coding standards (TS strict, linting, max ~300 lines per .tsx)
  - Data layer contract (repository interfaces + adapter pattern: mock/local ↔ Dataverse-ready)
  - Run commands
  - Feature acceptance checklist mirroring the scope below
- \`PROGRESS_LEDGER.md\` (living execution log) and enforce its phase gates.
- Standard repo configs: tsconfig (strict), eslint, formatting baseline.

FUNCTIONAL SCOPE (ALL REQUIRED)
Equipment/Asset Management
- Create/edit/delete equipment records
- Equipment ID, type, location, status tracking
- Criticality levels (critical/high/medium/low)
- Installation date and expected lifecycle

Maintenance Scheduling & Tracking
- Schedule preventive maintenance tasks
- Track maintenance history per asset
- Assign work orders to technicians
- Record labor hours and parts used
- Overdue maintenance alerts and notifications

Safety Inspection Management
- Create and complete safety inspection forms
- Photo/document upload capability (local persisted)
- Pass/fail/conditional status
- Inspector signature and timestamp
- Inspection history and audit trail (completed records immutable)

Work Order Management
- Create/assign/complete work orders
- Priority (emergency/urgent/routine)
- Status (open/in-progress/completed/cancelled)
- Link work orders to specific assets

Equipment Monitoring & Alerts
- Real-time status indicators (operational/down/maintenance)
- Alert dashboard for critical equipment issues
- Equipment downtime tracking
- Performance metrics and utilization rates (simple but real)

Reporting & Analytics Dashboard
- KPIs: total assets, maintenance compliance, overdue tasks, equipment uptime
- Maintenance cost tracking
- Safety inspection compliance rates
- Asset health overview (document the scoring rubric)

ARCHITECTURE EXPECTATIONS
- Clear data models for equipment, maintenance, inspections, work orders, technicians
- Thin data-access layer (interfaces) suitable for swapping between local/mock storage and Dataverse
- Reusable components + modular feature folders
- Scaffold full structure first (routes, layout, navigation) then implement features incrementally WITHOUT SKIPPING ANY AREA

EXECUTION PLAN (MUST FOLLOW; UPDATE PROGRESS_LEDGER.md EACH PHASE)
Phase 0: Verify latest LTS versions via MCP (no guessing) and decide minimal stable libs.
Phase 1: Scaffold Vite+React+TS repo; add strict TS, linting; pin versions; add \`.nvmrc\` and engines.node.
Phase 2: Create \`.github/copilot-instructions.md\` and \`PROGRESS_LEDGER.md\` in full.
Phase 3: App shell + routing + nav for all modules (mobile-first).
Phase 4: Domain models + validation schemas.
Phase 5: Repository interfaces + working local persistence adapter + seed data + provider injection.
Phase 6: Implement features end-to-end in order:
  6A Technicians CRUD
  6B Equipment CRUD + filters + details + lifecycle computations
  6C Work Orders CRUD + transitions + linkage + history
  6D Maintenance scheduling + history + labor/parts + overdue detection + global alerts
  6E Inspections workflow + attachments + signature + timestamps + immutable audit trail
  6F Monitoring & alerts + downtime + utilization metrics
Phase 7: Analytics dashboard with real computed KPIs and charts.
Phase 8: UX polish (toasts, empty/loading states) + accessibility verification.
Phase 9: Quality gates (build passes, lint passes, TS strict, .tsx size rule enforced; add tests for KPI/overdue logic if test stack present).
Phase 10: Final docs (README) + update copilot-instructions + end-to-end walkthrough verification.

DATA LAYER REQUIREMENTS
- All UI/business logic depends on repository interfaces only.
- Provide at least one working implementation using local persistence (persist across reload).
- Provide clear adapter boundary so Dataverse implementation can replace local adapter with minimal changes.

OUTPUT / REPORTING REQUIREMENTS
- At the end of scaffolding, print “Repo Artifacts Created” listing key files/folders including \`.github/copilot-instructions.md\` and \`PROGRESS_LEDGER.md\`.
- After each phase: update PROGRESS_LEDGER.md with:
  - status (complete)
  - what changed (files/folders)
  - how to verify (exact commands + key UI clicks)

START NOW
1) Run Phase 0 (MCP version verification) and pin versions.
2) Execute Phases 1–2 (scaffold + governance artifacts) before any feature work.
3) Continue phases sequentially, updating the ledger and keeping copilot-instructions current.`

  const transportationPrompt = `You are GitHub Copilot running in Agent/Beast Mode with access to Context7 MCP and Microsoft Learn MCP.

MISSION
Build a fully functional, production-ready Transportation & Logistics “Fleet Operations Dashboard” web application (NOT a mock UI). It must include real data models, complete CRUD, business logic, navigation/app shell, and working persistence via a swappable data-access layer (mock/local now, Dataverse-ready abstraction). This should be suitable to demonstrate a real “Power Apps Code-First / Dataverse-ready” style solution.

NON-NEGOTIABLES (BLOCKING)
1) LTS-ONLY: Use the latest Long-Term Support (LTS) version of EVERY major component (Node.js, Vite, React, TypeScript, Router, UI framework, forms/validation, charts, state). Do NOT guess versions.
   - Use Context7 MCP (and Microsoft Learn MCP when relevant) to confirm current LTS/latest stable versions compatible with Node LTS.
   - Pin versions explicitly in package.json (no wildcards). Add \`.nvmrc\` and \`package.json\` engines.node.
2) REPO GOVERNANCE: Create and maintain \`.github/copilot-instructions.md\` during scaffolding (before feature implementation). Treat it as a binding contract. Keep it updated as the project evolves.
3) PROGRESS LEDGER: Create \`PROGRESS_LEDGER.md\` in repo root during scaffolding and update it at the end of every phase (0–10). You may NOT advance phases until the current phase is marked complete and includes verification steps.
4) ARCHITECTURE: Feature-based modular folders, reusable components, thin data layer. No single .tsx file > ~300 lines (refactor into components/hooks).
5) USABILITY: Mobile-first responsive design (dispatchers + drivers use tablets/phones), accessible UI (labels, keyboard nav, proper errors), modern professional theme (choose a cohesive logistics-forward palette; document it), persistent app shell (nav/header/alerts).
6) END-TO-END: The app must run and be usable across all required modules; no placeholder screens for required features.

DELIVERABLES YOU MUST CREATE IMMEDIATELY (PHASE 1–2)
- \`.github/copilot-instructions.md\` containing:
  - Project summary and definition of done
  - Exact pinned versions and LTS policy
  - Folder structure rules
  - Coding standards (TS strict, linting, max ~300 lines per .tsx)
  - Data layer contract (repository interfaces + adapter pattern: mock/local ↔ Dataverse-ready)
  - Run commands
  - Feature acceptance checklist mirroring the scope below
- \`PROGRESS_LEDGER.md\` (living execution log) and enforce its phase gates.
- Standard repo configs: tsconfig (strict), eslint, formatting baseline.

TRANSPORTATION & LOGISTICS FUNCTIONAL SCOPE (ALL REQUIRED)

A) Vehicle Tracking (Core)
- Vehicle (fleet) management (create/edit/delete)
  - Vehicle ID/unit number (unique), VIN (optional), make/model/year (optional), type (van/truck/etc.), capacity (weight/volume), status (available/in-service/maintenance/out-of-service)
  - Current assigned driver (optional) and home depot (optional)
- Location tracking (simulated but real)
  - Store and display last-known location per vehicle: lat/long + timestamp + speed (optional) + heading (optional)
  - Provide a “Simulate GPS Updates” mechanism that writes periodic location updates into persistence (e.g., button to start/stop simulation or generate updates)
  - Vehicle timeline/history (view last N location pings and status changes)
- Alerts
  - Vehicle offline/stale location alert (e.g., no update in X minutes)
  - Maintenance status alert (if vehicle is set to maintenance/out-of-service)
  - Simple geofence alert (optional but recommended): if vehicle leaves a defined service area polygon/box

B) Route Optimization (Core)
- Stops/Jobs
  - Manage delivery stops/jobs with: address (text), geocode (lat/long optional), service time (minutes), time window (start/end), priority, notes
- Route building (real logic; may be heuristic, not “perfect”)
  - Generate an optimized sequence of stops for a route using a clear, documented heuristic:
    - Minimum requirement: nearest-neighbor + time-window-aware ordering, with capacity constraint checks
    - Score function must be documented in copilot instructions
  - Support constraints:
    - Vehicle capacity (weight/volume) vs. stop demand
    - Driver shift window (start/end)
    - Stop time windows (if provided)
- Route visualization
  - Show route stop order, estimated drive time, total distance (can be approximate)
  - Provide a map view (optional) OR a clear list/timeline view (required). If you add a map library, keep it stable and LTS-compatible; do not guess APIs.
- Route recalculation
  - “Re-optimize” route when:
    - a stop is added/removed
    - time windows change
    - vehicle changes

C) Delivery Scheduling (Core)
- Dispatch scheduling
  - Create delivery schedules for a given date, vehicle, and driver:
    - Assign a route (stop list) to a vehicle/driver
    - Scheduled start time and expected end time
    - Status: planned, dispatched, in-progress, completed, cancelled
- Calendar / timeline view (required)
  - Day view or week view that shows deliveries by vehicle/driver
  - Ability to drag/drop is optional; but create/update must be fully functional
- Execution flow
  - Mark deliveries as dispatched/in-progress/completed with timestamps
  - Capture proof-of-delivery fields per stop (simple but real):
    - delivered/not delivered
    - delivery timestamp
    - optional notes
    - optional photo upload (local persisted)

D) Operations Dashboard & Analytics (Required)
- KPIs (computed from real stored data):
  - Vehicles active today
  - Deliveries scheduled / completed / late
  - On-time delivery rate (%)
  - Average route duration
  - Total estimated miles (or distance) today/this week
  - Utilization: deliveries per vehicle per day (simple but real)
- Alerts panel:
  - stale vehicle location
  - late deliveries
  - routes violating constraints (capacity/time windows) flagged
- Charts (simple but real):
  - Deliveries over time
  - On-time rate trend
  - Vehicle utilization distribution

ARCHITECTURE EXPECTATIONS
- Clear domain models for: vehicles, drivers, depots (optional), stops/jobs, routes, schedules/deliveries, GPS pings/location history, POD records, alerts.
- Thin data-access layer (interfaces) suitable for swapping between local/mock storage and Dataverse.
- Reusable components + modular feature folders.
- Scaffold full structure first (routes, layout, navigation) then implement features incrementally WITHOUT SKIPPING ANY REQUIRED AREA.

DATA LAYER REQUIREMENTS
- All UI/business logic depends on repository interfaces only.
- Provide at least one working implementation using local persistence (persist across reload).
- Provide a clear adapter boundary so a future Dataverse implementation can replace local adapter with minimal changes.
- History/audit records (GPS pings, delivery status changes, POD entries) must be stored and viewable (not transient).

BUSINESS LOGIC RULES (DOCUMENT IN COPILOT INSTRUCTIONS)
- Define “late delivery” precisely (e.g., completed after scheduled end OR stop delivered after time window).
- Define “stale location” threshold and how it triggers alerts.
- Document route optimization heuristic and its constraints handling:
  - what happens when constraints cannot be met (flag + still produce best-effort route)
- Prevent scheduling a vehicle that is out-of-service unless explicitly overridden (document behavior).
- Ensure unique identifiers: vehicle unit number unique; route IDs unique; schedule IDs unique.

EXECUTION PLAN (MUST FOLLOW; UPDATE PROGRESS_LEDGER.md EACH PHASE)
Phase 0: Verify latest LTS versions via MCP (no guessing) and decide minimal stable libs.
Phase 1: Scaffold Vite+React+TS repo; add strict TS, linting; pin versions; add \`.nvmrc\` and engines.node.
Phase 2: Create \`.github/copilot-instructions.md\` and \`PROGRESS_LEDGER.md\` in full.
Phase 3: App shell + routing + nav for all modules (mobile-first).
Phase 4: Domain models + validation schemas.
Phase 5: Repository interfaces + working local persistence adapter + seed data + provider injection.
Phase 6: Implement features end-to-end in order:
  6A Drivers CRUD (and Depots optional) + actor identity for audit entries
  6B Vehicles CRUD + status + location display + location history
  6C GPS simulation engine (writes pings to persistence) + stale/offline alerts
  6D Stops/Jobs CRUD + time windows + demand/capacity fields
  6E Route optimization (heuristic) + route editor + re-optimize workflow + constraint flags
  6F Delivery scheduling (calendar/timeline) + assign routes to vehicle/driver + status timestamps
  6G Proof-of-delivery per stop + optional photo upload (local persisted)
Phase 7: Operations dashboard analytics with real KPIs and charts + alerts panel.
Phase 8: UX polish (toasts, empty/loading states) + accessibility verification.
Phase 9: Quality gates (build passes, lint passes, TS strict, .tsx size rule enforced; add tests for optimization scoring, lateness calc, stale-location detection if test stack present).
Phase 10: Final docs (README) + update copilot-instructions + end-to-end walkthrough verification.

OUTPUT / REPORTING REQUIREMENTS
- At the end of scaffolding, print “Repo Artifacts Created” listing key files/folders including \`.github/copilot-instructions.md\` and \`PROGRESS_LEDGER.md\`.
- After each phase: update PROGRESS_LEDGER.md with:
  - status (complete)
  - what changed (files/folders)
  - how to verify (exact commands + key UI clicks)

START NOW
1) Run Phase 0 (MCP version verification) and pin versions.
2) Execute Phases 1–2 (scaffold + governance artifacts) before any feature work.
3) Continue phases sequentially, updating the ledger and keeping copilot-instructions current.`

  const manufacturingPrompt = `You are GitHub Copilot running in Agent/Beast Mode with access to Context7 MCP and Microsoft Learn MCP.

MISSION
Build a fully functional, production-ready Manufacturing “Production Tracker” web application (NOT a mock UI). It must include real data models, complete CRUD, business logic, navigation/app shell, and working persistence via a swappable data-access layer (mock/local now, Dataverse-ready abstraction). This should be suitable to demonstrate a real “Power Apps Code-First / Dataverse-ready” style solution.

NON-NEGOTIABLES (BLOCKING)
1) LTS-ONLY: Use the latest Long-Term Support (LTS) version of EVERY major component (Node.js, Vite, React, TypeScript, Router, UI framework, forms/validation, charts, state). Do NOT guess versions.
   - Use Context7 MCP (and Microsoft Learn MCP when relevant) to confirm current LTS/latest stable versions compatible with Node LTS.
  - Pin versions explicitly in package.json (no wildcards). Add \`.nvmrc\` and \`package.json\` engines.node.
2) REPO GOVERNANCE: Create and maintain \`.github/copilot-instructions.md\` during scaffolding (before feature implementation). Treat it as a binding contract. Keep it updated as the project evolves.
3) PROGRESS LEDGER: Create \`PROGRESS_LEDGER.md\` in repo root during scaffolding and update it at the end of every phase (0–10). You may NOT advance phases until the current phase is marked complete and includes verification steps.
4) ARCHITECTURE: Feature-based modular folders, reusable components, thin data layer. No single .tsx file > ~300 lines (refactor into components/hooks).
5) USABILITY: Mobile-first responsive design (floor supervisors + operators use tablets/phones), accessible UI (labels, keyboard nav, proper errors), modern professional theme (manufacturing-forward palette; document it), persistent app shell (nav/header/alerts).
6) END-TO-END: The app must run and be usable across all required modules; no placeholder screens for required features.

DELIVERABLES YOU MUST CREATE IMMEDIATELY (PHASE 1–2)
- \`.github/copilot-instructions.md\` containing:
  - Project summary and definition of done
  - Exact pinned versions and LTS policy
  - Folder structure rules
  - Coding standards (TS strict, linting, max ~300 lines per .tsx)
  - Data layer contract (repository interfaces + adapter pattern: mock/local ↔ Dataverse-ready)
  - Run commands
  - Feature acceptance checklist mirroring the scope below
- \`PROGRESS_LEDGER.md\` (living execution log) and enforce its phase gates.
- Standard repo configs: tsconfig (strict), eslint, formatting baseline.

MANUFACTURING FUNCTIONAL SCOPE (ALL REQUIRED)

A) Production Monitoring (Core)
- Master data management (CRUD)
  - Products: SKU (unique), name, unit of measure, standard cycle time (optional), target yield % (optional)
  - Work Centers / Lines: line ID (unique), name, type, status (active/maintenance/offline)
  - Operators (optional but recommended): name/employee ID, shift assignment
- Production Orders (CRUD + workflow)
  - Production order ID (unique), product, planned quantity, start/end planned, priority
  - Status: planned, released, in-progress, on-hold, completed, cancelled
  - Assignment to line/work center and shift (optional)
- Production events (real, persisted)
  - Record actual production output events: timestamp, quantity produced, quantity scrapped, operator (optional), line/work center
  - Support “Start run / Pause / Resume / Complete” actions with timestamps
- Real-time-ish dashboard (simulated but real)
  - Provide a “Simulate production events” control that writes output events into persistence on an interval
  - Show current run metrics:
    - Actual vs planned quantity
    - Throughput rate (units/hour)
    - Scrap rate
    - Estimated completion time (simple, documented formula)
- Alerts
  - Behind-schedule alert (if projected completion exceeds planned end)
  - High scrap alert (scrap rate above threshold)
  - Line offline/maintenance alert affecting active orders

B) Quality Checks (Core)
- Quality check templates (CRUD)
  - Define check types: visual, dimensional, functional, packaging, etc.
  - Define checklist items with pass/fail/measurement fields and acceptable ranges (where applicable)
- Quality inspections (create/execute)
  - Link inspection to a production order and optionally a lot/batch
  - Record results per checklist item:
    - pass/fail
    - measurement value (optional) + tolerance validation
    - notes
  - Capture inspector identity (operator/supervisor) + timestamp
- Nonconformance management
  - If an inspection fails, create a nonconformance record automatically:
    - severity (critical/major/minor)
    - disposition (rework, scrap, use-as-is, hold)
    - containment actions (notes)
  - Track status: open, investigating, corrective action, closed
- Audit trail
  - Completed inspections are immutable (do not overwrite; create revisions if needed)

C) Material Tracking (Core)
- Materials master (CRUD)
  - Material ID (unique), name, unit of measure, supplier (optional), cost (optional)
- Inventory lots/batches (CRUD + movements)
  - Lot ID (unique), material, quantity on hand, location (warehouse/bin), expiration date (optional)
  - Status: available, quarantined, consumed, expired
- Material consumption tied to production
  - Define Bill of Materials (BOM) per product (required materials + qty per unit)
  - For a production order, compute required material quantities from planned quantity and BOM
  - Record material consumption events:
    - timestamp, lot used, qty consumed, linked production order
  - Prevent consuming more than available unless explicit override (document behavior)
- Material alerts
  - Low material alert (below reorder threshold)
  - Quarantine/expired lot alert
  - Material shortage alert for active/released production orders

D) Dashboards & Analytics (Required)
- KPIs computed from real stored data:
  - Active production orders (by status)
  - On-time completion rate (planned end vs actual completion)
  - OEE-lite metrics (simple but real; document formula):
    - Availability (runtime vs planned time, if tracked)
    - Performance (actual throughput vs target)
    - Quality (good units vs total)
  - Scrap rate trend
  - First-pass yield % (from quality inspections)
  - Material consumption vs expected (variance)
  - Top nonconformance causes (if you model causes; optional)
- Charts/visuals (simple but real)
  - Output over time
  - Scrap rate over time
  - Inspection pass rate trend
  - Material inventory levels by material

ARCHITECTURE EXPECTATIONS
- Clear domain models for: products, work centers/lines, production orders, production events, quality templates, quality inspections, nonconformance records, materials, lots, BOMs, inventory movements, consumption events, alerts.
- Thin data-access layer (interfaces) suitable for swapping between local/mock storage and Dataverse.
- Reusable components + modular feature folders.
- Scaffold full structure first (routes, layout, navigation) then implement features incrementally WITHOUT SKIPPING ANY REQUIRED AREA.

DATA LAYER REQUIREMENTS
- All UI/business logic depends on repository interfaces only.
- Provide at least one working implementation using local persistence (persist across reload).
- Provide a clear adapter boundary so a future Dataverse implementation can replace local adapter with minimal changes.
- History/audit records (production events, inspection results, inventory movements, consumption events) must be stored and viewable (not transient).

BUSINESS LOGIC RULES (DOCUMENT IN COPILOT INSTRUCTIONS)
- Define how “behind schedule” is calculated and when it triggers alerts.
- Define scrap rate thresholds and how alerts are generated.
- Define inspection immutability and how revisions are handled (new record with reference to prior).
- Define consumption rules (no negative inventory by default; override behavior documented).
- Enforce uniqueness: product SKU, work center ID, production order ID, material ID, lot ID.

EXECUTION PLAN (MUST FOLLOW; UPDATE PROGRESS_LEDGER.md EACH PHASE)
Phase 0: Verify latest LTS versions via MCP (no guessing) and decide minimal stable libs.
Phase 1: Scaffold Vite+React+TS repo; add strict TS, linting; pin versions; add \`.nvmrc\` and engines.node.
Phase 2: Create \`.github/copilot-instructions.md\` and \`PROGRESS_LEDGER.md\` in full.
Phase 3: App shell + routing + nav for all modules (mobile-first).
Phase 4: Domain models + validation schemas.
Phase 5: Repository interfaces + working local persistence adapter + seed data + provider injection.
Phase 6: Implement features end-to-end in order:
  6A Master data CRUD (Products, Work Centers/Lines, Operators optional)
  6B Production Orders CRUD + workflow + assignment to line + run controls (start/pause/resume/complete) + event logging
  6C Production simulation engine (writes production events) + behind-schedule/high-scrap alerts
  6D Quality templates CRUD + inspections execution + tolerance validation + inspector identity + immutable audit trail
  6E Nonconformance records auto-created on failures + disposition + status workflow
  6F Materials master CRUD + lots/batches + inventory movements
  6G BOM management + consumption calculation + consumption event logging + shortage/quarantine/expired alerts
Phase 7: Manufacturing analytics dashboard with real KPIs and charts + alerts panel.
Phase 8: UX polish (toasts, empty/loading states) + accessibility verification.
Phase 9: Quality gates (build passes, lint passes, TS strict, .tsx size rule enforced; add tests for behind-schedule calc, OEE-lite metrics, inspection immutability, and consumption rules if test stack present).
Phase 10: Final docs (README) + update copilot-instructions + end-to-end walkthrough verification.

OUTPUT / REPORTING REQUIREMENTS
- At the end of scaffolding, print “Repo Artifacts Created” listing key files/folders including \`.github/copilot-instructions.md\` and \`PROGRESS_LEDGER.md\`.
- After each phase: update PROGRESS_LEDGER.md with:
  - status (complete)
  - what changed (files/folders)
  - how to verify (exact commands + key UI clicks)

START NOW
1) Run Phase 0 (MCP version verification) and pin versions.
2) Execute Phases 1–2 (scaffold + governance artifacts) before any feature work.
3) Continue phases sequentially, updating the ledger and keeping copilot-instructions current.`

  const healthcarePrompt = `Objective
Build a fully functional, production-ready patient appointment system, not a mock UI or partial prototype. The app must include working data models, CRUD flows, business logic, navigation, and basic persistence (mock/local or Dataverse-ready abstraction).
Visual & UX Requirements
Modern, professional red-themed UI
Mobile-first responsive design
Accessible, clean layout with a persistent app shell (navigation, header, alerts)
HIPAA-aware design (no actual PHI, but structured as if handling sensitive data)
Functional Scope (ALL REQUIRED)
Implement the following features completely, with working screens, forms, and logic:
Patient Management
Create, edit, delete patient profiles
Patient demographics (name, DOB, contact info)
Insurance information (carrier, policy number, group)
Emergency contact details
Patient status (active, inactive, deceased)
Medical history summary section
Provider Management
Create, edit, delete provider profiles
Provider specialties and credentials
Office locations and contact information
Available appointment types
Provider schedules and working hours
Appointment Scheduling
Schedule, reschedule, and cancel appointments
Available time slot search by provider/specialty
Appointment types (consultation, follow-up, procedure, etc.)
Duration and buffer time configuration
Recurring appointment support
Appointment reminders and notifications
Appointment Management
Check-in/check-out workflow
Appointment status (scheduled, checked-in, in-progress, completed, no-show, cancelled)
Waiting room queue management
Appointment history per patient
Visit notes and reason for visit
Insurance verification status
Calendar & Availability Management
Multi-provider calendar views (day/week/month)
Color-coded appointment types
Block time for breaks/lunch/meetings
Holiday and vacation scheduling
Resource conflict detection
Medical Records Management
Document upload and attachment
Visit summaries and notes
Medication lists
Allergy and condition tracking
Lab results and imaging reports
Document version history
Reporting & Analytics Dashboard
High-level KPIs (daily appointments, no-show rate, provider utilization, wait times)
Patient volume trends
Revenue cycle metrics (insurance vs self-pay)
Provider productivity
Patient satisfaction scores
Architecture Expectations
Clear data models for patients, providers, appointments, medical records, and schedules
A thin data-access layer suitable for swapping between mock storage and Dataverse
Reusable components and modular feature folders
No single .tsx file should exceed ~300 lines
Security considerations for sensitive data
Delivery Expectations
Scaffold the full app structure first (routes, layout, navigation)
Implement features incrementally but do not skip any functional area
Ensure the app can be run, navigated, and used end-to-end
Build this as a complete patient appointment system suitable for demonstrating a real Power Apps Code-First solution, not just a UI showcase.`

  const financePrompt = `You are GitHub Copilot running in Agent/Beast Mode with access to Context7 MCP and Microsoft Learn MCP.

MISSION
Build a fully functional, production-ready Financial Services “Financial Request Portal” web application (NOT a mock UI). It must include real data models, complete CRUD, business logic, navigation/app shell, and working persistence via a swappable data-access layer (mock/local now, Dataverse-ready abstraction). This should be suitable to demonstrate a real “Power Apps Code-First / Dataverse-ready” style solution.

NON-NEGOTIABLES (BLOCKING)
1) LTS-ONLY: Use the latest Long-Term Support (LTS) version of EVERY major component (Node.js, Vite, React, TypeScript, Router, UI framework, forms/validation, charts, state). Do NOT guess versions.
   - Use Context7 MCP (and Microsoft Learn MCP when relevant) to confirm current LTS/latest stable versions compatible with Node LTS.
   - Pin versions explicitly in package.json (no wildcards). Add .nvmrc and package.json engines.node.
2) REPO GOVERNANCE: Create and maintain .github/copilot-instructions.md during scaffolding (before feature implementation). Treat it as a binding contract. Keep it updated as the project evolves.
3) PROGRESS LEDGER: Create PROGRESS_LEDGER.md in repo root during scaffolding and update it at the end of every phase (0–10). You may NOT advance phases until the current phase is marked complete and includes verification steps.
4) ARCHITECTURE: Feature-based modular folders, reusable components, thin data layer. No single .tsx file > ~300 lines (refactor into components/hooks).
5) USABILITY: Mobile-first responsive design (approvers may use phones; requesters use desktop), accessible UI (labels, keyboard nav, proper errors), modern professional financial theme (trustworthy palette; document it), persistent app shell (nav/header/alerts).
6) END-TO-END: The app must run and be usable across all required modules; no placeholder screens for required features.
7) SECURITY MINDSET (non-auth demo): Even if auth is not implemented, design as if real users exist:
   - Role concepts (Requester, Approver, Finance Admin) must be modeled and enforced in UI logic
   - Document access and audit trail must be captured
   - Do NOT store secrets in client code

DELIVERABLES YOU MUST CREATE IMMEDIATELY (PHASE 1–2)
- .github/copilot-instructions.md containing:
  - Project summary and definition of done
  - Exact pinned versions and LTS policy
  - Folder structure rules
  - Coding standards (TS strict, linting, max ~300 lines per .tsx)
  - Data layer contract (repository interfaces + adapter pattern: mock/local ↔ Dataverse-ready)
  - Run commands
  - Feature acceptance checklist mirroring the scope below
  - Workflow rules (statuses, approvals, SLA/aging, audit logging)
- PROGRESS_LEDGER.md (living execution log) and enforce its phase gates.
- Standard repo configs: tsconfig (strict), eslint, formatting baseline.

FINANCIAL SERVICES FUNCTIONAL SCOPE (ALL REQUIRED)

A) Request Tracking (Core)
- Financial Requests CRUD with full lifecycle
  - Request ID (unique), request type, requester, department/cost center (optional), amount (currency), due date/needed-by date, description/justification
  - Status workflow (minimum):
    - draft → submitted → in-review → approved / rejected → funded / closed
    - allow “needs-more-info” as a sub-state or flag
  - Priority: low/normal/high/urgent
- Request list views (requester + approver perspectives)
  - Search by ID, requester name, type, status
  - Filters by status, priority, date range, amount range
  - “My Requests” view (as requester)
  - “Pending My Approval” view (as approver)
- Request details page
  - Full metadata + timeline/audit log (required)
  - Linked approvals and documents (required)

B) Approval Workflows (Core)
- Configurable approval routing (kept simple but real)
  - At minimum support:
    - Single-step approval (one approver)
    - Two-step approval (manager approval then finance approval)
  - Approver assignment rules:
    - manual selection OR rule-based by request type/amount threshold (document rules)
- Approval actions
  - approve, reject, request changes/more info
  - required comment on reject and on request-more-info
  - timestamps + approver identity
- Audit trail (required)
  - Every workflow transition recorded:
    - who acted
    - when
    - previous status → new status
    - comment
- SLA/aging (required)
  - Track “days in current status”
  - Flag overdue items (past due date or SLA threshold you define and document)

C) Document Management (Core)
- Document upload and linking (local persisted)
  - Upload documents to a request (receipt, invoice, quote, statement, etc.)
  - Store file metadata: filename, type, size, upload timestamp, uploader identity
  - Support multiple documents per request
- Document list + preview/download
  - Show documents on request detail
  - Provide a safe preview option where possible (basic is OK)
- Document versioning (lightweight but real)
  - If a file with same “document type” is uploaded again, store as a new version record (do not overwrite)
- Compliance-friendly behavior
  - Mark documents as “confidential” (boolean) and reflect this in UI (icon + warning)
  - Log access events (view/download) into audit trail (simple but real)

D) Operational Dashboard & Analytics (Required)
- KPIs computed from real stored data:
  - Total requests (by status)
  - Pending approvals count
  - Average approval time (submitted → approved/rejected)
  - Overdue requests count
  - Volume by request type
  - Total approved amount (time filtered)
- Charts (simple but real)
  - Requests over time (daily/weekly)
  - Status distribution
  - Approval time trend (average by week)
  - Top request types by volume/amount

ARCHITECTURE EXPECTATIONS
- Clear domain models for: requests, request types, users/roles (at least modeled), approval steps, approval actions, workflow transitions, documents, document versions, access logs/audit events, SLA rules (if modeled).
- Thin data-access layer (interfaces) suitable for swapping between local/mock storage and Dataverse.
- Reusable components + modular feature folders.
- Scaffold full structure first (routes, layout, navigation) then implement features incrementally WITHOUT SKIPPING ANY REQUIRED AREA.

DATA LAYER REQUIREMENTS
- All UI/business logic depends on repository interfaces only.
- Provide at least one working implementation using local persistence (persist across reload).
- Provide a clear adapter boundary so a future Dataverse implementation can replace local adapter with minimal changes.
- Audit records and document versions must be stored and viewable (not transient).

BUSINESS LOGIC RULES (DOCUMENT IN COPILOT INSTRUCTIONS)
- Define status machine and allowed transitions (reject cannot go to funded; funded requires approved, etc.).
- Define approval routing rules (e.g., amount > X requires finance step).
- Define SLA/overdue logic and thresholds.
- Ensure immutability rules:
  - submitted requests cannot have critical fields edited without creating a change request or reverting to draft (choose a rule and document it)
  - documents are append-only via version records (do not overwrite)
- Ensure unique identifiers and validation:
  - Request ID unique
  - required fields enforced
  - currency formatting and amount bounds

EXECUTION PLAN (MUST FOLLOW; UPDATE PROGRESS_LEDGER.md EACH PHASE)
Phase 0: Verify latest LTS versions via MCP (no guessing) and decide minimal stable libs.
Phase 1: Scaffold Vite+React+TS repo; add strict TS, linting; pin versions; add .nvmrc and engines.node.
Phase 2: Create .github/copilot-instructions.md and PROGRESS_LEDGER.md in full.
Phase 3: App shell + routing + nav for all modules (mobile-first).
Phase 4: Domain models + validation schemas + workflow/status definitions.
Phase 5: Repository interfaces + working local persistence adapter + seed data + provider injection.
Phase 6: Implement features end-to-end in order:
  6A Users/Roles (modeled) + actor identity for audit entries (Requester/Approver/Admin)
  6B Financial Requests CRUD + list views + details + search/filters + status lifecycle
  6C Approval workflow engine (single-step + two-step) + routing rules + actions + audit transitions
  6D SLA/aging + overdue detection + alerts (global shell badge + dashboard panel)
  6E Document management: upload + metadata + versioning + confidential flag + access logging
Phase 7: Operational analytics dashboard with real KPIs and charts + pending approvals panel.
Phase 8: UX polish (toasts, empty/loading states) + accessibility verification.
Phase 9: Quality gates (build passes, lint passes, TS strict, .tsx size rule enforced; add tests for status machine, routing rules, SLA calc, document versioning if test stack present).
Phase 10: Final docs (README) + update copilot-instructions + end-to-end walkthrough verification.

OUTPUT / REPORTING REQUIREMENTS
- At the end of scaffolding, print “Repo Artifacts Created” listing key files/folders including .github/copilot-instructions.md and PROGRESS_LEDGER.md.
- After each phase: update PROGRESS_LEDGER.md with:
  - status (complete)
  - what changed (files/folders)
  - how to verify (exact commands + key UI clicks)

START NOW
1) Run Phase 0 (MCP version verification) and pin versions.
2) Execute Phases 1–2 (scaffold + governance artifacts) before any feature work.
3) Continue phases sequentially, updating the ledger and keeping copilot-instructions current.`

  const getPromptForIndustry = (industryId: string) => {
    switch (industryId) {
      case 'retail':
        return retailPrompt
      case 'oil-gas-energy':
        return oilGasPrompt
      case 'transportation':
        return transportationPrompt
      case 'manufacturing':
        return manufacturingPrompt
      case 'healthcare':
        return healthcarePrompt
      case 'finance':
        return financePrompt
      default:
        return `Create a ${industry.sampleApp.name} application that tracks ${industry.name.toLowerCase()} data.`
    }
  }

  const initialPrompt = getPromptForIndustry(industry.id)

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-4">
        Set Up Your Project Structure
      </h2>
      <p className="text-slate-300 mb-8">
        Let GitHub Copilot Agent build your entire {industry.sampleApp.name}{' '}
        project structure. You just describe what you want in plain English!
      </p>

      {/* Prerequisites Section */}
      <div className="bg-linear-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-500/40 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-3xl">🚀</span>
          Prerequisites: Set Up Your Development Environment
        </h3>
        <p className="text-slate-300 mb-6">
          Before building your {industry.sampleApp.name} app, complete these
          essential setup steps:
        </p>

        {/* GitHub Copilot & MCP Servers Setup */}
        <div className="bg-slate-800/60 border border-purple-500/30 rounded-lg p-5 mb-5">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-xl">🤖</span>
            1. Set Up Copilot Modes (Ask/Plan/Agent + Beast) and MCP Servers
          </h4>
          <p className="text-slate-300 mb-4 text-sm">
            You’ll use different Copilot modes depending on what you’re doing.
            Use all of them when the situation calls for it:
          </p>
          <ul className="text-slate-300 mb-4 text-sm space-y-2">
            <li>
              <strong className="text-white">Ask mode</strong>: quick
              questions, explanations, and small suggestions (usually no file
              edits).
            </li>
            <li>
              <strong className="text-white">Plan mode</strong>: design and
              planning before big changes (breaks work into steps you can
              review).
            </li>
            <li>
              <strong className="text-white">Agent mode</strong>: actually
              implements changes (creates/edits files, runs commands, validates
              results).
            </li>
            <li>
              <strong className="text-white">Beast Mode</strong> (custom agent
              mode): a more thorough style of Agent mode for “bigger” work (more
              careful reasoning, checks, and end-to-end completion).
            </li>
          </ul>
          <p className="text-slate-300 mb-4 text-sm">
            MCP servers let Copilot securely connect to external tools and
            trusted knowledge sources (for example: official docs, SDK
            references, and project-aware helpers). You’ll install a couple for
            this lab, and you can always add more later if you see ones that
            look useful for future projects.
          </p>
          <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
            <ol className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  a.
                </span>
                <span>
                  In VS Code, click the{' '}
                  <strong className="text-white">Extensions</strong> icon in the
                  left sidebar (or press{' '}
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                    Ctrl+Shift+X
                  </code>
                  )
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  b.
                </span>
                <span>
                  Search for{' '}
                  <strong className="text-white">"GitHub Copilot"</strong> and
                  click <strong className="text-white">Install</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  c.
                </span>
                <span>Sign in with your GitHub account when prompted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  d.
                </span>
                <span>Close the walkthrough steps window</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  e.
                </span>
                <span>
                  Click the{' '}
                  <strong className="text-white">
                    Agent/Ask mode dropdown
                  </strong>{' '}
                  at the bottom of the GitHub Copilot chat
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  f.
                </span>
                <span>
                  Click{' '}
                  <strong className="text-white">
                    "Configure Custom Agents"
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  g.
                </span>
                <span>
                  Click{' '}
                  <strong className="text-white">
                    "Create new custom Agent"
                  </strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  h.
                </span>
                <span>
                  Click <strong className="text-white">"User Data"</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  i.
                </span>
                <span>
                  Enter <strong className="text-white">"Beast Mode"</strong> and
                  press Enter
                </span>
              </li>
            </ol>
            <a
              href="https://gist.githubusercontent.com/burkeholland/88af0249c4b6aff3820bf37898c8bacf/raw/e1898331f1755aff3265d50e30106b8c6987c4f7/beastmode3.chatmode.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-purple-700 text-slate-50 font-black text-sm rounded-lg hover:bg-purple-800 transition-colors shadow-lg shadow-purple-500/50 border-2 border-purple-400"
            >
              <span className="text-slate-50">Open Beast Mode Content →</span>
            </a>
            <ol className="space-y-2 text-sm text-slate-300 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  j.
                </span>
                <span>
                  Copy all the content from the Beast Mode page (
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                    Ctrl+A
                  </code>{' '}
                  then{' '}
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                    Ctrl+C
                  </code>
                  )
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  k.
                </span>
                <span>
                  Paste the content into the{' '}
                  <strong className="text-white">Beast Mode.agent.md</strong>{' '}
                  file that opened in VS Code
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  l.
                </span>
                <span>
                  Save the file (
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                    Ctrl+S
                  </code>
                  )
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  m.
                </span>
                <span>
                  Press{' '}
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                    Ctrl+Shift+P
                  </code>{' '}
                  to open the Command Palette
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  n.
                </span>
                <span>
                  Type{' '}
                  <strong className="text-white">
                    "Preferences: Open User Settings (JSON)"
                  </strong>{' '}
                  and select it
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  o.
                </span>
                <span>
                  Add{' '}
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                    "chat.agent.maxRequests": 200
                  </code>{' '}
                  to the settings file, and add a comma to end of the line
                  before it so it's properly formatted json
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  p.
                </span>
                <span>
                  Go to{' '}
                  <a
                    href="https://www.github.com/mcp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    github.com/mcp
                  </a>{' '}
                  and select <strong className="text-white">"Install"</strong>{' '}
                  for <strong className="text-white">Context7</strong>,{' '}
                  <strong className="text-white">Github</strong>,{' '}
                  <strong className="text-white">Microsoft Learn</strong>, and{' '}
                  <strong className="text-white">Playwright</strong>
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* Fork Vibing101 Repository */}
        <div className="bg-slate-800/60 border border-cyan-500/30 rounded-lg p-5 mb-5">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-xl">🍴</span>
            2. Fork the Vibing101 Repository
          </h4>
          <p className="text-slate-300 mb-3 text-sm">
            Get your own copy of this learning platform to use as a reference:
          </p>
          <ol className="space-y-2 text-slate-300 text-sm ml-4">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">a.</span>
              <span>
                Create a folder for all your future coding projects (e.g.,{' '}
                <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-400">
                  C:\repos
                </code>
                ):
                <pre className="bg-slate-900 px-3 py-2 rounded text-cyan-400 mt-2 overflow-x-auto">
                  mkdir C:\repos
                </pre>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">b.</span>
              <span>
                Navigate to{' '}
                <a
                  href="https://github.com/russrimm/Vibing101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  github.com/russrimm/Vibing101
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">c.</span>
              <span>
                Click the <strong className="text-white">Fork</strong> button
                (top-right corner)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">d.</span>
              <span>GitHub will create a copy in your account</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">e.</span>
              <span>
                Clone your fork to your local machine (for screenshots, see{' '}
                <a
                  href="https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  GitHub Docs: Cloning a repository
                </a>
                ):
                <div className="text-xs text-slate-400 mt-2">
                  On your forked repo page on GitHub: click{' '}
                  <span className="text-slate-200 font-semibold">Code</span>,
                  copy the URL (HTTPS is easiest for beginners), then run:
                </div>
                <pre className="bg-slate-900 px-3 py-2 rounded text-cyan-400 mt-2 overflow-x-auto">
                  cd C:\repos{'\n'}
                  git clone https://github.com/YOUR-USERNAME/Vibing101.git{'\n'}
                  cd Vibing101{'\n'}
                  code .
                </pre>
                <span className="text-xs text-slate-400 mt-1 block">
                  Replace YOUR-USERNAME with your GitHub username (or paste the
                  exact URL you copied).
                </span>
              </span>
            </li>
          </ol>
        </div>

        {/* Enable Instruction Files */}
        <div className="bg-slate-800/60 border border-green-500/30 rounded-lg p-5 mb-5">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            2. Enable Instruction Files in VS Code
          </h4>
          <p className="text-slate-300 mb-3 text-sm">
            Instruction files guide GitHub Copilot with project-specific rules
            and best practices:
          </p>
          <ol className="space-y-2 text-slate-300 text-sm ml-4">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">a.</span>
              <span>
                Open VS Code Settings:
                <ul className="ml-4 mt-1 space-y-1 text-xs">
                  <li>
                    • Windows/Linux:{' '}
                    <kbd className="bg-slate-900 px-1.5 py-0.5 rounded">
                      Ctrl+,
                    </kbd>
                  </li>
                  <li>
                    • Mac:{' '}
                    <kbd className="bg-slate-900 px-1.5 py-0.5 rounded">
                      Cmd+,
                    </kbd>
                  </li>
                </ul>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">b.</span>
              <span>
                Search for:{' '}
                <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                  copilot.chat.custom.instructionFiles.enabled
                </code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">c.</span>
              <span>
                Check the box to <strong className="text-white">enable</strong>{' '}
                instruction files
              </span>
            </li>
          </ol>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mt-3">
            <p className="text-xs text-blue-300 flex items-start gap-2">
              <span className="text-base mt-0.5">💡</span>
              <span>
                <strong>What are instruction files?</strong> These are special
                markdown files (like{' '}
                <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-400">
                  .github/copilot-instructions.md
                </code>
                ) that tell GitHub Copilot about your project's coding
                standards, architecture patterns, and design system.
              </span>
            </p>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-5">
          <p className="text-sm text-green-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">✅</span>
            <span>
              <strong>You're ready!</strong> Once you've completed these
              prerequisites, you can proceed with building your{' '}
              {industry.sampleApp.name} application below.
            </span>
          </p>
        </div>
      </div>

      {/* Step 0: Set up project infrastructure */}
      <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-xl p-6 mb-6 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">📋</span>
          Step 0: Set Up Your Project Infrastructure (First!)
        </h3>
        <p className="text-slate-700 dark:text-slate-200 mb-4">
          Before building your app, set up your project folder and instruction
          files:
        </p>
        <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-white/10 rounded-lg p-4 mb-4">
          <p className="text-sm text-slate-700 dark:text-slate-200 flex items-start gap-2">
            <span className="text-lg mt-0.5">📚</span>
            <span>
              <strong>For more details:</strong> See{' '}
              <a
                href="https://code.visualstudio.com/docs/copilot/customization/custom-instructions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200 underline"
              >
                VS Code's Custom Instructions documentation
              </a>{' '}
              for the complete guide on this process.
            </span>
          </p>
        </div>
        <ol className="space-y-3 text-slate-800 dark:text-slate-200 text-sm ml-4 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              1.
            </span>
            <span>
              In VS Code, click the{' '}
              <strong className="text-slate-900 dark:text-white">
                Explorer
              </strong>{' '}
              button at the top of the left toolbar
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              2.
            </span>
            <span>
              Select{' '}
              <strong className="text-slate-900 dark:text-white">
                "Open Folder"
              </strong>{' '}
              and create a new subfolder in the folder you created previously
              (ex:{' '}
              <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-900 dark:text-slate-100">
                C:\Repos
              </code>
              )
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              3.
            </span>
            <span>
              Click the{' '}
              <strong className="text-slate-900 dark:text-white">
                "Yes I trust the authors"
              </strong>{' '}
              button and optionally check{' '}
              <strong className="text-slate-900 dark:text-white">
                "Trust all authors"
              </strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              4.
            </span>
            <span>
              Make sure the agent mode is set to{' '}
              <strong className="text-slate-900 dark:text-white">
                "Beast Mode"
              </strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              5.
            </span>
            <span>
              Right-click in the Explorer pane and click{' '}
              <strong className="text-slate-900 dark:text-white">
                "New Folder"
              </strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              6.
            </span>
            <span>
              Name the folder{' '}
              <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-900 dark:text-slate-100">
                .github
              </code>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              7.
            </span>
            <span>
              Right-click on the{' '}
              <strong className="text-slate-900 dark:text-white">
                .github
              </strong>{' '}
              folder and select{' '}
              <strong className="text-slate-900 dark:text-white">
                "New Folder"
              </strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              8.
            </span>
            <span>
              Name the folder{' '}
              <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-900 dark:text-slate-100">
                instructions
              </code>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              9.
            </span>
            <span>
              Go to{' '}
              <a
                href="https://github.com/github/awesome-copilot/blob/main/instructions/power-apps-code-apps.instructions.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 underline"
              >
                power-apps-code-apps.instructions.md
              </a>
              , click the{' '}
              <strong className="text-slate-900 dark:text-white">
                "Download"
              </strong>{' '}
              button (top right), then move the file into the{' '}
              <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-900 dark:text-slate-100">
                .github\instructions
              </code>{' '}
              folder
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-700 dark:text-orange-300 font-mono font-semibold">
              10.
            </span>
            <span>
              Go to{' '}
              <a
                href="https://github.com/github/awesome-copilot/blob/main/instructions/typescript-5-es2022.instructions.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 underline"
              >
                typescript-5-es2022.instructions.md
              </a>
              , click the{' '}
              <strong className="text-slate-900 dark:text-white">
                "Download"
              </strong>{' '}
              button, then move the file into the{' '}
              <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-900 dark:text-slate-100">
                .github\instructions
              </code>{' '}
              folder
            </span>
          </li>
        </ol>
        <div className="space-y-3">
          <div className="bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-400/30 rounded-lg p-4">
            <p className="text-sm text-amber-950 dark:text-amber-200 flex items-start gap-2">
              <span className="text-lg mt-0.5">⚠️</span>
              <span>
                <strong>Why do this first?</strong> This setup enables Copilot
                instruction files so your build prompt can generate and maintain{' '}
                <strong>.github/copilot-instructions.md</strong> and other
                standards from the very beginning.
              </span>
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-800 dark:text-blue-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">📚</span>
              <span>
                <strong>Want more examples?</strong> Check out{' '}
                <a
                  href="https://github.com/github/awesome-copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 underline"
                >
                  GitHub's Awesome Copilot repository
                </a>{' '}
                for many starter instruction files for different languages and
                frameworks!
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Step 1: Enter the Prompt */}
      <div className="bg-linear-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💬</span>
          Step 1: Enter the Build Prompt in Beast Mode
        </h3>
        <p className="text-slate-300 mb-4">
          Open GitHub Copilot Chat (Ctrl+Shift+I), make sure you're in{' '}
          <strong className="text-white">Beast Mode</strong>, and enter this
          prompt:
        </p>
        <CodeBlock code={initialPrompt} language="text" />
      </div>

      {/* Step 2: Agent Builds */}
      <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          Step 2: Agent Builds Your Application
        </h3>
        <p className="text-slate-300 mb-4">
          Beast Mode will build your ENTIRE application based on the prompt:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <p className="text-sm text-amber-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">⚠️</span>
              <span>
                <strong>
                  During the build, you'll need to approve actions:
                </strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    • Select{' '}
                    <strong className="text-white">"Allow and Review"</strong>{' '}
                    or <strong className="text-white">"Allow and Skip"</strong>
                  </li>
                  <li>
                    • <em>Optional:</em> Customize VS Code to auto-approve by
                    going to{' '}
                    <strong className="text-white">
                      File → Preferences → Settings → Features → Chat
                    </strong>
                    , configuring{' '}
                    <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                      chat.tools.autoApprove
                    </code>{' '}
                    and{' '}
                    <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                      chat.tools.terminal.autoApprove
                    </code>
                    , and selecting{' '}
                    <strong className="text-white">
                      "Enable Auto-Approve"
                    </strong>{' '}
                    if desired
                  </li>
                </ul>
              </span>
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">📦</span>
              <span>
                <strong>When prompted to install Vite:</strong> Type{' '}
                <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                  y
                </code>{' '}
                and press Enter
              </span>
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <p className="text-sm text-green-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">📁</span>
              <span>
                <strong>When it says "current directory is not empty":</strong>{' '}
                Choose{' '}
                <strong className="text-white">
                  "Ignore files and continue"
                </strong>{' '}
                and accept the defaults on remaining questions
              </span>
            </p>
          </div>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
          <p className="text-sm text-cyan-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">💡</span>
            <span>
              <strong>Behind the scenes:</strong> The agent reads{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                copilot-instructions.md
              </code>{' '}
              to know it should use Vite, React, TypeScript, Tailwind CSS,
              proper folder structure, data management patterns, and React hooks
              - all configured automatically!
            </span>
          </p>
        </div>
        <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <p className="text-sm text-purple-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">🎯</span>
            <span>
              <strong>This ONE prompt builds everything:</strong> Project setup,
              folder structure, all components (list, forms, details),
              TypeScript types, mock data service, React hooks for data
              management, AND connects it all together into a working app!
            </span>
          </p>
        </div>
        <div className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
          <p className="text-sm text-orange-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">🔒</span>
            <span>
              <strong>After the build completes:</strong> If you see a message
              like{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-yellow-400">
                "9 vulnerabilities (1 low, 4 moderate, 3 high, 1 critical)"
              </code>
              , run{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                npm audit fix --force
              </code>{' '}
              in the terminal. This command automatically updates packages to
              secure versions and applies breaking changes if needed to fix
              security issues.
            </span>
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-white/10">
        <button
          onClick={onPrevious}
          className="px-6 py-3 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors font-semibold"
        >
          ← Back
        </button>
        <div className="text-sm text-slate-400">Step 2 of 6</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-cyan-700 text-slate-50 font-black text-lg rounded-lg hover:bg-cyan-800 transition-colors shadow-xl shadow-cyan-500/50 border-2 border-cyan-400"
        >
          <span className="text-slate-50">Test & Deploy →</span>
        </button>
      </div>
    </div>
  )
}
