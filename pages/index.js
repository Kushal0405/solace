import Panel from '../components/LandingPage/Panel'
import Layout from '../components/Layout/Layout'
import TransparentCenter from '../components/LandingPage/TransparentCenter'
import QuotesCard from '../components/LandingPage/QuotesCard'
import TransparentCard from '../components/LandingPage/TransparentCard/TransparentCard'

const Index = () => {
  return (
    <div>
      <div className="top"> {/*Parallex important class*/}
        <Layout>
          <div className="top-title">
            The complete event management platform.
          </div>
          <div className="top-content">
            <div className="top-left">
              <p>This is sample text.</p>
            </div>
            <div className="top-right">
              <Panel />
            </div>
          </div>
        </Layout>
      </div>
      <section className="parallax"> {/*Parallex important class*/}
        <div className="parallax-inner">
          <Layout width="md">
            <TransparentCenter />
          </Layout>
        </div>
      </section>
      <div className="bottom"> {/*Parallex important class*/}
        <div className="mid-way">
          <Layout>
            <QuotesCard
              quote1={"65 billion messages a day. That’s 750,000 messages a second, 24 hours a day. That’s huge volume, and we do all that completely seamlessly without any data loss.”"}
              quote2={"Used by 6 of the 10 world’s biggest investment banks and 3 of the top 6 FX trading banks, Solace PubSub+ meets the diverse data movement needs of banks, capital markets participants, and exchanges."}
              image1="/whiterbc_huge.svg"
              image2="/author1.jpg"
              author="JOSHUA CARROLL"
              desc="Managing Director, Global Head of Shared Application Services"
              company="RBC CAPITAL MARKETS"
            />
          </Layout>
        </div>
        <p className="bottom-title">How does Solace enable an event mesh?</p>
        <Layout width="md">
          {/* <span className="">Solace enables an event mesh with PubSub+, our advanced event brokers. You create an event mesh with Solace by deploying PubSub+ in any/all your environments (public/private clouds, on premises), and then connecting them, at which point all applications, microservices, cloud services, SaaS, iPaaS and legacy systems connected to an event broker in the mesh will be instantly and continuously connected with one another.</span> */}
          <TransparentCard>
            <span className="small-text">
              Solace enables an event mesh with PubSub+, our advanced event brokers. You create an event mesh with Solace by deploying PubSub+ in any/all your environments (public/private clouds, on premises), and then connecting them, at which point all applications, microservices, cloud services, SaaS, iPaaS and legacy systems connected to an event broker in the mesh will be instantly and continuously connected with one another.
            </span>
          </TransparentCard>
        </Layout>
        <Layout>
          <QuotesCard
            quote1={"Events will become the life blood of the modern enterprise. Businesses that will lead in innovation, client experience, and efficiency will be those that enable events to flow freely and easily across every environment and component of the digital enterprise.”"}
            image1="/solace_green.svg"
            image2="/author2.jpg"
            author="SHAWN MCALLISTER"
            desc="Chief Technology Officer"
            company="SOLACE"
          />
        </Layout>
      </div>
    </div>
  )
}

export default Index