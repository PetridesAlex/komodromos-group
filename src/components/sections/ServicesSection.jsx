import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import Reveal from "../ui/Reveal"
import { servicesData } from "../../data/services"

function ServicesSection() {
  return (
    <section id="services" className="section section-divider">
      <Container>
        <Reveal>
          <SectionTitle
            label="Group Services"
            title="Specialized Companies Across Twelve Core Categories"
            description="A curated portfolio designed for private clients, corporates, and investors."
          />
        </Reveal>

        <div className="services-list">
          {servicesData.map((service, index) => (
            <Reveal
              key={service.id}
              className="service-item"
              delay={(index % 4) * 70}
            >
              <div
                className="service-image"
                style={{ "--service-image-position": service.imagePosition ?? "50% 50%" }}
              >
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-content">
                <p className="service-category">{service.category}</p>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-meta">
                  {service.services.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a className="service-link" href="/contact">
                  Request Details
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServicesSection
