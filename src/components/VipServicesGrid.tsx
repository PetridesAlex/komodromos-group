import { ServiceCard } from './ServiceCard'
import VipConciergeContactForm from './VipConciergeContactForm'
import { vipSubServices } from '../data/vipSubServices'

export default function VipServicesGrid() {
  return (
    <>
      <section
        className="vip-services-grid-section"
        id="vip-portfolio"
        aria-label="Concierge portfolio and services"
      >
        <div className="container">
          <header className="vip-services-grid-header">
            <p className="vip-services-grid-eyebrow">CONCIERGE PORTFOLIO</p>
            <h2 className="vip-services-grid-title">Premium Services</h2>
            <p className="vip-services-grid-lead">
              Explore our full range of lifestyle, mobility, and leisure
              capabilities — each delivered with discretion and precision.
            </p>
          </header>
          <div className="vip-services-grid">
            {vipSubServices.map((item, index) => (
              <ServiceCard
                key={item.slug}
                title={item.title}
                image={item.image}
                kicker={item.kicker}
                nameLine={item.nameLine}
                tone={(index % 3) as 0 | 1 | 2}
                to={item.to ?? '/contact'}
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: item.title,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <VipConciergeContactForm />
    </>
  )
}
