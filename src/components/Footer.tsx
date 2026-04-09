import { socialLinks } from '../data/socialLinks'

const footerLinks = [
  { label: 'BOOK CONSULTATION', href: '#contact' },
  { label: 'VIEW SERVICES', href: '#services' },
]

export default function Footer() {
  return (
    <footer className="footer2">
      <div className="footer2-curve">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,80 C360,0 1080,0 1440,80 L1440,100 L0,100 Z"
            fill="#0a0f1a"
          />
        </svg>
      </div>

      <div className="footer2-body">
        <div className="footer2-orbs">
          <div className="footer2-orb footer2-orb-1" />
          <div className="footer2-orb footer2-orb-2" />
          <div className="footer2-orb footer2-orb-3" />
          <div className="footer2-orb footer2-orb-4" />
          <div className="footer2-orb footer2-orb-5" />
        </div>
        <div className="footer2-brand">
          <span className="footer2-logo">Komodromos Group</span>
          <span className="footer2-sub">of Companies</span>
        </div>

        <div className="footer2-actions">
          {footerLinks.map((link, i) => (
            <span key={link.label}>
              <a href={link.href}>{link.label}</a>
              {i < footerLinks.length - 1 && (
                <span className="footer2-sep">&mdash;</span>
              )}
            </span>
          ))}
        </div>

        <div className="footer2-socials">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label}>
              {s.svg}
            </a>
          ))}
        </div>

        <div className="footer2-bottom">
          <span>&copy; 2026 Komodromos Group. All rights reserved.</span>
          <span className="footer2-tagline">
            LIFESTYLE &amp; BUSINESS
            <br />
            PREMIUM COMPANIES
            <br />
            EST. 2020
          </span>
        </div>
      </div>
    </footer>
  )
}
