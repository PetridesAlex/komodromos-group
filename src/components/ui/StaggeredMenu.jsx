import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import "./StaggeredMenu.css"

const SOCIAL_ICON_PATHS = {
  whatsapp:
    "M16.03 5.3c-5.9 0-10.7 4.8-10.7 10.69 0 1.9.5 3.76 1.45 5.39L5.3 26.7l5.45-1.43a10.66 10.66 0 0 0 5.28 1.35h.01c5.9 0 10.7-4.8 10.7-10.69 0-2.85-1.11-5.53-3.13-7.55a10.6 10.6 0 0 0-7.58-3.08zm0 19.5h-.01a8.82 8.82 0 0 1-4.49-1.22l-.32-.19-3.24.85.86-3.15-.2-.33a8.83 8.83 0 0 1-1.35-4.72c0-4.9 3.99-8.88 8.9-8.88 2.37 0 4.6.92 6.27 2.58a8.8 8.8 0 0 1 2.6 6.3c0 4.9-3.99 8.88-8.92 8.88zm4.87-6.64c-.27-.14-1.58-.78-1.82-.87-.24-.1-.41-.14-.58.13-.17.27-.67.86-.82 1.03-.15.17-.3.2-.56.07-.27-.13-1.12-.4-2.12-1.27-.79-.7-1.32-1.56-1.47-1.82-.15-.27-.02-.41.11-.54.12-.12.27-.3.4-.44.14-.14.18-.24.27-.41.1-.17.05-.31-.02-.44-.07-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.43h-.49c-.17 0-.44.07-.67.31-.22.24-.86.85-.86 2.07s.88 2.4 1 2.57c.12.17 1.74 2.65 4.2 3.72.58.25 1.03.4 1.38.5.58.18 1.11.15 1.53.09.47-.07 1.45-.59 1.66-1.16.2-.58.2-1.07.14-1.16-.05-.1-.22-.15-.49-.28z",
  telegram:
    "M21.6 4.2a1 1 0 0 0-1.04-.14L2.66 11.2a1 1 0 0 0 .1 1.88l4.26 1.42 1.56 4.98a1 1 0 0 0 1.77.27l2.34-3.15 3.8 2.82a1 1 0 0 0 1.58-.58L21.98 5a1 1 0 0 0-.38-.8zM9.33 15.26l-.56 2.15-.9-2.9 8.27-5.13-6.8 5.88z",
  instagram:
    "M7.25 2h9.5A5.25 5.25 0 0 1 22 7.25v9.5A5.25 5.25 0 0 1 16.75 22h-9.5A5.25 5.25 0 0 1 2 16.75v-9.5A5.25 5.25 0 0 1 7.25 2zm0 1.5A3.75 3.75 0 0 0 3.5 7.25v9.5a3.75 3.75 0 0 0 3.75 3.75h9.5a3.75 3.75 0 0 0 3.75-3.75v-9.5a3.75 3.75 0 0 0-3.75-3.75h-9.5zm10.13 2.25a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z",
  facebook:
    "M13.5 22v-8.2h2.8l.42-3.3H13.5V8.4c0-.95.27-1.6 1.64-1.6h1.75V3.85A23 23 0 0 0 14.34 3c-2.53 0-4.26 1.54-4.26 4.38v2.12H7.2v3.3h2.88V22h3.42z",
  youtube:
    "M21.58 7.19a2.98 2.98 0 0 0-2.1-2.1C17.63 4.6 12 4.6 12 4.6s-5.63 0-7.48.5a2.98 2.98 0 0 0-2.1 2.1A31.5 31.5 0 0 0 2 12a31.5 31.5 0 0 0 .42 4.81 2.98 2.98 0 0 0 2.1 2.1c1.85.49 7.48.49 7.48.49s5.63 0 7.48-.5a2.98 2.98 0 0 0 2.1-2.1c.28-1.58.42-3.2.42-4.8s-.14-3.23-.42-4.81zM10.2 15.01V8.99L15.4 12l-5.2 3.01z",
}

function getSocialKey(label = "") {
  const v = label.toLowerCase()
  if (v.includes("whatsapp")) return "whatsapp"
  if (v.includes("telegram")) return "telegram"
  if (v.includes("instagram")) return "instagram"
  if (v.includes("facebook")) return "facebook"
  if (v.includes("youtube")) return "youtube"
  return null
}

