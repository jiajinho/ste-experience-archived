import styled from 'styled-components';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Stats } from '@react-three/drei';
import { Leva } from 'leva';

import '../globals.css';
import locale from 'locale';
import fonts from 'fonts';
import useToggleEnv from 'hooks/useToggleEnv';
import useEnvStore from 'stores/useEnvStore';
import useResponsive from 'hooks/useResponsive';
import useCursorPointer from 'hooks/useCursorPointer';
import useThemeSong from 'hooks/useThemeSong';
import useLoadMerch from 'hooks/useLoadMerch';
import useExitBrowser from 'hooks/useExitBrowser';

const App = styled.main`
  --font-benguiat: ${fonts.benguiat.style.fontFamily};
  --font-inter: ${fonts.inter.style.fontFamily};
  --font-chalkiez: ${fonts.chalkiez.style.fontFamily};
  --font-maax: ${fonts.maax.style.fontFamily};
`;

export default ({ Component, pageProps }: AppProps) => {
  const env = useEnvStore(state => state.env);

  useThemeSong();
  useResponsive();
  useToggleEnv();
  useCursorPointer();
  useLoadMerch();
  useExitBrowser();

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

        {/* https://realfavicongenerator.net/ */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <App>
        <Component {...pageProps} />
      </App>
    </>
  );
}