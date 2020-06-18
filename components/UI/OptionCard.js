const OptionCard = ({ image, title, details, link }) => {
  return (
    <div className="option-card">
      <img src={image} alt="" className="option-image" />
      <p className="option-title">{title}</p>
      <p className="option-details">{details}</p>
      <p className="button option-link">{link}</p>
    </div>
  )
}

export default OptionCard
