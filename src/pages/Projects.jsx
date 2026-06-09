import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const screenshot = (url) =>
  url ? `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false` : null

const projects = [
  {
    id: 1,
    title: 'PlacementOS',
    category: 'SaaS',
    desc: 'AI-powered placement preparation platform built with Next.js, featuring resume analysis, mock interviews, and personalized roadmaps to crack campus placements.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'AI'],
    link: 'https://github.com/Shan7Usmani/SaaS',
    live: 'https://placementos-five.vercel.app/',
    gradient: 'linear-gradient(135deg, #7b2ff7, #00f0ff)',
  },
  {
    id: 2,
    title: 'CSE26',
    category: 'Frontend',
    desc: 'Personal portfolio site featuring an Alibaba clone, SaaS landing page, e-commerce layout, and themed UI projects — all built with pure HTML, CSS, and JavaScript.',
    tags: ['CSS', 'HTML', 'JavaScript'],
    link: 'https://github.com/Shan7Usmani/CSE26',
    live: 'https://shan7usmani.github.io/CSE26/',
    gradient: 'linear-gradient(135deg, #00f0ff, #0066ff)',
  },
  {
    id: 3,
    title: 'CSE24_JS',
    category: 'JavaScript',
    desc: 'A collection of JavaScript projects and exercises demonstrating core JS concepts, DOM manipulation, API integration, and Java-based coursework.',
    tags: ['JavaScript', 'CSS', 'HTML', 'Java'],
    link: 'https://github.com/Shan7Usmani/CSE24_JS',
    gradient: 'linear-gradient(135deg, #7b2ff7, #00f0ff)',
  },
  {
    id: 4,
    title: 'DailyForge',
    category: 'Full Stack',
    desc: 'Open-source fullstack MERN productivity app with drag-and-drop scheduling, a smart task library, and overlap protection — deployed on Render.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    link: 'https://github.com/Shan7Usmani/DailyForge',
    live: 'https://dailyforge-frontend-lhjq.onrender.com',
    gradient: 'linear-gradient(135deg, #00ff41, #0066ff)',
  },
  {
    id: 5,
    title: 'sahidawa-india',
    category: 'Open Source',
    desc: 'Platform to verify medicines, find trusted pharmacies, and report suspicious drugs — designed for low-bandwidth environments with multilingual support across India.',
    tags: ['React', 'Node.js', 'Multilingual', 'India'],
    link: 'https://github.com/Shan7Usmani/sahidawa-india',
    live: 'https://sahidawa-india-web.vercel.app',
    gradient: 'linear-gradient(135deg, #ff0055, #7b2ff7)',
  },
  {
    id: 6,
    title: 'kerno',
    category: 'Systems',
    desc: 'System-level incident diagnosis engine that explains production issues across Linux, Kubernetes, VMs, and bare metal using eBPF — Apache 2.0 licensed.',
    tags: ['C', 'eBPF', 'Linux', 'Kubernetes'],
    link: 'https://github.com/Shan7Usmani/kerno',
    gradient: 'linear-gradient(135deg, #ff6b00, #ff0055)',
  },
  {
    id: 7,
    title: 'TermUI',
    category: 'TypeScript',
    desc: 'TypeScript/JavaScript framework for building terminal apps with flexbox layout, JSX, hooks, global state, theming, animations, and hot reload — no native dependencies.',
    tags: ['TypeScript', 'Terminal', 'JSX', 'MIT'],
    link: 'https://github.com/Shan7Usmani/TermUI',
    live: 'https://www.termui.io/',
    gradient: 'linear-gradient(135deg, #00f0ff, #00ff41)',
  },
]

const categories = ['All', ...new Set(projects.map((p) => p.category))]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="section projects-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">My Work</span>
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">
            Open-source contributions, full-stack applications, and side projects
            I've built and contributed to.
          </p>
        </motion.div>

        <div className="projects-page__glow-line" />

        <motion.div
          className="projects-page__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects-page__filter ${active === cat ? 'projects-page__filter--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="projects-page__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="project-card"
              >
                {project.live ? (
                  <div className="project-card__preview">
                    <img
                      src={screenshot(project.live)}
                      alt={`${project.title} preview`}
                      loading="lazy"
                    />
                    <div className="project-card__preview-overlay" style={{ background: project.gradient }} />
                  </div>
                ) : (
                  <div className="project-card__gradient" style={{ background: project.gradient }} />
                )}
                <div className="project-card__content">
                  <span className="project-card__category">{project.category}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.desc}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a href={project.link} target="_blank" rel="noreferrer" className="project-card__link">
                      GitHub →
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="project-card__link">
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-card__glow" style={{ background: project.gradient }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
