import { Link } from 'react-router-dom'
import { MAIN_LOGO } from '../data/mainLogo'

export default function SiteLogo() {
  return (
    <Link to="/" className="logo">
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
