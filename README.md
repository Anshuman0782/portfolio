# Alex Chen — Developer Portfolio

A modern, futuristic developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## ✨ Features

- ⚡ React 18 + Vite (blazing fast dev server & builds)
- 🎨 Tailwind CSS with custom design system
- 🎞 Framer Motion animations (page transitions, scroll reveals, staggered enters)
- 🌙 Dark / Light mode toggle (persisted in localStorage)
- 🖱 Custom cursor with hover effects
- ⏳ Page loading animation
- 📱 Fully responsive (mobile-first)
- 🔀 React Router v6 with animated transitions
- 🏗 Reusable component architecture
- 🎯 All personal data in a single file to edit

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Place YOUR resume here
├── src/
│   ├── components/
│   │   ├── AnimatedSection.jsx   ← Scroll-triggered reveal wrapper
│   │   ├── CustomCursor.jsx      ← Custom mouse cursor
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── PageLoader.jsx        ← Initial loading screen
│   │   └── ProjectCard.jsx       ← Reusable project card
│   ├── context/
│   │   └── ThemeContext.jsx      ← Dark/light mode state
│   ├── data/
│   │   └── portfolioData.js      ← ⭐ EDIT THIS FILE to customize
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Quick Start

### 1. Create the project folder and copy all files

```bash
mkdir portfolio && cd portfolio
# Copy all files from this project into the folder
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start dev server

```bash
npm run dev
```

Open http://localhost:5173 — you should see the portfolio live!

---

## 🎨 Customization

### ⭐ Step 1 — Edit your personal info

Open `src/data/portfolioData.js` — this is the **single source of truth** for all your content.

Update:
- `personalInfo` — name, role, tagline, bio, location, email
- `projects` — your project list (title, description, tags, links)
- `skills` — your skill categories and proficiency levels
- `experience` — your work history
- `education` — your education background
- `socialLinks` — your social profiles

### Step 2 — Add your photo

In `src/pages/About.jsx`, replace the initials avatar block with:
```jsx
<img src="/your-photo.jpg" alt="Your Name" className="w-full h-full object-cover" />
```
Place the image in `/public/`.

### Step 3 — Add your resume

Place `resume.pdf` in the `/public` folder.

### Step 4 — Connect contact form

In `src/pages/Contact.jsx`, find the `handleSubmit` function and replace the `await new Promise(...)` mock with your real email service (EmailJS, Formspree, Resend, etc.).

**EmailJS example:**
```js
import emailjs from '@emailjs/browser'
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
```

### Step 5 — Update meta tags

Open `index.html` and update:
- `<title>`
- `<meta name="description">`
- `<meta property="og:title">`
- `<meta property="og:description">`

---

## 🎨 Design Customization

### Change accent color
In `tailwind.config.js` and `src/index.css`, change `#00FF87` to your preferred color.

### Change fonts
In `index.html`, update the Google Fonts import URL. Then in `tailwind.config.js`, update `fontFamily.display`, `fontFamily.body`, and `fontFamily.mono`.

---

## 🏗 Build for Production

```bash
npm run build
```

Output goes to `/dist`. Deploy to Vercel, Netlify, or any static host.

**Deploy to Vercel (recommended):**
```bash
npm i -g vercel
vercel
```

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| react + react-dom | UI framework |
| react-router-dom | Client-side routing |
| framer-motion | Animations |
| lucide-react | Icons |
| tailwindcss | Utility-first CSS |
| vite | Build tool |

---

## 🖥 Pages

| Route | Page |
|---|---|
| `/` | Home — Hero, stats, featured projects |
| `/about` | About — Bio, values, education |
| `/projects` | Projects — Filterable project grid |
| `/skills` | Skills — Animated progress bars, tech stack |
| `/experience` | Experience — Timeline of work history |
| `/contact` | Contact — Form + social links |
