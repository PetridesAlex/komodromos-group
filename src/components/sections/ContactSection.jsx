import Button from "../ui/Button"
import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import Reveal from "../ui/Reveal"

function ContactSection() {
  return (
    <section id="contact" className="section section-divider">
      <Container>
        <Reveal>
          <SectionTitle
            label="Contact"
            title="Discuss Your Next Strategic Move"
            description="Share your goals and our team will connect with the relevant specialist company."
          />
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-form">
            <form>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+357 ..." />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us which service area you are interested in."
                />
              </div>

              <div className="field">
                <Button href={null} type="submit">
                  Send Inquiry
                </Button>
              </div>
            </form>
          </Reveal>

          <Reveal className="contact-details">
            <p className="section-label">Direct Contact</p>
            <p>+357 00 000 000</p>
            <p>info@komodromos-group.com</p>
            <p>Limassol, Cyprus</p>

            <div className="map-placeholder">Map Placeholder</div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
