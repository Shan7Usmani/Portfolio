import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...form,
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)
      setSubmitted(true)
    } catch (err) {
      alert('Failed to send: ' + err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="section contact-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get in Touch</span>
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-page__glow-line" />

        <div className="contact-page__grid">
          <motion.div className="contact-page__info" {...fadeUp}>
            <div className="contact-info-card">
              <span className="contact-info-card__icon">📍</span>
              <h3>Location</h3>
              <p>India</p>
            </div>
            <div className="contact-info-card">
              <span className="contact-info-card__icon">🐙</span>
              <h3>GitHub</h3>
              <a href="https://github.com/Shan7Usmani" target="_blank" rel="noreferrer" className="contact-info-card__link">github.com/Shan7Usmani</a>
            </div>
            <div className="contact-info-card">
              <span className="contact-info-card__icon">📧</span>
              <h3>Email</h3>
              <p>Reach out via form</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-page__form-wrap"
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                className="contact-page__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <span className="contact-page__success-icon">✓</span>
                <h2>Message Sent!</h2>
                <p>We'll get back to you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}>
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__group">
                  <label className="contact-form__label">Name</label>
                  <input
                    className="contact-form__input"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <span className="contact-form__border" />
                </div>
                <div className="contact-form__group">
                  <label className="contact-form__label">Email</label>
                  <input
                    className="contact-form__input"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <span className="contact-form__border" />
                </div>
                <div className="contact-form__group">
                  <label className="contact-form__label">Message</label>
                  <textarea
                    className="contact-form__input contact-form__textarea"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  <span className="contact-form__border" />
                </div>
                <button type="submit" className="btn btn-primary contact-form__submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                  {!sending && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
