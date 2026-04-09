import { useState } from 'react'
import { vipSubServices } from '../data/vipSubServices'

export default function VipConciergeContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    vipService: '',
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
    <section className="vip-concierge-form-section" aria-labelledby="vip-concierge-form-heading">
      <div className="vip-concierge-form-section-glow vip-concierge-form-section-glow--1" aria-hidden />
      <div className="vip-concierge-form-section-glow vip-concierge-form-section-glow--2" aria-hidden />
      <div className="container">
        <header className="vip-concierge-form-header">
          <p className="vip-concierge-form-eyebrow">PRIVATE INQUIRY</p>
          <h2 id="vip-concierge-form-heading" className="vip-concierge-form-title">
            Concierge request
          </h2>
          <p className="vip-concierge-form-lead">
            Tell us which experience you are considering and how we may reach you.
            Responses are handled with discretion, typically within 24 hours.
          </p>
        </header>

        <div className="vip-concierge-form-card">
          {submitted ? (
            <div className="vip-concierge-success">
              <div className="vip-concierge-success-icon" aria-hidden>
                ✓
              </div>
              <h3 className="vip-concierge-success-title">Inquiry received</h3>
              <p className="vip-concierge-success-text">
                Thank you. A concierge coordinator will review your request and
                respond shortly.
              </p>
            </div>
          ) : (
            <form className="vip-form vip-form--premium" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="vip-inquiry-name">Full name</label>
                  <input
                    id="vip-inquiry-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="vip-inquiry-email">Email</label>
                  <input
                    id="vip-inquiry-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="vip-inquiry-phone">Phone</label>
                  <input
                    id="vip-inquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+357 00 000 000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="vip-inquiry-company">Company (optional)</label>
                  <input
                    id="vip-inquiry-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Organization"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="vip-inquiry-service">Concierge service</label>
                <select
                  id="vip-inquiry-service"
                  name="vipService"
                  required
                  value={form.vipService}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {vipSubServices.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="vip-inquiry-message">Message</label>
                <textarea
                  id="vip-inquiry-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Dates, party size, preferences, or other context…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="vip-form-submit">
                Submit inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
