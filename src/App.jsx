import { lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

const SplineScene = lazy(() => import('./components/SplineScene'))

const pageVariants = {
  '/': {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  '/projects': {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  '/about': {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
  },
  '/contact': {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
}

function AnimatedRoutes() {
  const location = useLocation()
  const variants = pageVariants[location.pathname] || pageVariants['/']

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial={variants.initial}
        animate={variants.animate}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: 'none', willChange: 'transform, opacity' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="app-bg">
        <Suspense fallback={null}>
          <SplineScene />
        </Suspense>
        <div className="app-bg__overlay" />
      </div>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
