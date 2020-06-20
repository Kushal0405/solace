const Numbers = () => {
  return (
    <div className="numbers">
      <div className="number-holder">
        <div className="number-holder-title">
          <p>By the numbers</p>
        </div>
        <div className="number-cards">
          <div className="number-cards-left">
            <div className="card">
              <p className="card-number">65</p>
              <p className="card-title">billion messages processed by RBC Capital Markets each day</p>
            </div>
            <div className="card">
              <p className="card-number">450</p>
              <p className="card-title">million citizens connected in India</p>
            </div>
          </div>
          <div className="number-cards-right">
            <div className="card">
              <p className="card-number">99.999</p>
              <p className="card-title">% reliability of PubSub+ appliance pair</p>
            </div>
            <div className="card">
              <p className="card-number">28.4</p>
              <p className="card-title">million point-to-point messages/second with fan-out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers
