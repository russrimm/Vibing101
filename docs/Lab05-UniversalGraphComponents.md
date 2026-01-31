---
title: "Connect to Your Organization with Graph API"
description: "Build universal components that display real Microsoft 365 data from any organization"
duration: "30 minutes"
order: 5
difficulty: "intermediate"
vertical: "agnostic"
optional: true
quiz:
  - question: "What makes this module 'vertical agnostic'?"
    options:
      - "It only works with retail companies"
      - "The components work with any organization's Microsoft 365 data, regardless of industry"
      - "It doesn't use APIs"
      - "It requires special permissions"
    correct: 1
    points: 10
    explanation: "These components fetch universal data like user profiles and org info that exists in every Microsoft 365 tenant, making them useful regardless of your industry choice!"
  - question: "What is the /me endpoint in Microsoft Graph?"
    options:
      - "Information about Microsoft"
      - "The currently authenticated user's profile"
      - "A list of all users"
      - "Email messages"
    correct: 1
    points: 10
    explanation: "The /me endpoint returns profile information for whoever is currently signed in - perfect for showing 'My Profile' sections!"
  - question: "Why use Microsoft Graph over custom databases?"
    options:
      - "It's always free"
      - "Your organization's data already exists there - no need to duplicate it"
      - "It's faster than databases"
      - "It doesn't require authentication"
    correct: 1
    points: 10
    explanation: "Microsoft Graph taps into data that already exists in Microsoft 365. Why build and maintain duplicate user directories when you can use what's already there?"
---

# 🌐 Connect to Your Organization with Graph API

## Universal Components for Any Organization

No matter which industry you chose (Retail, Finance, Healthcare, etc.), **every organization has the same fundamental needs**:

- 👤 Show who's signed in
- 🏢 Display company information
- 📅 Access calendar and availability
- 👥 Find colleagues and org structure
- 📧 Show recent communications

This lab teaches you to build **vertical-agnostic components** that work for **any organization**, regardless of industry. These are the building blocks you can drop into any app!

---

## What You'll Build

### 🎯 Universal Components:

1. **UserProfileCard** - Shows the current user's info
2. **OrganizationBanner** - Displays company name and branding
3. **PeoplePicker** - Search and select colleagues
4. **PresenceIndicator** - Show online/offline/busy status
5. **RecentActivity** - Display emails or meetings

**These work whether you're building for retail, healthcare, finance, or any other vertical!**

---

## Why This Approach Works

### The Problem with Industry-Specific Data:

```typescript
// This only makes sense for retail
interface Product {
  sku: string;
  price: number;
  inventory: number;
}
```

### The Power of Universal Data:

```typescript
// This works for EVERYONE
interface User {
  displayName: string;
  mail: string;
  jobTitle: string;
  department: string;
}
```

**Every organization has users, departments, and communications.** Build once, use everywhere!

---

## Prerequisites

Before starting, ensure you have:

✅ Microsoft Graph MCP Server configured (see Lab 04)  
✅ Authentication working (device code or Azure AD app)  
✅ React project initialized  
✅ GitHub Copilot active

---

## Step 1: Install Microsoft Graph SDK

Let's add the official Microsoft Graph client library.

### Install Dependencies:

```bash
npm install @microsoft/microsoft-graph-client @azure/msal-browser
```

### Install Type Definitions:

```bash
npm install --save-dev @microsoft/microsoft-graph-types
```

### ✅ Verify Installation:

Check your `package.json` - you should see:
```json
{
  "dependencies": {
    "@microsoft/microsoft-graph-client": "^3.x.x",
    "@azure/msal-browser": "^3.x.x"
  }
}
```

🎉 **Success!** Graph SDK is ready!

---

## Step 2: Set Up Authentication Context

We need a way to manage Microsoft 365 sign-in across your entire app.

### Ask Copilot to Create the Auth Context:

**Prompt (in Beast Mode)**:
```
Create an AuthContext using MSAL for Microsoft 365 authentication.
Include:
- Sign in with popup
- Sign out
- Get access token for Microsoft Graph
- Current user state
- Loading and error states

Use @azure/msal-browser and follow best practices.
```

**Copilot will generate** something like:

```typescript
// src/contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import { PublicClientApplication, AccountInfo } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID || '',
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID || 'common'}`,
    redirectUri: window.location.origin,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

