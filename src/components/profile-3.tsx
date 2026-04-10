import { useId } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { socialLinks } from '../data/socialLinks'

const PROFILE_IMG = '/images/services/profile/profile-giannos.webp'

const rayLines = Array.from({ length: 28 }, (_, i) => {
  const angle = (i * Math.PI * 2) / 28
  const r = 92
  return {
    x2: 100 + Math.cos(angle) * r,
    y2: 100 + Math.sin(angle) * r,
    key: i,
  }
})

export default function Profile3() {
  const sunburstGradId = `profile-sun-${useId().replace(/:/g, '')}`
  const instagram = socialLinks.find((s) => s.label === 'Instagram')
  const facebook = socialLinks.find((s) => s.label === 'Facebook')
  const igHref = instagram?.href ?? '#'
  const fbHref = facebook?.href ?? '#'
  const externalProps = (href: string) =>
    href.startsWith('http')
      ? { target: '_blank' as const, rel: 'noopener noreferrer' as const }
      : {}

  return (
    <motion.article
      className="profile-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="profile-3__head">
        <div className="profile-3__head-glow" aria-hidden />
        <svg
          className="profile-3__sunburst"
          viewBox="0 0 200 200"
          aria-hidden
        >
          <defs>
            <radialGradient id={sunburstGradId} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(165, 200, 232, 0.14)" />
              <stop offset="55%" stopColor="rgba(197, 160, 89, 0.06)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="98" fill={`url(#${sunburstGradId})`} />
          <circle
            cx="100"
            cy="100"
            r="96"
            fill="none"
            stroke="rgba(255,255,255,0.09)"
            strokeWidth="0.85"
          />
          {rayLines.map(({ key, x2, y2 }) => (
            <line
              key={key}
              x1="100"
              y1="100"
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.055)"
              strokeWidth="0.65"
            />
          ))}
        </svg>
        <div className="profile-3__avatar-ring">
          <img
            src={PROFILE_IMG}
            alt="Giannos Komodromos"
            className="profile-3__avatar"
            width={152}
            height={152}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <p className="profile-3__kicker">Business consulting</p>
      <h3 id="profile-card-title" className="profile-3__name">
        Giannos Komodromos
      </h3>
      <div className="profile-3__rule" aria-hidden />
      <p className="profile-3__bio">
        Business consultant focused on strategic clarity, precision in numbers,
        and outcomes you can defend — advisory that respects both the letter of the
        law and the reality of your business.
      </p>

      <div className="profile-3__footer">
        <div className="profile-3__social">
          {instagram && (
            <a
              href={igHref}
              className="profile-3__social-link"
              aria-label={instagram.label}
              {...externalProps(igHref)}
            >
              <span className="profile-3__social-icon" aria-hidden>
                {instagram.svg}
              </span>
            </a>
          )}
          {facebook && (
            <a
              href={fbHref}
              className="profile-3__social-link"
              aria-label={facebook.label}
              {...externalProps(fbHref)}
            >
              <span className="profile-3__social-icon" aria-hidden>
                {facebook.svg}
              </span>
            </a>
          )}
        </div>
        <Link to="/contact" className="profile-3__follow">
          <span className="profile-3__follow-shine" aria-hidden />
          Follow
        </Link>
      </div>
    </motion.article>
  )
}
