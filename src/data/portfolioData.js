export const personalInfo = {
  name: "Anshuman Sarkar",
  roles: [
    'Full Stack Developer',
    ' AI & ML Engineer',
  ],
  tagline: "I build fast, beautiful, and scalable web experiences.",
  bio: "I'm a full-stack developer with 5+ years of Coding experience crafting high-performance applications. I specialize in React ecosystems and Node.js backends, with a passion for clean architecture and delightful UX. Currently open to full-time roles and interesting freelance projects.",
  location: "Kolkata, West Bengal, India",
  email: "anshumansarkar700@gmail.com",
  resumeUrl: "/resume.pdf", // Place your resume in /public folder
  availability: "Open to opportunities",
  avatarUrl: "/avatar.png",
}

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/Anshuman0782", icon: "github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/anshuman-sarkar-906994307/", icon: "linkedin" },
  { label: "Twitter", url: "https://x.com/sarkar97711", icon: "twitter" },
]

export const skills = [
  {
  category: "Programming Languages",
  items: [
    { name: "C", level: 85 },
    { name: "C++", level: 88 },
    { name: "Java", level: 82 },
    { name: "Python", level: 85 },
    { name: "PHP", level: 75 },
    { name: "SQL", level: 80 },
    { name: "JavaScript", level: 90 }
  ]
},
  {
  category: "Web Technologies & Cloud",
  items: [
    { name: "React", level: 95 },
    { name: "Node.js / Express", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "REST API", level: 85 },
    { name: "Socket.IO", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Render", level: 78 },
  ]
},
{
  category: "AI & ML (Generative AI)",
  items: [
    { name: "Machine Learning", level: 80 },
    { name: "Deep Learning ", level: 78 },
    { name: "MLOps", level: 80 },
    { name: "LLM Integration ", level: 88 },
    { name: "Prompt Engineering", level: 90 },
    { name: "Fine-Tuning", level: 70 },
    { name: "Vector Databases & Embeddings", level: 70 }
  ]
},
{
  category: "Tools",
  items: [
    { name: "Git / GitHub", level: 95 },
    { name: "Docker", level: 75 },
    { name: "Postman", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "MongoDB Compass", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "Linux / Shell", level: 80 }
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
title: "Aalap — Real-Time Chat & Gaming Platform",
description: "A real-time chat application with support for multiple interactive games and an admin dashboard. Features live messaging, game integration, user management, and real-time updates. Designed to handle scalable user interactions.",
tags: ["React", "Node.js", "Socket.IO", "MongoDB", "Express"],
    liveUrl: "https://aalap.vercel.app/",
    githubUrl: "https://github.com/Anshuman0782/Aalap-Frontend",
    featured: true,
    category: "Full Stack",
    image: "/Aalap.png",
    gradient: "from-violet-500/20 to-cyan-500/20",
    accent: "#8B5CF6",
    year: "2025",
  },
  {
    id: 2,
    title: "Code2Music — Universal Compiler & Code-to-Music Converter",
    description: "A universal compiler that converts code into music with an integrated code generator and cross-platform support.",
    tags: ["React", "Node.js", "Express", "API"],
    liveUrl: "https://code2-music.vercel.app/",
    githubUrl: "https://github.com/Anshuman0782/Code2Music",
    featured: true,
    category: "Full Stack",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "#10B981",
    year: "2025",
  },
  {
    id: 3,
title: "AutoPark IQ — AI-Powered Automatic Car Parking System",
description: "An AI-based system using computer vision to detect parking spaces and assist automated parking.",
tags: ["React", "Node.js", "Express", "MongoDB", "Python", "OpenCV", "CNN"],
    liveUrl: "https://drive.google.com/drive/u/1/folders/1MscNXPt63ey16pDnM12VF10flUvZOMxK",
    category: "AI/ML",
    featured: true,
    gradient: "from-orange-500/20 to-rose-500/20",
    accent: "#F97316",
    year: "2024",
  },
  {
    id: 4,
title: "Quantum Cryptanalysis Lab — RSA Attack Simulation",
description: "A simulator demonstrating RSA cryptanalysis using quantum algorithms like Shor’s algorithm.",
tags: ["React", "Node.js", "Express", "Python", "Qiskit", "API", "WebSockets"],
    liveUrl: "https://quantumrsa.vercel.app/",
    githubUrl: "https://github.com/Anshuman0782/Quantum-Shor-s-Algorithm-Frontend",
    featured: false,
    category: "Quantum",
    gradient: "from-blue-500/20 to-indigo-500/20",
    accent: "#3B82F6",
    year: "2026",
  },
  {
    id: 5,
  title: "Secure File Locker — Password-Based Encryption Tool",
description: "A browser-based tool to securely lock and unlock files using password-based encryption.",
tags: ["HTML", "CSS", "JavaScript", "Web Crypto API"],
    liveUrl: "https://filehider.netlify.app/",
    githubUrl: "https://filehider.netlify.app/",
    featured: false,
    category: "Frontend",
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
    category: "Frontend",
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