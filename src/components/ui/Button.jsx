function Button({ children, href = "#contact", type = "button" }) {
  if (href) {
    return (
      <a className="btn" href={href}>
        {children}
      </a>
    )
  }

  return (
    <button className="btn" type={type}>
      {children}
    </button>
  )
}

export default Button
