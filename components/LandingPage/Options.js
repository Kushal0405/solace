import OptionCard from '../UI/OptionCard'
import { Grid } from '@material-ui/core'
import { Fade } from 'react-reveal'
const Options = () => {
  return (
    <div className="option">
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Fade bottom>
          <OptionCard
            image="/cloud.svg"
            title={`PubSub+ Event Broker: Cloud`}
            details="​A developer’s playground. For free and in less than 90 seconds, you can start sending up to 500 messages/second. ​​Get started with web-scale messaging as a service, on-demand in your favorite public clouds."
            link="Learn more"
          /></Fade>
        </Grid>
        <Grid item md={4}>
          <Fade bottom>
          <OptionCard
            image="/software.svg"
            title="PubSub+ Event Broker: Software"
            details="Two editions: Free and Enterprise. Our free IaaS and PaaS-ready 10,000 message/second alternative to open source supports pub/sub, queuing, request/reply and streaming, all with high availability and disaster recovery."
            link="Compare them"
          /></Fade>
        </Grid>
        <Grid item md={4}>
          <Fade bottom>
          <OptionCard
            image="/hardware.svg"
            title="PubSub+ Event Broker: Hardware"
            details="PubSub+ appliances can securely route millions of messages/second with microseconds of latency, all with the low TCO of a turnkey appliance that will likely clear some space in your server room."
            link="Learn more"
          /></Fade>
        </Grid>
      </Grid>
    </div>
  )
}

export default Options