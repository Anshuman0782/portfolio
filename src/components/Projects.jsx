import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Star, Users, ArrowUpRight } from 'lucide-react'
import { projects } from '../data'

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card group overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-[var(--bg-surface)]/20 to-transparent" />

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center gap-4 bg-surface-900/80 backdrop-blur-sm"
            >
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-surface-900 font-heading font-semibold text-sm hover:bg-accent-dark transition-colors"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white font-heading font-semibold text-sm hover:border-white/40 transition-colors"
                >
                  <Github size={15} />
                  Code
                </a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.stats?.stars && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-md glass text-xs font-mono text-[var(--text-secondary)]">
              <Star size={11} className="text-yellow-400" />
              {project.stats.stars}
            </span>
          )}
          {project.stats?.users && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-md glass text-xs font-mono text-[var(--text-secondary)]">
              <Users size={11} className="text-accent" />
              {project.stats.users}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] group-hover:text-accent transition-colors leading-tight">
            {project.title}
          </h3>
          <a
            href={project.liveUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[var(--text-muted)] hover:text-accent transition-colors"
          >
            <ArrowUpRight size={18} />
          </a>
        </div>

        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [filter, setFilter] = useState('all')

  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="section-label">Projects</div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
              Things I've <span className="text-gradient">Built</span>
            </h2>
          </div>
          <a
            href={`https://github.com/${projects[0]?.githubUrl?.split('github.com/')[1]?.split('/')[0]}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
          >
            <Github size={16} />
            All Projects
          </a>
        </motion.div>

        {/* Featured projects (2-col) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* Other projects (3-col or 2-col) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={featured.length + i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
