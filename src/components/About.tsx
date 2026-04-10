'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { ReactNode } from 'react'

/**
 * About - Minimalist personal section
 */
export default function About() {
  const interests = [
    {
      title: 'Logic & Systems',
      description: 'Building robust architectures and optimizing performance.'
    },
    {
      title: 'Clean Interfaces',
      description: 'Stripping away the unnecessary to create highly usable designs.'
    },
    {
      title: 'Continuous Learning',
      description: 'Adaptability over mastery. Learning the right tool for the job.'
    }
  ]

  const [specOpen, setSpecOpen] = useState(false)
  const [cardHover, setCardHover] = useState<string | null>(null)

  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-[#070707] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          className="mb-16"
        >
          <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-4">01. Background</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.div
              className="inline-flex flex-col"
              onHoverStart={() => setSpecOpen(true)}
              onHoverEnd={() => setSpecOpen(false)}
              onClick={() => setSpecOpen(prev => !prev)}
              whileTap={{ scale: 0.98 }}
            >
              <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight cursor-pointer"
                animate={specOpen ? { opacity: 0.15, filter: 'blur(1px)' } : { opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                About Me.
              </motion.h2>
              <motion.div
                animate={specOpen ? { opacity: 1, y: 0 } : { opacity: 0.65, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="mt-4 max-w-xl text-sm md:text-base text-[#aaa]"
              >
                <p className="leading-relaxed">
                  Hover over the title to discover a cleaner story and expanded specifications in a modern interaction.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              animate={specOpen ? { x: 6, opacity: 1 } : { x: 0, opacity: 0.75 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="max-w-xl rounded-3xl border border-white/10 bg-[#111] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
            >
              <p className="text-[#bbb] text-sm md:text-base leading-relaxed">
                A subtle reveal gives the section a polished, tactile feel while keeping your portfolio clean and responsive.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}
            className="space-y-8"
          >
            <motion.div
              animate={specOpen ? { opacity: 0.25, filter: 'blur(2px)' } : { opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="space-y-6"
            >
              <p className="text-2xl md:text-3xl text-[#ccc] leading-snug font-light tracking-tight">
                I am a software developer based in Coimbatore, Tamil Nadu. My work sits at the intersection of rigorous engineering and austere design aesthetics.
              </p>
              <p className="text-[#888] text-lg leading-relaxed font-light">
                Starting with Python and algorithmic problem-solving, I naturally gravitated toward the full stack, driven by the desire to build complete, end-to-end digital experiences. I do not just write code; I craft digital products that are meant to be fast, reliable, and visually uncompromised.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeInOut' }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <motion.div
                onHoverStart={() => setCardHover('fast')}
                onHoverEnd={() => setCardHover(null)}
                onClick={() => setCardHover(cardHover === 'fast' ? null : 'fast')}
                className="rounded-3xl border border-white/10 bg-[#111] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] cursor-pointer overflow-hidden"
                animate={cardHover === 'fast' ? { y: -4, boxShadow: '0 30px_80px_rgba(255,255,255,0.06)' } : { y: 0, boxShadow: '0 20px_60px_rgba(0,0,0,0.25)' }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <motion.div
                  animate={cardHover === 'fast' ? { opacity: 0.15, filter: 'blur(1px)' } : { opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3">Fast & Precise</h4>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Clean structure, quick performance, and a sharp attention to detail are at the core of every interface.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={cardHover === 'fast' ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden mt-4"
                >
                  <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-4">
                    <p className="text-[#aaa] text-xs leading-relaxed">
                      Optimized code, rapid load times, and pixel-perfect precision in every interaction—this is how I build interfaces.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                onHoverStart={() => setCardHover('thoughtful')}
                onHoverEnd={() => setCardHover(null)}
                onClick={() => setCardHover(cardHover === 'thoughtful' ? null : 'thoughtful')}
                className="rounded-3xl border border-white/10 bg-[#111] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)] cursor-pointer overflow-hidden"
                animate={cardHover === 'thoughtful' ? { y: -4, boxShadow: '0 30px_80px_rgba(255,255,255,0.06)' } : { y: 0, boxShadow: '0 20px_60px_rgba(0,0,0,0.25)' }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <motion.div
                  animate={cardHover === 'thoughtful' ? { opacity: 0.15, filter: 'blur(1px)' } : { opacity: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3">Thoughtful Design</h4>
                  <p className="text-[#888] text-sm leading-relaxed">
                    Minimal visuals, gentle motion, and responsive layouts create a premium experience on every screen.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={cardHover === 'thoughtful' ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden mt-4"
                >
                  <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-4">
                    <p className="text-[#aaa] text-xs leading-relaxed">
                      Every design choice is intentional—from typography to spacing, shadows to transitions—creating an experience that feels premium and refined.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={specOpen ? { y: -6, scale: 1.01, boxShadow: '0 40px 90px rgba(255,255,255,0.08)' } : { y: 0, scale: 1, boxShadow: '0 30px 80px rgba(0,0,0,0.35)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="rounded-[2rem] border border-white/10 bg-[#111] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-all"
          >
            <div className="mb-8">
              <p className="text-sm uppercase tracking-[0.35em] text-[#888] mb-4">Quick Facts</p>
              <h3 className="text-3xl font-bold text-white">Specifications</h3>
            </div>
            <ul className="space-y-5 text-sm text-[#ccc]">
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[#888] uppercase tracking-[0.25em] text-xs">Location</span>
                <span>Coimbatore, TN</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[#888] uppercase tracking-[0.25em] text-xs">Specialty</span>
                <span>Full-Stack Web</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-[#888] uppercase tracking-[0.25em] text-xs">Languages</span>
                <span>TS, JS, Python</span>
              </li>
            </ul>

            <motion.div
              animate={specOpen ? { height: 'auto', opacity: 1, marginTop: 24 } : { height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-6 rounded-3xl border border-white/10 bg-[#0f0f0f] p-6">
                <p className="text-[#aaa] text-sm leading-relaxed mb-4">
                  When the title is touched, this hidden panel appears with extra details, showcasing the same modern polish as the rest of the portfolio.
                </p>
                <div className="grid gap-3 text-sm text-[#ccc]">
                  <span>• Modern, responsive design across devices.</span>
                  <span>• Smooth ease-in-out interactions and hover transitions.</span>
                  <span>• Soft shadows, rounded corners, and subtle motion for depth.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
