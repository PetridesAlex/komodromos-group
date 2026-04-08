import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <Link to="/" className="logo">
            KOMODROMOS GROUP
          </Link>
          <nav className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/#about">ABOUT</Link>
            <Link to="/#services">SERVICES</Link>
            <Link to="/contact" className="nav-active">
              CONTACT
            </Link>
          </nav>
          <div className="socials">
            <a href="#" aria-label="WhatsApp" className="social wa">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a href="#" aria-label="Telegram" className="social tg">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      <section className="contact-hero">
        <div className="contact-hero-glow contact-hero-glow-1" />
        <div className="contact-hero-glow contact-hero-glow-2" />
        <div className="container contact-hero-inner">
          <p className="eyebrow">CONTACT US</p>
          <h1>Let's Start a Conversation</h1>
          <p className="contact-hero-sub">
            Reach out for consultations, partnerships, or general inquiries.
            Our team responds within 24 hours.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Whether you're exploring our services or ready to engage, we're
              here to help you take the next step with confidence.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-label">EMAIL</span>
              <span>info@komodromosgroup.com</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">PHONE</span>
              <span>+357 00 000 000</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">OFFICE</span>
              <span>Limassol, Cyprus</span>
            </div>

            <div className="contact-hours">
              <span className="contact-detail-label">BUSINESS HOURS</span>
              <span>Mon – Fri: 09:00 – 18:00</span>
              <span>Sat: By Appointment</span>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3>Message Sent</h3>
                <p>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+357 00 000 000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option>VIP Services</option>
                    <option>Wedding Services</option>
                    <option>Swimming Pool & Garden</option>
                    <option>Building Technician</option>
                    <option>Storage2Rent</option>
                    <option>Business Consulting</option>
                    <option>Aviation Agency</option>
                    <option>Astreal Developers</option>
                    <option>Human Resources</option>
                    <option>Tax & Accounting</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="form-submit">
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
