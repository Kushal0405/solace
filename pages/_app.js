import { Fragment } from 'react'
import '../styles/styles.scss'

const App = (props) => {
  const { Component, pageProps } = props
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App