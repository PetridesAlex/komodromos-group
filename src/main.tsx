import { StrictMode, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ContactPage from './components/ContactPage.tsx'
import ServiceDetailPage from './components/ServiceDetailPage.tsx'
import WeddingServicesPage from './components/WeddingServicesPage.tsx'
import WeddingPackageDetailPage from './components/WeddingPackageDetailPage.tsx'
import BusinessConsultingPage from './components/BusinessConsultingPage.tsx'
import Preloader from './components/Preloader.tsx'
import CookieBanner from './components/CookieBanner.tsx'
import SocialHub from './components/SocialHub.tsx'

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
            <Route path="/services/wedding" element={<WeddingServicesPage />} />
            <Route path="/services/wedding/packages/:packageId" element={<WeddingPackageDetailPage />} />
            <Route path="/services/consulting" element={<BusinessConsultingPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
          </Routes>
        </BrowserRouter>
        <CookieBanner />
        <SocialHub />
      </div>
    </>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
