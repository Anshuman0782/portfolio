import { Link } from 'react-router-dom'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const iconMap = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl text-gradient">AS</span>
            <span className="text-[var(--text-muted)] text-sm">
              © {year} {personalInfo.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: Github, url: 'https://github.com/Anshuman0782', label: 'GitHub' },
              { icon: Linkedin, url: 'https://www.linkedin.com/in/anshuman-sarkar-906994307/', label: 'LinkedIn' },
              { icon: Twitter, url: 'https://x.com/sarkar97711', label: 'Twitter' },
              { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-accent hover:bg-accent/10 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          Made by {personalInfo.name}
        </div>
      </div>
    </footer>
  )
}
