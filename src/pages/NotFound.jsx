import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="font-display text-[12rem] leading-none text-gradient opacity-30">
          404
        </div>
        <h1 className="font-display text-4xl text-[var(--text)]">
          Page Not Found
        </h1>
        <p className="text-[var(--text-muted)] max-w-sm mx-auto">
          Looks like this page doesn't exist. Let's get you back on track.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          <Home size={15} /> Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
