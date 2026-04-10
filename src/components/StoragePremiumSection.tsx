import { Link } from 'react-router-dom'

const STORAGE_FEATURES: {
  title: string
  body: string
  image: string
  imageLabel: string
}[] = [
  {
    title: 'FLEXIBLE STORAGE',
    body:
      'Wide range of size, monthly rolling contract, no long-term commitment, pay only for the days you use.',
    image:
      'https://images.unsplash.com/photo-1586528116494-1bccf8b76bb8?w=1920&q=85',
    imageLabel: 'Storage units and containers',
  },
  {
    title: 'YOUR OWN SPACE',
    body:
      'Only YOU hold the key, SAFE & SECURE self storage, with individual unit alarms and remote monitored digital CCTV offering 24hr access 365 days a year.',
    image:
      'https://images.unsplash.com/photo-1584433144859-1fc3ab64a728?w=1920&q=85',
    imageLabel: 'Secure access and locks',
  },
  {
    title: 'LOCAL & EASY TO FIND',
    body:
      'All our conveniently located stores are exclusively in Kiti, Larnaca, where we remain an active part of the community.',
    image:
      'https://images.unsplash.com/photo-1524661135-423994f34d6a?w=1920&q=85',
    imageLabel: 'Location and directions',
  },
  {
    title: 'PERSONAL, FRIENDLY & PROFESSIONAL',
    body:
      'Our team work hard to earn great customer service feedback & have won awards to prove it.',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4b99?w=1920&q=85',
    imageLabel: 'Professional team',
  },
  {
    title: '24 HR ACCESS',
    body:
      'Access is available 7 days a week: access your storage unit as often as you want, any time.',
    image:
      'https://images.unsplash.com/photo-1496360166961-10a51d255ee0?w=1920&q=85',
    imageLabel: 'Around-the-clock access',
  },
  {
    title: 'BUSINESS STORAGE',
    body:
      'Why not rethink your business in Cyprus and make smarter use of space — save money and time.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=85',
    imageLabel: 'Business and workspace',
  },
]

const STORAGE_PLANS: { title: string; price: number }[] = [
  { title: '10 ft Container', price: 60 },
  { title: '20 ft Container', price: 100 },
  { title: '20 ft Insulated warehouse', price: 100 },
  { title: '30 ft Insulated warehouse', price: 135 },
  { title: '40 ft Container', price: 190 },
]

export default function StoragePremiumSection() {
  return (
    <section className="storage-premium-section" aria-labelledby="storage-premium-heading">
      <div className="storage-premium-section__glow storage-premium-section__glow--1" aria-hidden />
      <div className="storage-premium-section__glow storage-premium-section__glow--2" aria-hidden />
      <div className="container">
        <header className="storage-premium-header">
          <p className="storage-premium-eyebrow">CAPACITY & VALUE</p>
          <h2 id="storage-premium-heading" className="storage-premium-title">
            Premium storage, transparent monthly rates
          </h2>
          <p className="storage-premium-lead">
            When inventory, equipment, or archives need room to breathe, Storage2Rent
            operates with the discipline of a serious logistics partner: secure
            facilities, flexible terms, and pricing that stays clear from day one.
            From compact containers to insulated warehouse space, choose the
            footprint that matches your operation — and adjust as you grow.
          </p>
        </header>

        <div className="storage-features-wrap">
          <h3 className="storage-features-heading">The Storage2Rent standard</h3>
          <div className="storage-features-grid" role="list">
            {STORAGE_FEATURES.map((item) => (
              <article
                key={item.title}
                className="storage-feature-item"
                role="listitem"
              >
                <div className="storage-feature-card">
                  <div className="storage-feature-card__accent" aria-hidden />
                  <div className="storage-feature-card__media">
                    <img
                      src={item.image}
                      alt={item.imageLabel}
                      className="storage-feature-card__img"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <h4 className="storage-feature-item__title">{item.title}</h4>
                <p className="storage-feature-item__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <h3 className="storage-pricing-heading">Monthly rates</h3>
        <div className="storage-pricing-grid" role="list">
          {STORAGE_PLANS.map((plan) => (
            <article key={plan.title} className="storage-price-card" role="listitem">
              <div className="storage-price-card__accent" aria-hidden />
              <h3 className="storage-price-card__title">{plan.title}</h3>
              <p className="storage-price-card__price">
                <span className="storage-price-card__amount">{plan.price}€</span>
                <span className="storage-price-card__period">per month</span>
              </p>
            </article>
          ))}
        </div>

        <p className="storage-premium-footnote">
          Availability and access terms on request.{' '}
          <Link
            to="/contact"
            state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
            className="storage-premium-contact"
          >
            Contact us
          </Link>{' '}
          to reserve capacity or arrange a viewing.
        </p>
      </div>
    </section>
  )
}
