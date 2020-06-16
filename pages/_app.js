import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../styles/styles.scss'

export default function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Talent Excel</title>
        {/* <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <CssBaseline /> {/* Base page with margin 0 */}
      <Component {...pageProps} />
    </Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};