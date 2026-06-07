import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Nexus AI Platform',
    category: 'AI / ML',
    desc: 'Enterprise-grade AI orchestration platform serving 10M+ requests daily with sub-10ms latency.',
    tags: ['Python', 'TensorFlow', 'Kubernetes', 'Redis'],
    gradient: 'linear-gradient(135deg, #00f0ff, #0066ff)',
  },
  {
    id: 2,
    title: 'CyberGrid Dashboard',
    category: 'UI / UX',
    desc: 'Real-time infrastructure monitoring dashboard with holographic data visualization.',
    tags: ['React', 'Three.js', 'D3.js', 'WebSocket'],
    gradient: 'linear-gradient(135deg, #7b2ff7, #00f0ff)',
  },
  {
    id: 3,
    title: 'QuantumSync',
    category: 'Infrastructure',
    desc: 'Distributed computing framework enabling seamless multi-cloud orchestration.',
    tags: ['Go', 'gRPC', 'AWS', 'Terraform'],
    gradient: 'linear-gradient(135deg, #00ff41, #0066ff)',
  },
  {
    id: 4,
    title: 'Sentinel Security Suite',
    category: 'Security',
    desc: 'Next-gen threat detection system using behavioral AI to identify zero-day exploits.',
    tags: ['Rust', 'ML', 'Elasticsearch', 'Kafka'],
    gradient: 'linear-gradient(135deg, #ff0055, #7b2ff7)',
  },
  {
    id: 5,
    title: 'Aether Design System',
    category: 'Design',
    desc: 'Comprehensive component library and design system powering 50+ products.',
    tags: ['Figma', 'React', 'Storybook', 'CSS'],
    gradient: 'linear-gradient(135deg, #ff6b00, #ff0055)',
  },
  {
    id: 6,
    title: 'NeuroLink API',
    category: 'API',
    desc: 'High-throughput API gateway with intelligent caching and rate-limiting.',
    tags: ['Node.js', 'GraphQL', 'PostgreSQL', 'Docker'],
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
          <span className="section-label">Our Work</span>
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">
            Each project is a testament to our commitment to pushing the boundaries
            of technology and design.
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
                <div className="project-card__gradient" style={{ background: project.gradient }} />
                <div className="project-card__content">
                  <span className="project-card__category">{project.category}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.desc}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">{tag}</span>
                    ))}
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
