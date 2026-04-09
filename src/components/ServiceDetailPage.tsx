import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import { getServiceBySlug } from '../data/serviceCards'
import VipServicesGrid from './VipServicesGrid'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const card = getServiceBySlug(slug)
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
          <nav className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/#about">ABOUT</Link>
            <Link to="/#services" className="nav-active">
              SERVICES
            </Link>
            <Link to="/contact">CONTACT</Link>
          </nav>
          <TopbarSocialLinks variant="contact" />
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

      <Footer />
    </div>
  )
}
