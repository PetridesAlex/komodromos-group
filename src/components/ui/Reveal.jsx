import { useEffect, useRef, useState } from "react"

function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.28,
  rootMargin = "0px 0px -18% 0px",
}) {
  const [visible, setVisible] = useState(false)
  const nodeRef = useRef(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, threshold])

  const classes = `${className} reveal ${visible ? "is-visible" : ""}`.trim()
  return (
    <div
      ref={nodeRef}
      className={classes}
      style={{ "--reveal-delay": `${delay}ms` }}
      data-reveal
    >
      {children}
    </div>
  )
}

export default Reveal
