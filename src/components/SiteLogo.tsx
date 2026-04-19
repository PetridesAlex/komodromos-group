import { Link, useLocation } from 'react-router-dom'
import { MAIN_LOGO } from '../data/mainLogo'

export default function SiteLogo() {
  const location = useLocation()

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== '/') return
    e.preventDefault()
    document.getElementById('home')?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    })
    window.history.replaceState(null, '', '/#home')
  }

  return (
    <Link
      to={{ pathname: '/', hash: 'home' }}
      className="logo"
      onClick={handleLogoClick}
    >
      <img
        src={MAIN_LOGO.src}
        alt="Komodromos Group"
        className="logo__img"
        width={MAIN_LOGO.width}
        height={MAIN_LOGO.height}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  )
}
