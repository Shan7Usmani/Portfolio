import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './GitHubActivity.css'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['', 'Mon', '', 'Wed', '', 'Fri', '']

export default function GitHubActivity({ username = 'Shan7Usmani' }) {
  const gridRef = useRef(null)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((r) => r.json())
      .then((res) => {
        if (res?.contributions?.length) setData(res)
        else setError(true)
      })
      .catch(() => setError(true))
  }, [username])

  useEffect(() => {
    if (data && gridRef.current) {
      gridRef.current.scrollLeft = gridRef.current.scrollWidth
    }
  }, [data])

  if (error) return null

  const allDays = (data?.contributions || []).filter((d) => new Date(d.date) <= new Date())
  const total = data?.totalContributions || allDays.reduce((s, d) => s + d.count, 0)
  const maxCount = Math.max(...allDays.map((d) => d.count), 1)

  const getIntensity = (count) => {
    if (count === 0) return 0
    const ratio = count / maxCount
    if (ratio > 0.7) return 4
    if (ratio > 0.4) return 3
    if (ratio > 0.15) return 2
    return 1
  }

  const getColor = (intensity) => {
    const colors = [
      'rgba(255,255,255,0.04)',
      'rgba(0,240,255,0.15)',
      'rgba(0,240,255,0.3)',
      'rgba(0,240,255,0.5)',
      'rgba(0,240,255,0.75)',
    ]
    return colors[intensity]
  }

  const chunkWeeks = []
  for (let i = 0; i < allDays.length; i += 7) {
    chunkWeeks.push(allDays.slice(i, i + 7))
  }

  let prevMonth = -1
  const monthRows = chunkWeeks.map((week) => {
    const m = new Date(week[0]?.date).getMonth()
    const show = m !== prevMonth
    prevMonth = m
    return show ? MONTHS[m] : ''
  })

  return (
    <motion.section
      className="section activity-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <span className="section-label">Live Activity</span>
        <h2 className="section-title">GitHub Contributions</h2>
        <p className="section-subtitle">
          {total} contributions in the last year — <span className="activity-section__hint">scroll left for older</span>
        </p>

        <div className="activity-graph-wrap">
          <div className="activity-graph" ref={gridRef}>
            <div className="activity-graph__row activity-graph__row--months">
              <span className="activity-graph__spacer" />
              <div className="activity-graph__months">
                {monthRows.map((label, i) => (
                  <span key={i} className={`activity-graph__month ${label ? '' : 'activity-graph__month--empty'}`}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="activity-graph__row activity-graph__row--grid">
              <div className="activity-graph__labels-y">
                {DAYS.map((d) => (
                  <span key={d} className="activity-graph__day-label">{d}</span>
                ))}
              </div>
              <div className="activity-graph__grid">
                {chunkWeeks.map((week, wi) => (
                  <div key={wi} className="activity-graph__week">
                    {week.map((day, di) => {
                      const intensity = getIntensity(day.count)
                      return (
                        <div
                          key={di}
                          className="activity-graph__cell"
                          style={{ background: getColor(intensity) }}
                          title={`${day.date}: ${day.count} contributions`}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="activity-graph__footer">
            <span className="activity-graph__legend-label">Less</span>
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="activity-graph__legend-cell"
                style={{ background: getColor(i) }}
              />
            ))}
            <span className="activity-graph__legend-label">More</span>
          </div>
        </div>

        <div className="activity-graph__glow" />
      </div>
    </motion.section>
  )
}
