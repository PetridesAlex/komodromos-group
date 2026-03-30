import Button from "../ui/Button"
import Reveal from "../ui/Reveal"

function HeroSection() {
  return (
    <section id="top" className="hero">
      <Reveal className="hero-content">
        <h1 className="hero-title">Komodromos Group of Companies</h1>
        <p className="hero-subtitle">
          Komodromos Group unites specialist companies across lifestyle, business,
          property, legal, and investment services.
        </p>
        <Button href="#services">Explore Our Companies</Button>
      </Reveal>
    </section>
  )
}

export default HeroSection
