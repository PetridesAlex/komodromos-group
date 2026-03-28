function Container({ className = "", children }) {
  const classes = className ? `container ${className}` : "container"
  return <div className={classes}>{children}</div>
}

export default Container