interface AuthContextType {
  user: AccountInfo | null;
  signIn: () => Promise<void>;
  signOut: () => void;
  getAccessToken: () => Promise<string>;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AccountInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      await msalInstance.initialize();
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length > 0) {
        setUser(accounts[0]);
      }
      setIsLoading(false);
    };
    init();
  }, []);

  const signIn = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await msalInstance.loginPopup({
        scopes: ['User.Read', 'Calendars.Read', 'Mail.Read'],
      });
      setUser(result.account);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = () => {
    msalInstance.logoutPopup();
    setUser(null);
  };

  const getAccessToken = async (): Promise<string> => {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length === 0) {
      throw new Error('No user signed in');
    }

    const result = await msalInstance.acquireTokenSilent({
      scopes: ['User.Read'],
      account: accounts[0],
    });

    return result.accessToken;
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, getAccessToken, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
```

### Add Environment Variables:

Create `.env.local`:
```env
VITE_AZURE_CLIENT_ID=your-client-id-here
VITE_AZURE_TENANT_ID=your-tenant-id-or-common
```

⚠️ **Important**: Add `.env.local` to `.gitignore`!

---

## Step 3: Create Graph Service

Now let's create a service to make Graph API calls.

### Ask Copilot:

**Prompt**:
```
Create a Microsoft Graph service with these methods:
- getCurrentUser() - get /me
- getOrganization() - get /organization
- getUserPhoto(userId?) - get user photo
- getUserPresence(userId) - get presence status
- searchUsers(query) - search for users

Use @microsoft/microsoft-graph-client.
Handle errors gracefully.
```

**Copilot will create**:

```typescript
// src/services/graphService.ts
import { Client } from '@microsoft/microsoft-graph-client';
import { User, Organization, Presence } from '@microsoft/microsoft-graph-types';

export class GraphService {
  private client: Client;

  constructor(getAccessToken: () => Promise<string>) {
    this.client = Client.init({
      authProvider: async (done) => {
        try {
          const token = await getAccessToken();
          done(null, token);
        } catch (error) {
          done(error as Error, null);
        }
      },
    });
  }

  async getCurrentUser(): Promise<User> {
    try {
      const user = await this.client
        .api('/me')
        .select('displayName,mail,jobTitle,department,officeLocation,mobilePhone')
        .get();
      return user;
    } catch (error) {
      console.error('Error fetching current user:', error);
      throw error;
    }
  }

  async getOrganization(): Promise<Organization> {
    try {
      const org = await this.client.api('/organization').get();
      return org.value[0];
    } catch (error) {
      console.error('Error fetching organization:', error);
      throw error;
    }
  }

  async getUserPhoto(userId?: string): Promise<string | null> {
    try {
      const endpoint = userId ? `/users/${userId}/photo/$value` : '/me/photo/$value';
      const blob = await this.client.api(endpoint).get();
      return URL.createObjectURL(blob);
    } catch (error) {
      // No photo available
      return null;
    }
  }

  async getUserPresence(userId: string): Promise<Presence> {
    try {
      const presence = await this.client.api(`/users/${userId}/presence`).get();
      return presence;
    } catch (error) {
      console.error('Error fetching presence:', error);
      throw error;
    }
  }

  async searchUsers(query: string): Promise<User[]> {
    try {
      const result = await this.client
        .api('/users')
        .filter(`startsWith(displayName,'${query}') or startsWith(mail,'${query}')`)
        .select('displayName,mail,jobTitle,department')
        .top(10)
        .get();
      return result.value;
    } catch (error) {
      console.error('Error searching users:', error);
      return [];
    }
  }
}
```

---

## Step 4: Build Universal Components

Now for the fun part - building reusable components!

### Component 1: UserProfileCard

**Prompt Copilot**:
```
Create a UserProfileCard React component that:
- Displays user's photo, name, job title, department
- Shows loading skeleton while fetching
- Has a sign out button
- Uses Tailwind CSS with dark theme
- Fetches data using GraphService
```

**Example Result**:

```typescript
// src/components/UserProfileCard.tsx
import { useEffect, useState } from 'react';
import { User } from '@microsoft/microsoft-graph-types';
import { useAuth } from '../contexts/AuthContext';
import { GraphService } from '../services/graphService';
import { LogOut, User as UserIcon } from 'lucide-react';

