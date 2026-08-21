import { motion } from 'framer-motion'
import { MapPin, Code2, Rocket, Brain, GraduationCap, Mail, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo, UG, PG } from '../data/portfolioData'
import AnimatedSection from '../components/AnimatedSection'

const values = [
  { icon: Code2, title: "Clean Code", desc: "I write code that humans can read, not just machines. Clear structure, sensible names, and PRs that tell a story." },
  { icon: Rocket, title: "Ship Fast", desc: "Perfect is the enemy of done. I iterate quickly, gather feedback, and improve continuously to deliver real value." },
  { icon: Brain, title: "AI-First Thinking", desc: "I bring modern AI — LLMs, RAG and automation — into products to remove busywork and unlock new capabilities." },
]

const tags = ["React Ecosystem", "Node.js & APIs", "Generative AI", "RAG & LLMs", "System Design", "Automation", "MongoDB", "Python"]

export default function About() {
  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-16 md:mb-20">
          <p className="section-label mb-4">Who I Am</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl text-[var(--text)] leading-none">
            About <span className="text-gradient">Me</span>
          </h1>
        </AnimatedSection>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20 md:mb-24">
          {/* Left — Avatar + info */}
          <AnimatedSection direction="left">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              {/* Avatar with gradient frame */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/25 via-[var(--card)] to-cyan-500/25" />
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="relative w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 items-center justify-center hidden">
                  <span className="font-display text-[8rem] text-gradient leading-none">
                    {personalInfo.name.split(' ').map(w => w[0]).join('')}
                  </span>
                </div>
                {/* Corner accents */}
                <div className="absolute top-4 right-4 w-16 h-16 border border-accent/40 rounded-lg pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border border-cyan-500/40 rounded-md pointer-events-none" />
              </div>

              {/* Quick info cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="card-glass p-4 rounded-xl">
                  <div className="text-2xl font-display text-gradient">4+</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Years coding</div>
                </div>
                <div className="card-glass p-4 rounded-xl">
                  <div className="text-2xl font-display text-gradient">20+</div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Projects</div>
                </div>
                <div className="card-glass p-4 rounded-xl flex items-center gap-2 col-span-2">
                  <MapPin size={14} className="text-accent shrink-0" />
                  <span className="text-sm text-[var(--text-muted)]">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Bio */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl text-[var(--text)]">
                Building the web,<br />
                <span className="text-gradient">one commit at a time.</span>
              </h2>

              <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                <p>
                  I'm {personalInfo.name}, a full-stack developer and AI engineer based in{' '}
                  {personalInfo.location.split(',')[0]}. I love turning complex problems into
                  clean, fast and delightful products — from the database all the way to the pixel.
                </p>
                <p>{personalInfo.bio}</p>
                <p>
                  Lately I've been going deep on Generative AI — building RAG pipelines, AI agents and
                  LLM-powered automation that save real hours of work. I care about performance, clean
                  architecture and interfaces that feel effortless to use.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map(tag => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Link to="/contact" className="btn-primary"><Mail size={14} /> Get in touch</Link>
                <a href={personalInfo.resumeUrl} download className="btn-ghost"><Download size={14} /> Resume</a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <AnimatedSection className="mb-20 md:mb-24">
          <p className="section-label mb-4">My Philosophy</p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--text)] mb-12">
            How I <span className="text-gradient">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <div className="card-glass p-6 rounded-2xl h-full hover:-translate-y-1.5">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <v.icon size={20} className="text-accent" />
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
          <div className="space-y-4">
            {[...PG, ...UG].map((edu) => (
              <div key={edu.school} className="card-glass p-6 rounded-2xl flex flex-col md:flex-row md:items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-1">
                    <h3 className="font-semibold text-[var(--text)]">{edu.school}</h3>
                    <span className="hidden md:block text-[var(--text-muted)]">·</span>
                    <span className="text-accent text-sm font-mono">{edu.period}</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--text)] mb-1">{edu.degree}</p>
                  <p className="text-sm text-[var(--text-muted)]">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}
