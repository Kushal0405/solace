import Panel from '../components/LandingPage/Panel'
import Layout from '../components/Layout/Layout'
import TransparentCenter from '../components/LandingPage/TransparentCenter'
import QuotesCard from '../components/UI/QuotesCard'
import TransparentCard from '../components/UI/TransparentCard'
import IntroCard from '../components/LandingPage/IntroCard'
import Features from '../components/LandingPage/Features'
import Clients from '../components/LandingPage/Clients'
import Partners from '../components/LandingPage/Partners'
import Solution from '../components/LandingPage/Solution'
import Options from '../components/LandingPage/Options'
import TopSection from '../components/LandingPage/TopSection';
import Footer from '../components/LandingPage/TopSection/footr';
import Organization from '../components/LandingPage/organization'
import { Fade } from 'react-reveal'

const Index = () => {
  return (

    
    <div >
      <div> <TopSection/></div>
     
    <div>
     <div style={{position:'relative', top:'120px'}}>
       <Organization/>
     </div>
      <div className="top"> {/*Parallex important class*/}
        {/* <Layout>
          <div className="top-title">
            The complete event management platform.
          </div>
          <div className="top-content row">
            <div className="top-left col-sm-12 col-md-6">
              <IntroCard />
            </div>
            <div className="top-right col-sm-12 col-md-6">
              <Panel />
            </div>
          </div>
        </Layout> */}
          <div className="wrapper">
            <div className="intro-title">
              The complete event management platform.
          </div>
            <div className="intro-card">
              <IntroCard />
            </div>
            <div className="intro-panel">
              <Panel />
            </div>
          </div>
        </div>
        <section className="parallax"> {/*Parallex important class*/}
          <div className="parallax-inner">
            <TransparentCenter />
            <div className="mid-way attached-bottom">
              <QuotesCard
                quote1={"65 billion messages a day. That’s 750,000 messages a second, 24 hours a day. That’s huge volume, and we do all that completely seamlessly without any data loss.”"}
                quote2={"Used by 6 of the 10 world’s biggest investment banks and 3 of the top 6 FX trading banks, Solace PubSub+ meets the diverse data movement needs of banks, capital markets participants, and exchanges."}
                image1="/whiterbc_huge.svg"
                image2="/author1.jpg"
                author="JOSHUA CARROLL"
                desc="Managing Director, Global Head of Shared Application Services"
                company="RBC CAPITAL MARKETS"
                imgClassName="rbc-logo"
              />
            </div>
          </div>
        </section>
        <div className="bottom" style={{ paddingBottom: '40px' }}> {/*Parallex important class*/}
          <p className="bottom-title p-top">How does Solace enable an event mesh?</p>
          <Layout width="md">
            <TransparentCard>
              <span className="small-text">
                Solace enables an event mesh with PubSub+, our advanced event brokers. You create an event mesh with Solace by deploying PubSub+ in any/all your environments (public/private clouds, on premises), and then connecting them, at which point all applications, microservices, cloud services, SaaS, iPaaS and legacy systems connected to an event broker in the mesh will be instantly and continuously connected with one another.
            </span>
            </TransparentCard>
          </Layout>
          <QuotesCard
            quote1={"Events will become the life blood of the modern enterprise. Businesses that will lead in innovation, client experience, and efficiency will be those that enable events to flow freely and easily across every environment and component of the digital enterprise.”"}
            image1="/solace_green.svg"
            image2="/author2.jpg"
            author="SHAWN MCALLISTER"
            desc="Chief Technology Officer"
            company="SOLACE"
            imgClassName="solace-logo"
          />
          <p className="bottom-title p-top-all">What makes a Solace-enabled event mesh unique?</p>
          <Features />
          <div className="button btn-lg">Learn more about event mesh</div>
          <div className="bottom-section-dark">
            <Clients />
            <p className="bottom-title">The only unified and tomorrow-proof solution</p>

            {/* Grid 1*/}
            <Solution />

          </div>
          <p className="bottom-title">“It didn’t even break a sweat.”</p>
          <p className="small-text">VoiceBase is an AI-powered speech analytics company with a customer base that includes Twilio, AWS, and Tableau. When their VP of engineering, Jeff Shukis, built a prototype that simulated 2.7 billion minutes of processing per month, “several times what YouTube takes in,” only PubSub+ could handle the demand.
        </p>
          <div className="image-centering">
            <img src="https://play.vidyard.com/1Fov7X3fbs4f531JyriVbh.jpg" alt="Video Thumbnail" />
          </div>
          <div className="button btn-md">See more use cases</div>

          {/* Next */}
          <div className="bottom-section-dark">
            <Partners />
            <p className="bottom-title">One platform. Three options.​</p>

            {/* Grid 2 */}
            <Options />

          </div>
          <p className="bottom-title">Proven in the most demanding use cases</p>
          <div className="image-centering">
            <img src="https://play.vidyard.com/n86sLadmBwxW9hVY12Gbgi.jpg" alt="Video Thumbnail" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index