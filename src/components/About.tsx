'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

  return (
    <section id="about" className="py-32 px-6 lg:px-8 bg-[#070707] border-t border-white/5">
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
            <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-4">01. Background</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              About Me.
            </h2>
          </div>
          <p className="text-[#888] max-w-sm text-sm font-medium leading-relaxed">
            I believe in doing less, but doing it exceptionally well. Excellence through reduction.
          </p>
        </motion.div>

        {/* content */}
        <div className="grid md:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Main text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 space-y-8"
          >
            <p className="text-2xl md:text-3xl text-[#ccc] leading-snug font-light tracking-tight">
              I am a software developer based in Coimbatore, Tamil Nadu. My work sits at the intersection of rigorous engineering and austere design aesthetics. 
            </p>
            <p className="text-[#888] text-lg leading-relaxed font-light">
              Starting with Python and algorithmic problem-solving, I naturally gravitated toward the full stack, driven by the desire to build complete, end-to-end digital experiences. I do not just write code; I craft digital products that are meant to be fast, reliable, and visually uncompromised.
            </p>
          </motion.div>

          {/* Quick Facts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-5"
          >
            <div className="border border-white/10 rounded-xl p-8 bg-[#111]">
              <h3 className="text-xl font-bold text-white mb-8 tracking-tight">Specifications.</h3>
              <ul className="space-y-6">
                <li className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[#888] font-medium text-sm tracking-wide">LOCATION</span>
                  <span className="text-white text-sm">Coimbatore, TN</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-[#888] font-medium text-sm tracking-wide">SPECIALTY</span>
                  <span className="text-white text-sm">Full-Stack Web</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-[#888] font-medium text-sm tracking-wide">LANGUAGES</span>
                  <span className="text-white text-sm">TS, JS, Python</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border-t border-white/10 pt-8"
              >
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#ccc] transition-colors">{interest.title}</h4>
                <p className="text-[#888] text-sm leading-relaxed">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
