import Panel from '../components/LandingPage/Panel'
import Layout from '../components/Layout/Layout'
import TransparentCenter from '../components/LandingPage/TransparentCenter'
import QuotesCard from '../components/LandingPage/QuotesCard'

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
          <Layout>
            <QuotesCard />
          </Layout>
        </div>
      </section>
      <div className="bottom"></div> {/*Parallex important class*/}
    </div>
  )
}

export default Index