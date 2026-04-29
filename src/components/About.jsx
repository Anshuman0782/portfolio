import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Mail, GraduationCap, Heart } from 'lucide-react'
import { personal, education } from '../data'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const passions = ['Clean code', 'Open source', 'Coffee ☕', 'Mechanical keyboards', 'Hiking', 'Photography']

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left: Photo + Quick info */}
          <motion.div
            variants={reveal}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative"
          >
            {/* Photo frame */}
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-blue-500/10 blur-2xl scale-95 translate-y-4" />
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-[var(--border)] glow-border">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 border border-accent/20"
              >
                <div className="font-mono text-xs text-[var(--text-muted)] mb-1">BASED IN</div>
                <div className="flex items-center gap-2 font-heading font-semibold text-[var(--text-primary)]">
                  <MapPin size={14} className="text-accent" />
                  {personal.location}
                </div>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-accent/30 rounded-tl-2xl" />
            </div>

            {/* Quick info cards */}
            <div className="mt-12 grid grid-cols-2 gap-3">
              {[
                { icon: Mail, label: 'Email', value: personal.email },
                { icon: GraduationCap, label: 'Education', value: education[0].school },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="card p-4">
                  <Icon size={16} className="text-accent mb-2" />
                  <div className="font-mono text-[10px] text-[var(--text-muted)] tracking-wider uppercase mb-1">{label}</div>
                  <div className="font-heading text-sm font-medium text-[var(--text-primary)] truncate">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={{ ...reveal, show: { ...reveal.show, transition: { ...reveal.show.transition, delay: 0.15 } } }}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="section-label">About Me</div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-6">
              Crafting digital experiences that{' '}
              <span className="text-gradient">actually matter</span>
            </h2>

            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-8">
              <p>{personal.bio}</p>
              <p>
                When I'm not coding, I contribute to open-source projects, write technical articles,
                and mentor junior developers. I believe great software is built at the intersection
                of technical excellence and thoughtful design.
              </p>
              <p>
                I care deeply about performance, accessibility, and developer experience.
                Every line of code I write is intentional — I'm not just building features,
                I'm crafting experiences.
              </p>
            </div>

            {/* Education */}
            {education.map((edu) => (
              <div key={edu.degree} className="card p-5 mb-6 border-l-2 border-accent">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <div className="font-heading font-semibold text-[var(--text-primary)]">{edu.degree}</div>
                    <div className="text-accent font-medium text-sm">{edu.school}</div>
                  </div>
                  <span className="font-mono text-xs text-[var(--text-muted)] whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-2">{edu.description}</p>
              </div>
            ))}

            {/* Passions */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Heart size={14} className="text-accent" />
                <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase">Things I love</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {passions.map(p => (
                  <span
                    key={p}
                    className="px-3 py-1.5 rounded-full text-sm font-medium border border-[var(--border)] text-[var(--text-secondary)] bg-[var(--bg-surface)] hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
