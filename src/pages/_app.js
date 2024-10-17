import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux';
import withRedux from "next-redux-wrapper";
import { GoogleTagManager } from '@next/third-parties/google';

import 'react-responsive-modal/styles.css';
import 'swiper/css/swiper.css';

import { makeStore } from "../store";
import { AppComponent } from '../application/App';
import { ProjectModal } from '../components/modal/project-modal';
import theme from '../application/app.theme';

class MyApp extends App {
  render() {
    const { store, Component, pageProps } = this.props;
    const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

    console.log('Google Tag Id: ', googleTagId);

    return (
      <Provider store={store}>
        <GoogleTagManager gtmId={googleTagId} />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${googleTagId}" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <ThemeProvider theme={theme}>
          <AppComponent
            Component={Component}
            pageProps={pageProps} />
          <ProjectModal />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withRedux(makeStore)(MyApp);