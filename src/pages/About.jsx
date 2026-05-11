import { motion } from 'framer-motion'
import { MapPin, Coffee, Code2, Rocket, GraduationCap } from 'lucide-react'
import { personalInfo, UG, PG } from '../data/portfolioData'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  { icon: Code2, title: "Clean Code", desc: "I write code that humans can read, not just machines. Every PR should tell a story." },
  { icon: Rocket, title: "Ship Fast", desc: "Perfect is the enemy of done. I iterate quickly, get feedback, and improve continuously." },
  { icon: Coffee, title: "DX Matters", desc: "Developer experience is user experience for engineers. I care deeply about tooling and workflows." },
]

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-20">
          <p className="section-label mb-4">Who I Am</p>
          <h1 className="font-display text-6xl md:text-8xl text-[var(--text)] leading-none">
            About <span className="text-gradient">Me</span>
          </h1>
        </AnimatedSection>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left — Avatar + info */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Avatar placeholder with styled initials */}
              <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface-card to-cyan-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[8rem] text-gradient opacity-60 leading-none">
                     <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback gradient avatar if image not found
                    e.target.style.display = 'none'
                    e.target.parentNode.classList.add('bg-gradient-to-br', 'from-cosmos-cyan/20', 'to-cosmos-violet/20')
                    const initials = document.createElement('div')
                    initials.className = 'w-full h-full flex items-center justify-center text-6xl font-syne font-black gradient-text'
                    initials.textContent = personalInfo.firstName[0] + personalInfo.lastName[0]
                    e.target.parentNode.appendChild(initials)
                  }}
                />
                  </span>
                </div>
                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-accent/30 rounded-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-cyan-500/30 rounded-md" />
              </div>

              {/* Quick info cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="card-glass p-4 rounded-xl">
                  <div className="text-2xl font-display text-gradient">4+</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Years coding Exp</div>
                </div>
                <div className="card-glass p-4 rounded-xl">
                  <div className="text-2xl font-display text-gradient">15+</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Projects</div>
                </div>
                <div className="card-glass p-4 rounded-xl flex items-center gap-2 col-span-2">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-sm text-[var(--text-muted)]">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Bio */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-6">
              <h2 className="font-display text-4xl text-[var(--text)]">
                Building the web,<br />
                <span className="text-gradient">one commit at a time.</span>
              </h2>

              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  I'm {personalInfo.name}, a full-stack developer with 5+ years of experience building
                  products that scale. I've shipped code that millions of people use at companies like
                  Vercel, Stripe, and Shopify.
                </p>
                <p>
                  My sweet spot is the intersection of performance, design, and developer experience.
                  I believe great software is both technically excellent and a joy to use — and that
                  the two aren't mutually exclusive.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open source, writing about
                  developer tooling, hiking in the Marin Headlands, or brewing specialty coffee.
                  I'm always open to interesting technical challenges and collaborations.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["React Ecosystem", "System Design", "API Architecture", "Open Source", "Technical Writing", "Coffee Nerd"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-mono border border-[var(--border)] text-[var(--text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <AnimatedSection className="mb-24">
          <p className="section-label mb-4">My Philosophy</p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--text)] mb-12">
            How I <span className="text-gradient">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="card-glass p-6 rounded-xl h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <v.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-[var(--text)] mb-2">{v.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection>
          <p className="section-label mb-4">Background</p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--text)] mb-12">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="space-y-8"> 
          <div className="space-y-4">
            {PG.map((edu) => (
              <div key={edu.school} className="card-glass p-6 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[var(--text)]">{edu.school}</h3>
                    <span className="hidden md:block text-[var(--text-muted)]">·</span>
                    <span className="text-accent text-sm font-mono">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--text-muted)] mb-1">{edu.degree}</p>
                  <p className="text-sm text-[var(--text-muted)]">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>


          <div className="space-y-4">
            {UG.map((edu) => (
              <div key={edu.school} className="card-glass p-6 rounded-xl flex flex-col md:flex-row md:items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                    <h3 className="font-semibold text-[var(--text)]">{edu.school}</h3>
                    <span className="hidden md:block text-[var(--text-muted)]">·</span>
                    <span className="text-accent text-sm font-mono">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--text-muted)] mb-1">{edu.degree}</p>
                  <p className="text-sm text-[var(--text-muted)]">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}
