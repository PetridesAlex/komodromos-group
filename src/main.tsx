import { StrictMode, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ContactPage from './components/ContactPage.tsx'
import Preloader from './components/Preloader.tsx'
import CookieBanner from './components/CookieBanner.tsx'

function Root() {
  const [loaded, setLoaded] = useState(false)
  const handleDone = useCallback(() => setLoaded(true), [])

  return (
    <>
      {!loaded && <Preloader onDone={handleDone} />}
      <div style={loaded ? undefined : { display: 'none' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
        <CookieBanner />
      </div>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
