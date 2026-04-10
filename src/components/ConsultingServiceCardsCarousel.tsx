import { useCallback, useEffect, useRef, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type ConsultingServiceCarouselItem = {
  id: string
  title: string
  icon: LucideIcon
}

type Props = {
  items: ConsultingServiceCarouselItem[]
  onOpenDetails: (id: string) => void
}

function getCards(viewport: HTMLDivElement): HTMLElement[] {
  return Array.from(
    viewport.querySelectorAll<HTMLElement>('.consulting-service-card'),
  )
}

/** Index of the card whose center is closest to the scroll viewport center */
function getActiveIndexFromLayout(viewport: HTMLDivElement): number {
  const cards = getCards(viewport)
  if (cards.length === 0) return 0
  const v = viewport.getBoundingClientRect()
  const mid = v.left + v.width / 2
  let best = 0
  let bestDist = Infinity
  cards.forEach((card, i) => {
    const r = card.getBoundingClientRect()
    const c = r.left + r.width / 2
    const d = Math.abs(c - mid)
    if (d < bestDist) {
      bestDist = d
      best = i
    }
  })
  return best
}

export default function ConsultingServiceCardsCarousel({
  items,
  onOpenDetails,
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateFromScroll = useCallback(() => {
    const vp = viewportRef.current
    if (!vp) return
    const maxScroll = Math.max(0, vp.scrollWidth - vp.clientWidth)
    setCanPrev(vp.scrollLeft > 4)
    setCanNext(vp.scrollLeft < maxScroll - 4)
    setActiveIndex(getActiveIndexFromLayout(vp))
  }, [])

  useEffect(() => {
    const vp = viewportRef.current
    if (!vp) return
    updateFromScroll()
    vp.addEventListener('scroll', updateFromScroll, { passive: true })
    const ro = new ResizeObserver(() => updateFromScroll())
    ro.observe(vp)
    return () => {
      vp.removeEventListener('scroll', updateFromScroll)
      ro.disconnect()
    }
  }, [updateFromScroll])

  const scrollToIndex = (index: number) => {
    const vp = viewportRef.current
    if (!vp) return
    const cards = getCards(vp)
    const card = cards[index]
    if (!card) return
    const maxScroll = Math.max(0, vp.scrollWidth - vp.clientWidth)
    const target = Math.min(card.offsetLeft, maxScroll)
    vp.scrollTo({
      left: target,
      behavior: 'auto',
    })
    requestAnimationFrame(() => updateFromScroll())
  }

  const scrollByCards = (direction: -1 | 1) => {
    const vp = viewportRef.current
    if (!vp) return
    const i = getActiveIndexFromLayout(vp)
    const next = Math.min(
      items.length - 1,
      Math.max(0, i + direction),
    )
    scrollToIndex(next)
  }

  return (
    <div
      className="consulting-service-cards-carousel"
      aria-roledescription="carousel"
      aria-label="Service areas"
    >
      <button
        type="button"
        className="consulting-service-cards-carousel__nav consulting-service-cards-carousel__nav--prev"
        aria-label="Previous services"
        disabled={!canPrev}
        onClick={() => scrollByCards(-1)}
      >
        <ChevronLeft size={22} strokeWidth={2} aria-hidden />
      </button>
      <button
        type="button"
        className="consulting-service-cards-carousel__nav consulting-service-cards-carousel__nav--next"
        aria-label="Next services"
        disabled={!canNext}
        onClick={() => scrollByCards(1)}
      >
        <ChevronRight size={22} strokeWidth={2} aria-hidden />
      </button>

      <div
        ref={viewportRef}
        className="consulting-service-cards-carousel__viewport"
        tabIndex={0}
        role="region"
        aria-label="Swipe or use arrows to browse service areas"
      >
        <div className="consulting-service-cards-carousel__track">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.id}
                className="consulting-service-card consulting-service-card--carousel"
              >
                <div className="consulting-service-card__icon" aria-hidden>
                  <Icon strokeWidth={1.35} size={28} />
                </div>
                <div className="consulting-service-card__body">
                  <h3 className="consulting-service-card__title">{item.title}</h3>
                </div>
                <button
                  type="button"
                  className="consulting-service-card__details"
                  onClick={() => onOpenDetails(item.id)}
                >
                  View details
                </button>
              </article>
            )
          })}
        </div>
      </div>

      <div
        className="consulting-service-cards-carousel__dots"
        role="group"
        aria-label="Slide indicators"
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-current={i === activeIndex ? 'true' : undefined}
            aria-label={`Go to ${item.title}`}
            className={
              i === activeIndex
                ? 'consulting-service-cards-carousel__dot consulting-service-cards-carousel__dot--active'
                : 'consulting-service-cards-carousel__dot'
            }
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
