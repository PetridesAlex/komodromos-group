import { socialLinks } from '../data/socialLinks'

type Props = { variant: 'desktop' | 'mobile' }

export default function TopbarSocialLinks({ variant }: Props) {
  if (variant === 'desktop') {
    return (
      <div className="socials desktop-socials">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className={`social ${s.navClass}`}
          >
            {s.svg}
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className="nav-mobile-socials">
      {socialLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="nav-social-btn"
        >
          {s.svg}
        </a>
      ))}
    </div>
  )
}
