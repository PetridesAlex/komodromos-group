import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import Reveal from "../ui/Reveal"
import Button from "../ui/Button"

function ContactSection() {
  return (
    <section id="contact" className="section section-divider">
      <Container>
        <Reveal>
          <SectionTitle
            label="Contact"
            title="Need To Reach Our Team?"
            description="Open the dedicated Contact page for all office addresses, direct numbers, and full inquiry details."
          />
        </Reveal>
        <Reveal className="contact-preview-card">
          <p className="contact-preview-text">
            Contact details, direct office lines, and inquiry form are now available in a
            dedicated page.
          </p>
          <Button href="/contact">Open Contact Page</Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default ContactSection
