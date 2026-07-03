import { useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function SplineScene() {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine) and (min-width: 768px)')
    setCanRender(mql.matches)
    const handler = (e) => setCanRender(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  if (!canRender) return null

  return (
    <div className="spline-wrapper">
      <Spline
        scene="https://prod.spline.design/hakiE0znZQxXtQFT/scene.splinecode"
        onLoad={(spline) => {
          spline.setZoom(0.8)
        }}
      />
    </div>
  )
}
