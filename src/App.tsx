import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import SiteLogo from './components/SiteLogo'
import TopbarSocialLinks from './components/TopbarSocialLinks'
import StaggeredText from './components/StaggeredText'
import MeetTheTeam from './components/MeetTheTeam'
import { useReveal } from './hooks/useReveal'
import { getServicePagePath, serviceCards } from './data/serviceCards'

const marqueeItems = [
  'ADR DISPUTE MEDIATION SERVICES',
  'VIP SERVICES',
  'ASTREAL DEVELOPERS',
  "BUSINESS CONSULTANT'S",
  'MEDIATION SERVICES',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()

  return (
    <div className="page home-page" ref={pageRef}>
      <header className="topbar">
        <div className="container topbar-inner">
          <SiteLogo />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
            <div className="nav-dropdown">
              <a
                href="#services"
                className="nav-dropdown__trigger"
                onClick={() => setMenuOpen(false)}
              >
                SERVICES
              </a>
              <div
                className="nav-dropdown__panel"
                role="navigation"
                aria-label="Group companies and services"
              >
                <Link
                  to="/#services"
                  className="nav-dropdown__link nav-dropdown__link--all"
                  onClick={() => setMenuOpen(false)}
                >
                  See our services
                </Link>
                <ul className="nav-dropdown__list">
                  {serviceCards.map((card) => (
                    <li key={card.slug}>
                      <Link
                        to={getServicePagePath(card.slug)}
                        className="nav-dropdown__link"
                        onClick={() => setMenuOpen(false)}
                      >
                        <span className="nav-dropdown__title">{card.title}</span>
                        <span className="nav-dropdown__meta">{card.eyebrow}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
            <TopbarSocialLinks variant="mobile" />
          </nav>
          <TopbarSocialLinks variant="desktop" />
          <button
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className="marquee-wrap">
        <div className="marquee-row">
          <div className="marquee-overflow marquee-full">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
                (item, index) => (
                  <span className="pill" key={`${item}-${index}`}>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <section id="home" className="hero-section">
        <div className="hero-bg hero-bg--static" aria-hidden />
        <div className="container hero-content">
          <div className="hero-text">
            <StaggeredText
              text="Komodromos Group|of Companies"
              as="h1"
              segmentBy="words"
              separator="|"
              direction="bottom"
              delay={100}
              duration={0.7}
              blur={true}
              staggerDirection="forward"
              className="hero-h1-stagger"
            />
          </div>
          <div className="hero-cta-wrap reveal reveal-delay-2">
            <a href="#services" className="hero-cta">EXPLORE OUR COMPANIES</a>
          </div>
        </div>
      </section>

      <section className="section highlights">
        <div className="highlights-glow highlights-glow-1" />
        <div className="highlights-glow highlights-glow-2" />
        <div className="container highlights-inner">
          <p className="eyebrow reveal">KEY HIGHLIGHTS</p>
          <h2 className="reveal reveal-delay-1">Experience Meets Precision</h2>
          <p className="section-sub reveal reveal-delay-2">
            More than seventeen years of disciplined leadership across sectors,
            with measurable outcomes and trusted partnerships.
          </p>
          <div className="stats">
            <div className="stat-card stat-card--experience reveal reveal-delay-1">
              <span className="stat-pre">MORE THAN</span>
              <strong>17</strong>
              <span>YEARS OF EXPERIENCE</span>
            </div>
            <div className="stat-card reveal reveal-delay-2">
              <strong>14</strong>
              <span>INTERNATIONAL PARTNERS</span>
            </div>
            <div className="stat-card reveal reveal-delay-3">
              <strong>74</strong>
              <span>QUALIFIED SPECIALISTS</span>
            </div>
            <div className="stat-card reveal reveal-delay-4">
              <strong>100</strong>
              <span>SERVICES</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="container">
          <p className="eyebrow reveal">GROUP SERVICES</p>
          <h2 className="reveal reveal-delay-1">Specialized Companies Across Eleven Core Categories</h2>
          <p className="section-sub reveal reveal-delay-2">
            A curated portfolio designed for private clients, corporates, and
            investors.
          </p>
          <div className="service-list">
            {serviceCards.map((card, index) => (
              <article
                key={card.slug}
                data-service-slug={card.slug}
                className="service-card reveal-scale reveal"
              >
                <div
                  className={`service-inner ${index % 2 !== 0 || card.slug === 'vip' ? 'img-left' : ''}`}
                >
                  <div className="service-media">
                    <div className="service-card-badge" aria-hidden>
                      <span className="service-card-badge__num">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="service-card-badge__rule" />
                      <span className="service-card-badge__eyebrow">
                        {card.eyebrow}
                      </span>
                    </div>
                    <img src={card.image} alt={card.title} className="service-img" />
                  </div>
                  <div
                    className={`service-text${card.brandLogo ? ' service-text--with-brand' : ''}`}
                  >
                    {card.brandLogo ? (
                      <div className="service-brand-row">
                        <img
                          src={card.brandLogo}
                          alt=""
                          className={`service-brand-logo${card.brandLogoBlend === 'lighten' ? ' service-brand-logo--blend-lighten' : ''}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ) : null}
                    <p className="service-eyebrow">{card.eyebrow}</p>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="tags">
                      {card.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <Link
                      to={`/services/${card.slug}`}
                      className="action"
                    >
                      REQUEST DETAILS
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="contact-section-glow contact-section-glow-1" />
        <div className="contact-section-glow contact-section-glow-2" />
        <div className="container contact-section-inner">
          <div className="contact-section-text">
            <p className="eyebrow reveal">CONTACT</p>
            <h2 className="reveal reveal-delay-1">Need To Reach Our Team?</h2>
            <p className="section-sub">
              Open the dedicated Contact page for all office addresses, direct
              numbers, and full inquiry details.
            </p>
          </div>
          <div className="contact-card reveal-scale reveal">
            <div className="contact-card-shine" />
            <div className="contact-card-body">
              <p className="contact-card-copy">
                Contact details, direct office lines, and inquiry form are now
                available in a dedicated page.
              </p>
              <Link to="/contact" className="contact-card-btn">
                <span>OPEN CONTACT PAGE</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MeetTheTeam />

      <Footer />
    </div>
  )
}

export default App
