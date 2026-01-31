# 🏥 Bonus Lab: Company Service Health Portal

> **Difficulty:** Advanced | **Duration:** 90-120 minutes | **Optional Module**

## 📚 What You'll Learn

- Access Microsoft Service Communications API for real-time outage data
- Compare popular React charting libraries (Recharts vs Chart.js)
- Build interactive dashboards with timeline visualizations
- Understand trade-offs between different visualization approaches
- Create a production-ready health status portal

## 🎯 What You'll Build

A **Company Service Health Portal** that displays:
- 📊 Real-time Azure service status
- 📧 Microsoft 365 service health (Exchange, Teams, SharePoint, etc.)
- 🔴 Active incidents and outages
- 📈 Historical incident trends
- ⚡ Service performance metrics
- 🔔 Alert notifications for your organization

**Plus:** A side-by-side comparison of the same data visualized with **two different charting libraries** so you can see the pros/cons of each!

---

## 📖 Prerequisites

Before starting this lab:

- ✅ Complete [Lab05: Universal Graph Components](./Lab05-UniversalGraphComponents.md)
- ✅ Have Azure tenant access (or use demo tenant)
- ✅ Microsoft Graph API permissions configured
- ✅ MSAL authentication working

---

## 🔐 Understanding Service Health APIs

### Available APIs

Microsoft provides several APIs for monitoring service health:

#### 1. **Microsoft Graph Service Communications API**

**Endpoint:** `https://graph.microsoft.com/v1.0/admin/serviceAnnouncement`

**What it provides:**
- Service health status (healthy, degraded, interrupted)
- Service incidents and advisories
- Message center communications
- Planned maintenance notifications
- Historical data (last 30 days)

**Requires:**
- `ServiceHealth.Read.All` permission
- Azure AD app registration
- Tenant admin consent

**Best for:** Organizations with Microsoft 365 tenants who need official service status for their specific tenant.

#### 2. **Azure Resource Health API**

**Endpoint:** `https://management.azure.com/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth`

**What it provides:**
- Azure resource availability status
- Service health events affecting your resources
- Planned maintenance for Azure services
- Root cause analysis for incidents

**Requires:**
- Azure subscription
- Resource health reader role
- Azure Resource Manager authentication

**Best for:** Organizations heavily invested in Azure infrastructure who need resource-level health monitoring.

#### 3. **Public Status Page (No Auth)**

**URL:** `https://status.azure.com/en-us/status`

**What it provides:**
- Public Azure service status
- No authentication required
- Limited to public incidents
- No tenant-specific data

**Best for:** Quick public status checks without authentication.

---

## 📊 Charting Libraries Comparison

We'll build the same dashboard with **two popular charting libraries** so you can compare them side-by-side.

### Option 1: **Recharts** (Already Installed ✅)

**Pros:**
- ✅ Built specifically for React (declarative API)
- ✅ Composable components (`<LineChart>`, `<BarChart>`)
- ✅ TypeScript support out of the box
- ✅ Responsive by default
- ✅ Smooth animations with minimal code
- ✅ Small bundle size (~100KB)
- ✅ Easy to customize with CSS/Tailwind

**Cons:**
- ❌ Fewer chart types than Chart.js
- ❌ Less community plugins
- ❌ Performance can degrade with 1000+ data points
- ❌ Limited advanced features (e.g., zoom, crosshairs)

**Best for:** React developers who want declarative, component-based charts with good TypeScript support.

### Option 2: **Chart.js + react-chartjs-2** (We'll Install)

**Pros:**
- ✅ Most popular charting library (64M+ weekly downloads)
- ✅ Extensive chart types (20+)
- ✅ Rich plugin ecosystem
- ✅ Better performance with large datasets
- ✅ Advanced interactions (zoom, pan, crosshairs)
- ✅ Framework-agnostic (can use outside React)

**Cons:**
- ❌ Imperative API (less "React-like")
- ❌ Requires wrapper (`react-chartjs-2`) for React
- ❌ More configuration needed
- ❌ TypeScript types can be verbose
- ❌ Larger bundle size (~200KB)
- ❌ Harder to customize with Tailwind

**Best for:** Complex dashboards with advanced interactions, large datasets, or teams familiar with Chart.js from other frameworks.

---

## 🚀 Step 1: Install Chart.js

We'll install Chart.js and its React wrapper to compare with Recharts (already installed).

**Open your terminal** in VS Code and run:

```bash
npm install chart.js react-chartjs-2
```

