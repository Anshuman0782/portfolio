import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [enabled, setEnabled] = useState(false)

  // Only enable the custom cursor on fine pointers (desktop) to avoid wasting work on touch devices.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(pointer: fine)')
    const update = () => setEnabled(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e) => {
      const el = e.target
      setHovering(
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.dataset.cursor === 'pointer'
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [enabled])

  // Trail follows with spring
  useEffect(() => {
    if (!enabled) return
    let frame
    const animate = () => {
      setTrail(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos, enabled])

  if (!enabled) return null

  return (
    <>
      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: pos.x - 4, y: pos.y - 4 }}
        animate={{ scale: clicking ? 0.5 : 1 }}
        transition={{ duration: 0.1 }}
      >
        <div className="w-2 h-2 rounded-full bg-white" />
      </motion.div>

      {/* Ring trail */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-100"
        style={{
          transform: `translate(${trail.x - (hovering ? 20 : 16)}px, ${trail.y - (hovering ? 20 : 16)}px)`,
        }}
      >
        <div
          className="rounded-full border transition-all duration-200"
          style={{
            width: hovering ? 40 : 32,
            height: hovering ? 40 : 32,
            borderColor: hovering ? '#00FF87' : 'rgba(255,255,255,0.3)',
            boxShadow: hovering ? '0 0 12px rgba(0,255,135,0.4)' : 'none',
          }}
        />
      </div>
    </>
  )
}
