import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserCircle2 } from 'lucide-react'
import Footer from './Footer'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'

const WHY_CHOOSE = [
  'TO SAVE MONEY!',
  'TO HELP WITH ANY & ALL YOUR WEDDING NEEDS!',
  'TO BE PREPARED!',
  'TO BE UNIQUE EXCLUSIVE & LUXURY!',
] as const

const WEDDING_OFFERINGS = [
  { title: 'Full-service planning', desc: 'Timeline, vendors, and creative direction from first sketch to farewell.' },
  { title: 'Venue & production', desc: 'Scenic Cyprus locations, staging, lighting, and flawless run-of-show.' },
  { title: 'Guest experience', desc: 'Travel, hospitality, and seating crafted for every attendee.' },
  { title: 'Styling & florals', desc: 'Cohesive palettes, florals, and detail styling for photography-ready moments.' },
  { title: 'Destination weddings', desc: 'Local expertise and discreet coordination for international couples.' },
  { title: 'Day-of coordination', desc: 'Calm leadership on the day so you can stay present and celebrate.' },
] as const

const TESTIMONIALS: { author: string; quote: string; lang?: string }[] = [
  {
    author: 'Κωνσταντίνα',
    lang: 'el',
    quote:
      '«Δεν μπορούσα να φανταστώ τον γάμο μου καλύτερα. Είσασταν όλοι καταπληκτικοί επαγγελματίες. Όλοι μου είπαν τα καλύτερα λόγια για το νυφικό μου, τα κεραστικά και φυσικά για την υπέροχη διακόσμηση του Σέργιου. Και το πιο σημαντικό, χωρίς να κουραστώ. Σας προτείνω με 1000. Ευχαριστώ για όλα.»',
  },
  {
    author: 'John',
    lang: 'en',
    quote:
      '“Something like more than happy from you guys! Thank you very much for everything!”',
  },
  {
    author: 'Μαρία και Γιάννης',
    lang: 'el',
    quote:
      '«Ευχαριστούμε πολύ για όλα!!! Δεν θα μπορούσαμε να φανταστούμε τον γάμο μας καλύτερο. Όλα ήταν τέλεια!!!»',
  },
]

const WEDDING_YOUTUBE_CHANNEL =
  'https://www.youtube.com/@weddingskybykomodromosgrou3234'

const PROPERTY_GROUPS: { heading: string; items: string[] }[] = [
  {
    heading: 'Property care',
    items: ['Tenant management', 'Rent collection', 'Property marketing'],
  },
  {
    heading: 'Operations & compliance',
    items: ['Cleaning services', 'Repairs & renovations', 'Legal support', 'Key holding'],
  },
  {
    heading: 'Short-stay & portfolio',
    items: ['Airbnb management', '24/7 support', 'Property inspections', 'Utility management'],
  },
]

