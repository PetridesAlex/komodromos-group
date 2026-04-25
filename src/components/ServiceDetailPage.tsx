import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import { getServiceBySlug } from '../data/serviceCards'
import { getServicePageContent } from '../data/servicePageSections'
import VipServicesGrid from './VipServicesGrid'
import StoragePremiumSection from './StoragePremiumSection'
import ServiceDefaultSections from './ServiceDefaultSections'

const VIP_DETAIL_HERO_IMAGE = '/images/services/vip-service/vip-hero.webp'
const VIP_PORTFOLIO_SECTION_ID = 'vip-portfolio'

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

  const isVip = slug === 'vip'
  const heroBackgroundImage = isVip ? VIP_DETAIL_HERO_IMAGE : card.image

  const scrollToVipPortfolio = useCallback(() => {
    const el = document.getElementById(VIP_PORTFOLIO_SECTION_ID)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <header className="topbar">
        <div className="container topbar-inner">
          <SiteLogo />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
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
            <TopbarSocialLinks variant="mobile" />
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

      <section
        className={`service-detail-hero${isVip ? ' service-detail-hero--vip-full' : ''}`}
      >
        {isVip ? (
          <div className="service-detail-hero-bg service-detail-hero-bg--vip-img" aria-hidden>
            <img
              className="service-detail-hero-bg__img"
              src={VIP_DETAIL_HERO_IMAGE}
              alt=""
              width={1920}
              height={1080}
              decoding="async"
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
        ) : (
          <div
            className="service-detail-hero-bg"
            aria-hidden
            style={{ backgroundImage: `url("${heroBackgroundImage}")` }}
          />
        )}
        <div
          className={`service-detail-hero-scrim${isVip ? ' service-detail-hero-scrim--vip' : ''}`}
        />
        <div className="service-detail-hero-glow service-detail-hero-glow-1" />
        <div className="service-detail-hero-glow service-detail-hero-glow-2" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">{card.eyebrow}</p>
          <h1 className="reveal reveal-delay-1">{card.title}</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">{card.description}</p>
          {isVip ? (
            <div className="service-detail-hero-cta reveal reveal-delay-3">
              <button
                type="button"
                className="service-detail-hero-cta__btn"
                onClick={scrollToVipPortfolio}
                aria-label="Scroll to concierge portfolio and services"
              >
                Explore portfolio
              </button>
            </div>
          ) : null}
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
