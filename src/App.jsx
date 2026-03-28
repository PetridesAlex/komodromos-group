import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import StatsSection from './components/sections/StatsSection'
import TeamSection from './components/sections/TeamSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
