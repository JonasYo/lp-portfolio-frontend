import React from 'react';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/themes/default';
import GlobalStyle from '@styles/globals.styles';

import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '../src/constants/env';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="shortcut icon" href="favicon.png" type="image/png" />

      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <link
        rel="shortcut icon"
        href="https://fontmeme.com/permalink/210507/2e4607094f728ee424371d3b9a0586ed.png"
      />
    </Head>

    <NextSeo
      title={SITE_TITLE}
      description={SITE_DESCRIPTION}
      canonical={SITE_URL}
      openGraph={{
        url: SITE_URL,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [{ url: SITE_IMAGE }],
        site_name: SITE_NAME,
        locale: 'pt_BR',
      }}
    />

    <GlobalStyle />

    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
