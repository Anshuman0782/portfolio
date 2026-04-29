import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/portfolioData'
import ProjectCard from '../components/ProjectCard'
import AnimatedSection from '../components/AnimatedSection'

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

export default function Projects() {
  const [filter, setFilter] = useState('All')

 const filtered = filter === 'All'
  ? projects
  : projects.filter(p => p.category === filter)

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-16">
          <p className="section-label mb-4">Portfolio</p>
          <h1 className="font-display text-6xl md:text-8xl text-[var(--text)] leading-none mb-6">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-[var(--text-muted)] max-w-xl">
            {projects.length} projects built across web, mobile, CLI, and open-source.
            Real products, real users, real impact.
          </p>
        </AnimatedSection>

        {/* Filter chips */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap gap-2">
            {['All', 'Frontend', 'Full Stack', 'AI/ML', 'Quantum'].map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                  filter === tag
                    ? 'bg-accent text-surface-dark'
                    : 'border border-[var(--border)] text-[var(--text-muted)] hover:border-accent/50 hover:text-[var(--text)]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[var(--text-muted)]">
            No projects match this filter.
          </div>
        )}

      </div>
    </div>
  )
}
