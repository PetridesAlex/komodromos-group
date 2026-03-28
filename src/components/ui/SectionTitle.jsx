function SectionTitle({ label, title, description }) {
  return (
    <header>
      <p className="section-label">{label}</p>
      <h2 className="section-heading">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  )
}

export default SectionTitle
