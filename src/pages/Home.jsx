import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  ArrowRight, Zap, Download, Sparkles, Layout, Brain,
  Github, Linkedin, Twitter, Mail, MapPin,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo, techStack, projects, services, socialLinks } from '../data/portfolioData'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import Spotlight from '../components/Spotlight'
import Counter from '../components/Counter'
import { TypeAnimation } from 'react-type-animation'

// 3D tilt wrapper that reacts to the mouse (desktop only, no-op on touch).
function TiltCard({ children }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 15 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 150, damping: 15 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const reset = () => { x.set(0); y.set(0) }

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}
const buildTypeSequence = (roles) => roles.flatMap(role => [role.trim(), 2000])

const socialIconMap = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail }
const serviceIconMap = { layout: Layout, brain: Brain, zap: Zap, sparkles: Sparkles }

// Animated background grid + radial fade
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,135,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,135,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 30%, var(--bg) 80%)' }}
      />
    </div>
  )
}

function Orbs() {
  return (
    <>
      <div className="aurora w-72 h-72 md:w-96 md:h-96 top-10 left-1/4 animate-float"
        style={{ background: 'radial-gradient(circle, rgba(0,255,135,0.14) 0%, transparent 70%)' }} />
      <div className="aurora w-64 h-64 md:w-80 md:h-80 top-40 right-1/5 animate-float"
        style={{ background: 'radial-gradient(circle, rgba(96,239,255,0.12) 0%, transparent 70%)', animationDelay: '-3s' }} />
      <div className="aurora w-64 h-64 bottom-0 left-1/3 animate-float"
        style={{ background: 'radial-gradient(circle, rgba(191,90,242,0.10) 0%, transparent 70%)', animationDelay: '-1.5s' }} />
    </>
  )
}

