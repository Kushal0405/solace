import FeatureCard from '../UI/FeatureCard'
import { Grid } from '@material-ui/core'

const Features = () => {
  return (
    <div className="fetaures">
      <Grid container spacing={0} justify="flex-start">
        <Grid item sm={4}>
          <FeatureCard
            logo="/dynamic.svg"
            title="Dynamic"
            description="A Solace-enabled event mesh built is self-routing, self-learning and self-healing, enabling the automated and efficient transmission of events between producer and consumer applications, wherever they run. Dynamic Message Routing creates an “internet of events” that automatically routes events between applications and devices connected to separate event brokers, which can live in different cloud and on-premises environments. It saves operators the hassle of manually configuring connections between producer and consumer applications running in different environments."
          />
          <span className="features-divider"></span>
        </Grid>
        <Grid item sm={4}>
          <FeatureCard
            logo="/open.svg"
            title="Open"
            description="An event mesh built with Solace provides native support for multiple open protocols and APIs, providing unparalleled flexibility to develop modern, cloud-native applications. PubSub+ provides native support for popular open standard protocols and APIs, including REST/HTTP, AMQP 1.0, MQTT, WebSocket and JMS, so developers don’t have to worry about how their app or microservice will communicate with other apps using different protocols/APIs."
          />
          <span className="features-divider"></span>
        </Grid>
        <Grid item sm={4}>
          <FeatureCard
            logo="/simple.svg"
            title="Simple"
            description="PubSub+ makes deploying, managing and monitoring PubSub+ event brokers easy. Users can deploy a hybrid and multi-cloud Solace-enabled event mesh with a click of their mouse, and manage it centrally in the cloud."
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Features