export const UserProfileCard = () => {
  const { user: authUser, getAccessToken, signOut } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const graphService = new GraphService(getAccessToken);
        const userData = await graphService.getCurrentUser();
        const userPhoto = await graphService.getUserPhoto();
        
        setUser(userData);
        setPhoto(userPhoto);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (authUser) {
      fetchUserData();
    }
  }, [authUser, getAccessToken]);

  if (isLoading) {
    return (
      <div className="bg-slate-800 rounded-lg p-4 animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-slate-700 rounded-full" />
          <div className="flex-1">
            <div className="h-4 bg-slate-700 rounded w-3/4 mb-2" />
            <div className="h-3 bg-slate-700 rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="bg-slate-800 rounded-lg p-4 border border-cyan-500/20">
      <div className="flex items-center gap-4">
        {/* Profile Photo */}
        {photo ? (
          <img
            src={photo}
            alt={user.displayName || 'User'}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <UserIcon className="w-8 h-8 text-cyan-400" />
          </div>
        )}

        {/* User Info */}
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg">{user.displayName}</h3>
          <p className="text-slate-400 text-sm">{user.jobTitle}</p>
          <p className="text-slate-500 text-xs">{user.department}</p>
        </div>

        {/* Sign Out Button */}
        <button
          onClick={signOut}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"
          aria-label="Sign out"
        >
          <LogOut size={20} />
        </button>
      </div>

      {/* Contact Info */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <p className="text-slate-400 text-sm">📧 {user.mail}</p>
        {user.officeLocation && (
          <p className="text-slate-400 text-sm mt-1">📍 {user.officeLocation}</p>
        )}
      </div>
    </div>
  );
};
```

### Component 2: OrganizationBanner

**Prompt Copilot**:
```
Create an OrganizationBanner component that displays:
- Organization name
- Verified domains
- Tenant ID (optionally hidden)
- Company branding colors if available

Fetch from /organization endpoint.
```

### Component 3: PeoplePicker

**Prompt Copilot**:
```
Create a PeoplePicker component with:
- Search input with debouncing
- Dropdown results showing user cards
- Click to select a user
- Display selected user chips
- Support multi-select

Use GraphService.searchUsers()
```

### Component 4: PresenceIndicator

**Prompt Copilot**:
```
Create a PresenceIndicator component that:
- Shows online/offline/away/busy/donotdisturb status
- Uses colored dot (green=online, red=busy, etc.)
- Fetches from /users/{id}/presence endpoint
- Updates every 5 minutes

Make it a small badge component that can be overlaid on avatars.
```

---

## Step 5: Create a Universal Dashboard

Let's combine these components into a dashboard that works for any organization!

### Ask Copilot:

**Prompt**:
```
Create a UniversalDashboard component that:
- Shows UserProfileCard at the top
- Displays OrganizationBanner
- Has a PeoplePicker section titled "Find Colleagues"
- Shows a grid of recent activities
- Works with any theme/vertical

Use a responsive grid layout with Tailwind.
```

**Result**:

```typescript
// src/components/UniversalDashboard.tsx
import { UserProfileCard } from './UserProfileCard';
import { OrganizationBanner } from './OrganizationBanner';
import { PeoplePicker } from './PeoplePicker';

export const UniversalDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-white">
            My Organization Dashboard
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile */}
          <div className="lg:col-span-1">
            <UserProfileCard />
          </div>

          {/* Right Column - Organization & Tools */}
          <div className="lg:col-span-2 space-y-6">
            <OrganizationBanner />
            
            <div className="bg-slate-800 rounded-lg p-6 border border-cyan-500/20">
              <h2 className="text-xl font-bold text-white mb-4">
                Find Colleagues
              </h2>
              <PeoplePicker />
            </div>
          </div>
        </div>

        {/* Bottom Section - Can add more universal components */}
        <div className="bg-slate-800 rounded-lg p-6 border border-cyan-500/20">
          <h2 className="text-xl font-bold text-white mb-4">
            Recent Activity
          </h2>
          <p className="text-slate-400">
            Your recent emails, meetings, and file changes will appear here.
          </p>
        </div>
      </div>
    </div>
  );
};
```

---

## Step 6: Integrate with Your Themed App

Now let's make this work alongside your industry-specific content!

### Option A: Separate Route

Add a route for the universal dashboard:

```typescript
// In your router
<Route path="/organization" element={<UniversalDashboard />} />
```

### Option B: Sidebar Widget

Add components to your existing app's sidebar:

```typescript
// In your main layout
<aside className="w-64 bg-slate-800">
  <UserProfileCard />
  {/* Your industry-specific navigation */}
</aside>
```

### Option C: Modal/Overlay

Show organization info on demand:

```typescript
<button onClick={() => setShowOrgModal(true)}>
  View Organization Info
</button>

{showOrgModal && (
  <Modal>
    <OrganizationBanner />
    <PeoplePicker />
  </Modal>
)}
```

---

## Step 7: Make It Work Offline (Optional)

Cache Graph data for offline access:

### Ask Copilot:

**Prompt**:
```
Create a caching layer for GraphService that:
- Caches responses in localStorage
- Uses cache-first strategy with 5-minute TTL
- Falls back to cache if offline
- Clears cache on sign out

