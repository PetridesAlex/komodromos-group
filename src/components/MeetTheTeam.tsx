import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface TeamMember {
  name: string
  role: string
  bio: string
}

const team: TeamMember[] = [
  {
    name: 'Andreas Komodromos',
    role: 'Group Chairman',
    bio: 'Visionary leader driving strategy and governance across the Komodromos Group portfolio with over two decades of executive experience.',
  },
  {
    name: 'Maria Petridou',
    role: 'Executive Director',
    bio: 'Oversees operations and expansion initiatives, ensuring each company delivers premium standards and sustainable growth.',
  },
  {
    name: 'Christos Alexandrou',
    role: 'Head of Development',
    bio: 'Leads Astreal Developers and capital projects, turning opportunity analysis into high-value real estate portfolios.',
  },
  {
    name: 'Elena Demetriou',
    role: 'Legal & Compliance',
    bio: 'Manages regulatory frameworks, dispute mediation, and corporate compliance across all group entities.',
  },
  {
    name: 'Nikos Stavrou',
    role: 'Finance Director',
    bio: 'Directs financial strategy, investment advisory, and tax planning services with institutional precision.',
  },
]

export default function MeetTheTeam() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function startAutoplay() {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % team.length)
    }, 4000)
  }

  useEffect(() => {
    startAutoplay()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  function handleSelect(index: number) {
    setActiveIndex(index)
    startAutoplay()
  }

  const active = team[activeIndex]
  const next = team[(activeIndex + 1) % team.length]

  return (
    <section className="section team-section">
      <div className="container team-grid">
        <div className="team-sidebar">
          <div className="team-names">
            {team.map((member, i) => (
              <button
                key={member.name}
                className={`team-name-btn ${i === activeIndex ? 'team-name-active' : ''}`}
                onClick={() => handleSelect(i)}
              >
                <span className="team-dot" />
                <span>{member.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="team-main">
          <div className="team-header">
            <p className="eyebrow">LEADERSHIP</p>
            <h2>Meet the Team</h2>
            <p className="section-sub">
              The people behind every premium decision
            </p>
          </div>

          <div className="team-cards-row">
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${activeIndex}`}
                className="team-member-card team-member-card-main"
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="team-member-avatar">
                  <div className="team-member-avatar-ring">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="56" height="56">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                <h3>{active.name}</h3>
                <span className="team-member-role">{active.role}</span>
                <p>{active.bio}</p>
                <div className="team-member-icons">
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" aria-label="Email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`next-${activeIndex}`}
                className="team-member-card team-member-card-next"
                initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="team-member-avatar team-member-avatar-sm">
                  <div className="team-member-avatar-ring">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" width="44" height="44">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                <h3>{next.name}</h3>
                <span className="team-member-role">{next.role}</span>
                <div className="team-member-icons">
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" aria-label="Email">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="team-progress">
            {team.map((_, i) => {
              let cls = 'team-progress-bar'
              if (i === activeIndex) cls += ' team-progress-active'
              else if (i < activeIndex) cls += ' team-progress-done'
              return (
                <div
                  key={`${i}-${activeIndex}`}
                  className={cls}
                  onClick={() => handleSelect(i)}
                >
                  <div className="team-progress-fill" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
