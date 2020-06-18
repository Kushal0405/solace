import { Grid } from '@material-ui/core'

const QuotesCard = ({ image1, image2, quote1, quote2, author, desc, company, imgClassName }) => {
  return (
    <div className="quote-card">
      <div className="quote-left">
        {image1 && <img src={image1} alt="Logo" className={`quotecard-logo ${imgClassName}`} />}
      </div>
      <div className="quote-symbol"></div>
      <div className="quote-right">
        {quote1 && <p className="quote-text">{quote1}</p>}
        <br />
        {quote2 && <p className="quote-text">{quote2}</p>}
        <div className="author">
          {image2 && <img src={image2} alt="Author" className="author-img" />}
          <div className="author-desc">
            {author && <p className="author-name">{author}</p>}
            {desc && <p>{desc}</p>}
            {company && <p>{company}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

QuotesCard.defaultProps = {
  imgClassName: ""
}

export default QuotesCard