Wrap the GraphService methods.
```

**This allows your universal components to work even without internet!**

---

## Real-World Examples

### Example 1: Employee Directory (Any Industry)

```typescript
// Works for retail, healthcare, finance, etc.
const EmployeeDirectory = () => {
  const [employees, setEmployees] = useState<User[]>([]);
  
  // Fetch all users
  const fetchEmployees = async () => {
    const graphService = new GraphService(getAccessToken);
    const users = await graphService.searchUsers('');
    setEmployees(users);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {employees.map(emp => (
        <UserCard key={emp.id} user={emp} />
      ))}
    </div>
  );
};
```

### Example 2: "Out of Office" Checker

```typescript
// Check if someone is available - universal need!
const OutOfOfficeChecker = ({ userId }: { userId: string }) => {
  const [presence, setPresence] = useState<Presence | null>(null);
  
  useEffect(() => {
    const graphService = new GraphService(getAccessToken);
    graphService.getUserPresence(userId).then(setPresence);
  }, [userId]);

  return (
    <div>
      {presence?.availability === 'Available' ? '✅ Available' : '🔴 Busy'}
    </div>
  );
};
```

### Example 3: Organization Hierarchy Viewer

```typescript
// Show reporting structure - useful everywhere
const OrgChart = () => {
  // Use /users/{id}/manager and /users/{id}/directReports
  // Build visual org chart
};
```

---

## 🎯 Why This Matters

### Without Universal Components:
- ❌ Rebuild user profiles for each vertical
- ❌ Duplicate authentication logic
- ❌ Manual data management
- ❌ Maintenance nightmare

### With Universal Components:
- ✅ Write once, use everywhere
- ✅ Consistent user experience
- ✅ Leverages existing M365 data
- ✅ Easy to maintain and update

**The best code is code you don't have to write!**

---

## 🔧 Troubleshooting

### Issue: "Insufficient privileges"

**Solution**: Request correct scopes during sign-in:
```typescript
scopes: ['User.Read', 'User.ReadBasic.All', 'Presence.Read']
```

### Issue: Photo not loading

**Solution**: Photos require `User.Read` scope. Check:
1. Scope is requested
2. Admin consent granted (if needed)
3. User actually has a photo uploaded

### Issue: Search returns no results

**Solution**: 
- Check filter syntax in searchUsers()
- Ensure `User.ReadBasic.All` permission
- Try broader search terms

---

## 📚 Graph API Endpoints - Universal Cheat Sheet

### User Data:
- `GET /me` - Current user profile
- `GET /me/photo/$value` - Current user photo
- `GET /users` - All users (with permissions)
- `GET /users/{id}` - Specific user

### Organization:
- `GET /organization` - Tenant info
- `GET /domains` - Verified domains

### Presence:
- `GET /users/{id}/presence` - Online status

### Calendar:
- `GET /me/calendar/events` - My events
- `GET /me/calendar/calendarView` - Events in date range

### Mail:
- `GET /me/messages` - Recent emails
- `GET /me/mailFolders/inbox/messages` - Inbox specifically

### People:
- `GET /me/people` - Relevant people
- `GET /users/{id}/manager` - Manager
- `GET /users/{id}/directReports` - Direct reports

**All of these work for ANY organization!**

---

## ✅ Checklist: Universal Components Complete

- [ ] AuthContext created and working
- [ ] GraphService implemented with error handling
- [ ] UserProfileCard displays current user
- [ ] OrganizationBanner shows tenant info
- [ ] PeoplePicker searches and selects users
- [ ] PresenceIndicator shows online status
- [ ] UniversalDashboard combines components
- [ ] Components integrated with main app
- [ ] Offline caching implemented (optional)
- [ ] Tested with real Microsoft 365 account

---

## 🎉 You Did It!

**Congratulations!** You've built universal, reusable components that work for **any organization**, regardless of industry vertical.

### What You Accomplished:

🏆 Created vertical-agnostic Graph components  
🏆 Set up enterprise-grade authentication  
🏆 Built a universal organization dashboard  
🏆 Learned Graph API best practices  
🏆 Made components that work offline  

### The Power of Universal Design:

These components can now be:
- Dropped into any project
- Shared across your team
- Used regardless of industry
- Maintained in one place

**You've built the building blocks of modern enterprise apps!**

---

## 🚀 What's Next?

Now that you have universal components, you can:

1. **Enhance them**: Add more Graph endpoints (Teams, SharePoint, etc.)
2. **Combine with industry data**: Mix Graph data with your vertical-specific content
3. **Build advanced features**: Activity feeds, recommendations, org charts
4. **Share with team**: These components work for everyone!

Ready to continue building? Head back to your industry-specific labs and see how you can integrate these universal components into your themed portal!

**Universal + Themed = Powerful** 🎵

---

*Estimated time: 30 minutes • Difficulty: Intermediate • Type: Optional • Works with: All Verticals*

### 💡 Pro Tip

These universal components form a "Component Library" you can reuse across all your projects. Consider:
- Publishing them as an npm package
- Creating Storybook documentation
- Sharing with your development team
- Contributing to open source!

**Great code deserves to be shared.** 🌟
