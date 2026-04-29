import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from 'lucide-react'
import { personal, skills } from '../data'

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
}

function Orb({ className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: 'easeOut' }}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    />
  )
}

export default function Hero() {
  const marqueeRef = useRef(null)

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const socials = [
    { icon: Github, href: personal.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: personal.socials.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personal.socials.twitter, label: 'Twitter' },
  ].filter(s => s.href)

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden gradient-mesh noise">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-dark dark:bg-grid-dark light:bg-grid-light bg-grid opacity-100" />

      {/* Orbs */}
      <Orb className="w-[600px] h-[600px] bg-accent/8 -top-40 -right-40" delay={0.2} />
      <Orb className="w-[400px] h-[400px] bg-blue-500/6 bottom-20 -left-20" delay={0.5} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={stagger.item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 font-mono text-xs text-accent tracking-wider">
              <Sparkles size={12} className="animate-pulse-slow" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={stagger.item} className="mb-4">
            <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-wide text-[var(--text-primary)]">
              {personal.name.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'text-gradient block' : 'block'}>
                  {word}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div variants={stagger.item} className="mb-6 flex items-center gap-3">
            <span className="w-12 h-px bg-accent" />
            <span className="font-heading text-lg text-[var(--text-secondary)] tracking-widest uppercase">
              {personal.title}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={stagger.item}
            className="font-body text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="flex flex-wrap items-center gap-4 mb-16">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View My Work
              <ArrowDown size={16} />
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social + Stats */}
          <motion.div variants={stagger.item} className="flex flex-wrap items-center gap-8">
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-[var(--border)] text-[var(--text-secondary)] hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {[
                { value: '5+', label: 'Years Exp.' },
                { value: '50+', label: 'Projects' },
                { value: '12', label: 'Open Source' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl text-accent">{stat.value}</div>
                  <div className="font-mono text-xs text-[var(--text-muted)] tracking-wider mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-[var(--text-muted)] hover:text-accent transition-colors"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] rotate-90 mb-2">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>

      {/* Tech marquee */}
      <div className="relative border-y border-[var(--border)] overflow-hidden py-4 bg-[var(--bg-surface)]/30">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {[...skills.technologies, ...skills.technologies].map((tech, i) => (
            <span key={i} className="inline-flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] px-6">
              <span className="w-1 h-1 rounded-full bg-accent/40" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
