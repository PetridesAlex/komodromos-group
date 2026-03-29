import Button from "../ui/Button"
import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import Reveal from "../ui/Reveal"

function ContactPageSection() {
  return (
    <section id="contact" className="section section-divider contact-page-section">
      <Container>
        <Reveal>
          <SectionTitle
            label="Contact"
            title="Discuss Your Next Strategic Move"
            description="Share your goals and our team will connect you with the relevant specialist company."
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

            <div className="office-card">
              <h3>Main office Limassol</h3>
              <p className="office-address">
                John Kennedy Street Iris House, 4th Floor, 440A, Neapolis, 3106 Limassol
                Cyprus
              </p>
              <ul className="office-phones">
                <li>
                  <a href="tel:+35770002009">+357 7000 2009</a>
                </li>
                <li>
                  <a href="tel:+35770003008">+357 7000 3008</a>
                </li>
                <li>
                  <a href="tel:+35799243100">+357 99 243 100</a>
                </li>
                <li>
                  <a href="tel:+35799047978">+357 99 04 7978</a>
                </li>
                <li>
                  <a href="tel:+35796000236">+357 96 00 0236</a>
                </li>
              </ul>
              <p className="office-email">
                <a href="mailto:info@komodromosgroup.com">info@komodromosgroup.com</a>
              </p>
            </div>

            <div className="office-card">
              <h3>Larnaca office</h3>
              <p className="office-address">9 Ioannou Gladstonos Street, 6023 Larnaca Cyprus</p>
              <ul className="office-phones">
                <li>
                  <a href="tel:+35724333305">+357 24 333 305</a>
                </li>
                <li>
                  <a href="tel:+35770002009">+357 7000 2009</a>
                </li>
                <li>
                  <a href="tel:+35770003008">+357 7000 3008</a>
                </li>
                <li>
                  <a href="tel:+35799243100">+357 99 243 100</a>
                </li>
                <li>
                  <a href="tel:+35799047978">+357 99 04 7978</a>
                </li>
                <li>
                  <a href="tel:+35796000236">+357 96 00 0236</a>
                </li>
              </ul>
              <p className="office-email">
                <a href="mailto:info@komodromosgroup.com">info@komodromosgroup.com</a>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default ContactPageSection
