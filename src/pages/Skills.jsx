// import { useRef } from 'react'
// import { motion, useInView } from 'framer-motion'
// import { skills, techStack } from '../data/portfolioData'
// import AnimatedSection from '../components/AnimatedSection'

// function SkillBar({ name, level, delay = 0 }) {
//   const ref = useRef(null)
//   const inView = useInView(ref, { once: true })

//   return (
//     <div ref={ref} className="space-y-2">
//       <div className="flex justify-between items-center">
//         <span className="text-sm font-body text-[var(--text)]">{name}</span>
//         <span className="text-xs font-mono text-accent">{level}%</span>
//       </div>
//       <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
//         <motion.div
//           className="h-full rounded-full"
//           style={{ background: 'linear-gradient(90deg, #00FF87, #60EFFF)' }}
//           initial={{ width: 0 }}
//           animate={inView ? { width: `${level}%` } : {}}
//           transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
//         />
//       </div>
//     </div>
//   )
// }

// const toolIcons = [
//   { name: 'VS Code', emoji: '⚡' },
//   { name: 'Postman', emoji: '🎨' },
//   { name: 'Photoshop', emoji: '🟢' },
//   { name: 'iTerm2', emoji: '🖥' },
//   { name: 'Raycast', emoji: '🚀' },
//   { name: 'Linear', emoji: '📋' },
//   { name: 'Notion', emoji: '📝' },
//   { name: 'TablePlus', emoji: '🗄' },
// ]

// export default function Skills() {
//   return (
//     <div className="min-h-screen pt-24 pb-20">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">

//         {/* Header */}
//         <AnimatedSection className="mb-20">
//           <p className="section-label mb-4">Capabilities</p>
//           <h1 className="font-display text-6xl md:text-8xl text-[var(--text)] leading-none">
//             My <span className="text-gradient">Skills</span>
//           </h1>
//         </AnimatedSection>

//         {/* Skill categories */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
//           {skills.map((cat, ci) => (
//             <AnimatedSection key={cat.category} delay={ci * 0.15}>
//               <div className="card-glass p-6 rounded-xl h-full">
//                 <h2 className="font-display text-2xl text-gradient mb-6">{cat.category}</h2>
//                 <div className="space-y-5">
//                   {cat.items.map((skill, i) => (
//                     <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1 + ci * 0.15} />
//                   ))}
//                 </div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>

//         {/* Tech cloud */}
//         <AnimatedSection className="mb-20">
//           <p className="section-label mb-4">Technology</p>
//           <h2 className="font-display text-4xl md:text-5xl text-[var(--text)] mb-10">
//             Tech <span className="text-gradient">Stack</span>
//           </h2>
//           <div className="flex flex-wrap gap-3">
//             {techStack.map((tech, i) => (
//               <motion.span
//                 key={tech}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//                 whileHover={{ scale: 1.05, borderColor: 'rgba(0,255,135,0.5)' }}
//                 className="px-4 py-2 rounded-xl border border-[var(--border)] text-sm font-mono text-[var(--text-muted)] cursor-default"
//               >
//                 {tech}
//               </motion.span>
//             ))}
//           </div>
//         </AnimatedSection>

