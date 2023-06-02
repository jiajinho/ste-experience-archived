import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Leva } from 'leva';

import '../globals.css';
import locale from '@/locale';
import fonts from '@/fonts';
import useToggleEnv from '@/hooks/useToggleEnv';
import useResponsive from '@/hooks/useResponsive';
import useEnvStore from '@/stores/useEnvStore';

import FacebookPixel from '@/components/head/FacebookPixel';
import GoogleAnalytic from '@/components/head/GoogleAnalytic';

const Stats = dynamic(() => import('@react-three/drei').then(l => l.Stats), { ssr: false });

const App = styled.main`
  --font-benguiat: ${fonts.benguiat.style.fontFamily};
  --font-inter: ${fonts.inter.style.fontFamily};
  --font-chalkiez: ${fonts.chalkiez.style.fontFamily};
  --font-maax: ${fonts.maax.style.fontFamily};
`;

export default ({ Component, pageProps }: AppProps) => {
  const env = useEnvStore(state => state.env);

  useResponsive();
  useToggleEnv();

  return (
    <>
      {env === "development" && <Stats />}

      <Leva
        collapsed
        hidden={env !== "development"}
        theme={{ sizes: { numberInputMinWidth: "50px" } }}
      />

      <Head>
        <title>{locale.global.title}</title>
        <meta name="title" content={locale.global.title} />
        <meta name="description" content={locale.global.description} />

        <meta name="keywords" content={`
          viewership,
          attractions,
          stranger things,
          things to do in singapore,
          things to do,
          places to visit sg,
          singapore attractions,
          places to go to singapore,
          things to do in singapore this weekend,
          singapore tourist attractions,
          activities to do in singapore,
          things to do this weekend,
          fun things to do in singapore,
          tourist attractions,
          indoor activities singapore,best places to visit in singapore,
          things to do near me,
          fun places in singapore,
          things to do in singapore for couples,
          singapore sightseeing,
          things to do at night in singapore,
          fun activities in singapore,
          couple activities singapore,
          best things to do in singapore,
          things to do in changi airport,
          attractions near me,
          outdoor activities singapore,
          events in singapore this weekend,
          things to do on the gold coast,
          places to go in singapore with friends,
          night activities singapore,
          fun places to go in singapore,
          top things to do in singapore,
          things to do with friends in singapore
          `.trim().replace(/\s+/g, ' ')
        } />

        {/* Favicon - https://realfavicongenerator.net/ */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="black" />

        {/* Domain verification */}
        <meta name="google-site-verification" content="lSvXw1z8GqnyJGLTQXx72fC-cVbTFCsrQL9LexKGY7k" />
        <meta name="facebook-domain-verification" content={process.env.NEXT_PUBLIC_META_DOMAIN_ID} />
      </Head>

      <App>
        <FacebookPixel />
        <GoogleAnalytic />

        <Component {...pageProps} />
      </App>
    </>
  );
}