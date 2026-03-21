'use client'

import { motion } from 'framer-motion'

/**
 * Footer - Minimalist endcap
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#070707] text-[#888] py-16 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-4 gap-12 lg:gap-24 mb-16">
            
            {/* Identity */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 tracking-tighter text-white">
                Kamalesh.
              </h3>
              <p className="text-sm leading-relaxed max-w-sm font-light">
                Engineering digital experiences unburdened by bloat. Focused on performance, precision, and aesthetics.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-xs tracking-widest uppercase">Index</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Capabilities</a></li>
                <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              </ul>
            </div>

            {/* Outgoing */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-xs tracking-widest uppercase">Network</h4>
              <ul className="space-y-3 text-sm font-light">
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X / Twitter</a></li>
              </ul>
            </div>

          </div>

          {/* Legal / Bottom */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center text-xs tracking-wide">
            <p className="mb-4 md:mb-0">
              © {currentYear} KAMALESH. ALL RIGHTS RESERVED.
            </p>
            <p>
              OPERATING FROM COIMBATORE, TN.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