//         {/* Tools */}
//         <AnimatedSection>
//           <p className="section-label mb-4">Workflow</p>
//           <h2 className="font-display text-4xl md:text-5xl text-[var(--text)] mb-10">
//             Daily <span className="text-gradient">Tools</span>
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {toolIcons.map((tool, i) => (
//               <AnimatedSection key={tool.name} delay={i * 0.07}>
//                 <div className="card-glass p-4 rounded-xl flex items-center gap-3">
//                   <span className="text-2xl">{tool.emoji}</span>
//                   <span className="text-sm font-body text-[var(--text-muted)]">{tool.name}</span>
//                 </div>
//               </AnimatedSection>
//             ))}
//           </div>
//         </AnimatedSection>

//       </div>
//     </div>
//   )
// }


import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { skills, techStack } from '../data/portfolioData'

/* ─── Animated circular progress ring ─── */
function RadialSkill({ name, level, index, isVisible, color }) {
  const r = 28
  const circumference = 2 * Math.PI * r
  const strokeDash = circumference * (level / 100)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex flex-col items-center gap-2 group cursor-default"
    >
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 72 72" className="rotate-[-90deg] w-full h-full">
          {/* track */}
          <circle
            cx="36" cy="36" r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="4"
          />
          {/* fill */}
          <motion.circle
            cx="36" cy="36" r={r}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isVisible ? { strokeDashoffset: circumference - strokeDash } : {}}
            transition={{ duration: 1.4, delay: 0.2 + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[10px] font-bold text-white/70 group-hover:text-white transition-colors">
            {level}%
          </span>
        </div>
      </div>
      <span className="font-mono text-[10px] text-white/50 group-hover:text-white/80 text-center leading-tight transition-colors max-w-[72px]">
        {name}
      </span>
    </motion.div>
  )
}

/* ─── Category accent colors ─── */
const CATEGORY_COLORS = [
  { ring: '#60EFFF', dot: '#60EFFF', label: 'text-cyan-300', border: 'border-cyan-500/20', glow: 'rgba(96,239,255,0.12)' },
  { ring: '#00FF87', dot: '#00FF87', label: 'text-emerald-300', border: 'border-emerald-500/20', glow: 'rgba(0,255,135,0.12)' },
  { ring: '#BF5AF2', dot: '#BF5AF2', label: 'text-purple-300', border: 'border-purple-500/20', glow: 'rgba(191,90,242,0.12)' },
  { ring: '#FF9F1C', dot: '#FF9F1C', label: 'text-orange-300', border: 'border-orange-500/20', glow: 'rgba(255,159,28,0.12)' },
]

/* ─── Horizontal bar (used in active panel) ─── */
function BarRow({ name, level, index, isVisible, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="space-y-1.5"
    >
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-white/70">{name}</span>
        <span className="font-mono text-[10px]" style={{ color }}>{level}%</span>
      </div>
      <div className="h-[3px] rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : {}}
          transition={{ duration: 1.3, delay: 0.1 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

/* ─── Main component ─── */
export default function Skills() {
  const ref = useRef(null)
  const isVisible = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={ref}>

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 bg-[#080c10]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(96,239,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(96,239,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-cyan-400 rounded-full" />
            <span className="font-mono text-xs tracking-[0.25em] text-cyan-400/70 uppercase">Capabilities</span>
          </div>
          <h2 className="font-heading text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-white/90">Tech</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #60EFFF 0%, #00FF87 50%, #BF5AF2 100%)' }}
            >
              Arsenal
            </span>
          </h2>
        </motion.div>

        {/* ── Tab selector ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-0 mb-10 border border-white/8 rounded-xl overflow-hidden w-fit"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        >
          {skills.map((cat, i) => {
            const active = activeTab === i
            const col = CATEGORY_COLORS[i]
            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(i)}
                className="relative px-5 py-2.5 font-mono text-xs transition-all duration-300"
                style={{
                  color: active ? col.ring : 'rgba(255,255,255,0.35)',
                  background: active ? `${col.glow}` : 'transparent',
                  borderRight: i < skills.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                {active && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: col.ring }}
                  />
                )}
                {cat.category}
              </button>
            )
          })}
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-8">

          {/* Left – Radial skill rings */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border p-8"
              style={{
                background: `radial-gradient(ellipse at 20% 50%, ${CATEGORY_COLORS[activeTab].glow}, transparent 70%), rgba(255,255,255,0.02)`,
                borderColor: `${CATEGORY_COLORS[activeTab].ring}22`,
              }}
            >
              {/* Category headline */}
              <div className="flex items-center gap-2 mb-8">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: CATEGORY_COLORS[activeTab].ring, boxShadow: `0 0 8px ${CATEGORY_COLORS[activeTab].ring}` }}
                />
                <span className="font-mono text-sm font-medium" style={{ color: CATEGORY_COLORS[activeTab].ring }}>
                  {skills[activeTab].category}
                </span>
              </div>

              {/* Rings grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
                {skills[activeTab].items.map((skill, i) => (
                  <RadialSkill
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                    isVisible={isVisible}
                    color={CATEGORY_COLORS[activeTab].ring}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right – Bar chart detail + stats */}
          <div className="space-y-6">

            {/* Bars */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`bars-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border p-6 space-y-4"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <p className="font-mono text-[10px] tracking-widest text-white/30 uppercase mb-5">Proficiency</p>
                {skills[activeTab].items.map((skill, i) => (
                  <BarRow
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                    isVisible={isVisible}
                    color={CATEGORY_COLORS[activeTab].ring}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: '5+', label: 'Years Coding Exp.' },
                { value: '25+', label: 'Technologies' },
                { value: '20+', label: 'Projects' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.1 }}
                  className="rounded-xl border p-4 text-center"
                  style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="font-mono text-2xl font-bold mb-1"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #60EFFF, #00FF87)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-white/30 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tech Stack cloud ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-5 bg-purple-400 rounded-full" />
            <span className="font-mono text-xs tracking-[0.25em] text-purple-400/70 uppercase">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.5 + i * 0.04 }}
                whileHover={{
                  scale: 1.08,
                  color: '#60EFFF',
                  borderColor: 'rgba(96,239,255,0.35)',
                  background: 'rgba(96,239,255,0.06)',
                }}
                className="px-4 py-2 rounded-lg border font-mono text-xs text-white/40 cursor-default transition-all duration-200"
                style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}