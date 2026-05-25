# SecureCam Advisor

A smart, AI-style CCTV recommendation web app built with React + Vite + Tailwind CSS.

## ✨ Features

- 5-step recommendation wizard
- 9 property types supported
- Rule-based recommendation engine
- Camera placement diagram (SVG)
- Budget breakdown
- Installation tips
- Dark/light mode toggle
- Save & export report
- Toast notifications
- FAQ, About, Contact pages
- Fully responsive (mobile/tablet/desktop)
- Deployable on Vercel

---

## 🚀 Local Setup (VS Code)

### 1. Prerequisites
- Node.js 18+ installed ([download here](https://nodejs.org))
- VS Code installed

### 2. Install dependencies
```bash
cd securecam-advisor
npm install
```

### 3. Start dev server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

---

## 🌐 Vercel Deployment

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```
Follow the prompts. Select "Vite" as framework when asked.

### Option B — GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click "Add New Project"
3. Import your GitHub repo
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**

The `vercel.json` file handles SPA routing automatically.

---

## 📁 Project Structure

```
securecam-advisor/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation + dark mode toggle
│   │   ├── Footer.jsx         # Footer with links
│   │   └── CameraPlacement.jsx# SVG floor plan diagram
│   ├── logic/
│   │   └── recommendationEngine.js  # Rule-based recommendation logic
│   ├── pages/
│   │   ├── Landing.jsx        # Hero + features + CTA
│   │   ├── Wizard.jsx         # 5-step recommendation form
│   │   ├── Results.jsx        # Full recommendation results
│   │   ├── About.jsx          # About page
│   │   ├── FAQ.jsx            # FAQ accordion
│   │   └── Contact.jsx        # Contact form
│   ├── App.jsx                # Router + Toaster setup
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind + custom CSS
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

---

## 🛠 VS Code Extensions (Recommended)

Install these for the best dev experience:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **ESLint**

---

## ⚠️ Disclaimer

SecureCam Advisor provides recommendations for **informational and planning purposes only**. 
Always consult a certified CCTV security professional before purchasing or installing any security system.
