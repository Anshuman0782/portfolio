import { ExternalLink, Github, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const categoryStyles = {
  'Full Stack': { bg: '#EEEDFE', color: '#534AB7' },
  'AI/ML':      { bg: '#D1FAE5', color: '#065F46' },
  'Quantum':    { bg: '#DBEAFE', color: '#1E40AF' },
  'Frontend':   { bg: '#FFEDD5', color: '#9A3412' },
}

export default function ProjectCard({ project }) {
  const catStyle = categoryStyles[project.category] || { bg: '#F3F4F6', color: '#374151' }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group flex flex-col rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-hover)] transition-all duration-300"
    >
      {/* Accent bar */}
      <div
        className="h-[3px] w-full shrink-0"
        style={{ background: project.accent || '#8B5CF6' }}
      />

      {/* Top row: year + category + featured dot */}
      <div className="flex items-center justify-between px-5 pt-4 pb-0">
        <div className="flex items-center gap-1.5 text-[var(--text-muted)] font-mono text-[11px]">
          <Calendar size={11} />
          {project.year}
        </div>

        <div className="flex items-center gap-2">
          <span
            className="text-[10px] font-mono font-medium px-2 py-0.5 rounded"
            style={{ background: catStyle.bg, color: catStyle.color }}
          >
            {project.category}
          </span>

          {project.featured && (
            <span
              className="w-[7px] h-[7px] rounded-full shrink-0"
              style={{ background: project.accent || '#8B5CF6' }}
              title="Featured project"
            />
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 pt-3 pb-4 gap-2">
        <h3 className="text-[14.5px] font-semibold text-[var(--text)] leading-snug group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        <p className="text-[12.5px] text-[var(--text-muted)] leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map(tag => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--border)] text-[var(--text-muted)] border border-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer links */}
      <div className="flex items-center gap-2 px-5 py-3 border-t border-[var(--border)]">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-150"
          >
            <ExternalLink size={10} />
            Live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-150"
          >
            <Github size={10} />
            Code
          </a>
        )}
      </div>
    </motion.div>
  )
}