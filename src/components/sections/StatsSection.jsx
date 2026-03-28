import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import Reveal from "../ui/Reveal"

const stats = [
  { value: "12", label: "Specialized Divisions" },
  { value: "20+", label: "Years Combined Expertise" },
  { value: "8", label: "Core Industry Verticals" },
  { value: "35+", label: "Strategic Partners" },
]

function StatsSection() {
  return (
    <section id="stats" className="section section-divider">
      <Container>
        <Reveal>
          <SectionTitle
            label="Highlights"
            title="Scale Supported By Precision"
            description="A focused operating model with measurable outcomes and controlled growth."
          />
        </Reveal>

        <Reveal className="stats-grid" delay={120}>
          {stats.map((stat) => (
            <article key={stat.label} className="stat">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}

export default StatsSection
