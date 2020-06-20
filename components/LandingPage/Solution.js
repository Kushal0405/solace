import SolutionCard from "../UI/SolutionCard";
import { Grid } from "@material-ui/core";
import { Zoom } from "react-reveal";
const Solution = () => {
  return (
    <div className="solution">
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Zoom>
            <SolutionCard
              image="/hand.svg"
              title="Deep Partnerships"
              details="From PaaS and iPaaS offerings such as Pivotal Platform, SAP Cloud Platform and Dell Boomi to IoT powerhouses such as F5 and all the major cloud providers, we form alliances with companies you know and trust."
              link="Our partnership matter"
            />
          </Zoom>
        </Grid>
        <Grid item sm={6}>
          <Zoom>
            <SolutionCard
              image="/graph.svg"
              title="Interoperable at all levels"
              details="Cloud. Software. Appliance. Our PubSub+ advanced event broker technologies are interoperable, provide a seamless user experience, and can be viewed through a single pane of glass."
              link="Explore our products"
            />
          </Zoom>
        </Grid>
        <Grid item sm={6}>
          <SolutionCard
            image="/lock.svg"
            title="No lock-in"
            details="We support all your favorite open protocols, including AMQP, JMS, MQTT, REST and WebSocket, so you’re never locked into any technology—not even ours."
            link="See them all"
          />
        </Grid>
        <Grid item sm={6}>
          <Zoom>
            <SolutionCard
              image="/arrow.svg"
              title="Versatility and security"
              details="We support publish/subscribe, request/reply, queuing, streaming and message replay in the most demanding, mission-critical environments—and whether it’s on-prem, hybrid cloud or IoT."
              link="See use cases"
            />
          </Zoom>
        </Grid>
      </Grid>
    </div>
  );
};

export default Solution;
