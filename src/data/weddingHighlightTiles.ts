/** Highlight grid for Wedding Sky — curated tiles with distinct imagery and actions. */

export type WeddingHighlightTile = {
  id: string
  /** Short label above the title */
  kicker: string
  title: string
  titleEl: string
  image: string
  /** Optional in-page anchor (e.g. #wedding-packages-heading) */
  hashHref?: string
  /** Navigate to contact with prefilled interest */
  contact?: boolean
}

export const weddingHighlightTiles: WeddingHighlightTile[] = [
  {
    id: 'cyprus-destinations',
    kicker: 'Destinations',
    title: 'Island-wide ceremonies & receptions',
    titleEl: 'Τελετές και δεξιώσεις σε όλη την Κύπρο',
    image: '/images/services/companie-services-cover/wedding-sky.webp',
  },
  {
    id: 'planning',
    kicker: 'Planning',
    title: 'Concept, timeline & vendor orchestration',
    titleEl: 'Κονσεπτ, χρονοδιάγραμμα και συντονισμός συνεργατών',
    image: '/images/services/vip-service/wedding-package.webp',
  },
  {
    id: 'bridal-style',
    kicker: 'Style',
    title: 'Bridal couture & partner ateliers',
    titleEl: 'Νυφικό στυλ και συνεργαζόμενα ατελιέ',
    image: '/images/services/companie-services-cover/Bridal.webp',
  },
  {
    id: 'production',
    kicker: 'Production',
    title: 'Venue design, lighting & run of show',
    titleEl: 'Χώρος, φωτισμός και ροή εκδήλωσης',
    image: '/images/services/companie-services-cover/Jan-chapelle .webp',
  },
  {
    id: 'guests',
    kicker: 'Guests',
    title: 'Hospitality, travel cues & seating craft',
    titleEl: 'Φιλοξενία, μετακινήσεις και καθίσματα',
    image: '/images/services/vip-service/Super-luxury.webp',
  },
  {
    id: 'stories',
    kicker: 'Stories',
    title: 'Words from couples we walked beside',
    titleEl: 'Λόγια ζευγαριών που μας εμπιστεύτηκαν',
    image: '/images/services/companie-services-cover/wedding-sky.webp',
    hashHref: '#wedding-testimonials-heading',
  },
  {
    id: 'packages',
    kicker: 'Packages',
    title: 'Tiers from essential to fully bespoke',
    titleEl: 'Επίπεδα από το βασικό έως το πλήρως προσαρμοσμένο',
    image: '/images/services/vip-service/wedding-package.webp',
    hashHref: '#wedding-packages-heading',
  },
  {
    id: 'start',
    kicker: 'Start',
    title: 'Book a private consultation',
    titleEl: 'Κλείστε ιδιωτική συνάντηση',
    image: '/images/services/companie-services-cover/Bridal.webp',
    contact: true,
  },
]
