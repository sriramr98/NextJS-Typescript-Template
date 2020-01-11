import React from 'react';
import NextApp from 'next/app';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as firebase from 'firebase/app';

import { ProvideAuth } from 'utils/hooks/useAuth';
import theme from 'utils/theme';

export default class App extends NextApp {
  componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        appID: process.env.FIREBASE_APP_ID,
      });
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ProvideAuth>
            <Component {...pageProps} />
          </ProvideAuth>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
