import { ExternalLink, Github, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="card-glass rounded-xl overflow-hidden group h-full flex flex-col"
    >
      {/* Gradient header */}
      <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Year */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-[var(--text-muted)] text-xs font-mono">
            <Calendar size={11} />
            {project.year}
          </div>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-accent transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-md text-[var(--text-muted)] hover:text-accent transition-colors"
                title="Source Code"
              >
                <Github size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-body font-semibold text-lg text-[var(--text)] mb-3 group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag}
              className="px-2 py-1 rounded-md text-xs font-mono text-[var(--text-muted)] bg-[var(--border)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
