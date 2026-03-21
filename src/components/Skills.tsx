'use client'

import { motion } from 'framer-motion'

/**
 * Skills - Minimalist technical loadout
 */
export default function Skills() {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'HTML/CSS', level: 88 },
    { name: 'React & Next.js', level: 82 },
    { name: 'Architecture & Design', level: 80 },
  ]

  const tools = [
    'VS Code',
    'Git & GitHub',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'MongoDB',
    'Framer Motion',
    'Figma'
  ]

  return (
    <section id="skills" className="py-32 px-6 lg:px-8 bg-[#070707] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-8"
        >
          <div>
            <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-4">03. Capabilities</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Skills & Tools.
            </h2>
          </div>
          <p className="text-[#888] max-w-sm text-sm font-medium leading-relaxed">
            The technical foundation supporting my logic and design methodologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Technical Proficiency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-10 tracking-tight">Core Competencies.</h3>
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="font-medium text-[#ccc] tracking-wide text-sm">{skill.name}</span>
                    <span className="text-[#666] font-mono text-xs">{skill.level}%</span>
                  </div>
                  {/* Monochrome progress bar */}
                  <div className="w-full h-[2px] bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white mb-10 tracking-tight">Daily Loadout.</h3>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-6 py-3 bg-[#111] border border-white/10 text-[#aaa] hover:text-white hover:border-white/30 hover:bg-[#1a1a1a] transition-all text-sm font-medium tracking-wide cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  )
}
