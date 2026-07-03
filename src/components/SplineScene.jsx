import { useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function SplineScene() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="spline-wrapper">
      {!loaded && (
        <div className="spline-loader">
          <div className="spline-loader__ring" />
          <span className="spline-loader__text">Loading Scene</span>
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/hakiE0znZQxXtQFT/scene.splinecode"
        onLoad={(spline) => {
          spline.setZoom(0.8)
          setLoaded(true)
        }}
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}
      />
    </div>
  )
}
