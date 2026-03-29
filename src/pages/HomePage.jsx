import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import ServicesSection from "../components/sections/ServicesSection"
import StatsSection from "../components/sections/StatsSection"
import TeamSection from "../components/sections/TeamSection"
import ContactSection from "../components/sections/ContactSection"

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <ContactSection />
    </main>
  )
}

export default HomePage
