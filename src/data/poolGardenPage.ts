const COVER = '/images/services/companie-services-cover'

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
    imageSrc: `${COVER}/luxury-travel.webp`,
  },
]

export type PoolServiceRepairItem = {
  label: string
  imageSrc: string
}

/** Service, renovation & repair — full capability matrix */
export const poolServiceRenovationRepair: PoolServiceRepairItem[] = [
  { label: 'Fountains', imageSrc: `${COVER}/wedding-sky.webp` },
  { label: 'Cooling and heating', imageSrc: `${COVER}/Global-wings.webp` },
  {
    label: 'Reconstituted rock features',
    imageSrc:
      '/images/services/swimming-pool-garden-services/reconstituted-rock-pool-feature.png',
  },
  { label: 'Swim spas', imageSrc: `${COVER}/Swimming-pool%201.webp` },
  { label: 'Waterparks', imageSrc: `${COVER}/Storage-rent.webp` },
  { label: 'Bar and stools', imageSrc: `${COVER}/Swimming-ppool.webp` },
  {
    label: 'Hotels & resorts',
    imageSrc: `${COVER}/justice-law.webp`,
  },
  {
    label: 'Service and maintenance',
    imageSrc: `${COVER}/tax.webp`,
  },
  {
    label: 'Chemicals',
    imageSrc: `${COVER}/Jan-chapelle%20.webp`,
  },
]

/** Pool internal linings — finishes */
export const poolInternalLinings: PoolGardenShowcaseItem[] = [
  {
    label: 'Liners',
    imageSrc: `${COVER}/Bridal.webp`,
  },
  {
    label: 'Mosaic',
    imageSrc: `${COVER}/11%20The-circle.webp`,
  },
  {
    label: 'Ceramic',
    imageSrc: `${COVER}/10%20Business-consulting.webp`,
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
