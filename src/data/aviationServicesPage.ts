const COVER = '/images/services/companie-services-cover'
const VIP = '/images/services/vip-service'

/** Full-bleed hero — private aviation visual */
export const AVIATION_HERO_IMAGE = `${VIP}/air-services.webp`

export type AviationServiceIconId =
  | 'plane'
  | 'building'
  | 'compass'
  | 'users'
  | 'handshake'

export type AviationServiceCardDef = {
  title: string
  description: string
  image: string
  icon: AviationServiceIconId
}

export const aviationHeroSubtitle =
  'Bespoke charter, management, and advisory for principals who expect seamless logistics, absolute privacy, and uncompromising safety — worldwide.'

export const aviationServiceCards: AviationServiceCardDef[] = [
  {
    title: 'Private Jet Charter',
    description:
      'On-demand aircraft matched to your route, cabin preference, and schedule — with a single point of contact from booking to landing.',
    image: `${VIP}/Helicopters.webp`,
    icon: 'plane',
  },
  {
    title: 'Aircraft Management',
    description:
      'Operational oversight, crew coordination, and compliance handled with institutional discipline so ownership stays effortless.',
    image: `${COVER}/Global-wings.webp`,
    icon: 'building',
  },
  {
    title: 'Aviation Consulting',
    description:
      'Strategic guidance on fleet decisions, regulatory context, and efficiency — clear recommendations without noise.',
    image: `${VIP}/Aerophotography.webp`,
    icon: 'compass',
  },
  {
    title: 'Crew & Training Solutions',
    description:
      'Competency pathways and talent alignment built around safety culture and the standards your operation demands.',
    image: `${VIP}/Super-luxury.webp`,
    icon: 'users',
  },
  {
    title: 'Charter Brokerage',
    description:
      'Access to vetted operators and transparent sourcing — we negotiate and coordinate so you receive consistency every time.',
    image: `${VIP}/Aerial-banner-towing.webp`,
    icon: 'handshake',
  },
]

export const aviationPremiumSection = {
  eyebrow: 'THE ART OF FLIGHT',
  title: 'Precision in the air. Calm on the ground.',
  body:
    'We curate every journey around three non-negotiables: safety, discretion, and time returned to you. From first briefing to wheels-down, our team operates with the quiet confidence of a private aviation partner — anticipating needs, containing complexity, and protecting your focus.',
  image: `${VIP}/Super-luxury.webp`,
  imageAlt: 'Luxury aviation cabin interior',
}

export type AviationProcessIconId = 'search' | 'layout' | 'plane' | 'headset'

export type AviationProcessStep = {
  title: string
  description: string
  icon: AviationProcessIconId
}

export const aviationProcessSteps: AviationProcessStep[] = [
  {
    title: 'Confidential briefing',
    description:
      'We listen to how you travel, who travels with you, and what success looks like — then shape a discreet scope of work.',
    icon: 'search',
  },
  {
    title: 'Tailored program',
    description:
      'Routing, aircraft class, ground handling, and contingencies are documented in one coherent plan — no fragmented vendors.',
    icon: 'layout',
  },
  {
    title: 'Flawless execution',
    description:
      'Live coordination with operators and crews; proactive updates only when they matter to you.',
    icon: 'plane',
  },
  {
    title: 'Ongoing partnership',
    description:
      'Dedicated liaison for repeat missions, seasonal patterns, and evolving requirements — the relationship compounds over time.',
    icon: 'headset',
  },
]
