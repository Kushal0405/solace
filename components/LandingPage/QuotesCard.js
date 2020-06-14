const QuotesCard = ({ image1, image2, quote1, quote2, author, desc, company }) => {
  return (
    <div className="quote-card">
      <div className="quote-left">
        {image1 && <img src={image1} alt="Logo" className="quotecard-logo" />}
      </div>
      <div className="quote-symbol"></div>
      <div className="quote-right">
        {quote1 && <p className="quote-text">{quote1}</p>}
        <br />
        {quote2 && <p className="quote-text">{quote2}</p>}
        <div className="author">
          {image2 && <img src={image2} alt="Author" className="author-img" />}
          <div className="author-desc">
            {author && <h1>{author}</h1>}
            {desc && <p>{desc}</p>}
            {company && <p>{company}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuotesCard
