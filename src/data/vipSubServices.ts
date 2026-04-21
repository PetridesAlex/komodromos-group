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
    image: `${base}/Maritime-services.webp`,
  },
  {
    slug: 'air',
    title: 'Air Services',
    image: `${base}/Air-services.webp`,
  },
  {
    slug: 'super-luxury-cars',
    title: 'Super & Luxury Cars',
    image: `${base}/Super-luxury.webp`,
  },
  {
    slug: 'limousines',
    title: 'Limousines',
    image: `${base}/limousines.webp`,
  },
  {
    slug: 'vip-concierge',
    title: 'VIP Services',
    image: `${base}/vip-services.webp`,
  },
  {
    slug: 'fishing-scuba',
    title: 'Fishing & Scuba Diving',
    image: `${base}/Fishing-scuba-diving.webp`,
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    image: `${base}/Real-estate.webp`,
  },
  {
    slug: 'casino',
    title: 'Casino',
    image: `${base}/Casino.webp`,
  },
  {
    slug: 'vip-tour-island',
    title: 'VIP Tour Around the Island',
    image: `${base}/Vip-tour-around-the-Island.webp`,
  },
]
