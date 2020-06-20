const IntroCard = () => {
  return (
    <div className="card-simple">
      <p className="card-title">Cloud Console</p>
      {/* top */}
      <div className="card-top">
        <div className="wrapper inner-card card-left">
          <p className="inner-card-title">EVENT PORTAL</p>
          {/* Inner card division */}
          <div className="card-details">
            <p className="inner-title">Design & Governance</p>
            <span className="divider"></span>
            <p className="inner-title">Developer Tools</p>
          </div>
        </div>
        <div className="wrapper inner-card card-right">
          <p className="inner-card-title">EVENT MESH MANAGEMENT</p>
          {/* Inner card division */}
          <div className="card-details">
            <div>
              <p className="inner-title">Provisioning</p>
              <p className="inner-details">Deployment & Operations</p>
            </div>
            <span className="divider"></span>
            <div>
              <p className="inner-title">Monitoring</p>
              <p className="inner-details">Alerts & Dashboards</p>
            </div>
          </div>
        </div>
      </div>

      {/* center */}
      <div className="wrapper inner-card card-center">
        <p className="inner-card-title">EVENT BROKER</p>
        {/* Inner card division */}
        <div className="card-details">
          <div>
            <p className="inner-title">Software</p>
            <p className="inner-details">Free & Enterprise</p>
          </div>
          <span className="divider"></span>
          <div>
            <p className="inner-title">As a Service</p>
            <p className="inner-details">Public Cloud & VPC</p>
          </div>
          <span className="divider"></span>
          <div>
            <p className="inner-title">Appliance</p>
            <p className="inner-details">3530 & 3560</p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="wrapper inner-card card-bottom">
        <p className="inner-card-title">STREAMING APIs & INTEGRATION</p>
        {/* Inner card division */}
        <div className="card-details">
          <p className="inner-details">Messaging APIs</p>
          <span className="divider"></span>
          <p className="inner-details">Open APIs & Protocols</p>
          <span className="divider"></span>
          <p className="inner-details">Partner Integrations</p>
          <span className="divider"></span>
          <p className="inner-details">Connectors</p>
        </div>
      </div>
      <div className="wrapper">
        <p className="card-title dark">Security</p>
        <div className="card-details">
          <p className="inner-title dark">Authentication</p>
          <span className="divider dark"></span>
          <p className="inner-title dark">Authorization</p>
          <span className="divider dark"></span>
          <p className="inner-title dark">Encryption</p>
        </div>
      </div>
    </div >
  )
}

export default IntroCard
