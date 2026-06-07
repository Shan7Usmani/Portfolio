import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GitHubActivity from '../components/GitHubActivity'
import './Home.css'

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'TypeScript', level: 75 },
  { name: 'MongoDB', level: 80 },
  { name: 'Java', level: 72 },
  { name: 'Python', level: 78 },
  { name: 'HTML/CSS', level: 92 },
  { name: 'Tailwind', level: 82 },
]

const features = [
  { icon: '⚛️', title: 'Frontend Development', desc: 'Building responsive, performant UIs with React, TypeScript, and modern CSS.' },
  { icon: '🧩', title: 'Full Stack Apps', desc: 'MERN stack applications with authentication, APIs, and real-time features.' },
  { icon: '🎨', title: 'Clean Design', desc: 'Pixel-perfect interfaces with attention to detail and smooth animations.' },
  { icon: '📚', title: 'Always Learning', desc: 'BTech + IITM BS student passionate about open source and new technologies.' },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function Home() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      a: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 240, 255, ${p.a})`
        ctx.fill()
      })
      particles.forEach((a, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.06 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <section className="hero">
        <canvas ref={canvasRef} className="hero__canvas" />
        <div className="hero__overlay" />
        <div className="hero__content container">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero__text"
          >
            <span className="hero__badge">Full Stack Developer</span>
            <h1 className="hero__title">
              Hi, I'm <span className="hero__accent">Shan Usmani</span>
            </h1>
            <p className="hero__desc">
              BTech + IITM BS student passionate about building clean, modern web
              applications. I love turning ideas into reality with code.
            </p>
            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary">
                View My Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero__code-panel"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="code-panel__header">
              <span className="code-panel__dot code-panel__dot--red" />
              <span className="code-panel__dot code-panel__dot--yellow" />
              <span className="code-panel__dot code-panel__dot--green" />
              <span className="code-panel__title">takhiro7</span>
            </div>
            <div className="code-panel__body">
              <span className="code-panel__line"><span className="code-comment">// about me</span></span>
              <span className="code-panel__line"><span className="code-key">const</span> developer = <span className="code-fn">{'{'}</span></span>
              <span className="code-panel__line">  name: <span className="code-str">"Shan Usmani"</span>,</span>
              <span className="code-panel__line">  title: <span className="code-str">"Full Stack Developer"</span>,</span>
              <span className="code-panel__line">  location: <span className="code-str">"India"</span>,</span>
              <span className="code-panel__line">  education: <span className="code-str">"BTech + IITM BS"</span>,</span>
              <span className="code-panel__line">  stack: [<span className="code-str">"React"</span>, <span className="code-str">"Node"</span>, <span className="code-str">"MongoDB"</span>]</span>
              <span className="code-panel__line"><span className="code-fn">{'}'}</span></span>
              <span className="code-panel__line code-blinking"><span className="code-class">developer</span>.<span className="code-fn">build</span>()</span>
            </div>
          </motion.div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      <section className="section skills-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <span className="section-label">My Skills</span>
            <h2 className="section-title">Tech Stack</h2>
            <p className="section-subtitle">
              Technologies I work with daily to build modern web applications.
            </p>
          </motion.div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                className="skill-card"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="skill-card__info">
                  <span className="skill-card__name">{s.name}</span>
                  <span className="skill-card__level">{s.level}%</span>
                </div>
                <div className="skill-card__bar">
                  <motion.div
                    className="skill-card__fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.06 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GitHubActivity username="Shan7Usmani" />

      <section className="section featured-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <span className="section-label">What I Do</span>
            <h2 className="section-title">Building the Web</h2>
            <p className="section-subtitle">
              From responsive frontends to full-stack applications, I craft digital
              experiences that make an impact.
            </p>
          </motion.div>
          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="feature-card"
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <span className="feature-icon">{f.icon}</span>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
