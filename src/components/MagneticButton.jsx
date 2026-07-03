import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    setPos({
      x: (clientX - (left + width / 2)) * 0.3,
      y: (clientY - (top + height / 2)) * 0.3,
    })
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 12, mass: 0.1 }}
      className={className}
      style={{ display: 'inline-flex' }}
    >
      {children}
    </motion.div>
  )
}
