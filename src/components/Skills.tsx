'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

/**
 * Skills - Interactive liquid melt hover effects
 */
export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const skills = [
    { name: 'HTML/CSS', icon: '◨', color: 'from-orange-500 to-red-500' },
    { name: 'JavaScript', icon: '◩', color: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: '⚛', color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', icon: '◪', color: 'from-blue-600 to-indigo-600' },
    { name: 'Next.js', icon: '▲', color: 'from-white to-slate-300' },
    { name: 'Tailwind CSS', icon: '◧', color: 'from-cyan-500 to-teal-500' },
  ]

  const tools = [
    'VS Code', 'Git & GitHub', 'Node.js', 'PostgreSQL',
    'MongoDB', 'Framer Motion', 'Figma', 'Docker'
  ]

  const liquidVariants = {
    rest: {
      scale: 1,
      y: 0,
      rotate: 0,
      filter: 'blur(0px)',
    },
    hover: {
      scale: 1.08,
      y: -8,
      filter: 'blur(0px)',
    }
  }

  const blobVariants = {
    rest: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  }

  return (
    <section id="skills" className="py-32 px-6 lg:px-8 bg-[#070707] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8"
        >
          <div>
            <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-4">03. Capabilities</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Skills & Tools.
            </h2>
          </div>
          <p className="text-[#888] max-w-sm text-sm font-medium leading-relaxed">
            Interactive exploration of my technical expertise with liquid melt effects.
          </p>
        </motion.div>

        {/* Skills Grid - Liquid Melt Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-xl font-bold text-white mb-12 tracking-tight">Core Skills.</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: 'easeInOut' }}
                onHoverStart={() => setHoveredSkill(idx)}
                onHoverEnd={() => setHoveredSkill(null)}
                onClick={() => setHoveredSkill(hoveredSkill === idx ? null : idx)}
                className="relative"
              >
                {/* Melt blob background effect */}
                <motion.div
                  variants={blobVariants}
                  initial="rest"
                  animate={hoveredSkill === idx ? 'hover' : 'rest'}
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} rounded-full blur-xl opacity-0`}
                  style={{
                    filter: hoveredSkill === idx ? 'blur(20px)' : 'blur(0px)',
                  }}
                />

                {/* Main card with liquid effect */}
                <motion.div
                  variants={liquidVariants}
                  initial="rest"
                  animate={hoveredSkill === idx ? 'hover' : 'rest'}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="relative group cursor-pointer"
                >
                  {/* Card container */}
                  <motion.div
                    className="relative px-6 py-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#111] to-[#0a0a0a] backdrop-blur-sm overflow-hidden transition-all duration-300 h-32 flex flex-col items-center justify-center"
                    animate={hoveredSkill === idx ? {
                      borderColor: 'rgba(255, 100, 100, 0.4)',
                      boxShadow: '0 0 30px rgba(255, 100, 100, 0.3), inset 0 0 30px rgba(255, 100, 100, 0.1)',
                    } : {
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                    }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    {/* Icon and name */}
                    <motion.div
                      animate={hoveredSkill === idx ? { opacity: 0.2, scale: 0.8 } : { opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="text-center"
                    >
                      <motion.p
                        className="text-4xl mb-2 transition-colors"
                        animate={hoveredSkill === idx ? { color: '#ff6464' } : { color: '#cccccc' }}
                        transition={{ duration: 0.25 }}
                      >
                        {skill.icon}
                      </motion.p>
                      <p className="text-sm font-semibold text-white tracking-tight">{skill.name}</p>
                    </motion.div>

                    {/* Melted liquid reveal on hover */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={hoveredSkill === idx ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-600/80 to-red-900/80 backdrop-blur-sm rounded-3xl overflow-hidden"
                    >
                      <div className="text-center px-4">
                        <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Expert Level</p>
                        <motion.div
                          className="flex justify-center gap-1"
                          initial={{ opacity: 0 }}
                          animate={hoveredSkill === idx ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 0.15, duration: 0.3 }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 bg-white rounded-full"
                              initial={{ y: 0 }}
                              animate={hoveredSkill === idx ? { y: [0, -4, 0], scale: [1, 1.1, 1] } : { y: 0 }}
                              transition={{ delay: i * 0.08, duration: 0.6, repeat: Infinity }}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Liquid drip effect SVG */}
                    {hoveredSkill === idx && (
                      <motion.svg
                        className="absolute -bottom-1 left-0 right-0 w-full h-8 opacity-60"
                        viewBox="0 0 100 30"
                        preserveAspectRatio="none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.path
                          d="M0,10 Q10,5 20,10 T40,10 T60,10 T80,10 T100,10 L100,30 L0,30 Z"
                          fill="rgba(255, 100, 100, 0.4)"
                          animate={{ d: 'M0,8 Q10,2 20,8 T40,8 T60,8 T80,8 T100,8 L100,30 L0,30 Z' }}
                          transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
                        />
                      </motion.svg>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
        >
          <h3 className="text-xl font-bold text-white mb-10 tracking-tight">Tools & Ecosystem.</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.12,
                  y: -4,
                  boxShadow: '0 20px 40px rgba(255, 100, 100, 0.25)'
                }}
                whileTap={{ scale: 0.94 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04, ease: 'easeInOut' }}
                className="px-5 py-3 rounded-2xl border border-white/15 bg-gradient-to-br from-[#111] to-[#0a0a0a] text-sm text-white font-medium tracking-wide hover:border-red-500/40 hover:bg-gradient-to-br hover:from-red-950/30 hover:to-[#0a0a0a] transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
