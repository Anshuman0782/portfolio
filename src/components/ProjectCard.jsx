import { ExternalLink, Github, Calendar, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const categoryStyles = {
  'Full Stack': { bg: 'rgba(139,92,246,0.12)', color: '#a78bfa' },
  'AI/ML':      { bg: 'rgba(16,185,129,0.12)', color: '#34d399' },
  'Quantum':    { bg: 'rgba(59,130,246,0.12)', color: '#60a5fa' },
  'Frontend':   { bg: 'rgba(249,115,22,0.12)', color: '#fb923c' },
}

export default function ProjectCard({ project }) {
  const catStyle = categoryStyles[project.category] || { bg: 'rgba(148,163,184,0.12)', color: '#94a3b8' }
  const accent = project.accent || '#8B5CF6'

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] h-full transition-colors duration-300"
      style={{ '--proj-accent': accent }}
    >
      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `0 0 40px -8px ${accent}55`, border: `1px solid ${accent}55` }}
      />

      {/* Accent header band */}
      <div className="relative h-24 shrink-0 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accent}22, transparent 70%)` }}>
        <div className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, ${accent}33, transparent 45%)`,
          }} />
        <div className="h-[3px] w-full" style={{ background: accent }} />
        {/* Big faded initial */}
        <span className="absolute -bottom-4 right-4 font-display text-7xl leading-none opacity-10 select-none"
          style={{ color: accent }}>
          {project.title.charAt(0)}
        </span>
        {/* year + category */}
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[var(--text-muted)] font-mono text-[11px]">
            <Calendar size={11} /> {project.year}
          </div>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded"
            style={{ background: catStyle.bg, color: catStyle.color }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="relative flex flex-col flex-1 px-5 pt-4 pb-4 gap-2">
        <h3 className="text-base font-semibold text-[var(--text)] leading-snug group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-[12.5px] text-[var(--text-muted)] leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--border)] text-[var(--text-muted)]">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--border)] text-[var(--text-muted)]">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer links */}
      <div className="relative flex items-center gap-2 px-5 py-3 border-t border-[var(--border)]">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-150">
            <ExternalLink size={10} /> Live
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-150">
            <Github size={10} /> Code
          </a>
        )}
        <ArrowUpRight size={16}
          className="ml-auto text-[var(--text-muted)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
          style={{ color: accent }} />
      </div>
    </motion.div>
  )
}
