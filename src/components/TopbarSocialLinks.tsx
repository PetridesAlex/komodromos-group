import { socialLinks } from '../data/socialLinks'

type Props = { variant: 'desktop' | 'mobile' | 'contact' }

export default function TopbarSocialLinks({ variant }: Props) {
  if (variant === 'desktop' || variant === 'contact') {
    const wrapClass =
      variant === 'contact' ? 'socials contact-topbar-socials' : 'socials desktop-socials'
    return (
      <div className={wrapClass}>
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
