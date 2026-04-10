export type ServiceCard = {
  slug: string
  eyebrow: string
  title: string
  description: string
  tags: string[]
  image: string
}

export const serviceCards: ServiceCard[] = [
  {
    slug: 'vip',
    eyebrow: 'PRIVATE CLIENT EXPERIENCE',
    title: 'VIP Services',
    description:
      'Discreet lifestyle management crafted for individuals and families who expect precision, privacy, and exceptional standards.',
    tags: ['PRIVATE CONCIERGE', 'TRAVEL PLANNING'],
    image: '/images/services/vip-service.webp',
  },
  {
    slug: 'wedding',
    eyebrow: 'SIGNATURE OCCASIONS',
    title: 'Wedding Services',
    description:
      'Concept-to-execution event direction for milestone celebrations, destination weddings, and executive experiences.',
    tags: ['CREATIVE DIRECTION', 'GUEST MANAGEMENT', 'VENUE PRODUCTION'],
    image: '/images/services/wedding-service.webp',
  },
  {
    slug: 'pool',
    eyebrow: 'ARCHITECTURAL OUTDOOR DESIGN',
    title: 'Swimming Pool & Garden Services',
    description:
      'Tailored exterior environments designed for leisure, hospitality, and long-term property value.',
    tags: ['POOL CONCEPTS', 'LANDSCAPE PLANNING', 'OUTDOOR INFRASTRUCTURE'],
    image: '/images/services/swimming-garden-service.webp',
  },
  {
    slug: 'storage',
    eyebrow: 'SECURE LOGISTICS',
    title: 'Storage2Rent',
    description:
      'Enterprise-grade warehousing and container capacity for businesses that need space, security, and predictable monthly terms.',
    tags: ['INVENTORY FLOW', 'SECURE STORAGE', 'DISTRIBUTION SUPPORT'],
    image: '/images/services/rent-storage-service.webp',
  },
  {
    slug: 'consulting',
    eyebrow: 'STRATEGIC ADVISORY',
    title: "Business Consultant's",
    description:
      'Executive advisory services helping organizations scale with clarity, governance, and market confidence.',
    tags: ['STRATEGY DESIGN', 'GROWTH MODELING', 'PERFORMANCE OVERSIGHT'],
    image: '/images/services/business-consultant-service.webp',
  },
  {
    slug: 'aviation',
    eyebrow: 'AVIATION EXCELLENCE',
    title: 'Aviation Agency Services',
    description:
      'Specialized aviation solutions and development pathways for professionals and organizations in the sector.',
    tags: ['CREW DEVELOPMENT', 'FLIGHT SUPPORT', 'CAREER MENTORING'],
    image: '/images/services/aviation-service.webp',
  },
  {
    slug: 'astreal',
    eyebrow: 'CAPITAL & DEVELOPMENT',
    title: 'Astreal Developers',
    description:
      'End-to-end real estate structuring, from opportunity analysis to development strategy and portfolio growth.',
    tags: ['PROJECT PLANNING', 'INVESTMENT ADVISORY', 'ASSET MANAGEMENT'],
    image: '/images/services/astreal-developer-service.webp',
  },
  {
    slug: 'hr',
    eyebrow: 'PEOPLE & CULTURE',
    title: 'Human Resources Management',
    description:
      'Human capital services that align talent strategy, leadership development, and organizational outcomes.',
    tags: ['EXECUTIVE SEARCH', 'HR FRAMEWORKS', 'TALENT DEVELOPMENT'],
    image: '/images/services/human-resources-service.webp',
  },
  {
    slug: 'tax',
    eyebrow: 'CORPORATE COMPLIANCE',
    title: 'Tax & Accounting Services',
    description:
      'Trusted financial and legal support ensuring transparent operations, compliant structures, and informed decisions.',
    tags: ['TAX PLANNING', 'FINANCIAL REPORTING', 'REGULATORY ADVISORY'],
    image: '/images/services/tax-news-service.webp',
  },
  {
    slug: 'janchapelle',
    eyebrow: 'BRIDAL & COUTURE',
    title: 'Janchapelle — All About Weddings',
    description:
      'One of the leading Wedding Dress houses. High-end fabrications and meticulous sewing techniques for brides who demand perfection.',
    tags: ['BRIDAL COUTURE', 'CUSTOM FITTINGS', 'LUXURY FABRICS'],
    image: '/images/services/Janchapelle-service.webp',
  },
  {
    slug: 'adr-mediation',
    eyebrow: 'DISPUTE RESOLUTION',
    title: 'A.D.R Dispute Mediation Center',
    description:
      'Professional mediation and arbitration services. We see solutions where others see problems — confidential, impartial, and results-driven.',
    tags: ['MEDIATION', 'ARBITRATION', 'CONFLICT RESOLUTION'],
    image: '/images/services/dispute-mediation-center.webp',
  },
]

export function getServiceBySlug(slug: string | undefined) {
  if (!slug) return undefined
  return serviceCards.find((c) => c.slug === slug)
}
