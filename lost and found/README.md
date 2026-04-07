# 🔍 FindIt — Campus Lost & Found PWA

A complete, installable Progressive Web App. No backend needed — works entirely in the browser with localStorage.

## 🚀 Deploy to GitHub Pages (Go Live in 3 Minutes)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button → **New repository**
3. Name it: `findit` (or anything you like)
4. Set it to **Public**
5. Leave everything else as default → click **Create repository**

### Step 2 — Upload the files
1. On your new repo page, click **"uploading an existing file"** (or drag & drop)
2. Upload ALL files from this folder:
   - `index.html`
   - `sw.js`
   - `manifest.json`
   - `icon-192.png`
   - `icon-512.png`
   - `.nojekyll`
   - `README.md`
3. Scroll down → click **"Commit changes"**

### Step 3 — Enable GitHub Pages
1. Go to your repo → click **Settings** (top tabs)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **Source** → select **"Deploy from a branch"**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**
6. Wait ~60 seconds → refresh the page
7. You'll see: **"Your site is published at https://yourusername.github.io/findit"**

### Step 4 — Install on your phone
**Android (Chrome):**
- Open the URL in Chrome
- Tap the **"Install FindIt"** banner OR tap ⋮ menu → **Add to Home Screen**

**iPhone (Safari):**
- Open the URL in Safari
- Tap the **Share** button (□↑) at the bottom
- Tap **"Add to Home Screen"** → **Add**

---

## 👤 Demo Login Credentials

| Role    | Email              | Password  | Access          |
|---------|--------------------|-----------|-----------------|
| Admin   | admin@findit.app   | admin123  | Full admin panel |
| Student | bhanu@uni.edu      | pass123   | Student features |

Or **register** a new account from the app.

---

## ✅ All Features

| Feature | Details |
|---------|---------|
| 🔐 Auth | Register, Login, Logout, Change Password |
| ✏️ Profile | Edit name, email, bio, password |
| 🔍 Browse | Search + category + status filters |
| 📝 Report Lost | Form with validation, auto-notification |
| 📦 Post Found | Add item to public listing |
| ❤️ Save Items | Heart/unsave items, saved list view |
| ✋ Claim Item | Proof submission, admin review flow |
| 🗂 Claim History | View status, withdraw pending |
| 🔔 Notifications | Real-time, mark read, clear all |
| 💬 Messages | Full chat between users, unread badges |
| 🛡 Admin Panel | Items, Reports, Claims (approve/reject), Users |
| 📲 Installable | PWA — works on Android & iPhone |
| 📶 Offline | Service worker caches the full app |

---

## 📁 File Structure

```
findit/
├── index.html      ← Entire app (HTML + CSS + JS, ~1400 lines)
├── sw.js           ← Service worker (offline + caching)
├── manifest.json   ← PWA metadata (name, icons, theme)
├── icon-192.png    ← App icon (home screen)
├── icon-512.png    ← App icon (splash screen)
├── .nojekyll       ← Tells GitHub Pages not to use Jekyll
└── README.md       ← This file
```

---

## 🔧 Local Testing

```bash
# Option 1 — Python (built-in)
cd findit
python3 -m http.server 3000
# Open: http://localhost:3000

# Option 2 — Node.js
npx serve .
# Open the URL shown in terminal
```

> ⚠️ Must use a server (not open index.html directly) for the service worker to work.
