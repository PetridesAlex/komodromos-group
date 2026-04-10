import { Link } from 'react-router-dom'
import StorageParallaxCards from './StorageParallaxCards'

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
        </div>
        <div className="storage-parallax-bleed">
          <StorageParallaxCards />
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
