/** Images in `public/images/services/vip-service/air-services/` */
const AIR_IMG = '/images/services/vip-service/air-services'

export type AirCategoryId = 'jets' | 'light'

export const airServicesHero = {
  eyebrow: 'VIP Air & charter',
  /** Display: first word + accent second line for premium split title */
  titleWords: ['Air', 'Services'] as const,
  subtitle: 'Private jets and light aircraft — tailored to your route, schedule, and standards.',
}

export const airCategoryContent: Record<
  AirCategoryId,
  {
    image: string
    imageAlt: string
    title: string
    tagline: string
    lead: string
    highlights: { label: string; text: string }[]
    footnote: string
  }
> = {
  jets: {
    image: `${AIR_IMG}/private-jets.webp`,
    imageAlt: 'Private jet on the apron at dusk',
    title: 'Private Jets',
    tagline: 'Global range, complete cabin control, absolute discretion.',
    lead:
      'From heavy jets for intercontinental travel to super-mids for regional hops, we align aircraft to your schedule, entourage, and in-flight requirements — one brief, one point of contact, end to end.',
    highlights: [
      { label: 'Cabin & routing', text: 'Tailored layouts, meeting space, and sleep systems matched to the mission.' },
      { label: 'Crew & compliance', text: 'Vetted operators, slot coordination, and documentation handled for you.' },
      { label: 'On-ground continuity', text: 'Seamless links to ground transport, security, and hospitality teams.' },
    ],
    footnote: 'Typical use: principal travel, board movements, and time-critical itineraries where commercial schedules do not fit.',
  },
  light: {
    image: `${AIR_IMG}/Light-aircrafts.webp`,
    imageAlt: 'Light aircraft in flight over coastline',
    title: 'Light Aircraft',
    tagline: 'Agile, efficient, and ideal for short sectors and special access.',
    lead:
      'Turboprops and light jets for regional hops, island-hops, and routes where a smaller footprint unlocks the right airfield. We coordinate crew, maintenance windows, and last-minute changes without drama.',
    highlights: [
      { label: 'Access & speed', text: 'Shorter runways, faster turns, and flexible timing for tight programmes.' },
      { label: 'Cost clarity', text: 'Transparent options when a lighter platform is the smarter choice for the leg.' },
      { label: 'Bespoke add-ons', text: 'Cargo for gear, med-evac ready configs, and specialist crew when required.' },
    ],
    footnote: 'Well suited to island archipelagos, multi-stop day trips, and connections where a heavy jet is simply more metal than the mission needs.',
  },
}

const VIP = '/images/services/vip-service'

/** Full “page” section when Light Aircraft is selected — gallery paths are easy to swap in data. */
export const airLightExperiences = {
  headline: 'Light Aircraft Flying Experiences & Exclusive Air Tours',
  intro: [
    'Scenic island hops, private sightseeing circuits, and tailored air tours—flown on platforms chosen for the view, the rhythm of the day, and access to airstrips larger jets can’t use.',
    'Every route is storyboarded with you: take-off times, photo-friendly legs, and on-ground hand-offs to boats, security, and hospitality when the itinerary calls for it.',
  ],
  gallery: [
    {
      src: `${VIP}/Aerophotography.webp`,
      alt: 'Aerial view from light aircraft over coastline',
      caption: 'Coastal passes',
    },
    {
      src: `${AIR_IMG}/Light-aircrafts.webp`,
      alt: 'Light aircraft in flight',
      caption: 'Island & short sectors',
    },
    {
      src: `${VIP}/vip-tour.webp`,
      alt: 'VIP scenic air tour',
      caption: 'Signature air tours',
    },
    {
      src: `${VIP}/Vip-tour-around-the-Island.webp`,
      alt: 'Aircraft on tour over the island',
      caption: 'Exclusive island routes',
    },
    {
      src: `${VIP}/air-services.webp`,
      alt: 'Aviation and concierge coordination',
      caption: 'Door-to-cockpit coordination',
    },
  ] as const,
}