export const StaggeredMenu = ({
  position = "right",
  colors = ["#B19EEF", "#5227FF"],
  items = [],
  companyItems = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  menuButtonColor = "#fff",
  openMenuButtonColor = "#fff",
  accentColor = "#5227FF",
  changeMenuColorOnOpen = true,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
}) => {
  const [open, setOpen] = useState(false)
  const [companyQuery, setCompanyQuery] = useState("")
  const openRef = useRef(false)
  const panelRef = useRef(null)
  const preLayersRef = useRef(null)
  const preLayerElsRef = useRef([])
  const lineTopRef = useRef(null)
  const lineMidRef = useRef(null)
  const lineBottomRef = useRef(null)

  const openTlRef = useRef(null)
  const closeTweenRef = useRef(null)
  const spinTweenRef = useRef(null)
  const colorTweenRef = useRef(null)
  const toggleBtnRef = useRef(null)
  const busyRef = useRef(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current
      const preContainer = preLayersRef.current
      const lineTop = lineTopRef.current
      const lineMid = lineMidRef.current
      const lineBottom = lineBottomRef.current
      if (!panel || !lineTop || !lineMid || !lineBottom) return

      const preLayers = preContainer
        ? Array.from(preContainer.querySelectorAll(".sm-prelayer"))
        : []
      preLayerElsRef.current = preLayers

      const offscreen = position === "left" ? -100 : 100
      gsap.set([panel, ...preLayers], { xPercent: offscreen })
      gsap.set([lineTop, lineMid, lineBottom], { transformOrigin: "50% 50%" })
      gsap.set(lineTop, { y: 0, rotate: 0 })
      gsap.set(lineMid, { y: 0, opacity: 1, scaleX: 1 })
      gsap.set(lineBottom, { y: 0, rotate: 0 })
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor })
    })
    return () => ctx.revert()
  }, [menuButtonColor, position])

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return null

    openTlRef.current?.kill()
    closeTweenRef.current?.kill()

    const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"))
    const numberEls = Array.from(
      panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
    )
    const socialTitle = panel.querySelector(".sm-socials-title")
    const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"))

    const layerStates = layers.map((el) => ({
      el,
      start: Number(gsap.getProperty(el, "xPercent")),
    }))
    const panelStart = Number(gsap.getProperty(panel, "xPercent"))

    if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })
    if (numberEls.length) gsap.set(numberEls, { "--sm-num-opacity": 0 })
    if (socialTitle) gsap.set(socialTitle, { opacity: 0 })
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 })

    const tl = gsap.timeline({ paused: true })
    layerStates.forEach((ls, i) => {
      tl.fromTo(
        ls.el,
        { xPercent: ls.start },
        { xPercent: 0, duration: 0.5, ease: "power4.out" },
        i * 0.07
      )
    })

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0)
    const panelDuration = 0.65
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: "power4.out" },
      panelInsertTime
    )

    if (itemEls.length) {
      const itemsStart = panelInsertTime + panelDuration * 0.15
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: "power4.out",
          stagger: { each: 0.1, from: "start" },
        },
        itemsStart
      )
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: "power2.out",
            "--sm-num-opacity": 1,
            stagger: { each: 0.08, from: "start" },
          },
          itemsStart + 0.1
        )
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4
      if (socialTitle) {
        tl.to(
          socialTitle,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          socialsStart
        )
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            stagger: { each: 0.08, from: "start" },
          },
          socialsStart + 0.04
        )
      }
    }

    openTlRef.current = tl
    return tl
  }, [])

  const playOpen = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true
    const tl = buildOpenTimeline()
    if (!tl) {
      busyRef.current = false
      return
    }
    tl.eventCallback("onComplete", () => {
      busyRef.current = false
    })
    tl.play(0)
  }, [buildOpenTimeline])

  const playClose = useCallback(() => {
    openTlRef.current?.kill()
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return

    const all = [...layers, panel]
    closeTweenRef.current?.kill()
    const offscreen = position === "left" ? -100 : 100
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: "power3.in",
      overwrite: "auto",
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"))
        if (itemEls.length) gsap.set(itemEls, { yPercent: 140, rotate: 10 })
        const numberEls = Array.from(
          panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")
        )
        if (numberEls.length) gsap.set(numberEls, { "--sm-num-opacity": 0 })
        const socialTitle = panel.querySelector(".sm-socials-title")
        const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"))
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 })
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 })
        busyRef.current = false
      },
    })
  }, [position])

  const animateIcon = useCallback((opening) => {
    const lineTop = lineTopRef.current
    const lineMid = lineMidRef.current
    const lineBottom = lineBottomRef.current
    if (!lineTop || !lineMid || !lineBottom) return
    spinTweenRef.current?.kill()
    spinTweenRef.current = gsap.timeline({ defaults: { overwrite: "auto" } })
    if (opening) {
      spinTweenRef.current
        .to(lineTop, { y: 6, rotate: 45, duration: 0.3, ease: "power3.out" }, 0)
        .to(lineMid, { opacity: 0, scaleX: 0.3, duration: 0.2, ease: "power2.out" }, 0)
        .to(lineBottom, { y: -6, rotate: -45, duration: 0.3, ease: "power3.out" }, 0)
    } else {
      spinTweenRef.current
        .to(lineTop, { y: 0, rotate: 0, duration: 0.26, ease: "power3.inOut" }, 0)
        .to(lineMid, { opacity: 1, scaleX: 1, duration: 0.2, ease: "power2.inOut" }, 0.04)
        .to(lineBottom, { y: 0, rotate: 0, duration: 0.26, ease: "power3.inOut" }, 0)
    }
  }, [])

  const animateColor = useCallback(
    (opening) => {
      const btn = toggleBtnRef.current
      if (!btn) return
      colorTweenRef.current?.kill()
      if (changeMenuColorOnOpen) {
        colorTweenRef.current = gsap.to(btn, {
          color: opening ? openMenuButtonColor : menuButtonColor,
          delay: 0.18,
          duration: 0.3,
          ease: "power2.out",
        })
      } else {
        gsap.set(btn, { color: menuButtonColor })
      }
    },
    [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]
  )

  const toggleMenu = useCallback(() => {
    const target = !openRef.current
    openRef.current = target
    setOpen(target)
    if (target) {
      onMenuOpen?.()
      playOpen()
    } else {
      onMenuClose?.()
      playClose()
    }
    animateIcon(target)
    animateColor(target)
  }, [animateColor, animateIcon, onMenuClose, onMenuOpen, playClose, playOpen])

  const closeMenu = useCallback(() => {
    if (!openRef.current) return
    openRef.current = false
    setOpen(false)
    onMenuClose?.()
    playClose()
    animateIcon(false)
    animateColor(false)
  }, [animateColor, animateIcon, onMenuClose, playClose])

  const filteredCompanies = companyItems.filter((company) => {
    if (!companyQuery.trim()) return true
    const q = companyQuery.toLowerCase()
    return (
      company.title.toLowerCase().includes(q) ||
      (company.category || "").toLowerCase().includes(q)
    )
  })

  useEffect(() => {
    if (!closeOnClickAway || !open) return undefined
    const handleClickOutside = (event) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target)
      ) {
        closeMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [closeOnClickAway, closeMenu, open])

  return (
    <div
      className={`${className ? `${className} ` : ""}staggered-menu-wrapper`}
      style={accentColor ? { "--sm-accent": accentColor } : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(colors?.length ? colors.slice(0, 4) : ["#1e1e22", "#35353c"]).map((c, i) => (
          <div key={`${c}-${i}`} className="sm-prelayer" style={{ background: c }} />
        ))}
      </div>

      <button
        ref={toggleBtnRef}
        className="sm-toggle"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        onClick={toggleMenu}
        type="button"
      >
        <span className="sm-hamburger" aria-hidden="true">
          <span ref={lineTopRef} className="sm-burger-line sm-burger-line-top" />
          <span ref={lineMidRef} className="sm-burger-line sm-burger-line-mid" />
          <span ref={lineBottomRef} className="sm-burger-line sm-burger-line-bottom" />
        </span>
      </button>

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
            {items?.length ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={`${it.label}-${idx}`}>
                  <a
                    className="sm-panel-item"
                    href={it.link}
                    aria-label={it.ariaLabel}
                    data-index={idx + 1}
                    onClick={closeMenu}
                  >
                    <span className="sm-panel-itemLabel">{it.label}</span>
                    {it.description ? (
                      <span className="sm-panel-itemMeta">{it.description}</span>
                    ) : null}
                  </a>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>

          {companyItems.length > 0 && (
            <section className="sm-companies" aria-label="Explore our companies">
              <div className="sm-companies-head">
                <h3 className="sm-companies-title">Explore Our Companies</h3>
                <p className="sm-companies-count">{companyItems.length} companies</p>
              </div>
              <input
                type="text"
                className="sm-companies-search"
                placeholder="Find a company..."
                value={companyQuery}
                onChange={(event) => setCompanyQuery(event.target.value)}
                aria-label="Search companies"
              />

              <ul className="sm-companies-list" role="list">
                {filteredCompanies.length > 0 ? (
                  filteredCompanies.map((company, index) => (
                    <li key={company.id} className="sm-company-item">
                      <a
                        href={company.link}
                        className="sm-company-link"
                        onClick={closeMenu}
                        aria-label={`Open ${company.title}`}
                      >
                        <span className="sm-company-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="sm-company-copy">
                          <span className="sm-company-name">{company.title}</span>
                          <span className="sm-company-category">{company.category}</span>
                        </span>
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="sm-company-empty">
                    No companies found. Try a different search.
                  </li>
                )}
              </ul>
            </section>
          )}

          {displaySocials && socialItems?.length > 0 && (
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title">Socials</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <li key={`${s.label}-${i}`} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`sm-socials-link ${
                        getSocialKey(s.label) ? `is-${getSocialKey(s.label)}` : ""
                      }`}
                    >
                      {getSocialKey(s.label) ? (
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="sm-socials-icon">
                          <path d={SOCIAL_ICON_PATHS[getSocialKey(s.label)]} />
                        </svg>
                      ) : null}
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  )
}

export default StaggeredMenu
