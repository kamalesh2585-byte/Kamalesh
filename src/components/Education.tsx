'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * Education - Redesigned to exact UI specs (Progressive Mindset)
 */
export default function Education() {
  return (
    <section id="education" className="min-h-screen bg-[#070707] flex flex-col relative overflow-hidden font-sans text-white border-t border-gray-900">
      {/* Subtle vertical grid lines to match image background slight texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '120px 100%' }}
      ></div>

      {/* Header bar matching the image */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center p-6 lg:px-8 z-10 relative mt-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white rounded-md shadow-sm"></div>
          <span className="font-semibold text-lg tracking-tight">Grateful Gorillas</span>
        </div>
        <div className="text-[#555555] font-medium text-sm tracking-wide hidden sm:block">
          19 Missions Stacked
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 w-full mt-10 md:mt-16 pb-32">
        
        {/* Massive Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center flex flex-col items-center w-full px-4"
        >
          <h1 className="text-[12vw] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.8] text-white">
            Progressive
          </h1>
          <h1 className="text-[12vw] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold tracking-tighter leading-[0.8] text-[#333333]">
            Mindset.
          </h1>
        </motion.div>

        {/* Vertical Connecting Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 120 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: 'easeInOut' }}
          className="w-[1px] bg-[#333333] my-12"
        ></motion.div>

        {/* Cards Stack */}
        <div className="relative w-full max-w-[90%] md:max-w-2xl px-4 h-[400px]">
          
          {/* Card 3 (Back-most) -> Creates the trailing blurry effect on the left */}
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -4 }}
            whileInView={{ opacity: 1, x: -30, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[280px] bg-gradient-to-r from-black/80 to-[#1a1a1a] rounded-xl blur-md rotate-[-3deg] transform -translate-y-4 -translate-x-4 scale-[0.98] origin-bottom-left"
          ></motion.div>

          {/* Card 2 (Middle, white but shifted back) */}
          <motion.div 
            initial={{ opacity: 0, x: -20, rotate: -2 }}
            whileInView={{ opacity: 0.9, x: -10, rotate: -1.5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[280px] bg-[#e0e0e0] rounded-xl shadow-2xl transform -translate-y-2 -translate-x-2 scale-[0.99] origin-bottom-left"
          ></motion.div>

          {/* Card 1 (Front, clean white) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[280px] bg-white text-black p-8 md:p-12 rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#111111]">
              While Studying
            </h2>
            <p className="text-[#444444] text-lg md:text-xl leading-relaxed font-medium">
              D. Which are my weak chapters? Identify your weak areas first. Focus on understanding, not just memorizing. Self-awareness is the first step to improvement.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Floating Circle */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        className="absolute bottom-8 right-8 w-14 h-14 bg-white rounded-full shadow-2xl z-20 cursor-pointer hover:scale-110 transition-transform"
      ></motion.div>
    </section>
  )
}
