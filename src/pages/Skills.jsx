import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, techStack } from '../data/portfolioData'
import AnimatedSection from '../components/AnimatedSection'

function SkillBar({ name, level, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-body text-[var(--text)]">{name}</span>
        <span className="text-xs font-mono text-accent">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #00FF87, #60EFFF)' }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </div>
  )
}

const toolIcons = [
  { name: 'VS Code', emoji: '⚡' },
  { name: 'Postma', emoji: '🎨' },
  { name: 'Neovim', emoji: '🟢' },
  { name: 'iTerm2', emoji: '🖥' },
  { name: 'Raycast', emoji: '🚀' },
  { name: 'Linear', emoji: '📋' },
  { name: 'Notion', emoji: '📝' },
  { name: 'TablePlus', emoji: '🗄' },
]

export default function Skills() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-20">
          <p className="section-label mb-4">Capabilities</p>
          <h1 className="font-display text-6xl md:text-8xl text-[var(--text)] leading-none">
            My <span className="text-gradient">Skills</span>
          </h1>
        </AnimatedSection>

        {/* Skill categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((cat, ci) => (
            <AnimatedSection key={cat.category} delay={ci * 0.15}>
              <div className="card-glass p-6 rounded-xl h-full">
                <h2 className="font-display text-2xl text-gradient mb-6">{cat.category}</h2>
                <div className="space-y-5">
                  {cat.items.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1 + ci * 0.15} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech cloud */}
        <AnimatedSection className="mb-20">
          <p className="section-label mb-4">Technology</p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--text)] mb-10">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(0,255,135,0.5)' }}
                className="px-4 py-2 rounded-xl border border-[var(--border)] text-sm font-mono text-[var(--text-muted)] cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>

        {/* Tools */}
        <AnimatedSection>
          <p className="section-label mb-4">Workflow</p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--text)] mb-10">
            Daily <span className="text-gradient">Tools</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toolIcons.map((tool, i) => (
              <AnimatedSection key={tool.name} delay={i * 0.07}>
                <div className="card-glass p-4 rounded-xl flex items-center gap-3">
                  <span className="text-2xl">{tool.emoji}</span>
                  <span className="text-sm font-body text-[var(--text-muted)]">{tool.name}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}
