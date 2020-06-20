import { useState } from "react";
import MyPanel from "./ExpansionPanel/MyPanel";

const Panel = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="panel">
      <MyPanel
        onChange={handleChange}
        panelName={"panel1"}
        expanded={expanded}
        summary={"Event Broker"}
        details={
          "At the run-time data movement level, PubSub+ event brokers power an event mesh, a modern messaging layer that can be deployed across every environment and component of the distributed enterprise, to stream events across them all."
        }
      />
      <MyPanel
        onChange={handleChange}
        panelName={"panel2"}
        expanded={expanded}
        summary={"Event Mesh Management"}
        details={
          "To manage the infrastructure, PubSub+ event mesh management and monitoring solutions make it easy to deploy event brokers, create event meshes, and optimize the health and performance of the event-driven system."
        }
      />
      <MyPanel
        onChange={handleChange}
        panelName={"panel3"}
        expanded={expanded}
        summary={"Streaming Integrations"}
        details={
          "At the integration level, PubSub+ APIs and Streaming Integrations provide a variety of on-ramps and off-ramps to the event mesh, including support for open standard protocols and APIs (MQTT, AMQP, JMS, REST) as well as proprietary messaging APIs to connect legacy and modern applications, edge streaming technologies (StreamSets, Striim, Adaptris, ASAPIO, Dell Boomi) to integrate 3rd party applications and connectors for technologies like Apache Kafka."
        }
      />
      <MyPanel
        onChange={handleChange}
        panelName={"panel4"}
        expanded={expanded}
        summary={"Event Protal"}
        details={
          "At the application level, PubSub+ Event Portal gives developers and architects tools to design, describe and discover events within their system, and to see the relationships between applications and events, making event-driven applications and microservices easier to design, deploy and evolve."
        }
      />
      <MyPanel
        onChange={handleChange}
        panelName={"panel5"}
        expanded={expanded}
        summary={"Security"}
        details={
          "PubSub+ Platform enables messaging architectures that deliver consistent multi-protocol client authentication and authorization security across the enterprise, deeply integrated with enterprise authentication services using a minimal set of components."
        }
      />
      <MyPanel
        onChange={handleChange}
        panelName={"panel6"}
        expanded={expanded}
        summary={"Cloud Console"}
        details={
          "All of the above features and capabilities can be accessed through a single Cloud Console with a single log-in, making it easy for architects, developers and other users to work, collaborate and drive the enterprise’s EDA mission forward."
        }
      />
    </div>
  );
};

export default Panel;
