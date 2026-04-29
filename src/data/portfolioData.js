// ============================================================
// 🎯 PERSONAL DATA — Edit everything here to customize
// ============================================================

export const personalInfo = {
  name: "Anshuman Sarkar",
  roles: [
    'Full Stack Developer',
    ' AI & ML Engineer',
  ],
  tagline: "I build fast, beautiful, and scalable web experiences.",
  bio: "I'm a full-stack developer with 5+ years of experience crafting high-performance applications. I specialize in React ecosystems and Node.js backends, with a passion for clean architecture and delightful UX. Currently open to full-time roles and interesting freelance projects.",
  location: "Kolkata, West Bengal, India",
  email: "anshumansarkar700@gmail.com",
  resumeUrl: "/resume.pdf", // Place your resume in /public folder
  availability: "Open to opportunities",
  avatarUrl: "/avatar.jpg",
}

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/alexchen", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/alexchen", icon: "linkedin" },
  { label: "Twitter", url: "https://twitter.com/alexchen", icon: "twitter" },
  { label: "Dev.to", url: "https://dev.to/alexchen", icon: "dev" },
]

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "Three.js / WebGL", level: 65 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / FastAPI", level: 75 },
      { name: "PostgreSQL", level: 82 },
      { name: "Redis", level: 70 },
      { name: "GraphQL", level: 78 },
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Docker / Kubernetes", level: 72 },
      { name: "AWS / GCP", level: 75 },
      { name: "CI/CD (GitHub Actions)", level: 85 },
      { name: "Git / GitHub", level: 95 },
      { name: "Linux / Shell", level: 80 },
    ]
  }
]

export const techStack = [
  "React", "Next.js",  "Node.js", "Python", "AI & ML", 
  "MongoDB", "Express", "Docker", "AWS", "Tailwind", "Generative Ai", "LLMS"
]

export const projects = [
  {
    id: 1,
    title: "Nexus — SaaS Dashboard",
    description: "A real-time analytics dashboard for SaaS products. Features live data streaming, customizable widgets, role-based access control, and exportable reports. Built for a 10k+ user base.",
    tags: ["React", "Node.js", "WebSockets", "PostgreSQL", "Recharts"],
    liveUrl: "https://nexus-demo.vercel.app",
    githubUrl: "https://github.com/alexchen/nexus",
    featured: true,
    gradient: "from-violet-500/20 to-cyan-500/20",
    accent: "#8B5CF6",
    year: "2024",
  },
  {
    id: 2,
    title: "Orbital — AI Writing Assistant",
    description: "An AI-powered writing tool that helps users draft, refine, and optimize content. Integrates OpenAI GPT-4 with a custom fine-tuned model for technical writing. 2k+ active users.",
    tags: ["Next.js", "OpenAI API", "Prisma", "Stripe", "Vercel AI SDK"],
    liveUrl: "https://orbital-ai.vercel.app",
    githubUrl: "https://github.com/alexchen/orbital",
    featured: true,
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "#10B981",
    year: "2024",
  },
  {
    id: 3,
    title: "Forge — Dev CLI Tool",
    description: "A developer productivity CLI that scaffolds projects, manages environment configs, and automates repetitive tasks. 500+ GitHub stars. Written in Go with a Rust-powered file watcher.",
    tags: ["Go", "Rust", "CLI", "Open Source"],
    liveUrl: "https://forge-cli.dev",
    githubUrl: "https://github.com/alexchen/forge",
    featured: true,
    gradient: "from-orange-500/20 to-rose-500/20",
    accent: "#F97316",
    year: "2023",
  },
  {
    id: 4,
    title: "Vault — Password Manager",
    description: "End-to-end encrypted password manager with zero-knowledge architecture. Browser extension + mobile app. AES-256 encryption with PBKDF2 key derivation.",
    tags: ["React", "Electron", "Web Crypto API", "SQLite"],
    liveUrl: "https://vault-pm.app",
    githubUrl: "https://github.com/alexchen/vault",
    featured: false,
    gradient: "from-blue-500/20 to-indigo-500/20",
    accent: "#3B82F6",
    year: "2023",
  },
  {
    id: 5,
    title: "Pulse — Health Tracker",
    description: "Personal health and fitness tracker with ML-powered insights. Connects to wearables via Bluetooth, syncs with Apple Health & Google Fit. Built with React Native.",
    tags: ["React Native", "Python", "ML", "Firebase"],
    liveUrl: "https://pulse-health.app",
    githubUrl: "https://github.com/alexchen/pulse",
    featured: false,
    gradient: "from-rose-500/20 to-pink-500/20",
    accent: "#F43F5E",
    year: "2023",
  },
  {
    id: 6,
    title: "Terrain — 3D Map Builder",
    description: "Browser-based 3D terrain editor using WebGL. Import GeoTIFF elevation data, apply textures, and export as glTF. Used by indie game developers and geographers.",
    tags: ["Three.js", "WebGL", "TypeScript", "WASM"],
    liveUrl: "https://terrain-builder.vercel.app",
    githubUrl: "https://github.com/alexchen/terrain",
    featured: false,
    gradient: "from-amber-500/20 to-yellow-500/20",
    accent: "#F59E0B",
    year: "2022",
  },
]

export const experience = [
  {
    company: "Vercel",
    role: "Senior Frontend Engineer",
    period: "2023 — Present",
    description: "Leading the DX team for the Edge Runtime. Built the new deployment UI serving 1M+ developers. Reduced cold start times by 40% through runtime optimization.",
    tags: ["React", "Rust", "Edge Functions", "DX"],
  },
  {
    company: "Stripe",
    role: "Software Engineer II",
    period: "2021 — 2023",
    description: "Worked on Stripe Dashboard and Checkout. Shipped the new Payment Element, now used by 400k+ businesses. Led migration from Flow to TypeScript across 200k LOC.",
    tags: ["TypeScript", "React", "Ruby", "Payments"],
  },
  {
    company: "Shopify",
    role: "Frontend Developer",
    period: "2020 — 2021",
    description: "Built merchant-facing tools in the Shopify Admin. Developed the Polaris design system components. Contributed to the Online Store 2.0 rollout.",
    tags: ["React", "GraphQL", "Polaris", "E-commerce"],
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2019 — 2020",
    description: "Delivered 20+ web apps for startups and agencies. Specialized in React frontends + Node.js APIs. Notable client: Series A fintech startup (YC W20).",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
]

export const UG = [
  {
    school: "Asutosh College",
    degree: "B.S. Computer Science",
    period: "2021 — 2024",
    details: "Focus on Systems & Human-Computer Interaction. Dean's List. Teaching Assistant for CS61B."
  }
]


export const PG = [
  {
    school: "University Of Calcutta",
    degree: "Master Of Computer Science",
    period: "2024 — 2026",
    details: "Focus on Systems & Human-Computer Interaction. Dean's List. Teaching Assistant for CS61B."
  }
]