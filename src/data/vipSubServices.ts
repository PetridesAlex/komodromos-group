/** VIP detail page grid — cover images in public/images/services/vip-service/ */
const base = '/images/services/vip-service'

export type VipSubServiceItem = {
  slug: string
  title: string
  image: string
}

export const vipSubServices: VipSubServiceItem[] = [
  {
    slug: 'maritime',
    title: 'Maritime Services',
    image: `${base}/luxury-yacht.webp`,
  },
  {
    slug: 'air',
    title: 'Air Services',
    image: `${base}/air-services.webp`,
  },
  {
    slug: 'super-luxury-cars',
    title: 'Super & Luxury Cars',
    image: `${base}/lamporghini.webp`,
  },
  {
    slug: 'limousines',
    title: 'Limousines',
    image: `${base}/limouzine.webp`,
  },
  /** General VIP / lifestyle concierge — `public/images/services/vip-service/private-jet.webp` */
  {
    slug: 'vip-concierge',
    title: 'VIP Services',
    image: `${base}/private-jet.webp`,
  },
  {
    slug: 'fishing-scuba',
    title: 'Fishing & Scuba Diving',
    image: `${base}/fishing-scuba-diving.webp`,
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    image: `${base}/Real-estate.webp`,
  },
  {
    slug: 'casino',
    title: 'Casino',
    image: `${base}/cazino.webp`,
  },
  {
    slug: 'vip-tour-island',
    title: 'VIP Tour Around the Island',
    image: `${base}/vip-mercendes-tour.webp`,
  },
]