**What this installs:**
- `chart.js` - Core charting library (always verify you're installing the **latest stable version**)
- `react-chartjs-2` - React wrapper components (always use the **latest version** compatible with Chart.js)

**Expected output:**
```
added 2 packages, and audited 658 packages in 15s
```

---

## 🔧 Step 2: Configure Graph API Permissions

To access Service Health data, add these permissions to your Azure AD app:

### Required Permissions

In **Azure Portal** → **App Registrations** → **Your App** → **API Permissions**:

1. Click **"Add a permission"**
2. Select **"Microsoft Graph"**
3. Choose **"Application permissions"** (for background access) or **"Delegated permissions"** (for user context)
4. Add these permissions:
   - ✅ `ServiceHealth.Read.All` - Read service health
   - ✅ `ServiceMessage.Read.All` - Read service messages
   - ✅ `ServiceAnnouncement.Read.All` - Read announcements

5. Click **"Grant admin consent"** (requires tenant admin)

> ⚠️ **Note:** Admin consent is required because these permissions allow reading organization-wide service health data.

### Update Your MSAL Config

Update your `authConfig.ts` to request these scopes:

**Copilot Prompt:**
```
Update authConfig.ts to add Service Health API scopes:
- ServiceHealth.Read.All
- ServiceMessage.Read.All  
- ServiceAnnouncement.Read.All

Keep existing scopes (User.Read, etc.) and add these new ones to the loginRequest.scopes array.
```

---

## 📡 Step 3: Create Service Health Service

Create a service to fetch health data from Microsoft Graph.

**Create file:** `src/services/serviceHealthService.ts`

**Copilot Prompt (Beast Mode):**
```
Create src/services/serviceHealthService.ts with these features:

1. Import graphService from './graphService'
2. Create interfaces:
   - ServiceHealth { id, service, status, statusTime }
   - ServiceIncident { id, title, service, severity, classification, startDateTime, endDateTime, posts[] }
   - IncidentPost { description, publishedDateTime }
   - ServiceMessage { id, title, category, severity, actionRequiredByDateTime }

3. Create functions:
   - getServiceHealth(): Promise<ServiceHealth[]> 
     Calls: GET /admin/serviceAnnouncement/healthOverviews
   
   - getActiveIncidents(): Promise<ServiceIncident[]>
     Calls: GET /admin/serviceAnnouncement/issues?$filter=classification eq 'incident'
   
   - getServiceMessages(): Promise<ServiceMessage[]>
     Calls: GET /admin/serviceAnnouncement/messages?$top=20
   
   - getIncidentTrends(days: number): Promise<{date: string, count: number}[]>
     Calculate incident count per day from historical data

4. Add error handling with try/catch
5. Add loading states
6. Use TypeScript strict types
7. Add JSDoc comments

Always verify you're using the latest Microsoft Graph API version in the endpoints.
```

**Expected result:** A service that wraps Graph API calls with proper TypeScript types.

---

## 📊 Step 4: Create Comparison Dashboard Layout

Create the main dashboard component that will show both chart libraries side-by-side.

**Create file:** `src/components/ServiceHealthDashboard.tsx`

**Copilot Prompt (Beast Mode):**
```
Create src/components/ServiceHealthDashboard.tsx with:

1. Import useState, useEffect, serviceHealthService
2. Import AuthContext for authentication check
3. Fetch service health data on mount
4. Create 3-column responsive layout:
   - Left: Service status cards (all services)
   - Middle: Recharts visualization
   - Right: Chart.js visualization

5. Show loading spinner while fetching
6. Display error message if no access
7. Add refresh button (manual refresh)
8. Add last updated timestamp
9. Use Tailwind classes matching our dark theme (bg-slate-900, bg-slate-800, text-white, text-cyan-500)

10. Structure:
    <div className="p-6 space-y-6">
      <header>Title, description, refresh button</header>
      <ServiceStatusCards services={services} />
      <ComparisonSection>
        <RechartsVisualization data={incidents} />
        <ChartJsVisualization data={incidents} />
      </ComparisonSection>
    </div>

Always use the latest React patterns (hooks, functional components).
```

---

## 🎨 Step 5A: Build Recharts Visualizations

Create charts using Recharts' declarative API.

**Create file:** `src/components/charts/RechartsHealthCharts.tsx`

**Copilot Prompt (Beast Mode):**
```
Create src/components/charts/RechartsHealthCharts.tsx with:

1. Import from 'recharts': LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell
2. Accept props: { incidents: ServiceIncident[] }

3. Create 3 chart components:

   a) IncidentTimelineChart - Line chart showing incidents over time
      - X-axis: Date (last 30 days)
      - Y-axis: Number of incidents
      - Line color: cyan-500
      - Show data points
      - Tooltip with date and count
      - Height: 300px
   
   b) ServiceBreakdownChart - Bar chart showing incidents by service
      - X-axis: Service name (Exchange, Teams, Azure, etc.)
      - Y-axis: Incident count
      - Bar color: cyan-500
      - Horizontal bars
      - Height: 400px
   
   c) SeverityPieChart - Pie chart showing severity distribution
      - Slices: High, Medium, Low severity
      - Colors: red-500 (high), yellow-500 (medium), green-500 (low)
      - Show percentages
      - Height: 300px

4. Export main component that renders all 3:
   <div className="space-y-6">
     <ChartCard title="Incident Timeline" description="Last 30 days">
       <IncidentTimelineChart />
     </ChartCard>
     <ChartCard title="Incidents by Service">
       <ServiceBreakdownChart />
     </ChartCard>
     <ChartCard title="Severity Distribution">
       <SeverityPieChart />
     </ChartCard>
   </div>

5. Use our dark theme colors (bg-slate-800 cards, white text)
6. Make charts responsive with ResponsiveContainer
7. Add loading skeleton states
8. Add "No data" empty state

Always verify you're using the latest Recharts API syntax.
```

---

## 📈 Step 5B: Build Chart.js Visualizations

Create the same charts using Chart.js for comparison.

**Create file:** `src/components/charts/ChartJsHealthCharts.tsx`

**Copilot Prompt (Beast Mode):**
```
Create src/components/charts/ChartJsHealthCharts.tsx with:

1. Import from 'react-chartjs-2': Line, Bar, Pie
2. Import from 'chart.js': Chart, registerables
3. Register Chart.js components: Chart.register(...registerables)
4. Accept props: { incidents: ServiceIncident[] }

5. Create THE SAME 3 charts as Recharts version:

   a) IncidentTimelineChart - Line chart
      - Same data as Recharts version
      - Options: {
          responsive: true,
          plugins: { legend: { display: true }, tooltip: { mode: 'index' } },
          scales: { y: { beginAtZero: true } }
        }
      - Line color: cyan (rgb(6, 182, 212))
      - Height: 300px
   
   b) ServiceBreakdownChart - Horizontal bar chart
      - Same data as Recharts version
      - Options: { indexAxis: 'y', responsive: true }
      - Bar color: cyan
      - Height: 400px
   
   c) SeverityPieChart - Pie chart
      - Same data as Recharts version
      - Colors: rgb(239, 68, 68), rgb(234, 179, 8), rgb(34, 197, 94)
      - Show percentages in labels
      - Height: 300px

6. Export main component that renders all 3 in same layout:
   <div className="space-y-6">
     <ChartCard title="Incident Timeline" description="Last 30 days">
       <Line data={...} options={...} />
     </ChartCard>
     <ChartCard title="Incidents by Service">
       <Bar data={...} options={...} />
     </ChartCard>
     <ChartCard title="Severity Distribution">
       <Pie data={...} options={...} />
     </ChartCard>
   </div>

7. Configure dark theme for Chart.js:
   Chart.defaults.color = 'white'
   Chart.defaults.borderColor = 'rgba(148, 163, 184, 0.3)'

8. Add loading skeleton states
9. Add "No data" empty state

Always verify you're using the latest Chart.js v4 API syntax.
```

---

## 🎴 Step 6: Create Service Status Cards

Build status indicator cards for each Microsoft service.

**Create file:** `src/components/ServiceStatusCard.tsx`

**Copilot Prompt:**
```
Create src/components/ServiceStatusCard.tsx with:

1. Props interface:
   - service: string (e.g., "Exchange Online")
   - status: 'healthy' | 'degraded' | 'interrupted'
   - lastUpdated: string (ISO date)
   - activeIncidents?: number

2. Status indicator with colors:
   - healthy: green-500 dot + "Operational"
   - degraded: yellow-500 dot + "Degraded Performance"  
   - interrupted: red-500 dot + "Service Interruption"

3. Layout:
   <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
     <div className="flex items-center justify-between">
       <div className="flex items-center gap-3">
         <StatusDot color={...} />
         <div>
           <h3 className="font-semibold">{service}</h3>
           <p className="text-sm text-slate-400">{statusText}</p>
         </div>
       </div>
       {activeIncidents > 0 && (
         <Badge variant="error">{activeIncidents} incidents</Badge>
       )}
     </div>
     <p className="text-xs text-slate-500 mt-2">
       Updated {formatDistanceToNow(lastUpdated)} ago
     </p>
   </div>

4. Add pulse animation for non-healthy status
5. Import date-fns formatDistanceToNow for time display
6. Make card clickable to show incident details

Use latest date-fns utilities for time formatting.
```

---

## 🔄 Step 7: Add Real-Time Updates

Add auto-refresh functionality to keep data current.

**Update:** `src/components/ServiceHealthDashboard.tsx`

**Copilot Prompt:**
```
Update ServiceHealthDashboard.tsx to add auto-refresh:

1. Add state: refreshInterval (default 5 minutes)
2. Add useEffect with setInterval:
   - Fetch new data every refreshInterval
   - Clear interval on unmount
   - Only run if user is authenticated

3. Add refresh controls:
   - Manual refresh button (loading spinner during refresh)
   - Auto-refresh toggle switch
   - Interval selector dropdown (1, 5, 10, 30 minutes)
   - Next refresh countdown timer

4. Add toast notifications when:
   - New incident detected
   - Service status changes
   - Refresh fails

5. Use sonner for toast notifications
6. Add keyboard shortcut: Cmd/Ctrl+R to manual refresh

Follow React 18 best practices for intervals and cleanup.
```

---

## 📱 Step 8: Make It Responsive

Ensure the dashboard works on mobile devices.

**Copilot Prompt:**
```
Update ServiceHealthDashboard.tsx for mobile responsiveness:

1. Change layout to stack on mobile:
   - Desktop (lg+): 3-column grid
   - Tablet (md): 2-column grid  
   - Mobile (sm): single column stack

2. Adjust chart heights for mobile:
   - Desktop: 300-400px
   - Mobile: 200-250px

3. Make comparison section swipeable on mobile:
   - Add tabs: "Recharts" | "Chart.js"
   - Switch between libraries instead of side-by-side
   - Swipe gesture support

4. Optimize service cards:
   - Horizontal scroll on mobile if many services
   - Compact view with smaller text

5. Use Tailwind responsive classes:
   - grid-cols-1 md:grid-cols-2 lg:grid-cols-3
   - text-sm md:text-base
   - p-4 md:p-6

Always use mobile-first responsive design patterns.
```

---

## 🎯 Step 9: Add to Your App

Integrate the Service Health Portal into your main application.

**Option A: Add as Separate Route**

**Update:** `src/App.tsx`

**Copilot Prompt:**
```
Add Service Health Portal as a route in App.tsx:

1. Import ServiceHealthDashboard
2. Add route: "/service-health"
3. Add link in navigation:
   <Link to="/service-health">
     <Icon name="activity" /> Service Health
   </Link>

4. Protect route with authentication:
   - Redirect to login if not authenticated
   - Show "Access Denied" if missing permissions

Use React Router v6 latest patterns.
```

**Option B: Add as Dashboard Widget**

**Copilot Prompt:**
```
Add Service Health as a widget in the main dashboard:

1. Create CompactServiceHealth.tsx:
   - Show only service status cards (no charts)
   - Display count of active incidents
   - "View Details" button → opens full dashboard
   - Fits in 1/3 column width

2. Import in UniversalDashboard.tsx
3. Add to grid layout:
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
     <UserProfileCard />
     <OrganizationBanner />
     <CompactServiceHealth />
   </div>
```

---

## 🎨 Step 10: Compare the Libraries

Now test both visualizations side-by-side!

### Visual Comparison Checklist

Open your Service Health Portal and compare:

| Feature | Recharts | Chart.js |
|---------|----------|----------|
| **Visual Style** | Clean, minimalist | Rich, feature-heavy |
| **Animation** | Smooth, subtle | More dynamic options |
| **Interactivity** | Hover tooltips | Zoom, pan, crosshairs |
| **Customization** | Tailwind-friendly | Requires config objects |
| **Responsiveness** | Built-in | Requires manual setup |
| **Bundle Size** | ~100KB | ~200KB |
| **TypeScript DX** | Excellent | Good (verbose types) |

### Performance Test

Test with large datasets:

```typescript
// Generate 365 days of incident data
const generateTestData = (days: number) => {
  return Array.from({ length: days }, (_, i) => ({
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    count: Math.floor(Math.random() * 10)
  }));
};
```

**Try:**
- 30 days (both should be smooth)
- 365 days (Chart.js should handle better)
- 1000+ points (Chart.js significantly faster)

---

## 🎓 Key Learnings

### When to Use Recharts

Choose Recharts when:
- ✅ Building React-native dashboards
- ✅ Need quick, declarative charts
- ✅ TypeScript is a priority
- ✅ Tailwind integration is important
- ✅ Bundle size matters
- ✅ Data sets are < 1000 points

### When to Use Chart.js

Choose Chart.js when:
- ✅ Need advanced interactions (zoom, pan)
- ✅ Working with large datasets (1000+ points)
- ✅ Require specific chart types
- ✅ Team already knows Chart.js
- ✅ Need framework-agnostic solution
- ✅ Want extensive plugin ecosystem

### Hybrid Approach

**Best of both worlds:**
- Use **Recharts** for most dashboards (declarative, React-friendly)
- Use **Chart.js** for specific heavy-duty charts (large data, complex interactions)
- Keep both installed (~300KB total is acceptable for full dashboard app)

---

## 🚀 Going Further

### Production Enhancements

1. **Caching Strategy**
   - Cache service health data in localStorage
   - Reduce API calls (respect rate limits)
   - Show cached data while fetching updates

2. **Alert System**
   - Browser notifications for new incidents
   - Email/SMS alerts via Azure Logic Apps
   - Slack/Teams webhook integration

3. **Historical Analytics**
   - Store incident data in database
   - Track MTTR (Mean Time To Recovery)
   - Generate monthly reports

4. **Multi-Tenant Support**
   - Compare health across multiple M365 tenants
   - Aggregate data for MSP dashboards
   - Tenant-specific incident filtering

### Additional Data Sources

Integrate other status pages:
- **GitHub Status**: https://www.githubstatus.com/api/v2/status.json
- **AWS Status**: https://status.aws.amazon.com/
- **Google Workspace**: https://www.google.com/appsstatus/dashboard/

---

## 🐛 Troubleshooting

### "Access Denied" Error

**Problem:** Can't fetch service health data

**Solutions:**
1. ✅ Verify API permissions in Azure Portal
2. ✅ Grant admin consent (must be tenant admin)
3. ✅ Wait 5-10 minutes after granting consent
4. ✅ Sign out and sign back in to refresh token
5. ✅ Check token contains correct scopes (inspect JWT at jwt.ms)

### Chart Not Rendering

**Recharts Issue:**
```typescript
// Make sure ResponsiveContainer has explicit height
<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    {/* ... */}
  </LineChart>
</ResponsiveContainer>
```

**Chart.js Issue:**
```typescript
// Register Chart.js components before use
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
```

### Performance Issues

**Too many data points:**
- Aggregate data by week/month instead of daily
- Implement pagination or virtual scrolling
- Use Chart.js instead of Recharts for 1000+ points

---

## 📚 Resources

### Official Documentation

- [Microsoft Graph Service Health API](https://learn.microsoft.com/graph/api/resources/service-communications-api-overview)
- [Recharts Documentation](https://recharts.org/en-US/) - Always check for latest version
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/) - Always verify latest v4 features
- [react-chartjs-2 Docs](https://react-chartjs-2.js.org/)

### Code Examples

- [Microsoft Graph Samples](https://github.com/microsoftgraph/msgraph-sample-dashboard)
- [Recharts Examples](https://recharts.org/en-US/examples)
- [Chart.js Samples](https://www.chartjs.org/docs/latest/samples/)

---

## ✅ Lab Complete!

You've built a **production-ready Service Health Portal** with:

- ✅ Real-time Microsoft 365 and Azure service health monitoring
- ✅ Side-by-side comparison of Recharts vs Chart.js
- ✅ Interactive visualizations with multiple chart types
- ✅ Auto-refresh and real-time updates
- ✅ Mobile-responsive design
- ✅ Professional dashboard layout

**Share your dashboard** with your team and let them know about service outages before they even notice! 🎉

---

## 🎯 Next Steps

- [Bonus: Power Apps Code Components](./Bonus-PowerAppsCodeComponents.md) - Integrate with Power Platform
- [Lab09: Ready for the World](./Lab09-ReadyForTheWorld.md) - Deploy to Azure

**Questions?** Drop them in the discussion forum or submit an issue on GitHub!
