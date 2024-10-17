// @ts-nocheck
import React, { useEffect } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import Head from "next/head";
import { GoogleTagManager } from '@next/third-parties/google';

import GlobalStyle from "./global-styles";
import { HeaderLayout } from "../layouts/header";
import { IApp } from "./app.interfaces";
import { IReduxStates } from "../store/types";
import { setScreenSize } from "../store/actions/uiActions";
// @ts-ignore
const myIcon = "/static/imgs/close-tag.png";
import theme from "./app.theme";

const mapStateToProps = (store: IReduxStates) => ({
  smoothScroll: store.uiState.smoothScroll,
});

const connector = connect(mapStateToProps);

const App = ({
  Component,
  pageProps,
  smoothScroll,
}: IApp & ConnectedProps<typeof connector>) => {
  const dispatch = useDispatch();

  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID;

  useEffect(() => {
    dispatch(
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      })
    );
    window.addEventListener("resize", () => {
      dispatch(
        setScreenSize({
          screenWidth: window.innerWidth,
          screenHeight: window.innerHeight,
        })
      );
    });
  }, []);

  console.log('Google Tag Id: ', googleTagId);

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
    >
      <GlobalStyle smoothScroll={smoothScroll} />
      <GoogleTagManager gtmId={googleTagId} />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href={myIcon} />
        <meta
          name="description"
          content="Faço seu site do começo ao fim, utilizando tecnologias atuais e com ótimo suporte!"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@600&display=swap"
          rel="stylesheet"
        ></link>
        <meta
          name="keywords"
          content="portfolio,desenvolvedor,developer,javascript,react,nodejs,node,sites,freelancer,fullstack,frontend,backend"
        />
        <meta
          name="author"
          content="Valdery Alves Paes Júnior <valdery.jur@gmail.com> (http://valderyalves.com)"
        />
        <meta name="theme-color" content={theme.green.primary} />
        <title>Valdery - desenvolvedor de sites</title>

        <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${googleTagId}`}
          height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>

        {/* Start Meta Pixel Code */}
        {/* <script id="fb-pixel" src="/fb-pixel.js" />
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=503632712515712&ev=PageView&noscript=1"
        /></noscript> */}
        {/* End Meta Pixel Code */}

        {/* Google tag (gtag.js) */}
        {/* <script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=AW-16729447971" />
        <script id="gtag-init">
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag("js", new Date());

          gtag('config', 'AW-16729447971');
        </script> */}
        {/* End Google tag (gtag.js) */}
      </Head>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
    </div>
  );
};

export const AppComponent = connector(App);
