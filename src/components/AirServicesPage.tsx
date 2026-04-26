import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import {
  airCategoryContent,
  airJetsInFlight,
  airLightExperiences,
  airServicesHero,
  type AirCategoryId,
} from '../data/airServicesPage'

const IDS: AirCategoryId[] = ['jets', 'light']

export default function AirServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState<AirCategoryId>('jets')
  const pageRef = useReveal()
  const jetsSectionRef = useRef<HTMLElement | null>(null)
  const lightSectionRef = useRef<HTMLElement | null>(null)
  const prevSelected = useRef<AirCategoryId>('jets')
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prev = prevSelected.current
    if (selected === 'light' && prev === 'jets') {
      requestAnimationFrame(() => {
        lightSectionRef.current?.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'start',
        })
      })
    } else if (selected === 'jets' && prev === 'light') {
      requestAnimationFrame(() => {
        jetsSectionRef.current?.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'start',
        })
      })
    }
    prevSelected.current = selected
  }, [selected])

  return (
    <div className="page air-services-page" ref={pageRef}>
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

      <section className="air-hero" aria-labelledby="air-hero-title">
        <div className="air-hero__bg" aria-hidden>
          <div className="air-hero__gradient" />
        </div>
        <div className="air-hero__ambient" aria-hidden>
          <span className="air-hero__bloom air-hero__bloom--1" />
          <span className="air-hero__bloom air-hero__bloom--2" />
        </div>
        <div className="container air-hero__shell">
          <div className="air-hero__copy">
            <p className="air-hero__eyebrow air-hero__fade air-hero__fade--1">{airServicesHero.eyebrow}</p>
            <span className="air-hero__rule air-hero__fade air-hero__fade--1" aria-hidden />
            <h1
              id="air-hero-title"
              className="air-hero__title air-hero__title--premium air-hero__fade air-hero__fade--2"
            >
              <span className="air-hero__title-line">{airServicesHero.titleWords[0]}</span>
              <span className="air-hero__title-line air-hero__title-line--accent">
                {airServicesHero.titleWords[1]}
              </span>
            </h1>
            <p className="air-hero__sub air-hero__fade air-hero__fade--3">{airServicesHero.subtitle}</p>
          </div>
          <div className="air-hero__showcase">
            <figure className="air-hero__figure air-hero__figure--jets air-hero__fade air-hero__fade--4">
              <div className="air-hero__frame">
                <img
                  className="air-hero__img air-hero__img--jets"
                  src={airCategoryContent.jets.image}
                  alt={airCategoryContent.jets.imageAlt}
                  width={1200}
                  height={750}
                  decoding="async"
                  fetchPriority="high"
                />
                <span className="air-hero__sheen" aria-hidden />
              </div>
              <figcaption className="air-hero__cap">{airCategoryContent.jets.title}</figcaption>
            </figure>
            <figure className="air-hero__figure air-hero__figure--light air-hero__fade air-hero__fade--5">
              <div className="air-hero__frame">
                <img
                  className="air-hero__img air-hero__img--light"
                  src={airCategoryContent.light.image}
                  alt={airCategoryContent.light.imageAlt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
                <span className="air-hero__sheen" aria-hidden />
              </div>
              <figcaption className="air-hero__cap">{airCategoryContent.light.title}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="air-pick" aria-label="Aircraft type">
        <div className="container">
          <div className="air-pick__grid" role="tablist" aria-label="Aircraft category">
            {IDS.map((id) => {
              const item = airCategoryContent[id]
              const isActive = selected === id
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`air-tab-${id}`}
                  aria-selected={isActive}
                  aria-controls={id === 'light' ? 'air-light-experiences' : 'air-jets-inflight'}
                  className={`air-pick__card ${isActive ? 'air-pick__card--active' : ''}`}
                  onClick={() => setSelected(id)}
                >
                  <span className="air-pick__card-idx" aria-hidden>
                    {id === 'jets' ? '01' : '02'}
                  </span>
                  <span className="air-pick__card-body">
                    <span className="air-pick__card-title">{item.title}</span>
                    <span className="air-pick__card-tag">{item.tagline}</span>
                  </span>
                  <span className="air-pick__card-arrow" aria-hidden />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {selected === 'jets' && (
        <section
          ref={jetsSectionRef}
          className="air-jets-inflight"
          id="air-jets-inflight"
          role="tabpanel"
          tabIndex={-1}
          aria-labelledby="air-tab-jets"
        >
          <div className="air-jets-inflight__ambient" aria-hidden>
            <span className="air-jets-inflight__glow air-jets-inflight__glow--1" />
            <span className="air-jets-inflight__glow air-jets-inflight__glow--2" />
          </div>
          <div className="container">
            <header className="air-jets-inflight__header">
              <motion.p
                className="air-jets-inflight__eyebrow"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                Private jet
              </motion.p>
              <motion.h2
                className="air-jets-inflight__title"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.65,
                  delay: reduceMotion ? 0 : 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {airJetsInFlight.headline}
              </motion.h2>
              <div className="air-jets-inflight__intro">
                {airJetsInFlight.intro.map((para, i) => (
                  <motion.p
                    key={i}
                    className="air-jets-inflight__intro-p"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.55,
                      delay: reduceMotion ? 0 : 0.1 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </header>

            <motion.blockquote
              className="air-jets-inflight__quote"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: reduceMotion ? 0.01 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="air-jets-inflight__quote-text">{airJetsInFlight.quote}</p>
            </motion.blockquote>

            <ol className="air-jets-inflight__features" aria-label="In-flight service pillars">
              {airJetsInFlight.sections.map((block, i) => (
                <motion.li
                  key={block.title}
                  className="air-jets-inflight__block"
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-32px' }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.55,
                    delay: reduceMotion ? 0 : Math.min(i * 0.05, 0.35),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <h3 className="air-jets-inflight__block-title">{block.title}</h3>
                  <p className="air-jets-inflight__block-text">{block.body}</p>
                </motion.li>
              ))}
            </ol>

            <ul className="air-jets-inflight__gallery" aria-label="Private aviation imagery">
              {airJetsInFlight.gallery.map((item, i) => (
                <motion.li
                  key={item.src}
                  className="air-jets-inflight__cell"
                  initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.55,
                    delay: reduceMotion ? 0 : i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <figure className="air-jets-inflight__fig">
                    <div className="air-jets-inflight__img-wrap">
                      <img
                        className="air-jets-inflight__img"
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={560}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="air-jets-inflight__img-shine" aria-hidden />
                    </div>
                    <figcaption className="air-jets-inflight__caption">{item.caption}</figcaption>
                  </figure>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="air-jets-inflight__foot"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: reduceMotion ? 0 : 0.15,
                duration: reduceMotion ? 0.01 : 0.5,
              }}
            >
              <Link
                to="/contact"
                className="air-jets-inflight__btn"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'Private Jets — In-flight & charter',
                }}
              >
                Request details
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {selected === 'light' && (
        <section
          ref={lightSectionRef}
          className="air-light-experiences"
          id="air-light-experiences"
          role="tabpanel"
          tabIndex={-1}
          aria-labelledby="air-tab-light"
        >
          <div className="air-light-experiences__ambient" aria-hidden>
            <span className="air-light-experiences__glow air-light-experiences__glow--1" />
            <span className="air-light-experiences__glow air-light-experiences__glow--2" />
          </div>
          <div className="container">
            <header className="air-light-experiences__header">
              <motion.p
                className="air-light-experiences__eyebrow"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                Light aircraft
              </motion.p>
              <motion.h2
                className="air-light-experiences__title"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.65,
                  delay: reduceMotion ? 0 : 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {airLightExperiences.headline}
              </motion.h2>
              <div className="air-light-experiences__intro">
                {airLightExperiences.intro.map((para, i) => (
                  <motion.p
                    key={i}
                    className="air-light-experiences__intro-p"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.55,
                      delay: reduceMotion ? 0 : 0.12 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </header>

            <ul className="air-light-experiences__gallery" aria-label="Scenes from light aircraft experiences">
              {airLightExperiences.gallery.map((item, i) => (
                <motion.li
                  key={item.src}
                  className="air-light-experiences__cell"
                  initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.55,
                    delay: reduceMotion ? 0 : i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <figure className="air-light-experiences__fig">
                    <div className="air-light-experiences__img-wrap">
                      <img
                        className="air-light-experiences__img"
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={560}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="air-light-experiences__img-shine" aria-hidden />
                    </div>
                    <figcaption className="air-light-experiences__caption">
                      {item.caption}
                    </figcaption>
                  </figure>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="air-light-experiences__foot"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: reduceMotion ? 0 : 0.2,
                duration: reduceMotion ? 0.01 : 0.5,
              }}
            >
              <Link
                to="/contact"
                className="air-light-experiences__btn"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'Light Aircraft — Air tours & experiences',
                }}
              >
                Plan an air tour
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
