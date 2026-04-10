'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent } from 'react'

/**
 * Contact - Minimalist outreach section
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSubmitted(false)
      }, 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-[#070707] border-t border-white/5">
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
            <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-4">04. Engagement</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Let&apos;s Connect.
            </h2>
          </div>
          <p className="text-[#888] max-w-sm text-sm font-medium leading-relaxed">
            Interested in collaboration or simply want to say hello? Reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <h3 className="text-xl font-bold text-white mb-10 tracking-tight">Direct Channels.</h3>

            <div className="space-y-8">
              <motion.a
                href="https://github.com/kamalesh2585-byte"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                className="group block border-b border-white/10 pb-6"
              >
                <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-2">Platform</p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-lg tracking-wide group-hover:pl-2 transition-all">GitHub</p>
                  <span className="text-[#555] group-hover:text-white transition-colors">↗</span>
                </div>
              </motion.a>

              <motion.a
                href="mailto:contact@domain.com"
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                className="group block border-b border-white/10 pb-6"
              >
                <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-2">Direct Mail</p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-lg tracking-wide group-hover:pl-2 transition-all">contact@example.com</p>
                  <span className="text-[#555] group-hover:text-white transition-colors">↗</span>
                </div>
              </motion.a>

              <div className="block border-b border-white/10 pb-6">
                <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-2">Operating Base</p>
                <p className="text-white text-lg tracking-wide">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <h3 className="text-xl font-bold text-white mb-10 tracking-tight">Transmission.</h3>
            <form onSubmit={handleSubmit} className="space-y-10">
              
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Name"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 -top-4 text-[#888] text-xs font-semibold tracking-widest uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#555] peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-focus:uppercase peer-focus:font-semibold peer-focus:tracking-widest"
                >
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer"
                  placeholder="Email"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 -top-4 text-[#888] text-xs font-semibold tracking-widest uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#555] peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-focus:uppercase peer-focus:font-semibold peer-focus:tracking-widest"
                >
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-white transition-colors peer resize-none"
                  placeholder="Message"
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-0 -top-4 text-[#888] text-xs font-semibold tracking-widest uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-[#555] peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-focus:uppercase peer-focus:font-semibold peer-focus:tracking-widest"
                >
                  Message
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-10 py-4 bg-white text-black font-semibold tracking-wide text-sm rounded-none hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {loading ? 'Transmitting...' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 border border-white/10 bg-[#111] text-[#ccc] text-sm text-center"
                >
                  Message received. I will respond shortly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
