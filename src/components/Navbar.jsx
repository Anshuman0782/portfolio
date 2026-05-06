import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Download } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { personalInfo } from '../data/portfolioData'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path:  },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--bg)]/90 backdrop-blur-xl border-b border-[var(--border)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="font-display text-2xl tracking-wider text-gradient">
              Anshuman
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-body font-medium rounded-md transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-md bg-accent/10"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--border)] transition-all"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a
                href={personalInfo.resumeUrl}
                download
                className="btn-primary text-xs px-4 py-2"
              >
                <Download size={13} />
                Resume
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-3">
              <button onClick={toggleTheme} className="p-2 text-[var(--text-muted)]">
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-[var(--text)]"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-40 bg-[var(--card)] border-b border-[var(--border)] md:hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-accent bg-accent/10'
                      : 'text-[var(--text-muted)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={personalInfo.resumeUrl} download className="btn-primary mt-3 justify-center">
                <Download size={13} /> Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
