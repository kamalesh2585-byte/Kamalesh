'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

/**
 * Hero - Minimalist black and white landing section
 */
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#070707] px-6 lg:px-8 text-white relative overflow-hidden pt-20">
      <motion.div
        className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left - Text Content */}
        <motion.div variants={itemVariants} className="flex flex-col items-start text-left">
          <motion.div 
            className="inline-block px-4 py-1.5 border border-white/10 rounded-full text-xs font-semibold tracking-widest uppercase text-[#888] mb-8"
            variants={itemVariants}
          >
            Software Developer
          </motion.div>

          <motion.h1
            className="text-[4rem] md:text-[5rem] lg:text-[7rem] font-bold mb-6 leading-[0.9] tracking-tighter"
            variants={itemVariants}
          >
            {'KAMALESH.M'.split('').map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#888] mb-10 max-w-lg leading-relaxed font-light"
            variants={itemVariants}
          >
            I build precise, minimal, and highly functional digital experiences. Focusing on clean code and uncompromised design.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide rounded-full text-center hover:scale-105 transition-transform"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://github.com/kamalesh2585-byte"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/20 text-white font-semibold text-sm tracking-wide rounded-full text-center hover:bg-white hover:text-black transition-colors"
            >
              GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right - Abstract Minimalist Visual / Profile */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full aspect-[4/5] max-w-md">
            {/* Elegant monochrome border effect */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
            
            <motion.div
              className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] group"
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <Image
                src="/profile.jpg"
                alt="Kamalesh"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#888] to-transparent"></div>
      </motion.div>
    </section>
  )
}

