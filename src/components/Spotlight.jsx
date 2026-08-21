import { useRef } from 'react'

/**
 * Spotlight — wraps content in a card that shows a soft radial glow
 * following the mouse. Purely cosmetic; falls back gracefully on touch.
 */
export default function Spotlight({ children, className = '', color = 'rgba(0,255,135,0.14)', radius = 350 }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group/spot relative overflow-hidden ${className}`}
    >
      {/* Glow layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/spot:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(${radius}px circle at var(--mx, 50%) var(--my, 50%), ${color}, transparent 60%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
