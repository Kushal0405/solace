const FeatureCard = ({ logo, title, description }) => {
  return (
    <div className="feature-card">
      <img src={logo} alt="Feature Card Image" className="feature-card-logo" title={title} />
      <p className="feature-card-title">{title}</p>
      <p className="feature-card-description">{description}</p>
    </div>
  )
}

export default FeatureCard