export default function Home() {
  const featured = projects.filter(p => p.featured)

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 lg:pt-16 noise-bg overflow-hidden">
        <GridBackground />
        <Orbs />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20 w-full grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-2xl">

            {/* Status */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-6 chip">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-mono tracking-wider">{personalInfo.availability}</span>
            </motion.div>

            {/* NAME */}
            <motion.h1 variants={item}
              className="font-display text-[clamp(3.25rem,10vw,7rem)] leading-[0.92] tracking-tight mb-4">
              <span className="block text-[var(--text)]">{personalInfo.name.split(' ')[0]}</span>
              <span className="block text-gradient-tri animate-gradient-x">{personalInfo.name.split(' ')[1]}</span>
            </motion.h1>

            {/* ROLE */}
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-accent" />
              <span className="font-mono text-sm sm:text-base tracking-widest text-[var(--text-muted)] uppercase">
                <TypeAnimation
                  sequence={buildTypeSequence(personalInfo.roles)}
                  wrapper="span" speed={50} deletionSpeed={70} repeat={Infinity} cursor={true}
                />
              </span>
            </motion.div>

            {/* TAGLINE */}
            <motion.p variants={item} className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-lg">
              {personalInfo.tagline}
            </motion.p>

            {/* BUTTONS */}
            <motion.div variants={item} className="flex flex-wrap gap-3 sm:gap-4 mb-8">
              <Link to="/projects" className="btn-primary">
                View Projects <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-ghost">Hire Me</Link>
              <a href={personalInfo.resumeUrl} download className="btn-ghost">
                <Download size={14} /> Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-2 mb-10">
              {socialLinks.map(({ label, url, icon }) => {
                const Icon = socialIconMap[icon] || Github
                return (
                  <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200">
                    <Icon size={17} />
                  </a>
                )
              })}
            </motion.div>

            {/* MINI STATS */}
            <motion.div variants={item} className="flex gap-6 sm:gap-8 text-sm text-[var(--text-muted)]">
              {[
                { n: 20, suffix: '+', l: 'Projects' },
                { n: 4, suffix: '+', l: 'Years Coding' },
                { n: 100, suffix: '%', l: 'Passion' },
              ].map(s => (
                <div key={s.l}>
                  <Counter value={s.n} suffix={s.suffix} className="text-xl sm:text-2xl font-bold text-gradient" />
                  <p className="text-xs sm:text-sm">{s.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — code card + floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden sm:block"
          >
            <div className="absolute -inset-6 bg-accent/15 blur-3xl rounded-full" />

            <TiltCard>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 sm:p-6 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="ml-2 font-mono text-[11px] text-[var(--text-muted)]">developer.js</span>
              </div>

              <pre className="text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
<span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-[var(--text-muted)]">=</span> {'{'}
{'\n  '}<span className="text-accent">name</span>: <span className="text-yellow-300">"{personalInfo.name}"</span>,
{'\n  '}<span className="text-accent">role</span>: <span className="text-yellow-300">"Full Stack + AI"</span>,
{'\n  '}<span className="text-accent">stack</span>: [<span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Node"</span>, <span className="text-yellow-300">"AI"</span>],
{'\n  '}<span className="text-accent">available</span>: <span className="text-cyan-300">true</span>,
{'\n  '}<span className="text-accent">mission</span>: <span className="text-yellow-300">"Ship great products 🚀"</span>
{'\n'}{'}'};
              </pre>
            </motion.div>
            </TiltCard>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-3 chip !bg-[var(--card)] shadow-lg">
              <Sparkles size={12} className="text-accent" /> AI Engineer
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-3 chip !bg-[var(--card)] shadow-lg">
              <MapPin size={12} className="text-accent" /> Kolkata, IN
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <section className="border-y border-[var(--border)] py-4 overflow-hidden bg-[var(--card)]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-3 mx-6 font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">
              <Zap size={10} className="text-accent" />
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-12 max-w-2xl">
          <p className="section-label mb-3">What I Do</p>
          <h2 className="font-display text-4xl md:text-6xl text-[var(--text)] leading-none">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-[var(--text-muted)]">
            I turn ideas into fast, scalable products — blending clean full-stack engineering with modern AI.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => {
            const Icon = serviceIconMap[s.icon] || Layout
            return (
              <AnimatedSection key={s.title} delay={i * 0.08} className="h-full">
                <Spotlight className="card-glass rounded-2xl h-full transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="p-6 h-full group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg text-[var(--text)] mb-2">{s.title}</h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map(t => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--border)] text-[var(--text-muted)]">{t}</span>
                      ))}
                    </div>
                  </div>
                </Spotlight>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-6 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { n: 4, suffix: '+', label: 'Years Coding Experience' },
              { n: 20, suffix: '+', label: 'Projects Shipped' },
              { n: 15, suffix: '+', label: 'API Integrations' },
              { n: 10, suffix: '+', label: 'Technologies Explored' },
            ].map(stat => (
              <Spotlight key={stat.label} className="card-glass rounded-xl text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <Counter value={stat.n} suffix={stat.suffix} className="font-display text-4xl md:text-5xl text-gradient mb-2 block" />
                  <div className="text-[var(--text-muted)] text-xs md:text-sm">{stat.label}</div>
                </div>
              </Spotlight>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="flex items-end justify-between mb-12 gap-4">
          <div>
            <p className="section-label mb-3">Selected Work</p>
            <h2 className="font-display text-4xl md:text-6xl text-[var(--text)]">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <Link to="/projects" className="btn-ghost hidden md:inline-flex shrink-0">
            All Projects <ArrowRight size={14} />
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 flex md:hidden">
          <Link to="/projects" className="btn-ghost w-full justify-center">
            All Projects <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] px-8 py-14 md:px-16 md:py-20 text-center">
            {/* glow */}
            <div className="aurora w-96 h-96 -top-24 left-1/2 -translate-x-1/2"
              style={{ background: 'radial-gradient(circle, rgba(0,255,135,0.16) 0%, transparent 70%)' }} />
            <div className="relative">
              <p className="section-label mb-4">Let's Work Together</p>
              <h2 className="font-display text-4xl md:text-6xl text-[var(--text)] leading-none mb-5">
                Have a project <span className="text-gradient">in mind?</span>
              </h2>
              <p className="text-[var(--text-muted)] max-w-lg mx-auto mb-8">
                I'm currently available for full-time roles and freelance work. Let's build something people love to use.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-primary">
                  Start a Conversation <ArrowRight size={15} />
                </Link>
                <a href={`mailto:${personalInfo.email}`} className="btn-ghost">
                  <Mail size={14} /> Email Me
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  )
}
