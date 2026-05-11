import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Zap, Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo, techStack, projects } from '../data/portfolioData'
import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import { TypeAnimation } from 'react-type-animation'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}
const buildTypeSequence = (roles) => {
  return roles.flatMap(role => [role, 2000])
}


// Animated background grid
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
      {/* Radial fade overlay */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, transparent 30%, var(--bg) 80%)'
        }}
      />
    </div>
  )
}

// Floating orbs
function Orbs() {
  return (
    <>
      <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full animate-float"
        style={{ background: 'radial-gradient(circle, rgba(0,255,135,0.08) 0%, transparent 70%)' }}
      />
      <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(96,239,255,0.06) 0%, transparent 70%)',
          animationDelay: '-3s'
        }}
      />
    </>
  )
}

export default function Home() {
  const featured = projects.filter(p => p.featured)

  return (
    <div>
      {/* ── HERO ── */}
{/* ── HERO ── */}
<section className="relative min-h-screen flex items-center pt-16 noise-bg overflow-hidden">
  <GridBackground />
  <Orbs />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="max-w-2xl"
    >

      {/* Status */}
      <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
          {personalInfo.availability}
        </span>
      </motion.div>

      {/* NAME */}
      <motion.h1 variants={item}
        className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-none tracking-tight mb-4">
        <span className="block text-[var(--text)]">
          {personalInfo.name.split(' ')[0]}
        </span>
        <span className="block text-gradient">
          {personalInfo.name.split(' ')[1]}
        </span>
      </motion.h1>

      {/* ROLE */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
  <div className="h-px w-10 bg-accent" />
  <span className="font-mono text-sm tracking-widest text-[var(--text-muted)] uppercase">
    <TypeAnimation
      sequence={buildTypeSequence(personalInfo.roles)}
      wrapper="span"
      speed={50}        // typing speed (lower = faster)
      deletionSpeed={70} // deleting speed
      repeat={Infinity}
      cursor={true}
    />
  </span>
</motion.div>


      {/* TAGLINE */}
      <motion.p variants={item}
        className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
        {personalInfo.tagline}
      </motion.p>

      {/* BUTTONS */}
      <motion.div variants={item} className="flex gap-4 mb-10">
        <Link to="/projects" className="btn-primary">
          View Projects <ArrowRight size={15} />
        </Link>

        <Link to="/contact" className="btn-ghost">
          Hire Me
        </Link>
      </motion.div>

      {/* MINI STATS */}
      <motion.div variants={item} className="flex gap-8 text-sm text-[var(--text-muted)]">
        <div>
          <p className="text-xl font-bold text-white">20+</p>
          <p>Projects</p>
        </div>
        <div>
          <p className="text-xl font-bold text-white">4+</p>
          <p>Years Coding Exp</p>
        </div>
        <div>
          <p className="text-xl font-bold text-white">100%</p>
          <p>Passion</p>
        </div>
      </motion.div>
    </motion.div>

    {/* RIGHT SIDE (NEW VISUAL) */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >

      {/* Glow */}
      <div className="absolute -inset-5 bg-accent/20 blur-3xl rounded-full" />

      {/* Glass Card */}
      <div className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 backdrop-blur-xl shadow-xl">

        {/* Fake Code UI */}
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full" />
          <span className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        <pre className="text-sm text-green-400 font-mono leading-relaxed">
{`const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.roles}",
  skills: ["React", "AI", "Full Stack"],
  passion: "Building scalable Products 🚀"
};`}
        </pre>

      </div>
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

      {/* ── STATS ── */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '4+', label: 'Years Coding Experience' },
              { value: '20+', label: 'Projects Shipped' },
              { value: '15+', label: 'API Integrations' },
              { value: '10+', label: 'Technologies Explored' },
            ].map(stat => (
              <div key={stat.label} className="card-glass p-6 rounded-xl text-center">
                <div className="font-display text-4xl text-gradient mb-2">{stat.value}</div>
                <div className="text-[var(--text-muted)] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="flex items-end justify-between mb-12">
          <div>
            <p className="section-label mb-3">Selected Work</p>
            <h2 className="font-display text-5xl md:text-6xl text-[var(--text)]">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <Link to="/projects" className="btn-ghost hidden md:inline-flex">
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
    </div>
  )
}
