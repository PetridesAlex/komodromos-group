import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import Reveal from "../ui/Reveal"

function TeamSection() {
  return (
    <section id="team" className="section section-divider">
      <Container>
        <Reveal>
          <SectionTitle
            label="Leadership"
            title="Experienced Operators With A Long-Term View"
            description="Our leadership team blends entrepreneurial execution with institutional discipline."
          />
        </Reveal>

        <div className="team-layout">
          <Reveal className="team-visual" />
          <Reveal className="team-text">
            <p>
              We lead with a clear operating philosophy: protect quality, elevate
              service standards, and build resilient companies with premium market
              positioning.
            </p>
            <ul className="team-list">
              <li>
                <span>Group Chairman</span>
                <span>Strategy & Governance</span>
              </li>
              <li>
                <span>Executive Director</span>
                <span>Operations & Expansion</span>
              </li>
              <li>
                <span>Advisory Board</span>
                <span>Finance, Legal, Investment</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default TeamSection
