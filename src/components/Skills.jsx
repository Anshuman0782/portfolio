import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data'

function SkillBar({ skill, index, isVisible }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-heading font-medium text-sm text-[var(--text-primary)]">{skill.name}</span>
        <span className="font-mono text-xs text-[var(--text-muted)]">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-[var(--bg-elevated)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: skill.color }}
        >
          {/* Glow at end */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full blur-sm"
            style={{ backgroundColor: skill.color, opacity: 0.8 }}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 bg-[var(--bg-surface)]/30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Skills</div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-heading font-semibold text-lg text-[var(--text-primary)] mb-6">
              Core Competencies
            </h3>
            {skills.primary.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} isVisible={isVisible} />
            ))}
          </motion.div>

          {/* Tech cloud */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold text-lg text-[var(--text-primary)] mb-6">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.03 }}
                  whileHover={{ scale: 1.08, borderColor: 'rgba(0,255,148,0.4)', color: '#00FF94' }}
                  className="px-3.5 py-2 rounded-lg border border-[var(--border)] bg-[var(--bg-surface)] font-mono text-xs text-[var(--text-secondary)] cursor-default transition-colors duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '5+', label: 'Years of Experience' },
                { value: '25+', label: 'Technologies' },
                { value: '50+', label: 'Projects Shipped' },
              ].map(stat => (
                <div key={stat.label} className="card p-4 text-center">
                  <div className="font-display text-3xl text-accent mb-1">{stat.value}</div>
                  <div className="font-body text-xs text-[var(--text-muted)] leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
