import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Team Members' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' },
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

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
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
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.08 * (1 - dist / 150)})`
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
            <span className="hero__badge">Pioneering the Future</span>
            <h1 className="hero__title">
              Where Innovation<br />
              Meets <span className="hero__accent">Intelligence</span>
            </h1>
            <p className="hero__desc">
              We craft cutting-edge AI solutions and digital experiences that redefine
              what's possible. Welcome to the next generation of technology.
            </p>
            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary">
                Explore Our Work
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
              <span className="code-panel__title">terminal.ai</span>
            </div>
            <div className="code-panel__body">
              <span className="code-panel__line"><span className="code-comment">// init core system</span></span>
              <span className="code-panel__line"><span className="code-key">const</span> ai = <span className="code-fn">new</span> <span className="code-class">NeuralCore</span>()</span>
              <span className="code-panel__line"><span className="code-key">const</span> result = <span className="code-key">await</span> ai.<span className="code-fn">process</span>({'{'}</span>
              <span className="code-panel__line">  input: <span className="code-str">"human_language"</span>,</span>
              <span className="code-panel__line">  depth: <span className="code-num">Infinity</span>,</span>
              <span className="code-panel__line">{'}'})</span>
              <span className="code-panel__line code-blinking"><span className="code-class">TerminaAI</span>.<span className="code-fn">ready</span>()</span>
              <span className="code-panel__line code-blinking" style={{ '--i': 1 }}><span className="code-comment">// &gt; system online_</span></span>
            </div>
          </motion.div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-card"
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="container">
          <motion.div {...fadeUp}>
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Built for the Future</h2>
            <p className="section-subtitle">
              From neural networks to immersive interfaces, we build technology that
              pushes boundaries and sets new standards.
            </p>
          </motion.div>
          <div className="features-grid">
            {[
              { icon: '🧠', title: 'AI & Machine Learning', desc: 'Advanced neural networks and deep learning models tailored to your needs.' },
              { icon: '⚡', title: 'High-Performance Systems', desc: 'Optimized architectures built for speed, scale, and reliability.' },
              { icon: '🎨', title: 'Immersive Interfaces', desc: 'Next-gen UIs with fluid animations and cutting-edge design.' },
              { icon: '🔐', title: 'Enterprise Security', desc: 'Military-grade protection for your most sensitive data.' },
            ].map((f, i) => (
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
