import { motion } from 'framer-motion'
import './About.css'

const values = [
  { title: 'Clean Code', desc: 'I believe in writing code that is readable, maintainable, and follows best practices. Quality over quantity.' },
  { title: 'Continuous Growth', desc: 'Technology moves fast. I invest time daily in learning new tools, languages, and frameworks.' },
  { title: 'Open Source', desc: 'I contribute to and learn from open-source projects. Collaboration makes better software.' },
  { title: 'User First', desc: 'Great UI is invisible. I build for the user — fast, accessible, and intuitive experiences.' },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function About() {
  return (
    <section className="section about-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h1 className="section-title">Shan Usmani</h1>
          <p className="section-subtitle">
            BTech + IITM BS student. Full Stack Developer. Open source enthusiast.
          </p>
        </motion.div>

        <div className="about-page__glow-line" />

        <div className="about-page__story">
          <motion.div className="about-page__story-text" {...fadeUp}>
            <h2>Who I Am</h2>
            <p>
              I'm a passionate developer who enjoys building things for the web. My journey
              started with HTML and CSS, and quickly grew into React, Node.js, MongoDB, and
              beyond. I'm currently pursuing a BTech degree along with an IITM BS program,
              balancing academics with hands-on project development.
            </p>
            <p>
              I love exploring open-source projects, contributing where I can, and learning
              from the global developer community. When I'm not coding, you'll find me
              exploring new tech, reading, or working on my next side project.
            </p>
          </motion.div>
          <motion.div className="about-page__story-stats" {...fadeUp}>
            <div className="story-stat">
              <span className="story-stat__value">11+</span>
              <span className="story-stat__label">Repositories</span>
            </div>
            <div className="story-stat">
              <span className="story-stat__value">8+</span>
              <span className="story-stat__label">Technologies</span>
            </div>
            <div className="story-stat">
              <span className="story-stat__value">Full</span>
              <span className="story-stat__label">Stack Capable</span>
            </div>
            <div className="story-stat">
              <span className="story-stat__value">India</span>
              <span className="story-stat__label">Based</span>
            </div>
          </motion.div>
        </div>

        <div className="about-page__values">
          <motion.h2 className="about-page__section-title" {...fadeUp}>My Principles</motion.h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card"
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="value-card__number">0{i + 1}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="about-page__connect">
          <motion.h2 className="about-page__section-title" {...fadeUp}>Let's Connect</motion.h2>
          <motion.p className="about-page__connect-text" {...fadeUp}>
            I'm always open to new opportunities, collaborations, or just a chat about tech.
            Feel free to reach out!
          </motion.p>
          <motion.div className="about-page__connect-links" {...fadeUp}>
            <a href="https://github.com/Shan7Usmani" target="_blank" rel="noreferrer" className="btn btn-secondary">
              GitHub
            </a>
            <a href="https://shan7usmani.github.io/CSE26/" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Old Portfolio
            </a>
            <a href="/contact" className="btn btn-primary">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
