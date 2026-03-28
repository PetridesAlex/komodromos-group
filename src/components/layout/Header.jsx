import Container from "../ui/Container"
import StaggeredMenu from "../ui/StaggeredMenu"
import { servicesData } from "../../data/services"

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "#top", description: "Main overview" },
  { label: "About", ariaLabel: "Learn about us", link: "#about", description: "Who we are" },
  { label: "Services", ariaLabel: "View our services", link: "#services", description: "Our group divisions" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact", description: "Start a conversation" },
]

const socialItems = [
  { label: "WhatsApp", link: "https://wa.me/" },
  { label: "Telegram", link: "https://t.me/" },
  { label: "Instagram", link: "https://instagram.com/" },
  { label: "Facebook", link: "https://facebook.com/" },
  { label: "YouTube", link: "https://youtube.com/" },
]

const companyItems = servicesData.map((service) => ({
  id: service.id,
  title: service.title,
  category: service.category,
  link: "#services",
}))

function Header() {
  const premiumHighlights = [
    { label: "VIP & Lifestyle Services", tone: "vip" },
    { label: "Real Estate Development & Investment", tone: "estate" },
    { label: "Business Consulting & Advisory", tone: "consulting" },
    { label: "Legal & Dispute Resolution", tone: "legal" },
  ]

  return (
    <header className="site-header">
      <Container className="header-inner">
        <a className="brand" href="#top" aria-label="Komodromos Group">
          <span className="brand-text">KOMODROMOS GROUP</span>
        </a>

        <div className="header-actions">
          <nav className="desktop-nav" aria-label="Main Navigation">
            {menuItems.map((item) => (
              <a key={item.label} href={item.link}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="social-links" aria-label="Header social links">
            <a
              className="social-link whatsapp"
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16.03 5.3c-5.9 0-10.7 4.8-10.7 10.69 0 1.9.5 3.76 1.45 5.39L5.3 26.7l5.45-1.43a10.66 10.66 0 0 0 5.28 1.35h.01c5.9 0 10.7-4.8 10.7-10.69 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 0 0-7.58-3.08zm0 19.5h-.01a8.82 8.82 0 0 1-4.49-1.22l-.32-.19-3.24.85.86-3.15-.2-.33a8.83 8.83 0 0 1-1.35-4.72c0-4.9 3.99-8.88 8.9-8.88 2.37 0 4.6.92 6.27 2.58a8.8 8.8 0 0 1 2.6 6.3c0 4.9-3.99 8.88-8.92 8.88zm4.87-6.64c-.27-.14-1.58-.78-1.82-.87-.24-.1-.41-.14-.58.13-.17.27-.67.86-.82 1.03-.15.17-.3.2-.56.07-.27-.13-1.12-.4-2.12-1.27-.79-.7-1.32-1.56-1.47-1.82-.15-.27-.02-.41.11-.54.12-.12.27-.3.4-.44.14-.14.18-.24.27-.41.1-.17.05-.31-.02-.44-.07-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.43h-.49c-.17 0-.44.07-.67.31-.22.24-.86.85-.86 2.07s.88 2.4 1 2.57c.12.17 1.74 2.65 4.2 3.72.58.25 1.03.4 1.38.5.58.18 1.11.15 1.53.09.47-.07 1.45-.59 1.66-1.16.2-.58.2-1.07.14-1.16-.05-.1-.22-.15-.49-.28z" />
              </svg>
            </a>

            <a
              className="social-link telegram"
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 4.2a1 1 0 0 0-1.04-.14L2.66 11.2a1 1 0 0 0 .1 1.88l4.26 1.42 1.56 4.98a1 1 0 0 0 1.77.27l2.34-3.15 3.8 2.82a1 1 0 0 0 1.58-.58L21.98 5a1 1 0 0 0-.38-.8zM9.33 15.26l-.56 2.15-.9-2.9 8.27-5.13-6.8 5.88z" />
              </svg>
            </a>
          </div>

          <div className="mobile-menu-trigger">
            <StaggeredMenu
              position="right"
              items={menuItems}
              companyItems={companyItems}
              socialItems={socialItems}
              displaySocials
              displayItemNumbering={false}
              menuButtonColor="#ffffff"
              openMenuButtonColor="#ffffff"
              changeMenuColorOnOpen={true}
              colors={["#3c2f1d", "#8f7338"]}
              accentColor="#cfa65a"
              onMenuOpen={() => console.log("Menu opened")}
              onMenuClose={() => console.log("Menu closed")}
            />
          </div>
        </div>
      </Container>
      <div className="premium-bar" aria-label="Premium services highlights">
        <Container className="premium-bar-inner">
          <span className="premium-bar-title">Premium Services</span>
          <div className="premium-bar-items">
            {premiumHighlights.map((item) => (
              <span
                key={item.label}
                className={`premium-bar-item premium-bar-item-${item.tone}`}
              >
                {item.label}
              </span>
            ))}
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header
