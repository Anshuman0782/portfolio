import { motion } from 'framer-motion'
import { Briefcase, ArrowUpRight } from 'lucide-react'
import { experience } from '../data/portfolioData'
import AnimatedSection from '../components/AnimatedSection'

function TimelineItem({ job, index }) {
  const isEven = index % 2 === 0
  return (
    <AnimatedSection delay={index * 0.1} direction={isEven ? 'left' : 'right'}>
      <div className="relative pl-8 border-l-2 border-[var(--border)] pb-12 last:pb-0 group">
        {/* Dot */}
        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-accent bg-[var(--bg)] group-hover:bg-accent transition-colors duration-300" />

        <div className="card-glass p-6 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
            <div>
              <h3 className="font-semibold text-lg text-[var(--text)]">{job.role}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-accent font-mono text-sm">{job.company}</span>
                <ArrowUpRight size={12} className="text-[var(--text-muted)]" />
              </div>
            </div>
            <span className="font-mono text-xs text-[var(--text-muted)] bg-[var(--border)] px-3 py-1.5 rounded-full whitespace-nowrap">
              {job.period}
            </span>
          </div>

          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {job.tags.map(tag => (
              <span key={tag} className="px-2 py-1 rounded-md text-xs font-mono text-[var(--text-muted)] bg-[var(--border)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default function Experience() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-20">
          <p className="section-label mb-4">Career</p>
          <h1 className="font-display text-6xl md:text-8xl text-[var(--text)] leading-none">
            Work <span className="text-gradient">Experience</span>
          </h1>
        </AnimatedSection>

        {/* Timeline */}
        <div className="mt-12">
          {experience.map((job, i) => (
            <TimelineItem key={job.company} job={job} index={i} />
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-16 card-glass p-8 rounded-2xl text-center">
          <Briefcase size={32} className="text-accent mx-auto mb-4" />
          <h3 className="font-display text-3xl text-[var(--text)] mb-2">Open to New Opportunities</h3>
          <p className="text-[var(--text-muted)] mb-6 max-w-md mx-auto text-sm">
            I'm currently looking for senior full-stack roles. If you're building something interesting, let's talk.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={`mailto:alex@alexchen.dev`} className="btn-primary">
              Get In Touch
            </a>
            <a href="/resume.pdf" download className="btn-ghost">
              Download Resume
            </a>
          </div>
        </AnimatedSection>

      </div>
    </div>
  )
}
