const COVER = '/images/services/companie-services-cover'
const POOL_PAGE_ASSETS = '/images/services/swimming-pool-garden-services'

/** Shared pool photography used across Pool & Garden sections (no unrelated service covers). */
const POOL_CARD_HERO = `${POOL_PAGE_ASSETS}/pool-hero.webp`
const POOL_CARD_ROCK = `${POOL_PAGE_ASSETS}/reconstituted-rock-pool-feature.png`
const POOL_CARD_POOL_1 = `${COVER}/Swimming-pool%201.webp`
const POOL_CARD_POOL_2 = `${COVER}/Swimming-ppool.webp`

export type PoolGardenShowcaseItem = {
  label: string
  imageSrc: string
}

/** Pool Categories — primary hydraulic / form types */
export const poolCategories: PoolGardenShowcaseItem[] = [
  {
    label: 'Overflow',
    imageSrc: `${COVER}/Swimming-ppool.webp`,
  },
  {
    label: 'Skimmer',
    imageSrc: `${COVER}/Swimming-pool%201.webp`,
  },
  {
    label: 'Infinity',
    imageSrc: POOL_CARD_HERO,
  },
]

export type PoolServiceRepairItem = {
  label: string
  imageSrc: string
}

/** Service, renovation & repair — full capability matrix */
export const poolServiceRenovationRepair: PoolServiceRepairItem[] = [
  {
    label: 'Fountains',
    imageSrc: POOL_CARD_HERO,
  },
  {
    label: 'Cooling and heating',
    imageSrc: POOL_CARD_POOL_1,
  },
  {
    label: 'Reconstituted rock features',
    imageSrc: POOL_CARD_ROCK,
  },
  {
    label: 'Swim spas',
    imageSrc: POOL_CARD_POOL_2,
  },
  {
    label: 'Waterparks',
    imageSrc: POOL_CARD_HERO,
  },
  {
    label: 'Bar and stools',
    imageSrc: POOL_CARD_POOL_2,
  },
  {
    label: 'Hotels & resorts',
    imageSrc: POOL_CARD_HERO,
  },
  {
    label: 'Service and maintenance',
    imageSrc: POOL_CARD_POOL_1,
  },
  {
    label: 'Chemicals',
    imageSrc: POOL_CARD_POOL_2,
  },
]

/** Pool internal linings — finishes (same pool imagery vocabulary as other pool strips) */
export const poolInternalLinings: PoolGardenShowcaseItem[] = [
  {
    label: 'Liners',
    imageSrc: POOL_CARD_POOL_1,
  },
  {
    label: 'Mosaic',
    imageSrc: POOL_CARD_ROCK,
  },
  {
    label: 'Ceramic',
    imageSrc: POOL_CARD_HERO,
  },
]

export const poolGardenPillars = [
  {
    key: 'residential',
    title: 'Residential pool & garden',
    body:
      'Private homes, villas, and estates — from first concept to handover, with outdoor living, lighting, and planting in one coherent plan.',
  },
  {
    key: 'commercial',
    title: 'Commercial & hospitality',
    body:
      'Pools, spas, and exterior amenities for hotels, clubs, and developments — engineered for duty cycles, compliance, and guest experience.',
  },
  {
    key: 'construction',
    title: 'Construction & renewal',
    body:
      'New builds, renovations, and structural interventions — coordinated with shell, MEP, and landscape so timelines and quality stay aligned.',
  },
]
