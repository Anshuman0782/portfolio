import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-surface-900"
        >
          {/* Animated logo */}
          <div className="flex flex-col items-center gap-8">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl text-accent glow-text"
            >
              Anshuman
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-accent rounded-full"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-xs text-[var(--text-muted)] tracking-[0.3em] uppercase"
            >
              Loading
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
