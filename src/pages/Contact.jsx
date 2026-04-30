import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, Mail, MapPin, CheckCircle2, AlertCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import AnimatedSection from '../components/AnimatedSection'

const socials = [
  { icon: Github, label: 'GitHub', value: '@Anshuman0782', url: 'https://github.com/Anshuman0782' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/anshuman-sarkar-906994307', url: 'https://www.linkedin.com/in/anshuman-sarkar-906994307/' },
  { icon: Twitter, label: 'Twitter', value: '@sarkar97711', url: 'https://x.com/sarkar97711' },
  { icon: Mail, label: 'Email', value: personalInfo.email, url: `mailto:${personalInfo.email}` },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('sending')
    // Simulate API call — replace with your actual endpoint or emailjs
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 5000)
  }

  const onChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: null }))
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="mb-20">
          <p className="section-label mb-4">Let's Connect</p>
          <h1 className="font-display text-6xl md:text-8xl text-[var(--text)] leading-none">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="mt-4 text-[var(--text-muted)] max-w-xl">
            Have a project in mind? Want to collaborate? Or just want to say hi?
            My inbox is always open.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — contact info */}
          <AnimatedSection className="lg:col-span-2 space-y-6" direction="left">
            {/* Availability */}
            <div className="card-glass p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="text-accent text-sm font-mono">Available Now</span>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Currently open to full-time Full Stack Developer and Ai Engineer roles and select freelance projects.
                Typical response time: 24-48 hours.
              </p>
            </div>

            {/* Location */}
            <div className="card-glass p-6 rounded-xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin size={15} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-0.5">Location</p>
                <p className="text-sm text-[var(--text)]">{personalInfo.location}</p>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-[var(--text-muted)] tracking-widest uppercase mb-4">Find me online</p>
              {socials.map(({ icon: Icon, label, value, url }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                  className="card-glass p-4 rounded-xl flex items-center gap-3 hover:border-accent/30 transition-all duration-200 block"
                >
                  <div className="w-8 h-8 rounded-lg bg-[var(--border)] flex items-center justify-center">
                    <Icon size={14} className="text-[var(--text-muted)]" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">{label}</p>
                    <p className="text-sm text-[var(--text)]">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection className="lg:col-span-3" direction="right" delay={0.1}>
            <div className="card-glass p-8 rounded-2xl">
              <h2 className="font-display text-3xl text-[var(--text)] mb-6">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    label="Name" id="name" type="text" placeholder="John Doe"
                    value={form.name} onChange={v => onChange('name', v)} error={errors.name}
                  />
                  <FormField
                    label="Email" id="email" type="email" placeholder="john@example.com"
                    value={form.email} onChange={v => onChange('email', v)} error={errors.email}
                  />
                </div>
                <FormField
                  label="Subject" id="subject" type="text" placeholder="Project collaboration..."
                  value={form.subject} onChange={v => onChange('subject', v)}
                />
                <FormField
                  label="Message" id="message" type="textarea" placeholder="Tell me about your project or idea..."
                  value={form.message} onChange={v => onChange('message', v)} error={errors.message}
                  rows={5}
                />

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-t-transparent border-current rounded-full"
                      />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <><CheckCircle2 size={15} /> Message Sent!</>
                  ) : (
                    <><Send size={14} /> Send Message</>
                  )}
                </button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20 text-accent text-sm"
                    >
                      <CheckCircle2 size={15} />
                      Thanks! I'll get back to you within 24-48 hours.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                    >
                      <AlertCircle size={15} />
                      Something went wrong. Please email me directly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}

function FormField({ label, id, type, placeholder, value, onChange, error, rows }) {
  const baseClass = `w-full bg-[var(--bg)] border rounded-lg px-4 py-3 text-sm text-[var(--text)] placeholder-[var(--text-muted)] outline-none transition-all duration-200 font-body
    ${error ? 'border-red-500/50 focus:border-red-500' : 'border-[var(--border)] focus:border-accent/50'}`

  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono text-[var(--text-muted)] mb-2 tracking-wider uppercase">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id} placeholder={placeholder} value={value} rows={rows || 4}
          onChange={e => onChange(e.target.value)} className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          id={id} type={type} placeholder={placeholder} value={value}
          onChange={e => onChange(e.target.value)} className={baseClass}
        />
      )}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )
}
