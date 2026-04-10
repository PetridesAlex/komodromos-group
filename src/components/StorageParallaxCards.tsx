import { useCallback, useRef, useSyncExternalStore } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react'

const STORAGE_PARALLAX_SLIDES: { title: string; image: string }[] = [
  { title: 'FLEXIBLE STORAGE', image: 'https://picsum.photos/seed/s2r-flex/1600/1000' },
  { title: 'YOUR OWN SPACE', image: 'https://picsum.photos/seed/s2r-space/1600/1000' },
  { title: 'LOCAL & EASY TO FIND', image: 'https://picsum.photos/seed/s2r-local/1600/1000' },
  {
    title: 'PERSONAL, FRIENDLY & PROFESSIONAL',
    image: 'https://picsum.photos/seed/s2r-team/1600/1000',
  },
  { title: '24 HR ACCESS', image: 'https://picsum.photos/seed/s2r-access/1600/1000' },
  { title: 'BUSINESS STORAGE', image: 'https://picsum.photos/seed/s2r-biz/1600/1000' },
]

/** Horizontal strip: parallax depth + subtle tilt (no overlapping cards) */
type ParallaxLayout = {
  depth: number
  rotate: number
}

const PARALLAX_LAYOUT: ParallaxLayout[] = [
  { depth: 0.52, rotate: -1.4 },
  { depth: 0.62, rotate: 1.1 },
  { depth: 0.44, rotate: -0.6 },
  { depth: 0.72, rotate: 1.3 },
  { depth: 0.5, rotate: -1.0 },
  { depth: 0.58, rotate: 0.8 },
]

const SPRING = { stiffness: 220, damping: 28, mass: 0.6 }
const PARALLAX_PX = 52
const ROTATE_MOUSE = 5

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )
}

function ParallaxCard({
  title,
  image,
  layout,
  mx,
  my,
  reducedMotion,
  index,
}: {
  title: string
  image: string
  layout: ParallaxLayout
  mx: MotionValue<number>
  my: MotionValue<number>
  reducedMotion: boolean
  index: number
}) {
  const depth = layout.depth
  const tx = useTransform(mx, (v) => (reducedMotion ? 0 : v * PARALLAX_PX * depth))
  const ty = useTransform(my, (v) => (reducedMotion ? 0 : v * PARALLAX_PX * depth))
  const rz = useTransform(mx, (v) =>
    reducedMotion ? layout.rotate : layout.rotate + v * ROTATE_MOUSE * depth,
  )

  return (
    <motion.article
      className="storage-parallax__card"
      style={{
        x: tx,
        y: ty,
        rotate: rz,
      }}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      aria-label={title}
    >
      <div className="storage-parallax__card-inner">
        <img
          src={image}
          alt=""
          className="storage-parallax__card-img"
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className="storage-parallax__card-scrim" aria-hidden />
        <p className="storage-parallax__card-title">{title}</p>
      </div>
    </motion.article>
  )
}

export default function StorageParallaxCards() {
  const stageRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smoothMx = useSpring(mx, reducedMotion ? { stiffness: 500, damping: 100 } : SPRING)
  const smoothMy = useSpring(my, reducedMotion ? { stiffness: 500, damping: 100 } : SPRING)

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (reducedMotion) return
      const el = stageRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      if (r.width < 1 || r.height < 1) return
      mx.set((e.clientX - r.left) / r.width - 0.5)
      my.set((e.clientY - r.top) / r.height - 0.5)
    },
    [mx, my, reducedMotion],
  )

  const onLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  return (
    <div className="storage-parallax">
      <div className="storage-parallax__frame">
        <div className="storage-parallax__accent" aria-hidden />
        <div
          ref={stageRef}
          className="storage-parallax__stage"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          aria-label="Storage2Rent service highlights. Scroll horizontally for all cards; move the pointer for parallax."
        >
          <div className="storage-parallax__fog" aria-hidden />
          <div className="storage-parallax__track">
            {STORAGE_PARALLAX_SLIDES.map((slide, i) => (
              <ParallaxCard
                key={slide.title}
                title={slide.title}
                image={slide.image}
                layout={PARALLAX_LAYOUT[i]!}
                mx={smoothMx}
                my={smoothMy}
                reducedMotion={reducedMotion}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
