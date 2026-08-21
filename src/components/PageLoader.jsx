import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 400)
          return 100
        }
        return p + Math.random() * 15
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-surface-dark flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Logo */}
            <div className="font-display text-6xl text-gradient glow-text tracking-wider">
              Anshuman
            </div>

            {/* Progress bar */}
            <div className="w-48 h-px bg-surface-border relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-accent"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest">
              LOADING... {Math.floor(Math.min(progress, 100))}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
