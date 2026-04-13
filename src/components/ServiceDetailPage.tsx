import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import { getServiceBySlug } from '../data/serviceCards'
import { getServicePageContent } from '../data/servicePageSections'
import VipServicesGrid from './VipServicesGrid'
import StoragePremiumSection from './StoragePremiumSection'
import ServiceDefaultSections from './ServiceDefaultSections'

export default function ServiceDetailPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { slug } = useParams<{ slug: string }>()
  const card = getServiceBySlug(slug)
  const defaultContent = slug ? getServicePageContent(slug) : undefined
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!card) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page" ref={pageRef}>
      <header className="topbar">
        <div className="container topbar-inner">
          <Link to="/" className="logo">
            KOMODROMOS GROUP
          </Link>
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/#about" onClick={() => setMenuOpen(false)}>
              ABOUT
            </Link>
            <Link
              to="/#services"
              className="nav-active"
              onClick={() => setMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
          </nav>
          <TopbarSocialLinks variant="desktop" />
          <button
            type="button"
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="service-detail-hero">
        <div className="service-detail-hero-bg" aria-hidden />
        <div className="service-detail-hero-scrim" />
        <div className="service-detail-hero-glow service-detail-hero-glow-1" />
        <div className="service-detail-hero-glow service-detail-hero-glow-2" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">{card.eyebrow}</p>
          <h1 className="reveal reveal-delay-1">{card.title}</h1>
          <p className="service-detail-hero-sub">{card.description}</p>
        </div>
      </section>

      {slug === 'vip' && <VipServicesGrid />}

      {slug === 'storage' && <StoragePremiumSection />}

      {defaultContent && slug !== 'vip' && slug !== 'storage' ? (
        <ServiceDefaultSections content={defaultContent} serviceInterest={card.title} />
      ) : null}

      <Footer />
    </div>
  )
}
