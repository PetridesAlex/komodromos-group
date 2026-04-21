import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Building2, ChevronDown, Home, Layers } from 'lucide-react'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import { getServiceBySlug } from '../data/serviceCards'
import { getServicePageContent } from '../data/servicePageSections'
import {
  poolCategories,
  poolGardenPillars,
  poolInternalLinings,
  poolServiceRenovationRepair,
} from '../data/poolGardenPage'

const pillarIcons = [Home, Building2, Layers] as const

/** Primary hero — resort-style pool water (consistent with Pool Categories → Infinity) */
const POOL_HERO_IMAGE =
  '/images/services/swimming-pool-garden-services/pool-hero.webp'

/** Editorial strip — alternate pool detail so hero and insight section differ visually */
const POOL_EDITORIAL_IMAGE =
  '/images/services/swimming-pool-garden-services/reconstituted-rock-pool-feature.png'

export default function PoolGardenServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()
  const card = getServiceBySlug('pool')
  const content = getServicePageContent('pool')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!card || !content) {
    return <Navigate to="/" replace />
  }

  const scrollToServices = () => {
    const el = document.getElementById('pool-categories')
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
    el.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="page pool-garden-page" ref={pageRef}>
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

      <section className="pool-garden-hero" aria-label="Introduction">
        <div className="pool-garden-hero__bg" aria-hidden>
          <img
            className="pool-garden-hero__bg-img"
            src={POOL_HERO_IMAGE}
            alt=""
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="pool-garden-hero__scrim" aria-hidden />
        <div className="pool-garden-hero__grain" aria-hidden />
        <div className="container pool-garden-hero__inner">
          <p className="pool-garden-hero__eyebrow reveal">{card.eyebrow}</p>
          <h1 className="pool-garden-hero__title reveal reveal-delay-1">
            {card.title}
          </h1>
          <div className="pool-garden-hero__lede">
            <p className="pool-garden-hero__sub reveal reveal-delay-2">
              {card.description}
            </p>
            <p className="pool-garden-hero__tag reveal reveal-delay-3">
              Private pools · Hospitality exteriors · Landscape infrastructure
            </p>
          </div>
          <div className="pool-garden-hero__cta reveal reveal-delay-4">
            <button
              type="button"
              className="pool-garden-hero__services-btn"
              onClick={scrollToServices}
            >
              <span className="pool-garden-hero__services-btn-text">
                Click for services
              </span>
              <ChevronDown
                className="pool-garden-hero__services-btn-icon"
                aria-hidden
                strokeWidth={2}
                size={18}
              />
            </button>
          </div>
        </div>
      </section>

      <section className="pool-garden-lead" aria-labelledby="pool-garden-lead-title">
        <div className="container pool-garden-lead__inner">
          <h2 id="pool-garden-lead-title" className="pool-garden-lead__title reveal">
            {content.leadTitle}
          </h2>
          <p className="pool-garden-lead__copy reveal reveal-delay-1">{content.lead}</p>
        </div>
      </section>

      <section
        className="pool-garden-flagship pool-garden-flagship--categories"
        id="pool-categories"
        aria-labelledby="pool-categories-heading"
      >
        <div className="container pool-garden-flagship__header">
          <h2 id="pool-categories-heading" className="pool-garden-flagship__title reveal">
            Pool Categories
          </h2>
          <div className="pool-garden-flagship__rule reveal reveal-delay-1" aria-hidden />
        </div>
        <div className="pool-garden-flagship__grid pool-garden-flagship__grid--categories container container--categories-hero">
          {poolCategories.map((item, i) => (
            <figure
              key={item.label}
              className={`pool-garden-showcase-card pool-garden-showcase-card--categories${i === 0 ? ' pool-garden-showcase-card--categories-overflow' : ''} reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="pool-garden-showcase-card__media">
                <img src={item.imageSrc} alt="" loading="lazy" decoding="async" />
                <span className="pool-garden-showcase-card__veil" aria-hidden />
              </div>
              <figcaption className="pool-garden-showcase-card__cap">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="pool-garden-flagship pool-garden-flagship--repair"
        id="service-renovation-repair"
        aria-labelledby="service-renovation-heading"
      >
        <div className="container pool-garden-flagship__header">
          <h2 id="service-renovation-heading" className="pool-garden-flagship__title reveal">
            Service, Renovation and Repair
          </h2>
          <div className="pool-garden-flagship__rule reveal reveal-delay-1" aria-hidden />
        </div>
        <div className="pool-garden-flagship__grid pool-garden-flagship__grid--repair container">
          {poolServiceRenovationRepair.map((item, i) => (
            <figure
              key={item.label}
              className={`pool-garden-showcase-card reveal reveal-delay-${Math.min((i % 4) + 1, 4)}`}
            >
              <div className="pool-garden-showcase-card__media">
                <img src={item.imageSrc} alt="" loading="lazy" decoding="async" />
                <span className="pool-garden-showcase-card__veil" aria-hidden />
              </div>
              <figcaption className="pool-garden-showcase-card__cap">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section
        className="pool-garden-flagship pool-garden-flagship--linings"
        id="pool-internal-linings"
        aria-labelledby="pool-linings-heading"
      >
        <div className="container pool-garden-flagship__header">
          <h2 id="pool-linings-heading" className="pool-garden-flagship__title reveal">
            Pool Internal Linings
          </h2>
          <div className="pool-garden-flagship__rule reveal reveal-delay-1" aria-hidden />
        </div>
        <div className="pool-garden-flagship__grid container">
          {poolInternalLinings.map((item, i) => (
            <figure
              key={item.label}
              className={`pool-garden-showcase-card pool-garden-showcase-card--tall reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="pool-garden-showcase-card__media">
                <img src={item.imageSrc} alt="" loading="lazy" decoding="async" />
                <span className="pool-garden-showcase-card__veil" aria-hidden />
              </div>
              <figcaption className="pool-garden-showcase-card__cap">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pool-garden-pillars" aria-labelledby="pool-garden-pillars-title">
        <div className="container pool-garden-pillars__inner">
          <p id="pool-garden-pillars-title" className="pool-garden-section-eyebrow reveal">
            Core capabilities
          </p>
          <div className="pool-garden-pillar-grid">
            {poolGardenPillars.map((p, i) => {
              const Icon = pillarIcons[i]
              return (
                <article
                  key={p.key}
                  className={`pool-garden-pillar reveal reveal-delay-${Math.min(i + 1, 4)}`}
                >
                  <div className="pool-garden-pillar__icon-wrap" aria-hidden>
                    <Icon strokeWidth={1.35} size={26} />
                  </div>
                  <h3 className="pool-garden-pillar__title">{p.title}</h3>
                  <p className="pool-garden-pillar__body">{p.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pool-garden-values" aria-labelledby="pool-garden-values-title">
        <div className="container pool-garden-values__inner">
          <p id="pool-garden-values-title" className="pool-garden-section-eyebrow reveal">
            {content.offeringsTitle}
          </p>
          <div className="pool-garden-values__grid">
            {content.offerings.map((o, i) => (
              <article
                key={o.title}
                className={`pool-garden-value-card reveal reveal-delay-${Math.min(i + 1, 4)}`}
              >
                <span className="pool-garden-value-card__rule" aria-hidden />
                <h3 className="pool-garden-value-card__title">{o.title}</h3>
                <p className="pool-garden-value-card__desc">{o.description}</p>
              </article>
            ))}
          </div>
          {content.bullets && content.bullets.length > 0 ? (
            <ul className="pool-garden-proof reveal">
              {content.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <section
        className="pool-garden-insight"
        id="pool-practical-guidance"
        aria-labelledby="pool-garden-insight-heading"
      >
        <div className="container pool-garden-insight__inner">
          <div className="pool-garden-insight__media reveal">
            <img
              src={POOL_EDITORIAL_IMAGE}
              alt="Swimming pool with natural rock surround and planting"
              loading="lazy"
              decoding="async"
              width={1200}
              height={750}
            />
          </div>
          <div className="pool-garden-insight__copy">
            <p className="pool-garden-section-eyebrow reveal">Practical guidance</p>
            <h2 id="pool-garden-insight-heading" className="pool-garden-insight__title reveal reveal-delay-1">
              Lock details before the shell is poured
            </h2>
            <p className="pool-garden-insight__lead reveal reveal-delay-2">
              The fastest way to control cost on a pool and garden programme is to agree structure,
              hydraulics, and finishes in one coordinated pass — before excavation fixes decisions that
              are expensive to unwind later.
            </p>
            <ul className="pool-garden-insight__list reveal reveal-delay-3">
              <li>
                <strong>Equipment &amp; access.</strong> Position filtration and heating where service
                paths stay clear for life — hard-to-reach kit is what fails first when chemistry or
                seals drift.
              </li>
              <li>
                <strong>Circulation &amp; chemistry.</strong> Balance inlet and outlet placement with
                sun, wind, and planting so debris load and chlorine demand stay predictable in warm
                seasons.
              </li>
              <li>
                <strong>Documentation.</strong> Keep hydraulic and finishing schedules aligned with
                warranty terms so handover is clear for operators, clubs, or homeowners managing the
                asset long term.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pool-garden-cta-strip">
        <div className="container pool-garden-cta-strip__inner">
          <p className="pool-garden-cta-strip__copy reveal">
            {content.closing ??
              'Tell us about your site and timeline — we will respond with a clear next step.'}
          </p>
          <Link
            to="/contact"
            state={{ serviceInterest: card.title }}
            className="pool-garden-cta-strip__btn reveal reveal-delay-1"
          >
            Request details
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
