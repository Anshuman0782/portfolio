// ============================================================
//  ✏️  EDIT YOUR PERSONAL DETAILS HERE
//  This is the single source of truth for all portfolio data
// ============================================================

export const personal = {
  name: "Anshuman Sarkar",
  title: "Full-Stack Developer",
  tagline: "I build fast, beautiful, and scalable digital experiences.",
  bio: "I'm a full-stack developer with 5+ years of experience crafting web applications that sit at the intersection of design and engineering. I love turning complex problems into elegant solutions.",
  location: "Kolkata, West Bengal, India",
  email: "anshumansarkar700@gmail.com",
  resumeUrl: "/resume.pdf", // Place your resume in /public folder
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",

  // Social links — set to null to hide
  socials: {
    github: "#",
    linkedin: "#",
    twitter: "#",
    dribbble: null,
  },
}

export const skills = {
  primary: [
    { name: "React / Next.js", level: 95, color: "#61DAFB" },
    { name: "TypeScript", level: 90, color: "#3178C6" },
    { name: "Node.js / Express", level: 88, color: "#68A063" },
    { name: "Python / FastAPI", level: 80, color: "#FFD43B" },
    { name: "PostgreSQL / MongoDB", level: 82, color: "#336791" },
    { name: "AWS / GCP", level: 75, color: "#FF9900" },
  ],
  technologies: [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker",
    "Kubernetes", "AWS", "GCP", "GraphQL", "REST APIs",
    "Tailwind CSS", "Framer Motion", "Git", "CI/CD", "Linux",
    "Prisma", "Jest", "Playwright", "Figma", "Stripe",
  ],
}

export const experience = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Vercel",
    period: "2022 — Present",
    description: "Led development of core platform features serving 1M+ developers. Built real-time collaboration tools, reduced build times by 40%, and mentored a team of 5 engineers.",
    tags: ["React", "Rust", "PostgreSQL", "Edge Functions"],
  },
  {
    role: "Software Engineer",
    company: "Stripe",
    period: "2020 — 2022",
    description: "Contributed to the Stripe Dashboard and developer tools. Built payment flow components used by 3M+ merchants. Improved API response times by 35% through caching strategies.",
    tags: ["React", "Ruby on Rails", "Go", "AWS"],
  },
  {
    role: "Frontend Developer",
    company: "Linear",
    period: "2019 — 2020",
    description: "Helped build Linear's core issue tracking interface from 0 to 1. Implemented real-time sync using CRDTs, built the kanban board, and shipped a mobile app in React Native.",
    tags: ["React", "TypeScript", "GraphQL", "React Native"],
  },
]

export const education = [
  {
    degree: "B.S. Computer Science",
    school: "UC Berkeley",
    period: "2015 — 2019",
    description: "Graduated with Honors. Focus on algorithms, distributed systems, and HCI.",
  },
]

export const projects = [
  {
    title: "Nimbus — AI Writing Platform",
    description: "A collaborative AI writing assistant that helps teams draft, edit, and publish content 10× faster. Supports custom AI models, real-time collaboration, and version control.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80",
    tags: ["Next.js", "OpenAI", "Supabase", "Tailwind"],
    liveUrl: "https://nimbus.example.com",
    githubUrl: "https://github.com/alexchen/nimbus",
    featured: true,
    stats: { stars: "2.4k", users: "18k" },
  },
  {
    title: "Pulse — Real-time Analytics",
    description: "Open-source analytics dashboard with sub-second query times. Processes 50M+ events/day using ClickHouse and visualizes them with beautiful, interactive charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "ClickHouse", "Go", "Docker"],
    liveUrl: "https://pulse.example.com",
    githubUrl: "https://github.com/alexchen/pulse",
    featured: true,
    stats: { stars: "1.8k", users: "5k" },
  },
  {
    title: "Orbit — Design System",
    description: "A comprehensive React component library with 80+ components, full dark mode, accessibility-first design, and Figma integration. Used by 200+ projects.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    tags: ["React", "TypeScript", "Storybook", "Radix UI"],
    liveUrl: "https://orbit.example.com",
    githubUrl: "https://github.com/alexchen/orbit",
    featured: false,
    stats: { stars: "940", users: "1.2k" },
  },
  {
    title: "Pathfinder — Travel Planner",
    description: "AI-powered travel planning app that creates personalized itineraries. Integrates with maps, flight APIs, and hotel APIs to provide a seamless planning experience.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    tags: ["React Native", "Python", "GPT-4", "Maps API"],
    liveUrl: "https://pathfinder.example.com",
    githubUrl: "https://github.com/alexchen/pathfinder",
    featured: false,
    stats: { stars: "620", users: "3k" },
  },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]
