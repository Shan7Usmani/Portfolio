import { motion } from 'framer-motion'
import './About.css'

const team = [
  { name: 'Alex Nova', role: 'CEO & Founder', avatar: 'AN', gradient: 'linear-gradient(135deg, #00f0ff, #0066ff)' },
  { name: 'Rhea Chen', role: 'CTO', avatar: 'RC', gradient: 'linear-gradient(135deg, #7b2ff7, #00f0ff)' },
  { name: 'Marcus Voss', role: 'Head of Design', avatar: 'MV', gradient: 'linear-gradient(135deg, #ff0055, #7b2ff7)' },
  { name: 'Sarah Jin', role: 'Lead Engineer', avatar: 'SJ', gradient: 'linear-gradient(135deg, #00ff41, #0066ff)' },
]

const values = [
  { title: 'Innovation First', desc: 'We don\'t follow trends — we set them. Every solution pushes the envelope of what\'s possible.' },
  { title: 'Radical Transparency', desc: 'Open communication, honest timelines, and zero bureaucracy. Our clients are partners.' },
  { title: 'Engineering Excellence', desc: 'Clean code, robust architecture, and relentless optimization are non-negotiable.' },
  { title: 'Human-Centric AI', desc: 'Technology should serve people, not the other way around. We build with empathy.' },
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
          <span className="section-label">Who We Are</span>
          <h1 className="section-title">About Us</h1>
          <p className="section-subtitle">
            We are a collective of engineers, designers, and visionaries on a mission
            to build the future — one breakthrough at a time.
          </p>
        </motion.div>

        <div className="about-page__glow-line" />

        <div className="about-page__story">
          <motion.div className="about-page__story-text" {...fadeUp}>
            <h2>Our Story</h2>
            <p>
              Founded in 2020, TerminaAI started in a small garage with a big idea:
              what if AI could be truly accessible, powerful, and beautiful? Three
              founders, endless coffee, and countless all-nighters later, we emerged
              with our first prototype.
            </p>
            <p>
              Today, we're a global team of 30+ innovators working with Fortune 500
              companies and ambitious startups alike. But our core remains the same:
              build technology that makes a real difference.
            </p>
          </motion.div>
          <motion.div className="about-page__story-stats" {...fadeUp}>
            <div className="story-stat">
              <span className="story-stat__value">2020</span>
              <span className="story-stat__label">Founded</span>
            </div>
            <div className="story-stat">
              <span className="story-stat__value">30+</span>
              <span className="story-stat__label">Team Members</span>
            </div>
            <div className="story-stat">
              <span className="story-stat__value">50+</span>
              <span className="story-stat__label">Projects</span>
            </div>
            <div className="story-stat">
              <span className="story-stat__value">12</span>
              <span className="story-stat__label">Countries</span>
            </div>
          </motion.div>
        </div>

        <div className="about-page__values">
          <motion.h2 className="about-page__values-title" {...fadeUp}>Our Values</motion.h2>
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

        <div className="about-page__team">
          <motion.h2 className="about-page__team-title" {...fadeUp}>Meet the Team</motion.h2>
          <div className="team-grid">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                className="team-card"
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="team-card__avatar" style={{ background: m.gradient }}>
                  {m.avatar}
                </div>
                <h3 className="team-card__name">{m.name}</h3>
                <span className="team-card__role">{m.role}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