/** Full section when Private Jets is selected — in-flight experience story + gallery. */
export const airJetsInFlight = {
  headline: 'Private Jet In-Flight Services',
  intro: [
    'Luxury Sky / Global Wings elevates the private aviation experience through refined cabin design and exceptional onboard services. Stepping aboard a Luxury Sky / Global Wings aircraft feels like entering an elegant residence in the sky, where every element is thoughtfully curated to deliver superior comfort, efficiency and relaxation throughout the journey.',
  ],
  quote:
    'At the core of the service delivered by Luxury Sky / Global Wings Cabin Hosts is genuine attentiveness and a deep commitment to excellence. Our goal is to ensure you feel completely at ease on board — every request is handled with discretion and precision.',
  sections: [
    {
      title: 'A home above the clouds',
      body:
        'The distinctive cabin concept of Luxury Sky / Global Wings, harmonised across the entire fleet, welcomes travellers worldwide with a warm yet sophisticated ambience. Passengers can stay productive within a fully equipped executive workspace or unwind in a serene family-friendly environment. Each cabin is designed to accommodate diverse travel needs with effortless flexibility.',
    },
    {
      title: 'An elite aviation team',
      body:
        'To guarantee consistently outstanding service, every Luxury Sky / Global Wings flight is operated by a dedicated Cabin Host alongside two highly qualified pilots. Flight crews specialise in a single aircraft type, ensuring exceptional familiarity and instinctive operational performance. Pilots undergo recurrent training twice annually, while Cabin Crew receive advanced hospitality and safety instruction from globally recognised institutions.',
    },
    {
      title: 'Exclusive private dining',
      body:
        'The Private Dining specialists of Luxury Sky / Global Wings curate bespoke culinary experiences on board, offering an extensive range of gourmet options. From signature menus developed by internationally acclaimed chefs and selections sourced from Michelin-starred partner restaurants, to personalised meal plans designed by in-house nutrition experts or your preferred comfort dishes — every detail is tailored to your tastes.',
    },
    {
      title: 'Wine above the world',
      body:
        'Inspired by the pursuit of the perfect glass of wine at cruising altitude, Luxury Sky / Global Wings presents a carefully crafted Wine Program featuring exceptional labels selected for their optimal performance in flight. Drawn from renowned vineyards across the globe, these wines are chosen to complement the unique sensory conditions experienced at high altitude.',
    },
    {
      title: 'Young traveller experiences',
      body:
        'Luxury Sky / Global Wings offers one of the most comprehensive aviation programs designed specifically for younger passengers. Combining immersive entertainment with educational enrichment, each journey can be customised to reflect the child’s age, interests and imagination — transforming travel into a memorable adventure.',
    },
    {
      title: 'Pet travel reimagined',
      body:
        'Developed in collaboration with veterinary professionals, grooming specialists, nutritionists and behavioural experts, the Luxury Sky / Global Wings Pet Travel Program ensures animals travel safely and comfortably. Every aspect is designed to address the practical and emotional needs of travelling with pets.',
    },
    {
      title: 'Wellness in flight',
      body:
        'Cabin environment, rest programmes and discreet attention to how you feel at altitude are woven into every itinerary. From sleep-friendly scheduling and cabin pressurisation considered for recovery to light movement and hydration guided by the crew, the aim is for you to step off the aircraft restored — ready for what comes next.',
    },
  ] as const,
  gallery: [
    {
      src: `${AIR_IMG}/private-jets.webp`,
      alt: 'Private jet on the apron at dusk',
      caption: 'Fleet & dispatch',
    },
    {
      src: `${VIP}/private-jet.webp`,
      alt: 'Private jet cabin interior and seating',
      caption: 'Cabin & residence in the sky',
    },
    {
      src: `${VIP}/vip-hero.webp`,
      alt: 'VIP aviation experience',
      caption: 'Door-to-cockpit continuity',
    },
    {
      src: `${VIP}/luxury-travel.webp`,
      alt: 'Luxury travel and concierge',
      caption: 'Journey, elevated',
    },
  ] as const,
}
