import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Mail, Github, Linkedin, Twitter, CheckCircle, Loader } from 'lucide-react'
import { personal } from '../data'

const socialIcons = { Github, Linkedin, Twitter }

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    // 🔧 REPLACE with your actual form submission logic
    // e.g., Formspree, EmailJS, your own API, etc.
    // Example using Formspree:
    // const res = await fetch('https://formspree.io/f/YOUR_ID', {
    //   method: 'POST', headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // })

    // Simulated delay for demo
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/6 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">Contact</div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it.
            Drop me a message and I'll get back within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Email card */}
            <a
              href={`mailto:${personal.email}`}
              className="card p-5 flex items-center gap-4 hover:glow-border group"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                <Mail size={20} className="text-accent" />
              </div>
              <div>
                <div className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-0.5">Email</div>
                <div className="font-heading font-medium text-[var(--text-primary)] text-sm">{personal.email}</div>
              </div>
            </a>

            {/* Availability */}
            <div className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-accent tracking-wider uppercase">Available</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Open to full-time roles and freelance projects. Currently based in {personal.location}.
              </p>
            </div>

            {/* Socials */}
            <div>
              <div className="font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-4">Find me on</div>
              <div className="flex gap-3">
                {Object.entries(personal.socials)
                  .filter(([, url]) => url)
                  .map(([platform, url]) => {
                    const Icon = socialIcons[platform.charAt(0).toUpperCase() + platform.slice(1)] || Github
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={platform}
                        className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--border)] text-[var(--text-secondary)] hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                      >
                        <Icon size={18} />
                      </a>
                    )
                  })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: 'name', label: 'Full Name', placeholder: 'John Doe', type: 'text' },
                  { name: 'email', label: 'Email', placeholder: 'john@example.com', type: 'email' },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-2">
                      {field.label}
                    </label>
                    <input
                      required
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] font-body text-sm focus:outline-none focus:border-accent/40 focus:bg-accent/5 transition-all duration-200"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-2">Subject</label>
                <input
                  required
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Let's build something amazing"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] font-body text-sm focus:outline-none focus:border-accent/40 focus:bg-accent/5 transition-all duration-200"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[var(--text-muted)] tracking-wider uppercase mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and budget..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] font-body text-sm focus:outline-none focus:border-accent/40 focus:bg-accent/5 transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full btn-primary justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' && <Loader size={16} className="animate-spin" />}
                {status === 'success' && <CheckCircle size={16} />}
                {status === 'idle' && <Send size={16} />}
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
