const TitledSection = ({ name, title, subtitle, children }) => {
  return (
    <div id={name}>
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      {children}
    </div>
  )
}

export default TitledSection
