import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import Reveal from "../ui/Reveal"

function AboutSection() {
  return (
    <section id="about" className="section section-divider">
      <Container>
        <Reveal>
          <SectionTitle
            label="About Group"
            title="Independent Companies, Unified Standards"
            description="Our group structure brings together premium specialist services under one modern strategic umbrella."
          />
          <p className="about-copy">
            We develop high-trust businesses with a shared commitment to quality,
            discretion, and long-term value. Every company operates with sector
            expertise while aligning with one clear vision: confident delivery at a
            premium level.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}

export default AboutSection
