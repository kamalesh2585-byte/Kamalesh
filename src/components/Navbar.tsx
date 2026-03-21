'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

/**
 * Navbar - Minimalist black and white navigation
 */
export default function Navbar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#070707]/80 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
              Kamalesh.
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            <button onClick={() => scrollToSection('about')} className="text-[#888] hover:text-white transition-colors text-sm font-medium tracking-wide">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-[#888] hover:text-white transition-colors text-sm font-medium tracking-wide">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-[#888] hover:text-white transition-colors text-sm font-medium tracking-wide">
              Projects
            </button>
            <button onClick={() => scrollToSection('education')} className="text-[#888] hover:text-white transition-colors text-sm font-medium tracking-wide">
              Education
            </button>
          </div>

          {/* Contact CTA */}
          <div>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
