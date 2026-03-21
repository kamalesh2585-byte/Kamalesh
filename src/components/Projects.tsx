'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * Projects - Minimalist portfolio showcase
 */
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Drunken Eye Detection',
      description: 'An AI-powered system using Python and OpenCV to detect drowsy driving by analyzing eye movements and facial features. Helps prevent accidents by alerting drivers.',
      tech: ['Python', 'OpenCV', 'Machine Learning'],
      github: 'https://github.com',
      demo: '#',
      year: '2024'
    },
    {
      id: 2,
      title: 'Simple Portfolio Website',
      description: 'A clean and modern portfolio website showcasing projects and skills. Built with HTML, CSS, and JavaScript with smooth animations and responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com',
      demo: '#',
      year: '2023'
    },
    {
      id: 3,
      title: 'Mini Web App',
      description: 'A dynamic web application featuring user authentication, data management, and real-time updates. Demonstrates scalable full-stack development patterns.',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      demo: '#',
      year: '2023'
    }
  ]

  return (
    <section id="projects" className="py-32 px-6 lg:px-8 bg-[#070707] border-t border-white/5">
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
            <p className="text-[#888] text-xs font-semibold tracking-widest uppercase mb-4">02. Selected Work</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Projects.
            </h2>
          </div>
          <p className="text-[#888] max-w-sm text-sm font-medium leading-relaxed">
            A selection of recent projects focused on solving real problems with clean code.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border border-white/10 bg-[#111] p-8 md:p-12 rounded-xl overflow-hidden hover:border-white/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
                
                {/* Text Content */}
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-[#555] font-mono text-sm">{project.year}</span>
                  </div>
                  
                  <p className="text-[#888] text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-[#ccc] text-xs font-medium tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex sm:flex-col gap-4 w-full sm:w-auto shrink-0">
                  <a
                    href={project.demo}
                    className="flex-1 px-6 py-3 bg-white text-black text-center font-semibold text-sm rounded-lg hover:scale-105 transition-transform"
                  >
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 border border-white/20 text-white text-center font-semibold text-sm rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
