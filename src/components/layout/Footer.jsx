import Container from "../ui/Container"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p>Copyright {year} Komodromos Group</p>
        <div className="footer-right">
          <div className="footer-links">
            <a href="/#top">Top</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-socials" aria-label="Footer social links">
            <a
              className="footer-social-link instagram"
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.25 2h9.5A5.25 5.25 0 0 1 22 7.25v9.5A5.25 5.25 0 0 1 16.75 22h-9.5A5.25 5.25 0 0 1 2 16.75v-9.5A5.25 5.25 0 0 1 7.25 2zm0 1.5A3.75 3.75 0 0 0 3.5 7.25v9.5a3.75 3.75 0 0 0 3.75 3.75h9.5a3.75 3.75 0 0 0 3.75-3.75v-9.5a3.75 3.75 0 0 0-3.75-3.75h-9.5zm10.13 2.25a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </a>

            <a
              className="footer-social-link facebook"
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 22v-8.2h2.8l.42-3.3H13.5V8.4c0-.95.27-1.6 1.64-1.6h1.75V3.85A23 23 0 0 0 14.34 3c-2.53 0-4.26 1.54-4.26 4.38v2.12H7.2v3.3h2.88V22h3.42z" />
              </svg>
            </a>

            <a
              className="footer-social-link youtube"
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.58 7.19a2.98 2.98 0 0 0-2.1-2.1C17.63 4.6 12 4.6 12 4.6s-5.63 0-7.48.5a2.98 2.98 0 0 0-2.1 2.1A31.5 31.5 0 0 0 2 12a31.5 31.5 0 0 0 .42 4.81 2.98 2.98 0 0 0 2.1 2.1c1.85.49 7.48.49 7.48.49s5.63 0 7.48-.5a2.98 2.98 0 0 0 2.1-2.1c.28-1.58.42-3.2.42-4.8s-.14-3.23-.42-4.81zM10.2 15.01V8.99L15.4 12l-5.2 3.01z" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
