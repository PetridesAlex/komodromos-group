import { useEffect, useState, useRef } from 'react'
import { MAIN_LOGO } from '../data/mainLogo'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone
  const calledDone = useRef(false)

  useEffect(() => {
    const duration = 4000
    const interval = 30
    const step = 100 / (duration / interval)
    let current = 0

    const timer = setInterval(() => {
      current += step + Math.random() * step * 0.4
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        if (!calledDone.current) {
          setTimeout(() => setFadeOut(true), 300)
          setTimeout(() => {
            if (!calledDone.current) {
              calledDone.current = true
              onDoneRef.current()
            }
          }, 1100)
        }
      }
      setProgress(Math.min(current, 100))
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`preloader ${fadeOut ? 'preloader-exit' : ''}`}>
      <div className="preloader-glow preloader-glow-1" />
      <div className="preloader-glow preloader-glow-2" />
      <div className="preloader-glow preloader-glow-3" />

      <div className="preloader-content">
        <div className="preloader-logo-wrap">
          <img
            src={MAIN_LOGO.src}
            alt="Komodromos Group"
            className="preloader-logo-img"
            width={MAIN_LOGO.width}
            height={MAIN_LOGO.height}
            decoding="async"
          />
        </div>
        <p className="preloader-tagline">Premium Companies &middot; Unified Standards</p>
      </div>

      <div className="preloader-bar-wrap">
        <div className="preloader-bar">
          <div
            className="preloader-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="preloader-pct">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}
