import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const socials = [
  { icon: Github, url: 'https://github.com/Anshuman0782', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/anshuman-sarkar-906994307/', label: 'LinkedIn' },
  { icon: Twitter, url: 'https://x.com/sarkar97711', label: 'Twitter' },
  { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
]

const links = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[var(--border)] mt-20 overflow-hidden">
      <div className="aurora w-96 h-96 -bottom-40 left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(circle, rgba(0,255,135,0.08) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-3xl tracking-wider text-gradient">Anshuman</Link>
            <p className="mt-3 text-sm text-[var(--text-muted)] max-w-xs leading-relaxed">
              Full-Stack Developer & AI Engineer building fast, beautiful and scalable web experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-4">Navigate</p>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className="text-sm text-[var(--text-muted)] hover:text-accent transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-4">Connect</p>
            <a href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1 text-sm text-[var(--text)] hover:text-accent transition-colors mb-4">
              {personalInfo.email} <ArrowUpRight size={13} />
            </a>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, url, label }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--text-muted)]">
          <span>© {year} {personalInfo.name}. All rights reserved.</span>
          <span className="font-mono text-xs">Designed & built with React + Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
