import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const consent = sessionStorage.getItem('kg-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 5200)
      return () => clearTimeout(timer)
    } else {
      setShowButton(true)
    }
  }, [])

  function handleAccept() {
    sessionStorage.setItem('kg-cookie-consent', 'accepted')
    dismiss()
  }

  function handleDecline() {
    sessionStorage.setItem('kg-cookie-consent', 'declined')
    dismiss()
  }

  function dismiss() {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      setClosing(false)
      setShowButton(true)
    }, 500)
  }

  function reopen() {
    setShowButton(false)
    sessionStorage.removeItem('kg-cookie-consent')
    setVisible(true)
  }

  return (
    <>
      {visible && (
        <div className={`cookie-banner ${closing ? 'cookie-exit' : 'cookie-enter'}`}>
          <div className="cookie-inner">
            <div className="cookie-text">
              <div className="cookie-icon">🍪</div>
              <div>
                <p className="cookie-title">We value your privacy</p>
                <p className="cookie-desc">
                  We use cookies to enhance your browsing experience, serve
                  personalized content, and analyze our traffic. By clicking
                  "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>
            <div className="cookie-actions">
              <button className="cookie-decline" onClick={handleDecline}>
                Decline
              </button>
              <button className="cookie-accept" onClick={handleAccept}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {showButton && !visible && (
        <button
          className="cookie-fab"
          onClick={reopen}
          aria-label="Cookie settings"
          title="Cookie settings"
        >
          🍪
        </button>
      )}
    </>
  )
}
