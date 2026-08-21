import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

// Floating button with a circular progress ring; appears after scrolling.
export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[var(--card)] border border-[var(--border)] backdrop-blur-xl flex items-center justify-center text-[var(--text)] hover:text-accent shadow-lg hover:shadow-[0_0_25px_rgba(0,255,135,0.35)] transition-shadow"
        >
          {/* Progress ring */}
          <svg className="absolute inset-0 -rotate-90 w-full h-full" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="21" fill="none" stroke="var(--border)" strokeWidth="2" />
            <motion.circle
              cx="24" cy="24" r="21" fill="none" stroke="var(--accent)" strokeWidth="2"
              strokeLinecap="round" pathLength="1" style={{ pathLength }}
            />
          </svg>
          <ArrowUp size={17} className="relative" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