export default function WeddingServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page wedding-page" ref={pageRef}>
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

      <a
        href={WEDDING_YOUTUBE_CHANNEL}
        target="_blank"
        rel="noopener noreferrer"
        className="wedding-tv-ad-bar"
      >
        <span className="wedding-tv-ad-bar__shine" aria-hidden />
        <div className="container wedding-tv-ad-bar__inner">
          <span className="wedding-tv-ad-bar__copy">
            Click to visit our YouTube channel — films, ideas & Wedding Sky moments.
          </span>
          <span className="wedding-tv-ad-bar__cta">
            <span className="wedding-tv-ad-bar__cta-yt" aria-hidden>
              <svg
                className="wedding-tv-ad-bar__cta-yt-svg"
                viewBox="0 0 24 24"
                width={22}
                height={22}
                aria-hidden
                focusable="false"
              >
                <path
                  fill="#FF0000"
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                />
                <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </span>
            Open channel
          </span>
        </div>
      </a>

      <section className="wedding-hero">
        <div
          className="wedding-hero__bg"
          style={{
            backgroundImage: 'url(/images/services/wedding-service.webp)',
          }}
          aria-hidden
        />
        <div className="wedding-hero__scrim" aria-hidden />
        <div className="container wedding-hero__inner">
          <p className="wedding-hero__eyebrow">Wedding Sky</p>
          <h1 className="wedding-hero__title">Make your dream wedding come true!</h1>
          <p className="wedding-hero__lead">
            From intimate vows to grand celebrations, we design refined experiences
            in Cyprus—guided by taste, precision, and a passion for love stories
            that feel unmistakably yours.
          </p>
        </div>
      </section>

      <section className="wedding-video-section">
        <div className="container">
          <div className="wedding-video-frame">
            <div className="wedding-video-embed">
              <iframe
                title="Wedding Sky — showcase video"
                src="https://www.youtube.com/embed/vKmpAXognnc?start=2&rel=0&modestbranding=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="wedding-section wedding-services-block">
        <div className="container">
          <p className="wedding-section__eyebrow">Wedding Sky</p>
          <h2 className="wedding-section__title">Our services</h2>
          <p className="wedding-section__intro">
            A full spectrum of planning and production services—tailored to your
            vision, culture, and guest list.
          </p>
          <div className="wedding-offerings">
            {WEDDING_OFFERINGS.map((item) => (
              <article key={item.title} className="wedding-offering-card">
                <h3 className="wedding-offering-card__title">{item.title}</h3>
                <p className="wedding-offering-card__desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wedding-section wedding-why">
        <div className="container">
          <h2 className="wedding-section__title wedding-why__title">
            Why to choose Wedding Sky team…
          </h2>
          <div className="wedding-why__grid">
            {WHY_CHOOSE.map((line) => (
              <div key={line} className="wedding-why__card">
                <p className="wedding-why__text">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wedding-section wedding-testimonials" aria-labelledby="wedding-testimonials-heading">
        <div className="container">
          <p className="wedding-section__eyebrow">Love stories</p>
          <h2 id="wedding-testimonials-heading" className="wedding-section__title">
            Testimonials
          </h2>
          <p className="wedding-section__intro wedding-testimonials__intro">
            Kind words from couples who trusted Wedding Sky with their day.
          </p>
          <div className="wedding-testimonials__grid">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.author}
                className="wedding-testimonial"
                lang={t.lang}
              >
                <div className="wedding-testimonial__header">
                  <div
                    className="wedding-testimonial__avatar"
                    aria-hidden
                  >
                    <UserCircle2
                      className="wedding-testimonial__avatar-icon"
                      strokeWidth={1.15}
                      size={32}
                    />
                  </div>
                  <span className="wedding-testimonial__deco-quote" aria-hidden>
                    “
                  </span>
                </div>
                <p className="wedding-testimonial__quote">{t.quote}</p>
                <footer className="wedding-testimonial__footer">
                  <span className="wedding-testimonial__author">{t.author}</span>
                  <span className="wedding-testimonial__badge">Verified client</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="wedding-section wedding-property">
        <div className="container">
          <h2 className="wedding-section__title">Your property services</h2>
          <p className="wedding-section__intro wedding-property__sub">
            Ready-to-use management and care—structured for clarity and peace of mind.
          </p>
          {PROPERTY_GROUPS.map((group) => (
            <div key={group.heading} className="wedding-property__group">
              <h3 className="wedding-property__group-title">{group.heading}</h3>
              <div className="wedding-property__cards">
                {group.items.map((label) => (
                  <div key={label} className="wedding-property-card">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wedding-section wedding-about" id="wedding-about">
        <div className="container wedding-about__inner">
          <h2 className="wedding-section__title wedding-about__page-title">About us</h2>

          <div className="wedding-about__row">
            <div className="wedding-about__block wedding-about__panel">
              <h3 className="wedding-about__subhead">Wedding Sky</h3>
              <p className="wedding-about__copy">
                Wedding Sky is a leading company providing luxury weddings and event
                planning services in Cyprus. Our initiative is based on our love for
                weddings, passion for creating spectacular affairs, creativity, and
                commitment to our beloved clientele.
              </p>
            </div>

            <div className="wedding-about__block wedding-about__block--muted wedding-about__panel">
              <h3 className="wedding-about__subhead">Property management</h3>
              <p className="wedding-about__copy">
                We are a professional property management company dedicated to
                delivering reliable, high-quality services across Cyprus. Our approach
                is built on trust, attention to detail, and a commitment to maintaining
                and enhancing the value of every property we manage.
              </p>
              <p className="wedding-about__copy">
                With experience in both long-term and short-term rentals, we provide
                complete solutions tailored to each client&apos;s needs — from daily
                operations and tenant management to maintenance and financial handling.
              </p>
              <p className="wedding-about__copy">
                Our goal is to make property ownership simple and stress-free. We handle
                every aspect with professionalism and care, ensuring your property is
                well-maintained, efficiently managed, and consistently performing at
                its best.
              </p>
            </div>
          </div>

          <div className="wedding-about__row">
            <div className="wedding-about__block wedding-about__panel">
              <h3 className="wedding-about__subhead">Our approach</h3>
              <p className="wedding-about__tagline">
                Professionalism. Reliability. Transparency.
              </p>
              <p className="wedding-about__copy">
                We believe in clear communication, strong relationships, and delivering
                results. Every property is managed with the same level of dedication,
                whether it is a single unit or a full portfolio.
              </p>
            </div>

            <div className="wedding-about__block wedding-about__panel">
              <h3 className="wedding-about__subhead">Our team</h3>
              <p className="wedding-about__copy">
                Our team consists of experienced professionals with expertise in
                property management, maintenance, and client service. We work closely
                with trusted partners to ensure high standards across all services.
              </p>
            </div>
          </div>

          <div className="wedding-about__cta-wrap">
            <Link to="/contact" className="wedding-about__cta">
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="wedding-section wedding-visit" aria-labelledby="wedding-visit-heading">
        <div className="container wedding-visit__inner">
          <h2 id="wedding-visit-heading" className="wedding-section__title">
            Location &amp; contact
          </h2>
          <p className="wedding-section__intro wedding-visit__intro">
            Visit us in Limassol or reach the Wedding Sky team directly.
          </p>
          <div className="wedding-visit__grid">
            <div className="wedding-visit__card">
              <h3 className="wedding-visit__label">Address</h3>
              <address className="wedding-visit__address">
                John Kennedy Street, Iris House, 4th Floor, 440A
                <br />
                Neapolis, 3106 Limassol
                <br />
                Cyprus
              </address>
            </div>
            <div className="wedding-visit__card">
              <h3 className="wedding-visit__label">Telephone</h3>
              <ul className="wedding-visit__list">
                <li>
                  <a href="tel:+35724333305">+357 24 333 305</a>
                </li>
                <li>
                  <a href="tel:+35770002009">+357 7000 2009</a>
                </li>
                <li>
                  <a href="tel:+35770003008">+357 7000 3008</a>
                </li>
              </ul>
              <h3 className="wedding-visit__label wedding-visit__label--spaced">
                Mobile
              </h3>
              <ul className="wedding-visit__list">
                <li>
                  <a href="tel:+35799243100">+357 99 24 3100</a>
                </li>
                <li>
                  <a href="tel:+35799047978">+357 99 04 7978</a>
                </li>
              </ul>
            </div>
            <div className="wedding-visit__card">
              <h3 className="wedding-visit__label">E-mail</h3>
              <ul className="wedding-visit__list">
                <li>
                  <a href="mailto:info@weddingskycy.com">info@weddingskycy.com</a>
                </li>
                <li>
                  <a href="mailto:weddingskycy@gmail.com">
                    weddingskycy@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
