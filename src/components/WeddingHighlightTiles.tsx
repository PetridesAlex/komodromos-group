import { Link } from 'react-router-dom'
import { weddingHighlightTiles } from '../data/weddingHighlightTiles'

function TileContent({
  kicker,
  title,
  titleEl,
  image,
  decorativeImage,
}: {
  kicker: string
  title: string
  titleEl: string
  image: string
  decorativeImage?: boolean
}) {
  return (
    <>
      <div className="wedding-highlight-tiles__media">
        <img
          src={image}
          alt={decorativeImage ? '' : title}
          loading="lazy"
          decoding="async"
        />
        <div className="wedding-highlight-tiles__scrim" aria-hidden />
      </div>
      <div className="wedding-highlight-tiles__caption">
        <p className="wedding-highlight-tiles__kicker">{kicker}</p>
        <p className="wedding-highlight-tiles__title">{title}</p>
        <p className="wedding-highlight-tiles__title-el" lang="el">
          {titleEl}
        </p>
      </div>
    </>
  )
}

export default function WeddingHighlightTiles() {
  return (
    <section
      className="wedding-section wedding-highlight-tiles"
      aria-labelledby="wedding-tiles-heading"
    >
      <div className="container">
        <div className="wedding-highlight-tiles__head">
          <p className="wedding-highlight-tiles__eyebrow">Discover Wedding Sky</p>
          <h2 id="wedding-tiles-heading" className="wedding-highlight-tiles__h2">
            What we craft with you
          </h2>
          <p className="wedding-highlight-tiles__intro">
            Eight entry points into how we work — from destinations and production to packages,
            love stories, and your first conversation with the team.
          </p>
          <p className="wedding-highlight-tiles__intro-el" lang="el">
            Οκτώ σημεία για να γνωρίσετε τον τρόπο μας — από τους χώρους και την παραγωγή μέχρι τα
            πακέτα, τις ιστορίες ζευγαριών και την πρώτη σας συνάντηση με την ομάδα.
          </p>
        </div>
        <div className="wedding-highlight-tiles__grid">
          {weddingHighlightTiles.map((tile) => {
            const isLink = Boolean(tile.contact || tile.hashHref)
            const body = (
              <TileContent
                kicker={tile.kicker}
                title={tile.title}
                titleEl={tile.titleEl}
                image={tile.image}
                decorativeImage={isLink}
              />
            )

            if (tile.contact) {
              return (
                <Link
                  key={tile.id}
                  to="/contact"
                  state={{ serviceInterest: 'Wedding Services' }}
                  className="wedding-highlight-tiles__tile wedding-highlight-tiles__tile--link"
                  aria-label={`${tile.title} — open contact page`}
                >
                  {body}
                </Link>
              )
            }

            if (tile.hashHref) {
              return (
                <a
                  key={tile.id}
                  href={tile.hashHref}
                  className="wedding-highlight-tiles__tile wedding-highlight-tiles__tile--link"
                  aria-label={`${tile.title} — jump to section`}
                >
                  {body}
                </a>
              )
            }

            return (
              <article key={tile.id} className="wedding-highlight-tiles__tile">
                {body}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
