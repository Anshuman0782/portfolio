import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase } from 'lucide-react'
import { experience } from '../data'

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[var(--bg-surface)]/30" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Experience</div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            Where I've <span className="text-gradient">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" />

          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-20"
              >
                {/* Dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full border-2 border-accent bg-[var(--bg-primary)] -translate-x-1/2 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                {/* Card */}
                <div className="card p-6 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)] group-hover:text-accent transition-colors">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-accent" />
                        <span className="font-medium text-accent text-sm">{job.company}</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[var(--text-muted)] whitespace-nowrap px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-accent/8 text-accent border border-accent/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
