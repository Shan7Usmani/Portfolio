import Spline from '@splinetool/react-spline'

export default function SplineScene() {
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
